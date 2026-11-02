export interface WordExpansionEntry {
  word: {
    id: string;
    word: { Arabic: string; English: string };
    level: 'Academic' | 'Clinical' | 'Both';
    difficulty: 1 | 2 | 3;
    type: 'Organ' | 'Component' | 'Disease' | 'Equipment' | 'Syndrome' | 'Pharma' | 'Muscle' | 'Nerve' | 'Other' | 'Parasite' | 'Technique' | 'Cell' | 'Tissue';
    subjects: string[];
    synonyms: string[];
    guessingDifficulty?: 1 | 2 | 3;
  };
  hints: {
    Arabic: string[];
    English: string[];
  };
  flashcard?: {
    Arabic: {
      etiology: string;
      goldStandard: string;
      firstLineRx: string;
      keyDifferentiator: string;
    };
    English: {
      etiology: string;
      goldStandard: string;
      firstLineRx: string;
      keyDifferentiator: string;
    };
  };
}
