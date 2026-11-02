import { MedicalWord } from './medicalWords';
import { HINTS_DICTIONARY } from './hints';

export type ClinicalBranch = 'Disease' | 'Organ' | 'Pharma' | 'Parasite' | 'Equipment' | 'Other';

export interface InquiryQuestion {
  id: string;
  stage: 1 | 2 | 3 | 4 | 5;
  branch: ClinicalBranch | 'All';
  system?: string;
  text: {
    ar: string;
    en: string;
  };
  expectedCategory?: string;
  hintAr?: string;
}

export interface InquiryAnswerOption {
  id: 'YES' | 'NO' | 'MAYBE';
  labelAr: string;
  labelEn: string;
  color: string;
}

export interface MisleadingEntry {
  stage: number;
  questionId: string;
  questionAr: string;
  questionEn: string;
  doctorName: string;
  doctorId: string;
  cardNameAr: string;
  cardNameEn: string;
  givenAnswer: 'YES' | 'NO' | 'MAYBE';
  trueAnswer: 'YES' | 'NO' | 'MAYBE';
  clinicalReasonAr: string;
  clinicalReasonEn: string;
}

export interface TruthEvaluationResult {
  trueAnswer: 'YES' | 'NO' | 'MAYBE';
  clinicalReasonAr: string;
  clinicalReasonEn: string;
}

export const INQUIRY_ANSWER_OPTIONS: InquiryAnswerOption[] = [
  { id: 'YES', labelAr: 'نعم بالتأكيد ✅', labelEn: 'Yes definitely ✅', color: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' },
  { id: 'NO', labelAr: 'لا إطلاقاً ❌', labelEn: 'No absolutely not ❌', color: 'bg-rose-500/15 border-rose-500/40 text-rose-400' },
  { id: 'MAYBE', labelAr: 'غير دقيق / جزئياً ⚖️', labelEn: 'Partially / Depends ⚖️', color: 'bg-amber-500/15 border-amber-500/40 text-amber-400' },
];

/**
 * STAGE 1: Broad Macro Classification (Fixed for everyone in session opening)
 */
export const STAGE_1_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's1_q1_disease',
    stage: 1,
    branch: 'All',
    expectedCategory: 'Disease',
    text: {
      ar: 'هل هذا المصطلح مرض أو متلازمة سريرية (Disease / Syndrome)؟',
      en: 'Is this term a disease or a clinical syndrome?',
    },
    hintAr: 'تشخيص اعتلال أو حالة مرضية',
  },
  {
    id: 's1_q2_organ',
    stage: 1,
    branch: 'All',
    expectedCategory: 'Organ',
    text: {
      ar: 'هل هذا المصطلح عضو أو تركيب تشريحي في الجسم (Organ / Anatomy)؟',
      en: 'Is this term an organ or anatomical structure in the body?',
    },
    hintAr: 'عضو، عضلة، عصب، أو عظمة',
  },
  {
    id: 's1_q3_pharma',
    stage: 1,
    branch: 'All',
    expectedCategory: 'Pharma',
    text: {
      ar: 'هل هذا المصطلح دواء أو مستحضر علاجي كيميائي (Pharma / Drug)؟',
      en: 'Is this term a pharmaceutical medication or drug?',
    },
    hintAr: 'علاج دوائي أو مستحضر صيدلاني',
  },
  {
    id: 's1_q4_parasite',
    stage: 1,
    branch: 'All',
    expectedCategory: 'Parasite',
    text: {
      ar: 'هل هذا المصطلح كائن دقيق أو ميكروب مسبب للعدوى (Pathogen / Parasite)؟',
      en: 'Is this term an infectious pathogen or microorganism?',
    },
    hintAr: 'بكتيريا، فيروس، أو طفيلي مجهري',
  },
  {
    id: 's1_q5_equipment',
    stage: 1,
    branch: 'All',
    expectedCategory: 'Equipment',
    text: {
      ar: 'هل هذا المصطلح أداة جراحية أو فحص تشخيصي معملي (Tool / Procedure)؟',
      en: 'Is this term surgical equipment or a diagnostic procedure?',
    },
    hintAr: 'أداة طبية، منظار، أو جهاز',
  },
];

/**
 * STAGE 2: Biological Organ System / Anatomical Region / Therapeutic Class
 */
export const STAGE_2_DISEASE_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's2_d_cardio',
    stage: 2,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يصيب هذا المرض بشكل رئيسي القلب أو الأوعية الدموية (Cardiovascular)؟',
      en: 'Does this disease primarily affect the cardiovascular system or blood vessels?',
    },
    hintAr: 'أمراض القلب، الشرايين، الصمامات، وضغط الدم',
  },
  {
    id: 's2_d_git',
    stage: 2,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يصيب الجهاز الهضمي أو الكبد أو المرارة والبنكرياس (GIT / Hepatic)؟',
      en: 'Does it involve the gastrointestinal tract, liver, or pancreas?',
    },
    hintAr: 'المعدة، الأمعاء، الكبد، المرارة، والبنكرياس',
  },
  {
    id: 's2_d_respiratory',
    stage: 2,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يصيب الجهاز التنفسي أو الرئتين والشعب الهوائية (Respiratory)؟',
      en: 'Does it affect the respiratory system, lungs, or airways?',
    },
    hintAr: 'أمراض الرئتين، القصبات الهوائية، والغشاء البلوري',
  },
  {
    id: 's2_d_neuro',
    stage: 2,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يتبع أمراض المخ والجهاز العصبي المركزي أو الطرفي (Neurology)؟',
      en: 'Does it involve the central or peripheral nervous system?',
    },
    hintAr: 'الدماغ، الحبل الشوكي، والأعصاب الطرفية',
  },
  {
    id: 's2_d_endocrine',
    stage: 2,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل هو اضطراب في الغدد الصماء أو التمثيل الغذائي والأيض (Endocrine / Metabolic)؟',
      en: 'Is it an endocrine, hormonal, or metabolic disorder?',
    },
    hintAr: 'الغدة الدرقية، السكري، الكظرية، والنخامية',
  },
  {
    id: 's2_d_renal',
    stage: 2,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يصيب الكلى أو الجهاز البولي والمسالك (Renal & Urinary tract)؟',
      en: 'Does it affect the kidneys or urinary tract system?',
    },
    hintAr: 'التهاب الكبيبات، الفشل الكلوي، والمسالك البولية',
  },
  {
    id: 's2_d_ortho',
    stage: 2,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يتركز في العظام أو المفاصل أو الأربطة والعضلات (Musculoskeletal / Ortho)؟',
      en: 'Is it localized to bones, joints, ligaments, or skeletal muscles?',
    },
    hintAr: 'الكسور، التهاب المفاصل، الغضاريف، وهشاشة العظام',
  },
  {
    id: 's2_d_infectious',
    stage: 2,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل هو مرض معدٍ ميكروبي جهازي يسببه بكتيريا أو فيروس أو طفيلي (Systemic Infection)؟',
      en: 'Is it a systemic infectious disease caused by bacteria, virus, or parasite?',
    },
    hintAr: 'الأمراض المعدية الشائعة والتسمم الدموي',
  },
];

export const STAGE_2_ORGAN_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's2_o_thorax',
    stage: 2,
    branch: 'Organ',
    text: {
      ar: 'هل يقع هذا العضو أو التركيب داخل التجويف الصدري (Thorax)؟',
      en: 'Is this organ or structure located within the thoracic cavity?',
    },
    hintAr: 'القلب، الرئتين، المريء، أو القفص الصدري',
  },
  {
    id: 's2_o_abdomen',
    stage: 2,
    branch: 'Organ',
    text: {
      ar: 'هل يقع هذا العضو داخل تجويف البطن أو الحوض (Abdomen & Pelvis)؟',
      en: 'Is it located within the abdominal or pelvic cavity?',
    },
    hintAr: 'الكبد، الطحال، المعدة، الأمعاء، أو الكلى',
  },
  {
    id: 's2_o_musculoskeletal',
    stage: 2,
    branch: 'Organ',
    text: {
      ar: 'هل هو جزء من الجهاز الحركي والعضلي أو المفاصل والعظام (Musculoskeletal)؟',
      en: 'Is it part of the musculoskeletal system, joints, or bones?',
    },
    hintAr: 'عظمة، مفصل، وتر، أو عضلة إرادية',
  },
  {
    id: 's2_o_head_neck',
    stage: 2,
    branch: 'Organ',
    text: {
      ar: 'هل يقع في منطقة الرأس أو العنق أو داخل الجمجمة (Head & Neck / Cranial)؟',
      en: 'Is it located in the head, neck, or cranial cavity?',
    },
    hintAr: 'المخ، العين، الأذن، أو الغدة الدرقية',
  },
  {
    id: 's2_o_paired',
    stage: 2,
    branch: 'Organ',
    text: {
      ar: 'هل هذا العضو زوجي في جسم الإنسان (عضو على اليمين وآخر على اليسار)؟',
      en: 'Is this a paired anatomical organ in the human body?',
    },
    hintAr: 'كليتان، رئتان، عينان، أو مبيضان',
  },
];

export const STAGE_2_PHARMA_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's2_p_antimicrobial',
    stage: 2,
    branch: 'Pharma',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل هذا الدواء مضاد حيوي أو مضاد للميكروبات والعدوى (Antimicrobial)؟',
      en: 'Is this drug an antibiotic or antimicrobial agent?',
    },
  },
  {
    id: 's2_p_cvs',
    stage: 2,
    branch: 'Pharma',
    system: 'CVS',
    text: {
      ar: 'هل هو مخصص لعلاج أمراض القلب وضغط الدم والسيولة (Cardiovascular Rx)؟',
      en: 'Is it prescribed for cardiovascular conditions or blood pressure?',
    },
  },
  {
    id: 's2_p_cns',
    stage: 2,
    branch: 'Pharma',
    system: 'NEURO',
    text: {
      ar: 'هل يؤثر بشكل مباشر على الجهاز العصبي والمخ أو الحالة النفسية (CNS / Psych)؟',
      en: 'Does it directly act on the central nervous system or mood?',
    },
  },
  {
    id: 's2_p_pain',
    stage: 2,
    branch: 'Pharma',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل هو مسكن للألم أو مضاد للالتهاب والتورم (Analgesic / Anti-inflammatory)؟',
      en: 'Is it an analgesic pain reliever or anti-inflammatory drug?',
    },
  },
  {
    id: 's2_p_hormone',
    stage: 2,
    branch: 'Pharma',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل هذا الدواء هرمون أو علاج تعويضي للغدد (Hormonal / Replacement therapy)؟',
      en: 'Is it a hormone or endocrine replacement therapy?',
    },
  },
];

/**
 * STAGE 3: Pathogenesis & Disease Mechanism (Adaptive per System)
 */
export const STAGE_3_CVS_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_cvs_ischemia',
    stage: 3,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل ينتج المرض عن انسداد شرياني حاد ونقص التروية الدموية (Ischemia / Infarction)؟',
      en: 'Is it caused by acute arterial occlusion and ischemic tissue necrosis?',
    },
    hintAr: 'احتشاء عضلة القلب والجلطة التاجية',
  },
  {
    id: 's3_cvs_arrhythmia',
    stage: 3,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل هو اضطراب في كهربية وتوصيل نظم نبضات القلب (Cardiac Arrhythmia)؟',
      en: 'Is it an electrical conduction disorder or cardiac rhythm abnormality?',
    },
    hintAr: 'الرجفان الأذيني أو تسارع/تباطؤ النبض',
  },
  {
    id: 's3_cvs_valve',
    stage: 3,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يصيب بشكل رئيسي صمامات القلب بالضيق أو الارتجاع (Valvular Disease)؟',
      en: 'Does it primarily affect cardiac valves with stenosis or regurgitation?',
    },
    hintAr: 'أمراض الصمام الميترالي أو الأورطي',
  },
  {
    id: 's3_cvs_failure',
    stage: 3,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يسبب فشلاً وقصوراً في كفاءة ضخ عضلة القلب للدم (Congestive Heart Failure)؟',
      en: 'Does it cause congestive pump failure and reduced ejection fraction?',
    },
    hintAr: 'هبوط وقصور القلب الاحتقاني',
  },
  {
    id: 's3_cvs_congenital',
    stage: 3,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل هو عيب تركيبي خلقي ولادي في جدران أو أوعية القلب (Congenital Anomaly)؟',
      en: 'Is it a congenital structural defect present since birth?',
    },
    hintAr: 'ثقب القلب أو رباعي فالوت',
  },
];

