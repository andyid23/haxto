/**
 * `anti-cheat-quiz` — modul deteksi & persistence anti-cheat untuk kuis.
 *
 * Bertanggung jawab penuh pada:
 *  - Deteksi visibilitychange, blur/focus, keluar fullscreen, copy/paste, select, contextmenu.
 *  - Counter tab-switch, visibility-change, window blur/focus.
 *  - Persistensi counter ke localStorage (key antiCheatKey).
 *  - Antrean audit lokal (debounced telemetri, flush sekali di akhir sesi).
 *  - Threshold tab-switch → event 'cheat'.
 *  - Generate session token.
 *
 * MODUL INI TIDAK MENGE-RENAM UI ATAU LOG SESSION KE BACKEND — itu urusan
 * host (latihan-kuis.js). Modul hanya mengekstrak *deteksi + state*.
 * Modul ini tidak mengandalkan Lit; dapat dipakai oleh elemen web apa saja.
 */
export class AntiCheatQuiz {
  /**
   * @param {object} host — shadow host / elemen yang memakai anti-cheat
   * @param {object} [opts]
   * @param {number} [opts.tabSwitchThreshold=3]
   */
  constructor(host, opts = {}) {
    this.host = host;
    this.tabSwitchThreshold = opts.tabSwitchThreshold || 3;

    // counter
    this.tabSwitchCount = 0;
    this.visibilityChangeCount = 0;
    this.windowBlurCount = 0;
    this.windowFocusCount = 0;

    // status
    this.warningCount = 0;
    this.cheatLogged = false;
    this.forceChoiceDialog = false;
    this.tabSwitchWarning = false;
    this.fullscreenWarning = false;

    // session
    this.sessionToken = '';

    // waktu mulai (referensi ke host, di-set host saat start)
    this.waktuMulai = null;

    // bind handler sekali
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._onWindowBlur = this._onWindowBlur.bind(this);
    this._onWindowFocus = this._onWindowFocus.bind(this);
    this._onFullscreenChange = this._onFullscreenChange.bind(this);
    this._preventCopy = this._preventCopy.bind(this);
    this._preventPaste = this._preventPaste.bind(this);
    this._preventContext = this._preventContext.bind(this);
    this._preventSelect = this._preventSelect.bind(this);
    this._handleWarningKeydown = this._handleWarningKeydown.bind(this);
  }

  /* ===== API publik: studentId & kdMateri diperlukan untuk key localStorage ===== */
  get studentId() { return this.host.studentId || ''; }
  get kdMateri()  { return this.host.kdMateri  || ''; }
  get appsScriptUrl() { return this.host.appsScriptUrl || ''; }
  get kategori() { return this.host.kategori || 'sumatif_lm'; }
  get duration() { return this.host.duration || 300; }

  /* ===== localStorage key helpers (persist di sesi berikutnya juga) ===== */
  _antiCheatKey() {
    return `latihan_kuis_anticheat_${this.studentId}_${this.kdMateri}`;
  }

  _timerKey() {
    return `latihan_kuis_time_${this.studentId}_${this.kdMateri}`;
  }

  _auditQueueKey() {
    return `kuisAuditQueue_${this.studentId}_${this.kdMateri}`;
  }

  /* ===== persistence counter ===== */
  saveState() {
    if (!this.studentId || !this.kdMateri) return;
    try {
      const data = {
        windowBlurCount: this.windowBlurCount || 0,
        windowFocusCount: this.windowFocusCount || 0,
        tabSwitchCount: this.tabSwitchCount || 0,
        visibilityChangeCount: this.visibilityChangeCount || 0,
        timestamp: Date.now(),
      };
      globalThis.localStorage.setItem(this._antiCheatKey(), JSON.stringify(data));
    } catch (_) {}
  }

  restoreState() {
    if (!this.studentId || !this.kdMateri) return;
    try {
      const data = JSON.parse(globalThis.localStorage.getItem(this._antiCheatKey()));
      if (data) {
        this.windowBlurCount = data.windowBlurCount || 0;
        this.windowFocusCount = data.windowFocusCount || 0;
        this.tabSwitchCount = data.tabSwitchCount || 0;
        this.visibilityChangeCount = data.visibilityChangeCount || 0;
      }
    } catch (_) {}
  }

