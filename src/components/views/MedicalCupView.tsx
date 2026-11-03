import { ModalFrame } from '../game/ModalFrame';
import { RoundOutcome } from '../game/RoundOutcome';
import { SoloClues } from '../game/SoloClues';
import { RoomInvite } from '../game/RoomInvite';
import { rosterForMode, roomMatchesMode, minimumRoomPlayers } from '../../lib/mobileGame';
import { HomeView, type HomeAction } from '../home/HomeView';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users, ArrowLeft, RefreshCcw,
  Info, AlertCircle, MessageCircle,
  CheckCircle2, Trophy, ChevronRight, ChevronDown,
  ShieldAlert, Target, Play, Copy, Landmark, Check, HelpCircle, Search, Settings, Lock,
  X, Plus, Stethoscope, Flame, Star, Crown, Smartphone, Globe, LogIn, LogOut, Lightbulb, UserX, Brain, DoorOpen,
  Pill, Activity, Bug, Bone, GraduationCap, Sparkles, Timer, Zap, Award, HeartPulse, FileText,
  Share2, Link2, Camera, Maximize2, Eye, XCircle, SlidersHorizontal, Trash2, Home
} from 'lucide-react';
import { AppUser, Language } from '../../types';
import { Screen, ModeCard, SegOptions, BigBtn, IconBtn, StatPill, Dots, Label, Sheet, CountUp, Disclosure, isAr } from '../game/ui';
import { Confetti } from '../game/Confetti';
import { sfx } from '../../lib/sfx';
import { medicalWords, MedicalWord } from '../../data/medicalWords';
import { WORD_IMAGES, getWordImage } from '../../data/wordImages';
import { getCluesForWord, HINTS_DICTIONARY } from '../../data/hints';
import { getSoloProgressiveHints, generateSoloOptions } from '../../data/soloHints';
import { getSoloFlashcard, SoloFlashcard } from '../../data/soloFlashcards';
import {
  InquiryQuestion,
  ClinicalBranch,
  INQUIRY_ANSWER_OPTIONS,
  STAGE_1_QUESTIONS,
  getAdaptiveQuestionsForStage,
  getBranchQuestionsForStage,
  getWordBranch,
  evaluateQuestionTruth,
  detectSystemFromQuestionAndAnswer,
  getTrueCardSystem,
  MisleadingEntry
} from '../../data/clinicalInquiryTree';
import { db, acquireCloudAccess, withCloudAccess, ensureOnlineIdentity } from '../../firebase';
import { subscribePublicData } from '../../lib/publicData';
import { scoreBank, saveLocalScore } from '../../lib/localScore';
import { readLocal, writeLocal } from '../../lib/localStore';
import { joinRoom, leaveRoom, voteInRoom, guessInDuel } from '../../lib/onlineRoom';
import { doc, setDoc, onSnapshot, getDoc, updateDoc, collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { AdCampaign } from '../../types/ads';
import { InterstitialAdModal } from '../ads/InterstitialAdModal';
import { getRandomAdForPlacement, incrementAndGetMatchesPlayed } from '../../lib/adsEngine';

// Local bank for score earned while playing as a guest (not signed in).
// On first sign-in it is merged once into the account and removed.
const GUEST_SCORE_KEY = 'dr_imposter_guest_score';
// Local bank for missed solo diagnoses (used by the "from your mistakes" mode).
const MISSED_CASES_KEY = 'dr_imposter_missed_cases';

export const AVATAR_TEMPLATES = [
  {
    id: 0,
    name: "Cat",
    emoji: "🐱",
    bg: "bg-orange-500/10 border-orange-500/35",
    color: "#f97316",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fffaf5" stroke="#f97316" strokeWidth="3" />
        <polygon points="18,35 15,10 40,25" fill="#f97316" />
        <polygon points="18,35 15,10 40,25" fill="#fda4af" transform="scale(0.8) translate(8, 8)" />
        <polygon points="82,35 85,10 60,25" fill="#f97316" />
        <polygon points="82,35 85,10 60,25" fill="#fda4af" transform="scale(0.8) translate(14, 8)" />
        <circle cx="50" cy="50" r="32" fill="#fb923c" />
        <circle cx="38" cy="45" r="4" fill="#1e293b" />
        <circle cx="62" cy="45" r="4" fill="#1e293b" />
        <circle cx="32" cy="52" r="4" fill="#fda4af" />
        <circle cx="68" cy="52" r="4" fill="#fda4af" />
        <polygon points="50,50 46,47 54,47" fill="#f43f5e" />
        <path d="M47,53 Q50,56 50,53 Q50,56 53,53" stroke="#1e293b" strokeWidth="2" fill="none" />
        <line x1="25" y1="50" x2="12" y2="48" stroke="#1e293b" strokeWidth="2" />
        <line x1="25" y1="55" x2="12" y2="56" stroke="#1e293b" strokeWidth="2" />
        <line x1="75" y1="50" x2="88" y2="48" stroke="#1e293b" strokeWidth="2" />
        <line x1="75" y1="55" x2="88" y2="56" stroke="#1e293b" strokeWidth="2" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M50,68 L50,96" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M38,72 L42,80 L48,80" stroke="#0d9488" strokeWidth="2" fill="none" />
        <circle cx="48" cy="80" r="3" fill="#0d9488" />
      </svg>
    )
  },
  {
    id: 1,
    name: "Panda",
    emoji: "🐼",
    bg: "bg-emerald-500/10 border-emerald-500/35",
    color: "#10b981",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#f0fdf4" stroke="#34d399" strokeWidth="3" />
        <circle cx="25" cy="28" r="12" fill="#1e293b" />
        <circle cx="75" cy="28" r="12" fill="#1e293b" />
        <circle cx="50" cy="52" r="32" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="38" cy="48" rx="8" ry="10" fill="#1e293b" transform="rotate(-15 38 48)" />
        <ellipse cx="62" cy="48" rx="8" ry="10" fill="#1e293b" transform="rotate(15 62 48)" />
        <circle cx="38" cy="46" r="3" fill="#ffffff" />
        <circle cx="62" cy="46" r="3" fill="#ffffff" />
        <circle cx="39" cy="45" r="1" fill="#000000" />
        <circle cx="63" cy="45" r="1" fill="#000000" />
        <circle cx="28" cy="58" r="4" fill="#fda4af" />
        <circle cx="72" cy="58" r="4" fill="#fda4af" />
        <ellipse cx="50" cy="54" rx="4" ry="2.5" fill="#1e293b" />
        <path d="M47,58 Q50,61 50,58 Q50,61 53,58" stroke="#1e293b" strokeWidth="2" fill="none" />
        <path d="M32,80 L50,68 L68,80 L62,96 L38,96 Z" fill="#34d399" />
        <path d="M42,80 L50,68 L58,80 Z" fill="#ffffff" />
        <path d="M35,80 L42,88 L50,88 L58,88 L65,80" fill="none" stroke="#059669" strokeWidth="2" />
        <path d="M36,75 Q40,90 50,90 Q60,90 64,75" fill="none" stroke="#475569" strokeWidth="2" />
        <circle cx="50" cy="90" r="3" fill="#94a3b8" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Dog",
    emoji: "🐶",
    bg: "bg-blue-500/10 border-blue-500/35",
    color: "#3b82f6",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#eff6ff" stroke="#60a5fa" strokeWidth="3" />
        <path d="M15,25 Q10,50 20,55 Q25,50 24,30" fill="#b45309" />
        <path d="M85,25 Q90,50 80,55 Q75,50 76,30" fill="#b45309" />
        <circle cx="50" cy="50" r="32" fill="#d97706" />
        <ellipse cx="50" cy="58" rx="14" ry="10" fill="#ffffff" />
        <circle cx="38" cy="42" r="4" fill="#1e293b" />
        <circle cx="62" cy="42" r="4" fill="#1e293b" />
        <circle cx="39" cy="41" r="1.5" fill="#ffffff" />
        <circle cx="63" cy="41" r="1.5" fill="#ffffff" />
        <path d="M46,62 Q50,72 54,62 Z" fill="#f43f5e" />
        <ellipse cx="50" cy="51" rx="5" ry="3.5" fill="#1e293b" />
        <path d="M46,56 Q50,59 54,56" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <path d="M28,80 L50,68 L72,80 L66,96 L34,96 Z" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
        <path d="M50,68 L50,86" stroke="#2563eb" strokeWidth="2" />
        <circle cx="50" cy="86" r="3" fill="#2563eb" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Bunny",
    emoji: "🐰",
    bg: "bg-pink-500/10 border-pink-500/35",
    color: "#ec4899",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fdf2f8" stroke="#f472b6" strokeWidth="3" />
        <path d="M30,30 C20,10 32,-2 36,15 C40,30 36,35 30,30 Z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M28,26 C22,12 30,5 33,16 C36,26 33,30 28,26 Z" fill="#fbcfe8" />
        <path d="M70,30 C80,10 68,-2 64,15 C60,30 64,35 70,30 Z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M72,26 C78,12 70,5 67,16 C64,26 67,30 72,26 Z" fill="#fbcfe8" />
        <circle cx="50" cy="52" r="30" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
        <circle cx="38" cy="46" r="4" fill="#475569" />
        <circle cx="62" cy="46" r="4" fill="#475569" />
        <circle cx="36" cy="44" r="1.5" fill="#ffffff" />
        <circle cx="60" cy="44" r="1.5" fill="#ffffff" />
        <circle cx="28" cy="54" r="4" fill="#fbcfe8" />
        <circle cx="72" cy="54" r="4" fill="#fbcfe8" />
        <polygon points="50,52 47,49 53,49" fill="#db2777" />
        <path d="M46,55 Q50,58 50,55 Q50,58 54,55" stroke="#475569" strokeWidth="2" fill="none" />
        <path d="M32,80 L50,68 L68,80 L62,96 L38,96 Z" fill="#db2777" />
        <path d="M42,80 L50,68 L58,80" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M36,75 Q40,90 50,90 Q60,90 64,75" fill="none" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="50" cy="90" r="3" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Bear",
    emoji: "🐻",
    bg: "bg-amber-500/10 border-amber-500/35",
    color: "#f59e0b",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fef3c7" stroke="#fbbf24" strokeWidth="3" />
        <circle cx="26" cy="30" r="10" fill="#78350f" />
        <circle cx="26" cy="30" r="6" fill="#fbcfe8" />
        <circle cx="74" cy="30" r="10" fill="#78350f" />
        <circle cx="74" cy="30" r="6" fill="#fbcfe8" />
        <circle cx="50" cy="52" r="32" fill="#92400e" />
        <ellipse cx="50" cy="58" rx="12" ry="9" fill="#fef3c7" />
        <circle cx="38" cy="44" r="3.5" fill="#1e293b" />
        <circle cx="62" cy="44" r="3.5" fill="#1e293b" />
        <circle cx="39" cy="42" r="1" fill="#ffffff" />
        <circle cx="63" cy="42" r="1" fill="#ffffff" />
        <circle cx="28" cy="52" r="3.5" fill="#fda4af" />
        <circle cx="72" cy="52" r="3.5" fill="#fda4af" />
        <polygon points="50,53 46,49 54,49" fill="#1e293b" />
        <path d="M46,58 Q50,61 50,58 Q50,61 54,58" stroke="#1e293b" strokeWidth="2" fill="none" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="36" y="22" width="28" height="4" fill="#cbd5e1" rx="2" />
        <circle cx="50" cy="24" r="7" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
        <circle cx="50" cy="24" r="3" fill="#e2e8f0" />
      </svg>
    )
  },
  {
    id: 5,
    name: "Fox",
    emoji: "🦊",
    bg: "bg-red-500/10 border-red-500/35",
    color: "#f97316",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fff7ed" stroke="#fb923c" strokeWidth="3" />
        <polygon points="18,32 12,8 38,24" fill="#d97706" />
        <polygon points="18,32 12,8 38,24" fill="#1e293b" transform="scale(0.8) translate(5, 5)" />
        <polygon points="82,32 88,8 62,24" fill="#d97706" />
        <polygon points="82,32 88,8 62,24" fill="#1e293b" transform="scale(0.8) translate(12, 5)" />
        <circle cx="50" cy="52" r="32" fill="#ea580c" />
        <path d="M18,52 Q34,64 50,56 Q66,64 82,52 Q70,76 50,72 Q30,76 18,52 Z" fill="#ffffff" />
        <path d="M32,46 Q38,40 44,46" stroke="#1e293b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M56,46 Q62,40 68,46" stroke="#1e293b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="28" cy="54" r="4" fill="#fecdd3" />
        <circle cx="72" cy="54" r="4" fill="#fecdd3" />
        <ellipse cx="50" cy="56" rx="4" ry="2.5" fill="#1e293b" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M42,80 L50,68 L58,80 Z" fill="#0284c7" />
      </svg>
    )
  },
  {
    id: 6,
    name: "Koala",
    emoji: "🐨",
    bg: "bg-indigo-500/10 border-indigo-500/35",
    color: "#6366f1",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#faf5ff" stroke="#c084fc" strokeWidth="3" />
        <circle cx="22" cy="38" r="14" fill="#94a3b8" />
        <circle cx="22" cy="38" r="9" fill="#fdf2f8" />
        <circle cx="78" cy="38" r="14" fill="#94a3b8" />
        <circle cx="78" cy="38" r="9" fill="#fdf2f8" />
        <circle cx="50" cy="52" r="30" fill="#cbd5e1" />
        <circle cx="38" cy="46" r="3.5" fill="#1e293b" />
        <circle cx="62" cy="46" r="3.5" fill="#1e293b" />
        <circle cx="39" cy="44" r="1" fill="#ffffff" />
        <circle cx="63" cy="44" r="1" fill="#ffffff" />
        <ellipse cx="50" cy="52" rx="6" ry="10" fill="#1e293b" />
        <circle cx="28" cy="56" r="3.5" fill="#fda4af" />
        <circle cx="72" cy="56" r="3.5" fill="#fda4af" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <polygon points="50,68 47,80 50,86 53,80" fill="#7c3aed" />
      </svg>
    )
  },
  {
    id: 7,
    name: "Owl",
    emoji: "🦉",
    bg: "bg-violet-500/10 border-violet-500/35",
    color: "#8b5cf6",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#eef2ff" stroke="#818cf8" strokeWidth="3" />
        <polygon points="26,34 20,18 36,28" fill="#78350f" />
        <polygon points="74,34 80,18 64,28" fill="#78350f" />
        <ellipse cx="50" cy="54" rx="28" ry="26" fill="#92400e" />
        <ellipse cx="50" cy="54" rx="22" ry="20" fill="#fef3c7" />
        <circle cx="38" cy="46" r="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="62" cy="46" r="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="38" cy="46" r="5" fill="#1e293b" />
        <circle cx="62" cy="46" r="5" fill="#1e293b" />
        <circle cx="40" cy="44" r="1.5" fill="#ffffff" />
        <circle cx="64" cy="44" r="1.5" fill="#ffffff" />
        <polygon points="50,48 46,55 54,55" fill="#ea580c" />
        <circle cx="38" cy="46" r="10" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
        <circle cx="62" cy="46" r="10" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
        <line x1="48" y1="46" x2="52" y2="46" stroke="#4f46e5" strokeWidth="2.5" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 8,
    name: "Lion",
    emoji: "🦁",
    bg: "bg-yellow-500/10 border-yellow-500/35",
    color: "#eab308",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fef9c3" stroke="#facc15" strokeWidth="3" />
        <path d="M50,14 Q65,12 68,26 Q82,20 78,35 Q92,38 84,52 Q92,66 78,69 Q82,84 68,78 Q65,92 50,90 Q35,92 32,78 Q18,84 22,69 Q8,66 16,52 Q8,38 22,35 Q18,20 32,26 Q35,12 50,14 Z" fill="#ea580c" />
        <circle cx="50" cy="52" r="26" fill="#fbbf24" />
        <circle cx="34" cy="34" r="6" fill="#ea580c" />
        <circle cx="34" cy="34" r="3" fill="#fda4af" />
        <circle cx="66" cy="34" r="6" fill="#ea580c" />
        <circle cx="66" cy="34" r="3" fill="#fda4af" />
        <circle cx="42" cy="46" r="3" fill="#1e293b" />
        <circle cx="58" cy="46" r="3" fill="#1e293b" />
        <circle cx="43" cy="44" r="1" fill="#ffffff" />
        <circle cx="59" cy="44" r="1" fill="#ffffff" />
        <circle cx="34" cy="54" r="3" fill="#fda4af" />
        <circle cx="66" cy="54" r="3" fill="#fda4af" />
        <polygon points="50,51 46,47 54,47" fill="#1e293b" />
        <path d="M47,54 Q50,57 50,54 Q50,57 53,54" stroke="#1e293b" strokeWidth="2" fill="none" />
        <path d="M32,78 L50,66 L68,78 L62,96 L38,96 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M50,66 L50,96" stroke="#e2e8f0" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 9,
    name: "Penguin",
    emoji: "🐧",
    bg: "bg-teal-500/10 border-teal-500/35",
    color: "#0d9488",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#fff1f2" stroke="#fda4af" strokeWidth="3" />
        <circle cx="50" cy="52" r="30" fill="#1e293b" />
        <ellipse cx="40" cy="50" rx="12" ry="15" fill="#ffffff" />
        <ellipse cx="60" cy="50" rx="12" ry="15" fill="#ffffff" />
        <circle cx="38" cy="46" r="3.5" fill="#1e293b" />
        <circle cx="62" cy="46" r="3.5" fill="#1e293b" />
        <circle cx="39" cy="44" r="1" fill="#ffffff" />
        <circle cx="63" cy="44" r="1" fill="#ffffff" />
        <polygon points="50,48 44,54 56,54" fill="#f59e0b" rx="2" />
        <circle cx="28" cy="56" r="3" fill="#fecdd3" />
        <circle cx="72" cy="56" r="3" fill="#fecdd3" />
        <path d="M30,80 L50,68 L70,80 L65,96 L35,96 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M38,76 Q42,88 50,88 Q58,88 62,76" fill="none" stroke="#e11d48" strokeWidth="2" />
        <circle cx="50" cy="88" r="3" fill="#e11d48" />
      </svg>
    )
  }
];

export const AnimalDoctorAvatar: React.FC<{ avatarId?: number; size?: number; className?: string }> = ({ avatarId = 0, size = 48, className ="" }) => {
  const finalId = Math.max(0, Math.min(9, Math.floor(avatarId))) % 10;
  const template = AVATAR_TEMPLATES[finalId];
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      {template.svg}
    </div>
  );
};

export interface AdvancedFilterState {
  enabled: boolean;
  subjects: string[];
  moduleFilterEnabled: boolean;
  selectedModule: string;
  subjectModules?: Record<string, string>; // Maps specialty/subject ID to specific module ID (e.g.'Anatomy' ->'GIT') or'All'
}

export const MODULE_MAPPINGS: Record<string, { nameEn: string; nameAr: string; subjects: string[]; keywords: string[] }> = {
  CVS: {
    nameEn:'Cardiovascular (CVS)',
    nameAr:'القلب والأوعية الدموية (CVS)',
    subjects: ['Cardiology','Vascular Surgery'],
    keywords: ['heart','cardiac','valve','vein','artery','aorta','mitral','atrial','ventricle','coronary','thrombosis','hypertension','angina','infarction']
  },
  GIT: {
    nameEn:'Gastrointestinal (GIT)',
    nameAr:'الجهاز الهضمي (GIT)',
    subjects: ['Gastroenterology','General Surgery'],
    keywords: ['liver','stomach','colon','intestine','appendix','bile','gallbladder','esophagus','pancreas','gastric','duodenum','rectum','abdominal','colorectal','portal','hernia']
  },
  CNS: {
    nameEn:'Nervous System (CNS)',
    nameAr:'الجهاز العصبي (CNS)',
    subjects: ['Neurology','Psychiatry'],
    keywords: ['brain','nerve','spinal','cerebral','meninges','neural','encephalitis','seizure','dementia','paralysis','sleep','panic','anxiety','compulsive','obsessive']
  },
  Respiratory: {
    nameEn:'Respiratory System',
    nameAr:'الجهاز التنفسي',
    subjects: ['Pulmonology'],
    keywords: ['lung','bronch','trachea','pleura','larynx','pharynx','alveoli','oxygen','respiratory','asthma','pneumonia','croup','apnea']
  },
  Renal: {
    nameEn:'Renal & Urinary',
    nameAr:'الجهاز البولي والكلى',
    subjects: ['Nephrology','Urology'],
    keywords: ['kidney','urinary','bladder','ureter','prostate','renal','nephritis','calculus','dialysis','urine','cystitis']
  },
  Endocrine: {
    nameEn:'Endocrine System',
    nameAr:'الغدد الصماء',
    subjects: ['Endocrinology'],
    keywords: ['thyroid','adrenal','pituitary','hormone','insulin','diabetes','pancreas','endocrine','gland']
  },
  Musculoskeletal: {
    nameEn:'Musculoskeletal',
    nameAr:'الجهاز الحركي والعظام',
    subjects: ['Orthopedics'],
    keywords: ['bone','muscle','joint','tendon','ligament','spine','femur','tibia','humerus','scoliosis','fracture','arthritis','carpal','myalgia']
  },
  Reproductive: {
    nameEn:'Reproductive System',
    nameAr:'الجهاز التناسلي والولادة',
    subjects: ['Obstetrics and Gynecology'],
    keywords: ['uterus','ovary','vagina','pregnancy','fetus','placenta','cervix','uterine','ovarian','semen','testis']
  }
};

export const isWordInModule = (word: MedicalWord, moduleId: string): boolean => {
  const mapping = MODULE_MAPPINGS[moduleId];
  if (!mapping) return false;
  
  const hasSubjectMatch = word.subjects.some(sub => mapping.subjects.includes(sub));
  if (hasSubjectMatch) return true;
  
  const textToSearch = [
    word.word.English.toLowerCase(),
    word.word.Arabic.toLowerCase(),
    ...(word.synonyms || []).map(s => s.toLowerCase()),
    word.type.toLowerCase(),
    ...word.subjects.map(s => s.toLowerCase())
  ].join('');
  
  return mapping.keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
};

export const checkAdvancedFilterWord = (w: MedicalWord, adv: AdvancedFilterState): boolean => {
  // 1. Check if the word matches the subjects/type
  const matchesSubject = adv.subjects.length === 0 || 
    w.subjects.some(sub => adv.subjects.includes(sub)) || 
    adv.subjects.includes(w.type);
  if (!matchesSubject) return false;

  // 2. Check per-subject module filters first (if defined)
  if (adv.subjectModules && Object.keys(adv.subjectModules).length > 0) {
    const matchedSubjects = w.subjects.filter(sub => adv.subjects.includes(sub));
    const matchedType = adv.subjects.includes(w.type) ? w.type : null;

    if (matchedSubjects.length > 0) {
      const hasAnyValidSubjectMatch = matchedSubjects.some(sub => {
        const targetModule = adv.subjectModules?.[sub];
        if (!targetModule || targetModule ==='All') {
          return true;
        }
        return isWordInModule(w, targetModule);
      });
      if (hasAnyValidSubjectMatch) return true;
    }

    if (matchedType) {
      const targetModule = adv.subjectModules?.[matchedType];
      if (!targetModule || targetModule ==='All') {
        return true;
      }
      return isWordInModule(w, targetModule);
    }

    return false;
  }

  // 3. Fallback to legacy global module filter
  if (adv.moduleFilterEnabled && adv.selectedModule) {
    const isAcademic = w.level ==='Academic' || w.level ==='Both';
    if (isAcademic) {
      if (!isWordInModule(w, adv.selectedModule)) {
        return false;
      }
    }
  }

  return true;
};

interface Player {
  id: string;
  name: string;
  score: number;
  role:'NORMAL' |'IMPOSTER';
  assignedWordId: string; // The word they got shown (either the real word, or'Imposter', or a close word)
  votedFor?: string; // ID of the player they voted for
  avatarId?: number; // Cute animal doctor avatar index
}

type GamePhase = 
  |'ENTRY'             // Let user select number of players (1 to 10)
  |'SINGLE_SETUP'      // 1 player setup
  |'SINGLE_PLAYING'    // 1 player game
  |'VISUAL_PLAYING'    // 41 photorealistic visual mystery cards
  |'MULTI_MODE_SELECT'   // 2+ player select Online / Offline
  |'MULTI_SETUP_OFFLINE' // pass-and-play setup - Page 1 (Names)
  |'MULTI_SETUP_OFFLINE_CONFIG' // pass-and-play setup - Page 2 (Specialty & settings)
  |'MULTI_SETUP_ONLINE'  // online setup (create/join room)
  |'ONLINE_LOBBY'      // waiting in online lobby
  |'ROLES_REVEAL'      // pass-and-play / online role screen
  |'PLAY_DISCUSSION'   // real-life discussion & questioning (with example questions)
  |'VOTING_PHASE'      // players vote who is the imposter
  |'REVEAL_IMPOSTER'   // reveal vote outcome
  |'IMPOSTER_GUESS'    // imposter guesses the secret word for a comeback
  |'ROUND_RESULT'      // final scoreboard / round summary
  |'TWO_PLAYERS_DISCUSSION_GUESS'; // 2 players specific guessing screen

interface Props {
  language: Language;
  onSetView: (v: any) => void;
  onGoBack: () => void;
  appUser: AppUser | null;
  onLogin: () => void;
  onPhaseChange?: (phase: string) => void;
  onUpdateScore?: (newScore: number) => void;
  onShowHelp?: () => void;
  initialRoomCode?: string;
  initialAction?: HomeAction;
  overlayOpen?: boolean;
  gameModeLock?: 'GUESS' | 'BATTLE_1V1' | 'DR_IMPOSTER';
}