export const STAGE_3_GIT_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_git_infection_inflam',
    stage: 3,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يتضمن التهاباً أو تقرحاً في بطانة المعدة أو الأمعاء (Ulcer / Mucosal Inflammation)؟',
      en: 'Does it involve mucosal inflammation or ulceration of the GI tract?',
    },
    hintAr: 'قرحة المعدة أو التهاب القولون',
  },
  {
    id: 's3_git_obstruction',
    stage: 3,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يؤدي إلى انسداد ميكانيكي حاد في مجرى الأمعاء أو بطن جراحية حادة (Obstruction)؟',
      en: 'Does it cause mechanical intestinal obstruction or an acute surgical abdomen?',
    },
    hintAr: 'انسداد الأمعاء أو التواء القولون',
  },
  {
    id: 's3_git_cirrhosis',
    stage: 3,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يؤدي إلى تليف تدريجي وتندب دائم في خلايا الكبد (Cirrhosis / Fibrosis)؟',
      en: 'Does it lead to progressive fibrosis, cirrhosis, or chronic liver failure?',
    },
    hintAr: 'تليف الكبد والتهاب الكبد الوبائي',
  },
  {
    id: 's3_git_autoimmune',
    stage: 3,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل هو مرض مناعي ذاتي هضمي كالقولون التقرحي أو كرون أو السيلياك (Autoimmune GI)؟',
      en: 'Is it an autoimmune gastrointestinal disorder (IBD, Crohn’s, or Celiac)?',
    },
  },
  {
    id: 's3_git_calculi',
    stage: 3,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يرتبط بتكون حصوات صفراوية تسد القنوات أو المرارة (Gallstones / Cholelithiasis)؟',
      en: 'Is it triggered by gallstones obstructing the gallbladder or bile ducts?',
    },
    hintAr: 'التهاب المرارة وحصوات القناة الصفراوية',
  },
];

export const STAGE_3_RESP_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_resp_obstructive',
    stage: 3,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يتميز بضيق وانسداد تشنجي في القصبات الهوائية (Obstructive Airway Disease)؟',
      en: 'Is it characterized by airway bronchospasm and airflow limitation (Asthma/COPD)?',
    },
    hintAr: 'الأزمة الربوية أو السدة الرئوية المزمنة',
  },
  {
    id: 's3_resp_infection',
    stage: 3,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل ينتج عن عدوى والتهاب صديدي في نسيج الحويصلات الهوائية (Pneumonia)؟',
      en: 'Is it an infectious inflammatory consolidation of lung alveoli (Pneumonia)?',
    },
    hintAr: 'الالتهاب الرئوي الحاد أو الدرن',
  },
  {
    id: 's3_resp_pleura',
    stage: 3,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يصيب الغشاء البلوري المحيط بالرئة بتجمع سوائل أو هواء (Pleural Effusion / Pneumothorax)؟',
      en: 'Does it primarily involve pleural effusion, pleurisy, or pneumothorax?',
    },
  },
  {
    id: 's3_resp_chronic',
    stage: 3,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يرتبط المرض بعامل خطورة رئيسي وهو التدخين المزمن لسنوات طويلة (Smoking-related)؟',
      en: 'Is long-term tobacco smoking the primary etiological risk factor?',
    },
  },
  {
    id: 's3_resp_embolism',
    stage: 3,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل هو انسداد وعائي رئوي طارئ بجلطة قادمة من أوردة الساقين (Pulmonary Embolism)؟',
      en: 'Is it an acute vascular thromboembolism occluding the pulmonary arterial bed?',
    },
    hintAr: 'جلطة الشريان الرئوي الحادة',
  },
];

export const STAGE_3_NEURO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_neuro_vascular',
    stage: 3,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل ينتج عن خلل وعائي مفاجئ كنقص تروية أو نزيف دماغي (Stroke / CVA)؟',
      en: 'Is it caused by acute cerebral ischemia or intracranial hemorrhage (Stroke)?',
    },
    hintAr: 'السكتة الدماغية والنزيف المخي',
  },
  {
    id: 's3_neuro_degenerative',
    stage: 3,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل هو مرض تنكسي عصبي مزمن يؤدي لتلف تدريجي في خلايا المخ (Neurodegenerative)؟',
      en: 'Is it a progressive neurodegenerative disorder destroying brain neurons?',
    },
    hintAr: 'ألزهايمر، باركنسون، أو التصلب الجانبي',
  },
  {
    id: 's3_neuro_electrical',
    stage: 3,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يتميز بنشاط كهربي مفرط ومفاجئ يسبب نوبات صرعية (Epilepsy / Seizures)؟',
      en: 'Does it involve paroxysmal abnormal synchronized cortical electrical discharges?',
    },
    hintAr: 'الصرع والتشنجات العصبية',
  },
  {
    id: 's3_neuro_infection',
    stage: 3,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل هو عدوى والتهاب صديدي في السحايا المحيطة بالمخ (Meningitis / Encephalitis)؟',
      en: 'Is it an infectious inflammation of the cerebral meninges or parenchyma?',
    },
    hintAr: 'التهاب السحايا الحمى الشوكية',
  },
  {
    id: 's3_neuro_autoimmune',
    stage: 3,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يهاجم الغلاف المياليني العازل للأعصاب مناعياً (Multiple Sclerosis / Demyelinating)؟',
      en: 'Does it involve autoimmune destruction of axonal myelin sheath insulation (MS)?',
    },
    hintAr: 'مرض التصلب المتعدد MS',
  },
];

export const STAGE_3_ENDO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_endo_autoimmune',
    stage: 3,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل ينتج عن تدمير مناعي ذاتي لخلايا الغدة المفرزة للهرمون (Autoimmune Endocrine)؟',
      en: 'Is it caused by autoimmune destruction of endocrine hormone-producing cells?',
    },
    hintAr: 'السكري النوع الأول أو هاشيموتو أو جريفز',
  },
  {
    id: 's3_endo_hypo',
    stage: 3,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يتصف بنقص شديد وقصور في إفراز الهرمونات بالجسم (Hypofunction / Deficiency)؟',
      en: 'Is it characterized by endocrine glandular hypofunction and hormone deficiency?',
    },
    hintAr: 'قصور الغدة الدرقية أو مرض أديسون',
  },
  {
    id: 's3_endo_hyper',
    stage: 3,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يتصف بفرط وتسمم إفرازي هرموني مفرط (Hypersecretion / Thyrotoxicosis)؟',
      en: 'Is it marked by excessive hypersecretion of systemic hormones?',
    },
    hintAr: 'فرط نشاط الغدة الدرقية أو متلازمة كوشينغ',
  },
  {
    id: 's3_endo_metabolic',
    stage: 3,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يسبب اضطراباً رئيسياً في استقلاب الجلوكوز ومقاومة الأنسولين (Glucose Metabolic)؟',
      en: 'Does it fundamentally disrupt blood glucose regulation and insulin sensitivity?',
    },
    hintAr: 'مرض السكري النوع الثاني',
  },
  {
    id: 's3_endo_adenoma',
    stage: 3,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل ينتج عادة عن ورم غدي حميد نشط في الغدة النخامية أو الكظرية (Pituitary / Adrenal Adenoma)؟',
      en: 'Is it commonly provoked by a functioning benign glandular adenoma?',
    },
  },
];

export const STAGE_3_RENAL_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_renal_glomerular',
    stage: 3,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يصيب كبيبات الكلى مسبباً ارتشاح البروتين أو نزول الدم (Glomerulonephritis / Nephrotic)؟',
      en: 'Does it damage renal glomeruli causing heavy proteinuria or hematuria?',
    },
    hintAr: 'المتلازمة الكلوية أو التهاب الكبيبات',
  },
  {
    id: 's3_renal_acute_failure',
    stage: 3,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يتظاهر بفشل كلوي حاد وتراكم مفاجئ للسموم والبولينا بالدم (Acute Kidney Injury)؟',
      en: 'Can it present as acute oliguric kidney injury with sudden azotemia/uremia?',
    },
  },
  {
    id: 's3_renal_chronic',
    stage: 3,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يتطور لفشل كلوي مزمن نهائي يستدعي الغسيل الدموي (End-Stage Renal Disease)؟',
      en: 'Does it lead to irreversible chronic kidney failure requiring dialysis?',
    },
    hintAr: 'الفشل الكلوي المزمن',
  },
  {
    id: 's3_renal_stone',
    stage: 3,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل ينتج عن ترسب الأملاح وتكوين حصوات في حوض الكلية أو الحالب (Nephrolithiasis)؟',
      en: 'Is it caused by crystal precipitation and calculus formation in the renal tract?',
    },
    hintAr: 'حصوات الكلى والحالب',
  },
  {
    id: 's3_renal_uti',
    stage: 3,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل هو عدوى بكتيرية صاعدة في المسالك البولية أو حوض الكلى (UTI / Pyelonephritis)؟',
      en: 'Is it an ascending bacterial infection of the urinary tract or kidney parenchyma?',
    },
  },
];

export const STAGE_3_INF_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_inf_bacterial',
    stage: 3,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل الميكروب المسبب بكتيريا تستجيب للعلاج بالمضادات الحيوية (Bacterial Infection)؟',
      en: 'Is the causative pathogen a bacterium susceptible to antibacterial agents?',
    },
  },
  {
    id: 's3_inf_viral',
    stage: 3,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل العدوى فيروسية المنشأ وتعتمد على مناعة الجسم ومضادات الفيروسات (Viral Infection)؟',
      en: 'Is this an infection of viral etiology managed supportively or with antivirals?',
    },
  },
  {
    id: 's3_inf_vector',
    stage: 3,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل ينتقل المرض عبر لدغات الحشرات أو البعوض (Vector-borne / Mosquito)؟',
      en: 'Is it transmitted via an arthropod vector or mosquito vector like Malaria?',
    },
    hintAr: 'الملاريا أو حمى الضنك',
  },
  {
    id: 's3_inf_airborne',
    stage: 3,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل ينتقل برذاذ التنفس والهواء سريع الانتشار (Airborne / Droplet Transmission)؟',
      en: 'Is it spread airborne through respiratory droplets from coughing/sneezing?',
    },
    hintAr: 'الإنفلونزا، كورونا، أو الدرن',
  },
  {
    id: 's3_inf_zoonotic',
    stage: 3,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل هو مرض حيواني المنشأ ينتقل للإنسان من الماشية أو الحيوانات (Zoonosis)؟',
      en: 'Is it a zoonotic infection acquired from direct animal exposure or unpasteurized milk?',
    },
    hintAr: 'داء البروسيلات أو السعار',
  },
];

export const STAGE_3_MSK_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_msk_degenerative',
    stage: 3,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل هو تآكل واحتكاك ميكانيكي تدريجي في غضاريف المفاصل (Osteoarthritis)؟',
      en: 'Is it mechanical wear-and-tear degeneration of joint articular cartilage?',
    },
    hintAr: 'خشونة الركبة والمفاصل',
  },
  {
    id: 's3_msk_inflammatory',
    stage: 3,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل هو التهاب مناعي روماتيزمي يصيب بطانة المفاصل بالتآكل (Rheumatoid Arthritis)؟',
      en: 'Is it an autoimmune inflammatory polyarthritis eroding the synovial membrane?',
    },
    hintAr: 'الروماتويد المفصلي المناعي',
  },
  {
    id: 's3_msk_trauma',
    stage: 3,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل ينتج عن صدمة ميكانيكية أو التواء حاد يسبب كسراً أو تمزقاً (Trauma / Fracture)؟',
      en: 'Is it provoked by acute physical impact causing a fracture or ligament tear?',
    },
    hintAr: 'كسور العظام وتمزق الأربطة',
  },
  {
    id: 's3_msk_metabolic',
    stage: 3,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل ينتج عن ترسب بلورات أملاح حمض اليوريك داخل تجويف المفصل (Gout / Crystal Arthritis)؟',
      en: 'Is it caused by monosodium urate crystal precipitation in joints (Gout)?',
    },
    hintAr: 'داء النقرس',
  },
  {
    id: 's3_msk_density',
    stage: 3,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يسبب هشاشة وضعفاً في كثافة النسيج العظمي يجعله قابلاً للكسر بسهولة (Osteoporosis)؟',
      en: 'Does it involve systemic reduction of bone mineral density causing skeletal fragility?',
    },
    hintAr: 'هشاشة العظام',
  },
];

export const STAGE_3_DISEASE_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_d_acute',
    stage: 3,
    branch: 'Disease',
    text: {
      ar: 'هل يعتبر هذا المرض حالة حادة وطارئة تستدعي دخول الطوارئ (Acute ER)؟',
      en: 'Is this disease considered an acute emergency requiring ER admission?',
    },
  },
  {
    id: 's3_d_chronic',
    stage: 3,
    branch: 'Disease',
    text: {
      ar: 'هل هو مرض مزمن يرافق المريض طوال حياته ويحتاج متابعة مستمرة (Chronic)؟',
      en: 'Is it a chronic, lifelong disease needing continuous follow-up?',
    },
  },
  {
    id: 's3_d_infectious',
    stage: 3,
    branch: 'Disease',
    text: {
      ar: 'هل ينتج المرض عن عدوى ميكروبية معدية أو ميكروب بيئي (Infectious origin)؟',
      en: 'Is this disease caused by an infectious microorganism?',
    },
  },
  {
    id: 's3_d_autoimmune',
    stage: 3,
    branch: 'Disease',
    text: {
      ar: 'هل هو مرض مناعي ذاتي حيث يهاجم الجهاز المناعي خلايا الجسم (Autoimmune)؟',
      en: 'Is it an autoimmune disease where the immune system attacks body tissues?',
    },
  },
  {
    id: 's3_d_neoplasm',
    stage: 3,
    branch: 'Disease',
    text: {
      ar: 'هل يتضمن المرض ورماً أو تكاثراً خلوياً حميداً أو خبيثاً (Neoplastic / Malignant)؟',
      en: 'Does this condition involve a benign or malignant neoplasm/tumor?',
    },
  },
];

