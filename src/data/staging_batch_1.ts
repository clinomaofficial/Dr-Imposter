// STAGING FILE - BATCH 1 (Radiology, Dermatology & Ophthalmology)
// DO NOT IMPORT DIRECTLY. Review this file before merging into medicalWords.ts and hints.ts.

export const STAGING_MEDICAL_WORDS = [
  // --- RADIOLOGY (10 words) ---
  { id: 'r1', word: { Arabic: 'الأشعة المقطعية', English: 'Computed Tomography' }, level: 'Clinical', difficulty: 2, type: 'Equipment', subjects: ['Radiology', 'Emergency Medicine', 'Internal Medicine'], synonyms: ['CT scan', 'الأشعة المقطعية'] },
  { id: 'r2', word: { Arabic: 'الرنين المغناطيسي', English: 'Magnetic Resonance Imaging' }, level: 'Both', difficulty: 3, type: 'Equipment', subjects: ['Radiology', 'Neurology', 'Orthopedics'], synonyms: ['MRI', 'الرنين'] },
  { id: 'r3', word: { Arabic: 'الموجات فوق الصوتية', English: 'Ultrasound' }, level: 'Clinical', difficulty: 1, type: 'Equipment', subjects: ['Radiology', 'Obstetrics and Gynecology', 'General Medicine'], synonyms: ['Sonography', 'السونار'] },
  { id: 'r4', word: { Arabic: 'التصوير التألقي', English: 'Fluoroscopy' }, level: 'Clinical', difficulty: 2, type: 'Technique', subjects: ['Radiology', 'Gastroenterology', 'Surgery'], synonyms: ['السينية المستمرة'] },
  { id: 'r5', word: { Arabic: 'مواد التباين', English: 'Contrast Media' }, level: 'Both', difficulty: 2, type: 'Pharma', subjects: ['Radiology', 'Pharmacology', 'Internal Medicine'], synonyms: ['الصبغة', 'Contrast'] },
  { id: 'r6', word: { Arabic: 'التصوير البوزيتروني', English: 'PET Scan' }, level: 'Clinical', difficulty: 3, type: 'Equipment', subjects: ['Radiology', 'Oncology', 'Nuclear Medicine'], synonyms: ['PET'] },
  { id: 'r7', word: { Arabic: 'تصوير الثدي الشعاعي', English: 'Mammography' }, level: 'Clinical', difficulty: 2, type: 'Equipment', subjects: ['Radiology', 'Oncology', 'Obstetrics and Gynecology'], synonyms: ['ماموجرام'] },
  { id: 'r8', word: { Arabic: 'تصوير الأوعية', English: 'Angiography' }, level: 'Clinical', difficulty: 3, type: 'Technique', subjects: ['Radiology', 'Vascular Surgery', 'Cardiology'], synonyms: ['تصوير الشرايين'] },
  { id: 'r9', word: { Arabic: 'الأشعة السينية', English: 'X-Ray' }, level: 'Academic', difficulty: 1, type: 'Equipment', subjects: ['Radiology', 'Anatomy'], synonyms: ['الأشعة'] },
  { id: 'r10', word: { Arabic: 'تصوير الأوعية المقطعي', English: 'CT Angiography' }, level: 'Clinical', difficulty: 3, type: 'Technique', subjects: ['Radiology', 'Cardiology', 'Vascular Surgery'], synonyms: ['CTA'] },

  // --- DERMATOLOGY (10 words) ---
  { id: 'd1', word: { Arabic: 'الصدفية', English: 'Psoriasis' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology', 'Rheumatology', 'Immunology'], synonyms: ['Psoriasis'] },
  { id: 'd2', word: { Arabic: 'الأكزيما', English: 'Eczema' }, level: 'Clinical', difficulty: 1, type: 'Disease', subjects: ['Dermatology', 'Immunology'], synonyms: ['Atopic Dermatitis'] },
  { id: 'd3', word: { Arabic: 'الميلانوما', English: 'Melanoma' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Dermatology', 'Oncology'], synonyms: ['Melanoma'] },
  { id: 'd4', word: { Arabic: 'الثعلبة', English: 'Alopecia Areata' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology'], synonyms: ['Alopecia'] },
  { id: 'd5', word: { Arabic: 'البهاق', English: 'Vitiligo' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology'], synonyms: ['Vitiligo'] },
  { id: 'd6', word: { Arabic: 'حب الشباب', English: 'Acne Vulgaris' }, level: 'Clinical', difficulty: 1, type: 'Disease', subjects: ['Dermatology', 'Endocrinology'], synonyms: ['Acne'] },
  { id: 'd7', word: { Arabic: 'سرطان الخلايا القاعدية', English: 'Basal Cell Carcinoma' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Dermatology', 'Oncology'], synonyms: ['BCC'] },
  { id: 'd8', word: { Arabic: 'الالتهاب الجلدي الدهني', English: 'Seborrheic Dermatitis' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology'], synonyms: ['Dermatitis'] },
  { id: 'd9', word: { Arabic: 'الالتهاب الحولي', English: 'Rosacea' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology'], synonyms: ['Rosacea'] },
  { id: 'd10', word: { Arabic: 'الجرب', English: 'Scabies' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Dermatology', 'Infectious Diseases'], synonyms: ['Scabies'] },

  // --- OPHTHALMOLOGY (30 words) ---
  // Phase 1: Original & Refraction
  { id: 'o1', word: { Arabic: 'التهاب الملتحمة', English: 'Conjunctivitis' }, level: 'Clinical', difficulty: 1, type: 'Disease', subjects: ['Ophthalmology', 'Infectious Diseases'], synonyms: ['الرمد'] },
  { id: 'o2', word: { Arabic: 'اللابؤرية', English: 'Astigmatism' }, level: 'Academic', difficulty: 2, type: 'Other', subjects: ['Ophthalmology', 'Optometry'], synonyms: ['الاستجماتيزم'] },
  { id: 'o3', word: { Arabic: 'الحول', English: 'Strabismus' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Ophthalmology', 'Neurology'], synonyms: ['انحراف العين'] },
  { id: 'o4', word: { Arabic: 'قرحة القرنية', English: 'Corneal Ulcer' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Ophthalmology', 'Infectious Diseases'], synonyms: ['قرحة القرنية'] },
  { id: 'o5', word: { Arabic: 'التنكس البقعي', English: 'Macular Degeneration' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Ophthalmology', 'Geriatrics'], synonyms: ['ضمور البقعة'] },
  { id: 'o6', word: { Arabic: 'التهاب القزحية', English: 'Uveitis' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Ophthalmology', 'Immunology'], synonyms: ['التهاب العين الداخلي'] },
  { id: 'o7', word: { Arabic: 'قصر النظر', English: 'Myopia' }, level: 'Academic', difficulty: 1, type: 'Other', subjects: ['Ophthalmology', 'Optometry'], synonyms: ['قصر البصر'] },
  { id: 'o8', word: { Arabic: 'طول النظر', English: 'Hyperopia' }, level: 'Academic', difficulty: 1, type: 'Other', subjects: ['Ophthalmology', 'Optometry'], synonyms: ['بعد النظر'] },
  { id: 'o9', word: { Arabic: 'طول النظر الشيخوخي', English: 'Presbyopia' }, level: 'Clinical', difficulty: 2, type: 'Other', subjects: ['Ophthalmology', 'Geriatrics'], synonyms: ['طول النظر المرتبط بالعمر'] },
  { id: 'o10', word: { Arabic: 'التهاب الجفن', English: 'Blepharitis' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Ophthalmology'], synonyms: ['التهاب حواف الجفون'] },

  // Phase 2: Anatomy
  { id: 'o11', word: { Arabic: 'القرنية', English: 'Cornea' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['القرنية'] },
  { id: 'o12', word: { Arabic: 'الشبكية', English: 'Retina' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy', 'Neurology'], synonyms: ['الشبكية'] },
  { id: 'o13', word: { Arabic: 'العنبية', English: 'Iris' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['القزحية'] },
  { id: 'o14', word: { Arabic: 'العصب البصري', English: 'Optic Nerve' }, level: 'Academic', difficulty: 2, type: 'Component', subjects: ['Ophthalmology', 'Anatomy', 'Neurology'], synonyms: ['العصب الثاني'] },
  { id: 'o15', word: { Arabic: 'السائل الزجاجي', English: 'Vitreous Humor' }, level: 'Academic', difficulty: 2, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['الجسم الزجاجي'] },
  { id: 'o16', word: { Arabic: 'الصلبة', English: 'Sclera' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['بياض العين'] },
  { id: 'o17', word: { Arabic: 'الملتحمة', English: 'Conjunctiva' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['غشاء العين'] },
  { id: 'o18', word: { Arabic: 'العدسة', English: 'Lens' }, level: 'Academic', difficulty: 1, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['عدسة العين'] },
  { id: 'o19', word: { Arabic: 'البقعة المركزية', English: 'Macula' }, level: 'Academic', difficulty: 3, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['اللطخة الصفراء'] },
  { id: 'o20', word: { Arabic: 'القرص البصري', English: 'Optic Disc' }, level: 'Academic', difficulty: 3, type: 'Component', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['رأس العصب'] },

  // Phase 3: Disease, Symptoms & Pharma
  { id: 'o21', word: { Arabic: 'عمى الألوان', English: 'Color Blindness' }, level: 'Academic', difficulty: 2, type: 'Other', subjects: ['Ophthalmology', 'Genetics'], synonyms: ['عجز الألوان'] },
  { id: 'o22', word: { Arabic: 'الرؤية المزدوجة', English: 'Diplopia' }, level: 'Clinical', difficulty: 2, type: 'Symptom', subjects: ['Ophthalmology', 'Neurology'], synonyms: ['ازدواج الرؤية'] },
  { id: 'o23', word: { Arabic: 'العمى الليلي', English: 'Nyctalopia' }, level: 'Clinical', difficulty: 3, type: 'Symptom', subjects: ['Ophthalmology', 'Nutrition'], synonyms: ['عشى الليل'] },
  { id: 'o24', word: { Arabic: 'الوميض الضوئي', English: 'Photopsia' }, level: 'Clinical', difficulty: 3, type: 'Symptom', subjects: ['Ophthalmology', 'Neurology'], synonyms: ['فلاشات العين'] },
  { id: 'o25', word: { Arabic: 'المياه الزرقاء', English: 'Glaucoma' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Ophthalmology', 'Neurology'], synonyms: ['ضغط العين'] },
  { id: 'o26', word: { Arabic: 'المياه البيضاء', English: 'Cataract' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Ophthalmology', 'Anatomy'], synonyms: ['الكتاركت'] },
  { id: 'o27', word: { Arabic: 'انفصال الشبكية', English: 'Retinal Detachment' }, level: 'Clinical', difficulty: 3, type: 'Disease', subjects: ['Ophthalmology', 'Emergency Medicine'], synonyms: ['انفصال الشبكية'] },
  { id: 'o28', word: { Arabic: 'التهاب القرنية', English: 'Keratitis' }, level: 'Clinical', difficulty: 2, type: 'Disease', subjects: ['Ophthalmology', 'Infectious Diseases'], synonyms: ['التهاب القرنية'] },
  { id: 'o29', word: { Arabic: 'احتقان الملتحمة', English: 'Conjunctival Hyperemia' }, level: 'Clinical', difficulty: 2, type: 'Symptom', subjects: ['Ophthalmology'], synonyms: ['احمرار العين'] },
  { id: 'o30', word: { Arabic: 'قطرات العين', English: 'Eye Drops' }, level: 'Clinical', difficulty: 1, type: 'Pharma', subjects:['Ophthalmology', 'Pharmacology'], synonyms:['قطرات'] },
];

export const STAGING_HINTS = {
  // HINTS WILL BE ADDED IN THE NEXT STEP
};
