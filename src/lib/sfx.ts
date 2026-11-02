/* ----------------------------------------------------------------
   Game feedback: WebAudio SFX + haptics. No asset files needed.
   Persisted on/off toggle. Sounds are short & low-volume by design
   (comfort-first). Haptics follow the same toggle.
   ---------------------------------------------------------------- */

let ctx: AudioContext | null = null;
let enabled = true;

try {
  enabled = localStorage.getItem('di_sound') !== 'off';
} catch { /* private mode */ }

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    try { ctx = new AC(); } catch { return null; }
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

// Global mobile user-gesture unlocker so AudioContext never stays suspended
if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    try {
      const c = ac();
      if (c && c.state === 'suspended') {
        c.resume().catch(() => {});
      }
    } catch {}
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('click', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio, { passive: true });
  window.addEventListener('touchstart', unlockAudio, { passive: true });
  window.addEventListener('click', unlockAudio, { passive: true });
}

function tone(
  freq: number,
  dur: number,
  opts: { type?: OscillatorType; vol?: number; delay?: number; slideTo?: number } = {},
) {
  if (!enabled) return;
  const c = ac();
  if (!c) return;
  const { type = 'sine', vol = 0.12, delay = 0, slideTo } = opts;
  const t0 = c.currentTime + delay;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function chord(
  freqs: number[],
  dur: number,
  opts: { type?: OscillatorType; vol?: number; delay?: number; slideTo?: number } = {},
) {
  if (!enabled) return;
  const c = ac();
  if (!c) return;
  const { type = 'triangle', vol = 0.2, delay = 0 } = opts;
  const t0 = c.currentTime + delay;
  const masterGain = c.createGain();
  masterGain.gain.setValueAtTime(0.0001, t0);
  masterGain.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  masterGain.connect(c.destination);

  freqs.forEach(f => {
    const osc = c.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(f, t0);
    if (opts.slideTo) osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + dur);
    osc.connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  });
}

function vibrate(pattern: number | number[]) {
  if (!enabled || reducedMotion()) return;
  try { navigator.vibrate?.(pattern); } catch { /* unsupported */ }
}

// Audio element cache for local physical audio files (public/sounds/*.mp3 or *.wav)
const audioCache: Record<string, HTMLAudioElement> = {};

function playAudioFile(name: string, fallbackSynth: () => void) {
  if (!enabled || typeof window === 'undefined') return;

  let failedMp3 = false;
  let failedWav = false;

  const playWav = () => {
    try {
      const key = `${name}.wav`;
      let audio = audioCache[key];
      if (!audio) {
        audio = new Audio(`/sounds/${key}`);
        audioCache[key] = audio;
      }
      audio.currentTime = 0;
      const p = audio.play();
      if (p !== undefined) {
        p.catch(() => {
          if (!failedWav) {
            failedWav = true;
            fallbackSynth();
          }
        });
      }
    } catch {
      fallbackSynth();
    }
  };

  try {
    const key = `${name}.mp3`;
    let audio = audioCache[key];
    if (!audio) {
      audio = new Audio(`/sounds/${key}`);
      audioCache[key] = audio;
    }
    audio.currentTime = 0;
    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => {
        if (!failedMp3) {
          failedMp3 = true;
          playWav();
        }
      });
    }
  } catch {
    playWav();
  }
}