export const STAGE_3_ORGAN_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_o_gland',
    stage: 3,
    branch: 'Organ',
    text: {
      ar: 'هل يقوم هذا العضو بإفراز هرمونات أو إنزيمات هاضمة في الدم/القنوات (Gland)؟',
      en: 'Does this organ secrete hormones or digestive enzymes (endocrine/exocrine)?',
    },
  },
  {
    id: 's3_o_filter',
    stage: 3,
    branch: 'Organ',
    text: {
      ar: 'هل وظيفته الأساسية التصفية، التنقية، أو إخراج الفضلات من الدم؟',
      en: 'Is its main physiological role filtration, detox, or waste excretion?',
    },
  },
  {
    id: 's3_o_hollow',
    stage: 3,
    branch: 'Organ',
    text: {
      ar: 'هل هو عضو مجوف يحتوي على تجويف داخلي (Hollow viscus) مثل المعدة أو الأمعاء؟',
      en: 'Is it a hollow organ with an internal lumen (hollow viscus)?',
    },
  },
  {
    id: 's3_o_solid',
    stage: 3,
    branch: 'Organ',
    text: {
      ar: 'هل هو عضو صلب ومصمت نسيجياً (Solid organ) مثل الكبد أو الطحال؟',
      en: 'Is it a solid parenchymal organ like the liver or spleen?',
    },
  },
  {
    id: 's3_o_vital',
    stage: 3,
    branch: 'Organ',
    text: {
      ar: 'هل هو عضو حيوي لا يمكن للإنسان البقاء على قيد الحياة لدقائق بدونه (Vital organ)؟',
      en: 'Is this an essential vital organ needed to sustain life minute-by-minute?',
    },
  },
];

export const STAGE_3_PHARMA_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's3_p_iv',
    stage: 3,
    branch: 'Pharma',
    text: {
      ar: 'هل يُعطى هذا الدواء عادةً عن طريق الحقن الوريدي في المستشفيات (IV injection)؟',
      en: 'Is this drug commonly administered intravenously in hospital settings?',
    },
  },
  {
    id: 's3_p_oral',
    stage: 3,
    branch: 'Pharma',
    text: {
      ar: 'هل يتناوله المريض عن طريق الفم على شكل أقراص أو كبسولات (Oral tablets)؟',
      en: 'Is it routinely taken orally as pills or capsules?',
    },
  },
  {
    id: 's3_p_receptor',
    stage: 3,
    branch: 'Pharma',
    text: {
      ar: 'هل يعمل عن طريق غلق مستقبلات معينة بالجسم (Receptor blocker / Antagonist)؟',
      en: 'Does its mechanism involve blocking specific receptors (receptor antagonist)?',
    },
  },
  {
    id: 's3_p_enzyme_inhibitor',
    stage: 3,
    branch: 'Pharma',
    text: {
      ar: 'هل يعمل عن طريق تثبيط إنزيم حيوي معين داخل الخلايا (Enzyme inhibitor)؟',
      en: 'Does it act by inhibiting a specific rate-limiting metabolic enzyme?',
    },
  },
  {
    id: 's3_p_otc',
    stage: 3,
    branch: 'Pharma',
    text: {
      ar: 'هل يمكن صرف هذا الدواء بدون وصفة طبية كمسكن أو خافض حرارة شائع (OTC)؟',
      en: 'Can this medication be dispensed without prescription (Over-the-counter)?',
    },
  },
];

/**
 * STAGE 4: Cardinal Symptoms, Physical Signs & Presentation (Adaptive per System)
 */
export const STAGE_4_CVS_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_cvs_chest_pain',
    stage: 4,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يشكو المريض من ألم ضاغط عاصر خلف عظم القص يمتد للكتف الأيسر أو الفك (Crushing Chest Pain)؟',
      en: 'Is the hallmark presentation squeezing substernal chest pain radiating to left shoulder/jaw?',
    },
    hintAr: 'الذبحة الصدرية واحتشاء القلب',
  },
  {
    id: 's4_cvs_orthopnea',
    stage: 4,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يسبب ضيق تنفس استلقائي يستدعي استخدام عدة وسائد للنوم (Orthopnea / PND)؟',
      en: 'Does it provoke orthopnea or paroxysmal nocturnal dyspnea relieved by sitting upright?',
    },
    hintAr: 'علامة احتقان الرئتين في هبوط القلب',
  },
  {
    id: 's4_cvs_edema',
    stage: 4,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يظهر تورم منطبع في الساقين مع احتقان وانتباخ أوردة الرقبة (Bilateral Pitting Edema / JVD)؟',
      en: 'Does it produce bilateral lower limb pitting edema and elevated jugular venous pressure?',
    },
  },
  {
    id: 's4_cvs_syncope',
    stage: 4,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يمكن أن يسبب إغماءً مفاجئاً أو هبوطاً حاداً في ضغط الدم (Syncope / Cardiogenic Shock)؟',
      en: 'Can it trigger sudden cardiac syncope, transient loss of consciousness, or shock?',
    },
  },
  {
    id: 's4_cvs_palpitations',
    stage: 4,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يشتكي المريض من رفرفة أو خفقان سريع وغير منتظم في الصدر (Palpitations)؟',
      en: 'Does the patient complain of prominent rapid, pounding, or irregular cardiac palpitations?',
    },
  },
];

export const STAGE_4_GIT_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_git_hematemesis',
    stage: 4,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يتظاهر بنزيف هضمي علوي أو قيء دموي وبراز أسود مدمم (Hematemesis / Melena)؟',
      en: 'Does it present with upper GI bleeding, coffee-ground hematemesis, or dark melena?',
    },
    hintAr: 'نزيف القرحة أو دوالي المريء',
  },
  {
    id: 's4_git_rlq_pain',
    stage: 4,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل العلامة المميزة ألم شديد ومفاجئ في أسفل يمين البطن مع علامة ارتداد (RLQ / McBurney Point)؟',
      en: 'Is acute localized right lower quadrant pain with rebound tenderness the cardinal sign?',
    },
    hintAr: 'التهاب الزائدة الدودية الحاد',
  },
  {
    id: 's4_git_jaundice',
    stage: 4,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يظهر اصفرار واضح في بياض العين والجلد مع بول داكن (Jaundice / Icterus)؟',
      en: 'Does it produce evident clinical jaundice (yellow sclera and skin) with dark tea urine?',
    },
    hintAr: 'اليرقان وأمراض الكبد والمرارة',
  },
  {
    id: 's4_git_ascites',
    stage: 4,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يسبب انتفاخاً كبيراً في البطن نتيجة تجمع السوائل البريتونية (Ascites)؟',
      en: 'Does it cause significant abdominal distension due to peritoneal fluid accumulation (Ascites)?',
    },
  },
  {
    id: 's4_git_dysphagia',
    stage: 4,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل الشكوى الأبرز صعوبة أو ألم عند بلع الطعام والشراب (Dysphagia / Odynophagia)؟',
      en: 'Is progressive difficulty or painful swallowing of solids/liquids the primary symptom?',
    },
  },
];

export const STAGE_4_RESP_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_resp_hemoptysis',
    stage: 4,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يخرج المريض بصاقاً مدمماً أو يسعل دماً صريحاً (Hemoptysis / Coughing Blood)؟',
      en: 'Does the patient cough up frank blood or blood-streaked sputum (Hemoptysis)?',
    },
    hintAr: 'الدرن، الجلطة الرئوية، أو أورام الرئة',
  },
  {
    id: 's4_resp_wheezing',
    stage: 4,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يُسمع بالصدر صوت تصفير وأزيز موسيقي مميز مع الزفير (Expiratory Wheezes)؟',
      en: 'Is musical expiratory wheezing prominently heard on chest auscultation?',
    },
    hintAr: 'أزمة الربو الشعبي',
  },
  {
    id: 's4_resp_cyanosis',
    stage: 4,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يسبب زرقة في الشفاه والأظافر نتيجة نقص تشبع الأكسجين الشرياني (Cyanosis / Hypoxemia)؟',
      en: 'Does it cause central or peripheral bluish discoloration from arterial hypoxemia?',
    },
  },
  {
    id: 's4_resp_pleuritic_pain',
    stage: 4,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يشكو من ألم صدري حاد ومفاجئ يزداد بشكل حاد مع أخذ نفس عميق (Pleuritic Chest Pain)؟',
      en: 'Is there sharp localized chest pain characteristically worsening with deep inspiration?',
    },
  },
  {
    id: 's4_resp_productive_cough',
    stage: 4,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يعاني من سعال مزمن مصحوب بإفراز كميات كبيرة من البلغم الصديدي (Purulent Sputum)؟',
      en: 'Does the patient suffer from chronic productive cough with copious purulent sputum?',
    },
  },
];

export const STAGE_4_NEURO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_neuro_hemiparesis',
    stage: 4,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يتظاهر بضعف مفاجئ أو شلل في نصف الجسم مع اعوجاج بالفم (Hemiparesis / Facial Droop)؟',
      en: 'Does it present with sudden unilateral motor weakness, facial asymmetry, or hemiplegia?',
    },
    hintAr: 'السكتة الدماغية والجلطة المخية',
  },
  {
    id: 's4_neuro_tremor',
    stage: 4,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يظهر رعاشاً إيقاعياً في اليدين أثناء الراحة مع بطء الحركة وتيبس العضلات (Resting Tremor)؟',
      en: 'Does it manifest as asymmetric resting tremor, cogwheel rigidity, and bradykinesia?',
    },
    hintAr: 'الشلل الرعاش - باركنسون',
  },
  {
    id: 's4_neuro_headache_severe',
    stage: 4,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يوصف بأنه أسوأ صداع حاد وشديد شعر به المريض في حياته (Thunderclap Headache)؟',
      en: 'Is the chief presenting sign sudden excruciating "worst headache of life"?',
    },
    hintAr: 'النزيف تحت العنكبوتية أو الصداع النصفي الحاد',
  },
  {
    id: 's4_neuro_seizure_tonic',
    stage: 4,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يمر بنوبات تشنجية عصبية كبرى مع فقدان وعي وعض اللسان (Tonic-Clonic Convulsions)؟',
      en: 'Does the patient experience generalized tonic-clonic convulsions with postictal confusion?',
    },
  },
  {
    id: 's4_neuro_ataxia',
    stage: 4,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يؤثر على المخيخ مسبباً اضطراب التوازن وترنح المشية وتلعثم الكلام (Cerebellar Ataxia)؟',
      en: 'Does it impair cerebellar coordination, producing wide-based unsteady gait and ataxia?',
    },
  },
];

export const STAGE_4_ENDO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_endo_polyuria_polydipsia',
    stage: 4,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل الأعراض الكلاسيكية الثلاثة هي العطش الشديد، كثرة التبول، ونقص الوزن (3 Ps: Polyuria)؟',
      en: 'Are the hallmark symptoms excessive urination, intense thirst, and unexplained weight loss?',
    },
    hintAr: 'مرض السكري الكلاسيكي',
  },
  {
    id: 's4_endo_weight_cold',
    stage: 4,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يشتكي من خمول دائم، عدم تحمل البرودة، زيادة الوزن، وجفاف الجلد (Cold Intolerance)؟',
      en: 'Does it present with cold intolerance, weight gain, fatigue, constipation, and dry skin?',
    },
    hintAr: 'قصور الغدة الدرقية',
  },
  {
    id: 's4_endo_exophthalmos',
    stage: 4,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يظهر جحوظاً في مقلتي العينين مع تسارع النبض وعدم تحمل الحرارة (Exophthalmos)؟',
      en: 'Does it cause prominent eye bulging (exophthalmos), heat intolerance, and tachycardia?',
    },
    hintAr: 'فرط نشاط الدرقية - مرض جريفز',
  },
  {
    id: 's4_endo_hyperpigmentation',
    stage: 4,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل تظهر تصبغات جلدية برونزية داكنة في ثنايا الجسم وبطانة الفم (Hyperpigmentation)؟',
      en: 'Is there diffuse bronze hyperpigmentation of palmar creases and oral buccal mucosa?',
    },
    hintAr: 'قصور الغدة الكظرية - مرض أديسون',
  },
  {
    id: 's4_endo_moon_face',
    stage: 4,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يسبب استدارة الوجه كالبدر (Moon face) وتراكم الدهون بأعلى الظهر وخطوط حمراء بالبطن؟',
      en: 'Is there classic moon facies, buffalo hump, central obesity, and purple abdominal striae?',
    },
    hintAr: 'متلازمة كوشينغ وزيادة الكورتيزول',
  },
];

