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
    word: { Arabic: "القلب", English: "Heart" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Cardiology","Vascular Surgery","Internal Medicine","Emergency Medicine"],
    synonyms: ["القلب","قلب","العضلة القلبية","Cardia","القالب","الأذين والبطين"],
    guessingDifficulty: 2
  },
  {
    id: 'w2',
    word: { Arabic: "الكبد", English: "Liver" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Gastroenterology","General Surgery","Internal Medicine"],
    synonyms: ["الكبد","كبد","كبدي","hepatic","كبدة","المرارة"],
    guessingDifficulty: 2
  },
  {
    id: 'w3',
    word: { Arabic: "العضلة ثنائية الرؤوس", English: "Biceps" },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["العضلة ثنائية الرؤوس","الباي","البايسبس","بايسيبس","العضلة ذات الرأسين","ثنائية الرؤوس العضدية"],
    guessingDifficulty: 2
  },
  {
    id: 'w4',
    word: { Arabic: "عصب الزند", English: "Ulnar Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["عصب الزند","العصب الزندي","عصب كوع","الزند","عرق الزند","Ulnar"],
    guessingDifficulty: 3
  },
  {
    id: 'w5',
    word: { Arabic: "السكري", English: "Diabetes" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Endocrinology","Physiology","Biochemistry"],
    synonyms: ["السكري","سكر","مرض السكر","السكري النوع الأول","السكري النوع الثاني","الأنسولين","ديابيتس"],
    guessingDifficulty: 1
  },
  {
    id: 'w6',
    word: { Arabic: "سماعة طبيبة", English: "Stethoscope" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["General Medicine","Emergency Medicine","Anaesthesia","Clinical Toxicology","Pharmacology"],
    synonyms: ["سماعة طبيبة","سماعة","سماعه","السماعة الطبية","سماعة الطبيب","سماعه طبيه"],
    guessingDifficulty: 1
  },
  {
    id: 'w7',
    word: { Arabic: "باراسيتامول", English: "Paracetamol" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["باراسيتامول","بندول","بانادول","أدول","بارامول","أستامينوفين","سيتال","Panadol","Tylenol","Acetaminophen"],
    guessingDifficulty: 1
  },
  {
    id: 'w8',
    word: { Arabic: "أوجمنتين", English: "Augmentin" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["أوجمنتين","اوجمنتين","أوجمانتين","اموكسيسيلين كلافولانيك","كلافوكس","Augmentine"],
    guessingDifficulty: 2
  },
  {
    id: 'w9',
    word: { Arabic: "متلازمة داون", English: "Down Syndrome" },
    level: 'Both',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pediatrics","Genetics","Internal Medicine","Neurology","Family Medicine"],
    synonyms: ["متلازمة داون","داون","منغولي","تثلث الصبغي 21","Trisomy 21","دوان"],
    guessingDifficulty: 2
  },
  {
    id: 'w10',
    word: { Arabic: "تليف الكبد", English: "Cirrhosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","General Surgery","Gastroenterology","Physiology","Anatomy"],
    synonyms: ["تليف الكبد","تليف","التليف الكبدي","تليف كبدي","فشل كبدي","الاستسقاء"],
    guessingDifficulty: 2
  },
  {
    id: 'w11',
    word: { Arabic: "الأنيوريزم", English: "Aneurysm" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["General Surgery","Cardiology"],
    synonyms: ["الأنيوريزم","أنيوريزم","تمدد الشرايين","أم الدم","تمدد لوكالي","Aneurism"],
    guessingDifficulty: 3
  },
  {
    id: 'w12',
    word: { Arabic: "الميتوكوندريا", English: "Mitochondria" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Biochemistry","Histology"],
    synonyms: ["الميتوكوندريا","ميتوكوندريا","بيوت الطاقة","الميتوكندريا","مصنع الطاقة"],
    guessingDifficulty: 3
  },
  {
    id: 'w13',
    word: { Arabic: "عضلة الحجاب الحاجز", English: "Diaphragm" },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Pulmonology","Emergency Medicine","Anaesthesia","Internal Medicine","Rheumatology"],
    synonyms: ["عضلة الحجاب الحاجز","حجاب حاجز","الحجاب الحاجز","حجاب الحاجز"],
    guessingDifficulty: 2
  },
  {
    id: 'w14',
    word: { Arabic: "العصب الحائر", English: "Vagus Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الحائر","الحائر","العصب العاشر","العصب المبهم","العصب المبهم العاشر","Vagus"],
    guessingDifficulty: 3
  },
  {
    id: 'w15',
    word: { Arabic: "الأنسولين", English: "Insulin" },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ["Biochemistry","Physiology","Internal Medicine","Endocrinology"],
    synonyms: ["الأنسولين","انسولين","الانسولين","حقنة انسولين"],
    guessingDifficulty: 2
  },
  {
    id: 'w16',
    word: { Arabic: "جهاز الضغط", English: "Sphygmomanometer" },
    level: 'Both',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["General Medicine","Emergency Medicine","Anaesthesia"],
    synonyms: ["جهاز الضغط","مقياس الضغط","جهاز ضغط الدم","زئبقي الضغط","كفة الضغط"],
    guessingDifficulty: 1
  },
  {
    id: 'w17',
    word: { Arabic: "ثلاثي الرؤوس العضدية", English: "Triceps brachii" },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery"],
    synonyms: ["ثلاثي الرؤوس العضدية","التراي","ترايسبس","ترايسيبس","العضلة ثلاثية الرؤوس","ثنائية العضدية"],
    guessingDifficulty: 2
  },
  {
    id: 'w18',
    word: { Arabic: "العصب الوركي", English: "Sciatic Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الوركي","عرق النسا","العصب النساوي","عرق نسا","الوركي","Sciatica"],
    guessingDifficulty: 3
  },
  {
    id: 'w19',
    word: { Arabic: "الفشل الكلوي", English: "Renal Failure" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Urology","Physiology","Anatomy","Pathology"],
    synonyms: ["الفشل الكلوي","فشل كلوي","قصور كلوي","فشل كلى","قصور كلى","renal insufficiency"],
    guessingDifficulty: 1
  },
  {
    id: 'w20',
    word: { Arabic: "متلازمة مارفان", English: "Marfan Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Internal Medicine","Pediatrics","Genetics","Neurology"],
    synonyms: ["متلازمة مارفان","مارفان","مروان","متلازمة مروان","Marfan"],
    guessingDifficulty: 2
  },
  {
    id: 'w21',
    word: { Arabic: "الأموكسيسيلين", English: "Amoxicillin" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["الأموكسيسيلين","اموكسيسيلين","أموكسيل","اموكسيل","أمكسيل"],
    guessingDifficulty: 1
  },
  {
    id: 'w22',
    word: { Arabic: "الصمام الميترالي", English: "Mitral Valve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Cardiology","Vascular Surgery","Internal Medicine","Emergency Medicine"],
    synonyms: ["الصمام الميترالي","ميترالي","صمام تاجي","الصمام التاجي","الميترالي","bicuspid valve"],
    guessingDifficulty: 3
  },
  {
    id: 'w23',
    word: { Arabic: "متلازمة توريت", English: "Tourette Syndrome" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Psychiatry","Neurology","Pediatrics","Genetics","Internal Medicine"],
    synonyms: ["متلازمة توريت","توريت","تورت","تشنجات تورت","متلازمة تورت"],
    guessingDifficulty: 3
  },
  {
    id: 'w24',
    word: { Arabic: "الوارفارين", English: "Warfarin" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["الوارفارين","وارفارين","كومادين","Coumadin","مذيب الجلطة"],
    guessingDifficulty: 2
  },
  {
    id: 'w25',
    word: { Arabic: "عضلة الفخذ", English: "Quadriceps" },
    level: 'Academic',
    difficulty: 1,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["عضلة الفخذ","الكوادرسبس","رباعية الرؤوس","عضلة الفخذ الأمامية","رباعية الفخذ"],
    guessingDifficulty: 2
  },
  {
    id: 'w26',
    word: { Arabic: "العصب البصري", English: "Optic Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry","Ophthalmology"],
    synonyms: ["العصب البصري","العصب الثاني","عصب بصري","عصب العين","Optic"],
    guessingDifficulty: 3
  },
  {
    id: 'w27',
    word: { Arabic: "جهاز غسيل الكلى", English: "Dialysis Machine" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Internal Medicine","Emergency Medicine","General Medicine","Anaesthesia","Urology","Physiology","Anatomy","Pathology"],
    synonyms: ["جهاز غسيل الكلى","غسيل كلى","جهاز الغسيل الكلوي","ديلزة الكلى","ماكينة الغسيل"],
    guessingDifficulty: 2
  },
  {
    id: 'w28',
    word: { Arabic: "عظمة الفخذ", English: "Femur" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Rheumatology","Physiology","General Surgery"],
    synonyms: ["عظمة الفخذ","فخذ","عظم الفخذ","الفيمر","علاية الورك"],
    guessingDifficulty: 3
  },
  {
    id: 'w29',
    word: { Arabic: "التهاب الرئة", English: "Pneumonia" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["التهاب الرئة","التهاب رئوي","ذات الرئة","پنومونيا","رئوي حاد","برودة الص الصدر"],
    guessingDifficulty: 1
  },
  {
    id: 'w30',
    word: { Arabic: "الليبيتر", English: "Lipitor" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["الليبيتر","ليبيتور","أتورفاستاتين","اتورفاستاتين","خافض الكولسترول","ستاتين","Atorvastatin"],
    guessingDifficulty: 2
  },
  {
    id: 'w31',
    word: { Arabic: "التهاب الزائدة الدودية", English: "Appendicitis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["General Surgery","Pediatrics","Gastroenterology","Physiology","Anatomy","Internal Medicine","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["التهاب الزائدة الدودية","الزائدة","زائدة","التهاب زائدة","مصران أعور","الزائدة الدودية","التهاب الزايده"],
    guessingDifficulty: 1
  },
  {
    id: 'w32',
    word: { Arabic: "الأسبرين", English: "Aspirin" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["الأسبرين","اسبرين","أسبيرين","ريفو","أسبرين أطفال","حمض الساليسيليك","Acetylsalicylic Acid"],
    guessingDifficulty: 1
  },
  {
    id: 'w33',
    word: { Arabic: "الدماغ", English: "Brain" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Neurology","Pathology","Internal Medicine","Psychiatry","Hematology","Biochemistry"],
    synonyms: ["الدماغ","مخ","المخ","دماغ","الجهاز العصبي المركزي"],
    guessingDifficulty: 2
  },
  {
    id: 'w34',
    word: { Arabic: "الكلية", English: "Kidney" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Urology","Internal Medicine"],
    synonyms: ["الكلية","كلية","كلى","القصور الكلوى","Nephros"],
    guessingDifficulty: 2
  },
  {
    id: 'w35',
    word: { Arabic: "الربو", English: "Asthma" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["الربو","حساسية صدر","ربو","أزمة تنفسية","حساسية الصدر","ضيق نفس"],
    guessingDifficulty: 1
  },
  {
    id: 'w36',
    word: { Arabic: "البنسلين", English: "Penicillin" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["البنسلين","بنسلين","بنسيلين","أوسبن","Penicilin"],
    guessingDifficulty: 1
  },
  {
    id: 'w37',
    word: { Arabic: "مرض باركنسون", English: "Parkinson Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine","Anatomy","Physiology","Psychiatry"],
    synonyms: ["مرض باركنسون","باركنسون","شلل رعاش","الشلل الرعاش","مرض الشلل الرعاش","باركنسنس"],
    guessingDifficulty: 2
  },
  {
    id: 'w38',
    word: { Arabic: "مرض ألزهايمر", English: "Alzheimer Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Psychiatry","Anatomy","Physiology","Internal Medicine"],
    synonyms: ["مرض ألزهايمر","خرف","الزهايمر","ألزهايمر","الخرف الشيخوخي","فقدان الذاكرة"],
    guessingDifficulty: 2
  },
  {
    id: 'w39',
    word: { Arabic: "سرطان الرئة", English: "Lung Cancer" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","General Surgery","Oncology","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Pathology","Hematology"],
    synonyms: ["سرطان الرئة","سرطان رئة","اورام الرئة","ورم رئوي خبيث"],
    guessingDifficulty: 1
  },
  {
    id: 'w40',
    word: { Arabic: "الرباط الصليبي خلفي او امامي", English: "Cruciate Ligament" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","General Surgery"],
    synonyms: ["الرباط الصليبي خلفي او امامي","صليبي","الرباط الصليبي","رباط الصليبي","قطع صليبي","ACL","PCL"],
    guessingDifficulty: 3
  },
  {
    id: 'w41',
    word: { Arabic: "الغدة الدرقية", English: "Thyroid Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Internal Medicine","Pathology","Endocrinology","Biochemistry"],
    synonyms: ["الغدة الدرقية","درقية","الغده الدرقيه","غدة الرقبة","الدرقية"],
    guessingDifficulty: 3
  },
  {
    id: 'w42',
    word: { Arabic: "التهاب المفاصل الروماتويدي", English: "Rheumatoid Arthritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب المفاصل الروماتويدي","روماتويد","الروماتويد","المفاصل الروماتيدي","التهاب روماتويدي","RA"],
    guessingDifficulty: 2
  },
  {
    id: 'w43',
    word: { Arabic: "مستقبلات بيتا", English: "Beta Blockers" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["مستقبلات بيتا","حاصرات بيتا","منظمات ضربات القلب","بيتا بلوكرز","كونكور","أنديرال"],
    guessingDifficulty: 2
  },
  {
    id: 'w44',
    word: { Arabic: "الأدرينالين", English: "Adrenaline" },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ["Physiology","Pharmacology","Urology","Internal Medicine","Anatomy","Pathology","Endocrinology","Biochemistry"],
    synonyms: ["الأدرينالين","ادرينالين","ادريانالين","هرمون الخوف","إبينفرين","Epinephrine"],
    guessingDifficulty: 2
  },
  {
    id: 'w45',
    word: { Arabic: "المعدة", English: "Stomach" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Gastroenterology","General Surgery","Internal Medicine"],
    synonyms: ["المعدة","معدة","المعده","جدار المعدة","الهضمية"],
    guessingDifficulty: 2
  },
  {
    id: 'w46',
    word: { Arabic: "العصب السابع", English: "Facial Nerve" },
    level: 'Both',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Neurology","Physiology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب السابع","عصب سابع","العصب الوجهي","شلل بيل","اللقوة","Bell Palsy"],
    guessingDifficulty: 2
  },
  {
    id: 'w47',
    word: { Arabic: "التهاب السحايا", English: "Meningitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Neurology","Anatomy","Physiology","Psychiatry","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["التهاب السحايا","سحايا","التهاب سحائي","الحمى الشوكية","حمى شوكية","مننجايتس"],
    guessingDifficulty: 2
  },
  {
    id: 'w48',
    word: { Arabic: "اليرقان", English: "Jaundice" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics"],
    synonyms: ["اليرقان","الصفار","صفار الكبد","أبو صفار","سفيرة","اليرقان المواليد"],
    guessingDifficulty: 2
  },
  {
    id: 'w49',
    word: { Arabic: "الإنفلونزا", English: "Influenza" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["الإنفلونزا","انفلونزا","برد","نزلة برد","الرشح","جرام سلبي"],
    guessingDifficulty: 1
  },
  {
    id: 'w50',
    word: { Arabic: "القولون العصبي", English: "Irritable Bowel Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Neurology","Anatomy","Physiology","Psychiatry","Gastroenterology","General Surgery"],
    synonyms: ["القولون العصبي","قولون عصبي","تهيج القولون","تشنج القولون","IBS"],
    guessingDifficulty: 2
  },
  {
    id: 'w51',
    word: { Arabic: "ارتفاع ضغط الدم", English: "Hypertension" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Cardiology","Vascular Surgery","Physiology","Anatomy","Emergency Medicine","Hematology","Biochemistry"],
    synonyms: ["ارتفاع ضغط الدم","الضغط المرتفع","ضغط الدم المرتفع","مرض الضغط","القاتل الصامت","ضغط"],
    guessingDifficulty: 1
  },
  {
    id: 'w52',
    word: { Arabic: "فقر الدم", English: "Anemia" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Hematology","Physiology","Biochemistry"],
    synonyms: ["فقر الدم","انيميا","الأنيميا","نقص الحديد","تكسر الدم"],
    guessingDifficulty: 1
  },
  {
    id: 'w53',
    word: { Arabic: "المضادات الحيوية", English: "Antibiotics" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["المضادات الحيوية","مضاد حيوي","مضادات حيوية","المضاد","مضاد بكتيري"],
    guessingDifficulty: 1
  },
  {
    id: 'w54',
    word: { Arabic: "الغدة الكظرية", English: "Adrenal Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Urology","Internal Medicine","Endocrinology","Biochemistry"],
    synonyms: ["الغدة الكظرية","كظرية","فوق الكلوية","الغدة فوق الكلوية","الغده الكظريه"],
    guessingDifficulty: 3
  },
  {
    id: 'w55',
    word: { Arabic: "التهاب المعدة", English: "Gastritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب المعدة","التهاب معدة","حموضة","قرحة خفيفة","حرقة المعدة"],
    guessingDifficulty: 2
  },
  {
    id: 'w56',
    word: { Arabic: "تلسكوب داخلي", English: "Endoscope" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["General Surgery","Internal Medicine","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["تلسكوب داخلي","منظار","المنظار","منظار معدة","منظار قولون","تنظير داخلي","أندوسكوب"],
    guessingDifficulty: 2
  },
  {
    id: 'w57',
    word: { Arabic: "الحصبة", English: "Measles" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics"],
    synonyms: ["الحصبة","حصبة","الحصبه","طيش جلدي وبثور"],
    guessingDifficulty: 2
  },
  {
    id: 'w58',
    word: { Arabic: "الحجامة", English: "Cupping Therapy" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["General Medicine"],
    synonyms: ["الحجامة","حجامة","حجامه","العلاج بالكؤوس","التشريط اليدوي"],
    guessingDifficulty: 2
  },
  {
    id: 'w59',
    word: { Arabic: "التهاب الكبد الوبائي", English: "Hepatitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الكبد الوبائي","التهاب الكبد الوبائي سي","التهاب الكبد الوبائي بي","فيروس الكبد","هيباتايتس"],
    guessingDifficulty: 2
  },
  {
    id: 'w60',
    word: { Arabic: "الشلل الرعاش", English: "Parkinsonism" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["الشلل الرعاش","شلل رعاش","رعشة الأطراف","الرعاش"],
    guessingDifficulty: 2
  },
  {
    id: 'w61',
    word: { Arabic: "السل", English: "Tuberculosis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine"],
    synonyms: ["السل","الدرن","درن رئوي","درن","سل","تي بي","TB"],
    guessingDifficulty: 1
  },
  {
    id: 'w62',
    word: { Arabic: "سرطان الثدي", English: "Breast Cancer" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["General Surgery","Oncology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["سرطان الثدي","سرطان ثدي","أورام الثدي","الماموغرام"],
    guessingDifficulty: 1
  },
  {
    id: 'w63',
    word: { Arabic: "الهيموغلوبين", English: "Hemoglobin" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Physiology","Hematology","Internal Medicine"],
    synonyms: ["الهيموغلوبين","هيموجلوبين","هموجلوبين","تحليل الدم","خضاب الدم","Hb"],
    guessingDifficulty: 3
  },
  {
    id: 'w64',
    word: { Arabic: "فصيلة الدم O", English: "Blood Type O" },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ["Physiology","Hematology","Biochemistry","Internal Medicine"],
    synonyms: ["فصيلة الدم O","فصيلة O","او سالب","مستقبل عام","مانح عام","فصيلة دم o"],
    guessingDifficulty: 2
  },
  {
    id: 'w65',
    word: { Arabic: "الكوليسترول", English: "Cholesterol" },
    level: 'Both',
    difficulty: 1,
    type: 'Component',
    subjects: ["Biochemistry","Cardiology"],
    synonyms: ["الكوليسترول","كوليسترول","كولسترول","الدهون النافعة والضارة","الدهون الثلاثية"],
    guessingDifficulty: 2
  },
  {
    id: 'w66',
    word: { Arabic: "تصلب الشرايين", English: "Atherosclerosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine"],
    synonyms: ["تصلب الشرايين","تصلب شرايين","ضيق الشرايين","جلطات قلبية وتكلس"],
    guessingDifficulty: 2
  },
  {
    id: 'w67',
    word: { Arabic: "الشريان التاجي", English: "Coronary Artery" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Cardiology","Physiology","Pathology","Vascular Surgery","Internal Medicine","Emergency Medicine"],
    synonyms: ["الشريان التاجي","الشريان المغذي للقلب","التاجية","شرايين تاجية","تاج الكبد"],
    guessingDifficulty: 3
  },
  {
    id: 'w68',
    word: { Arabic: "جهاز الصدمات الكهربائية", English: "Defibrillator" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Emergency Medicine","Cardiology","General Medicine","Anaesthesia","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Hematology","Biochemistry"],
    synonyms: ["جهاز الصدمات الكهربائية","جهاز صدمات","الدي فايب","جهاز الصدم الكهربائي","صادم القلب","AED","Defib"],
    guessingDifficulty: 2
  },
  {
    id: 'w69',
    word: { Arabic: "رسم القلب", English: "Electrocardiogram" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["Cardiology","Internal Medicine","Emergency Medicine","General Medicine","Anaesthesia","Vascular Surgery","Physiology","Anatomy","Clinical Toxicology","Pharmacology"],
    synonyms: ["رسم القلب","تخطيط القلب","تخطيط قلب","رسم قلب","ECG","EKG"],
    guessingDifficulty: 1
  },
  {
    id: 'w70',
    word: { Arabic: "التصوير بالرنين المغناطيسي", English: "MRI" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["Radiology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["التصوير بالرنين المغناطيسي","رنين مغناطيسي","اشعة رنين","رنين","ام ار اي"],
    guessingDifficulty: 1
  },
  {
    id: 'w71',
    word: { Arabic: "النبض", English: "Pulse" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Physiology","Cardiology","Vascular Surgery","Anatomy","Internal Medicine","Emergency Medicine"],
    synonyms: ["النبض","نبض","نبضات القلب","معدل النبض","Heart Rate"],
    guessingDifficulty: 1
  },
  {
    id: 'w72',
    word: { Arabic: "البلازما", English: "Blood Plasma" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Physiology","Hematology","Biochemistry","Internal Medicine"],
    synonyms: ["البلازما","بلازما","مصورة الدم","بلازما غنية بالصفائح"],
    guessingDifficulty: 3
  },
  {
    id: 'w73',
    word: { Arabic: "النخاع الشوكي", English: "Spinal Cord" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Neurology","Physiology","Pathology","Internal Medicine","Psychiatry"],
    synonyms: ["النخاع الشوكي","حبل شوكي","النخاع الشوكي","النخاع المقذوف"],
    guessingDifficulty: 2
  },
  {
    id: 'w74',
    word: { Arabic: "عظم الترقوة", English: "Clavicle" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Rheumatology","Physiology","General Surgery"],
    synonyms: ["عظم الترقوة","الترقوة","ترقوة","عظمة الترقوة"],
    guessingDifficulty: 3
  },
  {
    id: 'w75',
    word: { Arabic: "الصفائح الدموية", English: "Platelets" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Physiology","Hematology","Biochemistry","Internal Medicine"],
    synonyms: ["الصفائح الدموية","صفائح دموية","صفائح الدم","المخثرات","Thrombocytes"],
    guessingDifficulty: 3
  },
  {
    id: 'w76',
    word: { Arabic: "الخلايا الليمفاوية", English: "Lymphocytes" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Physiology","Hematology","Biochemistry","Internal Medicine"],
    synonyms: ["الخلايا الليمفاوية","خلايا ليمفاوية","ليمفوسايت","الخلايا المناعية ليمفو","ليمفاويات"],
    guessingDifficulty: 3
  },
  {
    id: 'w77',
    word: { Arabic: "الغدة النخامية", English: "Pituitary Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Endocrinology","Pathology","Internal Medicine","Biochemistry"],
    synonyms: ["الغدة النخامية","النخامية","الغده النخاميه","سيدة الغدد","غدة المخ"],
    guessingDifficulty: 3
  },
  {
    id: 'w78',
    word: { Arabic: "الألبcontrolتول", English: "Albuterol" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["الألبcontrolتول","فنتولين","سالبوتامول","بخاخ الربو الأزرق","Ventolin","Salbutamol"],
    guessingDifficulty: 2
  },
  {
    id: 'w79',
    word: { Arabic: "الكورتيزول", English: "Cortisol" },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ["Physiology","Biochemistry"],
    synonyms: ["الكورتيزول","كورتيزول","هرمون الإجهاد","هرمون الكورتيزول"],
    guessingDifficulty: 3
  },
  {
    id: 'w80',
    word: { Arabic: "الثرومبين", English: "Thrombin" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Biochemistry","Hematology","Physiology","Internal Medicine"],
    synonyms: ["الثرومبين","ثرومبين","إنزيم التخثر","عامل تخثر نشط"],
    guessingDifficulty: 3
  },
  {
    id: 'w81',
    word: { Arabic: "المورفين", English: "Morphine" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["المورفين","مورفين","مخدر مورفين","مورفيا","قاتل الألم القوي"],
    guessingDifficulty: 2
  },
  {
    id: 'w82',
    word: { Arabic: "الهيبارين", English: "Heparin" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Hematology","Internal Medicine"],
    synonyms: ["الهيبارين","هيبارين","مسيل الدم السريع","مضاد تخثر في الوريد"],
    guessingDifficulty: 2
  },
  {
    id: 'w83',
    word: { Arabic: "التهاب السحايا الجرثومي", English: "Bacterial Meningitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["التهاب السحايا الجرثومي","سحايا بكتيري","التهاب سحايا بكتيري","حمى شوكية بكتيرية"],
    guessingDifficulty: 2
  },
  {
    id: 'w84',
    word: { Arabic: "الصداع النصفي", English: "Migraine" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine"],
    synonyms: ["الصداع النصفي","الشقيقة","شقيقة","صداع نصفي","الميجرين","ميجرين"],
    guessingDifficulty: 1
  },
  {
    id: 'w85',
    word: { Arabic: "الصرع", English: "Epilepsy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["الصرع","صرع","تشنجات دماغية","كهرباء زائدة بالمخ","التشنجات الصرعية"],
    guessingDifficulty: 2
  },
  {
    id: 'w86',
    word: { Arabic: "الفصام", English: "Schizophrenia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry","Internal Medicine"],
    synonyms: ["الفصام","شيزوفرينيا","فصام","انفصام الشخصية","انفصام","الفصام العقلي"],
    guessingDifficulty: 2
  },
  {
    id: 'w87',
    word: { Arabic: "الاكتئاب", English: "Depression" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Psychiatry","Internal Medicine"],
    synonyms: ["الاكتئاب","اكتئاب","اضطراب اكتئابي","الحزن المرضي"],
    guessingDifficulty: 1
  },
  {
    id: 'w88',
    word: { Arabic: "التهاب الأذن الوسطى", English: "Otitis Media" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Family Medicine","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["التهاب الأذن الوسطى","التهاب اذن وسطى","اذن وسطى","الم الأذن للأطفال","التهاب أذن"],
    guessingDifficulty: 2
  },
  {
    id: 'w89',
    word: { Arabic: "الرئة", English: "Lung" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Pulmonology","Emergency Medicine","Anaesthesia","Internal Medicine"],
    synonyms: ["الرئة","رئة","الرئتين","الجهاز التنفسي"],
    guessingDifficulty: 2
  },
  {
    id: 'w90',
    word: { Arabic: "البنكرياس", English: "Pancreas" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Pathology","Gastroenterology","General Surgery","Internal Medicine"],
    synonyms: ["البنكرياس","بنكرياس","البنكرياس الغدة","جزر لانجرهانز"],
    guessingDifficulty: 2
  },
  {
    id: 'w91',
    word: { Arabic: "الطحال", English: "Spleen" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Hematology","Pathology"],
    synonyms: ["الطحال","طحال","مقبرة خلايا الدم الحمراء","عضو الطحال"],
    guessingDifficulty: 2
  },
  {
    id: 'w92',
    word: { Arabic: "استئصال الغدة الدرقية", English: "Thyroidectomy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["General Surgery","Endocrinology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["استئصال الغدة الدرقية","شيل الدرقية","عملية جراحة الدرق","استئصال الدرقية"],
    guessingDifficulty: 2
  },
  {
    id: 'w93',
    word: { Arabic: "عضلة القلب", English: "Myocardium" },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Cardiology","Vascular Surgery","Internal Medicine","Emergency Medicine","Rheumatology"],
    synonyms: ["عضلة القلب","عضلة قلبية","القلبية المصمتة","العضلة القلبية المتخصصة"],
    guessingDifficulty: 3
  },
  {
    id: 'w94',
    word: { Arabic: "التهاب البلعوم والحلق", English: "Pharyngitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Family Medicine","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["التهاب البلعوم والحلق","احتقان الحلق","التهاب حلق","لوزتين","التهاب اللوز"],
    guessingDifficulty: 2
  },
  {
    id: 'w95',
    word: { Arabic: "تصلب متعدد", English: "Multiple Sclerosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology"],
    synonyms: ["تصلب متعدد","تصلب لويحي","التصلب المتعدد","ام اس","MS"],
    guessingDifficulty: 2
  },
  {
    id: 'w96',
    word: { Arabic: "الوهن العضلي الوبيل", English: "Myasthenia Gravis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine","Anatomy","Physiology","Psychiatry"],
    synonyms: ["الوهن العضلي الوبيل","وهن عضلي","الوهن العضلي","مياستينا"],
    guessingDifficulty: 3
  },
  {
    id: 'w97',
    word: { Arabic: "متلازمة غيلان باريه", English: "Guillain-Barre" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Neurology","Internal Medicine","Pediatrics","Genetics"],
    synonyms: ["متلازمة غيلان باريه","غيلان باريه","جيلان باريه","شلل صاعد سريع"],
    guessingDifficulty: 3
  },
  {
    id: 'w98',
    word: { Arabic: "الكرون", English: "Crohn Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","General Surgery","Gastroenterology","Physiology","Anatomy"],
    synonyms: ["الكرون","كرونز","مرض كرون","التهاب الأمعاء التقرحي كرون"],
    guessingDifficulty: 2
  },
  {
    id: 'w99',
    word: { Arabic: "القرحة الهضمية", English: "Peptic Ulcer" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy"],
    synonyms: ["القرحة الهضمية","قرحة معدة","قرحة اثني عشر","قرحة هضمية","القرحه الهضميه"],
    guessingDifficulty: 2
  },
  {
    id: 'w100',
    word: { Arabic: "التهاب البنكرياس", English: "Pancreatitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","General Surgery","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب البنكرياس","التهاب بنكرياس","تكلس بنكرياسي حاد","البنكرياس الحاد"],
    guessingDifficulty: 2
  },
  {
    id: 'w101',
    word: { Arabic: "حصوات الكلى", English: "Kidney Stones" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["General Surgery","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["حصوات الكلى","حصوة كلى","مغص كلوي","حصاة الكلية","حصى الكلية"],
    guessingDifficulty: 1
  },
  {
    id: 'w102',
    word: { Arabic: "تضخم البروستاتا", English: "Prostate Hyperplasia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["تضخم البروستاتا","البروستات","تضخم البروستات الحميد","BPH","بروستاتا"],
    guessingDifficulty: 2
  },
  {
    id: 'w103',
    word: { Arabic: "التهاب المسالك البولية", English: "Urinary Tract Infection" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Pediatrics","Urology","Physiology","Anatomy","Pathology","Infectious Diseases","Microbiology","Parasitology","Radiology"],
    synonyms: ["التهاب المسالك البولية","التهاب بول","مسالك بولية","UTI","التهاب المثانة"],
    guessingDifficulty: 1
  },
  {
    id: 'w104',
    word: { Arabic: "الحمل خارج الرحم", English: "Ectopic Pregnancy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","General Surgery","Anatomy","Physiology"],
    synonyms: ["الحمل خارج الرحم","حمل مهاجر","حمل خارجي","اكطوبيك","Ectopic"],
    guessingDifficulty: 2
  },
  {
    id: 'w105',
    word: { Arabic: "تسمم الحمل", English: "Preeclampsia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Anatomy","Physiology","General Surgery","Clinical Toxicology","Emergency Medicine","Pharmacology"],
    synonyms: ["تسمم الحمل","ضغط حملي زلالي","اكلامبسيا","تالق الحمل","Pre-eclampsia"],
    guessingDifficulty: 2
  },
  {
    id: 'w106',
    word: { Arabic: "التهاب كبيبات الكلى", English: "Glomerulonephritis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Internal Medicine","Urology","Physiology","Anatomy","Pathology","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب كبيبات الكلى","التهاب الفراش الكببي","كبيبي كلوي","التهاب كبيبي"],
    guessingDifficulty: 3
  },
  {
    id: 'w107',
    word: { Arabic: "حمى الضنك", English: "Dengue Fever" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["حمى الضنك","ضنك","حمى تكسير العظام","ابو الركب","Dengue"],
    guessingDifficulty: 2
  },
  {
    id: 'w108',
    word: { Arabic: "الملاريا", English: "Malaria" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["الملاريا","ملاريا","انوفيليس الطفيل","حمى البرداء"],
    guessingDifficulty: 1
  },
  {
    id: 'w109',
    word: { Arabic: "أم الدم الأبهرية", English: "Aortic Aneurysm" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["General Surgery","Cardiology","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["أم الدم الأبهرية","ابدومينال اورتك","تمدد الاورطى","تمدد الابهري"],
    guessingDifficulty: 3
  },
  {
    id: 'w110',
    word: { Arabic: "السعال الديكي", English: "Whooping Cough" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics"],
    synonyms: ["السعال الديكي","كحة ديكية","سعال ديكي","سعال منبح","Pertussis"],
    guessingDifficulty: 2
  },
  {
    id: 'w111',
    word: { Arabic: "متلازمة كوشينغ", English: "Cushing Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Internal Medicine","Endocrinology","Pediatrics","Genetics","Neurology","Physiology","Biochemistry"],
    synonyms: ["متلازمة كوشينغ","كوشينغ","كوشينج","فرط الكورتيزول","Cushing"],
    guessingDifficulty: 2
  },
  {
    id: 'w112',
    word: { Arabic: "مرض أديسون", English: "Addison Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Endocrinology","Physiology","Biochemistry"],
    synonyms: ["مرض أديسون","اديسون","قصور الكظرية","أديسون الخرط"],
    guessingDifficulty: 2
  },
  {
    id: 'w113',
    word: { Arabic: "داء غريفز", English: "Graves Disease" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Internal Medicine","Endocrinology","Physiology","Biochemistry"],
    synonyms: ["داء غريفز","غريفز","جريفيز","نشاط الدرقية المناعي","جحوظ العينين"],
    guessingDifficulty: 3
  },
  {
    id: 'w114',
    word: { Arabic: "التهاب هاشيموتو غدة", English: "Hashimoto Thyroiditis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Internal Medicine","Endocrinology","Physiology","Biochemistry","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب هاشيموتو غدة","هاشيموتو","هشموتو","خمول الدرقية المناعي"],
    guessingDifficulty: 3
  },
  {
    id: 'w115',
    word: { Arabic: "النقرس", English: "Gout" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Rheumatology"],
    synonyms: ["النقرس","داء الملوك","نقرس","اليوريك اسيد","حمض البوليك"],
    guessingDifficulty: 1
  },
  {
    id: 'w116',
    word: { Arabic: "هشاشة العظام", English: "Osteoporosis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Internal Medicine","Rheumatology","Orthopedics","Anatomy","Physiology","General Surgery"],
    synonyms: ["هشاشة العظام","هشاشة عظام","ضعف العظم الكلسي","نقص الكثافة العظمية"],
    guessingDifficulty: 1
  },
  {
    id: 'w117',
    word: { Arabic: "الصدفية", English: "Psoriasis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Pathology","Histology"],
    synonyms: ["الصدفية","صدفية","صدفيه","لوحات فضية بالجلد"],
    guessingDifficulty: 1
  },
  {
    id: 'w118',
    word: { Arabic: "الأكزيما", English: "Eczema" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Pathology","Histology"],
    synonyms: ["الأكزيما","اكزيما","أكزيما التهاب وتأتب","الحكة الجلدية"],
    guessingDifficulty: 1
  },
  {
    id: 'w119',
    word: { Arabic: "المياه الزرقاء بالعين", English: "Glaucoma" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Ophthalmology","Anatomy","General Surgery"],
    synonyms: ["المياه الزرقاء بالعين","جلوكوما","الجلوكوما","الماء الازرق","ضغط العين"],
    guessingDifficulty: 1
  },
  {
    id: 'w120',
    word: { Arabic: "إعتام عدسة العين", English: "Cataract" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Ophthalmology","Anatomy","General Surgery"],
    synonyms: ["إعتام عدسة العين","الماء الابيض","مياه بيضاء","ساد","كتاركت"],
    guessingDifficulty: 1
  },
  {
    id: 'w121',
    word: { Arabic: "عظم العضد", English: "Humerus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Rheumatology","Physiology","General Surgery"],
    synonyms: ["عظم العضد","العضد","عضد","عظمة العضد"],
    guessingDifficulty: 3
  },
  {
    id: 'w122',
    word: { Arabic: "العضلات الوربية", English: "Intercostal Muscles" },
    level: 'Academic',
    difficulty: 3,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["العضلات الوربية","عضلات الضلوع","بين الضلوع","العضلات التابعة للتنفس"],
    guessingDifficulty: 3
  },
  {
    id: 'w123',
    word: { Arabic: "العظم القذالي", English: "Occipital Bone" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Rheumatology","Physiology","General Surgery"],
    synonyms: ["العظم القذالي","القذال","مؤخرة الرأس عظم","الجمجمة من الخلف"],
    guessingDifficulty: 3
  },
  {
    id: 'w124',
    word: { Arabic: "الشريان السباتي", English: "Carotid Artery" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Neurology","Physiology","Pathology","Cardiology","Vascular Surgery","Internal Medicine","Emergency Medicine"],
    synonyms: ["الشريان السباتي","السباتي","شريان الرقبة الكاروتيد","كاروتيد"],
    guessingDifficulty: 3
  },
  {
    id: 'w125',
    word: { Arabic: "العصب ثلاثي التوائم", English: "Trigeminal Nerve" },
    level: 'Academic',
    difficulty: 3,
    type: 'Nerve',
    subjects: ["Anatomy","Neurology","Physiology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب ثلاثي التوائم","العصب الخامس","ثلاثي التوائم","عصب الاسنان والوجه الرئيسي"],
    guessingDifficulty: 3
  },
  {
    id: 'w126',
    word: { Arabic: "المستقيم", English: "Rectum" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","General Surgery","Physiology","Pathology"],
    synonyms: ["المستقيم","مستقيم","نهاية القولون"],
    guessingDifficulty: 3
  },
  {
    id: 'w127',
    word: { Arabic: "جهاز النيبولايزر", English: "Nebulizer" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Pediatrics","Internal Medicine","Emergency Medicine","General Medicine","Anaesthesia","Urology","Physiology","Anatomy","Pathology"],
    synonyms: ["جهاز النيبولايزر","جلسات بخار","جهاز البخار الصدري","نيبولايزر","تبخيرة"],
    guessingDifficulty: 2
  },
  {
    id: 'w128',
    word: { Arabic: "حقنة الإبينفرين", English: "EpiPen" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["حقنة الإبينفرين","ابي بن","قلم الادرينالين","قلم الحساسية القاتلة"],
    guessingDifficulty: 2
  },
  {
    id: 'w129',
    word: { Arabic: "الديازيبام", English: "Diazepam" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Psychiatry","Internal Medicine"],
    synonyms: ["الديازيبام","فاليوم","مهدئ ديازبام","مضاد التشنجات والصرع الصغير","Valium"],
    guessingDifficulty: 2
  },
  {
    id: 'w130',
    word: { Arabic: "الأوميبرازول", English: "Omeprazole" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Internal Medicine"],
    synonyms: ["الأوميبرازول","لوسك","جاستروزول","مضاد الحموضة بروتون ميبرازول","Losec","Omepra"],
    guessingDifficulty: 2
  },
  {
    id: 'w131',
    word: { Arabic: "الرجفان الأذيني", English: "Atrial Fibrillation" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine"],
    synonyms: ["الرجفان الأذيني","رجفان اذيني","اي فيب","AFib","AF"],
    guessingDifficulty: 2
  },
  {
    id: 'w132',
    word: { Arabic: "تضيق الأبهر", English: "Aortic Stenosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","General Surgery"],
    synonyms: ["تضيق الأبهر","تضيق الصمام الأورطي","تضيق ابهري","AS"],
    guessingDifficulty: 2
  },
  {
    id: 'w133',
    word: { Arabic: "التهاب شغاف القلب", English: "Endocarditis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب شغاف القلب","شغاف","التهاب الشغاف البكتيري"],
    guessingDifficulty: 2
  },
  {
    id: 'w134',
    word: { Arabic: "التهاب عضلة القلب", English: "Myocarditis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine","Orthopedics","Rheumatology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب عضلة القلب","التهاب العضلة القلبية"],
    guessingDifficulty: 2
  },
  {
    id: 'w135',
    word: { Arabic: "التهاب غشاء القلب", English: "Pericarditis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب غشاء القلب","التهاب التأمور","غشاء التأمور"],
    guessingDifficulty: 2
  },
  {
    id: 'w136',
    word: { Arabic: "ارتجاع الصمام الميترالي", English: "Mitral Regurgitation" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine"],
    synonyms: ["ارتجاع الصمام الميترالي","ارتجاع تاجي","ارتجاع الميترالي","MR"],
    guessingDifficulty: 2
  },
  {
    id: 'w137',
    word: { Arabic: "قصور القلب", English: "Heart Failure" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine","Vascular Surgery","Physiology","Anatomy","Emergency Medicine"],
    synonyms: ["قصور القلب","فشل القلب","ضعف عضلة القلب","HF"],
    guessingDifficulty: 2
  },
  {
    id: 'w138',
    word: { Arabic: "الذبحة الصدرية", English: "Angina Pectoris" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine"],
    synonyms: ["الذبحة الصدرية","ذبحة صدرية","ذبحه","جلطة مؤقتة"],
    guessingDifficulty: 2
  },
  {
    id: 'w139',
    word: { Arabic: "ورم القواتم", English: "Pheochromocytoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Endocrinology","Oncology"],
    synonyms: ["ورم القواتم","ورم الكظر النشط","فيوكروموسايتوما"],
    guessingDifficulty: 3
  },
  {
    id: 'w140',
    word: { Arabic: "ضخامة الأطراف", English: "Acromegaly" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Endocrinology"],
    synonyms: ["ضخامة الأطراف","عملقة الغدة النخامية","زيادة هرمون النمو"],
    guessingDifficulty: 3
  },
  {
    id: 'w141',
    word: { Arabic: "البوال التفه", English: "Diabetes Insipidus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["البوال التفه","السكري الكاذب","سكر كاذب","DI"],
    guessingDifficulty: 2
  },
  {
    id: 'w142',
    word: { Arabic: "نشاط جارات الدرقية", English: "Hyperparathyroidism" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["نشاط جارات الدرقية","فرط نشاط غدة جارة الدرقية","نشاط جارة الدرقية"],
    guessingDifficulty: 2
  },
  {
    id: 'w143',
    word: { Arabic: "التهاب المرارة", English: "Cholecystitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Internal Medicine","Gastroenterology","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب المرارة","مرارة","التهاب مرارة حاد"],
    guessingDifficulty: 2
  },
  {
    id: 'w144',
    word: { Arabic: "مرض سيلياك", English: "Celiac Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy"],
    synonyms: ["مرض سيلياك","حساسية القمح","حساسية الجلوتين","سيلياك"],
    guessingDifficulty: 2
  },
  {
    id: 'w145',
    word: { Arabic: "التهاب القولون التقرحي", English: "Ulcerative Colitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","General Surgery","Gastroenterology","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب القولون التقرحي","قولون تقرحي","القولون التقرحي","UC"],
    guessingDifficulty: 2
  },
  {
    id: 'w146',
    word: { Arabic: "ارتجاع المريء", English: "Gastroesophageal Reflux" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["ارتجاع المريء","ارتجاع المريء","حرقان الصدر للمعدة","GERD","ارتجاع"],
    guessingDifficulty: 2
  },
  {
    id: 'w147',
    word: { Arabic: "البواسير", English: "Hemorrhoids" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Hematology","Physiology","Biochemistry","Internal Medicine","Gastroenterology","Anatomy"],
    synonyms: ["البواسير","بواسير","شرخ شرجي وبواسير"],
    guessingDifficulty: 2
  },
  {
    id: 'w148',
    word: { Arabic: "الفتق", English: "Hernia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Anatomy","Emergency Medicine"],
    synonyms: ["الفتق","فتق","فتق إرببي","فتق في البطن","فتق سري"],
    guessingDifficulty: 2
  },
  {
    id: 'w149',
    word: { Arabic: "استرواح الصدر", English: "Pneumothorax" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Emergency Medicine","General Surgery"],
    synonyms: ["استرواح الصدر","هواء على الرئة","انكماش الرئة الميكانيكي","هواء بالصدر"],
    guessingDifficulty: 2
  },
  {
    id: 'w150',
    word: { Arabic: "الجلطة الرئوية", English: "Pulmonary Embolism" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["الجلطة الرئوية","جلطة الرئة","انصمام رئوي","PE"],
    guessingDifficulty: 2
  },
  {
    id: 'w151',
    word: { Arabic: "السدة الرئوية المزمنة", English: "COPD" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Internal Medicine","Emergency Medicine","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["السدة الرئوية المزمنة","سدة رئوية","الانسداد الرئوي المزمن","COPD"],
    guessingDifficulty: 2
  },
  {
    id: 'w152',
    word: { Arabic: "توسع القصبات", English: "Bronchiectasis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["توسع القصبات","توسع الشعب الهوائية","توسع قصبي مزمن"],
    guessingDifficulty: 2
  },
  {
    id: 'w153',
    word: { Arabic: "تليف الرئة بالأسبيستوس", English: "Asbestosis" },
    level: 'Academic',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["تليف الرئة بالأسبيستوس","مرض الاسبستوس","غبار الاسبستوس"],
    guessingDifficulty: 3
  },
  {
    id: 'w154',
    word: { Arabic: "التصلب الضموري الجانبي", English: "Amyotrophic Lateral Sclerosis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Neurology","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery"],
    synonyms: ["التصلب الضموري الجانبي","ضمور العضلات الشوكي","ALS"],
    guessingDifficulty: 3
  },
  {
    id: 'w155',
    word: { Arabic: "داء هانتينغتون", English: "Huntington Disease" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Neurology","Genetics"],
    synonyms: ["داء هانتينغتون","هانتنجتون","رقاص هانتينغتون"],
    guessingDifficulty: 3
  },
  {
    id: 'w156',
    word: { Arabic: "الاضطراب ثنائي القطب", English: "Bipolar Disorder" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry","Internal Medicine"],
    synonyms: ["الاضطراب ثنائي القطب","ثنائي القطب","الهوس الاكتئابي","امراض وجدانية"],
    guessingDifficulty: 2
  },
  {
    id: 'w157',
    word: { Arabic: "طيف التوحد", English: "Autism" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pediatrics","Psychiatry","Genetics","Internal Medicine","Neurology"],
    synonyms: ["طيف التوحد","توحد","التوحد","ASD"],
    guessingDifficulty: 2
  },
  {
    id: 'w158',
    word: { Arabic: "الهيموفيليا", English: "Hemophilia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Pediatrics","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["الهيموفيليا","نزاف الدم وراثي","سيولة الدم الوراثية","هيموفيليا"],
    guessingDifficulty: 2
  },
  {
    id: 'w159',
    word: { Arabic: "الثلاسيميا", English: "Thalassemia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Pediatrics"],
    synonyms: ["الثلاسيميا","أنيميا البحر المتوسط","ثلاسيميا"],
    guessingDifficulty: 2
  },
  {
    id: 'w160',
    word: { Arabic: "الأنيميا المنجلية", English: "Sickle Cell Anemia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Pediatrics","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["الأنيميا المنجلية","منجلية","فقر الدم المنجلي","SCA"],
    guessingDifficulty: 2
  },
  {
    id: 'w161',
    word: { Arabic: "سرطان الدم", English: "Leukemia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Pathology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["سرطان الدم","ابيضاض الدم","لوكيميا","اللوكيميا"],
    guessingDifficulty: 2
  },
  {
    id: 'w162',
    word: { Arabic: "سرطان الغدد الليمفاوية", English: "Lymphoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Pathology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["سرطان الغدد الليمفاوية","اللمفوما","ليمفوما","ورم هودجكن"],
    guessingDifficulty: 2
  },
  {
    id: 'w163',
    word: { Arabic: "سرطان نخاع العظم", English: "Multiple Myeloma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry","Orthopedics","Rheumatology","General Surgery","Pathology"],
    synonyms: ["سرطان نخاع العظم","المايلوما المتعددة","مايلوما"],
    guessingDifficulty: 2
  },
  {
    id: 'w164',
    word: { Arabic: "المتلازمة الكلوية", English: "Nephrotic Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pediatrics","Urology","Genetics","Internal Medicine","Neurology","Physiology","Anatomy","Pathology"],
    synonyms: ["المتلازمة الكلوية","نفروتيك","زلال البول الكثيف"],
    guessingDifficulty: 2
  },
  {
    id: 'w165',
    word: { Arabic: "التهاب حوض الكلية", English: "Pyelonephritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Infectious Diseases","Internal Medicine","Physiology","Anatomy","Pathology","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب حوض الكلية","تهيج الكلى البكتيري","التهاب حوض كلى"],
    guessingDifficulty: 2
  },
  {
    id: 'w166',
    word: { Arabic: "استسقاء الكلية", English: "Hydronephrosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Radiology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["استسقاء الكلية","تضخم الكلى بالبول","انحباس البول بالكلى"],
    guessingDifficulty: 2
  },
  {
    id: 'w167',
    word: { Arabic: "الذئبة الحمراء", English: "Systemic Lupus" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Internal Medicine"],
    synonyms: ["الذئبة الحمراء","ذئبة حمراء","الذئبة الجهازية","SLE","لوبرز"],
    guessingDifficulty: 3
  },
  {
    id: 'w168',
    word: { Arabic: "خشونة المفاصل", English: "Osteoarthritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Rheumatology","Orthopedics","Anatomy","Physiology","General Surgery"],
    synonyms: ["خشونة المفاصل","احتكاك الركبة","تاكل الغضاريف المفصلية","OA"],
    guessingDifficulty: 2
  },
  {
    id: 'w169',
    word: { Arabic: "التهاب الفقار المقسط", English: "Ankylosing Spondylitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Rheumatology","Orthopedics","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الفقار المقسط","صلابة العمود الفقري","التهاب الفقار الالتصاقي","البامبو"],
    guessingDifficulty: 2
  },
  {
    id: 'w170',
    word: { Arabic: "الألم العضلي الليفي", English: "Fibromyalgia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Psychiatry"],
    synonyms: ["الألم العضلي الليفي","فيبروميالغيا","الفيبروميالجيا","ألم المفاصل النسيجي الوعائي"],
    guessingDifficulty: 3
  },
  {
    id: 'w171',
    word: { Arabic: "الميلانوما", English: "Melanoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Dermatology","Pathology","Histology","Hematology","Internal Medicine"],
    synonyms: ["الميلانوما","سرطان الخلايا الصبغية بالجلد","سرطان الجلد الاسود"],
    guessingDifficulty: 2
  },
  {
    id: 'w172',
    word: { Arabic: "الثعلبة", English: "Alopecia Areata" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology"],
    synonyms: ["الثعلبة","ثعلبة","سقوط الشعر بقعي"],
    guessingDifficulty: 2
  },
  {
    id: 'w173',
    word: { Arabic: "البهاق", English: "Vitiligo" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology"],
    synonyms: ["البهاق","بهاق","بقع بيضاء بالجلد"],
    guessingDifficulty: 2
  },
  {
    id: 'w174',
    word: { Arabic: "طنين الأذن", English: "Tinnitus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Otolaryngology","Neurology","Internal Medicine"],
    synonyms: ["طنين الأذن","وش بالودن","طنين","صفير الاذن"],
    guessingDifficulty: 2
  },
  {
    id: 'w175',
    word: { Arabic: "ميتفورمين", English: "Metformin" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Endocrinology","Internal Medicine","Forensic Medicine","Pathology"],
    synonyms: ["ميتفورمين","منظم السكر","جلوكوفاج","Glucophage"],
    guessingDifficulty: 2
  },
  {
    id: 'w176',
    word: { Arabic: "ليزينوبريل", English: "Lisinopril" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["ليزينوبريل","مضاد ضغط الدم ايس","Zestril","زستريل"],
    guessingDifficulty: 2
  },
  {
    id: 'w177',
    word: { Arabic: "بروفين", English: "Ibuprofen" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Rheumatology","Internal Medicine"],
    synonyms: ["بروفين","آيبوبروفين","مسكن بروفين","بونيل","Brufen"],
    guessingDifficulty: 1
  },
  {
    id: 'w178',
    word: { Arabic: "بريدنيزولون", English: "Prednisolone" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Immunology","Internal Medicine"],
    synonyms: ["بريدنيزولون","كورتيزول شراب او حبوب","مضاد التهاب ستيرويدي"],
    guessingDifficulty: 2
  },
  {
    id: 'w179',
    word: { Arabic: "فوروسيميد", English: "Furosemide" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["فوروسيميد","لازكس","مدر البول","حبوب ماء مدرة","Lasix"],
    guessingDifficulty: 2
  },
  {
    id: 'w180',
    word: { Arabic: "أملوديبين", English: "Amlodipine" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["أملوديبين","نورفاسك","منظم ضغط كالسيوم","Norvasc"],
    guessingDifficulty: 2
  },
  {
    id: 'w181',
    word: { Arabic: "ليفوثيروكسين", English: "Levothyroxine" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Endocrinology","Internal Medicine"],
    synonyms: ["ليفوثيروكسين","هرمون الغدة التروكسين","التروكسين","Euthyrox"],
    guessingDifficulty: 2
  },
  {
    id: 'w182',
    word: { Arabic: "كلوبيدوغريل", English: "Clopidogrel" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Hematology","Internal Medicine"],
    synonyms: ["كلوبيدوغريل","بلافيكس","Clopidogrel","Plavix"],
    guessingDifficulty: 2
  },
  {
    id: 'w183',
    word: { Arabic: "ديجوكسين", English: "Digoxin" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Cardiology","Internal Medicine"],
    synonyms: ["ديجوكسين","لانوكسين","مقوي انقباض القلب","Lanoxin"],
    guessingDifficulty: 2
  },
  {
    id: 'w184',
    word: { Arabic: "أتروبين", English: "Atropine" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Pharmacology","Emergency Medicine","Internal Medicine","Clinical Toxicology"],
    synonyms: ["أتروبين","حقنة أتروبين","مضاد الكولين لتسريع النبض"],
    guessingDifficulty: 2
  },
  {
    id: 'w185',
    word: { Arabic: "العضلة الدالية", English: "Deltoid" },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["العضلة الدالية","الدالية","عضلة الكتف","عضلة التطعيم"],
    guessingDifficulty: 3
  },
  {
    id: 'w186',
    word: { Arabic: "عضلة بطن الساق", English: "Gastrocnemius" },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["عضلة بطن الساق","السمانة","عضلة الساق الخلفية","العضلة التوأمية الساقية"],
    guessingDifficulty: 3
  },
  {
    id: 'w187',
    word: { Arabic: "العضلة الخياطية", English: "Sartorius" },
    level: 'Academic',
    difficulty: 3,
    type: 'Muscle',
    subjects: ["Anatomy","Physiology","Orthopedics","General Surgery","Rheumatology"],
    synonyms: ["العضلة الخياطية","الخياطية","أطول عضلة في الجسم","سارتوريوس"],
    guessingDifficulty: 3
  },
  {
    id: 'w188',
    word: { Arabic: "العصب الفخذي", English: "Femoral Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الفخذي","عصب فخذي","فخذي"],
    guessingDifficulty: 3
  },
  {
    id: 'w189',
    word: { Arabic: "العصب الكعبري", English: "Radial Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الكعبري","كعبري","عصب كعبري","تسبب اليد المنسدلة"],
    guessingDifficulty: 3
  },
  {
    id: 'w190',
    word: { Arabic: "المرارة", English: "Gallbladder" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","General Surgery","Physiology","Pathology","Gastroenterology","Internal Medicine","Urology"],
    synonyms: ["المرارة","مرارة","كيس الصفراء","الحويصلة الصفراوية"],
    guessingDifficulty: 3
  },
  {
    id: 'w191',
    word: { Arabic: "الغدة الزعترية", English: "Thymus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Immunology","Physiology","Pathology","Endocrinology","Internal Medicine","Biochemistry"],
    synonyms: ["الغدة الزعترية","زعترية","التوتية","الغدة التوتية"],
    guessingDifficulty: 3
  },
  {
    id: 'w192',
    word: { Arabic: "الحصين", English: "Hippocampus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Neurology","Physiology","Pathology"],
    synonyms: ["الحصين","حصين المخ","قرن آمون","مركز الذاكرة بالمخ"],
    guessingDifficulty: 3
  },
  {
    id: 'w193',
    word: { Arabic: "المخيخ", English: "Cerebellum" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Neurology","Physiology","Pathology","Internal Medicine","Psychiatry"],
    synonyms: ["المخيخ","مخيخ","مسؤول التوازن الحركي بالمخ"],
    guessingDifficulty: 3
  },
  {
    id: 'w194',
    word: { Arabic: "الحويصلات الهوائية", English: "Alveoli" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Physiology","Pulmonology","Emergency Medicine","Anaesthesia","Internal Medicine"],
    synonyms: ["الحويصلات الهوائية","أكياس الهواء بالرئة","حويصلات هوائية"],
    guessingDifficulty: 3
  },
  {
    id: 'w195',
    word: { Arabic: "النيفرون", English: "Nephron" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Physiology","Urology","Internal Medicine","Pathology"],
    synonyms: ["النيفرون","نيفرون الكلى","نيفرونات الكلية","وحدة تصفية الكلى"],
    guessingDifficulty: 3
  },
  {
    id: 'w196',
    word: { Arabic: "الكزاز", English: "Tetanus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Emergency Medicine"],
    synonyms: ["الكزاز","مرض الكزاز","تشنج الفك الصدري بكتيري","تيتانوس"],
    guessingDifficulty: 2
  },
  {
    id: 'w197',
    word: { Arabic: "داء الكلب", English: "Rabies" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Emergency Medicine"],
    synonyms: ["داء الكلب","السعار","سعار","عضة كلب مصاب"],
    guessingDifficulty: 2
  },
  {
    id: 'w198',
    word: { Arabic: "الزهري", English: "Syphilis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases"],
    synonyms: ["الزهري","مرض الزهري","قرحة سيفلس بنسلينية"],
    guessingDifficulty: 2
  },
  {
    id: 'w199',
    word: { Arabic: "السيلان", English: "Gonorrhea" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases"],
    synonyms: ["السيلان","سيلان بكتيري جنسي"],
    guessingDifficulty: 2
  },
  {
    id: 'w200',
    word: { Arabic: "الكوليرا", English: "Cholera" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases"],
    synonyms: ["الكوليرا","كوليرا الإسهال المائي الكثيف","ماء الرز"],
    guessingDifficulty: 2
  },
  {
    id: 'w201',
    word: { Arabic: "الليشمانيا", English: "Leishmaniasis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases"],
    synonyms: ["الليشمانيا","حبة حلب","ليشمانيا جلدية أحشاء"],
    guessingDifficulty: 3
  },
  {
    id: 'w202',
    word: { Arabic: "الحمى المالطية", English: "Brucellosis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases"],
    synonyms: ["الحمى المالطية","مالطية","حمى الحليب الملوث البكتيري"],
    guessingDifficulty: 3
  },
  {
    id: 'w203',
    word: { Arabic: "التسمم السجقي", English: "Botulism" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases","Neurology","Clinical Toxicology","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم السجقي","تسمم معلبات منتهي صلاحية بكتيري","بوتوليزم"],
    guessingDifficulty: 3
  },
  {
    id: 'w204',
    word: { Arabic: "مرض كاواساكي", English: "Kawasaki Disease" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Pediatrics","Cardiology","Genetics","Family Medicine"],
    synonyms: ["مرض كاواساكي","متلازمة العقد اللمفاوية المخاطية الجلدية"],
    guessingDifficulty: 3
  },
  {
    id: 'w205',
    word: { Arabic: "متلازمة تيرنر", English: "Turner Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة تيرنر","تيرنر 45X"],
    guessingDifficulty: 2
  },
  {
    id: 'w206',
    word: { Arabic: "متلازمة كلاينفلتر", English: "Klinefelter Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Genetics","Endocrinology","Pediatrics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة كلاينفلتر","كلاينفلتر 47XXY"],
    guessingDifficulty: 2
  },
  {
    id: 'w207',
    word: { Arabic: "الإسقربوط", English: "Scurvy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Biochemistry","General Medicine","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["الإسقربوط","مرض الاسقربوط","نقص فيتامين ج","نزيف اللثة فيتامين سي"],
    guessingDifficulty: 2
  },
  {
    id: 'w208',
    word: { Arabic: "الكساح", English: "Rickets" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Orthopedics"],
    synonyms: ["الكساح","لين العظام للاطفال","مرض الكساح الوراثي او نقص دال"],
    guessingDifficulty: 2
  },
  {
    id: 'w209',
    word: { Arabic: "البلاغرا", English: "Pellagra" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Biochemistry","Dermatology"],
    synonyms: ["البلاغرا","بلاجرا","نقص فيتامين ب3 النياسين الكلاسيكي"],
    guessingDifficulty: 2
  },
  {
    id: 'w210',
    word: { Arabic: "البري بري", English: "Beriberi" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Biochemistry","Cardiology"],
    synonyms: ["البري بري","نقص الثيامين ب1"],
    guessingDifficulty: 2
  },
  {
    id: 'w211',
    word: { Arabic: "أنيميا الفول", English: "G6PD Deficiency" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Pediatrics","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["أنيميا الفول","حساسية البقوليات والحديد تكسير","نقص إنزيم الفول"],
    guessingDifficulty: 2
  },
  {
    id: 'w212',
    word: { Arabic: "تضيق البواب", English: "Pyloric Stenosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","General Surgery"],
    synonyms: ["تضيق البواب","انسداد مخرج المعدة للأطفال القيء المقذوف"],
    guessingDifficulty: 2
  },
  {
    id: 'w213',
    word: { Arabic: "انغلاف الأمعاء", English: "Intussusception" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","General Surgery","Gastroenterology","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["انغلاف الأمعاء","تداخل الامعاء التلسكوبي المسبب للبراز الهلامي"],
    guessingDifficulty: 2
  },
  {
    id: 'w214',
    word: { Arabic: "إريثروبويتين", English: "Erythropoietin" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Biochemistry","Hematology","Physiology","Internal Medicine"],
    synonyms: ["إريثروبويتين","هرمون تصنيع كرات الدم الحمراء الكلوي","EPO"],
    guessingDifficulty: 3
  },
  {
    id: 'w215',
    word: { Arabic: "جلوكاجون", English: "Glucagon" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Endocrinology"],
    synonyms: ["جلوكاجون","الجلوكاجون","هرمون رفع سكر الدم البنكرياسي الفا"],
    guessingDifficulty: 3
  },
  {
    id: 'w216',
    word: { Arabic: "ميوجلوبين", English: "Myoglobin" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Cardiology","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery"],
    synonyms: ["ميوجلوبين","ميوغلوبين العضلات القلبية الأول في الجلطة"],
    guessingDifficulty: 3
  },
  {
    id: 'w217',
    word: { Arabic: "كرياتينين", English: "Creatinine" },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Urology"],
    synonyms: ["كرياتينين","الكرياتينين","مؤشر وظائف الكلى المعملي الأساسي"],
    guessingDifficulty: 3
  },
  {
    id: 'w218',
    word: { Arabic: "بيليروبين", English: "Bilirubin" },
    level: 'Both',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Gastroenterology"],
    synonyms: ["بيليروبين","الصفراء","البليروبين المسبب للصفر بالعيون والجلد"],
    guessingDifficulty: 3
  },
  {
    id: 'w219',
    word: { Arabic: "غدة بارثولين", English: "Bartholin Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Obstetrics and Gynecology","Physiology","Pathology","Endocrinology","Internal Medicine","Biochemistry"],
    synonyms: ["غدة بارثولين","بارثولين التهاب تكيس"],
    guessingDifficulty: 3
  },
  {
    id: 'w220',
    word: { Arabic: "قناة فالوب", English: "Fallopian Tube" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Obstetrics and Gynecology","Physiology","Pathology"],
    synonyms: ["قناة فالوب","قناة فالوب التناسلية المغذية للبويضة"],
    guessingDifficulty: 3
  },
  {
    id: 'w221',
    word: { Arabic: "بطانة الرحم", English: "Endometrium" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Obstetrics and Gynecology","Physiology","General Surgery"],
    synonyms: ["بطانة الرحم","بطانة كلس الرحم الشهرية والسرطان"],
    guessingDifficulty: 3
  },
  {
    id: 'w222',
    word: { Arabic: "العصب الأوسط", English: "Median Nerve" },
    level: 'Academic',
    difficulty: 2,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الأوسط","العصب المتوسط المسبب لتنميل متلازمة النفق الرسغي"],
    guessingDifficulty: 3
  },
  {
    id: 'w223',
    word: { Arabic: "العصب الحجابي", English: "Phrenic Nerve" },
    level: 'Academic',
    difficulty: 3,
    type: 'Nerve',
    subjects: ["Anatomy","Physiology","Neurology","General Surgery","Internal Medicine","Psychiatry"],
    synonyms: ["العصب الحجابي","العصب المغذي للحجاب الحاجز التنفسي"],
    guessingDifficulty: 3
  },
  {
    id: 'w224',
    word: { Arabic: "العقدة الجيب أذينية", English: "Sinoatrial Node" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Cardiology"],
    synonyms: ["العقدة الجيب أذينية","منظم ضربات القلب الكلاسيكي","SA Node"],
    guessingDifficulty: 3
  },
  {
    id: 'w225',
    word: { Arabic: "ألياف بوركينجي", English: "Purkinje Fibers" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Cardiology"],
    synonyms: ["ألياف بوركينجي","شبكة ألياف التوصيل الكهربائي لبطين القلب"],
    guessingDifficulty: 3
  },
  {
    id: 'w226',
    word: { Arabic: "مستقبلات الضغط الشريانية", English: "Baroreceptor" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Cardiology","Vascular Surgery","Physiology","Internal Medicine","Emergency Medicine"],
    synonyms: ["مستقبلات الضغط الشريانية","مستقبلات تنظيم ضغط الدم السريع بالرقبة والصدر"],
    guessingDifficulty: 3
  },
  {
    id: 'w227',
    word: { Arabic: "ماسك فينتوري", English: "Venturi Mask" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Equipment',
    subjects: ["Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["ماسك فينتوري","ماسك الأكسجين دقيق التركيز لمرضى الرئة"],
    guessingDifficulty: 3
  },
  {
    id: 'w228',
    word: { Arabic: "جهاز قياس الأكسجين بالاصبع", English: "Pulse Oximeter" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Emergency Medicine","General Medicine","Anaesthesia","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["جهاز قياس الأكسجين بالاصبع","نبضية الأكسجين بالأطراف"],
    guessingDifficulty: 2
  },
  {
    id: 'w229',
    word: { Arabic: "منظار الحنجرة", English: "Laryngoscope" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Anaesthesia","Emergency Medicine","General Medicine"],
    synonyms: ["منظار الحنجرة","جهاز تنبيب القصبة الهوائية وتأمين مجرى المستشفى"],
    guessingDifficulty: 2
  },
  {
    id: 'w230',
    word: { Arabic: "جهاز قياس السكر المنزلي بالوخز", English: "Glucometer" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Endocrinology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["جهاز قياس السكر المنزلي بالوخز","شرائح قياس السكر"],
    guessingDifficulty: 2
  },
  {
    id: 'w231',
    word: { Arabic: "المشعرة المهبلية", English: "Trichomonas vaginalis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Microbiology","Obstetrics and Gynecology","Infectious Diseases","Gastroenterology","Anatomy","Physiology","General Surgery"],
    synonyms: ["المشعرة المهبلية","تريكوموناس","داء المشعرات","Trichomonas","Trichomoniasis"],
    guessingDifficulty: 3
  },
  {
    id: 'w232',
    word: { Arabic: "الأميبا", English: "Amoeba" },
    level: 'Both',
    difficulty: 1,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases"],
    synonyms: ["الأميبا","أميبا","اميبا","الدوسنتاريا الأميبية","الزحار الأميبي"],
    guessingDifficulty: 2
  },
  {
    id: 'w233',
    word: { Arabic: "الجيارديا", English: "Giardia" },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases"],
    synonyms: ["الجيارديا","جيارديا","جيارديا لامبليا","إسهال دهني"],
    guessingDifficulty: 3
  },
  {
    id: 'w234',
    word: { Arabic: "التوكسوبلازما", English: "Toxoplasma" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Obstetrics and Gynecology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["التوكسوبلازما","توكسوبلازما","مرض القطط","طفيل القطط","داء المقوسات"],
    guessingDifficulty: 3
  },
  {
    id: 'w235',
    word: { Arabic: "البلهارسيا", English: "Bilharzia" },
    level: 'Both',
    difficulty: 1,
    type: 'Parasite',
    subjects: ["Parasitology","Urology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["البلهارسيا","بلهارسيا","شيستوسوما","بلهارسيا بولية"],
    guessingDifficulty: 2
  },
  {
    id: 'w236',
    word: { Arabic: "شيستوسوما", English: "Schistosoma" },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases","Internal Medicine","Pediatrics"],
    synonyms: ["شيستوسوما","الشيستوسوما","بلهارسيا معوية","قواقع البلهارسيا"],
    guessingDifficulty: 3
  },
  {
    id: 'w237',
    word: { Arabic: "أسكاريس", English: "Ascaris" },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Pediatrics","Microbiology","Infectious Diseases","Gastroenterology","Internal Medicine"],
    synonyms: ["أسكاريس","اسكاريس","ديدان الإسكارس","الدودة المستديرة الكبيرة"],
    guessingDifficulty: 3
  },
  {
    id: 'w238',
    word: { Arabic: "أنكلستوما", English: "Ancylostoma" },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ["Parasitology","Hematology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["أنكلستوما","انكلستوما","الدودة الشصية","دودة الأنيميا"],
    guessingDifficulty: 3
  },
  {
    id: 'w239',
    word: { Arabic: "الدودة الدبوسية", English: "Pinworm" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Pediatrics","Microbiology","Infectious Diseases","Gastroenterology","Internal Medicine"],
    synonyms: ["الدودة الدبوسية","دودة دبوسية","اكسيورس","الحكة الشرجية"],
    guessingDifficulty: 3
  },
  {
    id: 'w240',
    word: { Arabic: "الدودة الشريطية", English: "Tapeworm" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases","Internal Medicine","Pediatrics"],
    synonyms: ["الدودة الشريطية","دودة شريطية","تينيا ساجيناتا","تينيا"],
    guessingDifficulty: 3
  },
  {
    id: 'w241',
    word: { Arabic: "الجرب", English: "Scabies" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Parasitology","Dermatology"],
    synonyms: ["الجرب","جرب","طفيل الجرب","الحكة الجلدية","سوسة الجرب"],
    guessingDifficulty: 2
  },
  {
    id: 'w242',
    word: { Arabic: "تريكوموناس", English: "Trichomonas" },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ["Parasitology","Obstetrics and Gynecology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["تريكوموناس","التريكوموناس","تريكوموناس فاجيناليس","طفيل المهبل"],
    guessingDifficulty: 3
  },
  {
    id: 'w243',
    word: { Arabic: "ليشمانيا", English: "Leishmania" },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ["Parasitology","Dermatology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["ليشمانيا","الليشمانيا","حبة حلب","قرحة بغداد","ذباب الرمل"],
    guessingDifficulty: 3
  },
  {
    id: 'w244',
    word: { Arabic: "القمل", English: "Lice" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Neurology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["القمل","قمل","قمل الرأس","الصيبان"],
    guessingDifficulty: 3
  },
  {
    id: 'w245',
    word: { Arabic: "فيلاريا", English: "Filaria" },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Vascular Surgery","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["فيلاريا","الفيلاريا","داء الفيل","انسداد اللمف"],
    guessingDifficulty: 3
  },
  {
    id: 'w246',
    word: { Arabic: "هيداتيد", English: "Hydatid" },
    level: 'Academic',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","General Surgery","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["هيداتيد","الهيداتيد","أكياس مائية","الكيس المائي الكبدي","المشوكة الحبيبية"],
    guessingDifficulty: 3
  },
  {
    id: 'w247',
    word: { Arabic: "فاشيولا", English: "Fasciola" },
    level: 'Academic',
    difficulty: 3,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases","Internal Medicine","Pediatrics"],
    synonyms: ["فاشيولا","الفاشيولا","الدودة الكبدية","مرض الفاشيولا"],
    guessingDifficulty: 3
  },
  {
    id: 'w248',
    word: { Arabic: "الدودة الشصية", English: "Hookworm" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Immunology","Microbiology","Infectious Diseases","Gastroenterology","Internal Medicine","Pediatrics"],
    synonyms: ["الدودة الشصية","دودة شصية","أنكلستوما المسببة للأنيميا","هوك وورم"],
    guessingDifficulty: 3
  },
  {
    id: 'w249',
    word: { Arabic: "الدودة المستديرة", English: "Roundworm" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Gastroenterology","Microbiology","Infectious Diseases","Internal Medicine","Pediatrics"],
    synonyms: ["الدودة المستديرة","دودة مستديرة","نيماتودا","الديدان الأسطوانية"],
    guessingDifficulty: 3
  },
  {
    id: 'w250',
    word: { Arabic: "بق الفراش", English: "Bedbugs" },
    level: 'Both',
    difficulty: 2,
    type: 'Parasite',
    subjects: ["Parasitology","Rheumatology","Microbiology","Infectious Diseases","Gastroenterology"],
    synonyms: ["بق الفراش","بق","البق","حشرة الفراش"],
    guessingDifficulty: 3
  },
  {
    id: 'w251',
    word: { Arabic: "الإنعاش القلبي الرئوي", English: "CPR" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Emergency Medicine","Cardiology","Anaesthesia","Vascular Surgery","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["الإنعاش القلبي الرئوي","إنعاش القلب الميكانيكي اليدوي"],
    guessingDifficulty: 1
  },
  {
    id: 'w252',
    word: { Arabic: "أنبوب القصبة الهوائية", English: "Endotracheal Tube" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Anaesthesia","Emergency Medicine","General Medicine","Pulmonology","Anatomy","Physiology","Internal Medicine"],
    synonyms: ["أنبوب القصبة الهوائية","الأنبوب الرغامي لتأمين مجرى الهواء والتهوية التخديرية"],
    guessingDifficulty: 2
  },
  {
    id: 'w253',
    word: { Arabic: "قناع الصمام الكيسي", English: "Bag Valve Mask" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["Emergency Medicine","Anaesthesia","Critical Care","General Medicine","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["قناع الصمام الكيسي","الأمبوباج","كيس أمبو","Bag Valve Mask","Ambu Bag","BVM"],
    guessingDifficulty: 1
  },
  {
    id: 'w254',
    word: { Arabic: "جهاز التنفس الصناعي", English: "Mechanical Ventilator" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Emergency Medicine","Pulmonology","General Medicine","Anaesthesia","Anatomy","Physiology","Internal Medicine"],
    synonyms: ["جهاز التنفس الصناعي","جهاز الرعاية المركزة للتهوية الميكانيكية"],
    guessingDifficulty: 2
  },
  {
    id: 'w255',
    word: { Arabic: "مقياس التنفس", English: "Spirometer" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Pulmonology","Physiology","Internal Medicine","General Medicine","Emergency Medicine","Anaesthesia","Anatomy"],
    synonyms: ["مقياس التنفس","سبيروميتر","جهاز قياس وظائف الرئة","Spirometer","Spirometry"],
    guessingDifficulty: 2
  },
  {
    id: 'w256',
    word: { Arabic: "الخلايا الكأسية", English: "Goblet Cells" },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ["Histology","Gastroenterology","Physiology","Pathology","Biochemistry","General Surgery","Anatomy","Internal Medicine"],
    synonyms: ["الخلايا الكأسية","خلايا جوبلت المفرزة للمخاط المرطب بالأمعاء"],
    guessingDifficulty: 3
  },
  {
    id: 'w257',
    word: { Arabic: "النسيج الطلائي", English: "Epithelial Tissue" },
    level: 'Academic',
    difficulty: 2,
    type: 'Tissue',
    subjects: ["Histology","Anatomy","Physiology","Pathology","Biochemistry"],
    synonyms: ["النسيج الطلائي","الأنسجة الظهارية المغطية للجلد والأعضاء الداخلية"],
    guessingDifficulty: 3
  },
  {
    id: 'w258',
    word: { Arabic: "الريبوسوم", English: "Ribosome" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Biochemistry","Physiology","Histology","Microbiology"],
    synonyms: ["الريبوسوم","جسيم ريبي","صانعة البروتين","Ribosome","Ribosomes"],
    guessingDifficulty: 3
  },
  {
    id: 'w259',
    word: { Arabic: "ناقضات العظم", English: "Osteoclast" },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ["Histology","Orthopedics","Physiology","Pathology","Biochemistry","Rheumatology","Anatomy","General Surgery"],
    synonyms: ["ناقضات العظم","خلايا هدم العظام وإعادة هيكلة الكالسيوم"],
    guessingDifficulty: 3
  },
  {
    id: 'w260',
    word: { Arabic: "حلقة ويليس الشريانية", English: "Circle of Willis" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Neurology","Cardiology","Vascular Surgery","Physiology","Internal Medicine","Emergency Medicine","Psychiatry"],
    synonyms: ["حلقة ويليس الشريانية","شبكة تغذية الدماغ الدموية بقاع الجمجمة"],
    guessingDifficulty: 3
  },
  {
    id: 'w261',
    word: { Arabic: "الزائدة الدودية", English: "Appendix" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Anatomy","General Surgery","Gastroenterology","Physiology","Internal Medicine"],
    synonyms: ["الزائدة الدودية","التهاب الأعور الجراحي الحاد"],
    guessingDifficulty: 3
  },
  {
    id: 'w262',
    word: { Arabic: "العضلة القصية الترقوية الخشائية", English: "Sternocleidomastoid" },
    level: 'Academic',
    difficulty: 2,
    type: 'Muscle',
    subjects: ["Anatomy","General Surgery","Neurology","Physiology","Orthopedics","Rheumatology"],
    synonyms: ["العضلة القصية الترقوية الخشائية","العضلة القترائية","SCM","Sternocleidomastoid"],
    guessingDifficulty: 3
  },
  {
    id: 'w263',
    word: { Arabic: "ارتخاء الصمام الميترالي", English: "Mitral Valve Prolapse" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine","Vascular Surgery","Physiology","Anatomy","Emergency Medicine"],
    synonyms: ["ارتخاء الصمام الميترالي","انسدال الصمام الثنائي الشرف","انسدال التاجي","الميترالي","تسمع كليك","خرير الصمام","MVP"],
    guessingDifficulty: 2
  },
  {
    id: 'w264',
    word: { Arabic: "جلطة الأوردة العميقة", English: "Deep Vein Thrombosis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Internal Medicine","Physiology","Anatomy","Emergency Medicine","Hematology","Biochemistry"],
    synonyms: ["جلطة الأوردة العميقة","جلطة الساق العميقة","جلطة وريدية","دي في تي","تورم الساق","DVT"],
    guessingDifficulty: 3
  },
  {
    id: 'w265',
    word: { Arabic: "ظاهرة رينود", English: "Raynaud's Phenomenon" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Vascular Surgery","Internal Medicine"],
    synonyms: ["ظاهرة رينود","مرض رينود","تشنج الأوعية الدموية","تغير لون الأصابع","برد الأصابع"],
    guessingDifficulty: 3
  },
  {
    id: 'w266',
    word: { Arabic: "مرض بورجر", English: "Buerger's Disease" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Vascular Surgery","Internal Medicine"],
    synonyms: ["مرض بورجر","التهاب الأوعية الخثاري المسد","بورجر","غرغرينا المدخنين","جلطات أطراف المدخنين"],
    guessingDifficulty: 3
  },
  {
    id: 'w267',
    word: { Arabic: "اندحاس قلبي", English: "Cardiac Tamponade" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Cardiology","Emergency Medicine","Vascular Surgery","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["اندحاس قلبي","اندحاس القلب","دكاك قلبي","تراكم السوائل حول القلب","ثالوث بيك","انخفاض ضغط الدم مع احتقان الوريد"],
    guessingDifficulty: 3
  },
  {
    id: 'w268',
    word: { Arabic: "اعتلال عضلة القلب", English: "Cardiomyopathy" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine","Vascular Surgery","Physiology","Anatomy","Emergency Medicine","Orthopedics","Rheumatology","General Surgery"],
    synonyms: ["اعتلال عضلة القلب","ضعف عضلة القلب","تضخم القلب","اعتلال القلب التوسعي","اعتلال تضخمي"],
    guessingDifficulty: 2
  },
  {
    id: 'w269',
    word: { Arabic: "التهاب الشغاف الإنتاني", English: "Infective Endocarditis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Cardiology","Infectious Diseases","Internal Medicine","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الشغاف الإنتاني","التهاب بطانة القلب","بكتيريا الصمامات","عقيدات بوزلر","بقع روت"],
    guessingDifficulty: 3
  },
  {
    id: 'w270',
    word: { Arabic: "الرفرفة الأذينية", English: "Atrial Flutter" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["الرفرفة الأذينية","رفرفة الأذين","تسارع ضربات القلب الأذيني","تخطيط سن المنشار","نبضات منشارية"],
    guessingDifficulty: 2
  },
  {
    id: 'w271',
    word: { Arabic: "القناة الشريانية المفتوحة", English: "Patent Ductus Arteriosus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine"],
    synonyms: ["القناة الشريانية المفتوحة","بقاء القناة الشريانية مفتوحة","عيب خلقي قلبي","خرير مستمر","PDA"],
    guessingDifficulty: 2
  },
  {
    id: 'w272',
    word: { Arabic: "دوالي الساقين", English: "Varicose Veins" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Vascular Surgery","General Surgery","Cardiology","Physiology","Anatomy","Internal Medicine","Emergency Medicine"],
    synonyms: ["دوالي الساقين","الدوالي","أوردة متسعة","توسع الأوردة","دوالي وريدية"],
    guessingDifficulty: 2
  },
  {
    id: 'w273',
    word: { Arabic: "النوبة الإقفارية العابرة", English: "Transient Ischemic Attack" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine","Emergency Medicine"],
    synonyms: ["النوبة الإقفارية العابرة","جلطة دماغية مؤقتة","السكتة الدماغية الصغيرة","قصور تروية مؤقت","TIA"],
    guessingDifficulty: 2
  },
  {
    id: 'w274',
    word: { Arabic: "شلل بل", English: "Bell's Palsy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine","Anatomy","Physiology","Psychiatry"],
    synonyms: ["شلل بل","شلل العصب السابع","اللقوة","التهاب العصب السابع","شلل وجهي نصفي"],
    guessingDifficulty: 2
  },
  {
    id: 'w275',
    word: { Arabic: "الضمور العضلي الشوكي", English: "Spinal Muscular Atrophy" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Pediatrics","Neurology","Genetics","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["الضمور العضلي الشوكي","ضمور العضلات الشوكي","مرض SMA","ضمور شوكي","حقنة الزولجنسما"],
    guessingDifficulty: 3
  },
  {
    id: 'w276',
    word: { Arabic: "مرض كروتزفيلد جاكوب", English: "Creutzfeldt-Jakob Disease" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Neurology","Pathology"],
    synonyms: ["مرض كروتزفيلد جاكوب","جنون البقر البشري","اعتلال دماغي إسفنجي","بريونات","مرض البريون","CJD"],
    guessingDifficulty: 3
  },
  {
    id: 'w277',
    word: { Arabic: "التغفيق", English: "Narcolepsy" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Psychiatry"],
    synonyms: ["التغفيق","مرض النوم القهري","النوم المفاجئ","نوبات النوم","الجمود المفاجئ"],
    guessingDifficulty: 2
  },
  {
    id: 'w278',
    word: { Arabic: "التهاب الدماغ", English: "Encephalitis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Infectious Diseases","Internal Medicine","Anatomy","Physiology","Psychiatry","Hematology","Biochemistry","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الدماغ","التهاب المخ","عدوى الدماغ","التهاب نسيج الدماغ"],
    guessingDifficulty: 2
  },
  {
    id: 'w279',
    word: { Arabic: "اضطراب الهلع", English: "Panic Disorder" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry","Family Medicine"],
    synonyms: ["اضطراب الهلع","نوبات الهلع","هلع","خوف شديد مفاجئ","اضطراب الفزع"],
    guessingDifficulty: 2
  },
  {
    id: 'w280',
    word: { Arabic: "الوسواس القهري", English: "Obsessive Compulsive Disorder" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry"],
    synonyms: ["الوسواس القهري","وسواس","مرض الوسواس","أفكار قهرية","سلوك قهري","OCD"],
    guessingDifficulty: 2
  },
  {
    id: 'w281',
    word: { Arabic: "اضطراب ما بعد الصدمة", English: "Post-Traumatic Stress Disorder" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["اضطراب ما بعد الصدمة","صدمة نفسية","كرب ما بعد الصدمة","قلق الصدمة","PTSD"],
    guessingDifficulty: 2
  },
  {
    id: 'w282',
    word: { Arabic: "اضطراب القلق العام", English: "Generalized Anxiety Disorder" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Psychiatry","Family Medicine","Internal Medicine"],
    synonyms: ["اضطراب القلق العام","القلق المزمن","قلق عام","اضطراب قلق","GAD"],
    guessingDifficulty: 2
  },
  {
    id: 'w283',
    word: { Arabic: "ارتفاع ضغط الوريد البابي", English: "Portal Hypertension" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","Internal Medicine","General Surgery","Cardiology","Vascular Surgery","Physiology","Anatomy","Emergency Medicine"],
    synonyms: ["ارتفاع ضغط الوريد البابي","ضغط الوريد البابي","دوالي المريء","استسقاء بطني"],
    guessingDifficulty: 2
  },
  {
    id: 'w284',
    word: { Arabic: "تعذر الارتخاء المريئي", English: "Achalasia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","General Surgery"],
    synonyms: ["تعذر الارتخاء المريئي","أكالازيا","عسر بلع المريء","ارتخاء أسفل المريء","منقار الطائر في الأشعة"],
    guessingDifficulty: 2
  },
  {
    id: 'w285',
    word: { Arabic: "مريء باريت", English: "Barrett's Esophagus" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Gastroenterology","Pathology","Internal Medicine","General Surgery","Physiology","Anatomy"],
    synonyms: ["مريء باريت","متلازمة باريت","تغير خلايا المريء","تحول نسيجي للمريء"],
    guessingDifficulty: 3
  },
  {
    id: 'w286',
    word: { Arabic: "التهاب الرتوج", English: "Diverticulitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الرتوج","التهاب الجيوب القولونية","جيوب القولون المتهبة","فتق الغشاء المخاطي المعوي"],
    guessingDifficulty: 2
  },
  {
    id: 'w287',
    word: { Arabic: "الانسداد المعوي", English: "Intestinal Obstruction" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Gastroenterology","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["الانسداد المعوي","انسداد الأمعاء","التواء الأمعاء","انسداد معوي حاد"],
    guessingDifficulty: 2
  },
  {
    id: 'w288',
    word: { Arabic: "التهاب الصفاق", English: "Peritonitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery","Emergency Medicine","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الصفاق","التهاب الغشاء البريتوني","تسمم البطن","التهاب تجويف البطن"],
    guessingDifficulty: 2
  },
  {
    id: 'w289',
    word: { Arabic: "التهاب القنوات الصفراوية", English: "Cholangitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","General Surgery","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب القنوات الصفراوية","التهاب مجاري الصفراء","عدوى القنوات المرارية","خماسي رينولدز"],
    guessingDifficulty: 2
  },
  {
    id: 'w290',
    word: { Arabic: "التهاب القنوات الصفراوية الأولي", English: "Primary Biliary Cholangitis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Gastroenterology","Internal Medicine","Pathology","General Surgery","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب القنوات الصفراوية الأولي","تليف كبدي مراري أولي","مرض PBC","مناعة ذاتية للكبد"],
    guessingDifficulty: 3
  },
  {
    id: 'w291',
    word: { Arabic: "الاعتلال الدماغي الكبدي", English: "Hepatic Encephalopathy" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Internal Medicine","Gastroenterology","General Surgery","Physiology","Anatomy","Neurology","Psychiatry","Hematology","Biochemistry"],
    synonyms: ["الاعتلال الدماغي الكبدي","غيبوبة كبدية","تسمم الدماغ بالأمونيا","ارتعاش اليدين الكبدي"],
    guessingDifficulty: 3
  },
  {
    id: 'w292',
    word: { Arabic: "الفتق الإربي", English: "Inguinal Hernia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["General Surgery"],
    synonyms: ["الفتق الإربي","فتق إربي","فتق الفخذ","بروز الأمعاء بالمنطقة الإربية"],
    guessingDifficulty: 2
  },
  {
    id: 'w293',
    word: { Arabic: "الساركويد", English: "Sarcoidosis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Pathology","Internal Medicine"],
    synonyms: ["الساركويد","الغرناوية","ورم حبيبي غير متجبن","مرض الساركويد"],
    guessingDifficulty: 2
  },
  {
    id: 'w294',
    word: { Arabic: "التليف الرئوي مجهول السبب", English: "Idiopathic Pulmonary Fibrosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Pulmonology","Internal Medicine","Pathology","Emergency Medicine","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["التليف الرئوي مجهول السبب","تليف الرئة مجهول السبب","تليف رئوي","عش النحل في الأشعة","IPF"],
    guessingDifficulty: 3
  },
  {
    id: 'w295',
    word: { Arabic: "متلازمة انقطاع النفس النومي", English: "Sleep Apnea Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pulmonology","Neurology","Pediatrics","Genetics","Internal Medicine"],
    synonyms: ["متلازمة انقطاع النفس النومي","انقطاع التنفس أثناء النوم","الاختناق النومي","الشخير وانقطاع النفس"],
    guessingDifficulty: 2
  },
  {
    id: 'w296',
    word: { Arabic: "التهاب غشاء الجنب", English: "Pleurisy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب غشاء الجنب","ذات الجنب","التهاب الجنب","ألم صدر تنفسي غشائي"],
    guessingDifficulty: 2
  },
  {
    id: 'w297',
    word: { Arabic: "التهاب الحنجرة", English: "Laryngitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Otolaryngology","Family Medicine","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الحنجرة","بحة الصوت","التهاب الحبال الصوتية","فقدان الصوت المؤقت"],
    guessingDifficulty: 2
  },
  {
    id: 'w298',
    word: { Arabic: "الدبيلة الصدرية", English: "Empyema" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","General Surgery","Infectious Diseases"],
    synonyms: ["الدبيلة الصدرية","تجمع صديدي بالصدر","تقيح الجنب","صديد الغشاء البلوري"],
    guessingDifficulty: 2
  },
  {
    id: 'w299',
    word: { Arabic: "متلازمة فرط التنفس", English: "Hyperventilation Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Emergency Medicine","Psychiatry","Pediatrics","Genetics","Internal Medicine","Neurology","Pulmonology","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["متلازمة فرط التنفس","التنفس السريع الهستيري","فرط التهوئة","تشنج الأصابع الكربوني"],
    guessingDifficulty: 2
  },
  {
    id: 'w300',
    word: { Arabic: "ارتفاع ضغط الشريان الرئوي", English: "Pulmonary Hypertension" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Cardiology","Internal Medicine","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Vascular Surgery"],
    synonyms: ["ارتفاع ضغط الشريان الرئوي","ارتفاع ضغط الرئة","الضغط الرئوي الشرياني"],
    guessingDifficulty: 2
  },
  {
    id: 'w301',
    word: { Arabic: "تنخر الأنابيب الحاد", English: "Acute Tubular Necrosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Nephrology","Pathology","Internal Medicine"],
    synonyms: ["تنخر الأنابيب الحاد","الخراب الأنبوبي الحاد","موت خلايا أنابيب الكلى","قصور كلوي بسبب الأدوية","ATN"],
    guessingDifficulty: 3
  },
  {
    id: 'w302',
    word: { Arabic: "تكيس الكلى", English: "Polycystic Kidney Disease" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Nephrology","Genetics","Internal Medicine","Urology","Physiology","Anatomy","Pathology"],
    synonyms: ["تكيس الكلى","تكيس الكلى الوراثي","كلية متعددة الكيسات","مرض تكيس الكلى"],
    guessingDifficulty: 2
  },
  {
    id: 'w303',
    word: { Arabic: "التهاب المثانة الخلالي", English: "Interstitial Cystitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Internal Medicine","Physiology","Anatomy","Pathology","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب المثانة الخلالي","متلازمة المثانة المؤلمة","التهاب مثانة غير بكتيري"],
    guessingDifficulty: 2
  },
  {
    id: 'w304',
    word: { Arabic: "حصوات الكلى الطبية", English: "Nephrolithiasis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","General Surgery","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["حصوات الكلى الطبية","تحصي الكلى","حصوة الكلى","مغص كلوي","أكسالات الكالسيوم"],
    guessingDifficulty: 2
  },
  {
    id: 'w305',
    word: { Arabic: "التهاب البروستاتا", English: "Prostatitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Infectious Diseases","Internal Medicine","Physiology","Anatomy","Pathology","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب البروستاتا","التهاب البروستات","عدوى البروستاتا الحادة","التهاب بروستاتي مزمن"],
    guessingDifficulty: 2
  },
  {
    id: 'w306',
    word: { Arabic: "الارتجاع المثاني الحالببي", English: "Vesicoureteral Reflux" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Pediatrics","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["الارتجاع المثاني الحالببي","جزر مثاني حالبي","ارتداد البول للكلية","ارتجاع البول"],
    guessingDifficulty: 2
  },
  {
    id: 'w307',
    word: { Arabic: "تصلب كبيبات الكلى", English: "Glomerulosclerosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Nephrology","Pathology","Urology","Internal Medicine","Physiology","Anatomy"],
    synonyms: ["تصلب كبيبات الكلى","تندب كبيبات الكلى","تصلب الكلى الكبيبي"],
    guessingDifficulty: 3
  },
  {
    id: 'w308',
    word: { Arabic: "التحمض الكيتوني السكري", English: "Diabetic Ketoacidosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Emergency Medicine","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["التحمض الكيتوني السكري","حموضة الدم السكرية","غيبوبة السكر الأسيتونية","DKA","كيتونات في البول"],
    guessingDifficulty: 2
  },
  {
    id: 'w309',
    word: { Arabic: "متلازمة شيهان", English: "Sheehan's Syndrome" },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Endocrinology","Obstetrics and Gynecology","Internal Medicine","Pediatrics","Genetics","Neurology"],
    synonyms: ["متلازمة شيهان","نخر الغدة النخامية بعد الولادة","قصور النخامية الولادي","نزيف الولادة المسبب لكسل الغدد"],
    guessingDifficulty: 3
  },
  {
    id: 'w310',
    word: { Arabic: "متلازمة كون", English: "Conn's Syndrome" },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Endocrinology","Internal Medicine","Pediatrics","Genetics","Neurology"],
    synonyms: ["متلازمة كون","ألدوسترونية أولية","زيادة الألدوسترون","ورم قشر الكظر المفرز للألدوسترون"],
    guessingDifficulty: 3
  },
  {
    id: 'w311',
    word: { Arabic: "التهاب الغدة الدرقية الحاد", English: "De Quervain's Thyroiditis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Endocrinology","Internal Medicine","Pathology","Physiology","Biochemistry","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الغدة الدرقية الحاد","التهاب دي كيرفان للدرقية","التهاب الغدة الدرقية تحت الحاد المؤلم"],
    guessingDifficulty: 3
  },
  {
    id: 'w312',
    word: { Arabic: "قصور الغدد جارات الدرقية", English: "Hypoparathyroidism" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["قصور الغدد جارات الدرقية","خمول غدة باراثايروئيد","نقص هرمون الباراثورمون","تشنج الكالسيوم"],
    guessingDifficulty: 2
  },
  {
    id: 'w313',
    word: { Arabic: "البلوغ المبكر", English: "Precocious Puberty" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Endocrinology"],
    synonyms: ["البلوغ المبكر","بلوغ مبكر للأطفال","نشاط الهرمونات الجنسية المبكر"],
    guessingDifficulty: 2
  },
  {
    id: 'w314',
    word: { Arabic: "متلازمة شوغرن", English: "Sjögren's Syndrome" },
    level: 'Both',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Rheumatology","Immunology","Internal Medicine","Pediatrics","Genetics","Neurology"],
    synonyms: ["متلازمة شوغرن","متلازمة جفاف العين والفم المناعية","شوغرن","جفاف الأغشية المخاطية"],
    guessingDifficulty: 3
  },
  {
    id: 'w315',
    word: { Arabic: "تصلب الجلد المنهجي", English: "Systemic Sclerosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Dermatology","Pathology","Histology"],
    synonyms: ["تصلب الجلد المنهجي","تصلب الجلد المناعي","مرض السكليروديرما","تصلب الجلد المنتشر"],
    guessingDifficulty: 3
  },
  {
    id: 'w316',
    word: { Arabic: "ألم العضلات الروماتيزمي", English: "Polymyalgia Rheumatica" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Internal Medicine","Orthopedics","Anatomy","Physiology","General Surgery"],
    synonyms: ["ألم العضلات الروماتيزمي","ألم روماتيزمي متعدد","التهاب عضلات كبار السن","PMR"],
    guessingDifficulty: 3
  },
  {
    id: 'w317',
    word: { Arabic: "مرض باجيت للعظام", English: "Paget's Disease of Bone" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Orthopedics","Pathology","Internal Medicine","Rheumatology","Anatomy","Physiology","General Surgery"],
    synonyms: ["مرض باجيت للعظام","داء باجيت العظمي","خلل إعادة بناء العظام","مرض باجيت"],
    guessingDifficulty: 3
  },
  {
    id: 'w318',
    word: { Arabic: "الجنف", English: "Scoliosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Orthopedics","Pediatrics"],
    synonyms: ["الجنف","انحراف العمود الفقري","اعوجاج الظهر","ميلان العمود الفقري"],
    guessingDifficulty: 2
  },
  {
    id: 'w319',
    word: { Arabic: "التهاب نخاع العظم", English: "Osteomyelitis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Orthopedics","Infectious Diseases","General Surgery","Rheumatology","Anatomy","Physiology","Neurology","Internal Medicine","Psychiatry","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب نخاع العظم","التهاب العظم والنقي","عدوى العظام البكتيرية","التهاب العظام"],
    guessingDifficulty: 2
  },
  {
    id: 'w320',
    word: { Arabic: "متلازمة النفق الرسغي", English: "Carpal Tunnel Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Orthopedics","Neurology","General Surgery","Pediatrics","Genetics","Internal Medicine"],
    synonyms: ["متلازمة النفق الرسغي","ضغط عصب اليد","اختناق العصب الأوسط","تنميل أصابع اليدين","CTS"],
    guessingDifficulty: 2
  },
  {
    id: 'w321',
    word: { Arabic: "الفقاع الشائع", English: "Pemphigus Vulgaris" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Dermatology","Pathology","Immunology"],
    synonyms: ["الفقاع الشائع","مرض الفقاع الجلدي","فقاعات مائية بالجلد والفم المناعي"],
    guessingDifficulty: 3
  },
  {
    id: 'w322',
    word: { Arabic: "التهاب الجلد التأتبي", English: "Atopic Dermatitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Pediatrics","Family Medicine","Pathology","Histology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["التهاب الجلد التأتبي","الإكزيما البنيوية","إكزيما الأطفال المسببة للحكة","أكزيما تأتبية"],
    guessingDifficulty: 2
  },
  {
    id: 'w323',
    word: { Arabic: "الحزاز المسطح", English: "Lichen Planus" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Pathology"],
    synonyms: ["الحزاز المسطح","حزاز جلدي","طفح جلدي بنفسجي حكة","الحزاز"],
    guessingDifficulty: 2
  },
  {
    id: 'w324',
    word: { Arabic: "القوباء", English: "Impetigo" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Pediatrics","Infectious Diseases"],
    synonyms: ["القوباء","القوباء المعدية للأطفال","بكتيريا حول الفم عسلية اللون","عدوى جلدية بكتيرية"],
    guessingDifficulty: 2
  },
  {
    id: 'w325',
    word: { Arabic: "النخالية المبرقشة", English: "Tinea Versicolor" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Microbiology","Infectious Diseases"],
    synonyms: ["النخالية المبرقشة","السعفة المبرقشة","التينيا الملونة","Tinea Versicolor","Pityriasis Versicolor"],
    guessingDifficulty: 2
  },
  {
    id: 'w326',
    word: { Arabic: "الوردية الجلدي", English: "Rosacea" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Family Medicine","Pathology","Histology"],
    synonyms: ["الوردية الجلدي","مرض الوردية","احمرار الوجه مع توسع الشعيرات","وردية الوجه"],
    guessingDifficulty: 2
  },
  {
    id: 'w327',
    word: { Arabic: "سرطان القولون والمستقيم", English: "Colorectal Cancer" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","General Surgery","Gastroenterology","Pathology","Hematology","Internal Medicine","Physiology","Anatomy"],
    synonyms: ["سرطان القولون والمستقيم","سرطان القولون","سرطان المستقيم","أورام القولون الخبيثة"],
    guessingDifficulty: 2
  },
  {
    id: 'w328',
    word: { Arabic: "سرطان البنكرياس", English: "Pancreatic Cancer" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","General Surgery","Gastroenterology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["سرطان البنكرياس","أورام البنكرياس الخبيثة","سرطان رأس البنكرياس","يرقان صامت"],
    guessingDifficulty: 2
  },
  {
    id: 'w329',
    word: { Arabic: "الأرومة الدبقية", English: "Glioblastoma" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Neurology","Pathology"],
    synonyms: ["الأرومة الدبقية","ورم غليوبلاستوما","سرطان الدماغ الخبيث الشرس","أرومة دبقية متعددة الأشكال"],
    guessingDifficulty: 3
  },
  {
    id: 'w330',
    word: { Arabic: "سرطان العظام والغرن العظمي", English: "Osteosarcoma" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Orthopedics","Pathology","Rheumatology","Anatomy","Physiology","General Surgery","Hematology","Internal Medicine"],
    synonyms: ["سرطان العظام والغرن العظمي","ساركوما عظمية","أورام العظام الخبيثة للأطفال","غرن عظمي"],
    guessingDifficulty: 3
  },
  {
    id: 'w331',
    word: { Arabic: "ورم الأرومة العصبية", English: "Neuroblastoma" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Pediatrics","Pathology","Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["ورم الأرومة العصبية","نيوروبلاستوما","سرطان الغدة الكظرية للأطفال من الخلايا العصبية"],
    guessingDifficulty: 3
  },
  {
    id: 'w332',
    word: { Arabic: "ورم ويلمز", English: "Wilms' Tumor" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Pediatrics","Urology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["ورم ويلمز","سرطان الكلى للأطفال ويلمز","سرطان كلى طفولي"],
    guessingDifficulty: 3
  },
  {
    id: 'w333',
    word: { Arabic: "فقر الدم اللاتنسجي", English: "Aplastic Anemia" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Internal Medicine","Pathology","Physiology","Biochemistry"],
    synonyms: ["فقر الدم اللاتنسجي","الأنيميا اللاتنسجية","فشل نخاع العظام الإنتاجي","نقص كرات الدم الثلاثية الشامل"],
    guessingDifficulty: 2
  },
  {
    id: 'w334',
    word: { Arabic: "كثرة الحمر الحقيقية", English: "Polycythemia Vera" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Internal Medicine","Pathology"],
    synonyms: ["كثرة الحمر الحقيقية","احمرار الدم الحقيقي","فرط خلايا الدم الحمراء الأولي","طفرة جاك تو"],
    guessingDifficulty: 2
  },
  {
    id: 'w335',
    word: { Arabic: "قلة الصفائح الدموية", English: "Thrombocytopenia" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["قلة الصفائح الدموية","نقص صفائح الدم","مرض نقص الصفائح","فرفرية نقص الصفائح"],
    guessingDifficulty: 2
  },
  {
    id: 'w336',
    word: { Arabic: "التخثر المنتثر داخل الأوعية", English: "Disseminated Intravascular Coagulation" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Hematology","Emergency Medicine","Pathology","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Biochemistry"],
    synonyms: ["التخثر المنتثر داخل الأوعية","تجلط الدم المنتشر","اعتلال تخثر استهلاكي حاد","DIC"],
    guessingDifficulty: 3
  },
  {
    id: 'w337',
    word: { Arabic: "الأنيميا الخبيثة", English: "Pernicious Anemia" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Internal Medicine","Gastroenterology","Physiology","Biochemistry","Oncology","Pathology"],
    synonyms: ["الأنيميا الخبيثة","أنيميا فقر الدم الخبيث","نقص فيتامين ب12 بسبب نقص العامل الداخلي"],
    guessingDifficulty: 2
  },
  {
    id: 'w338',
    word: { Arabic: "فقر الدم الانحلالي المناعي الذاتي", English: "Autoimmune Hemolytic Anemia" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Hematology","Internal Medicine","Immunology","Physiology","Biochemistry"],
    synonyms: ["فقر الدم الانحلالي المناعي الذاتي","أنيميا انحلالية مناعية","تكسير خلايا الدم بالمنظومة المناعية"],
    guessingDifficulty: 2
  },
  {
    id: 'w339',
    word: { Arabic: "حمى التيفوئيد", English: "Typhoid Fever" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Internal Medicine","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["حمى التيفوئيد","حمى التيفود","عدوى السالمونيلا التيفية","التيفود"],
    guessingDifficulty: 2
  },
  {
    id: 'w340',
    word: { Arabic: "الحمى الصفراء", English: "Yellow Fever" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Emergency Medicine","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["الحمى الصفراء","الحمى الصفراء الفيروسية المنقولة بالبعوض","يرقان فيروسي"],
    guessingDifficulty: 2
  },
  {
    id: 'w341',
    word: { Arabic: "كثرة الوحيدات الخمجية", English: "Infectious Mononucleosis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Pediatrics","Hematology","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["كثرة الوحيدات الخمجية","داء كثرة الوحيدات","مرض القبلة الفيروسي","حمى الغدد الإيبشتاين بار"],
    guessingDifficulty: 2
  },
  {
    id: 'w342',
    word: { Arabic: "الكيسة العدارية", English: "Hydatid Cyst" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Parasitology","General Surgery","Infectious Diseases","Internal Medicine"],
    synonyms: ["الكيسة العدارية","داء المشوكات","كيس مائي كبدي","Hydatid Cyst","Echinococcosis","Hydatid Disease"],
    guessingDifficulty: 2
  },
  {
    id: 'w343',
    word: { Arabic: "داء لايم", English: "Lyme Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Rheumatology","Neurology"],
    synonyms: ["داء لايم","مرض لايم","عدوى بوريليا المنقولة بالقراد","طفح جلد عين الثور في لايم"],
    guessingDifficulty: 2
  },
  {
    id: 'w344',
    word: { Arabic: "داء البريميات", English: "Leptospirosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases","Internal Medicine","Nephrology"],
    synonyms: ["داء البريميات","حمى البريميات","داء ويل البكتيري من القوارض","عدوى بول الفئران"],
    guessingDifficulty: 3
  },
  {
    id: 'w345',
    word: { Arabic: "داء المقوسات", English: "Toxoplasmosis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Obstetrics and Gynecology","Parasitology"],
    synonyms: ["داء المقوسات","مرض القطط","التوكسوبلازما","عدوى القطط المسببة للإجهاض"],
    guessingDifficulty: 2
  },
  {
    id: 'w346',
    word: { Arabic: "داء شاغاس", English: "Chagas Disease" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases","Cardiology","Parasitology"],
    synonyms: ["داء شاغاس","مرض شاغاس الكاريبي","التريبانوسوما الكروزية المسببة لتضخم القولون والقلب"],
    guessingDifficulty: 3
  },
  {
    id: 'w347',
    word: { Arabic: "داء الرشاشيات", English: "Aspergillosis" },
    level: 'Both',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Infectious Diseases","Pulmonology","Microbiology"],
    synonyms: ["داء الرشاشيات","فطر الرشاشيات الرئوي","ورم فطر الأسبيرجيلوس الكروي بالرئة"],
    guessingDifficulty: 3
  },
  {
    id: 'w348',
    word: { Arabic: "داء المبيضات", English: "Candidiasis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Dermatology","Microbiology","Obstetrics and Gynecology","Anatomy","Physiology","General Surgery"],
    synonyms: ["داء المبيضات","عدوى الكانديدا الفطرية","فطريات الفم والمهبل كانديدا","السلاق الأبيض"],
    guessingDifficulty: 2
  },
  {
    id: 'w349',
    word: { Arabic: "بطانة الرحم المهاجرة", English: "Endometriosis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Pathology","Anatomy","Physiology","General Surgery"],
    synonyms: ["بطانة الرحم المهاجرة","داء بطانة الرحم","شوكولاتة كيس المبيض","مهاجرة الخلايا الرحمية"],
    guessingDifficulty: 2
  },
  {
    id: 'w350',
    word: { Arabic: "المشيمة المزاحة", English: "Placenta Previa" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["المشيمة المزاحة","المشيمة المنزاحة الساقطة","نزول المشيمة أسفل الرحم","نزيف حملي غير مؤلم"],
    guessingDifficulty: 2
  },
  {
    id: 'w351',
    word: { Arabic: "انفصال المشيمة المبكر", English: "Abruptio Placentae" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["انفصال المشيمة المبكر","انفكاك المشيمة الباكر","انفصال مشيمي حاد مؤلم"],
    guessingDifficulty: 2
  },
  {
    id: 'w352',
    word: { Arabic: "القيء المفرط الحملي", English: "Hyperemesis Gravidarum" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Internal Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["القيء المفرط الحملي","تسمم القيء الشديد للحوامل","الغثيان الحملي الشديد المؤدي للجفاف"],
    guessingDifficulty: 2
  },
  {
    id: 'w353',
    word: { Arabic: "الحمل العنقودي", English: "Hydatidiform Mole" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Pathology","Anatomy","Physiology","General Surgery"],
    synonyms: ["الحمل العنقودي","الحمل الرحمي الغازي العنقودي","الرحم العنقودي الحويصلي"],
    guessingDifficulty: 2
  },
  {
    id: 'w354',
    word: { Arabic: "العضال الغدي الرحمي", English: "Adenomyosis" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Pathology","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery"],
    synonyms: ["العضال الغدي الرحمي","تغدد الرحم","بطانة الرحم الداخلية المهاجرة لعضلة الرحم"],
    guessingDifficulty: 2
  },
  {
    id: 'w355',
    word: { Arabic: "اعتلال الشبكية السكري", English: "Diabetic Retinopathy" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Endocrinology","Internal Medicine","Physiology","Biochemistry","Anatomy","General Surgery"],
    synonyms: ["اعتلال الشبكية السكري","تأثر شبكية العين بالسكر","نزيف الشبكية لمرضى السكري"],
    guessingDifficulty: 2
  },
  {
    id: 'w356',
    word: { Arabic: "الضمور البقعي", English: "Macular Degeneration" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology"],
    synonyms: ["الضمور البقعي","التنكس البقعي المرتبط بالسن","تلف مركز بصر العين البقعة الصفراء"],
    guessingDifficulty: 2
  },
  {
    id: 'w357',
    word: { Arabic: "انفصال الشبكية", English: "Retinal Detachment" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Emergency Medicine","Anatomy","General Surgery"],
    synonyms: ["انفصال الشبكية","انفصال شبكية العين الحاد","ستارة سوداء أمام العين"],
    guessingDifficulty: 2
  },
  {
    id: 'w358',
    word: { Arabic: "التهاب الأذن الخارجية", English: "Otitis Externa" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Otolaryngology","Family Medicine","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الأذن الخارجية","أذن السباح","التهاب مجرى السمع الظاهر"],
    guessingDifficulty: 2
  },
  {
    id: 'w359',
    word: { Arabic: "مرض مينيير", English: "Meniere's Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Otolaryngology","Neurology"],
    synonyms: ["مرض مينيير","داء مينيير للأذن الداخلية","طنين مع دوار مينييري متكرر"],
    guessingDifficulty: 2
  },
  {
    id: 'w360',
    word: { Arabic: "التهاب التيه الأذني", English: "Labyrinthitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Otolaryngology","Neurology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب التيه الأذني","التهاب الأذن الداخلية الدهليزي","التهاب التيه المسبب للدوخة والدوار"],
    guessingDifficulty: 2
  },
  {
    id: 'w361',
    word: { Arabic: "الخناق للأطفال", English: "Croup" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Otolaryngology","Emergency Medicine","Genetics","Family Medicine"],
    synonyms: ["الخناق للأطفال","التهاب الحنجرة والرغامي للأطفال","السعال النباحي للأطفال"],
    guessingDifficulty: 2
  },
  {
    id: 'w362',
    word: { Arabic: "التهاب الشعيبات الهوائية للأطفال", English: "Bronchiolitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Genetics","Family Medicine"],
    synonyms: ["التهاب الشعيبات الهوائية للأطفال","التهاب الشعيبات الرئوية الفيروسي للأطفال","صوت تزييق الصدر للرضع"],
    guessingDifficulty: 2
  },
  {
    id: 'w363',
    word: { Arabic: "لوح اليمين", English: "Scapula" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology"],
    synonyms: ["لوح اليمين","لوح الكتف","عظمة لوح الكتف","الكتف","كتف","لوحي"],
    guessingDifficulty: 3
  },
  {
    id: 'w364',
    word: { Arabic: "عظمة القص", English: "Sternum" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","General Surgery","Physiology","Pathology","Rheumatology"],
    synonyms: ["عظمة القص","القص","عظم القص","قص"],
    guessingDifficulty: 3
  },
  {
    id: 'w365',
    word: { Arabic: "الرضفة", English: "Patella" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology"],
    synonyms: ["الرضفة","صابونة الركبة","صابونه الركبه","الرضفه","صابونة"],
    guessingDifficulty: 3
  },
  {
    id: 'w366',
    word: { Arabic: "عظمة القصبة", English: "Tibia" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology","Rheumatology","General Surgery"],
    synonyms: ["عظمة القصبة","القصبة","قصبة الساق","القصبة الرجيلية"],
    guessingDifficulty: 3
  },
  {
    id: 'w367',
    word: { Arabic: "عظمة الشظية", English: "Fibula" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology","Rheumatology","General Surgery"],
    synonyms: ["عظمة الشظية","الشظية","شظية","الشظيه"],
    guessingDifficulty: 3
  },
  {
    id: 'w368',
    word: { Arabic: "الفك السفلي", English: "Mandible" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Physiology","Pathology"],
    synonyms: ["الفك السفلي","عظم الفك السفلي","الفك","فك سفلي"],
    guessingDifficulty: 3
  },
  {
    id: 'w369',
    word: { Arabic: "الجمجمة", English: "Skull" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Anatomy","Neurosurgery","Physiology","Pathology"],
    synonyms: ["الجمجمة","جمجمة","عظام الرأس","الجمجمه"],
    guessingDifficulty: 3
  },
  {
    id: 'w370',
    word: { Arabic: "عظمة الكعبرة", English: "Radius" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology","Rheumatology","General Surgery"],
    synonyms: ["عظمة الكعبرة","الكعبرة","كعبرة","الكعبره"],
    guessingDifficulty: 3
  },
  {
    id: 'w371',
    word: { Arabic: "عظمة الزند", English: "Ulna" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology","Rheumatology","General Surgery"],
    synonyms: ["عظمة الزند","الزند","زند","عظم الزند"],
    guessingDifficulty: 3
  },
  {
    id: 'w372',
    word: { Arabic: "عظام مشط اليد", English: "Metacarpals" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics"],
    synonyms: ["عظام مشط اليد","مشط اليد","سنع اليد","المشط اليدوي"],
    guessingDifficulty: 3
  },
  {
    id: 'w373',
    word: { Arabic: "عظام مشط القدم", English: "Metatarsals" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["عظام مشط القدم","مشط القدم","المشط الرجيلي","مشط قدم"],
    guessingDifficulty: 3
  },
  {
    id: 'w374',
    word: { Arabic: "عظمة العصعص", English: "Coccyx" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Orthopedics","Physiology","Pathology","Rheumatology","General Surgery"],
    synonyms: ["عظمة العصعص","العصعص","عصعص","عصعصي"],
    guessingDifficulty: 3
  },
  {
    id: 'w375',
    word: { Arabic: "الاثني عشر", English: "Duodenum" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Gastroenterology"],
    synonyms: ["الاثني عشر","اثني عشر","الاثنا عشر","العفج","الامعاء الدقيقة الاولى"],
    guessingDifficulty: 3
  },
  {
    id: 'w376',
    word: { Arabic: "الحالب", English: "Ureter" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Urology"],
    synonyms: ["الحالب","حالب","مجرى البول العلوي","الحالبين"],
    guessingDifficulty: 3
  },
  {
    id: 'w377',
    word: { Arabic: "القصبة الهوائية", English: "Trachea" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Pulmonology","Otolaryngology","Physiology","Pathology","Emergency Medicine","Anaesthesia","Internal Medicine"],
    synonyms: ["القصبة الهوائية","القصبة","القصبه الهوائيه","قصبه هوائيه"],
    guessingDifficulty: 3
  },
  {
    id: 'w378',
    word: { Arabic: "الحنجرة", English: "Larynx" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Otolaryngology","Physiology","Pathology"],
    synonyms: ["الحنجرة","حنجرة","عضو الصوت","الحنجره","الأحبال الصوتية"],
    guessingDifficulty: 3
  },
  {
    id: 'w379',
    word: { Arabic: "البلعوم", English: "Pharynx" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Otolaryngology","Physiology","Pathology"],
    synonyms: ["البلعوم","بلعوم","حلق","الحلق","البلعوم الفموي"],
    guessingDifficulty: 3
  },
  {
    id: 'w380',
    word: { Arabic: "تحت المهاد", English: "Hypothalamus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Neurology","Endocrinology","Physiology","Pathology"],
    synonyms: ["تحت المهاد","الهيبوثالاموس","منطقة تحت المهاد","تحت مهاد"],
    guessingDifficulty: 3
  },
  {
    id: 'w381',
    word: { Arabic: "الغدة الصنوبرية", English: "Pineal Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Endocrinology","Physiology","Pathology","Internal Medicine","Biochemistry"],
    synonyms: ["الغدة الصنوبرية","الصنوبرية","الغدة الصنوبريه","صنوبرية","ميلاتونين"],
    guessingDifficulty: 3
  },
  {
    id: 'w382',
    word: { Arabic: "الغدة الجار درقية", English: "Parathyroid Gland" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Endocrinology","General Surgery","Physiology","Pathology","Internal Medicine","Biochemistry"],
    synonyms: ["الغدة الجار درقية","الجار درقية","جارات الدرقية","الغدد جارات الدرقية"],
    guessingDifficulty: 3
  },
  {
    id: 'w383',
    word: { Arabic: "الوعاء الناقل", English: "Vas Deferens" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Urology"],
    synonyms: ["الوعاء الناقل","الاسهر","الأسهر","الحبل المنوي","قناة منوية"],
    guessingDifficulty: 3
  },
  {
    id: 'w384',
    word: { Arabic: "الجسم الأصفر", English: "Corpus Luteum" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Anatomy","Physiology","Obstetrics and Gynecology","Endocrinology","Clinical Toxicology","Emergency Medicine","Pharmacology"],
    synonyms: ["الجسم الأصفر","الغدة الصفراء المبيضية","Corpus Luteum"],
    guessingDifficulty: 3
  },
  {
    id: 'w385',
    word: { Arabic: "القناة المرارية", English: "Bile Duct" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Gastroenterology","General Surgery","Physiology","Internal Medicine"],
    synonyms: ["القناة المرارية","قناة الصفراء","قناة مجرى الصفراء","القنوات الصفراوية"],
    guessingDifficulty: 3
  },
  {
    id: 'w386',
    word: { Arabic: "القنوات الهلالية", English: "Semicircular Canals" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Anatomy","Otolaryngology"],
    synonyms: ["القنوات الهلالية","القنوات شبه الدائرية","قنوات التوازن","الأذن الداخلية"],
    guessingDifficulty: 3
  },
  {
    id: 'w387',
    word: { Arabic: "الخلية العصبية", English: "Neuron" },
    level: 'Academic',
    difficulty: 1,
    type: 'Cell',
    subjects: ["Histology","Neurology","Physiology","Pathology","Biochemistry","Anatomy","Internal Medicine","Psychiatry"],
    synonyms: ["الخلية العصبية","خلية عصبية","عصبون","العصبون"],
    guessingDifficulty: 3
  },
  {
    id: 'w388',
    word: { Arabic: "الخلية العظمية", English: "Osteocyte" },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ["Histology","Orthopedics","Physiology","Pathology","Biochemistry","Rheumatology","Anatomy","General Surgery"],
    synonyms: ["الخلية العظمية","خلية عظمية","خلايا العظام","بناء العظم"],
    guessingDifficulty: 3
  },
  {
    id: 'w389',
    word: { Arabic: "الخلية الغضروفية", English: "Chondrocyte" },
    level: 'Academic',
    difficulty: 3,
    type: 'Cell',
    subjects: ["Histology","Orthopedics","Physiology","Pathology","Biochemistry"],
    synonyms: ["الخلية الغضروفية","خلية غضروفية","خلايا الغضاريف"],
    guessingDifficulty: 3
  },
  {
    id: 'w390',
    word: { Arabic: "الخلية الحمراء", English: "Erythrocyte" },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ["Histology","Hematology","Physiology","Pathology","Biochemistry","Internal Medicine"],
    synonyms: ["الخلية الحمراء","خلية دم حمراء","كريات الدم الحمراء","خلايا الدم الحمراء"],
    guessingDifficulty: 3
  },
  {
    id: 'w391',
    word: { Arabic: "الخلية الدهنية", English: "Adipocyte" },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ["Histology","Endocrinology","Physiology","Pathology","Biochemistry"],
    synonyms: ["الخلية الدهنية","خلية دهنية","نسيج دهني","خلايا الدهون"],
    guessingDifficulty: 3
  },
  {
    id: 'w392',
    word: { Arabic: "الحويصلة الهوائية", English: "Alveolus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Anatomy","Pulmonology","Histology"],
    synonyms: ["الحويصلة الهوائية","الحويصلات الهوائية","حويصلة هوائية","الأسناخ الرئوية","تبادل الغازات"],
    guessingDifficulty: 3
  },
  {
    id: 'w393',
    word: { Arabic: "الكبيبة الكلوية", English: "Glomerulus" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Histology","Nephrology","Pathology","Urology","Internal Medicine","Physiology","Anatomy"],
    synonyms: ["الكبيبة الكلوية","الكبيبة","كبيبات الكلى","مرشح الكلية"],
    guessingDifficulty: 3
  },
  {
    id: 'w394',
    word: { Arabic: "شغاف القلب", English: "Endocardium" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","Cardiology","Histology","Physiology","Pathology","Biochemistry","Vascular Surgery","Internal Medicine","Emergency Medicine"],
    synonyms: ["شغاف القلب","الشغاف","بطانة القلب","الطبقة الداخلية للقلب"],
    guessingDifficulty: 3
  },
  {
    id: 'w395',
    word: { Arabic: "غشاء التأمور", English: "Pericardium" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","Cardiology","Histology","Physiology","Pathology","Biochemistry"],
    synonyms: ["غشاء التأمور","التأمور","الغشاء المحيط بالقلب","كيس القلب"],
    guessingDifficulty: 3
  },
  {
    id: 'w396',
    word: { Arabic: "غشاء الجنب", English: "Pleura" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","Pulmonology","Histology","Physiology","Pathology","Biochemistry"],
    synonyms: ["غشاء الجنب","الجنب","الغشاء البلوري","الغشاء المحيط بالرئة"],
    guessingDifficulty: 3
  },
  {
    id: 'w397',
    word: { Arabic: "الغشاء البريتوني", English: "Peritoneum" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","General Surgery","Histology","Physiology","Pathology","Biochemistry"],
    synonyms: ["الغشاء البريتوني","الصفاق","البريتون","غشاء البطن البريتوني"],
    guessingDifficulty: 3
  },
  {
    id: 'w398',
    word: { Arabic: "عضلة الرحم", English: "Myometrium" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","Obstetrics and Gynecology","Histology","Physiology","Pathology","Biochemistry","Orthopedics","Rheumatology","General Surgery"],
    synonyms: ["عضلة الرحم","عضلات الرحم","الطبقة العضلية للرحم"],
    guessingDifficulty: 3
  },
  {
    id: 'w399',
    word: { Arabic: "السحايا", English: "Meninges" },
    level: 'Academic',
    difficulty: 3,
    type: 'Tissue',
    subjects: ["Anatomy","Neurology","Histology","Physiology","Pathology","Biochemistry","Internal Medicine","Psychiatry"],
    synonyms: ["السحايا","أغشية السحايا","الأغشية الدماغية","أم جافية وعنكبوتية وأم حنون"],
    guessingDifficulty: 3
  },
  {
    id: 'w400',
    word: { Arabic: "الحمى الروماتيزمية", English: "Rheumatic Fever" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","Cardiology","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["الحمى الروماتيزمية","حمى روماتيزمية","الروماتيزم المفصلي","الميكروب السبحي"],
    guessingDifficulty: 2
  },
  {
    id: 'w401',
    word: { Arabic: "مرض بهجت", English: "Behcet Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Rheumatology","Ophthalmology","Dermatology","Immunology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["مرض بهجت","متلازمة بهجت","داء بهجت","Behcet Disease","Behcet Syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w402',
    word: { Arabic: "تصلب الجلد", English: "Scleroderma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Rheumatology","Dermatology","Pathology","Histology"],
    synonyms: ["تصلب الجلد","داء تصلب الجلد الجهازى","تصلب الجلد المناعي","سكليروديرما"],
    guessingDifficulty: 3
  },
  {
    id: 'w403',
    word: { Arabic: "التهاب المفاصل النقرس", English: "Gouty Arthritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Rheumatology","Orthopedics","Anatomy","Physiology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب المفاصل النقرس","نقرس المفاصل","النقرس الحاد","داء الملوك في المفاصل"],
    guessingDifficulty: 2
  },
  {
    id: 'w404',
    word: { Arabic: "الغرن الغضروفي", English: "Chondrosarcoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Orthopedics","Pathology","General Surgery"],
    synonyms: ["الغرن الغضروفي","ساركوما الغضروف","سرطان الغضاريف","Chondrosarcoma"],
    guessingDifficulty: 2
  },
  {
    id: 'w405',
    word: { Arabic: "تضخم البروستاتا الحميد", English: "Benign Prostatic Hyperplasia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Urology","Pathology","Internal Medicine","Physiology","Anatomy"],
    synonyms: ["تضخم البروستاتا الحميد","تضخم البروستاتا","البروستاتا الحميد","احتباس البول البروستاتي","BPH"],
    guessingDifficulty: 2
  },
  {
    id: 'w406',
    word: { Arabic: "رتج زنكر", English: "Zenker Diverticulum" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","General Surgery","Otolaryngology","Internal Medicine"],
    synonyms: ["رتج زنكر","رتج بلعومي مريئي","Zenker Diverticulum","Pharyngoesophageal Diverticulum"],
    guessingDifficulty: 2
  },
  {
    id: 'w407',
    word: { Arabic: "متلازمة زولينجر-إليسون", English: "Zollinger-Ellison Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Gastroenterology","Endocrinology","Oncology","General Surgery","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة زولينجر-إليسون","ورم غاستريني","زولينجر إليسون","Zollinger-Ellison Syndrome","Gastrinoma"],
    guessingDifficulty: 2
  },
  {
    id: 'w408',
    word: { Arabic: "سلخ الأبهر", English: "Aortic Dissection" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Emergency Medicine","Internal Medicine"],
    synonyms: ["سلخ الأبهر","تسلخ الأورطي","تمزق جدار الأبهر","Aortic Dissection","Dissecting Aneurysm"],
    guessingDifficulty: 2
  },
  {
    id: 'w409',
    word: { Arabic: "ارتجاع الصمام ثلاثي الشرفات", English: "Tricuspid Regurgitation" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","Emergency Medicine"],
    synonyms: ["ارتجاع الصمام ثلاثي الشرفات","ارتجاع الصمام الثلاثي","ارتجاع ثلاثي الشرف"],
    guessingDifficulty: 2
  },
  {
    id: 'w410',
    word: { Arabic: "التهاب العصب البصري", English: "Optic Neuritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Neurology","Internal Medicine","Anatomy","Physiology","Psychiatry","Infectious Diseases","Microbiology","Parasitology","Pediatrics","General Surgery"],
    synonyms: ["التهاب العصب البصري","اعتلال العصب البصري الالتهابي","Optic Neuritis"],
    guessingDifficulty: 2
  },
  {
    id: 'w411',
    word: { Arabic: "التراخوما", English: "Trachoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Infectious Diseases","Microbiology"],
    synonyms: ["التراخوما","الرمد الحبيبي","داء الحثر","Trachoma","Granular Conjunctivitis"],
    guessingDifficulty: 2
  },
  {
    id: 'w412',
    word: { Arabic: "نقص التروية المساريقية", English: "Mesenteric Ischemia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","Vascular Surgery","General Surgery","Emergency Medicine","Physiology","Anatomy","Internal Medicine"],
    synonyms: ["نقص التروية المساريقية","احتشاء الأمعاء","جلطة الشريان المساريقي","Mesenteric Ischemia","Mesenteric Infarction"],
    guessingDifficulty: 2
  },
  {
    id: 'w413',
    word: { Arabic: "الخناق", English: "Diphtheria" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Infectious Diseases","Pediatrics","Microbiology","Pulmonology"],
    synonyms: ["الخناق","الدفتيريا","داء الدفتيريا","Diphtheria","Corynebacterium diphtheriae"],
    guessingDifficulty: 2
  },
  {
    id: 'w414',
    word: { Arabic: "التليف الكيسي", English: "Cystic Fibrosis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Pediatrics","Genetics","Gastroenterology"],
    synonyms: ["التليف الكيسي","داء اللزوجة المخاطية","Cystic Fibrosis","CF","Mucoviscidosis"],
    guessingDifficulty: 2
  },
  {
    id: 'w415',
    word: { Arabic: "ديكلوفيناك", English: "Diclofenac" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Rheumatology","Orthopedics","Emergency Medicine","Internal Medicine"],
    synonyms: ["ديكلوفيناك","فولتارين","كاتافلام","Diclofenac","Voltaren","Cataflam"],
    guessingDifficulty: 1
  },
  {
    id: 'w416',
    word: { Arabic: "الصائم", English: "Jejunum" },
    level: 'Academic',
    difficulty: 2,
    type: 'Organ',
    subjects: ["Anatomy","Physiology","Gastroenterology","General Surgery","Pathology"],
    synonyms: ["الصائم","المعي الصائم","Jejunum"],
    guessingDifficulty: 3
  },
  {
    id: 'w417',
    word: { Arabic: "داء الجيارديات", English: "Giardiasis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Parasitology","Gastroenterology","Infectious Diseases","Microbiology"],
    synonyms: ["داء الجيارديات","الجيارديا","حمى القندس","Giardiasis","Giardia lamblia","Beaver Fever"],
    guessingDifficulty: 2
  },
  {
    id: 'w418',
    word: { Arabic: "سيفترياكسون", English: "Ceftriaxone" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Pharmacology","Infectious Diseases","Emergency Medicine","Pediatrics","Internal Medicine"],
    synonyms: ["سيفترياكسون","روسيفين","Ceftriaxone","Rocephin"],
    guessingDifficulty: 1
  },
  {
    id: 'w419',
    word: { Arabic: "الاضطراب الاكتئابي الجسيم", English: "Major Depressive Disorder" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Psychiatry","Internal Medicine","Family Medicine"],
    synonyms: ["الاضطراب الاكتئابي الجسيم","الاكتئاب الشديد","الاكتئاب السريري","Major Depressive Disorder","MDD","Clinical Depression"],
    guessingDifficulty: 1
  },
  {
    id: 'w420',
    word: { Arabic: "رتج ميكل", English: "Meckel Diverticulum" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pediatrics","General Surgery","Gastroenterology"],
    synonyms: ["رتج ميكل","رتج ميكل المعوي","Meckel Diverticulum","Meckel's Diverticulum"],
    guessingDifficulty: 2
  },
  {
    id: 'w421',
    word: { Arabic: "مستقبلات الأنسولين", English: "Insulin Receptors" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Biochemistry","Endocrinology","Physiology","Internal Medicine"],
    synonyms: ["مستقبلات الأنسولين","مستقبل الأنسولين","Insulin receptor","مستقبلات سكر"],
    guessingDifficulty: 3
  },
  {
    id: 'w422',
    word: { Arabic: "ألم العصب ثلاثي التوائم", English: "Trigeminal Neuralgia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Internal Medicine","General Surgery","Anatomy","Physiology","Psychiatry"],
    synonyms: ["ألم العصب ثلاثي التوائم","ألم العصب الخامس","العرة المؤلمة","Trigeminal Neuralgia","Tic Douloureux"],
    guessingDifficulty: 2
  },
  {
    id: 'w423',
    word: { Arabic: "البلازميد", English: "Plasmid" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Genetics","Biochemistry","Microbiology"],
    synonyms: ["بلازميد","البلازميد","حلقات دي ان اي","Plasmid"],
    guessingDifficulty: 3
  },
  {
    id: 'w424',
    word: { Arabic: "عصيات كوخ", English: "Mycobacterium tuberculosis" },
    level: 'Academic',
    difficulty: 3,
    type: 'Other',
    subjects: ["Microbiology","Infectious Diseases","Pulmonology","Pathology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["عصيات كوخ","بكتيريا السل","ميكروب السل","درن","Tubercle bacillus","Mycobacterium","بكتيريا الدرن"],
    guessingDifficulty: 3
  },
  {
    id: 'w425',
    word: { Arabic: "متلازمة بروغادا", English: "Brugada Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Genetics","Emergency Medicine","Internal Medicine"],
    synonyms: ["متلازمة بروغادا","اعتلال بروغادا القلبي","Brugada Syndrome","Brugada"],
    guessingDifficulty: 2
  },
  {
    id: 'w426',
    word: { Arabic: "بكتيريا الإشريكية القولونية", English: "Escherichia coli" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Microbiology","Infectious Diseases","Gastroenterology","Urology","General Surgery","Physiology","Anatomy","Internal Medicine","Parasitology","Pediatrics"],
    synonyms: ["القولونية","إي كولاي","الإشريكية القولونية","بكتيريا الأمعاء","E. coli","Escherichia coli","بكتيريا القولون"],
    guessingDifficulty: 2
  },
  {
    id: 'w427',
    word: { Arabic: "متلازمة هورنر", English: "Horner Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Neurology","Ophthalmology","Pulmonology","Anatomy","Pediatrics","Genetics","Internal Medicine"],
    synonyms: ["متلازمة هورنر","شلل العصب الودي العيني","Horner Syndrome","Horner's Syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w428',
    word: { Arabic: "عامل تحفيز مستعمرات الخلايا الحبيبية", English: "G-CSF" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Component',
    subjects: ["Oncology","Hematology","Pharmacology"],
    synonyms: ["نيوبوجين","عامل تحفيز الخلايا الحبيبية","G-CSF","Filgrastim","مستحث الخلايا"],
    guessingDifficulty: 3
  },
  {
    id: 'w429',
    word: { Arabic: "المشرط الجراحي", English: "Scalpel" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["General Surgery","Orthopedics","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["مشرط","المشرط الجراحي","شفرة جراحية","Scalpel","Surgical blade","مبضع"],
    guessingDifficulty: 1
  },
  {
    id: 'w430',
    word: { Arabic: "ملقط الشرايين الجراحي", English: "Hemostatic Forceps" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["General Surgery","Vascular Surgery","Emergency Medicine","Obstetrics and Gynecology","General Medicine","Anaesthesia","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["ملقط كلي","ملقط شرايين","ملقط وقف النزيف","Kelly Forceps","Hemostat","Artery Forceps"],
    guessingDifficulty: 1
  },
  {
    id: 'w431',
    word: { Arabic: "دعامة الشرايين التاجية", English: "Coronary Stent" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Cardiology","Vascular Surgery","Emergency Medicine","Internal Medicine","General Medicine","Anaesthesia","Physiology","Anatomy"],
    synonyms: ["دعامة القلب","دعامة شريانية","دعامة دوائية","Coronary Stent","Stent","شبكة القلب"],
    guessingDifficulty: 2
  },
  {
    id: 'w432',
    word: { Arabic: "برودة الجثة", English: "Algor Mortis" },
    level: 'Academic',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["برودة الجثة","برودة رمية","انخفاض حرارة الميت","Algor mortis","cooling of body","postmortem cooling"],
    guessingDifficulty: 2
  },
  {
    id: 'w433',
    word: { Arabic: "التيبس الرمي", English: "Rigor Mortis" },
    level: 'Academic',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["التيبس الرمي","تيبس رمي","تصلب الجثة","Rigor mortis","cadaveric rigidity","postmortem rigidity"],
    guessingDifficulty: 2
  },
  {
    id: 'w434',
    word: { Arabic: "الرسوب الدموي الرمي", English: "Livor Mortis" },
    level: 'Academic',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["الرسوب الدموي الرمي","الانحدار الرمي","تبقع الجثة الموتي","Livor mortis","postmortem hypostasis","postmortem lividity"],
    guessingDifficulty: 2
  },
  {
    id: 'w435',
    word: { Arabic: "التشنج الكادافيري", English: "Cadaveric Spasm" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine"],
    synonyms: ["التشنج الكادافيري","تشنج الموت المفاجئ","التيبس اللحظي","Cadaveric spasm","instantaneous rigor","cataleptic rigidity"],
    guessingDifficulty: 2
  },
  {
    id: 'w436',
    word: { Arabic: "التعفن الرمي", English: "Putrefaction" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["التعفن الرمي","تعفن الجثة","التحلل الرمي","Putrefaction","postmortem decomposition","cadaveric decay"],
    guessingDifficulty: 3
  },
  {
    id: 'w437',
    word: { Arabic: "التصبن الرمي", English: "Adipocere" },
    level: 'Academic',
    difficulty: 3,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["التصبن الرمي","شحم الجثث","تصبن الجثة","Adipocere","grave wax","saponification"],
    guessingDifficulty: 3
  },
  {
    id: 'w438',
    word: { Arabic: "التحنط الطبيعي", English: "Mummification" },
    level: 'Academic',
    difficulty: 3,
    type: 'Other',
    subjects: ["Forensic Medicine"],
    synonyms: ["التحنط الطبيعي","تحنط الجثة الرمي","جفاف الجثة","Mummification","cadaveric mummification","natural mummification"],
    guessingDifficulty: 3
  },
  {
    id: 'w439',
    word: { Arabic: "الشنق", English: "Hanging" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["الشنق","وفاة بالشنق","شنق جنائي","Hanging","asphyxia by hanging","ligature hanging"],
    guessingDifficulty: 1
  },
  {
    id: 'w440',
    word: { Arabic: "الخنق برباط", English: "Ligature Strangulation" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["الخنق برباط","خنق بالرباط","خنق بحبل","Ligature strangulation","strangulation by ligature"],
    guessingDifficulty: 2
  },
  {
    id: 'w441',
    word: { Arabic: "الخنق اليدوي", English: "Throttling" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["الخنق اليدوي","الخنق باليدين","كتم العنق باليد","Throttling","manual strangulation","choking by hand"],
    guessingDifficulty: 2
  },
  {
    id: 'w442',
    word: { Arabic: "الغرق", English: "Drowning" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Emergency Medicine","Pathology"],
    synonyms: ["الغرق","موت بالغرق","الغرق الرطب","Drowning","submersion asphyxia","wet drowning"],
    guessingDifficulty: 1
  },
  {
    id: 'w443',
    word: { Arabic: "بقع تارديو", English: "Tardieu Spots" },
    level: 'Academic',
    difficulty: 3,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["بقع تارديو","نزوف أسفكسية نقطية","نزوف بتيكية","Tardieu spots","petechial hemorrhages","asphyxial petechiae"],
    guessingDifficulty: 3
  },
  {
    id: 'w444',
    word: { Arabic: "السحجة", English: "Abrasion" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","General Surgery","Pathology"],
    synonyms: ["السحجة","خدش جلدي","كشط جلدي","Abrasion","cutaneous scratch","friction excoriation"],
    guessingDifficulty: 1
  },
  {
    id: 'w445',
    word: { Arabic: "الكدمة", English: "Contusion" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","General Surgery","Hematology","Physiology","Biochemistry","Internal Medicine","Pathology"],
    synonyms: ["الكدمة","كدمة دموية","انصباب دموي جلدي","Contusion","bruise","ecchymosis"],
    guessingDifficulty: 1
  },
  {
    id: 'w446',
    word: { Arabic: "الجرح القطعي", English: "Incised Wound" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","General Surgery","Pathology"],
    synonyms: ["الجرح القطعي","جرح قطعي ذباحي","قطع جراحي","Incised wound","slash wound","cut wound"],
    guessingDifficulty: 1
  },
  {
    id: 'w447',
    word: { Arabic: "الجرح الطعني", English: "Stab Wound" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","General Surgery","Pathology"],
    synonyms: ["الجرح الطعني","طعنة سكين","جرح وخزي طعني","Stab wound","puncture wound","penetrating incised wound"],
    guessingDifficulty: 1
  },
  {
    id: 'w448',
    word: { Arabic: "الجرح الرضي", English: "Lacerated Wound" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","General Surgery","Pathology"],
    synonyms: ["الجرح الرضي","جرح متهتك","تهتك جلدي رضي","Lacerated wound","laceration","tear wound"],
    guessingDifficulty: 1
  },
  {
    id: 'w449',
    word: { Arabic: "جروح الدفاع", English: "Defense Wounds" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["جروح الدفاع","إصابات دفاعية","جروح صد الاعتداء","Defense wounds","defensive injuries"],
    guessingDifficulty: 2
  },
  {
    id: 'w450',
    word: { Arabic: "جروح التردد", English: "Hesitation Marks" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Psychiatry","Pathology"],
    synonyms: ["جروح التردد","علامات التردد الانتحارية","خدوش التردد","Hesitation marks","tentative cuts","hesitation wounds"],
    guessingDifficulty: 2
  },
  {
    id: 'w451',
    word: { Arabic: "فتحة دخول العيار الناري", English: "Firearm Entrance Wound" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["فتحة دخول العيار الناري","مدخل المقذوف الناري","جرح الدخول الناري","Firearm entrance wound","bullet entry wound"],
    guessingDifficulty: 2
  },
  {
    id: 'w452',
    word: { Arabic: "طوق التنميش البارودي", English: "Powder Tattooing" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine"],
    synonyms: ["طوق التنميش البارودي","تنميش البارود","ترميل البارود الجلدي","Powder tattooing","powder stippling","peppering"],
    guessingDifficulty: 3
  },
  {
    id: 'w453',
    word: { Arabic: "نزيف فوق الجافية", English: "Epidural Hematoma" },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Forensic Medicine","Neurosurgery","Emergency Medicine"],
    synonyms: ["نزيف فوق الجافية","ورم دموي إكسترا ديورال","نزف فوق الأم الجافية","Epidural hematoma","extradural hemorrhage","EDH"],
    guessingDifficulty: 1
  },
  {
    id: 'w454',
    word: { Arabic: "نزيف تحت الجافية", English: "Subdural Hematoma" },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Forensic Medicine","Neurosurgery","Emergency Medicine"],
    synonyms: ["نزيف تحت الجافية","ورم دموي سب ديورال","نزف وريدي تحت الجافية","Subdural hematoma","subdural hemorrhage","SDH"],
    guessingDifficulty: 1
  },
  {
    id: 'w455',
    word: { Arabic: "علامة لشتنبرغ البرقية", English: "Lichtenberg Figures" },
    level: 'Both',
    difficulty: 3,
    type: 'Other',
    subjects: ["Forensic Medicine","Dermatology"],
    synonyms: ["علامة لشتنبرغ البرقية","شجرة البرق الجلدية","أزهار الصواعق","Lichtenberg figures","lightning tree","arborescent burn"],
    guessingDifficulty: 3
  },
  {
    id: 'w456',
    word: { Arabic: "متلازمة هز الرضيع", English: "Shaken Baby Syndrome" },
    level: 'Both',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Forensic Medicine","Pediatrics","Neurology","Genetics","Internal Medicine","Family Medicine"],
    synonyms: ["متلازمة هز الرضيع","إصابة الرأس الرضية غير العرضية","عنف الأطفال بالهز","Shaken baby syndrome","abusive head trauma","AHT"],
    guessingDifficulty: 2
  },
  {
    id: 'w457',
    word: { Arabic: "اختبار طفو الرئة", English: "Hydrostatic Lung Test" },
    level: 'Academic',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Forensic Medicine","Pediatrics","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["اختبار طفو الرئة","اختبار الطفو الرئوي","اختبار بريسلاو","Hydrostatic lung test","Breslau docimasia","float test"],
    guessingDifficulty: 3
  },
  {
    id: 'w458',
    word: { Arabic: "بصمات الأصابع", English: "Dactylography" },
    level: 'Both',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Forensic Medicine"],
    synonyms: ["بصمات الأصابع","علم البصمات","الخطوط الحلمية","Dactylography","fingerprinting","dermatoglyphics"],
    guessingDifficulty: 1
  },
  {
    id: 'w459',
    word: { Arabic: "تحديد الجنس من الحوض", English: "Pelvis Sexing" },
    level: 'Academic',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Forensic Medicine","Anatomy"],
    synonyms: ["تحديد الجنس من الحوض","التعرف الجنسي العظمي","تمييز الحوض الجنائي","Pelvis sexing","skeletal sex determination","pelvic sexual dimorphism"],
    guessingDifficulty: 3
  },
  {
    id: 'w460',
    word: { Arabic: "التحام المشاش العظمي", English: "Epiphyseal Union" },
    level: 'Academic',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Forensic Medicine","Anatomy","Radiology","Orthopedics","Rheumatology","Physiology","General Surgery"],
    synonyms: ["التحام المشاش العظمي","تعظم المشاش","الالتحام المشاشي","Epiphyseal union","epiphyseal closure","bone age estimation"],
    guessingDifficulty: 3
  },
  {
    id: 'w461',
    word: { Arabic: "الجروح المصطنعة", English: "Fabricated Wounds" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Psychiatry","Pathology"],
    synonyms: ["الجروح المصطنعة","جروح مفتعلة","إصابات مصطنعة ذاتياً","Fabricated wounds","self-inflicted wounds","fictitious injuries"],
    guessingDifficulty: 2
  },
  {
    id: 'w462',
    word: { Arabic: "إطلاق ناري ملاصق", English: "Contact Bullet Wound" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Radiology","Pathology"],
    synonyms: ["إطلاق ناري ملاصق","طلق ناري تماسي","جرح ناري ملاصق","Contact bullet wound","contact gunshot wound"],
    guessingDifficulty: 3
  },
  {
    id: 'w463',
    word: { Arabic: "فتحة خروج العيار الناري", English: "Firearm Exit Wound" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Pathology"],
    synonyms: ["فتحة خروج العيار الناري","مخرج الرصاصة","جرح الخروج الناري","Firearm exit wound","bullet exit wound"],
    guessingDifficulty: 2
  },
  {
    id: 'w464',
    word: { Arabic: "شخشنة السلاح الناري", English: "Rifling" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine"],
    synonyms: ["شخشنة السلاح الناري","حلزنة ماسورة السلاح","الخطوط الحلزونية","Rifling","barrel rifling","lands and grooves"],
    guessingDifficulty: 3
  },
  {
    id: 'w465',
    word: { Arabic: "قاعدة التسعات للحروق", English: "Rule of Nines" },
    level: 'Both',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Forensic Medicine","General Surgery","Emergency Medicine"],
    synonyms: ["قاعدة التسعات للحروق","قاعدة والاس للتسعات","حساب مساحة الحرق","Rule of Nines","Wallace rule of nines","burn surface area estimation"],
    guessingDifficulty: 1
  },
  {
    id: 'w466',
    word: { Arabic: "حرق جول الكهربائي", English: "Electric Joule Burn" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Emergency Medicine"],
    synonyms: ["حرق جول الكهربائي","علامة الدخول الكهربائية","حرق التيار الكهربائي","Electric Joule burn","electrical entrance mark","Joule burn"],
    guessingDifficulty: 3
  },
  {
    id: 'w467',
    word: { Arabic: "ضربة الشمس", English: "Heat Stroke" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Forensic Medicine","Emergency Medicine","Internal Medicine","Neurology","Anatomy","Physiology","Psychiatry"],
    synonyms: ["ضربة الشمس","فرط الحرارة الخبيث البيئي","ضربة حرارية","Heat stroke","severe hyperthermia","sunstroke"],
    guessingDifficulty: 1
  },
  {
    id: 'w468',
    word: { Arabic: "انخفاض حرارة الجسم المميت", English: "Hypothermia" },
    level: 'Both',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Forensic Medicine","Emergency Medicine","Clinical Toxicology","Pharmacology"],
    synonyms: ["انخفاض حرارة الجسم المميت","التجمد المميت","هبوط الحرارة","Hypothermia","accidental hypothermia","freezing death"],
    guessingDifficulty: 1
  },
  {
    id: 'w469',
    word: { Arabic: "متلازمة الطفل المعنف", English: "Battered Child Syndrome" },
    level: 'Both',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Forensic Medicine","Pediatrics","Genetics","Internal Medicine","Neurology","Family Medicine","Pathology"],
    synonyms: ["متلازمة الطفل المعنف","إيذاء الأطفال البدني","العنف ضد الأطفال","Battered child syndrome","non-accidental physical child abuse","Kempe syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w470',
    word: { Arabic: "كسر الصدمة المصدية", English: "Bumper Fracture" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine","Orthopedics","Rheumatology","Anatomy","Physiology","General Surgery","Hematology","Biochemistry","Internal Medicine"],
    synonyms: ["كسر الصدمة المصدية","كسر صدام السيارة","كسر صدمة المشاة","Bumper fracture","pedestrian bumper injury"],
    guessingDifficulty: 3
  },
  {
    id: 'w471',
    word: { Arabic: "إصابة المصع العنقي", English: "Whiplash Injury" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Orthopedics","Emergency Medicine"],
    synonyms: ["إصابة المصع العنقي","إصابة المصعة","صدمة الرقبة الارتدادية","Whiplash injury","cervical acceleration-deceleration","CAD"],
    guessingDifficulty: 1
  },
  {
    id: 'w472',
    word: { Arabic: "كتم النفس الجنائي", English: "Smothering" },
    level: 'Both',
    difficulty: 2,
    type: 'Other',
    subjects: ["Forensic Medicine"],
    synonyms: ["كتم النفس الجنائي","كتم فتحات التنفس","سد الفم والأنف","Smothering","suffocation by smothering"],
    guessingDifficulty: 2
  },
  {
    id: 'w473',
    word: { Arabic: "الغصص الأسفكسي", English: "Choking" },
    level: 'Both',
    difficulty: 1,
    type: 'Other',
    subjects: ["Forensic Medicine","Emergency Medicine"],
    synonyms: ["الغصص الأسفكسي","الغصص والتشردق","انسداد المجرى التنفسي بجسم غريب","Choking","airway obstruction","cafe coronary"],
    guessingDifficulty: 1
  },
  {
    id: 'w474',
    word: { Arabic: "التسمم بالفوسفات العضوي", English: "Organophosphate Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Internal Medicine"],
    synonyms: ["التسمم بالفوسفات العضوي","تسمم المبيدات الحشرية","تسمم فوسفاتي","Organophosphate poisoning","OP toxicity","cholinergic crisis"],
    guessingDifficulty: 1
  },
  {
    id: 'w475',
    word: { Arabic: "براليدوكسيم", English: "Pralidoxime" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Emergency Medicine","Internal Medicine"],
    synonyms: ["براليدوكسيم","ترياق الأوكسيم","منشط الكولينستراز","Pralidoxime","2-PAM","Protopam"],
    guessingDifficulty: 2
  },
  {
    id: 'w476',
    word: { Arabic: "فوسفيد الألومنيوم", English: "Aluminium Phosphide" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Emergency Medicine","Forensic Medicine","Pharmacology","Internal Medicine"],
    synonyms: ["فوسفيد الألومنيوم","حبة الغلة القاتلة","قرص حفظ الغلال","Aluminium phosphide","grain pill","celphos"],
    guessingDifficulty: 1
  },
  {
    id: 'w477',
    word: { Arabic: "التسمم بالباراكوات", English: "Paraquat Toxicity" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Pulmonology","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالباراكوات","تسمم مبيد الأعشاب","تليف الرئة بالباراكوات","Paraquat toxicity","paraquat poisoning","gramoxone ingestion"],
    guessingDifficulty: 2
  },
  {
    id: 'w478',
    word: { Arabic: "متلازمة الكولينيرجيك", English: "Cholinergic Toxidrome" },
    level: 'Both',
    difficulty: 1,
    type: 'Syndrome',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة الكولينيرجيك","متلازمة فرط الكولين","التسمم الكوليني","Cholinergic toxidrome","cholinergic crisis","acetylcholine toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w479',
    word: { Arabic: "التسمم بالرصاص", English: "Lead Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Pediatrics","Internal Medicine","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالرصاص","التسمم الرصاصي","بلومبيزم","Lead poisoning","plumbism","saturnism"],
    guessingDifficulty: 1
  },
  {
    id: 'w480',
    word: { Arabic: "خط بورتون", English: "Burtonian Line" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Clinical Toxicology","Internal Medicine"],
    synonyms: ["خط بورتون","خط الرصاص اللثوي","الخط الرصاصي الأزرق","Burtonian line","Burton's line","lead line"],
    guessingDifficulty: 3
  },
  {
    id: 'w481',
    word: { Arabic: "التسمم بالزرنيخ", English: "Arsenic Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Forensic Medicine","Internal Medicine","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالزرنيخ","تسمم الزرنيخ الجنائي","سم الملوك","Arsenic poisoning","arsenicosis","arsenical toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w482',
    word: { Arabic: "خطوط ميس", English: "Mee's Lines" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Clinical Toxicology","Dermatology","Forensic Medicine"],
    synonyms: ["خطوط ميس","خطوط الأظافر البيضاء","خطوط الزرنيخ الظفرية","Mee's lines","Aldrich-Mees lines","leukonychia striata"],
    guessingDifficulty: 3
  },
  {
    id: 'w483',
    word: { Arabic: "التسمم بالزئبق", English: "Mercury Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Neurology","Pediatrics","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالزئبق","داء ميناماتا","مرض الزئبق","Mercury poisoning","Minamata disease","mercurialism"],
    guessingDifficulty: 1
  },
  {
    id: 'w484',
    word: { Arabic: "التسمم الحاد بالحديد", English: "Acute Iron Toxicity" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Pediatrics","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم الحاد بالحديد","تسمم حبوب الحديد","فرط الحديد الحاد","Acute iron toxicity","iron poisoning","pediatric iron overdose"],
    guessingDifficulty: 2
  },
  {
    id: 'w485',
    word: { Arabic: "ديمركابرول", English: "Dimercaprol" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Internal Medicine"],
    synonyms: ["ديمركابرول","ترياق بال","مضاد اللويزيت البريطاني","Dimercaprol","British Anti-Lewisite","BAL"],
    guessingDifficulty: 2
  },
  {
    id: 'w486',
    word: { Arabic: "ديفيروكسامين", English: "Deferoxamine" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Hematology","Pharmacology","Internal Medicine"],
    synonyms: ["ديفيروكسامين","ترياق الحديد","خالب الحديد الوريدي","Deferoxamine","Desferal","DFO"],
    guessingDifficulty: 2
  },
  {
    id: 'w487',
    word: { Arabic: "بنسيلامين", English: "Penicillamine" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Gastroenterology","Internal Medicine"],
    synonyms: ["بنسيلامين","خالب النحاس الفموي","دي-بنسيلامين","Penicillamine","D-penicillamine","Cuprimine"],
    guessingDifficulty: 2
  },
  {
    id: 'w488',
    word: { Arabic: "التسمم بالميثانول", English: "Methanol Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Ophthalmology","Pharmacology"],
    synonyms: ["التسمم بالميثانول","تسمم الكحول الميثيلي","تسمم كحول الخشب","Methanol poisoning","wood alcohol toxicity","methyl alcohol poisoning"],
    guessingDifficulty: 1
  },
  {
    id: 'w489',
    word: { Arabic: "فومبيزول", English: "Fomepizole" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Emergency Medicine","Internal Medicine"],
    synonyms: ["فومبيزول","مثبط كحول ديهايدروجيناز","ترياق الميثانول","Fomepizole","Antizol","4-methylpyrazole"],
    guessingDifficulty: 2
  },
  {
    id: 'w490',
    word: { Arabic: "التسمم بإيثيلين جليكول", English: "Ethylene Glycol Poisoning" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Nephrology","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بإيثيلين جليكول","تسمم مانع التجمد","تسمم مبرد السيارات","Ethylene glycol poisoning","antifreeze toxicity"],
    guessingDifficulty: 2
  },
  {
    id: 'w491',
    word: { Arabic: "التسمم بالكيروسين", English: "Kerosene Ingestion" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Pediatrics","Emergency Medicine","Pulmonology","Pharmacology"],
    synonyms: ["التسمم بالكيروسين","تسمم الجاز","تسمم الهيدروكربونات","Kerosene ingestion","hydrocarbon poisoning","chemical pneumonitis"],
    guessingDifficulty: 1
  },
  {
    id: 'w492',
    word: { Arabic: "حمض الفينيك", English: "Carbolic Acid" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Dermatology","Forensic Medicine","Pharmacology","Internal Medicine"],
    synonyms: ["حمض الفينيك","الفينول","حمض الكربوليك","Carbolic acid","phenol","phenic acid"],
    guessingDifficulty: 2
  },
  {
    id: 'w493',
    word: { Arabic: "الصودا الكاوية", English: "Caustic Soda" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Emergency Medicine","General Surgery","Pharmacology","Internal Medicine"],
    synonyms: ["الصودا الكاوية","هيدروكسيد الصوديوم","القلويات الكاوية","Caustic soda","sodium hydroxide","lye ingestion"],
    guessingDifficulty: 1
  },
  {
    id: 'w494',
    word: { Arabic: "حمض الأوكزاليك", English: "Oxalic Acid" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Nephrology","Pharmacology","Internal Medicine"],
    synonyms: ["حمض الأوكزاليك","حمض الحماض","أوكزالات","Oxalic acid","dicarboxylic acid","wood bleach"],
    guessingDifficulty: 2
  },
  {
    id: 'w495',
    word: { Arabic: "التسمم بأول أكسيد الكربون", English: "Carbon Monoxide Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Forensic Medicine","Pulmonology","Anatomy","Physiology","Anaesthesia","Internal Medicine","Pharmacology"],
    synonyms: ["التسمم بأول أكسيد الكربون","القاتل الصامت","تسمم غاز السخان","Carbon monoxide poisoning","CO toxicity","silent killer"],
    guessingDifficulty: 1
  },
  {
    id: 'w496',
    word: { Arabic: "كربوكسي هيموجلوبين", English: "Carboxyhemoglobin" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Clinical Toxicology","Biochemistry","Hematology","Pulmonology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine"],
    synonyms: ["كربوكسي هيموجلوبين","خضاب الدم الكربوني","مركب COHb","Carboxyhemoglobin","COHb"],
    guessingDifficulty: 3
  },
  {
    id: 'w497',
    word: { Arabic: "الأكسجين عالي الضغط", English: "Hyperbaric Oxygen Therapy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Clinical Toxicology","Emergency Medicine"],
    synonyms: ["الأكسجين عالي الضغط","العلاج بالأكسجين المضغوط","كبسولة الأكسجين","Hyperbaric oxygen therapy","HBOT","hyperbaric chamber"],
    guessingDifficulty: 2
  },
  {
    id: 'w498',
    word: { Arabic: "التسمم بالسيانيد", English: "Cyanide Poisoning" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Forensic Medicine","Pharmacology"],
    synonyms: ["التسمم بالسيانيد","تسمم حمض الهيدروسيانيك","سم اللوز المر","Cyanide poisoning","cyanide toxicity","bitter almond poison"],
    guessingDifficulty: 1
  },
  {
    id: 'w499',
    word: { Arabic: "هيدروكسوكوبالامين", English: "Hydroxocobalamin" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Emergency Medicine","Internal Medicine"],
    synonyms: ["هيدروكسوكوبالامين","ترياق السيانيد الوريدي","مقدمة فيتامين ب12","Hydroxocobalamin","Cyanokit","vitamin B12a"],
    guessingDifficulty: 2
  },
  {
    id: 'w500',
    word: { Arabic: "كبريتيد الهيدروجين", English: "Hydrogen Sulfide" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Forensic Medicine"],
    synonyms: ["كبريتيد الهيدروجين","غاز البيض الفاسد","غاز المجاري السام","Hydrogen sulfide","sewer gas","H2S poisoning"],
    guessingDifficulty: 2
  },
  {
    id: 'w501',
    word: { Arabic: "التسمم بالأفيونات", English: "Opioid Overdose" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Anaesthesia","Pharmacology"],
    synonyms: ["التسمم بالأفيونات","جرعة زائدة من الأفيون","التسمم بالمورفين والهيروين","Opioid overdose","opioid toxidrome","narcotic toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w502',
    word: { Arabic: "نالوكسون", English: "Naloxone" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Internal Medicine"],
    synonyms: ["نالوكسون","ترياق الأفيونات","مضاد الناركوتيك","Naloxone","Narcan"],
    guessingDifficulty: 1
  },
  {
    id: 'w503',
    word: { Arabic: "التسمم بالبنزوديازيبينات", English: "Benzodiazepine Toxicity" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Psychiatry","Pharmacology"],
    synonyms: ["التسمم بالبنزوديازيبينات","تسمم المهدئات","جرعة زائدة من فاليوم","Benzodiazepine toxicity","BZD overdose","sedative hypnotic toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w504',
    word: { Arabic: "فلومازينيل", English: "Flumazenil" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Emergency Medicine","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["فلومازينيل","ترياق البنزوديازيبين","مضاد المهدئات","Flumazenil","Romazicon"],
    guessingDifficulty: 2
  },
  {
    id: 'w505',
    word: { Arabic: "التسمم بمضادات الاكتئاب ثلاثية الحلقات", English: "TCA Toxicity" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Cardiology","Emergency Medicine","Psychiatry","Pharmacology"],
    synonyms: ["التسمم بمضادات الاكتئاب ثلاثية الحلقات","تسمم أدوية الاكتئاب القديمة","تسمم أميتريبتيلين","TCA toxicity","tricyclic antidepressant overdose","amitriptyline toxicity"],
    guessingDifficulty: 2
  },
  {
    id: 'w506',
    word: { Arabic: "بيكربونات الصوديوم", English: "Sodium Bicarbonate" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Cardiology","Emergency Medicine","Nephrology","Pharmacology","Internal Medicine","Pulmonology","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["بيكربونات الصوديوم","بيكربونات وريدية","صوديوم بايكارب","Sodium bicarbonate","NaHCO3","hypertonic bicarbonate"],
    guessingDifficulty: 1
  },
  {
    id: 'w507',
    word: { Arabic: "التسمم بالليثيوم", English: "Lithium Toxicity" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Psychiatry","Nephrology","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالليثيوم","تسمم مثبت المزاج","فرط الليثيوم","Lithium toxicity","lithium overdose","hyperlithiemia"],
    guessingDifficulty: 2
  },
  {
    id: 'w508',
    word: { Arabic: "التسمم بالساليسيلات", English: "Salicylate Toxicity" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Internal Medicine","Pharmacology"],
    synonyms: ["التسمم بالساليسيلات","تسمم الأسبرين","فرط الساليسيلات","Salicylate toxicity","aspirin overdose","salicylism"],
    guessingDifficulty: 1
  },
  {
    id: 'w509',
    word: { Arabic: "إدرار البول القلوي", English: "Alkaline Diuresis" },
    level: 'Both',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Clinical Toxicology","Nephrology","Emergency Medicine","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["إدرار البول القلوي","قلوية البول القسرية","حبس الأيونات البولية","Alkaline diuresis","forced alkaline diuresis","urine alkalinization"],
    guessingDifficulty: 2
  },
  {
    id: 'w510',
    word: { Arabic: "التسمم الكبدي بالباراسيتامول", English: "Paracetamol Hepatotoxicity" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Gastroenterology","Internal Medicine","Emergency Medicine","General Surgery","Physiology","Anatomy","Pharmacology"],
    synonyms: ["التسمم الكبدي بالباراسيتامول","تسمم البانادول","التسمم بالأسيتامينوفين","Paracetamol hepatotoxicity","acetaminophen overdose","APAP toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w511',
    word: { Arabic: "إن-أسيتيل سيستئين", English: "N-Acetylcysteine" },
    level: 'Both',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Gastroenterology","Emergency Medicine","Internal Medicine"],
    synonyms: ["إن-أسيتيل سيستئين","ترياق الباراسيتامول","دواء إن إيه سي","N-Acetylcysteine","NAC","Mucomyst"],
    guessingDifficulty: 1
  },
  {
    id: 'w512',
    word: { Arabic: "مخطط روماك-ماثيو", English: "Rumack-Matthew Nomogram" },
    level: 'Academic',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Clinical Toxicology","Emergency Medicine","Gastroenterology","Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["مخطط روماك-ماثيو","منحنى الباراسيتامول","نوموجرام التسمم الكبدي","Rumack-Matthew nomogram","acetaminophen toxicity nomogram"],
    guessingDifficulty: 3
  },
  {
    id: 'w513',
    word: { Arabic: "نبات ست الحسن", English: "Atropa Belladonna" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Pharmacology"],
    synonyms: ["نبات ست الحسن","البلادونا","التوت القاتل","Atropa belladonna","deadly nightshade","belladonna poisoning"],
    guessingDifficulty: 2
  },
  {
    id: 'w514',
    word: { Arabic: "متلازمة مضادات الكولين", English: "Anticholinergic Toxidrome" },
    level: 'Both',
    difficulty: 1,
    type: 'Syndrome',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة مضادات الكولين","متلازمة حصر الكولين","متلازمة الأتروبين","Anticholinergic toxidrome","anticholinergic crisis","atropine toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w515',
    word: { Arabic: "فوسوستيجمين", English: "Physostigmine" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Clinical Toxicology","Pharmacology","Emergency Medicine","Internal Medicine"],
    synonyms: ["فوسوستيجمين","ترياق مضادات الكولين","إيزيرين","Physostigmine","Antilirium","eserine"],
    guessingDifficulty: 2
  },
  {
    id: 'w516',
    word: { Arabic: "التسمم بالاستركنين", English: "Strychnine Poisoning" },
    level: 'Both',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Neurology","Forensic Medicine","Emergency Medicine","Pharmacology"],
    synonyms: ["التسمم بالاستركنين","تسمم سم الجرذان القاتل","سم الاستركنين","Strychnine poisoning","strychnine toxicity"],
    guessingDifficulty: 2
  },
  {
    id: 'w517',
    word: { Arabic: "التهاب الملتحمة", English: "Conjunctivitis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Ophthalmology","Infectious Diseases","Pediatrics","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["التهاب الملتحمة","الرمد","احمرار العين المعدي","العين الوردية","pink eye"],
    guessingDifficulty: 1
  },
  {
    id: 'w518',
    word: { Arabic: "اللابؤرية", English: "Astigmatism" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Ophthalmology","Physiology"],
    synonyms: ["اللابؤرية","الاستجماتيزم","انحراف النظر","حرج البصر"],
    guessingDifficulty: 3
  },
  {
    id: 'w519',
    word: { Arabic: "الحول", English: "Strabismus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Neurology","Pediatrics"],
    synonyms: ["الحول","انحراف العينين","العين المتصالبة","crossed eyes","squint"],
    guessingDifficulty: 2
  },
  {
    id: 'w520',
    word: { Arabic: "قرحة القرنية", English: "Corneal Ulcer" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Ophthalmology","Infectious Diseases","Emergency Medicine"],
    synonyms: ["قرحة القرنية","تقرح القرنية","Corneal Ulcer"],
    guessingDifficulty: 3
  },
  {
    id: 'w521',
    word: { Arabic: "التهاب القزحية", English: "Uveitis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Ophthalmology","Immunology","Rheumatology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب القزحية","التهاب العنبية","التهاب باطن العين المناعي","Uveitis"],
    guessingDifficulty: 3
  },
  {
    id: 'w522',
    word: { Arabic: "قصر النظر", English: "Myopia" },
    level: 'Academic',
    difficulty: 1,
    type: 'Other',
    subjects: ["Ophthalmology","Physiology","Orthopedics","Rheumatology","Anatomy","General Surgery"],
    synonyms: ["قصر النظر","حسر النظر","قصر البصر","Nearsightedness"],
    guessingDifficulty: 2
  },
  {
    id: 'w523',
    word: { Arabic: "طول النظر", English: "Hyperopia" },
    level: 'Academic',
    difficulty: 1,
    type: 'Other',
    subjects: ["Ophthalmology","Physiology"],
    synonyms: ["طول النظر","مد البصر","بعد النظر","Farsightedness"],
    guessingDifficulty: 2
  },
  {
    id: 'w524',
    word: { Arabic: "طول النظر الشيخوخي", English: "Presbyopia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Ophthalmology","Physiology","General Medicine"],
    synonyms: ["طول النظر الشيخوخي","قصر البصر الشيخوخي","مد البصر الكبري","Presbyopia"],
    guessingDifficulty: 2
  },
  {
    id: 'w525',
    word: { Arabic: "التهاب الجفن", English: "Blepharitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Dermatology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب الجفن","التهاب حافة الجفن","Blepharitis"],
    guessingDifficulty: 2
  },
  {
    id: 'w526',
    word: { Arabic: "القرنية", English: "Cornea" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy","Physiology"],
    synonyms: ["القرنية","قرنية العين","نافذة العين الأمامية","Cornea"],
    guessingDifficulty: 3
  },
  {
    id: 'w527',
    word: { Arabic: "الشبكية", English: "Retina" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy","Physiology","Neurology","General Surgery"],
    synonyms: ["الشبكية","شبكية العين","الطبقة الحساسة للضوء","Retina"],
    guessingDifficulty: 3
  },
  {
    id: 'w528',
    word: { Arabic: "العنبية", English: "Iris" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy"],
    synonyms: ["العنبية","قزحية العين","الحدقة والملونة","Iris"],
    guessingDifficulty: 3
  },
  {
    id: 'w529',
    word: { Arabic: "السائل الزجاجي", English: "Vitreous Humor" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy"],
    synonyms: ["السائل الزجاجي","الجسم الزجاجي","الخلط الزجاجي","Vitreous Humor","Vitreous body"],
    guessingDifficulty: 3
  },
  {
    id: 'w530',
    word: { Arabic: "الصلبة", English: "Sclera" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy"],
    synonyms: ["الصلبة","صلبة العين","بياض العين","Sclera"],
    guessingDifficulty: 3
  },
  {
    id: 'w531',
    word: { Arabic: "الملتحمة", English: "Conjunctiva" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy"],
    synonyms: ["الملتحمة","ملتحمة العين","غشاء العين المخاطي","Conjunctiva"],
    guessingDifficulty: 3
  },
  {
    id: 'w532',
    word: { Arabic: "العدسة", English: "Lens" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy","Physiology"],
    synonyms: ["العدسة","عدسة العين","العدسة البلورية","Crystalline Lens"],
    guessingDifficulty: 3
  },
  {
    id: 'w533',
    word: { Arabic: "البقعة المركزية", English: "Macula" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy"],
    synonyms: ["البقعة المركزية","اللطخة الصفراء","الماكيولا","Macula lutea","Fovea"],
    guessingDifficulty: 3
  },
  {
    id: 'w534',
    word: { Arabic: "القرص البصري", English: "Optic Disc" },
    level: 'Academic',
    difficulty: 3,
    type: 'Component',
    subjects: ["Ophthalmology","Anatomy","Neurology","General Surgery"],
    synonyms: ["القرص البصري","حليمة العصب البصري","رأس العصب البصري","Optic Disc","Optic nerve head"],
    guessingDifficulty: 3
  },
  {
    id: 'w535',
    word: { Arabic: "عمى الألوان", English: "Color Blindness" },
    level: 'Academic',
    difficulty: 2,
    type: 'Other',
    subjects: ["Ophthalmology","Genetics"],
    synonyms: ["عمى الألوان","عجز تمييز الألوان","الدلتونية","Color Vision Deficiency","Daltonism"],
    guessingDifficulty: 3
  },
  {
    id: 'w536',
    word: { Arabic: "الرؤية المزدوجة", English: "Diplopia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Ophthalmology","Neurology","Emergency Medicine"],
    synonyms: ["الرؤية المزدوجة","ازدواج الرؤية","ازدواج البصر","Diplopia","Double Vision"],
    guessingDifficulty: 2
  },
  {
    id: 'w537',
    word: { Arabic: "العمى الليلي", English: "Nyctalopia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Other',
    subjects: ["Ophthalmology","Biochemistry"],
    synonyms: ["العمى الليلي","العشى الليلي","صعوبة الرؤية في الظلام","Nyctalopia","Night Blindness"],
    guessingDifficulty: 3
  },
  {
    id: 'w538',
    word: { Arabic: "الوميض الضوئي", English: "Photopsia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Other',
    subjects: ["Ophthalmology","Neurology"],
    synonyms: ["الوميض الضوئي","فلاشات العين","رؤية ومضات مضيئة","بريق العين","Photopsia"],
    guessingDifficulty: 3
  },
  {
    id: 'w539',
    word: { Arabic: "التهاب القرنية", English: "Keratitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب القرنية","عدوى القرنية","Keratitis"],
    guessingDifficulty: 2
  },
  {
    id: 'w540',
    word: { Arabic: "احتقان الملتحمة", English: "Conjunctival Hyperemia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Ophthalmology"],
    synonyms: ["احتقان الملتحمة","احمرار العين","حقن الملتحمة","Conjunctival Hyperemia","Bloodshot eyes"],
    guessingDifficulty: 2
  },
  {
    id: 'w541',
    word: { Arabic: "قطرات العين", English: "Eye Drops" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Ophthalmology","Pharmacology","Internal Medicine","Anatomy","General Surgery"],
    synonyms: ["قطرات العين","المحاليل العينية الموضعية","قطرة عينية","Ophthalmic Solutions","Eye Drops"],
    guessingDifficulty: 1
  },
  {
    id: 'w542',
    word: { Arabic: "الكيس الدهني الجفني", English: "Chalazion" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology"],
    synonyms: ["الكيس الدهني الجفني","البردة","الكيس الدهني بالعين","شحيمة الجفن","Chalazion"],
    guessingDifficulty: 2
  },
  {
    id: 'w543',
    word: { Arabic: "ظفرة العين", English: "Pterygium" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Anatomy","General Surgery"],
    synonyms: ["ظفرة العين","الظفرة","اللحمية في العين","Pterygium","surfers eye"],
    guessingDifficulty: 2
  },
  {
    id: 'w544',
    word: { Arabic: "القرنية المخروطية", English: "Keratoconus" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Ophthalmology","Genetics","Neurology","Anatomy","Physiology","Internal Medicine","Psychiatry"],
    synonyms: ["القرنية المخروطية","تخروط القرنية","Keratoconus"],
    guessingDifficulty: 3
  },
  {
    id: 'w545',
    word: { Arabic: "قياس ضغط العين", English: "Tonometry" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Ophthalmology","Anatomy","General Surgery"],
    synonyms: ["قياس ضغط العين","مقياس التوتر العيني","فحص ضغط العين","Tonometry"],
    guessingDifficulty: 2
  },
  {
    id: 'w546',
    word: { Arabic: "فحص قاع العين", English: "Fundoscopy" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Ophthalmology","Internal Medicine","Neurology","Anatomy","General Surgery"],
    synonyms: ["فحص قاع العين","تنظير قاع العين","تنظير الشبكية","Fundoscopy","Ophthalmoscopy"],
    guessingDifficulty: 1
  },
  {
    id: 'w547',
    word: { Arabic: "المصباح الشقي", English: "Slit Lamp" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Ophthalmology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["المصباح الشقي","المجهر الشقي","جهاز فحص العين الشقي","Slit Lamp","Biomicroscope"],
    guessingDifficulty: 2
  },
  {
    id: 'w548',
    word: { Arabic: "اعتلال الشبكية الخداجي", English: "Retinopathy of Prematurity" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Ophthalmology","Pediatrics","Anatomy","General Surgery"],
    synonyms: ["اعتلال الشبكية الخداجي","اعتلال شبكية الخدج","Retinopathy of Prematurity","ROP"],
    guessingDifficulty: 2
  },
  {
    id: 'w549',
    word: { Arabic: "الأشعة المقطعية", English: "Computed Tomography" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Radiology","Emergency Medicine","Internal Medicine","Neurology","General Medicine","Anaesthesia"],
    synonyms: ["الأشعة المقطعية","الأشعة المحوسبة","المفراس الحلزوني","CT scan","CAT scan"],
    guessingDifficulty: 2
  },
  {
    id: 'w550',
    word: { Arabic: "الرنين المغناطيسي", English: "Magnetic Resonance Imaging" },
    level: 'Both',
    difficulty: 3,
    type: 'Equipment',
    subjects: ["Radiology","Neurology","Orthopedics","Anatomy","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["الرنين المغناطيسي","التصوير بالرنين المغناطيسي","جهاز الرنين","MRI","NMR"],
    guessingDifficulty: 3
  },
  {
    id: 'w551',
    word: { Arabic: "الموجات فوق الصوتية", English: "Ultrasound" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["Radiology","Obstetrics and Gynecology","Cardiology","General Medicine","Emergency Medicine","Anaesthesia"],
    synonyms: ["الموجات فوق الصوتية","السونار","التصوير الصوتي","Ultrasound","Sonography"],
    guessingDifficulty: 1
  },
  {
    id: 'w552',
    word: { Arabic: "التصوير التألقي", English: "Fluoroscopy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Radiology","Gastroenterology","General Surgery","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التصوير التألقي","التنظير التألقي","الأشعة السينية المستمرة","Fluoroscopy"],
    guessingDifficulty: 2
  },
  {
    id: 'w553',
    word: { Arabic: "مواد التباين", English: "Contrast Media" },
    level: 'Both',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Radiology","Pharmacology","Internal Medicine"],
    synonyms: ["مواد التباين","صبغة الأشعة","عوامل التباين الإشعاعي","الصبغة الظليلة","Contrast Media","Contrast Agents"],
    guessingDifficulty: 2
  },
  {
    id: 'w554',
    word: { Arabic: "التصوير البوزيتروني", English: "PET Scan" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Equipment',
    subjects: ["Radiology","Oncology","Physiology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["التصوير البوزيتروني","التصوير المقطعي بالإصدار البوزيتروني","فحص بي إي تي","PET Scan"],
    guessingDifficulty: 3
  },
  {
    id: 'w555',
    word: { Arabic: "تصوير الثدي الشعاعي", English: "Mammography" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Radiology","Oncology","Obstetrics and Gynecology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["تصوير الثدي الشعاعي","الماموجرام","أشعة الثدي","الماموجرافي","Mammography","Mammogram"],
    guessingDifficulty: 2
  },
  {
    id: 'w556',
    word: { Arabic: "تصوير الأوعية", English: "Angiography" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Technique',
    subjects: ["Radiology","Vascular Surgery","Cardiology"],
    synonyms: ["تصوير الأوعية","القسطرة الوعائية الظليلة","تصوير الشرايين","Angiography","Arteriography"],
    guessingDifficulty: 3
  },
  {
    id: 'w557',
    word: { Arabic: "الأشعة السينية", English: "X-Ray" },
    level: 'Academic',
    difficulty: 1,
    type: 'Equipment',
    subjects: ["Radiology","Anatomy","Orthopedics","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["الأشعة السينية","أشعة رونتجن","أشعة إكس","X-Ray","Radiography"],
    guessingDifficulty: 2
  },
  {
    id: 'w558',
    word: { Arabic: "تصوير الأوعية المقطعي", English: "CT Angiography" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Technique',
    subjects: ["Radiology","Cardiology","Vascular Surgery","Emergency Medicine"],
    synonyms: ["تصوير الأوعية المقطعي","الأشعة المقطعية للأوعية","قسطرة مقطعية","CT Angiography","CTA"],
    guessingDifficulty: 3
  },
  {
    id: 'w559',
    word: { Arabic: "تخطيط صدى القلب", English: "Echocardiography" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Radiology","Cardiology","Physiology","Internal Medicine","Emergency Medicine","General Medicine","Anaesthesia","Vascular Surgery","Anatomy"],
    synonyms: ["تخطيط صدى القلب","إيكو القلب","سونار القلب","Echocardiography","Echo"],
    guessingDifficulty: 2
  },
  {
    id: 'w560',
    word: { Arabic: "الدوبلر الصوتي", English: "Doppler Ultrasound" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Radiology","Vascular Surgery","Cardiology"],
    synonyms: ["الدوبلر الصوتي","سونار دوبلر","أشعة الدوبلر الملون","Doppler Ultrasound","Doppler Sonography"],
    guessingDifficulty: 2
  },
  {
    id: 'w561',
    word: { Arabic: "فحص كثافة العظام", English: "DEXA Scan" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Radiology","Rheumatology","Orthopedics","Endocrinology","Emergency Medicine","General Medicine","Anaesthesia"],
    synonyms: ["فحص كثافة العظام","مقياس كثافة العظام ديكسا","أشعة الديكسا","DEXA Scan","DXA","Bone Densitometry"],
    guessingDifficulty: 2
  },
  {
    id: 'w562',
    word: { Arabic: "بلع الباريوم", English: "Barium Swallow" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Radiology","Gastroenterology","General Surgery"],
    synonyms: ["بلع الباريوم","أشعة الباريوم للمريء","وجبة الباريوم","Barium Swallow","Barium Meal","Esophagogram"],
    guessingDifficulty: 2
  },
  {
    id: 'w563',
    word: { Arabic: "الأشعة التداخلية", English: "Interventional Radiology" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Technique',
    subjects: ["Radiology","General Surgery","Oncology","Vascular Surgery"],
    synonyms: ["الأشعة التداخلية","الجراحة الإشعاعية التداخلية","الأشعة العلاجية المصوبة","Interventional Radiology","IR"],
    guessingDifficulty: 3
  },
  {
    id: 'w564',
    word: { Arabic: "حب الشباب", English: "Acne Vulgaris" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Endocrinology","Pathology","Histology"],
    synonyms: ["حب الشباب","العُد الشائع","بثور الوجه","حبوب الشباب","Acne Vulgaris","Pimples"],
    guessingDifficulty: 1
  },
  {
    id: 'w565',
    word: { Arabic: "سرطان الخلايا القاعدية", English: "Basal Cell Carcinoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Oncology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["سرطان الخلايا القاعدية","كارسينوما الخلايا القاعدية","الورم القاعدي الخبيث","Basal Cell Carcinoma","BCC"],
    guessingDifficulty: 2
  },
  {
    id: 'w566',
    word: { Arabic: "الالتهاب الجلدي الدهني", English: "Seborrheic Dermatitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Pediatrics","Pathology","Histology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["الالتهاب الجلدي الدهني","الأكزيما الدهنية","قشرة الرأس المرضية","طاقية المهد","Seborrheic Dermatitis","Cradle cap"],
    guessingDifficulty: 2
  },
  {
    id: 'w567',
    word: { Arabic: "التهاب اللفافة الناخر", English: "Necrotizing Fasciitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Emergency Medicine","General Surgery","Dermatology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics"],
    synonyms: ["التهاب اللفافة الناخر","بكتيريا آكلة اللحوم","الغرغرينا الغازية","Necrotizing Fasciitis","Flesh-eating Disease"],
    guessingDifficulty: 2
  },
  {
    id: 'w568',
    word: { Arabic: "الشرى", English: "Urticaria" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Immunology","Emergency Medicine"],
    synonyms: ["الشرى","الأرتيكاريا","حكة الحساسية","الدرنات الجلدية","Urticaria","Hives"],
    guessingDifficulty: 1
  },
  {
    id: 'w569',
    word: { Arabic: "الحمامى متعددة الأشكال", English: "Erythema Multiforme" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Immunology","Infectious Diseases"],
    synonyms: ["الحمامى متعددة الأشكال","الحمامى عديدة الأشكال","Erythema Multiforme","EM"],
    guessingDifficulty: 2
  },
  {
    id: 'w570',
    word: { Arabic: "شبيه الفقاع الفقاعي", English: "Bullous Pemphigoid" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Dermatology","Immunology"],
    synonyms: ["شبيه الفقاع الفقاعي","الفقاعاني الفقاعي","البمفيجويد","Bullous Pemphigoid"],
    guessingDifficulty: 3
  },
  {
    id: 'w571',
    word: { Arabic: "التهاب الجلد التماسي", English: "Contact Dermatitis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Immunology","Pathology","Histology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine","Pediatrics","Radiology"],
    synonyms: ["التهاب الجلد التماسي","أكزيما التماس","الأكزيما التلامسية","Contact Dermatitis"],
    guessingDifficulty: 1
  },
  {
    id: 'w572',
    word: { Arabic: "سرطان الخلايا الحرشفية الجلدي", English: "Squamous Cell Carcinoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Dermatology","Oncology","Pathology","Histology","Hematology","Internal Medicine"],
    synonyms: ["سرطان الخلايا الحرشفية الجلدي","كارسينوما حرشفية الخلايا","SCC","Cutaneous Squamous Cell Carcinoma"],
    guessingDifficulty: 2
  },
  {
    id: 'w573',
    word: { Arabic: "الحزام الناري", English: "Herpes Zoster" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Dermatology","Neurology","Infectious Diseases"],
    synonyms: ["الحزام الناري","داء المنطقة","القوباء المنطقية","Herpes Zoster","Shingles"],
    guessingDifficulty: 1
  },
  {
    id: 'w574',
    word: { Arabic: "الخلية اللمفاوية التائية", English: "T Lymphocyte" },
    level: 'Academic',
    difficulty: 1,
    type: 'Cell',
    subjects: ["Immunology","Histology","Physiology","Pathology","Biochemistry","Hematology","Internal Medicine"],
    synonyms: ["الخلية اللمفاوية التائية","الخلية التائية","خلايا تي","T Cell","T Lymphocyte"],
    guessingDifficulty: 3
  },
  {
    id: 'w575',
    word: { Arabic: "الخلية اللمفاوية البائية", English: "B Lymphocyte" },
    level: 'Academic',
    difficulty: 1,
    type: 'Cell',
    subjects: ["Immunology","Histology","Physiology","Pathology","Biochemistry","Hematology","Internal Medicine"],
    synonyms: ["الخلية اللمفاوية البائية","الخلية البائية","خلايا بي","B Cell","B Lymphocyte"],
    guessingDifficulty: 3
  },
  {
    id: 'w576',
    word: { Arabic: "الخلية القاتلة الطبيعية", English: "Natural Killer Cell" },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ["Immunology","Histology","Oncology","Physiology","Pathology","Biochemistry"],
    synonyms: ["الخلية القاتلة الطبيعية","خلايا إن كي","الخلايا الفاتكة الطبيعية","NK Cell","Natural Killer"],
    guessingDifficulty: 3
  },
  {
    id: 'w577',
    word: { Arabic: "البلعم الكبير", English: "Macrophage" },
    level: 'Academic',
    difficulty: 1,
    type: 'Cell',
    subjects: ["Immunology","Histology","Pathology","Physiology","Biochemistry"],
    synonyms: ["البلعم الكبير","الخلايا البلعمية الكبيرة","الماكروفاج","البلعميات","Macrophage"],
    guessingDifficulty: 3
  },
  {
    id: 'w578',
    word: { Arabic: "الخلية المتغصنة", English: "Dendritic Cell" },
    level: 'Academic',
    difficulty: 2,
    type: 'Cell',
    subjects: ["Immunology","Histology","Physiology","Pathology","Biochemistry"],
    synonyms: ["الخلية المتغصنة","الخلايا التغصنية","خلايا لانجرهانز","Dendritic Cell","DC"],
    guessingDifficulty: 3
  },
  {
    id: 'w579',
    word: { Arabic: "الغلوبولين المناعي G", English: "Immunoglobulin G" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Immunology","Biochemistry","Pathology","Urology","Internal Medicine","Physiology","Anatomy"],
    synonyms: ["الغلوبولين المناعي G","الأجسام المضادة IgG","غلوبيولين مناعي ج","IgG","Immunoglobulin G"],
    guessingDifficulty: 3
  },
  {
    id: 'w580',
    word: { Arabic: "الغلوبولين المناعي E", English: "Immunoglobulin E" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Biochemistry","Pediatrics","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["الغلوبولين المناعي E","الأجسام المضادة IgE","غلوبيولين مناعي هـ","IgE","Immunoglobulin E"],
    guessingDifficulty: 3
  },
  {
    id: 'w581',
    word: { Arabic: "الغلوبولين المناعي A", English: "Immunoglobulin A" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Biochemistry","Gastroenterology","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["الغلوبولين المناعي A","الأجسام المضادة IgA","غلوبيولين مناعي أ","IgA","Immunoglobulin A"],
    guessingDifficulty: 3
  },
  {
    id: 'w582',
    word: { Arabic: "الغلوبولين المناعي M", English: "Immunoglobulin M" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Biochemistry","Infectious Diseases","Urology","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["الغلوبولين المناعي M","الأجسام المضادة IgM","غلوبيولين مناعي م","IgM","Immunoglobulin M"],
    guessingDifficulty: 3
  },
  {
    id: 'w583',
    word: { Arabic: "الجهاز المتمم", English: "Complement System" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Physiology","Pathology"],
    synonyms: ["الجهاز المتمم","نظام المتممة","بروتينات المتممة","Complement System","Complement Cascade"],
    guessingDifficulty: 3
  },
  {
    id: 'w584',
    word: { Arabic: "الهيستامين", English: "Histamine" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Immunology","Pharmacology","Physiology"],
    synonyms: ["الهيستامين","وسيط الحساسية","Histamine"],
    guessingDifficulty: 3
  },
  {
    id: 'w585',
    word: { Arabic: "الإنترفيرون", English: "Interferon" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Pharmacology","Infectious Diseases"],
    synonyms: ["الإنترفيرون","بروتينات الإنترفيرون","IFN","Interferon"],
    guessingDifficulty: 3
  },
  {
    id: 'w586',
    word: { Arabic: "الصدمة التأقية", English: "Anaphylaxis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Immunology","Emergency Medicine","Pediatrics","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["الصدمة التأقية","التأق","الحساسية المفرطة القاتلة","فرط الحساسية الحاد","Anaphylaxis","Anaphylactic shock"],
    guessingDifficulty: 1
  },
  {
    id: 'w587',
    word: { Arabic: "الذئبة الحمامية الجهازية", English: "Systemic Lupus Erythematosus" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Immunology","Rheumatology","Internal Medicine","Nephrology"],
    synonyms: ["الذئبة الحمامية الجهازية","الذئبة الحمراء","مرض اللوبس","Systemic Lupus Erythematosus","SLE"],
    guessingDifficulty: 2
  },
  {
    id: 'w588',
    word: { Arabic: "متلازمة غودباستشر", English: "Goodpasture Syndrome" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Immunology","Nephrology","Pulmonology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة غودباستشر","مرض الأجسام المضادة للغشاء القاعدي","Anti-GBM Disease","Goodpasture Syndrome"],
    guessingDifficulty: 3
  },
  {
    id: 'w589',
    word: { Arabic: "متلازمة دي جورج", English: "DiGeorge Syndrome" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Immunology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة دي جورج","متلازمة الحذف الصبغي 22q11","متلازمة الحنك والقلب والوجه","DiGeorge Syndrome","22q11.2 deletion"],
    guessingDifficulty: 3
  },
  {
    id: 'w590',
    word: { Arabic: "داء بروتون لنقص المناعة", English: "Bruton Agammaglobulinemia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Immunology","Pediatrics","Genetics"],
    synonyms: ["داء بروتون لنقص المناعة","فقد غاما غلوبولين الدم المرتبط بالجنس","مرض بروتون","X-linked Agammaglobulinemia","XLA"],
    guessingDifficulty: 3
  },
  {
    id: 'w591',
    word: { Arabic: "عوز المناعة المشترك الشديد", English: "Severe Combined Immunodeficiency" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Immunology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["عوز المناعة المشترك الشديد","مرض طفل الفقاعة","السيد","Severe Combined Immunodeficiency","SCID"],
    guessingDifficulty: 3
  },
  {
    id: 'w592',
    word: { Arabic: "مستضد الكريات البيضاء البشرية", English: "Human Leukocyte Antigen" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Genetics","Pathology"],
    synonyms: ["مستضد الكريات البيضاء البشرية","نظام مستضدات الكريات البيضاء","معقد HLA","معقد التوافق النسيجي البشري","HLA","Human Leukocyte Antigen"],
    guessingDifficulty: 3
  },
  {
    id: 'w593',
    word: { Arabic: "داء الطعم حيال الثوي", English: "Graft Versus Host Disease" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Immunology","Hematology","Oncology"],
    synonyms: ["داء الطعم حيال الثوي","مرض الطعم ضد المضيف","رفض الطعم للجسم","Graft Versus Host Disease","GVHD"],
    guessingDifficulty: 3
  },
  {
    id: 'w594',
    word: { Arabic: "الجسم المضاد الذاتي", English: "Autoantibody" },
    level: 'Academic',
    difficulty: 2,
    type: 'Component',
    subjects: ["Immunology","Pathology","Rheumatology","Clinical Toxicology","Emergency Medicine","Pharmacology"],
    synonyms: ["الجسم المضاد الذاتي","الأضداد الذاتية","الأجسام المناعية الذاتية","Autoantibody","Autoantibodies"],
    guessingDifficulty: 3
  },
  {
    id: 'w595',
    word: { Arabic: "ليمفوما هودجكين", English: "Hodgkin Lymphoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Pathology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["ليمفوما هودجكين","داء هودجكين","ورم هودجكين اللمفاوي","Hodgkin Lymphoma","Hodgkins Disease"],
    guessingDifficulty: 2
  },
  {
    id: 'w596',
    word: { Arabic: "الليمفوما اللاهودجكينية", English: "Non-Hodgkin Lymphoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Internal Medicine","Pathology","Physiology","Biochemistry"],
    synonyms: ["الليمفوما اللاهودجكينية","ورم الغدد اللمفاوية اللاهودجكيني","Non-Hodgkin Lymphoma","NHL"],
    guessingDifficulty: 2
  },
  {
    id: 'w597',
    word: { Arabic: "سرطان الرئة صغير الخلايا", English: "Small Cell Lung Carcinoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Pulmonology","Pathology","Emergency Medicine","Anatomy","Physiology","Anaesthesia","Internal Medicine","Hematology"],
    synonyms: ["سرطان الرئة صغير الخلايا","أورام الرئة صغيرة الخلايا","ورم خلايا الشوفان","Small Cell Lung Cancer","SCLC"],
    guessingDifficulty: 3
  },
  {
    id: 'w598',
    word: { Arabic: "سرطان الخلايا الكبدية", English: "Hepatocellular Carcinoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Gastroenterology","Internal Medicine","General Surgery","Physiology","Anatomy","Pathology","Hematology"],
    synonyms: ["سرطان الخلايا الكبدية","سرطان الكبد الأولي","كارسينوما الكبد","Hepatocellular Carcinoma","HCC"],
    guessingDifficulty: 2
  },
  {
    id: 'w599',
    word: { Arabic: "سرطان المعدة", English: "Gastric Carcinoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Gastroenterology","General Surgery","Physiology","Anatomy","Internal Medicine","Pathology","Hematology"],
    synonyms: ["سرطان المعدة","سرطان المعدة الغدي","أورام المعدة الخبيثة","Gastric Carcinoma","Stomach Cancer"],
    guessingDifficulty: 2
  },
  {
    id: 'w600',
    word: { Arabic: "سرطان البنكرياس الغدي", English: "Pancreatic Adenocarcinoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Gastroenterology","General Surgery","Pathology","Hematology","Internal Medicine"],
    synonyms: ["سرطان البنكرياس الغدي","سرطان البنكرياس","أورام البنكرياس","Pancreatic Adenocarcinoma","Pancreatic Cancer"],
    guessingDifficulty: 3
  },
  {
    id: 'w601',
    word: { Arabic: "سرطان المبيض", English: "Ovarian Carcinoma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Oncology","Obstetrics and Gynecology","Pathology","Hematology","Internal Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["سرطان المبيض","أورام المبيض الخبيثة","السرطان المبيضي الظهاري","Ovarian Carcinoma","Ovarian Cancer"],
    guessingDifficulty: 2
  },
  {
    id: 'w602',
    word: { Arabic: "مستضد البروستاتا النوعي", English: "Prostate-Specific Antigen" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Component',
    subjects: ["Oncology","Urology","Biochemistry","Internal Medicine","Physiology","Anatomy","Pathology"],
    synonyms: ["مستضد البروستاتا النوعي","واسم البي إس إيه","إنزيم البروستاتا","Prostate-Specific Antigen","PSA"],
    guessingDifficulty: 2
  },
  {
    id: 'w603',
    word: { Arabic: "المستضد السرطاني المضغي", English: "Carcinoembryonic Antigen" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Component',
    subjects: ["Oncology","Gastroenterology","Biochemistry","Pathology","Hematology","Internal Medicine"],
    synonyms: ["المستضد السرطاني المضغي","واسم سي إي إيه","بروتين الجنين السرطاني","Carcinoembryonic Antigen","CEA"],
    guessingDifficulty: 3
  },
  {
    id: 'w604',
    word: { Arabic: "ألفا فيتو بروتين", English: "Alpha-Fetoprotein" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Component',
    subjects: ["Oncology","Obstetrics and Gynecology","Pediatrics"],
    synonyms: ["ألفا فيتو بروتين","بروتين الجنين ألفا","واسم إيه إف بي","Alpha-Fetoprotein","AFP"],
    guessingDifficulty: 3
  },
  {
    id: 'w605',
    word: { Arabic: "واسم الورم CA-125", English: "CA-125 Antigen" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Component',
    subjects: ["Oncology","Obstetrics and Gynecology","Biochemistry","Clinical Toxicology","Emergency Medicine","Pharmacology"],
    synonyms: ["واسم الورم CA-125","مستضد السرطان 125","واسم سرطان المبيض","CA-125","Cancer Antigen 125"],
    guessingDifficulty: 3
  },
  {
    id: 'w606',
    word: { Arabic: "العلاج الكيميائي للسرطان", English: "Chemotherapy" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Pharma',
    subjects: ["Oncology","Pharmacology","Internal Medicine","Pathology","Hematology","Physiology","Biochemistry"],
    synonyms: ["العلاج الكيميائي للسرطان","الكيماوي","الأدوية السامة للخلايا","العلاج الكيماوي","Chemotherapy","Chemo"],
    guessingDifficulty: 1
  },
  {
    id: 'w607',
    word: { Arabic: "العلاج الإشعاعي للأورام", English: "Radiotherapy" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Oncology","Radiology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["العلاج الإشعاعي للأورام","العلاج بالأشعة","الإشعاعي","الراديوي العلاجي","Radiation Therapy","Radiotherapy"],
    guessingDifficulty: 1
  },
  {
    id: 'w608',
    word: { Arabic: "العلاج المناعي للأورام", English: "Cancer Immunotherapy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Pharma',
    subjects: ["Oncology","Immunology","Pharmacology","Internal Medicine","Pathology","Hematology"],
    synonyms: ["العلاج المناعي للأورام","العلاج المناعي للسرطان","مثبطات نقاط التفتيش","Cancer Immunotherapy","Immune Checkpoint Inhibitors"],
    guessingDifficulty: 2
  },
  {
    id: 'w609',
    word: { Arabic: "النقائل الورمية الخبيثة", English: "Neoplasm Metastasis" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Oncology","Pathology","Hematology","Internal Medicine","Forensic Medicine"],
    synonyms: ["النقائل الورمية الخبيثة","انبثاث السرطان","انتشار الورم الثانوي","النقائل السرطانية","Metastasis","Metastatic Disease"],
    guessingDifficulty: 1
  },
  {
    id: 'w610',
    word: { Arabic: "الخزعة بالإبرة الدقيقة", English: "Fine Needle Aspiration" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Oncology","Pathology","General Surgery"],
    synonyms: ["الخزعة بالإبرة الدقيقة","سحب العينات بالإبرة الدقيقة","السحب الخلوي","Fine Needle Aspiration","FNA","FNAC"],
    guessingDifficulty: 2
  },
  {
    id: 'w611',
    word: { Arabic: "نظام تدريج الأورام TNM", English: "TNM Staging System" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Oncology","Pathology","General Surgery","Hematology","Internal Medicine"],
    synonyms: ["نظام تدريج الأورام TNM","تدريج السرطان TNM","تصنيف TNM","TNM Staging System","TNM"],
    guessingDifficulty: 2
  },
  {
    id: 'w612',
    word: { Arabic: "ساركوما إيوينغ العظمية", English: "Ewing Sarcoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Orthopedics","Pediatrics","Rheumatology","Anatomy","Physiology","General Surgery"],
    synonyms: ["ساركوما إيوينغ العظمية","ورم إيوينغ","ساركوما يوينغ","Ewing Sarcoma"],
    guessingDifficulty: 3
  },
  {
    id: 'w613',
    word: { Arabic: "ورم أرومة الشبكية", English: "Retinoblastoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Ophthalmology","Pediatrics","Genetics","Anatomy","General Surgery"],
    synonyms: ["ورم أرومة الشبكية","سرطان شبكية العين لدى الأطفال","ريتينوبلاستوما","Retinoblastoma"],
    guessingDifficulty: 3
  },
  {
    id: 'w614',
    word: { Arabic: "الورم السرطاوي", English: "Carcinoid Tumor" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Gastroenterology","Endocrinology","Pathology","Hematology","Internal Medicine"],
    synonyms: ["الورم السرطاوي","أورام الغدد الصم العصبية","الورم الكارسينويدي","Carcinoid Tumor","Neuroendocrine Tumor","NET"],
    guessingDifficulty: 3
  },
  {
    id: 'w615',
    word: { Arabic: "ليمفوما بوركيت", English: "Burkitt Lymphoma" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Oncology","Hematology","Pediatrics","Pathology","Internal Medicine","Physiology","Biochemistry"],
    synonyms: ["ليمفوما بوركيت","ورم بوركيت اللمفاوي","Burkitt Lymphoma"],
    guessingDifficulty: 3
  },
  {
    id: 'w616',
    word: { Arabic: "المشيمة المنزاحة", English: "Vasa Previa" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Pediatrics"],
    synonyms: ["الأوعية المنزاحة","المشيمة المنزاحة للأوعية","Vasa Previa"],
    guessingDifficulty: 2
  },
  {
    id: 'w617',
    word: { Arabic: "متلازمة تكيس المبايض", English: "Polycystic Ovary Syndrome" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Syndrome',
    subjects: ["Obstetrics and Gynecology","Endocrinology","Pediatrics","Genetics","Internal Medicine","Neurology","Anatomy","Physiology","General Surgery"],
    synonyms: ["متلازمة تكيس المبايض","تكيسات المبيضين","متلازمة شتاين-ليفينثال","Polycystic Ovary Syndrome","PCOS"],
    guessingDifficulty: 1
  },
  {
    id: 'w618',
    word: { Arabic: "الورم العضلي الأملس الرحمي", English: "Uterine Leiomyoma" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","General Surgery","Orthopedics","Rheumatology","Anatomy","Physiology"],
    synonyms: ["الورم العضلي الأملس الرحمي","ألياف الرحم","تليف الرحم","الورم الليفي الرحمي","Uterine Fibroids","Fibroid","Leiomyoma"],
    guessingDifficulty: 1
  },
  {
    id: 'w619',
    word: { Arabic: "سرطان عنق الرحم", English: "Cervical Cancer" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Oncology","Infectious Diseases","Pathology","Hematology","Internal Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["سرطان عنق الرحم","خباثة عنق الرحم","كارسينوما عنق الرحم","Cervical Cancer","Cervical Carcinoma"],
    guessingDifficulty: 1
  },
  {
    id: 'w620',
    word: { Arabic: "مسحة عنق الرحم", English: "Pap Smear" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Obstetrics and Gynecology","Oncology","Pathology","Anatomy","Physiology","General Surgery"],
    synonyms: ["مسحة عنق الرحم","لطاخة بابانيكولاو","فحص باب سمير","مسحة باب","Pap Smear","Papanicolaou Test"],
    guessingDifficulty: 1
  },
  {
    id: 'w621',
    word: { Arabic: "سكري الحمل", English: "Gestational Diabetes" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Endocrinology","Internal Medicine","Physiology","Biochemistry","Anatomy","General Surgery"],
    synonyms: ["سكري الحمل","مرض السكر أثناء الحمل","داء السكري الحملي","Gestational Diabetes Mellitus","GDM"],
    guessingDifficulty: 2
  },
  {
    id: 'w622',
    word: { Arabic: "تمزق الأغشية الباكر", English: "Premature Rupture of Membranes" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology"],
    synonyms: ["تمزق الأغشية الباكر","نزول ماء الرأس المبكر","انفجار جيب المياه الباكر","PROM","PPROM"],
    guessingDifficulty: 2
  },
  {
    id: 'w623',
    word: { Arabic: "عسر ولادة الكتف", English: "Shoulder Dystocia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Pediatrics","Anatomy","Physiology","General Surgery"],
    synonyms: ["عسر ولادة الكتف","انحشار كتف الجنين","عسرة الكتف التوليدية","Shoulder Dystocia"],
    guessingDifficulty: 3
  },
  {
    id: 'w624',
    word: { Arabic: "المشيمة الملتصقة", English: "Placenta Accreta" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","General Surgery","Anatomy","Physiology"],
    synonyms: ["المشيمة الملتصقة","التصاق المشيمة غير الطبيعي","المشيمة الغازية","Placenta Accreta","Placenta Accreta Spectrum","PAS"],
    guessingDifficulty: 3
  },
  {
    id: 'w625',
    word: { Arabic: "نزف ما بعد الوضع", English: "Postpartum Hemorrhage" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Hematology","Physiology","Biochemistry","Internal Medicine"],
    synonyms: ["نزف ما بعد الوضع","نزيف ما بعد الولادة","النزف النفاسي الحاد","PPH","Postpartum Hemorrhage"],
    guessingDifficulty: 1
  },
  {
    id: 'w626',
    word: { Arabic: "متلازمة هيلب", English: "HELLP Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Obstetrics and Gynecology","Hematology","Emergency Medicine","Internal Medicine","Pediatrics","Genetics","Neurology"],
    synonyms: ["متلازمة هيلب","متلازمة انحلال الدم ونقص الصفائح","HELLP Syndrome","HELLP"],
    guessingDifficulty: 2
  },
  {
    id: 'w627',
    word: { Arabic: "العملية القيصرية", English: "Cesarean Section" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Obstetrics and Gynecology","General Surgery","Anaesthesia"],
    synonyms: ["العملية القيصرية","الولادة القيصرية","شق البطن التوليدي","Cesarean Section","C-section"],
    guessingDifficulty: 1
  },
  {
    id: 'w628',
    word: { Arabic: "تخطيط قلب الجنين والرحم", English: "Cardiotocography" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Equipment',
    subjects: ["Obstetrics and Gynecology","Pediatrics","Emergency Medicine","General Medicine","Anaesthesia","Cardiology","Vascular Surgery","Physiology","Anatomy","Internal Medicine","General Surgery"],
    synonyms: ["تخطيط قلب الجنين والرحم","جهاز رسم نبض الجنين","مراقبة الجنين الإلكترونية","Cardiotocography","CTG","Electronic Fetal Monitoring"],
    guessingDifficulty: 2
  },
  {
    id: 'w629',
    word: { Arabic: "بزل السائل السلوي الأمنيوسي", English: "Amniocentesis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Obstetrics and Gynecology","Genetics","Pediatrics"],
    synonyms: ["بزل السائل السلوي الأمنيوسي","سحب ماء الجنين","بزل السلى","Amniocentesis"],
    guessingDifficulty: 2
  },
  {
    id: 'w630',
    word: { Arabic: "السائل السلوي الأمنيوسي", English: "Amniotic Fluid" },
    level: 'Academic',
    difficulty: 1,
    type: 'Component',
    subjects: ["Obstetrics and Gynecology","Pediatrics","Physiology","Infectious Diseases","Microbiology","Parasitology","Internal Medicine"],
    synonyms: ["السائل السلوي الأمنيوسي","ماء الجنين","السائل الأمنيوسي","السلى","Amniotic Fluid"],
    guessingDifficulty: 3
  },
  {
    id: 'w631',
    word: { Arabic: "عنق الرحم", English: "Cervix" },
    level: 'Academic',
    difficulty: 1,
    type: 'Organ',
    subjects: ["Obstetrics and Gynecology","Anatomy","Physiology","Pathology","General Surgery"],
    synonyms: ["عنق الرحم","فوهة الرحم","مدخل الرحم","Cervix","Cervix Uteri"],
    guessingDifficulty: 2
  },
  {
    id: 'w632',
    word: { Arabic: "كيس المبيض", English: "Ovarian Cyst" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Anatomy","Physiology","General Surgery"],
    synonyms: ["كيس المبيض","تكيسات المبيض المفردة","الأكياس المبيضية","Ovarian Cyst"],
    guessingDifficulty: 1
  },
  {
    id: 'w633',
    word: { Arabic: "شق العجان التوليدي", English: "Episiotomy" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Technique',
    subjects: ["Obstetrics and Gynecology","General Surgery"],
    synonyms: ["شق العجان التوليدي","بضع الفرج","شق الولادة المهبلية","Episiotomy"],
    guessingDifficulty: 1
  },
  {
    id: 'w634',
    word: { Arabic: "ونى الرحم الارتخائي", English: "Uterine Atony" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["ونى الرحم الارتخائي","ارتخاء الرحم","قصور انقباض الرحم بعد الولادة","Uterine Atony"],
    guessingDifficulty: 2
  },
  {
    id: 'w635',
    word: { Arabic: "انقلاب الرحم", English: "Uterine Inversion" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Emergency Medicine","Anatomy","Physiology","General Surgery"],
    synonyms: ["انقلاب الرحم","انقلاب الرحم التوليدي","انقلاب قاع الرحم","Uterine Inversion"],
    guessingDifficulty: 3
  },
  {
    id: 'w636',
    word: { Arabic: "قصور عنق الرحم", English: "Incompetent Cervix" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Anatomy","Physiology","General Surgery"],
    synonyms: ["قصور عنق الرحم","ارتخاء عنق الرحم","عجز عنق الرحم","قصور فوهة الرحم","Incompetent Cervix","Cervical Insufficiency"],
    guessingDifficulty: 2
  },
  {
    id: 'w637',
    word: { Arabic: "حمى النفاس الإنتانية", English: "Puerperal Sepsis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Obstetrics and Gynecology","Infectious Diseases","Internal Medicine","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["حمى النفاس الإنتانية","حمى النفاس","إنتان ما بعد الولادة","التهاب بطانة الرحم النفاسي","Puerperal Sepsis","Postpartum Endometritis"],
    guessingDifficulty: 2
  },
  {
    id: 'w638',
    word: { Arabic: "قلس الأبهر", English: "Aortic Regurgitation" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine"],
    synonyms: ["قلس الأبهر","ارتجاع الصمام الأبهري","قصور الصمام الأبهري","Aortic Regurgitation","Aortic Insufficiency"],
    guessingDifficulty: 2
  },
  {
    id: 'w639',
    word: { Arabic: "متلازمة وولف-باركنسون-وايت", English: "Wolff-Parkinson-White Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Cardiology","Internal Medicine","Emergency Medicine","Pediatrics","Genetics","Neurology","Anatomy","Physiology","Psychiatry"],
    synonyms: ["متلازمة وولف-باركنسون-وايت","وولف باركنسون وايت","WPW Syndrome","Wolff-Parkinson-White Syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w640',
    word: { Arabic: "الصدمة قلبية المنشأ", English: "Cardiogenic Shock" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Emergency Medicine","Internal Medicine","Critical Care","Vascular Surgery","Physiology","Anatomy","Hematology","Biochemistry"],
    synonyms: ["الصدمة قلبية المنشأ","صدمة قلبية","Cardiogenic Shock"],
    guessingDifficulty: 2
  },
  {
    id: 'w641',
    word: { Arabic: "اعتلال تاكوتسوبو لعضلة القلب", English: "Takotsubo Cardiomyopathy" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Cardiology","Internal Medicine","Emergency Medicine","Vascular Surgery","Physiology","Anatomy","Orthopedics","Rheumatology","General Surgery"],
    synonyms: ["اعتلال تاكوتسوبو لعضلة القلب","متلازمة القلب المنكسر","اعتلال تاكوتسوبو","Takotsubo Cardiomyopathy","Broken Heart Syndrome","Stress Cardiomyopathy"],
    guessingDifficulty: 2
  },
  {
    id: 'w642',
    word: { Arabic: "التهاب الشرايين الخلوية العملاقة", English: "Giant Cell Arteritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Rheumatology","Internal Medicine","Ophthalmology","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الشرايين الخلوية العملاقة","التهاب الشريان الصدغي","Giant Cell Arteritis","Temporal Arteritis","Horton Disease"],
    guessingDifficulty: 2
  },
  {
    id: 'w643',
    word: { Arabic: "متلازمة ذيل الفرس", English: "Cauda Equina Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Neurology","Emergency Medicine","Neurosurgery","Orthopedics","Pediatrics","Genetics","Internal Medicine"],
    synonyms: ["متلازمة ذيل الفرس","انضغاط ذيل الفرس","Cauda Equina Syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w644',
    word: { Arabic: "تكهف النخاع", English: "Syringomyelia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Neurology","Neurosurgery","Internal Medicine","Anatomy","Physiology","Psychiatry"],
    synonyms: ["تكهف النخاع","تكهف النخاع الشوكي","استسقاء النخاع","Syringomyelia","Syrinx"],
    guessingDifficulty: 2
  },
  {
    id: 'w645',
    word: { Arabic: "التهاب الأقنية الصفراوية المصلب البدئي", English: "Primary Sclerosing Cholangitis" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Disease',
    subjects: ["Gastroenterology","Internal Medicine","Infectious Diseases","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب الأقنية الصفراوية المصلب البدئي","التهاب القنوات الصفراوية المصلب","Primary Sclerosing Cholangitis","PSC"],
    guessingDifficulty: 3
  },
  {
    id: 'w646',
    word: { Arabic: "متلازمة بورهاف", English: "Boerhaave Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Gastroenterology","Emergency Medicine","General Surgery","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة بورهاف","تمزق المريء التلقائي","Boerhaave Syndrome","Esophageal Rupture"],
    guessingDifficulty: 2
  },
  {
    id: 'w647',
    word: { Arabic: "التهاب القولون بالمطثية العسيرة", English: "Clostridioides difficile Colitis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Gastroenterology","Infectious Diseases","Internal Medicine","General Surgery","Physiology","Anatomy","Microbiology","Parasitology","Pediatrics"],
    synonyms: ["التهاب القولون بالمطثية العسيرة","التهاب القولون الغشائي الكاذب","عدوى المطثية العسيرة","Clostridioides difficile Colitis","C. difficile Infection","Pseudomembranous Colitis"],
    guessingDifficulty: 2
  },
  {
    id: 'w648',
    word: { Arabic: "ذات الرئة بالمتكيسة الرئوية الجيروفيسية", English: "Pneumocystis Jirovecii Pneumonia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Infectious Diseases","Internal Medicine","Emergency Medicine","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["ذات الرئة بالمتكيسة الرئوية الجيروفيسية","التهاب رئوي بالمتكيسة الجيروفيسية","PCP Pneumonia","Pneumocystis Jirovecii Pneumonia","Pneumocystis Carinii Pneumonia"],
    guessingDifficulty: 2
  },
  {
    id: 'w649',
    word: { Arabic: "متلازمة الضائقة التنفسية الحادة", English: "Acute Respiratory Distress Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Pulmonology","Critical Care","Internal Medicine","Emergency Medicine","Pediatrics","Genetics","Neurology","Anatomy","Physiology","Anaesthesia"],
    synonyms: ["متلازمة الضائقة التنفسية الحادة","ARDS","متلازمة العوز التنفسي الحاد","Acute Respiratory Distress Syndrome"],
    guessingDifficulty: 2
  },
  {
    id: 'w650',
    word: { Arabic: "ورم الظهارة المتوسطة", English: "Mesothelioma" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Pulmonology","Oncology","Pathology","Internal Medicine"],
    synonyms: ["ورم الظهارة المتوسطة","ميزوثليوما","ورم غشاء الجنب الخبيث","Mesothelioma","Malignant Pleural Mesothelioma"],
    guessingDifficulty: 2
  },
  {
    id: 'w651',
    word: { Arabic: "متلازمة فرط سكر الدم وفرط الأسمولية", English: "Hyperosmolar Hyperglycemic State" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Emergency Medicine","Internal Medicine","Critical Care","Hematology","Physiology","Biochemistry","Clinical Toxicology","Pharmacology"],
    synonyms: ["متلازمة فرط سكر الدم وفرط الأسمولية","غيبوبة السكر التناضحية","فرط الأسمولية السكري","Hyperosmolar Hyperglycemic State","HHS","HONK"],
    guessingDifficulty: 2
  },
  {
    id: 'w652',
    word: { Arabic: "العاصفة الدرقية", English: "Thyroid Storm" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Endocrinology","Emergency Medicine","Internal Medicine","Critical Care","Physiology","Biochemistry"],
    synonyms: ["العاصفة الدرقية","نوبة التسمم الدرقي","عاصفة الغدة الدرقية","Thyroid Storm","Thyrotoxic Crisis"],
    guessingDifficulty: 2
  },
  {
    id: 'w653',
    word: { Arabic: "تعدد الأورام الصماوية الصمائية", English: "Multiple Endocrine Neoplasia" },
    level: 'Clinical',
    difficulty: 3,
    type: 'Syndrome',
    subjects: ["Endocrinology","Oncology","Genetics","Internal Medicine","Pediatrics","Neurology","Physiology","Biochemistry","Pathology","Hematology"],
    synonyms: ["تعدد الأورام الصماوية الصمائية","متلازمة الأورام الصماء المتعددة","Multiple Endocrine Neoplasia","MEN Syndrome","MEN1","MEN2"],
    guessingDifficulty: 3
  },
  {
    id: 'w654',
    word: { Arabic: "التهاب كبيبات الكلى بعد العقديات", English: "Post-Streptococcal Glomerulonephritis" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Nephrology","Pediatrics","Internal Medicine","Pathology","Urology","Physiology","Anatomy","Infectious Diseases","Microbiology","Parasitology"],
    synonyms: ["التهاب كبيبات الكلى بعد العقديات","التهاب الكبيبات بعد عدوى العقدية","Post-Streptococcal Glomerulonephritis","PSGN"],
    guessingDifficulty: 2
  },
  {
    id: 'w655',
    word: { Arabic: "انفتال الخصية", English: "Testicular Torsion" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Emergency Medicine","Pediatrics","General Surgery","Nephrology","Urology"],
    synonyms: ["انفتال الخصية","التواء الخصية","انفتال الحبل المنوي","Testicular Torsion","Torsion of the Testis"],
    guessingDifficulty: 1
  },
  {
    id: 'w656',
    word: { Arabic: "مرض التغير الأدنى", English: "Minimal Change Disease" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Disease',
    subjects: ["Nephrology","Pediatrics","Pathology","Internal Medicine"],
    synonyms: ["مرض التغير الأدنى","داء الآفات الصغرى","الاعتلال الكلوي بالأدنى تغير","Minimal Change Disease","Nil Lesion","MCD"],
    guessingDifficulty: 2
  },
  {
    id: 'w657',
    word: { Arabic: "تسمم الباراسيتامول", English: "Acetaminophen Toxicity" },
    level: 'Clinical',
    difficulty: 1,
    type: 'Disease',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Internal Medicine"],
    synonyms: ["تسمم الباراسيتامول","تسمم الأسيتامينوفين","جرعة زائدة من الباراسيتامول","Acetaminophen Toxicity","Paracetamol Poisoning","APAP Toxicity"],
    guessingDifficulty: 1
  },
  {
    id: 'w658',
    word: { Arabic: "متلازمة السيروتونين", English: "Serotonin Syndrome" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Clinical Toxicology","Emergency Medicine","Psychiatry","Pharmacology","Pediatrics","Genetics","Internal Medicine","Neurology"],
    synonyms: ["متلازمة السيروتونين","سمية السيروتونين","تسمم السيروتونين","Serotonin Syndrome","Serotonin Toxicity"],
    guessingDifficulty: 2
  },
  {
    id: 'w659',
    word: { Arabic: "فرط الحرارة الخبيث", English: "Malignant Hyperthermia" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Syndrome',
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Anaesthesia","Pediatrics","Genetics","Internal Medicine","Neurology","Oncology","Pathology","Hematology"],
    synonyms: ["فرط الحرارة الخبيث","متلازمة فرط الحرارة الخبيث","Malignant Hyperthermia","MH"],
    guessingDifficulty: 2
  },
  {
    id: 'w660',
    word: { Arabic: "السونار السريع لرضوض البطن", English: "FAST Ultrasound" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Technique',
    subjects: ["Radiology","Emergency Medicine","General Surgery"],
    synonyms: ["السونار السريع لرضوض البطن","سونار الطوارئ للإصابات","فحص فاست","FAST Ultrasound","Focused Assessment with Sonography for Trauma","E-FAST"],
    guessingDifficulty: 2
  },
  {
    id: 'w661',
    word: { Arabic: "مخطط القصبات الهوائي الظليل", English: "Air Bronchogram" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Radiology","Pulmonology","Internal Medicine","Neurology","Anatomy","Physiology","Psychiatry","Emergency Medicine","Anaesthesia"],
    synonyms: ["مخطط القصبات الهوائي الظليل","علامة القصبة الهوائية الظليلة","القصبات الهوائية الشعاعية","Air Bronchogram","Air Bronchogram Sign"],
    guessingDifficulty: 2
  },
  {
    id: 'w662',
    word: { Arabic: "علامة لب التفاحة", English: "Apple Core Sign" },
    level: 'Clinical',
    difficulty: 2,
    type: 'Other',
    subjects: ["Radiology","Gastroenterology","General Surgery","Oncology"],
    synonyms: ["علامة لب التفاحة","مظهر لب التفاحة بالأشعة","علامة قمع التفاحة","Apple Core Sign","Napkin Ring Sign"],
    guessingDifficulty: 2
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

    if (containsAny(['x-ray', 'ct ', 'mri', 'ultrasound', 'radiolog', 'fluoroscop', 'mammogra', 'angiogra', 'contrast', 'pet scan', 'dexa', 'barium', 'أشعة', 'رنين', 'سونار', 'مقطعية', 'ماموجرام', 'دوبلر'])) {
    sSet.add('Radiology');
  }

  if (containsAny(['eye', 'ocular', 'retina', 'vision', 'glaucoma', 'cataract', 'عين', 'بصر', 'شبكية', 'مياه زرقاء'])) {
    sSet.add('Ophthalmology');
    sSet.add('Anatomy');
    sSet.add('General Surgery');
  }

  if (containsAny(['poison', 'toxic', 'antidote', 'overdose', 'cyanide', 'arsenic', 'lead', 'organophosphate', 'atropine', 'carbon monoxide', 'fomepizole', 'naloxone', 'strychnine', 'toxin', 'snake', 'scorpion', 'تسمم', 'سم', 'ترياق', 'مبيد', 'زرنيخ', 'رصاص', 'فوسفات'])) {
    sSet.add('Clinical Toxicology');
    sSet.add('Emergency Medicine');
    sSet.add('Pharmacology');
  }

  if (containsAny(['mortis', 'asphyxia', 'drowning', 'hanging', 'strangulation', 'wound', 'abrasion', 'contusion', 'lacerat', 'incised', 'stab', 'firearm', 'bullet', 'infanticide', 'autopsy', 'postmortem', 'tardieu', 'hesitation', 'battered', 'جثة', 'رمي', 'شنق', 'خنق', 'غرق', 'جرح', 'سحجة', 'كدمة', 'طعن', 'عيار ناري', 'مقذوف', 'تشريح'])) {
    sSet.add('Forensic Medicine');
    sSet.add('Pathology');
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
