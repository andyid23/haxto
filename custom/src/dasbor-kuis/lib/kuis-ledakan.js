import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import confetti from "canvas-confetti";
import "./timer-kuis.js";
import "./timer-kuis.js";

const DEFAULT_QUESTIONS = [
  { q: "Apa kegunaan utama metode connectedCallback pada LitElement?", a: "Menginisialisasi nilai variabel dasar", b: "Mendeteksi elemen saat berhasil diinjeksikan ke struktur DOM", c: "Menghapus event listener global", k: "b" },
  { q: "Bagaimana cara mencegah timeout 6 menit pada Google Apps Script?", a: "Menggunakan penulisan masal berbasis batch I/O", b: "Menulis ke banyak sheet terpisah", c: "Memperbanyak rumus formula cell", k: "a" }
];

export class ModularQuiz extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "kuis-ledakan"; }

  static get haxProperties() {
    return {
      api: "1",
      canScale: true,
      canPosition: false,
      canEditSource: true,
      type: "element",
      designSystem: {
        accent: true,
        primary: true,
        card: true,
        text: true,
        designTreatment: false,
      },
      gizmo: {
        title: "Kuis Ledakan (Evaluasi Mandiri)",
        description: "Kuis interaktif evaluasi mandiri yang mengunci skor dan mengirim aktivitas ke dasbor Apps Script.",
        icon: "icons:question-answer",
        color: "cyan",
        tags: ["Kuis", "Evaluasi", "Interaktif"],
        meta: { author: "andyinformatika23-hash" },
      },
      settings: {
        configure: [
          {
            property: "judul",
            title: "Judul Kuis",
            description: "Judul yang tampil di kartu kuis.",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "appsScriptUrl",
            title: "URL Web App Google Apps Script",
            description: "URL /exec Apps Script untuk mengirim hasil kuis (action=logActivity).",
            inputMethod: "textfield",
          },
          {
            property: "kdMateri",
            title: "Kode Topik / Pertemuan",
            description: "Kode materi yang tercatat pada log aktivitas.",
            inputMethod: "textfield",
          },
          {
            property: "mode",
            title: "Mode Tampilan",
            description: "Mode guru menampilkan tombol ulang; mode siswa fokus mengerjakan.",
            inputMethod: "select",
            options: {
              guru: "Guru - Pantauan",
              dosen: "Dosen - Bimbingan",
              siswa: "Siswa - Evaluasi Mandiri",
            },
          },
          {
            property: "questions",
            title: "Soal (JSON)",
            description: "Array soal AKM: PG {question, choices, correctIndex}, PG kompleks {correctAnswers:[0,2]}, PGK {type:'pgk', statements:[{text,answer}]}, menjodohkan {type:'matching', leftItems, rightItems, correctPairs}, isian {type:'shortAnswer', acceptedAnswers}, gambar soal {image}, pilihan bergambar {text,image}. Skor: PGK 1 poin per pernyataan benar, menjodohkan 1 poin per pasangan benar. Format lama {q,a,b,c,k} tetap didukung.",
            inputMethod: "code-editor",
          },
          {
            property: "shuffleChoices",
            title: "Acak Pilihan Jawaban",
            description: "Mengacak urutan pilihan jawaban setiap kali kuis dimulai",
            inputMethod: "boolean",
          },
          {
            property: "hideAnswers",
            title: "Sembunyikan Jawaban",
            description: "Tidak menampilkan jawaban benar/salah setelah menjawab",
            inputMethod: "boolean",
          },
          {
            property: "hideScore",
            title: "Sembunyikan Nilai",
            description: "Menyembunyikan angka skor berjalan di layar soal dan lingkaran nilai akhir (pesan selesai tetap tampil)",
            inputMethod: "boolean",
          },
          {
            property: "hideConfetti",
            title: "Nonaktifkan Konfeti",
            description: "Tidak menampilkan efek konfeti saat jawaban benar",
            inputMethod: "boolean",
          },
          {
            property: "timerDuration",
            title: "Durasi Timer (detik)",
            description: "0 = tanpa timer. >0 menampilkan <timer-kuis> & auto-submit saat habis.",
            inputMethod: "number",
            default: 0,
          },
          {
            property: "timerAutostart",
            title: "Timer Mulai Otomatis",
            inputMethod: "boolean",
            default: true,
          },
        ],
        advanced: [],
        developer: [],
      },
      saveOptions: {
        wipeSlot: false,
        unsetAttributes: [
          "_screen",
          "_currentIdx",
          "_selected",
          "_answered",
          "_score",
          "_advanceTimer",
          "_editing",
          "_tempQuestions",
          "_editingIndex",
          "_tempQuestionText",
          "_tempQuestionImage",
          "_tempQuestionType",
          "_tempQuestionPoints",
          "_tempChoice0",
          "_tempChoice1",
          "_tempChoice2",
          "_tempChoice3",
          "_tempChoiceImage0",
          "_tempChoiceImage1",
          "_tempChoiceImage2",
          "_tempChoiceImage3",
          "_tempCorrectIndex",
          "_tempCorrectAnswers",
          "_tempLeftItems",
          "_tempRightItems",
          "_tempCorrectPairs",
          "_tempAcceptedAnswers",
          "_tempAcceptedStatements",
          "_tempStatements",
          "_editorOrigin",
          "_importText",
          "_importStatus",
        ],
      },
      demoSchema: [
        {
          tag: "kuis-ledakan",
          properties: {
            judul: "Evaluasi Kuis Interaktif",
            mode: "siswa",
            kdMateri: "Pertemuan 1",
          },
          content: "",
        },
      ],
    };
  }

  static get properties() {
    return {
      ...super.properties,
      questions: {
        type: Array,
        attribute: "questions",
        reflect: true,
        converter: {
          fromAttribute(value) {
            if (value == null || value === "") return undefined;
            if (Array.isArray(value)) return value;
            if (typeof value === "object") return value;
            const text = String(value).trim();
            if (!text || text.includes("[object Object]")) return undefined;
            if (!(text.startsWith("[") || text.startsWith("{"))) return undefined;
            try {
              const parsed = JSON.parse(text);
              if (Array.isArray(parsed)) return parsed;
              if (parsed && typeof parsed === "object" && Array.isArray(parsed.questions)) {
                return parsed.questions;
              }
              return undefined;
            } catch (_) {
              return undefined;
            }
          },
          toAttribute(value) {
            if (!Array.isArray(value)) return null;
            try {
              return JSON.stringify(value);
            } catch (_) {
              return null;
            }
          },
        },
      },
      judul: { type: String, attribute: "judul", reflect: true },
      appsScriptUrl: { type: String, attribute: "apps-script-url", reflect: true },
      kdMateri: { type: String, attribute: "kd-materi", reflect: true },
      mode: { type: String, attribute: "mode", reflect: true },
      hideConfetti: {
        type: Boolean,
        attribute: "hide-confetti",
        reflect: true,
      },
      hideAnswers: {
        type: Boolean,
        attribute: "hide-answers",
        reflect: true,
      },
      hideScore: {
        type: Boolean,
        attribute: "hide-score",
        reflect: true,
      },
      editable: { type: Boolean, attribute: true, reflect: true },
      shuffleChoices: {
        type: Boolean,
        attribute: "shuffle-choices",
        reflect: true,
      },
      shuffleQuestions: {
        type: Boolean,
        attribute: "shuffle-questions",
        reflect: true,
      },
      lockAfterComplete: {
        type: Boolean,
        attribute: "lock-after-complete",
        reflect: true,
      },
      _locked: { state: true },
      _lockChecked: { state: true },
      studentId: { type: String, attribute: "student-id", reflect: true },
      studentName: { type: String, attribute: "student-name", reflect: true },
      studentNis: { type: String, attribute: "student-nis", reflect: true },
      studentAbsen: { type: String, attribute: "student-absen", reflect: true },
      studentKelas: { type: String, attribute: "student-kelas", reflect: true },
      timerDuration: { type: Number, attribute: "timer-duration", reflect: true },
      timerMinutes: { type: Number, attribute: "timer-minutes", reflect: true },
      timerSeconds: { type: Number, attribute: "timer-seconds", reflect: true },
      timerAutostart: { type: Boolean, attribute: "timer-autostart", reflect: true },
      hidePauseRestart: { type: Boolean, attribute: "hide-pause-restart", reflect: true },
      _screen: { state: true },
      _currentIdx: { state: true },
      _selected: { state: true },
      _selectedAnswers: { state: true },
      _matchAnswers: { state: true },
      _shortAnswerText: { state: true },
      _answered: { state: true },
      _score: { state: true },
      _maxPoints: { state: true },
      _feedbackText: { state: true },
      _feedbackPositive: { state: true },
      _advanceTimer: { state: true },
      _megaConfettiFrameId: { state: true },
      _bankStatus: { state: true },
      _shuffledQuestions: { state: true },
      _editing: { state: true },
      _tempQuestions: { state: true },
      _editingIndex: { state: true },
      _tempQuestionText: { state: true },
      _tempQuestionImage: { state: true },
      _tempQuestionType: { state: true },
      _tempQuestionPoints: { state: true },
      _tempChoice0: { state: true },
      _tempChoice1: { state: true },
      _tempChoice2: { state: true },
      _tempChoice3: { state: true },
      _tempChoice4: { state: true },
      _tempChoiceImage0: { state: true },
      _tempChoiceImage1: { state: true },
      _tempChoiceImage2: { state: true },
      _tempChoiceImage3: { state: true },
      _tempChoiceImage4: { state: true },
      _tempCorrectIndex: { state: true },
      _tempCorrectAnswers: { state: true },
      _tempLeftItems: { state: true },
      _tempRightItems: { state: true },
      _tempCorrectPairs: { state: true },
      _tempAcceptedAnswers: { state: true },
      _tempAcceptedStatements: { state: true },
      _tempStatements: { state: true },
      _editorOrigin: { state: true },
      _importText: { state: true },
      _importStatus: { state: true },
    };
  }

  constructor() {
    super();
    this.t = {
      ...this.t,
      importTitle: "Impor Soal (JSON / .txt)",
      importFromText: "Impor dari Teks",
      importPlaceholder: '[{"question":"...","choices":["A","B"],"correctIndex":0}]',
    };
    let fn = confetti;
    if (fn && typeof fn !== "function" && typeof fn.default === "function") {
      fn = fn.default;
    }
    this._confettiFn = fn;
    this.questions = DEFAULT_QUESTIONS;
    this.judul = "Evaluasi Kuis Interaktif";
    this.appsScriptUrl = "";
    this.kdMateri = "Pertemuan 1";
    this.mode = "siswa";
    this.hideConfetti = false;
    this.hideAnswers = false;
    this.hideScore = false;
    this.shuffleChoices = false;
    this.shuffleQuestions = false;
    this.lockAfterComplete = true;
    this.editable = false;
    this.studentId = "";
    this.studentName = "";
    this.studentNis = "";
    this.studentAbsen = "";
    this.studentKelas = "";
    this.timerDuration = 0;
    this.timerAutostart = true;
    this.timerMinutes = 0;
    this.timerSeconds = 0;
    this.hidePauseRestart = false;
    this._screen = "start"; // start, question, result
    this._currentIdx = 0;
    this._selected = -1;
    this._selectedAnswers = new Set();
    this._matchAnswers = {};
    this._shortAnswerText = "";
    this._answered = false;
    this._score = 0;
    this._maxPoints = 0;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._advanceTimer = null;
    this._megaConfettiFrameId = null;
    this._bankStatus = "";
    this._bankLoaded = false;
    this._confettiFired = false;
    this._shuffledQuestions = [];
    this._locked = false;
    this._lockChecked = false;
    this._editing = false;
    this._tempQuestions = [];
    this._editingIndex = -1;
    this._editorOrigin = "result";
    this._importText = "";
    this._importStatus = "";
    this._resetEditorForm();
    this._authHandler = this._authHandler.bind(this);
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-navigation, system-ui, sans-serif); }
        .quiz-card {
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-6);
          max-width: 680px;
          margin: 0 auto;
          box-shadow: var(--ddd-boxShadow-sm);
        }
        .locked-box {
          text-align: center;
          border: 2px dashed var(--ddd-theme-primary, #4f46e5);
        }
        .lock-icon { font-size: 40px; }
        .lock-msg { color: #64748b; font-weight: 600; }
        .quiz-title { color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-l); font-weight: 800; margin-top: 0; text-align: center; }
        .btn-start {
          display: block; width: 100%; padding: var(--ddd-spacing-4); background-color: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .btn-start:hover { background-color: var(--ddd-theme-accent); }
        .question-text { font-size: var(--ddd-font-size-4xs); font-weight: 700; color: var(--ddd-theme-on-surface); margin-bottom: var(--ddd-spacing-4); }
        .question-image img { max-width: 100%; max-height: 260px; border-radius: 10px; margin-bottom: var(--ddd-spacing-4); border: var(--ddd-border-xs); }
        .choices-stack { display: flex; flex-direction: column; gap: 10px; }
        .choice-row {
          padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface-hover); border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-sm); cursor: pointer; font-size: var(--ddd-font-size-4xs); font-weight: 500;
          transition: all 0.2s; text-align: left;
        }
        .choice-row:hover:not(.disabled) { border-color: var(--ddd-theme-primary); background: #f0f9ff; }
        .choice-row.selected { border-color: var(--ddd-theme-primary); background: #e0f2fe; }
        .choice-row.correct { border-color: var(--ddd-theme-success); background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); font-weight: 700; }
        .choice-row.wrong { border-color: var(--ddd-theme-error); background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); }
        .choice-image { max-height: 64px; vertical-align: middle; margin-top: 6px; border-radius: var(--ddd-radius-xs); }

        .result-box { text-align: center; padding: var(--ddd-spacing-4) 0; }
        .score-circle {
          width: 100px; height: 100px; border-radius: var(--ddd-radius-circle); background: #e0f2fe; color: var(--ddd-theme-primary);
          display: flex; align-items: center; justify-content: center; font-size: var(--ddd-font-size-xl); font-weight: 800; margin: 0 auto var(--ddd-spacing-4);
          border: var(--ddd-border-lg);
        }
        .err-chip {
          display: block; margin: var(--ddd-spacing-3) auto 0; max-width: 640px; background: var(--ddd-theme-error-light); border: var(--ddd-border-xs);
          color: var(--ddd-theme-error-text); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-4xs); font-weight: 600;
        }

        .pgk-table { width: 100%; border-collapse: collapse; margin: var(--ddd-spacing-3) 0; }
        .pgk-table th { text-align: left; padding: var(--ddd-spacing-3) var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface-hover); border-bottom: var(--ddd-border-sm); font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-secondary); }
        .pgk-table td { padding: var(--ddd-spacing-3) var(--ddd-spacing-3); border-bottom: 1px solid #f1f5f9; font-size: var(--ddd-font-size-4xs); }
        .pgk-table .pgk-cell { text-align: center; }
        .matching-container, .short-answer-container { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); margin: var(--ddd-spacing-3) 0; }
        .matching-row { display: flex; align-items: center; gap: var(--ddd-spacing-3); flex-wrap: wrap; }
        .matching-item { font-weight: 600; font-size: var(--ddd-font-size-4xs); min-width: 180px; }
        .matching-select {
          flex: 1; min-width: 180px; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; background: var(--ddd-theme-default-white);
        }
        .short-answer-input {
          width: 100%; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; box-sizing: border-box;
        }
        .short-answer-input:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); }
        .btn-submit {
          display: block; padding: var(--ddd-spacing-3) var(--ddd-spacing-5); background-color: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; margin-top: var(--ddd-spacing-3);
        }
        .btn-submit:hover { background-color: var(--ddd-theme-accent); }
        .feedback-area {
          margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-4xs); font-weight: 600;
        }
        .feedback-area.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); border: var(--ddd-border-xs); }
        .feedback-area.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); border: var(--ddd-border-xs); }

        .btn-edit-soal {
          display: block; width: 100%; padding: var(--ddd-spacing-3); margin-top: var(--ddd-spacing-3); background-color: #475569;
          color: #fff; border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .btn-edit-soal:hover { background-color: #334155; }
        .editor-screen { max-width: 760px; }
        .edit-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ddd-spacing-3); }
        .edit-header .btn-edit-soal { width: auto; margin: 0; padding: var(--ddd-spacing-2) var(--ddd-spacing-4); }
        .editor-content { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); }
        .add-question-form {
          border: var(--ddd-border-sm); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface-hover);
        }
        .editor-select { padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 13px; font-family: inherit; }
        .editor-input { padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 13px; font-family: inherit; box-sizing: border-box; }
        .editor-textarea { width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #ccc; font-size: 12px; font-family: monospace; box-sizing: border-box; }
        .question-text-input, .edit-question-text-input {
          width: 100%; min-height: 70px; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; box-sizing: border-box; margin: 4px 0;
        }
        .questions-list { display: flex; flex-direction: column; gap: 10px; }
        .question-card {
          border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-3);
          background: var(--ddd-theme-default-white);
        }
        .question-card .btn-edit-soal { width: auto; padding: 6px 12px; font-size: 12px; }
        .quiz-timer { display: flex; justify-content: center; margin-bottom: var(--ddd-spacing-4); }
        .import-box { border: var(--ddd-border-sm); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface-hover); margin-top: var(--ddd-spacing-4); }
        .import-box h4 { margin: 0 0 var(--ddd-spacing-3) 0; color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-4xs); }
      `
    ];
  }

  updated(changed) {
    super.updated(changed);
    if (changed.has("questions") && !Array.isArray(this.questions)) {
      this.questions = DEFAULT_QUESTIONS;
    }
    if (changed.has("timerMinutes") || changed.has("timerSeconds")) {
      const total = (this.timerMinutes || 0) * 60 + (this.timerSeconds || 0);
      if (this.timerDuration !== total) this.timerDuration = total;
    } else if (changed.has("timerDuration")) {
      const m = Math.floor((this.timerDuration || 0) / 60);
      const s = (this.timerDuration || 0) % 60;
      if (this.timerMinutes !== m) this.timerMinutes = m;
      if (this.timerSeconds !== s) this.timerSeconds = s;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const store = globalThis.HaxStore.requestAvailability();
      if (store && !store.elementList[ModularQuiz.tag]) {
        store.elementList[ModularQuiz.tag] = ModularQuiz.haxProperties;
      }
    }
    globalThis.addEventListener("quiz-user-login", this._authHandler);
    globalThis.addEventListener("quiz-user-session-changed", this._authHandler);
    this._loadSession();
    this._cekKunci();
    if (!this.hasAttribute("questions")) {
      const local = this._loadQuestionsLocal();
      if (local && local.length > 0) {
        this._tempQuestions = local;
        this.questions = JSON.parse(JSON.stringify(local));
      } else {
        this._muatBankSoal();
      }
    } else {
      this._muatBankSoal();
    }
  }

  disconnectedCallback() {
    if (this._advanceTimer) {
      clearTimeout(this._advanceTimer);
      this._advanceTimer = null;
    }
    globalThis.removeEventListener("quiz-user-login", this._authHandler);
    globalThis.removeEventListener("quiz-user-session-changed", this._authHandler);
    this._cancelMegaConfetti();
    super.disconnectedCallback();
  }

  _authHandler(e) {
    const d = (e && e.detail) || {};
    if (d.studentId) this.studentId = d.studentId;
    if (d.nama) this.studentName = d.nama;
    if (d.nis) this.studentNis = d.nis;
    if (d.absen) this.studentAbsen = d.absen;
    if (d.kelas) this.studentKelas = d.kelas;
  }

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
      // abaikan sesi tidak valid
    }
  }

  _cancelMegaConfetti() {
    if (this._megaConfettiFrameId) {
      globalThis.cancelAnimationFrame(this._megaConfettiFrameId);
      this._megaConfettiFrameId = null;
    }
  }

  _onTimerExpired() {
    if (this._screen !== "question") return;
    this._selesaiKuis();
  }

  forceFinish() {
    this._selesaiKuis();
  }

  /** Muat Bank Soal (AKM) dari backend bila tidak ada atribut `questions`. */
  async _muatBankSoal() {
    if (this._bankLoaded || !this.appsScriptUrl || this.hasAttribute("questions")) return;
    this._bankLoaded = true;
    try {
      const pemisah = this.appsScriptUrl.includes("?") ? "&" : "?";
      const res = await fetch(this.appsScriptUrl + pemisah + "action=getBankSoal");
      if (!res.ok) return;
      const teks = await res.text();
      const data = JSON.parse(teks);
      if (data && data.status === "ok" && Array.isArray(data.soal)) {
        const valid = data.soal.filter(
          (s) =>
            s && (s.soal || s.question) && (Array.isArray(s.choices) ? s.choices.length >= 2 : true),
        );
        if (valid.length > 0) {
          this.questions = valid.slice(0, 10);
          this._bankStatus = "Soal dimuat dari Bank Soal (AKM).";
          this.requestUpdate();
        }
      }
    } catch (e) {
      // offline / backend lama — biarkan DEFAULT_QUESTIONS
    }
  }

  _getChoiceText(choice) {
    return typeof choice === "string" ? choice : (choice && choice.text) || "";
  }

  _getChoiceImage(choice) {
    return (choice && typeof choice === "object" && choice.image) || "";
  }

  _normalisasiSoal(q) {
    // Format lama {q,a,b,c,k} → {question, choices, correctIndex}
    if (q && Array.isArray(q.choices) && q.choices.length) return q;
    const pilihan = [q.a, q.b, q.c, q.d, q.e, q.f].filter(
      (v) => v !== "" && v != null && v !== undefined,
    );
    if (!pilihan.length) return q;
    const huruf = ["a", "b", "c", "d", "e", "f"];
    return {
      ...q,
      question: q.question || q.q || "",
      choices: pilihan,
      correctIndex: typeof q.correctIndex === "number" ? q.correctIndex : huruf.indexOf(String(q.k).toLowerCase()),
    };
  }

  /** Normalisasi format soal: {q,a,b,c,k} legacy maupun {soal,choices,correctIndex} AKM. */
  _siapkanSoal(q) {
    if (!q) return null;
    const soal = this._normalisasiSoal(q);
    let pilihan = [];
    let pilihanImages = [];
    if (Array.isArray(soal.choices) && soal.choices.length) {
      pilihan = soal.choices.map((c) => this._getChoiceText(c));
      pilihanImages = soal.choices.map((c) => this._getChoiceImage(c));
    }
    if (!pilihan.length) pilihan = ["Pilihan A", "Pilihan B"];
    if (!pilihanImages.length) pilihanImages = pilihan.map(() => "");

    let kunci = null;
    let correctAnswers = [];
    const huruf = ["a", "b", "c", "d", "e", "f"];
    if (Array.isArray(soal.correctAnswers)) {
      correctAnswers = soal.correctAnswers;
    } else if (typeof soal.correctIndex === "number" && soal.correctIndex >= 0 && soal.correctIndex < pilihan.length) {
      correctAnswers = [soal.correctIndex];
    } else if (soal.correctIndex != null && !isNaN(parseInt(soal.correctIndex, 10))) {
      const ci = parseInt(soal.correctIndex, 10);
      if (ci >= 0 && ci < pilihan.length) correctAnswers = [ci];
    } else if (soal.k != null && huruf.includes(String(soal.k).toLowerCase())) {
      correctAnswers = [huruf.indexOf(String(soal.k).toLowerCase())];
    }
    if (correctAnswers[0] != null) kunci = pilihan[correctAnswers[0]];
    if (kunci === null) kunci = pilihan[0];

    return {
      type: soal.type || "mc",
      teks: soal.question || soal.q || soal.soal || "",
      image: soal.image || "",
      pilihan,
      pilihanImages,
      kunci,
      correctAnswers,
      isMulti: correctAnswers.length > 1,
      statements: Array.isArray(soal.statements) ? soal.statements : [],
      leftItems: Array.isArray(soal.leftItems) ? soal.leftItems : [],
      rightItems: Array.isArray(soal.rightItems) ? soal.rightItems : [],
      correctPairs: soal.correctPairs || {},
      acceptedAnswers: Array.isArray(soal.acceptedAnswers) ? soal.acceptedAnswers : [],
      originalIndex: soal._originalIndex >= 0 ? soal._originalIndex : null,
    };
  }

  _fireConfetti() {
    if (this.hideConfetti || typeof this._confettiFn !== "function") return;
    try {
      const base = {
        ticks: 220,
        gravity: 0.85,
        decay: 0.92,
        startVelocity: 42,
        zIndex: 9999,
      };
      this._confettiFn({
        ...base,
        particleCount: 70,
        spread: 85,
        scalar: 1.05,
        origin: { x: 0.5, y: 0.62 },
      });
      this._confettiFn({
        ...base,
        particleCount: 45,
        angle: 58,
        spread: 65,
        scalar: 1.1,
        origin: { x: 0.1, y: 0.7 },
      });
      this._confettiFn({
        ...base,
        particleCount: 45,
        angle: 122,
        spread: 65,
        scalar: 1.1,
        origin: { x: 0.9, y: 0.7 },
      });
    } catch (e) {
      console.error("[kuis-ledakan] Konfeti gagal dieksekusi", e);
    }
  }

  _fireMegaConfetti() {
    if (this.hideConfetti || typeof this._confettiFn !== "function") return;
    try {
      this._cancelMegaConfetti();
      const duration = 900;
      const end = Date.now() + duration;
      const frame = () => {
        this._confettiFn({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
        });
        this._confettiFn({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
        });
        if (Date.now() < end) {
          this._megaConfettiFrameId = globalThis.requestAnimationFrame(frame);
        } else {
          this._megaConfettiFrameId = null;
        }
      };
      this._megaConfettiFrameId = globalThis.requestAnimationFrame(frame);
    } catch (e) {
      console.error("[kuis-ledakan] Mega konfeti gagal dieksekusi", e);
    }
  }

  _shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Hanya true di dalam editor HAX (hax start / haxcms local dev). */
  get _inHaxEditor() {
    return !!(
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function" &&
      globalThis.HaxStore.requestAvailability().editMode
    );
  }

  /** Poin maksimum per soal: PGK → jumlah pernyataan, menjodohkan → jumlah item kiri, selainnya → points || 1. */
  _maxPoinSoal(q) {
    if (!q) return 1;
    if (q.type === "pgk") {
      const n = Array.isArray(q.statements) ? q.statements.length : 0;
      return q.points != null ? q.points : n || 1;
    }
    if (q.type === "matching") {
      const n = Array.isArray(q.leftItems) ? q.leftItems.length : 0;
      return q.points != null ? q.points : n || 1;
    }
    return q.points || 1;
  }

  _startQuiz() {
    this._screen = "question";
    this._currentIdx = 0;
    this._score = 0;
    this._confettiFired = false;
    let base = Array.isArray(this.questions) ? this.questions : DEFAULT_QUESTIONS;
    if (this.shuffleQuestions) base = this._shuffleArray(base);
    this._maxPoints =
      (this.questions || []).reduce((sum, q) => sum + this._maxPoinSoal(q), 0) || 1;
    if (this.shuffleChoices) {
      this._shuffledQuestions = base.map((q, origIdx) => {
        if (!Array.isArray(q.choices) || q.type === "pgk" || q.type === "matching") return { ...q, _originalIndex: origIdx };
        const pairs = q.choices.map((c, i) => ({ text: c, origIndex: i }));
        const shuffled = this._shuffleArray(pairs);
        return {
          ...q,
          choices: shuffled.map((p) => p.text),
          _correctMap: shuffled.map((p) => p.origIndex),
          _originalIndex: origIdx,
        };
      });
    } else {
      // SELALU isi _shuffledQuestions (urutan mungkin sudah diacak) agar
      // _getActiveQuestions memakai urutan soal yang baru.
      this._shuffledQuestions = base.map((q, i) => ({ ...q, _originalIndex: i }));
    }
    this._resetState();
  }

  _getActiveQuestions() {
    return this._shuffledQuestions.length > 0 ? this._shuffledQuestions : this.questions;
  }

  _resetState() {
    this._selected = -1;
    this._selectedAnswers = new Set();
    this._matchAnswers = {};
    this._shortAnswerText = "";
    this._answered = false;
    this._feedbackText = "";
    this._feedbackPositive = false;
  }

  _pilihJawaban(indexKey, opsi) {
    if (this._answered) return;
    const active = this._getActiveQuestions();
    const soal = this._normalisasiSoal(active[this._currentIdx]);
    const s = this._siapkanSoal(soal);

    let benar = false;
    if (s.isMulti) {
      // Multi-correct: toggle then kirim lewat _submitMultiAnswers
      const set = new Set(this._selectedAnswers);
      if (set.has(indexKey)) set.delete(indexKey);
      else set.add(indexKey);
      this._selectedAnswers = set;
      this._selected = indexKey;
      this.requestUpdate();
      return;
    }

    this._selected = indexKey;
    this._answered = true;
    const correctPositions = soal._correctMap
      ? s.correctAnswers.map((i) => soal._correctMap.indexOf(i))
      : s.correctAnswers;
    benar = correctPositions.includes(indexKey);
    if (benar) {
      this._score += soal.points || 1;
      this._fireConfetti();
      if (!this.hideAnswers) {
        this._feedbackText = "Mantap, Benar!";
        this._feedbackPositive = true;
      }
    } else if (!this.hideAnswers) {
      const correctNames = correctPositions.map((i) => s.pilihan[i]).join(", ");
      this._feedbackText = `Yah, Salah. Jawaban benar: ${correctNames}`;
      this._feedbackPositive = false;
    }
    this._autoAdvance();
  }

  _toggleMultiAnswer(indexKey) {
    if (this._answered) return;
    const set = new Set(this._selectedAnswers);
    if (set.has(indexKey)) set.delete(indexKey);
    else set.add(indexKey);
    this._selectedAnswers = set;
    this.requestUpdate();
  }

  _submitMultiAnswers() {
    if (this._answered || this._selectedAnswers.size === 0) return;
    const active = this._getActiveQuestions();
    const soal = this._normalisasiSoal(active[this._currentIdx]);
    const s = this._siapkanSoal(soal);
    this._answered = true;
    const correct = new Set(s.correctAnswers);
    const selectedOrig = soal._correctMap
      ? new Set([...this._selectedAnswers].map((i) => soal._correctMap[i]))
      : this._selectedAnswers;
    const isCorrect =
      correct.size === selectedOrig.size && [...correct].every((c) => selectedOrig.has(c));
    if (isCorrect) {
      this._score += soal.points || 1;
      this._fireConfetti();
      if (!this.hideAnswers) {
        this._feedbackText = "Mantap, Benar!";
        this._feedbackPositive = true;
      }
    } else if (!this.hideAnswers) {
      const correctNames = [...correct]
        .map((i) => {
          const pos = soal._correctMap ? soal._correctMap.indexOf(i) : i;
          return s.pilihan[pos];
        })
        .join(", ");
      this._feedbackText = `Jawaban belum tepat. Kunci: ${correctNames}`;
      this._feedbackPositive = false;
    }
    this._autoAdvance();
  }

  _setPGK(index, value) {
    if (this._answered) return;
    this._matchAnswers = { ...this._matchAnswers, [index]: value };
  }

  _submitPGK() {
    if (this._answered) return;
    const active = this._getActiveQuestions();
    const soal = active[this._currentIdx];
    const s = this._siapkanSoal(soal);
    const statements = s.statements || [];
    if (Object.keys(this._matchAnswers).length < statements.length) {
      this._feedbackText = "Pilih Benar atau Salah untuk semua pernyataan.";
      this._feedbackPositive = false;
      this.requestUpdate();
      return;
    }
    this._answered = true;
    const correctAnswers = statements.map((st) => st.answer);
    let benar = 0;
    for (let i = 0; i < statements.length; i++) {
      if (this._matchAnswers[i] === correctAnswers[i]) benar++;
    }
    const total = statements.length;
    if (benar === total) {
      this._score += this._maxPoinSoal(soal);
      this._fireConfetti();
      if (!this.hideAnswers) {
        this._feedbackText = "Mantap, semua pernyataan benar!";
        this._feedbackPositive = true;
      }
    } else {
      this._score += benar;
      if (!this.hideAnswers) {
        const answerText = statements
          .map((st, i) => `${i + 1}: ${st.answer ? "Benar" : "Salah"}`)
          .join(", ");
        this._feedbackText = `${benar}/${total} pernyataan benar (+${benar} poin). Kunci: ${answerText}`;
        this._feedbackPositive = benar > 0;
      }
    }
    this._autoAdvance();
  }

  _submitMatching() {
    if (this._answered) return;
    const active = this._getActiveQuestions();
    const soal = active[this._currentIdx];
    const s = this._siapkanSoal(soal);
    const left = s.leftItems || [];
    if (Object.keys(this._matchAnswers).length < left.length) {
      this._feedbackText = "Pilih pasangan untuk semua item kiri.";
      this._feedbackPositive = false;
      this.requestUpdate();
      return;
    }
    this._answered = true;
    let correctCount = 0;
    for (let i = 0; i < left.length; i++) {
      if (this._matchAnswers[i] === s.correctPairs[i]) correctCount++;
    }
    const maxPoin = this._maxPoinSoal(soal);
    const earned = Math.min(correctCount, maxPoin);
    this._score += earned;
    if (!this.hideAnswers) {
      if (correctCount === left.length) {
        this._feedbackText = `Mantap, Benar! (${correctCount}/${left.length} pasangan, +${earned} poin)`;
        this._feedbackPositive = true;
      } else if (correctCount > 0) {
        this._feedbackText = `${correctCount}/${left.length} pasangan benar (+${earned} poin). Lanjutkan!`;
        this._feedbackPositive = true;
      } else {
        const correctText = Object.entries(s.correctPairs)
          .map(([k, v]) => `${parseInt(k) + 1}→${String.fromCharCode(65 + v)}`)
          .join(", ");
        this._feedbackText = `Yah, Salah. Kunci: ${correctText}`;
        this._feedbackPositive = false;
      }
    }
    if (!this.hideConfetti && correctCount === left.length) this._fireConfetti();
    this._autoAdvance();
  }

  _submitShortAnswer() {
    if (this._answered) return;
    const text = this._shortAnswerText.trim().toLowerCase();
    if (!text) {
      this._feedbackText = "Ketik jawaban terlebih dahulu.";
      this._feedbackPositive = false;
      this.requestUpdate();
      return;
    }
    const active = this._getActiveQuestions();
    const soal = active[this._currentIdx];
    const s = this._siapkanSoal(soal);
    this._answered = true;
    const accepted = (s.acceptedAnswers || []).map((a) => a.toLowerCase());
    const isCorrect = accepted.some((a) => text.includes(a));
    if (isCorrect) {
      this._score += soal.points || 1;
      this._fireConfetti();
      if (!this.hideAnswers) {
        this._feedbackText = "Mantap, Benar!";
        this._feedbackPositive = true;
      }
    } else if (!this.hideAnswers) {
      this._feedbackText = `Yah, Salah. Jawaban benar: ${(s.acceptedAnswers || []).join(" / ")}`;
      this._feedbackPositive = false;
    }
    this._autoAdvance();
  }

  _autoAdvance() {
    if (this._advanceTimer) clearTimeout(this._advanceTimer);
    this._advanceTimer = setTimeout(() => {
      this._advanceTimer = null;
      const active = this._getActiveQuestions();
      if (this._currentIdx < active.length - 1) {
        this._currentIdx++;
        this._resetState();
      } else {
        this._selesaiKuis();
      }
    }, 1800);
  }

  _buatIdLog() {
    // Kunci id_log (timestamp + crypto) sesuai ketentuan idempotensi V5.
    try {
      const buf = new Uint8Array(8);
      globalThis.crypto.getRandomValues(buf);
      let hex = "";
      buf.forEach((b) => (hex += b.toString(16).padStart(2, "0")));
      return `LOG-${Date.now()}-${hex.toUpperCase()}`;
    } catch (e) {
      return `LOG-${Date.now()}-${Math.random().toString(36).substr(2, 10).toUpperCase()}`;
    }
  }

  _selesaiKuis() {
    if (this._screen === "result") return;
    if (this._advanceTimer) {
      clearTimeout(this._advanceTimer);
      this._advanceTimer = null;
    }
    this._screen = "result";
    const totalSkor = Math.round((this._score / this._maxPoints) * 100);

    if (!this._confettiFired && !this.hideConfetti) {
      this._confettiFired = true;
      if (totalSkor >= 80) {
        this._fireMegaConfetti();
      } else {
        this._fireConfetti();
      }
    }

    // Satu jalur tulis: event dasbor-kuis-log → antrean idempoten dasbor-kuis (id_log)
    const idLog = this._buatIdLog();
    this.dispatchEvent(
      new CustomEvent("dasbor-kuis-log", {
        detail: {
          id_log: idLog,
          tipe: "quiz",
          payload: {
            score: totalSkor,
            jenisKuis: "formatif",
            metadataKuis: this.judul,
            timestamp: new Date().toISOString(),
          },
        },
        bubbles: true,
        composed: true,
      }),
    );
    // Cadangan langsung: bila kuis dipakai STANDALONE (tanpa <dasbor-kuis>),
    // event tidak tertangkap host mana pun — kirim sendiri ke backend.
    this._kirimHasilLangsung(idLog, totalSkor);
    if (this.lockAfterComplete) this._locked = true;
  }

  /** Kirim hasil kuis langsung ke action=logActivity bila berdiri sendiri. */
  async _kirimHasilLangsung(idLog, skor) {
    if (!this.appsScriptUrl || !this.studentId) return;
    const timestamp = new Date().toISOString();
    const params = {
      action: "logActivity",
      studentId: this.studentId,
      nama: this.studentName || "",
      nis: this.studentNis || "",
      absen: this.studentAbsen || "",
      kelas: this.studentKelas || "",
      type: "quiz",
      description: JSON.stringify({
        score: skor,
        jenisKuis: "formatif",
        metadataKuis: this.judul,
        timestamp,
      }),
      timestamp,
      kdMateri: this.kdMateri || "",
      id_log: idLog,
    };
    try {
      const res = await fetch(`${this.appsScriptUrl}?${new URLSearchParams(params).toString()}`, {
        method: "GET",
        mode: "cors",
      });
      const teks = await res.text();
      let j = null;
      try {
        j = JSON.parse(teks);
      } catch (_) {
        // non-JSON
      }
      this._bankStatus = j && j.status === "ok"
        ? j.duplikat
          ? "✅ Skor sudah tercatat sebelumnya (duplikat dilewati)."
          : "✅ Skor & status kuis terkirim ke database V5."
        : j && j.message
          ? "⚠️ " + j.message
          : "⚠️ Backend merespons non-JSON — cek atribut apps-script-url.";
      this.requestUpdate();
    } catch (e) {
      this._bankStatus = "⚠️ Hasil tersimpan lokal; kirim ulang saat online.";
      this.requestUpdate();
    }
  }

  /** Cek status kunci di backend (codev6 → db_asesmen). Graceful: bila gagal, izinkan mencoba. */
  async _cekKunci() {
    if (!this.lockAfterComplete || !this.appsScriptUrl || !this.studentId || !this.kdMateri) {
      this._lockChecked = true;
      return;
    }
    try {
      const u = `${this.appsScriptUrl}${this.appsScriptUrl.includes("?") ? "&" : "?"}action=getQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`;
      const res = await fetch(u, { method: "GET", mode: "cors" });
      const j = await res.json();
      this._locked = !!(j && j.locked);
    } catch (_) {
      this._locked = false;
    }
    this._lockChecked = true;
    this.requestUpdate();
  }

  /** Guru (mode guru) membuka kunci via resetQuizLock di backend. */
  async _bukaKunci() {
    if (!this.appsScriptUrl || !this.studentId || !this.kdMateri) return;
    try {
      const u = `${this.appsScriptUrl}${this.appsScriptUrl.includes("?") ? "&" : "?"}action=resetQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`;
      await fetch(u, { method: "GET", mode: "cors" });
    } catch (_) {}
    this._locked = false;
    this._screen = "start";
    this.requestUpdate();
  }

  render() {
    if (this._screen === "start") {
      if (this._locked && this.mode !== "guru") {
        return html`
          <div class="quiz-card locked-box">
            <div class="lock-icon">🔒</div>
            <h3 class="quiz-title">${this.judul}</h3>
            <p class="lock-msg">Kuis terkunci. Hubungi guru untuk mengulang.</p>
          </div>
        `;
      }
      return html`
        <div class="quiz-card">
          <h3 class="quiz-title">📝 ${this.judul}</h3>
          <p style="color: #64748b; text-align: center; margin-bottom: var(--ddd-spacing-5);">Selesaikan seluruh pertanyaan kuis di bawah ini secara mandiri untuk mengunci status kelulusan nilai pada lembar kendali dasbor.</p>
          ${this.studentId
            ? html`<button class="btn-start" @click=${this._startQuiz} aria-label="Mulai mengerjakan kuis">Mulai Pengerjaan Kuis</button>`
            : html`<button class="btn-start" disabled aria-label="Mulai mengerjakan kuis" style="opacity:.55;cursor:not-allowed;">Mulai Pengerjaan Kuis</button>
               <p class="err-chip" style="background:#fef3c7;border-color:#fcd34d;color:#92400e;margin-top:10px;">ℹ️ Harap login untuk mengerjakan kuis.</p>`}
          ${this._locked && this.mode === "guru"
            ? html`<button class="btn-edit-soal" @click=${this._bukaKunci} aria-label="Buka kunci kuis">🔓 Buka Kunci / Ulangi</button>`
            : ""}
          ${this._inHaxEditor
            ? html`<button class="btn-edit-soal" @click=${this._openEditor} aria-label="Edit soal kuis">✏️ Edit Soal</button>`
            : ""}
        </div>
      `;
    }

    if (this._screen === "editor") return this._renderEditorScreen();

    if (this._screen === "question") return this._renderQuestionScreen();

    if (this._screen === "result") {
      const persentase = Math.round((this._score / this._maxPoints) * 100);
      return html`
        <div class="quiz-card result-box">
          <h3 class="quiz-title">🎊 Hasil Evaluasi Anda</h3>
          ${this.hideScore ? "" : html`<div class="score-circle">${persentase}%</div>`}
          <p style="font-weight:700; color:#1e293b; margin-bottom:4px;">Kuis Selesai Dikerjakan!</p>
          <p style="color:#64748b; font-size:14px; margin-top:0; margin-bottom: var(--ddd-spacing-4);">Skor Anda telah dikunci dan dikirim masuk ke antrean database tunggal V5.</p>
          ${this._bankStatus
            ? html`<p class="err-chip">ℹ️ ${this._bankStatus}</p>`
            : ""}
          <p class="err-chip" style="background:#eef2ff;border-color:#c7d2fe;color:#4338ca;">ℹ️ Siswa: ${this.studentName || "-"} (NIS ${this.studentNis || "-"}, Kelas ${this.studentKelas || "-"})</p>
          ${this.mode === "guru" && !this.hidePauseRestart
            ? html`<button class="btn-start" style="background-color:#475569;" @click=${() => {
                this._screen = "start";
                this.requestUpdate();
              }}>Ulangi Kuis</button>`
            : html`<span class="err-chip">ℹ️ Kuis terkunci. Hubungi guru untuk mengulang.</span>`}
        </div>
      `;
    }
  }

  _renderQuestionScreen() {
    const active = this._getActiveQuestions();
    const soal = this._normalisasiSoal(active[this._currentIdx]);
    const s = this._siapkanSoal(soal);
    if (!s) {
      return html`<div class="quiz-card result-box">Soal tidak valid.</div>`;
    }
    const qType = s.type || "mc";
    return html`
      <div class="quiz-card">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:bold; color:#64748b; margin-bottom:10px;">
          <span>Soal ${this._currentIdx + 1} dari ${active.length}</span>
          ${this.hideScore ? "" : html`<span>Skor Berjalan: ${this._score}</span>`}
        </div>
        ${this.timerDuration > 0
          ? html`<div class="quiz-timer">
              <timer-kuis
                duration="${this.timerDuration}"
                ?autostart="${this.timerAutostart}"
                ?hide-controls="${this.hidePauseRestart}"
                @timer-kuis-expired="${this._onTimerExpired}"
              ></timer-kuis>
            </div>`
          : ""}
        <div class="question-text">${s.teks}</div>
        ${s.image
          ? html`<div class="question-image"><img src="${s.image}" alt="Gambar soal" loading="lazy" /></div>`
          : ""}
        ${qType === "pgk" ? this._renderPGK(s) : ""}
        ${qType === "matching" ? this._renderMatching(s) : ""}
        ${qType === "shortAnswer" ? this._renderShortAnswer(s) : ""}
        ${qType === "mc" ? this._renderMC(s, soal) : ""}
        ${this._feedbackText
          ? html`<div class="feedback-area ${this._feedbackPositive ? "positive" : "negative"}" aria-live="polite">${this._feedbackText}</div>`
          : ""}
      </div>
    `;
  }

  _renderMC(s, soal) {
    const huruf = ["A", "B", "C", "D", "E", "F"];
    const correctPositions = soal._correctMap
      ? s.correctAnswers.map((i) => soal._correctMap.indexOf(i))
      : s.correctAnswers;
    return html`
      <div class="choices-stack">
        ${s.pilihan.map((pil, i) => {
          let cls = "";
          if (this._answered && !this.hideAnswers) {
            if (correctPositions.includes(i)) cls = "correct";
            else if (s.isMulti ? this._selectedAnswers.has(i) : this._selected === i) cls = "wrong";
          } else if (s.isMulti ? this._selectedAnswers.has(i) : this._selected === i) {
            cls = "selected";
          }
          const disabled = this._answered;
          const pilImg = s.pilihanImages && s.pilihanImages[i];
          return html`
            <button
              class="choice-row ${cls} ${disabled ? "disabled" : ""}"
              ?disabled=${disabled}
              @click=${() => (s.isMulti ? this._toggleMultiAnswer(i) : this._pilihJawaban(i))}
              aria-label="Pilihan ${huruf[i] || i + 1}: ${pil}"
            >${s.isMulti && this._selectedAnswers.has(i) ? "✓ " : ""}${huruf[i] || i + 1}. ${pil}
            ${pilImg
              ? html`<br /><img class="choice-image" src="${pilImg}" alt="Gambar pilihan ${huruf[i] || i + 1}" loading="lazy" />`
              : ""}</button>
          `;
        })}
      </div>
      ${s.isMulti && !this._answered
        ? html`<button class="btn-submit" @click=${this._submitMultiAnswers}>Kirim Jawaban (${this._selectedAnswers.size} dipilih)</button>`
        : ""}
    `;
  }

  _renderPGK(s) {
    const statements = s.statements || [];
    return html`
      <table class="pgk-table" aria-label="Soal pilihan ganda kompleks benar atau salah">
        <thead>
          <tr><th>Pernyataan</th><th>Benar</th><th>Salah</th></tr>
        </thead>
        <tbody>
          ${statements.map(
            (st, i) => html`
              <tr>
                <td>${st.text}</td>
                <td class="pgk-cell">
                  <input type="radio" name="pgk-${this._currentIdx}-${i}" value="true"
                    ?disabled=${this._answered} @change=${() => this._setPGK(i, true)}
                    aria-label="Pernyataan ${i + 1}: Benar" />
                </td>
                <td class="pgk-cell">
                  <input type="radio" name="pgk-${this._currentIdx}-${i}" value="false"
                    ?disabled=${this._answered} @change=${() => this._setPGK(i, false)}
                    aria-label="Pernyataan ${i + 1}: Salah" />
                </td>
              </tr>
            `,
          )}
        </tbody>
      </table>
      ${!this._answered
        ? html`<button class="btn-submit" @click=${this._submitPGK}>Kirim Jawaban</button>`
        : ""}
    `;
  }

  _renderMatching(s) {
    const left = s.leftItems || [];
    const right = s.rightItems || [];
    return html`
      <div class="matching-container">
        ${left.map(
          (item, i) => html`
            <div class="matching-row">
              <span class="matching-item">${i + 1}. ${item}</span>
              <span>→</span>
              <select name="matching-${i}" class="matching-select" ?disabled=${this._answered}
                @change=${(e) => {
                  this._matchAnswers = { ...this._matchAnswers, [i]: parseInt(e.target.value, 10) };
                  this.requestUpdate();
                }}
                aria-label="Pasangkan item ${i + 1}">
                <option value="-1">-- Pilih --</option>
                ${right.map(
                  (r, ri) => html`
                    <option value="${ri}" ?selected=${this._matchAnswers[i] === ri}>${String.fromCharCode(65 + ri)}. ${r}</option>
                  `,
                )}
              </select>
            </div>
          `,
        )}
      </div>
      ${!this._answered
        ? html`<button class="btn-submit" @click=${this._submitMatching}>Kirim Jawaban</button>`
        : ""}
    `;
  }

  _renderShortAnswer(s) {
    return html`
      <div class="short-answer-container">
        <input type="text" name="short-answer" class="short-answer-input" ?disabled=${this._answered}
          placeholder="Ketik jawaban..." .value=${this._shortAnswerText}
          @input=${(e) => (this._shortAnswerText = e.target.value)}
          aria-label="Ketik jawaban singkat" />
      </div>
      ${!this._answered
        ? html`<button class="btn-submit" @click=${this._submitShortAnswer}>Kirim Jawaban</button>`
        : ""}
    `;
  }

  // ---------- IMPOR SOAL (offline-first) ----------

  _handleImportFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new globalThis.FileReader();
    reader.onload = () => {
      try {
        this._parseImported(String(reader.result || ""));
      } catch (err) {
        this._importStatus = "⚠️ Gagal membaca file: " + (err.message || err);
        this.requestUpdate();
      }
    };
    reader.onerror = () => {
      this._importStatus = "⚠️ Gagal membaca file.";
      this.requestUpdate();
    };
    reader.readAsText(file);
  }

  _importFromText() {
    this._parseImported(this._importText);
  }

  _parseImported(raw) {
    const text = (raw || "").trim();
    if (!text) {
      this._importStatus = "⚠️ Input kosong.";
      this.requestUpdate();
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      this._importStatus = "⚠️ Format JSON tidak valid: " + (err.message || err);
      this.requestUpdate();
      return;
    }
    let arr;
    if (Array.isArray(parsed)) {
      arr = parsed;
    } else if (parsed && typeof parsed === "object") {
      if (Array.isArray(parsed.questions)) arr = parsed.questions;
      else if (Array.isArray(parsed.soal)) arr = parsed.soal;
      else if (Array.isArray(parsed.data)) arr = parsed.data;
      else {
        this._importStatus = "⚠️ Objek tidak mengandung array questions/soal/data.";
        this.requestUpdate();
        return;
      }
    } else {
      this._importStatus = "⚠️ Format tidak dikenali (harus array atau objek wrapper).";
      this.requestUpdate();
      return;
    }
    const valid = arr
      .map((item) => this._normalisasiUntukEditor(item))
      .filter(Boolean);
    if (valid.length === 0) {
      this._importStatus = "⚠️ Tidak ada soal valid.";
      this.requestUpdate();
      return;
    }
    this._tempQuestions = [...this._tempQuestions, ...valid];
    this._saveQuestionsLocal();
    this._importStatus = `✅ ${valid.length} soal diimpor.`;
    this._importText = "";
    this.requestUpdate();
  }

  _normalisasiUntukEditor(item) {
    if (!item || typeof item !== "object") return null;
    const tipe = String(item.type || item.tipe || "mc").toLowerCase();
    const teks = item.question || item.q || item.soal || "";
    if (!teks || typeof teks !== "string") return null;
    const base = {
      type: tipe,
      question: teks.trim(),
      image: item.image || "",
      points: item.points || 1,
    };
    if (tipe === "mc") {
      let choices = Array.isArray(item.choices) ? item.choices : [];
      let correctIndex = typeof item.correctIndex === "number" ? item.correctIndex : -1;
      let correctAnswers = Array.isArray(item.correctAnswers) ? item.correctAnswers : null;
      if (choices.length < 2) {
        const legacy = this._normalisasiSoal(item);
        if (legacy && Array.isArray(legacy.choices) && legacy.choices.length >= 2) {
          choices = legacy.choices;
          if (correctAnswers) correctAnswers = legacy.correctAnswers;
          else if (correctIndex < 0 && legacy.correctIndex >= 0) correctIndex = legacy.correctIndex;
          else if (correctIndex < 0 && item.k != null) {
            const huruf = ["a", "b", "c", "d", "e", "f"];
            correctIndex = huruf.indexOf(String(item.k).toLowerCase());
          }
        }
      }
      if (choices.length < 2) return null;
      base.choices = choices;
      if (correctAnswers && correctAnswers.length > 1) base.correctAnswers = correctAnswers;
      else if (correctIndex >= 0) base.correctIndex = correctIndex;
      else base.correctIndex = 0;
    } else if (tipe === "pgk") {
      const statements = Array.isArray(item.statements) ? item.statements : [];
      if (statements.length < 2) return null;
      base.statements = statements;
    } else if (tipe === "matching") {
      const left = Array.isArray(item.leftItems) ? item.leftItems : [];
      const right = Array.isArray(item.rightItems) ? item.rightItems : [];
      if (left.length < 2 || right.length < 2) return null;
      base.leftItems = left;
      base.rightItems = right;
      base.correctPairs = item.correctPairs && typeof item.correctPairs === "object" ? item.correctPairs : {};
    } else if (tipe === "shortAnswer") {
      const accepted = Array.isArray(item.acceptedAnswers)
        ? item.acceptedAnswers
        : (item.acceptedAnswers || item.answer || item.jawaban)
          ? [String(item.acceptedAnswers || item.answer || item.jawaban)]
          : [];
      base.acceptedAnswers = accepted;
    }
    return base;
  }

  // ---------- LOCALSTORAGE OFFLINE-FIRST ----------

  _slug(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "default";
  }

  _storageKey() {
    return "kuis-ledakan:soal:" + (this.id || this.kdMateri || this._slug(this.judul) || "default");
  }

  _saveQuestionsLocal() {
    try {
      globalThis.localStorage.setItem(
        this._storageKey(),
        JSON.stringify(this._tempQuestions),
      );
    } catch (_) {
      // storage penuh / tidak tersedia
    }
  }

  _loadQuestionsLocal() {
    try {
      const raw = globalThis.localStorage.getItem(this._storageKey());
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch (_) {
      return null;
    }
  }

  // ---------- EDITOR SOAL (mode edit HAX) ----------

  _openEditor() {
    if (this._editing) return;
    this._editing = true;
    this._editingIndex = -1;
    this._editorOrigin = "start";
    this._tempQuestions = JSON.parse(JSON.stringify(this.questions || DEFAULT_QUESTIONS));
    this._resetEditorForm();
    this._screen = "editor";
    this.requestUpdate();
  }

  _saveAll() {
    if (this._screen !== "editor") return;
    if (!Array.isArray(this._tempQuestions) || this._tempQuestions.length === 0) return;
    this.questions = JSON.parse(JSON.stringify(this._tempQuestions));
    this._editing = false;
    this._editingIndex = -1;
    this._screen = this._editorOrigin || "start";
    this._editorOrigin = "start";
    this._saveQuestionsLocal();
    this.dispatchEvent(
      new CustomEvent("questions-changed", {
        bubbles: true,
        composed: true,
        detail: { questions: this.questions },
      }),
    );
    this.requestUpdate();
  }

  _cancelAll() {
    if (this._screen !== "editor") return;
    this._editing = false;
    this._editingIndex = -1;
    this._screen = this._editorOrigin || "start";
    this._editorOrigin = "start";
    this.requestUpdate();
  }

  _renderEditorScreen() {
    const qType = this._tempQuestionType || "mc";
    return html`
      <div class="quiz-card editor-screen">
        <header class="edit-header">
          <h3 class="quiz-title" style="margin-bottom:8px;">✏️ Edit Soal</h3>
          <div style="display:flex;gap:8px;">
            <button class="btn-edit-soal" style="margin:0;" @click=${this._cancelAll}>Batal</button>
            <button class="btn-edit-soal" style="margin:0;background-color:var(--ddd-theme-success);" @click=${this._saveAll}>💾 Simpan</button>
          </div>
        </header>

        <div class="editor-content">
          <form class="add-question-form">
            <div style="display:flex;gap:8px;margin-bottom:8px;align-items:center;flex-wrap:wrap;">
              <select class="editor-select" .value=${qType} @change=${(e) => { this._tempQuestionType = e.target.value; this.requestUpdate(); }}>
                <option value="mc">Pilihan Ganda</option>
                <option value="pgk">PG Kompleks (Benar/Salah)</option>
                <option value="matching">Menjodohkan</option>
                <option value="shortAnswer">Isian Singkat</option>
              </select>
              <input type="text" class="editor-input" style="flex:1;min-width:160px;"
                placeholder="URL gambar soal (opsional)" .value=${this._tempQuestionImage}
                @input=${(e) => { this._tempQuestionImage = e.target.value; }}>
              <label style="font-size:12px;color:#555;white-space:nowrap;">Poin:</label>
              <input type="number" min="1" class="editor-input" style="width:60px;text-align:center;"
                .value=${this._tempQuestionPoints} @input=${(e) => { this._tempQuestionPoints = parseInt(e.target.value, 10) || 1; }}>
            </div>
            ${this._tempQuestionImage
              ? html`<div style="text-align:center;margin:8px 0;"><img src=${this._tempQuestionImage} style="max-width:200px;border-radius:6px;border:1px solid #ddd;" alt="Pratinjau gambar soal" /></div>`
              : ""}

            <textarea class="question-text-input" .value=${this._tempQuestionText}
              @input=${(e) => (this._tempQuestionText = e.target.value)}
              placeholder="Tuliskan pertanyaan soal..."></textarea>

            ${qType === "mc" ? this._renderEditorMC() : ""}
            ${qType === "pgk" ? this._renderEditorPGK() : ""}
            ${qType === "matching" ? this._renderEditorMatching() : ""}
            ${qType === "shortAnswer" ? this._renderEditorShortAnswer() : ""}

            <button type="button" class="btn-submit" @click=${this._addQuestion}>➕ Tambah Soal</button>
          </form>

          <div class="questions-list">
            ${this._tempQuestions.map((question, index) => html`
              <div class="question-card">
                ${this._editingIndex === index ? html`
                  <div class="edit-form">
                    <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
                      <select class="editor-select" .value=${this._tempQuestionType} @change=${(e) => { this._tempQuestionType = e.target.value; this.requestUpdate(); }}>
                        <option value="mc">Pilihan Ganda</option>
                        <option value="pgk">PG Kompleks</option>
                        <option value="matching">Menjodohkan</option>
                        <option value="shortAnswer">Isian Singkat</option>
                      </select>
                      <input type="text" class="editor-input" style="flex:1;min-width:160px;"
                        placeholder="URL gambar soal" .value=${this._tempQuestionImage}
                        @input=${(e) => { this._tempQuestionImage = e.target.value; }}>
                      <label style="font-size:12px;color:#555;white-space:nowrap;">Poin:</label>
                      <input type="number" min="1" class="editor-input" style="width:60px;text-align:center;"
                        .value=${this._tempQuestionPoints} @input=${(e) => { this._tempQuestionPoints = parseInt(e.target.value, 10) || 1; }}>
                    </div>
                    <textarea class="edit-question-text-input" .value=${this._tempQuestionText}
                      @input=${(e) => (this._tempQuestionText = e.target.value)}
                      placeholder="Tuliskan pertanyaan soal..."></textarea>
                    ${this._tempQuestionType === "mc" ? this._renderEditorMC() : ""}
                    ${this._tempQuestionType === "pgk" ? this._renderEditorPGK() : ""}
                    ${this._tempQuestionType === "matching" ? this._renderEditorMatching() : ""}
                    ${this._tempQuestionType === "shortAnswer" ? this._renderEditorShortAnswer() : ""}
                    <div style="display:flex;gap:8px;margin-top:8px;">
                      <button type="button" class="btn-submit" @click=${this._saveEditQuestion}>💾 Simpan Perubahan</button>
                      <button type="button" class="btn-submit" style="background:#94a3b8;" @click=${this._cancelEditQuestion}>Batal</button>
                    </div>
                  </div>
                ` : html`
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
                    <div>
                      <strong style="color:#4338ca;">[${(question.type || "mc").toUpperCase()}]</strong> ${question.question}
                      ${question.image ? html`<span style="font-size:11px;color:#888;">[gambar]</span>` : ""}
                      <span style="font-size:11px;color:#059669;font-weight:bold;">[${question.points || 1} poin]</span>
                    </div>
                    <div style="display:flex;gap:6px;">
                      <button class="btn-edit-soal" style="margin:0;padding:4px 10px;" @click=${() => this._startEditQuestion(index)}>✏️ Edit</button>
                      <button class="btn-edit-soal" style="margin:0;padding:4px 10px;background-color:#dc2626;" @click=${() => this._deleteQuestion(index)}>🗑️</button>
                    </div>
                  </div>
                `}
              </div>
              `)}
            </div>
          </div>

          <div class="import-box">
            <h4>📥 ${this.t.importTitle}</h4>
            <textarea class="editor-textarea" placeholder="${this.t.importPlaceholder}"
              .value="${this._importText}" @input="${(e) => { this._importText = e.target.value; }}"></textarea>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;align-items:center;">
              <button class="btn-submit" @click="${this._importFromText}">📋 ${this.t.importFromText}</button>
              <input type="file" accept=".json,.txt,application/json" @change="${this._handleImportFile}" />
            </div>
            ${this._importStatus ? html`<p class="err-chip">${this._importStatus}</p>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  _renderEditorMC() {
    const isMulti = this._tempCorrectAnswers.length > 1;
    return html`
      <div class="choices-container">
        ${[0, 1, 2, 3, 4].map((index) => html`
          <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;">
            <input class="editor-input" style="flex:1;min-width:120px;" .value=${this[`_tempChoice${index}`]}
              @input=${(e) => (this[`_tempChoice${index}`] = e.target.value)}
              placeholder="Pilihan ${index + 1}" />
            <input type="url" placeholder="🖼️ URL gambar" class="editor-input" style="width:150px;"
              .value=${this[`_tempChoiceImage${index}`] || ""}
              @input=${(e) => (this[`_tempChoiceImage${index}`] = e.target.value)} />
            <label style="font-size:12px;display:flex;align-items:center;gap:4px;">
              <input type="checkbox" ?checked=${this._tempCorrectAnswers.includes(index)}
                @change=${(e) => {
                  if (e.target.checked) this._tempCorrectAnswers = [...this._tempCorrectAnswers, index];
                  else this._tempCorrectAnswers = this._tempCorrectAnswers.filter((i) => i !== index);
                  if (this._tempCorrectAnswers.length <= 1) this._tempCorrectIndex = index.toString();
                  this.requestUpdate();
                }} />
              Benar
            </label>
            ${this[`_tempChoiceImage${index}`]
              ? html`<img src=${this[`_tempChoiceImage${index}`]} style="max-height:32px;border-radius:3px;" alt="Pratinjau pilihan ${index + 1}" />`
              : ""}
          </div>
        `)}
      </div>
      ${this._tempCorrectAnswers.length <= 1
        ? html`<div style="font-size:11px;color:#888;margin-top:4px;">Centang 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks.</div>`
        : html`<div style="font-size:11px;color:#4338ca;margin-top:4px;font-weight:bold;">Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih</div>`}
    `;
  }

  _renderEditorPGK() {
    const statements = Array.isArray(this._tempStatements) ? this._tempStatements : [];
    return html`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Pernyataan (${statements.length} pernyataan):</div>
      ${statements.map((st, i) => html`
        <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;flex-wrap:wrap;">
          <input class="editor-input" style="flex:1;min-width:200px;"
            .value=${(st && st.text) || ""}
            @input=${(e) => {
              const a = [...this._tempStatements];
              a[i] = { ...a[i], text: e.target.value };
              this._tempStatements = a;
            }}
            placeholder="Teks pernyataan ${i + 1}" />
          <label style="font-size:12px;display:flex;align-items:center;gap:2px;">
            <input type="radio" name="pgk-st-${i}" ?checked=${st && st.answer === true}
              @change=${() => {
                const a = [...this._tempStatements];
                a[i] = { ...a[i], answer: true };
                this._tempStatements = a;
              }} />
            Benar
          </label>
          <label style="font-size:12px;display:flex;align-items:center;gap:2px;">
            <input type="radio" name="pgk-st-${i}" ?checked=${st && st.answer === false}
              @change=${() => {
                const a = [...this._tempStatements];
                a[i] = { ...a[i], answer: false };
                this._tempStatements = a;
              }} />
            Salah
          </label>
          <button type="button" style="font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;cursor:pointer;background:#fee2e2;color:#dc2626;"
            @click=${() => {
              this._tempStatements = this._tempStatements.filter((_, j) => j !== i);
            }}>🗑️</button>
        </div>
      `)}
      <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;cursor:pointer;"
        @click=${() => { this._tempStatements = [...this._tempStatements, { text: "", answer: true }]; }}>➕ Tambah Pernyataan</button>
    </div>`;
  }

  _renderEditorMatching() {
    const leftItems = Array.isArray(this._tempLeftItems) ? this._tempLeftItems : [];
    const rightItems = Array.isArray(this._tempRightItems) ? this._tempRightItems : [];
    return html`<div style="margin:8px 0;font-size:13px;">
      <div style="display:flex;gap:16px;flex-wrap:wrap;">
        <div style="flex:1;min-width:200px;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kiri:</div>
          ${leftItems.map((item, i) => html`
            <input class="editor-input" style="width:100%;margin:4px 0;"
              .value=${item} @input=${(e) => { const a = [...this._tempLeftItems]; a[i] = e.target.value; this._tempLeftItems = a; }}
              placeholder="Item ${i + 1}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;cursor:pointer;"
            @click=${() => { this._tempLeftItems = [...this._tempLeftItems, ""]; }}>+ Tambah</button>
        </div>
        <div style="flex:1;min-width:200px;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kanan:</div>
          ${rightItems.map((item, i) => html`
            <input class="editor-input" style="width:100%;margin:4px 0;"
              .value=${item} @input=${(e) => { const a = [...this._tempRightItems]; a[i] = e.target.value; this._tempRightItems = a; }}
              placeholder="Item ${String.fromCharCode(65 + i)}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;cursor:pointer;"
            @click=${() => {
              const a = [...this._tempRightItems, ""];
              this._tempRightItems = a;
              this._tempCorrectPairs = this._syncCorrectPairs(this._tempCorrectPairs, leftItems.length, a.length);
            }}>+ Tambah</button>
        </div>
      </div>
      <div style="margin-top:8px;">
        <div style="font-weight:500;margin-bottom:4px;">Pasangan (Item Kiri → Item Kanan):</div>
        ${leftItems.map((_, i) => {
          const val = this._tempCorrectPairs && this._tempCorrectPairs[i] != null
            ? this._tempCorrectPairs[i]
            : (i < rightItems.length ? i : 0);
          return html`
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
              <span style="font-size:12px;font-weight:600;min-width:100px;">Item ${i + 1} →</span>
              <select class="editor-input" style="flex:1;"
                @change=${(e) => {
                  this._tempCorrectPairs = { ...this._tempCorrectPairs, [i]: parseInt(e.target.value, 10) };
                }}>
                ${rightItems.map((r, ri) => html`
                  <option value="${ri}" ?selected=${val === ri}>${String.fromCharCode(65 + ri)}. ${r || `Item ${String.fromCharCode(65 + ri)}`}</option>
                `)}
              </select>
            </div>
          `;
        })}
        <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;cursor:pointer;"
          @click=${() => {
            const pairs = {};
            leftItems.forEach((_, i) => { pairs[i] = i < rightItems.length ? i : 0; });
            this._tempCorrectPairs = pairs;
          }}>🔄 Auto-map</button>
      </div>
    </div>`;
  }

  _syncCorrectPairs(pairs, leftCount, rightCount) {
    const out = {};
    for (let i = 0; i < leftCount; i++) {
      const old = pairs && pairs[i];
      out[i] = typeof old === "number" && old >= 0 && old < rightCount ? old : 0;
    }
    return out;
  }

  _renderEditorShortAnswer() {
    return html`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Jawaban yang diterima (pisahkan koma):</div>
      <input class="editor-input" style="width:100%;"
        placeholder="contoh: biomassa, sekam padi, limbah pertanian"
        .value=${this._tempAcceptedAnswers} @input=${(e) => { this._tempAcceptedAnswers = e.target.value; }}>
    </div>`;
  }

  _addQuestion() {
    if (!this._tempQuestionText.trim()) return;
    const qType = this._tempQuestionType || "mc";
    const newQuestion = { type: qType, question: this._tempQuestionText.trim() };
    if (this._tempQuestionImage.trim()) newQuestion.image = this._tempQuestionImage.trim();
    if (this._tempQuestionPoints > 1) newQuestion.points = this._tempQuestionPoints;

    if (qType === "mc") {
      if (!this._tempChoice0.trim() || !this._tempChoice1.trim()) return;
      newQuestion.choices = [0, 1, 2, 3, 4]
        .map((i) => {
          const text = this[`_tempChoice${i}`]?.trim();
          if (!text) return null;
          const img = this[`_tempChoiceImage${i}`]?.trim();
          return img ? { text, image: img } : text;
        })
        .filter(Boolean);
      if (this._tempCorrectAnswers.length > 1) newQuestion.correctAnswers = [...this._tempCorrectAnswers];
      else newQuestion.correctIndex = parseInt(this._tempCorrectIndex, 10);
    } else if (qType === "pgk") {
      newQuestion.statements = Array.isArray(this._tempStatements) ? [...this._tempStatements] : [];
    } else if (qType === "matching") {
      newQuestion.leftItems = [...this._tempLeftItems];
      newQuestion.rightItems = [...this._tempRightItems];
      newQuestion.correctPairs = { ...this._tempCorrectPairs };
    } else if (qType === "shortAnswer") {
      newQuestion.acceptedAnswers = this._tempAcceptedAnswers.split(",").map((s) => s.trim()).filter(Boolean);
    }

    this._tempQuestions = [...this._tempQuestions, newQuestion];
    this._resetEditorForm();
    this.requestUpdate();
  }

  _deleteQuestion(index) {
    if (this._tempQuestions.length <= 3) return;
    this._tempQuestions = this._tempQuestions.filter((_, i) => i !== index);
    if (this._editingIndex === index) {
      this._editingIndex = -1;
      this._resetEditorForm();
    } else if (this._editingIndex > index) {
      this._editingIndex--;
    }
    this.requestUpdate();
  }

  _resetEditorForm() {
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempChoice4 = "";
    this._tempChoiceImage0 = "";
    this._tempChoiceImage1 = "";
    this._tempChoiceImage2 = "";
    this._tempChoiceImage3 = "";
    this._tempChoiceImage4 = "";
    this._tempCorrectIndex = "0";
    this._tempCorrectAnswers = [];
    this._tempQuestionImage = "";
    this._tempQuestionType = "mc";
    this._tempQuestionPoints = 1;
    this._tempLeftItems = ["", ""];
    this._tempRightItems = ["", ""];
    this._tempCorrectPairs = {};
    this._tempAcceptedAnswers = "";
    this._tempAcceptedStatements = "[]";
    this._tempStatements = [];
  }

  _startEditQuestion(index) {
    if (index < 0 || index >= this._tempQuestions.length) return;
    this._editingIndex = index;
    const q = this._tempQuestions[index];
    this._tempQuestionText = q.question || "";
    this._tempQuestionImage = q.image || "";
    this._tempQuestionType = q.type || "mc";
    this._tempQuestionPoints = q.points || 1;
    const choices = q.choices || [];
    this._tempChoice0 = this._getChoiceText(choices[0]) || "";
    this._tempChoice1 = this._getChoiceText(choices[1]) || "";
    this._tempChoice2 = this._getChoiceText(choices[2]) || "";
    this._tempChoice3 = this._getChoiceText(choices[3]) || "";
    this._tempChoice4 = this._getChoiceText(choices[4]) || "";
    this._tempChoiceImage0 = this._getChoiceImage(choices[0]) || "";
    this._tempChoiceImage1 = this._getChoiceImage(choices[1]) || "";
    this._tempChoiceImage2 = this._getChoiceImage(choices[2]) || "";
    this._tempChoiceImage3 = this._getChoiceImage(choices[3]) || "";
    this._tempChoiceImage4 = this._getChoiceImage(choices[4]) || "";
    this._tempCorrectIndex = q.correctIndex != null ? q.correctIndex.toString() : "0";
    this._tempCorrectAnswers = q.correctAnswers || [];
    this._tempLeftItems = q.leftItems || ["", ""];
    this._tempRightItems = q.rightItems || ["", ""];
    this._tempCorrectPairs = q.correctPairs || {};
    this._tempAcceptedAnswers = (q.acceptedAnswers || []).join(", ");
    this._tempAcceptedStatements = JSON.stringify(q.statements || []);
    this._tempStatements = q.statements ? JSON.parse(JSON.stringify(q.statements)) : [];
    this.requestUpdate();
  }

  _saveEditQuestion() {
    if (!this._tempQuestionText.trim()) return;
    if (this._editingIndex < 0 || this._editingIndex >= this._tempQuestions.length) return;
    const qType = this._tempQuestionType || "mc";
    const updated = { type: qType, question: this._tempQuestionText.trim() };
    if (this._tempQuestionImage.trim()) updated.image = this._tempQuestionImage.trim();
    if (this._tempQuestionPoints > 1) updated.points = this._tempQuestionPoints;

    if (qType === "mc") {
      updated.choices = [0, 1, 2, 3, 4]
        .map((i) => {
          const text = this[`_tempChoice${i}`]?.trim();
          if (!text) return null;
          const img = this[`_tempChoiceImage${i}`]?.trim();
          return img ? { text, image: img } : text;
        })
        .filter(Boolean);
      if (this._tempCorrectAnswers.length > 1) updated.correctAnswers = [...this._tempCorrectAnswers];
      else updated.correctIndex = parseInt(this._tempCorrectIndex, 10);
    } else if (qType === "pgk") {
      updated.statements = Array.isArray(this._tempStatements) ? [...this._tempStatements] : [];
    } else if (qType === "matching") {
      updated.leftItems = [...this._tempLeftItems];
      updated.rightItems = [...this._tempRightItems];
      updated.correctPairs = { ...this._tempCorrectPairs };
    } else if (qType === "shortAnswer") {
      updated.acceptedAnswers = this._tempAcceptedAnswers.split(",").map((s) => s.trim()).filter(Boolean);
    }

    this._tempQuestions = this._tempQuestions.map((q, i) => (i === this._editingIndex ? updated : q));
    this._editingIndex = -1;
    this._resetEditorForm();
    this.requestUpdate();
  }

  _cancelEditQuestion() {
    if (this._editingIndex < 0) return;
    this._editingIndex = -1;
    this._resetEditorForm();
    this.requestUpdate();
  }
}

if (!customElements.get(ModularQuiz.tag)) {
  customElements.define(ModularQuiz.tag, ModularQuiz);
}
export { DEFAULT_QUESTIONS };