import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ArrowLeft, RefreshCcw, 
  Info, AlertCircle, MessageCircle, 
  CheckCircle2, Trophy, ChevronRight, ChevronDown,
  ShieldAlert, Target, Play, Copy, Landmark, Check, HelpCircle, Search, Settings, Lock,
  X, Plus, Stethoscope
} from 'lucide-react';
import { AppUser, Language } from '../../types';
import { medicalWords, MedicalWord } from '../../data/medicalWords';
import { getCluesForWord } from '../../data/hints';
import { db } from '../../firebase';
import { doc, setDoc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';

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

export const AnimalDoctorAvatar: React.FC<{ avatarId?: number; size?: number; className?: string }> = ({ avatarId = 0, size = 48, className = "" }) => {
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
  subjectModules?: Record<string, string>; // Maps specialty/subject ID to specific module ID (e.g. 'Anatomy' -> 'GIT') or 'All'
}

export const MODULE_MAPPINGS: Record<string, { nameEn: string; nameAr: string; subjects: string[]; keywords: string[] }> = {
  CVS: {
    nameEn: 'Cardiovascular (CVS)',
    nameAr: 'القلب والأوعية الدموية (CVS)',
    subjects: ['Cardiology', 'Vascular Surgery'],
    keywords: ['heart', 'cardiac', 'valve', 'vein', 'artery', 'aorta', 'mitral', 'atrial', 'ventricle', 'coronary', 'thrombosis', 'hypertension', 'angina', 'infarction']
  },
  GIT: {
    nameEn: 'Gastrointestinal (GIT)',
    nameAr: 'الجهاز الهضمي (GIT)',
    subjects: ['Gastroenterology', 'General Surgery'],
    keywords: ['liver', 'stomach', 'colon', 'intestine', 'appendix', 'bile', 'gallbladder', 'esophagus', 'pancreas', 'gastric', 'duodenum', 'rectum', 'abdominal', 'colorectal', 'portal', 'hernia']
  },
  CNS: {
    nameEn: 'Nervous System (CNS)',
    nameAr: 'الجهاز العصبي (CNS)',
    subjects: ['Neurology', 'Psychiatry'],
    keywords: ['brain', 'nerve', 'spinal', 'cerebral', 'meninges', 'neural', 'encephalitis', 'seizure', 'dementia', 'paralysis', 'sleep', 'panic', 'anxiety', 'compulsive', 'obsessive']
  },
  Respiratory: {
    nameEn: 'Respiratory System',
    nameAr: 'الجهاز التنفسي',
    subjects: ['Pulmonology'],
    keywords: ['lung', 'bronch', 'trachea', 'pleura', 'larynx', 'pharynx', 'alveoli', 'oxygen', 'respiratory', 'asthma', 'pneumonia', 'croup', 'apnea']
  },
  Renal: {
    nameEn: 'Renal & Urinary',
    nameAr: 'الجهاز البولي والكلى',
    subjects: ['Nephrology', 'Urology'],
    keywords: ['kidney', 'urinary', 'bladder', 'ureter', 'prostate', 'renal', 'nephritis', 'calculus', 'dialysis', 'urine', 'cystitis']
  },
  Endocrine: {
    nameEn: 'Endocrine System',
    nameAr: 'الغدد الصماء',
    subjects: ['Endocrinology'],
    keywords: ['thyroid', 'adrenal', 'pituitary', 'hormone', 'insulin', 'diabetes', 'pancreas', 'endocrine', 'gland']
  },
  Musculoskeletal: {
    nameEn: 'Musculoskeletal',
    nameAr: 'الجهاز الحركي والعظام',
    subjects: ['Orthopedics'],
    keywords: ['bone', 'muscle', 'joint', 'tendon', 'ligament', 'spine', 'femur', 'tibia', 'humerus', 'scoliosis', 'fracture', 'arthritis', 'carpal', 'myalgia']
  },
  Reproductive: {
    nameEn: 'Reproductive System',
    nameAr: 'الجهاز التناسلي والولادة',
    subjects: ['Obstetrics and Gynecology'],
    keywords: ['uterus', 'ovary', 'vagina', 'pregnancy', 'fetus', 'placenta', 'cervix', 'uterine', 'ovarian', 'semen', 'testis']
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
  ].join(' ');
  
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
        if (!targetModule || targetModule === 'All') {
          return true;
        }
        return isWordInModule(w, targetModule);
      });
      if (hasAnyValidSubjectMatch) return true;
    }

    if (matchedType) {
      const targetModule = adv.subjectModules?.[matchedType];
      if (!targetModule || targetModule === 'All') {
        return true;
      }
      return isWordInModule(w, targetModule);
    }

    return false;
  }

  // 3. Fallback to legacy global module filter
  if (adv.moduleFilterEnabled && adv.selectedModule) {
    const isAcademic = w.level === 'Academic' || w.level === 'Both';
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
  role: 'NORMAL' | 'IMPOSTER';
  assignedWordId: string; // The word they got shown (either the real word, or 'Imposter', or a close word)
  votedFor?: string; // ID of the player they voted for
  avatarId?: number; // Cute animal doctor avatar index
}

type GamePhase = 
  | 'ENTRY'             // Let user select number of players (1 to 10)
  | 'SINGLE_SETUP'      // 1 player setup
  | 'SINGLE_PLAYING'    // 1 player game
  | 'MULTI_MODE_SELECT'   // 2+ player select Online / Offline
  | 'MULTI_SETUP_OFFLINE' // pass-and-play setup - Page 1 (Names)
  | 'MULTI_SETUP_OFFLINE_CONFIG' // pass-and-play setup - Page 2 (Specialty & settings)
  | 'MULTI_SETUP_ONLINE'  // online setup (create/join room)
  | 'ONLINE_LOBBY'      // waiting in online lobby
  | 'ROLES_REVEAL'      // pass-and-play / online role screen
  | 'PLAY_DISCUSSION'   // real-life discussion & questioning (with example questions)
  | 'VOTING_PHASE'      // players vote who is the imposter
  | 'REVEAL_IMPOSTER'   // reveal vote outcome
  | 'IMPOSTER_GUESS'    // imposter guesses the secret word for a comeback
  | 'ROUND_RESULT'      // final scoreboard / round summary
  | 'TWO_PLAYERS_DISCUSSION_GUESS'; // 2 players specific guessing screen

interface Props {
  language: Language;
  onSetView: (v: any) => void;
  onGoBack: () => void;
  appUser: AppUser | null;
  onLogin: () => void;
  onPhaseChange?: (phase: string) => void;
}