export const STAGE_4_RENAL_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_renal_colic',
    stage: 4,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل الشكوى مغص كلوي مبرح يبدأ في الخاصرة ويمتد إلى أسفل الحوض والفخذ (Renal Colic)؟',
      en: 'Is agonizing spasmodic flank pain radiating toward the groin (renal colic) the chief complaint?',
    },
    hintAr: 'حصوات الكلى والحالب',
  },
  {
    id: 's4_renal_hematuria',
    stage: 4,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يلاحظ المريض نزول بول أحمر مدمم أو بول داكن بلون الكولا/الشاي (Gross Hematuria)؟',
      en: 'Does the patient pass visibly red or smoky, tea-colored bloody urine (Hematuria)?',
    },
  },
  {
    id: 's4_renal_periorbital',
    stage: 4,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يلاحظ انتفاخاً وتورماً حول العينين والوجه خاصة عند الاستيقاظ صباحاً (Periorbital Edema)؟',
      en: 'Is morning facial puffiness and periorbital edema characteristically prominent?',
    },
    hintAr: 'التهاب الكبيبات أو المتلازمة الكلوية',
  },
  {
    id: 's4_renal_anuria',
    stage: 4,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يعاني من انخفاض حاد أو انقطاع تام في إخراج البول خلال 24 ساعة (Oliguria / Anuria)؟',
      en: 'Does urine output drop critically to severe oliguria or complete anuria (<100 ml/day)?',
    },
  },
  {
    id: 's4_renal_uremic_frost',
    stage: 4,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يعاني من حكة جلدية شديدة مع طعم معدني بالفم وغثيان مستمر (Uremic Symptoms)؟',
      en: 'Are uremic features present such as intractable pruritus, metallic taste, and nausea?',
    },
  },
];

export const STAGE_4_INF_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_inf_spiking_fever',
    stage: 4,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل تتكرر نوبات حمى شديدة متصاعدة مصحوبة برعشة وقشعريرة وتعرق غزير (Spiking Rigors)؟',
      en: 'Does it produce high swinging fevers accompanied by violent rigors and drenching sweats?',
    },
  },
  {
    id: 's4_inf_lymphadenopathy',
    stage: 4,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يظهر تضخم مؤلم أو غير مؤلم في العقد الليمفاوية بالرقبة أو الإبط (Lymphadenopathy)؟',
      en: 'Is there noticeable regional or generalized lymph node enlargement on examination?',
    },
  },
  {
    id: 's4_inf_rash_petechiae',
    stage: 4,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يظهر طفح جلدي نزفي دقيق على شكل نقط حمراء لا تختفي بالضغط (Petechial Purpuric Rash)؟',
      en: 'Does it display a non-blanching petechial or purpuric rash on the skin/conjunctiva?',
    },
    hintAr: 'علامة التهاب السحايا أو التسمم الدموي',
  },
  {
    id: 's4_inf_neck_stiffness',
    stage: 4,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يوجد تيبس وتصلب في الرقبة مع صعوبة ثني الذقن نحو الصدر (Nuchal Rigidity / Meningism)؟',
      en: 'Is there demonstrable neck stiffness and positive meningeal signs (Kernig/Brudzinski)?',
    },
    hintAr: 'التهاب السحايا الحاد',
  },
  {
    id: 's4_inf_septic_shock',
    stage: 4,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يمكن أن يتطور سريعاً لهبوط حاد في ضغط الدم وتسمم دموي مهدد للحياة (Septic Shock)؟',
      en: 'Can it rapidly cascade into refractory hypotension, organ hypoperfusion, and septic shock?',
    },
  },
];

export const STAGE_4_MSK_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_msk_morning_stiffness',
    stage: 4,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يشكو من تيبس صباحي بالمفاصل يستمر لأكثر من ساعة ويتحسن تدريجياً بالحركة (Morning Stiffness)؟',
      en: 'Is prolonged early morning joint stiffness (> 1 hour) that improves with movement a key sign?',
    },
    hintAr: 'التهاب المفاصل الروماتويدي',
  },
  {
    id: 's4_msk_podagra',
    stage: 4,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يصيب بشكل كلاسيكي مفصل إصبع القدم الأكبر بألم احمراري وتورم ناري شديد (Podagra)؟',
      en: 'Does it classically strike the first metatarsophalangeal joint of the big toe (Podagra)?',
    },
    hintAr: 'داء النقرس الحاد',
  },
  {
    id: 's4_msk_crepitus',
    stage: 4,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يُسمع صوت طقطقة وخشونة احتكاكية ملموسة عند ثني وفرد المفصل (Joint Crepitus)؟',
      en: 'Is audible or palpable joint crepitus detected on active or passive movement?',
    },
  },
  {
    id: 's4_msk_deformity',
    stage: 4,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يسبب تشوهات مزمنة في شكل الأصابع والمفاصل مثل انحراف اليد (Ulnar Deviation)؟',
      en: 'Does it result in characteristic hand joint deformities like swan-neck or ulnar drift?',
    },
  },
  {
    id: 's4_msk_bone_tenderness',
    stage: 4,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يشعر بألم موضعي حاد ومباشر عند لمس نقطة معينة في العظم مع عجز عن المشي (Point Tenderness)؟',
      en: 'Is there exquisite focal point tenderness over bone with immediate inability to bear weight?',
    },
    hintAr: 'كسور العظام الحادة',
  },
];

export const STAGE_4_DISEASE_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_d_pain',
    stage: 4,
    branch: 'Disease',
    text: {
      ar: 'هل الشكوى الأبرز التي يأتي بها المريض هي ألم شديد حاد (Severe Acute Pain)؟',
      en: 'Is the chief presenting complaint severe or acute pain?',
    },
  },
  {
    id: 's4_d_fever',
    stage: 4,
    branch: 'Disease',
    text: {
      ar: 'هل يرافق المرض ارتفاع ملحوظ في درجة الحرارة وقشعريرة (Fever & Chills)؟',
      en: 'Is the disease characteristically accompanied by high fever and chills?',
    },
  },
  {
    id: 's4_d_dyspnea',
    stage: 4,
    branch: 'Disease',
    text: {
      ar: 'هل يشتكي المريض بشكل ملحوظ من ضيق شديد في التنفس (Shortness of breath / Dyspnea)؟',
      en: 'Does the patient notably suffer from dyspnea or severe shortness of breath?',
    },
  },
  {
    id: 's4_d_jaundice',
    stage: 4,
    branch: 'Disease',
    text: {
      ar: 'هل يظهر المرض علامات خارجية مثل الاصفرار (Jaundice) أو طفح جلدي أو نزيف؟',
      en: 'Does it produce visible clinical signs like jaundice, rash, or petechial bleeding?',
    },
  },
  {
    id: 's4_d_consciousness',
    stage: 4,
    branch: 'Disease',
    text: {
      ar: 'هل يؤثر على درجة الوعي، التركيز، أو يسبب تشنجات عصبية (Altered mental status)؟',
      en: 'Does it alter consciousness, cause syncope, or provoke seizures?',
    },
  },
];

export const STAGE_4_ORGAN_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_o_circulation',
    stage: 4,
    branch: 'Organ',
    text: {
      ar: 'هل يتلقى هذا العضو تروية دموية مزدوجة أو تروية مباشرة من الشريان الأورطي؟',
      en: 'Does this organ receive direct major perfusion from the aorta or a dual blood supply?',
    },
  },
  {
    id: 's4_o_sensory',
    stage: 4,
    branch: 'Organ',
    text: {
      ar: 'هل هو مسؤول عن إحدى الحواس الخمس الرئيسية (رؤية، سمع، شم، تذوق، لمس)؟',
      en: 'Is it responsible for one of the primary special senses (vision, hearing, smell, etc.)?',
    },
  },
  {
    id: 's4_o_regeneration',
    stage: 4,
    branch: 'Organ',
    text: {
      ar: 'هل يمتلك هذا العضو قدرة فريدة على إعادة تجديد أنسجته التالفة (Regeneration)؟',
      en: 'Does this organ possess a notable capacity for self-regeneration of tissue?',
    },
  },
  {
    id: 's4_o_exam',
    stage: 4,
    branch: 'Organ',
    text: {
      ar: 'هل يمكن فحصه وإحساسه باليد مباشرة من جدار البطن أو الجسم (Palpable on exam)؟',
      en: 'Can this organ be palpated directly during physical examination when enlarged?',
    },
  },
];

export const STAGE_4_PHARMA_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's4_p_hepatotoxicity',
    stage: 4,
    branch: 'Pharma',
    text: {
      ar: 'هل يرتبط بأثر جانبي خطير على الكبد أو الكلى عند زيادة الجرعة (Organ toxicity)؟',
      en: 'Is it known for hepatotoxicity or nephrotoxicity with overdose?',
    },
  },
  {
    id: 's4_p_bleeding',
    stage: 4,
    branch: 'Pharma',
    text: {
      ar: 'هل يزيد هذا الدواء من خطر النزيف وقرح الجهاز الهضمي (Bleeding / Ulcer risk)؟',
      en: 'Does this drug increase bleeding risk or gastrointestinal ulceration?',
    },
  },
  {
    id: 's4_p_contraindication',
    stage: 4,
    branch: 'Pharma',
    text: {
      ar: 'هل يُمنع منعاً باتاً استخدامه خلال فترة الحمل (Teratogenic / Contraindicated in pregnancy)؟',
      en: 'Is it strictly contraindicated or teratogenic during pregnancy?',
    },
  },
  {
    id: 's4_p_sedation',
    stage: 4,
    branch: 'Pharma',
    text: {
      ar: 'هل يسبب الدوار والنعاس الشديد كعرض جانبي يمنع القيادة (Sedation / Drowsiness)؟',
      en: 'Does it cause significant central sedation and drowsiness affecting driving?',
    },
  },
];

/**
 * STAGE 5: Gold Standard Diagnosis & Definitive Clinical Management (Adaptive per System)
 */
export const STAGE_5_CVS_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_cvs_coronary_angiography',
    stage: 5,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل الفحص والتدخل الحاسم هو قسطرة الشرايين التاجية لتركيب دعامة (Coronary Angiography / PCI)؟',
      en: 'Is emergent coronary catheterization / angiography with PCI the definitive intervention?',
    },
    hintAr: 'قسطرة القلب التداخلية لإنقاذ الشرايين',
  },
  {
    id: 's5_cvs_troponin_ecg',
    stage: 5,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يعتمد التشخيص الفوري على رسم القلب 12-lead وتحليل إنزيم التروبونين (ECG & Troponin)؟',
      en: 'Does diagnosis rely on immediate 12-lead ECG combined with serial cardiac Troponin?',
    },
    hintAr: 'رسم القلب وإنزيمات القلب الحيوية',
  },
  {
    id: 's5_cvs_echo',
    stage: 5,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل الفحص الفاصل لتقييم كفاءة الضخ والصمامات هو الموجات فوق الصوتية (Echocardiogram - ECHO)؟',
      en: 'Is transthoracic echocardiography (ECHO) essential to assess ejection fraction and valves?',
    },
    hintAr: 'إيكو القلب',
  },
  {
    id: 's5_cvs_thrombolysis_pci',
    stage: 5,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل يتطلب العلاج الطارئ حقن مذيبات التجلط الوريدية خلال الساعات الأولى (Thrombolytic Therapy)؟',
      en: 'Does acute emergent management require intravenous thrombolysis (tPA) or balloon angioplasty?',
    },
  },
  {
    id: 's5_cvs_defibrillation',
    stage: 5,
    branch: 'Disease',
    system: 'CVS',
    text: {
      ar: 'هل الإجراء المنقذ للحياة هو توجيه صدمة كهربائية مزيلة للرجفان (Defibrillation / Cardioversion)؟',
      en: 'Is electrical direct-current cardioversion or defibrillation the lifesaving intervention?',
    },
  },
];

