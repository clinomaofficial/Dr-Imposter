export interface MedicalWord {
  id: string;
  word: {
    Arabic: string;
    English: string;
  };
  level: 'Academic' | 'Clinical' | 'Both';
  difficulty: 1 | 2 | 3;
  type: 'Organ' | 'Component' | 'Disease' | 'Equipment' | 'Syndrome' | 'Pharma' | 'Muscle' | 'Nerve' | 'Other' | 'Parasite' | 'Technique' | 'Cell' | 'Tissue';
  subjects: string[];
  synonyms?: string[];
  guessingDifficulty?: 1 | 2 | 3;
}

export const medicalWords: MedicalWord[] = [
  {
    id: 'w1',
    word: { Arabic: 'القلب', English: 'Heart' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Cardiology', 'Vascular Surgery', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['القلب', 'قلب', 'العضلة القلبية', 'Cardia', 'القالب', 'الأذين والبطين']
  },
  {
    id: 'w2',
    word: { Arabic: 'الكبد', English: 'Liver' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Gastroenterology', 'General Surgery', 'Internal Medicine'],
    synonyms: ['الكبد', 'كبد', 'كبدي', 'hepatic', 'كبدة', 'المرارة']
  },
  {
    id: 'w3',
    word: { Arabic: 'العضلة ثنائية الرؤوس', English: 'Biceps' },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery', 'Rheumatology'],
    synonyms: ['العضلة ثنائية الرؤوس', 'الباي', 'البايسبس', 'بايسيبس', 'العضلة ذات الرأسين', 'ثنائية الرؤوس العضدية']
  },
  {
    id: 'w4',
    word: { Arabic: 'عصب الزند', English: 'Ulnar Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['عصب الزند', 'العصب الزندي', 'عصب كوع', 'الزند', 'عرق الزند', 'Ulnar']
  },
  {
    id: 'w5',
    word: { Arabic: 'السكري', English: 'Diabetes' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Endocrinology', 'Physiology', 'Biochemistry'],
    synonyms: ['السكري', 'سكر', 'مرض السكر', 'السكري النوع الأول', 'السكري النوع الثاني', 'الأنسولين', 'ديابيتس']
  },
  {
    id: 'w6',
    word: { Arabic: 'سماعة طبيبة', English: 'Stethoscope' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ['General', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['سماعة طبيبة', 'سماعة', 'سماعه', 'السماعة الطبية', 'سماعة الطبيب', 'سماعه طبيه']
  },
  {
    id: 'w7',
    word: { Arabic: 'باراسيتامول', English: 'Paracetamol' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['باراسيتامول', 'بندول', 'بانادول', 'أدول', 'بارامول', 'أستامينوفين', 'سيتال', 'Panadol', 'Tylenol', 'Acetaminophen']
  },
  {
    id: 'w8',
    word: { Arabic: 'أوجمنتين', English: 'Augmentin' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['أوجمنتين', 'اوجمنتين', 'أوجمانتين', 'اموكسيسيلين كلافولانيك', 'كلافوكس', 'Augmentine']
  },
  {
    id: 'w9',
    word: { Arabic: 'متلازمة داون', English: 'Down Syndrome' },
    level: 'Both',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Pediatrics', 'Genetics', 'Internal Medicine', 'Neurology', 'Family Medicine'],
    synonyms: ['متلازمة داون', 'داون', 'منغولي', 'تثلث الصبغي 21', 'Trisomy 21', 'دوان']
  },
  {
    id: 'w10',
    word: { Arabic: 'تليف الكبد', English: 'Cirrhosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Surgery'],
    synonyms: ['تليف الكبد', 'تليف', 'التليف الكبدي', 'تليف كبدي', 'فشل كبدي', 'الاستسقاء']
  },
  {
    id: 'w11',
    word: { Arabic: 'الأنيوريزم', English: 'Aneurysm' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Surgery', 'Cardiology'],
    synonyms: ['الأنيوريزم', 'أنيوريزم', 'تمدد الشرايين', 'أم الدم', 'تمدد لوكالي', 'Aneurism']
  },
  {
    id: 'w12',
    word: { Arabic: 'الميتوكوندريا', English: 'Mitochondria' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Biochemistry', 'Histology'],
    synonyms: ['الميتوكوندريا', 'ميتوكوندريا', 'بيوت الطاقة', 'الميتوكندريا', 'مصنع الطاقة']
  },
  {
    id: 'w13',
    word: { Arabic: 'عضلة الحجاب الحاجز', English: 'Diaphragm' },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery', 'Pulmonology', 'Emergency Medicine', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['عضلة الحجاب الحاجز', 'حجاب حاجز', 'الحجاب الحاجز', 'حجاب الحاجز']
  },
  {
    id: 'w14',
    word: { Arabic: 'العصب الحائر', English: 'Vagus Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الحائر', 'الحائر', 'العصب العاشر', 'العصب المبهم', 'العصب المبهم العاشر', 'Vagus']
  },
  {
    id: 'w15',
    word: { Arabic: 'الأنسولين', English: 'Insulin' },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ['Biochemistry', 'Physiology', 'Internal Medicine', 'Endocrinology'],
    synonyms: ['الأنسولين', 'انسولين', 'الانسولين', 'حقنة انسولين']
  },
  {
    id: 'w16',
    word: { Arabic: 'جهاز الضغط', English: 'Sphygmomanometer' },
    level: 'Both',
    difficulty: 1,
    type: 'Equipment',
    subjects: ['General', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['جهاز الضغط', 'مقياس الضغط', 'جهاز ضغط الدم', 'زئبقي الضغط', 'كفة الضغط']
  },
  {
    id: 'w17',
    word: { Arabic: 'ثلاثي الرؤوس العضدية', English: 'Triceps brachii' },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery'],
    synonyms: ['ثلاثي الرؤوس العضدية', 'التراي', 'ترايسبس', 'ترايسيبس', 'العضلة ثلاثية الرؤوس', 'ثنائية العضدية']
  },
  {
    id: 'w18',
    word: { Arabic: 'العصب الوركي', English: 'Sciatic Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الوركي', 'عرق النسا', 'العصب النساوي', 'عرق نسا', 'الوركي', 'Sciatica']
  },
  {
    id: 'w19',
    word: { Arabic: 'الفشل الكلوي', English: 'Renal Failure' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Urology', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['الفشل الكلوي', 'فشل كلوي', 'قصور كلوي', 'فشل كلى', 'قصور كلى', 'renal insufficiency']
  },
  {
    id: 'w20',
    word: { Arabic: 'متلازمة مارفان', English: 'Marfan Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Internal Medicine', 'Pediatrics', 'Genetics', 'Neurology'],
    synonyms: ['متلازمة مارفان', 'مارفان', 'مروان', 'متلازمة مروان', 'Marfan']
  },
  {
    id: 'w21',
    word: { Arabic: 'الأموكسيسيلين', English: 'Amoxicillin' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['الأموكسيسيلين', 'اموكسيسيلين', 'أموكسيل', 'اموكسيل', 'أمكسيل']
  },
  {
    id: 'w22',
    word: { Arabic: 'الصمام الميترالي', English: 'Mitral Valve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Cardiology', 'Vascular Surgery', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['الصمام الميترالي', 'ميترالي', 'صمام تاجي', 'الصمام التاجي', 'الميترالي', 'bicuspid valve']
  },
  {
    id: 'w23',
    word: { Arabic: 'متلازمة توريت', English: 'Tourette Syndrome' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Psychiatry', 'Neurology', 'Pediatrics', 'Genetics', 'Internal Medicine'],
    synonyms: ['متلازمة توريت', 'توريت', 'تورت', 'تشنجات تورت', 'متلازمة تورت']
  },
  {
    id: 'w24',
    word: { Arabic: 'الوارفارين', English: 'Warfarin' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['الوارفارين', 'وارفارين', 'كومادين', 'Coumadin', 'مذيب الجلطة']
  },
  {
    id: 'w25',
    word: { Arabic: 'عضلة الفخذ', English: 'Quadriceps' },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery'],
    synonyms: ['عضلة الفخذ', 'الكوادرسبس', 'رباعية الرؤوس', 'عضلة الفخذ الأمامية', 'رباعية الفخذ']
  },
  {
    id: 'w26',
    word: { Arabic: 'العصب البصري', English: 'Optic Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب البصري', 'العصب الثاني', 'عصب بصري', 'عصب العين', 'Optic']
  },
  {
    id: 'w27',
    word: { Arabic: 'جهاز غسيل الكلى', English: 'Dialysis Machine' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Internal Medicine', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['جهاز غسيل الكلى', 'غسيل كلى', 'جهاز الغسيل الكلوي', 'ديلزة الكلى', 'ماكينة الغسيل']
  },
  {
    id: 'w28',
    word: { Arabic: 'عظمة الفخذ', English: 'Femur' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Anatomy'],
    synonyms: ['عظمة الفخذ', 'فخذ', 'عظم الفخذ', 'الفيمر', 'علاية الورك']
  },
  {
    id: 'w29',
    word: { Arabic: 'التهاب الرئة', English: 'Pneumonia' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia'],
    synonyms: ['التهاب الرئة', 'التهاب رئوي', 'ذات الرئة', 'پنومونيا', 'رئوي حاد', 'برودة الص الصدر']
  },
  {
    id: 'w30',
    word: { Arabic: 'الليبيتر', English: 'Lipitor' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['الليبيتر', 'ليبيتور', 'أتورفاستاتين', 'اتورفاستاتين', 'خافض الكولسترول', 'ستاتين', 'Atorvastatin']
  },
  {
    id: 'w31',
    word: { Arabic: 'التهاب الزائدة الدودية', English: 'Appendicitis' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Surgery', 'Pediatrics', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['التهاب الزائدة الدودية', 'الزائدة', 'زائدة', 'التهاب زائدة', 'مصران أعور', 'الزائدة الدودية', 'التهاب الزايده']
  },
  {
    id: 'w32',
    word: { Arabic: 'الأسبرين', English: 'Aspirin' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['الأسبرين', 'اسبرين', 'أسبيرين', 'ريفو', 'أسبرين أطفال', 'حمض الساليسيليك', 'Acetylsalicylic Acid']
  },
  {
    id: 'w33',
    word: { Arabic: 'الدماغ', English: 'Brain' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'Pathology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['الدماغ', 'مخ', 'المخ', 'دماغ', 'الجهاز العصبي المركزي']
  },
  {
    id: 'w34',
    word: { Arabic: 'الكلية', English: 'Kidney' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Urology', 'Internal Medicine'],
    synonyms: ['الكلية', 'كلية', 'كلى', 'القصور الكلوى', 'Nephros']
  },
  {
    id: 'w35',
    word: { Arabic: 'الربو', English: 'Asthma' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia'],
    synonyms: ['الربو', 'حساسية صدر', 'ربو', 'أزمة تنفسية', 'حساسية الصدر', 'ضيق نفس']
  },
  {
    id: 'w36',
    word: { Arabic: 'البنسلين', English: 'Penicillin' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['البنسلين', 'بنسلين', 'بنسيلين', 'أوسبن', 'Penicilin']
  },
  {
    id: 'w37',
    word: { Arabic: 'مرض باركنسون', English: 'Parkinson Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Internal Medicine', 'Anatomy', 'Physiology', 'Psychiatry'],
    synonyms: ['مرض باركنسون', 'باركنسون', 'شلل رعاش', 'الشلل الرعاش', 'مرض الشلل الرعاش', 'باركنسنس']
  },
  {
    id: 'w38',
    word: { Arabic: 'مرض ألزهايمر', English: 'Alzheimer Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Psychiatry', 'Anatomy', 'Physiology', 'Internal Medicine'],
    synonyms: ['مرض ألزهايمر', 'خرف', 'الزهايمر', 'ألزهايمر', 'الخرف الشيخوخي', 'فقدان الذاكرة']
  },
  {
    id: 'w39',
    word: { Arabic: 'سرطان الرئة', English: 'Lung Cancer' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Surgery', 'Oncology', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia', 'Pathology', 'Hematology'],
    synonyms: ['سرطان الرئة', 'سرطان رئة', 'اورام الرئة', 'ورم رئوي خبيث']
  },
  {
    id: 'w40',
    word: { Arabic: 'الرباط الصليبي خلفي او امامي', English: 'Cruciate Ligament' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Surgery'],
    synonyms: ['الرباط الصليبي خلفي او امامي', 'صليبي', 'الرباط الصليبي', 'رباط الصليبي', 'قطع صليبي', 'ACL', 'PCL']
  },
  {
    id: 'w41',
    word: { Arabic: 'الغدة الدرقية', English: 'Thyroid Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Internal Medicine', 'Pathology', 'Endocrinology', 'Biochemistry'],
    synonyms: ['الغدة الدرقية', 'درقية', 'الغده الدرقيه', 'غدة الرقبة', 'الدرقية']
  },
  {
    id: 'w42',
    word: { Arabic: 'التهاب المفاصل الروماتويدي', English: 'Rheumatoid Arthritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['التهاب المفاصل الروماتويدي', 'روماتويد', 'الروماتويد', 'المفاصل الروماتيدي', 'التهاب روماتويدي', 'RA']
  },
  {
    id: 'w43',
    word: { Arabic: 'مستقبلات بيتا', English: 'Beta Blockers' },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['مستقبلات بيتا', 'حاصرات بيتا', 'منظمات ضربات القلب', 'بيتا بلوكرز', 'كونكور', 'أنديرال']
  },
  {
    id: 'w44',
    word: { Arabic: 'الأدرينالين', English: 'Adrenaline' },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ['Physiology', 'Pharmacology', 'Urology', 'Internal Medicine', 'Anatomy', 'Pathology', 'Endocrinology', 'Biochemistry'],
    synonyms: ['الأدرينالين', 'ادرينالين', 'ادريانالين', 'هرمون الخوف', 'إبينفرين', 'Epinephrine']
  },
  {
    id: 'w45',
    word: { Arabic: 'المعدة', English: 'Stomach' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Gastroenterology', 'General Surgery', 'Internal Medicine'],
    synonyms: ['المعدة', 'معدة', 'المعده', 'جدار المعدة', 'الهضمية']
  },
  {
    id: 'w46',
    word: { Arabic: 'العصب السابع', English: 'Facial Nerve' },
    level: 'Both',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب السابع', 'عصب سابع', 'العصب الوجهي', 'شلل بيل', 'اللقوة', 'Bell Palsy']
  },
  {
    id: 'w47',
    word: { Arabic: 'التهاب السحايا', English: 'Meningitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Neurology', 'Anatomy', 'Physiology', 'Psychiatry'],
    synonyms: ['التهاب السحايا', 'سحايا', 'التهاب سحائي', 'الحمى الشوكية', 'حمى شوكية', 'مننجايتس']
  },
  {
    id: 'w48',
    word: { Arabic: 'اليرقان', English: 'Jaundice' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics'],
    synonyms: ['اليرقان', 'الصفار', 'صفار الكبد', 'أبو صفار', 'سفيرة', 'اليرقان المواليد']
  },
  {
    id: 'w49',
    word: { Arabic: 'الإنفلونزا', English: 'Influenza' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Infectious Diseases', 'Microbiology', 'Parasitology'],
    synonyms: ['الإنفلونزا', 'انفلونزا', 'برد', 'نزلة برد', 'الرشح', 'جرام سلبي']
  },
  {
    id: 'w50',
    word: { Arabic: 'القولون العصبي', English: 'Irritable Bowel Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine'],
    synonyms: ['القولون العصبي', 'قولون عصبي', 'تهيج القولون', 'تشنج القولون', 'IBS']
  },
  {
    id: 'w51',
    word: { Arabic: 'ارتفاع ضغط الدم', English: 'Hypertension' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Cardiology'],
    synonyms: ['ارتفاع ضغط الدم', 'الضغط المرتفع', 'ضغط الدم المرتفع', 'مرض الضغط', 'القاتل الصامت', 'ضغط']
  },
  {
    id: 'w52',
    word: { Arabic: 'فقر الدم', English: 'Anemia' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Hematology', 'Physiology', 'Biochemistry'],
    synonyms: ['فقر الدم', 'انيميا', 'الأنيميا', 'نقص الحديد', 'تكسر الدم']
  },
  {
    id: 'w53',
    word: { Arabic: 'المضادات الحيوية', English: 'Antibiotics' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['المضادات الحيوية', 'مضاد حيوي', 'مضادات حيوية', 'المضاد', 'مضاد بكتيري']
  },
  {
    id: 'w54',
    word: { Arabic: 'الغدة الكظرية', English: 'Adrenal Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Urology', 'Internal Medicine', 'Endocrinology', 'Biochemistry'],
    synonyms: ['الغدة الكظرية', 'كظرية', 'فوق الكلوية', 'الغدة فوق الكلوية', 'الغده الكظريه']
  },
  {
    id: 'w55',
    word: { Arabic: 'التهاب المعدة', English: 'Gastritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine'],
    synonyms: ['التهاب المعدة', 'التهاب معدة', 'حموضة', 'قرحة خفيفة', 'حرقة المعدة']
  },
  {
    id: 'w56',
    word: { Arabic: 'تلسكوب داخلي', English: 'Endoscope' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Surgery', 'Internal Medicine', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['تلسكوب داخلي', 'منظار', 'المنظار', 'منظار معدة', 'منظار قولون', 'تنظير داخلي', 'أندوسكوب']
  },
  {
    id: 'w57',
    word: { Arabic: 'الحصبة', English: 'Measles' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Public Health'],
    synonyms: ['الحصبة', 'حصبة', 'الحصبه', 'طيش جلدي وبثور']
  },
  {
    id: 'w58',
    word: { Arabic: 'الحجامة', English: 'Cupping Therapy' },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ['General'],
    synonyms: ['الحجامة', 'حجامة', 'حجامه', 'العلاج بالكؤوس', 'التشريط اليدوي']
  },
  {
    id: 'w59',
    word: { Arabic: 'التهاب الكبد الوبائي', English: 'Hepatitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine'],
    synonyms: ['التهاب الكبد الوبائي', 'التهاب الكبد الوبائي سي', 'التهاب الكبد الوبائي بي', 'فيروس الكبد', 'هيباتايتس']
  },
  {
    id: 'w60',
    word: { Arabic: 'الشلل الرعاش', English: 'Parkinsonism' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Anatomy', 'Physiology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['الشلل الرعاش', 'شلل رعاش', 'رعشة الأطراف', 'الرعاش']
  },
  {
    id: 'w61',
    word: { Arabic: 'السل', English: 'Tuberculosis' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine'],
    synonyms: ['السل', 'الدرن', 'درن رئوي', 'درن', 'سل', 'تي بي', 'TB']
  },
  {
    id: 'w62',
    word: { Arabic: 'سرطان الثدي', English: 'Breast Cancer' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Surgery', 'Oncology', 'Pathology', 'Hematology', 'Internal Medicine'],
    synonyms: ['سرطان الثدي', 'سرطان ثدي', 'أورام الثدي', 'الماموغرام']
  },
  {
    id: 'w63',
    word: { Arabic: 'الهيموغلوبين', English: 'Hemoglobin' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Physiology', 'Hematology', 'Internal Medicine'],
    synonyms: ['الهيموغلوبين', 'هيموجلوبين', 'هموجلوبين', 'تحليل الدم', 'خضاب الدم', 'Hb']
  },
  {
    id: 'w64',
    word: { Arabic: 'فصيلة الدم O', English: 'Blood Type O' },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ['Physiology', 'Hematology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['فصيلة الدم O', 'فصيلة O', 'او سالب', 'مستقبل عام', 'مانح عام', 'فصيلة دم o']
  },
  {
    id: 'w65',
    word: { Arabic: 'الكوليسترول', English: 'Cholesterol' },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ['Biochemistry', 'Cardiology'],
    synonyms: ['الكوليسترول', 'كوليسترول', 'كولسترول', 'الدهون النافعة والضارة', 'الدهون الثلاثية']
  },
  {
    id: 'w66',
    word: { Arabic: 'تصلب الشرايين', English: 'Atherosclerosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine'],
    synonyms: ['تصلب الشرايين', 'تصلب شرايين', 'ضيق الشرايين', 'جلطات قلبية وتكلس']
  },
  {
    id: 'w67',
    word: { Arabic: 'الشريان التاجي', English: 'Coronary Artery' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Cardiology', 'Physiology', 'Pathology', 'Vascular Surgery', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['الشريان التاجي', 'الشريان المغذي للقلب', 'التاجية', 'شرايين تاجية', 'تاج الكبد']
  },
  {
    id: 'w68',
    word: { Arabic: 'جهاز الصدمات الكهربائية', English: 'Defibrillator' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'Cardiology', 'General Medicine', 'Anaesthesia', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['جهاز الصدمات الكهربائية', 'جهاز صدمات', 'الدي فايب', 'جهاز الصدم الكهربائي', 'صادم القلب', 'AED', 'Defib']
  },
  {
    id: 'w69',
    word: { Arabic: 'رسم القلب', English: 'Electrocardiogram' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ['Cardiology', 'Internal Medicine', 'Emergency Medicine', 'General Medicine', 'Anaesthesia', 'Vascular Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['رسم القلب', 'تخطيط القلب', 'تخطيط قلب', 'رسم قلب', 'ECG', 'EKG']
  },
  {
    id: 'w70',
    word: { Arabic: 'التصوير بالرنين المغناطيسي', English: 'MRI' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ['Radiology', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['التصوير بالرنين المغناطيسي', 'رنين مغناطيسي', 'اشعة رنين', 'رنين', 'ام ار اي']
  },
  {
    id: 'w71',
    word: { Arabic: 'النبض', English: 'Pulse' },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ['Physiology', 'Cardiology', 'Vascular Surgery', 'Anatomy', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['النبض', 'نبض', 'نبضات القلب', 'معدل النبض', 'Heart Rate']
  },
  {
    id: 'w72',
    word: { Arabic: 'البلازما', English: 'Blood Plasma' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Physiology', 'Hematology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['البلازما', 'بلازما', 'مصورة الدم', 'بلازما غنية بالصفائح']
  },
  {
    id: 'w73',
    word: { Arabic: 'النخاع الشوكي', English: 'Spinal Cord' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'Pathology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['النخاع الشوكي', 'حبل شوكي', 'النخاع الشوكي', 'النخاع المقذوف']
  },
  {
    id: 'w74',
    word: { Arabic: 'عظم الترقوة', English: 'Clavicle' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Anatomy'],
    synonyms: ['عظم الترقوة', 'الترقوة', 'ترقوة', 'عظمة الترقوة']
  },
  {
    id: 'w75',
    word: { Arabic: 'الصفائح الدموية', English: 'Platelets' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Physiology', 'Hematology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['الصفائح الدموية', 'صفائح دموية', 'صفائح الدم', 'المخثرات', 'Thrombocytes']
  },
  {
    id: 'w76',
    word: { Arabic: 'الخلايا الليمفاوية', English: 'Lymphocytes' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Immunology', 'Physiology', 'Hematology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['الخلايا الليمفاوية', 'خلايا ليمفاوية', 'ليمفوسايت', 'الخلايا المناعية ليمفو', 'ليمفاويات']
  },
  {
    id: 'w77',
    word: { Arabic: 'الغدة النخامية', English: 'Pituitary Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Endocrinology', 'Pathology', 'Internal Medicine', 'Biochemistry'],
    synonyms: ['الغدة النخامية', 'النخامية', 'الغده النخاميه', 'سيدة الغدد', 'غدة المخ']
  },
  {
    id: 'w78',
    word: { Arabic: 'الألبcontrolتول', English: 'Albuterol' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['الألبcontrolتول', 'فنتولين', 'سالبوتامول', 'بخاخ الربو الأزرق', 'Ventolin', 'Salbutamol']
  },
  {
    id: 'w79',
    word: { Arabic: 'الكورتيزول', English: 'Cortisol' },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ['Physiology', 'Biochemistry'],
    synonyms: ['الكورتيزول', 'كورتيزول', 'هرمون الإجهاد', 'هرمون الكورتيزول']
  },
  {
    id: 'w80',
    word: { Arabic: 'الثرومبين', English: 'Thrombin' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Biochemistry', 'Hematology', 'Physiology', 'Internal Medicine'],
    synonyms: ['الثرومبين', 'ثرومبين', 'إنزيم التخثر', 'عامل تخثر نشط']
  },
  {
    id: 'w81',
    word: { Arabic: 'المورفين', English: 'Morphine' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['المورفين', 'مورفين', 'مخدر مورفين', 'مورفيا', 'قاتل الألم القوي']
  },
  {
    id: 'w82',
    word: { Arabic: 'الهيبارين', English: 'Heparin' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Hematology', 'Internal Medicine'],
    synonyms: ['الهيبارين', 'هيبارين', 'مسيل الدم السريع', 'مضاد تخثر في الوريد']
  },
  {
    id: 'w83',
    word: { Arabic: 'التهاب السحايا الجرثومي', English: 'Bacterial Meningitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Neurology', 'Anatomy', 'Physiology', 'Internal Medicine', 'Psychiatry', 'Infectious Diseases', 'Microbiology', 'Parasitology'],
    synonyms: ['التهاب السحايا الجرثومي', 'سحايا بكتيري', 'التهاب سحايا بكتيري', 'حمى شوكية بكتيرية']
  },
  {
    id: 'w84',
    word: { Arabic: 'الصداع النصفي', English: 'Migraine' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Neurology', 'Internal Medicine'],
    synonyms: ['الصداع النصفي', 'الشقيقة', 'شقيقة', 'صداع نصفي', 'الميجرين', 'ميجرين']
  },
  {
    id: 'w85',
    word: { Arabic: 'الصرع', English: 'Epilepsy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Anatomy', 'Physiology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['الصرع', 'صرع', 'تشنجات دماغية', 'كهرباء زائدة بالمخ', 'التشنجات الصرعية']
  },
  {
    id: 'w86',
    word: { Arabic: 'الفصام', English: 'Schizophrenia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry', 'Internal Medicine'],
    synonyms: ['الفصام', 'شيزوفرينيا', 'فصام', 'انفصام الشخصية', 'انفصام', 'الفصام العقلي']
  },
  {
    id: 'w87',
    word: { Arabic: 'الاكتئاب', English: 'Depression' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Psychiatry', 'Internal Medicine'],
    synonyms: ['الاكتئاب', 'اكتئاب', 'اضطراب اكتئابي', 'الحزن المرضي']
  },
  {
    id: 'w88',
    word: { Arabic: 'التهاب الأذن الوسطى', English: 'Otitis Media' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Family Medicine'],
    synonyms: ['التهاب الأذن الوسطى', 'التهاب اذن وسطى', 'اذن وسطى', 'الم الأذن للأطفال', 'التهاب أذن']
  },
  {
    id: 'w89',
    word: { Arabic: 'الرئة', English: 'Lung' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Pulmonology', 'Emergency Medicine', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['الرئة', 'رئة', 'الرئتين', 'الجهاز التنفسي']
  },
  {
    id: 'w90',
    word: { Arabic: 'البنكرياس', English: 'Pancreas' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Pathology', 'Gastroenterology', 'General Surgery', 'Internal Medicine'],
    synonyms: ['البنكرياس', 'بنكرياس', 'البنكرياس الغدة', 'جزر لانجرهانز']
  },
  {
    id: 'w91',
    word: { Arabic: 'الطحال', English: 'Spleen' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Hematology', 'Pathology'],
    synonyms: ['الطحال', 'طحال', 'مقبرة خلايا الدم الحمراء', 'عضو الطحال']
  },
  {
    id: 'w92',
    word: { Arabic: 'استئصال الغدة الدرقية', English: 'Thyroidectomy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ['Surgery', 'Endocrinology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['استئصال الغدة الدرقية', 'شيل الدرقية', 'عملية جراحة الدرق', 'استئصال الدرقية']
  },
  {
    id: 'w93',
    word: { Arabic: 'عضلة القلب', English: 'Myocardium' },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery', 'Cardiology', 'Vascular Surgery', 'Internal Medicine', 'Emergency Medicine', 'Rheumatology'],
    synonyms: ['عضلة القلب', 'عضلة قلبية', 'القلبية المصمتة', 'العضلة القلبية المتخصصة']
  },
  {
    id: 'w94',
    word: { Arabic: 'التهاب البلعوم والحلق', English: 'Pharyngitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Family Medicine'],
    synonyms: ['التهاب البلعوم والحلق', 'احتقان الحلق', 'التهاب حلق', 'لوزتين', 'التهاب اللوز']
  },
  {
    id: 'w95',
    word: { Arabic: 'تصلب متعدد', English: 'Multiple Sclerosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology'],
    synonyms: ['تصلب متعدد', 'تصلب لويحي', 'التصلب المتعدد', 'ام اس', 'MS']
  },
  {
    id: 'w96',
    word: { Arabic: 'الوهن العضلي الوبيل', English: 'Myasthenia Gravis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Neurology', 'Internal Medicine', 'Anatomy', 'Physiology', 'Psychiatry'],
    synonyms: ['الوهن العضلي الوبيل', 'وهن عضلي', 'الوهن العضلي', 'مياستينا']
  },
  {
    id: 'w97',
    word: { Arabic: 'متلازمة غيلان باريه', English: 'Guillain-Barre' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Neurology', 'Internal Medicine', 'Pediatrics', 'Genetics'],
    synonyms: ['متلازمة غيلان باريه', 'غيلان باريه', 'جيلان باريه', 'شلل صاعد سريع']
  },
  {
    id: 'w98',
    word: { Arabic: 'الكرون', English: 'Crohn Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Surgery', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['الكرون', 'كرونز', 'مرض كرون', 'التهاب الأمعاء التقرحي كرون']
  },
  {
    id: 'w99',
    word: { Arabic: 'القرحة الهضمية', English: 'Peptic Ulcer' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['القرحة الهضمية', 'قرحة معدة', 'قرحة اثني عشر', 'قرحة هضمية', 'القرحه الهضميه']
  },
  {
    id: 'w100',
    word: { Arabic: 'التهاب البنكرياس', English: 'Pancreatitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Surgery'],
    synonyms: ['التهاب البنكرياس', 'التهاب بنكرياس', 'تكلس بنكرياسي حاد', 'البنكرياس الحاد']
  },
  {
    id: 'w101',
    word: { Arabic: 'حصوات الكلى', English: 'Kidney Stones' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Surgery', 'Urology', 'Internal Medicine', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['حصوات الكلى', 'حصوة كلى', 'مغص كلوي', 'حصاة الكلية', 'حصى الكلية']
  },
  {
    id: 'w102',
    word: { Arabic: 'تضخم البروستاتا', English: 'Prostate Hyperplasia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Surgery', 'Urology', 'Internal Medicine', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['تضخم البروستاتا', 'البروستات', 'تضخم البروستات الحميد', 'BPH', 'بروستاتا']
  },
  {
    id: 'w103',
    word: { Arabic: 'التهاب المسالك البولية', English: 'Urinary Tract Infection' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Pediatrics', 'Urology', 'Physiology', 'Anatomy', 'Pathology', 'Infectious Diseases', 'Microbiology', 'Parasitology'],
    synonyms: ['التهاب المسالك البولية', 'التهاب بول', 'مسالك بولية', 'UTI', 'التهاب المثانة']
  },
  {
    id: 'w104',
    word: { Arabic: 'الحمل خارج الرحم', English: 'Ectopic Pregnancy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Surgery', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['الحمل خارج الرحم', 'حمل مهاجر', 'حمل خارجي', 'اكطوبيك', 'Ectopic']
  },
  {
    id: 'w105',
    word: { Arabic: 'تسمم الحمل', English: 'Preeclampsia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology'],
    synonyms: ['تسمم الحمل', 'ضغط حملي زلالي', 'اكلامبسيا', 'تالق الحمل', 'Pre-eclampsia']
  },
  {
    id: 'w106',
    word: { Arabic: 'التهاب كبيبات الكلى', English: 'Glomerulonephritis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Urology', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['التهاب كبيبات الكلى', 'التهاب الفراش الكببي', 'كبيبي كلوي', 'التهاب كبيبي']
  },
  {
    id: 'w107',
    word: { Arabic: 'حمى الضنك', English: 'Dengue Fever' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['حمى الضنك', 'ضنك', 'حمى تكسير العظام', 'ابو الركب', 'Dengue']
  },
  {
    id: 'w108',
    word: { Arabic: 'الملاريا', English: 'Malaria' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['الملاريا', 'ملاريا', 'انوفيليس الطفيل', 'حمى البرداء']
  },
  {
    id: 'w109',
    word: { Arabic: 'أم الدم الأبهرية', English: 'Aortic Aneurysm' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Surgery', 'Cardiology'],
    synonyms: ['أم الدم الأبهرية', 'ابدومينال اورتك', 'تمدد الاورطى', 'تمدد الابهري']
  },
  {
    id: 'w110',
    word: { Arabic: 'السعال الديكي', English: 'Whooping Cough' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics'],
    synonyms: ['السعال الديكي', 'كحة ديكية', 'سعال ديكي', 'سعال منبح', 'Pertussis']
  },
  {
    id: 'w111',
    word: { Arabic: 'متلازمة كوشينغ', English: 'Cushing Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Internal Medicine', 'Endocrinology', 'Pediatrics', 'Genetics', 'Neurology', 'Physiology', 'Biochemistry'],
    synonyms: ['متلازمة كوشينغ', 'كوشينغ', 'كوشينج', 'فرط الكورتيزول', 'Cushing']
  },
  {
    id: 'w112',
    word: { Arabic: 'مرض أديسون', English: 'Addison Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Endocrinology', 'Physiology', 'Biochemistry'],
    synonyms: ['مرض أديسون', 'اديسون', 'قصور الكظرية', 'أديسون الخرط']
  },
  {
    id: 'w113',
    word: { Arabic: 'داء غريفز', English: 'Graves Disease' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Endocrinology', 'Physiology', 'Biochemistry'],
    synonyms: ['داء غريفز', 'غريفز', 'جريفيز', 'نشاط الدرقية المناعي', 'جحوظ العينين']
  },
  {
    id: 'w114',
    word: { Arabic: 'التهاب هاشيموتو غدة', English: 'Hashimoto Thyroiditis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Endocrinology', 'Physiology', 'Biochemistry'],
    synonyms: ['التهاب هاشيموتو غدة', 'هاشيموتو', 'هشموتو', 'خمول الدرقية المناعي']
  },
  {
    id: 'w115',
    word: { Arabic: 'النقرس', English: 'Gout' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Rheumatology'],
    synonyms: ['النقرس', 'داء الملوك', 'نقرس', 'اليوريك اسيد', 'حمض البوليك']
  },
  {
    id: 'w116',
    word: { Arabic: 'هشاشة العظام', English: 'Osteoporosis' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Rheumatology', 'Orthopedics', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['هشاشة العظام', 'هشاشة عظام', 'ضعف العظم الكلسي', 'نقص الكثافة العظمية']
  },
  {
    id: 'w117',
    word: { Arabic: 'الصدفية', English: 'Psoriasis' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Dermatology', 'Pathology', 'Histology'],
    synonyms: ['الصدفية', 'صدفية', 'صدفيه', 'لوحات فضية بالجلد']
  },
  {
    id: 'w118',
    word: { Arabic: 'الأكزيما', English: 'Eczema' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Dermatology', 'Pathology', 'Histology'],
    synonyms: ['الأكزيما', 'اكزيما', 'أكزيما التهاب وتأتب', 'الحكة الجلدية']
  },
  {
    id: 'w119',
    word: { Arabic: 'المياه الزرقاء بالعين', English: 'Glaucoma' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Anatomy', 'General Surgery'],
    synonyms: ['المياه الزرقاء بالعين', 'جلوكوما', 'الجلوكوما', 'الماء الازرق', 'ضغط العين']
  },
  {
    id: 'w120',
    word: { Arabic: 'إعتام عدسة العين', English: 'Cataract' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Anatomy', 'General Surgery'],
    synonyms: ['إعتام عدسة العين', 'الماء الابيض', 'مياه بيضاء', 'ساد', 'كتاركت']
  },
  {
    id: 'w121',
    word: { Arabic: 'عظم العضد', English: 'Humerus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy'],
    synonyms: ['عظم العضد', 'العضد', 'عضد', 'عظمة العضد']
  },
  {
    id: 'w122',
    word: { Arabic: 'العضلات الوربية', English: 'Intercostal Muscles' },
    level: 'Academic',
    difficulty: 3,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery', 'Rheumatology'],
    synonyms: ['العضلات الوربية', 'عضلات الضلوع', 'بين الضلوع', 'العضلات التابعة للتنفس']
  },
  {
    id: 'w123',
    word: { Arabic: 'العظم القذالي', English: 'Occipital Bone' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Orthopedics', 'Rheumatology', 'Physiology', 'General Surgery'],
    synonyms: ['العظم القذالي', 'القذال', 'مؤخرة الرأس عظم', 'الجمجمة من الخلف']
  },
  {
    id: 'w124',
    word: { Arabic: 'الشريان السباتي', English: 'Carotid Artery' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'Pathology', 'Cardiology', 'Vascular Surgery', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['الشريان السباتي', 'السباتي', 'شريان الرقبة الكاروتيد', 'كاروتيد']
  },
  {
    id: 'w125',
    word: { Arabic: 'العصب ثلاثي التوائم', English: 'Trigeminal Nerve' },
    level: 'Academic',
    difficulty: 3,
    type: 'Nerve',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب ثلاثي التوائم', 'العصب الخامس', 'ثلاثي التوائم', 'عصب الاسنان والوجه الرئيسي']
  },
  {
    id: 'w126',
    word: { Arabic: 'المستقيم', English: 'Rectum' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Surgery', 'Physiology', 'Pathology'],
    synonyms: ['المستقيم', 'مستقيم', 'نهاية القولون']
  },
  {
    id: 'w127',
    word: { Arabic: 'جهاز النيبولايزر', English: 'Nebulizer' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Pediatrics', 'Internal Medicine', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['جهاز النيبولايزر', 'جلسات بخار', 'جهاز البخار الصدري', 'نيبولايزر', 'تبخيرة']
  },
  {
    id: 'w128',
    word: { Arabic: 'حقنة الإبينفرين', English: 'EpiPen' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['حقنة الإبينفرين', 'ابي بن', 'قلم الادرينالين', 'قلم الحساسية القاتلة']
  },
  {
    id: 'w129',
    word: { Arabic: 'الديازيبام', English: 'Diazepam' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Psychiatry', 'Internal Medicine'],
    synonyms: ['الديازيبام', 'فاليوم', 'مهدئ ديازبام', 'مضاد التشنجات والصرع الصغير', 'Valium']
  },
  {
    id: 'w130',
    word: { Arabic: 'الأوميبرازول', English: 'Omeprazole' },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Internal Medicine'],
    synonyms: ['الأوميبرازول', 'لوسك', 'جاستروزول', 'مضاد الحموضة بروتون ميبرازول', 'Losec', 'Omepra']
  },
  {
    id: 'w131',
    word: { Arabic: 'الرجفان الأذيني', English: 'Atrial Fibrillation' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine'],
    synonyms: ['الرجفان الأذيني', 'رجفان اذيني', 'اي فيب', 'AFib', 'AF']
  },
  {
    id: 'w132',
    word: { Arabic: 'تضيق الأبهر', English: 'Aortic Stenosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Surgery'],
    synonyms: ['تضيق الأبهر', 'تضيق الصمام الأورطي', 'تضيق ابهري', 'AS']
  },
  {
    id: 'w133',
    word: { Arabic: 'التهاب شغاف القلب', English: 'Endocarditis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Cardiology'],
    synonyms: ['التهاب شغاف القلب', 'شغاف', 'التهاب الشغاف البكتيري']
  },
  {
    id: 'w134',
    word: { Arabic: 'التهاب عضلة القلب', English: 'Myocarditis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Internal Medicine', 'Emergency Medicine', 'Orthopedics', 'Rheumatology', 'General Surgery'],
    synonyms: ['التهاب عضلة القلب', 'التهاب العضلة القلبية']
  },
  {
    id: 'w135',
    word: { Arabic: 'التهاب غشاء القلب', English: 'Pericarditis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology'],
    synonyms: ['التهاب غشاء القلب', 'التهاب التأمور', 'غشاء التأمور']
  },
  {
    id: 'w136',
    word: { Arabic: 'ارتجاع الصمام الميترالي', English: 'Mitral Regurgitation' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology'],
    synonyms: ['ارتجاع الصمام الميترالي', 'ارتجاع تاجي', 'ارتجاع الميترالي', 'MR']
  },
  {
    id: 'w137',
    word: { Arabic: 'قصور القلب', English: 'Heart Failure' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Emergency Medicine'],
    synonyms: ['قصور القلب', 'فشل القلب', 'ضعف عضلة القلب', 'HF']
  },
  {
    id: 'w138',
    word: { Arabic: 'الذبحة الصدرية', English: 'Angina Pectoris' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine'],
    synonyms: ['الذبحة الصدرية', 'ذبحة صدرية', 'ذبحه', 'جلطة مؤقتة']
  },
  {
    id: 'w139',
    word: { Arabic: 'ورم القواتم', English: 'Pheochromocytoma' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Endocrinology', 'Oncology'],
    synonyms: ['ورم القواتم', 'ورم الكظر النشط', 'فيوكروموسايتوما']
  },
  {
    id: 'w140',
    word: { Arabic: 'ضخامة الأطراف', English: 'Acromegaly' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Endocrinology'],
    synonyms: ['ضخامة الأطراف', 'عملقة الغدة النخامية', 'زيادة هرمون النمو']
  },
  {
    id: 'w141',
    word: { Arabic: 'البوال التفه', English: 'Diabetes Insipidus' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Endocrinology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['البوال التفه', 'السكري الكاذب', 'سكر كاذب', 'DI']
  },
  {
    id: 'w142',
    word: { Arabic: 'نشاط جارات الدرقية', English: 'Hyperparathyroidism' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Endocrinology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['نشاط جارات الدرقية', 'فرط نشاط غدة جارة الدرقية', 'نشاط جارة الدرقية']
  },
  {
    id: 'w143',
    word: { Arabic: 'التهاب المرارة', English: 'Cholecystitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Surgery', 'Internal Medicine'],
    synonyms: ['التهاب المرارة', 'مرارة', 'التهاب مرارة حاد']
  },
  {
    id: 'w144',
    word: { Arabic: 'مرض سيلياك', English: 'Celiac Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Internal Medicine', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['مرض سيلياك', 'حساسية القمح', 'حساسية الجلوتين', 'سيلياك']
  },
  {
    id: 'w145',
    word: { Arabic: 'التهاب القولون التقرحي', English: 'Ulcerative Colitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Surgery'],
    synonyms: ['التهاب القولون التقرحي', 'قولون تقرحي', 'القولون التقرحي', 'UC']
  },
  {
    id: 'w146',
    word: { Arabic: 'ارتجاع المريء', English: 'Gastroesophageal Reflux' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['ارتجاع المريء', 'ارتجاع المريء', 'حرقان الصدر للمعدة', 'GERD', 'ارتجاع']
  },
  {
    id: 'w147',
    word: { Arabic: 'البواسير', English: 'Hemorrhoids' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Surgery', 'Hematology', 'Physiology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['البواسير', 'بواسير', 'شرخ شرجي وبواسير']
  },
  {
    id: 'w148',
    word: { Arabic: 'الفتق', English: 'Hernia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Surgery'],
    synonyms: ['الفتق', 'فتق', 'فتق إرببي', 'فتق في البطن', 'فتق سري']
  },
  {
    id: 'w149',
    word: { Arabic: 'استرواح الصدر', English: 'Pneumothorax' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Emergency Medicine', 'Surgery'],
    synonyms: ['استرواح الصدر', 'هواء على الرئة', 'انكماش الرئة الميكانيكي', 'هواء بالصدر']
  },
  {
    id: 'w150',
    word: { Arabic: 'الجلطة الرئوية', English: 'Pulmonary Embolism' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonary', 'Emergency Medicine', 'Pulmonology', 'Anatomy', 'Physiology', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['الجلطة الرئوية', 'جلطة الرئة', 'انصمام رئوي', 'PE']
  },
  {
    id: 'w151',
    word: { Arabic: 'السدة الرئوية المزمنة', English: 'COPD' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonary', 'Internal Medicine', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia'],
    synonyms: ['السدة الرئوية المزمنة', 'سدة رئوية', 'الانسداد الرئوي المزمن', 'COPD']
  },
  {
    id: 'w152',
    word: { Arabic: 'توسع القصبات', English: 'Bronchiectasis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonary', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['توسع القصبات', 'توسع الشعب الهوائية', 'توسع قصبي مزمن']
  },
  {
    id: 'w153',
    word: { Arabic: 'تليف الرئة بالأسبيستوس', English: 'Asbestosis' },
    level: 'Academic',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonary'],
    synonyms: ['تليف الرئة بالأسبيستوس', 'مرض الاسبستوس', 'غبار الاسبستوس']
  },
  {
    id: 'w154',
    word: { Arabic: 'التصلب الضموري الجانبي', English: 'Amyotrophic Lateral Sclerosis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Neurology', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['التصلب الضموري الجانبي', 'ضمور العضلات الشوكي', 'ALS']
  },
  {
    id: 'w155',
    word: { Arabic: 'داء هانتينغتون', English: 'Huntington Disease' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Neurology', 'Genetics'],
    synonyms: ['داء هانتينغتون', 'هانتنجتون', 'رقاص هانتينغتون']
  },
  {
    id: 'w156',
    word: { Arabic: 'الاضطراب ثنائي القطب', English: 'Bipolar Disorder' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry', 'Internal Medicine'],
    synonyms: ['الاضطراب ثنائي القطب', 'ثنائي القطب', 'الهوس الاكتئابي', 'امراض وجدانية']
  },
  {
    id: 'w157',
    word: { Arabic: 'طيف التوحد', English: 'Autism' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Pediatrics', 'Psychiatry', 'Genetics', 'Internal Medicine', 'Neurology'],
    synonyms: ['طيف التوحد', 'توحد', 'التوحد', 'ASD']
  },
  {
    id: 'w158',
    word: { Arabic: 'الهيموفيليا', English: 'Hemophilia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Pediatrics', 'Physiology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['الهيموفيليا', 'نزاف الدم وراثي', 'سيولة الدم الوراثية', 'هيموفيليا']
  },
  {
    id: 'w159',
    word: { Arabic: 'الثلاسيميا', English: 'Thalassemia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Pediatrics'],
    synonyms: ['الثلاسيميا', 'أنيميا البحر المتوسط', 'ثلاسيميا']
  },
  {
    id: 'w160',
    word: { Arabic: 'الأنيميا المنجلية', English: 'Sickle Cell Anemia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Pediatrics', 'Physiology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['الأنيميا المنجلية', 'منجلية', 'فقر الدم المنجلي', 'SCA']
  },
  {
    id: 'w161',
    word: { Arabic: 'سرطان الدم', English: 'Leukemia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'Hematology', 'Pathology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['سرطان الدم', 'ابيضاض الدم', 'لوكيميا', 'اللوكيميا']
  },
  {
    id: 'w162',
    word: { Arabic: 'سرطان الغدد الليمفاوية', English: 'Lymphoma' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'Hematology', 'Pathology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['سرطان الغدد الليمفاوية', 'اللمفوما', 'ليمفوما', 'ورم هودجكن']
  },
  {
    id: 'w163',
    word: { Arabic: 'سرطان نخاع العظم', English: 'Multiple Myeloma' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'Hematology'],
    synonyms: ['سرطان نخاع العظم', 'المايلوما المتعددة', 'مايلوما']
  },
  {
    id: 'w164',
    word: { Arabic: 'المتلازمة الكلوية', English: 'Nephrotic Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Pediatrics', 'Urology', 'Genetics', 'Internal Medicine', 'Neurology', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['المتلازمة الكلوية', 'نفروتيك', 'زلال البول الكثيف']
  },
  {
    id: 'w165',
    word: { Arabic: 'التهاب حوض الكلية', English: 'Pyelonephritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Infectious Diseases', 'Internal Medicine', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['التهاب حوض الكلية', 'تهيج الكلى البكتيري', 'التهاب حوض كلى']
  },
  {
    id: 'w166',
    word: { Arabic: 'استسقاء الكلية', English: 'Hydronephrosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Radiology', 'Internal Medicine', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['استسقاء الكلية', 'تضخم الكلى بالبول', 'انحباس البول بالكلى']
  },
  {
    id: 'w167',
    word: { Arabic: 'الذئبة الحمراء', English: 'Systemic Lupus' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Internal Medicine'],
    synonyms: ['الذئبة الحمراء', 'ذئبة حمراء', 'الذئبة الجهازية', 'SLE', 'لوبرز']
  },
  {
    id: 'w168',
    word: { Arabic: 'خشونة المفاصل', English: 'Osteoarthritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Rheumatology', 'Orthopedics', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['خشونة المفاصل', 'احتكاك الركبة', 'تاكل الغضاريف المفصلية', 'OA']
  },
  {
    id: 'w169',
    word: { Arabic: 'التهاب الفقار المقسط', English: 'Ankylosing Spondylitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Rheumatology', 'Orthopedics'],
    synonyms: ['التهاب الفقار المقسط', 'صلابة العمود الفقري', 'التهاب الفقار الالتصاقي', 'البامبو']
  },
  {
    id: 'w170',
    word: { Arabic: 'الألم العضلي الليفي', English: 'Fibromyalgia' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Psychiatry'],
    synonyms: ['الألم العضلي الليفي', 'فيبروميالغيا', 'الفيبروميالجيا', 'ألم المفاصل النسيجي الوعائي']
  },
  {
    id: 'w171',
    word: { Arabic: 'الميلانوما', English: 'Melanoma' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'Dermatology', 'Pathology', 'Histology', 'Hematology', 'Internal Medicine'],
    synonyms: ['الميلانوما', 'سرطان الخلايا الصبغية بالجلد', 'سرطان الجلد الاسود']
  },
  {
    id: 'w172',
    word: { Arabic: 'الثعلبة', English: 'Alopecia Areata' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology'],
    synonyms: ['الثعلبة', 'ثعلبة', 'سقوط الشعر بقعي']
  },
  {
    id: 'w173',
    word: { Arabic: 'البهاق', English: 'Vitiligo' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology'],
    synonyms: ['البهاق', 'بهاق', 'بقع بيضاء بالجلد']
  },
  {
    id: 'w174',
    word: { Arabic: 'طنين الأذن', English: 'Tinnitus' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['ENT'],
    synonyms: ['طنين الأذن', 'وش بالودن', 'طنين', 'صفير الاذن']
  },
  {
    id: 'w175',
    word: { Arabic: 'ميتفورمين', English: 'Metformin' },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Endocrinology', 'Internal Medicine'],
    synonyms: ['ميتفورمين', 'منظم السكر', 'جلوكوفاج', 'Glucophage']
  },
  {
    id: 'w176',
    word: { Arabic: 'ليزينوبريل', English: 'Lisinopril' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['ليزينوبريل', 'مضاد ضغط الدم ايس', 'Zestril', 'زستريل']
  },
  {
    id: 'w177',
    word: { Arabic: 'بروفين', English: 'Ibuprofen' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Rheumatology', 'Internal Medicine'],
    synonyms: ['بروفين', 'آيبوبروفين', 'مسكن بروفين', 'بونيل', 'Brufen']
  },
  {
    id: 'w178',
    word: { Arabic: 'بريدنيزولون', English: 'Prednisolone' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Immunology', 'Internal Medicine'],
    synonyms: ['بريدنيزولون', 'كورتيزول شراب او حبوب', 'مضاد التهاب ستيرويدي']
  },
  {
    id: 'w179',
    word: { Arabic: 'فوروسيميد', English: 'Furosemide' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['فوروسيميد', 'لازكس', 'مدر البول', 'حبوب ماء مدرة', 'Lasix']
  },
  {
    id: 'w180',
    word: { Arabic: 'أملوديبين', English: 'Amlodipine' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['أملوديبين', 'نورفاسك', 'منظم ضغط كالسيوم', 'Norvasc']
  },
  {
    id: 'w181',
    word: { Arabic: 'ليفوثيروكسين', English: 'Levothyroxine' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Endocrinology', 'Internal Medicine'],
    synonyms: ['ليفوثيروكسين', 'هرمون الغدة التروكسين', 'التروكسين', 'Euthyrox']
  },
  {
    id: 'w182',
    word: { Arabic: 'حقن هيبارين', English: 'Heparin' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Hematology', 'Internal Medicine'],
    synonyms: ['حقن هيبارين', 'مسيل الدم الوريدي والسريع الكلاسيكي', 'هبارين']
  },
  {
    id: 'w183',
    word: { Arabic: 'ديجوكسين', English: 'Digoxin' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['ديجوكسين', 'لانوكسين', 'مقوي انقباض القلب', 'Lanoxin']
  },
  {
    id: 'w184',
    word: { Arabic: 'أتروبين', English: 'Atropine' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Emergency Medicine', 'Internal Medicine'],
    synonyms: ['أتروبين', 'حقنة أتروبين', 'مضاد الكولين لتسريع النبض']
  },
  {
    id: 'w185',
    word: { Arabic: 'العضلة الدالية', English: 'Deltoid' },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery'],
    synonyms: ['العضلة الدالية', 'الدالية', 'عضلة الكتف', 'عضلة التطعيم']
  },
  {
    id: 'w186',
    word: { Arabic: 'عضلة بطن الساق', English: 'Gastrocnemius' },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery'],
    synonyms: ['عضلة بطن الساق', 'السمانة', 'عضلة الساق الخلفية', 'العضلة التوأمية الساقية']
  },
  {
    id: 'w187',
    word: { Arabic: 'العضلة الخياطية', English: 'Sartorius' },
    level: 'Academic',
    difficulty: 3,
    type: 'Muscle',
    subjects: ['Anatomy', 'Physiology', 'Orthopedics', 'General Surgery'],
    synonyms: ['العضلة الخياطية', 'الخياطية', 'أطول عضلة في الجسم', 'سارتوريوس']
  },
  {
    id: 'w188',
    word: { Arabic: 'العصب الفخذي', English: 'Femoral Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الفخذي', 'عصب فخذي', 'فخذي']
  },
  {
    id: 'w189',
    word: { Arabic: 'العصب الكعبري', English: 'Radial Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الكعبري', 'كعبري', 'عصب كعبري', 'تسبب اليد المنسدلة']
  },
  {
    id: 'w190',
    word: { Arabic: 'المرارة', English: 'Gallbladder' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Surgery', 'Physiology', 'Pathology', 'Gastroenterology', 'General Surgery', 'Internal Medicine', 'Urology'],
    synonyms: ['المرارة', 'مرارة', 'كيس الصفراء', 'الحويصلة الصفراوية']
  },
  {
    id: 'w191',
    word: { Arabic: 'الغدة الزعترية', English: 'Thymus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Immunology', 'Physiology', 'Pathology'],
    synonyms: ['الغدة الزعترية', 'زعترية', 'التوتية', 'الغدة التوتية']
  },
  {
    id: 'w192',
    word: { Arabic: 'الحصين', English: 'Hippocampus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'Pathology'],
    synonyms: ['الحصين', 'حصين المخ', 'قرن آمون', 'مركز الذاكرة بالمخ']
  },
  {
    id: 'w193',
    word: { Arabic: 'المخيخ', English: 'Cerebellum' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurology', 'Physiology', 'Pathology'],
    synonyms: ['المخيخ', 'مخيخ', 'مسؤول التوازن الحركي بالمخ']
  },
  {
    id: 'w194',
    word: { Arabic: 'الحويصلات الهوائية', English: 'Alveoli' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Physiology', 'Pulmonology', 'Emergency Medicine', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['الحويصلات الهوائية', 'أكياس الهواء بالرئة', 'حويصلات هوائية']
  },
  {
    id: 'w195',
    word: { Arabic: 'النيفرون', English: 'Nephron' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Physiology', 'Urology', 'Internal Medicine', 'Pathology'],
    synonyms: ['النيفرون', 'نيفرون الكلى', 'نيفرونات الكلية', 'وحدة تصفية الكلى']
  },
  {
    id: 'w196',
    word: { Arabic: 'الكزاز', English: 'Tetanus' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Emergency Medicine'],
    synonyms: ['الكزاز', 'مرض الكزاز', 'تشنج الفك الصدري بكتيري', 'تيتانوس']
  },
  {
    id: 'w197',
    word: { Arabic: 'داء الكلب', English: 'Rabies' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Emergency Medicine'],
    synonyms: ['داء الكلب', 'السعار', 'سعار', 'عضة كلب مصاب']
  },
  {
    id: 'w198',
    word: { Arabic: 'الزهري', English: 'Syphilis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases'],
    synonyms: ['الزهري', 'مرض الزهري', 'قرحة سيفلس بنسلينية']
  },
  {
    id: 'w199',
    word: { Arabic: 'السيلان', English: 'Gonorrhea' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases'],
    synonyms: ['السيلان', 'سيلان بكتيري جنسي']
  },
  {
    id: 'w200',
    word: { Arabic: 'الكوليرا', English: 'Cholera' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Public Health'],
    synonyms: ['الكوليرا', 'كوليرا الإسهال المائي الكثيف', 'ماء الرز']
  },
  {
    id: 'w201',
    word: { Arabic: 'الليشمانيا', English: 'Leishmaniasis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases'],
    synonyms: ['الليشمانيا', 'حبة حلب', 'ليشمانيا جلدية أحشاء']
  },
  {
    id: 'w202',
    word: { Arabic: 'الحمى المالطية', English: 'Brucellosis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases'],
    synonyms: ['الحمى المالطية', 'مالطية', 'حمى الحليب الملوث البكتيري']
  },
  {
    id: 'w203',
    word: { Arabic: 'التسمم السجقي', English: 'Botulism' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Neurology'],
    synonyms: ['التسمم السجقي', 'تسمم معلبات منتهي صلاحية بكتيري', 'بوتوليزم']
  },
  {
    id: 'w204',
    word: { Arabic: 'مرض كاواساكي', English: 'Kawasaki Disease' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Pediatrics', 'Cardiology', 'Genetics', 'Family Medicine'],
    synonyms: ['مرض كاواساكي', 'متلازمة العقد اللمفاوية المخاطية الجلدية']
  },
  {
    id: 'w205',
    word: { Arabic: 'متلازمة تيرنر', English: 'Turner Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Pediatrics', 'Genetics', 'Internal Medicine', 'Neurology'],
    synonyms: ['متلازمة تيرنر', 'تيرنر 45X']
  },
  {
    id: 'w206',
    word: { Arabic: 'متلازمة كلاينفلتر', English: 'Klinefelter Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Genetics', 'Endocrinology', 'Pediatrics', 'Internal Medicine', 'Neurology'],
    synonyms: ['متلازمة كلاينفلتر', 'كلاينفلتر 47XXY']
  },
  {
    id: 'w207',
    word: { Arabic: 'الإسقربوط', English: 'Scurvy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Biochemistry', 'General'],
    synonyms: ['الإسقربوط', 'مرض الاسقربوط', 'نقص فيتامين ج', 'نزيف اللثة فيتامين سي']
  },
  {
    id: 'w208',
    word: { Arabic: 'الكساح', English: 'Rickets' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Orthopedics'],
    synonyms: ['الكساح', 'لين العظام للاطفال', 'مرض الكساح الوراثي او نقص دال']
  },
  {
    id: 'w209',
    word: { Arabic: 'البلاغرا', English: 'Pellagra' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Biochemistry', 'Dermatology'],
    synonyms: ['البلاغرا', 'بلاجرا', 'نقص فيتامين ب3 النياسين الكلاسيكي']
  },
  {
    id: 'w210',
    word: { Arabic: 'البري بري', English: 'Beriberi' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Biochemistry', 'Cardiology'],
    synonyms: ['البري بري', 'نقص الثيامين ب1']
  },
  {
    id: 'w211',
    word: { Arabic: 'أنيميا الفول', English: 'G6PD Deficiency' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Pediatrics'],
    synonyms: ['أنيميا الفول', 'حساسية البقوليات والحديد تكسير', 'نقص إنزيم الفول']
  },
  {
    id: 'w212',
    word: { Arabic: 'تضيق البواب', English: 'Pyloric Stenosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Surgery'],
    synonyms: ['تضيق البواب', 'انسداد مخرج المعدة للأطفال القيء المقذوف']
  },
  {
    id: 'w213',
    word: { Arabic: 'انغلاف الأمعاء', English: 'Intussusception' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Surgery'],
    synonyms: ['انغلاف الأمعاء', 'تداخل الامعاء التلسكوبي المسبب للبراز الهلامي']
  },
  {
    id: 'w214',
    word: { Arabic: 'إريثروبويتين', English: 'Erythropoietin' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Biochemistry', 'Hematology', 'Physiology', 'Internal Medicine'],
    synonyms: ['إريثروبويتين', 'هرمون تصنيع كرات الدم الحمراء الكلوي', 'EPO']
  },
  {
    id: 'w215',
    word: { Arabic: 'جلوكاجون', English: 'Glucagon' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Endocrinology'],
    synonyms: ['جلوكاجون', 'الجلوكاجون', 'هرمون رفع سكر الدم البنكرياسي الفا']
  },
  {
    id: 'w216',
    word: { Arabic: 'ميوجلوبين', English: 'Myoglobin' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Cardiology', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['ميوجلوبين', 'ميوغلوبين العضلات القلبية الأول في الجلطة']
  },
  {
    id: 'w217',
    word: { Arabic: 'كرياتينين', English: 'Creatinine' },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Urology'],
    synonyms: ['كرياتينين', 'الكرياتينين', 'مؤشر وظائف الكلى المعملي الأساسي']
  },
  {
    id: 'w218',
    word: { Arabic: 'بيليروبين', English: 'Bilirubin' },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Gastroenterology'],
    synonyms: ['بيليروبين', 'الصفراء', 'البليروبين المسبب للصفر بالعيون والجلد']
  },
  {
    id: 'w219',
    word: { Arabic: 'غدة بارثولين', English: 'Bartholin Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Obstetrics and Gynecology', 'Physiology', 'Pathology'],
    synonyms: ['غدة بارثولين', 'بارثولين التهاب تكيس']
  },
  {
    id: 'w220',
    word: { Arabic: 'قناة فالوب', English: 'Fallopian Tube' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Obstetrics and Gynecology', 'Physiology', 'Pathology'],
    synonyms: ['قناة فالوب', 'قناة فالوب التناسلية المغذية للبويضة']
  },
  {
    id: 'w221',
    word: { Arabic: 'بطانة الرحم', English: 'Endometrium' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Obstetrics and Gynecology'],
    synonyms: ['بطانة الرحم', 'بطانة كلس الرحم الشهرية والسرطان']
  },
  {
    id: 'w222',
    word: { Arabic: 'العصب الأوسط', English: 'Median Nerve' },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الأوسط', 'العصب المتوسط المسبب لتنميل متلازمة النفق الرسغي']
  },
  {
    id: 'w223',
    word: { Arabic: 'العصب الحجابي', English: 'Phrenic Nerve' },
    level: 'Academic',
    difficulty: 3,
    type: 'Nerve',
    subjects: ['Anatomy', 'Physiology', 'Neurology', 'General Surgery', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['العصب الحجابي', 'العصب المغذي للحجاب الحاجز التنفسي']
  },
  {
    id: 'w224',
    word: { Arabic: 'العقدة الجيب أذينية', English: 'Sinoatrial Node' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Cardiology'],
    synonyms: ['العقدة الجيب أذينية', 'منظم ضربات القلب الكلاسيكي', 'SA Node']
  },
  {
    id: 'w225',
    word: { Arabic: 'ألياف بوركينجي', English: 'Purkinje Fibers' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Cardiology'],
    synonyms: ['ألياف بوركينجي', 'شبكة ألياف التوصيل الكهربائي لبطين القلب']
  },
  {
    id: 'w226',
    word: { Arabic: 'مستقبلات الضغط الشريانية', English: 'Baroreceptor' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Cardiology'],
    synonyms: ['مستقبلات الضغط الشريانية', 'مستقبلات تنظيم ضغط الدم السريع بالرقبة والصدر']
  },
  {
    id: 'w227',
    word: { Arabic: 'ماسك فينتوري', English: 'Venturi Mask' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['ماسك فينتوري', 'ماسك الأكسجين دقيق التركيز لمرضى الرئة']
  },
  {
    id: 'w228',
    word: { Arabic: 'جهاز قياس الأكسجين بالاصبع', English: 'Pulse Oximeter' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'General Medicine', 'Anaesthesia', 'Cardiology', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['جهاز قياس الأكسجين بالاصبع', 'نبضية الأكسجين بالأطراف']
  },
  {
    id: 'w229',
    word: { Arabic: 'منظار الحنجرة', English: 'Laryngoscope' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Equipment', 'Anaesthesia', 'Emergency Medicine', 'General Medicine'],
    synonyms: ['منظار الحنجرة', 'جهاز تنبيب القصبة الهوائية وتأمين مجرى المستشفى']
  },
  {
    id: 'w230',
    word: { Arabic: 'جهاز قياس السكر المنزلي بالوخز', English: 'Glucometer' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Equipment', 'Endocrinology', 'Emergency Medicine', 'General Medicine', 'Anaesthesia'],
    synonyms: ['جهاز قياس السكر المنزلي بالوخز', 'شرائح قياس السكر']
  },
  {
    id: 'w231',
    word: { Arabic: 'الملاريا', English: 'Malaria' },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Parasitology', 'Microbiology', 'Infectious Diseases', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الملاريا', 'ملاريا', 'مرض الملاريا', 'طفيل الملاريا', 'حمى الملاريا', 'البلازموديوم']
  },
  {
    id: 'w232',
    word: { Arabic: 'الأميبا', English: 'Amoeba' },
    level: 'Both',
    difficulty: 1,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases'],
    synonyms: ['الأميبا', 'أميبا', 'اميبا', 'الدوسنتاريا الأميبية', 'الزحار الأميبي']
  },
  {
    id: 'w233',
    word: { Arabic: 'الجيارديا', English: 'Giardia' },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases'],
    synonyms: ['الجيارديا', 'جيارديا', 'جيارديا لامبليا', 'إسهال دهني']
  },
  {
    id: 'w234',
    word: { Arabic: 'التوكسوبلازما', English: 'Toxoplasma' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Obstetrics and Gynecology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['التوكسوبلازما', 'توكسوبلازما', 'مرض القطط', 'طفيل القطط', 'داء المقوسات']
  },
  {
    id: 'w235',
    word: { Arabic: 'البلهارسيا', English: 'Bilharzia' },
    level: 'Both',
    difficulty: 1,
    type: 'Parasite',
    subjects: ['Parasitology', 'Urology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['البلهارسيا', 'بلهارسيا', 'شيستوسوما', 'بلهارسيا بولية']
  },
  {
    id: 'w236',
    word: { Arabic: 'شيستوسوما', English: 'Schistosoma' },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['شيستوسوما', 'الشيستوسوما', 'بلهارسيا معوية', 'قواقع البلهارسيا']
  },
  {
    id: 'w237',
    word: { Arabic: 'أسكاريس', English: 'Ascaris' },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Pediatrics', 'Microbiology', 'Infectious Diseases', 'Gastroenterology', 'Internal Medicine'],
    synonyms: ['أسكاريس', 'اسكاريس', 'ديدان الإسكارس', 'الدودة المستديرة الكبيرة']
  },
  {
    id: 'w238',
    word: { Arabic: 'أنكلستوما', English: 'Ancylostoma' },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ['Parasitology', 'Hematology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['أنكلستوما', 'انكلستوما', 'الدودة الشصية', 'دودة الأنيميا']
  },
  {
    id: 'w239',
    word: { Arabic: 'الدودة الدبوسية', English: 'Pinworm' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Pediatrics', 'Microbiology', 'Infectious Diseases', 'Gastroenterology', 'Internal Medicine'],
    synonyms: ['الدودة الدبوسية', 'دودة دبوسية', 'اكسيورس', 'الحكة الشرجية']
  },
  {
    id: 'w240',
    word: { Arabic: 'الدودة الشريطية', English: 'Tapeworm' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الدودة الشريطية', 'دودة شريطية', 'تينيا ساجيناتا', 'تينيا']
  },
  {
    id: 'w241',
    word: { Arabic: 'الجرب', English: 'Scabies' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Parasitology', 'Dermatology'],
    synonyms: ['الجرب', 'جرب', 'طفيل الجرب', 'الحكة الجلدية', 'سوسة الجرب']
  },
  {
    id: 'w242',
    word: { Arabic: 'تريكوموناس', English: 'Trichomonas' },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ['Parasitology', 'Obstetrics and Gynecology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['تريكوموناس', 'التريكوموناس', 'تريكوموناس فاجيناليس', 'طفيل المهبل']
  },
  {
    id: 'w243',
    word: { Arabic: 'ليشمانيا', English: 'Leishmania' },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ['Parasitology', 'Dermatology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['ليشمانيا', 'الليشمانيا', 'حبة حلب', 'قرحة بغداد', 'ذباب الرمل']
  },
  {
    id: 'w244',
    word: { Arabic: 'القمل', English: 'Lice' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Neurology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['القمل', 'قمل', 'قمل الرأس', 'الصيبان']
  },
  {
    id: 'w245',
    word: { Arabic: 'فيلاريا', English: 'Filaria' },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Vascular Surgery', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['فيلاريا', 'الفيلاريا', 'داء الفيل', 'انسداد اللمف']
  },
  {
    id: 'w246',
    word: { Arabic: 'هيداتيد', English: 'Hydatid' },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'General Surgery', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['هيداتيد', 'الهيداتيد', 'أكياس مائية', 'الكيس المائي الكبدي', 'المشوكة الحبيبية']
  },
  {
    id: 'w247',
    word: { Arabic: 'فاشيولا', English: 'Fasciola' },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['فاشيولا', 'الفاشيولا', 'الدودة الكبدية', 'مرض الفاشيولا']
  },
  {
    id: 'w248',
    word: { Arabic: 'الدودة الشصية', English: 'Hookworm' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Immunology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الدودة الشصية', 'دودة شصية', 'أنكلستوما المسببة للأنيميا', 'هوك وورم']
  },
  {
    id: 'w249',
    word: { Arabic: 'الدودة المستديرة', English: 'Roundworm' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Gastroenterology', 'Microbiology', 'Infectious Diseases', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الدودة المستديرة', 'دودة مستديرة', 'نيماتودا', 'الديدان الأسطوانية']
  },
  {
    id: 'w250',
    word: { Arabic: 'بق الفراش', English: 'Bedbugs' },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ['Parasitology', 'Rheumatology', 'Microbiology', 'Infectious Diseases', 'Gastroenterology'],
    synonyms: ['بق الفراش', 'بق', 'البق', 'حشرة الفراش']
  },
  {
    id: 'w251',
    word: { Arabic: 'الإنعاش القلبي الرئوي', English: 'CPR' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ['Emergency Medicine', 'Cardiology', 'Anaesthesia'],
    synonyms: ['الإنعاش القلبي الرئوي', 'إنعاش القلب الميكانيكي اليدوي']
  },
  {
    id: 'w252',
    word: { Arabic: 'أنبوب القصبة الهوائية', English: 'Endotracheal Tube' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Anaesthesia', 'Emergency Medicine', 'General Medicine', 'Pulmonology', 'Anatomy', 'Physiology', 'Internal Medicine'],
    synonyms: ['أنبوب القصبة الهوائية', 'الأنبوب الرغامي لتأمين مجرى الهواء والتهوية التخديرية']
  },
  {
    id: 'w253',
    word: { Arabic: 'جهاز الصدمات الكهربائية', English: 'Defibrillator' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'Cardiology', 'General Medicine', 'Anaesthesia', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['جهاز الصدمات الكهربائية', 'جهاز تنظيم ضربات القلب وإزالة الرجفان البطيني']
  },
  {
    id: 'w254',
    word: { Arabic: 'جهاز التنفس الصناعي', English: 'Mechanical Ventilator' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ['Emergency Medicine', 'Pulmonology', 'General Medicine', 'Anaesthesia', 'Anatomy', 'Physiology', 'Internal Medicine'],
    synonyms: ['جهاز التنفس الصناعي', 'جهاز الرعاية المركزة للتهوية الميكانيكية']
  },
  {
    id: 'w255',
    word: { Arabic: 'جهاز قياس ضغط الدم', English: 'Sphygmomanometer' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ['Equipment', 'General Medicine', 'Emergency Medicine', 'Anaesthesia'],
    synonyms: ['جهاز قياس ضغط الدم', 'جهاز الضغط الزئبقي الكلاسيكي مع الكف']
  },
  {
    id: 'w256',
    word: { Arabic: 'الخلايا الكأسية', English: 'Goblet Cells' },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ['Histology', 'Gastroenterology', 'Physiology', 'Pathology', 'Biochemistry', 'General Surgery', 'Anatomy', 'Internal Medicine'],
    synonyms: ['الخلايا الكأسية', 'خلايا جوبلت المفرزة للمخاط المرطب بالأمعاء']
  },
  {
    id: 'w257',
    word: { Arabic: 'النسيج الطلائي', English: 'Epithelial Tissue' },
    level: 'Academic',
    difficulty: 2,
    type: 'Tissue',
    subjects: ['Histology', 'Anatomy', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['النسيج الطلائي', 'الأنسجة الظهارية المغطية للجلد والأعضاء الداخلية']
  },
  {
    id: 'w258',
    word: { Arabic: 'الميتوكوندريا', English: 'Mitochondria' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Histology', 'Biochemistry'],
    synonyms: ['الميتوكوندريا', 'المتقدرات بيوت طاقة الخلية وإنتاج ATP']
  },
  {
    id: 'w259',
    word: { Arabic: 'ناقضات العظم', English: 'Osteoclast' },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ['Histology', 'Orthopedics', 'Physiology', 'Pathology', 'Biochemistry', 'Rheumatology', 'Anatomy', 'General Surgery'],
    synonyms: ['ناقضات العظم', 'خلايا هدم العظام وإعادة هيكلة الكالسيوم']
  },
  {
    id: 'w260',
    word: { Arabic: 'حلقة ويليس الشريانية', English: 'Circle of Willis' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Neurology', 'Cardiology', 'Vascular Surgery', 'Physiology', 'Internal Medicine', 'Emergency Medicine', 'Psychiatry'],
    synonyms: ['حلقة ويليس الشريانية', 'شبكة تغذية الدماغ الدموية بقاع الجمجمة']
  },
  {
    id: 'w261',
    word: { Arabic: 'الزائدة الدودية', English: 'Appendix' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Anatomy', 'General Surgery', 'Gastroenterology', 'Physiology', 'Internal Medicine'],
    synonyms: ['الزائدة الدودية', 'التهاب الأعور الجراحي الحاد']
  },
  {
    id: 'w262',
    word: { Arabic: 'الحجاب الحاجز', English: 'Diaphragm' },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ['Anatomy', 'Pulmonology', 'Emergency Medicine', 'Physiology', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['الحجاب الحاجز', 'عضلة التنفس الرئيسية الفاصلة بين الصدر والبطن']
  },
  {
    id: 'w263',
    word: { Arabic: 'ارتخاء الصمام الميترالي', English: 'Mitral Valve Prolapse' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Emergency Medicine'],
    synonyms: ['ارتخاء الصمام الميترالي', 'انسدال الصمام الثنائي الشرف', 'انسدال التاجي', 'الميترالي', 'تسمع كليك', 'خرير الصمام', 'MVP']
  },
  {
    id: 'w264',
    word: { Arabic: 'جلطة الأوردة العميقة', English: 'Deep Vein Thrombosis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Cardiology', 'Vascular Surgery', 'Internal Medicine', 'Physiology', 'Anatomy', 'Emergency Medicine', 'Hematology', 'Biochemistry'],
    synonyms: ['جلطة الأوردة العميقة', 'جلطة الساق العميقة', 'جلطة وريدية', 'دي في تي', 'تورم الساق', 'DVT']
  },
  {
    id: 'w265',
    word: { Arabic: 'ظاهرة رينود', English: 'Raynaud\'s Phenomenon' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Vascular Surgery', 'Internal Medicine'],
    synonyms: ['ظاهرة رينود', 'مرض رينود', 'تشنج الأوعية الدموية', 'تغير لون الأصابع', 'برد الأصابع']
  },
  {
    id: 'w266',
    word: { Arabic: 'مرض بورجر', English: 'Buerger\'s Disease' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Vascular Surgery', 'Internal Medicine'],
    synonyms: ['مرض بورجر', 'التهاب الأوعية الخثاري المسد', 'بورجر', 'غرغرينا المدخنين', 'جلطات أطراف المدخنين']
  },
  {
    id: 'w267',
    word: { Arabic: 'اندحاس قلبي', English: 'Cardiac Tamponade' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Cardiology', 'Emergency Medicine'],
    synonyms: ['اندحاس قلبي', 'اندحاس القلب', 'دكاك قلبي', 'تراكم السوائل حول القلب', 'ثالوث بيك', 'انخفاض ضغط الدم مع احتقان الوريد']
  },
  {
    id: 'w268',
    word: { Arabic: 'اعتلال عضلة القلب', English: 'Cardiomyopathy' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Emergency Medicine', 'Orthopedics', 'Rheumatology', 'General Surgery'],
    synonyms: ['اعتلال عضلة القلب', 'ضعف عضلة القلب', 'تضخم القلب', 'اعتلال القلب التوسعي', 'اعتلال تضخمي']
  },
  {
    id: 'w269',
    word: { Arabic: 'التهاب الشغاف الإنتاني', English: 'Infective Endocarditis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Cardiology', 'Infectious Diseases', 'Internal Medicine', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['التهاب الشغاف الإنتاني', 'التهاب بطانة القلب', 'بكتيريا الصمامات', 'عقيدات بوزلر', 'بقع روت']
  },
  {
    id: 'w270',
    word: { Arabic: 'الرفرفة الأذينية', English: 'Atrial Flutter' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'Internal Medicine', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['الرفرفة الأذينية', 'رفرفة الأذين', 'تسارع ضربات القلب الأذيني', 'تخطيط سن المنشار', 'نبضات منشارية']
  },
  {
    id: 'w271',
    word: { Arabic: 'القناة الشريانية المفتوحة', English: 'Patent Ductus Arteriosus' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Cardiology'],
    synonyms: ['القناة الشريانية المفتوحة', 'بقاء القناة الشريانية مفتوحة', 'عيب خلقي قلبي', 'خرير مستمر', 'PDA']
  },
  {
    id: 'w272',
    word: { Arabic: 'دوالي الساقين', English: 'Varicose Veins' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Vascular Surgery', 'General Surgery', 'Cardiology', 'Physiology', 'Anatomy', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['دوالي الساقين', 'الدوالي', 'أوردة متسعة', 'توسع الأوردة', 'دوالي وريدية']
  },
  {
    id: 'w273',
    word: { Arabic: 'النوبة الإقفارية العابرة', English: 'Transient Ischemic Attack' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Internal Medicine', 'Emergency Medicine'],
    synonyms: ['النوبة الإقفارية العابرة', 'جلطة دماغية مؤقتة', 'السكتة الدماغية الصغيرة', 'قصور تروية مؤقت', 'TIA']
  },
  {
    id: 'w274',
    word: { Arabic: 'شلل بل', English: 'Bell\'s Palsy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Internal Medicine'],
    synonyms: ['شلل بل', 'شلل العصب السابع', 'اللقوة', 'التهاب العصب السابع', 'شلل وجهي نصفي']
  },
  {
    id: 'w275',
    word: { Arabic: 'الضمور العضلي الشوكي', English: 'Spinal Muscular Atrophy' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Pediatrics', 'Neurology', 'Genetics', 'Anatomy', 'Physiology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['الضمور العضلي الشوكي', 'ضمور العضلات الشوكي', 'مرض SMA', 'ضمور شوكي', 'حقنة الزولجنسما']
  },
  {
    id: 'w276',
    word: { Arabic: 'مرض كروتزفيلد جاكوب', English: 'Creutzfeldt-Jakob Disease' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Neurology', 'Pathology'],
    synonyms: ['مرض كروتزفيلد جاكوب', 'جنون البقر البشري', 'اعتلال دماغي إسفنجي', 'بريونات', 'مرض البريون', 'CJD']
  },
  {
    id: 'w277',
    word: { Arabic: 'التغفيق', English: 'Narcolepsy' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Psychiatry'],
    synonyms: ['التغفيق', 'مرض النوم القهري', 'النوم المفاجئ', 'نوبات النوم', 'الجمود المفاجئ']
  },
  {
    id: 'w278',
    word: { Arabic: 'التهاب الدماغ', English: 'Encephalitis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Neurology', 'Infectious Diseases', 'Internal Medicine', 'Anatomy', 'Physiology', 'Psychiatry'],
    synonyms: ['التهاب الدماغ', 'التهاب المخ', 'عدوى الدماغ', 'التهاب نسيج الدماغ']
  },
  {
    id: 'w279',
    word: { Arabic: 'اضطراب الهلع', English: 'Panic Disorder' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry', 'Family Medicine'],
    synonyms: ['اضطراب الهلع', 'نوبات الهلع', 'هلع', 'خوف شديد مفاجئ', 'اضطراب الفزع']
  },
  {
    id: 'w280',
    word: { Arabic: 'الوسواس القهري', English: 'Obsessive Compulsive Disorder' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry'],
    synonyms: ['الوسواس القهري', 'وسواس', 'مرض الوسواس', 'أفكار قهرية', 'سلوك قهري', 'OCD']
  },
  {
    id: 'w281',
    word: { Arabic: 'اضطراب ما بعد الصدمة', English: 'Post-Traumatic Stress Disorder' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry'],
    synonyms: ['اضطراب ما بعد الصدمة', 'صدمة نفسية', 'كرب ما بعد الصدمة', 'قلق الصدمة', 'PTSD']
  },
  {
    id: 'w282',
    word: { Arabic: 'اضطراب القلق العام', English: 'Generalized Anxiety Disorder' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry', 'Family Medicine', 'Internal Medicine'],
    synonyms: ['اضطراب القلق العام', 'القلق المزمن', 'قلق عام', 'اضطراب قلق', 'GAD']
  },
  {
    id: 'w283',
    word: { Arabic: 'ارتفاع ضغط الوريد البابي', English: 'Portal Hypertension' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'Internal Medicine', 'General Surgery'],
    synonyms: ['ارتفاع ضغط الوريد البابي', 'ضغط الوريد البابي', 'دوالي المريء', 'استسقاء بطني']
  },
  {
    id: 'w284',
    word: { Arabic: 'تعذر الارتخاء المريئي', English: 'Achalasia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'General Surgery'],
    synonyms: ['تعذر الارتخاء المريئي', 'أكالازيا', 'عسر بلع المريء', 'ارتخاء أسفل المريء', 'منقار الطائر في الأشعة']
  },
  {
    id: 'w285',
    word: { Arabic: 'مريء باريت', English: 'Barrett\'s Esophagus' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Gastroenterology', 'Pathology', 'Internal Medicine', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['مريء باريت', 'متلازمة باريت', 'تغير خلايا المريء', 'تحول نسيجي للمريء']
  },
  {
    id: 'w286',
    word: { Arabic: 'التهاب الرتوج', English: 'Diverticulitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'General Surgery'],
    synonyms: ['التهاب الرتوج', 'التهاب الجيوب القولونية', 'جيوب القولون المتهبة', 'فتق الغشاء المخاطي المعوي']
  },
  {
    id: 'w287',
    word: { Arabic: 'الانسداد المعوي', English: 'Intestinal Obstruction' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['General Surgery', 'Gastroenterology', 'Physiology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['الانسداد المعوي', 'انسداد الأمعاء', 'التواء الأمعاء', 'انسداد معوي حاد']
  },
  {
    id: 'w288',
    word: { Arabic: 'التهاب الصفاق', English: 'Peritonitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['General Surgery', 'Emergency Medicine'],
    synonyms: ['التهاب الصفاق', 'التهاب الغشاء البريتوني', 'تسمم البطن', 'التهاب تجويف البطن']
  },
  {
    id: 'w289',
    word: { Arabic: 'التهاب القنوات الصفراوية', English: 'Cholangitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'General Surgery', 'Internal Medicine'],
    synonyms: ['التهاب القنوات الصفراوية', 'التهاب مجاري الصفراء', 'عدوى القنوات المرارية', 'خماسي رينولدز']
  },
  {
    id: 'w290',
    word: { Arabic: 'التهاب القنوات الصفراوية الأولي', English: 'Primary Biliary Cholangitis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Gastroenterology', 'Internal Medicine', 'Pathology', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['التهاب القنوات الصفراوية الأولي', 'تليف كبدي مراري أولي', 'مرض PBC', 'مناعة ذاتية للكبد']
  },
  {
    id: 'w291',
    word: { Arabic: 'الاعتلال الدماغي الكبدي', English: 'Hepatic Encephalopathy' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Internal Medicine', 'Gastroenterology', 'General Surgery', 'Physiology', 'Anatomy'],
    synonyms: ['الاعتلال الدماغي الكبدي', 'غيبوبة كبدية', 'تسمم الدماغ بالأمونيا', 'ارتعاش اليدين الكبدي']
  },
  {
    id: 'w292',
    word: { Arabic: 'الفتق الإربي', English: 'Inguinal Hernia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['General Surgery'],
    synonyms: ['الفتق الإربي', 'فتق إربي', 'فتق الفخذ', 'بروز الأمعاء بالمنطقة الإربية']
  },
  {
    id: 'w293',
    word: { Arabic: 'الساركويد', English: 'Sarcoidosis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonology', 'Pathology', 'Internal Medicine'],
    synonyms: ['الساركويد', 'الغرناوية', 'ورم حبيبي غير متجبن', 'مرض الساركويد']
  },
  {
    id: 'w294',
    word: { Arabic: 'التليف الرئوي مجهول السبب', English: 'Idiopathic Pulmonary Fibrosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Pulmonology', 'Internal Medicine', 'Pathology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia'],
    synonyms: ['التليف الرئوي مجهول السبب', 'تليف الرئة مجهول السبب', 'تليف رئوي', 'عش النحل في الأشعة', 'IPF']
  },
  {
    id: 'w295',
    word: { Arabic: 'متلازمة انقطاع النفس النومي', English: 'Sleep Apnea Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Pulmonology', 'Neurology', 'Pediatrics', 'Genetics', 'Internal Medicine'],
    synonyms: ['متلازمة انقطاع النفس النومي', 'انقطاع التنفس أثناء النوم', 'الاختناق النومي', 'الشخير وانقطاع النفس']
  },
  {
    id: 'w296',
    word: { Arabic: 'التهاب غشاء الجنب', English: 'Pleurisy' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonology', 'Internal Medicine'],
    synonyms: ['التهاب غشاء الجنب', 'ذات الجنب', 'التهاب الجنب', 'ألم صدر تنفسي غشائي']
  },
  {
    id: 'w297',
    word: { Arabic: 'التهاب الحنجرة', English: 'Laryngitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Otolaryngology', 'Family Medicine'],
    synonyms: ['التهاب الحنجرة', 'بحة الصوت', 'التهاب الحبال الصوتية', 'فقدان الصوت المؤقت']
  },
  {
    id: 'w298',
    word: { Arabic: 'الدبيلة الصدرية', English: 'Empyema' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonology', 'General Surgery', 'Infectious Diseases'],
    synonyms: ['الدبيلة الصدرية', 'تجمع صديدي بالصدر', 'تقيح الجنب', 'صديد الغشاء البلوري']
  },
  {
    id: 'w299',
    word: { Arabic: 'متلازمة فرط التنفس', English: 'Hyperventilation Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Emergency Medicine', 'Psychiatry', 'Pediatrics', 'Genetics', 'Internal Medicine', 'Neurology'],
    synonyms: ['متلازمة فرط التنفس', 'التنفس السريع الهستيري', 'فرط التهوئة', 'تشنج الأصابع الكربوني']
  },
  {
    id: 'w300',
    word: { Arabic: 'ارتفاع ضغط الشريان الرئوي', English: 'Pulmonary Hypertension' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pulmonology', 'Cardiology', 'Internal Medicine', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia'],
    synonyms: ['ارتفاع ضغط الشريان الرئوي', 'ارتفاع ضغط الرئة', 'الضغط الرئوي الشرياني']
  },
  {
    id: 'w301',
    word: { Arabic: 'تنخر الأنابيب الحاد', English: 'Acute Tubular Necrosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Nephrology', 'Pathology', 'Internal Medicine'],
    synonyms: ['تنخر الأنابيب الحاد', 'الخراب الأنبوبي الحاد', 'موت خلايا أنابيب الكلى', 'قصور كلوي بسبب الأدوية', 'ATN']
  },
  {
    id: 'w302',
    word: { Arabic: 'تكيس الكلى', English: 'Polycystic Kidney Disease' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Nephrology', 'Genetics', 'Internal Medicine', 'Urology', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['تكيس الكلى', 'تكيس الكلى الوراثي', 'كلية متعددة الكيسات', 'مرض تكيس الكلى']
  },
  {
    id: 'w303',
    word: { Arabic: 'التهاب المثانة الخلالي', English: 'Interstitial Cystitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Internal Medicine'],
    synonyms: ['التهاب المثانة الخلالي', 'متلازمة المثانة المؤلمة', 'التهاب مثانة غير بكتيري']
  },
  {
    id: 'w304',
    word: { Arabic: 'حصوات الكلى الطبية', English: 'Nephrolithiasis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'General Surgery', 'Internal Medicine', 'Physiology', 'Anatomy', 'Pathology'],
    synonyms: ['حصوات الكلى الطبية', 'تحصي الكلى', 'حصوة الكلى', 'مغص كلوي', 'أكسالات الكالسيوم']
  },
  {
    id: 'w305',
    word: { Arabic: 'التهاب البروستاتا', English: 'Prostatitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Infectious Diseases'],
    synonyms: ['التهاب البروستاتا', 'التهاب البروستات', 'عدوى البروستاتا الحادة', 'التهاب بروستاتي مزمن']
  },
  {
    id: 'w306',
    word: { Arabic: 'الارتجاع المثاني الحالببي', English: 'Vesicoureteral Reflux' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Pediatrics', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Internal Medicine'],
    synonyms: ['الارتجاع المثاني الحالببي', 'جزر مثاني حالبي', 'ارتداد البول للكلية', 'ارتجاع البول']
  },
  {
    id: 'w307',
    word: { Arabic: 'تصلب كبيبات الكلى', English: 'Glomerulosclerosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Nephrology', 'Pathology', 'Urology', 'Internal Medicine', 'Physiology', 'Anatomy'],
    synonyms: ['تصلب كبيبات الكلى', 'تندب كبيبات الكلى', 'تصلب الكلى الكبيبي']
  },
  {
    id: 'w308',
    word: { Arabic: 'التحمض الكيتوني السكري', English: 'Diabetic Ketoacidosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Endocrinology', 'Emergency Medicine', 'Internal Medicine'],
    synonyms: ['التحمض الكيتوني السكري', 'حموضة الدم السكرية', 'غيبوبة السكر الأسيتونية', 'DKA', 'كيتونات في البول']
  },
  {
    id: 'w309',
    word: { Arabic: 'متلازمة شيهان', English: 'Sheehan\'s Syndrome' },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Endocrinology', 'Obstetrics and Gynecology', 'Internal Medicine', 'Pediatrics', 'Genetics', 'Neurology'],
    synonyms: ['متلازمة شيهان', 'نخر الغدة النخامية بعد الولادة', 'قصور النخامية الولادي', 'نزيف الولادة المسبب لكسل الغدد']
  },
  {
    id: 'w310',
    word: { Arabic: 'متلازمة كون', English: 'Conn\'s Syndrome' },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Endocrinology', 'Internal Medicine', 'Pediatrics', 'Genetics', 'Neurology'],
    synonyms: ['متلازمة كون', 'ألدوسترونية أولية', 'زيادة الألدوسترون', 'ورم قشر الكظر المفرز للألدوسترون']
  },
  {
    id: 'w311',
    word: { Arabic: 'التهاب الغدة الدرقية الحاد', English: 'De Quervain\'s Thyroiditis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Endocrinology', 'Internal Medicine', 'Pathology', 'Physiology', 'Biochemistry'],
    synonyms: ['التهاب الغدة الدرقية الحاد', 'التهاب دي كيرفان للدرقية', 'التهاب الغدة الدرقية تحت الحاد المؤلم']
  },
  {
    id: 'w312',
    word: { Arabic: 'قصور الغدد جارات الدرقية', English: 'Hypoparathyroidism' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Endocrinology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['قصور الغدد جارات الدرقية', 'خمول غدة باراثايروئيد', 'نقص هرمون الباراثورمون', 'تشنج الكالسيوم']
  },
  {
    id: 'w313',
    word: { Arabic: 'البلوغ المبكر', English: 'Precocious Puberty' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Endocrinology'],
    synonyms: ['البلوغ المبكر', 'بلوغ مبكر للأطفال', 'نشاط الهرمونات الجنسية المبكر']
  },
  {
    id: 'w314',
    word: { Arabic: 'متلازمة شوغرن', English: 'Sjögren\'s Syndrome' },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Rheumatology', 'Immunology', 'Internal Medicine', 'Pediatrics', 'Genetics', 'Neurology'],
    synonyms: ['متلازمة شوغرن', 'متلازمة جفاف العين والفم المناعية', 'شوغرن', 'جفاف الأغشية المخاطية']
  },
  {
    id: 'w315',
    word: { Arabic: 'تصلب الجلد المنهجي', English: 'Systemic Sclerosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Dermatology', 'Pathology'],
    synonyms: ['تصلب الجلد المنهجي', 'تصلب الجلد المناعي', 'مرض السكليروديرما', 'تصلب الجلد المنتشر']
  },
  {
    id: 'w316',
    word: { Arabic: 'ألم العضلات الروماتيزمي', English: 'Polymyalgia Rheumatica' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Internal Medicine', 'Orthopedics', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['ألم العضلات الروماتيزمي', 'ألم روماتيزمي متعدد', 'التهاب عضلات كبار السن', 'PMR']
  },
  {
    id: 'w317',
    word: { Arabic: 'مرض باجيت للعظام', English: 'Paget\'s Disease of Bone' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Orthopedics', 'Pathology', 'Internal Medicine', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['مرض باجيت للعظام', 'داء باجيت العظمي', 'خلل إعادة بناء العظام', 'مرض باجيت']
  },
  {
    id: 'w318',
    word: { Arabic: 'الجنف', English: 'Scoliosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Orthopedics', 'Pediatrics'],
    synonyms: ['الجنف', 'انحراف العمود الفقري', 'اعوجاج الظهر', 'ميلان العمود الفقري']
  },
  {
    id: 'w319',
    word: { Arabic: 'التهاب نخاع العظم', English: 'Osteomyelitis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Orthopedics', 'Infectious Diseases', 'General Surgery', 'Rheumatology', 'Anatomy', 'Physiology'],
    synonyms: ['التهاب نخاع العظم', 'التهاب العظم والنقي', 'عدوى العظام البكتيرية', 'التهاب العظام']
  },
  {
    id: 'w320',
    word: { Arabic: 'متلازمة النفق الرسغي', English: 'Carpal Tunnel Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Orthopedics', 'Neurology', 'General Surgery', 'Pediatrics', 'Genetics', 'Internal Medicine'],
    synonyms: ['متلازمة النفق الرسغي', 'ضغط عصب اليد', 'اختناق العصب الأوسط', 'تنميل أصابع اليدين', 'CTS']
  },
  {
    id: 'w321',
    word: { Arabic: 'الفقاع الشائع', English: 'Pemphigus Vulgaris' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Dermatology', 'Pathology', 'Immunology'],
    synonyms: ['الفقاع الشائع', 'مرض الفقاع الجلدي', 'فقاعات مائية بالجلد والفم المناعي']
  },
  {
    id: 'w322',
    word: { Arabic: 'التهاب الجلد التأتبي', English: 'Atopic Dermatitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology', 'Pediatrics', 'Family Medicine', 'Pathology', 'Histology'],
    synonyms: ['التهاب الجلد التأتبي', 'الإكزيما البنيوية', 'إكزيما الأطفال المسببة للحكة', 'أكزيما تأتبية']
  },
  {
    id: 'w323',
    word: { Arabic: 'الحزاز المسطح', English: 'Lichen Planus' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology', 'Pathology'],
    synonyms: ['الحزاز المسطح', 'حزاز جلدي', 'طفح جلدي بنفسجي حكة', 'الحزاز']
  },
  {
    id: 'w324',
    word: { Arabic: 'القوباء', English: 'Impetigo' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology', 'Pediatrics', 'Infectious Diseases'],
    synonyms: ['القوباء', 'القوباء المعدية للأطفال', 'بكتيريا حول الفم عسلية اللون', 'عدوى جلدية بكتيرية']
  },
  {
    id: 'w325',
    word: { Arabic: 'الجرب', English: 'Scabies' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology', 'Infectious Diseases', 'Family Medicine'],
    synonyms: ['الجرب', 'حشرة الجرب الجلدية', 'حكة جلدية ليلية شديدة للعاثات']
  },
  {
    id: 'w326',
    word: { Arabic: 'الوردية الجلدي', English: 'Rosacea' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Dermatology', 'Family Medicine'],
    synonyms: ['الوردية الجلدي', 'مرض الوردية', 'احمرار الوجه مع توسع الشعيرات', 'وردية الوجه']
  },
  {
    id: 'w327',
    word: { Arabic: 'سرطان القولون والمستقيم', English: 'Colorectal Cancer' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'General Surgery', 'Gastroenterology', 'Pathology', 'Hematology', 'Internal Medicine'],
    synonyms: ['سرطان القولون والمستقيم', 'سرطان القولون', 'سرطان المستقيم', 'أورام القولون الخبيثة']
  },
  {
    id: 'w328',
    word: { Arabic: 'سرطان البنكرياس', English: 'Pancreatic Cancer' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Oncology', 'General Surgery', 'Gastroenterology', 'Pathology', 'Hematology', 'Internal Medicine'],
    synonyms: ['سرطان البنكرياس', 'أورام البنكرياس الخبيثة', 'سرطان رأس البنكرياس', 'يرقان صامت']
  },
  {
    id: 'w329',
    word: { Arabic: 'الأرومة الدبقية', English: 'Glioblastoma' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Oncology', 'Neurology', 'Pathology'],
    synonyms: ['الأرومة الدبقية', 'ورم غليوبلاستوما', 'سرطان الدماغ الخبيث الشرس', 'أرومة دبقية متعددة الأشكال']
  },
  {
    id: 'w330',
    word: { Arabic: 'سرطان العظام والغرن العظمي', English: 'Osteosarcoma' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Oncology', 'Orthopedics', 'Pathology', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['سرطان العظام والغرن العظمي', 'ساركوما عظمية', 'أورام العظام الخبيثة للأطفال', 'غرن عظمي']
  },
  {
    id: 'w331',
    word: { Arabic: 'ورم الأرومة العصبية', English: 'Neuroblastoma' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Oncology', 'Pediatrics', 'Pathology', 'Neurology', 'Anatomy', 'Physiology', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['ورم الأرومة العصبية', 'نيوروبلاستوما', 'سرطان الغدة الكظرية للأطفال من الخلايا العصبية']
  },
  {
    id: 'w332',
    word: { Arabic: 'ورم ويلمز', English: 'Wilms\' Tumor' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Oncology', 'Pediatrics', 'Urology', 'Pathology', 'Hematology', 'Internal Medicine'],
    synonyms: ['ورم ويلمز', 'سرطان الكلى للأطفال ويلمز', 'سرطان كلى طفولي']
  },
  {
    id: 'w333',
    word: { Arabic: 'فقر الدم اللاتنسجي', English: 'Aplastic Anemia' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Internal Medicine', 'Pathology', 'Physiology', 'Biochemistry'],
    synonyms: ['فقر الدم اللاتنسجي', 'الأنيميا اللاتنسجية', 'فشل نخاع العظام الإنتاجي', 'نقص كرات الدم الثلاثية الشامل']
  },
  {
    id: 'w334',
    word: { Arabic: 'كثرة الحمر الحقيقية', English: 'Polycythemia Vera' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Internal Medicine', 'Pathology'],
    synonyms: ['كثرة الحمر الحقيقية', 'احمرار الدم الحقيقي', 'فرط خلايا الدم الحمراء الأولي', 'طفرة جاك تو']
  },
  {
    id: 'w335',
    word: { Arabic: 'قلة الصفائح الدموية', English: 'Thrombocytopenia' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Internal Medicine', 'Physiology', 'Biochemistry'],
    synonyms: ['قلة الصفائح الدموية', 'نقص صفائح الدم', 'مرض نقص الصفائح', 'فرفرية نقص الصفائح']
  },
  {
    id: 'w336',
    word: { Arabic: 'التخثر المنتثر داخل الأوعية', English: 'Disseminated Intravascular Coagulation' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Hematology', 'Emergency Medicine', 'Pathology', 'Cardiology', 'Vascular Surgery', 'Physiology', 'Anatomy', 'Internal Medicine', 'Biochemistry'],
    synonyms: ['التخثر المنتثر داخل الأوعية', 'تجلط الدم المنتشر', 'اعتلال تخثر استهلاكي حاد', 'DIC']
  },
  {
    id: 'w337',
    word: { Arabic: 'الأنيميا الخبيثة', English: 'Pernicious Anemia' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Internal Medicine', 'Gastroenterology', 'Physiology', 'Biochemistry'],
    synonyms: ['الأنيميا الخبيثة', 'أنيميا فقر الدم الخبيث', 'نقص فيتامين ب12 بسبب نقص العامل الداخلي']
  },
  {
    id: 'w338',
    word: { Arabic: 'فقر الدم الانحلالي المناعي الذاتي', English: 'Autoimmune Hemolytic Anemia' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Hematology', 'Internal Medicine', 'Immunology', 'Physiology', 'Biochemistry'],
    synonyms: ['فقر الدم الانحلالي المناعي الذاتي', 'أنيميا انحلالية مناعية', 'تكسير خلايا الدم بالمنظومة المناعية']
  },
  {
    id: 'w339',
    word: { Arabic: 'حمى التيفوئيد', English: 'Typhoid Fever' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Internal Medicine', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['حمى التيفوئيد', 'حمى التيفود', 'عدوى السالمونيلا التيفية', 'التيفود']
  },
  {
    id: 'w340',
    word: { Arabic: 'الحمى الصفراء', English: 'Yellow Fever' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Emergency Medicine', 'Microbiology', 'Parasitology', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الحمى الصفراء', 'الحمى الصفراء الفيروسية المنقولة بالبعوض', 'يرقان فيروسي']
  },
  {
    id: 'w341',
    word: { Arabic: 'كثرة الوحيدات الخمجية', English: 'Infectious Mononucleosis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Pediatrics', 'Hematology', 'Microbiology', 'Parasitology', 'Internal Medicine'],
    synonyms: ['كثرة الوحيدات الخمجية', 'داء كثرة الوحيدات', 'مرض القبلة الفيروسي', 'حمى الغدد الإيبشتاين بار']
  },
  {
    id: 'w342',
    word: { Arabic: 'البلهارسيا', English: 'Schistosomiasis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Urology', 'Gastroenterology', 'Microbiology', 'Parasitology', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['البلهارسيا', 'مرض البلهارسيا', 'داء البلهارسيات', 'البلهارزيا بالبول والبراز']
  },
  {
    id: 'w343',
    word: { Arabic: 'داء لايم', English: 'Lyme Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Rheumatology', 'Neurology'],
    synonyms: ['داء لايم', 'مرض لايم', 'عدوى بوريليا المنقولة بالقراد', 'طفح جلد عين الثور في لايم']
  },
  {
    id: 'w344',
    word: { Arabic: 'داء البريميات', English: 'Leptospirosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Internal Medicine', 'Nephrology'],
    synonyms: ['داء البريميات', 'حمى البريميات', 'داء ويل البكتيري من القوارض', 'عدوى بول الفئران']
  },
  {
    id: 'w345',
    word: { Arabic: 'داء المقوسات', English: 'Toxoplasmosis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Obstetrics and Gynecology', 'Parasitology'],
    synonyms: ['داء المقوسات', 'مرض القطط', 'التوكسوبلازما', 'عدوى القطط المسببة للإجهاض']
  },
  {
    id: 'w346',
    word: { Arabic: 'داء شاغاس', English: 'Chagas Disease' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Cardiology', 'Parasitology'],
    synonyms: ['داء شاغاس', 'مرض شاغاس الكاريبي', 'التريبانوسوما الكروزية المسببة لتضخم القولون والقلب']
  },
  {
    id: 'w347',
    word: { Arabic: 'داء الرشاشيات', English: 'Aspergillosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Pulmonology', 'Microbiology'],
    synonyms: ['داء الرشاشيات', 'فطر الرشاشيات الرئوي', 'ورم فطر الأسبيرجيلوس الكروي بالرئة']
  },
  {
    id: 'w348',
    word: { Arabic: 'داء المبيضات', English: 'Candidiasis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Dermatology', 'Microbiology'],
    synonyms: ['داء المبيضات', 'عدوى الكانديدا الفطرية', 'فطريات الفم والمهبل كانديدا', 'السلاق الأبيض']
  },
  {
    id: 'w349',
    word: { Arabic: 'بطانة الرحم المهاجرة', English: 'Endometriosis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Pathology'],
    synonyms: ['بطانة الرحم المهاجرة', 'داء بطانة الرحم', 'شوكولاتة كيس المبيض', 'مهاجرة الخلايا الرحمية']
  },
  {
    id: 'w350',
    word: { Arabic: 'المشيمة المزاحة', English: 'Placenta Previa' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['المشيمة المزاحة', 'المشيمة المنزاحة الساقطة', 'نزول المشيمة أسفل الرحم', 'نزيف حملي غير مؤلم']
  },
  {
    id: 'w351',
    word: { Arabic: 'انفصال المشيمة المبكر', English: 'Abruptio Placentae' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['انفصال المشيمة المبكر', 'انفكاك المشيمة الباكر', 'انفصال مشيمي حاد مؤلم']
  },
  {
    id: 'w352',
    word: { Arabic: 'القيء المفرط الحملي', English: 'Hyperemesis Gravidarum' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Internal Medicine'],
    synonyms: ['القيء المفرط الحملي', 'تسمم القيء الشديد للحوامل', 'الغثيان الحملي الشديد المؤدي للجفاف']
  },
  {
    id: 'w353',
    word: { Arabic: 'الحمل العنقودي', English: 'Hydatidiform Mole' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Pathology'],
    synonyms: ['الحمل العنقودي', 'الحمل الرحمي الغازي العنقودي', 'الرحم العنقودي الحويصلي']
  },
  {
    id: 'w354',
    word: { Arabic: 'العضال الغدي الرحمي', English: 'Adenomyosis' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Obstetrics and Gynecology', 'Pathology', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['العضال الغدي الرحمي', 'تغدد الرحم', 'بطانة الرحم الداخلية المهاجرة لعضلة الرحم']
  },
  {
    id: 'w355',
    word: { Arabic: 'اعتلال الشبكية السكري', English: 'Diabetic Retinopathy' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Endocrinology', 'Internal Medicine'],
    synonyms: ['اعتلال الشبكية السكري', 'تأثر شبكية العين بالسكر', 'نزيف الشبكية لمرضى السكري']
  },
  {
    id: 'w356',
    word: { Arabic: 'الضمور البقعي', English: 'Macular Degeneration' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Ophthalmology'],
    synonyms: ['الضمور البقعي', 'التنكس البقعي المرتبط بالسن', 'تلف مركز بصر العين البقعة الصفراء']
  },
  {
    id: 'w357',
    word: { Arabic: 'انفصال الشبكية', English: 'Retinal Detachment' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Emergency Medicine', 'Anatomy', 'General Surgery'],
    synonyms: ['انفصال الشبكية', 'انفصال شبكية العين الحاد', 'ستارة سوداء أمام العين']
  },
  {
    id: 'w358',
    word: { Arabic: 'التهاب الأذن الخارجية', English: 'Otitis Externa' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Otolaryngology', 'Family Medicine'],
    synonyms: ['التهاب الأذن الخارجية', 'أذن السباح', 'التهاب مجرى السمع الظاهر']
  },
  {
    id: 'w359',
    word: { Arabic: 'مرض مينيير', English: 'Meniere\'s Disease' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Otolaryngology', 'Neurology'],
    synonyms: ['مرض مينيير', 'داء مينيير للأذن الداخلية', 'طنين مع دوار مينييري متكرر']
  },
  {
    id: 'w360',
    word: { Arabic: 'التهاب التيه الأذني', English: 'Labyrinthitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Otolaryngology', 'Neurology'],
    synonyms: ['التهاب التيه الأذني', 'التهاب الأذن الداخلية الدهليزي', 'التهاب التيه المسبب للدوخة والدوار']
  },
  {
    id: 'w361',
    word: { Arabic: 'الخناق للأطفال', English: 'Croup' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Otolaryngology', 'Emergency Medicine'],
    synonyms: ['الخناق للأطفال', 'التهاب الحنجرة والرغامي للأطفال', 'السعال النباحي للأطفال']
  },
  {
    id: 'w362',
    word: { Arabic: 'التهاب الشعيبات الهوائية للأطفال', English: 'Bronchiolitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Pulmonology', 'Emergency Medicine', 'Anatomy', 'Physiology', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['التهاب الشعيبات الهوائية للأطفال', 'التهاب الشعيبات الرئوية الفيروسي للأطفال', 'صوت تزييق الصدر للرضع']
  },
  {
    id: 'w363',
    word: { Arabic: 'لوح اليمين', English: 'Scapula' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['لوح اليمين', 'لوح الكتف', 'عظمة لوح الكتف', 'الكتف', 'كتف', 'لوحي']
  },
  {
    id: 'w364',
    word: { Arabic: 'عظمة القص', English: 'Sternum' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'General Surgery', 'Physiology', 'Pathology'],
    synonyms: ['عظمة القص', 'القص', 'عظم القص', 'قص']
  },
  {
    id: 'w365',
    word: { Arabic: 'الرضفة', English: 'Patella' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['الرضفة', 'صابونة الركبة', 'صابونه الركبه', 'الرضفه', 'صابونة']
  },
  {
    id: 'w366',
    word: { Arabic: 'عظمة القصبة', English: 'Tibia' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['عظمة القصبة', 'القصبة', 'قصبة الساق', 'القصبة الرجيلية']
  },
  {
    id: 'w367',
    word: { Arabic: 'عظمة الشظية', English: 'Fibula' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['عظمة الشظية', 'الشظية', 'شظية', 'الشظيه']
  },
  {
    id: 'w368',
    word: { Arabic: 'الفك السفلي', English: 'Mandible' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Dentistry', 'Physiology', 'Pathology'],
    synonyms: ['الفك السفلي', 'عظم الفك السفلي', 'الفك', 'فك سفلي']
  },
  {
    id: 'w369',
    word: { Arabic: 'الجمجمة', English: 'Skull' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurosurgery', 'Physiology', 'Pathology'],
    synonyms: ['الجمجمة', 'جمجمة', 'عظام الرأس', 'الجمجمه']
  },
  {
    id: 'w370',
    word: { Arabic: 'عظمة الكعبرة', English: 'Radius' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['عظمة الكعبرة', 'الكعبرة', 'كعبرة', 'الكعبره']
  },
  {
    id: 'w371',
    word: { Arabic: 'عظمة الزند', English: 'Ulna' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['عظمة الزند', 'الزند', 'زند', 'عظم الزند']
  },
  {
    id: 'w372',
    word: { Arabic: 'عظام مشط اليد', English: 'Metacarpals' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Orthopedics'],
    synonyms: ['عظام مشط اليد', 'مشط اليد', 'سنع اليد', 'المشط اليدوي']
  },
  {
    id: 'w373',
    word: { Arabic: 'عظام مشط القدم', English: 'Metatarsals' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Orthopedics'],
    synonyms: ['عظام مشط القدم', 'مشط القدم', 'المشط الرجيلي', 'مشط قدم']
  },
  {
    id: 'w374',
    word: { Arabic: 'عظمة العصعص', English: 'Coccyx' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Orthopedics', 'Physiology', 'Pathology'],
    synonyms: ['عظمة العصعص', 'العصعص', 'عصعص', 'عصعصي']
  },
  {
    id: 'w375',
    word: { Arabic: 'الاثني عشر', English: 'Duodenum' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Gastroenterology'],
    synonyms: ['الاثني عشر', 'اثني عشر', 'الاثنا عشر', 'العفج', 'الامعاء الدقيقة الاولى']
  },
  {
    id: 'w376',
    word: { Arabic: 'الحالب', English: 'Ureter' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Urology'],
    synonyms: ['الحالب', 'حالب', 'مجرى البول العلوي', 'الحالبين']
  },
  {
    id: 'w377',
    word: { Arabic: 'القصبة الهوائية', English: 'Trachea' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Pulmonology', 'Otolaryngology', 'Physiology', 'Pathology', 'Emergency Medicine', 'Anaesthesia', 'Internal Medicine'],
    synonyms: ['القصبة الهوائية', 'القصبة', 'القصبه الهوائيه', 'قصبه هوائيه']
  },
  {
    id: 'w378',
    word: { Arabic: 'الحنجرة', English: 'Larynx' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Otolaryngology', 'Physiology', 'Pathology'],
    synonyms: ['الحنجرة', 'حنجرة', 'عضو الصوت', 'الحنجره', 'الأحبال الصوتية']
  },
  {
    id: 'w379',
    word: { Arabic: 'البلعوم', English: 'Pharynx' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Otolaryngology', 'Physiology', 'Pathology'],
    synonyms: ['البلعوم', 'بلعوم', 'حلق', 'الحلق', 'البلعوم الفموي']
  },
  {
    id: 'w380',
    word: { Arabic: 'تحت المهاد', English: 'Hypothalamus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Neurology', 'Endocrinology', 'Physiology', 'Pathology'],
    synonyms: ['تحت المهاد', 'الهيبوثالاموس', 'منطقة تحت المهاد', 'تحت مهاد']
  },
  {
    id: 'w381',
    word: { Arabic: 'الغدة الصنوبرية', English: 'Pineal Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Endocrinology', 'Physiology', 'Pathology'],
    synonyms: ['الغدة الصنوبرية', 'الصنوبرية', 'الغدة الصنوبريه', 'صنوبرية', 'ميلاتونين']
  },
  {
    id: 'w382',
    word: { Arabic: 'الغدة الجار درقية', English: 'Parathyroid Gland' },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ['Anatomy', 'Endocrinology', 'Surgery', 'Physiology', 'Pathology', 'Internal Medicine', 'Biochemistry'],
    synonyms: ['الغدة الجار درقية', 'الجار درقية', 'جارات الدرقية', 'الغدد جارات الدرقية']
  },
  {
    id: 'w383',
    word: { Arabic: 'الوعاء الناقل', English: 'Vas Deferens' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Urology'],
    synonyms: ['الوعاء الناقل', 'الاسهر', 'الأسهر', 'الحبل المنوي', 'قناة منوية']
  },
  {
    id: 'w384',
    word: { Arabic: 'قناة فالوب', English: 'Fallopian Tube' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Obstetrics and Gynecology'],
    synonyms: ['قناة فالوب', 'قناة المبيض', 'فالوب', 'قناه فالوب']
  },
  {
    id: 'w385',
    word: { Arabic: 'القناة المرارية', English: 'Bile Duct' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Gastroenterology', 'General Surgery', 'Physiology', 'Internal Medicine'],
    synonyms: ['القناة المرارية', 'قناة الصفراء', 'قناة مجرى الصفراء', 'القنوات الصفراوية']
  },
  {
    id: 'w386',
    word: { Arabic: 'القنوات الهلالية', English: 'Semicircular Canals' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Anatomy', 'Otolaryngology'],
    synonyms: ['القنوات الهلالية', 'القنوات شبه الدائرية', 'قنوات التوازن', 'الأذن الداخلية']
  },
  {
    id: 'w387',
    word: { Arabic: 'الخلية العصبية', English: 'Neuron' },
    level: 'Academic',
    difficulty: 1,
    type: 'Cell',
    subjects: ['Histology', 'Neurology', 'Physiology', 'Pathology', 'Biochemistry', 'Anatomy', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['الخلية العصبية', 'خلية عصبية', 'عصبون', 'العصبون']
  },
  {
    id: 'w388',
    word: { Arabic: 'الخلية العظمية', English: 'Osteocyte' },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ['Histology', 'Orthopedics', 'Physiology', 'Pathology', 'Biochemistry', 'Rheumatology', 'Anatomy', 'General Surgery'],
    synonyms: ['الخلية العظمية', 'خلية عظمية', 'خلايا العظام', 'بناء العظم']
  },
  {
    id: 'w389',
    word: { Arabic: 'الخلية الغضروفية', English: 'Chondrocyte' },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ['Histology', 'Orthopedics', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['الخلية الغضروفية', 'خلية غضروفية', 'خلايا الغضاريف']
  },
  {
    id: 'w390',
    word: { Arabic: 'الخلية الحمراء', English: 'Erythrocyte' },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ['Histology', 'Hematology', 'Physiology', 'Pathology', 'Biochemistry', 'Internal Medicine'],
    synonyms: ['الخلية الحمراء', 'خلية دم حمراء', 'كريات الدم الحمراء', 'خلايا الدم الحمراء']
  },
  {
    id: 'w391',
    word: { Arabic: 'الخلية الدهنية', English: 'Adipocyte' },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ['Histology', 'Endocrinology', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['الخلية الدهنية', 'خلية دهنية', 'نسيج دهني', 'خلايا الدهون']
  },
  {
    id: 'w392',
    word: { Arabic: 'الحويصلة الهوائية', English: 'Alveolus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Anatomy', 'Pulmonology', 'Histology'],
    synonyms: ['الحويصلة الهوائية', 'الحويصلات الهوائية', 'حويصلة هوائية', 'الأسناخ الرئوية', 'تبادل الغازات']
  },
  {
    id: 'w393',
    word: { Arabic: 'الكبيبة الكلوية', English: 'Glomerulus' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Histology', 'Nephrology', 'Pathology', 'Urology', 'Internal Medicine', 'Physiology', 'Anatomy'],
    synonyms: ['الكبيبة الكلوية', 'الكبيبة', 'كبيبات الكلى', 'مرشح الكلية']
  },
  {
    id: 'w394',
    word: { Arabic: 'شغاف القلب', English: 'Endocardium' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'Cardiology', 'Histology', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['شغاف القلب', 'الشغاف', 'بطانة القلب', 'الطبقة الداخلية للقلب']
  },
  {
    id: 'w395',
    word: { Arabic: 'غشاء التأمور', English: 'Pericardium' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'Cardiology', 'Histology', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['غشاء التأمور', 'التأمور', 'الغشاء المحيط بالقلب', 'كيس القلب']
  },
  {
    id: 'w396',
    word: { Arabic: 'غشاء الجنب', English: 'Pleura' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'Pulmonology', 'Histology', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['غشاء الجنب', 'الجنب', 'الغشاء البلوري', 'الغشاء المحيط بالرئة']
  },
  {
    id: 'w397',
    word: { Arabic: 'الغشاء البريتوني', English: 'Peritoneum' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'General Surgery', 'Histology', 'Physiology', 'Pathology', 'Biochemistry'],
    synonyms: ['الغشاء البريتوني', 'الصفاق', 'البريتون', 'غشاء البطن البريتوني']
  },
  {
    id: 'w398',
    word: { Arabic: 'عضلة الرحم', English: 'Myometrium' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'Obstetrics and Gynecology', 'Histology', 'Physiology', 'Pathology', 'Biochemistry', 'Orthopedics', 'Rheumatology', 'General Surgery'],
    synonyms: ['عضلة الرحم', 'عضلات الرحم', 'الطبقة العضلية للرحم']
  },
  {
    id: 'w399',
    word: { Arabic: 'السحايا', English: 'Meninges' },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ['Anatomy', 'Neurology', 'Histology', 'Physiology', 'Pathology', 'Biochemistry', 'Internal Medicine', 'Psychiatry'],
    synonyms: ['السحايا', 'أغشية السحايا', 'الأغشية الدماغية', 'أم جافية وعنكبوتية وأم حنون']
  },
  {
    id: 'w400',
    word: { Arabic: 'الحمى الروماتيزمية', English: 'Rheumatic Fever' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Pediatrics', 'Cardiology', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Internal Medicine'],
    synonyms: ['الحمى الروماتيزمية', 'حمى روماتيزمية', 'الروماتيزم المفصلي', 'الميكروب السبحي']
  },
  {
    id: 'w401',
    word: { Arabic: 'متلازمة شوغرن', English: 'Sjogren Syndrome' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Rheumatology', 'Dermatology', 'Pediatrics', 'Genetics', 'Internal Medicine', 'Neurology'],
    synonyms: ['متلازمة شوغرن', 'داء شوغرن', 'جفاف العين والفم المناعي', 'شوغرن']
  },
  {
    id: 'w402',
    word: { Arabic: 'تصلب الجلد', English: 'Scleroderma' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Rheumatology', 'Dermatology'],
    synonyms: ['تصلب الجلد', 'داء تصلب الجلد الجهازى', 'تصلب الجلد المناعي', 'سكليروديرما']
  },
  {
    id: 'w403',
    word: { Arabic: 'التهاب المفاصل النقرس', English: 'Gouty Arthritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Rheumatology', 'Orthopedics', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['التهاب المفاصل النقرس', 'نقرس المفاصل', 'النقرس الحاد', 'داء الملوك في المفاصل']
  },
  {
    id: 'w404',
    word: { Arabic: 'سرطان العظام', English: 'Osteosarcoma' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Oncology', 'Orthopedics', 'Rheumatology', 'Anatomy', 'Physiology', 'General Surgery'],
    synonyms: ['سرطان العظام', 'ساركوما عظمية', 'أورام العظام الخبيثة', 'ورم عظمي خبيث']
  },
  {
    id: 'w405',
    word: { Arabic: 'تضخم البروستاتا الحميد', English: 'Benign Prostatic Hyperplasia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Urology', 'Pathology'],
    synonyms: ['تضخم البروستاتا الحميد', 'تضخم البروستاتا', 'البروستاتا الحميد', 'احتباس البول البروستاتي', 'BPH']
  },
  {
    id: 'w406',
    word: { Arabic: 'ارتجاع المريء', English: 'Gastroesophageal Reflux' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'Internal Medicine', 'General Surgery', 'Physiology', 'Anatomy', 'Infectious Diseases', 'Microbiology', 'Parasitology', 'Pediatrics'],
    synonyms: ['ارتجاع المريء', 'حوض المعدة', 'حموضة المريء', 'ارتجاع المريء والبلعوم']
  },
  {
    id: 'w407',
    word: { Arabic: 'القولون العصبي', English: 'Irritable Bowel Syndrome' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ['Gastroenterology', 'Internal Medicine', 'Pediatrics', 'Genetics', 'Neurology'],
    synonyms: ['القولون العصبي', 'مغص القولون العصبي', 'متلازمة الأمعاء المتهيجة', 'IBS']
  },
  {
    id: 'w408',
    word: { Arabic: 'تضيق الصمام الأبهر', English: 'Aortic Stenosis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology', 'General Surgery'],
    synonyms: ['تضيق الصمام الأبهر', 'ضيق الصمام الأورطي', 'تضيق الأبهر', 'AS']
  },
  {
    id: 'w409',
    word: { Arabic: 'ارتجاع الصمام ثلاثي الشرفات', English: 'Tricuspid Regurgitation' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Cardiology'],
    synonyms: ['ارتجاع الصمام ثلاثي الشرفات', 'ارتجاع الصمام الثلاثي', 'ارتجاع ثلاثي الشرف']
  },
  {
    id: 'w410',
    word: { Arabic: 'المياه الزرقاء', English: 'Glaucoma' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Anatomy', 'General Surgery'],
    synonyms: ['المياه الزرقاء', 'الجلوكوما', 'ارتفاع ضغط العين', 'المياه الزرقاء بالعين', 'جلوكوما']
  },
  {
    id: 'w411',
    word: { Arabic: 'المياه البيضاء', English: 'Cataract' },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Ophthalmology', 'Anatomy', 'General Surgery'],
    synonyms: ['المياه البيضاء', 'الساد', 'عتامة عدسة العين', 'كتاراكت', 'المياه البيضاء بالعين']
  },
  {
    id: 'w412',
    word: { Arabic: 'التهاب المعدة', English: 'Gastritis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Gastroenterology', 'Internal Medicine'],
    synonyms: ['التهاب المعدة', 'حموضة المعدة', 'قرحة المعدة البسيطة', 'التهاب جدار المعدة']
  },
  {
    id: 'w413',
    word: { Arabic: 'الإنفلونزا', English: 'Influenza' },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Pulmonology', 'Internal Medicine', 'Pediatrics'],
    synonyms: ['الإنفلونزا', 'الانفلونزا', 'البرد', 'النزلة الوافدة', 'الزكام', 'Influenza', 'Flu']
  },
  {
    id: 'w414',
    word: { Arabic: 'الربو', English: 'Asthma' },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ['Pulmonology', 'Emergency Medicine', 'Pediatrics', 'Internal Medicine'],
    synonyms: ['الربو', 'حساسية الصدر', 'أزمة ربوية', 'ضيق التنفس الصدري', 'Asthma']
  },
  {
    id: 'w415',
    word: { Arabic: 'الأسبرين', English: 'Aspirin' },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Cardiology', 'Internal Medicine'],
    synonyms: ['الأسبرين', 'اسبرين', 'حمض أسيتيل ساليسيليك', 'ريفو', 'Aspirin', 'ASA', 'أسبوسيد']
  },
  {
    id: 'w416',
    word: { Arabic: 'المعدة', English: 'Stomach' },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ['Anatomy', 'Physiology', 'Gastroenterology'],
    synonyms: ['المعدة', 'معدة', 'جدار المعدة', 'Stomach']
  },
  {
    id: 'w417',
    word: { Arabic: 'الملاريا', English: 'Malaria' },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Infectious Diseases', 'Microbiology', 'Parasitology', 'Internal Medicine'],
    synonyms: ['الملاريا', 'ملاريا', 'حمى المستنقعات', 'بلازموديوم', 'Malaria', 'انوفيلس']
  },
  {
    id: 'w418',
    word: { Arabic: 'البنسلين', English: 'Penicillin' },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ['Pharmacology', 'Infectious Diseases', 'Microbiology'],
    synonyms: ['البنسلين', 'بنسلين', 'مضاد بنسلين', 'Penicillin', 'بنسلين طويل المفعول']
  },
  {
    id: 'w419',
    word: { Arabic: 'الفصام', English: 'Schizophrenia' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['Psychiatry', 'Neurology', 'Internal Medicine'],
    synonyms: ['الفصام', 'انفصام الشخصية', 'شيزوفرينيا', 'الذهان', 'Schizophrenia']
  },
  {
    id: 'w420',
    word: { Arabic: 'التهاب الزائدة الدودية', English: 'Appendicitis' },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ['General Surgery', 'Emergency Medicine', 'Pediatrics', 'Gastroenterology'],
    synonyms: ['التهاب الزائدة الدودية', 'الزائدة', 'التهاب الزائدة', 'زائدة دودية', 'Appendicitis']
  },
  {
    id: 'w421',
    word: { Arabic: 'مستقبلات الأنسولين', English: 'Insulin Receptors' },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ['Biochemistry', 'Endocrinology', 'Physiology'],
    synonyms: ['مستقبلات الأنسولين', 'مستقبل الأنسولين', 'Insulin receptor', 'مستقبلات سكر']
  },
  {
    id: 'w422',
    word: { Arabic: 'التصلب المتعدد', English: 'Multiple Sclerosis' },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Neurology', 'Anatomy', 'Internal Medicine'],
    synonyms: ['التصلب المتعدد', 'التصلب اللويحي', 'مرض التصلب المتعدد', 'MS', 'Multiple Sclerosis']
  },
  {
    id: 'w423',
    word: { Arabic: 'البلازميد', English: 'Plasmid' },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ['Genetics', 'Biochemistry', 'Microbiology'],
    synonyms: ['بلازميد', 'البلازميد', 'حلقات دي ان اي', 'Plasmid']
  },
  {
    id: 'w424',
    word: { Arabic: 'عصيات كوخ', English: 'Mycobacterium tuberculosis' },
    level: 'Academic',
    difficulty: 3,
    type: 'Other',
    subjects: ['Microbiology', 'Infectious Diseases', 'Pulmonology', 'Pathology'],
    synonyms: ['عصيات كوخ', 'بكتيريا السل', 'ميكروب السل', 'درن', 'Tubercle bacillus', 'Mycobacterium', 'بكتيريا الدرن']
  },
  {
    id: 'w425',
    word: { Arabic: 'التهاب الشغاف', English: 'Endocarditis' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ['Cardiology', 'Infectious Diseases', 'Internal Medicine', 'Pathology'],
    synonyms: ['التهاب الشغاف', 'التهاب صمامات القلب', 'التهاب بطانة القلب', 'Endocarditis']
  },
  {
    id: 'w426',
    word: { Arabic: 'بكتيريا الإشريكية القولونية', English: 'Escherichia coli' },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ['Microbiology', 'Infectious Diseases', 'Gastroenterology', 'Urology'],
    synonyms: ['القولونية', 'إي كولاي', 'الإشريكية القولونية', 'بكتيريا الأمعاء', 'E. coli', 'Escherichia coli', 'بكتيريا القولون']
  },
  {
    id: 'w427',
    word: { Arabic: 'متلازمة غيلان باريه', English: 'Guillain-Barré Syndrome' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ['Neurology', 'Internal Medicine', 'Emergency Medicine', 'Pediatrics'],
    synonyms: ['غيلان باريه', 'متلازمة غيلان باريه', 'الشلل الصاعد', 'Guillain-Barre', 'GBS']
  },
  {
    id: 'w428',
    word: { Arabic: 'عامل تحفيز مستعمرات الخلايا الحبيبية', English: 'G-CSF' },
    level: 'Clinical',
    difficulty: 3,
    type: 'Component',
    subjects: ['Oncology', 'Hematology', 'Pharmacology'],
    synonyms: ['نيوبوجين', 'عامل تحفيز الخلايا الحبيبية', 'G-CSF', 'Filgrastim', 'مستحث الخلايا']
  }
];

// In-place dynamic enrichment of specialties and guessing difficulty for all 260+ terms
medicalWords.forEach(w => {
  const nameEn = w.word.English.toLowerCase();
  const nameAr = w.word.Arabic.toLowerCase();
  const type = w.type;
  
  // Initialize set of subjects from existing subjects
  const sSet = new Set<string>(w.subjects);
  
  // Base rules based on type
  if (type === 'Organ') {
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('Pathology');
  } else if (type === 'Muscle') {
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('Orthopedics');
    sSet.add('General Surgery');
  } else if (type === 'Nerve') {
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('Neurology');
    sSet.add('General Surgery');
  } else if (type === 'Pharma') {
    sSet.add('Pharmacology');
    sSet.add('Internal Medicine');
  } else if (type === 'Equipment') {
    sSet.add('Emergency Medicine');
    sSet.add('General Medicine');
    sSet.add('Anaesthesia');
  } else if (type === 'Syndrome') {
    sSet.add('Pediatrics');
    sSet.add('Genetics');
    sSet.add('Internal Medicine');
    sSet.add('Neurology');
  } else if (type === 'Parasite') {
    sSet.add('Parasitology');
    sSet.add('Microbiology');
    sSet.add('Infectious Diseases');
    sSet.add('Gastroenterology');
  } else if (type === 'Cell' || type === 'Tissue') {
    sSet.add('Histology');
    sSet.add('Physiology');
    sSet.add('Pathology');
    sSet.add('Biochemistry');
  }

  // Keyword rules for maximum specificity and multi-specialty coverage (up to 10 subjects per word!)
  const containsAny = (keywords: string[]) => keywords.some(k => nameEn.includes(k) || nameAr.includes(k));

  if (containsAny(['heart', 'myocard', 'cardio', 'aorta', 'infarct', 'valve', 'coronary', 'pulse', 'artery', 'ventricle', 'atrium', 'blood pressure', 'ecg', 'defibrillator', 'willis', 'vascul', 'vein', 'شريان', 'وريد', 'قلب', 'ضغط الدم', 'صمام'])) {
    sSet.add('Cardiology');
    sSet.add('Vascular Surgery');
    sSet.add('Physiology');
    sSet.add('Anatomy');
    sSet.add('Internal Medicine');
    sSet.add('Emergency Medicine');
  }
  
  if (containsAny(['brain', 'nerve', 'neuro', 'cerebr', 'mening', 'spinal', 'willis', 'seizure', 'stroke', 'parkinson', 'alzheimer', 'epilepsy', 'myasthenia', 'encephalitis', 'عصب', 'دماغ', 'مخ', 'شلل', 'صرع', 'نخاع'])) {
    sSet.add('Neurology');
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('Internal Medicine');
    sSet.add('Psychiatry');
  }

  if (containsAny(['stomach', 'gastric', 'colon', 'intestie', 'intestin', 'liver', 'hepatic', 'biliary', 'gallbladder', 'pancreas', 'esophag', 'enter', 'append', 'diarrhea', 'peptic', 'crohn', 'celiac', 'goblet', 'bile', 'معدة', 'كبد', 'مرارة', 'قولون', 'أمعاء', 'هضم', 'بواسير'])) {
    sSet.add('Gastroenterology');
    sSet.add('General Surgery');
    sSet.add('Physiology');
    sSet.add('Anatomy');
    sSet.add('Internal Medicine');
  }

  if (containsAny(['lung', 'pulmon', 'respir', 'bronch', 'trachea', 'alveoli', 'asthma', 'pneumonia', 'copd', 'diaphragm', 'intubation', 'ventilator', 'رئة', 'تنفس', 'شعب هوائية', 'ربو', 'حجاب حاجز'])) {
    sSet.add('Pulmonology');
    sSet.add('Emergency Medicine');
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('Anaesthesia');
    sSet.add('Internal Medicine');
  }

  if (containsAny(['kidney', 'renal', 'nephr', 'urea', 'urinary', 'bladder', 'urine', 'prostate', 'glomerul', 'كلية', 'كلى', 'بول', 'مثانة', 'بروستاتا'])) {
    sSet.add('Urology');
    sSet.add('Internal Medicine');
    sSet.add('Physiology');
    sSet.add('Anatomy');
    sSet.add('Pathology');
  }

  if (containsAny(['thyroid', 'insulin', 'diabetes', 'hormone', 'endocrin', 'adrenal', 'pituitary', 'cushing', 'addison', 'graves', 'غدة', 'أنسولين', 'سكري', 'هرمون'])) {
    sSet.add('Endocrinology');
    sSet.add('Internal Medicine');
    sSet.add('Physiology');
    sSet.add('Biochemistry');
  }

  if (containsAny(['bone', 'joint', 'fracture', 'osteo', 'muscle', 'biceps', 'myo', 'skeletal', 'tend', 'cartilage', 'rheumat', 'arthr', 'عظم', 'مفصل', 'عضلة', 'كسر', 'روماتيزم'])) {
    sSet.add('Orthopedics');
    sSet.add('Rheumatology');
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('General Surgery');
  }

  if (containsAny(['dermat', 'skin', 'psoriasis', 'eczema', 'melanoma', 'acne', 'جلد', 'صدفية', 'إكزيما', 'بشرة'])) {
    sSet.add('Dermatology');
    sSet.add('Pathology');
    sSet.add('Histology');
  }

  if (containsAny(['cancer', 'oncol', 'tumor', 'malignant', 'chemo', 'lymphoma', 'leukemia', 'melanoma', 'سرطان', 'أورام', 'خبيث'])) {
    sSet.add('Oncology');
    sSet.add('Pathology');
    sSet.add('Hematology');
    sSet.add('Internal Medicine');
  }

  if (containsAny(['blood', 'hemo', 'anemia', 'leukemia', 'lymph', 'platelet', 'coagulat', 'erythro', 'thromb', 'دم', 'أنيميا', 'خلايا الدم'])) {
    sSet.add('Hematology');
    sSet.add('Physiology');
    sSet.add('Biochemistry');
    sSet.add('Internal Medicine');
  }

  if (containsAny(['antibiotic', 'vaccine', 'viral', 'bacteri', 'infect', 'sepsis', 'fever', 'flu', 'malaria', 'parasite', 'worm', 'ascaris', 'taenia', 'schisto', 'fasciola', 'cryptosporidium', 'strongyloid', 'trichin', 'عدوى', 'التهاب', 'ميكروب', 'بكتيريا', 'طفيلي', 'دودة'])) {
    sSet.add('Infectious Diseases');
    sSet.add('Microbiology');
    sSet.add('Parasitology');
    sSet.add('Internal Medicine');
    sSet.add('Pediatrics');
  }

  if (containsAny(['pregnan', 'uterus', 'ovary', 'gyneco', 'placenta', 'vagina', 'cervix', 'birth', 'رحم', 'مبيض', 'حمل', 'ولادة', 'نساء'])) {
    sSet.add('Obstetrics and Gynecology');
    sSet.add('Anatomy');
    sSet.add('Physiology');
    sSet.add('General Surgery');
  }

  if (containsAny(['pediatr', 'infant', 'child', 'down syndrome', 'neonatal', 'kawasaki', 'أطفال', 'طفل', 'رضيع'])) {
    sSet.add('Pediatrics');
    sSet.add('Genetics');
    sSet.add('Family Medicine');
  }

  if (containsAny(['eye', 'ocular', 'retina', 'vision', 'glaucoma', 'cataract', 'عين', 'بصر', 'شبكية', 'مياه زرقاء'])) {
    sSet.add('Ophthalmology');
    sSet.add('Anatomy');
    sSet.add('General Surgery');
  }

  // Also default to general categories if empty
  if (sSet.size === 0) {
    sSet.add('General Medicine');
  }

  // Set the final subjects list (converting to Array)
  w.subjects = Array.from(sSet);

  // Guessing difficulty mapping logic
  let gd: 1 | 2 | 3 = w.difficulty;
  if (w.level === 'Academic' && gd < 3) {
    gd = (gd + 1) as 1 | 2 | 3;
  }
  if ((type === 'Parasite' || type === 'Cell' || type === 'Tissue' || type === 'Component') && gd < 3) {
    gd = (gd + 1) as 1 | 2 | 3;
  }
  w.guessingDifficulty = gd;
});