  clearState() {
    if (!this.studentId || !this.kdMateri) return;
    try { globalThis.localStorage.removeItem(this._antiCheatKey()); } catch (_) {}
  }

  /* ===== timer persistence (dipakai host & modul) ===== */
  simpanWaktuMulai(waktuMulai) {
    if (!this.studentId || !this.kdMateri) return;
    try {
      globalThis.localStorage.setItem(
        this._timerKey(),
        JSON.stringify({ start: waktuMulai, duration: this.duration }),
      );
    } catch (_) {}
  }

  bacaSisaWaktu() {
    if (!this.studentId || !this.kdMateri) return 0;
    try {
      const d = JSON.parse(globalThis.localStorage.getItem(this._timerKey()) || 'null');
      if (!d) return 0;
      const sisa = d.duration - Math.floor((Date.now() - d.start) / 1000);
      return sisa > 0 ? sisa : 0;
    } catch (_) { return 0; }
  }

  hapusWaktuMulai() {
    try { globalThis.localStorage.removeItem(this._timerKey()); } catch (_) {}
  }

  cekWaktuSerakah() {
    const sisa = this.bacaSisaWaktu();
    if (sisa > 60) {
      this._dispatchSelf('time-manipulation', {
        sisaWaktu: sisa,
        tabSwitchCount: this.tabSwitchCount || 0,
        visibilityChanges: this.visibilityChangeCount || 0,
        message: 'Timer expired but client still has significant time remaining (>60s). Possible causes: browser throttling (normal) or time manipulation (cheating).',
        timestamp: Date.now(),
      });
      return true;
    }
    return false;
  }

  /* ===== audit queue (debounced telemetri lokal) ===== */
  _bacaAuditQueue() {
    try {
      const d = JSON.parse(globalThis.localStorage.getItem(this._auditQueueKey()) || 'null');
      return d && d.versi === 1 ? d : null;
    } catch (_) { return null; }
  }

  _simpanAuditQueue(d) {
    try { globalThis.localStorage.setItem(this._auditQueueKey(), JSON.stringify(d)); } catch (_) {}
  }

  enqueueAudit(tipe, payload = {}) {
    if (!this.studentId || !this.kdMateri) return null;
    const sekarang = Date.now();
    let q = this._bacaAuditQueue();
    if (!q || q.state === 'done') {
      q = {
        id_log: this._buatIdLog(),
        studentId: this.studentId,
        kdMateri: this.kdMateri,
        snapshot: {
          mulai_detik: this.waktuMulai || sekarang,
          durasi_detik: 0,
          total_restart: 0,
          tab_switch: 0,
        },
        events: [],
        state: 'draft',
        versi: 1,
      };
    }
    q.events = q.events || [];
    q.events.push({ t: tipe, ts: sekarang, d: payload });
    if (q.events.length > 200) q.events.splice(0, q.events.length - 200);
    if (tipe === 'tab_switch') {
      q.snapshot.tab_switch = (q.snapshot.tab_switch || 0) + 1;
    }
    if (tipe === 'restart') {
      q.snapshot.total_restart = (q.snapshot.total_restart || 0) + 1;
      q.snapshot.mulai_detik = sekarang;
    }
    this._simpanAuditQueue(q);
    return q;
  }

  enqueueTabSwitch() {
    this.enqueueAudit('tab_switch', { timestamp: new Date().toISOString() });
  }

  _buatIdLog() {
    try {
      const buf = new Uint8Array(8);
      globalThis.crypto.getRandomValues(buf);
      let hex = '';
      buf.forEach((b) => (hex += b.toString(16).padStart(2, '0')));
      return `LOG-${Date.now()}-${hex.toUpperCase()}`;
    } catch (e) {
      return `LOG-${Date.now()}-${Math.random().toString(36).substr(2, 10).toUpperCase()}`;
    }
  }

  bacaAuditSingkat() {
    const q = this._bacaAuditQueue();
    if (!q) return { total_restart: 0, tab_switch: 0, durasi_detik: 0 };
    const durasi =
      q.snapshot.durasi_detik ||
      (q.snapshot.mulai_detik
        ? Math.max(0, Math.floor((Date.now() - q.snapshot.mulai_detik) / 1000))
        : 0);
    return {
      total_restart: q.snapshot.total_restart || 0,
      tab_switch: q.snapshot.tab_switch || 0,
      durasi_detik: durasi,
    };
  }