export const STAGE_5_GIT_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_git_endoscopy',
    stage: 5,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل الفحص الذهبي المؤكد هو المنظار الهضمي أو القولوني مع أخذ عينة (Endoscopy / Colonoscopy)؟',
      en: 'Is direct upper GI endoscopy or colonoscopy with biopsy the gold standard diagnosis?',
    },
    hintAr: 'المنظار الهضمي التشخيصي والعلاجي',
  },
  {
    id: 's5_git_appendectomy',
    stage: 5,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل العلاج الجذري والنهائي هو الاستئصال الجراحي الفوري بالمنظار (Laparoscopic Appendectomy)؟',
      en: 'Is urgent laparoscopic surgical resection (e.g. appendectomy/cholecystectomy) definitive?',
    },
    hintAr: 'استئصال الزائدة أو المرارة جراحياً',
  },
  {
    id: 's5_git_abdominal_ct',
    stage: 5,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل التصوير الإشعاعي الحاسم للحالة هو الأشعة المقطعية بالصبغة على البطن (Abdominal CT)؟',
      en: 'Is contrast-enhanced abdominal/pelvic computed tomography (CT) the definitive imaging?',
    },
  },
  {
    id: 's5_git_liver_biopsy_fibro',
    stage: 5,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل يعتمد تحديد درجة ومرحلة المرض على خزعة الكبد أو فحص الفايبروسكان (Liver Biopsy / FibroScan)؟',
      en: 'Does definitive staging rely on percutaneous liver biopsy or transient elastography?',
    },
  },
  {
    id: 's5_git_ppi_eradication',
    stage: 5,
    branch: 'Disease',
    system: 'GIT',
    text: {
      ar: 'هل العلاج الدوائي الأساسي هو مثبطات مضخة البروتون أو كورس القضاء على جرثومة المعدة (PPIs)؟',
      en: 'Does primary medical management involve proton-pump inhibitors (PPIs) or H. pylori eradication?',
    },
  },
];

export const STAGE_5_RESP_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_resp_spirometry',
    stage: 5,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل الفحص الذهبي هو قياس وظائف الرئة واختبار كفاءة التنفس بالنفخ (Spirometry - FEV1/FVC)؟',
      en: 'Is spirometry and pulmonary function testing (FEV1/FVC ratio) the gold standard?',
    },
    hintAr: 'جهاز قياس كفاءة الرئة ووظائف التنفس',
  },
  {
    id: 's5_resp_chest_ct_angio',
    stage: 5,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل الفحص الفاصل لتشخيصه هو الأشعة المقطعية عالية الدقة أو مقطعية الشرايين الرئوية (CTPA)؟',
      en: 'Is CT Pulmonary Angiography (CTPA) or High-Resolution CT the definitive diagnostic test?',
    },
  },
  {
    id: 's5_resp_sputum_culture',
    stage: 5,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يعتمد تحديد العلاج على مزرعة البلغم وفحص البكتيريا أو اختبار الـ PCR للدرن (Sputum Culture)؟',
      en: 'Does definitive pathogen confirmation rely on sputum culture, Gram stain, or PCR testing?',
    },
  },
  {
    id: 's5_resp_inhaler_steroid',
    stage: 5,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل خط العلاج الأساسي المستمر يعتمد على البخاخات الموسعة للشعب مع الكورتيزون الاستنشاقي (Inhalers)؟',
      en: 'Is long-term maintenance achieved via inhaled bronchodilators and inhaled corticosteroids?',
    },
    hintAr: 'بخاخات الربو وموسعات الشعب',
  },
  {
    id: 's5_resp_chest_tube',
    stage: 5,
    branch: 'Disease',
    system: 'RESPIRATORY',
    text: {
      ar: 'هل يتطلب التدخل الإسعافي تركيب أنبوبة صدرية لتفريغ الهواء أو السوائل (Chest Tube Insertion)؟',
      en: 'Does acute management require emergency insertion of an intercostal chest tube drain?',
    },
  },
];

export const STAGE_5_NEURO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_neuro_mri_brain',
    stage: 5,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل الفحص الإشعاعي الفاصل هو الرنين المغناطيسي للمخ أو المقطعية العاجلة (Brain MRI / CT)؟',
      en: 'Is emergency non-contrast brain CT or diffusion-weighted MRI (DWI) the primary investigation?',
    },
    hintAr: 'أشعة الرنين المغناطيسي على المخ',
  },
  {
    id: 's5_neuro_eeg',
    stage: 5,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل الفحص الذهبي لتأكيد الحالة هو رسم وتخطيط كهربية المخ (Electroencephalogram - EEG)؟',
      en: 'Is prolonged electroencephalography (EEG) the definitive tool to capture epileptiform activity?',
    },
    hintAr: 'رسم المخ الكهربي',
  },
  {
    id: 's5_neuro_lp_csf',
    stage: 5,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يعتمد التشخيص القاطع على البزل القطني لسحب وتحليل السائل النخاعي (Lumbar Puncture / CSF)؟',
      en: 'Does definitive diagnosis require lumbar puncture with cerebrospinal fluid (CSF) analysis?',
    },
    hintAr: 'بزل سائل النخاع الشوكي',
  },
  {
    id: 's5_neuro_tpa',
    stage: 5,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل يُعطى مذيب الجلطات الوريدي (rtPA) خلال نافذة زمنية حرجة لا تتعدى 4.5 ساعات (IV rtPA)؟',
      en: 'Is intravenous thrombolysis (rtPA) indicated within a strict 4.5-hour therapeutic window?',
    },
    hintAr: 'حقنة إذابة السكتة الدماغية السريعة',
  },
  {
    id: 's5_neuro_dopamine_agonist',
    stage: 5,
    branch: 'Disease',
    system: 'NEURO',
    text: {
      ar: 'هل العلاج الدوائي الأساسي يعتمد على مادة ليفودوبا لتعويض نقص الدوبامين بالمخ (Levodopa)؟',
      en: 'Does long-term symptomatic therapy rely on dopamine precursor replacement (Levodopa)?',
    },
    hintAr: 'دواء ليفودوبا لمرضى باركنسون',
  },
];

export const STAGE_5_ENDO_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_endo_hba1c_glucose',
    stage: 5,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يعتمد التشخيص والمتابعة الدقيقة على قياس السكر التراكمي وسكر الصائم (HbA1c & Fasting Glucose)؟',
      en: 'Does definitive diagnostic confirmation rely on glycated hemoglobin (HbA1c >= 6.5%) and fasting plasma glucose?',
    },
    hintAr: 'تحليل السكر التراكمي في الدم',
  },
  {
    id: 's5_endo_tsh_free_t4',
    stage: 5,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل التحليل المعملي الفاصل هو قياس مستوى هرمون النخامية (TSH) وهرمون الثيروكسين الحر (Free T4)؟',
      en: 'Is serum TSH combined with free thyroxine (Free T4) the primary definitive assay?',
    },
    hintAr: 'تحاليل وظائف الغدة الدرقية',
  },
  {
    id: 's5_endo_insulin_replacement',
    stage: 5,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل العلاج الحيوي الإلزامي هو حقن الأنسولين التعويضية اليومية تحت الجلد (Daily Subcutaneous Insulin)؟',
      en: 'Is lifelong daily subcutaneous insulin injection the indispensable replacement therapy?',
    },
    hintAr: 'حقن الأنسولين اليومية',
  },
  {
    id: 's5_endo_thyroid_surgery_rai',
    stage: 5,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يتطلب العلاج الجذري في بعض الحالات اليود المشع أو استئصال الغدة جراحياً (Radioactive Iodine)؟',
      en: 'Does definitive curative intervention involve radioactive iodine ablation or thyroidectomy?',
    },
  },
  {
    id: 's5_endo_dexamethasone_test',
    stage: 5,
    branch: 'Disease',
    system: 'ENDOCRINE',
    text: {
      ar: 'هل يعتمد التشخيص التفريقي على اختبارات تحفيز أو تثبيط الهرمونات (Dexamethasone Suppression Test)؟',
      en: 'Does definitive endocrinology workup require hormonal dynamic challenge or suppression testing?',
    },
  },
];

export const STAGE_5_RENAL_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_renal_biopsy',
    stage: 5,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل الفحص النسيجي الذهبي هو أخذ عينة وخزعة إبرية من الكلية لفحصها بالمجهر (Renal Biopsy)؟',
      en: 'Is percutaneous ultrasound-guided needle renal biopsy the definitive histopathological test?',
    },
    hintAr: 'خزعة وعينة الكلى النسيجية',
  },
  {
    id: 's5_renal_egfr_creatinine',
    stage: 5,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يعتمد التقييم الدقيق لوظائف الكلى على حساب معدل الترشيح الكبيبي والكرياتينين (eGFR & Creatinine)؟',
      en: 'Is staging based on serum creatinine level and calculated glomerular filtration rate (eGFR)?',
    },
  },
  {
    id: 's5_renal_dialysis',
    stage: 5,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل يتطلب العلاج في المراحل المتقدمة جلسات غسيل كلوي دموي أو بريتوني منتظمة (Hemodialysis)؟',
      en: 'Does advanced management require regular renal replacement therapy / hemodialysis sessions?',
    },
    hintAr: 'الغسيل الكلوي الدموي',
  },
  {
    id: 's5_renal_lithotripsy',
    stage: 5,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل التدخل العلاجي يشمل تفتيت الحصوات بالموجات التصادمية أو استخراجها بالمنظار (ESWL / Ureteroscopy)؟',
      en: 'Does management involve extracorporeal shock-wave lithotripsy (ESWL) or ureteroscopic extraction?',
    },
  },
  {
    id: 's5_renal_transplant',
    stage: 5,
    branch: 'Disease',
    system: 'RENAL',
    text: {
      ar: 'هل الحل الجذري والنهائي لحياة المريض هو إجراء عملية زراعة كلية متبرع (Kidney Transplantation)؟',
      en: 'Is allogeneic renal transplantation the definitive long-term curative replacement?',
    },
  },
];

export const STAGE_5_INF_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_inf_blood_culture',
    stage: 5,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل الفحص الذهبي لعزل الميكروب هو سحب مزارع دم متكررة قبل إعطاء المضادات (Blood Cultures)؟',
      en: 'Is drawing serial paired blood cultures prior to antibiotic therapy the diagnostic cornerstone?',
    },
    hintAr: 'مزرعة الدم واختبار حساسية المضادات',
  },
  {
    id: 's5_inf_pcr_antigen',
    stage: 5,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يعتمد التأكيد الجزيئي السريع على فحص الحمض النووي بالـ PCR أو اختبار المستضدات (PCR Testing)؟',
      en: 'Does rapid confirmation rely on molecular Polymerase Chain Reaction (PCR) nucleic acid testing?',
    },
    hintAr: 'فحص البي سي آر PCR',
  },
  {
    id: 's5_inf_targeted_antimicrobial',
    stage: 5,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يعتمد الشفاء على جرعات وريدية مكثفة من مضادات الميكروبات النوعية الموجهة (Targeted IV Antibiotics)؟',
      en: 'Does definitive cure mandate targeted intravenous bactericidal antimicrobials based on sensitivity?',
    },
  },
  {
    id: 's5_inf_isolation',
    stage: 5,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل تتطلب بروتوكولات مكافحة العدوى عزل المريض في غرفة سالبة الضغط أو عزل تلامسي (Strict Isolation)؟',
      en: 'Do strict infection control protocols require patient isolation in negative-pressure rooms?',
    },
  },
  {
    id: 's5_inf_art_regimen',
    stage: 5,
    branch: 'Disease',
    system: 'INFECTIOUS',
    text: {
      ar: 'هل يتطلب العلاج مدى الحياة تناول مضادات الفيروسات القهقرية المركبة (Combination Antiretroviral - ART)؟',
      en: 'Does lifelong suppression require daily combination antiretroviral therapy (ART)?',
    },
  },
];

export const STAGE_5_MSK_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_msk_plain_xray',
    stage: 5,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل الفحص الأولي الحاسم لتأكيد الكسر أو تآكل المفصل هو الأشعة السينية بوضعيتين (Plain Radiograph - X-ray)؟',
      en: 'Is standard two-view plain radiography (X-ray) the primary definitive investigation?',
    },
    hintAr: 'أشعة العظام السينية العادية',
  },
  {
    id: 's5_msk_arthrocentesis',
    stage: 5,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل الفحص القاطع هو سحب عينة من سائل المفصل وفحصها بالمجهر المستقطب (Joint Arthrocentesis)؟',
      en: 'Is synovial fluid aspiration with polarized light microscopy the gold standard for crystals?',
    },
    hintAr: 'بزل المفصل وفحص بلورات النقرس',
  },
  {
    id: 's5_msk_mri_joint',
    stage: 5,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل الفحص الذهبي لتشخيص تمزق الأربطة والغضاريف الهلالية هو الرنين المغناطيسي (Joint MRI)؟',
      en: 'Is magnetic resonance imaging (MRI) gold standard to evaluate ligaments and meniscal tears?',
    },
    hintAr: 'رنين الركبة والمفاصل للأربطة',
  },
  {
    id: 's5_msk_arthroplasty',
    stage: 5,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل الحل الجراحي النهائي للتآكل المتقدم هو استبدال المفصل بمفصل صناعي كامل (Total Arthroplasty)؟',
      en: 'Is total joint arthroplasty / replacement surgery the definitive reconstruction for end-stage damage?',
    },
    hintAr: 'عملية تغيير واستبدال المفصل',
  },
  {
    id: 's5_msk_dmards',
    stage: 5,
    branch: 'Disease',
    system: 'MUSCULOSKELETAL',
    text: {
      ar: 'هل يتطلب التحكم بالمرض أدوية مناعية موجهة ومثبطات بيولوجية (Biologics & DMARDs)؟',
      en: 'Does disease control require targeted biologic agents or DMARDs like Methotrexate?',
    },
    hintAr: 'العلاجات البيولوجية للروماتيزم',
  },
];