export const sfx = {
  isOn: () => enabled,
  setOn(v: boolean) {
    enabled = v;
    try { localStorage.setItem('di_sound', v ? 'on' : 'off'); } catch { /* noop */ }
    if (v) sfx.tap();
  },

  /** soft click for any button press */
  tap() {
    tone(360, 0.05, { type: 'sine', vol: 0.15 });
    tone(560, 0.04, { type: 'sine', vol: 0.08, delay: 0.02 });
    vibrate(8);
  },

  /** flip / card reveal — rich upward shimmer sweep */
  reveal() {
    tone(280, 0.22, { type: 'triangle', vol: 0.2, slideTo: 880 });
    tone(560, 0.22, { type: 'sine', vol: 0.12, delay: 0.05, slideTo: 1120 });
    vibrate([12, 24, 12]);
  },

  /** Celebratory victory fanfare — plays win.mp3/wav with synthesized fallback */
  win() {
    vibrate([25, 45, 25, 45, 40]);
    playAudioFile('win', () => {
      // Step 1: C5 + G5
      chord([523.25, 783.99], 0.11, { type: 'triangle', vol: 0.25, delay: 0 });
      // Step 2: E5 + B5
      chord([659.25, 987.77], 0.11, { type: 'triangle', vol: 0.26, delay: 0.09 });
      // Step 3: G5 + D6
      chord([783.99, 1174.66], 0.13, { type: 'triangle', vol: 0.28, delay: 0.18 });
      // Step 4: Grand Major Chord (C6 + E6 + G6 + C4 bass root)
      chord([261.63, 1046.50, 1318.51, 1567.98], 0.55, { type: 'triangle', vol: 0.32, delay: 0.29 });
      // Shimmer sparkle overlay
      tone(2093.00, 0.35, { type: 'sine', vol: 0.1, delay: 0.32 });
    });
  },

  /** alias for win */
  success() {
    this.win();
  },

  /** Generic play dispatcher */
  play(name: string) {
    if (name === 'reveal') this.reveal();
    else if (name === 'correct' || name === 'win' || name === 'victory') this.win();
    else if (name === 'wrong' || name === 'lose' || name === 'error') this.lose();
    else if (name === 'pop') this.pop();
    else this.tap();
  },

  /** Dramatic defeat sound — plays lose.mp3/wav with synthesized fallback */
  lose() {
    vibrate([50, 40, 70]);
    playAudioFile('lose', () => {
      tone(370, 0.13, { type: 'sawtooth', vol: 0.18, delay: 0 });
      tone(349, 0.13, { type: 'sawtooth', vol: 0.18, delay: 0.11 });
      tone(311, 0.16, { type: 'sawtooth', vol: 0.20, delay: 0.22 });
      tone(246, 0.42, { type: 'sawtooth', vol: 0.24, delay: 0.35, slideTo: 98 });
      tone(130, 0.42, { type: 'triangle', vol: 0.26, delay: 0.35, slideTo: 65 });
    });
  },

  /** alias for lose */
  error() {
    this.lose();
  },

  /** Streak / Combo celebration chime */
  streak() {
    vibrate([15, 30, 45]);
    playAudioFile('streak', () => {
      [784, 987, 1174, 1568].forEach((f, i) =>
        tone(f, 0.12, { type: 'sine', vol: 0.22, delay: i * 0.06 }),
      );
    });
  },

  /** 50:50 Lifeline magic sweep */
  fiftyFifty() {
    tone(1100, 0.18, { type: 'sine', vol: 0.18, slideTo: 400 });
    tone(880, 0.22, { type: 'sine', vol: 0.14, delay: 0.08, slideTo: 300 });
    vibrate([10, 25, 10]);
  },

  /** Urgent warning tick when countdown <= 5s */
  urgentTimer() {
    vibrate(15);
    playAudioFile('urgent', () => {
      tone(880, 0.06, { type: 'square', vol: 0.14 });
    });
  },

  /** alias for urgentTimer */
  urgent() {
    sfx.urgentTimer();
  },

  /** alias for tap */
  click() {
    sfx.tap();
  },

  /** vote tick / small confirm */
  tick() {
    tone(660, 0.05, { type: 'square', vol: 0.1 });
    vibrate(8);
  },

  /** badge / counter pop */
  pop() {
    tone(480, 0.1, { type: 'sine', vol: 0.16, slideTo: 820 });
    vibrate(12);
  },

  /** manual haptic feedback for mobile touch */
  haptic(pattern: number | number[] = 10) {
    vibrate(pattern);
  },
};

export const prefersReducedMotion = reducedMotion;