/* Category metadata for clue chips: icon + colors + bilingual label */
const CLUE_META: Record<string, { icon: React.FC<{ size?: number; className?: string }>; chip: string; ar: string; en: string }> = {
  Rx:             { icon: Pill,          chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25', ar: 'علاجي',  en: 'Treatment' },
  Dx:             { icon: Stethoscope,   chip: 'bg-sky-500/10 text-sky-300 border-sky-500/25',             ar: 'تشخيصي', en: 'Diagnosis' },
  Sx:             { icon: Activity,      chip: 'bg-rose-500/10 text-rose-300 border-rose-500/25',          ar: 'أعراض',  en: 'Symptoms' },
  Etiology:       { icon: Bug,           chip: 'bg-lilac/10 text-lilac border-lilac/30',                   ar: 'المسبب', en: 'Etiology' },
  Anatomy:        { icon: Bone,          chip: 'bg-gold/10 text-gold border-gold/30',                      ar: 'تشريحي', en: 'Anatomy' },
  Classification: { icon: GraduationCap, chip: 'bg-pop/10 text-pop border-pop/30',                         ar: 'تصنيف',  en: 'Category' },
  Pearl:          { icon: Lightbulb,     chip: 'bg-mint/10 text-mint border-mint/30',                      ar: 'خلاصة',  en: 'Pearl' },
};

const renderClueText = (clue: string, size: 'sm' | 'xs' = 'sm', lang: 'Arabic' | 'English' = 'English') => {
  // Clues arrive tagged as "[Rx] text..." from getCluesForWord
  const match = clue.match(/^\[(Rx|Dx|Sx|Etiology|Anatomy|Classification|Pearl)\]\s*([\s\S]*)$/);
  const cat = match ? match[1] : 'Pearl';
  const text = match ? match[2] : clue;
  const meta = CLUE_META[cat] || CLUE_META.Pearl;
  const Icon = meta.icon;

  return (
    <div className="flex items-start gap-2.5 w-full">
      <span className={`inline-flex items-center gap-1 px-2 h-[22px] rounded-full border text-[0.8125rem] font-display font-bold shrink-0 ${meta.chip}`}>
        <Icon size={11} />
        {lang === 'Arabic' ? meta.ar : meta.en}
      </span>
      <p className={`flex-1 font-semibold text-white/85 leading-relaxed ${size === 'xs' ? 'text-[0.84375rem]' : 'text-[0.9375rem]'}`}>
        {text}
      </p>
    </div>
  );
};

export interface StageMeta {
  stage: 1 | 2 | 3 | 4 | 5;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  shortAr: string;
  shortEn: string;
  icon: React.FC<{ size?: number; className?: string }>;
  tone: string;
  glow: string;
}

export const STAGE_META: StageMeta[] = [
  {
    stage: 1,
    titleAr: 'المرحلة ١: التصنيف الطبي الشامل',
    titleEn: 'Stage 1: Macro Classification',
    descAr: 'حصر الكيان الطبي العام: مرض، عضو، دواء، ميكروب، أم أداة؟',
    descEn: 'Identify entity: Disease, Organ, Drug, Pathogen, Tool?',
    shortAr: 'التصنيف',
    shortEn: 'Macro',
    icon: GraduationCap,
    tone: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    glow: 'shadow-[0_0_15px_rgba(245,158,11,0.25)]'
  },
  {
    stage: 2,
    titleAr: 'المرحلة ٢: المنظومة والجهاز العضوي',
    titleEn: 'Stage 2: Organ System / Class',
    descAr: 'تحديد الجهاز المصاب (قلب، هضم، تنفس، أعصاب...) أو الفئة العلاجية',
    descEn: 'Target system: CVS, GIT, Resp, CNS, or Drug Class',
    shortAr: 'الجهاز',
    shortEn: 'System',
    icon: HeartPulse,
    tone: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    glow: 'shadow-[0_0_15px_rgba(56,189,248,0.25)]'
  },
  {
    stage: 3,
    titleAr: 'المرحلة ٣: الطبيعة والآلية الإمراضية',
    titleEn: 'Stage 3: Pathogenesis & Nature',
    descAr: 'السبب المرضي (التهابي، ورمي، مناعي...) أو طبيعة التركيب أو آلية العمل الدوائي',
    descEn: 'Etiology: Inflammatory, Tumor, Autoimmune, Structure, or MOA',
    shortAr: 'الآلية',
    shortEn: 'Pathology',
    icon: Activity,
    tone: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    glow: 'shadow-[0_0_15px_rgba(168,85,247,0.25)]'
  },
  {
    stage: 4,
    titleAr: 'المرحلة ٤: الأعراض السريرية والوظائف',
    titleEn: 'Stage 4: Cardinal Signs & Functions',
    descAr: 'الأعراض الكاردينال الجوهرية، مسار الحالة، أو الوظائف الحيوية',
    descEn: 'Cardinal symptoms, clinical course, or vital functions',
    shortAr: 'الأعراض',
    shortEn: 'Symptoms',
    icon: Stethoscope,
    tone: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    glow: 'shadow-[0_0_15px_rgba(244,63,94,0.25)]'
  },
  {
    stage: 5,
    titleAr: 'المرحلة ٥: التشخيص الذهبي والتدبير',
    titleEn: 'Stage 5: Gold Standard Dx & Management',
    descAr: 'الفحص التأكيدي الحاسم (خزعة، أشعة، تحليل نوعي) أو التدبير العلاجي الجذري',
    descEn: 'Gold standard confirmation: Biopsy, CT/MRI, Surgery, Definitive Rx',
    shortAr: 'التشخيص',
    shortEn: 'Gold Dx',
    icon: Award,
    tone: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    glow: 'shadow-[0_0_15px_rgba(16,185,129,0.25)]'
  }
];

interface CategoryQuestion {
  id: string;
  ar: string;
  en: string;
  types: string[];
}

const categoryQuestionsList: CategoryQuestion[] = [
  {
    id:'disease',
    ar:'هل هذا المصطلح مرض؟',
    en:'Is this term a disease?',
    types: ['Disease','Syndrome']
  },
  {
    id:'drug',
    ar:'هل هذا المصطلح دواء؟',
    en:'Is this term a drug?',
    types: ['Pharma']
  },
  {
    id:'organ',
    ar:'هل هذا المصطلح عضو بشري؟',
    en:'Is this term a human organ?',
    types: ['Organ','Tissue','Cell','Component']
  },
  {
    id:'bacteria',
    ar:'هل هذا المصطلح بكتيريا؟',
    en:'Is this term a bacterium?',
    types: []
  },
  {
    id:'equipment',
    ar:'هل هذا المصطلح جهاز؟',
    en:'Is this term a device/equipment?',
    types: ['Equipment','Technique']
  },
  {
    id:'parasite',
    ar:'هل هذا المصطلح طفيلي؟',
    en:'Is this term a parasite?',
    types: ['Parasite']
  }
];

const getDynamicQuestions = (secretWord: MedicalWord | null) => {
  const baseQuestions = [
    { ar:"هل يندرج هذا المرض/المصطلح تحت تخصص الباطنة؟", en:"Is this condition studied under Internal Medicine?" },
    { ar:"في أي جهاز (Organ System) يقع أو يؤثر هذا العضو/المصطلح؟", en:"Which organ system does this involve or affect?" },
    { ar:"هل يعتبر هذا المرض مناعياً تلقائياً (Autoimmune)؟", en:"Is this an autoimmune condition?" },
    { ar:"هل هذا الشيء يؤثر بشكل مباشر على الوجه أو المظهر الخارجي؟", en:"Does it affect the face or look directly?" },
    { ar:"هل هو متلازمة (Syndrome) أم مرض حاد؟", en:"Is it a custom syndrome or an acute disease?" },
    { ar:"هل يفرز هذا العضو أو يعالج هرمونات معينة؟", en:"Does this organ secrete or process specific hormones?" },
    { ar:"هل يستدعي هذا المرض تدخلاً جراحياً عاجلاً؟", en:"Does this disease require immediate surgical intervention?" },
    { ar:"هل يتم تشخيصه عادةً عن طريق الأشعة أم التحاليل المخبرية؟", en:"Is it usually diagnosed via imaging or lab tests?" },
    { ar:"هل هذا الشيء مجهري ولا يُرى بالعين المجردة؟", en:"Is this entity microscopic and invisible to the naked eye?" },
    { ar:"هل يرتبط هذا المصطلح بأعراض عصبية أو حركية؟", en:"Is this term associated with neurological or motor symptoms?" },
    { ar:"هل يتطلب علاج هذا المصطلح أسلوب حياة خاص أو حمية غذائية معينة؟", en:"Does treating this require a specific lifestyle or diet?" }
  ];

  let selectedCategories: { ar: string; en: string }[] = [];

  if (!secretWord) {
    // Show 2 random category questions plus base questions
    const shuffledCats = [...categoryQuestionsList].sort(() => 0.5 - Math.random());
    selectedCategories = shuffledCats.slice(0, 2);
  } else {
    // Find the true category of the secretWord based on its type
    const trueCategory = categoryQuestionsList.find(cat => cat.types.includes(secretWord.type));

    // Filter out the correct/true category question so the Imposter doesn't see it (to mislead him!)
    const incorrectCategories = categoryQuestionsList.filter(cat => {
      if (trueCategory && cat.id === trueCategory.id) return false;
      // Also if the word is actually a parasite, exclude bacteria too as they are closely related micro-organisms
      if (secretWord.type ==='Parasite' && cat.id ==='bacteria') return false;
      return true;
    });

    // Shuffle the incorrect categories to provide variation ("تنوع في الاسئلة")
    // and pick up to 2 incorrect ones to intersperse
    const shuffledIncorrect = [...incorrectCategories].sort(() => 0.5 - Math.random());
    selectedCategories = shuffledIncorrect.slice(0, 2);
  }

  // Combine and shuffle the entire list so they are completely interspersed naturally
  const combined = [...baseQuestions, ...selectedCategories];
  return combined.sort(() => 0.5 - Math.random());
};

export interface MedicalRank {
  titleAr: string;
  titleEn: string;
  icon: string;
  badgeTone: 'pop' | 'gold' | 'mint' | 'sky' | 'default';
  color: string;
  level: number;
}

export function getMedicalRank(streak: number): MedicalRank {
  if (streak >= 7) {
    return {
      titleAr: 'د. هاوس الأسطوري',
      titleEn: 'Dr. House Legend',
      icon: '👑',
      badgeTone: 'pop',
      color: 'text-pop',
      level: 5
    };
  }
  if (streak >= 5) {
    return {
      titleAr: 'استشاري أول',
      titleEn: 'Senior Consultant',
      icon: '🎖️',
      badgeTone: 'gold',
      color: 'text-gold',
      level: 4
    };
  }
  if (streak >= 3) {
    return {
      titleAr: 'أخصائي تشخيص',
      titleEn: 'Diagnostic Specialist',
      icon: '🔬',
      badgeTone: 'mint',
      color: 'text-mint',
      level: 3
    };
  }
  if (streak >= 1) {
    return {
      titleAr: 'طبيب مقيم',
      titleEn: 'Resident Physician',
      icon: '📋',
      badgeTone: 'sky',
      color: 'text-sky-400',
      level: 2
    };
  }
  return {
    titleAr: 'طبيب امتياز',
    titleEn: 'Medical Intern',
    icon: '🩺',
    badgeTone: 'default',
    color: 'text-white/70',
    level: 1
  };
}

export function getStreakMultiplier(streak: number): number {
  if (streak >= 7) return 2.0;
  if (streak >= 5) return 1.75;
  if (streak >= 3) return 1.5;
  if (streak >= 2) return 1.25;
  return 1.0;
}

export const MedicalCupView: React.FC<Props> = ({ language, onSetView, onGoBack, appUser, onLogin, onPhaseChange, onUpdateScore, onShowHelp, initialRoomCode, initialAction, gameModeLock, overlayOpen = false }) => {
  const [phase, setPhase] = useState<GamePhase>('ENTRY');
  const [notice, setNotice] = useState('');
  const [showSoloLifelines, setShowSoloLifelines] = useState(false);
  const [offlineHandoff, setOfflineHandoff] = useState<{ id: string; name: string } | null>(null);
  const [pageHidden, setPageHidden] = useState(document.hidden);
  const [roundDelta, setRoundDelta] = useState(0);
  const [roundReason, setRoundReason] = useState<'correct' | 'miss' | 'timeout' | 'giveup'>('miss');
  const [leaderboardError, setLeaderboardError] = useState(false);
  const [roomsError, setRoomsError] = useState(false);
  const [onlineVoteSaving, setOnlineVoteSaving] = useState(false);
  useEffect(() => { setLanguageState(language); }, [language]);
  useEffect(() => {
    const update = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  const initialActionHandled = useRef(false);
  const inspectTriggerRef = useRef<HTMLButtonElement>(null);
  const inspectCloseRef = useRef<HTMLButtonElement>(null);
  const [playerCount, setPlayerCount] = useState<number>(1);
  const [languageState, setLanguageState] = useState<Language>(language);

  // Campaign Levels & Leaderboards
  const [singlePlayerLevel, setSinglePlayerLevel] = useState<number>(1);
  const [singleGuessSuccess, setSingleGuessSuccess] = useState<boolean | null>(null);

  const [globalLeaderboard, setGlobalLeaderboard] = useState<any[]>([]);
  const [localLeaderboard, setLocalLeaderboard] = useState<any[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);
  const [activeLeaderboardTab, setActiveLeaderboardTab] = useState<'global' |'local'>('global');
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);

  // Visual Mystery Challenge States
  const [visualPool, setVisualPool] = useState<MedicalWord[]>([]);
  const [visualCurrentIdx, setVisualCurrentIdx] = useState<number>(0);
  const [visualScore, setVisualScore] = useState<number>(0);
  const [visualStreak, setVisualStreak] = useState<number>(0);
  const [visualCluesUnlocked, setVisualCluesUnlocked] = useState<number>(0);
  const [visualOptions, setVisualOptions] = useState<MedicalWord[]>([]);
  const [visualSelectedIdx, setVisualSelectedIdx] = useState<number | null>(null);
  const [visualAnswered, setVisualAnswered] = useState<boolean>(false);
  const [visualIsInspecting, setVisualIsInspecting] = useState<boolean>(false);
  const [visualGameFinished, setVisualGameFinished] = useState<boolean>(false);

  // Sponsored Ad Network states
  const [activeAd, setActiveAd] = useState<AdCampaign | null>(null);
  const [adModalOpen, setAdModalOpen] = useState<boolean>(false);
  const [adHeaderTitle, setAdHeaderTitle] = useState<string>('إعلان الراعي الطبي');
  const [adSkipButtonText, setAdSkipButtonText] = useState<string>('تخطي');
  const [wordRevealedAfterAd, setWordRevealedAfterAd] = useState<boolean>(false);
  const [showIntegrityReport, setShowIntegrityReport] = useState<boolean>(false);
  const adTriggeredRoundRef = useRef<string | null>(null);
  const prevPhaseForAdRef = useRef<GamePhase>(phase);

  // 1. Pre-Round Sponsor Ad ("قبل كل جولة في ظهور لصورة إعلان")
  const triggerPreRoundAd = () => {
    const candidateAd = getRandomAdForPlacement('pre_round');
    if (candidateAd) {
      setActiveAd(candidateAd);
      setAdHeaderTitle(languageState === 'Arabic' ? 'الجولة برعاية' : 'Round Sponsored By');
      setAdSkipButtonText(languageState === 'Arabic' ? 'بدء الجولة ➔' : 'Start Round ➔');
      setAdModalOpen(true);
    }
  };

  // 2. Secret Word Climax Ad (Prior to revealing the secret diagnosis)
  const triggerPreRevealWordAd = (triggerKey: string) => {
    if (adTriggeredRoundRef.current === triggerKey) return;
    adTriggeredRoundRef.current = triggerKey;
    setWordRevealedAfterAd(false);

    const candidateAd = getRandomAdForPlacement('pre_reveal');
    if (candidateAd) {
      setActiveAd(candidateAd);
      setAdHeaderTitle(languageState === 'Arabic' ? 'كشف الكلمة السرية برعاية' : 'Secret Word Sponsored By');
      setAdSkipButtonText(languageState === 'Arabic' ? 'كشف الكلمة السرية ➔' : 'Reveal Secret Word ➔');
      setAdModalOpen(true);
    } else {
      setWordRevealedAfterAd(true);
    }
  };

  const maybeTriggerPostGameAd = (triggerKey: string) => {
    triggerPreRevealWordAd(triggerKey);
  };

  // Phase transition detector for automatic Pre-Round & Pre-Reveal Ads
  useEffect(() => {
    const isStartingRound = (
      (phase === 'SINGLE_PLAYING' && prevPhaseForAdRef.current !== 'SINGLE_PLAYING') ||
      (phase === 'VISUAL_PLAYING' && prevPhaseForAdRef.current !== 'VISUAL_PLAYING') ||
      (phase === 'ROLES_REVEAL' && prevPhaseForAdRef.current !== 'ROLES_REVEAL')
    );
    if (isStartingRound) {
      triggerPreRoundAd();
    }

    if (phase === 'ROUND_RESULT' && prevPhaseForAdRef.current !== 'ROUND_RESULT') {
      triggerPreRevealWordAd(`round_${Date.now()}`);
    }

    prevPhaseForAdRef.current = phase;
  }, [phase]);

  useEffect(() => {
    if (onPhaseChange) {
      onPhaseChange(phase);
    }
  }, [phase, onPhaseChange]);

  const clinicalSpecialties = [
    { id:'Radiology', nameEn:'Radiology', nameAr:'الأشعة والتصوير الطبي' },
    { id:'Internal Medicine', nameEn:'Internal Medicine', nameAr:'الباطنية العامة' },
    { id:'Cardiology', nameEn:'Cardiology', nameAr:'أمراض القلب' },
    { id:'Neurology', nameEn:'Neurology', nameAr:'أمراض الأعصاب' },
    { id:'Pediatrics', nameEn:'Pediatrics', nameAr:'طب الأطفال' },
    { id:'General Surgery', nameEn:'General Surgery', nameAr:'الجراحة العامة' },
    { id:'Pharmacology', nameEn:'Pharmacology', nameAr:'علم الأدوية' },
    { id:'Emergency Medicine', nameEn:'Emergency Medicine', nameAr:'طب الطوارئ' },
    { id:'Infectious Diseases', nameEn:'Infectious Diseases', nameAr:'الأمراض المعدية' },
    { id:'Oncology', nameEn:'Oncology', nameAr:'الأورام' },
    { id:'Hematology', nameEn:'Hematology', nameAr:'أمراض الدم' },
    { id:'Gastroenterology', nameEn:'Gastroenterology', nameAr:'الجهاز الهضمي' },
    { id:'Pulmonology', nameEn:'Pulmonology', nameAr:'الأمراض الصدرية' },
    { id:'Endocrinology', nameEn:'Endocrinology', nameAr:'الغدد الصماء' },
    { id:'Rheumatology', nameEn:'Rheumatology', nameAr:'الروماتيزم' },
    { id:'Dermatology', nameEn:'Dermatology', nameAr:'الجلدية' },
    { id:'Obstetrics and Gynecology', nameEn:'Obstetrics and Gynecology', nameAr:'النساء والتوليد' },
    { id:'Urology', nameEn:'Urology', nameAr:'المسالك البولية' },
    { id:'Psychiatry', nameEn:'Psychiatry', nameAr:'الطب النفسي' },
    { id:'Ophthalmology', nameEn:'Ophthalmology', nameAr:'الرمد والعيون' },
    { id:'Orthopedics', nameEn:'Orthopedics', nameAr:'العظام' },
    { id:'Anaesthesia', nameEn:'Anaesthesia', nameAr:'التخدير' },
    { id:'Vascular Surgery', nameEn:'Vascular Surgery', nameAr:'جراحة الأوعية الدموية' },
    { id:'Clinical Toxicology', nameEn:'Clinical Toxicology', nameAr:'علم السموم الإكلينيكي' }
  ];

  const academicSpecialties = [
    { id:'Anatomy', nameEn:'Anatomy', nameAr:'التشريح' },
    { id:'Physiology', nameEn:'Physiology', nameAr:'علم وظائف الأعضاء' },
    { id:'Biochemistry', nameEn:'Biochemistry', nameAr:'الكيمياء الحيوية' },
    { id:'Histology', nameEn:'Histology', nameAr:'علم الأنسجة' },
    { id:'Microbiology', nameEn:'Microbiology', nameAr:'علم الأحياء الدقيقة' },
    { id:'Parasitology', nameEn:'Parasitology', nameAr:'علم الطفيليات' },
    { id:'Genetics', nameEn:'Genetics', nameAr:'علم الوراثة' },
    { id:'Immunology', nameEn:'Immunology', nameAr:'علم المناعة' },
    { id:'Pathology', nameEn:'Pathology', nameAr:'علم الأمراض' },
    { id:'Forensic Medicine', nameEn:'Forensic Medicine', nameAr:'الطب الشرعي' }
  ];

  // 1 Player (Single Player) State
  const [singleName, setSingleName] = useState('');
  const [singleSpecialty, setSingleSpecialty] = useState('All');
  const [singleDifficulty, setSingleDifficulty] = useState('All');

  // ===== Missed-case bank (from-your-mistakes review mode) =====
  // Diagnoses the player got wrong (wrong pick / timeout / gave up), stored
  // as wordId -> miss count in localStorage. Correctly diagnosing a case in
  // review removes it from the bank, closing the learning loop.
  const [missedCases, setMissedCases] = useState<Record<string, number>>({});
  const [reviewFromMistakes, setReviewFromMistakes] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(MISSED_CASES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') setMissedCases(parsed);
      }
    } catch {}
  }, []);

  const recordMissedCase = (wordId: string) => {
    setMissedCases(prev => {
      const next = { ...prev, [wordId]: (prev[wordId] || 0) + 1 };
      try { localStorage.setItem(MISSED_CASES_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const resolveMissedCase = (wordId: string) => {
    setMissedCases(prev => {
      if (!(wordId in prev)) return prev;
      const next = { ...prev };
      delete next[wordId];
      try { localStorage.setItem(MISSED_CASES_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const clearMissedBank = () => {
    setMissedCases({});
    setReviewFromMistakes(false);
    try { localStorage.removeItem(MISSED_CASES_KEY); } catch {}
  };

  const missedCaseCount = Object.keys(missedCases).length;
  const [singleGuessingDifficulty, setSingleGuessingDifficulty] = useState('All');
  const [singleWord, setSingleWord] = useState<MedicalWord | null>(null);
  const [singleOptions, setSingleOptions] = useState<MedicalWord[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [unlockedHints, setUnlockedHints] = useState<number>(1);
  const [unlockedHintsMulti, setUnlockedHintsMulti] = useState<number>(5);
  const [singleGuess, setSingleGuess] = useState('');
  const [singleScore, setSingleScore] = useState(0);
  const [singleGameEnded, setSingleGameEnded] = useState(false);
  const [singleGameOverMsg, setSingleGameOverMsg] = useState('');

  // Feature 1: Emergency Timer State
  const [singleTimerEnabled, setSingleTimerEnabled] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [speedBonusEarned, setSpeedBonusEarned] = useState<boolean>(false);

  // Feature 2: Diagnostic Streaks & Ranks
  const [singleStreak, setSingleStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);

  // Feature 3: Clinical Lifelines (50:50 and Consultant Hint)
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(false);
  const [usedConsultantHint, setUsedConsultantHint] = useState<boolean>(false);
  const [eliminatedOptionIds, setEliminatedOptionIds] = useState<string[]>([]);

  // Feature 4: Case Debrief Flashcard Modal
  const [showFlashcardModal, setShowFlashcardModal] = useState<boolean>(false);
  const [showSoloAdvancedOptions, setShowSoloAdvancedOptions] = useState<boolean>(false);

  // Advanced Category Filter States
  const [singleAdvancedFilter, setSingleAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule:'GIT',
    subjectModules: {}
  });
  const [multiAdvancedFilter, setMultiAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule:'GIT',
    subjectModules: {}
  });
  const [isAdvancedModalOpen, setIsAdvancedModalOpen] = useState(false);
  const [editingFilterType, setEditingFilterType] = useState<'single' |'multi' | null>(null);
  const [tempAdvancedFilter, setTempAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule:'GIT',
    subjectModules: {}
  });
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showOnlineModeHelp, setShowOnlineModeHelp] = useState(false);

  // Specialty picker sheet + tiny i18n helper for the redesigned UI
  const [specSheet, setSpecSheet] = useState<null |'single' |'multi'>(null);
  const [specSearch, setSpecSearch] = useState('');
  const t = (arText: string, enText: string) => languageState ==='Arabic' ? arText : enText;
  const arLangBool = languageState ==='Arabic';

  const specialtyLabel = (id: string, lang: Language): string => {
    if (id ==='All') return lang ==='Arabic' ?'كل التخصصات' :'All specialties';
    const all = [...clinicalSpecialties, ...academicSpecialties];
    const found = all.find(s => s.id === id);
    return found ? (lang ==='Arabic' ? found.nameAr : found.nameEn) : id;
  };

  // 2+ Players Shared Options
  const [isOnline, setIsOnline] = useState(false); // Online vs Offline
  const [isCreatingRoom, setIsCreatingRoom] = useState<boolean | null>(null); // Null, true = create, false = join
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [currentPlayerName, setCurrentPlayerName] = useState('');
  const [multiSpecialty, setMultiSpecialty] = useState('All');
  const [multiDifficulty, setMultiDifficulty] = useState('All');
  const [multiGuessingDifficulty, setMultiGuessingDifficulty] = useState('All');
  const [multiImageOnlyMode, setMultiImageOnlyMode] = useState<boolean>(false);
  const [imposterCount, setImposterCount] = useState(1);
  const [imposterRevealsMode, setImposterRevealsMode] = useState<'IMPOSTER' |'RELATED_WORD'>('RELATED_WORD');
  const [onlineMaxPlayers, setOnlineMaxPlayers] = useState<number>(4);
  const [publicRooms, setPublicRooms] = useState<any[]>([]);
  const [loadingPublicRooms, setLoadingPublicRooms] = useState<boolean>(false);
  const [copyLinkSuccess, setCopyLinkSuccess] = useState<boolean>(false);

  // Offline Multi list
  const [offlinePlayerNames, setOfflinePlayerNames] = useState<string[]>([]);
  const [offlinePlayerAvatars, setOfflinePlayerAvatars] = useState<number[]>([]);

  // Active Gameplay lists
  const [activePlayers, setActivePlayers] = useState<Player[]>([]);
  const roundStartScores = useRef<Record<string, number>>({});
  useEffect(() => {
    if (phase === 'ROLES_REVEAL') roundStartScores.current = Object.fromEntries(activePlayers.map(p => [p.id, p.score]));
  }, [phase, activePlayers]);
  const [secretWord, setSecretWord] = useState<MedicalWord | null>(null);
  const [imposterAssignedWord, setImposterAssignedWord] = useState<MedicalWord | null>(null); // Closes related word if applicable

  // Pass and play helper index
  const [revealIndex, setRevealIndex] = useState(0);
  const [activeAvatarPickerIdx, setActiveAvatarPickerIdx] = useState<number | null>(null);
  const [isCardHidden, setIsCardHidden] = useState(true);
  const [showMoreClues, setShowMoreClues] = useState<boolean>(false);

  // Voting Index (Offline Pass & Play)
  const [voterIndex, setVoterIndex] = useState(0);
  const [votedPlayerId, setVotedPlayerId] = useState<string>('');
  
  // Real-time Firestore Room State
  const [roomId, setRoomId] = useState<string>('');
  const [onlineRoomState, setOnlineRoomState] = useState<any>(null);
  const [localPlayerId, setLocalPlayerId] = useState<string>('');
  const [onlineActionLoading, setOnlineActionLoading] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const roomUnsubscribeRef = useRef<(() => void) | null>(null);

  const roomConnectionRef = useRef<(() => void) | null>(null);
  const openRoomConnection = async () => {
    if (!navigator.onLine) throw new Error('offline');
    if (!roomConnectionRef.current) roomConnectionRef.current = await acquireCloudAccess();
  };
  const closeRoomConnection = () => {
    roomUnsubscribeRef.current?.();
    roomUnsubscribeRef.current = null;
    roomConnectionRef.current?.();
    roomConnectionRef.current = null;
  };
  const leaveCurrentRoom = async () => {
    roomUnsubscribeRef.current?.();
    roomUnsubscribeRef.current = null;
    try { if (roomId && localPlayerId) await withCloudAccess(() => leaveRoom(roomId, localPlayerId)); }
    catch (error) { console.warn('Room departure failed; room has a two-hour expiry.', error); }
    finally { closeRoomConnection(); }
  };

  // Clean up Firestore real-time listener when component unmounts to prevent memory leaks and UI freezes
  useEffect(() => {
    return () => {
      roomConnectionRef.current?.();
      roomConnectionRef.current = null;
      if (roomUnsubscribeRef.current) {
        roomUnsubscribeRef.current();
        roomUnsubscribeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!onlineRoomState?.expiresAt) return;
    const timer = setTimeout(() => {
      closeRoomConnection();
      setRoomId('');
      setOnlineRoomState(null);
      setPhase('MULTI_SETUP_ONLINE');
      setNotice(t('انتهت مدة الغرفة. أنشئ غرفة جديدة.', 'Room expired. Create a new room.'));
    }, Math.max(0, onlineRoomState.expiresAt - Date.now()));
    return () => clearTimeout(timer);
  }, [onlineRoomState?.expiresAt]);

  // Optional settings come from disk, never a live listener during local play.
  useEffect(() => subscribePublicData(({ gameConfig: cfg }) => {
    if (typeof cfg.turnTimeLimit === 'number' && cfg.turnTimeLimit >= 0) setQuestionTimeLimit(cfg.turnTimeLimit);
    if (typeof cfg.questionsPerPlayer === 'number' && cfg.questionsPerPlayer >= 0) setQuestionsPerPlayer(cfg.questionsPerPlayer);
  }), []);

  // Modal / Toggles
  const [showQuestionExamples, setShowQuestionExamples] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Custom Local Voting and Questioning States
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState<number>(1);
  const [questionTimeLimit, setQuestionTimeLimit] = useState<number>(45);
  const [currentCycleIdx, setCurrentCycleIdx] = useState<number>(0);
  const [turnTimeRemaining, setTurnTimeRemaining] = useState<number>(45);
  const [showAllQuestionsList, setShowAllQuestionsList] = useState<boolean>(false);
  const [questioningCycle, setQuestioningCycle] = useState<{
    askerId: string;
    askerName: string;
    askerAvatarId?: number;
    targetId: string;
    targetName: string;
    targetAvatarId?: number;
    roundNum?: number;
    completed: boolean;
  }[]>([]);
  const [localVotingVotes, setLocalVotingVotes] = useState<Record<string, string[]>>({});
  const [localVoterId, setLocalVoterId] = useState<string | null>(null);
  const [completedVoters, setCompletedVoters] = useState<string[]>([]);
  const [isLocalVotingActive, setIsLocalVotingActive] = useState<boolean>(false);
  const [showLocalVoterTargetSelection, setShowLocalVoterTargetSelection] = useState<boolean>(false);
  const [votedSuspectIds, setVotedSuspectIds] = useState<string[]>([]);

  // 5-Stage Clinical Inquiry States (Online & Offline)
  const [showFinalGuessBox, setShowFinalGuessBox] = useState<boolean>(false);
  const [showInquiryHistory, setShowInquiryHistory] = useState<boolean>(false);
  const [selectedInterrogateDoctorId, setSelectedInterrogateDoctorId] = useState<string | null>(null);
  const [groupInquiryStageTab, setGroupInquiryStageTab] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [showGroupInquirySheet, setShowGroupInquirySheet] = useState<boolean>(false);

  // Offline 2-Player Inquiry States
  const [offlineInquiryStage, setOfflineInquiryStage] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [offlineInquiryTurnIdx, setOfflineInquiryTurnIdx] = useState<number>(0); // 0 = Player 1, 1 = Player 2
  const [offlineFinalGuessNextIdx, setOfflineFinalGuessNextIdx] = useState<number | null>(null);
  const [offlineInquiryTurnsInStage, setOfflineInquiryTurnsInStage] = useState<number>(0);
  const [offlineInquiryActiveQ, setOfflineInquiryActiveQ] = useState<InquiryQuestion | null>(null);
  const [offlineInquiryHistory, setOfflineInquiryHistory] = useState<Array<{
    id: string;
    stage: number;
    askerId: string;
    askerName: string;
    targetId: string;
    targetName: string;
    questionId: string;
    questionAr: string;
    questionEn: string;
    answer: 'YES' | 'NO' | 'MAYBE';
    timestamp: number;
  }>>([]);
  const [offlineInquiryBranches, setOfflineInquiryBranches] = useState<Record<string, ClinicalBranch>>({});
  const [offlineInquirySystems, setOfflineInquirySystems] = useState<Record<string, string>>({});
  const [offlineMisleadingLog, setOfflineMisleadingLog] = useState<MisleadingEntry[]>([]);

  // Audio chime / urgent beep when receiving inquiry question
  const lastSeenQuestionIdRef = React.useRef<string | null>(null);
  useEffect(() => {
    const activeQ = onlineRoomState?.inquiry?.activeQuestion;
    const targetId = onlineRoomState?.inquiry?.targetPlayerId;
    if (activeQ && activeQ.id !== lastSeenQuestionIdRef.current) {
      lastSeenQuestionIdRef.current = activeQ.id;
      if (targetId === localPlayerId) {
        sfx.urgent();
      } else {
        sfx.click();
      }
    } else if (!activeQ) {
      lastSeenQuestionIdRef.current = null;
    }
  }, [onlineRoomState?.inquiry?.activeQuestion, onlineRoomState?.inquiry?.targetPlayerId, localPlayerId]);

  // Keep track of how many times each name has been the imposter
  const [imposterHistory, setImposterHistory] = useState<Record<string, number>>({});

  // Diagnostic questions list dynamically generated to mislead the Imposter
  const exampleQuestions = useMemo(() => {
    return getDynamicQuestions(secretWord);
  }, [secretWord]);

  useEffect(() => {
    setLanguageState(language);
  }, [language]);

  useEffect(() => {
    setShowMoreClues(false);
  }, [phase, revealIndex]);

  // Signed-in and guest scores both persist locally; sync is explicit.
  useEffect(() => {
    setSingleScore(scoreBank(appUser?.id, appUser?.detectiveScore || 0).total);
  }, [appUser?.id, appUser?.detectiveScore]);
  const persistScore = (newScore: number) => {
    saveLocalScore(newScore, appUser?.id, appUser?.detectiveScore || 0);
  };

  // Handle direct URL room invitation (?room=CODE or ?join=CODE)
  useEffect(() => {
    if (initialRoomCode) {
      setRoomCodeInput(initialRoomCode.toUpperCase());
      setIsOnline(true);
      setIsCreatingRoom(false);
      setPhase('MULTI_SETUP_ONLINE');
    }
  }, [initialRoomCode]);

  // Fetch active open rooms whenever online setup is active
  useEffect(() => {
    if (phase === 'MULTI_SETUP_ONLINE' && isCreatingRoom !== true && !initialRoomCode) {
      fetchPublicRooms();
    }
  }, [phase, isCreatingRoom]);

  // Game feedback: sounds + confetti on the moments that matter
  const [confettiBurst, setConfettiBurst] = useState(0);
  useEffect(() => {
    if (phase ==='SINGLE_PLAYING' && singleGameEnded) {
      if (singleGuessSuccess) { sfx.win(); setConfettiBurst(b => b + 1); }
      else sfx.lose();
      maybeTriggerPostGameAd(`single_${Date.now()}`);
    }
    if (phase ==='ROLES_REVEAL' && (isOnline || !isCardHidden)) sfx.reveal();
    if (phase ==='REVEAL_IMPOSTER') {
      const votedId = isOnline ? onlineRoomState?.votedOutPlayerId : votedPlayerId;
      const vp = activePlayers.find(m => m.id === votedId);
      if (vp?.role ==='IMPOSTER') { sfx.win(); setConfettiBurst(b => b + 1); }
      else sfx.lose();
    }
    if (phase ==='ROUND_RESULT') {
      sfx.pop();
      setConfettiBurst(b => b + 1);
      maybeTriggerPostGameAd(`round_${onlineRoomState?.roomCode || 'offline'}_${Date.now()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, singleGameEnded, isCardHidden]);

  // Turn timer effect for structured group interrogation
  useEffect(() => {
    if (phase !== 'PLAY_DISCUSSION' || isLocalVotingActive || questionTimeLimit === 0) return;
    if (turnTimeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTurnTimeRemaining(prev => {
        if (prev <= 1) {
          sfx.tick();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, isLocalVotingActive, questionTimeLimit, turnTimeRemaining]);

  const handleNextQuestionTurn = async () => {
    sfx.tick();
    const updated = [...questioningCycle];
    const nextIdx = currentCycleIdx + 1;
    if (updated[currentCycleIdx]) {
      updated[currentCycleIdx].completed = true;
      setQuestioningCycle(updated);
    }
    if (nextIdx < questioningCycle.length) {
      setCurrentCycleIdx(nextIdx);
      setTurnTimeRemaining(questionTimeLimit || 45);
    } else {
      sfx.win();
      setCurrentCycleIdx(questioningCycle.length);
    }

    if (isOnline && roomId) {
      try {
        const roomRef = doc(db, 'rooms', roomId);
        await updateDoc(roomRef, {
          questioningCycle: updated,
          currentCycleIdx: Math.min(nextIdx, questioningCycle.length)
        });
      } catch (e) {
        console.error('Failed to sync question cycle online:', e);
      }
    }
  };

  const getSinglePlayerClues = (wordObj: MedicalWord) => {
    const cluesLang = languageState ==='Arabic' ?'Arabic' :'English';
    const rawClues = getCluesForWord(wordObj.id, wordObj, cluesLang);
    
    const customSet = HINTS_DICTIONARY[wordObj.id];
    const handWrittenCount = customSet ? (customSet[cluesLang]?.length || 0) : 0;
    
    if (handWrittenCount > 0) {
      const handWritten = rawClues.slice(0, handWrittenCount);
      const dynamicClues = rawClues.slice(handWrittenCount);
      // Reverse hand-written so index N-1 is shown first (hardest/most specific)
      const reversedHandWritten = [...handWritten].reverse();
      return [...reversedHandWritten, ...dynamicClues];
    }
    return [...rawClues].reverse();
  };

  const fetchLeaderboard = async () => {
    setLoadingLeaderboard(true);
    setLeaderboardError(false);
    try {
      const cached = readLocal<{ at: number; rows: any[] } | null>('clinoma-leaderboard', null);
      let rows = cached?.rows;
      if (!cached || Date.now() - cached.at >= 24 * 60 * 60 * 1000) {
        await ensureOnlineIdentity();
        const q = query(collection(db,'users'), orderBy('detectiveScore','desc'), limit(25));
        const snap = await withCloudAccess(() => getDocs(q));
        rows = snap.docs.map(d => ({ ...d.data(), id: d.id }));
        writeLocal('clinoma-leaderboard', { at: Date.now(), rows });
      }
      const snap = { forEach: (fn: (d: any) => void) => rows!.forEach(row => fn({ id: row.id, data: () => row })) };
      const list: any[] = [];
      snap.forEach(docSnap => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          displayName: data.displayName || data.email?.split('@')[0] || (languageState ==='Arabic' ?'طبيب' :'Doctor'),
          detectiveScore: data.detectiveScore || 0,
        });
      });

      const sorted = list.sort((a, b) => b.detectiveScore - a.detectiveScore);
      const ranked = sorted.map((p, idx) => ({ ...p, rank: idx + 1 }));
      setGlobalLeaderboard(ranked);

      if (appUser) {
        const userIndex = ranked.findIndex(p => p.id === appUser.id);
        if (userIndex !== -1) {
          const start = Math.max(0, userIndex - 4);
          const end = Math.min(ranked.length, start + 10);
          setLocalLeaderboard(ranked.slice(start, end));
        } else {
          setLocalLeaderboard([]);
        }
      } else {
        setLocalLeaderboard([]);
      }
    } catch (err) {
      setLeaderboardError(true);
      setGlobalLeaderboard([]);
      setLocalLeaderboard([]);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  // Load saved inputs and filters from localStorage (cache) on mount
  useEffect(() => {
    try {
      const savedSingleName = localStorage.getItem('medical_cup_single_name');
      if (savedSingleName) setSingleName(savedSingleName);
      else if (appUser?.name) setSingleName(appUser.name);

      const savedCurrentPlayerName = localStorage.getItem('medical_cup_current_player_name');
      if (savedCurrentPlayerName) setCurrentPlayerName(savedCurrentPlayerName);
      else if (appUser?.name) setCurrentPlayerName(appUser.name);

      const savedSingleSpecialty = localStorage.getItem('medical_cup_single_specialty');
      if (savedSingleSpecialty) setSingleSpecialty(savedSingleSpecialty);

      const savedMultiSpecialty = localStorage.getItem('medical_cup_multi_specialty');
      if (savedMultiSpecialty) setMultiSpecialty(savedMultiSpecialty);

      const savedSingleDifficulty = localStorage.getItem('medical_cup_single_difficulty');
      if (savedSingleDifficulty) setSingleDifficulty(savedSingleDifficulty);

      const savedMultiDifficulty = localStorage.getItem('medical_cup_multi_difficulty');
      if (savedMultiDifficulty) setMultiDifficulty(savedMultiDifficulty);

      const savedSingleGuessingDifficulty = localStorage.getItem('medical_cup_single_guessing_difficulty');
      if (savedSingleGuessingDifficulty) setSingleGuessingDifficulty(savedSingleGuessingDifficulty);

      const savedMultiGuessingDifficulty = localStorage.getItem('medical_cup_multi_guessing_difficulty');
      if (savedMultiGuessingDifficulty) setMultiGuessingDifficulty(savedMultiGuessingDifficulty);

      const savedSingleAdvanced = localStorage.getItem('medical_cup_single_advanced_filter');
      if (savedSingleAdvanced) {
        const parsed = JSON.parse(savedSingleAdvanced);
        if (parsed && typeof parsed ==='object') setSingleAdvancedFilter(parsed);
      }

      const savedMultiAdvanced = localStorage.getItem('medical_cup_multi_advanced_filter');
      if (savedMultiAdvanced) {
        const parsed = JSON.parse(savedMultiAdvanced);
        if (parsed && typeof parsed ==='object') setMultiAdvancedFilter(parsed);
      }

      const savedImposterHistory = localStorage.getItem('medical_cup_imposter_history');
      if (savedImposterHistory) {
        const parsed = JSON.parse(savedImposterHistory);
        if (parsed && typeof parsed ==='object') setImposterHistory(parsed);
      }
    } catch (e) {
      console.error('Error loading cached game data:', e);
    }
  }, []);

  // Save to localStorage when singleName changes
  useEffect(() => {
    if (singleName) {
      localStorage.setItem('medical_cup_single_name', singleName);
    }
  }, [singleName]);

  // Save to localStorage when currentPlayerName changes
  useEffect(() => {
    if (currentPlayerName) {
      localStorage.setItem('medical_cup_current_player_name', currentPlayerName);
    }
  }, [currentPlayerName]);

  // Save to localStorage when offlinePlayerNames change
  useEffect(() => {
    if (offlinePlayerNames.length > 0) {
      localStorage.setItem('medical_cup_offline_player_names', JSON.stringify(offlinePlayerNames));
    }
  }, [offlinePlayerNames]);

  // Save to localStorage when offlinePlayerAvatars change
  useEffect(() => {
    if (offlinePlayerAvatars.length > 0) {
      localStorage.setItem('medical_cup_offline_player_avatars', JSON.stringify(offlinePlayerAvatars));
    }
  }, [offlinePlayerAvatars]);

  // Save selection states to localStorage
  useEffect(() => {
    localStorage.setItem('medical_cup_single_specialty', singleSpecialty);
  }, [singleSpecialty]);

  useEffect(() => {
    localStorage.setItem('medical_cup_multi_specialty', multiSpecialty);
  }, [multiSpecialty]);

  useEffect(() => {
    localStorage.setItem('medical_cup_single_difficulty', singleDifficulty);
  }, [singleDifficulty]);

  useEffect(() => {
    localStorage.setItem('medical_cup_multi_difficulty', multiDifficulty);
  }, [multiDifficulty]);

  useEffect(() => {
    localStorage.setItem('medical_cup_single_guessing_difficulty', singleGuessingDifficulty);
  }, [singleGuessingDifficulty]);

  useEffect(() => {
    localStorage.setItem('medical_cup_multi_guessing_difficulty', multiGuessingDifficulty);
  }, [multiGuessingDifficulty]);

  useEffect(() => {
    if (singleAdvancedFilter) {
      localStorage.setItem('medical_cup_single_advanced_filter', JSON.stringify(singleAdvancedFilter));
    }
  }, [singleAdvancedFilter]);

  useEffect(() => {
    if (multiAdvancedFilter) {
      localStorage.setItem('medical_cup_multi_advanced_filter', JSON.stringify(multiAdvancedFilter));
    }
  }, [multiAdvancedFilter]);

  useEffect(() => {
    if (imposterHistory && Object.keys(imposterHistory).length > 0) {
      localStorage.setItem('medical_cup_imposter_history', JSON.stringify(imposterHistory));
    }
  }, [imposterHistory]);

  // Initialize roster depending on game mode (2 players for 1v1 Battle, 3+ for Dr. Imposter)
  const ensureOfflineRoster = () => {
    let savedNames: string[] = [];
    let savedAvatars: number[] = [];
    try {
      const s = localStorage.getItem('medical_cup_offline_player_names');
      if (s) { const p = JSON.parse(s); if (Array.isArray(p)) savedNames = p; }
      const sa = localStorage.getItem('medical_cup_offline_player_avatars');
      if (sa) { const p = JSON.parse(sa); if (Array.isArray(p)) savedAvatars = p; }
    } catch { /* ignore cache errors */ }

    const roster = rosterForMode(savedNames, savedAvatars, gameModeLock, languageState === 'Arabic');
    setOfflinePlayerNames(roster.names);
    setOfflinePlayerAvatars(roster.avatars);
    setPlayerCount(roster.names.length);
  };

  const generateRoomCode = () => {
    const chars ='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code ='';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const getRelatedWord = (baseWord: MedicalWord, candidateWords: MedicalWord[] = medicalWords): MedicalWord => {
    // Guard: never hand the imposter or second player the same word
    const diffName = (w: MedicalWord) =>
      w.id !== baseWord.id &&
      w.word.English.trim().toLowerCase() !== baseWord.word.English.trim().toLowerCase() &&
      w.word.Arabic.trim() !== baseWord.word.Arabic.trim();

    const isDiseaseLike = (t: string) => t === 'Disease' || t === 'Syndrome';
    const isAnatomyLike = (t: string) => ['Organ', 'Muscle', 'Nerve', 'Component', 'Cell', 'Tissue'].includes(t);
    const isToolLike = (t: string) => t === 'Equipment' || t === 'Technique';

    // Priority 1: Same type AND exact same difficulty within candidate pool
    let pool = candidateWords.filter(w =>
      diffName(w) &&
      w.type === baseWord.type &&
      w.difficulty === baseWord.difficulty
    );

    // If multiple candidates exist, prioritize those sharing the most clinical subjects
    if (pool.length > 1) {
      const baseSubjSet = new Set(baseWord.subjects);
      const withOverlap = pool.filter(w => w.subjects.some(s => baseSubjSet.has(s)));
      if (withOverlap.length > 0) {
        pool = withOverlap;
      }
    }

    // Priority 2: Compatible clinical type (Disease <-> Syndrome, Anatomy <-> Anatomy, Equipment <-> Technique) with same difficulty
    if (pool.length === 0) {
      pool = candidateWords.filter(w =>
        diffName(w) &&
        w.difficulty === baseWord.difficulty &&
        ((isDiseaseLike(baseWord.type) && isDiseaseLike(w.type)) ||
         (isAnatomyLike(baseWord.type) && isAnatomyLike(w.type)) ||
         (isToolLike(baseWord.type) && isToolLike(w.type)))
      );
    }

    // Priority 3: Same type, any difficulty within candidate pool
    if (pool.length === 0) {
      pool = candidateWords.filter(w => diffName(w) && w.type === baseWord.type);
    }

    // Priority 4: Same difficulty, any type within candidate pool
    if (pool.length === 0) {
      pool = candidateWords.filter(w => diffName(w) && w.difficulty === baseWord.difficulty);
    }

    // Priority 5: Any distinct word from candidateWords
    if (pool.length === 0) {
      pool = candidateWords.filter(w => diffName(w));
    }

    // Priority 6: Absolute safety fallback from full medicalWords
    if (pool.length === 0) {
      pool = medicalWords.filter(w => diffName(w));
    }

    return pool[Math.floor(Math.random() * pool.length)] || baseWord;
  };

  const startSingleGame = () => {
    if (!singleName.trim()) {
      setSingleName(languageState ==='Arabic' ?'طبيب' :'Doctor');
    }
    const missedIds = new Set(Object.keys(missedCases));
    const pool = (reviewFromMistakes && missedIds.size > 0)
      // Review mode: draw only from cases the player previously misdiagnosed.
      ? medicalWords.filter(w => missedIds.has(w.id))
      : medicalWords.filter(w => {
      // 1. Specialty Filter (Advanced or Simple)
      if (singleAdvancedFilter.enabled) {
        if (!checkAdvancedFilterWord(w, singleAdvancedFilter)) return false;
      } else if (singleSpecialty !=='All') {
        const hasSpec = w.subjects.includes(singleSpecialty) || w.type === singleSpecialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (singleDifficulty !=='All') {
        if (w.difficulty !== Number(singleDifficulty)) return false;
      } else {
        // Progressive level scaling when difficulty is set to'All'
        const expectedDiff = singlePlayerLevel <= 2 ? 1 : (singlePlayerLevel <= 4 ? 2 : 3);
        if (w.difficulty !== expectedDiff) return false;
      }
      // 3. Guessing Difficulty Filter
      if (singleGuessingDifficulty !=='All') {
        if (w.guessingDifficulty !== Number(singleGuessingDifficulty)) return false;
      }
      return true;
    });

    const selected = pool.length > 0 
      ? pool[Math.floor(Math.random() * pool.length)] 
      : medicalWords[Math.floor(Math.random() * medicalWords.length)];
    
    const options = generateSoloOptions(selected, medicalWords);

    setSingleWord(selected);
    setSingleOptions(options);
    setSelectedOptionId(null);
    setUnlockedHints(1);
    setSingleGuess('');
    setSingleGameEnded(false);
    setSingleGuessSuccess(null);
    setTimeLeft(45);
    setSpeedBonusEarned(false);
    setUsedFiftyFifty(false);
    setUsedConsultantHint(false);
    setEliminatedOptionIds([]);
    setShowFlashcardModal(false);
    setPhase('SINGLE_PLAYING');
  };

  // Visual Mystery Challenge Handlers
  const initVisualRound = (word: MedicalWord) => {
    const sameTypeWords = medicalWords.filter(w => w.id !== word.id && w.type === word.type);
    const otherWords = medicalWords.filter(w => w.id !== word.id && w.type !== word.type);

    const shuffledSame = [...sameTypeWords].sort(() => 0.5 - Math.random());
    const shuffledOther = [...otherWords].sort(() => 0.5 - Math.random());

    const distractors = [...shuffledSame, ...shuffledOther].slice(0, 3);
    const options = [word, ...distractors].sort(() => 0.5 - Math.random());

    setVisualOptions(options);
    setVisualCluesUnlocked(0);
    setVisualSelectedIdx(null);
    setVisualAnswered(false);
  };

  const startVisualChallenge = () => {
    const wordsWithImages = medicalWords.filter(w => !!WORD_IMAGES[w.id]);
    const shuffled = [...wordsWithImages].sort(() => 0.5 - Math.random());

    setVisualPool(shuffled);
    setVisualCurrentIdx(0);
    setVisualScore(0);
    setVisualStreak(0);
    setVisualGameFinished(false);

    if (shuffled.length > 0) {
      initVisualRound(shuffled[0]);
      setPhase('VISUAL_PLAYING');
      sfx.play('reveal');
    }
  };

  useEffect(() => {
    if (initialActionHandled.current || !initialAction || initialRoomCode) return;
    initialActionHandled.current = true;
    if (initialAction === 'solo') setPhase('SINGLE_SETUP');
    if (initialAction === 'visual') {
      setMultiImageOnlyMode(true);
      ensureOfflineRoster();
      setIsOnline(false);
      setPhase('MULTI_SETUP_OFFLINE');
    }
    if (initialAction === 'offline') {
      setMultiImageOnlyMode(false);
      ensureOfflineRoster();
      setIsOnline(false);
      setPhase('MULTI_SETUP_OFFLINE');
    }
    if (initialAction === 'online') { setOnlineMaxPlayers(gameModeLock === 'BATTLE_1V1' ? 2 : 4); setPlayerCount(gameModeLock === 'BATTLE_1V1' ? 2 : 4); setIsOnline(true); setPhase('MULTI_SETUP_ONLINE'); }
    if (initialAction === 'ranking') { fetchLeaderboard(); setShowLeaderboardModal(true); }
  }, [initialAction, initialRoomCode]);

  useEffect(() => {
    if (!visualIsInspecting) return;
    inspectCloseRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisualIsInspecting(false);
      if (event.key === 'Tab') { event.preventDefault(); inspectCloseRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); inspectTriggerRef.current?.focus(); };
  }, [visualIsInspecting]);

  const handleVisualAnswer = (selectedWord: MedicalWord, index: number) => {
    if (visualAnswered) return;

    setVisualSelectedIdx(index);
    setVisualAnswered(true);

    const currentWord = visualPool[visualCurrentIdx];
    const isCorrect = selectedWord.id === currentWord.id;

    if (isCorrect) {
      sfx.play('correct');
      setConfettiBurst(prev => prev + 1);
      const basePts = visualCluesUnlocked === 0 ? 100 : visualCluesUnlocked === 1 ? 70 : visualCluesUnlocked === 2 ? 50 : 30;
      const streakBonus = Math.min(visualStreak * 15, 60);
      const totalEarned = basePts + streakBonus;

      setVisualScore(prev => prev + totalEarned);
      setVisualStreak(prev => prev + 1);
    } else {
      sfx.play('wrong');
      setVisualStreak(0);
    }
  };

  const nextVisualCase = () => {
    if (visualCurrentIdx + 1 < visualPool.length) {
      const nextIdx = visualCurrentIdx + 1;
      setVisualCurrentIdx(nextIdx);
      initVisualRound(visualPool[nextIdx]);
      sfx.play('pop');
    } else {
      setVisualGameFinished(true);
      sfx.play('victory');
      setConfettiBurst(prev => prev + 2);
      maybeTriggerPostGameAd(`visual_${Date.now()}`);
    }
  };

  // Feature 1: Emergency Rapid Response Timer (45s)
  useEffect(() => {
    if (phase !== 'SINGLE_PLAYING' || singleGameEnded || !singleTimerEnabled || overlayOpen || showExitConfirm || showSoloLifelines || adModalOpen || pageHidden || !!notice) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSingleTimeout();
          return 0;
        }
        if (prev <= 6 && prev > 1) {
          sfx.urgentTimer();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, singleGameEnded, singleTimerEnabled, singleWord, overlayOpen, showExitConfirm, showSoloLifelines, adModalOpen, pageHidden, notice]);

  const handleSingleTimeout = () => {
    if (singleGameEnded || !singleWord) return;
    sfx.lose();
    const penalty = 10;
    const newScore = Math.max(0, singleScore - penalty);
    setRoundDelta(newScore - singleScore);
    setRoundReason('timeout');
    setSingleScore(newScore);
    setSingleStreak(0);
    setSinglePlayerLevel(1);
    persistScore(newScore);
    recordMissedCase(singleWord.id);
    setSingleGuessSuccess(false);
    setSingleGameOverMsg(
      languageState === 'Arabic'
        ? `نفد وقت الاستجابة الطارئة (45 ثانية)! تم خصم ${penalty} نقاط وانكسرت السلسلة. التشخيص الصحيح هو "${singleWord.word.Arabic} (${singleWord.word.English})".`
        : `Emergency response window expired (45s)! Deducted ${penalty} points; streak lost. The correct diagnosis was "${singleWord.word.English} (${singleWord.word.Arabic})".`
    );
    setSingleGameEnded(true);
  };

  // Feature 3: Clinical Lifelines Handlers
  const handleFiftyFifty = () => {
    if (usedFiftyFifty || singleGameEnded || !singleWord) return;
    sfx.fiftyFifty();
    const wrongOptions = singleOptions.filter(o => o.id !== singleWord.id);
    const shuffledWrong = [...wrongOptions].sort(() => 0.5 - Math.random());
    const toEliminate = shuffledWrong.slice(0, 2).map(o => o.id);
    setEliminatedOptionIds(toEliminate);
    setUsedFiftyFifty(true);
  };

  const handleConsultantHint = () => {
    if (usedConsultantHint || singleGameEnded || !singleWord) return;
    sfx.pop();
    setUsedConsultantHint(true);
    if (unlockedHints < 3) {
      setUnlockedHints(prev => Math.min(3, prev + 1));
    }
  };

  const normalizeText = (text: string) => {
    if (!text) return'';
    return text
      .toLowerCase()
      .replace(/[أإآ]/g,'ا')
      .replace(/ة/g,'ه')
      .replace(/ى/g,'ي')
      .replace(/[\u064B-\u065F]/g,'') // remove Arabic diacritics
      .replace(/\s+/g,'') // collapse multi-spaces
      .trim();
  };

  const filteredSearchWords = useMemo(() => {
    const query = searchQuery.trim();
    if (!query) return [];
    
    const normQuery = normalizeText(query);
    const queryNoAl = normQuery.startsWith('ال') ? normQuery.substring(2) : normQuery;

    return medicalWords.filter(w => {
      // 1. English case-insensitive match
      if (w.word.English.toLowerCase().includes(normQuery)) return true;
      
      // 2. Arabic normalized match
      const normArabic = normalizeText(w.word.Arabic);
      if (normArabic.includes(normQuery)) return true;
      
      // 3. Match without the'ال' (Al-) article
      const arabicNoAl = normArabic.startsWith('ال') ? normArabic.substring(2) : normArabic;
      if (arabicNoAl.includes(queryNoAl)) return true;
      if (queryNoAl.includes(arabicNoAl)) return true;
      
      // 4. Match synonyms representing typos, abbreviations, brand names, or local terms
      if (w.synonyms && w.synonyms.length > 0) {
        return w.synonyms.some(syn => {
          const normSyn = normalizeText(syn);
          const synNoAl = normSyn.startsWith('ال') ? normSyn.substring(2) : normSyn;
          return normSyn.includes(normQuery) || synNoAl.includes(queryNoAl);
        });
      }
      return false;
    }).slice(0, 5);
  }, [searchQuery]);

  const submitSingleGuess = (word: MedicalWord) => {
    if (!singleWord || singleGameEnded) return;
    
    setSelectedOptionId(word.id);

    // Robust name/text matching to handle duplicate names or synonyms in database
    const isCorrect = 
      word.id === singleWord.id || 
      normalizeText(word.word.English) === normalizeText(singleWord.word.English) || 
      normalizeText(word.word.Arabic) === normalizeText(singleWord.word.Arabic);
      
    if (isCorrect) {
      sfx.win();
      let baseGain = 0;
      if (unlockedHints === 1) baseGain = 50;
      else if (unlockedHints === 2) baseGain = 30;
      else baseGain = 15;

      const hasSpeedBonus = singleTimerEnabled && timeLeft >= 30;
      const speedBonus = hasSpeedBonus ? 10 : 0;
      setSpeedBonusEarned(hasSpeedBonus);

      const nextStreak = singleStreak + 1;
      setSingleStreak(nextStreak);
      if (nextStreak > highestStreak) {
        setHighestStreak(nextStreak);
      }
      if (nextStreak >= 2) {
        setTimeout(() => sfx.streak(), 380);
      }
      const mult = getStreakMultiplier(nextStreak);
      const totalGained = Math.round((baseGain + speedBonus) * mult);

      const newScore = singleScore + totalGained;
      setRoundDelta(newScore - singleScore);
      setSingleScore(newScore);
      if (onUpdateScore) {
        onUpdateScore(newScore);
      }
      persistScore(newScore);
      resolveMissedCase(singleWord.id);
      setRoundReason('correct');
      setSingleGuessSuccess(true);
      setSinglePlayerLevel(prev => prev + 1); // Advance to next campaign level!

      let bonusText = '';
      if (hasSpeedBonus) {
        bonusText += languageState === 'Arabic' ? ' [مكافأة سرعة +10]' : ' [Speed bonus +10]';
      }
      if (mult > 1) {
        bonusText += languageState === 'Arabic' ? ` [مضاعف السلسلة x${mult}]` : ` [Streak x${mult}]`;
      }

      setSingleGameOverMsg(
        languageState ==='Arabic' 
          ? `تشخيص صحيح! حصلت على ${totalGained} نقطة.${bonusText}` 
          : `Correct diagnosis! +${totalGained} points.${bonusText}`
      );
    } else {
      sfx.lose();
      const penalty = 10;
      const newScore = Math.max(0, singleScore - penalty);
      setRoundDelta(newScore - singleScore);
      setSingleScore(newScore);
      setSingleStreak(0); // reset streak on incorrect guess
      if (onUpdateScore) {
        onUpdateScore(newScore);
      }
      persistScore(newScore);
      recordMissedCase(singleWord.id);
      setRoundReason('miss');
      setSingleGuessSuccess(false);
      setSinglePlayerLevel(1); // Reset campaign level on incorrect guess
      setSingleGameOverMsg(
        languageState ==='Arabic' 
          ? `تشخيص غير دقيق! تم خصم ${penalty} نقاط وانكسرت السلسلة. التشخيص الصحيح هو "${singleWord.word.Arabic} (${singleWord.word.English})".` 
          : `Incorrect diagnosis! Deducted ${penalty} points; streak lost. The correct diagnosis was "${singleWord.word.English} (${singleWord.word.Arabic})".`
      );
    }
    setSingleGameEnded(true);
    setSearchQuery('');
  };

  const startOfflineMultiGame = (keepScores: boolean = false) => {
    const minPlayers = gameModeLock === 'DR_IMPOSTER' ? 3 : 2;
    if (offlinePlayerNames.length !== playerCount || playerCount < minPlayers || playerCount > 10 || (gameModeLock === 'BATTLE_1V1' && playerCount !== 2) || offlinePlayerNames.some(n => !n.trim())) {
      setNotice(
        languageState ==='Arabic' 
          ? `يرجى إدخال أسماء جميع اللاعبين الـ ${playerCount} لتبدأ الجولة!` 
          : `Please fill names for all ${playerCount} players to start!`
      );
      return;
    }

    const filtered = medicalWords.filter(w => {
      // 0. Image Only Mode Filter
      if (multiImageOnlyMode && !WORD_IMAGES[w.id]) return false;
      // 1. Specialty Filter (Advanced or Simple)
      if (multiAdvancedFilter.enabled) {
        if (!checkAdvancedFilterWord(w, multiAdvancedFilter)) return false;
      } else if (multiSpecialty !=='All') {
        const hasSpec = w.subjects.includes(multiSpecialty) || w.type === multiSpecialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (multiDifficulty !=='All') {
        if (w.difficulty !== Number(multiDifficulty)) return false;
      }
      // 3. Guessing Difficulty Filter
      if (multiGuessingDifficulty !=='All') {
        if (w.guessingDifficulty !== Number(multiGuessingDifficulty)) return false;
      }
      return true;
    });
    const wordsWithImages = medicalWords.filter(w => !!WORD_IMAGES[w.id]);
    const chosenWord = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : (multiImageOnlyMode && wordsWithImages.length > 0
          ? wordsWithImages[Math.floor(Math.random() * wordsWithImages.length)]
          : medicalWords[Math.floor(Math.random() * medicalWords.length)]);
    setSecretWord(chosenWord);

    const secondaryPool = filtered.length >= 2
      ? filtered
      : (multiImageOnlyMode && wordsWithImages.length > 0 ? wordsWithImages : medicalWords);
    const secondaryWord = getRelatedWord(chosenWord, secondaryPool);
    setImposterAssignedWord(secondaryWord);

    const updated: Player[] = offlinePlayerNames.map((name, idx) => {
      const existing = activePlayers.find(p => p.name === name);
      return {
        id: existing?.id || Math.random().toString(36).substr(2, 9),
        name: name,
        score: keepScores ? (existing?.score || 0) : 0,
        role: 'NORMAL',
        assignedWordId: chosenWord.id,
        avatarId: offlinePlayerAvatars[idx] !== undefined ? offlinePlayerAvatars[idx] : (idx % 10)
      };
    });

    if (playerCount >= 3) {
      const actualImposterCount = (playerCount >= 5 && imposterCount === 2) ? 2 : 1;
      
      // Map each player to their index and current imposter count
      const playersWithCounts = updated.map((p, idx) => {
        const nameKey = p.name.trim().toLowerCase();
        const count = imposterHistory[nameKey] || 0;
        return { index: idx, name: p.name, count };
      });

      // Complete Fisher-Yates shuffle first to randomize elements with equal counts
      const shuffled = [...playersWithCounts];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }

      // Stable sort by count ascending. 
      // This guarantees players with lower imposter counts are selected first.
      shuffled.sort((a, b) => a.count - b.count);

      // Select the first'actualImposterCount' players
      const chosenImposters = shuffled.slice(0, actualImposterCount);

      // Update roles and assigned words
      chosenImposters.forEach(item => {
        const idx = item.index;
        updated[idx].role ='IMPOSTER';
        updated[idx].assignedWordId = imposterRevealsMode ==='RELATED_WORD' ? secondaryWord.id :'IMPOSTER';
      });

      // Increment counts in history
      const nextHistory = { ...imposterHistory };
      chosenImposters.forEach(item => {
        const nameKey = item.name.trim().toLowerCase();
        nextHistory[nameKey] = (nextHistory[nameKey] || 0) + 1;
      });

      // Normalize history to keep counts relative (subtract min value)
      const historyValues = Object.values(nextHistory) as number[];
      if (historyValues.length > 0) {
        const minVal = Math.min(...historyValues);
        if (minVal > 0) {
          Object.keys(nextHistory).forEach(k => {
            nextHistory[k] = nextHistory[k] - minVal;
          });
        }
      }

      setImposterHistory(nextHistory);

      // Build balanced questioning cycle where each player questions exactly one other player
      // Shuffle players first with Fisher-Yates to randomize the questioning cycle order
      const cyclePlayers = [...updated];
      for (let i = cyclePlayers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cyclePlayers[i];
        cyclePlayers[i] = cyclePlayers[j];
        cyclePlayers[j] = temp;
      }

      const cycle = [];
      const numRounds = questionsPerPlayer === 0 ? 0 : questionsPerPlayer;
      for (let r = 0; r < numRounds; r++) {
        const offset = r + 1;
        for (let i = 0; i < cyclePlayers.length; i++) {
          const asker = cyclePlayers[i];
          const target = cyclePlayers[(i + offset) % cyclePlayers.length];
          cycle.push({
            askerId: asker.id,
            askerName: asker.name,
            askerAvatarId: asker.avatarId,
            targetId: target.id,
            targetName: target.name,
            targetAvatarId: target.avatarId,
            roundNum: r + 1,
            completed: false
          });
        }
      }
      setQuestioningCycle(cycle);
      setCurrentCycleIdx(0);
      setTurnTimeRemaining(questionTimeLimit || 45);
    } else {
      if (playerCount === 2) {
        updated[0].assignedWordId = chosenWord.id;
        updated[1].assignedWordId = secondaryWord.id;
        setOfflineInquiryStage(1);
        setOfflineInquiryTurnsInStage(0);
        setOfflineInquiryTurnIdx(0);
        setOfflineFinalGuessNextIdx(null);
        setOfflineInquiryActiveQ(null);
        setOfflineInquiryHistory([]);
        setOfflineInquirySystems({});
        setOfflineMisleadingLog([]);
        setOfflineInquiryBranches({
          [updated[0].id]: getWordBranch(chosenWord),
          [updated[1].id]: getWordBranch(secondaryWord)
        });
        setShowFinalGuessBox(false);
      }
      setQuestioningCycle([]);
    }

    // Reset local voting states
    setLocalVotingVotes({});
    setLocalVoterId(null);
    setCompletedVoters([]);
    setIsLocalVotingActive(false);
    setShowLocalVoterTargetSelection(false);
    setVotedSuspectIds([]);

    setActivePlayers(updated);
    setRevealIndex(0);
    setIsCardHidden(true);
    setVoterIndex(0);
    setPhase('ROLES_REVEAL');
  };

  // Public Rooms Browser for lonely study-at-home medical students
  // NOTE: Firestore rules only allow listing LOBBY + isPublic rooms with a
  // hard limit (no harvesting of live games), so the filter is server-side.
  const fetchPublicRooms = async () => {
    setLoadingPublicRooms(true);
    setRoomsError(false);
    try {
      await ensureOnlineIdentity();
      const q = query(
        collection(db, 'rooms'),
        where('status', '==', 'LOBBY'),
        where('isPublic', '==', true),
        where('expiresAt', '>', Date.now()),
        limit(25)
      );
      const snap = await withCloudAccess(() => getDocs(q));
      const rooms: any[] = [];
      const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;
      snap.forEach(docSnap => {
        const d = docSnap.data();
        if (
          d.status === 'LOBBY' &&
          Array.isArray(d.players) &&
          d.players.length < (d.maxPlayers || 4) &&
          (!d.createdAt || d.createdAt > twoHoursAgo)
        ) {
          if (roomMatchesMode(d.maxPlayers || 4, gameModeLock)) rooms.push({ ...d, id: docSnap.id });
        }
      });
      rooms.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setPublicRooms(rooms);
    } catch (err) {
      setRoomsError(true);
      setPublicRooms([]);
      console.warn('Could not fetch public rooms:', err);
    } finally {
      setLoadingPublicRooms(false);
    }
  };

  // Firestore Real-time Multi Code
  const createOnlineRoom = async () => {
    if (!currentPlayerName.trim()) {
      setNotice(languageState ==='Arabic' ?'يرجى إدخال اسمك أولاً!' :'Please enter your name first!');
      return;
    }
    setOnlineActionLoading(true);
    try {
      const code = generateRoomCode();
      await openRoomConnection();
      const pid = await ensureOnlineIdentity();
      setLocalPlayerId(pid);
      setRoomId(code);

      const roomRef = doc(db,'rooms', code);
      const initialData = {
        id: code,
        hostId: pid,
        memberIds: [pid],
        expiresAt: Date.now() + 2 * 60 * 60 * 1000,
        status:'LOBBY',
        maxPlayers: onlineMaxPlayers,
        isPublic: true,
        createdAt: Date.now(),
        specialty: multiSpecialty,
        advancedFilter: multiAdvancedFilter,
        difficulty: multiDifficulty,
        guessingDifficulty: multiGuessingDifficulty,
        imposterCount: onlineMaxPlayers >= 5 ? imposterCount : 1,
        imposterRevealsMode: imposterRevealsMode,
        imageOnlyMode: multiImageOnlyMode,
        questionsPerPlayer: questionsPerPlayer,
        questionTimeLimit: questionTimeLimit,
        questioningCycle: [],
        currentCycleIdx: 0,
        imposterHistory: {},
        players: [
          { id: pid, name: currentPlayerName.trim().slice(0, 40), score: 0, role:'NORMAL', assignedWordId:'' }
        ],
        votes: {},
        secretWord: null,
        imposterAssignedWord: null,
        imposterGuessedWordId: null,
        twoPlayersGuessMatched: {}
      };

      await setDoc(roomRef, initialData);
      listenToRoom(code, pid);
      setPhase('ONLINE_LOBBY');
    } catch (error: any) {
      closeRoomConnection();
      console.error("Firestore create room error:", error);
      setNotice(languageState ==='Arabic' 
        ? `عذراً، فشل إنشاء الغرفة. يرجى التحقق من اتصالك بالإنترنت. ` 
        : `Failed to create room. Please check your internet. `);
    } finally {
      setOnlineActionLoading(false);
    }
  };

  const joinOnlineRoom = async (codeOverride?: string) => {
    if (!currentPlayerName.trim()) {
      setNotice(languageState ==='Arabic' ?'يرجى إدخال اسمك أولاً!' :'Please enter your name first!');
      return;
    }
    const code = (codeOverride || roomCodeInput).trim().toUpperCase();
    if (code.length !== 6) {
      setNotice(languageState ==='Arabic' ?'رمز الغرفة غير صحيح (يجب أن يتكون من 6 حروف/أرقام)!' :'Invalid room code format (must be 6 chars)!');
      return;
    }

    setOnlineActionLoading(true);
    try {
      await openRoomConnection();
      const pid = await joinRoom(code, currentPlayerName, capacity => !!initialRoomCode || roomMatchesMode(capacity, gameModeLock));
      setLocalPlayerId(pid);
      setRoomId(code);

      listenToRoom(code, pid);
      setPhase('ONLINE_LOBBY');
    } catch (error: any) {
      closeRoomConnection();
      console.error("Firestore join room error:", error);
      setNotice(languageState ==='Arabic' 
        ? `عذراً، فشل الانضمام للغرفة. ` 
        : `Failed to join room. `);
    } finally {
      setOnlineActionLoading(false);
    }
  };

  const startOnlineMatch = async () => {
    if (!onlineRoomState) return;
    if (onlineRoomState.players.length < minimumRoomPlayers(onlineRoomState.maxPlayers)) {
      setNotice(languageState === 'Arabic' ? 'انتظر اكتمال عدد اللاعبين المطلوب.' : 'Wait for the required players to join.');
      return;
    }

    const filtered = medicalWords.filter(w => {
      // 0. Image Only Mode Filter
      if (onlineRoomState.imageOnlyMode && !WORD_IMAGES[w.id]) return false;
      // 1. Specialty Filter (Advanced or Simple)
      if (onlineRoomState.advancedFilter && onlineRoomState.advancedFilter.enabled) {
        const adv = onlineRoomState.advancedFilter;
        if (!checkAdvancedFilterWord(w, adv)) return false;
      } else if (onlineRoomState.specialty !=='All') {
        const hasSpec = w.subjects.includes(onlineRoomState.specialty) || w.type === onlineRoomState.specialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (onlineRoomState.difficulty && onlineRoomState.difficulty !=='All') {
        if (w.difficulty !== Number(onlineRoomState.difficulty)) return false;
      }
      // 3. Guessing Difficulty Filter
      if (onlineRoomState.guessingDifficulty && onlineRoomState.guessingDifficulty !=='All') {
        if (w.guessingDifficulty !== Number(onlineRoomState.guessingDifficulty)) return false;
      }
      return true;
    });
    const wordsWithImages = medicalWords.filter(w => !!WORD_IMAGES[w.id]);
    const chosenWord = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : (onlineRoomState.imageOnlyMode && wordsWithImages.length > 0
          ? wordsWithImages[Math.floor(Math.random() * wordsWithImages.length)]
          : medicalWords[Math.floor(Math.random() * medicalWords.length)]);
    const secondaryPool = filtered.length >= 2
      ? filtered
      : (onlineRoomState.imageOnlyMode && wordsWithImages.length > 0 ? wordsWithImages : medicalWords);
    const secondaryWord = getRelatedWord(chosenWord, secondaryPool);

    const members = [...onlineRoomState.players];
    const nPlayers = members.length;

    if (nPlayers === 2) {
      members[0].assignedWordId = chosenWord.id;
      members[0].role ='NORMAL';
      members[1].assignedWordId = secondaryWord.id;
      members[1].role ='NORMAL';
    } else {
      const targetImposterCount = (nPlayers >= 5 && onlineRoomState.imposterCount === 2) ? 2 : 1;
      
      const currentImposterHistory = onlineRoomState.imposterHistory || {};
      
      // Map members to their indices and current imposter counts
      const membersWithCounts = members.map((m: any, idx: number) => {
        const nameKey = m.name.trim().toLowerCase();
        const count = currentImposterHistory[nameKey] || 0;
        return { index: idx, name: m.name, count };
      });

      // Complete Fisher-Yates shuffle first to randomize elements with equal counts
      const shuffled = [...membersWithCounts];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }

      // Stable sort by count ascending. 
      // This guarantees players with lower imposter counts are selected first.
      shuffled.sort((a, b) => a.count - b.count);

      // Select the first'targetImposterCount' members
      const chosenImposters = shuffled.slice(0, targetImposterCount);

      // Reset all members to NORMAL/chosenWord
      members.forEach((m: any) => {
        m.role ='NORMAL';
        m.assignedWordId = chosenWord.id;
      });

      // Assign IMPOSTER to selected members
      chosenImposters.forEach(item => {
        const idx = item.index;
        members[idx].role ='IMPOSTER';
        members[idx].assignedWordId = onlineRoomState.imposterRevealsMode ==='RELATED_WORD' ? secondaryWord.id :'IMPOSTER';
      });

      // Increment counts in history
      const nextHistory = { ...currentImposterHistory };
      chosenImposters.forEach(item => {
        const nameKey = item.name.trim().toLowerCase();
        nextHistory[nameKey] = (nextHistory[nameKey] || 0) + 1;
      });

      // Normalize history to keep counts relative (subtract min value)
      const historyValues = Object.values(nextHistory) as number[];
      if (historyValues.length > 0) {
        const minVal = Math.min(...historyValues);
        if (minVal > 0) {
          Object.keys(nextHistory).forEach(k => {
            nextHistory[k] = (nextHistory[k] as number) - minVal;
          });
        }
      }

      const initialInquiry = {
        stage: 1,
        turnPlayerId: members[0].id,
        targetPlayerId: members[1]?.id || '',
        activeQuestion: null,
        activeAnswer: null,
        turnsInStage: 0,
        history: [],
        resolvedBranches: {}
      };

      // Generate question cycle for 3+ players online
      const cyclePlayers = [...members];
      for (let i = cyclePlayers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cyclePlayers[i];
        cyclePlayers[i] = cyclePlayers[j];
        cyclePlayers[j] = temp;
      }

      const qPerPlayer = onlineRoomState?.questionsPerPlayer !== undefined ? onlineRoomState.questionsPerPlayer : questionsPerPlayer;
      const qTimeLimit = onlineRoomState?.questionTimeLimit !== undefined ? onlineRoomState.questionTimeLimit : questionTimeLimit;

      const cycle = [];
      const numRounds = qPerPlayer === 0 ? 0 : qPerPlayer;
      for (let r = 0; r < numRounds; r++) {
        const offset = r + 1;
        for (let i = 0; i < cyclePlayers.length; i++) {
          const asker = cyclePlayers[i];
          const target = cyclePlayers[(i + offset) % cyclePlayers.length];
          cycle.push({
            askerId: asker.id,
            askerName: asker.name,
            askerAvatarId: asker.avatarId,
            targetId: target.id,
            targetName: target.name,
            targetAvatarId: target.avatarId,
            roundNum: r + 1,
            completed: false
          });
        }
      }

      setQuestioningCycle(cycle);
      setCurrentCycleIdx(0);
      setTurnTimeRemaining(qTimeLimit || 45);

      const roomRef = doc(db,'rooms', roomId);
      await updateDoc(roomRef, {
        status:'PLAYING',
        players: members,
        secretWord: chosenWord,
        imposterAssignedWord: secondaryWord,
        imposterHistory: nextHistory,
        votes: {},
        imposterGuessedWordId: null,
        twoPlayersGuessMatched: {},
        inquiry: initialInquiry,
        questioningCycle: cycle,
        currentCycleIdx: 0,
        questionsPerPlayer: qPerPlayer,
        questionTimeLimit: qTimeLimit
      });
      return;
    }

    const initialInquiry = {
      stage: 1,
      turnPlayerId: members[0].id,
      targetPlayerId: members[1].id,
      activeQuestion: null,
      activeAnswer: null,
      turnsInStage: 0,
      history: [],
      resolvedBranches: {
        [members[0].id]: getWordBranch(chosenWord),
        [members[1].id]: getWordBranch(secondaryWord)
      }
    };

    const roomRef = doc(db,'rooms', roomId);
    await updateDoc(roomRef, {
      status:'PLAYING',
      players: members,
      secretWord: chosenWord,
      imposterAssignedWord: secondaryWord,
      votes: {},
      imposterGuessedWordId: null,
      twoPlayersGuessMatched: {},
      inquiry: initialInquiry
    });
  };

  const listenToRoom = (code: string, pid: string) => {
    // Unsubscribe from any previous room listener before attaching a new one
    if (roomUnsubscribeRef.current) {
      roomUnsubscribeRef.current();
      roomUnsubscribeRef.current = null;
    }

    const roomRef = doc(db,'rooms', code);
    const unsub = onSnapshot(roomRef, (snapshot) => {
      if (!snapshot.exists()) {
        closeRoomConnection();
        setOnlineRoomState(null);
        setRoomId('');
        setPhase('MULTI_SETUP_ONLINE');
        setNotice(t('أُغلقت الغرفة. يمكنك إنشاء غرفة جديدة.', 'The room closed. You can create another room.'));
        return;
      }
      const data = snapshot.data();
      setOnlineRoomState(data);

      if (data.players) {
        setActivePlayers(data.players);
        setPlayerCount(data.players.length);
      }
      if (data.secretWord) {
        setSecretWord(data.secretWord);
      }
      if (data.imposterAssignedWord) {
        setImposterAssignedWord(data.imposterAssignedWord);
      }
      if (data.questioningCycle) {
        setQuestioningCycle(data.questioningCycle);
      }
      if (data.currentCycleIdx !== undefined) {
        setCurrentCycleIdx(prev => {
          if (prev !== data.currentCycleIdx) {
            setTurnTimeRemaining(data.questionTimeLimit || 45);
          }
          return data.currentCycleIdx;
        });
      }
      if (data.questionsPerPlayer !== undefined) {
        setQuestionsPerPlayer(data.questionsPerPlayer);
      }
      if (data.questionTimeLimit !== undefined) {
        setQuestionTimeLimit(data.questionTimeLimit);
      }

      if (data.status ==='LOBBY') {
        setPhase('ONLINE_LOBBY');
      } else if (data.status ==='PLAYING') {
        setPhase('ROLES_REVEAL');
      } else if (data.status ==='PLAYING_DISCUSSION') {
        setPhase('PLAY_DISCUSSION');
      } else if (data.status ==='VOTING') {
        setPhase('VOTING_PHASE');
      } else if (data.status ==='REVEALED') {
        setPhase('REVEAL_IMPOSTER');
      } else if (data.status ==='GUESSING') {
        setPhase('IMPOSTER_GUESS');
      } else if (data.status ==='SCOREBOARD') {
        setPhase('ROUND_RESULT');
      } else if (data.status ==='TWO_PLAYERS_GUESS') {
        setPhase('TWO_PLAYERS_DISCUSSION_GUESS');
      }
    }, (error) => {
      closeRoomConnection();
      setNotice(t('انقطع اتصال الغرفة. اخرج وأعد الانضمام عند توفر الاتصال.', 'Room connection failed. Leave and rejoin when connected.'));
      console.warn("Room subscription error:", error);
    });

    roomUnsubscribeRef.current = unsub;
    return () => {
      unsub();
      if (roomUnsubscribeRef.current === unsub) {
        roomUnsubscribeRef.current = null;
      }
    };
  };

  const handleOnlineVote = async (votedId: string) => {
    if (!onlineRoomState || onlineVoteSaving || onlineRoomState.votes[localPlayerId]) return;
    setOnlineVoteSaving(true);
    try {
      await voteInRoom(roomId, localPlayerId, votedId);
    } catch {
      setNotice(t('تعذر تسجيل صوتك. حاول مرة أخرى.', 'Could not save your vote. Please try again.'));
    } finally {
      setOnlineVoteSaving(false);
    }
  };

  const submitOnlineTwoPlayersGuess = async (targetWordId: string) => {
    try { await guessInDuel(roomId, localPlayerId, targetWordId); }
    catch { setNotice(t('تعذر حفظ التخمين. حاول مجددًا.', 'Could not save your guess. Please try again.')); }
  };

  // Online Clinical Inquiry Handlers
  const submitOnlineInquiryQuestion = async (question: InquiryQuestion) => {
    if (!onlineRoomState || !roomId) return;
    const currentInquiry = onlineRoomState.inquiry;
    if (!currentInquiry) return;
    if (currentInquiry.turnPlayerId !== localPlayerId) return;

    try {
      const roomRef = doc(db, 'rooms', roomId);
      await updateDoc(roomRef, {
        'inquiry.activeQuestion': question,
        'inquiry.activeAnswer': null
      });
      sfx.click();
    } catch (err) {
      console.error('Failed to submit online inquiry question:', err);
    }
  };

  const submitOnlineGroupInquiryQuestion = async (targetId: string, question: InquiryQuestion) => {
    if (!onlineRoomState || !roomId) return;
    try {
      const roomRef = doc(db, 'rooms', roomId);
      await updateDoc(roomRef, {
        'inquiry.activeQuestion': question,
        'inquiry.activeAnswer': null,
        'inquiry.turnPlayerId': localPlayerId,
        'inquiry.targetPlayerId': targetId
      });
      setSelectedInterrogateDoctorId(null);
      sfx.click();
    } catch (err) {
      console.error('Failed to submit group inquiry question:', err);
    }
  };

  const submitOnlineInquiryAnswer = async (answer: 'YES' | 'NO' | 'MAYBE') => {
    if (!onlineRoomState || !roomId) return;
    const currentInquiry = onlineRoomState.inquiry;
    if (!currentInquiry || !currentInquiry.activeQuestion) return;
    if (currentInquiry.targetPlayerId !== localPlayerId) return;

    try {
      const asker = activePlayers.find(p => p.id === currentInquiry.turnPlayerId);
      const target = activePlayers.find(p => p.id === currentInquiry.targetPlayerId);
      const q = currentInquiry.activeQuestion;

      const newHistoryItem = {
        id: 'inq_' + Date.now(),
        stage: currentInquiry.stage || 1,
        askerId: currentInquiry.turnPlayerId,
        askerName: asker ? asker.name : t('طبيب', 'Doctor'),
        targetId: currentInquiry.targetPlayerId,
        targetName: target ? target.name : t('طبيب', 'Doctor'),
        questionId: q.id,
        questionAr: q.text.ar,
        questionEn: q.text.en,
        answer,
        timestamp: Date.now()
      };

      const updatedHistory = [...(currentInquiry.history || []), newHistoryItem];
      const currentBranches = { ...(currentInquiry.resolvedBranches || {}) };

      // In Stage 1: If answered YES and expectedCategory exists, resolve branch for target
      if (currentInquiry.stage === 1 && answer === 'YES' && q.expectedCategory) {
        currentBranches[currentInquiry.targetPlayerId] = q.expectedCategory as ClinicalBranch;
      }

      // Detect and record confirmed system from Stage 2
      const detectedSys = detectSystemFromQuestionAndAnswer(q.id, answer);
      const currentConfirmedSystems = { ...(currentInquiry.confirmedSystems || {}) };
      if (detectedSys) {
        currentConfirmedSystems[currentInquiry.targetPlayerId] = detectedSys;
      }

      // Truth evaluation & anti-cheat recording
      const targetWord = target ? getWordDetails(target.assignedWordId) : null;
      const truthEval = evaluateQuestionTruth(q.id, targetWord);
      let updatedMisleadingLog: MisleadingEntry[] = [...(currentInquiry.misleadingLog || [])];

      const isMisleading =
        (truthEval.trueAnswer === 'YES' && answer === 'NO') ||
        (truthEval.trueAnswer === 'NO' && answer === 'YES');

      if (isMisleading && target && targetWord) {
        updatedMisleadingLog.push({
          stage: currentInquiry.stage || 1,
          questionId: q.id,
          questionAr: q.text.ar,
          questionEn: q.text.en,
          doctorName: target.name,
          doctorId: target.id,
          cardNameAr: targetWord.word.Arabic,
          cardNameEn: targetWord.word.English,
          givenAnswer: answer,
          trueAnswer: truthEval.trueAnswer,
          clinicalReasonAr: truthEval.clinicalReasonAr,
          clinicalReasonEn: truthEval.clinicalReasonEn
        });
      }

      // Check turns in stage
      const currentTurnsInStage = (currentInquiry.turnsInStage || 0) + 1;
      let nextStage = currentInquiry.stage || 1;
      let nextTurnsInStage = currentTurnsInStage;

      // Swap asker and target
      const nextTurnPlayerId = currentInquiry.targetPlayerId;
      const nextTargetPlayerId = currentInquiry.turnPlayerId;

      if (currentTurnsInStage >= 2) {
        // Both players had a turn in this stage -> advance stage
        if (nextStage < 5) {
          nextStage = (nextStage + 1) as 1 | 2 | 3 | 4 | 5;
          nextTurnsInStage = 0;

          // Auto-resolve branch for any target if still unresolved
          activePlayers.forEach(p => {
            if (!currentBranches[p.id]) {
              const w = getWordDetails(p.assignedWordId);
              currentBranches[p.id] = getWordBranch(w);
            }
          });
        }
      }

      const roomRef = doc(db, 'rooms', roomId);
      await updateDoc(roomRef, {
        'inquiry.activeQuestion': null,
        'inquiry.activeAnswer': null,
        'inquiry.turnPlayerId': nextTurnPlayerId,
        'inquiry.targetPlayerId': nextTargetPlayerId,
        'inquiry.stage': nextStage,
        'inquiry.turnsInStage': nextTurnsInStage,
        'inquiry.history': updatedHistory,
        'inquiry.resolvedBranches': currentBranches,
        'inquiry.confirmedSystems': currentConfirmedSystems,
        'inquiry.misleadingLog': updatedMisleadingLog
      });

      sfx.reveal();
    } catch (err) {
      console.error('Failed to submit online inquiry answer:', err);
    }
  };

  // Offline Clinical Inquiry Handlers
  const submitOfflineInquiryQuestion = (question: InquiryQuestion) => {
    const respondent = activePlayers[offlineInquiryTurnIdx === 0 ? 1 : 0];
    if (!respondent) return;
    setOfflineHandoff({ id: respondent.id, name: respondent.name });
    setOfflineInquiryActiveQ(question);
    sfx.click();
  };

  const submitOfflineInquiryAnswer = (answer: 'YES' | 'NO' | 'MAYBE') => {
    if (!offlineInquiryActiveQ) return;
    const p1 = activePlayers[offlineInquiryTurnIdx];
    const p2 = activePlayers[offlineInquiryTurnIdx === 0 ? 1 : 0];
    if (!p1 || !p2) return;

    const newHistoryItem = {
      id: 'inq_off_' + Date.now(),
      stage: offlineInquiryStage,
      askerId: p1.id,
      askerName: p1.name,
      targetId: p2.id,
      targetName: p2.name,
      questionId: offlineInquiryActiveQ.id,
      questionAr: offlineInquiryActiveQ.text.ar,
      questionEn: offlineInquiryActiveQ.text.en,
      answer,
      timestamp: Date.now()
    };

    const nextHistory = [...offlineInquiryHistory, newHistoryItem];
    setOfflineInquiryHistory(nextHistory);

    const nextBranches = { ...offlineInquiryBranches };
    if (offlineInquiryStage === 1 && answer === 'YES' && offlineInquiryActiveQ.expectedCategory) {
      nextBranches[p2.id] = offlineInquiryActiveQ.expectedCategory as ClinicalBranch;
    }

    const nextSystems = { ...offlineInquirySystems };
    const detectedSys = detectSystemFromQuestionAndAnswer(offlineInquiryActiveQ.id, answer);
    if (detectedSys) {
      nextSystems[p2.id] = detectedSys;
    }

    const targetWord = getWordDetails(p2.assignedWordId);
    const truthEval = evaluateQuestionTruth(offlineInquiryActiveQ.id, targetWord);
    let nextMisleading: MisleadingEntry[] = [...offlineMisleadingLog];

    const isMisleading =
      (truthEval.trueAnswer === 'YES' && answer === 'NO') ||
      (truthEval.trueAnswer === 'NO' && answer === 'YES');

    if (isMisleading && targetWord) {
      nextMisleading.push({
        stage: offlineInquiryStage,
        questionId: offlineInquiryActiveQ.id,
        questionAr: offlineInquiryActiveQ.text.ar,
        questionEn: offlineInquiryActiveQ.text.en,
        doctorName: p2.name,
        doctorId: p2.id,
        cardNameAr: targetWord.word.Arabic,
        cardNameEn: targetWord.word.English,
        givenAnswer: answer,
        trueAnswer: truthEval.trueAnswer,
        clinicalReasonAr: truthEval.clinicalReasonAr,
        clinicalReasonEn: truthEval.clinicalReasonEn
      });
    }

    const currentTurns = offlineInquiryTurnsInStage + 1;
    let nextStage = offlineInquiryStage;
    let nextTurnsInStage = currentTurns;

    if (currentTurns >= 2) {
      if (nextStage < 5) {
        nextStage = (nextStage + 1) as 1 | 2 | 3 | 4 | 5;
        nextTurnsInStage = 0;
        activePlayers.forEach(p => {
          if (!nextBranches[p.id]) {
            const w = getWordDetails(p.assignedWordId);
            nextBranches[p.id] = getWordBranch(w);
          }
        });
      }
    }

    setOfflineInquiryStage(nextStage);
    setOfflineInquiryTurnsInStage(nextTurnsInStage);
    setOfflineInquiryTurnIdx(offlineInquiryTurnIdx === 0 ? 1 : 0);
    setOfflineInquiryBranches(nextBranches);
    setOfflineInquirySystems(nextSystems);
    setOfflineMisleadingLog(nextMisleading);
    setOfflineInquiryActiveQ(null);
    sfx.reveal();
  };

  const submitOnlineImposterGuess = async (wordId: string) => {
    if (!onlineRoomState) return;
    const correctSecretId = onlineRoomState.secretWord.id;
    const isCorrect = wordId === correctSecretId;

    const members = [...onlineRoomState.players];
    const votedId = onlineRoomState.votedOutPlayerId;
    
    members.forEach(p => {
      if (p.role ==='IMPOSTER') {
        if (isCorrect) p.score += 50;
      } else {
        const theirVote = onlineRoomState.votes[p.id];
        const votedForMember = members.find(m => m.id === theirVote);
        if (votedForMember && votedForMember.role ==='IMPOSTER') {
          p.score += 50;
        }
      }
    });

    const roomRef = doc(db,'rooms', roomId);
    await updateDoc(roomRef, {
      players: members,
      imposterGuessedWordId: wordId,
      status:'SCOREBOARD'
    });
  };

  const resetOnlineRound = async () => {
    if (!onlineRoomState) return;
    const roomRef = doc(db,'rooms', roomId);
    await updateDoc(roomRef, {
      status:'LOBBY',
      // Scrub all in-game secrets so the room is safe to browse/list again
      // while it waits for the next round (rules require secretWord == null
      // for LOBBY rooms, and it genuinely keeps the lobby state clean).
      secretWord: null,
      imposterAssignedWord: null,
      players: (onlineRoomState.players || []).map((p: any) => ({
        id: p.id, name: p.name, score: p.score || 0, role:'NORMAL', assignedWordId:''
      })),
      votes: {},
      votedOutPlayerId: null,
      imposterGuessedWordId: null,
      twoPlayersGuessMatched: {},
      inquiry: null
    });
    setPhase('ONLINE_LOBBY');
  };

  // Offline Passing / Votes Tally
  const revealNextPlayerOffline = () => {
    if (isCardHidden) return;
    setIsCardHidden(true);
    if (revealIndex < activePlayers.length - 1) {
      setRevealIndex(prev => prev + 1);
    } else {
      if (playerCount === 2) {
        const first = activePlayers[0];
        if (first) setOfflineHandoff({ id: first.id, name: first.name });
        setPhase('TWO_PLAYERS_DISCUSSION_GUESS');
      } else {
        setPhase('PLAY_DISCUSSION');
      }
    }
  };

  const [offlineVotes, setOfflineVotes] = useState<Record<string, string>>({});
  const [offlineGuesses, setOfflineGuesses] = useState<Record<string, string>>({});

  const submitOfflineVote = (targetId: string) => {
    const voter = activePlayers[voterIndex];
    const updatedVotes = { ...offlineVotes, [voter.id]: targetId };
    setOfflineVotes(updatedVotes);

    if (voterIndex < activePlayers.length - 1) {
      setVoterIndex(prev => prev + 1);
    } else {
      const tallies: Record<string, number> = {};
      Object.keys(updatedVotes).forEach(voterId => {
        const votedId = updatedVotes[voterId];
        if (votedId) {
          tallies[votedId] = (tallies[votedId] || 0) + 1;
        }
      });
      let maxVotes = 0;
      Object.keys(tallies).forEach(id => {
        if (tallies[id] > maxVotes) {
          maxVotes = tallies[id];
        }
      });
      const tiedCandidates = Object.keys(tallies).filter(id => tallies[id] === maxVotes);
      let votedId = '';
      if (tiedCandidates.length > 0) {
        votedId = tiedCandidates[Math.floor(Math.random() * tiedCandidates.length)];
      } else if (activePlayers.length > 0) {
        votedId = activePlayers[0].id;
      }

      setVotedPlayerId(votedId);
      setPhase('REVEAL_IMPOSTER');
    }
  };

  const submitOfflineTwoPlayersGuess = (playerId: string, wordId: string) => {
    const updated = { ...offlineGuesses, [playerId]: wordId };
    setOfflineGuesses(updated);

    if (Object.keys(updated).length === 2) {
      const p1 = activePlayers[0];
      const p2 = activePlayers[1];

      const p1Correct = updated[p1.id] === p2.assignedWordId;
      const p2Correct = updated[p2.id] === p1.assignedWordId;

      const scoredPlayers = activePlayers.map(p => {
        if (p.id === p1.id) return { ...p, score: p.score + (p1Correct ? 50 : 0) };
        if (p.id === p2.id) return { ...p, score: p.score + (p2Correct ? 50 : 0) };
        return p;
      });

      setActivePlayers(scoredPlayers);
      setPhase('ROUND_RESULT');
    }
  };

  const submitOfflineImposterGuess = (wordId: string) => {
    const isImposterCorrect = wordId === secretWord?.id;

    const scoredPlayers = activePlayers.map(p => {
      let scoreAdd = 0;
      if (p.role ==='IMPOSTER') {
        if (isImposterCorrect) scoreAdd = 50;
      } else {
        // Find if this player voted for any of the actual imposters in the new localVotingVotes mapping (or fallback offlineVotes)
        const votedSuspectIdsForThisPlayer = localVotingVotes[p.id] || (offlineVotes[p.id] ? [offlineVotes[p.id]] : []);
        const hasVotedForImposter = votedSuspectIdsForThisPlayer.some(votedId => {
          const suspect = activePlayers.find(x => x.id === votedId);
          return suspect && suspect.role ==='IMPOSTER';
        });
        if (hasVotedForImposter) {
          scoreAdd = 50;
        }
      }
      return { ...p, score: p.score + scoreAdd };
    });

    setActivePlayers(scoredPlayers);
    setPhase('ROUND_RESULT');
  };

  const startNextRoundOffline = () => {
    setOfflineVotes({});
    setOfflineGuesses({});
    setVotedPlayerId('');
    startOfflineMultiGame(true);
  };

  const currentOfflinePlayer = activePlayers[revealIndex] || null;
  const currentVoter = activePlayers[voterIndex] || null;

  const getWordDetails = (id: string) => {
    return medicalWords.find(w => w.id === id) || null;
  };

  return (
    <div className="h-full min-h-0 flex flex-col relative select-none" dir={languageState ==='Arabic' ?'rtl' :'ltr'}>
      <Confetti burst={confettiBurst} />
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease:'easeOut' }}
          className="flex-1 min-h-0 flex flex-col"
        >
          {/* ================= HOME (ENTRY) ================= */}
          {phase === 'ENTRY' && <HomeView language={languageState} level={singlePlayerLevel} score={singleScore} onShowHelp={() => onShowHelp?.()} onChoose={action => {
            if (action === 'solo') setPhase('SINGLE_SETUP');
            if (action === 'visual') {
              setMultiImageOnlyMode(true);
              ensureOfflineRoster();
              setIsOnline(false);
              setPhase('MULTI_SETUP_OFFLINE');
            }
            if (action === 'offline') {
              setMultiImageOnlyMode(false);
              ensureOfflineRoster();
              setIsOnline(false);
              setPhase('MULTI_SETUP_OFFLINE');
            }
            if (action === 'online') { setIsOnline(true); setPhase('MULTI_SETUP_ONLINE'); }
            if (action === 'ranking') { fetchLeaderboard(); setShowLeaderboardModal(true); }
          }} />}

          {/* ================= SOLO SETUP ================= */}
          {phase ==='SINGLE_SETUP' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={
                  gameModeLock === 'GUESS'
                    ? t('إعداد التحدي', 'Solo setup')
                    : t('إعداد الجولة الفردية', 'Solo Challenge Setup')
                }
                onBack={() => {
                  if (gameModeLock) {
                    onGoBack();
                  } else {
                    setPhase('ENTRY');
                  }
                }}
                backLabel={t('رجوع', 'Back')}
                right={<StatPill tone="gold" icon={<Flame size={15} />} value={`${singleScore}`} />}
              >
                <div className="space-y-3 px-3.5 sm:px-4 max-w-md mx-auto w-full pt-1">
                  {/* Compact Medical Rank and Streak Pill */}
                  <div className="panel px-3.5 py-2 flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl shrink-0">{getMedicalRank(singleStreak).icon}</span>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-white/70 block leading-tight">
                          {t('الرتبة الحالية', 'Current Rank')}
                        </span>
                        <span className={`font-display font-black text-xs sm:text-base break-words block ${getMedicalRank(singleStreak).color}`}>
                          {languageState === 'Arabic' ? getMedicalRank(singleStreak).titleAr : getMedicalRank(singleStreak).titleEn}
                        </span>
                      </div>
                    </div>
                    <div className="text-end shrink-0">
                      <span className="text-xs font-semibold text-white/70 block leading-tight">
                        {t('أطول سلسلة', 'Best Streak')}
                      </span>
                      <span className="font-display font-black text-xs sm:text-sm text-gold flex items-center gap-1 justify-end">
                        <Flame size={13} /> {highestStreak}
                      </span>
                    </div>
                  </div>

                  {/* Primary Option 1: Specialty Picker */}
                  <div className="space-y-1.5">
                    <Label icon={<Target size={14} className="text-mint" />}>{t('التخصص الطبي', 'Medical Specialty')}</Label>
                    <button
                      type="button"
                      onClick={() => { setSpecSheet('single'); setSpecSearch(''); }}
                      className="w-full min-h-[50px] px-4 rounded-2xl bg-ink-2/90 border border-white/10 hover:border-mint/40 flex items-center justify-between active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-mint focus-visible:outline-none"
                    >
                      <span className="font-display font-bold text-white text-base break-words">
                        {singleAdvancedFilter.enabled
                          ? t(`فلتر مخصص (${singleAdvancedFilter.subjects.length})`, `Custom (${singleAdvancedFilter.subjects.length})`)
                          : specialtyLabel(singleSpecialty, languageState)}
                      </span>
                      <span className="text-white/70 text-base">▾</span>
                    </button>
                  </div>

                  {/* Primary Option 2: Difficulty */}
                  <div className="space-y-1.5">
                    <Label icon={<Flame size={14} className="text-coral" />}>{t('مستوى الصعوبة', 'Difficulty Level')}</Label>
                    <SegOptions
                      value={singleDifficulty}
                      onChange={setSingleDifficulty}
                      options={[
                        { id: 'All', label: t('الكل', 'All') },
                        { id: '1', label: t('سهل', 'Easy') },
                        { id: '2', label: t('متوسط', 'Med') },
                        { id: '3', label: t('صعب', 'Hard') },
                      ]}
                    />
                  </div>

                  {/* Expandable Section: خيارات إضافية (Additional Options) */}
                  <div className="panel overflow-hidden border border-white/10 transition-all">
                    <button
                      type="button"
                      onClick={() => setShowSoloAdvancedOptions(prev => !prev)}
                      className="w-full min-h-[52px] px-3.5 py-3 flex items-center justify-between gap-2 text-start bg-ink-3/40 hover:bg-ink-3/70 active:scale-[0.99] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-mint focus-visible:outline-none"
                      aria-expanded={showSoloAdvancedOptions}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <SlidersHorizontal size={16} className="text-white/70 shrink-0" />
                        <span className="font-display font-bold text-sm sm:text-base text-white/95">
                          {t('خيارات إضافية', 'Additional Options')}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end max-w-[55%]">
                        {/* Status Summary Chips (always visible even when collapsed) */}
                        {singleTimerEnabled && (
                          <span className="text-[0.8125rem] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-mint/15 text-mint border border-mint/30 flex items-center gap-1 shrink-0">
                            <Timer size={12} />
                            <span>{t('45 ث', '45s')}</span>
                          </span>
                        )}
                        {reviewFromMistakes && missedCaseCount > 0 && (
                          <span className="text-[0.8125rem] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-coral/15 text-coral border border-coral/30 flex items-center gap-1 shrink-0">
                            <Target size={12} />
                            <span>{t(`مراجعة (${missedCaseCount})`, `Review (${missedCaseCount})`)}</span>
                          </span>
                        )}
                        <ChevronDown
                          size={16}
                          className={`text-white/60 transition-transform duration-200 shrink-0 ${showSoloAdvancedOptions ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {showSoloAdvancedOptions && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-3.5 pb-3.5 pt-2 space-y-3 border-t border-white/5"
                        >
                          {/* Emergency Rush Timer Toggle (Entire row clickable, role="switch", >= 44x44 target) */}
                          <button
                            type="button"
                            role="switch"
                            aria-checked={singleTimerEnabled}
                            aria-label={t('عداد الطوارئ (45 ثانية)', 'Emergency Rush Timer (45s)')}
                            onClick={() => setSingleTimerEnabled(prev => !prev)}
                            className={`w-full min-h-[56px] flex items-center justify-between p-3 sm:p-3.5 rounded-xl border text-start transition-all cursor-pointer select-none active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-mint focus-visible:outline-none ${
                              singleTimerEnabled
                                ? 'bg-mint/[0.08] border-mint/35 shadow-[0_2px_12px_rgba(47,230,167,0.06)]'
                                : 'bg-ink/60 border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="space-y-1 min-w-0 pr-2">
                              <span className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-white">
                                <Timer size={17} className={singleTimerEnabled ? 'text-mint' : 'text-white/70'} />
                                <span>{t('عداد الطوارئ (45 ثانية)', 'Emergency Rush Timer (45s)')}</span>
                              </span>
                              <span className="text-[0.8125rem] sm:text-[0.8125rem] font-medium text-white/70 block leading-snug">
                                {t('مكافأة سرعة (+10 ن)', 'Speed bonus (+10 pts)')}
                              </span>
                            </div>

                            <div className="shrink-0 flex items-center justify-center w-11 h-11 pointer-events-none">
                              <div className={`w-11 h-6 rounded-full relative transition-colors ${singleTimerEnabled ? 'bg-mint' : 'bg-white/20'}`}>
                                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${singleTimerEnabled ? 'start-5.5' : 'start-0.5'}`} />
                              </div>
                            </div>
                          </button>

                          {/* From-your-mistakes review mode (Entire row clickable switch + separate clear button) */}
                          <div className="space-y-1.5">
                            <button
                              type="button"
                              role="switch"
                              disabled={missedCaseCount === 0}
                              aria-checked={reviewFromMistakes}
                              aria-label={t(`مراجعة أخطائك السابقة (${missedCaseCount} حالة)`, `Review previous misses (${missedCaseCount} cases)`)}
                              onClick={() => setReviewFromMistakes(prev => !prev)}
                              className={`w-full min-h-[56px] flex items-center justify-between p-3 sm:p-3.5 rounded-xl border text-start transition-all select-none ${
                                missedCaseCount === 0
                                  ? 'opacity-60 bg-ink/40 border-white/5 cursor-not-allowed'
                                  : reviewFromMistakes
                                    ? 'cursor-pointer bg-coral/[0.09] border-coral/40 shadow-[0_2px_12px_rgba(255,84,112,0.08)] active:scale-[0.99]'
                                    : 'cursor-pointer bg-ink/60 border-white/10 hover:border-white/20 active:scale-[0.99]'
                              } focus-visible:ring-2 focus-visible:ring-coral focus-visible:outline-none`}
                            >
                              <div className="space-y-1 min-w-0 pr-2">
                                <span className={`flex items-center gap-2 font-display font-bold text-sm sm:text-base ${reviewFromMistakes ? 'text-coral' : 'text-white'}`}>
                                  <Target size={17} className={reviewFromMistakes ? 'text-coral' : 'text-white/70'} />
                                  <span className="truncate">{t(`مراجعة أخطائك السابقة (${missedCaseCount})`, `Review previous misses (${missedCaseCount})`)}</span>
                                </span>
                                <span className="text-[0.8125rem] sm:text-[0.8125rem] font-medium text-white/70 block leading-snug">
                                  {missedCaseCount > 0
                                    ? t('تصحيح أخطائك السابقة', 'Review and correct previous misses')
                                    : t('لا توجد حالات خاطئة مسجلة', 'No misdiagnosed cases recorded')}
                                </span>
                              </div>

                              <div className="shrink-0 flex items-center justify-center w-11 h-11 pointer-events-none">
                                <div className={`w-11 h-6 rounded-full relative transition-colors ${
                                  missedCaseCount === 0 ? 'bg-white/10' : reviewFromMistakes ? 'bg-coral' : 'bg-white/20'
                                }`}>
                                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${reviewFromMistakes ? 'start-5.5' : 'start-0.5'}`} />
                                </div>
                              </div>
                            </button>

                            {/* Clear Missed Cases Bank Button (independent element, >=44px touch height, no overlap) */}
                            {missedCaseCount > 0 && (
                              <div className="flex justify-end pt-0.5">
                                <button
                                  type="button"
                                  onClick={clearMissedBank}
                                  className="min-h-[48px] px-3 py-2 flex items-center gap-1.5 text-xs font-bold text-coral/85 hover:text-coral hover:bg-coral/10 rounded-lg active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-coral focus-visible:outline-none"
                                >
                                  <Trash2 size={14} />
                                  <span>{t('مسح سجل الأخطاء', 'Clear missed cases bank')}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Screen>

              {/* Docked Start Round Button */}
              <div className="shrink-0 px-3.5 sm:px-4 pt-2 pb-safe border-t border-white/[0.06] bg-ink/95 backdrop-blur-md">
                <div className="max-w-md mx-auto w-full">
                  <BigBtn onClick={startSingleGame}>
                    <Play size={20} />
                    {reviewFromMistakes && missedCaseCount > 0
                      ? t('ابدأ المراجعة', 'Start Review')
                      : t('ابدأ الجولة', 'Start Round')}
                  </BigBtn>
                </div>
              </div>
            </div>
          )}

          {/* ================= SOLO PLAYING ================= */}
          {phase ==='SINGLE_PLAYING' && singleWord && (() => {
            const soloClues = getSoloProgressiveHints(singleWord, languageState);
            const currentReward = unlockedHints === 1 ? 50 : unlockedHints === 2 ? 30 : 15;
            const currentRank = getMedicalRank(singleStreak);

            return (
              <div className="flex-1 min-h-0 flex flex-col">
                {/* top stats */}
                <div className="shrink-0 px-4 pt-3 pb-1 flex items-center gap-2">
                  <button type="button" aria-label={t('خروج','Exit game')} onClick={() => setShowExitConfirm(true)} className="h-10 w-10 rounded-xl bg-ink-3 border border-ink-4 flex items-center justify-center active:scale-90 transition-transform shrink-0">
                    <X size={18} className="text-white/70" />
                  </button>

                  <div className="flex-1 flex items-center justify-center gap-1.5 min-w-0">
                    {/* Total Score Pill */}
                    <StatPill label={t('رصيد النقاط', 'Total score')} tone="gold" icon={<Star size={14} />} value={singleScore} />

                    {/* Emergency Timer Pill */}
                    {singleTimerEnabled && !singleGameEnded && (
                      <div className={`h-9 px-2.5 rounded-xl border flex items-center gap-1 font-display font-black text-xs shrink-0 transition-all ${
                        timeLeft <= 10
                          ? 'bg-coral/25 border-coral text-coral animate-pulse'
                          : timeLeft <= 20
                          ? 'bg-gold/15 border-gold/40 text-gold'
                          : 'bg-mint/10 border-mint/30 text-mint'
                      }`}>
                        <Timer size={13} className={timeLeft <= 10 ? 'animate-spin' : ''} />
                        <span>{timeLeft}s</span>
                        {timeLeft >= 30 && <span className="hidden xs:inline text-[0.8125rem] text-gold">⚡+10</span>}
                      </div>
                    )}
                  </div>


                  {!singleGameEnded && <IconBtn onClick={() => setShowSoloLifelines(true)} label={t('وسائل المساعدة', 'Lifelines')}><Lightbulb size={20} className="text-mint" /></IconBtn>}
                </div>

                {singleGameEnded ? (
                  /* ================= CLEAN, ULTRA-FOCUSED RESULT HERO SCREEN ================= */
                  <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 py-3 flex flex-col max-w-md mx-auto w-full space-y-4 select-none">
                    {/* 1. Quick Status Pill */}
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-display font-black border ${
                        singleGuessSuccess
                          ? 'bg-mint/15 border-mint/40 text-mint shadow-[0_0_20px_rgba(47,230,167,0.25)]'
                          : 'bg-coral/15 border-coral/40 text-coral shadow-[0_0_20px_rgba(255,84,112,0.25)]'
                      }`}>
                        {singleGuessSuccess ? (
                          <>
                            <Trophy size={16} />
                            <span>{t(`تشخيص صحيح (+${roundDelta})`, `Correct diagnosis (+${roundDelta})`)}</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle size={16} />
                            <span>{`${roundReason === 'timeout' ? t('انتهى الوقت', 'Time expired') : roundReason === 'giveup' ? t('استسلام', 'Gave up') : t('تشخيص غير صحيح', 'Incorrect diagnosis')} (${roundDelta})`}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* 2. THE HERO: Huge, unmissable diagnosis name (اسم الحالة مباشر وضخم جداً وفي الواجهة) */}
                    <motion.div
                      initial={{ scale: 0.94, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-4 px-4 bg-gradient-to-b from-ink-2 to-ink-3 border-2 border-mint/50 rounded-3xl shadow-xl space-y-1.5 relative overflow-hidden"
                    >
                      <span className="text-[0.8125rem] font-black text-mint uppercase tracking-widest block">
                        {t('التشخيص الصحيح', 'Correct Diagnosis')}
                      </span>
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-wide leading-tight">
                        {singleWord.word.English}
                      </h2>
                      {singleWord.word.Arabic && (
                        <p className="font-display font-bold text-xl sm:text-2xl text-mint mt-0.5">
                          {singleWord.word.Arabic}
                        </p>
                      )}
                      <div className="pt-2">
                        <span className="inline-block px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/60">
                          {singleWord.subjects[0] || (languageState === 'Arabic' ? 'طبي' : 'Clinical')}
                        </span>
                      </div>
                    </motion.div>

                    {/* 3. THE BIG DOMINANT BUTTON (الزرار الكبير اللي بيجبره على الخطوة الجاية) */}
                    <div className="pt-1">
                      <BigBtn
                        onClick={startSingleGame}
                        className="w-full min-h-[58px] text-lg font-display font-extrabold bg-gradient-to-r from-mint to-emerald-400 text-ink-1 shadow-lg shadow-mint/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <Play size={22} className="fill-current" />
                        <span>{t('الحالة التالية ➔', 'Next Case ➔')}</span>
                      </BigBtn>
                    </div>

                    {/* 4. Secondary actions (compact row, below the big button) */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setShowFlashcardModal(true)}
                        className="min-h-[48px] rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 text-xs font-display font-bold text-white/80 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <Stethoscope size={15} className="text-mint" />
                        <span>{t('بطاقة الحالة', 'Case Flashcard')}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (gameModeLock) onGoBack();
                          else setPhase('ENTRY');
                        }}
                        className="min-h-[48px] rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 text-xs font-display font-bold text-white/60 hover:text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <Home size={15} />
                        <span>{t('الرئيسية', 'Home')}</span>
                      </button>
                    </div>

                    {/* 5. Short Pearl (if exists) */}
                    {soloClues.pearl && (
                      <div className="p-3 rounded-2xl bg-gold/10 border border-gold/25 text-start flex items-center gap-2.5 text-xs text-white/80">
                        <Info size={15} className="text-gold shrink-0" />
                        <p className="line-clamp-2 leading-relaxed">
                          <strong className="text-gold">{t('معلومة سريرية: ', 'Clinical Note: ')}</strong>
                          {soloClues.pearl}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 sm:px-4 pt-1 pb-safe pb-4 space-y-2.5">
                    <SoloClues hints={[soloClues.hint1, soloClues.hint2, soloClues.hint3]} unlocked={unlockedHints}
                      reward={currentReward} arabic={languageState === 'Arabic'} onUnlock={() => { sfx.pop(); setUnlockedHints(v => v + 1); }} />

                    <div className="space-y-2.5">
                      {/* Clinical Lifelines: Mobile Compact Bar */}
                      <Sheet open={showSoloLifelines} onClose={() => setShowSoloLifelines(false)} title={t('وسائل المساعدة', 'Lifelines')} dir={languageState === 'Arabic' ? 'rtl' : 'ltr'}>
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          {/* 50:50 Lifeline Button */}
                          <button
                            type="button"
                            disabled={usedFiftyFifty}
                            onClick={() => {
                              sfx.haptic([10, 30, 10]);
                              handleFiftyFifty(); setShowSoloLifelines(false);
                            }}
                            className={`min-h-[48px] px-3 rounded-xl border flex items-center gap-1.5 text-xs font-display font-bold transition-all active:scale-95 ${
                              usedFiftyFifty
                                ? 'bg-ink-3/40 border-ink-4 text-white/70 cursor-not-allowed'
                                : 'bg-mint/10 border-mint/40 text-mint hover:bg-mint/20 cursor-pointer'
                            }`}
                          >
                            <span>{usedFiftyFifty ? t('مستخدم', 'Used') : t('استبعاد خيارين', 'Eliminate 2')}</span>
                          </button>

                          {/* Consultant Lab Clue Button */}
                          <button
                            type="button"
                            disabled={usedConsultantHint || unlockedHints >= 3}
                            onClick={() => {
                              sfx.haptic([10, 30, 10]);
                              handleConsultantHint(); setShowSoloLifelines(false);
                            }}
                            className={`min-h-[48px] px-3 rounded-xl border flex items-center gap-1.5 text-xs font-display font-bold transition-all active:scale-95 ${
                              usedConsultantHint || unlockedHints >= 3
                                ? 'bg-ink-3/40 border-ink-4 text-white/70 cursor-not-allowed'
                                : 'bg-sky-400/10 border-sky-400/40 text-sky-400 hover:bg-sky-400/20 cursor-pointer'
                            }`}
                          >
                            <Lightbulb size={14} />
                            <span>{usedConsultantHint || unlockedHints >= 3 ? t('مستخدم', 'Used') : t('فحص استشاري', 'Consultant')}</span>
                          </button>
                        </div>
                      </Sheet>

                      {/* 5 options choice section */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between px-1">
                          <Label icon={<Brain size={14} className="text-mint" />}>
                            {t('التشخيص التفريقي:','Differential Diagnosis:')}
                          </Label>

                        </div>

                        <div className="space-y-1.5">
                          {singleOptions.map((opt, idx) => {
                            const letter = ['A', 'B', 'C', 'D', 'E'][idx] || String(idx + 1);
                            const isEliminated = eliminatedOptionIds.includes(opt.id);

                            return (
                              <motion.button
                                key={opt.id}
                                type="button"
                                disabled={isEliminated}
                                onClick={() => {
                                  sfx.haptic(10);
                                  submitSingleGuess(opt);
                                }}
                                whileTap={!isEliminated ? { scale: 0.98 } : undefined}
                                className={`w-full min-h-[50px] sm:min-h-[56px] px-3 py-2 sm:p-3 rounded-xl sm:rounded-2xl border flex items-center justify-between gap-2.5 text-start transition-all group ${
                                  isEliminated
                                    ? 'bg-ink-3/20 border-coral/20 opacity-30 cursor-not-allowed line-through'
                                    : 'bg-ink-3 border-ink-4 hover:border-mint/60 active:bg-mint/10'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                  <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl border font-display font-black text-[0.8125rem] sm:text-xs flex items-center justify-center shrink-0 transition-colors ${
                                    isEliminated
                                      ? 'bg-coral/10 border-coral/30 text-coral'
                                      : 'bg-ink-2 border-ink-4 text-white/70 group-hover:border-mint group-hover:text-mint'
                                  }`}>
                                    {letter}
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <span className="block font-display font-bold text-white text-base leading-snug break-words">
                                      {opt.word.English}
                                    </span>
                                    {languageState === 'Arabic' && <span className="block text-sm text-white/75 font-medium break-words mt-0.5">
                                      {opt.word.Arabic}
                                    </span>}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  {isEliminated ? (
                                    <span className="text-[0.8125rem] sm:text-xs font-bold text-coral bg-coral/15 border border-coral/30 px-2 py-0.5 rounded-full">
                                      {t('مستبعد', 'Ruled out')}
                                    </span>
                                  ) : null}
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            const penalty = 20;
                            const newScore = Math.max(0, singleScore - penalty);
                            setRoundDelta(newScore - singleScore);
                            setRoundReason('giveup');
                            setSingleScore(newScore);
                            setSingleStreak(0);
                            if (onUpdateScore) onUpdateScore(newScore);
                            persistScore(newScore);
                            recordMissedCase(singleWord.id);
                            setSingleGuessSuccess(false);
                            setSinglePlayerLevel(1);
                            setSingleGameOverMsg(
                              languageState === 'Arabic'
                                ? `استسلمت! تم خصم ${penalty} نقطة وانكسرت السلسلة. التشخيص الصحيح كان "${singleWord.word.Arabic} (${singleWord.word.English})".`
                                : `You gave up! -${penalty} pts; streak lost. The correct diagnosis was "${singleWord.word.English} (${singleWord.word.Arabic})".`
                            );
                            setSingleGameEnded(true);
                          }}
                          className="w-full min-h-[48px] rounded-xl text-coral font-bold text-xs active:scale-95 transition-transform"
                        >
                          {t('استسلام (-20 نقطة)','Give up (-20 pts)')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* ================= VISUAL MYSTERY CARD CHALLENGE ================= */}
          {phase === 'VISUAL_PLAYING' && visualPool[visualCurrentIdx] && (() => {
            const currentWord = visualPool[visualCurrentIdx];
            const imgUrl = getWordImage(currentWord.id);
            const rawClues = getCluesForWord(currentWord.id, currentWord, languageState);
            const clues = rawClues.slice(0, 3);
            const isCorrect = visualSelectedIdx !== null && visualOptions[visualSelectedIdx]?.id === currentWord.id;
            const progressPercent = Math.round(((visualCurrentIdx + 1) / visualPool.length) * 100);

            return (
              <div className="flex-1 min-h-0 flex flex-col">
                {/* Top Header */}
                <div className="shrink-0 px-4 pt-3 pb-1 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setPhase('ENTRY')}
                    className="h-10 w-10 rounded-xl bg-ink-3 border border-ink-4 flex items-center justify-center active:scale-90 transition-transform shrink-0"
                  >
                    <X size={18} className="text-white/70" />
                  </button>

                  <div className="flex-1 flex items-center justify-center gap-1.5 min-w-0">
                    {/* Case Counter */}
                    <div className="h-9 px-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center gap-1.5 font-display font-bold text-xs">
                      <Camera size={14} />
                      <span>{visualCurrentIdx + 1} / {visualPool.length}</span>
                    </div>

                    {/* Streak Combo Pill */}
                    {visualStreak > 1 && (
                      <div className="h-9 px-2.5 rounded-xl bg-pop/15 border border-pop/40 text-pop flex items-center gap-1 font-display font-black text-xs shrink-0 animate-pulse">
                        <Flame size={14} />
                        <span>{visualStreak}x</span>
                      </div>
                    )}

                    {/* Total Score Pill */}
                    <StatPill tone="gold" icon={<Star size={14} />} value={<CountUp to={visualScore} />} />
                  </div>
                </div>

                {/* Progress Line */}
                <div className="h-1 w-full bg-ink-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-mint transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 sm:px-4 pt-3 pb-safe pb-4 space-y-3">
                  
                  {/* The Visual Mystery Image Card */}
                  <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-ink/80 shadow-2xl shadow-cyan-500/10 group">
                    {imgUrl ? (
                      <button type="button" ref={inspectTriggerRef} aria-label={t('تكبير الصورة', 'Inspect image')} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 relative w-full aspect-video sm:aspect-[16/10] max-h-[320px] bg-black/40 overflow-hidden cursor-pointer" onClick={() => setVisualIsInspecting(true)}>
                        <img
                          src={imgUrl}
                          alt="Visual Mystery"
                          className="w-full h-full object-contain object-center"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30 pointer-events-none" />

                        {/* Category Pill */}
                        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                          <Sparkles size={13} className="text-cyan-400" />
                          <span>{currentWord.type}</span>
                        </span>

                        {/* Zoom In Hint */}
                        <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 bg-cyan-500/80 hover:bg-cyan-400 text-ink-1 px-3 py-1 rounded-full text-xs font-black shadow-lg transition-all active:scale-95">
                          <Maximize2 size={13} />
                          <span>{t('فحص مكبر', 'Inspect Zoom')}</span>
                        </span>
                      </button>
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center text-white/70">
                        <Camera size={32} />
                      </div>
                    )}

                    <div className="p-3 bg-ink-2/90 border-t border-white/5 flex items-center justify-between text-xs text-white/60">
                      <span className="font-bold flex items-center gap-1.5 text-cyan-300">
                        <Eye size={14} />
                        {t('انقر على الصورة للفحص والتكبير', 'Tap to inspect image')}
                      </span>
                      <span className="text-[0.8125rem] font-mono text-white/70">{currentWord.subjects[0] || 'Medical'}</span>
                    </div>
                  </div>

                  {/* Clinical Hints Helper (Optional consultation) */}
                  {!visualAnswered && (
                    <div className="space-y-2">
                      {visualCluesUnlocked > 0 && (
                        <div className="panel p-3 bg-ink-3/70 border border-gold/25 rounded-2xl space-y-2">
                          <div className="flex items-center gap-1.5 text-gold font-bold text-xs">
                            <Lightbulb size={14} />
                            <span>{t('تلميحات مساعدة:', 'Helper Clues:')}</span>
                          </div>
                          {clues.slice(0, visualCluesUnlocked).map((clue, idx) => (
                            <p key={idx} className="text-xs text-white/80 leading-relaxed bg-black/30 p-2 rounded-xl">
                              {renderClueText(clue, 'xs', languageState)}
                            </p>
                          ))}
                        </div>
                      )}

                      {visualCluesUnlocked < clues.length && (
                        <button
                          type="button"
                          onClick={() => setVisualCluesUnlocked(prev => Math.min(prev + 1, clues.length))}
                          className="w-full py-2 px-3 rounded-xl bg-ink-3/60 hover:bg-ink-3 border border-dashed border-white/20 text-white/70 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-98"
                        >
                          <Lightbulb size={14} className="text-gold" />
                          <span>
                            {visualCluesUnlocked === 0
                              ? t('طلب تلميح (-30 نقطة)', 'Request Clue (-30 pts)')
                              : t(`طلب تلميح إضافي (${visualCluesUnlocked}/${clues.length})`, `Next Clue (${visualCluesUnlocked}/${clues.length})`)}
                          </span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* 4 Diagnostic Choices (Options Grid) */}
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold text-white/70 px-1">
                      {t('اختر التشخيص:', 'Select Diagnosis:')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {visualOptions.map((opt, idx) => {
                        const isSelected = visualSelectedIdx === idx;
                        const isTargetWord = opt.id === currentWord.id;

                        let btnStyle = "bg-ink-3/80 border-ink-4 text-white hover:border-cyan-500/50";
                        let iconElement = null;

                        if (visualAnswered) {
                          if (isTargetWord) {
                            btnStyle = "bg-mint/20 border-mint text-mint font-bold shadow-lg shadow-mint/10 scale-[1.02]";
                            iconElement = <CheckCircle2 size={18} className="text-mint shrink-0" />;
                          } else if (isSelected) {
                            btnStyle = "bg-coral/20 border-coral text-coral font-bold animate-shake";
                            iconElement = <XCircle size={18} className="text-coral shrink-0" />;
                          } else {
                            btnStyle = "bg-ink-3/40 border-ink-4 text-white/70";
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            type="button"
                            disabled={visualAnswered}
                            onClick={() => handleVisualAnswer(opt, idx)}
                            className={`min-h-[58px] p-3 rounded-2xl border flex items-center justify-between text-start transition-all active:scale-98 ${btnStyle}`}
                          >
                            <div className="min-w-0 pr-2">
                              <p className="font-display font-bold text-base break-words">
                                {opt.word.English}
                              </p>
                              <p className="text-[0.8125rem] text-white/70 truncate">
                                {opt.word.Arabic}
                              </p>
                            </div>
                            {iconElement}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Post-Answer Feedback & Clinical Pearl */}
                  {visualAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-3xl border-2 ${
                        isCorrect ? 'bg-mint/10 border-mint/50' : 'bg-coral/10 border-coral/50'
                      } space-y-3.5 select-none`}
                    >
                      {/* 1. Status Pill */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-black border ${
                          isCorrect ? 'bg-mint/20 border-mint/40 text-mint' : 'bg-coral/20 border-coral/40 text-coral'
                        }`}>
                          {isCorrect ? (
                            <>
                              <CheckCircle2 size={15} />
                              <span>{t('تشخيص صحيح (+100)', 'Correct Diagnosis (+100)')}</span>
                            </>
                          ) : (
                            <>
                              <XCircle size={15} />
                              <span>{t('تشخيص غير صحيح', 'Incorrect Diagnosis')}</span>
                            </>
                          )}
                        </span>
                        <span className="text-[0.8125rem] font-bold text-white/70 px-2 py-0.5 rounded-md bg-white/5">
                          {currentWord.subjects[0] || 'Clinical'}
                        </span>
                      </div>

                      {/* 2. THE HERO: Huge unmissable diagnosis name */}
                      <div className="text-center py-2 bg-ink/60 border border-white/10 rounded-2xl space-y-1">
                        <span className="text-[0.8125rem] font-black uppercase tracking-wider text-cyan-400 block">
                          {t('التشخيص الصحيح', 'Correct Diagnosis')}
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide">
                          {currentWord.word.English}
                        </h3>
                        {currentWord.word.Arabic && (
                          <p className="font-display font-bold text-base sm:text-lg text-cyan-300">
                            {currentWord.word.Arabic}
                          </p>
                        )}
                      </div>

                      {/* 3. High-yield Pearl (if available) */}
                      {rawClues[0] && (
                        <div className="bg-black/40 p-2.5 rounded-2xl border border-white/5 text-xs text-white/80 leading-relaxed text-start flex items-start gap-2">
                          <Info size={14} className="text-gold shrink-0 mt-0.5" />
                          <p className="line-clamp-2">
                            <strong className="text-cyan-300">{t('معلومة سريرية: ', 'Clinical Note: ')}</strong>
                            {renderClueText(rawClues[0], 'xs', languageState)}
                          </p>
                        </div>
                      )}

                      {/* 4. THE BIG DOMINANT BUTTON */}
                      <div className="pt-1">
                        <BigBtn
                          onClick={nextVisualCase}
                          className="w-full min-h-[54px] text-base font-display font-extrabold bg-gradient-to-r from-cyan-500 to-mint text-ink-1 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                          <Play size={20} className="fill-current" />
                          <span>{visualCurrentIdx + 1 < visualPool.length ? t('الحالة التالية ➔', 'Next Case ➔') : t('إنهاء التحدي ➔', 'Finish Challenge ➔')}</span>
                        </BigBtn>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Fullscreen Inspect Lightbox Modal */}
                {visualIsInspecting && imgUrl && (
                  <div 
                    role="dialog" aria-modal="true" aria-label={t('فحص الصورة', 'Image inspection')}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
                    onClick={() => setVisualIsInspecting(false)}
                  >
                    <button
                      type="button" ref={inspectCloseRef} aria-label={t('إغلاق', 'Close')}
                      onClick={() => setVisualIsInspecting(false)}
                      className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center z-50 active:scale-90 transition-transform"
                    >
                      <X size={24} />
                    </button>

                    <div className="max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/20" onClick={e => e.stopPropagation()}>
                      <img src={imgUrl} alt="Inspection" className="w-full h-full object-contain max-h-[80vh]" />
                      <div className="p-3 bg-ink-2/95 text-center border-t border-white/10 text-xs text-cyan-300 font-bold">
                        {visualAnswered ? `${currentWord.word.English} · ${currentWord.word.Arabic}` : t('افحص الصورة ثم اختر التشخيص', 'Inspect the image, then choose a diagnosis')}
                      </div>
                    </div>
                  </div>
                )}

                {/* Finished Summary Modal */}
                {visualGameFinished && (
                  <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-ink-2 border border-cyan-500/40 rounded-3xl p-6 text-center space-y-4 shadow-2xl shadow-cyan-500/20">
                      <Trophy size={48} className="text-gold mx-auto animate-bounce" />
                      <h3 className="font-display font-black text-2xl text-white">
                        {t('أنهيت جولة التحدي البصري!', 'Visual Mystery Completed!')}
                      </h3>
                      <p className="text-sm text-white/60">
                        {t(`أتممت فحص وتشخيص ${visualPool.length} حالة سريرية بنجاح!`, `Successfully inspected and diagnosed ${visualPool.length} clinical cases!`)}
                      </p>

                      <div className="py-3 px-4 rounded-2xl bg-ink-3 border border-white/10 flex justify-around items-center">
                        <div>
                          <p className="text-[0.8125rem] text-white/70 uppercase font-black">{t('النقاط', 'Score')}</p>
                          <p className="text-2xl font-black text-gold">{visualScore}</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                          <p className="text-[0.8125rem] text-white/70 uppercase font-black">{t('أعلى سلسلة', 'Max Streak')}</p>
                          <p className="text-2xl font-black text-pop">{visualStreak}x</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 pt-2">
                        <BigBtn onClick={startVisualChallenge} className="flex-1">
                          {t('إعادة التحدي', 'Play Again')}
                        </BigBtn>
                        <BigBtn variant="dark" onClick={() => setPhase('ENTRY')} className="flex-1">
                          {t('الرئيسية', 'Home')}
                        </BigBtn>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })()}

          {/* ================= OFFLINE PLAYERS SETUP ================= */}
          {phase ==='MULTI_SETUP_OFFLINE' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={
                  gameModeLock === 'BATTLE_1V1'
                    ? t('اللاعبان', 'Players')
                    : gameModeLock === 'DR_IMPOSTER'
                    ? t('اللاعبون', 'Players')
                    : t('اللاعبين', 'Players')
                }
                onBack={() => {
                  if (gameModeLock) {
                    onGoBack();
                  } else {
                    setPhase('ENTRY');
                  }
                }}
                backLabel={t('رجوع','Back')}
                right={
                  <IconBtn onClick={() => setPhase('MULTI_SETUP_OFFLINE_CONFIG')} label={t('الإعدادات','Settings')}>
                    <Settings size={18} className="text-mint" />
                  </IconBtn>
                }
              >
                <div className="space-y-2.5 px-4">
                  {offlinePlayerNames.map((name, idx) => {
                    const currentAvId = offlinePlayerAvatars[idx] !== undefined ? offlinePlayerAvatars[idx] : (idx % 10);
                    const isPickerOpen = activeAvatarPickerIdx === idx;
                    const cardColors = [
'from-[#FF5470] to-[#D93757]','from-[#38BDF8] to-[#0E9FDB]','from-[#A78BFA] to-[#8B5CF6]',
'from-[#2FE6A7] to-[#12B981]','from-[#FFC53D] to-[#F5A524]','from-[#F472B6] to-[#DB2777]',
'from-[#60A5FA] to-[#3B82F6]','from-[#34D399] to-[#10B981]','from-[#F97316] to-[#EA580C]','from-[#E879F9] to-[#C026D3]',
                    ];
                    const deletePlayer = (idxToDelete: number) => {
                      const minAllowed = gameModeLock === 'DR_IMPOSTER' ? 3 : 2;
                      if (offlinePlayerNames.length <= minAllowed) {
                        setNotice(languageState ==='Arabic' 
                          ? (gameModeLock === 'DR_IMPOSTER' ? 'لعبة Dr. Imposter تحتاج 3 لاعبين على الأقل!' : 'لازم لاعبين اثنين على الأقل!') 
                          : (gameModeLock === 'DR_IMPOSTER' ? 'At least 3 players required for Dr. Imposter!' : 'At least 2 players required!'));
                        return;
                      }
                      setOfflinePlayerNames(offlinePlayerNames.filter((_, i) => i !== idxToDelete));
                      setOfflinePlayerAvatars(offlinePlayerAvatars.filter((_, i) => i !== idxToDelete));
                      setPlayerCount(offlinePlayerNames.length - 1);
                    };

                    return (
                      <div key={idx} className="space-y-2">
                        <motion.div
                          layout
                          className="flex items-center gap-2.5 p-2.5 rounded-3xl bg-ink-2 border border-ink-4"
                        >
                          <button
                            type="button"
                            aria-label={`${t('تغيير صورة', 'Change avatar for')} ${name || `${t('لاعب', 'Player')} ${idx + 1}`}`} aria-expanded={isPickerOpen}
                            onClick={() => setActiveAvatarPickerIdx(isPickerOpen ? null : idx)}
                            className="h-12 w-12 rounded-2xl bg-white/20 border-2 border-white/70 flex items-center justify-center overflow-hidden shrink-0 active:scale-90 transition-transform"
                          >
                            <AnimalDoctorAvatar avatarId={currentAvId} size={44} />
                          </button>
                          <input
                            type="text"
                            aria-label={`${t('اسم اللاعب', 'Player name')} ${idx + 1}`}
                            value={name}
                            onChange={(e) => {
                              const updated = [...offlinePlayerNames];
                              updated[idx] = e.target.value;
                              setOfflinePlayerNames(updated);
                            }}
                            placeholder={`${t('لاعب','Player')} ${idx + 1}`}
                            maxLength={14}
                            className="flex-1 min-w-0 bg-transparent outline-none text-white font-display font-bold text-lg placeholder-white/60"
                          />
                          {gameModeLock !== 'BATTLE_1V1' && offlinePlayerNames.length > (gameModeLock === 'DR_IMPOSTER' ? 3 : 2) && <button
                            type="button"
                            aria-label={`${t('حذف', 'Remove')} ${name || `${t('لاعب', 'Player')} ${idx + 1}`}`}
                            onClick={() => deletePlayer(idx)}
                            className="h-11 w-11 rounded-xl bg-black/20 flex items-center justify-center text-white/80 shrink-0 active:scale-90 transition-transform"
                          >
                            <X size={18} strokeWidth={2.5} />
                          </button>}
                        </motion.div>

                        <AnimatePresence>
                          {isPickerOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height:'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-ink-2 border border-ink-4 p-3 rounded-2xl">
                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                  {AVATAR_TEMPLATES.map((avatar) => (
                                    <button
                                      key={avatar.id}
                                      aria-label={`${t('صورة', 'Avatar')} ${avatar.id + 1}`} aria-pressed={currentAvId === avatar.id}
                                      type="button"
                                      onClick={() => {
                                        const updated = [...offlinePlayerAvatars];
                                        updated[idx] = avatar.id;
                                        setOfflinePlayerAvatars(updated);
                                        setActiveAvatarPickerIdx(null);
                                      }}
                                      className={`min-h-[48px] min-w-[48px] aspect-square rounded-2xl border flex items-center justify-center transition-all active:scale-90 ${
                                        currentAvId === avatar.id
                                          ?'bg-mint/15 border-mint scale-105'
                                          :'bg-ink-3/60 border-ink-4'
                                      }`}
                                    >
                                      {React.cloneElement(avatar.svg as React.ReactElement, { className:'w-9 h-9' })}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* add player */}
                  {gameModeLock !== 'BATTLE_1V1' && offlinePlayerNames.length < 10 && <button
                    type="button"
                    onClick={() => {
                      if (gameModeLock === 'BATTLE_1V1') {
                        setNotice(languageState === 'Arabic' ? 'مبارزة 1 vs 1 Battle مخصصة للاعبين اثنين فقط!' : '1 vs 1 Battle is for 2 players only!');
                        return;
                      }
                      if (offlinePlayerNames.length >= 10) {
                        setNotice(languageState ==='Arabic' ?'الحد الأقصى 10 لاعبين!' :'Max 10 players!');
                        return;
                      }
                      const nextIdx = offlinePlayerNames.length;
                      setOfflinePlayerNames([...offlinePlayerNames,'']);
                      setOfflinePlayerAvatars([...offlinePlayerAvatars, nextIdx % 10]);
                      setPlayerCount(offlinePlayerNames.length + 1);
                    }}
                    className="w-full min-h-[56px] rounded-3xl border-2 border-dashed border-white/15 bg-white/[0.03] font-display font-bold text-white/70 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    <span className="w-7 h-7 rounded-full bg-mint text-emerald-950 flex items-center justify-center"><Plus size={18} strokeWidth={3} /></span>
                    {t('ضيف لاعب','Add player')}
                  </button>}
                </div>
              </Screen>
              <div className="shrink-0 px-4 pt-2 pb-safe">
                <BigBtn
                  onClick={() => {
                    const emptyIdx = offlinePlayerNames.findIndex(n => !n.trim());
                    if (emptyIdx !== -1) {
                      setNotice(languageState ==='Arabic' ? `اكتب اسم اللاعب رقم ${emptyIdx + 1}!` : `Enter a name for player ${emptyIdx + 1}!`);
                      return;
                    }
                    if (offlinePlayerNames.length < 2) {
                      setNotice(languageState ==='Arabic' ?'لازم لاعبين اثنين على الأقل!' :'At least 2 players required!');
                      return;
                    }
                    setPhase('MULTI_SETUP_OFFLINE_CONFIG');
                  }}
                >
                  {t('يلا بينا',"Let's go")}
                </BigBtn>
              </div>
            </div>
          )}

          {/* ================= OFFLINE CONFIG ================= */}
          {phase ==='MULTI_SETUP_OFFLINE_CONFIG' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={t('إعدادات الجولة','Round Setup')}
                onBack={() => setPhase('MULTI_SETUP_OFFLINE')}
                backLabel={t('رجوع للاعبين','Back')}
              >
                <div className="space-y-4 px-4">
                  <div className="space-y-2">
                    <Label icon={<Target size={14} className="text-mint" />}>{t('التخصص الطبي','Specialty')}</Label>
                    <button
                      type="button"
                      onClick={() => { setSpecSheet('multi'); setSpecSearch(''); }}
                      className="w-full min-h-[60px] px-4 rounded-2xl bg-ink-3 border border-ink-4 flex items-center justify-between active:scale-[0.98] transition-transform"
                    >
                      <span className="font-display font-bold text-white text-base break-words">
                        {multiAdvancedFilter.enabled
                          ? t(`فلتر مخصص (${multiAdvancedFilter.subjects.length})`, `Custom (${multiAdvancedFilter.subjects.length})`)
                          : specialtyLabel(multiSpecialty, languageState)}
                      </span>
                      <span className="text-white/70 text-lg">▾</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    <Label icon={<Flame size={14} className="text-coral" />}>{t('الصعوبة','Difficulty')}</Label>
                    <SegOptions
                      value={multiDifficulty}
                      onChange={(v) => { setMultiDifficulty(v); setMultiGuessingDifficulty(v); }}
                      options={[
                        { id:'All', label: t('الكل','All') },
                        { id:'1', label: t('سهل','Easy') },
                        { id:'2', label: t('متوسط','Med') },
                        { id:'3', label: t('صعب','Hard') },
                      ]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label icon={<Camera size={14} className="text-cyan-400" />}>{t('نوع التحدي','Challenge Mode')}</Label>
                    <SegOptions
                      value={multiImageOnlyMode ? 'IMAGE' : 'ALL'}
                      onChange={(v) => setMultiImageOnlyMode(v === 'IMAGE')}
                      cols={2}
                      options={[
                        { id:'ALL', label: t('كل المصطلحات','All Terms') },
                        { id:'IMAGE', label: t('تحدي الصور (41)','Images (41)') },
                      ]}
                    />
                    {multiImageOnlyMode && (
                      <p className="text-[0.8125rem] text-cyan-300 font-bold px-1 leading-snug">
                        {t('الأطباء يرون صورة الحالة، والمنتحل لا يراها.', 'Doctors see the specimen image; the Imposter does not.')}
                      </p>
                    )}
                  </div>

                  {playerCount >= 3 && <Disclosure title={t('إعدادات متقدمة', 'Advanced settings')}
                    summary={questionsPerPlayer === 0 ? t('نقاش حر', 'Free discussion') : `${questionsPerPlayer} · ${questionTimeLimit ? questionTimeLimit + 's' : t('بدون وقت', 'Untimed')}`}>
                  {playerCount >= 3 && (
                    <div className="panel p-4 space-y-4">
                      <div className="flex items-center gap-2">
                        <ShieldAlert size={22} className="text-coral" />
                        <span className="font-display font-bold text-white">{t('إعدادات المنتحل','Imposter options')}</span>
                      </div>

                      {playerCount >= 5 && (
                        <div className="space-y-2">
                          <Label>{t('عدد المنتحلين','Imposter count')}</Label>
                          <SegOptions
                            value={imposterCount}
                            onChange={setImposterCount}
                            cols={2}
                            options={[
                              { id: 1 as const, label: t('منتحل واحد','1 Imposter'), emoji:'' },
                              { id: 2 as const, label: t('منتحلان','2 Imposters'), emoji:'' },
                            ]}
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label>{t('كرت المنتحل يظهر','Imposter card shows')}</Label>
                        <div className="grid grid-cols-1 gap-2">
                          {([
                            { id:'IMPOSTER' as const, ar:'هوية المنتحل فقط', en:'Just the word"Imposter"', hint: t('الأصعب','Hardest') },
                            { id:'RELATED_WORD' as const, ar:'كلمة طبية مشابهة', en:'A similar medical term', hint: t('تخفّي أكتر','Better disguise') },
                          ]).map(o => (
                            <button
                              key={o.id}
                              type="button"
                              aria-pressed={imposterRevealsMode === o.id} onClick={() => setImposterRevealsMode(o.id)}
                              className={`min-h-[56px] px-4 rounded-2xl border flex items-center gap-3 text-start transition-all active:scale-[0.98] ${
                                imposterRevealsMode === o.id
                                  ?'bg-coral/10 border-coral/50'
                                  :'bg-ink-3/60 border-ink-4'
                              }`}
                            >
                              <span className="flex-1 min-w-0">
                                <span className={`block font-display font-bold text-base ${imposterRevealsMode === o.id ?'text-coral' :'text-white/70'}`}>{languageState ==='Arabic' ? o.ar : o.en}</span>
                                <span className="block text-xs text-white/70 font-bold">{o.hint}</span>
                              </span>
                              {imposterRevealsMode === o.id && <Check size={18} className="text-coral shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {playerCount >= 3 && (
                    <div className="panel p-4 space-y-4">
                      <div className="flex items-center gap-2">
                        <Timer size={22} className="text-gold" />
                        <span className="font-display font-bold text-white">{t('تنظيم أدوار الأسئلة في النقاش','Structured Interrogation Turns')}</span>
                      </div>

                      <div className="space-y-2">
                        <Label>{t('عدد الأسئلة لكل طبيب (يسأل ويُسأل)','Questions per doctor (Asks & is asked)')}</Label>
                        <SegOptions
                          value={String(questionsPerPlayer)}
                          onChange={(v) => setQuestionsPerPlayer(Number(v))}
                          cols={3}
                          options={[
                            { id: '1', label: t('1 سؤال (سريع)','1 Question (Fast)') },
                            { id: '2', label: t('2 سؤال (مكثف)','2 Questions (Deep)') },
                            { id: '0', label: t('حر (مفتوح)','Free / Open') },
                          ]}
                        />
                      </div>

                      {questionsPerPlayer > 0 && (
                        <div className="space-y-2">
                          <Label>{t('وقت كل دور سؤال','Time per question turn')}</Label>
                          <SegOptions
                            value={String(questionTimeLimit)}
                            onChange={(v) => setQuestionTimeLimit(Number(v))}
                            cols={4}
                            options={[
                              { id: '30', label: '30s' },
                              { id: '45', label: '45s' },
                              { id: '60', label: '60s' },
                              { id: '0', label: t('بدون','None') },
                            ]}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  </Disclosure>}
                </div>
              </Screen>
              <div className="shrink-0 px-4 pt-2 pb-safe">
                <BigBtn onClick={startOfflineMultiGame}>
                  {t('وزّع الكروت','Deal the cards')}
                </BigBtn>
              </div>
            </div>
          )}

          {/* ================= ONLINE SETUP ================= */}
          {phase ==='MULTI_SETUP_ONLINE' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={t('أونلاين','Online')}
                onBack={() => { if (isCreatingRoom !== null) setIsCreatingRoom(null); else if (gameModeLock) onGoBack(); else setPhase('ENTRY'); }}
                backLabel={t('رجوع','Back')}
              >
                <div className="space-y-4 px-4">
                  {/* Doctor Name */}
                  <div className="space-y-2">
                    <Label>{t('اسمك (لقب الطبيب)','Your Doctor Name')}</Label>
                    <input
                      type="text"
                      value={currentPlayerName}
                      onChange={(e) => setCurrentPlayerName(e.target.value)}
                      aria-label={t('اسمك', 'Your name')} autoComplete="nickname" placeholder={t('د. أحمد','Dr. Ahmed')}
                      maxLength={16}
                      className="w-full min-h-[56px] bg-ink-3 border border-ink-4 focus:border-lilac/60 rounded-2xl px-4 text-lg font-display font-bold text-white placeholder-white/60 outline-none"
                    />
                  </div>

                  {isCreatingRoom === null ? (
                    <div className="space-y-4 pt-1">
                      {/* Create / Join Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setIsCreatingRoom(true)}
                          className="min-h-[120px] rounded-3xl bg-gradient-to-br from-mint/25 to-mint/5 border border-mint/40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform"
                        >
                          <span className="w-14 h-14 rounded-2xl bg-mint/15 border border-mint/40 flex items-center justify-center">
                            <Plus size={30} className="text-mint" />
                          </span>
                          <span className="font-display font-bold text-mint text-lg">{t('أنشئ غرفة','Create')}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsCreatingRoom(false)}
                          className="min-h-[120px] rounded-3xl bg-gradient-to-br from-lilac/25 to-lilac/5 border border-lilac/40 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform"
                        >
                          <span className="w-14 h-14 rounded-2xl bg-lilac/15 border border-lilac/40 flex items-center justify-center">
                            <LogIn size={30} className="text-lilac" />
                          </span>
                          <span className="font-display font-bold text-lilac text-lg">{t('انضم بكود','Join Code')}</span>
                        </button>
                      </div>

                      {/* Public Active Rooms for solo students at home */}
                      <div className="panel p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse" />
                            <span className="font-display font-bold text-sm text-white">{t('غرف أطباء مفتوحة للعب الآن','Active Open Rooms')}</span>
                          </div>
                          <button
                            type="button"
                            onClick={fetchPublicRooms}
                            disabled={loadingPublicRooms}
                            className="text-xs text-mint font-bold flex items-center gap-1 active:scale-95 transition-transform px-2 py-1 rounded-lg bg-mint/10 border border-mint/20"
                          >
                            <RefreshCcw size={12} className={loadingPublicRooms ?'animate-spin' :''} />
                            {t('تحديث','Refresh')}
                          </button>
                        </div>

                        {loadingPublicRooms ? (
                          <div className="py-6 text-center text-white/70 text-xs font-display">
                            {t('جاري البحث عن غرف نشطة...','Scanning for active rooms...')}
                          </div>
                        ) : publicRooms.length === 0 ? (
                          <div className="py-5 text-center text-white/70 text-xs font-display space-y-1">
                            <p>{roomsError ? t('تعذر تحميل الغرف. حاول التحديث.', 'Could not load rooms. Try refreshing.') : t('لا توجد غرف مفتوحة حالياً','No open rooms at this moment')}</p>
                            <p className="text-[0.8125rem] text-white/70">{t('أنشئ غرفة الآن وشارك الرابط مع زملائك على واتساب!','Create one and share the invite link on WhatsApp!')}</p>
                          </div>
                        ) : (
                          <div className="space-y-2 max-h-[220px] overflow-y-auto custom-scrollbar pr-0.5">
                            {publicRooms.map(room => (
                              <div
                                key={room.id}
                                className="p-3 rounded-2xl bg-ink-3/80 border border-ink-4 flex items-center justify-between hover:border-mint/40 transition-colors"
                              >
                                <div className="space-y-0.5 min-w-0 flex-1 pr-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-display font-black text-white text-base tracking-widest">{room.id}</span>
                                    <span className="text-[0.8125rem] px-2 py-0.5 rounded-full bg-mint/10 text-mint border border-mint/20 font-bold truncate max-w-[120px]">
                                      {specialtyLabel(room.specialty ||'All', languageState)}
                                    </span>
                                  </div>
                                  <p className="text-[0.8125rem] text-white/70 font-bold">
                                    {t(
                                      `${room.players?.length || 1} من ${room.maxPlayers || 4} أطباء ${room.players?.length === 1 ?'· بانتظار لاعب' :''}`,
                                      `${room.players?.length || 1} of ${room.maxPlayers || 4} docs`
                                    )}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setRoomCodeInput(room.id);
                                    joinOnlineRoom(room.id);
                                  }}
                                  className="shrink-0 px-3.5 py-2 rounded-xl bg-mint text-ink font-display font-black text-xs active:scale-95 transition-transform flex items-center gap-1"
                                >
                                  <span>{t('انضمام ➔','Join ➔')}</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : isCreatingRoom ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="space-y-2">
                        <Label>{t('عدد اللاعبين', 'Players')}</Label>
                        {gameModeLock === 'BATTLE_1V1' ? <p className="text-base font-bold text-gold">{t('لاعبان', '2 players')}</p> :
                          <div className="flex items-center gap-3">
                            <button type="button" aria-label={t('تقليل اللاعبين', 'Decrease players')} disabled={onlineMaxPlayers <= (gameModeLock === 'DR_IMPOSTER' ? 3 : 2)}
                              onClick={() => { const next=onlineMaxPlayers-1; setOnlineMaxPlayers(next); setPlayerCount(next); }} className="w-12 h-12 rounded-2xl bg-ink-3 border border-ink-4 disabled:opacity-40"><span aria-hidden>−</span></button>
                            <output aria-live="polite" className="flex-1 text-center font-display text-2xl font-bold">{onlineMaxPlayers}</output>
                            <button type="button" aria-label={t('زيادة اللاعبين', 'Increase players')} disabled={onlineMaxPlayers >= 10}
                              onClick={() => { const next=onlineMaxPlayers+1; setOnlineMaxPlayers(next); setPlayerCount(next); }} className="w-12 h-12 rounded-2xl bg-ink-3 border border-ink-4 disabled:opacity-40"><span aria-hidden>+</span></button>
                          </div>}
                      </div>

                      <div className="space-y-2">
                        <Label>{t('التخصص','Specialty')}</Label>
                        <button
                          type="button"
                          onClick={() => { setSpecSheet('multi'); setSpecSearch(''); }}
                          className="w-full min-h-[56px] px-4 rounded-2xl bg-ink-3 border border-ink-4 flex items-center justify-between active:scale-[0.98] transition-transform"
                        >
                          <span className="font-display font-bold text-white text-base break-words">
                            {multiAdvancedFilter.enabled
                              ? t(`فلتر مخصص (${multiAdvancedFilter.subjects.length})`, `Custom (${multiAdvancedFilter.subjects.length})`)
                              : specialtyLabel(multiSpecialty, languageState)}
                          </span>
                          <span className="text-white/70 text-lg">▾</span>
                        </button>
                      </div>

                      {/* Difficulty Picker */}
                      <div className="space-y-2">
                        <Label>{t('الصعوبة','Difficulty')}</Label>
                        <SegOptions
                          value={multiDifficulty}
                          onChange={(v) => { setMultiDifficulty(v); setMultiGuessingDifficulty(v); }}
                          options={[
                            { id:'All', label: t('الكل','All'), emoji:'' },
                            { id:'1', label: t('سهل','Easy'), emoji:'' },
                            { id:'2', label: t('متوسط','Med'), emoji:'' },
                            { id:'3', label: t('صعب','Hard'), emoji:'' },
                          ]}
                        />
                      </div>

                      {/* Challenge Mode: All vs Images */}
                      <div className="space-y-2">
                        <Label icon={<Camera size={14} className="text-cyan-400" />}>{t('نوع التحدي','Challenge Mode')}</Label>
                        <SegOptions
                          value={multiImageOnlyMode ? 'IMAGE' : 'ALL'}
                          onChange={(v) => setMultiImageOnlyMode(v === 'IMAGE')}
                          cols={2}
                          options={[
                            { id:'ALL', label: t('كل المصطلحات','All Terms') },
                            { id:'IMAGE', label: t('تحدي الصور (41)','Images (41)') },
                          ]}
                        />
                        {multiImageOnlyMode && (
                          <p className="text-[0.8125rem] text-cyan-300 font-bold px-1 leading-snug">
                            {t('الأطباء يرون صورة الحالة، والمنتحل لا يراها.', 'Doctors see the specimen image; the Imposter does not.')}
                          </p>
                        )}
                      </div>

                      {/* 5+ Doctors: Imposter Count */}
                      {onlineMaxPlayers >= 3 && <Disclosure title={t('إعدادات متقدمة', 'Advanced settings')}>
                      {onlineMaxPlayers >= 5 && (
                        <div className="space-y-2">
                          <Label>{t('عدد المنتحلين (Imposters)','Number of Imposters')}</Label>
                          <SegOptions
                            value={String(imposterCount)}
                            onChange={(v) => setImposterCount(Number(v))}
                            options={[
                              { id:'1', label: t('منتحل واحد (1)','1 Imposter'), emoji:'' },
                              { id:'2', label: t('منتحلان (2)','2 Imposters'), emoji:'' },
                            ]}
                          />
                        </div>
                      )}

                      {/* 3+ Doctors: Imposter Card Appearance */}
                      {onlineMaxPlayers >= 3 && (
                        <div className="panel p-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <ShieldAlert size={20} className="text-coral" />
                            <span className="font-display font-bold text-white">{t('كرت المنتحل يظهر','Imposter card shows')}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {([
                              { id:'IMPOSTER' as const, ar:'هوية المنتحل فقط', en:'Just the word"Imposter"' },
                              { id:'RELATED_WORD' as const, ar:'تشخيص طبي مقارب (تخفي أقوى)', en:'A related medical diagnosis' },
                            ]).map(o => (
                              <button
                                key={o.id}
                                type="button"
                                aria-pressed={imposterRevealsMode === o.id} onClick={() => setImposterRevealsMode(o.id)}
                                className={`min-h-[52px] px-4 rounded-2xl border flex items-center gap-3 text-start active:scale-[0.98] transition-transform ${
                                  imposterRevealsMode === o.id ?'bg-coral/10 border-coral/50' :'bg-ink-3/60 border-ink-4'
                                }`}
                              >
                                <span className={`flex-1 font-display font-bold text-sm ${imposterRevealsMode === o.id ?'text-coral' :'text-white/70'}`}>
                                  {languageState ==='Arabic' ? o.ar : o.en}
                                </span>
                                {imposterRevealsMode === o.id && <Check size={16} className="text-coral shrink-0" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {onlineMaxPlayers >= 3 && (
                        <div className="panel p-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <Timer size={20} className="text-gold" />
                            <span className="font-display font-bold text-white">{t('تنظيم أدوار الأسئلة في النقاش','Structured Interrogation Turns')}</span>
                          </div>
                          <div className="space-y-2">
                            <Label>{t('عدد الأسئلة لكل طبيب','Questions per doctor')}</Label>
                            <SegOptions
                              value={String(questionsPerPlayer)}
                              onChange={(v) => setQuestionsPerPlayer(Number(v))}
                              cols={3}
                              options={[
                                { id: '1', label: t('1 سؤال (سريع)','1 Question (Fast)') },
                                { id: '2', label: t('2 سؤال (مكثف)','2 Questions (Deep)') },
                                { id: '0', label: t('حر (مفتوح)','Free / Open') },
                              ]}
                            />
                          </div>
                          {questionsPerPlayer > 0 && (
                            <div className="space-y-2">
                              <Label>{t('وقت كل دور سؤال','Time per question turn')}</Label>
                              <SegOptions
                                value={String(questionTimeLimit)}
                                onChange={(v) => setQuestionTimeLimit(Number(v))}
                                cols={4}
                                options={[
                                  { id: '30', label: '30s' },
                                  { id: '45', label: '45s' },
                                  { id: '60', label: '60s' },
                                  { id: '0', label: t('بدون','None') },
                                ]}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      </Disclosure>}

                      <div className="flex gap-2.5 pt-1">
                        <BigBtn disabled={onlineActionLoading || !currentPlayerName.trim()} onClick={createOnlineRoom} className="flex-1">
                          {onlineActionLoading ?'...' : t('إنشاء الغرفة ➔','Create Room ➔')}
                        </BigBtn>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="space-y-2">
                        <Label>{t('كود الغرفة (6 رموز)','Room code (6 chars)')}</Label>
                        <input
                          type="text"
                          maxLength={6}
                          disabled={onlineActionLoading}
                          value={roomCodeInput}
                          onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                          aria-label={t('كود الغرفة', 'Room code')} autoCapitalize="characters" autoComplete="off" spellCheck={false} dir="ltr" placeholder="DRIMPZ"
                          className="room-code-input w-full min-h-[68px] bg-ink-3 border-2 border-ink-4 focus:border-lilac/60 rounded-2xl px-4 text-center font-display font-bold text-white placeholder-white/60 outline-none uppercase"
                        />
                      </div>
                      <div className="flex gap-2.5">
                        <BigBtn disabled={onlineActionLoading || !currentPlayerName.trim()} onClick={() => joinOnlineRoom()} className="flex-1">
                          {onlineActionLoading ?'...' : t('الانضمام للغرفة ➔','Join Room ➔')}
                        </BigBtn>
                      </div>

                      {/* Public Rooms also shown below join code */}
                      <div className="panel p-4 space-y-3 mt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse" />
                            <span className="font-display font-bold text-sm text-white">{t('أو انضم إلى غرفة متاحة الآن','Or join an open room')}</span>
                          </div>
                          <button
                            type="button"
                            onClick={fetchPublicRooms}
                            disabled={loadingPublicRooms}
                            className="text-xs text-mint font-bold flex items-center gap-1 active:scale-95 transition-transform px-2 py-1 rounded-lg bg-mint/10 border border-mint/20"
                          >
                            <RefreshCcw size={12} className={loadingPublicRooms ?'animate-spin' :''} />
                            {t('تحديث','Refresh')}
                          </button>
                        </div>

                        {loadingPublicRooms ? (
                          <div className="py-4 text-center text-white/70 text-xs font-display">
                            {t('جاري التحميل...','Loading...')}
                          </div>
                        ) : publicRooms.length === 0 ? (
                          <div className="py-4 text-center text-white/70 text-xs font-display">
                            {roomsError ? t('تعذر تحميل الغرف. حاول التحديث.', 'Could not load rooms. Try refreshing.') : t('اطلب كود الغرفة من زميلك.', 'Ask your friend for their room code.')}
                          </div>
                        ) : (
                          <div className="space-y-2 max-h-[160px] overflow-y-auto custom-scrollbar pr-0.5">
                            {publicRooms.map(room => (
                              <div
                                key={room.id}
                                className="p-3 rounded-2xl bg-ink-3/80 border border-ink-4 flex items-center justify-between"
                              >
                                <div className="space-y-0.5 min-w-0 flex-1 pr-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-display font-black text-white text-base tracking-widest">{room.id}</span>
                                    <span className="text-[0.8125rem] px-2 py-0.5 rounded-full bg-mint/10 text-mint border border-mint/20 font-bold truncate max-w-[110px]">
                                      {specialtyLabel(room.specialty ||'All', languageState)}
                                    </span>
                                  </div>
                                  <p className="text-[0.8125rem] text-white/70 font-bold">
                                    {t(`${room.players?.length || 1} من ${room.maxPlayers || 4} أطباء`, `${room.players?.length || 1} of ${room.maxPlayers || 4} docs`)}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setRoomCodeInput(room.id);
                                    joinOnlineRoom(room.id);
                                  }}
                                  className="shrink-0 px-3.5 py-1.5 rounded-xl bg-mint text-ink font-display font-black text-xs active:scale-95 transition-transform"
                                >
                                  {t('انضمام','Join')}
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </Screen>
            </div>
          )}

          {/* ================= ONLINE LOBBY ================= */}
          {phase ==='ONLINE_LOBBY' && onlineRoomState && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={t('غرفة اللعب','Game Room')}
                onBack={() => {
                  void leaveCurrentRoom();
                  setOnlineRoomState(null);
                  setRoomId('');
                  setPhase('MULTI_SETUP_ONLINE');
                }}
                backLabel={t('مغادرة','Leave')}
              >
                <div className="space-y-4 px-4">
                  <RoomInvite code={roomId} language={languageState} onError={setNotice} />

                  {/* players list */}
                  <div className="space-y-2">
                    <Label>
                      {t(
                        `${onlineRoomState.players.length} من ${onlineRoomState.maxPlayers} أطباء منضمين`,
                        `${onlineRoomState.players.length} of ${onlineRoomState.maxPlayers} doctors joined`
                      )}
                    </Label>
                    <div className="space-y-2 max-h-[220px] overflow-y-auto custom-scrollbar pr-0.5">
                      {onlineRoomState.players.map((p: any, index: number) => (
                        <div key={p.id} className="min-h-[56px] px-4 rounded-2xl bg-ink-3/70 border border-ink-4 flex items-center justify-between">
                          <span className="font-display font-bold text-white flex items-center gap-3 flex-1 min-w-0">
                            <span className="w-8 h-8 rounded-xl bg-pop/15 border border-pop/30 text-pop text-sm font-black flex items-center justify-center">{index + 1}</span>
                            <span className="break-words min-w-0 flex-1">{p.name}</span>
                          </span>
                          {p.id === onlineRoomState.hostId ? (
                            <span className="text-xs font-black text-gold bg-gold/10 border border-gold/30 rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0 ms-2">
                              {t('المضيف','Host')}
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-mint bg-mint/10 border border-mint/20 rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0 ms-2">
                              {t('طبيب','Doctor')}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Screen>

              {/* Host Start / Guest Waiting Bottom Action */}
              <div className="shrink-0 px-4 pt-2 pb-safe">
                {onlineRoomState.hostId === localPlayerId ? (
                  <div className="space-y-1.5">
                    <BigBtn
                      disabled={onlineRoomState.players.length < minimumRoomPlayers(onlineRoomState.maxPlayers)}
                      onClick={startOnlineMatch}
                    >
                      {onlineRoomState.players.length < minimumRoomPlayers(onlineRoomState.maxPlayers)
                        ? t(`بانتظار لاعبين: ${minimumRoomPlayers(onlineRoomState.maxPlayers) - onlineRoomState.players.length}`, `Waiting for ${minimumRoomPlayers(onlineRoomState.maxPlayers) - onlineRoomState.players.length} more`)
                        : onlineRoomState.players.length === 2
                          ? t('بدء المبارزة (طبيبان) ➔','Start 1v1 Duel ➔')
                          : t(`بدء اللعبة (${onlineRoomState.players.length} أطباء) ➔`, `Start Match (${onlineRoomState.players.length} Doctors) ➔`)}
                    </BigBtn>
                    {onlineRoomState.players.length < onlineRoomState.maxPlayers && onlineRoomState.players.length >= minimumRoomPlayers(onlineRoomState.maxPlayers) && (
                      <p className="text-[0.8125rem] text-center text-white/70 font-bold">
                        {t(
                          `الغرفة تتسع لـ ${onlineRoomState.maxPlayers} أطباء. يمكنك البدء الآن أو انتظار بقية الزملاء.`,
                          `Room fits up to ${onlineRoomState.maxPlayers} doctors. You can start now or wait for more.`
                        )}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="panel py-4 text-center space-y-1">
                    <p className="font-display font-bold text-white/80 animate-pulse">
                      {t('بانتظار المضيف لبدء اللعبة...','Waiting for host to start the game...')}
                    </p>
                    <p className="text-[0.8125rem] text-white/70">
                      {onlineRoomState.maxPlayers === 2 ? t('استعد لاكتشاف كرت خصمك.', 'Get ready to deduce your opponent’s card.') : t('استعد لاكتشاف المنتحل.', 'Get ready to find the imposter.')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= ROLES REVEAL ================= */}
          {phase ==='ROLES_REVEAL' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen
                title={t('كرتك السري','Your secret card')}
                right={
                  !isOnline ? (
                    <span className="text-xs font-black text-white/70 bg-ink-3 border border-ink-4 rounded-full px-3 h-9 flex items-center">
                      {revealIndex + 1}/{activePlayers.length}
                    </span>
                  ) : undefined
                }
              >
                <div className="px-4 space-y-4">
                  {/* offline privacy gate */}
                  {!isOnline && isCardHidden && currentOfflinePlayer && (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="mt-4 p-7 bg-ink-2 border-2 border-dashed border-white/15 rounded-[2rem] flex flex-col items-center justify-center gap-5 text-center"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-mint/50 shadow-[0_0_30px_rgba(47,230,167,0.2)]">
                        <AnimalDoctorAvatar avatarId={currentOfflinePlayer.avatarId} size={92} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-black text-white/70 uppercase tracking-widest">{t('مرر الموبايل لـ','Pass the phone to')}</p>
                        <p className="font-display font-bold text-3xl text-white">{currentOfflinePlayer.name}</p>
                      </div>
                      <BigBtn onClick={() => setIsCardHidden(false)}>
                        {t('اعرض كرتي','Reveal my card')}
                      </BigBtn>
                    </motion.div>
                  )}

                  {(isOnline || (!isCardHidden && currentOfflinePlayer)) && (() => {
                    const player = isOnline
                      ? activePlayers.find(m => m.id === localPlayerId)
                      : currentOfflinePlayer;
                    if (!player) return null;
                    const wordObj = getWordDetails(player.assignedWordId);
                    const isPlainImposter = player.assignedWordId ==='IMPOSTER';
                    const isImposter = player.role ==='IMPOSTER';

                    return (
                      <motion.div
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ type:'spring', damping: 20, stiffness: 200 }}
                        className={`rounded-[2rem] border-2 p-6 space-y-5 text-center ${
                          isImposter
                            ?'bg-gradient-to-b from-coral/15 to-ink-2 border-coral/50 shadow-[0_0_50px_rgba(255,84,112,0.15)]'
                            :'bg-gradient-to-b from-mint/12 to-ink-2 border-mint/40 shadow-[0_0_50px_rgba(47,230,167,0.12)]'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <span className="text-5xl block">{isImposter ?'' :''}</span>
                          <h4 className={`font-display font-bold text-3xl ${isImposter ?'text-coral' :'text-mint'}`}>
                            {isImposter ? t('أنت المنتحل!','YOU ARE THE IMPOSTER!') : t('أنت طبيب حقيقي','You are a real Doctor')}
                          </h4>
                          <p className="text-white/70 text-sm font-bold">
                            {player.name} · {isImposter
                              ? t('تظاهر بالمعرفة وتجنب الشبهات','Blend in & avoid suspicion')
                              : t('حافظ على سرية الكلمة','Keep the word secret')}
                          </p>
                        </div>

                        {/* word box */}
                        {isImposter && isPlainImposter && (
                          <div className="bg-ink/70 border border-coral/30 rounded-2xl p-4 space-y-2">
                            <p className="text-[0.8125rem] font-black text-white/70 uppercase">{t('كرتك','Your card')}</p>
                            <p className="font-display font-bold text-3xl text-coral tracking-widest">IMPOSTER</p>
                            <p className="text-xs text-coral font-bold leading-relaxed">
                              {t('الأطباء يعرفون الكلمة والصورة السريرية. استمع لأسئلتهم وتظاهر بالمعرفة.', 'Real doctors know the word and clinical image. Listen carefully and blend in.')}
                            </p>
                          </div>
                        )}

                        {wordObj && (
                          <div className="bg-ink/70 border border-white/10 rounded-2xl p-4 space-y-3">
                            <div className="text-center py-2">
                              <span className={`text-[0.8125rem] font-black uppercase tracking-widest block mb-1 ${isImposter ? 'text-coral' : 'text-mint'}`}>
                                {isImposter ? t('كلمتك المضللة للتمويه (بدون صورة)', 'Disguised Word (No image)') : t('الكلمة السرية للأطباء', 'Secret Doctor Word')}
                              </span>
                              <h2 className={`font-display font-black text-3xl sm:text-4xl tracking-wide ${isImposter ? 'text-coral' : 'text-white'}`}>
                                {wordObj.word.English}
                              </h2>
                              {wordObj.word.Arabic && (
                                <p className={`font-display font-bold text-xl mt-1 ${isImposter ? 'text-coral' : 'text-mint'}`}>
                                  {wordObj.word.Arabic}
                                </p>
                              )}
                            </div>

                            {/* Crucial: ONLY real doctors (!isImposter) see the clinical specimen image! */}
                            {!isImposter && getWordImage(wordObj.id) && (
                              <div className="space-y-1.5 my-2">
                                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/20 max-h-52 bg-black/60">
                                  <img src={getWordImage(wordObj.id)!} alt={wordObj.word.English} className="w-full h-44 object-contain bg-ink" />
                                  <span className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-xl text-[0.8125rem] text-cyan-300 font-bold border border-cyan-500/40 flex items-center gap-1.5 shadow-md">
                                    <Camera size={13} className="text-cyan-400" /> {t('صورة الحالة السريرية (للأطباء فقط)', 'Clinical image (Doctors only)')}
                                  </span>
                                </div>
                              </div>
                            )}

                            {isImposter && (
                              <div className="p-2.5 rounded-xl bg-coral/10 border border-coral/30 space-y-1 text-center">
                                <p className="text-xs font-bold text-coral flex items-center justify-center gap-1.5">
                                  <ShieldAlert size={14} />
                                  {t('أنت المنتحل!', 'You are the Imposter!')}
                                </p>
                                <p className="text-[0.8125rem] text-white/80 font-medium leading-relaxed">
                                  {t(
                                    'لا تملك صورة الحالة السريرية. تجنب لفت الأنظار.',
                                    'You have no case image. Bluff carefully.'
                                  )}
                                </p>
                              </div>
                            )}

                            {/* Compact Clues helper (Optional accordion, doesn't push CTA off screen) */}
                            <div className="border-t border-white/5 pt-2">
                              {showMoreClues ? (
                                <div className="space-y-1 text-start">
                                  {getCluesForWord(wordObj.id, wordObj, languageState).slice(0, 3).map((cl, i) => (
                                    <div key={i} className="text-xs text-white/70 leading-relaxed">
                                      {renderClueText(cl, 'xs', languageState)}
                                    </div>
                                  ))}
                                  <button
                                    type="button"
                                    onClick={() => setShowMoreClues(false)}
                                    className="text-pop text-xs font-bold pt-1 hover:underline block"
                                  >
                                    {t('إخفاء التفاصيل ▲', 'Hide details ▲')}
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => setShowMoreClues(true)}
                                  className="w-full py-1.5 text-xs font-bold text-white/70 hover:text-white/80 flex items-center justify-center gap-1 transition-colors"
                                >
                                  <Lightbulb size={13} className="text-gold" />
                                  <span>{t('عرض تلميحات إضافية للحالة ▼', 'View clinical hints ▼')}</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })()}
                </div>
              </Screen>
              <div className="shrink-0 px-4 pt-2 pb-safe">
                {isOnline ? (
                  onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                    <BigBtn
                      onClick={async () => {
                        const roomRef = doc(db,'rooms', roomId);
                        const targetStatus = onlineRoomState.players.length === 2 ?'TWO_PLAYERS_GUESS' :'PLAYING_DISCUSSION';
                        await updateDoc(roomRef, { status: targetStatus });
                      }}
                    >
                      {t('بدء النقاش ➔','Start discussion ➔')}
                    </BigBtn>
                  ) : (
                    <div className="panel py-4 text-center">
                      <p className="font-display font-bold text-white/60 animate-pulse">{t('بانتظار المضيف لبدء النقاش...','Waiting for host...')}</p>
                    </div>
                  )
                ) : (
                  <BigBtn onClick={revealNextPlayerOffline} disabled={isCardHidden}>
                    {revealIndex < activePlayers.length - 1
                      ? t('أخفِ الكرت ومرر الهاتف', 'Hide card & pass phone')
                      : t('بدء النقاش ➔', 'Start Discussion ➔')}
                  </BigBtn>
                )}
              </div>
            </div>
          )}

          {/* ================= GROUP DISCUSSION ================= */}
          {phase ==='PLAY_DISCUSSION' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen title={isLocalVotingActive ? t('التصويت السري', 'Secret vote') : t('وقت النقاش','Discussion')}>
                {!isLocalVotingActive ? (
                  <div className="space-y-3 px-4">
                    {/* Structured Interrogation Turn Card (Offline & Online) */}
                    {questioningCycle.length > 0 && (
                      <div className="space-y-3">
                        {currentCycleIdx < questioningCycle.length ? (() => {
                          const currentMatch = questioningCycle[currentCycleIdx];
                          const isLastTurn = currentCycleIdx + 1 === questioningCycle.length;

                          return (
                            <motion.div
                              key={currentCycleIdx}
                              initial={{ opacity: 0, scale: 0.96 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                              className="p-4 rounded-3xl bg-gradient-to-b from-ink-2 via-ink-3 to-ink-2 border-2 border-pop/50 shadow-xl space-y-3.5 relative overflow-hidden"
                            >
                              {/* Header & Stepper */}
                              <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-pop animate-ping" />
                                  <span className="text-xs font-black uppercase text-pop tracking-wider">
                                    {t(`السؤال ${currentCycleIdx + 1} من ${questioningCycle.length}`, `Turn ${currentCycleIdx + 1} of ${questioningCycle.length}`)}
                                  </span>
                                  {currentMatch.roundNum && questionsPerPlayer > 1 && (
                                    <span className="text-[0.8125rem] px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-bold">
                                      {t(`الجولة ${currentMatch.roundNum}`, `Round ${currentMatch.roundNum}`)}
                                    </span>
                                  )}
                                </div>

                                {questionTimeLimit > 0 && (
                                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono font-black text-xs ${
                                    turnTimeRemaining <= 10
                                      ? 'bg-coral/25 text-coral border-coral/50 animate-pulse shadow-[0_0_12px_rgba(255,84,112,0.4)]'
                                      : 'bg-ink border-white/15 text-gold'
                                  }`}>
                                    <Timer size={13} className={turnTimeRemaining <= 10 ? 'animate-spin' : ''} />
                                    <span>{turnTimeRemaining}s</span>
                                  </div>
                                )}
                              </div>

                              {/* Asker ➔ Target Matchup */}
                              <div className="flex items-center justify-between gap-2 py-1">
                                {/* The Asker */}
                                <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0 text-center">
                                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-pop/60 shadow-lg bg-ink flex items-center justify-center relative">
                                    <AnimalDoctorAvatar avatarId={currentMatch.askerAvatarId ?? 0} size={46} />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-pop text-white text-[0.8125rem] font-black flex items-center justify-center shadow">
                                      ?
                                    </span>
                                  </div>
                                  <span className="text-[0.8125rem] font-black uppercase text-pop tracking-wider">
                                    {t('يسأل الآن', 'Asker')}
                                  </span>
                                  <span className="font-display font-bold text-sm text-white truncate max-w-full">
                                    {currentMatch.askerName}
                                  </span>
                                </div>

                                {/* Dynamic Arrow & VS */}
                                <div className="flex flex-col items-center gap-1 shrink-0 px-2">
                                  <span className="text-[0.8125rem] font-black text-white/70 uppercase tracking-widest">{t('يستجوب', 'Inquires')}</span>
                                  <div className="w-8 h-8 rounded-full bg-pop/15 border border-pop/30 flex items-center justify-center text-pop text-sm font-bold">
                                    ➔
                                  </div>
                                </div>

                                {/* The Target */}
                                <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0 text-center">
                                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg bg-ink flex items-center justify-center relative">
                                    <AnimalDoctorAvatar avatarId={currentMatch.targetAvatarId ?? 1} size={46} />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-black text-[0.8125rem] font-black flex items-center justify-center shadow">
                                      !
                                    </span>
                                  </div>
                                  <span className="text-[0.8125rem] font-black uppercase text-cyan-400 tracking-wider">
                                    {t('المُستجوب', 'Target')}
                                  </span>
                                  <span className="font-display font-bold text-sm text-white truncate max-w-full">
                                    {currentMatch.targetName}
                                  </span>
                                </div>
                              </div>

                              {/* Clear Guidance */}
                              <div className="bg-black/30 border border-white/5 rounded-2xl p-2.5 text-center space-y-1">
                                <p className="text-xs text-white/90 font-bold leading-relaxed">
                                  {t(
                                    `${currentMatch.askerName} يوجّه سؤاله لـ ${currentMatch.targetName} دون كشف الكلمة!`,
                                    `${currentMatch.askerName} asks ${currentMatch.targetName} without revealing the word!`
                                  )}
                                </p>
                                {turnTimeRemaining <= 0 && questionTimeLimit > 0 && (
                                  <p className="text-[0.8125rem] text-coral font-bold animate-pulse">
                                    {t('⏰ انتهى الوقت المقترح للسؤال! انتقل للدور التالي.', '⏰ Time is up! Move to the next turn.')}
                                  </p>
                                )}
                              </div>

                              {/* Advance Button (Dominant Big Button) */}
                              {(!isOnline || onlineRoomState?.hostId === localPlayerId || currentMatch.askerId === localPlayerId) ? (
                                <button
                                  type="button"
                                  onClick={handleNextQuestionTurn}
                                  className="w-full min-h-[54px] rounded-2xl bg-gradient-to-r from-mint to-emerald-400 text-ink-1 font-display font-black text-base flex items-center justify-center gap-2 active:scale-98 transition-all shadow-lg shadow-mint/20 cursor-pointer"
                                >
                                  <Check size={20} strokeWidth={3} />
                                  <span>
                                    {isLastTurn
                                      ? t('إنهاء الأسئلة وبدء التصويت ➔', 'Finish questions & vote ➔')
                                      : t('السؤال التالي ➔', 'Next question ➔')}
                                  </span>
                                </button>
                              ) : (
                                <div className="py-2.5 px-4 rounded-xl bg-ink/60 border border-white/10 text-center">
                                  <p className="text-xs text-white/60 font-bold animate-pulse">
                                    {t(`بانتظار ${currentMatch.askerName} أو المضيف لإنهاء السؤال...`, `Waiting for ${currentMatch.askerName} or host to advance...`)}
                                  </p>
                                </div>
                              )}
                            </motion.div>
                          );
                        })() : (
                          /* All Questions in cycle completed! */
                          <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="p-5 rounded-3xl bg-mint/15 border-2 border-mint/50 text-center space-y-3 shadow-[0_0_30px_rgba(47,230,167,0.2)]"
                          >
                            <h4 className="font-display font-bold text-xl text-mint leading-tight">
                              {t('اكتملت جولة الأسئلة', 'All questions completed')}
                            </h4>
                            <p className="text-xs text-white/80 font-medium leading-relaxed">
                              {t(
                                'حان وقت التصويت لتحديد المنتحل.',
                                'Time to vote and find the Imposter.'
                              )}
                            </p>
                            {isOnline ? (
                              onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                                <BigBtn
                                  variant="coral"
                                  onClick={async () => {
                                    const roomRef = doc(db, 'rooms', roomId);
                                    await updateDoc(roomRef, { status: 'VOTING' });
                                  }}
                                >
                                  {t('بدء التصويت ➔', 'Start voting ➔')}
                                </BigBtn>
                              ) : (
                                <div className="panel py-3 text-center">
                                  <p className="font-display font-bold text-white/60 animate-pulse text-xs">
                                    {t('بانتظار المضيف لبدء التصويت...', 'Waiting for host to start voting...')}
                                  </p>
                                </div>
                              )
                            ) : (
                              <BigBtn
                                variant="coral"
                                onClick={() => {
                                  setIsLocalVotingActive(true);
                                  setLocalVoterId(null);
                                  setCompletedVoters([]);
                                  setLocalVotingVotes({});
                                  setShowLocalVoterTargetSelection(false);
                                  setVotedSuspectIds([]);
                                }}
                              >
                                {t('بدء التصويت ➔', 'Start voting ➔')}
                              </BigBtn>
                            )}
                          </motion.div>
                        )}

                        {/* Collapsible Question Cycle Sequence Stepper */}
                        <div className="space-y-1.5">
                          <button
                            type="button"
                            onClick={() => setShowAllQuestionsList(!showAllQuestionsList)}
                            className="w-full min-h-[48px] px-3.5 rounded-xl bg-ink-2/80 border border-ink-4 flex items-center justify-between text-xs font-bold text-white/70 active:scale-98 transition-all"
                          >
                            <span className="flex items-center gap-1.5">
                              <RefreshCcw size={14} className="text-mint" />
                              <span>
                                {t('جدول أدوار الأسئلة بالكامل', 'Full Turn Schedule')}
                                {' · '}
                                {questioningCycle.filter(c => c.completed).length}/{questioningCycle.length}
                              </span>
                            </span>
                            <span className="text-white/70">{showAllQuestionsList ? '▲' : '▼'}</span>
                          </button>

                          <AnimatePresence>
                            {showAllQuestionsList && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-2.5 rounded-2xl bg-ink-2 border border-ink-4 space-y-1.5 max-h-[180px] overflow-y-auto custom-scrollbar">
                                  {questioningCycle.map((match, idx) => {
                                    const isCurrent = idx === currentCycleIdx;
                                    const isDone = match.completed || idx < currentCycleIdx;
                                    return (
                                      <div
                                        key={idx}
                                        className={`px-3 py-2 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                                          isCurrent
                                            ? 'bg-pop/15 border-pop/50 text-white ring-1 ring-pop/40'
                                            : isDone
                                            ? 'bg-mint/5 border-mint/20 text-white/70'
                                            : 'bg-ink/50 border-ink-4 text-white/70'
                                        }`}
                                      >
                                        <div className="flex items-center gap-2 truncate">
                                          <span className="text-[0.8125rem] text-white/70 font-mono">#{idx + 1}</span>
                                          <span className={isCurrent ? 'text-pop font-black' : 'text-white'}>{match.askerName}</span>
                                          <span className="text-white/70">➔</span>
                                          <span className={isCurrent ? 'text-cyan-300 font-black' : 'text-white'}>{match.targetName}</span>
                                        </div>
                                        <span className="shrink-0 text-[0.8125rem]">
                                          {isCurrent ? (
                                            <span className="text-pop font-black animate-pulse">⏳ {t('جاري الآن', 'Active')}</span>
                                          ) : isDone ? (
                                            <span className="text-mint font-bold">✓ {t('تم', 'Done')}</span>
                                          ) : (
                                            <span className="text-white/70 font-medium">{t('قادم', 'Upcoming')}</span>
                                          )}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                    {/* Real-time group interrogation banner if YOU are being interrogated */}
                    {isOnline && onlineRoomState?.inquiry?.targetPlayerId === localPlayerId && onlineRoomState?.inquiry?.activeQuestion && (
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="panel p-5 rounded-3xl border-2 border-pop/60 bg-pop/10 space-y-4 shadow-[0_0_30px_rgba(255,107,107,0.2)]"
                      >
                        <div className="flex items-center gap-2 text-pop">
                          <span className="w-9 h-9 rounded-xl bg-pop/20 border border-pop/40 flex items-center justify-center shrink-0 animate-bounce">
                            <AlertCircle size={20} />
                          </span>
                          <div>
                            <p className="text-[0.8125rem] font-black uppercase tracking-wider text-pop">
                              {t('استجواب سريري موجه إليك الآن!', 'Live Clinical Interrogation!')}
                            </p>
                            <p className="font-display font-bold text-sm text-white">
                              {(() => {
                                const asker = activePlayers.find(p => p.id === onlineRoomState.inquiry.turnPlayerId);
                                return t(`${asker?.name || 'زميلك'} يستجوبك أمام الجميع:`, `${asker?.name || 'Doctor'} interrogates you:`);
                              })()}
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-ink-2/90 border border-ink-4 space-y-1">
                          <p className="font-display font-bold text-base text-white leading-relaxed">
                            {onlineRoomState.inquiry.activeQuestion.text[languageState === 'Arabic' ? 'ar' : 'en']}
                          </p>
                          {languageState === 'Arabic' && (
                            <p className="text-xs text-white/70 font-medium">
                              {onlineRoomState.inquiry.activeQuestion.text.en}
                            </p>
                          )}
                        </div>

                        {(() => {
                          const myWordId = activePlayers.find(p => p.id === localPlayerId)?.assignedWordId;
                          const myWord = myWordId ? getWordDetails(myWordId) : null;
                          const truthEval = evaluateQuestionTruth(onlineRoomState.inquiry.activeQuestion.id, myWord);

                          return (
                            <div className="space-y-2.5">
                              <p className="text-[0.8125rem] font-bold text-white/60 text-center">
                                {t('أجب فوراً دون كتابة (Zero Typing):', 'Answer instantly (Zero Typing):')}
                              </p>
                              <div className="grid grid-cols-1 gap-2">
                                {INQUIRY_ANSWER_OPTIONS.map((opt) => {
                                  const isMedicallyTrue = truthEval.trueAnswer === opt.id;
                                  return (
                                    <button
                                      key={opt.id}
                                      type="button"
                                      onClick={() => submitOnlineInquiryAnswer(opt.id)}
                                      className={`w-full min-h-[52px] px-4 rounded-2xl border-2 font-display font-bold text-sm flex items-center justify-between gap-2 active:scale-98 transition-all ${opt.color} ${
                                        isMedicallyTrue ? 'ring-2 ring-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]' : ''
                                      }`}
                                    >
                                      <span>{languageState === 'Arabic' ? opt.labelAr : opt.labelEn}</span>
                                      {isMedicallyTrue && (
                                        <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[0.8125rem] font-black flex items-center gap-1">
                                          <span>⭐</span>
                                          <span>{t('الحقيقة السريرية لكرتك', 'True for your card')}</span>
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {truthEval && truthEval.clinicalReasonAr && (
                                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-start">
                                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                                    <Sparkles size={14} />
                                    <span>{t('همسة المستشار السريري (مرئية لك فقط):', 'Clinical Advisor Whisper (Only you see this):')}</span>
                                  </div>
                                  <p className="text-[0.8125rem] text-white/85 leading-relaxed font-medium">
                                    {languageState === 'Arabic' ? truthEval.clinicalReasonAr : truthEval.clinicalReasonEn}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}

                    {/* Interactive 5-Stage Clinical Inquiry Tree Drawer / Sheet */}
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => setShowGroupInquirySheet(!showGroupInquirySheet)}
                        className="w-full min-h-[52px] px-4 rounded-2xl bg-ink-3/70 hover:bg-ink-3 border border-ink-4 flex items-center justify-between active:scale-[0.98] transition-all"
                      >
                        <span className="flex items-center gap-2 font-display font-bold text-pop text-sm">
                          <Stethoscope size={18} />
                          {t('شجرة الاستجواب السريري (5 مراحل)', '5-Stage Clinical Inquiry Tree')}
                        </span>
                        <span className="text-white/70 text-sm">{showGroupInquirySheet ? '▲' : '▼'}</span>
                      </button>

                      <AnimatePresence>
                        {showGroupInquirySheet && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-ink-2 border border-ink-4 rounded-3xl p-3.5 space-y-3">
                              {/* Stage Navigation Tabs */}
                              <div className="grid grid-cols-5 gap-1 bg-ink/60 p-1 rounded-2xl border border-white/5">
                                {STAGE_META.map((meta) => {
                                  const isSelected = groupInquiryStageTab === meta.stage;
                                  return (
                                    <button
                                      key={meta.stage}
                                      type="button"
                                      onClick={() => setGroupInquiryStageTab(meta.stage)}
                                      className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-0.5 transition-all ${
                                        isSelected
                                          ? 'bg-pop text-white font-black shadow-sm'
                                          : 'text-white/70 hover:text-white/70'
                                      }`}
                                    >
                                      <span className="text-[0.8125rem] font-mono">{meta.stage}</span>
                                      <span className="text-[0.8125rem] font-bold truncate max-w-full">
                                        {languageState === 'Arabic' ? meta.shortAr : meta.shortEn}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Stage Header */}
                              {(() => {
                                const currentMeta = STAGE_META[groupInquiryStageTab - 1];
                                const questions = getBranchQuestionsForStage(groupInquiryStageTab, 'Disease');
                                return (
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between px-1">
                                      <span className="text-xs font-bold text-white/80">
                                        {languageState === 'Arabic' ? currentMeta.titleAr : currentMeta.titleEn}
                                      </span>
                                      <span className="text-[0.8125rem] text-white/70 font-mono">
                                        5 {t('أسئلة سريرية', 'questions')}
                                      </span>
                                    </div>

                                    {/* Questions List */}
                                    <div className="space-y-2 max-h-[280px] overflow-y-auto custom-scrollbar pe-1">
                                      {questions.map((q, idx) => (
                                        <div
                                          key={q.id || idx}
                                          className="p-3 rounded-2xl bg-ink-3/70 border border-ink-4 space-y-2"
                                        >
                                          <div className="flex items-start gap-2.5">
                                            <span className="w-5 h-5 rounded-lg bg-pop/10 text-pop text-[0.8125rem] font-black flex items-center justify-center shrink-0 mt-0.5">
                                              {idx + 1}
                                            </span>
                                            <div className="flex-1 min-w-0">
                                              <p className="text-xs font-bold text-white/90 leading-snug">
                                                {languageState === 'Arabic' ? q.text.ar : q.text.en}
                                              </p>
                                              {languageState === 'Arabic' && (
                                                <p className="text-[0.8125rem] text-white/70 truncate">
                                                  {q.text.en}
                                                </p>
                                              )}
                                            </div>
                                          </div>

                                          {/* Online Action: Direct this question to a specific doctor */}
                                          {isOnline && (
                                            <div className="border-t border-white/5 pt-2 flex flex-wrap items-center gap-1.5">
                                              <span className="text-[0.8125rem] font-bold text-white/70">
                                                {t('وجّه السؤال إلى:', 'Ask:')}
                                              </span>
                                              {activePlayers
                                                .filter(p => p.id !== localPlayerId)
                                                .map(targetP => (
                                                  <button
                                                    key={targetP.id}
                                                    type="button"
                                                    onClick={() => submitOnlineGroupInquiryQuestion(targetP.id, q)}
                                                    className="px-2.5 py-1 rounded-xl bg-ink border border-ink-4 hover:border-pop/40 text-[0.8125rem] font-bold text-white/80 hover:text-white flex items-center gap-1.5 active:scale-95 transition-all"
                                                  >
                                                    <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                                                      <AnimalDoctorAvatar avatarId={targetP.avatarId} size={16} />
                                                    </span>
                                                    <span>{targetP.name}</span>
                                                  </button>
                                                ))}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Shared Consultation History in 3+ Players */}
                    {isOnline && onlineRoomState?.inquiry?.history?.length > 0 && (
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => setShowInquiryHistory(!showInquiryHistory)}
                          className="w-full min-h-[48px] px-4 rounded-2xl bg-ink-3/70 border border-ink-4 flex items-center justify-between active:scale-[0.98] transition-transform"
                        >
                          <span className="flex items-center gap-2 font-display font-bold text-white/80 text-xs">
                            <FileText size={15} className="text-gold" />
                            {t(`سجل الاستجوابات بالجلسة (${onlineRoomState.inquiry.history.length})`, `Live Investigation Log (${onlineRoomState.inquiry.history.length})`)}
                          </span>
                          <span className="text-white/70 text-xs">{showInquiryHistory ? '▲' : '▼'}</span>
                        </button>

                        <AnimatePresence>
                          {showInquiryHistory && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-ink-2 border border-ink-4 rounded-2xl p-3 space-y-2 max-h-[220px] overflow-y-auto custom-scrollbar divide-y divide-white/5">
                                {onlineRoomState.inquiry.history.map((item: any, i: number) => {
                                  const ansMeta = INQUIRY_ANSWER_OPTIONS.find(o => o.id === item.answer);
                                  return (
                                    <div key={item.id || i} className="pt-2 first:pt-0 space-y-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[0.8125rem] font-bold text-white/70">
                                          <span className="text-pop">{item.askerName}</span> ← <span className="text-sky-400">{item.targetName}</span>
                                        </span>
                                        <span className={`text-[0.8125rem] font-black px-2 py-0.5 rounded-full border ${ansMeta?.color || 'bg-white/10 text-white'}`}>
                                          {languageState === 'Arabic' ? ansMeta?.labelAr : ansMeta?.labelEn}
                                        </span>
                                      </div>
                                      <p className="text-xs font-bold text-white/85 leading-relaxed">
                                        {languageState === 'Arabic' ? item.questionAr : item.questionEn}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}


                    {/* online: my card */}
                    {isOnline && (() => {
                      const local = activePlayers.find(m => m.id === localPlayerId);
                      if (!local) return null;
                      const word = getWordDetails(local.assignedWordId);
                      return (
                        <div className="panel p-4 space-y-2.5">
                          <Label>{t('كرتك السري','Your secret card')}</Label>
                          {!word ? (
                            <p className="text-coral font-display font-bold text-sm text-center py-2">
                               {t('أنت المنتحل — لا تملك كرت!',"You're the Imposter — no card!")}
                            </p>
                          ) : (
                            <div className="bg-ink/60 border border-ink-4 rounded-2xl p-3.5 space-y-2">
                              <p className="font-display font-bold text-lg text-white">
                                {word.word.English}
                                {word.word.Arabic && (
                                  <span className="text-[0.8125rem] text-white/70 font-bold"> ({word.word.Arabic})</span>
                                )}
                              </p>
                              <div className="border-t border-white/5 pt-2 space-y-1.5">
                                {getCluesForWord(word.id, word, languageState).slice(0, showMoreClues ? 10 : 3).map((cl, i) => (
                                  <div key={i} className="text-[0.8125rem] text-white/60 leading-relaxed">{renderClueText(cl, 'xs', languageState)}</div>
                                ))}
                                {!showMoreClues && (
                                  <button
                                    type="button"
                                    onClick={() => setShowMoreClues(true)}
                                    className="text-pop text-xs font-display font-bold pt-1"
                                  >
                                    {t('معلومات أكتر','More info')}
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  /* ---- local pass-and-play voting ---- */
                  <div className="space-y-4 px-4">
                    {(() => {
                      const remainingVoters = activePlayers.filter(p => !completedVoters.includes(p.id));
                      const numImposters = activePlayers.filter(p => p.role ==='IMPOSTER').length;

                      if (remainingVoters.length > 0 && localVoterId === null) {
                        return (
                          <div className="space-y-3">
                            <div className="panel p-4 text-center space-y-1">
                              <span className="text-3xl block"></span>
                              <h4 className="font-display font-bold text-xl text-white">{t('مين بصوّت دلوقتي؟','Who is voting now?')}</h4>
                              <p className="text-[0.8125rem] text-white/70 font-bold">{completedVoters.length}/{activePlayers.length} {t('صوّتوا','voted')}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5">
                              {remainingVoters.map(p => (
                                <button
                                  key={p.id}
                                  type="button"
                                  onClick={() => { setLocalVoterId(p.id); setShowLocalVoterTargetSelection(false); setVotedSuspectIds([]); }}
                                  className="min-h-[64px] rounded-2xl bg-ink-3 border border-ink-4 font-display font-bold text-white flex items-center justify-center gap-2 active:scale-95 transition-transform"
                                >
                                  <span className="w-9 h-9 rounded-full overflow-hidden bg-ink border border-white/15 shrink-0 flex items-center justify-center"><AnimalDoctorAvatar avatarId={p.avatarId} size={30} /></span>
                                  <span className="truncate max-w-[100px]">{p.name}</span>
                                </button>
                              ))}
                            </div>
                            <button
                              type="button"
                              onClick={() => setIsLocalVotingActive(false)}
                              className="w-full min-h-[48px] text-pop font-bold text-sm"
                            >
                              {t('رجوع للنقاش','Back to discussion')}
                            </button>
                          </div>
                        );
                      }

                      if (localVoterId !== null) {
                        const localVoter = activePlayers.find(p => p.id === localVoterId);
                        if (!localVoter) return null;

                        if (!showLocalVoterTargetSelection) {
                          return (
                            <div className="panel p-7 rounded-[2rem] text-center space-y-5 border-2 border-pop/30">
                              <span className="text-5xl block animate-pulse"></span>
                              <div className="space-y-1">
                                <p className="text-xs font-black text-white/70 uppercase tracking-widest">{t('مرر الموبايل لـ','Pass the phone to')}</p>
                                <p className="font-display font-bold text-3xl text-white">{localVoter.name}</p>
                              </div>
                              <BigBtn onClick={() => setShowLocalVoterTargetSelection(true)}>
                                {t('أنا','I am')} {localVoter.name} — {t('صوّت','vote')}
                              </BigBtn>
                            </div>
                          );
                        }

                        const candidates = activePlayers.filter(p => p.id !== localVoterId);
                        const toggleSuspect = (id: string) => {
                          if (votedSuspectIds.includes(id)) {
                            setVotedSuspectIds(votedSuspectIds.filter(x => x !== id));
                          } else {
                            if (votedSuspectIds.length < numImposters) {
                              setVotedSuspectIds([...votedSuspectIds, id]);
                            } else if (numImposters === 1) {
                              setVotedSuspectIds([id]);
                            }
                          }
                        };
                        const isVoteFormValid = votedSuspectIds.length === numImposters;

                        return (
                          <div className="space-y-4">
                            <div className="panel p-4 text-center space-y-1">
                              <span className="text-[0.8125rem] font-black text-coral uppercase tracking-widest">{t('تصويت سري','Secret ballot')}</span>
                              <p className="font-display font-bold text-2xl text-white">{localVoter.name}</p>
                              <p className="text-[0.8125rem] text-white/70 font-bold">
                                {t('اختر','Pick')} {numImposters} {t('متشك فيهم','suspect(s)')} · {votedSuspectIds.length}/{numImposters}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5">
                              {candidates.map(p => {
                                const isSelected = votedSuspectIds.includes(p.id);
                                return (
                                  <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => toggleSuspect(p.id)}
                                    className={`min-h-[64px] rounded-2xl border font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform ${
                                      isSelected
                                        ?'bg-coral/15 border-coral text-coral'
                                        :'bg-ink-3 border-ink-4 text-white/70'
                                    }`}
                                  >
                                    <span className="w-9 h-9 rounded-full overflow-hidden bg-ink border border-white/15 shrink-0 flex items-center justify-center"><AnimalDoctorAvatar avatarId={p.avatarId} size={30} /></span>
                                    <span className="truncate max-w-[100px]">{p.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                            <BigBtn
                              variant="coral"
                              disabled={!isVoteFormValid}
                              onClick={() => {
                                const updatedVotes = { ...localVotingVotes, [localVoterId]: votedSuspectIds };
                                setLocalVotingVotes(updatedVotes);
                                setCompletedVoters([...completedVoters, localVoterId]);
                                setLocalVoterId(null);
                                setShowLocalVoterTargetSelection(false);
                                setVotedSuspectIds([]);
                              }}
                            >
                              {t('أكد صوتي','Confirm vote')}
                            </BigBtn>
                          </div>
                        );
                      }

                      /* all votes in */
                      const actualImposters = activePlayers.filter(p => p.role ==='IMPOSTER');
                      return (
                        <div className="space-y-4">
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="panel p-6 rounded-[2rem] text-center space-y-4 border-2 border-coral/50"
                          >
                            <span className="w-16 h-16 rounded-full bg-coral/15 border border-coral/30 flex items-center justify-center mx-auto text-coral">
                              <ShieldAlert size={32} />
                            </span>
                            <h3 className="font-display font-bold text-2xl text-white">{t('المنتحل الحقيقي هو...','The real Imposter is...')}</h3>
                            <div className="space-y-2">
                              {actualImposters.map(imp => (
                                <div key={imp.id} className="min-h-[56px] px-4 rounded-2xl bg-coral/10 border border-coral/40 flex items-center justify-center gap-2.5">
                                  <span className="w-9 h-9 rounded-full bg-coral/10 border border-coral/25 flex items-center justify-center text-coral shrink-0">
                                    <UserX size={18} />
                                  </span>
                                  <span className="font-display font-bold text-2xl text-coral">{imp.name}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                          <BigBtn onClick={() => {
                            const tallies: Record<string, number> = {};
                            Object.values(localVotingVotes).forEach((val) => {
                              ((val || []) as string[]).forEach(vid => { tallies[vid] = (tallies[vid] || 0) + 1; });
                            });
                            let maxVotes = 0;
                            let votedId ='';
                            Object.keys(tallies).forEach(id => {
                              if (tallies[id] > maxVotes) { maxVotes = tallies[id]; votedId = id; }
                            });
                            if (!votedId && actualImposters.length > 0) votedId = actualImposters[0].id;
                            setVotedPlayerId(votedId);
                            setOfflineVotes(
                              Object.entries(localVotingVotes).reduce((acc, [k, v]) => {
                                acc[k] = (v as string[])[0] ||'';
                                return acc;
                              }, {} as Record<string, string>)
                            );
                            setIsLocalVotingActive(false);
                            setPhase('IMPOSTER_GUESS');
                          }}>
                            {t('فرصة المنتحل الأخيرة','Imposter final guess')}
                          </BigBtn>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </Screen>
              {!isLocalVotingActive && (
                <div className="shrink-0 px-4 pt-2 pb-safe">
                  {isOnline ? (
                    onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                      <BigBtn
                        onClick={async () => {
                          const roomRef = doc(db,'rooms', roomId);
                          const targetStatus = onlineRoomState.players.length === 2 ?'TWO_PLAYERS_GUESS' :'VOTING';
                          await updateDoc(roomRef, { status: targetStatus });
                        }}
                      >
                        {onlineRoomState && onlineRoomState.players.length === 2
                          ? t('الانتقال للتخمين ➔','Proceed to guess ➔')
                          : t('بدء التصويت ➔','Start voting ➔')}
                      </BigBtn>
                    ) : (
                      <div className="panel py-4 text-center">
                        <p className="font-display font-bold text-white/60 animate-pulse">{t('بانتظار المضيف...','Waiting for host...')}</p>
                      </div>
                    )
                  ) : (
                    <BigBtn variant="coral" onClick={() => {
                      setIsLocalVotingActive(true);
                      setLocalVoterId(null);
                      setCompletedVoters([]);
                      setLocalVotingVotes({});
                      setShowLocalVoterTargetSelection(false);
                      setVotedSuspectIds([]);
                    }}>
                      {t('بدء التصويت ➔','Start voting ➔')}
                    </BigBtn>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ================= ONLINE VOTING ================= */}
          {phase ==='VOTING_PHASE' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen title={t('صوّتوا!','Vote!')}>
                <div className="px-4 space-y-4">
                  {isOnline ? (
                    onlineRoomState && onlineRoomState.votes[localPlayerId] ? (
                      <div role="status" className="panel p-8 text-center space-y-3">
                        <p className="font-display font-bold text-xl text-white">{t('صوتك اتسجل!','Vote registered!')}</p>
                        <p className="text-sm font-bold text-white/70">
                          {t(`بانتظار ${onlineRoomState.players.length - Object.keys(onlineRoomState.votes).length} أصوات`, `Waiting for ${onlineRoomState.players.length - Object.keys(onlineRoomState.votes).length} more votes`)}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-center text-[0.8125rem] font-bold text-white/70">{t('مين المنتحل في رأيك؟','Who is the Imposter?')}</p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {activePlayers.map(p => (
                            <button
                              key={p.id}
                              type="button"
                              disabled={p.id === localPlayerId || onlineVoteSaving}
                              onClick={() => { sfx.tick(); handleOnlineVote(p.id); }}
                              className={`min-h-[64px] rounded-2xl border font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform ${
                                p.id === localPlayerId
                                  ?'opacity-25 border-ink-4 text-white/70'
                                  :'bg-ink-3 border-ink-4 text-white hover:border-coral/50'
                              }`}
                            >
                              <span className="w-9 h-9 rounded-full overflow-hidden bg-ink border border-white/15 shrink-0 flex items-center justify-center"><AnimalDoctorAvatar avatarId={p.avatarId} size={30} /></span>
                              <span className="min-w-0 break-words">{p.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="space-y-3">
                      <div className="panel p-4 text-center">
                        <p className="text-xs font-black text-white/70 uppercase tracking-widest">{t('الدور على','Now voting')}</p>
                        <p className="font-display font-bold text-2xl text-white">{currentVoter?.name}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {activePlayers.map(p => (
                          <button
                            key={p.id}
                            type="button"
                            disabled={p.id === currentVoter?.id}
                            onClick={() => { sfx.tick(); submitOfflineVote(p.id); }}
                            className={`min-h-[64px] rounded-2xl border font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform ${
                              p.id === currentVoter?.id
                                ?'opacity-25 border-ink-4 text-white/70'
                                :'bg-ink-3 border-ink-4 text-white'
                            }`}
                          >
                            <span className="w-9 h-9 rounded-full overflow-hidden bg-ink border border-white/15 shrink-0 flex items-center justify-center"><AnimalDoctorAvatar avatarId={p.avatarId} size={30} /></span>
                            <span className="truncate max-w-[100px]">{p.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Screen>
            </div>
          )}

          {/* ================= REVEAL IMPOSTER ================= */}
          {phase ==='REVEAL_IMPOSTER' && (() => {
            const votedId = isOnline ? onlineRoomState?.votedOutPlayerId : votedPlayerId;
            const votedPlayer = activePlayers.find(m => m.id === votedId);
            if (!votedPlayer) {
              return (
                <div className="flex-1 min-h-0 flex flex-col justify-center items-center p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto">
                    <Users size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {t('تعادل في الأصوات أو لم يُحدد مشتبه به', 'Vote Tie / No Suspect Identified')}
                  </h3>
                  <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                    {t('لم يحصل أي لاعب على أغلبية الأصوات، نجا المنتحل من الكشف.', 'No majority consensus reached; the Imposter was not identified.')}
                  </p>
                  <div className="w-full max-w-xs pt-4">
                    <BigBtn onClick={() => setPhase('ROUND_RESULT')}>
                      {t('عرض النتائج ➔', 'View Results ➔')}
                    </BigBtn>
                  </div>
                </div>
              );
            }
            const isImposterCorrect = votedPlayer.role ==='IMPOSTER';

            return (
              <div className="flex-1 min-h-0 flex flex-col">
                <Screen title={t('نتيجة التصويت','Vote Result')}>
                  <div className="px-4 space-y-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="panel p-6 rounded-[2rem] text-center space-y-4"
                    >
                      <p className="text-xs font-black text-white/70 uppercase tracking-widest">{t('المشتبه به الأول','Most suspected')}</p>
                      <p className="font-display font-bold text-4xl text-white">{votedPlayer.name}</p>
                      <motion.div
                        initial={{ scale: 0.4 }}
                        animate={{ scale: [0.4, 1.15, 1] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 ${isImposterCorrect
                          ? 'bg-mint/15 text-mint border-mint/40'
                          : 'bg-coral/15 text-coral border-coral/40'}`}
                      >
                        {isImposterCorrect ? <CheckCircle2 size={44} /> : <UserX size={44} />}
                      </motion.div>
                      <h4 className={`font-display font-bold text-3xl ${isImposterCorrect ?'text-mint' :'text-coral'}`}>
                        {isImposterCorrect ? t('تم كشف المنتحل!','Imposter Exposed!') : t('طبيب بريء','Innocent Doctor')}
                      </h4>
                      <p className="text-[0.8125rem] font-bold text-white/70 leading-relaxed">
                        {isImposterCorrect
                          ? t('أمامه فرصة أخيرة لتخمين الكلمة.','One final guess to name the secret word.')
                          : t('المنتحل الحقيقي ما زال مختبئاً.','The real Imposter is still hidden.')}
                      </p>
                    </motion.div>
                  </div>
                </Screen>
                <div className="shrink-0 px-4 pt-2 pb-safe">
                  {isOnline ? (
                    onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                      <BigBtn
                        onClick={async () => {
                          const roomRef = doc(db,'rooms', roomId);
                          await updateDoc(roomRef, { status:'GUESSING' });
                        }}
                      >
                        {t('فرصة التخمين ➔','Guessing phase ➔')}
                      </BigBtn>
                    ) : (
                      <div className="panel py-4 text-center">
                        <p className="font-display font-bold text-white/60 animate-pulse">{t('بانتظار المضيف...','Waiting for host...')}</p>
                      </div>
                    )
                  ) : (
                    <BigBtn onClick={() => setPhase('IMPOSTER_GUESS')}>
                      {t('فرصة التخمين ➔','Guessing phase ➔')}
                    </BigBtn>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= IMPOSTER GUESS ================= */}
          {phase ==='IMPOSTER_GUESS' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen title={t('فرصة أخيرة','Last chance')}>
                <div className="px-4 space-y-4">
                  <div className="panel p-4 flex items-center gap-3">
                    <span className="w-11 h-11 rounded-2xl bg-coral/15 border border-coral/30 flex items-center justify-center shrink-0">
                      <UserX size={22} className="text-coral" />
                    </span>
                    <p className="text-sm font-bold text-white/70 leading-relaxed">
                      {t('لو خمّن الكلمة السرية صح.. يسرق الفوز بـ 50 نقطة!','Guess the secret word & steal 50 pts!')}
                    </p>
                  </div>

                  {isOnline ? (() => {
                    const local = activePlayers.find(m => m.id === localPlayerId);
                    if (local?.role !=='IMPOSTER') {
                      return (
                        <div className="panel p-8 text-center">
                          <p className="font-display font-bold text-white/60 animate-pulse">
                            {t('المنتحل بيخمّن دلوقتي...','The Imposter is guessing...')}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div className="space-y-2">
                        <div className="relative">
                          <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-white/70" size={18} />
                          <input
                            type="text"
                            aria-label={t('ابحث عن التشخيص', 'Search diagnoses')} placeholder={t('ابحث عن الكلمة...','Search the term...')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full min-h-[52px] bg-ink-3 border border-ink-4 focus:border-coral/60 rounded-2xl ps-10 pe-4 text-base font-bold text-white placeholder-white/60 outline-none"
                          />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-ink-4 divide-y divide-white/5 bg-ink-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                          {filteredSearchWords.map((word) => (
                            <button
                              key={word.id}
                              type="button"
                              onClick={() => submitOnlineImposterGuess(word.id)}
                              className="w-full min-h-[52px] px-4 flex items-center justify-between gap-3 text-start active:bg-coral/10"
                            >
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="font-display font-bold text-white text-base break-words">{word.word.English}</span>
                                {word.word.Arabic && <span className="text-[0.8125rem] text-white/70 truncate">{word.word.Arabic}</span>}
                              </div>
                              <span className="text-[0.8125rem] font-black text-coral bg-coral/10 border border-coral/20 px-2 py-0.5 rounded-full shrink-0">{word.type}</span>
                            </button>
                          ))}
                        </div>
                        <div className="pt-1.5">
                          <button
                            type="button"
                            onClick={() => submitOnlineImposterGuess('')}
                            className="w-full min-h-[48px] rounded-2xl bg-ink-3 border border-ink-4 text-white/70 hover:text-white/80 font-display font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                          >
                            {t('تخطي (لا أعرف الكلمة) ➔', "Skip (Don't know the word) ➔")}
                          </button>
                        </div>
                      </div>
                    );
                  })() : (
                    <div className="space-y-2">
                      <p className="text-center text-xs font-bold text-white/70">{t('حاول يخمّن في سرية','Guess in private')}</p>
                      <div className="relative">
                        <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-white/70" size={18} />
                        <input
                          type="text"
                          aria-label={t('ابحث عن التشخيص', 'Search diagnoses')} placeholder={t('ابحث عن الكلمة...','Search the term...')}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full min-h-[52px] bg-ink-3 border border-ink-4 focus:border-coral/60 rounded-2xl ps-10 pe-4 text-base font-bold text-white placeholder-white/60 outline-none"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-ink-4 divide-y divide-white/5 bg-ink-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                        {filteredSearchWords.map((word) => (
                          <button
                            key={word.id}
                            type="button"
                            onClick={() => submitOfflineImposterGuess(word.id)}
                            className="w-full min-h-[52px] px-4 flex items-center justify-between gap-3 text-start active:bg-coral/10"
                          >
                            <div className="flex flex-col min-w-0 flex-1">
                              <span className="font-display font-bold text-white text-base break-words">{word.word.English}</span>
                              {word.word.Arabic && <span className="text-[0.8125rem] text-white/70 truncate">{word.word.Arabic}</span>}
                            </div>
                            <span className="text-[0.8125rem] font-black text-coral bg-coral/10 border border-coral/20 px-2 py-0.5 rounded-full shrink-0">{word.type}</span>
                          </button>
                        ))}
                      </div>
                      <div className="pt-1.5">
                        <button
                          type="button"
                          onClick={() => submitOfflineImposterGuess('')}
                          className="w-full min-h-[48px] rounded-2xl bg-ink-3 border border-ink-4 text-white/70 hover:text-white/80 font-display font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                        >
                          {t('تخطي (لا أعرف الكلمة) ➔', "Skip (Don't know the word) ➔")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Screen>
            </div>
          )}

          {/* ================= 2P CLINICAL DUEL & PROGRESSIVE INQUIRY ================= */}
          {phase === 'TWO_PLAYERS_DISCUSSION_GUESS' && (() => {
            if (!isOnline && offlineHandoff) {
              return <div className="h-full flex flex-col px-4 py-6 gap-6">
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                  <Users size={40} className="text-gold" />
                  <p className="text-base text-white/80">{t('مرّر الهاتف إلى', 'Pass the phone to')}</p>
                  <h2 className="font-display font-bold text-3xl">{offlineHandoff.name}</h2>
                </div>
                <BigBtn onClick={() => setOfflineHandoff(null)}>{t(`أنا ${offlineHandoff.name} · متابعة`, `I am ${offlineHandoff.name} · Continue`)}</BigBtn>
              </div>;
            }
            if (!isOnline && offlineFinalGuessNextIdx != null) {
              const nextName = activePlayers[offlineFinalGuessNextIdx]?.name || 'Player';
              return (
                <div className="flex-1 min-h-0 flex flex-col">
                  <div className="w-full max-w-sm mx-auto px-4 pt-10 space-y-4 text-center">
                    <p className="text-[0.8125rem] text-white/70">{t('مرّر الهاتف', 'Pass the phone')}</p>
                    <div className="w-full max-w-sm mx-auto px-4 pt-10 space-y-4 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-3">
                        <Users className="w-6 h-6 text-white" />
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white text-center break-words">{nextName}</h2>
                    <BigBtn className="w-full" onClick={() => {
                      setOfflineInquiryTurnIdx(offlineFinalGuessNextIdx);
                      setOfflineFinalGuessNextIdx(null);
                      setOfflineInquiryActiveQ(null);
                      setShowFinalGuessBox(true);
                      setSearchQuery('');
                      setShowMoreClues(false);
                    }}>{t('أنا', 'I am')} {nextName}</BigBtn>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[0.8125rem] text-white/70">
                      <p>{t('اضغط للكشف عن دورك', 'Tap to reveal your turn')}</p>
                    </div>
                  </div>
                </div>
              );
            }
            const currentStage = (isOnline
              ? (onlineRoomState?.inquiry?.stage || 1)
              : offlineInquiryStage) as 1 | 2 | 3 | 4 | 5;

            const activeMeta = STAGE_META[currentStage - 1] || STAGE_META[0];
            const StageIcon = activeMeta.icon;

            const local = isOnline
              ? activePlayers.find(m => m.id === localPlayerId)
              : activePlayers[offlineInquiryTurnIdx];
            const other = isOnline
              ? activePlayers.find(m => m.id !== localPlayerId)
              : activePlayers[offlineInquiryTurnIdx === 0 ? 1 : 0];

            const onlineInq = onlineRoomState?.inquiry;

            // Online inquiry flags
            const isMyTurnToAsk = Boolean(
              isOnline && onlineInq && onlineInq.turnPlayerId === localPlayerId && !onlineInq.activeQuestion
            );
            const isMyTurnToAnswer = Boolean(
              isOnline && onlineInq && onlineInq.targetPlayerId === localPlayerId && onlineInq.activeQuestion
            );
            const isWaitingForAnswer = Boolean(
              isOnline && onlineInq && onlineInq.turnPlayerId === localPlayerId && onlineInq.activeQuestion
            );
            const isWaitingForQuestion = Boolean(
              isOnline && onlineInq && onlineInq.turnPlayerId !== localPlayerId && !onlineInq.activeQuestion
            );

            // Target branch resolution
            const targetBranch: ClinicalBranch = isOnline
              ? (onlineInq?.resolvedBranches?.[other?.id || ''] || 'Disease')
              : (offlineInquiryBranches[other?.id || ''] || 'Disease');

            const otherWord = other ? getWordDetails(other.assignedWordId) : null;
            const targetConfirmedSystem = isOnline
              ? (onlineInq?.confirmedSystems?.[other?.id || ''] || getTrueCardSystem(otherWord) || undefined)
              : (offlineInquirySystems[other?.id || ''] || getTrueCardSystem(otherWord) || undefined);

            const currentStageQuestions = getAdaptiveQuestionsForStage(currentStage, targetBranch, targetConfirmedSystem);

            const inquiryHistoryList = isOnline
              ? (onlineInq?.history || [])
              : offlineInquiryHistory;

            const hasLocalGuessed = isOnline
              ? Boolean(onlineRoomState?.twoPlayersGuessMatched?.[localPlayerId])
              : Boolean(local && offlineGuesses[local.id]);

            return (
              <div className="flex-1 min-h-0 flex flex-col">
                <Screen title={t('المبارزة السريرية', 'Clinical duel')} footer={!hasLocalGuessed && !showFinalGuessBox && (isOnline ? !isMyTurnToAnswer : !offlineInquiryActiveQ) ?
                  <div className="px-4"><BigBtn variant="dark" onClick={() => { setSearchQuery(''); setShowFinalGuessBox(true); }}>
                    <Target size={20} />{t('خَمّن كرت الخصم', 'Guess their card')}
                  </BigBtn></div> : undefined}>
                  <div className="px-4 space-y-3.5 pb-8">
                    
                    <div className="flex items-center gap-3 rounded-2xl border border-ink-4 bg-ink-2 px-3 py-2">
                      <StageIcon size={22} className="text-pop shrink-0" />
                      <h3 className="font-display font-bold text-base flex-1 min-w-0">{languageState === 'Arabic' ? activeMeta.titleAr : activeMeta.titleEn}</h3>
                      <span className="font-bold text-pop" aria-label={t('المرحلة', 'Stage')}>{currentStage}/5</span>
                    </div>

                    {local && (() => {
                      const viewer = !isOnline && offlineInquiryActiveQ ? other : local;
                      const word = viewer && getWordDetails(viewer.assignedWordId);
                      return word ? <div key={`${viewer.id}-${currentStage}`}><Disclosure title={t('راجع كرتك السري', 'Review your secret card')}>
                        <p className="font-display font-bold text-xl"><bdi>{word.word.English}</bdi></p>
                        {word.word.Arabic && <p className="text-base text-mint">{word.word.Arabic}</p>}
                        {getCluesForWord(word.id, word, languageState).map((clue, index) => <div key={index} className="text-base leading-relaxed text-white/85">{renderClueText(clue, 'sm', languageState)}</div>)}
                      </Disclosure></div> : null;
                    })()}

                    {/* 3. Main Cross-Examination Arena */}
                    <div className="space-y-3">
                      {isOnline ? (
                        <>
                          {/* Online State: YOU MUST ANSWER */}
                          {isMyTurnToAnswer && onlineInq?.activeQuestion && (() => {
                            const localWord = local ? getWordDetails(local.assignedWordId) : null;
                            const localTruth = evaluateQuestionTruth(onlineInq.activeQuestion.id, localWord);

                            return (
                              <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="panel p-5 rounded-3xl border-2 border-pop/60 bg-pop/10 space-y-4 shadow-[0_0_30px_rgba(255,107,107,0.2)]"
                              >
                                <div className="flex items-center gap-2 text-pop">
                                  <span className="w-9 h-9 rounded-xl bg-pop/20 border border-pop/40 flex items-center justify-center shrink-0 animate-bounce">
                                    <AlertCircle size={20} />
                                  </span>
                                  <div>
                                    <p className="text-[0.8125rem] font-black uppercase tracking-wider text-pop">
                                      {t('سؤال سريري موجه إليك!', 'Clinical Question For You!')}
                                    </p>
                                    <p className="font-display font-bold text-sm text-white">
                                      {t(`${other?.name || 'زميلك'} يسألك:`, `${other?.name || 'Opponent'} asks you:`)}
                                    </p>
                                  </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-ink-2/90 border border-ink-4 space-y-1">
                                  <p className="font-display font-bold text-base text-white leading-relaxed">
                                    {onlineInq.activeQuestion.text[languageState === 'Arabic' ? 'ar' : 'en']}
                                  </p>
                                  {languageState === 'Arabic' && (
                                    <p className="text-xs text-white/70 font-medium">
                                      {onlineInq.activeQuestion.text.en}
                                    </p>
                                  )}
                                </div>

                                <div className="space-y-2.5">
                                  <p className="text-[0.8125rem] font-bold text-white/60 text-center">
                                    {t('اختر إجابتك:', 'Pick your answer:')}
                                  </p>
                                  <div className="grid grid-cols-1 gap-2">
                                    {INQUIRY_ANSWER_OPTIONS.map((opt) => {
                                      const isMedicallyTrue = localTruth.trueAnswer === opt.id;
                                      return (
                                        <button
                                          key={opt.id}
                                          type="button"
                                          onClick={() => submitOnlineInquiryAnswer(opt.id)}
                                          className={`w-full min-h-[54px] px-4 rounded-2xl border-2 font-display font-bold text-sm flex items-center justify-between gap-2 active:scale-98 transition-all ${opt.color} ${
                                            isMedicallyTrue ? 'ring-2 ring-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]' : ''
                                          }`}
                                        >
                                          <span>{languageState === 'Arabic' ? opt.labelAr : opt.labelEn}</span>
                                          {isMedicallyTrue && (
                                            <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[0.8125rem] font-black flex items-center gap-1">
                                              <Check size={12} strokeWidth={3} />
                                              <span>{t('مطابق لبطاقتك', 'Matches your card')}</span>
                                            </span>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>

                                  {/* Clinical Advisor Whisper for Respondent */}
                                  {localTruth && localTruth.clinicalReasonAr && (
                                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-start">
                                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                                        <Info size={14} />
                                        <span>{t('توضيح سريري (خاص بك):', 'Clinical Note (Private):')}</span>
                                      </div>
                                      <p className="text-[0.8125rem] text-white/85 leading-relaxed font-medium">
                                        {languageState === 'Arabic' ? localTruth.clinicalReasonAr : localTruth.clinicalReasonEn}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })()}

                          {/* Online State: WAITING FOR OPPONENT TO ANSWER */}
                          {isWaitingForAnswer && onlineInq?.activeQuestion && (
                            <div className="panel p-5 rounded-3xl border border-sky-500/30 bg-sky-500/5 space-y-3 text-center">
                              <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mx-auto text-sky-400 animate-pulse">
                                <Timer size={24} />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-display font-bold text-base text-white">
                                  {t(`في انتظار إجابة ${other?.name || 'الخصم'}...`, `Waiting for ${other?.name || 'Opponent'} to answer...`)}
                                </h4>
                                <p className="text-xs text-white/70">
                                  {t('يفحص كرتَه السريري لتأكيد الإجابة', 'Reviewing their card to verify the diagnosis')}
                                </p>
                              </div>
                              <div className="p-3 rounded-2xl bg-ink-2/80 border border-ink-4 text-start">
                                <span className="text-[0.8125rem] font-bold text-sky-400 block mb-1">
                                  {t('سؤالك المطروح:', 'Your question:')}
                                </span>
                                <p className="text-xs font-bold text-white/80">
                                  {onlineInq.activeQuestion.text[languageState === 'Arabic' ? 'ar' : 'en']}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Online State: YOUR TURN TO ASK */}
                          {isMyTurnToAsk && (
                            <div className="space-y-3">
                              <div className="panel p-4 rounded-3xl border border-pop/30 bg-ink-2 space-y-1">
                                <div className="flex items-center gap-2 text-pop">
                                  <span className="w-2.5 h-2.5 rounded-full bg-pop animate-ping" />
                                  <h4 className="font-display font-bold text-sm text-white">
                                    {t(`دورك يا دكتور! وجّه سؤالاً لـ ${other?.name || 'الخصم'}:`, `Your turn! Question ${other?.name || 'Opponent'}:`)}
                                  </h4>
                                </div>
                                <p className="text-xs text-white/70">
                                  {t('اختر سؤالاً واحداً من أسئلة هذه المرحلة لحصر كرت خصمك:', 'Pick one question from this stage to narrow down their card:')}
                                </p>
                              </div>

                              <div className="space-y-2">
                                {currentStageQuestions.map((q, idx) => (
                                  <button
                                    key={q.id}
                                    type="button"
                                    onClick={() => submitOnlineInquiryQuestion(q)}
                                    className="w-full min-h-[58px] p-3.5 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 hover:border-pop/40 text-start flex items-start gap-3 active:scale-[0.98] transition-all group"
                                  >
                                    <span className="w-6 h-6 rounded-xl bg-pop/10 border border-pop/25 text-pop font-mono text-xs font-black flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-pop group-hover:text-white transition-colors">
                                      {idx + 1}
                                    </span>
                                    <div className="flex-1 min-w-0 space-y-0.5">
                                      <p className="text-base font-bold text-white/95 leading-relaxed group-hover:text-white">
                                        {languageState === 'Arabic' ? q.text.ar : q.text.en}
                                      </p>
                                    </div>
                                    <ChevronRight size={16} className="text-white/70 group-hover:text-pop shrink-0 mt-1" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Online State: OPPONENT CHOOSING QUESTION */}
                          {isWaitingForQuestion && (
                            <div className="panel p-5 rounded-3xl border border-white/10 text-center space-y-3">
                              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/70 animate-pulse">
                                <HelpCircle size={20} />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-display font-bold text-sm text-white">
                                  {t(`دور ${other?.name || 'الخصم'} لاختيار السؤال...`, `${other?.name || 'Opponent'} is picking a question...`)}
                                </h4>
                                <p className="text-xs text-white/70 animate-pulse">
                                  {t('يرجى الانتظار، سيظهر السؤال على شاشتك فور اختياره', 'Please wait, the question will appear on your screen once chosen')}
                                </p>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        /* OFFLINE PASS & PLAY INQUIRY */
                        <>
                          {offlineInquiryActiveQ ? (() => {
                            const p2Word = other ? getWordDetails(other.assignedWordId) : null;
                            const offlineTruth = evaluateQuestionTruth(offlineInquiryActiveQ.id, p2Word);

                            return (
                              <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="panel p-5 rounded-3xl border-2 border-pop/60 bg-pop/10 space-y-4 shadow-[0_0_30px_rgba(255,107,107,0.2)]"
                              >
                                <div className="flex items-center gap-2 text-pop">
                                  <span className="w-9 h-9 rounded-xl bg-pop/20 border border-pop/40 flex items-center justify-center shrink-0">
                                    <AlertCircle size={20} />
                                  </span>
                                  <div>
                                    <p className="text-[0.8125rem] font-black uppercase tracking-wider text-pop">
                                      {t('مرر الموبايل لـ:', 'Pass Phone To:')}
                                    </p>
                                    <p className="font-display font-bold text-sm text-white">
                                      {other?.name} {t('للإجابة عن كرتها/كرته', 'to answer')}
                                    </p>
                                  </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-ink-2/90 border border-ink-4 space-y-1">
                                  <p className="font-display font-bold text-base text-white leading-relaxed">
                                    {offlineInquiryActiveQ.text[languageState === 'Arabic' ? 'ar' : 'en']}
                                  </p>
                                  {languageState === 'Arabic' && (
                                    <p className="text-xs text-white/70 font-medium">
                                      {offlineInquiryActiveQ.text.en}
                                    </p>
                                  )}
                                </div>

                                <div className="space-y-2.5">
                                  <p className="text-[0.8125rem] font-bold text-white/60 text-center">
                                    {t('اختر الإجابة فوراً دون كتابة:', 'Choose answer instantly:')}
                                  </p>
                                  <div className="grid grid-cols-1 gap-2">
                                    {INQUIRY_ANSWER_OPTIONS.map((opt) => {
                                      const isMedicallyTrue = offlineTruth.trueAnswer === opt.id;
                                      return (
                                        <button
                                          key={opt.id}
                                          type="button"
                                          onClick={() => submitOfflineInquiryAnswer(opt.id)}
                                          className={`w-full min-h-[54px] px-4 rounded-2xl border-2 font-display font-bold text-sm flex items-center justify-between gap-2 active:scale-98 transition-all ${opt.color} ${
                                            isMedicallyTrue ? 'ring-2 ring-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]' : ''
                                          }`}
                                        >
                                          <span>{languageState === 'Arabic' ? opt.labelAr : opt.labelEn}</span>
                                          {isMedicallyTrue && (
                                            <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[0.8125rem] font-black flex items-center gap-1">
                                              <span>⭐</span>
                                              <span>{t('الحقيقة السريرية لكرتك', 'True for your card')}</span>
                                            </span>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>

                                  {/* Clinical Advisor Whisper for Respondent */}
                                  {offlineTruth && offlineTruth.clinicalReasonAr && (
                                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-start">
                                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                                        <Sparkles size={14} />
                                        <span>{t('همسة المستشار السريري (مرئية لك وحدك):', 'Clinical Advisor Whisper (Only you see this):')}</span>
                                      </div>
                                      <p className="text-[0.8125rem] text-white/85 leading-relaxed font-medium">
                                        {languageState === 'Arabic' ? offlineTruth.clinicalReasonAr : offlineTruth.clinicalReasonEn}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })() : (
                            <div className="space-y-3">
                              <div className="panel p-4 rounded-3xl border border-pop/30 bg-ink-2 space-y-1">
                                <div className="flex items-center gap-2 text-pop">
                                  <span className="w-2.5 h-2.5 rounded-full bg-pop animate-ping" />
                                  <h4 className="font-display font-bold text-sm text-white">
                                    {t(`دور ${local?.name}: وجّه سؤالاً لـ ${other?.name}`, `${local?.name}'s turn: Ask ${other?.name}`)}
                                  </h4>
                                </div>
                                <p className="text-xs text-white/70">
                                  {t('اختر سؤالاً من الأسئلة الطبية التالية:', 'Pick one question to ask:')}
                                </p>
                              </div>

                              <div className="space-y-2">
                                {currentStageQuestions.map((q, idx) => (
                                  <button
                                    key={q.id}
                                    type="button"
                                    onClick={() => submitOfflineInquiryQuestion(q)}
                                    className="w-full min-h-[58px] p-3.5 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 hover:border-pop/40 text-start flex items-start gap-3 active:scale-[0.98] transition-all group"
                                  >
                                    <span className="w-6 h-6 rounded-xl bg-pop/10 border border-pop/25 text-pop font-mono text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <div className="flex-1 min-w-0 space-y-0.5">
                                      <p className="text-base font-bold text-white/95 leading-relaxed group-hover:text-white">
                                        {languageState === 'Arabic' ? q.text.ar : q.text.en}
                                      </p>
                                    </div>
                                    <ChevronRight size={16} className="text-white/70 group-hover:text-pop shrink-0 mt-1" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* 4. Investigation History Record (سجل الاستجواب السريري) */}
                    {inquiryHistoryList.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setShowInquiryHistory(!showInquiryHistory)}
                          className="w-full min-h-[48px] px-4 rounded-2xl bg-ink-3/70 border border-ink-4 flex items-center justify-between active:scale-[0.98] transition-transform"
                        >
                          <span className="flex items-center gap-2 font-display font-bold text-white/80 text-xs">
                            <FileText size={15} className="text-gold" />
                            {t(`سجل الملاحظات والاستجوابات (${inquiryHistoryList.length})`, `Investigation Notes (${inquiryHistoryList.length})`)}
                          </span>
                          <span className="text-white/70 text-xs">{showInquiryHistory ? '▲' : '▼'}</span>
                        </button>

                        <AnimatePresence>
                          {showInquiryHistory && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-ink-2 border border-ink-4 rounded-2xl p-3 space-y-2 max-h-[260px] overflow-y-auto custom-scrollbar divide-y divide-white/5">
                                {inquiryHistoryList.map((item, i) => {
                                  const ansMeta = INQUIRY_ANSWER_OPTIONS.find(o => o.id === item.answer);
                                  return (
                                    <div key={item.id || i} className="pt-2 first:pt-0 space-y-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[0.8125rem] font-bold text-white/70">
                                          {t(`المرحلة ${item.stage}`, `Stage ${item.stage}`)} · <span className="text-pop">{item.askerName}</span> ← <span className="text-sky-400">{item.targetName}</span>
                                        </span>
                                        <span className={`text-[0.8125rem] font-black px-2 py-0.5 rounded-full border ${ansMeta?.color || 'bg-white/10 text-white'}`}>
                                          {languageState === 'Arabic' ? ansMeta?.labelAr : ansMeta?.labelEn}
                                        </span>
                                      </div>
                                      <p className="text-xs font-bold text-white/85 leading-relaxed">
                                        {languageState === 'Arabic' ? item.questionAr : item.questionEn}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* 5. Final Diagnosis Guessing Section */}
                    <div className="pt-2 space-y-3">
                      {hasLocalGuessed ? (
                        isOnline ? (
                          <div className="panel p-4 rounded-2xl bg-mint/10 border border-mint/30 flex items-center justify-center gap-2.5 text-mint font-display font-bold text-sm animate-pulse text-center">
                            <CheckCircle2 size={20} />
                            {t('تم تسجيل تشخيصك بنجاح! في انتظار تشخيص خصمك...', 'Your diagnosis is locked in! Waiting for opponent...')}
                          </div>
                        ) : (local && other && !offlineGuesses[other.id]) ? (
                          <div className="panel p-4 rounded-2xl bg-ink-2 border border-white/10 space-y-2.5">
                            <p className="text-[0.8125rem] font-bold text-white/70 text-center">
                              {t('تم قفل تشخيصك. مرّر الدور لخصمك ليقوم بتشخيصك.', 'Your diagnosis is locked in. Pass the turn so your opponent can diagnose you.')}
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                const nextIdx = offlineInquiryTurnIdx === 0 ? 1 : 0;
                                setOfflineFinalGuessNextIdx(nextIdx);
                              }}
                              className="w-full min-h-[54px] rounded-2xl bg-gradient-to-r from-pop/20 to-gold/20 hover:from-pop/30 hover:to-gold/30 border-2 border-pop/50 text-white font-display font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,107,107,0.15)]"
                            >
                              <Target size={18} className="text-pop" />
                              <span>{t(`اخفِ ومرر إلى ${other.name}`, `Hide & pass to ${other.name}`)}</span>
                            </button>
                          </div>
                        ) : (
                          <div className="panel p-4 rounded-2xl bg-mint/10 border border-mint/30 flex items-center justify-center gap-2.5 text-mint font-display font-bold text-sm animate-pulse text-center">
                            <CheckCircle2 size={20} />
                            {t('تم تسجيل تشخيصك بنجاح! في انتظار تشخيص خصمك...', 'Your diagnosis is locked in! Waiting for opponent...')}
                          </div>
                        )
                      ) : showFinalGuessBox ? (
                        <Sheet open={showFinalGuessBox} onClose={() => setShowFinalGuessBox(false)} title={t('خَمّن كرت الخصم', 'Guess their card')} dir={languageState === 'Arabic' ? 'rtl' : 'ltr'}>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label>{t(`خمّن كرت ${other?.name || 'الخصم'} (50 نقطة)`, `Guess ${other?.name || 'Opponent'}'s card (50 pts)`)}</Label>
                            {currentStage < 5 && (
                              <button
                                type="button"
                                onClick={() => setShowFinalGuessBox(false)}
                                className="text-[0.8125rem] text-white/70 font-bold hover:text-white"
                              >
                                {t('إغلاق ✕', 'Close ✕')}
                              </button>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="relative">
                              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-white/70" size={16} />
                              <input
                                type="text"
                                aria-label={t('بحث التشخيص النهائي', 'Search final diagnosis')} placeholder={t('ابحث عن التشخيص…', 'Search diagnosis…')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full min-h-[50px] bg-ink/70 border border-ink-4 focus:border-pop/60 rounded-2xl ps-10 pe-4 text-sm font-bold text-white placeholder-white/60 outline-none"
                              />
                            </div>

                            {searchQuery && (
                              <div className="rounded-2xl overflow-hidden border border-ink-4 divide-y divide-white/5 bg-ink max-h-[220px] overflow-y-auto custom-scrollbar">
                                {filteredSearchWords.map((word) => (
                                  <button
                                    key={word.id}
                                    type="button"
                                    onClick={() => {
                                      if (isOnline) {
                                        submitOnlineTwoPlayersGuess(word.id);
                                      } else if (local) {
                                        submitOfflineTwoPlayersGuess(local.id, word.id);
                                      }
                                      setSearchQuery('');
                                    }}
                                    className="w-full min-h-[48px] px-3.5 flex items-center justify-between text-start active:bg-pop/10 hover:bg-white/5 transition-colors"
                                  >
                                    <div className="flex flex-col">
                                      <span className="font-bold text-white text-base break-words">{word.word.English}</span>
                                      {word.word.Arabic && (
                                        <span className="text-[0.8125rem] text-white/70">{word.word.Arabic}</span>
                                      )}
                                    </div>
                                    <span className="text-[0.8125rem] font-black text-white/70 uppercase px-1.5 py-0.5 rounded bg-white/5">
                                      {word.type}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        </Sheet>
                      ) : null}
                    </div>

                  </div>
                </Screen>
              </div>
            );
          })()}

          {/* ================= ROUND RESULT ================= */}
          {phase ==='ROUND_RESULT' && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Screen title={t('النتائج','Results')}>
                <div className="px-4 space-y-4">
                  <RoundOutcome players={activePlayers} initialScores={roundStartScores.current} duel={playerCount === 2} language={languageState} />
                  {secretWord && playerCount >= 2 && (
                    <div className="panel p-5 space-y-1.5 text-center bg-gradient-to-b from-ink-2 to-ink-3 border-2 border-mint/40 rounded-3xl shadow-xl select-none">
                      <span className="text-[0.8125rem] font-black text-mint uppercase tracking-widest block">
                        {playerCount === 2 ? t(`كرت ${activePlayers[0]?.name || 'اللاعب الأول'}`, `${activePlayers[0]?.name || 'Player 1'}’s card`) : t('الكلمة السرية للجولة', 'Target Secret Diagnosis')}
                      </span>
                      {wordRevealedAfterAd ? (
                        <>
                          <motion.h2
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="font-display font-black text-3xl sm:text-4xl text-white tracking-wide"
                          >
                            {secretWord.word.English}
                          </motion.h2>
                          {secretWord.word.Arabic && (
                            <p className="font-display font-bold text-xl sm:text-2xl text-mint mt-0.5">
                              {secretWord.word.Arabic}
                            </p>
                          )}
                          {imposterAssignedWord && playerCount >= 3 && (
                            <div className="pt-2">
                              <span className="inline-block px-3 py-1 rounded-xl bg-coral/10 border border-coral/30 text-xs font-bold text-coral">
                                {playerCount === 2 ? t(`كرت ${activePlayers[1]?.name || 'اللاعب الثاني'}: `, `${activePlayers[1]?.name || 'Player 2'}’s card: `) : t('كلمة المنتحل: ', 'Imposter word: ')}
                                <strong>{imposterAssignedWord.word.English}</strong>
                                {imposterAssignedWord.word.Arabic && ` (${imposterAssignedWord.word.Arabic})`}
                              </span>
                            </div>
                          )}
                          {getWordImage(secretWord.id) && (
                            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-lg max-h-48 my-2.5 bg-black/60 max-w-xs mx-auto">
                              <img src={getWordImage(secretWord.id)!} alt={secretWord.word.English} className="w-full h-40 object-contain bg-ink" />
                              <span className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-lg text-[0.8125rem] text-cyan-300 font-bold border border-cyan-500/40 flex items-center gap-1">
                                <Camera size={11} /> {t('صورة الحالة السرية', 'Secret Case Specimen')}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div
                          onClick={() => triggerPreRevealWordAd(`click_reveal_${Date.now()}`)}
                          className="py-5 px-3 rounded-2xl bg-gradient-to-r from-gold/15 via-amber-500/10 to-gold/15 border border-gold/40 cursor-pointer active:scale-95 transition-all text-center space-y-1.5 shadow-md"
                        >
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold font-display border border-gold/40">
                            <Lock size={13} />
                            {t('الكلمة السرية برعاية', 'Sponsored Word')}
                          </span>
                          <p className="font-display font-bold text-lg text-white">
                            {t('اضغط لكشف الكلمة السرية ➔', 'Tap to reveal secret word ➔')}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-2">
                    {[...activePlayers].sort((a, b) => b.score - a.score).map((p, idx) => {
                      const medals = ['','',''];
                      const isImp = p.role ==='IMPOSTER';
                      return (
                        <motion.div
                          key={p.id}
                          initial={{ opacity: 0, x: arLangBool ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className={`min-h-[68px] px-4 rounded-2xl border flex items-center gap-3 ${
                            idx === 0 ?'bg-gold/[0.07] border-gold/40' :'bg-ink-3/60 border-ink-4'
                          }`}
                        >
                          <span className="text-2xl w-8 text-center shrink-0">{medals[idx] || <span className="text-white/70 font-display font-bold text-base">#{idx + 1}</span>}</span>
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-ink border border-white/10 shrink-0 flex items-center justify-center">
                            <AnimalDoctorAvatar avatarId={p.avatarId} size={38} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-display font-bold text-white truncate">{p.name}</p>
                            {playerCount > 2 && <p className={`text-[0.8125rem] font-black ${isImp ?'text-coral' :'text-mint'}`}>
                              {isImp ? t('منتحل','Imposter') : t('طبيب','Doctor')}
                            </p>}
                          </div>
                          <span className="font-display font-bold text-2xl text-gold shrink-0">{p.score}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* ================= CLINICAL INTEGRITY & LIE DETECTOR REPORT ================= */}
                  {(() => {
                    const misleadingList: MisleadingEntry[] = isOnline
                      ? (onlineRoomState?.inquiry?.misleadingLog || [])
                      : offlineMisleadingLog;

                    const inquiryHist = isOnline
                      ? (onlineRoomState?.inquiry?.history || [])
                      : offlineInquiryHistory;

                    if (inquiryHist.length === 0) return null;

                    return (
                      <div className="panel p-3.5 sm:p-4 rounded-3xl border border-white/10 bg-ink-2 space-y-2.5">
                        <button
                          type="button"
                          onClick={() => setShowIntegrityReport(prev => !prev)}
                          className="w-full flex items-center justify-between text-start cursor-pointer active:scale-[0.99] transition-transform"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-8 h-8 rounded-xl bg-coral/10 border border-coral/30 flex items-center justify-center text-coral shrink-0">
                              <ShieldAlert size={18} />
                            </span>
                            <div className="min-w-0">
                              <h4 className="font-display font-bold text-sm text-white truncate">
                                {t('تقرير النزاهة السريرية', 'Clinical Integrity Report')}
                              </h4>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`text-[0.8125rem] font-bold px-2.5 py-0.5 rounded-full border ${
                              misleadingList.length > 0
                                ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 font-black animate-pulse'
                                : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-black'
                            }`}>
                              {misleadingList.length > 0
                                ? t(`${misleadingList.length} إجابة غير دقيقة`, `${misleadingList.length} Inaccurate answers`)
                                : t('إجابات مطابقة 100%', '100% Consistent')}
                            </span>
                            <ChevronDown size={16} className={`text-white/70 transition-transform ${showIntegrityReport ? 'rotate-180' : ''}`} />
                          </div>
                        </button>

                        {showIntegrityReport && (
                          <div className="pt-2 border-t border-white/5 space-y-2.5">
                            {misleadingList.length > 0 ? (
                              <div className="space-y-2.5 pt-1">
                                {misleadingList.map((entry, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-2 text-start"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-black text-rose-400 flex items-center gap-1">
                                        <ShieldAlert size={14} />
                                        <span>{t(`إجابة ${entry.doctorName} غير مطابقة للبطاقة`, `${entry.doctorName}'s answer contradicted card`)}</span>
                                      </span>
                                      <span className="text-[0.8125rem] px-2 py-0.5 rounded-md bg-white/5 text-white/70 font-mono">
                                        {t(`المرحلة ${entry.stage}`, `Stage ${entry.stage}`)}
                                      </span>
                                    </div>

                                    <div className="p-2 rounded-xl bg-ink/70 border border-white/5 space-y-1">
                                      <p className="text-xs text-white/90 font-bold">
                                        {languageState === 'Arabic' ? entry.questionAr : entry.questionEn}
                                      </p>
                                      <div className="flex items-center gap-3 text-[0.8125rem] pt-1 border-t border-white/5">
                                        <span className="text-white/70">
                                          {t('أجاب:', 'Answered:')}{' '}
                                          <strong className="text-rose-300 font-bold">
                                            {entry.givenAnswer === 'YES' ? t('نعم', 'YES') : entry.givenAnswer === 'NO' ? t('لا', 'NO') : t('غير دقيق', 'MAYBE')}
                                          </strong>
                                        </span>
                                        <span className="text-white/70">
                                          {t('الحقيقة لكرته:', 'Card truth:')}{' '}
                                          <strong className="text-emerald-300 font-bold">
                                            {entry.trueAnswer === 'YES' ? t('نعم', 'YES') : t('لا', 'NO')} ({entry.cardNameAr || entry.cardNameEn})
                                          </strong>
                                        </span>
                                      </div>
                                    </div>

                                    <p className="text-[0.8125rem] text-white/80 leading-relaxed font-medium bg-white/5 p-2 rounded-xl border border-white/5">
                                      <span className="font-bold text-mint">{t('التفسير السريري: ', 'Clinical rationale: ')}</span>
                                      {languageState === 'Arabic' ? entry.clinicalReasonAr : entry.clinicalReasonEn}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1">
                                <h5 className="font-display font-bold text-sm text-emerald-400">
                                  {t('الإجابات مطابقة للبطاقات 100%', '100% Card Consistency')}
                                </h5>
                                <p className="text-xs text-white/70 leading-relaxed max-w-sm mx-auto">
                                  {t(
                                    'كانت جميع الإجابات مطابقة للحقائق الطبية لبطاقات اللاعبين.',
                                    'All answers matched the clinical facts of the cards.'
                                  )}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </Screen>
              <div className="shrink-0 px-4 pt-2 pb-safe">
                {isOnline ? (
                  onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                    <BigBtn onClick={resetOnlineRound}>{t('جولة جديدة ➔','Next round ➔')}</BigBtn>
                  ) : (
                    <div className="panel py-4 text-center">
                      <p className="font-display font-bold text-white/60 animate-pulse">{t('بانتظار المضيف لبدء جولة جديدة...','Waiting for host...')}</p>
                    </div>
                  )
                ) : (
                  <div className="space-y-2">
                    <BigBtn onClick={startNextRoundOffline} className="w-full">
                      <RefreshCcw size={18} />
                      <span>{t('جولة جديدة ➔', 'Next Round ➔')}</span>
                    </BigBtn>
                    <button
                      type="button"
                      onClick={() => { 
                        if (gameModeLock) {
                          onGoBack();
                        } else {
                          setPhase('ENTRY'); 
                        }
                        setOfflineVotes({}); 
                        setOfflineGuesses({}); 
                      }}
                      className="w-full min-h-[48px] rounded-xl bg-ink-3/70 hover:bg-ink-3 border border-ink-4 text-xs font-display font-bold text-white/60 hover:text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                    >
                      <Home size={14} />
                      <span>{t('العودة للرئيسية', 'Back to Home')}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ================= SPECIALTY PICKER SHEET ================= */}
      <Sheet
        open={specSheet !== null}
        onClose={() => setSpecSheet(null)}
        title={t('اختار التخصص','Pick a specialty')}
        dir={languageState ==='Arabic' ?'rtl' :'ltr'}
        footer={
          <div className="py-3">
            <BigBtn onClick={() => setSpecSheet(null)}>{t('تم','Done')}</BigBtn>
          </div>
        }
      >
        {(() => {
          const isSingle = specSheet ==='single';
          const activeFilter = isSingle ? singleAdvancedFilter : multiAdvancedFilter;
          const activeVal = activeFilter.enabled ?'Advanced' : (isSingle ? singleSpecialty : multiSpecialty);
          const q = specSearch.trim().toLowerCase();
          const clin = clinicalSpecialties.filter(s => !q || s.nameEn.toLowerCase().includes(q) || s.nameAr.includes(specSearch));
          const acad = academicSpecialties.filter(s => !q || s.nameEn.toLowerCase().includes(q) || s.nameAr.includes(specSearch));

          const pick = (id: string) => {
            if (isSingle) {
              setSingleSpecialty(id);
              setSingleAdvancedFilter(prev => ({ ...prev, enabled: false }));
            } else {
              setMultiSpecialty(id);
              setMultiAdvancedFilter(prev => ({ ...prev, enabled: false }));
            }
            setSpecSheet(null);
          };

          const Row: React.FC<{ id: string; label: string; sub?: string }> = ({ id, label, sub }) => (
            <button
              type="button"
              onClick={() => pick(id)}
              className={`w-full min-h-[52px] px-4 rounded-2xl border flex items-center justify-between gap-3 text-start transition-all active:scale-[0.98] ${
                activeVal === id ?'bg-mint/10 border-mint/60' :'bg-ink-3/60 border-ink-4'
              }`}
            >
              <span className="min-w-0">
                <span className={`block font-display font-bold text-base break-words ${activeVal === id ?'text-mint' :'text-white/85'}`}>{label}</span>
                {sub && <span className="block text-[0.8125rem] text-white/70 font-bold">{sub}</span>}
              </span>
              {activeVal === id && <Check size={18} className="text-mint shrink-0" />}
            </button>
          );

          return (
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-white/70" size={16} />
                <input
                  type="text"
                  value={specSearch}
                  onChange={(e) => setSpecSearch(e.target.value)}
                  aria-label={t('بحث التخصصات', 'Search specialties')} placeholder={t('دوّر على تخصص...','Search specialties...')}
                  className="w-full min-h-[48px] bg-ink-3 border border-ink-4 rounded-2xl ps-10 pe-4 text-sm font-bold text-white placeholder-white/60 outline-none focus:border-mint/50"
                />
              </div>

              {!q && <Row id="All" label={t('كل التخصصات','All specialties')} sub={t('طب + علوم أساسية','Medicine + basic sciences')} />}
              {!q && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingFilterType(isSingle ?'single' :'multi');
                    setTempAdvancedFilter({ ...activeFilter });
                    setIsAdvancedModalOpen(true);
                    setSpecSheet(null);
                  }}
                  className="w-full min-h-[52px] px-4 rounded-2xl border border-pop/40 bg-pop/5 flex items-center gap-3 text-start active:scale-[0.98] transition-transform"
                >
                  <Settings size={18} className="text-pop shrink-0" />
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-base text-pop">{t('فلتر متقدم (تخصصات مخصصة)','Advanced custom filter')}</span>
                    <span className="block text-[0.8125rem] text-white/70 font-bold">{t('اختار أكتر من تخصص + موديولات','Multi-select + modules')}</span>
                  </span>
                </button>
              )}

              {clin.length > 0 && (
                <div className="space-y-2 pt-1">
                  <Label>{t('تخصصات إكلينيكية','Clinical')}</Label>
                  <div className="space-y-1.5">
                    {clin.map(s => <Row key={s.id} id={s.id} label={languageState ==='Arabic' ? s.nameAr : s.nameEn} sub={languageState ==='Arabic' ? s.nameEn : s.nameAr} />)}
                  </div>
                </div>
              )}

              {acad.length > 0 && (
                <div className="space-y-2 pt-1">
                  <Label>{t('تخصصات أكاديمية','Academic')}</Label>
                  <div className="space-y-1.5">
                    {acad.map(s => <Row key={s.id} id={s.id} label={languageState ==='Arabic' ? s.nameAr : s.nameEn} sub={languageState ==='Arabic' ? s.nameEn : s.nameAr} />)}
                  </div>
                </div>
              )}

              {clin.length === 0 && acad.length === 0 && (
                <p className="text-center text-white/70 text-sm font-bold py-6">{t('مفيش نتائج','No matches')}</p>
              )}
            </div>
          );
        })()}
      </Sheet>

      <Sheet open={!!notice} onClose={() => setNotice('')} title={t('تنبيه', 'Notice')} dir={languageState === 'Arabic' ? 'rtl' : 'ltr'}
        footer={<BigBtn onClick={() => setNotice('')}>{t('حسنًا', 'OK')}</BigBtn>}><p role="alert" className="text-base leading-relaxed">{notice}</p></Sheet>

      {/* ================= LEADERBOARD SHEET ================= */}
      <Sheet
        open={showLeaderboardModal}
        onClose={() => setShowLeaderboardModal(false)}
        title={t('لوحة الصدارة','Leaderboard')}
        dir={languageState ==='Arabic' ?'rtl' :'ltr'}
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {([
              { id:'global' as const, label: t(' عالمي',' Global') },
              { id:'local' as const, label: t('حول ترتيبك','Around your rank') },
            ]).map(tb => (
              <button
                key={tb.id}
                type="button"
                onClick={() => setActiveLeaderboardTab(tb.id)}
                className={`min-h-[48px] rounded-2xl border font-display font-bold transition-all active:scale-95 ${
                  activeLeaderboardTab === tb.id ?'bg-gold/15 border-gold/50 text-gold' :'bg-ink-3/60 border-ink-4 text-white/70'
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {leaderboardError ? <div role="alert" className="py-6 text-center space-y-4">
            <p>{t('تعذر تحميل الترتيب. تحقق من اتصالك.', 'Could not load rankings. Check your connection.')}</p>
            <BigBtn onClick={fetchLeaderboard}>{t('إعادة المحاولة', 'Retry')}</BigBtn>
          </div> : !loadingLeaderboard && (activeLeaderboardTab === 'global' ? globalLeaderboard : localLeaderboard).length === 0 ?
            <p role="status" className="py-6 text-center text-white/75">{activeLeaderboardTab === 'local' ? (!appUser ? t('سجّل الدخول لعرض ترتيبك.', 'Sign in to view your rank.') : t('ترتيبك غير متاح ضمن أفضل 100 لاعب.', 'Your rank is not available in the top 100.')) : t('لا توجد نتائج بعد.', 'No scores yet.')}</p> : loadingLeaderboard ? (
            <div className="py-12 flex justify-center">
              <span className="w-9 h-9 border-[3px] border-mint/30 border-t-mint rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-1.5 pb-2">
              {(activeLeaderboardTab ==='global' ? globalLeaderboard : localLeaderboard).map((p: any, idx: number) => {
                const medals = ['','',''];
                const isMe = appUser && p.id === appUser.id;
                return (
                  <div
                    key={p.id}
                    className={`min-h-[56px] px-3.5 rounded-2xl border flex items-center gap-3 ${
                      isMe ?'bg-mint/10 border-mint/40' :'bg-ink-3/50 border-ink-4'
                    }`}
                  >
                    <span className="w-9 text-center text-xl shrink-0">
                      {medals[idx] || <span className="text-white/70 font-display font-bold text-sm">#{p.rank || idx + 1}</span>}
                    </span>
                    <span className={`flex-1 min-w-0 font-display font-bold truncate ${isMe ?'text-mint' :'text-white/85'}`}>
                      {p.displayName}{isMe ? ` ${t('(أنت)','(You)')}` :''}
                    </span>
                    <span className="font-display font-bold text-lg text-gold shrink-0">{p.detectiveScore}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Sheet>

      {/* ================= ADVANCED FILTER SHEET ================= */}
      <AnimatePresence>
        {isAdvancedModalOpen && (
          <ModalFrame open={isAdvancedModalOpen} onClose={() => setIsAdvancedModalOpen(false)} title={t('فلتر متقدم', 'Advanced filter')} dir={languageState === 'Arabic' ? 'rtl' : 'ltr'} className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[200] flex items-end sm:items-center justify-center">
            <motion.div
              initial={{ y:'100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y:'100%', opacity: 0.5 }}
              transition={{ type:'spring', damping: 30, stiffness: 320 }}
              className="bg-ink-2 border-t sm:border border-ink-4 sm:rounded-[2rem] rounded-t-[2rem] w-full sm:max-w-lg max-h-[90dvh] flex flex-col"
              dir={languageState ==='Arabic' ?'rtl' :'ltr'}
            >
              <div className="shrink-0 flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/5">
                <h3 className="font-display font-bold text-xl text-white">{t('فلتر متقدم','Advanced filter')}</h3>
                <button
                  type="button"
                  aria-label={t('إغلاق', 'Close')} onClick={() => setIsAdvancedModalOpen(false)}
                  className="h-10 w-10 rounded-xl bg-ink-3 border border-ink-4 flex items-center justify-center text-white/60 active:scale-90 transition-transform"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-4 custom-scrollbar">
                {/* presets */}
                <div className="flex flex-wrap gap-2">
                  {([
                    { ar:'كل الإكلينيكية', en:'All clinical', ids: clinicalSpecialties.map(s => s.id), style:'bg-pop/10 border-pop/40 text-pop' },
                    { ar:'كل الأكاديمية', en:'All academic', ids: academicSpecialties.map(s => s.id), style:'bg-lilac/10 border-lilac/40 text-lilac' },
                    { ar:'الطب الشرعي والسموم', en:'Forensic & Toxicology', ids: ['Forensic Medicine', 'Clinical Toxicology'], style:'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' },
                    { ar:'دمج متوازن', en:'Balanced mix', ids: ['Anatomy','Pathology','Histology','Cardiology','Gastroenterology'], style:'bg-mint/10 border-mint/40 text-mint' },
                    { ar:'مسح الكل', en:'Clear all', ids: [], style:'bg-coral/10 border-coral/40 text-coral' },
                  ]).map(p => (
                    <button
                      key={p.en}
                      type="button"
                      onClick={() => setTempAdvancedFilter(prev => ({ ...prev, subjects: [...p.ids] }))}
                      className={`min-h-[48px] px-4 rounded-2xl border font-display font-bold text-sm active:scale-95 transition-transform ${p.style}`}
                    >
                      {languageState ==='Arabic' ? p.ar : p.en}
                    </button>
                  ))}
                </div>

                {([
                  { title: t('إكلينيكية','Clinical'), list: clinicalSpecialties },
                  { title: t('أكاديمية','Academic'), list: academicSpecialties },
                ]).map(group => (
                  <div key={group.title} className="space-y-2">
                    <Label>{group.title}</Label>
                    <div className="flex flex-wrap gap-2">
                      {group.list.map(spec => {
                        const isSelected = tempAdvancedFilter.subjects.includes(spec.id);
                        return (
                          <button
                            key={spec.id}
                            type="button"
                            onClick={() => {
                              setTempAdvancedFilter(prev => {
                                const subjects = prev.subjects.includes(spec.id)
                                  ? prev.subjects.filter(s => s !== spec.id)
                                  : [...prev.subjects, spec.id];
                                return { ...prev, subjects };
                              });
                            }}
                            className={`min-h-[48px] px-3.5 rounded-2xl border font-bold text-sm transition-all active:scale-95 ${
                              isSelected
                                ?'bg-mint/15 border-mint text-mint'
                                :'bg-ink-3/60 border-ink-4 text-white/75'
                            }`}
                          >
                            {languageState ==='Arabic' ? spec.nameAr : spec.nameEn}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* per-subject modules */}
                {tempAdvancedFilter.subjects.length > 0 && (
                  <div className="space-y-2 border-t border-white/5 pt-3">
                    <Label>{t('موديول لكل تخصص (اختياري)','Module per specialty (optional)')}</Label>
                    <div className="space-y-1.5">
                      {tempAdvancedFilter.subjects.map(subId => {
                        const spec = [...clinicalSpecialties, ...academicSpecialties].find(s => s.id === subId);
                        if (!spec) return null;
                        return (
                          <div key={subId} className="flex items-center justify-between gap-2 p-2 bg-ink-3/60 border border-ink-4 rounded-2xl">
                            <span className="text-sm font-bold text-white/80 break-words min-w-0 flex-1">
                              {languageState ==='Arabic' ? spec.nameAr : spec.nameEn}
                            </span>
                            <select
                              aria-label={t(`موديول ${spec.nameAr}`, `${spec.nameEn} module`)}
                              value={tempAdvancedFilter.subjectModules?.[subId] ||'All'}
                              onChange={(e) => {
                                const mId = e.target.value;
                                setTempAdvancedFilter(prev => ({
                                  ...prev,
                                  subjectModules: { ...(prev.subjectModules || {}), [subId]: mId }
                                }));
                              }}
                              className="w-1/2 min-w-0 min-h-12 bg-ink border border-ink-4 text-sm font-bold text-white rounded-xl px-2.5 py-2 outline-none focus:border-mint"
                            >
                              <option value="All">{t('الكل','All')}</option>
                              {Object.entries(MODULE_MAPPINGS).map(([id, m]) => (
                                <option key={id} value={id}>{languageState ==='Arabic' ? m.nameAr : m.nameEn}</option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="shrink-0 px-5 py-3 pb-safe border-t border-white/5 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const disabledFilter = { enabled: false, subjects: [], moduleFilterEnabled: false, selectedModule:'GIT', subjectModules: {} };
                    if (editingFilterType ==='single') { setSingleAdvancedFilter(disabledFilter); setSingleSpecialty('All'); }
                    else { setMultiAdvancedFilter(disabledFilter); setMultiSpecialty('All'); }
                    setIsAdvancedModalOpen(false);
                  }}
                  className="min-h-[52px] px-5 rounded-2xl bg-ink-3 border border-ink-4 text-white/60 font-display font-bold active:scale-95 transition-transform"
                >
                  {t('إلغاء','Disable')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const finalFilter = {
                      enabled: true,
                      subjects: tempAdvancedFilter.subjects.length === 0
                        ? [...clinicalSpecialties.map(s => s.id), ...academicSpecialties.map(s => s.id)]
                        : tempAdvancedFilter.subjects,
                      moduleFilterEnabled: tempAdvancedFilter.moduleFilterEnabled,
                      selectedModule: tempAdvancedFilter.selectedModule,
                      subjectModules: tempAdvancedFilter.subjectModules || {}
                    };
                    if (editingFilterType ==='single') setSingleAdvancedFilter(finalFilter);
                    else setMultiAdvancedFilter(finalFilter);
                    setIsAdvancedModalOpen(false);
                  }}
                  className="flex-1 min-h-[52px] rounded-2xl bg-pop text-ink font-display font-bold active:scale-95 transition-transform shadow-[0_4px_0_0_#0369A1]"
                >
                  {t('تفعيل الفلتر','Apply filter')}
                </button>
              </div>
            </motion.div>
          </ModalFrame>
        )}
      </AnimatePresence>

      {/* ================= CASE DEBRIEF FLASHCARD SHEET ================= */}
      <Sheet
        open={showFlashcardModal}
        onClose={() => setShowFlashcardModal(false)}
        title={t('مراجعة الحالة', 'Case review')}
        dir={languageState === 'Arabic' ? 'rtl' : 'ltr'}
        footer={
          <div className="flex gap-2 py-2">
            <BigBtn onClick={() => setShowFlashcardModal(false)} variant="dark" className="flex-1">
              {t('إغلاق', 'Close')}
            </BigBtn>
            <BigBtn onClick={() => { setShowFlashcardModal(false); startSingleGame(); }} className="flex-1">
              {t('الحالة التالية', 'Next Case')}
            </BigBtn>
          </div>
        }
      >
        {singleWord && (() => {
          const flashcard = getSoloFlashcard(singleWord, singleOptions, languageState);
          const soloClues = getSoloProgressiveHints(singleWord, languageState);

          return (
            <div className="space-y-3.5 pb-2">
              {/* Case Header Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-ink-3 to-ink-2 border border-mint/30 flex flex-col items-start gap-2">
                <div className="min-w-0">
                  <span className="text-xs font-bold text-mint uppercase tracking-wider block">
                    {t('الحالة المشخصة', 'CONFIRMED DIAGNOSIS')}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white break-words">
                    {singleWord.word.English}
                  </h3>
                  <p className="text-sm font-semibold text-white/75 break-words">
                    {singleWord.word.Arabic}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-mint/10 text-mint border border-mint/25 shrink-0">
                  {singleWord.subjects[0] || (languageState === 'Arabic' ? 'سريري' : 'Clinical')}
                </span>
              </div>

              {/* 1. Etiology Card */}
              <div className="p-3.5 rounded-2xl bg-ink-3/70 border border-ink-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-display font-black text-sky-400">
                  <Activity size={15} />
                  <span>{t('المسبب والآلية', 'Primary Etiology & Pathophysiology')}</span>
                </div>
                <p className="text-[0.84375rem] sm:text-sm font-medium text-white/95 leading-relaxed text-start">
                  {flashcard.etiology}
                </p>
              </div>

              {/* 2. Gold Standard Dx Card */}
              <div className="p-3.5 rounded-2xl bg-ink-3/70 border border-ink-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-display font-black text-gold">
                  <Target size={15} />
                  <span>{t('الفحص التأكيدي', 'Gold Standard Diagnostic Test')}</span>
                </div>
                <p className="text-[0.84375rem] sm:text-sm font-medium text-white/95 leading-relaxed text-start">
                  {flashcard.goldStandard}
                </p>
              </div>

              {/* 3. First-line Management Card */}
              <div className="p-3.5 rounded-2xl bg-ink-3/70 border border-ink-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-display font-black text-mint">
                  <Pill size={15} />
                  <span>{t('العلاج الأولي', 'First-line Clinical Management')}</span>
                </div>
                <p className="text-[0.84375rem] sm:text-sm font-medium text-white/95 leading-relaxed text-start">
                  {flashcard.firstLineRx}
                </p>
              </div>

              {/* 4. Differential Diagnostic Key Card */}
              <div className="p-3.5 rounded-2xl bg-ink-3/70 border border-purple-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-display font-black text-purple-300">
                  <FileText size={15} />
                  <span>{t('سبب استبعاد البدائل', 'How We Ruled Out The Other 4 Options')}</span>
                </div>
                <p className="text-[0.84375rem] sm:text-sm font-medium text-white/95 leading-relaxed text-start">
                  {flashcard.diffKey}
                </p>
              </div>

              {/* 5. Clinical Pearl Card */}
              {soloClues.pearl && (
                <div className="p-3 rounded-2xl bg-gold/10 border border-gold/25 flex items-start gap-2.5">
                  <Sparkles size={16} className="text-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-start">
                    <span className="text-xs font-bold text-gold block">
                      {t('معلومة سريرية', 'High-Yield Clinical Pearl')}
                    </span>
                    <p className="text-xs sm:text-[0.8125rem] text-white/90 font-medium leading-relaxed">
                      {soloClues.pearl}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </Sheet>

      {/* ================= EXIT CONFIRM ================= */}
      <AnimatePresence>
        {showExitConfirm && (
          <ModalFrame open={showExitConfirm} onClose={() => setShowExitConfirm(false)} title={t('تخرج من اللعبة؟', 'Quit the game?')} dir={languageState === 'Arabic' ? 'rtl' : 'ltr'} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[210] flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-ink-2 border border-ink-4 rounded-3xl w-full max-w-xs p-6 text-center space-y-4"
              dir={languageState ==='Arabic' ?'rtl' :'ltr'}
            >
              <span className="w-16 h-16 rounded-full bg-coral/15 border border-coral/30 flex items-center justify-center mx-auto text-coral">
                <DoorOpen size={30} />
              </span>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white">{t('تخرج من اللعبة؟','Quit the game?')}</h3>
                <p className="text-sm font-bold text-white/70">{t('التقدم الحالي هيتلغي','Current progress will be lost')}</p>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 min-h-[48px] rounded-2xl bg-ink-3 border border-ink-4 text-white/70 font-display font-bold active:scale-95 transition-transform"
                >
                  {t('كمل','Stay')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    void leaveCurrentRoom();
                    if (gameModeLock) onGoBack(); else setPhase('ENTRY');
                    setRoomId('');
                    setOnlineRoomState(null);
                    setOfflineVotes({});
                    setOfflineGuesses({});
                    setShowExitConfirm(false);
                  }}
                  className="flex-1 min-h-[48px] rounded-2xl bg-coral-deep text-white font-display font-bold active:scale-95 transition-transform"
                >
                  {t('خروج','Quit')}
                </button>
              </div>
            </motion.div>
          </ModalFrame>
        )}
      </AnimatePresence>

      {/* ================= SPONSORED AD MODAL (PRE-ROUND & PRE-REVEAL) ================= */}
      <InterstitialAdModal
        language={languageState}
        ad={activeAd}
        isOpen={adModalOpen}
        headerTitle={adHeaderTitle}
        skipButtonText={adSkipButtonText}
        onClose={() => {
          setAdModalOpen(false);
          setActiveAd(null);
          setWordRevealedAfterAd(true);
        }}
      />
    </div>
  );
};