export const STAGE_5_DISEASE_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_d_surgery',
    stage: 5,
    branch: 'Disease',
    text: {
      ar: 'هل يتطلب العلاج الحاسم تدخلاً جراحياً أو استئصالاً لإنقاذ المريض (Surgery)؟',
      en: 'Does definitive management require surgical intervention or resection?',
    },
  },
  {
    id: 's5_d_biopsy',
    stage: 5,
    branch: 'Disease',
    text: {
      ar: 'هل يعتمد التشخيص التأكيدي القاطع على فحص عينة نسيجية بالميكروسكوب (Biopsy / Histology)؟',
      en: 'Does gold-standard confirmation rely on microscopic tissue biopsy/histopathology?',
    },
  },
  {
    id: 's5_d_imaging',
    stage: 5,
    branch: 'Disease',
    text: {
      ar: 'هل الفحص الفاصل لتشخيصه هو الأشعة المقطعية أو الرنين أو الموجات الصوتية (CT/MRI)؟',
      en: 'Is the definitive diagnostic test radiographic imaging (CT, MRI, or Ultrasound)?',
    },
  },
  {
    id: 's5_d_immunosuppress',
    stage: 5,
    branch: 'Disease',
    text: {
      ar: 'هل يعتمد علاجه الأساسي على الكورتيزون ومثبطات المناعة (Steroids / Immunosuppressants)؟',
      en: 'Does primary management rely on corticosteroid or immunosuppressive therapy?',
    },
  },
  {
    id: 's5_d_vaccine',
    stage: 5,
    branch: 'Disease',
    text: {
      ar: 'هل الوقاية من هذا المرض متاحة ومعتمدة في جداول التطعيمات واللقاحات (Vaccine)؟',
      en: 'Is this condition preventable through standard routine vaccination?',
    },
  },
];

export const STAGE_5_ORGAN_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_o_transplant',
    stage: 5,
    branch: 'Organ',
    text: {
      ar: 'هل تجرى لهذا العضو عمليات زراعة أعضاء مشهورة عند فشله (Organ Transplantation)؟',
      en: 'Is this organ commonly subject to organ transplantation in terminal failure?',
    },
  },
  {
    id: 's5_o_infarction',
    stage: 5,
    branch: 'Organ',
    text: {
      ar: 'هل أشهر مرض قاتل يصيبه هو الجلطة واحتشاء النسيج (Infarction / Ischemia)؟',
      en: 'Is its most famous lethal pathology an infarction or ischemic necrosis?',
    },
  },
  {
    id: 's5_o_endoscopy',
    stage: 5,
    branch: 'Organ',
    text: {
      ar: 'هل يمكن فحص بطانته الداخلية مباشرة باستخدام المنظار الطبي (Endoscopy)؟',
      en: 'Can its interior lining be directly visualized via endoscopy or colonoscopy?',
    },
  },
  {
    id: 's5_o_calculi',
    stage: 5,
    branch: 'Organ',
    text: {
      ar: 'هل يشتهر بتكوين الحصوات والانسدادات المسببة للمغص الشديد (Stones / Calculi)؟',
      en: 'Is it notoriously known for formation of painful calculi or stones?',
    },
  },
];

export const STAGE_5_PHARMA_QUESTIONS: InquiryQuestion[] = [
  {
    id: 's5_p_antidote',
    stage: 5,
    branch: 'Pharma',
    text: {
      ar: 'هل يمتلك هذا الدواء مضاداً سمياً محدداً يُعطى عند التسمم بالجرعة (Specific Antidote)؟',
      en: 'Does this medication have a famous specific antidote for acute toxicity?',
    },
  },
  {
    id: 's5_p_narrow_therapeutic',
    stage: 5,
    branch: 'Pharma',
    text: {
      ar: 'هل يمتلك نافذة علاجية ضيقة تتطلب قياس مستواه في الدم بانتظام (Therapeutic drug monitoring)؟',
      en: 'Does it have a narrow therapeutic window requiring routine plasma level monitoring?',
    },
  },
  {
    id: 's5_p_first_line',
    stage: 5,
    branch: 'Pharma',
    text: {
      ar: 'هل يعتبر هذا الدواء خط العلاج الأول الموصى به عالمياً لحالته (1st Line Therapy)؟',
      en: 'Is this drug the universally recommended first-line therapy for its condition?',
    },
  },
];

/**
 * Helper to determine which branch a MedicalWord belongs to
 */
export function getWordBranch(word: MedicalWord | null): ClinicalBranch {
  if (!word) return 'Disease';
  switch (word.type) {
    case 'Disease':
    case 'Syndrome':
      return 'Disease';
    case 'Organ':
    case 'Muscle':
    case 'Nerve':
    case 'Component':
    case 'Cell':
    case 'Tissue':
      return 'Organ';
    case 'Pharma':
      return 'Pharma';
    case 'Parasite':
      return 'Parasite';
    case 'Equipment':
    case 'Technique':
      return 'Equipment';
    default:
      return 'Disease';
  }
}

/**
 * Detects biological system confirmed from an affirmative answer in Stage 2
 */
export function detectSystemFromQuestionAndAnswer(
  questionId: string,
  answer: 'YES' | 'NO' | 'MAYBE'
): string | null {
  if (answer !== 'YES') return null;
  if (questionId === 's2_d_cardio' || questionId === 's2_p_cvs') return 'CVS';
  if (questionId === 's2_d_git') return 'GIT';
  if (questionId === 's2_d_respiratory') return 'RESPIRATORY';
  if (questionId === 's2_d_neuro' || questionId === 's2_p_cns') return 'NEURO';
  if (questionId === 's2_d_endocrine' || questionId === 's2_p_hormone') return 'ENDOCRINE';
  if (questionId === 's2_d_renal') return 'RENAL';
  if (questionId === 's2_d_ortho' || questionId === 's2_p_pain' || questionId === 's2_o_musculoskeletal') return 'MUSCULOSKELETAL';
  if (questionId === 's2_d_infectious' || questionId === 's2_p_antimicrobial') return 'INFECTIOUS';
  return null;
}

/**
 * Infers the true anatomical/physiological system of a card
 */
export function getTrueCardSystem(word: MedicalWord | null): string | null {
  if (!word) return null;
  const subs = (word.subjects || []).map(s => s.toLowerCase());
  const eng = (word.word.English || '').toLowerCase();
  const ara = word.word.Arabic || '';

  if (subs.some(s => s.includes('cardio') || s.includes('vascular')) || /heart|coronary|aorta|valve|angina|infarct/i.test(eng) || /قلب|شريان|أورط|ذبحة/i.test(ara)) return 'CVS';
  if (subs.some(s => s.includes('gastro') || s.includes('hepat') || s.includes('digest')) || /liver|stomach|colon|pancreas|gallbladder|appendix/i.test(eng) || /كبد|معدة|قولون|بنكرياس|مرارة|زائدة/i.test(ara)) return 'GIT';
  if (subs.some(s => s.includes('respir') || s.includes('pulmon') || s.includes('chest')) || /lung|bronch|asthma|pneumon/i.test(eng) || /رئة|تنفس|قصب|ربو/i.test(ara)) return 'RESPIRATORY';
  if (subs.some(s => s.includes('neuro') || s.includes('psych')) || /brain|nerve|spine|seizure|stroke|dementia/i.test(eng) || /دماغ|مخ|عصب|صرع|سكتة/i.test(ara)) return 'NEURO';
  if (subs.some(s => s.includes('endocrin') || s.includes('diabet') || s.includes('metabol')) || /thyroid|diabetes|insulin|adrenal/i.test(eng) || /غدة|درقية|سكري|أنسولين/i.test(ara)) return 'ENDOCRINE';
  if (subs.some(s => s.includes('nephr') || s.includes('urol')) || /kidney|renal|glomerul|dialysis|bladder/i.test(eng) || /كلية|كلوي|مثانة|مسالك/i.test(ara)) return 'RENAL';
  if (subs.some(s => s.includes('ortho') || s.includes('rheumat')) || word.type === 'Muscle' || /bone|joint|fracture|cartilage|tendon/i.test(eng) || /عظم|مفصل|غضروف|كسر/i.test(ara)) return 'MUSCULOSKELETAL';
  if (subs.some(s => s.includes('infect') || s.includes('microbi') || s.includes('parasit')) || word.type === 'Parasite' || /bacteri|virus|parasit|fung|fever|sepsis/i.test(eng) || /عدوى|بكتيريا|فيروس|طفيلي|حمى/i.test(ara)) return 'INFECTIOUS';
  return null;
}

/**
 * Evaluates adaptive questions for a given stage based on branch and confirmed system
 */
export function getAdaptiveQuestionsForStage(
  stage: 1 | 2 | 3 | 4 | 5,
  branch: ClinicalBranch,
  confirmedSystem?: string
): InquiryQuestion[] {
  if (stage === 1) {
    return STAGE_1_QUESTIONS;
  }

  if (stage === 2) {
    if (branch === 'Organ') return STAGE_2_ORGAN_QUESTIONS;
    if (branch === 'Pharma') return STAGE_2_PHARMA_QUESTIONS;
    return STAGE_2_DISEASE_QUESTIONS;
  }

  if (stage === 3) {
    if (branch === 'Organ') return STAGE_3_ORGAN_QUESTIONS;
    if (branch === 'Pharma') return STAGE_3_PHARMA_QUESTIONS;
    if (confirmedSystem === 'CVS') return STAGE_3_CVS_QUESTIONS;
    if (confirmedSystem === 'GIT') return STAGE_3_GIT_QUESTIONS;
    if (confirmedSystem === 'RESPIRATORY') return STAGE_3_RESP_QUESTIONS;
    if (confirmedSystem === 'NEURO') return STAGE_3_NEURO_QUESTIONS;
    if (confirmedSystem === 'ENDOCRINE') return STAGE_3_ENDO_QUESTIONS;
    if (confirmedSystem === 'RENAL') return STAGE_3_RENAL_QUESTIONS;
    if (confirmedSystem === 'INFECTIOUS') return STAGE_3_INF_QUESTIONS;
    if (confirmedSystem === 'MUSCULOSKELETAL') return STAGE_3_MSK_QUESTIONS;
    return STAGE_3_DISEASE_QUESTIONS;
  }

  if (stage === 4) {
    if (branch === 'Organ') return STAGE_4_ORGAN_QUESTIONS;
    if (branch === 'Pharma') return STAGE_4_PHARMA_QUESTIONS;
    if (confirmedSystem === 'CVS') return STAGE_4_CVS_QUESTIONS;
    if (confirmedSystem === 'GIT') return STAGE_4_GIT_QUESTIONS;
    if (confirmedSystem === 'RESPIRATORY') return STAGE_4_RESP_QUESTIONS;
    if (confirmedSystem === 'NEURO') return STAGE_4_NEURO_QUESTIONS;
    if (confirmedSystem === 'ENDOCRINE') return STAGE_4_ENDO_QUESTIONS;
    if (confirmedSystem === 'RENAL') return STAGE_4_RENAL_QUESTIONS;
    if (confirmedSystem === 'INFECTIOUS') return STAGE_4_INF_QUESTIONS;
    if (confirmedSystem === 'MUSCULOSKELETAL') return STAGE_4_MSK_QUESTIONS;
    return STAGE_4_DISEASE_QUESTIONS;
  }

  if (stage === 5) {
    if (branch === 'Organ') return STAGE_5_ORGAN_QUESTIONS;
    if (branch === 'Pharma') return STAGE_5_PHARMA_QUESTIONS;
    if (confirmedSystem === 'CVS') return STAGE_5_CVS_QUESTIONS;
    if (confirmedSystem === 'GIT') return STAGE_5_GIT_QUESTIONS;
    if (confirmedSystem === 'RESPIRATORY') return STAGE_5_RESP_QUESTIONS;
    if (confirmedSystem === 'NEURO') return STAGE_5_NEURO_QUESTIONS;
    if (confirmedSystem === 'ENDOCRINE') return STAGE_5_ENDO_QUESTIONS;
    if (confirmedSystem === 'RENAL') return STAGE_5_RENAL_QUESTIONS;
    if (confirmedSystem === 'INFECTIOUS') return STAGE_5_INF_QUESTIONS;
    if (confirmedSystem === 'MUSCULOSKELETAL') return STAGE_5_MSK_QUESTIONS;
    return STAGE_5_DISEASE_QUESTIONS;
  }

  return STAGE_1_QUESTIONS;
}

/**
 * Backward compatibility alias
 */
export function getBranchQuestionsForStage(
  stage: 1 | 2 | 3 | 4 | 5,
  branch: ClinicalBranch,
  confirmedSystem?: string
): InquiryQuestion[] {
  return getAdaptiveQuestionsForStage(stage, branch, confirmedSystem);
}