  finalisasiAudit() {
    const q = this._bacaAuditQueue();
    if (!q) return;
    if (q.snapshot.mulai_detik) {
      q.snapshot.durasi_detik = Math.max(0, Math.floor((Date.now() - q.snapshot.mulai_detik) / 1000));
    }
    q.state = 'ready';
    this._simpanAuditQueue(q);
  }

  selesaiAudit() {
    const q = this._bacaAuditQueue();
    if (q) {
      q.state = 'done';
      this._simpanAuditQueue(q);
    }
  }

  /* ===== session token ===== */
  generateSessionToken() {
    try {
      const buf = new Uint8Array(16);
      globalThis.crypto.getRandomValues(buf);
      let hex = '';
      buf.forEach((b) => (hex += b.toString(16).padStart(2, '0')));
      return `${Date.now()}-${hex}`;
    } catch (e) {
      return `sess-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
  }

  /* ===== fullscreen ===== */
  requestFullscreen() {
    try {
      const el = this.host.shadowRoot || this.host;
      if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen().catch(() => {});
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    } catch (_) {}
  }

  /* ===== event helpers ===== */
  _dispatchSelf(type, detail) {
    this.host.dispatchEvent(
      new CustomEvent('anti-cheat-event', {
        detail: { type, ...detail },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /* ===== lifecycle: attach / detach global listeners ===== */
  attach() {
    globalThis.addEventListener('visibilitychange', this._onVisibilityChange);
    globalThis.addEventListener('blur', this._onWindowBlur, true);
    globalThis.addEventListener('focus', this._onWindowFocus, true);
    globalThis.addEventListener('fullscreenchange', this._onFullscreenChange);
    globalThis.addEventListener('mozfullscreenchange', this._onFullscreenChange);
    globalThis.addEventListener('webkitfullscreenchange', this._onFullscreenChange);
    globalThis.addEventListener('MSFullscreenChange', this._onFullscreenChange);
    this.host.addEventListener('copy', this._preventCopy);
    this.host.addEventListener('paste', this._preventPaste);
    this.host.addEventListener('contextmenu', this._preventContext);
    this.host.addEventListener('selectstart', this._preventSelect);
    document.addEventListener('keydown', this._handleWarningKeydown);
  }

  detach() {
    globalThis.removeEventListener('visibilitychange', this._onVisibilityChange);
    globalThis.removeEventListener('blur', this._onWindowBlur, true);
    globalThis.removeEventListener('focus', this._onWindowFocus, true);
    globalThis.removeEventListener('fullscreenchange', this._onFullscreenChange);
    globalThis.removeEventListener('mozfullscreenchange', this._onFullscreenChange);
    globalThis.removeEventListener('webkitfullscreenchange', this._onFullscreenChange);
    globalThis.removeEventListener('MSFullscreenChange', this._onFullscreenChange);
    this.host.removeEventListener('copy', this._preventCopy);
    this.host.removeEventListener('paste', this._preventPaste);
    this.host.removeEventListener('contextmenu', this._preventContext);
    this.host.removeEventListener('selectstart', this._preventSelect);
    document.removeEventListener('keydown', this._handleWarningKeydown);
  }

  /* ===== detection handlers ===== */
  _onVisibilityChange() {
    this.visibilityChangeCount = (this.visibilityChangeCount || 0) + 1;
    const mulai = this.host._mulai && !this.host._selesai;
    if (document.visibilityState === 'hidden' && mulai) {
      const remaining = this.host._bacaSisaWaktu ? this.host._bacaSisaWaktu() : this.bacaSisaWaktu();
      if (remaining > 0) {
        try {
          const key = `latihan_kuis_remaining_${this.studentId}_${this.kdMateri}`;
          globalThis.localStorage.setItem(key, String(remaining));
        } catch (_) {}
      }
      this.tabSwitchCount = (this.tabSwitchCount || 0) + 1;
      this.windowBlurCount = (this.windowBlurCount || 0) + 1;
      this.tabSwitchWarning = true;
      this.enqueueTabSwitch();
      this._dispatchSelf('tab-switch', { count: this.tabSwitchCount });

      const kuis = this.host.shadowRoot && this.host.shadowRoot.querySelector('kuis-ledakan');
      if (kuis && typeof kuis._saveAttempt === 'function') { try { kuis._saveAttempt(); } catch (_) {} }
      this.saveState();

      this.warningCount = (this.warningCount || 0) + 1;
      if (this.warningCount >= this.tabSwitchThreshold && !this.forceChoiceDialog) {
        this.forceChoiceDialog = true;
        this._dispatchSelf('force-choice', { warningCount: this.warningCount });
      }
    } else if (document.visibilityState === 'visible' && mulai) {
      try {
        const key = `latihan_kuis_remaining_${this.studentId}_${this.kdMateri}`;
        const remainingStr = globalThis.localStorage.getItem(key);
        if (remainingStr) {
          const remaining = parseInt(remainingStr, 10);
          if (!isNaN(remaining) && remaining > 0) {
            this.host._resumeRemaining = remaining;
            globalThis.localStorage.removeItem(key);
            this.host.requestUpdate();
          }
        }
      } catch (_) {}
      this.windowFocusCount = (this.windowFocusCount || 0) + 1;
      this.saveState();
      this._cekThresholdCurang();
    }
  }

  _onWindowBlur() {
    const mulai = this.host._mulai && !this.host._selesai;
    if (mulai && document.hidden) {
      this.tabSwitchWarning = true;
      this._dispatchSelf('tab-warning');
    }
  }

  _onWindowFocus() {
    const mulai = this.host._mulai && !this.host._selesai;
    if (mulai && (this.windowBlurCount || 0) > 0) {
      this.tabSwitchWarning = false;
      this._dispatchSelf('tab-warning-clear');
      this._cekThresholdCurang();
    }
  }

  _cekThresholdCurang() {
    const threshold = this.tabSwitchThreshold;
    const count = this.tabSwitchCount || 0;
    if (count >= threshold && !this.cheatLogged) {
      this.cheatLogged = true;
      this._dispatchSelf('cheat', {
        count,
        timestamp: new Date().toISOString(),
        studentId: this.studentId,
        kdMateri: this.kdMateri,
        threshold,
      });
    }
  }

  _onFullscreenChange() {
    const fullscreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    if (!fullscreen) {
      const mulai = this.host._mulai && !this.host._selesai;
      if (mulai) {
        this.fullscreenWarning = true;
        this._dispatchSelf('fullscreen-exit', {
          timestamp: new Date().toISOString(),
          waktuMulai: this.waktuMulai,
        });
      }
    } else {
      this.fullscreenWarning = false;
      this._dispatchSelf('fullscreen-enter');
    }
  }

  _handleWarningKeydown(e) {
    if (e.key === 'Escape' && this.tabSwitchWarning) {
      this.tabSwitchWarning = false;
      this._dispatchSelf('tab-warning-dismiss');
    } else if (e.key === 'Escape' && this.fullscreenWarning) {
      this.fullscreenWarning = false;
      this._dispatchSelf('fullscreen-dismiss');
    }
  }

  /* ===== copy / paste / select / context menu prevention ===== */
  _preventCopy(e) { this._guardAndPrevent('copy', e); }
  _preventPaste(e)  { this._guardAndPrevent('paste', e); }
  _preventContext(e) { this._guardAndPrevent('contextmenu', e); }
  _preventSelect(e)  { this._guardAndPrevent('selectstart', e); }

  _guardAndPrevent(eventType, e) {
    const mulai = this.host._mulai && !this.host._selesai;
    if (mulai) {
      e.preventDefault();
      e.stopPropagation();
      this._dispatchSelf('copy-paste-attempt', { eventType, timestamp: new Date().toISOString() });
    }
  }

  /* ===== reset counters (dipanggil host saat start/retry) ===== */
  resetCounters() {
    this.tabSwitchCount = 0;
    this.visibilityChangeCount = 0;
    this.windowBlurCount = 0;
    this.windowFocusCount = 0;
    this.warningCount = 0;
    this.cheatLogged = false;
    this.forceChoiceDialog = false;
    this.tabSwitchWarning = false;
    this.fullscreenWarning = false;
    this.clearState();
  }

  /* ===== convenience: isQuizActive (host uses _mulai/_selesai) ===== */
  get isActive() {
    return !!(this.host._mulai && !this.host._selesai);
  }
}
