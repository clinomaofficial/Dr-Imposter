export type Language = 'Arabic' | 'English';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Duration = '15 min' | '30 min' | '60 min';
export type QuestionType = 'Academic' | 'Clinical' | 'Both';

export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface OpenQuestion {
  question: string;
  answer: string;
}

export interface StudySection {
  title: string;
  content: string;
  level: 1 | 2 | 3;
  type: 'explanation' | 'clinical-pearl' | 'anatomy' | 'pathology';
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface AIResponse {
  studyGuide: StudySection[];
  flashcards: Flashcard[];
  practiceMCQs: MCQ[];
  practiceOpenQuestions: OpenQuestion[];
  testMCQs: MCQ[];
  summaryPoints: string[];
  criticalExamPoints: string[];
}

export interface CaseReference {
  label: string;
  url: string;
}

export interface DiagnosisOption {
  id: string;
  name: string;
  explanation: string;
  referenceUrl: string;
}

export interface PatientDemographics {
  name: string;
  age: number;
  residence: string;
  familyHistory: string;
  consanguinity: boolean;
  similarCases: string;
}

export interface Investigation {
  type: string;
  result: string;
  imageUrl?: string;
}

export interface DetectiveCase {
  id: string;
  title: string;
  specialtyId: string;
  patientDemographics?: PatientDemographics;
  patientChat: {
    sender: 'patient' | 'doctor';
    text: string;
    imageUrl?: string;
    keywords?: {
      word: string;
      linkedDiseases: string[];
    }[];
  }[];
  history: string;
  physicalExamination: string;
  investigations: Investigation[];
  correctDiagnosisId: string;
  diagnosisOptions: DiagnosisOption[];
  treatmentPlan: {
    activeIngredients: string[];
    brandNames: string[];
    instructions: string;
  };
  fullCaseUrl: string;
  patientImageUrl?: string;
}

export interface CollectiveSession {
  id: string;
  caseId: string;
  hostId: string;
  roomCode: string;
  participants: {
    userId: string;
    pseudonym: string;
    avatarUrl: string;
    vote?: number;
  }[];
  messages: {
    userId: string;
    pseudonym: string;
    avatarUrl: string;
    text: string;
    timestamp: number;
  }[];
  startTime: number;
  durationSeconds: number;
  status: 'lobby' | 'active' | 'finished';
  lastActive: number;
}

export interface Specialty {
  id: string;
  name: { Arabic: string, English: string };
  icon: string;
}

export interface UserPerformance {
  practiceResults: { questionIndex: number; isCorrect: boolean }[];
  testResults: { questionIndex: number; isCorrect: boolean }[];
  weakAreas: string[];
  grade?: number; // percentage
  improvementPoints?: string[];
}

export interface SessionHistory {
  id: string;
  userId?: string;
  timestamp: number;
  inputText: string;
  difficulty: Difficulty;
  qType: QuestionType;
  duration: Duration;
  data: AIResponse;
  performance?: UserPerformance;
}

export interface PublicProject {
  id: string;
  authorId: string;
  authorEmail?: string;
  timestamp: number;
  inputText: string;
  difficulty: Difficulty;
  qType: QuestionType;
  duration: Duration;
  data: AIResponse;
  isPublished: boolean;
  summaryImage?: string;
}

export interface AppSettings {
  publicBankVisible: boolean;
  seenBeforeVisible: boolean;
  medicalCupVisible: boolean;
  medicalDetectiveVisible: boolean;
  mainAppVisible: boolean;
  tikTebVisible: boolean;
}

export type AppView = 'PORTAL' | 'HOME' | 'LOADING' | 'PICK_TOPIC' | 'STUDY' | 'CARDS' | 'PRACTICE' | 'TEST' | 'SUMMARY_STEP' | 'SUMMARY' | 'IMPROVE' | 'HISTORY' | 'ADMIN' | 'PUBLIC_BANK' | 'PROFILE' | 'MEDICAL_DETECTIVE' | 'SEEN_BEFORE' | 'MEDICAL_CUP' | 'TIK_TEB';

export interface AppUser {
  id: string;
  email: string;
  displayName?: string;
  role: 'super_admin' | 'admin' | 'supervisor' | 'user';
  status: 'active' | 'blocked';
  permissions: {
    medicalSubject: boolean;
    educationalFile: boolean;
    medicalDetective: boolean;
    tikTeb: boolean;
  };
  subscriptionActive: boolean;
  subscriptionEnd?: number; // Optional timestamp
  totalAttempts: number;
  remainingAttempts: number;
  remainingDetectiveAttempts: number;
  lastLogin: number;
  customValue?: number;
  pseudonym?: string;
  detectiveScore: number;
  isOfflineFallback?: boolean;
}

export interface DetectiveRank {
  userId: string;
  pseudonym: string;
  score: number;
  specialtyId?: string; // Optional if overall
}