const renderClueText = (clue: string, size: 'sm' | 'xs' = 'sm') => {
  // Check if the clue matches our badge pattern: e.g. "💊 [علاجي / Rx]: " or "💊 [Rx / Treatment]: "
  const badgeRegex = /^([\u2300-\u27BF\uD83C-\uD83E][\uDF00-\uDFFF]?)\s*\[([^\]]+)\]:\s*(.*)$/;
  const match = clue.match(badgeRegex);
  
  if (match) {
    const [_, emoji, badgeText, rest] = match;
    
    // Choose professional color themes based on the badge type
    let badgeClass = "bg-zinc-800 text-zinc-300 border-zinc-700/50";
    if (badgeText.includes("علاجي") || badgeText.includes("Rx")) {
      badgeClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    } else if (badgeText.includes("تشخيصي") || badgeText.includes("Dx")) {
      badgeClass = "bg-blue-500/10 text-blue-400 border-blue-500/20";
    } else if (badgeText.includes("سريري") || badgeText.includes("Sx")) {
      badgeClass = "bg-rose-500/10 text-rose-400 border-rose-500/20";
    } else if (badgeText.includes("مسببات") || badgeText.includes("Etiology")) {
      badgeClass = "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
    } else if (badgeText.includes("تشريحي") || badgeText.includes("Anatomy")) {
      badgeClass = "bg-amber-500/10 text-amber-400 border-amber-500/20";
    } else if (badgeText.includes("أكاديمي") || badgeText.includes("Classification")) {
      badgeClass = "bg-sky-500/10 text-sky-400 border-sky-500/20";
    } else if (badgeText.includes("ملاحظة") || badgeText.includes("Pearl")) {
      badgeClass = "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }

    return (
      <div className="flex flex-col gap-1 w-full text-left">
        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase border tracking-tight w-fit ${badgeClass}`}>
          <span>{emoji}</span>
          <span>{badgeText}</span>
        </span>
        <span className={`${size === 'xs' ? 'text-[11px] text-zinc-300' : 'text-sm text-zinc-100'} font-medium leading-relaxed`}>{rest}</span>
      </div>
    );
  }
  
  return <span className={`${size === 'xs' ? 'text-[11px] text-zinc-300' : 'text-sm text-zinc-100'} leading-relaxed text-left block`}>{clue}</span>;
};

interface CategoryQuestion {
  id: string;
  ar: string;
  en: string;
  types: string[];
}

const categoryQuestionsList: CategoryQuestion[] = [
  {
    id: 'disease',
    ar: 'هل هذا المصطلح مرض؟',
    en: 'Is this term a disease?',
    types: ['Disease', 'Syndrome']
  },
  {
    id: 'drug',
    ar: 'هل هذا المصطلح دواء؟',
    en: 'Is this term a drug?',
    types: ['Pharma']
  },
  {
    id: 'organ',
    ar: 'هل هذا المصطلح عضو بشري؟',
    en: 'Is this term a human organ?',
    types: ['Organ', 'Tissue', 'Cell', 'Component']
  },
  {
    id: 'bacteria',
    ar: 'هل هذا المصطلح بكتيريا؟',
    en: 'Is this term a bacterium?',
    types: []
  },
  {
    id: 'equipment',
    ar: 'هل هذا المصطلح جهاز؟',
    en: 'Is this term a device/equipment?',
    types: ['Equipment', 'Technique']
  },
  {
    id: 'parasite',
    ar: 'هل هذا المصطلح طفيلي؟',
    en: 'Is this term a parasite?',
    types: ['Parasite']
  }
];

const getDynamicQuestions = (secretWord: MedicalWord | null) => {
  const baseQuestions = [
    { ar: "هل يندرج هذا المرض/المصطلح تحت تخصص الباطنة؟", en: "Is this condition studied under Internal Medicine?" },
    { ar: "في أي جهاز (Organ System) يقع أو يؤثر هذا العضو/المصطلح؟", en: "Which organ system does this involve or affect?" },
    { ar: "هل يعتبر هذا المرض مناعياً تلقائياً (Autoimmune)؟", en: "Is this an autoimmune condition?" },
    { ar: "هل هذا الشيء يؤثر بشكل مباشر على الوجه أو المظهر الخارجي؟", en: "Does it affect the face or look directly?" },
    { ar: "هل هو متلازمة (Syndrome) أم مرض حاد؟", en: "Is it a custom syndrome or an acute disease?" },
    { ar: "هل يفرز هذا العضو أو يعالج هرمونات معينة؟", en: "Does this organ secrete or process specific hormones?" },
    { ar: "هل يستدعي هذا المرض تدخلاً جراحياً عاجلاً؟", en: "Does this disease require immediate surgical intervention?" },
    { ar: "هل يتم تشخيصه عادةً عن طريق الأشعة أم التحاليل المخبرية؟", en: "Is it usually diagnosed via imaging or lab tests?" },
    { ar: "هل هذا الشيء مجهري ولا يُرى بالعين المجردة؟", en: "Is this entity microscopic and invisible to the naked eye?" },
    { ar: "هل يرتبط هذا المصطلح بأعراض عصبية أو حركية؟", en: "Is this term associated with neurological or motor symptoms?" },
    { ar: "هل يتطلب علاج هذا المصطلح أسلوب حياة خاص أو حمية غذائية معينة؟", en: "Does treating this require a specific lifestyle or diet?" }
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
      if (secretWord.type === 'Parasite' && cat.id === 'bacteria') return false;
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

export const MedicalCupView: React.FC<Props> = ({ language, onSetView, onGoBack, appUser, onLogin, onPhaseChange }) => {
  const [phase, setPhase] = useState<GamePhase>('ENTRY');
  const [playerCount, setPlayerCount] = useState<number>(1);
  const [languageState, setLanguageState] = useState<Language>(language);

  useEffect(() => {
    if (onPhaseChange) {
      onPhaseChange(phase);
    }
  }, [phase, onPhaseChange]);

  const clinicalSpecialties = [
    { id: 'Internal Medicine', nameEn: 'Internal Medicine', nameAr: 'الباطنية العامة' },
    { id: 'Cardiology', nameEn: 'Cardiology', nameAr: 'أمراض القلب' },
    { id: 'Neurology', nameEn: 'Neurology', nameAr: 'أمراض الأعصاب' },
    { id: 'Pediatrics', nameEn: 'Pediatrics', nameAr: 'طب الأطفال' },
    { id: 'General Surgery', nameEn: 'General Surgery', nameAr: 'الجراحة العامة' },
    { id: 'Pharmacology', nameEn: 'Pharmacology', nameAr: 'علم الأدوية' },
    { id: 'Emergency Medicine', nameEn: 'Emergency Medicine', nameAr: 'طب الطوارئ' },
    { id: 'Infectious Diseases', nameEn: 'Infectious Diseases', nameAr: 'الأمراض المعدية' },
    { id: 'Oncology', nameEn: 'Oncology', nameAr: 'الأورام' },
    { id: 'Hematology', nameEn: 'Hematology', nameAr: 'أمراض الدم' },
    { id: 'Gastroenterology', nameEn: 'Gastroenterology', nameAr: 'الجهاز الهضمي' },
    { id: 'Pulmonology', nameEn: 'Pulmonology', nameAr: 'الأمراض الصدرية' },
    { id: 'Endocrinology', nameEn: 'Endocrinology', nameAr: 'الغدد الصماء' },
    { id: 'Rheumatology', nameEn: 'Rheumatology', nameAr: 'الروماتيزم' },
    { id: 'Dermatology', nameEn: 'Dermatology', nameAr: 'الجلدية' },
    { id: 'Obstetrics and Gynecology', nameEn: 'Obstetrics and Gynecology', nameAr: 'النساء والتوليد' },
    { id: 'Urology', nameEn: 'Urology', nameAr: 'المسالك البولية' },
    { id: 'Psychiatry', nameEn: 'Psychiatry', nameAr: 'الطب النفسي' },
    { id: 'Ophthalmology', nameEn: 'Ophthalmology', nameAr: 'الرمد والعيون' },
    { id: 'Orthopedics', nameEn: 'Orthopedics', nameAr: 'العظام' },
    { id: 'Anaesthesia', nameEn: 'Anaesthesia', nameAr: 'التخدير' },
    { id: 'Vascular Surgery', nameEn: 'Vascular Surgery', nameAr: 'جراحة الأوعية الدموية' }
  ];

  const academicSpecialties = [
    { id: 'Anatomy', nameEn: 'Anatomy', nameAr: 'التشريح' },
    { id: 'Physiology', nameEn: 'Physiology', nameAr: 'علم وظائف الأعضاء' },
    { id: 'Biochemistry', nameEn: 'Biochemistry', nameAr: 'الكيمياء الحيوية' },
    { id: 'Histology', nameEn: 'Histology', nameAr: 'علم الأنسجة' },
    { id: 'Microbiology', nameEn: 'Microbiology', nameAr: 'علم الأحياء الدقيقة' },
    { id: 'Parasitology', nameEn: 'Parasitology', nameAr: 'علم الطفيليات' },
    { id: 'Genetics', nameEn: 'Genetics', nameAr: 'علم الوراثة' },
    { id: 'Immunology', nameEn: 'Immunology', nameAr: 'علم المناعة' },
    { id: 'Pathology', nameEn: 'Pathology', nameAr: 'علم الأمراض' }
  ];

  // 1 Player (Single Player) State
  const [singleName, setSingleName] = useState('');
  const [singleSpecialty, setSingleSpecialty] = useState('All');
  const [singleDifficulty, setSingleDifficulty] = useState('All');
  const [singleGuessingDifficulty, setSingleGuessingDifficulty] = useState('All');
  const [singleWord, setSingleWord] = useState<MedicalWord | null>(null);
  const [unlockedHints, setUnlockedHints] = useState<number>(1);
  const [unlockedHintsMulti, setUnlockedHintsMulti] = useState<number>(5);
  const [singleGuess, setSingleGuess] = useState('');
  const [singleScore, setSingleScore] = useState(0);
  const [singleGameEnded, setSingleGameEnded] = useState(false);
  const [singleGameOverMsg, setSingleGameOverMsg] = useState('');

  // Advanced Category Filter States
  const [singleAdvancedFilter, setSingleAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule: 'GIT',
    subjectModules: {}
  });
  const [multiAdvancedFilter, setMultiAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule: 'GIT',
    subjectModules: {}
  });
  const [isAdvancedModalOpen, setIsAdvancedModalOpen] = useState(false);
  const [editingFilterType, setEditingFilterType] = useState<'single' | 'multi' | null>(null);
  const [tempAdvancedFilter, setTempAdvancedFilter] = useState<AdvancedFilterState>({
    enabled: false,
    subjects: [],
    moduleFilterEnabled: false,
    selectedModule: 'GIT',
    subjectModules: {}
  });
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showOnlineModeHelp, setShowOnlineModeHelp] = useState(false);

  // 2+ Players Shared Options
  const [isOnline, setIsOnline] = useState(false); // Online vs Offline
  const [isCreatingRoom, setIsCreatingRoom] = useState<boolean | null>(null); // Null, true = create, false = join
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [currentPlayerName, setCurrentPlayerName] = useState('');
  const [multiSpecialty, setMultiSpecialty] = useState('All');
  const [multiDifficulty, setMultiDifficulty] = useState('All');
  const [multiGuessingDifficulty, setMultiGuessingDifficulty] = useState('All');
  const [imposterCount, setImposterCount] = useState(1);
  const [imposterRevealsMode, setImposterRevealsMode] = useState<'IMPOSTER' | 'RELATED_WORD'>('RELATED_WORD');

  // Offline Multi list
  const [offlinePlayerNames, setOfflinePlayerNames] = useState<string[]>([]);
  const [offlinePlayerAvatars, setOfflinePlayerAvatars] = useState<number[]>([]);

  // Active Gameplay lists
  const [activePlayers, setActivePlayers] = useState<Player[]>([]);
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

  // Modal / Toggles
  const [showQuestionExamples, setShowQuestionExamples] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Custom Local Voting and Questioning States
  const [questioningCycle, setQuestioningCycle] = useState<{
    askerId: string;
    askerName: string;
    targetId: string;
    targetName: string;
    completed: boolean;
  }[]>([]);
  const [localVotingVotes, setLocalVotingVotes] = useState<Record<string, string[]>>({});
  const [localVoterId, setLocalVoterId] = useState<string | null>(null);
  const [completedVoters, setCompletedVoters] = useState<string[]>([]);
  const [isLocalVotingActive, setIsLocalVotingActive] = useState<boolean>(false);
  const [showLocalVoterTargetSelection, setShowLocalVoterTargetSelection] = useState<boolean>(false);
  const [votedSuspectIds, setVotedSuspectIds] = useState<string[]>([]);

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

  // Load saved inputs and filters from localStorage (cache) on mount
  useEffect(() => {
    try {
      const savedSingleName = localStorage.getItem('medical_cup_single_name');
      if (savedSingleName) setSingleName(savedSingleName);

      const savedCurrentPlayerName = localStorage.getItem('medical_cup_current_player_name');
      if (savedCurrentPlayerName) setCurrentPlayerName(savedCurrentPlayerName);

      const savedOfflinePlayerNames = localStorage.getItem('medical_cup_offline_player_names');
      if (savedOfflinePlayerNames) {
        const parsed = JSON.parse(savedOfflinePlayerNames);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOfflinePlayerNames(parsed);
        }
      }

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
        if (parsed && typeof parsed === 'object') setSingleAdvancedFilter(parsed);
      }

      const savedMultiAdvanced = localStorage.getItem('medical_cup_multi_advanced_filter');
      if (savedMultiAdvanced) {
        const parsed = JSON.parse(savedMultiAdvanced);
        if (parsed && typeof parsed === 'object') setMultiAdvancedFilter(parsed);
      }

      const savedImposterHistory = localStorage.getItem('medical_cup_imposter_history');
      if (savedImposterHistory) {
        const parsed = JSON.parse(savedImposterHistory);
        if (parsed && typeof parsed === 'object') setImposterHistory(parsed);
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

  const generateRoomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const getRelatedWord = (baseWord: MedicalWord): MedicalWord => {
    // Stage 1: Same difficulty AND same guessingDifficulty, but DIFFERENT type and NOT necessarily sharing subjects
    // This makes their memory recall, suspicion level, and overall difficulty perfectly identical, 
    // while preventing the easy "category/subject hack" (e.g. if one gets a nerve, the other gets a nerve).
    let pool = medicalWords.filter(w =>
      w.id !== baseWord.id &&
      w.difficulty === baseWord.difficulty &&
      w.guessingDifficulty === baseWord.guessingDifficulty &&
      w.type !== baseWord.type
    );

    // Stage 2: Same difficulty and same guessingDifficulty (allows same type if no different type exists)
    if (pool.length === 0) {
      pool = medicalWords.filter(w =>
        w.id !== baseWord.id &&
        w.difficulty === baseWord.difficulty &&
        w.guessingDifficulty === baseWord.guessingDifficulty
      );
    }

    // Stage 3: Same difficulty and different type
    if (pool.length === 0) {
      pool = medicalWords.filter(w =>
        w.id !== baseWord.id &&
        w.difficulty === baseWord.difficulty &&
        w.type !== baseWord.type
      );
    }

    // Stage 4: Just same difficulty
    if (pool.length === 0) {
      pool = medicalWords.filter(w =>
        w.id !== baseWord.id &&
        w.difficulty === baseWord.difficulty
      );
    }

    // Stage 5: Fallback to different type (any difficulty)
    if (pool.length === 0) {
      pool = medicalWords.filter(w =>
        w.id !== baseWord.id &&
        w.type !== baseWord.type
      );
    }

    // Stage 6: Absolute fallback (any other word)
    if (pool.length === 0) {
      pool = medicalWords.filter(w => w.id !== baseWord.id);
    }

    return pool[Math.floor(Math.random() * pool.length)];
  };

  const startSingleGame = () => {
    if (!singleName.trim()) {
      setSingleName(languageState === 'Arabic' ? 'طبيب' : 'Doctor');
    }
    const filtered = medicalWords.filter(w => {
      // 1. Specialty Filter (Advanced or Simple)
      if (singleAdvancedFilter.enabled) {
        if (!checkAdvancedFilterWord(w, singleAdvancedFilter)) return false;
      } else if (singleSpecialty !== 'All') {
        const hasSpec = w.subjects.includes(singleSpecialty) || w.type === singleSpecialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (singleDifficulty !== 'All') {
        if (w.difficulty !== Number(singleDifficulty)) return false;
      }
      // 3. Guessing Difficulty Filter
      if (singleGuessingDifficulty !== 'All') {
        if (w.guessingDifficulty !== Number(singleGuessingDifficulty)) return false;
      }
      return true;
    });

    const selected = filtered.length > 0 
      ? filtered[Math.floor(Math.random() * filtered.length)] 
      : medicalWords[Math.floor(Math.random() * medicalWords.length)];
    
    setSingleWord(selected);
    setUnlockedHints(1);
    setSingleGuess('');
    setSingleGameEnded(false);
    setPhase('SINGLE_PLAYING');
  };

  const normalizeText = (text: string) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[\u064B-\u065F]/g, '') // remove Arabic diacritics
      .replace(/\s+/g, ' ') // collapse multi-spaces
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
      
      // 3. Match without the 'ال' (Al-) article
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
    if (!singleWord) return;
    const isCorrect = word.id === singleWord.id;
    let gained = 0;
    if (isCorrect) {
      gained = Math.max(10, 60 - unlockedHints * 10);
      setSingleScore(prev => prev + gained);
      setSingleGameOverMsg(
        languageState === 'Arabic' 
          ? `إجابة صحيحة ممتازة! لقد كشفت المصطلح من التلميح رقم (${unlockedHints}) وحصلت على ${gained} نقطة.` 
          : `Excellent correct answer! You revealed the term from hint #${unlockedHints} and earned ${gained} points.`
      );
    } else {
      setSingleGameOverMsg(
        languageState === 'Arabic' 
          ? `إجابة غير دقيقة! المصطلح الصحيح كان: "${singleWord.word.English}".` 
          : `Incorrect guess! The correct term was: "${singleWord.word.English}".`
      );
    }
    setSingleGameEnded(true);
    setSearchQuery('');
  };

  const startOfflineMultiGame = () => {
    if (offlinePlayerNames.length < playerCount) {
      alert(
        languageState === 'Arabic' 
          ? `يرجى إدخال أسماء جميع اللاعبين الـ ${playerCount} لتبدأ الجولة!` 
          : `Please fill names for all ${playerCount} players to start!`
      );
      return;
    }

    const filtered = medicalWords.filter(w => {
      // 1. Specialty Filter (Advanced or Simple)
      if (multiAdvancedFilter.enabled) {
        if (!checkAdvancedFilterWord(w, multiAdvancedFilter)) return false;
      } else if (multiSpecialty !== 'All') {
        const hasSpec = w.subjects.includes(multiSpecialty) || w.type === multiSpecialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (multiDifficulty !== 'All') {
        if (w.difficulty !== Number(multiDifficulty)) return false;
      }
      // 3. Guessing Difficulty Filter
      if (multiGuessingDifficulty !== 'All') {
        if (w.guessingDifficulty !== Number(multiGuessingDifficulty)) return false;
      }
      return true;
    });
    const chosenWord = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : medicalWords[Math.floor(Math.random() * medicalWords.length)];
    setSecretWord(chosenWord);

    const secondaryWord = getRelatedWord(chosenWord);
    setImposterAssignedWord(secondaryWord);

    const updated: Player[] = offlinePlayerNames.map((name, idx) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      score: 0,
      role: 'NORMAL',
      assignedWordId: chosenWord.id,
      avatarId: offlinePlayerAvatars[idx] !== undefined ? offlinePlayerAvatars[idx] : (idx % 10)
    }));

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

      // Select the first 'actualImposterCount' players
      const chosenImposters = shuffled.slice(0, actualImposterCount);

      // Update roles and assigned words
      chosenImposters.forEach(item => {
        const idx = item.index;
        updated[idx].role = 'IMPOSTER';
        updated[idx].assignedWordId = imposterRevealsMode === 'RELATED_WORD' ? secondaryWord.id : 'IMPOSTER';
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
      for (let i = 0; i < cyclePlayers.length; i++) {
        const asker = cyclePlayers[i];
        const target = cyclePlayers[(i + 1) % cyclePlayers.length];
        cycle.push({
          askerId: asker.id,
          askerName: asker.name,
          targetId: target.id,
          targetName: target.name,
          completed: false
        });
      }
      setQuestioningCycle(cycle);
    } else {
      if (playerCount === 2) {
        updated[0].assignedWordId = chosenWord.id;
        updated[1].assignedWordId = secondaryWord.id;
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

  // Firestore Real-time Multi Code
  const createOnlineRoom = async () => {
    if (!currentPlayerName.trim()) {
      alert(languageState === 'Arabic' ? 'يرجى إدخال اسمك أولاً!' : 'Please enter your name first!');
      return;
    }
    setOnlineActionLoading(true);
    try {
      const code = generateRoomCode();
      const pid = Math.random().toString(36).substr(2, 9);
      setLocalPlayerId(pid);
      setRoomId(code);

      const roomRef = doc(db, 'rooms', code);
      const initialData = {
        id: code,
        hostId: pid,
        status: 'LOBBY',
        maxPlayers: playerCount < 2 ? 2 : playerCount,
        specialty: multiSpecialty,
        advancedFilter: multiAdvancedFilter,
        difficulty: multiDifficulty,
        guessingDifficulty: multiGuessingDifficulty,
        imposterCount: imposterCount,
        imposterRevealsMode: imposterRevealsMode,
        imposterHistory: {},
        players: [
          { id: pid, name: currentPlayerName, score: 0, role: 'NORMAL', assignedWordId: '' }
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
      console.error("Firestore create room error:", error);
      alert(languageState === 'Arabic' 
        ? `عذراً، فشل إنشاء الغرفة. يرجى التحقق من اتصالك بالإنترنت. التفاصيل: ${error.message || error}` 
        : `Failed to create room. Please check your internet. Details: ${error.message || error}`);
    } finally {
      setOnlineActionLoading(false);
    }
  };

  const joinOnlineRoom = async () => {
    if (!currentPlayerName.trim()) {
      alert(languageState === 'Arabic' ? 'يرجى إدخال اسمك أولاً!' : 'Please enter your name first!');
      return;
    }
    const code = roomCodeInput.trim().toUpperCase();
    if (code.length !== 6) {
      alert(languageState === 'Arabic' ? 'رمز الغرفة غير صحيح!' : 'Invalid room code format!');
      return;
    }

    setOnlineActionLoading(true);
    try {
      const roomRef = doc(db, 'rooms', code);
      const snap = await getDoc(roomRef);
      if (!snap.exists()) {
        alert(languageState === 'Arabic' ? 'هذه الغرفة غير موجودة!' : 'Room does not exist!');
        setOnlineActionLoading(false);
        return;
      }

      const data = snap.data();
      if (data.status !== 'LOBBY') {
        alert(languageState === 'Arabic' ? 'بدأت اللعبة بالفعل داخل هذه الغرفة!' : 'Game already started in this room!');
        setOnlineActionLoading(false);
        return;
      }
      if (data.players.length >= data.maxPlayers) {
        alert(languageState === 'Arabic' ? 'الغرفة ممتلئة بالفعل!' : 'Room is already full!');
        setOnlineActionLoading(false);
        return;
      }

      const pid = Math.random().toString(36).substr(2, 9);
      setLocalPlayerId(pid);
      setRoomId(code);

      const updatedPlayers = [...data.players, { id: pid, name: currentPlayerName, score: 0, role: 'NORMAL', assignedWordId: '' }];
      await updateDoc(roomRef, { players: updatedPlayers });

      listenToRoom(code, pid);
      setPhase('ONLINE_LOBBY');
    } catch (error: any) {
      console.error("Firestore join room error:", error);
      alert(languageState === 'Arabic' 
        ? `عذراً، فشل الانضمام للغرفة. التفاصيل: ${error.message || error}` 
        : `Failed to join room. Details: ${error.message || error}`);
    } finally {
      setOnlineActionLoading(false);
    }
  };

  const startOnlineMatch = async () => {
    if (!onlineRoomState) return;

    const filtered = medicalWords.filter(w => {
      // 1. Specialty Filter (Advanced or Simple)
      if (onlineRoomState.advancedFilter && onlineRoomState.advancedFilter.enabled) {
        const adv = onlineRoomState.advancedFilter;
        if (!checkAdvancedFilterWord(w, adv)) return false;
      } else if (onlineRoomState.specialty !== 'All') {
        const hasSpec = w.subjects.includes(onlineRoomState.specialty) || w.type === onlineRoomState.specialty;
        if (!hasSpec) return false;
      }
      // 2. Difficulty Filter
      if (onlineRoomState.difficulty && onlineRoomState.difficulty !== 'All') {
        if (w.difficulty !== Number(onlineRoomState.difficulty)) return false;
      }
      // 3. Guessing Difficulty Filter
      if (onlineRoomState.guessingDifficulty && onlineRoomState.guessingDifficulty !== 'All') {
        if (w.guessingDifficulty !== Number(onlineRoomState.guessingDifficulty)) return false;
      }
      return true;
    });
    const chosenWord = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : medicalWords[Math.floor(Math.random() * medicalWords.length)];
    const secondaryWord = getRelatedWord(chosenWord);

    const members = [...onlineRoomState.players];
    const nPlayers = members.length;

    if (nPlayers === 2) {
      members[0].assignedWordId = chosenWord.id;
      members[0].role = 'NORMAL';
      members[1].assignedWordId = secondaryWord.id;
      members[1].role = 'NORMAL';
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

      // Select the first 'targetImposterCount' members
      const chosenImposters = shuffled.slice(0, targetImposterCount);

      // Reset all members to NORMAL/chosenWord
      members.forEach((m: any) => {
        m.role = 'NORMAL';
        m.assignedWordId = chosenWord.id;
      });

      // Assign IMPOSTER to selected members
      chosenImposters.forEach(item => {
        const idx = item.index;
        members[idx].role = 'IMPOSTER';
        members[idx].assignedWordId = onlineRoomState.imposterRevealsMode === 'RELATED_WORD' ? secondaryWord.id : 'IMPOSTER';
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

      const roomRef = doc(db, 'rooms', roomId);
      await updateDoc(roomRef, {
        status: 'PLAYING',
        players: members,
        secretWord: chosenWord,
        imposterAssignedWord: secondaryWord,
        imposterHistory: nextHistory,
        votes: {},
        imposterGuessedWordId: null,
        twoPlayersGuessMatched: {}
      });
      return;
    }

    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
      status: 'PLAYING',
      players: members,
      secretWord: chosenWord,
      imposterAssignedWord: secondaryWord,
      votes: {},
      imposterGuessedWordId: null,
      twoPlayersGuessMatched: {}
    });
  };

  const listenToRoom = (code: string, pid: string) => {
    const roomRef = doc(db, 'rooms', code);
    const unsub = onSnapshot(roomRef, (snapshot) => {
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      setOnlineRoomState(data);

      if (data.players) {
        setActivePlayers(data.players);
      }
      if (data.secretWord) {
        setSecretWord(data.secretWord);
      }
      if (data.imposterAssignedWord) {
        setImposterAssignedWord(data.imposterAssignedWord);
      }

      if (data.status === 'PLAYING') {
        setPhase('ROLES_REVEAL');
      } else if (data.status === 'PLAYING_DISCUSSION') {
        setPhase('PLAY_DISCUSSION');
      } else if (data.status === 'VOTING') {
        setPhase('VOTING_PHASE');
      } else if (data.status === 'REVEALED') {
        setPhase('REVEAL_IMPOSTER');
      } else if (data.status === 'GUESSING') {
        setPhase('IMPOSTER_GUESS');
      } else if (data.status === 'SCOREBOARD') {
        setPhase('ROUND_RESULT');
      } else if (data.status === 'TWO_PLAYERS_GUESS') {
        setPhase('TWO_PLAYERS_DISCUSSION_GUESS');
      }
    });

    return () => unsub();
  };

  const handleOnlineVote = async (votedId: string) => {
    if (!onlineRoomState) return;
    const currentVotes = { ...onlineRoomState.votes, [localPlayerId]: votedId };
    const roomRef = doc(db, 'rooms', roomId);

    if (Object.keys(currentVotes).length === onlineRoomState.players.length) {
      const tallies: Record<string, number> = {};
      Object.values(currentVotes).forEach((id: any) => {
        tallies[id] = (tallies[id] || 0) + 1;
      });
      let maxVotes = 0;
      let votedOutId = '';
      Object.keys(tallies).forEach(id => {
        if (tallies[id] > maxVotes) {
          maxVotes = tallies[id];
          votedOutId = id;
        }
      });

      await updateDoc(roomRef, {
        votes: currentVotes,
        votedOutPlayerId: votedOutId,
        status: 'REVEALED'
      });
    } else {
      await updateDoc(roomRef, { votes: currentVotes });
    }
  };

  const submitOnlineTwoPlayersGuess = async (targetWordId: string) => {
    if (!onlineRoomState) return;
    const guesses = { ...onlineRoomState.twoPlayersGuessMatched, [localPlayerId]: targetWordId };
    const roomRef = doc(db, 'rooms', roomId);

    if (Object.keys(guesses).length === 2) {
      const members = [...onlineRoomState.players];
      const p1 = members[0];
      const p2 = members[1];

      const p1Correct = guesses[p1.id] === p2.assignedWordId;
      const p2Correct = guesses[p2.id] === p1.assignedWordId;

      p1.score += p1Correct ? 50 : 0;
      p2.score += p2Correct ? 50 : 0;

      await updateDoc(roomRef, {
        twoPlayersGuessMatched: guesses,
        players: members,
        status: 'SCOREBOARD'
      });
    } else {
      await updateDoc(roomRef, { twoPlayersGuessMatched: guesses });
    }
  };

  const submitOnlineImposterGuess = async (wordId: string) => {
    if (!onlineRoomState) return;
    const correctSecretId = onlineRoomState.secretWord.id;
    const isCorrect = wordId === correctSecretId;

    const members = [...onlineRoomState.players];
    const votedId = onlineRoomState.votedOutPlayerId;
    
    members.forEach(p => {
      if (p.role === 'IMPOSTER') {
        if (isCorrect) p.score += 50;
      } else {
        const theirVote = onlineRoomState.votes[p.id];
        const votedForMember = members.find(m => m.id === theirVote);
        if (votedForMember && votedForMember.role === 'IMPOSTER') {
          p.score += 50;
        }
      }
    });

    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
      players: members,
      imposterGuessedWordId: wordId,
      status: 'SCOREBOARD'
    });
  };

  const resetOnlineRound = async () => {
    if (!onlineRoomState) return;
    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
      status: 'LOBBY',
      votes: {},
      votedOutPlayerId: null,
      imposterGuessedWordId: null,
      twoPlayersGuessMatched: {}
    });
    setPhase('ONLINE_LOBBY');
  };

  // Offline Passing / Votes Tally
  const revealNextPlayerOffline = () => {
    setIsCardHidden(true);
    if (revealIndex < activePlayers.length - 1) {
      setRevealIndex(prev => prev + 1);
    } else {
      if (playerCount === 2) {
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
        tallies[votedId] = (tallies[votedId] || 0) + 1;
      });
      let maxVotes = 0;
      let votedId = '';
      Object.keys(tallies).forEach(id => {
        if (tallies[id] > maxVotes) {
          maxVotes = tallies[id];
          votedId = id;
        }
      });

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
      if (p.role === 'IMPOSTER') {
        if (isImposterCorrect) scoreAdd = 50;
      } else {
        // Find if this player voted for any of the actual imposters in the new localVotingVotes mapping (or fallback offlineVotes)
        const votedSuspectIdsForThisPlayer = localVotingVotes[p.id] || (offlineVotes[p.id] ? [offlineVotes[p.id]] : []);
        const hasVotedForImposter = votedSuspectIdsForThisPlayer.some(votedId => {
          const suspect = activePlayers.find(x => x.id === votedId);
          return suspect && suspect.role === 'IMPOSTER';
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
    startOfflineMultiGame();
  };

  const currentOfflinePlayer = activePlayers[revealIndex] || null;
  const currentVoter = activePlayers[voterIndex] || null;

  const getWordDetails = (id: string) => {
    return medicalWords.find(w => w.id === id) || null;
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-gradient-to-tr from-[#040d1a] via-[#0a1e36] to-[#0f355c] text-white rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] relative overflow-hidden font-sans select-none">
      {/* Premium ambient decorative glowing elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-sky-500/10 to-cyan-400/0 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-sky-950/15 rounded-full blur-[120px] pointer-events-none" />
      {/* Cyber Grid Sub-layer with diagonal lines from screenshot */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0" 
        style={{
          backgroundImage: 'repeating-linear-gradient(-60deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 18px)'
        }}
      />

      {/* Title Header Area */}
      {phase !== 'ENTRY' && (
        <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-zinc-400">
              {phase.includes('PLAYING') || phase.includes('REVEAL') || phase.includes('VOTE') || phase.includes('GUESS') ? (
                languageState === 'Arabic' ? 'الجولة شغال 🩺' : 'Active Round 🩺'
              ) : (
                ''
              )}
            </span>
          </div>
          
          <button 
            type="button"
            onClick={() => setShowExitConfirm(true)} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 text-[11px] font-bold text-zinc-300 hover:text-white hover:bg-zinc-850 transition-all duration-300"
          >
            <ArrowLeft size={12} className="opacity-70" />
            {languageState === 'Arabic' ? 'خروج' : 'Exit'}
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* PHASE: ENTRY */}
        {phase === 'ENTRY' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="text-center space-y-1.5 py-1.5">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-sky-300 shadow-inner">
                {languageState === 'Arabic' ? 'لعبة Imposter الطبية' : 'CLINICAL IMPOSTER GAME'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight uppercase">
                {languageState === 'Arabic' ? 'جاهز للتحدي يا دكتور؟' : 'Ready for the Challenge, Doctor?'}
              </h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-sm mx-auto">
                {languageState === 'Arabic' 
                  ? 'اختبر معلوماتك الطبية لوحدك أو اتحدى زملائك الدكاترة واعرف مين الـ Imposter المستخبي!' 
                  : 'Test your diagnostic skills either solo or challenge your medical peers to uncover the secret imposter!'}
              </p>
            </div>

            {/* Players count selector as premium bento container */}
            <div className="bg-black/30 p-4 sm:p-5 rounded-3xl border border-white/10 backdrop-blur-md space-y-3 shadow-2xl">
              <label className="text-[11px] uppercase font-bold tracking-widest text-white/70 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Users size={13} className="text-sky-400" />
                  {languageState === 'Arabic' ? 'اختار عدد اللعيبة' : 'Select Players Count'}
                </span>
                <span className="font-mono text-sky-300 text-xs font-bold bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                  {playerCount} {languageState === 'Arabic' ? 'دكاترة' : 'Doctors'}
                </span>
              </label>

              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setPlayerCount(num)}
                    className={`h-9 rounded-xl font-black transition-all text-center border text-xs flex items-center justify-center ${
                      playerCount === num 
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-white/30 shadow-[0_4px_12px_rgba(14,165,233,0.3)] scale-[1.05]' 
                        : 'bg-black/30 text-white/70 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (playerCount === 1) {
                  setPhase('SINGLE_SETUP');
                } else {
                  setPhase('MULTI_MODE_SELECT');
                }
              }}
              className="w-full py-4 bg-[#42a851] hover:bg-[#4eb65d] text-white active:scale-[0.98] rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{languageState === 'Arabic' ? 'التالي: تظبيط اللعبة' : 'Next: Set Up Match'}</span>
              <ChevronRight size={15} />
            </button>
          </motion.div>
        )}

        {/* PHASE: SINGLE_SETUP */}
        {phase === 'SINGLE_SETUP' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="text-center space-y-1.5">
              <div className="mx-auto w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Users size={16} />
              </div>
              <h3 className="text-lg font-black text-white">{languageState === 'Arabic' ? 'اللعب لوحدك (فردي)' : 'Single Player mode'}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto">
                {languageState === 'Arabic' ? 'هتاخد 5 تلميحات بالتدريج عشان تخمن المصطلح الطبي المستخبي.' : 'You will receive 5 progressive clues to guess the mystery medical term.'}
              </p>
            </div>

            <div className="space-y-4 bg-zinc-900/30 p-4 sm:p-5 rounded-xl border border-zinc-850/60 backdrop-blur-sm">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                    {languageState === 'Arabic' ? 'التخصص الطبي (إكلينيكال وأكاديمي)' : 'Specialty Filter (Clinical & Academic)'}
                  </label>
                  {singleAdvancedFilter.enabled && (
                    <span className="text-[9px] bg-sky-600/20 text-sky-400 px-2 py-0.5 rounded-full font-bold border border-sky-500/30 animate-pulse">
                      {languageState === 'Arabic' ? 'فلتر متقدم شغال' : 'Advanced Active'}
                    </span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  <div className="relative flex-1">
                    <select
                      value={singleAdvancedFilter.enabled ? "Advanced" : singleSpecialty}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === 'Advanced') {
                          setEditingFilterType('single');
                          setTempAdvancedFilter({...singleAdvancedFilter});
                          setIsAdvancedModalOpen(true);
                        } else {
                          setSingleSpecialty(val);
                          setSingleAdvancedFilter(prev => ({ ...prev, enabled: false }));
                        }
                      }}
                      className="w-full appearance-none bg-zinc-900 border border-zinc-800 rounded-lg pl-3 pr-10 py-2.5 text-xs font-semibold text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all cursor-pointer"
                    >
                      {singleAdvancedFilter.enabled && (
                        <option value="Advanced">
                          {languageState === 'Arabic' 
                            ? `فلتر مخصص (${singleAdvancedFilter.subjects.length} تخصص)` 
                            : `Custom Filter (${singleAdvancedFilter.subjects.length} specs)`}
                        </option>
                      )}
                      <option value="All">{languageState === 'Arabic' ? 'كل الفروع والعلوم الأساسية' : 'All Medicine & Basic Sciences'}</option>
                      <optgroup label={languageState === 'Arabic' ? 'تخصصات إكلينيكية (Clinical)' : 'Clinical Specialties'}>
                        {clinicalSpecialties.map(spec => (
                          <option key={spec.id} value={spec.id}>
                            {spec.nameEn}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={languageState === 'Arabic' ? 'تخصصات أكاديمية (Academic)' : 'Academic Specialties'}>
                        {academicSpecialties.map(spec => (
                          <option key={spec.id} value={spec.id}>
                            {spec.nameEn}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingFilterType('single');
                      setTempAdvancedFilter({...singleAdvancedFilter});
                      setIsAdvancedModalOpen(true);
                    }}
                    className={`px-2.5 rounded-lg border transition-all flex items-center justify-center ${
                      singleAdvancedFilter.enabled 
                        ? 'bg-sky-600/20 border-sky-500 text-sky-400 hover:bg-sky-600/30' 
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                    title={languageState === 'Arabic' ? 'الإعدادات المتقدمة للتخصصات' : 'Advanced Specialty Settings'}
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Difficulty Select */}
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                  {languageState === 'Arabic' ? 'صعوبة الكلمة الطبية' : 'Clinical/Scientific Difficulty'}
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'All', labelEn: 'All', labelAr: 'الكل' },
                    { id: '1', labelEn: 'Easy', labelAr: 'سهل' },
                    { id: '2', labelEn: 'Medium', labelAr: 'متوسط' },
                    { id: '3', labelEn: 'Hard', labelAr: 'صعب' }
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setSingleDifficulty(level.id)}
                      className={`py-1.5 rounded-lg border text-[11px] font-bold transition-all ${
                        singleDifficulty === level.id 
                          ? 'border-sky-600 bg-sky-600/10 text-white shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-900/40'
                      }`}
                    >
                      {languageState === 'Arabic' ? level.labelAr : level.labelEn}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                  {languageState === 'Arabic' ? 'صعوبة تخمين الـ Imposter' : 'Guessing Difficulty (for Imposters)'}
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'All', labelEn: 'All', labelAr: 'الكل' },
                    { id: '1', labelEn: 'Easy', labelAr: 'سهل' },
                    { id: '2', labelEn: 'Medium', labelAr: 'متوسط' },
                    { id: '3', labelEn: 'Hard', labelAr: 'صعب' }
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setSingleGuessingDifficulty(level.id)}
                      className={`py-1.5 rounded-lg border text-[11px] font-bold transition-all ${
                        singleGuessingDifficulty === level.id 
                          ? 'border-teal-600 bg-teal-600/10 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]' 
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-900/40'
                      }`}
                    >
                      {languageState === 'Arabic' ? level.labelAr : level.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={startSingleGame}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-lg text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-1.5"
            >
              <Play size={15} />
              {languageState === 'Arabic' ? 'العب دلوقتي' : 'Start Solo Round'}
            </button>
          </motion.div>
        )}

        {/* PHASE: SINGLE_PLAYING */}
        {phase === 'SINGLE_PLAYING' && singleWord && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="space-y-3 max-w-md mx-auto text-center"
          >
            <div className="flex justify-between items-center bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800">
              <div className="text-left">
                <p className="text-zinc-500 text-[9px] font-bold uppercase">{languageState === 'Arabic' ? 'اللاعب' : 'PLAYER'}</p>
                <p className="text-white font-black text-xs">{singleName}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-500 text-[9px] font-bold uppercase">{languageState === 'Arabic' ? 'مجموع النقاط' : 'SCORE'}</p>
                <p className="text-sky-400 font-extrabold text-sm">{singleScore}</p>
              </div>
            </div>

            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
              <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-wider block w-max mx-auto">
                {languageState === 'Arabic' ? `التلميحات (${unlockedHints} من 5)` : `Clues unlocked (${unlockedHints} of 5)`}
              </span>

              {/* Display clues */}
              <div className="space-y-2 text-left py-2">
                {getCluesForWord(singleWord.id, singleWord, 'English').slice(0, unlockedHints).map((clue, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={idx} 
                    className="p-2.5 bg-zinc-950 border-l-4 border-sky-500 rounded-lg text-xs font-semibold text-zinc-100 flex items-start gap-2.5 shadow-md"
                  >
                    <span className="font-extrabold text-sky-400 self-start mt-0.5">{idx + 1}.</span>
                    <div className="flex-1 leading-relaxed">{renderClueText(clue, 'xs')}</div>
                  </motion.div>
                ))}
              </div>

              {!singleGameEnded && unlockedHints < 5 && (
                <button
                  onClick={() => setUnlockedHints(prev => prev + 1)}
                  className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-bold text-zinc-300 rounded-lg transition-all"
                >
                  {languageState === 'Arabic' ? 'افتح تلميح كمان' : 'Unlock Next Clue'}
                </button>
              )}
            </div>

            {/* Guess section */}
            {!singleGameEnded ? (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-zinc-500 font-bold block text-left">
                    {languageState === 'Arabic' ? 'ابحث عشان تخمن الكلمة الطبية' : 'Search to Guess the Medical Term'}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-2.5 text-zinc-650" size={15} />
                    <input
                      type="text"
                      placeholder={languageState === 'Arabic' ? 'اكتب اسم المرض أو العضو هنا...' : 'Type name of condition...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-sky-600 rounded-lg pl-9 pr-3 py-2 placeholder:text-zinc-700 text-xs outline-none transition-all font-bold"
                    />
                  </div>

                  {/* Suggestions */}
                  {searchQuery && (
                    <div className="space-y-0.5 bg-zinc-950/80 border border-zinc-800 rounded-lg overflow-hidden max-h-[140px] overflow-y-auto custom-scrollbar">
                      {filteredSearchWords.map((word) => (
                        <button
                          key={word.id}
                          onClick={() => submitSingleGuess(word)}
                          className="w-full text-left px-3 py-2 hover:bg-sky-600/15 border-b border-zinc-900 text-xs font-bold flex items-center justify-between text-white"
                        >
                          <span>{word.word.English}</span>
                          <span className="text-[9px] text-zinc-600 uppercase font-mono">{word.type}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSingleGameOverMsg(
                      languageState === 'Arabic' 
                        ? `كشفت المصطلح! الحل هو: "${singleWord.word.English}".` 
                        : `Revealed! The term was: "${singleWord.word.English}".`
                    );
                    setSingleGameEnded(true);
                  }}
                  className="text-[11px] text-rose-500 hover:underline font-bold"
                >
                  {languageState === 'Arabic' ? 'استسلام واعرف الحل' : 'Give up & reveal answer'}
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ scale: 0.95 }} 
                animate={{ scale: 1 }} 
                className="p-4 bg-zinc-900/60 border border-sky-500/20 rounded-xl text-center space-y-3"
              >
                <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto text-sky-400">
                  <Trophy size={20} />
                </div>
                <p className="text-xs font-bold text-zinc-200 leading-relaxed">{singleGameOverMsg}</p>
                
                <div className="flex gap-3 max-w-xs mx-auto pt-1">
                  <button
                    onClick={startSingleGame}
                    className="flex-1 py-2 bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-black rounded-lg uppercase tracking-widest transition-all"
                  >
                    {languageState === 'Arabic' ? 'العب تاني' : 'Another Round'}
                  </button>
                  <button
                    onClick={() => setPhase('ENTRY')}
                    className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-750 text-white text-[11px] font-black rounded-lg uppercase tracking-widest transition-all"
                  >
                    {languageState === 'Arabic' ? 'الرئيسية' : 'Lobby'}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* PHASE: MULTI_MODE_SELECT */}
        {phase === 'MULTI_MODE_SELECT' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4 max-w-md mx-auto text-center"
          >
            <div className="text-center space-y-1.5">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest text-sky-300">
                {languageState === 'Arabic' ? `${playerCount} دكاترة مستنيين` : `${playerCount} DOCTORS IN LOBBY`}
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight uppercase">
                {languageState === 'Arabic' ? 'عايز تلعب إزاي؟' : 'How do you want to play?'}
              </h3>
              <p className="text-white/80 text-xs max-w-xs mx-auto leading-relaxed">
                {languageState === 'Arabic' 
                  ? 'اختار طريقة اللعب المناسبة ليك ولصحابك عشان تبدأوا.' 
                  : 'Choose the ideal mode for your session to begin the diagnostic challenge.'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-1">
              <button
                onClick={() => {
                  setIsOnline(false);
                  
                  // Initialize names with existing state or cached names, matching playerCount size
                  const initialNames = Array(playerCount).fill('');
                  let savedNames: string[] = [];
                  try {
                    const saved = localStorage.getItem('medical_cup_offline_player_names');
                    if (saved) {
                      const parsed = JSON.parse(saved);
                      if (Array.isArray(parsed)) {
                        savedNames = parsed;
                      }
                    }
                  } catch (e) {
                    console.error('Error loading saved offline names:', e);
                  }

                  // Use offlinePlayerNames state first, fallback to savedNames, fallback to empty
                  for (let i = 0; i < playerCount; i++) {
                    if (offlinePlayerNames[i]) {
                      initialNames[i] = offlinePlayerNames[i];
                    } else if (savedNames[i]) {
                      initialNames[i] = savedNames[i];
                    }
                  }

                  // Initialize avatars with existing state or cached avatars, matching playerCount size
                  const initialAvatars = Array(playerCount).fill(0).map((_, idx) => idx % 10);
                  let savedAvatars: number[] = [];
                  try {
                    const saved = localStorage.getItem('medical_cup_offline_player_avatars');
                    if (saved) {
                      const parsed = JSON.parse(saved);
                      if (Array.isArray(parsed)) {
                        savedAvatars = parsed;
                      }
                    }
                  } catch (e) {
                    console.error('Error loading saved offline avatars:', e);
                  }

                  for (let i = 0; i < playerCount; i++) {
                    if (offlinePlayerAvatars[i] !== undefined) {
                      initialAvatars[i] = offlinePlayerAvatars[i];
                    } else if (savedAvatars[i] !== undefined) {
                      initialAvatars[i] = savedAvatars[i];
                    }
                  }
                  
                  setOfflinePlayerNames(initialNames);
                  setOfflinePlayerAvatars(initialAvatars);
                  setPhase('MULTI_SETUP_OFFLINE');
                }}
                className="group p-5 bg-black/30 hover:bg-black/45 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-between backdrop-blur-md"
              >
                <div className="space-y-1 flex-1 text-start">
                  <h4 className="text-base font-black text-white group-hover:text-sky-300 transition-colors duration-200">
                    {languageState === 'Arabic' ? 'أوفلاين (جهاز واحد بالتناوب)' : 'Offline (One phone / Pass & Play)'}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {languageState === 'Arabic' 
                      ? 'العبوا مع بعض على نفس الجهاز بالتناوب.' 
                      : 'Play together sharing one device by taking turns.'}
                  </p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 text-sky-400 flex items-center justify-center transition-all duration-300 ml-3 shadow-md">
                  <Users size={20} />
                </div>
              </button>

              <div className="relative">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setIsOnline(true);
                    setPhase('MULTI_SETUP_ONLINE');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsOnline(true);
                      setPhase('MULTI_SETUP_ONLINE');
                    }
                  }}
                  className="w-full cursor-pointer group p-5 bg-black/30 hover:bg-black/45 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-between backdrop-blur-md text-start"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-black text-white group-hover:text-sky-300 transition-colors duration-200">
                        {languageState === 'Arabic' ? 'أونلاين (كل واحد من موبايله)' : 'Online (Separate Phones)'}
                      </h4>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowOnlineModeHelp(prev => !prev);
                        }}
                        className="p-1 rounded-md hover:bg-white/15 text-sky-300 hover:text-sky-200 transition-colors active:scale-90"
                        title={languageState === 'Arabic' ? 'شرح الأونلاين' : 'Online Mode Help'}
                      >
                        <HelpCircle size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {languageState === 'Arabic' 
                        ? 'كل واحد يلعب من موبايله في نفس الوقت على النت.' 
                        : 'Play using separate devices in real-time.'}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 text-sky-400 flex items-center justify-center transition-all duration-300 ml-3 shrink-0 shadow-md">
                    <Landmark size={20} />
                  </div>
                </div>

                <AnimatePresence>
                  {showOnlineModeHelp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="overflow-hidden text-start"
                    >
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-sky-300 text-[10px] sm:text-[11px] leading-relaxed space-y-1 shadow-inner">
                        <span className="font-bold block text-sky-200">
                          {languageState === 'Arabic' ? '💡 عن طريقة اللعب أونلاين:' : '💡 About Online Mode:'}
                        </span>
                        <p>
                          {languageState === 'Arabic' 
                            ? 'الاونلاين يمنحك اللعب بأجهزة متعددة (جهازين فأكثر)، ولكن يجب أن يكون هناك وسيلة محادثة (مثل اتصال صوتي أو جلوس في نفس المكان) مع بقية اللاعبين.' 
                            : 'Online mode allows you to play using separate devices (two or more), but there must be a way of communication (such as voice call or sitting in the same place) with the other players.'}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
        {/* PHASE: MULTI_SETUP_OFFLINE */}
        {phase === 'MULTI_SETUP_OFFLINE' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-4 max-w-md mx-auto relative z-10"
          >
            {/* Header section matching screenshot */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              {/* Left Button (Settings gear in Arabic, back arrow in English) */}
              {languageState === 'Arabic' ? (
                <button
                  type="button"
                  onClick={() => setPhase('MULTI_SETUP_OFFLINE_CONFIG')}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
                  title="الإعدادات المتقدمة"
                >
                  <Settings size={18} className="animate-spin-slow" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setPhase('ENTRY')}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
                  title="Back"
                >
                  <ArrowLeft size={16} />
                </button>
              )}

              {/* Title Header */}
              <h3 className="text-2xl font-black text-white tracking-tight uppercase select-none">
                {languageState === 'Arabic' ? 'اللاعبين' : 'Players'}
              </h3>

              {/* Right Button (Back arrow in Arabic, Settings gear in English) */}
              {languageState === 'Arabic' ? (
                <button
                  type="button"
                  onClick={() => setPhase('ENTRY')}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
                  title="رجوع"
                >
                  <ArrowLeft size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setPhase('MULTI_SETUP_OFFLINE_CONFIG')}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center shrink-0"
                  title="Advanced Settings"
                >
                  <Settings size={18} className="animate-spin-slow" />
                </button>
              )}
            </div>

            {/* List of Player cards */}
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 relative z-10 custom-scrollbar">
              {offlinePlayerNames.map((name, idx) => {
                const currentAvId = offlinePlayerAvatars[idx] !== undefined ? offlinePlayerAvatars[idx] : (idx % 10);
                const isPickerOpen = activeAvatarPickerIdx === idx;
                
                // Color palette mimicking screenshot's vibrant hues
                const cardColors = [
                  'bg-[#df4f97] hover:bg-[#eb5d9f] shadow-[0_4px_12px_rgba(223,79,151,0.2)]', // Rose Pink
                  'bg-[#2ba5df] hover:bg-[#3db3eb] shadow-[0_4px_12px_rgba(43,165,223,0.2)]', // Sky Blue
                  'bg-[#674575] hover:bg-[#785486] shadow-[0_4px_12px_rgba(103,69,117,0.2)]', // Plum Purple
                  'bg-emerald-600 hover:bg-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.2)]',
                  'bg-amber-600 hover:bg-amber-500 shadow-[0_4px_12px_rgba(245,158,11,0.2)]',
                  'bg-sky-600 hover:bg-sky-500 shadow-[0_4px_12px_rgba(14,165,233,0.2)]',
                  'bg-teal-600 hover:bg-teal-500 shadow-[0_4px_12px_rgba(13,148,136,0.2)]',
                ];
                const cardBg = cardColors[idx % cardColors.length];

                const deletePlayer = (idxToDelete: number) => {
                  if (offlinePlayerNames.length <= 2) {
                    alert(
                      languageState === 'Arabic' 
                        ? 'يجب أن يكون هناك طبيبان اثنين على الأقل لبدء الجولة!' 
                        : 'At least 2 doctors are required to play!'
                    );
                    return;
                  }
                  const newNames = offlinePlayerNames.filter((_, i) => i !== idxToDelete);
                  const newAvatars = offlinePlayerAvatars.filter((_, i) => i !== idxToDelete);
                  setOfflinePlayerNames(newNames);
                  setOfflinePlayerAvatars(newAvatars);
                  setPlayerCount(newNames.length);
                };

                return (
                  <div key={idx} className="space-y-2">
                    <div className={`flex items-center justify-between p-3.5 rounded-[1.5rem] transition-all duration-300 ${cardBg}`}>
                      {/* Left Side: X (Arabic) or Avatar (English) */}
                      {languageState === 'Arabic' ? (
                        <button
                          type="button"
                          onClick={() => deletePlayer(idx)}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                          title="حذف"
                        >
                          <X size={20} strokeWidth={2.5} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveAvatarPickerIdx(isPickerOpen ? null : idx)}
                          className="w-12 h-12 rounded-full border-2 border-white/95 bg-white/10 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center overflow-hidden shrink-0 transition-all"
                          title="Change Avatar"
                        >
                          <AnimalDoctorAvatar avatarId={currentAvId} size={42} />
                        </button>
                      )}

                      {/* Middle Side: Dynamic Text Input */}
                      <div className="flex-1 px-3">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            const updated = [...offlinePlayerNames];
                            updated[idx] = e.target.value;
                            setOfflinePlayerNames(updated);
                          }}
                          placeholder={languageState === 'Arabic' ? 'اسم اللاعب' : 'Player Name'}
                          className={`w-full bg-transparent border-none text-white font-black text-base sm:text-lg outline-none placeholder-white/50 transition-all ${
                            languageState === 'Arabic' ? 'text-right' : 'text-left'
                          }`}
                        />
                      </div>

                      {/* Right Side: Avatar (Arabic) or X (English) */}
                      {languageState === 'Arabic' ? (
                        <button
                          type="button"
                          onClick={() => setActiveAvatarPickerIdx(isPickerOpen ? null : idx)}
                          className="w-12 h-12 rounded-full border-2 border-white/95 bg-white/10 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center overflow-hidden shrink-0 transition-all"
                          title="اضغط لتغيير الأفاتار"
                        >
                          <AnimalDoctorAvatar avatarId={currentAvId} size={42} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => deletePlayer(idx)}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                          title="Delete"
                        >
                          <X size={20} strokeWidth={2.5} />
                        </button>
                      )}
                    </div>

                    {/* Cute Avatar Grid Picker inside the colored gradient box */}
                    <AnimatePresence>
                      {isPickerOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-black/45 border border-white/10 p-3 rounded-2xl space-y-2 mt-1 shadow-2xl backdrop-blur-md">
                            <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest text-center">
                              {languageState === 'Arabic' ? 'اختر رمز طبيب الحيوان الكيوت الخاص بك' : 'SELECT CUTE ANIMAL DOCTOR'}
                            </p>
                            <div className="grid grid-cols-5 gap-2">
                              {AVATAR_TEMPLATES.map((avatar) => (
                                <button
                                  key={avatar.id}
                                  type="button"
                                  onClick={() => {
                                    const updated = [...offlinePlayerAvatars];
                                    updated[idx] = avatar.id;
                                    setOfflinePlayerAvatars(updated);
                                    setActiveAvatarPickerIdx(null);
                                  }}
                                  className={`p-1.5 rounded-xl border transition-all flex flex-col items-center justify-center gap-1 ${
                                    currentAvId === avatar.id 
                                      ? 'bg-white/20 border-white scale-105' 
                                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                                  }`}
                                >
                                  <div className="w-8 h-8 flex items-center justify-center">
                                    {avatar.svg}
                                  </div>
                                  <span className="text-[8px] font-black text-white/70 capitalize">
                                    {avatar.name}
                                  </span>
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

              {/* "Add New Player" (لاعب جديد) Card matching screenshot */}
              <div 
                onClick={() => {
                  if (offlinePlayerNames.length >= 10) {
                    alert(
                      languageState === 'Arabic' 
                        ? 'الحد الأقصى هو 10 أطباء!' 
                        : 'Maximum of 10 doctors reached!'
                    );
                    return;
                  }
                  const nextIdx = offlinePlayerNames.length;
                  const newNames = [...offlinePlayerNames, ''];
                  const newAvatars = [...offlinePlayerAvatars, nextIdx % 10];
                  setOfflinePlayerNames(newNames);
                  setOfflinePlayerAvatars(newAvatars);
                  setPlayerCount(newNames.length);
                }}
                className="border-2 border-dashed border-white/20 hover:border-white/45 bg-black/30 hover:bg-black/40 rounded-[1.5rem] p-3.5 cursor-pointer transition-all flex items-center justify-between shadow-inner"
              >
                {/* Left side: Plus Green button (Arabic) or Placeholder (English) */}
                {languageState === 'Arabic' ? (
                  <div className="w-10 h-10 rounded-xl bg-[#42a851] hover:bg-[#4fb85e] flex items-center justify-center text-white shadow-md active:scale-95 transition-all">
                    <Plus size={22} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 bg-white/5 shrink-0" />
                )}

                {/* Center text */}
                <div className={`flex-1 px-3 ${languageState === 'Arabic' ? 'text-right' : 'text-left'}`}>
                  <span className="text-white font-black text-base sm:text-lg tracking-wide">
                    {languageState === 'Arabic' ? 'لاعب جديد' : 'New Player'}
                  </span>
                </div>

                {/* Right side: Placeholder (Arabic) or Plus Green button (English) */}
                {languageState === 'Arabic' ? (
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 bg-white/5 shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[#42a851] hover:bg-[#4fb85e] flex items-center justify-center text-white shadow-md active:scale-95 transition-all">
                    <Plus size={22} strokeWidth={3} />
                  </div>
                )}
              </div>
            </div>

            {/* "يلا بينا" Bottom Button from the screenshot */}
            <button
              type="button"
              onClick={() => {
                const emptyIdx = offlinePlayerNames.findIndex(n => !n.trim());
                if (emptyIdx !== -1) {
                  alert(
                    languageState === 'Arabic' 
                      ? `يرجى إدخال اسم اللاعب المساعد ${emptyIdx + 1} للمتابعة!` 
                      : `Please enter a name for Doctor ${emptyIdx + 1} to proceed!`
                  );
                  return;
                }
                if (offlinePlayerNames.length < 2) {
                  alert(
                    languageState === 'Arabic'
                      ? 'يجب أن يكون هناك لاعبين اثنين على الأقل لبدء اللعبة!'
                      : 'At least 2 players are required to start the game!'
                  );
                  return;
                }
                setPhase('MULTI_SETUP_OFFLINE_CONFIG');
              }}
              className="w-full py-4 bg-[#42a851] hover:bg-[#4eb65d] text-white font-black rounded-2xl text-base shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 relative z-10"
            >
              <span>{languageState === 'Arabic' ? 'يلا بينا' : "Let's Go!"}</span>
            </button>
          </motion.div>
        )}

        {/* PHASE: MULTI_SETUP_OFFLINE_CONFIG */}
        {phase === 'MULTI_SETUP_OFFLINE_CONFIG' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between border-b border-zinc-850 pb-3">
              <button
                type="button"
                onClick={() => setPhase('MULTI_SETUP_OFFLINE')}
                className="p-2 bg-zinc-900/80 hover:bg-zinc-850 text-zinc-400 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold"
              >
                <ArrowLeft size={14} />
                <span>{languageState === 'Arabic' ? 'رجوع لتعديل الأسماء' : 'Back to Names'}</span>
              </button>
              <div className="text-right">
                <span className="text-[10px] bg-sky-600/15 border border-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                  {languageState === 'Arabic' ? 'الخطوة 2 من 2' : 'Step 2 of 2'}
                </span>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-2xl font-black text-white italic tracking-tight">
                {languageState === 'Arabic' ? 'التخصص الطبي ومستوى اللعبة' : 'Medical Settings'}
              </h3>
              <p className="text-xs text-zinc-500">
                {languageState === 'Arabic' ? 'اختر تخصص المصطلحات وصعوبة الكلمات اللغوية.' : 'Configure case specialties and integrated term difficulty levels.'}
              </p>
            </div>

            <div className="space-y-3.5 bg-zinc-900/40 p-4 border border-zinc-850 rounded-2xl">
              {/* Clinical/Academic Specialty Selector */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase font-black tracking-wider text-sky-400">
                    {languageState === 'Arabic' ? 'التخصص الطبي للمصطلحات' : 'Clinical Specialties Range'}
                  </label>
                  {multiAdvancedFilter.enabled && (
                    <span className="text-[9px] bg-sky-600/15 text-sky-400 px-2 py-0.5 rounded-full font-bold border border-sky-500/20">
                      {languageState === 'Arabic' ? 'فلتر مخصص نشط' : 'Custom Active'}
                    </span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  <div className="relative flex-1">
                    <select
                      value={multiAdvancedFilter.enabled ? "Advanced" : multiSpecialty}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === 'Advanced') {
                          setEditingFilterType('multi');
                          setTempAdvancedFilter({...multiAdvancedFilter});
                          setIsAdvancedModalOpen(true);
                        } else {
                          setMultiSpecialty(val);
                          setMultiAdvancedFilter(prev => ({ ...prev, enabled: false }));
                        }
                      }}
                      className="w-full appearance-none bg-zinc-950 border border-zinc-850 rounded-xl pl-3 pr-10 py-2.5 text-xs font-bold text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all cursor-pointer"
                    >
                      {multiAdvancedFilter.enabled && (
                        <option value="Advanced">
                          {languageState === 'Arabic' 
                            ? `فلتر مخصص (${multiAdvancedFilter.subjects.length} تخصص)` 
                            : `Custom Filter (${multiAdvancedFilter.subjects.length} specs)`}
                        </option>
                      )}
                      <option value="All">{languageState === 'Arabic' ? 'كل الفروع والعلوم الأساسية' : 'All Medicine (Skip Limit)'}</option>
                      <optgroup label={languageState === 'Arabic' ? 'تخصصات إكلينيكية (Clinical)' : 'Clinical Specialties'}>
                        {clinicalSpecialties.map(spec => (
                          <option key={spec.id} value={spec.id}>
                            {spec.nameEn}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={languageState === 'Arabic' ? 'تخصصات أكاديمية (Academic)' : 'Academic Specialties'}>
                        {academicSpecialties.map(spec => (
                          <option key={spec.id} value={spec.id}>
                            {spec.nameEn}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingFilterType('multi');
                      setTempAdvancedFilter({...multiAdvancedFilter});
                      setIsAdvancedModalOpen(true);
                    }}
                    className={`px-3 rounded-xl border transition-all flex items-center justify-center ${
                      multiAdvancedFilter.enabled 
                        ? 'bg-sky-600/20 border-sky-500 text-sky-400 hover:bg-sky-600/30' 
                        : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                    title={languageState === 'Arabic' ? 'الإعدادات المتقدمة للتخصصات' : 'Advanced Specialty Settings'}
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Unified Single Difficulty Slider/Bar */}
              <div className="space-y-1.5 pt-1.5 border-t border-zinc-850/60">
                <label className="text-[10px] uppercase font-black tracking-wider text-sky-400">
                  {languageState === 'Arabic' ? 'مستوى صعوبة الكلمة والتحليل' : 'Unified Diagnosis Difficulty'}
                </label>
                <div className="grid grid-cols-4 gap-1.5 bg-zinc-950 p-1.5 rounded-xl border border-zinc-850">
                  {[
                    { id: 'All', labelEn: 'All', labelAr: 'الكل' },
                    { id: '1', labelEn: 'Easy', labelAr: 'سهل' },
                    { id: '2', labelEn: 'Medium', labelAr: 'متوسط' },
                    { id: '3', labelEn: 'Hard', labelAr: 'صعب' }
                  ].map((level) => {
                    const isSelected = multiDifficulty === level.id;
                    return (
                      <button
                        key={level.id}
                        type="button"
                        onClick={() => {
                          setMultiDifficulty(level.id);
                          // Keep guessing difficulty synchronized behind the scenes as well for fair algorithm
                          setMultiGuessingDifficulty(level.id);
                        }}
                        className={`py-2 rounded-lg text-xs font-black transition-all ${
                          isSelected 
                            ? 'bg-sky-600/20 border-2 border-sky-500 text-white shadow-sm' 
                            : 'border border-transparent text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {languageState === 'Arabic' ? level.labelAr : level.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {playerCount >= 3 && (
              <div className="space-y-3.5 bg-zinc-900/40 p-4 border border-zinc-850 rounded-2xl">
                {playerCount >= 5 && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-black tracking-wider text-sky-400">
                      {languageState === 'Arabic' ? 'عدد الـ Imposters' : 'Imposter Count'}
                    </label>
                    <div className="flex gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-850">
                      {[1, 2].map((num) => (
                         <button
                           key={num}
                           type="button"
                           onClick={() => setImposterCount(num)}
                           className={`flex-1 py-1.5 text-xs font-black rounded-lg transition-all ${
                             imposterCount === num 
                               ? 'bg-sky-600 border border-sky-500 text-white' 
                               : 'bg-transparent text-zinc-500 hover:text-zinc-300'
                           }`}
                         >
                          {num} {languageState === 'Arabic' ? 'Imposter' : 'Imposters'}
                         </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-black tracking-wider text-sky-400">
                    {languageState === 'Arabic' ? 'ماذا يظهر في بطاقة الـ Imposter؟' : 'What is shown to Imposter?'}
                  </label>
                  <div className="flex gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-850">
                    <button
                      type="button"
                      onClick={() => setImposterRevealsMode('IMPOSTER')}
                      className={`flex-1 py-1.5 text-xs font-black rounded-lg transition-all ${
                        imposterRevealsMode === 'IMPOSTER' 
                          ? 'bg-sky-600/20 border border-sky-500 text-white' 
                          : 'bg-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {languageState === 'Arabic' ? 'كلمة "Imposter" فقط' : 'Word "Imposter" Only'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setImposterRevealsMode('RELATED_WORD')}
                      className={`flex-1 py-1.5 text-xs font-black rounded-lg transition-all ${
                        imposterRevealsMode === 'RELATED_WORD' 
                          ? 'bg-sky-600/20 border border-sky-500 text-white' 
                          : 'bg-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {languageState === 'Arabic' ? 'مرض مضلل وقريب (صعب)' : 'Similar Clinical Term'}
                    </button>
                  </div>
                  <span className="text-[10px] text-zinc-500 block leading-normal mt-1 pl-1">
                    {languageState === 'Arabic' 
                      ? 'تمويه المرض القريب يعطي اللاعب المنبّس فكرة تقريبية عن الكيس السريري ليندمج كطبيب خبير دون كشف صوته!' 
                      : 'Similar term provides the spy doctor with parallel context to disguise scientific analysis safely.'}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={startOfflineMultiGame}
              className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Play size={14} className="fill-white" />
              <span>{languageState === 'Arabic' ? 'وزع كروت الجولة السرية وابدأ' : 'Distribute Secrets & Play'}</span>
            </button>
          </motion.div>
        )}

        {/* PHASE: MULTI_SETUP_ONLINE */}
        {phase === 'MULTI_SETUP_ONLINE' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6 max-w-lg mx-auto"
          >
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-extrabold">{languageState === 'Arabic' ? 'غرفة الألعاب الأونلاين' : 'Online Real-time Match'}</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-sky-400">
                  {languageState === 'Arabic' ? 'اسمك الشخصي' : 'Your Username'}
                </label>
                <input
                  type="text"
                  value={currentPlayerName}
                  onChange={(e) => setCurrentPlayerName(e.target.value)}
                  placeholder={languageState === 'Arabic' ? 'د. هاني' : 'Doctor Name'}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold text-white outline-none"
                />
              </div>

              {isCreatingRoom === null ? (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => setIsCreatingRoom(true)}
                    className="p-5 bg-zinc-900 border-2 border-zinc-800 hover:border-sky-600 rounded-2xl text-center font-black text-sm uppercase tracking-wider transition-all hover:scale-102"
                  >
                    {languageState === 'Arabic' ? 'إنشاء غـرفـة' : 'Create Room'}
                  </button>
                  <button
                    onClick={() => setIsCreatingRoom(false)}
                    className="p-5 bg-zinc-900 border-2 border-zinc-800 hover:border-sky-600 rounded-2xl text-center font-black text-sm uppercase tracking-wider transition-all hover:scale-102"
                  >
                    {languageState === 'Arabic' ? 'انضمام لغرفة' : 'Join Room'}
                  </button>
                </div>
              ) : isCreatingRoom ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs uppercase font-extrabold text-sky-400">
                        {languageState === 'Arabic' ? 'التخصص الطبي (إكلينيكي وأكاديمي)' : 'Medical Specialty Filter'}
                      </label>
                      {multiAdvancedFilter.enabled && (
                        <span className="text-[10px] bg-sky-600/20 text-sky-400 px-2.5 py-0.5 rounded-full font-bold border border-sky-500/30 animate-pulse">
                          {languageState === 'Arabic' ? 'متقدم نشط' : 'Advanced Active'}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <select
                          value={multiAdvancedFilter.enabled ? "Advanced" : multiSpecialty}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === 'Advanced') {
                              setEditingFilterType('multi');
                              setTempAdvancedFilter({...multiAdvancedFilter});
                              setIsAdvancedModalOpen(true);
                            } else {
                              setMultiSpecialty(val);
                              setMultiAdvancedFilter(prev => ({ ...prev, enabled: false }));
                            }
                          }}
                          className="w-full appearance-none bg-zinc-900 border border-zinc-800 rounded-xl pl-4 pr-10 py-3 text-sm font-semibold text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all cursor-pointer"
                        >
                          {multiAdvancedFilter.enabled && (
                            <option value="Advanced">
                              {languageState === 'Arabic' 
                                ? `فلتر مخصص (${multiAdvancedFilter.subjects.length} تخصص)` 
                                : `Custom Filter (${multiAdvancedFilter.subjects.length} specs)`}
                            </option>
                          )}
                          <option value="All">{languageState === 'Arabic' ? 'كل الطب (تخطي)' : 'All Medicine'}</option>
                          <optgroup label={languageState === 'Arabic' ? 'تخصصات إكلينيكية (Clinical)' : 'Clinical Specialties'}>
                            {clinicalSpecialties.map(spec => (
                              <option key={spec.id} value={spec.id}>
                                {spec.nameEn}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label={languageState === 'Arabic' ? 'تخصصات أكاديمية (Academic)' : 'Academic Specialties'}>
                            {academicSpecialties.map(spec => (
                              <option key={spec.id} value={spec.id}>
                                {spec.nameEn}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-zinc-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingFilterType('multi');
                          setTempAdvancedFilter({...multiAdvancedFilter});
                          setIsAdvancedModalOpen(true);
                        }}
                        className={`px-3 rounded-xl border transition-all flex items-center justify-center ${
                          multiAdvancedFilter.enabled 
                            ? 'bg-sky-600/20 border-sky-500 text-sky-400 hover:bg-sky-600/30' 
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                        }`}
                        title={languageState === 'Arabic' ? 'الإعدادات المتقدمة للتخصصات' : 'Advanced Specialty Settings'}
                      >
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Difficulty Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-extrabold text-sky-400">
                      {languageState === 'Arabic' ? 'صعوبة المصطلح العلمي' : 'Clinical/Scientific Difficulty'}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'All', labelEn: 'All', labelAr: 'الكل' },
                        { id: '1', labelEn: 'Easy', labelAr: 'سهل' },
                        { id: '2', labelEn: 'Medium', labelAr: 'متوسط' },
                        { id: '3', labelEn: 'Hard', labelAr: 'صعب' }
                      ].map((level) => (
                        <button
                          key={level.id}
                          type="button"
                          onClick={() => setMultiDifficulty(level.id)}
                          className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all ${
                            multiDifficulty === level.id 
                              ? 'bg-sky-600 border-sky-500 text-white' 
                              : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-700'
                          }`}
                        >
                          {languageState === 'Arabic' ? level.labelAr : level.labelEn}
                        </button>
                      ))}
                    </div>
                  </div>

                  {playerCount >= 3 && (
                    <div className="space-y-4 bg-zinc-900/40 p-4 border border-zinc-850 rounded-xl">
                      {playerCount >= 5 && (
                        <div className="space-y-1.5">
                          <label className="text-xs font-black text-sky-400">{languageState === 'Arabic' ? 'عدد الجواسيس' : 'Imposters count'}</label>
                          <div className="flex gap-2">
                            {[1, 2].map(n => (
                              <button
                                key={n}
                                onClick={() => setImposterCount(n)}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg border ${
                                  imposterCount === n ? 'bg-sky-600 border-sky-500' : 'bg-transparent border-zinc-800'
                                }`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-sky-400">{languageState === 'Arabic' ? 'ماذا يُعرض للجاسوس؟' : 'Stealth option'}</label>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setImposterRevealsMode('IMPOSTER')}
                            className={`flex-1 py-1.5 text-xs font-bold rounded-lg border ${
                              imposterRevealsMode === 'IMPOSTER' ? 'bg-sky-600/20 border-sky-500 text-white' : 'bg-transparent border-zinc-800'
                            }`}
                          >
                            {languageState === 'Arabic' ? 'كلمة Imposter' : 'Word Imposter'}
                          </button>
                          <button
                            onClick={() => setImposterRevealsMode('RELATED_WORD')}
                            className={`flex-1 py-1.5 text-xs font-bold rounded-lg border ${
                              imposterRevealsMode === 'RELATED_WORD' ? 'bg-sky-600/20 border-sky-500 text-white' : 'bg-transparent border-zinc-800'
                            }`}
                          >
                            {languageState === 'Arabic' ? 'مرض مضلل' : 'Similar disease'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      disabled={onlineActionLoading}
                      onClick={() => setIsCreatingRoom(null)}
                      className="px-4 py-3 border border-zinc-800 rounded-xl hover:bg-zinc-900 text-zinc-400 disabled:opacity-40"
                    >
                      {languageState === 'Arabic' ? 'رجوع' : 'Back'}
                    </button>
                    <button
                      type="button"
                      disabled={onlineActionLoading}
                      onClick={createOnlineRoom}
                      className="flex-1 py-3 bg-sky-600 hover:bg-sky-500 font-extrabold text-sm rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {onlineActionLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          {languageState === 'Arabic' ? 'جاري إنشاء الغرفة...' : 'Creating Room...'}
                        </>
                      ) : (
                        languageState === 'Arabic' ? 'إنشاء وتوليد الرمز 🔑' : 'Generate Room 🔑'
                      )}
                    </button>
                  </div>
                </div>

              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-sky-400">
                      {languageState === 'Arabic' ? 'أدخل كود الغرفة المكون من 6 حروف' : 'Enter 6-char Room Code'}
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      disabled={onlineActionLoading}
                      value={roomCodeInput}
                      onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                      placeholder="EX: ROOMX1"
                      className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-xl px-4 py-3 placeholder:text-zinc-650 text-lg font-black text-white text-center outline-none tracking-widest disabled:opacity-50"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      disabled={onlineActionLoading}
                      onClick={() => setIsCreatingRoom(null)}
                      className="px-4 py-3 border border-zinc-800 rounded-xl hover:bg-zinc-900 text-zinc-400 disabled:opacity-40"
                    >
                      {languageState === 'Arabic' ? 'رجوع' : 'Back'}
                    </button>
                    <button
                      type="button"
                      disabled={onlineActionLoading}
                      onClick={joinOnlineRoom}
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 font-extrabold text-sm rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {onlineActionLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          {languageState === 'Arabic' ? 'جاري الانضمام...' : 'Joining...'}
                        </>
                      ) : (
                        languageState === 'Arabic' ? 'انضمام الآن' : 'Join Match'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* PHASE: ONLINE_LOBBY */}
        {phase === 'ONLINE_LOBBY' && onlineRoomState && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[10px] font-black uppercase text-amber-400">
                {languageState === 'Arabic' ? 'كود الغرفة للمشاركة' : 'ROOM CODE KEY'}
              </span>
              <h3 className="text-4xl font-black text-sky-400 tracking-widest leading-none mt-1">{roomId}</h3>
              
              <div className="flex justify-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(roomId);
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 2000);
                  }}
                  className="flex items-center gap-1 bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-400 px-3 py-1.5 rounded-lg border border-zinc-800 transition-all font-bold min-w-[100px] justify-center"
                >
                  <Copy size={12} className={copySuccess ? "text-emerald-400" : "text-zinc-400"} />
                  {copySuccess 
                    ? (languageState === 'Arabic' ? 'تم النسخ!' : 'Copied!')
                    : (languageState === 'Arabic' ? 'نسخ الكود' : 'Copy Key')}
                </button>
              </div>
            </div>

            <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800 space-y-3 text-left">
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block mb-1">
                {languageState === 'Arabic' ? `انضم اللاعبين (${onlineRoomState.players.length} من ${onlineRoomState.maxPlayers})` : `Clinical members joined (${onlineRoomState.players.length} of ${onlineRoomState.maxPlayers})`}
              </span>

              <div className="space-y-2">
                {onlineRoomState.players.map((p: any, index: number) => (
                  <div key={p.id} className="flex items-center justify-between p-3 bg-zinc-900/60 rounded-xl border border-zinc-850">
                    <span className="font-bold text-white flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-md bg-sky-600/20 text-sky-400 flex items-center justify-center text-[10px] font-black">
                        {index + 1}
                      </span>
                      {p.name}
                    </span>
                    {p.id === onlineRoomState.hostId && (
                      <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded px-1.5 py-0.5 text-[8px] font-bold uppercase">
                        HOST
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {onlineRoomState.hostId === localPlayerId ? (
              <button
                disabled={onlineRoomState.players.length < onlineRoomState.maxPlayers}
                onClick={startOnlineMatch}
                className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed font-black rounded-xl text-xs uppercase tracking-widest transition-all"
              >
                {languageState === 'Arabic' ? 'انطلاق الجولة للـجميع' : 'Start Clinical Round'}
              </button>
            ) : (
              <p className="text-zinc-600 text-xs italic">
                {languageState === 'Arabic' ? 'انتظار المضيف لبدء الحصة...' : 'Waiting for host to kick-off...'}
              </p>
            )}
          </motion.div>
        )}

        {/* PHASE: ROLES_REVEAL */}
        {phase === 'ROLES_REVEAL' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-sm mx-auto text-center py-6"
          >
            <div className="space-y-1">
              <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">
                {languageState === 'Arabic' ? 'شاشة كشف الأدوار السرية' : 'ROLE DISTRIBUTION SCREEN'}
              </label>
              <h3 className="text-3xl font-black text-white italic">
                {isOnline ? currentPlayerName : currentOfflinePlayer.name}
              </h3>
            </div>

            {!isOnline && isCardHidden && (
              <div className="p-8 bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 py-12">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-sky-500/40 bg-zinc-950 flex items-center justify-center shrink-0 shadow-lg">
                  <AnimalDoctorAvatar avatarId={currentOfflinePlayer?.avatarId} size={76} />
                </div>
                <p className="text-sm font-extrabold text-zinc-300 leading-relaxed text-center">
                  {languageState === 'Arabic' 
                    ? `يرجى تسليم الموبايل لـ [ ${currentOfflinePlayer.name} ]، واجعل الشاشة مخفية ثم اضغط زر الكشف أدناه.` 
                    : `Please pass the device to [ ${currentOfflinePlayer.name} ] in private. Press reveal below.`}
                </p>
                <button
                  type="button"
                  onClick={() => setIsCardHidden(false)}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs rounded-xl"
                >
                  {languageState === 'Arabic' ? 'كشف الكلمة السرية' : 'Reveal Secret Word'}
                </button>
              </div>
            )}

            {(isOnline || !isCardHidden) && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="bg-zinc-900 border-2 border-sky-500/20 p-6 rounded-[2.5rem] text-center space-y-6"
              >
                {(() => {
                  const player = isOnline 
                    ? activePlayers.find(m => m.id === localPlayerId) 
                    : currentOfflinePlayer;

                  if (!player) return null;

                  const wordObj = getWordDetails(player.assignedWordId);
                  const isNormalImposter = player.assignedWordId === 'IMPOSTER';

                  if (player.role === 'IMPOSTER' && isNormalImposter) {
                    return (
                      <>
                        <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto text-rose-500 animate-pulse">
                          <ShieldAlert size={36} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-2xl font-black text-rose-500 uppercase tracking-tighter">
                            {languageState === 'Arabic' ? 'أنت المُنبّس!' : 'YOU ARE IMPOSTER!'}
                          </h4>
                          <p className="text-zinc-500 text-xs">
                            {languageState === 'Arabic' ? 'لا توضح ذلك، تخفّى وحاول مراوغة زملائك بالصنف والـ System!' : 'Blend in stealthily and guess the collective medical answer.'}
                          </p>
                        </div>

                        {isNormalImposter ? (
                          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl">
                             <p className="text-[10px] text-zinc-500 font-bold uppercase">{languageState === 'Arabic' ? 'المحتوى المُسلم' : 'CARD SECRET INFO'}</p>
                            <p className="text-xl font-extrabold text-rose-400 tracking-wider">IMPOSTER</p>
                          </div>
                        ) : wordObj ? (
                          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-left space-y-2">
                            <span className="px-2 py-0.5 bg-rose-500/15 border border-rose-500/30 text-rose-405 text-[10px] font-bold rounded">
                              {languageState === 'Arabic' ? 'تم تسليمك مرض مضلل وقريب لمراوغة الطب' : 'Stealth clinical system term'}
                            </span>
                            <div className="pt-1">
                              <p className="text-zinc-500 text-[10px] font-mono leading-none">{languageState === 'Arabic' ? 'المصطلح المضلل لديك' : 'Your stealth term'}</p>
                              <p className="text-lg font-black text-white">{wordObj.word.English}</p>
                            </div>
                            <div className="space-y-2 border-t border-zinc-900 pt-3 text-[11px] text-zinc-400 leading-normal text-left">
                              {getCluesForWord(wordObj.id, wordObj, 'English').slice(0, showMoreClues ? 10 : 5).map((cl, i) => (
                                <div key={i} className="py-1 border-b border-zinc-900/50 last:border-0">
                                  {renderClueText(cl, 'xs')}
                                </div>
                              ))}
                              {!showMoreClues && (
                                <button
                                  type="button"
                                  onClick={() => setShowMoreClues(true)}
                                  className="mt-2 text-xs font-bold text-sky-400 hover:text-sky-350 transition-all flex items-center gap-1 bg-sky-600/10 hover:bg-sky-600/20 border border-sky-500/20 px-2.5 py-1.5 rounded-lg w-full justify-center"
                                >
                                  {languageState === 'Arabic' ? 'عرض معلومات أخرى (أكثر)' : 'Show more info'}
                                </button>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div className="w-16 h-16 bg-sky-500/10 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto text-sky-400">
                          <Stethoscope size={36} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-2xl font-black text-white uppercase tracking-tighter">
                            {languageState === 'Arabic' ? 'المصطلح الطبي المخصص لك' : 'YOUR CLINICAL TERM'}
                          </h4>
                          <p className="text-zinc-500 text-xs">
                            {languageState === 'Arabic' ? 'تذكر مصطلحك والقرائن جيداً لنقاش الحالات والتشخيص المتبادل!' : 'Keep your clinical term and clues in mind for diagnostic discussion!'}
                          </p>
                        </div>

                        {wordObj && (
                          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-left space-y-2">
                            <span className="text-[10px] text-zinc-500 font-bold uppercase block">{languageState === 'Arabic' ? 'المصطلح الطبي المخصص لك' : 'YOUR CLINICAL TERM'}</span>
                            <p className="text-xl font-extrabold text-sky-400">
                              {languageState === 'Arabic' ? wordObj.word.Arabic : wordObj.word.English}
                            </p>
                            <p className="text-xs text-zinc-400 font-semibold italic">
                              {languageState === 'Arabic' ? `(${wordObj.word.English}) - تصنيف: ${wordObj.type}` : `Category: ${wordObj.type}`}
                            </p>
                            <div className="space-y-2 border-t border-zinc-900 pt-3 text-[11px] text-zinc-400 leading-normal text-left">
                              {getCluesForWord(wordObj.id, wordObj, languageState).slice(0, showMoreClues ? 10 : 5).map((cl, i) => (
                                <div key={i} className="py-1 border-b border-zinc-900/50 last:border-0">
                                  {renderClueText(cl, 'xs')}
                                </div>
                              ))}
                              {!showMoreClues && (
                                <button
                                  type="button"
                                  onClick={() => setShowMoreClues(true)}
                                  className="mt-2 text-xs font-bold text-sky-400 hover:text-sky-350 transition-all flex items-center gap-1 bg-sky-600/10 hover:bg-sky-600/20 border border-sky-500/20 px-2.5 py-1.5 rounded-lg w-full justify-center"
                                >
                                  {languageState === 'Arabic' ? 'عرض معلومات أخرى (أكثر)' : 'Show more info'}
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  }
                })()}

                {isOnline ? (
                  <div className="pt-2">
                    {onlineRoomState.hostId === localPlayerId ? (
                      <button
                        type="button"
                        onClick={async () => {
                          const roomRef = doc(db, 'rooms', roomId);
                          const targetStatus = onlineRoomState.players.length === 2 ? 'TWO_PLAYERS_GUESS' : 'PLAYING_DISCUSSION';
                          await updateDoc(roomRef, {
                            status: targetStatus
                          });
                        }}
                        className="w-full py-3 bg-sky-600 hover:bg-sky-500 font-extrabold text-xs uppercase text-white rounded-xl tracking-wider block mt-2"
                      >
                        {languageState === 'Arabic' ? 'بـدء الـنـقـاش' : 'Activate Discussion Phase'}
                      </button>
                    ) : (
                      <p className="text-xs text-zinc-600 italic">
                        {languageState === 'Arabic' ? 'انتظار الكابتن لتفعيل لوحة النقاش...' : 'Waiting for host to launch discussion...'}
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={revealNextPlayerOffline}
                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold text-xs rounded-xl mt-4"
                  >
                    {revealIndex < activePlayers.length - 1 ? (languageState === 'Arabic' ? 'إخفاء وتمرير الهاتف للتالي' : 'Hide & Hand Over Phone') : (languageState === 'Arabic' ? 'إنهاء التوزيع وبدء النقاش' : 'Distribution Finish & Play')}
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* PHASE: PLAY_DISCUSSION */}
        {phase === 'PLAY_DISCUSSION' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto"
          >
            {!isLocalVotingActive ? (
              <>
                <div className="text-center space-y-2 py-4">
                  <span className="px-3.5 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-black uppercase tracking-widest inline-block">
                    {languageState === 'Arabic' ? 'جولة النقاش المفتوح والملاحظات' : 'TEAM DISCUSSION ROUND'}
                  </span>
                  <h3 className="text-3xl font-black text-white italic">
                    {languageState === 'Arabic' ? 'اطرحوا الأسئلة الطبية واستثنوا الـ Imposter!' : 'Investigate clinical cases!'}
                  </h3>
                  <p className="text-zinc-500 text-xs text-center">
                    {languageState === 'Arabic' 
                      ? 'يجب توجيه الأسئلة بحذر لا يؤدي لكشف اللفظ الحقيقي للـ Imposter، واختبروا زملائكم في الأمراض!' 
                      : 'Doctors must diagnostic-question each other without revealing the explicit terminology directly.'}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setShowQuestionExamples(!showQuestionExamples)}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900 hover:bg-zinc-850 rounded-2xl border border-zinc-800 transition-all font-semibold"
                  >
                    <span className="flex items-center gap-2 text-sm text-teal-400">
                      <HelpCircle size={16} />
                      {languageState === 'Arabic' ? 'أنواع وأمثلة على الأسئلة الطبية المتاحة' : 'Clinical Diagnostic questions models'}
                    </span>
                    <span className="text-xs text-zinc-550">{showQuestionExamples ? '▼' : '▲'}</span>
                  </button>

                  {showQuestionExamples && (
                    <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-2xl space-y-3">
                      {exampleQuestions.map((q, i) => (
                        <div key={i} className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-850 flex gap-2.5 items-start">
                          <span className="w-5 h-5 rounded-full bg-teal-600/10 border border-teal-500/30 text-[10px] text-teal-400 flex items-center justify-center font-bold">
                            {i + 1}
                          </span>
                          <div className="space-y-0.5 text-xs text-left">
                            <p className="font-extrabold text-zinc-200 leading-normal">{q.ar}</p>
                            <p className="text-zinc-500 font-medium italic">{q.en}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* BALANCED QUESTIONING ROUNDS FOR LOCAL PLAY */}
                {playerCount >= 3 && !isOnline && questioningCycle.length > 0 && (
                  <div className="p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl space-y-4 text-right">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {questioningCycle.filter(c => c.completed).length} / {questioningCycle.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-black text-sky-400">
                          {languageState === 'Arabic' ? 'توجيه الأسئلة المتوازن' : 'Balanced Questioning Order'}
                        </h4>
                        <HelpCircle size={16} className="text-sky-400" />
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {languageState === 'Arabic' 
                        ? 'لضمان العدالة وتساوي الفرص، يقوم كل لاعب بطرح سؤال واحد فقط على زميله المحدد أدناه. لا أحد يسأل أو يُسأل أكثر من الآخرين!'
                        : 'To ensure fairness, each player asks exactly one clinical question to their assigned peer. No one is left out!'}
                    </p>
                    <div className="space-y-2.5">
                      {questioningCycle.map((match, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => {
                            const updated = [...questioningCycle];
                            updated[idx].completed = !updated[idx].completed;
                            setQuestioningCycle(updated);
                          }}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-right ${
                            match.completed 
                              ? 'bg-sky-950/20 border-sky-900/50 opacity-55' 
                              : 'bg-zinc-950 border-zinc-850 hover:border-sky-500/30'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {match.completed ? (
                              <span className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300">
                                <Check size={12} />
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center" />
                            )}
                          </div>
                          <div className="flex-1 text-right">
                            {languageState === 'Arabic' ? (
                              <p className="text-xs font-bold text-zinc-200">
                                <span className="text-sky-300 font-extrabold">{match.askerName}</span> يوجّه سؤالاً لـ <span className="text-white font-extrabold">{match.targetName}</span>
                              </p>
                            ) : (
                              <p className="text-xs font-bold text-zinc-200">
                                <span className="text-sky-300 font-extrabold">{match.askerName}</span> questions <span className="text-white font-extrabold">{match.targetName}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isOnline && (
                  <div className="bg-zinc-900/55 p-4 border border-zinc-800 rounded-2xl space-y-2.5 text-left">
                    <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest flex items-center gap-1.5 justify-center">
                      {languageState === 'Arabic' ? 'مراجع كرتك السري للإجابة' : 'Your secret case specifications for answering'}
                    </span>
                    {(() => {
                      const local = activePlayers.find(m => m.id === localPlayerId);
                      if (!local) return null;
                      const word = getWordDetails(local.assignedWordId);
                      if (!word) {
                        return (
                          <p className="text-xs text-rose-400 font-extrabold text-center">
                            {languageState === 'Arabic' ? 'أنت الـ Imposter (جاسوس)! لا تمتلك مرجعاً للكرت.' : 'You are the Imposter! No details.'}
                          </p>
                        );
                      }
                      return (
                        <div className="space-y-1 bg-zinc-950/80 p-3.5 border border-zinc-800 rounded-xl">
                          <p className="text-sm font-extrabold text-white">{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</p>
                          <div className="space-y-2 text-[11px] text-zinc-405 pt-2 border-t border-zinc-900 leading-normal">
                            {getCluesForWord(word.id, word, languageState).slice(0, showMoreClues ? 10 : 5).map((cl, i) => (
                              <div key={i} className="py-1 border-b border-zinc-900/50 last:border-0">
                                {renderClueText(cl, 'xs')}
                              </div>
                            ))}
                            {!showMoreClues && (
                              <button
                                type="button"
                                onClick={() => setShowMoreClues(true)}
                                className="mt-2 text-xs font-bold text-sky-400 hover:text-sky-350 transition-all flex items-center gap-1 bg-sky-600/10 hover:bg-sky-600/20 border border-sky-500/20 px-2 py-1 rounded w-full justify-center"
                              >
                                {languageState === 'Arabic' ? 'عرض معلومات أخرى (أكثر)' : 'Show more info'}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {isOnline ? (
                  <div className="pt-2 text-center">
                    {onlineRoomState && onlineRoomState.hostId === localPlayerId ? (
                      <button
                        onClick={async () => {
                          const roomRef = doc(db, 'rooms', roomId);
                          const targetStatus = onlineRoomState.players.length === 2 ? 'TWO_PLAYERS_GUESS' : 'VOTING';
                          await updateDoc(roomRef, { status: targetStatus });
                        }}
                        className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-sm uppercase rounded-2xl tracking-widest transition-all"
                      >
                        {onlineRoomState.players.length === 2 ? (
                          languageState === 'Arabic' ? 'الانتقال للتخمين المتبادل المزدوج' : 'Proceed to Mutual Guessing'
                        ) : (
                          languageState === 'Arabic' ? 'الانتقال للتصويت السري المشترك' : 'Open Common Voting'
                        )}
                      </button>
                    ) : (
                      <p className="text-xs text-zinc-600 italic">
                        {onlineRoomState && onlineRoomState.players.length === 2 ? (
                          languageState === 'Arabic' ? 'بانتظار انتقال الغرفة للتخمين من الكابتن...' : 'Waiting for host to load guessing...'
                        ) : (
                          languageState === 'Arabic' ? 'بانتظار انتقال الغرفة للتصويت من الكابتن...' : 'Waiting for host to load voting...'
                        )}
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsLocalVotingActive(true);
                      setLocalVoterId(null);
                      setCompletedVoters([]);
                      setLocalVotingVotes({});
                      setShowLocalVoterTargetSelection(false);
                      setVotedSuspectIds([]);
                    }}
                    className="w-full py-4.5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl tracking-widest uppercase transition-all shadow-xl"
                  >
                    {languageState === 'Arabic' ? 'صوت الآن' : 'Vote Now'}
                  </button>
                )}
              </>
            ) : (
              /* INTERACTIVE PASS-AND-PLAY LOCAL VOTING */
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="space-y-6 max-w-lg mx-auto"
              >
                <div className="text-center space-y-2 py-4">
                  <span className="px-3.5 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full text-xs font-black uppercase tracking-widest inline-block">
                    {languageState === 'Arabic' ? 'صندوق الاقتراع الطبي السري' : 'SECRET CLINICAL POLL'}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {languageState === 'Arabic' ? 'صوّت الآن ضد الـ Imposter' : 'Expose the clinical spy!'}
                  </h3>
                  <p className="text-zinc-550 text-xs text-center">
                    {languageState === 'Arabic' 
                      ? 'كل لاعب يختار اسمه بسرية، ثم يصوّت ضد من يشك فيه ويمرر الهاتف لزميله.' 
                      : 'Each player selects their name in privacy, submits their vote, then hands the phone to the next colleague.'}
                  </p>
                </div>

                {(() => {
                  const remainingVoters = activePlayers.filter(p => !completedVoters.includes(p.id));
                  const numImposters = activePlayers.filter(p => p.role === 'IMPOSTER').length;

                  if (remainingVoters.length > 0) {
                    if (localVoterId === null) {
                      return (
                        <div className="space-y-4 bg-zinc-900/60 p-6 border border-zinc-800 rounded-2xl text-center">
                          <h4 className="text-sm font-black text-zinc-300 mb-3">
                            {languageState === 'Arabic' ? 'اختر اسمك للبدء بالتصويت السري:' : 'Select your name to begin secret voting:'}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {remainingVoters.map(p => (
                              <button
                                key={p.id}
                                onClick={() => {
                                  setLocalVoterId(p.id);
                                  setShowLocalVoterTargetSelection(false);
                                  setVotedSuspectIds([]);
                                }}
                                className="p-4 bg-zinc-950 border border-zinc-850 hover:border-sky-500 text-white font-extrabold italic rounded-xl text-sm transition-all hover:scale-[1.02]"
                              >
                                {p.name}
                              </button>
                            ))}
                          </div>
                          <div className="pt-4 border-t border-zinc-850 flex justify-between text-[11px] text-zinc-500 font-mono">
                            <span>
                              {languageState === 'Arabic' ? 'الأصوات المكتملة:' : 'Votes submitted:'} {completedVoters.length} / {activePlayers.length}
                            </span>
                            <button
                              onClick={() => setIsLocalVotingActive(false)}
                              className="text-sky-400 hover:underline font-bold"
                            >
                              {languageState === 'Arabic' ? 'الرجوع للنقاش' : 'Back to discussion'}
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      const localVoter = activePlayers.find(p => p.id === localVoterId);
                      if (!localVoter) return null;

                      if (!showLocalVoterTargetSelection) {
                        return (
                          <div className="space-y-6 bg-zinc-950 p-8 border-2 border-sky-500/30 rounded-[2rem] text-center max-w-sm mx-auto">
                            <Lock size={32} className="mx-auto text-zinc-400 animate-pulse" />
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-bold text-zinc-405 uppercase tracking-wider">
                                {languageState === 'Arabic' ? 'حركة خصوصية التصويت' : 'PRIVACY TRANSFER'}
                              </h4>
                              <p className="text-2xl font-black text-white italic">
                                {languageState === 'Arabic' ? `مرر الهاتف إلى: ${localVoter.name}` : `Pass the device to: ${localVoter.name}`}
                              </p>
                            </div>
                            <p className="text-xs text-zinc-550 leading-normal">
                              {languageState === 'Arabic' 
                                ? 'الرجاء التأكد من عدم رؤية الآخرين للشاشة لضمان سرية التصويت!' 
                                : 'Ensure other players are looking away to guarantee absolute vote secrecy!'}
                            </p>
                            <button
                              onClick={() => setShowLocalVoterTargetSelection(true)}
                              className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-sm uppercase rounded-xl transition-all"
                            >
                              {languageState === 'Arabic' ? `أنا ${localVoter.name}، ابدأ التصويت` : `I am ${localVoter.name}, start voting`}
                            </button>
                          </div>
                        );
                      } else {
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
                          <div className="space-y-6 bg-zinc-900/80 p-6 border border-zinc-800 rounded-2xl text-right">
                            <div className="text-center space-y-1">
                              <span className="text-[10px] text-sky-400 font-bold tracking-widest uppercase">
                                {languageState === 'Arabic' ? 'تصويت سري نشط' : 'ACTIVE SECRET BALLOT'}
                              </span>
                              <p className="text-xl font-black text-white">
                                {languageState === 'Arabic' ? `اللاعب: ${localVoter.name}` : `Player: ${localVoter.name}`}
                              </p>
                            </div>

                            <div className="space-y-3">
                              <p className="text-xs font-bold text-zinc-405 text-center leading-normal">
                                {numImposters === 2 ? (
                                  languageState === 'Arabic' 
                                    ? 'اختر لاعبين اثنين (2) تشك بوجود الـ Imposter بينهما:' 
                                    : 'Choose exactly two (2) players you suspect of being the spy:'
                                ) : (
                                  languageState === 'Arabic' 
                                    ? 'اختر اللاعب (1) الذي تشك في كونه الـ Imposter:' 
                                    : 'Choose exactly one (1) player you suspect of being the spy:'
                                )}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {candidates.map(p => {
                                  const isSelected = votedSuspectIds.includes(p.id);
                                  return (
                                    <button
                                      key={p.id}
                                      onClick={() => toggleSuspect(p.id)}
                                      className={`p-4 rounded-xl font-black italic text-sm border transition-all flex items-center justify-center ${
                                        isSelected 
                                          ? 'bg-rose-500/15 border-rose-500 text-rose-400 scale-[1.02]' 
                                          : 'bg-zinc-950 border-zinc-850 text-zinc-300 hover:border-zinc-700'
                                      }`}
                                    >
                                      {p.name}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-850 text-center">
                              <button
                                disabled={!isVoteFormValid}
                                onClick={() => {
                                  const updatedVotes = { ...localVotingVotes, [localVoterId]: votedSuspectIds };
                                  setLocalVotingVotes(updatedVotes);
                                  setCompletedVoters([...completedVoters, localVoterId]);
                                  setLocalVoterId(null);
                                  setShowLocalVoterTargetSelection(false);
                                  setVotedSuspectIds([]);
                                }}
                                className={`w-full py-4 rounded-xl text-white font-black text-sm uppercase transition-all tracking-wide ${
                                  isVoteFormValid 
                                    ? 'bg-sky-600 hover:bg-sky-500' 
                                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50'
                                }`}
                              >
                                {languageState === 'Arabic' ? 'تأكيد صوّتي وتمرير الهاتف' : 'Confirm vote and pass phone'}
                              </button>
                            </div>
                          </div>
                        );
                      }
                    }
                  } else {
                    const actualImposters = activePlayers.filter(p => p.role === 'IMPOSTER');
                    
                    return (
                      <div className="space-y-6 bg-zinc-900/90 p-6 border border-zinc-800 rounded-2xl text-center">
                        <span className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
                          🚨
                        </span>
                        <div className="space-y-1">
                          <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest block">
                            {languageState === 'Arabic' ? 'تم اكتمال الاقتراع وإعلان الحقيقة' : 'CLINICAL POLL CLOSED'}
                          </span>
                          <h3 className="text-2xl font-black text-white">
                            {languageState === 'Arabic' ? 'الـ Imposter (جاسوس) الحقيقي هو:' : 'The True Spy is:'}
                          </h3>
                        </div>

                        <div className="p-5 bg-zinc-950 border border-zinc-850 rounded-2xl space-y-3">
                          {actualImposters.map(imp => (
                            <div key={imp.id} className="flex items-center justify-center gap-3 text-xl font-black text-rose-400 bg-rose-500/5 py-3 border border-rose-500/10 rounded-xl">
                              <span>🩺</span>
                              <span>{imp.name}</span>
                              <span className="text-xs bg-rose-500/10 text-rose-450 border border-rose-500/25 px-2 py-0.5 rounded uppercase font-mono">
                                {languageState === 'Arabic' ? 'Imposter' : 'Spy'}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="text-right space-y-2.5 pt-2 border-t border-zinc-850 mt-4">
                          <h4 className="text-xs font-black text-zinc-400 border-b border-zinc-850 pb-1.5 flex items-center justify-between">
                            <span>📋</span>
                            <span>{languageState === 'Arabic' ? 'توزيع الأصوات والتوجيهات:' : 'Vote Distribution:'}</span>
                          </h4>
                          <div className="space-y-1.5 max-h-[160px] overflow-y-auto custom-scrollbar pr-1">
                            {activePlayers.map(p => {
                              const votes = localVotingVotes[p.id] || [];
                              const votesNames = votes.map(vid => activePlayers.find(x => x.id === vid)?.name || '').filter(Boolean).join('، ');
                              return (
                                <div key={p.id} className="text-xs flex justify-between bg-zinc-950/60 p-2 rounded-lg border border-zinc-900">
                                  <span className="text-zinc-400">{votesNames || (languageState === 'Arabic' ? 'لا يوجد' : 'None')}</span>
                                  <span className="font-extrabold text-white">{p.name} {languageState === 'Arabic' ? 'صوّت لـ:' : 'voted:'}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            const tallies: Record<string, number> = {};
                            Object.values(localVotingVotes).forEach((val) => {
                              const arr = (val || []) as string[];
                              arr.forEach(vid => {
                                tallies[vid] = (tallies[vid] || 0) + 1;
                              });
                            });

                            let maxVotes = 0;
                            let votedId = '';
                            Object.keys(tallies).forEach(id => {
                              if (tallies[id] > maxVotes) {
                                maxVotes = tallies[id];
                                votedId = id;
                              }
                            });

                            if (!votedId && actualImposters.length > 0) {
                              votedId = actualImposters[0].id;
                            }
                            setVotedPlayerId(votedId);
                            setOfflineVotes(
                              Object.entries(localVotingVotes).reduce((acc, [k, v]) => {
                                acc[k] = v[0] || '';
                                return acc;
                              }, {} as Record<string, string>)
                            );

                            setIsLocalVotingActive(false);
                            setPhase('IMPOSTER_GUESS');
                          }}
                          className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-sm uppercase rounded-2xl tracking-widest transition-all"
                        >
                          {languageState === 'Arabic' ? 'الانتقال لتخمين المصطلح من الـ Imposter' : 'Proceed to Spy Word Guessing'}
                        </button>
                      </div>
                    );
                  }
                })()}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* PHASE: VOTING_PHASE */}
        {phase === 'VOTING_PHASE' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 bg-rose-600/10 border border-rose-500/30 text-rose-450 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                {languageState === 'Arabic' ? 'لوحة تسجيل التصويت والشهادة' : 'CLINICAL SUSPECT POLL'}
              </span>
              <h3 className="text-2xl font-black text-white">
                {languageState === 'Arabic' ? 'صوّت ضد من تشك به!' : 'Expose the spy doctor!'}
              </h3>
            </div>

            {!isOnline ? (
              <div className="space-y-4 text-center">
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                  <p className="text-xs font-semibold text-zinc-500 uppercase mb-1">{languageState === 'Arabic' ? 'اللاعب الذي يدلي بصوته الآن' : 'CURRENT VOTER'}</p>
                  <p className="text-2xl font-black text-sky-400 italic leading-tight">{currentVoter?.name}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activePlayers.map((p) => (
                    <button
                      key={p.id}
                      disabled={p.id === currentVoter?.id}
                      onClick={() => submitOfflineVote(p.id)}
                      className={`p-3.5 rounded-2xl text-base font-black border transition-all text-start flex items-center gap-3.5 ${
                        p.id === currentVoter?.id 
                          ? 'opacity-25 cursor-not-allowed border-zinc-800 text-zinc-700 bg-zinc-950/20' 
                          : 'bg-zinc-900 border-zinc-850 text-white hover:border-rose-500 hover:bg-rose-500/10'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-950 border border-zinc-800 shrink-0 flex items-center justify-center shadow-inner">
                        <AnimalDoctorAvatar avatarId={p.avatarId} size={38} />
                      </div>
                      <span className="truncate">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {onlineRoomState && onlineRoomState.votes[localPlayerId] ? (
                  <div className="p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-4">
                    <span className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check size={20} />
                    </span>
                    <p className="text-sm font-bold text-zinc-300">
                      {languageState === 'Arabic' ? 'تم تسجيل صوتك بنجاح! بانتظار إتمام الأعضاء...' : 'Vote registered successfully! Waiting for other peers...'}
                    </p>
                    <div className="text-xs text-zinc-550 italic">
                      {Object.keys(onlineRoomState.votes).length} / {onlineRoomState.players.length} {languageState === 'Arabic' ? 'أصوات مسجلة' : 'votes cast'}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePlayers.map((p) => (
                      <button
                        key={p.id}
                        disabled={p.id === localPlayerId}
                        onClick={() => handleOnlineVote(p.id)}
                        className={`p-5 rounded-2xl text-base font-black italic border transition-all text-center flex items-center justify-center ${
                          p.id === localPlayerId 
                            ? 'opacity-20 cursor-not-allowed border-zinc-850 text-zinc-750' 
                            : 'bg-zinc-900 border-zinc-805 text-white hover:border-rose-500 hover:bg-rose-500/10'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* PHASE: REVEAL_IMPOSTER */}
        {phase === 'REVEAL_IMPOSTER' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            {(() => {
              const votedId = isOnline ? onlineRoomState.votedOutPlayerId : votedPlayerId;
              const votedPlayer = activePlayers.find(m => m.id === votedId);
              if (!votedPlayer) return null;

              const isImposterCorrect = votedPlayer.role === 'IMPOSTER';

              return (
                <div className="space-y-6 py-6">
                  <div className="space-y-1 text-center">
                    <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-widest inline-block">
                      {languageState === 'Arabic' ? 'صاحب أعلى تصويت في الغرفة' : 'MOST SUSPECTED INDIVIDUAL'}
                    </span>
                    <h3 className="text-4xl font-extrabold text-white mt-1">
                      {votedPlayer.name}
                    </h3>
                  </div>

                  <div className={`p-6 rounded-[2rem] border-2 max-w-sm mx-auto text-center space-y-4 ${
                    isImposterCorrect 
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]' 
                      : 'bg-rose-500/10 border-rose-500/40 text-rose-450 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                  }`}>
                    {isImposterCorrect ? (
                      <>
                        <CheckCircle2 size={48} className="mx-auto" />
                        <h4 className="text-2xl font-black italic">
                          {languageState === 'Arabic' ? 'لقد عثرتم على الـ Imposter الفعلي!' : 'EXPOSED THE IMPOSTER!'}
                        </h4>
                        <p className="text-xs opacity-80 leading-normal">
                          {languageState === 'Arabic' 
                            ? 'أحسنت، تم كشف الجاسوس بنجاح. والآن يحصل على فرصة حاسمة لتخمين المصطلح لتعديل نقاط التحدي لصالحه!' 
                            : 'Perfect! You tracked the spy. However, they get an ultimate guess turn to steal the win.'}
                        </p>
                      </>
                    ) : (
                      <>
                        <ShieldAlert size={48} className="mx-auto" />
                        <h4 className="text-2xl font-black italic">
                          {languageState === 'Arabic' ? 'بريـئ تـم نـفـيه!' : 'WAS COMPLETELY INNOCENT'}
                        </h4>
                        <p className="text-xs opacity-80 leading-normal">
                          {languageState === 'Arabic' 
                            ? 'لقد نفيتم زميلاً بريئاً! مع ذلك، يحصل الـ Imposter السري على فرصته الذهبية لتخمين المصطلح الحقيقي.' 
                            : 'An innocent professional was cast out! The true imposter gets a gold chance to bypass your standings.'}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="pt-4 text-center">
                    {isOnline ? (
                      onlineRoomState.hostId === localPlayerId ? (
                        <button
                          onClick={async () => {
                            const roomRef = doc(db, 'rooms', roomId);
                            await updateDoc(roomRef, { status: 'GUESSING' });
                          }}
                          className="w-full max-w-xs py-4 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all"
                        >
                          {languageState === 'Arabic' ? 'التالي: فرصة التخمين للـ Imposter' : 'Allow Imposter Guess Turning'}
                        </button>
                      ) : (
                        <p className="text-xs text-zinc-550 italic">
                          {languageState === 'Arabic' ? 'بانتظار تفعيل لوحة التخمين السري للـ Imposter من كابتن الغرفة...' : 'Waiting for host to launch guess turn...'}
                        </p>
                      )
                    ) : (
                      <button
                        onClick={() => setPhase('IMPOSTER_GUESS')}
                        className="w-full max-w-xs py-4 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all"
                      >
                        {languageState === 'Arabic' ? 'الانتقال للـتخمين السري للـ Imposter' : 'Proceed to Guess Mode'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* PHASE: IMPOSTER_GUESS */}
        {phase === 'IMPOSTER_GUESS' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                {languageState === 'Arabic' ? 'فرصة التعادل وكسب 50 نقطة' : 'IMPOSTER COMEBACK GUESS'}
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                {languageState === 'Arabic' ? 'ما هو المصطلح الطبي المشترك؟' : 'Estimate the Secret Medical Term'}
              </h3>
            </div>

            {isOnline ? (
              (() => {
                const local = activePlayers.find(m => m.id === localPlayerId);
                const isImposter = local?.role === 'IMPOSTER';

                if (!isImposter) {
                  return (
                    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 text-sm">
                      {languageState === 'Arabic' ? 'الـ Imposter السري يقوم بالتخمين الآن على شاشته... بانتظاره.' : 'The spy is submitting their diagnostic guess on their device... Please wait.'}
                    </div>
                  );
                }

                return (
                  <div className="space-y-4">
                    <label className="text-xs uppercase text-zinc-555 block text-left">
                      {languageState === 'Arabic' ? 'ابحث لتحديد وتأكيد تخمينك' : 'Search to cast your guess'}
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-4 text-zinc-650" size={18} />
                      <input
                        type="text"
                        placeholder={languageState === 'Arabic' ? 'ابحث بالاسم العربي أو الإنجليزي...' : 'Search clinical term...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-sky-600 rounded-xl pl-12 pr-4 py-3 placeholder:text-zinc-700 text-sm outline-none font-bold text-white"
                      />
                    </div>
                    <div className="space-y-1 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden max-h-[220px] overflow-y-auto custom-scrollbar">
                      {filteredSearchWords.map((word) => (
                        <button
                          key={word.id}
                          onClick={() => submitOnlineImposterGuess(word.id)}
                          className="w-full text-left px-4 py-3.5 hover:bg-sky-600/15 border-b border-zinc-900 text-xs font-bold flex items-center justify-between text-white"
                        >
                          <span>{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">{word.type}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="space-y-6">
                <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <p className="text-xs font-bold text-zinc-400 leading-normal text-center">
                    {languageState === 'Arabic' ? 'أعط الهاتف لـلشهود كشخص Imposter وأدخل التخمين غيابيًا:' : 'Hand over phone to the spy player to guess:'}
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  <div className="relative">
                    <Search className="absolute left-4 top-4 text-zinc-650" size={18} />
                    <input
                      type="text"
                      placeholder={languageState === 'Arabic' ? 'ابحث بالاسم العربي أو الإنجليزي...' : 'Search term...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-sky-600 rounded-xl pl-12 pr-4 py-3 text-sm outline-none font-bold text-white"
                    />
                  </div>
                  <div className="space-y-1 bg-zinc-950 border border-zinc-805 rounded-xl overflow-hidden max-h-[200px] overflow-y-auto custom-scrollbar">
                    {filteredSearchWords.map((word) => (
                      <button
                        key={word.id}
                        onClick={() => submitOfflineImposterGuess(word.id)}
                        className="w-full text-left px-4 py-3.5 hover:bg-indigo-600/15 border-b border-zinc-900 text-xs font-bold flex items-center justify-between text-white"
                      >
                        <span>{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</span>
                        <span className="text-[10px] text-zinc-500 font-mono">{word.type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* PHASE: TWO_PLAYERS_DISCUSSION_GUESS */}
        {phase === 'TWO_PLAYERS_DISCUSSION_GUESS' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            <div className="space-y-2 py-4">
              <span className="px-3.5 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-black uppercase tracking-widest inline-block">
                {languageState === 'Arabic' ? 'جولة التخمين المتبادل المزدوج' : 'COOPERATIVE GUESS GAME (2 PLAYERS)'}
              </span>
              <p className="text-zinc-500 text-xs">
                {languageState === 'Arabic' 
                  ? 'يمتلك كل لاعب منكما مصطلحاً مختلفاً، تبادلوا الأسئلة بحذر ثم خمنوا الكلمة الأخرى للحصول على 50 نقطة صريحة!' 
                  : 'You hold opposite secret concept cards. Question wisely and locate the peer word!'}
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setShowQuestionExamples(!showQuestionExamples)}
                className="w-full flex items-center justify-between p-3.5 bg-zinc-900 hover:bg-zinc-850 rounded-xl border border-zinc-800 transition-all font-semibold"
              >
                <span className="flex items-center gap-2 text-xs text-sky-400">
                  <HelpCircle size={14} />
                  {languageState === 'Arabic' ? 'أمثلة ونماذج على نوعية الأسئلة الطبية' : 'Diagnostics guidelines questions'}
                </span>
                <span className="text-xs text-zinc-500">{showQuestionExamples ? '▼' : '▲'}</span>
              </button>

              {showQuestionExamples && (
                <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-xl text-left space-y-2 max-h-[180px] overflow-y-auto custom-scrollbar">
                  {exampleQuestions.map((q, i) => (
                    <p key={i} className="text-xs text-zinc-400 leading-relaxed">- {q.ar}</p>
                  ))}
                </div>
              )}
            </div>

            {!isOnline ? (
              <div className="space-y-6 pt-4">
                {activePlayers.map((p) => {
                  const hasGuessed = offlineGuesses[p.id];
                  const otherPlayer = activePlayers.find(o => o.id !== p.id);

                  return (
                    <div key={p.id} className="p-5 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-3.5 text-left">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-black text-white italic">{p.name}</p>
                        {hasGuessed ? (
                          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                            {languageState === 'Arabic' ? 'تم تقديم التخمين ✓' : 'Guess Submitted ✓'}
                          </span>
                        ) : (
                          <span className="text-[10px] text-zinc-500 font-bold uppercase">
                            {languageState === 'Arabic' ? `يخمن كارت: [ ${otherPlayer?.name} ]` : `Guess other phone card: [ ${otherPlayer?.name} ]`}
                          </span>
                        )}
                      </div>

                      {!hasGuessed && (
                        <div className="space-y-2">
                          <div className="relative">
                            <Search className="absolute left-3 top-3 text-zinc-650" size={14} />
                            <input
                              type="text"
                              placeholder={languageState === 'Arabic' ? 'ابحث لتأكيد تخمينك...' : 'Search term...'}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full bg-zinc-950 border border-zinc-850 rounded-lg pl-9 pr-3 py-2 text-xs outline-none text-white font-semibold"
                            />
                          </div>
                          {searchQuery && (
                            <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-850">
                              {filteredSearchWords.map((word) => (
                                <button
                                  key={word.id}
                                  onClick={() => {
                                    submitOfflineTwoPlayersGuess(p.id, word.id);
                                    setSearchQuery('');
                                  }}
                                  className="w-full text-left px-3 py-2 hover:bg-sky-600/15 border-b border-zinc-900 text-[11px] font-bold text-white flex justify-between"
                                >
                                  <span>{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</span>
                                  <span className="text-[9px] text-zinc-550">{word.type}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6 pt-4 text-left">
                {(() => {
                  const local = activePlayers.find(m => m.id === localPlayerId);
                  const other = activePlayers.find(m => m.id !== localPlayerId);
                  if (!local || !other || !onlineRoomState) return null;

                  const hasLocalGuessed = onlineRoomState.twoPlayersGuessMatched[localPlayerId];

                  return (
                    <div className="space-y-4">
                      {(() => {
                        const word = getWordDetails(local.assignedWordId);
                        if (!word) return null;
                        return (
                          <div className="bg-zinc-900/60 p-4 border border-zinc-800 rounded-2xl space-y-1.5">
                            <span className="text-[10px] text-zinc-500 font-bold block uppercase">{languageState === 'Arabic' ? 'مراجع محتوى كرتك السري للإجابة' : 'Your secret card reference'}</span>
                            <p className="text-base font-black text-white">{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</p>
                            <div className="space-y-2 text-[11px] text-zinc-400 border-t border-zinc-900 pt-3 leading-relaxed">
                              {getCluesForWord(word.id, word, languageState).slice(0, showMoreClues ? 10 : 5).map((cl, i) => (
                                <div key={i} className="py-1 border-b border-zinc-900/50 last:border-0">
                                  {renderClueText(cl, 'xs')}
                                </div>
                              ))}
                              {!showMoreClues && (
                                <button
                                  type="button"
                                  onClick={() => setShowMoreClues(true)}
                                  className="mt-2 text-xs font-bold text-sky-400 hover:text-sky-350 transition-all flex items-center gap-1 bg-sky-600/10 hover:bg-sky-600/20 border border-sky-500/20 px-2 py-1 rounded w-full justify-center"
                                >
                                  ✨ {languageState === 'Arabic' ? 'عرض معلومات أخرى (أكثر)' : 'Show more info'}
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()}

                      <div className="bg-zinc-900 p-5 rounded-3xl border border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-sky-400 uppercase">
                            {languageState === 'Arabic' ? `خمّن كرت زميلك: ${other.name}` : `Guess card of peer: ${other.name}`}
                          </span>
                        </div>

                        {hasLocalGuessed ? (
                          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-850 text-center text-xs font-bold text-emerald-400">
                            {languageState === 'Arabic' ? 'تم تدوين تخمينك! بانتظار اللاعب الآخر...' : 'Your guess is saved! Waiting for companion...'}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="relative">
                              <Search className="absolute left-3 top-3 text-zinc-650" size={14} />
                              <input
                                type="text"
                                placeholder={languageState === 'Arabic' ? 'ابحث لتخمين الحالة...' : 'Search term...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-zinc-950 border border-zinc-850 rounded-lg pl-9 pr-3 py-2 text-xs text-white"
                              />
                            </div>
                            {searchQuery && (
                              <div className="bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden">
                                {filteredSearchWords.map((word) => (
                                  <button
                                    key={word.id}
                                    onClick={() => {
                                      submitOnlineTwoPlayersGuess(word.id);
                                      setSearchQuery('');
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-sky-600/15 border-b border-zinc-900 text-[11px] font-bold text-white flex justify-between"
                                  >
                                    <span>{languageState === 'Arabic' ? word.word.Arabic : word.word.English}</span>
                                    <span className="text-[9px] text-zinc-500">{word.type}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </motion.div>
        )}

        {/* PHASE: ROUND_RESULT */}
        {phase === 'ROUND_RESULT' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 max-w-lg mx-auto text-center"
          >
            <div className="space-y-4">
              <div className="w-20 h-20 bg-yellow-400/20 border-2 border-yellow-400/50 rounded-[2rem] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(250,204,21,0.15)] text-yellow-400">
                <Trophy size={40} />
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight italic">
                {languageState === 'Arabic' ? 'لوحة النتائج الإجمالية' : 'CLINICAL STANDINGS'}
              </h3>
            </div>

            {secretWord && playerCount >= 2 && (
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl max-w-sm mx-auto text-left space-y-1">
                <span className="text-[9px] text-zinc-500 font-bold block uppercase">{languageState === 'Arabic' ? 'المصطلح السري الصحيح في الجلسة كان' : 'SECRET TERM WAS'}</span>
                <p className="text-base font-extrabold text-sky-400">
                  {languageState === 'Arabic' ? secretWord.word.Arabic : secretWord.word.English} 
                  <span className="text-xs text-zinc-450 font-semibold italic ml-1">({secretWord.word.English})</span>
                </p>
                {imposterAssignedWord && playerCount >= 3 && (
                  <p className="text-[11px] text-zinc-400">
                    <span className="font-bold">{languageState === 'Arabic' ? 'المرض القريب المضلل: ' : 'Stealth assigned term: '}</span>
                    {languageState === 'Arabic' ? imposterAssignedWord.word.Arabic : imposterAssignedWord.word.English}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2 pt-2">
              {activePlayers.map((p, idx) => (
                <div key={p.id} className="flex items-center justify-between bg-zinc-900/60 p-4.5 rounded-2xl border border-zinc-850">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-zinc-950 text-xs font-black text-zinc-400 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-950 border border-zinc-850 flex items-center justify-center shrink-0">
                      <AnimalDoctorAvatar avatarId={p.avatarId} size={38} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-black text-white">{p.name}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                        {p.role === 'IMPOSTER' ? (languageState === 'Arabic' ? 'Imposter' : 'Imposter') : (languageState === 'Arabic' ? 'بريء' : 'Innocent')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-sky-400">{p.score}</span>
                    <span className="text-[9px] font-bold text-zinc-650 ml-1 uppercase">PTS</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {isOnline ? (
                onlineRoomState.hostId === localPlayerId ? (
                  <button
                    onClick={resetOnlineRound}
                    className="flex-1 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase rounded-xl tracking-widest transition-all"
                  >
                    {languageState === 'Arabic' ? 'بدء جولة جديدة للكل' : 'Next Round for All'}
                  </button>
                ) : (
                  <p className="w-full text-xs text-zinc-550 italic block">
                    {languageState === 'Arabic' ? 'بانتظار تفعيل الجولة الجديدة من كابتن الغرفة...' : 'Waiting for host to activate next round...'}
                  </p>
                )
              ) : (
                <>
                  <button
                    onClick={startNextRoundOffline}
                    className="flex-1 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase rounded-xl tracking-widest transition-all"
                  >
                    {languageState === 'Arabic' ? 'جولة أخرى تالية' : 'Next Round Session'}
                  </button>
                  <button
                    onClick={() => {
                      setPhase('ENTRY');
                      setOfflineVotes({});
                      setOfflineGuesses({});
                    }}
                    className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs uppercase rounded-xl tracking-widest transition-all"
                  >
                    {languageState === 'Arabic' ? 'الخروج للرئيسية' : 'Exit to lobby'}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Specialty Selection Modal */}
      <AnimatePresence>
        {isAdvancedModalOpen && (
          <div className="fixed inset-0 bg-zinc-950/85 backdrop-blur-md z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg p-5 relative shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Settings size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">
                      {languageState === 'Arabic' ? 'الفلترة الطبية المتقدمة' : 'Advanced Specialty Filters'}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setIsAdvancedModalOpen(false)}
                  className="text-zinc-500 hover:text-white font-extrabold text-sm p-1 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Main Selection Area */}
              <div className="space-y-5 flex-1 overflow-y-auto pr-1 scrollbar-thin">
                
                {/* Pre-sets / Quick Selection Controls */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setTempAdvancedFilter(prev => ({
                          ...prev,
                          subjects: Array.from(new Set([...prev.subjects, ...clinicalSpecialties.map(s => s.id)]))
                        }));
                      }}
                      className="px-2.5 py-1 bg-zinc-850 hover:bg-zinc-800 text-zinc-300 rounded-lg text-[10px] font-bold border border-zinc-800/80 transition-colors"
                    >
                      {languageState === 'Arabic' ? 'كل الإكلينيكي' : 'All Clinical'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTempAdvancedFilter(prev => ({
                          ...prev,
                          subjects: Array.from(new Set([...prev.subjects, ...academicSpecialties.map(s => s.id)]))
                        }));
                      }}
                      className="px-2.5 py-1 bg-zinc-850 hover:bg-zinc-800 text-zinc-300 rounded-lg text-[10px] font-bold border border-zinc-800/80 transition-colors"
                    >
                      {languageState === 'Arabic' ? 'كل الأكاديمي' : 'All Academic'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTempAdvancedFilter(prev => ({
                          ...prev,
                          subjects: ['Anatomy', 'Pathology', 'Histology', 'Cardiology', 'Gastroenterology']
                        }));
                      }}
                      className="px-2.5 py-1 bg-sky-600/10 border border-sky-500/20 hover:bg-sky-600/20 text-sky-400 rounded-lg text-[10px] font-bold transition-colors"
                    >
                      {languageState === 'Arabic' ? 'دمج موازن' : 'Balanced Mix'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTempAdvancedFilter(prev => ({
                          ...prev,
                          subjects: []
                        }));
                      }}
                      className="px-2.5 py-1 bg-zinc-950 text-rose-500 border border-zinc-800 hover:bg-rose-500/10 rounded-lg text-[10px] font-bold transition-colors ml-auto"
                    >
                      {languageState === 'Arabic' ? 'مسح الكل' : 'Clear'}
                    </button>
                  </div>
                </div>

                {/* Clinical Specialties - HORIZONTAL */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider block">
                    {languageState === 'Arabic' ? 'تخصصات كلينيكال (إكلينيكية)' : 'Clinical Specialties'}
                  </span>
                  <div className="flex gap-1.5 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                    {clinicalSpecialties.map(spec => {
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
                          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                            isSelected 
                              ? 'bg-teal-500/10 border-teal-500 text-teal-400' 
                              : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {languageState === 'Arabic' ? spec.nameAr : spec.nameEn}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Academic Specialties - HORIZONTAL */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider block">
                    {languageState === 'Arabic' ? 'تخصصات أكاديمية (أساسية)' : 'Academic Specialties'}
                  </span>
                  <div className="flex gap-1.5 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                    {academicSpecialties.map(spec => {
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
                          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                            isSelected 
                              ? 'bg-sky-500/10 border-sky-500 text-sky-400' 
                              : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {languageState === 'Arabic' ? spec.nameAr : spec.nameEn}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Modules for Selected Specialties */}
                {tempAdvancedFilter.subjects.length > 0 && (
                  <div className="space-y-2 border-t border-zinc-800/60 pt-3">
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-wider block">
                      {languageState === 'Arabic' ? 'تحديد موديول التخصصات المختارة (اختياري)' : 'Custom Modules for Selected Specialties (Optional)'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                      {tempAdvancedFilter.subjects.map(subId => {
                        const spec = [...clinicalSpecialties, ...academicSpecialties].find(s => s.id === subId);
                        if (!spec) return null;
                        return (
                          <div key={subId} className="flex items-center justify-between p-1.5 bg-zinc-950 border border-zinc-850/60 rounded-xl">
                            <span className="text-[10px] font-bold text-zinc-300 truncate max-w-[120px]">
                              {languageState === 'Arabic' ? spec.nameAr : spec.nameEn}
                            </span>
                            <div className="relative">
                              <select
                                value={tempAdvancedFilter.subjectModules?.[subId] || 'All'}
                                onChange={(e) => {
                                  const mId = e.target.value;
                                  setTempAdvancedFilter(prev => ({
                                    ...prev,
                                    subjectModules: {
                                      ...(prev.subjectModules || {}),
                                      [subId]: mId
                                    }
                                  }));
                                }}
                                className="appearance-none bg-zinc-900 border border-zinc-800 text-[9px] font-black text-white rounded pl-2 pr-6 py-0.5 outline-none focus:border-sky-500 transition-all cursor-pointer"
                              >
                                <option value="All">{languageState === 'Arabic' ? 'الكل' : 'All'}</option>
                                {Object.entries(MODULE_MAPPINGS).map(([id, m]) => (
                                  <option key={id} value={id}>
                                    {languageState === 'Arabic' ? m.nameAr : m.nameEn}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 pointer-events-none text-zinc-400">
                                <ChevronDown className="w-2.5 h-2.5" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Module-specific general filter configuration */}
                <div className="border-t border-zinc-800/60 pt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {languageState === 'Arabic' ? 'تصفية المواد بموديول عام' : 'Filter by General Module'}
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempAdvancedFilter.moduleFilterEnabled}
                        onChange={(e) => setTempAdvancedFilter(prev => ({
                          ...prev,
                          moduleFilterEnabled: e.target.checked
                        }))}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-600 peer-checked:after:bg-white"></div>
                    </label>
                  </div>

                  {tempAdvancedFilter.moduleFilterEnabled && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none"
                    >
                      {Object.entries(MODULE_MAPPINGS).map(([id, item]) => (
                        <button
                          type="button"
                          key={id}
                          onClick={() => setTempAdvancedFilter(prev => ({ ...prev, selectedModule: id }))}
                          className={`shrink-0 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all text-center ${
                            tempAdvancedFilter.selectedModule === id
                              ? 'bg-sky-600/10 border-sky-500 text-sky-400'
                              : 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {languageState === 'Arabic' ? item.nameAr : item.nameEn}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="border-t border-zinc-800 pt-3 mt-4 flex gap-2 shrink-0">
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
                    if (editingFilterType === 'single') {
                      setSingleAdvancedFilter(finalFilter);
                    } else {
                      setMultiAdvancedFilter(finalFilter);
                    }
                    setIsAdvancedModalOpen(false);
                  }}
                  className="flex-1 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-black transition-colors shadow-lg"
                >
                  {languageState === 'Arabic' ? 'تفعيل الفلتر المتقدم' : 'Apply Advanced Filter'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const disabledFilter = {
                      enabled: false,
                      subjects: [],
                      moduleFilterEnabled: false,
                      selectedModule: 'GIT',
                      subjectModules: {}
                    };
                    if (editingFilterType === 'single') {
                      setSingleAdvancedFilter(disabledFilter);
                      setSingleSpecialty('All');
                    } else {
                      setMultiAdvancedFilter(disabledFilter);
                      setMultiSpecialty('All');
                    }
                    setIsAdvancedModalOpen(false);
                  }}
                  className="py-2.5 px-3 bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-colors"
                >
                  {languageState === 'Arabic' ? 'تعطيل وإعادة ضبط' : 'Disable'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 bg-zinc-950/85 backdrop-blur-md z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-6 relative shadow-2xl flex flex-col my-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600/10 border border-red-500/30 rounded-full flex items-center justify-center text-red-400">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    {languageState === 'Arabic' ? 'تأكيد الخروج' : 'Confirm Exit'}
                  </h3>
                  <p className="text-xs text-zinc-550 font-semibold">
                    {languageState === 'Arabic' ? 'تنبيه: سيتم إنهاء اللعبة الحالية' : 'Warning: Current game will be terminated'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-medium">
                {languageState === 'Arabic' 
                  ? 'هل أنت متأكد من رغبتك بالرجوع للقائمة والبدء من جديد؟ سيؤدي هذا إلى مسح التقدم الحالي.' 
                  : 'Are you sure you want to quit and return to the main menu? Your current game progress will be lost.'}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setPhase('ENTRY');
                    setRoomId('');
                    setOnlineRoomState(null);
                    setOfflineVotes({});
                    setOfflineGuesses({});
                    setShowExitConfirm(false);
                  }}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg transform active:scale-[0.98]"
                >
                  {languageState === 'Arabic' ? 'نعم، خروج' : 'Yes, Exit'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-750 text-zinc-300 rounded-xl text-xs font-bold transition-all duration-300"
                >
                  {languageState === 'Arabic' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(14, 165, 233, 0.35);
          border-radius: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.6);
        }
      `}</style>
    </div>
  );
};