/**
 * CLINICAL TRUTH EVALUATOR & ANTI-CHEAT ENGINE
 * Evaluates the medically accurate answer and rationale for any question against a secret card
 */
export function evaluateQuestionTruth(
  questionId: string,
  word: MedicalWord | null
): TruthEvaluationResult {
  if (!word) {
    return {
      trueAnswer: 'MAYBE',
      clinicalReasonAr: 'لا توجد بطاقة معينة للتقييم السريري.',
      clinicalReasonEn: 'No specific card assigned for clinical evaluation.',
    };
  }

  const nameEn = word.word.English;
  const nameAr = word.word.Arabic;
  const wordHints = HINTS_DICTIONARY[word.id];
  const fullCorpus = [
    nameEn,
    nameAr,
    ...(word.subjects || []),
    ...(word.synonyms || []),
    ...(wordHints?.English || []),
    ...(wordHints?.Arabic || []),
  ].join(' ').toLowerCase();

  const has = (re: RegExp) => re.test(fullCorpus);

  const isDisease = word.type === 'Disease' || word.type === 'Syndrome';
  const isOrgan = ['Organ', 'Muscle', 'Nerve', 'Component', 'Cell', 'Tissue'].includes(word.type);
  const isPharma = word.type === 'Pharma';
  const isParasite = word.type === 'Parasite' || word.subjects.some(s => /parasit|microbiol/i.test(s));
  const isEquipment = ['Equipment', 'Technique'].includes(word.type);

  const isCVS = has(/cardio|heart|vascular|coronary|aort|valve|arrhythmi|angina|infarct|hypertens|قلب|أوعية|شرايين|تاجي|أورط|ضغط الدم|احتشاء|ذبحة/i);
  const isGIT = has(/gastro|hepat|digest|liver|stomach|colon|bowel|intestin|pancrea|gallbladder|biliary|esophag|كبد|معدة|قولون|أمعاء|مرارة|بنكرياس|مريء|هضم/i);
  const isResp = has(/respir|pulmon|lung|chest|bronch|alveol|asthma|pneumon|pleur|cough|dyspnea|رئة|رئوي|تنفس|قصب|شعب|سعال|ربو|بلغم/i);
  const isNeuro = has(/neuro|brain|cerebr|cranial|nerve|spine|spinal|seizur|epilep|stroke|mening|dement|دماغ|مخ|عصب|أعصاب|حبل شوكي|صرع|سكتة دماغية|شلل/i);
  const isEndo = has(/endocrin|thyroid|metabol|diabet|insulin|hormon|adrenal|pituitary|cushing|addison|غدة|درقية|نخامية|كظرية|هرمون|أنسولين|سكر|أيض/i);
  const isRenal = has(/renal|kidney|nephr|urolog|urina|glomerul|dialysis|bladder|كلية|كلوي|كبيبات|مسالك|مثانة|بول/i);
  const isMSK = has(/ortho|rheumat|bone|joint|skelet|muscl|fractur|arthrit|cartilage|tendon|عظم|عظام|مفصل|مفاصل|غضروف|كسر|روماتيزم|عضلة/i) || word.type === 'Muscle';
  const isInf = has(/infect|microbi|bacteri|virus|viral|parasit|fung|fever|sepsis|عدوى|ميكروب|بكتيريا|فيروس|طفيلي|فطريات|حمى|إنتان/i) || word.type === 'Parasite';

  // --- STAGE 1 CATEGORIES ---
  if (questionId === 's1_q1_disease') {
    return isDisease
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو مرض/متلازمة سريرية بالفعل.`, clinicalReasonEn: `Your card (${nameEn}) is a disease/syndrome.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس مرضاً، بل هو ${word.type === 'Organ' ? 'عضو تشريحي' : word.type === 'Pharma' ? 'دواء علاجي' : 'تصنيف آخر'}.`, clinicalReasonEn: `Your card (${nameEn}) is not a disease, it is a ${word.type}.` };
  }
  if (questionId === 's1_q2_organ') {
    return isOrgan
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو عضو/تركيب تشريحي نسيجي.`, clinicalReasonEn: `Your card (${nameEn}) is an anatomical organ/structure.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس عضواً تشريحياً.`, clinicalReasonEn: `Your card (${nameEn}) is not an anatomical organ.` };
  }
  if (questionId === 's1_q3_pharma') {
    return isPharma
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو دواء/مستحضر صيدلاني.`, clinicalReasonEn: `Your card (${nameEn}) is a pharmaceutical drug.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس دواءً.`, clinicalReasonEn: `Your card (${nameEn}) is not a pharmaceutical drug.` };
  }
  if (questionId === 's1_q4_parasite') {
    return isParasite
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو ميكروب/كائن دقيق مسبب للعدوى.`, clinicalReasonEn: `Your card (${nameEn}) is an infectious pathogen.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس كائناً مجهرياً معدياً.`, clinicalReasonEn: `Your card (${nameEn}) is not an infectious pathogen.` };
  }
  if (questionId === 's1_q5_equipment') {
    return isEquipment
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو أداة أو إجراء طبي.`, clinicalReasonEn: `Your card (${nameEn}) is medical equipment/procedure.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس أداة جراحية أو جهازاً.`, clinicalReasonEn: `Your card (${nameEn}) is not medical equipment.` };
  }

  // --- STAGE 2 BIOLOGICAL SYSTEMS ---
  if (questionId === 's2_d_cardio' || questionId === 's2_p_cvs') {
    return isCVS
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يرتبط بشكل مباشر بجهاز القلب والأوعية الدموية.`, clinicalReasonEn: `Your card (${nameEn}) directly affects the cardiovascular system.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا ينتمي للقلب والأوعية الدموية.`, clinicalReasonEn: `Your card (${nameEn}) does not belong to the cardiovascular system.` };
  }
  if (questionId === 's2_d_git') {
    return isGIT
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يتبع الجهاز الهضمي أو الكبد والبنكرياس.`, clinicalReasonEn: `Your card (${nameEn}) involves the GI tract, liver, or pancreas.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتبع الجهاز الهضمي أو الكبد.`, clinicalReasonEn: `Your card (${nameEn}) is not gastrointestinal or hepatic.` };
  }
  if (questionId === 's2_d_respiratory') {
    return isResp
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يصيب الرئتين والجهاز التنفسي.`, clinicalReasonEn: `Your card (${nameEn}) affects the respiratory system and lungs.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس مرضاً رئوياً أو تنفسياً.`, clinicalReasonEn: `Your card (${nameEn}) is not a respiratory disease.` };
  }
  if (questionId === 's2_d_neuro' || questionId === 's2_p_cns') {
    return isNeuro
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يتبع المخ والجهاز العصبي.`, clinicalReasonEn: `Your card (${nameEn}) involves the nervous system.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتبع الجهاز العصبي.`, clinicalReasonEn: `Your card (${nameEn}) does not affect the nervous system.` };
  }
  if (questionId === 's2_d_endocrine' || questionId === 's2_p_hormone') {
    return isEndo
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) اضطراب غدد صماء أو تمثيل غذائي.`, clinicalReasonEn: `Your card (${nameEn}) is an endocrine or metabolic condition.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس اضطراباً هرمونياً أو غدياً.`, clinicalReasonEn: `Your card (${nameEn}) is not an endocrine condition.` };
  }
  if (questionId === 's2_d_renal') {
    return isRenal
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يصيب الكلى أو المسالك البولية.`, clinicalReasonEn: `Your card (${nameEn}) involves the renal or urinary system.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يصيب الكلى أو المسالك البولية.`, clinicalReasonEn: `Your card (${nameEn}) is not a renal condition.` };
  }
  if (questionId === 's2_d_ortho' || questionId === 's2_p_pain') {
    return isMSK
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يتركز في العظام أو المفاصل أو العضلات.`, clinicalReasonEn: `Your card (${nameEn}) affects the musculoskeletal system.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتبع الجهاز العضلي الحركي والعظام.`, clinicalReasonEn: `Your card (${nameEn}) is not musculoskeletal.` };
  }
  if (questionId === 's2_d_infectious' || questionId === 's2_p_antimicrobial') {
    return isInf
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) ينتج عن عدوى ميكروبية معدية.`, clinicalReasonEn: `Your card (${nameEn}) is of infectious etiology.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس عدوى ميكروبية.`, clinicalReasonEn: `Your card (${nameEn}) is not an infectious disease.` };
  }

  // --- STAGE 2 ORGAN LOCATIONS ---
  if (questionId === 's2_o_thorax') {
    const isThorax = has(/thorax|chest|heart|lung|rib|esophagus|trachea|صدر|قلب|رئة|قفص/i);
    return isThorax
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يقع داخل التجويف الصدري.`, clinicalReasonEn: `Your card (${nameEn}) is located within the thorax.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يقع داخل الصدر.`, clinicalReasonEn: `Your card (${nameEn}) is not in the thoracic cavity.` };
  }
  if (questionId === 's2_o_abdomen') {
    const isAbdo = has(/abdomen|pelvis|liver|stomach|spleen|pancreas|kidney|intestine|gallbladder|colon|appendix|بطن|حوض|كبد|معدة|طحال|بنكرياس|كلية|أمعاء|مرارة|قولون/i);
    return isAbdo
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يقع داخل تجويف البطن أو الحوض.`, clinicalReasonEn: `Your card (${nameEn}) is located within the abdomen/pelvis.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يقع في البطن أو الحوض.`, clinicalReasonEn: `Your card (${nameEn}) is not in the abdomen.` };
  }
  if (questionId === 's2_o_head_neck') {
    const isHN = has(/head|neck|brain|cranial|skull|eye|ear|mouth|throat|pharynx|larynx|thyroid|رأس|عنق|دماغ|جمجمة|عين|أذن|فم|حنجرة|درقية/i);
    return isHN
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يقع في الرأس أو العنق.`, clinicalReasonEn: `Your card (${nameEn}) is in the head or neck.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس في الرأس أو العنق.`, clinicalReasonEn: `Your card (${nameEn}) is not in the head or neck.` };
  }
  if (questionId === 's2_o_paired') {
    const isPaired = has(/kidney|lung|eye|ear|adrenal|ovary|testis|arm|leg|biceps|triceps|femur|ulnar|كلية|رئة|عين|أذن|مبيض|خصية|طرف|عضلة/i);
    return isPaired
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) عضو زوجي (يوجد منه اثنان في الجسم).`, clinicalReasonEn: `Your card (${nameEn}) is a paired organ.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) عضو مفرد غير زوجي.`, clinicalReasonEn: `Your card (${nameEn}) is a single, unpaired organ.` };
  }

  // --- STAGE 3 SPECIFIC MECHANISMS ---
  if (questionId === 's3_cvs_ischemia') {
    const ok = has(/ischemi|infarct|occlus|thromb|coronary artery|جلطة|احتشاء|انسداد/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) ينتج عن احتشاء ونقص تروية شرياني.`, clinicalReasonEn: `Your card (${nameEn}) is caused by arterial ischemia.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس جلطة أو احتشاءً شريانياً.`, clinicalReasonEn: `Your card (${nameEn}) is not ischemic infarction.` };
  }
  if (questionId === 's3_cvs_arrhythmia') {
    const ok = has(/arrhythmi|fibrillat|tachycard|bradycard|conduction|heart block|رجفان|خفقان|تسارع|تباطؤ|حصار/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو اضطراب كهربي في نبضات القلب.`, clinicalReasonEn: `Your card (${nameEn}) is a cardiac arrhythmia.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس اضطراباً في كهربية النبض.`, clinicalReasonEn: `Your card (${nameEn}) is not a cardiac arrhythmia.` };
  }
  if (questionId === 's3_git_obstruction') {
    const ok = has(/obstruct|volvulus|intussusception|ileus|انسداد معوي|انغلاف/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يسبب انسداداً معوياً جراحياً.`, clinicalReasonEn: `Your card (${nameEn}) causes mechanical bowel obstruction.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب انسداداً ميكانيكياً للأمعاء.`, clinicalReasonEn: `Your card (${nameEn}) does not cause bowel obstruction.` };
  }
  if (questionId === 's3_git_cirrhosis') {
    const ok = has(/cirrhosis|fibrosis|liver failure|تليف|تليف الكبد/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يؤدي لتليف الكبد الدائم.`, clinicalReasonEn: `Your card (${nameEn}) leads to liver cirrhosis.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يؤدي لتليف الكبد.`, clinicalReasonEn: `Your card (${nameEn}) is not liver cirrhosis.` };
  }
  if (questionId === 's3_resp_obstructive') {
    const ok = has(/asthma|copd|bronchospasm|emphysema|chronic bronchitis|ربو|انسداد رئوي|نفاخ/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) مرض انسدادي في مجرى الهواء مع تشنج شعبي.`, clinicalReasonEn: `Your card (${nameEn}) is an obstructive airway disease.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس مرضاً انسدادياً للشعب.`, clinicalReasonEn: `Your card (${nameEn}) is not an obstructive airway disease.` };
  }
  if (questionId === 's3_neuro_vascular') {
    const ok = has(/stroke|cva|ischemic stroke|hemorrhagic stroke|سكتة|جلطة دماغية|نزيف مخي/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) سكتة دماغية وعائية حادة.`, clinicalReasonEn: `Your card (${nameEn}) is an acute cerebrovascular stroke.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس سكتة دماغية وعائية.`, clinicalReasonEn: `Your card (${nameEn}) is not a stroke.` };
  }
  if (questionId === 's3_endo_metabolic') {
    const ok = has(/diabet|glucose|insulin|metabolic syndrome|سكري|جلوكوز|أنسولين/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) اضطراب استقلابي في الجلوكوز ومقاومة الأنسولين.`, clinicalReasonEn: `Your card (${nameEn}) disrupts glucose and insulin metabolism.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس اضطراباً في استقلاب السكر.`, clinicalReasonEn: `Your card (${nameEn}) is not a glucose metabolic disorder.` };
  }
  if (questionId === 's3_renal_stone') {
    const ok = has(/stone|calcul|nephrolith|urolith|حصوة|حصوات/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) ينتج عن تكون الحصوات في المسالك البولية.`, clinicalReasonEn: `Your card (${nameEn}) is caused by urinary calculi.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس حصوات كلوية.`, clinicalReasonEn: `Your card (${nameEn}) is not renal calculi.` };
  }
  if (questionId === 's3_msk_degenerative') {
    const ok = has(/osteoarthrit|degenerative|wear and tear|خشونة|تآكل المفاصل/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) هو تآكل واحتكاك تنكسي في مفاصل الجسم.`, clinicalReasonEn: `Your card (${nameEn}) is degenerative joint osteoarthritis.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس تآكلاً تنكسياً للمفاصل.`, clinicalReasonEn: `Your card (${nameEn}) is not osteoarthritis.` };
  }
  if (questionId === 's3_msk_metabolic') {
    const ok = has(/gout|uric acid|urate|podagra|نقرس|حمض اليوريك/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) ينتج عن ترسب بلورات حمض اليوريك (النقرس).`, clinicalReasonEn: `Your card (${nameEn}) is caused by uric acid crystals (Gout).` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) ليس داء النقرس أو ترسب بلورات.`, clinicalReasonEn: `Your card (${nameEn}) is not gout.` };
  }

  // --- STAGE 4 CARDINAL PRESENTATIONS ---
  if (questionId === 's4_cvs_chest_pain') {
    const ok = has(/chest pain|angina|infarct|retrosternal|crushing|ألم بالصدر|ذبحة|خلف القص/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يتظاهر بألم ضاغط عاصر خلف عظم القص.`, clinicalReasonEn: `Your card (${nameEn}) classically presents with crushing retrosternal chest pain.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتظاهر بألم عاصر في الصدر.`, clinicalReasonEn: `Your card (${nameEn}) does not present with crushing chest pain.` };
  }
  if (questionId === 's4_git_rlq_pain') {
    const ok = has(/appendix|appendic|mcburney|right lower quadrant|زائدة|ربع سفلي أيمن/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) علامته الكلاسيكية ألم أسفل يمين البطن (نقطة ماكبورني).`, clinicalReasonEn: `Your card (${nameEn}) characteristically presents with McBurney point RLQ pain.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتميز بألم الزائدة في أسفل يمين البطن.`, clinicalReasonEn: `Your card (${nameEn}) does not present with RLQ pain.` };
  }
  if (questionId === 's4_git_jaundice') {
    const ok = has(/jaundice|icterus|bilirubin|yellow sclera|يرقان|صفراء|اصفرار/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يسبب اصفراراً بالجلد وبياض العينين (اليرقان).`, clinicalReasonEn: `Your card (${nameEn}) causes clinical jaundice.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب اليرقان كعرض رئيسي.`, clinicalReasonEn: `Your card (${nameEn}) does not typically cause jaundice.` };
  }
  if (questionId === 's4_resp_wheezing') {
    const ok = has(/wheez|asthma|bronchospasm|أزيز|تصفير بالصدر|ربو/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يُسمع فيه أزيز وتصفير زفيري بالصدر.`, clinicalReasonEn: `Your card (${nameEn}) causes characteristic expiratory wheezing.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب أزيزاً بالصدر.`, clinicalReasonEn: `Your card (${nameEn}) does not cause wheezing.` };
  }
  if (questionId === 's4_neuro_hemiparesis') {
    const ok = has(/hemipar|hemipleg|stroke|facial droop|شلل نصفي|سكتة/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يسبب شللاً نصفياً مفاجئاً وضعفاً بالأطراف.`, clinicalReasonEn: `Your card (${nameEn}) produces acute hemiparesis and facial droop.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب شللاً نصفياً.`, clinicalReasonEn: `Your card (${nameEn}) does not cause hemiparesis.` };
  }
  if (questionId === 's4_endo_polyuria_polydipsia') {
    const ok = has(/polyuria|polydipsia|diabetes|glucose|تبول مفرط|عطش شديد|سكري/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) علامته الكلاسيكية كثرة التبول والعطش الشديد ونقص الوزن.`, clinicalReasonEn: `Your card (${nameEn}) presents with polyuria, polydipsia, and weight loss.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتظاهر بكثرة التبول والعطش المستمر.`, clinicalReasonEn: `Your card (${nameEn}) does not present with polyuria/polydipsia.` };
  }
  if (questionId === 's4_renal_colic') {
    const ok = has(/renal colic|flank pain|stone|calcul|مغص كلوي|ألم الخاصرة/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يسبب مغصاً كلوياً حاداً يمتد من الخاصرة إلى الحوض.`, clinicalReasonEn: `Your card (${nameEn}) produces agonizing radiating renal colic.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب مغصاً كلوياً.`, clinicalReasonEn: `Your card (${nameEn}) does not cause renal colic.` };
  }
  if (questionId === 's4_inf_neck_stiffness') {
    const ok = has(/meningitis|neck stiffness|kernig|brudzinski|nuchal|تيبس الرقبة|التهاب السحايا/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يظهر تيبساً واضحاً بالرقبة وعلامات تهيج السحايا.`, clinicalReasonEn: `Your card (${nameEn}) presents with neck stiffness and meningeal signs.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يسبب تيبساً في الرقبة.`, clinicalReasonEn: `Your card (${nameEn}) does not cause nuchal rigidity.` };
  }
  if (questionId === 's4_msk_podagra') {
    const ok = has(/podagra|gout|big toe|metatarsophalangeal|نقرس|إصبع القدم/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يصيب كلاسيكياً مفصل إصبع القدم الأكبر (البوداغرا).`, clinicalReasonEn: `Your card (${nameEn}) classically attacks the big toe (Podagra).` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يصيب إصبع القدم الأكبر بالبوداغرا.`, clinicalReasonEn: `Your card (${nameEn}) does not cause podagra.` };
  }

  // --- STAGE 5 GOLD STANDARD MANAGEMENT ---
  if (questionId === 's5_cvs_coronary_angiography') {
    const ok = has(/catheter|angiograph|pci|stent|coronary|قسطرة|شرايين تاجية|دعامة/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) علاجه الحاسم قسطرة الشرايين التاجية وتركيب الدعامة.`, clinicalReasonEn: `Your card (${nameEn}) requires emergent coronary angiography / PCI.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتطلب قسطرة شرايين تاجية.`, clinicalReasonEn: `Your card (${nameEn}) does not require coronary angiography.` };
  }
  if (questionId === 's5_git_endoscopy') {
    const ok = has(/endoscop|colonoscop|ogd|منظار هضمي|منظار معدة|منظار قولون/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) الفحص الذهبي المؤكد له هو المنظار الهضمي أو القولوني.`, clinicalReasonEn: `Your card (${nameEn}) is confirmed via endoscopy or colonoscopy.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) تشخيصه الأساسي ليس بالمنظار الهضمي.`, clinicalReasonEn: `Your card (${nameEn}) is not diagnosed via endoscopy.` };
  }
  if (questionId === 's5_git_appendectomy') {
    const ok = has(/appendectomy|cholecystectomy|laparoscop|resection|استئصال الزائدة|استئصال المرارة/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) علاجه الحاسم استئصال جراحي فوري بالمنظار.`, clinicalReasonEn: `Your card (${nameEn}) requires urgent laparoscopic surgical resection.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يعالج باستئصال الزائدة أو المرارة.`, clinicalReasonEn: `Your card (${nameEn}) does not require appendectomy.` };
  }
  if (questionId === 's5_resp_spirometry') {
    const ok = has(/spirometry|fev1|pulmonary function|وظائف التنفس|كفاءة الرئة/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) الفحص الذهبي لتشخيصه هو قياس وظائف التنفس بالنفخ (Spirometry).`, clinicalReasonEn: `Your card (${nameEn}) is confirmed by spirometry pulmonary function test.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يشخص بجهاز قياس وظائف التنفس.`, clinicalReasonEn: `Your card (${nameEn}) is not confirmed by spirometry.` };
  }
  if (questionId === 's5_neuro_mri_brain') {
    const ok = has(/mri brain|ct brain|neuroimaging|رنين مغناطيسي|أشعة مقطعية للمخ/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) الفحص الفاصل هو أشعة الرنين المغناطيسي أو المقطعية على المخ.`, clinicalReasonEn: `Your card (${nameEn}) is evaluated via brain MRI or non-contrast CT.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يعتمد تشخيصه الفاصل على تصوير المخ.`, clinicalReasonEn: `Your card (${nameEn}) does not require brain neuroimaging.` };
  }
  if (questionId === 's5_endo_hba1c_glucose') {
    const ok = has(/hba1c|glucose|fasting plasma|تراكمي|سكر تراكمي/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) تشخيصه المعملي القاطع بتحليل السكر التراكمي وسكر الصائم.`, clinicalReasonEn: `Your card (${nameEn}) is definitively diagnosed by HbA1c and glucose testing.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يشخص بتحليل السكر التراكمي.`, clinicalReasonEn: `Your card (${nameEn}) is not diagnosed via HbA1c.` };
  }
  if (questionId === 's5_renal_biopsy') {
    const ok = has(/renal biopsy|kidney biopsy|glomerul|nephrotic|خزعة الكلية|عينة كلوية/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) تشخيصه النسيجي الدقيق يعتمد على خزعة إبرية من الكلية.`, clinicalReasonEn: `Your card (${nameEn}) is confirmed by ultrasound-guided renal biopsy.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يتطلب خزعة نسيجية من الكلى.`, clinicalReasonEn: `Your card (${nameEn}) does not require renal biopsy.` };
  }
  if (questionId === 's5_inf_blood_culture') {
    const ok = has(/blood culture|bacteremia|sepsis|endocarditis|مزرعة دم/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) الفحص الذهبي لعزل الميكروب هو مزارع الدم المتكررة.`, clinicalReasonEn: `Your card (${nameEn}) is confirmed via serial blood cultures.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يشخص بمزرعة الدم.`, clinicalReasonEn: `Your card (${nameEn}) does not require blood cultures.` };
  }
  if (questionId === 's5_msk_plain_xray') {
    const ok = has(/x-ray|radiograph|fracture|osteoarthrit|أشعة سينية|أشعة عادية|كسر/i);
    return ok
      ? { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) الفحص الأولي المؤكد هو الأشعة السينية العادية (X-ray).`, clinicalReasonEn: `Your card (${nameEn}) is diagnosed primarily by 2-view plain X-ray.` }
      : { trueAnswer: 'NO', clinicalReasonAr: `كرتك (${nameAr}) لا يشخص بالأشعة السينية العادية.`, clinicalReasonEn: `Your card (${nameEn}) is not evaluated by plain X-ray.` };
  }

  // --- GENERAL FALLBACK LOGIC ---
  if (isDisease) {
    if (questionId.includes('acute') && has(/acute|emergency|pain|infarct|shock|حادت|طارئ|ألم/i)) {
      return { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) يتظاهر كحالة حادة وطارئة.`, clinicalReasonEn: `Your card (${nameEn}) is an acute emergency condition.` };
    }
    if (questionId.includes('chronic') && has(/chronic|progressive|lifelong|مزمن|مستمر/i)) {
      return { trueAnswer: 'YES', clinicalReasonAr: `كرتك (${nameAr}) مرض مزمن يحتاج متابعة مستمرة.`, clinicalReasonEn: `Your card (${nameEn}) is a chronic condition.` };
    }
  }

  // Default neutral evaluation
  return {
    trueAnswer: 'MAYBE',
    clinicalReasonAr: `كرتك هو (${nameAr}) - المعلومة السريرية قد تنطبق جزئياً بحسب مرحلة الحالة ومضاعفاتها.`,
    clinicalReasonEn: `Your card is (${nameEn}) - this clinical presentation may apply partially depending on stage.`,
  };
}
