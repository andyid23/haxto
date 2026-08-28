import { LitElement, html, css, nothing } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./timer-kuis.js";
import "./kuis-ledakan.js";
import "./quiz-user-auth.js";

/**
 * `latihan-kuis`
 *
 * Halaman contoh latihan terpandu: materi → kuis berwaktu → pesan "nilai
 * terkirim". Menyatukan <kuis-ledakan> (kuis yang ada) dan <timer-kuis>
 * (hitung mundur). Saat waktu habis (event `timer-kuis-expired`), kuis
 * dikunci otomatis (`_selesaiKuis`) lalu materi & kuis disembunyikan dan
 * ditampilkan pesan "Selamat! Nilai sudah terkirim".
 *
 * Nilai dikirim ke Google Apps Script (`apps-script-url`) oleh <kuis-ledakan>
 * lewat action=logActivity, sehingga tercatat di Google Spreadsheet.
 *
 * @element latihan-kuis
 */
export class LatihanKuis extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() {
    return "latihan-kuis";
  }

  static get properties() {
    return {
      ...super.properties,
      appsScriptUrl: { type: String, attribute: "apps-script-url", reflect: true },
      spreadsheetUrl: { type: String, attribute: "spreadsheet-url", reflect: true },
      duration: { type: Number, attribute: "duration", reflect: true },
      judulMateri: { type: String, attribute: "judul-materi", reflect: true },
      teksMateri: { type: String, attribute: "teks-materi", reflect: true },
      materiUrl: { type: String, attribute: "materi-url", reflect: true },
      materiFile: { type: String, attribute: "materi-file", reflect: true },
      coverImage: { type: String, attribute: "cover-image", reflect: true },
      judulKuis: { type: String, attribute: "judul-kuis", reflect: true },
      questions: { type: Array, attribute: "questions", reflect: true },
      studentId: { type: String, attribute: "student-id", reflect: true },
      studentName: { type: String, attribute: "student-name", reflect: true },
      studentNis: { type: String, attribute: "student-nis", reflect: true },
      studentAbsen: { type: String, attribute: "student-absen", reflect: true },
      studentKelas: { type: String, attribute: "student-kelas", reflect: true },
      kdMateri: { type: String, attribute: "kd-materi", reflect: true },
      pesanWaktuHabis: { type: String, attribute: "pesan-waktu-habis", reflect: true },
      pesanNilaiTerkirim: { type: String, attribute: "pesan-nilai-terkirim", reflect: true },
      labelMulai: { type: String, attribute: "label-mulai", reflect: true },
      showSheetLink: { type: Boolean, attribute: "show-sheet-link", reflect: true },
      soalFileUrl: { type: String, attribute: "soal-file-url", reflect: true },
      allowRetake: { type: Boolean, attribute: "allow-retake", reflect: true },
      maxRetake: { type: Number, attribute: "max-retake", reflect: true },
      mode: { type: String, attribute: "mode", reflect: true },
      hidePauseRestart: { type: Boolean, attribute: "hide-pause-restart", reflect: true },
      shuffleQuestions: { type: Boolean, attribute: "shuffle-questions", reflect: true },
      shuffleChoices: { type: Boolean, attribute: "shuffle-choices", reflect: true },
      kategori: { type: String, attribute: "kategori", reflect: true },
      hideConfetti: { type: Boolean, attribute: "hide-confetti", reflect: true },
      hideAnswers: { type: Boolean, attribute: "hide-answers", reflect: true },
      hideScore: { type: Boolean, attribute: "hide-score", reflect: true },
      timerAutostart: { type: Boolean, attribute: "timer-autostart", reflect: true },
      _mulai: { state: true },
      _selesai: { state: true },
      _skor: { state: true },
      _habisWaktu: { state: true },
      _pesan: { state: true },
      _bestSkor: { state: true },
      _pernahIkut: { state: true },
      _attemptKe: { state: true },
      _terkunci: { state: true },
      _resumeRemaining: { state: true },
    };
  }

  constructor() {
    super();
    this.appsScriptUrl = "";
    this.spreadsheetUrl = "";
    this.duration = 300;
    this.judulMateri = "Materi Pembelajaran";
    this.teksMateri =
      "Baca materi di bawah ini dengan saksama sebelum mengerjakan kuis. Waktu pengerjaan kuis dibatasi oleh timer; saat waktu habis, kuis akan dikunci dan nilai otomatis terkirim.";
    this.materiUrl = "";
    this.materiFile = "";
    this.coverImage = "";
    this.judulKuis = "Evaluasi Kuis Interaktif";
    this.questions = undefined;
    this.studentId = "";
    this.studentName = "";
    this.studentNis = "";
    this.studentAbsen = "";
    this.studentKelas = "";
    this.kdMateri = "";
    this.pesanWaktuHabis = "⏰ Waktu habis! Kuis dikunci & dinilai otomatis.";
    this.pesanNilaiTerkirim = "🎉 Selamat! Nilai Anda sudah terkirim ke spreadsheet.";
    this.labelMulai = "▶️ Mulai";
    this.showSheetLink = false;
    this.soalFileUrl = "";
    this.allowRetake = false;
    this.maxRetake = 0;
    this.mode = "siswa";
    this.hidePauseRestart = true;
    this.shuffleQuestions = false;
    this.shuffleChoices = false;
    this.kategori = "sumatif_lm";
    this.hideConfetti = false;
    this.hideAnswers = false;
    this.hideScore = false;
    this.timerAutostart = true;
    this._mulai = false;
    this._selesai = false;
    this._skor = null;
    this._habisWaktu = false;
    this._pesan = "";
    this._bestSkor = null;
    this._pernahIkut = false;
    this._attemptKe = 0;
    this._terkunci = false;
    this._resumeRemaining = null;
    this._onAuthLogin = this._onAuthLogin.bind(this);
    this._onAuthLogout = this._onAuthLogout.bind(this);
    this.t = {
      ...this.t,
      bacaMateri: "🔗 Buka URL Materi",
      unduhMateri: "📎 Unduh File Materi",
    };
  }

  connectedCallback() {
    super.connectedCallback();
    // Daftarkan ke HAX editor agar latihan-kuis + propertinya muncul di panel
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const store = globalThis.HaxStore.requestAvailability();
      if (store && !store.elementList[LatihanKuis.tag]) {
        store.elementList[LatihanKuis.tag] = LatihanKuis.haxProperties;
      }
    }
    // Sinkronkan identitas siswa dari <quiz-user-auth> (event global) ke properti
    // agar nilai terikat Student ID sebelum kuis dimulai.
    globalThis.addEventListener("quiz-user-login", this._onAuthLogin);
    globalThis.addEventListener("quiz-user-logout", this._onAuthLogout);
    // T (persistent lock / best score): baca sesi lokal lalu muat status kuis.
    this._loadSession();
    this._muatStatusKuis();
  }

  disconnectedCallback() {
    globalThis.removeEventListener("quiz-user-login", this._onAuthLogin);
    globalThis.removeEventListener("quiz-user-logout", this._onAuthLogout);
    super.disconnectedCallback();
  }

  _onAuthLogin(e) {
    const d = (e && e.detail) || {};
    // T: reset dulu agar siswa BERBEDA (re-login di perangkat bersama) tak mewarisi state.
    this._bestSkor = null;
    this._pernahIkut = false;
    this._selesai = false;
    this._habisWaktu = false;
    this._skor = null;
    this._mulai = false;
    this._terkunci = false;
    this._resumeRemaining = null;
    this.studentId = d.studentId || "";
    this.studentName = d.nama || "";
    this.studentNis = d.nis || "";
    this.studentAbsen = d.absen || "";
    this.studentKelas = d.kelas || "";
    this._loadAttemptCounter();
    this._muatStatusKuis();
  }

  _onAuthLogout() {
    this._bestSkor = null;
    this._pernahIkut = false;
    this._selesai = false;
    this._habisWaktu = false;
    this._skor = null;
    this._mulai = false;
    this._terkunci = false;
    this._resumeRemaining = null;
    this._attemptKe = 0;
    this.studentId = "";
    this.studentName = "";
    this.studentNis = "";
    this.studentAbsen = "";
    this.studentKelas = "";
  }

  /** Baca sesi siswa dari localStorage (TTL 24j) — agar cek status jalan saat reload. */
  _loadSession() {
    try {
      const data = JSON.parse(globalThis.localStorage.getItem("quiz_user_session"));
      if (!data || !data.studentId) return;
      if (data.expiresAt && Date.now() > data.expiresAt) {
        globalThis.localStorage.removeItem("quiz_user_session");
        return;
      }
      this.studentId = data.studentId || "";
      this.studentName = data.nama || "";
      this.studentNis = data.nis || "";
      this.studentAbsen = data.absen || "";
      this.studentKelas = data.kelas || "";
    } catch (_) {
      // abaikan
    }
    this._loadAttemptCounter();
    // Jangan langsung resume timer di sini — biarkan _muatStatusKuis() yang
    // mengatur _mulai setelah lock-state pasti (hindari race condition).
  }

  /** Baca counter attempt ter-submit dari localStorage (per studentId+kdMateri). */
  _attemptKey() {
    return `latihan_kuis_attempt_${this.studentId}_${this.kdMateri}`;
  }

  _loadAttemptCounter() {
    if (!this.maxRetake || !this.studentId || !this.kdMateri) return;
    try {
      const v = globalThis.localStorage.getItem(this._attemptKey());
      this._attemptKe = parseInt(v, 10) || 0;
    } catch (_) {
      this._attemptKe = 0;
    }
  }

  _saveAttemptCounter() {
    if (!this.maxRetake || !this.studentId || !this.kdMateri) return;
    try {
      globalThis.localStorage.setItem(this._attemptKey(), String(this._attemptKe));
    } catch (_) {
      // abaikan
    }
  }

  _timerKey() {
    return `latihan_kuis_time_${this.studentId}_${this.kdMateri}`;
  }

  _simpanWaktuMulai() {
    if (!this.studentId || !this.kdMateri) return;
    try {
      globalThis.localStorage.setItem(
        this._timerKey(),
        JSON.stringify({ start: Date.now(), duration: this.duration }),
      );
    } catch (_) {}
  }

  _bacaSisaWaktu() {
    if (!this.studentId || !this.kdMateri) return null;
    try {
      const d = JSON.parse(globalThis.localStorage.getItem(this._timerKey()) || "null");
      if (!d) return null;
      const sisa = d.duration - Math.floor((Date.now() - d.start) / 1000);
      return sisa > 0 ? sisa : 0;
    } catch (_) {
      return null;
    }
  }

  _hapusWaktuMulai() {
    try {
      globalThis.localStorage.removeItem(this._timerKey());
    } catch (_) {}
  }

  _cobaResumeTimer() {
    const sisa = this._bacaSisaWaktu();
    const kuota = this.maxRetake === 0 || this._attemptKe < this.maxRetake + 1;
    if (sisa && sisa > 0 && kuota) {
      this._mulai = true;
      this._resumeRemaining = sisa;
    }
  }


  /** T: muat status kuis dari sheet (pernah ikut + nilai terbaik) via getQuizLock. */
  _muatStatusKuis() {
    if (!this.appsScriptUrl || !this.studentId || !this.kdMateri) {
      this._cobaResumeTimer();
      return;
    }
    const u = `${this.appsScriptUrl}${this.appsScriptUrl.includes("?") ? "&" : "?"}action=getQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`;
    return fetch(u, { method: "GET", mode: "cors" })
      .then((r) => r.json())
      .then((j) => {
        if (!j) return;
        this._terkunci = false;
        this._pernahIkut = typeof j.best === "number" && j.best != null;
        this._bestSkor = typeof j.best === "number" ? j.best : null;
        if (!this.allowRetake && this._pernahIkut) {
          this._terkunci = true;
          this._selesai = false;
          this._skor = this._bestSkor;
          this._hapusWaktuMulai();
          this._mulai = false;
          this._resumeRemaining = null;
        }
      })
      .catch(() => {
        // Gagal → biarkan attempt (graceful), jangan kunci salah.
      })
      .finally(() => {
        // Hanya resume timer jika quiz belum terkunci & belum selesai.
        if (!this._terkunci && !this._selesai) {
          this._cobaResumeTimer();
        }
        this.requestUpdate();
      });
  }

  _ulangiKuis() {
    this._selesai = false;
    this._terkunci = false;
    this._kunci = false;
    this._resumeRemaining = null;
    this._hapusWaktuMulai();
    this._habisWaktu = false;
    this._skor = null;
    this._muatStatusKuis();
    this._mulaiLatihan(); // langsung mulai ulang kuis (retry)
  }

  updated(changed) {
    super.updated(changed);
    if (changed.has("soalFileUrl") && this.soalFileUrl) {
      this._muatSoalDariFile(this.soalFileUrl);
    }
  }

  async _muatSoalDariFile(url) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error("HTTP " + r.status);
      const d = await r.json();
      if (!Array.isArray(d)) throw new Error("Bukan array JSON");
      this.questions = d;
      this._pesan = "";
    } catch (e) {
      this._pesan = "Gagal memuat file soal: " + e.message;
    }
  }

  _onWaktuHabis() {
    const kuis = this.shadowRoot && this.shadowRoot.querySelector("kuis-ledakan");
    if (kuis && kuis._screen !== "result" && typeof kuis._selesaiKuis === "function") {
      kuis._selesaiKuis();
    }
    this._selesai = true;
    this._habisWaktu = true;
    this._resumeRemaining = null;
    this._hapusWaktuMulai();
  }

  _onKuisLog(e) {
    if (e.detail && e.detail.payload && typeof e.detail.payload.score === "number") {
      this._skor = e.detail.payload.score;
      this._selesai = true;
      this._resumeRemaining = null;
      this._hapusWaktuMulai();
      // L: hitung attempt ter-submit (bukan klik Ulangi) agar reload-trick tak bobol batas.
      if (this.maxRetake) {
        this._attemptKe++;
        this._saveAttemptCounter();
      }
      this._muatStatusKuis(); // T: refresh nilai terbaik dari sheet (menangkap attempt baru)
    }
  }

  async _mulaiLatihan() {
    if (!this.studentId) {
      // H1: kunci Mulai bila belum login — jangan buka kuis tanpa identitas.
      this.requestUpdate();
      return;
    }
    this._terkunci = false;
    this._mulai = true;
    this._simpanWaktuMulai();
    await this.updateComplete;
    const kuis = this.shadowRoot && this.shadowRoot.querySelector("kuis-ledakan");
    const timer = this.shadowRoot && this.shadowRoot.querySelector("timer-kuis");
    // H1: pakai _onStartClick (cek login di kuis-ledakan) bukan _startQuiz langsung.
    if (kuis && typeof kuis._onStartClick === "function") kuis._onStartClick();
    if (timer && typeof timer.start === "function") timer.start();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-primary, system-ui, sans-serif); }
        .wrap {
          max-width: 920px; margin: 0 auto; padding: var(--ddd-spacing-4);
          display: grid; gap: var(--ddd-spacing-6);
        }
        .materi-card {
          border: 1px solid var(--ddd-theme-polaris-border, #e0e0e0);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          background: linear-gradient(180deg, rgba(103,80,164,0.05), transparent);
        }
        .materi-card h2 { color: var(--ddd-theme-primary); margin: 0 0 var(--ddd-spacing-2) 0; }
        .materi-card p { color: var(--ddd-theme-secondary); line-height: 1.6; }
        .cover { width: 100%; max-height: 260px; object-fit: cover; border-radius: var(--ddd-radius-lg); margin-bottom: var(--ddd-spacing-4); }
        .materi-links { display: flex; flex-wrap: wrap; gap: var(--ddd-spacing-3); margin-top: var(--ddd-spacing-4); }
        .materi-links a {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border, #e0e0e0);
          color: var(--ddd-theme-primary); text-decoration: none; font-size: var(--ddd-font-size-m);
        }
        .materi-links a:hover { background: rgba(103,80,164,0.08); }
        .btn-mulai {
          width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold); border: none; border-radius: var(--ddd-radius-md);
          background: var(--ddd-theme-primary, #6750a4); color: var(--ddd-theme-on-primary); cursor: pointer;
          font-family: var(--ddd-font-primary, system-ui, sans-serif);
        }
        .btn-mulai:hover { background: var(--ddd-theme-accent, #7a5fc4); }
        .auth-hint { text-align: center; color: var(--ddd-theme-secondary); font-size: var(--ddd-font-size-m); margin: var(--ddd-spacing-3) 0 0; }
        .selesai-card {
          text-align: center; border: 1px solid var(--ddd-theme-success);
          border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-8);
          background: var(--ddd-theme-default-surface);
        }
        .selesai-card .waktu { font-size: var(--ddd-font-size-l); color: var(--ddd-theme-error); margin-bottom: var(--ddd-spacing-2); }
        .selesai-card .kirim { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-default-text); }
        .selesai-card .kirim.warn { color: var(--ddd-theme-error); }
        .selesai-card .skor { margin: var(--ddd-spacing-4) 0; font-size: var(--ddd-font-size-l); }
        .selesai-card a {
          display: inline-block; margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          background: var(--ddd-theme-primary, #6750a4); color: var(--ddd-theme-on-primary); border-radius: var(--ddd-radius-md);
          text-decoration: none; font-weight: var(--ddd-font-weight-bold);
        }
        .err-chip {
          background: var(--ddd-theme-warning-light, #fef3c7); border: 1px solid var(--ddd-theme-warning, #fcd34d); color: var(--ddd-theme-warning-text, #92400e);
          padding: var(--ddd-spacing-3); border-radius: var(--ddd-radius-md);
          margin-bottom: var(--ddd-spacing-4);
        }
        .skor-best {
          margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-success, #2e7d32);
          background: var(--ddd-theme-success-light, #e8f5e9);
          display: inline-block;
        }
      `,
    ];
  }

  render() {
    if (this._terkunci && this.mode !== "guru") {
      return html`
        <div class="wrap">
          <div class="selesai-card" role="alert">
            <div style="font-size:2.5rem">🔒</div>
            <p class="kirim warn">Kuis terkunci. Hubungi guru untuk mengulang.</p>
            ${this._bestSkor != null
              ? html`<div class="skor">Nilai terbaik Anda: <strong>${this._bestSkor}%</strong></div>`
              : nothing}
          </div>
        </div>
      `;
    }

    if (this._selesai) {
      return html`
        <div class="wrap">
          <div class="selesai-card" role="status">
            ${this._habisWaktu ? html`<div class="waktu">${this.pesanWaktuHabis}</div>` : nothing}
            ${this.studentId
              ? html`<div class="kirim">${this.pesanNilaiTerkirim}</div>`
              : html`<div class="kirim warn">⚠️ Nilai belum tersimpan karena belum login</div>`}
            ${this._skor != null ? html`<div class="skor">Skor Anda: <strong>${this._skor}%</strong></div>` : nothing}
            ${this.allowRetake && (this.maxRetake === 0 || this._attemptKe < this.maxRetake + 1)
              ? html`<button class="btn-mulai" @click=${this._ulangiKuis}>🔁 Ulangi Kuis</button>`
              : nothing}
            ${this.showSheetLink && this.spreadsheetUrl
              ? html`<a href="${this.spreadsheetUrl}" target="_blank" rel="noopener">📊 Buka Spreadsheet Nilai</a>`
              : nothing}
          </div>
        </div>
      `;
    }

    return html`
      <div class="wrap">
        <section class="materi-card">
          ${this.coverImage ? html`<img class="cover" src="${this.coverImage}" alt="Cover materi" />` : nothing}
          <h2>📖 ${this.judulMateri}</h2>
          <p>${this.teksMateri}</p>
          <div class="materi-links">
            ${this.materiUrl ? html`<a href="${this.materiUrl}" target="_blank" rel="noopener">${this.t.bacaMateri}</a>` : nothing}
            ${this.materiFile ? html`<a href="${this.materiFile}" target="_blank" rel="noopener" download>${this.t.unduhMateri}</a>` : nothing}
          </div>
          ${this._pernahIkut && this._bestSkor != null
            ? html`<p class="skor-best">⭐ Nilai terbaik Anda: <strong>${this._bestSkor}%</strong></p>`
            : nothing}
        </section>

        ${!this._mulai
          ? (this.studentId && (this.maxRetake === 0 || this._attemptKe < this.maxRetake + 1)
              ? html`<button class="btn-mulai" @click="${this._mulaiLatihan}">${this.labelMulai}</button>`
              : (document.querySelector("quiz-user-auth")
                  ? html`<p class="auth-hint">🔐 Silakan login lewat form di atas agar nilai tersimpan ke Spreadsheet.</p>`
                  : html`
                      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>
                      <p class="auth-hint">🔐 Silakan login dulu agar nilai tersimpan ke Spreadsheet.</p>
                    `))
          : html`
              ${this._pesan ? html`<p class="err-chip">${this._pesan}</p>` : nothing}
              <timer-kuis
                duration="${this._resumeRemaining != null ? this._resumeRemaining : this.duration}"
                ?hide-controls="${this.hidePauseRestart}"
                ?autostart="${this.timerAutostart}"
                @timer-kuis-expired="${this._onWaktuHabis}">
              </timer-kuis>

              <kuis-ledakan
                @dasbor-kuis-log="${this._onKuisLog}"
                .appsScriptUrl="${this.appsScriptUrl}"
                .judul="${this.judulKuis}"
                .questions="${this.questions}"
                .studentId="${this.studentId}"
                .studentName="${this.studentName}"
                .studentNis="${this.studentNis}"
                .studentAbsen="${this.studentAbsen}"
                .studentKelas="${this.studentKelas}"
                .kdMateri="${this.kdMateri}"
                .lockAfterComplete="${!this.allowRetake}"
                .mode="${this.mode}"
                .hidePauseRestart="${this.hidePauseRestart}"
                .shuffleQuestions="${this.shuffleQuestions}"
                .shuffleChoices="${this.shuffleChoices}"
                .kategori="${this.kategori}"
                .hideConfetti="${this.hideConfetti}"
                .hideAnswers="${this.hideAnswers}"
                .hideScore="${this.hideScore}">
              </kuis-ledakan>
            `}
      </div>
    `;
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Latihan Kuis Berwaktu",
        description: "Materi + kuis ledakan + timer; saat waktu habis, materi & kuis sembunyi dan tampil pesan nilai terkirim",
        icon: "icons:timer",
        color: "purple",
        tags: ["Education", "Quiz", "Timer", "Materi"],
      },
      settings: {
        configure: [
          {
            property: "appsScriptUrl",
            title: "URL Apps Script (kirim nilai)",
            inputMethod: "textfield",
            description: "Web App Google Apps Script untuk mengirim skor ke Spreadsheet",
          },
          {
            property: "spreadsheetUrl",
            title: "URL Spreadsheet Nilai (lihat)",
            inputMethod: "textfield",
            description: "Link Google Spreadsheet berisi rekap nilai siswa",
          },
          {
            property: "kdMateri",
            title: "Kode Materi (kd-materi)",
            inputMethod: "textfield",
            description: "Kode/topik kuis; diteruskan ke <kuis-ledakan> agar rekap per topik tersimpan.",
          },
          {
            property: "allowRetake",
            title: "Boleh Diulang (retake)",
            inputMethod: "boolean",
            description: "false = ulangan (terkunci setelah 1x), true = latihan (boleh ulang). Attribute hadir = true; tidak ada attribute = false (default).",
          },
          {
            property: "maxRetake",
            title: "Batas Ulang (max-retake)",
            inputMethod: "number",
            description: "Total attempt = 1 asli + maxRetake. Counter disimpan di localStorage per siswa+materi.",
          },
          {
            property: "mode",
            title: "Mode Tampilan",
            inputMethod: "select",
            description: "siswa (default) vs guru (lihat tombol buka kunci).",
            options: {
              siswa: "Siswa - Evaluasi Mandiri",
              guru: "Guru - Pantauan",
            },
          },
          {
            property: "hidePauseRestart",
            title: "Sembunyikan Tombol Timer",
            inputMethod: "boolean",
            description: "Menyembunyikan tombol jeda/mulai/ulang di timer dan tombol Ulangi di layar hasil. Default true.",
          },
          {
            property: "timerAutostart",
            title: "Timer Mulai Otomatis",
            inputMethod: "boolean",
            description: "true = timer langsung berjalan saat kuis dimulai. Default true.",
          },
          {
            property: "shuffleQuestions",
            title: "Acak Urutan Soal",
            inputMethod: "boolean",
            description: "Mengacak urutan soal setiap kali kuis dimulai.",
          },
          {
            property: "shuffleChoices",
            title: "Acak Pilihan Jawaban",
            inputMethod: "boolean",
            description: "Mengacak urutan pilihan jawaban setiap kali kuis dimulai.",
          },
          {
            property: "kategori",
            title: "Kategori Kuis",
            inputMethod: "select",
            description: "sumatif → skor masuk rapor (db_asesmen); formatif → progres saja, tidak masuk rapor (db_aktivitas).",
            options: {
              sumatif_lm: "Sumatif (Rapor LM)",
              formatif: "Formatif (Progres)",
            },
            default: "sumatif_lm",
          },
          {
            property: "hideConfetti",
            title: "Nonaktifkan Konfeti",
            inputMethod: "boolean",
            description: "Tidak menampilkan efek konfeti saat jawaban benar.",
          },
          {
            property: "hideAnswers",
            title: "Sembunyikan Jawaban",
            inputMethod: "boolean",
            description: "Tidak menampilkan jawaban benar/salah setelah menjawab.",
          },
          {
            property: "hideScore",
            title: "Sembunyikan Nilai",
            inputMethod: "boolean",
            description: "Menyembunyikan angka skor berjalan di layar soal dan lingkaran nilai akhir.",
          },
          {
            property: "duration",
            title: "Durasi Kuis (detik)",
            inputMethod: "number",
            description: "Lama waktu pengerjaan kuis sebelum dikunci otomatis",
            default: 300,
          },
          {
            property: "judulMateri",
            title: "Judul Materi",
            inputMethod: "textfield",
          },
          {
            property: "teksMateri",
            title: "Teks Materi",
            inputMethod: "textarea",
          },
          {
            property: "materiUrl",
            title: "URL Materi",
            inputMethod: "textfield",
          },
          {
            property: "materiFile",
            title: "File Materi",
            inputMethod: "haxupload",
          },
          {
            property: "coverImage",
            title: "Gambar Sampul Materi",
            inputMethod: "image",
          },
          {
            property: "judulKuis",
            title: "Judul Kuis",
            inputMethod: "textfield",
          },
          {
            property: "pesanWaktuHabis",
            title: "Pesan Waktu Habis",
            inputMethod: "textfield",
          },
          {
            property: "pesanNilaiTerkirim",
            title: "Pesan Nilai Terkirim",
            inputMethod: "textarea",
          },
          {
            property: "labelMulai",
            title: "Teks Tombol Mulai",
            inputMethod: "textfield",
            description: "Teks tombol untuk memulai latihan/kuis (default: '▶️ Mulai').",
          },
          {
            property: "showSheetLink",
            title: "Tampilkan Link Spreadsheet",
            inputMethod: "boolean",
            description: "Hanya untuk view aman/guru. Default OFF.",
          },
          {
            property: "questions",
            title: "Soal (JSON)",
            inputMethod: "code-editor",
            description: "Array soal AKM/PG. Format lama {q,a,b,c,k} didukung.",
          },
          {
            property: "soalFileUrl",
            title: "Upload File Soal (JSON)",
            inputMethod: "haxupload",
            description: "File .json soal; otomatis di-parse & menimpa soal inline.",
          },
        ],
      },
      saveOptions: { unsetAttributes: [] },
    };
  }
}

globalThis.customElements.define(LatihanKuis.tag, LatihanKuis);
