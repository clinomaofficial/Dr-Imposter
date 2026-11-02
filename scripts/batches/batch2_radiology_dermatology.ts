import { WordExpansionEntry } from './types';

export const RADIOLOGY_DERMATOLOGY_EXPANSION: WordExpansionEntry[] = [
  // =================== RADIOLOGY (15 Terms) ===================
  {
    word: {
      id: 'w549',
      word: { Arabic: 'الأشعة المقطعية', English: 'Computed Tomography' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Radiology', 'Emergency Medicine', 'Internal Medicine', 'Neurology'],
      synonyms: ['الأشعة المقطعية', 'الأشعة المحوسبة', 'المفراس الحلزوني', 'CT scan', 'CAT scan'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "تقنية تصوير إشعاعي تعتمد على دوران أنبوب الأشعة السينية حول المريض مع كواشف إلكترونية متطورة.",
        "تولد مقاطع تشريحية عرضية متتالية ثلاثية الأبعاد للأعضاء الداخلية بدقة مليمترية عالية.",
        "تقاس كثافة الأنسجة وظلالها من خلالها بمقياس رقمي خاص يعرف بوحدات هونسفيلد (Hounsfield Units).",
        "تعد الفحص الطارئ الأول الحاسم في حالات نزيف المخ الحاد وكسور الجمجمة ورضوض الصدر والبطن الكبرى.",
        "يمكن حقن مريضها بصبغة اليود الوريدية لإظهار الأوعية الدموية وتحديد تروية الأورام وأماكن الانسدادات."
      ],
      English: [
        "A diagnostic medical imaging modality employing a motorized rotating X-ray tube paired with digital detectors.",
        "Generates detailed cross-sectional tomographic slices through the body reconstructed via computer processing algorithms.",
        "Tissue attenuation densities across the reconstructed images are quantitatively mapped using Hounsfield Units (HU).",
        "Serves as the indispensable first-line emergent investigation for acute intracranial hemorrhage and polytrauma evaluation.",
        "Frequently augmented with intravenous iodinated contrast to assess intravascular pathology and vascular organ lesions."
      ]
    }
  },
  {
    word: {
      id: 'w550',
      word: { Arabic: 'الرنين المغناطيسي', English: 'Magnetic Resonance Imaging' },
      level: 'Both',
      difficulty: 3,
      type: 'Equipment',
      subjects: ['Radiology', 'Neurology', 'Orthopedics', 'Anatomy'],
      synonyms: ['الرنين المغناطيسي', 'التصوير بالرنين المغناطيسي', 'جهاز الرنين', 'MRI', 'NMR'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "تقنية تصوير تشخيصية متطورة للغاية تعتمد على مجال مغناطيسي قوي وموجات راديوية دون استخدام أي إشعاع مؤين.",
        "تعتمد فيزيائياً على تحفيز بروتونات ذرات الهيدروجين في جزيئات الماء داخل أنسجة الجسم ورصد إشارات استرخائها.",
        "توفر أعلى تباين وتمايز ممكن للأنسجة الرخوة مثل المخ، النخاع الشوكي، الأربطة الصليبية والغضاريف المفصلية.",
        "يمنع منعاً باتاً دخول المريض إليها إذا كان يحمل أجهزة تنظيم ضربات قلب قديمة أو شظايا معدنية ممغنطة.",
        "تستخدم صبغة الغادولينيوم (Gadolinium) الوريدية كعامل تباين لتعزيز وضوح الالتهابات وأورام الجهاز العصبي."
      ],
      English: [
        "A non-invasive diagnostic cross-sectional imaging modality utilizing intense static magnetic fields and radiofrequency pulses.",
        "Operates at the quantum level by aligning and perturbing hydrogen proton nuclear spins abundant in biological water.",
        "Provides unmatched soft-tissue contrast resolution, making it the supreme modality for brain, spinal cord, and joint cartilage.",
        "Absolute contraindications include non-conditional cardiac pacemakers, metallic intraocular foreign bodies, and cochlear implants.",
        "Enhancement sequences commonly utilize intravenous paramagnetic gadolinium chelates to demarcate neoplasms and active plaque lesions."
      ]
    }
  },
  {
    word: {
      id: 'w551',
      word: { Arabic: 'الموجات فوق الصوتية', English: 'Ultrasound' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Equipment',
      subjects: ['Radiology', 'Obstetrics and Gynecology', 'Cardiology', 'General Medicine'],
      synonyms: ['الموجات فوق الصوتية', 'السونار', 'التصوير الصوتي', 'Ultrasound', 'Sonography'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أداة تصوير آمنة وفورية وغير باضعة تعتمد على ارتداد موجات صوتية عالية التردد تتجاوز قدرة الأذن البشرية على السمع.",
        "يستخدم فيها مسبار كهرضغطي (Transducer) يوضع على جلد المريض مع هلام مائي لضمان نقل الموجات بدون هواء.",
        "الفحص المثالي والآمن تماماً لمتابعة نمو ونبض الجنين وتحديد جنسه أثناء فترات الحمل لعدم احتوائه على أي إشعاع.",
        "تعد الفحص الأولي الممتاز لتقييم الحصوات المرارية وحصوات الكلى وتضخم البروستاتا وأمراض الغدة الدرقية.",
        "تعتمد على مبدأ دوبلر لقياس سرعة واتجاه تدفق الدم داخل الشرايين والأوردة في الوقت الفعلي."
      ],
      English: [
        "A safe, real-time, ionizing-radiation-free imaging technique relying upon high-frequency acoustic waves beyond human audibility.",
        "Employs a piezoelectric probe transducer placed upon acoustic coupling gel to eliminate air barriers at the skin interface.",
        "The universally accepted premier imaging modality for obstetric surveillance, evaluating fetal biometry and developmental viability.",
        "Serves as the initial imaging investigation of choice for acute cholecystitis, gallstones, nephrolithiasis, and thyroid nodules.",
        "Readily couples with Doppler frequency shift equations to quantify velocity and directionality of intracardiac and vascular flow."
      ]
    }
  },
  {
    word: {
      id: 'w552',
      word: { Arabic: 'التصوير التألقي', English: 'Fluoroscopy' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Radiology', 'Gastroenterology', 'General Surgery'],
      synonyms: ['التصوير التألقي', 'التنظير التألقي', 'الأشعة السينية المستمرة', 'Fluoroscopy'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "تقنية تصوير بالأشعة السينية الحية المستمرة تظهر حركة الأعضاء الداخلية والمواد الظليلة كفيلم سينمائي في الوقت الحقيقي.",
        "تستخدم شاشة فسفورية أو مكثف صور لنقل الصور الحركية مباشرة إلى شاشة فيديو أمام الجراح أو الطبيب.",
        "تعتبر الأساس في دراسات ابتلاع مادة الباريوم لفحص ديناميكية البلع والمريء وحركة الأمعاء.",
        "تستخدم لتوجيه القساطر القلبية في غرف القسطرة وتثبيت كسور العظام تحت جهاز الـ C-arm في غرف العمليات.",
        "تتطلب مراقبة صارمة لزمن التعرض الإشعاعي للمريض والفريق الطبي مع ارتداء مآزر الرصاص الواقية."
      ],
      English: [
        "A dynamic X-ray imaging technology capturing a continuous real-time moving video sequence of internal anatomical structures.",
        "Utilizes a continuous beam coupled to an image intensifier or flat-panel detector projecting onto surgical video consoles.",
        "Serves as the indispensable functional backbone for barium swallow and upper gastrointestinal fluoroscopic motility evaluations.",
        "Provides real-time continuous intraoperative guidance during orthopedic fracture reduction and endovascular catheter navigation.",
        "Requires active monitoring of cumulative radiation dose area product and strict wearing of lead shielding garments."
      ]
    }
  },
  {
    word: {
      id: 'w553',
      word: { Arabic: 'مواد التباين', English: 'Contrast Media' },
      level: 'Both',
      difficulty: 2,
      type: 'Pharma',
      subjects: ['Radiology', 'Pharmacology', 'Internal Medicine'],
      synonyms: ['مواد التباين', 'صبغة الأشعة', 'عوامل التباين الإشعاعي', 'الصبغة الظليلة', 'Contrast Media', 'Contrast Agents'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "مركبات كيميائية تعطى للمريض عن طريق الفم أو الوريد لزيادة تباين وتمايز الأنسجة والأوعية الدموية في الصور الشعاعية.",
        "المركبات اليودية تستخدم مع الأشعة السينية والمقطعية، بينما كبريتات الباريوم تستخدم لفحص الجهاز الهضمي.",
        "مركبات الغادولينيوم البارامغناطيسية تستخدم حصرياً في فحوصات التصوير بالرنين المغناطيسي.",
        "قد تسبب قصوراً كلوياً حاداً (CIN) لدى مرضى اعتلال الكلى لذا يجب فحص معدل الترشيح الكبيبي (eGFR) قبل حقنها.",
        "قد تثير تفاعلات تحسسية تأقية حادة تتراوح من الطفح الجلدي البسيط إلى الصدمة المهددة للحياة وتستدعي حقن الإبينفرين."
      ],
      English: [
        "Chemical substances administered internally to augment internal tissue contrast and delineate luminal structures on imaging.",
        "Water-soluble iodinated compounds predominate in X-ray and CT imaging, while barium sulfate suspensions evaluate the gastrointestinal tract.",
        "Paramagnetic gadolinium-based macrocyclic chelates are tailored uniquely for magnetic resonance imaging sequences.",
        "Carry potential risk of contrast-induced nephropathy (CIN), demanding baseline evaluation of estimated glomerular filtration rate.",
        "Can precipitate idiosyncratic allergic anaphylactoid reactions varying from transient urticaria to life-threatening bronchospasm."
      ]
    }
  },
  {
    word: {
      id: 'w554',
      word: { Arabic: 'التصوير البوزيتروني', English: 'PET Scan' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Equipment',
      subjects: ['Radiology', 'Oncology', 'Physiology'],
      synonyms: ['التصوير البوزيتروني', 'التصوير المقطعي بالإصدار البوزيتروني', 'فحص بي إي تي', 'PET Scan'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "تقنية تصوير نووي متقدمة جداً تقيس النشاط الأيضي والتمثيل الغذائي للخلايا بدلاً من مجرد التركيب التشريحي.",
        "تعتمد على حقن المريض بنظير مشع مصاحب للجلوكوز يعرف بـ فلوروديوكسي جلوكوز (FDG-18).",
        "تلتهم الخلايا السرطانية الشرهة للطاقة الجلوكوز المشع بكثافة مما يجعل الأورام وبؤر انتشارها تضيء كنقاط ساخنة.",
        "تدمج دائماً في الأجهزة الحديثة مع الأشعة المقطعية لتقديم صور مدمجة هجينة تجمع بين الوظيفة الأيضية والتشريح الدقيق.",
        "تعتبر المعيار الذهبي لتحديد مراحل انتشار السرطان (Staging) ومتابعة استجابة الأورام للعلاج الكيميائي."
      ],
      English: [
        "An advanced nuclear molecular functional imaging modality evaluating metabolic cellular turnover rather than solely static anatomy.",
        "Operates through intravenous tracer injection of 18F-fluorodeoxyglucose (FDG), a glucose analogue taken up by active tissue.",
        "Malignant cells with hyperactive glycolysis avidly internalize the radiotracer via GLUT transporters, lighting up as metabolic hot spots.",
        "Universally fused with cross-sectional helical computed tomography to correlate metabolic hyperactivity precisely with anatomy.",
        "Represents the premier clinical modality for initial oncologic staging, restaging, and surveillance following systemic chemotherapy."
      ]
    }
  },
  {
    word: {
      id: 'w555',
      word: { Arabic: 'تصوير الثدي الشعاعي', English: 'Mammography' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Radiology', 'Oncology', 'Obstetrics and Gynecology'],
      synonyms: ['تصوير الثدي الشعاعي', 'الماموجرام', 'أشعة الثدي', 'الماموجرافي', 'Mammography', 'Mammogram'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فحص شعاعي متخصص يستخدم حزم أشعة سينية منخفضة الطاقة لفحص نسيج الثدي واكتشاف الأورام المبكرة.",
        "يعد الركيزة الأساسية لبرامج المسح الوطني الشامل للكشف المبكر عن سرطان الثدي لدى النساء فوق سن الأربعين.",
        "يتم فيه ضغط نسيج الثدي بلطف بين لوحين متوازيين لتقليل سماكته وتقليل تشتت الإشعاع وتحسين وضوح الصورة.",
        "يكشف بدقة التكلسات الدقيقة (Microcalcifications) التي قد تكون أولى علامات السرطان الموضعي قبل الشعور بأي كتلة.",
        "تُصنف نتائجه وفق نظام تقرير بي-رادز القياسي الموحد (BI-RADS) من 0 إلى 6 لتحديد الخطوة التالية."
      ],
      English: [
        "A specialized low-dose X-ray imaging examination engineered explicitly for screening and diagnostic surveillance of breast tissue.",
        "The undisputed foundation of population-based screening programs targeted at early asymptomatic detection of breast malignancy.",
        "Involves mechanical compression of the parenchyma between radiolucent paddles to uniformize thickness and maximize focal resolution.",
        "Uniquely capable of identifying clustered pleomorphic microcalcifications, frequently the sole sign of early ductal carcinoma in situ.",
        "Results are standardized globally according to the Breast Imaging-Reporting and Data System (BI-RADS) categorical scale."
      ]
    }
  },
  {
    word: {
      id: 'w556',
      word: { Arabic: 'تصوير الأوعية', English: 'Angiography' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Technique',
      subjects: ['Radiology', 'Vascular Surgery', 'Cardiology'],
      synonyms: ['تصوير الأوعية', 'القسطرة الوعائية الظليلة', 'تصوير الشرايين', 'Angiography', 'Arteriography'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "تقنية تصوير طبي تخصصية تهدف إلى إظهار التجويف الداخلي للأوعية الدموية في الجسم (شرايين وأوردة وغرف القلب).",
        "تتطلب إدخال قسطرة رفيعة عبر شريان محيطي (كالشريان الفخذي أو الكعبري) وحقن مادة تباين يودية مباشرة داخل الوعاء.",
        "تتيح الكشف الدقيق عن التضيقات والتصلبات والانسدادات الخثرية وأمهات الدم الشريانية (Aneurysms).",
        "تتميز بقدرتها على التحول من إجراء تشخيصي إلى إجراء علاجي فوري مثل توسيع الشريان بالبالون وتركيب الدعامات المعدنية.",
        "يستخدم فيها نظام طرح الصور الرقمي (DSA) لحذف عظام الجسم من خلفية الصورة لإبراز تدفق الدم فقط."
      ],
      English: [
        "A specialized endovascular fluoroscopic technique visualizing the internal luminal architecture of arterial and venous conduits.",
        "Involves percutaneous catheter navigation via the femoral or radial artery under aseptic conditions with direct iodinated contrast injection.",
        "Identifies arterial stenoses, occlusive thromboembolic events, arteriovenous malformations, and vascular aneurysms with unmatched fidelity.",
        "Uniquely transitions from diagnostic visualization to immediate endovascular therapy via balloon angioplasty or stent deployment.",
        "Employs digital subtraction technology (DSA) to eliminate background skeletal shadows, isolating pure intravascular blood columns."
      ]
    }
  },
  {
    word: {
      id: 'w557',
      word: { Arabic: 'الأشعة السينية', English: 'X-Ray' },
      level: 'Academic',
      difficulty: 1,
      type: 'Equipment',
      subjects: ['Radiology', 'Anatomy', 'Orthopedics'],
      synonyms: ['الأشعة السينية', 'أشعة رونتجن', 'أشعة إكس', 'X-Ray', 'Radiography'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أقدم وأبسط أشكال التصوير الطبي وأكثرها انتشاراً، اكتشفها العالم الألماني فيلهلم رونتغن عام 1895.",
        "تعتمد على حزم كهرومغناطيسية قصيرة الموجة وذات طاقة عالية تخترق أنسجة الجسم بدرجات متفاوتة حسب كثافتها.",
        "تظهر العظام الكثيفة بيضاء ناصعة لأنها تمتص معظم الفوتونات، بينما تظهر الرئتان المملوءتان بالهواء سوداء بالكامل.",
        "الخيار التشخيصي الأول والفوري لتأكيد كسور العظام، وخلوع المفاصل، والتهابات الرئة، وانسداد الأمعاء.",
        "تنتج صورة ثنائية الأبعاد تعتمد على إسقاط الظلال، مما يستوجب غالباً التقاط منظرين متعامدين (أمامي وجانبي)."
      ],
      English: [
        "The foundational and most widely utilized diagnostic imaging technology, discovered in 1895 by Wilhelm Conrad Röntgen.",
        "Utilizes ionizing electromagnetic waves penetrating anatomical tissue strata differentially based upon atomic density.",
        "Mineralized dense cortical bone absorbs high photon fractions appearing bright white, while aerated lung parenchyma appears black.",
        "Serves as the rapid, accessible frontline triage modality for acute skeletal fractures, joint dislocations, and lobar pneumonia.",
        "Generates planar two-dimensional projection shadows, necessitating orthogonal views (anteroposterior and lateral) for proper evaluation."
      ]
    }
  },
  {
    word: {
      id: 'w558',
      word: { Arabic: 'تصوير الأوعية المقطعي', English: 'CT Angiography' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Technique',
      subjects: ['Radiology', 'Cardiology', 'Vascular Surgery', 'Emergency Medicine'],
      synonyms: ['تصوير الأوعية المقطعي', 'الأشعة المقطعية للأوعية', 'قسطرة مقطعية', 'CT Angiography', 'CTA'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "تقنية غير باضعة تجمع بين سرعة الأشعة المقطعية متعددة الكواشف وحقن صبغة سريعة في الوريد المحيطي لرسم الأوعية.",
        "تعتبر الفحص السريع والمعتمد دولياً كمعيار ذهبي لتأكيد أو استبعاد الانصمام الرئوي الحاد (Pulmonary Embolism).",
        "تظهر شرايين المخ والشريان الأورطي والشرايين التاجية في نماذج ثلاثية الأبعاد فائقة الدقة دون الحاجة لدخول قسطرة شريانية.",
        "تكشف بدقة تسلخ الشريان الأورطي القاتل (Aortic Dissection) وتمدد الأوعية الدموية في الطوارئ خلال ثوانٍ معدودة.",
        "تتطلب وريداً محيطياً واسعاً وحقانة آلية تضخ الصبغة بسرعة تدفق عالية مع توقيت محسوب بدقة للحظة مرور الصبغة بالشريان."
      ],
      English: [
        "A rapid, minimally invasive imaging method combining multidetector helical scanning with timed peripheral intravenous contrast boluses.",
        "Stands as the definitive clinical gold standard investigation for diagnosing life-threatening acute pulmonary embolism.",
        "Reconstructs stereoscopic three-dimensional endoluminal vascular maps of intracranial vessels, the aorta, and coronary trees.",
        "Routinely deployed in trauma resuscitation to rapidly confirm or exclude acute aortic dissection and vascular laceration within seconds.",
        "Demands large-bore peripheral venous access and automated dual-barrel power injectors triggered via automated bolus-tracking software."
      ]
    }
  },
  {
    word: {
      id: 'w559',
      word: { Arabic: 'تخطيط صدى القلب', English: 'Echocardiography' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Radiology', 'Cardiology', 'Physiology', 'Internal Medicine'],
      synonyms: ['تخطيط صدى القلب', 'إيكو القلب', 'سونار القلب', 'Echocardiography', 'Echo'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فحص بالموجات فوق الصوتية مخصص للقلب يتيح تقييم انقباض عضلة القلب وحركة الصمامات والتدفقات الدموية بدقة تامة.",
        "يقيس بدقة الكسر القذفي للبطين الأيسر (Ejection Fraction) لتقييم كفاءة المضخة وتشخيص قصور القلب.",
        "يكشف ارتخاء وتضيق وارتجاع الصمامات القلبية الأربعة ووجود خثرات دمجية داخل الأذينين أو ارتشاح في غشاء التامور.",
        "ينفذ إما عبر وضع المسبار على جدار الصدر (TTE) أو بإدخال منظار دقيق عبر المريء (TEE) للوصول لرؤية لصيقة للقلب.",
        "يعتمد على الدوبلر الملون لتحديد اتجاه وسرعة الدم عبر الصمامات وكشف أي ثقوب ولادية بين البطينين أو الأذينين."
      ],
      English: [
        "A dedicated cardiovascular ultrasound modality providing comprehensive real-time anatomical and hemodynamic cardiac assessment.",
        "Accurately quantifies left ventricular ejection fraction (LVEF), establishing the diagnostic baseline in congestive heart failure.",
        "Directly visualizes valvular stenosis, regurgitant flow jets, intracardiac mural thrombi, and pericardial effusion tamponade.",
        "Performed conventionally across the anterior chest wall (transthoracic) or via an endoscopic esophageal probe (transesophageal).",
        "Harnesses color Doppler mapping to trace transvalvular pressure gradients and congenital intracardiac shunts."
      ]
    }
  },
  {
    word: {
      id: 'w560',
      word: { Arabic: 'الدوبلر الصوتي', English: 'Doppler Ultrasound' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Radiology', 'Vascular Surgery', 'Cardiology'],
      synonyms: ['الدوبلر الصوتي', 'سونار دوبلر', 'أشعة الدوبلر الملون', 'Doppler Ultrasound', 'Doppler Sonography'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "تطبيق فيزيائي للموجات فوق الصوتية يعتمد على تغير تردد الصوت المنعكس من كريات الدم الحمراء المتحركة داخل الأوعية.",
        "الفحص الحاسم والروتين الأول لتأكيد أو استبعاد تجلط الأوردة العميقة في الساقين (Deep Vein Thrombosis - DVT).",
        "يقيم تضيق شرايين الرقبة السباتية (Carotid Stenosis) المسؤولة عن تروية الدماغ ومخاطر السكتات الدماغية.",
        "يمثل تدفق الدم في الشاشات بألوان متعارف عليها دولياً: اللون الأحمر للدم المتدفق نحو المسبار، والأزرق للمبتعد عنه.",
        "يستخدم أثناء الحمل لتقييم مقاومة تدفق الدم في شرايين الحبل السري وشرايين الرحم لمراقبة تغذية الجنين."
      ],
      English: [
        "A physiological ultrasound technique exploiting acoustic frequency shifts reflected back from moving erythrocytes inside vascular lumens.",
        "The paramount first-line diagnostic investigation for ruling in or out lower extremity deep vein thrombosis (DVT).",
        "Routinely quantifies peak systolic velocities in carotid artery stenosis to stratify transient ischemic attack stroke risks.",
        "Encodes directional flow vectors chromatically: red typically depicts flow heading toward the probe, and blue moving away.",
        "Widely applied in high-risk obstetrics to measure umbilical artery and uterine artery pulsatility indices for placental insufficiency."
      ]
    }
  },
  {
    word: {
      id: 'w561',
      word: { Arabic: 'فحص كثافة العظام', English: 'DEXA Scan' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Radiology', 'Rheumatology', 'Orthopedics', 'Endocrinology'],
      synonyms: ['فحص كثافة العظام', 'مقياس كثافة العظام ديكسا', 'أشعة الديكسا', 'DEXA Scan', 'DXA', 'Bone Densitometry'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فحص شعاعي يعتمد على امتصاص الأشعة السينية ثنائية الطاقة لقياس المحتوى المعدني والكثافة النوعية للعظام.",
        "المعيار الذهبي الدولي المعتمد من منظمة الصحة العالمية لتشخيص هشاشة العظام (Osteoporosis) ومخاطر الكسور.",
        "يقيس الكثافة في منطقتين رئيسيتين هما: عظام الفقرات القطنية في أسفل الظهر وعنق عظمة الفخذ في الورك.",
        "تعبر نتائجه عن درجة الانحراف المعياري مقارنة ببالغ شاب سليم وتعرف بـ (T-score)؛ والدرجة أقل من -2.5 تعني هشاشة صريحة.",
        "يتميز بجرعة إشعاعية ضئيلة للغاية لا تتجاوز جزءاً صغيراً من جرعة أشعة الصدر العادية."
      ],
      English: [
        "A specialized quantitative radiological examination utilizing dual-energy X-ray absorptiometry to assess bone mineral content.",
        "The definitive clinical gold standard established by the WHO for diagnosing osteoporosis and predicting osteoporotic fracture vulnerability.",
        "Targets two sentinel skeletal load-bearing anatomical sites: the lumbar spine (L1-L4) and the femoral neck/total hip.",
        "Reports skeletal density via the T-score comparing patients to young adult reference peaks; a score of -2.5 or lower defines osteoporosis.",
        "Incurs an extremely trivial ionizing radiation exposure, significantly lower than a routine conventional chest radiograph."
      ]
    }
  },
  {
    word: {
      id: 'w562',
      word: { Arabic: 'بلع الباريوم', English: 'Barium Swallow' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Radiology', 'Gastroenterology', 'General Surgery'],
      synonyms: ['بلع الباريوم', 'أشعة الباريوم للمريء', 'وجبة الباريوم', 'Barium Swallow', 'Barium Meal', 'Esophagogram'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فحص شعاعي تألقي حركي يطلب من المريض خلاله شرب معلق أبيض ظليل للأشعة لتقييم حركة وتجويف المريء والبلعوم.",
        "الفحص الكلاسيكي لتشخيص تعذر الارتخاء المريئي (Achalasia) حيث يظهر المريء المتوسع مع تضيق سفلي يشبه منقار الطائر (Bird beak).",
        "يكشف الرتوق المريئية مثل رتج زنكر (Zenker diverticulum) والتضيقات والفتوق الحجابية وأورام المريء المضيقة.",
        "يمنع استخدامه ويستبدل بصبغة الغاستروغرافين القابلة للذوبان إذا كان هناك أي اشتباه بوجود ثقب في جدار المريء لتجنب التهاب المنصف.",
        "يجب تنبيه المريض بأن برازه سيتحول إلى اللون الأبيض الطباشيري لعدة أيام بعد الفحص حتى يتم التخلص من المادة."
      ],
      English: [
        "A fluoroscopic examination during which the patient ingests a radiopaque chalky suspension to map pharyngeal and esophageal transport.",
        "Classically identifies the pathognomonic tapered 'bird's-beak' distal esophageal narrowing characteristic of achalasia.",
        "Delineates mucosal irregularities, strictures, hiatal hernias, and outpouchings such as Zenker diverticula with pristine resolution.",
        "Strictly avoided and replaced with water-soluble gastrografin if esophageal perforation is suspected, averting lethal barium mediastinitis.",
        "Patients must be forewarned that their stools will appear chalky white for several days following transit clearance."
      ]
    }
  },
  {
    word: {
      id: 'w563',
      word: { Arabic: 'الأشعة التداخلية', English: 'Interventional Radiology' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Technique',
      subjects: ['Radiology', 'General Surgery', 'Oncology', 'Vascular Surgery'],
      synonyms: ['الأشعة التداخلية', 'الجراحة الإشعاعية التداخلية', 'الأشعة العلاجية المصوبة', 'Interventional Radiology', 'IR'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "تخصص طبي علاجي رائد يستخدم فيه الأطباء تقنيات التصوير المختلفة (سونار، أشعة سينية، مقطعية) لتوجيه أدوات جراحية دقيقة عبر الجلد.",
        "يعد بديلاً طفيف التوغل عن الجراحات المفتوحة الكبرى، مما يقلل النزيف والآلام وفترة بقاء المريض في المستشفى.",
        "يشمل سد الأوعية الدموية النازفة (Embolization)، وكي الأورام السرطانية بالحرارة أو التبريد، ووضع دعامات القنوات المرارية.",
        "يقوم أطباؤه بسحب السوائل المتجمعة والصديد عبر قساطر موجهة، وأخذ الخزعات النسيجية العميقة من الكبد والرئة.",
        "يمثل طفرة حقيقية في علاج نزيف ما بعد الولادة وتضخم البروستاتا وألياف الرحم دون استئصال جراحي."
      ],
      English: [
        "A therapeutic medical specialty utilizing imaging guidance (fluoroscopy, CT, ultrasound) to navigate micro-instruments percutaneously.",
        "Provides minimally invasive alternatives to open surgery, radically reducing tissue trauma, intraoperative blood loss, and recovery times.",
        "Encompasses selective transcatheter embolization for hemorrhages, percutaneous tumor ablation (radiofrequency/cryo), and biliary stenting.",
        "Routinely executes targeted deep organ biopsies, drainage of deep abdominopelvic abscesses, and central venous access line insertions.",
        "Offers groundbreaking uterine artery and prostatic artery embolization therapies to manage symptomatic fibroids and benign hyperplasia."
      ]
    }
  },

  // =================== DERMATOLOGY (15 Terms) ===================
  {
    word: {
      id: 'w564',
      word: { Arabic: 'حب الشباب', English: 'Acne Vulgaris' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Dermatology', 'Endocrinology'],
      synonyms: ['حب الشباب', 'العُد الشائع', 'بثور الوجه', 'حبوب الشباب', 'Acne Vulgaris', 'Pimples'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "مرض التهابي مزمن يصيب الجريبات الشعرية الدهنية، ويعد أكثر الحالات الجلدية انتشاراً على الإطلاق بين المراهقين والشباب.",
        "يشمل إمراضه أربعة عوامل: زيادة إفراز الزهم، فرط التقرن الجريبي، وتكاثر بكتيريا العديات (Cutibacterium acnes)، والالتهاب.",
        "تظهر الآفات الأساسية غير الالتهابية على هيئة زؤان مغلق (رؤوس بيضاء) أو زؤان مفتوح متأكسد (رؤوس سوداء).",
        "قد يتطور لآفات التهابية تشمل الحطاطات والبثور، وفي الحالات الشديدة يشكل عقيدات وأكياساً تترك ندبات دائمة مشوهة.",
        "يبدأ علاجه بالمطهرات ومقشرات الريتينويد الموضعية، وفي الحالات العقدية المستعصية يعالج بعقار الإيزوتريتينوين (Roaccutane) الفموي."
      ],
      English: [
        "A chronic inflammatory disorder of the pilosebaceous unit, standing as the most ubiquitous dermatologic complaint of adolescence.",
        "Pathophysiologically driven by follicular hyperkeratinization, excess sebum production, Cutibacterium acnes proliferation, and inflammation.",
        "Primary non-inflammatory pathognomonic hallmark lesions are open comedones (blackheads) and closed comedones (whiteheads).",
        "Can escalate to inflammatory papules, pustules, and deep painful nodulocystic lesions prone to causing permanent atrophic scarring.",
        "Managed stepwise with topical benzoyl peroxide and retinoids; recalcitrant nodulocystic disease responds dramatically to oral isotretinoin."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انسداد المسام بفرط التقرن مع فرط إفراز الغدد الدهنية تحت تأثير الأندروجينات وتكاثر بكتيريا Cutibacterium acnes.",
        goldStandard: "التشخيص الإكلينيكي البحت بمعاينة الوجه والظهر لرؤية الزؤان (Comedones) المتعدد مع الحطاطات والبثور.",
        firstLineRx: "بنزويل بيروكسايد الموضعي مع ريتينويد موضعي (أدابالين) للحالات البسيطة، والإيزوتريتينوين الفموي للحالات العقدية المتكيسة.",
        keyDifferentiator: "وجود الزؤان (Comedones) كعلامة فارقة حاسمة تميزه عن الوردية (Rosacea) التي تخلو تماماً من الرؤوس السوداء أو البيضاء."
      },
      English: {
        etiology: "Androgen-mediated sebum hypersecretion, follicular infundibular hyperkeratosis, and Cutibacterium acnes colonization.",
        goldStandard: "Clinical visual dermatologic assessment confirming hallmark comedones alongside polymorphic papulopustular lesions.",
        firstLineRx: "Topical benzoyl peroxide plus topical retinoid (adapalene); oral isotretinoin for severe recalcitrant nodular scarring disease.",
        keyDifferentiator: "Presence of comedones (open and closed) represents the pathognomonic hallmark distinguishing it from acne rosacea."
      }
    }
  },
  {
    word: {
      id: 'w565',
      word: { Arabic: 'سرطان الخلايا القاعدية', English: 'Basal Cell Carcinoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Dermatology', 'Oncology', 'Pathology'],
      synonyms: ['سرطان الخلايا القاعدية', 'كارسينوما الخلايا القاعدية', 'الورم القاعدي الخبيث', 'Basal Cell Carcinoma', 'BCC'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "أكثر أنواع سرطانات الجلد انتشاراً بين البشر على الإطلاق، ويمثل نحو 80% من جميع الأورام الجلدية الخبيثة غير الميلانينية.",
        "ينشأ من خلايا الطبقة القاعدية في البشرة، ويرتبط ارتباطاً سببياً مباشراً بالتعرض التراكمي لأشعة الشمس فوق البنفسجية.",
        "يظهر كلاسيكياً على الوجه أو الرقبة كحطاطة أو عقدة لؤلؤية شفافة ذات حواف ملتفة وتوسع في الشعيرات الدموية السطحية (Telangiectasia).",
        "يتميز بنمو بطيء جداً وتدمير موضعي للأنسجة المحيطة (لذا سمي بالقرحة القارضة Rodent ulcer)، ولكن نادراً جداً ما ينبث أو ينتشر بعيداً.",
        "العلاج الأمثل له هو الاستئصال الجراحي بتقنية موهز (Mohs Micrographic Surgery) الدقيقة لضمان نظافة الحواف والحفاظ على أنسجة الوجه."
      ],
      English: [
        "The most prevalent malignancy diagnosed in humans worldwide, representing approximately 80% of all non-melanoma skin cancers.",
        "Arises from pluripotential germinative cells within the stratum basale, directly induced by cumulative actinic UV radiation exposure.",
        "Classically manifests on sun-exposed head and neck zones as a pearly translucent papule with rolled borders and prominent arborizing telangiectasias.",
        "Exhibits indolent local tissue destruction (historically called rodent ulcer), with extraordinarily low propensity for distant metastasis (<0.1%).",
        "Surgical excision via Mohs micrographic surgery provides the highest cure rate while maximally preserving cosmetically sensitive tissue."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات جينية في مسار إشارات هيدجهوغ (Hedgehog pathway / PTCH1) ناجمة عن التعرض المزمن للأشعة فوق البنفسجية.",
        goldStandard: "الخزعة الجلدية بالمقراض (Punch/Shave Biopsy) لإثبات وجود أعشاش من الخلايا القاعدية مع سياج نووي محيطي (Peripheral palisading).",
        firstLineRx: "الاستئصال الجراحي بهوامش أمان أو جراحة موهز الميكروغرافية في الوجه والمناطق الحساسة تجميلياً.",
        keyDifferentiator: "مظهر العقدة اللؤلؤية الشفافة مع الأوعية المتوسعة الشجرية والنمو الموضعي البطيء جداً بدون انتشار بعيد."
      },
      English: {
        etiology: "Mutational inactivation of the PTCH1 gene activating the Sonic Hedgehog signaling pathway induced by chronic UV exposure.",
        goldStandard: "Punch or shave skin biopsy showing basaloid keratinocyte nests displaying characteristic peripheral nuclear palisading.",
        firstLineRx: "Standard surgical excision with margin clearance or Mohs micrographic surgery for high-risk facial cosmetically sensitive areas.",
        keyDifferentiator: "Pearly translucent papulonodular contour with fine branching telangiectasias and virtually zero metastatic potential."
      }
    }
  },
  {
    word: {
      id: 'w566',
      word: { Arabic: 'الالتهاب الجلدي الدهني', English: 'Seborrheic Dermatitis' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Dermatology', 'Pediatrics'],
      synonyms: ['الالتهاب الجلدي الدهني', 'الأكزيما الدهنية', 'قشرة الرأس المرضية', 'طاقية المهد', 'Seborrheic Dermatitis', 'Cradle cap'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "حالة جلدية التهابية شائعة جداً تصيب المناطق الغنية بالغدد الدهنية مثل فروة الرأس والحواجب وثنايا الأنف ووسط الصدر.",
        "ترتبط باستجابة مناعية غير طبيعية وتكاثر فطريات الملاسيزية (Malassezia yeast) التي تتغذى على دهون الجلد.",
        "تتظاهر بظهور قشور دهنية صفراء سميكة ومتقشرة مع احمرار خفيف وحكة في فروة الرأس والوجه.",
        "تصيب الرضع في الأشهر الأولى من حياتهم وتعرف عند الأطفال باسم قبعة المهد (Cradle cap) وتزول تلقائياً.",
        "تشتد وتكون شديدة المقاومة لدى المصابين بمرض باركنسون ومرضى ضعف المناعة (HIV)، وتعالج بشامبوهات مضادة للفطريات كالكيتوكونازول."
      ],
      English: [
        "A highly prevalent chronic inflammatory dermatosis selectively targeting sebum-rich zones including the scalp, eyebrows, and nasolabial folds.",
        "Pathogenesis is tied to an abnormal cutaneous inflammatory response to lipophilic commensal yeasts belonging to the Malassezia species.",
        "Features greasy, yellowish scales plastered over erythematous plaques, accompanied by mild to moderate pruritus (severe dandruff).",
        "Affects neonates within the first months of life as greasy scalp adherent crusting affectionately known as cradle cap.",
        "Exhibits extreme severity in neurological diseases (particularly Parkinson disease) and HIV; responsive to topical ketoconazole and zinc pyrithione."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "استجابة التهابية دهنية جلدية لتكاثر خمائر الملاسيزية الفطرية المعتمدة على إفرازات الزهم.",
        goldStandard: "التشخيص الإكلينيكي البحت القائم على التوزيع الكلاسيكي في الثنايا الأنفية الشفوية وفروة الرأس مع القشور الدهنية الصفراء.",
        firstLineRx: "شامبوهات وكريمات الكيتوكونازول الموضعية المضادة للفطريات (Ketoconazole 2%) مع كورتيزون موضعي خفيف في النوبات الحادة.",
        keyDifferentiator: "قشور صفراء دهنية لزجة متوضعة في مناطق الغدد الدهنية دون المساس ببقية الجلد الجاف."
      },
      English: {
        etiology: "Epidermal barrier inflammatory reaction to lipid metabolites produced by commensal Malassezia furfur yeasts.",
        goldStandard: "Clinical diagnostic recognition based upon classic greasy salmon-colored scaly plaques over nasolabial and scalp seborrheic tracts.",
        firstLineRx: "Topical antifungal shampoos (ketoconazole 2%, ciclopirox, selenium sulfide) combined with mild topical hydrocortisone.",
        keyDifferentiator: "Characteristically greasy, yellowish adherent squames confined strictly to sebum-dense zones, distinguishing it from plaque psoriasis."
      }
    }
  },
  {
    word: {
      id: 'w567',
      word: { Arabic: 'القوباء', English: 'Impetigo' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Dermatology', 'Pediatrics', 'Infectious Diseases'],
      synonyms: ['القوباء', 'القوباء الجلدية المعدية', 'الحصف', 'Impetigo'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "عدوى جلدية بكتيرية سطحية شديدة العدوى تشيع جداً بين الأطفال في سن الحضانة والمدارس خلال فصول الصيف الحارة.",
        "تسببها بكتيريا المكورات العنقودية الذهبية (Staphylococcus aureus) أو العقدية المقيحة (Streptococcus pyogenes).",
        "تتميز بظهور حويصلات سريعة التمزق تترك مكانها قشوراً لزجة سميكة بلون العسل المميز (Honey-colored crusts).",
        "تتركز الآفات الجلدية كلاسيكياً حول الفم وفتحات الأنف بعد خدش بسيط أو لدغة حشرات وتنتشر باللمس المباشر.",
        "تعالج الحالات المحدودة بمرهم الموبيروسين الموضعي (Mupirocin)، وتتطلب الحالات الواسعة مضادات حيوية فموية مثل السيفالكسين."
      ],
      English: [
        "A superficial, highly contagious bacterial pyoderma principally encountered among young preschool children in warm climates.",
        "Microbiologically sparked by Staphylococcus aureus or Group A Streptococcus (Streptococcus pyogenes) colonizing broken skin.",
        "Classically defined by transient fragile flaccid vesicles that unroof to produce pathognomonic thick, adherent honey-colored crusts.",
        "Lesions cluster periorally and around the external nares, spreading autogenously across facial skin through finger scratching.",
        "Localized outbreaks respond promptly to topical mupirocin ointment, whereas widespread lesions mandate oral cephalexin or flucloxacillin."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى بكتيرية سطحية بالمكورات العنقودية الذهبية أو العقدية المقيحة تصيب الطبقة القرنية للبشرة.",
        goldStandard: "التشخيص الإكلينيكي المباشر برؤية القشور الذهبية العسلية حول الفم والأنف مع مزرعة السائل الجلدي.",
        firstLineRx: "مرهم الموبيروسين (Mupirocin) الموضعي ثلاث مرات يومياً، مع مضادات حيوية فموية مقاومة للبنسليناز للحالات المنتشرة.",
        keyDifferentiator: "قشور سميكة متيبسة بلون عسل النحل حول الفم والأنف سريعة العدوى باللمس."
      },
      English: {
        etiology: "Superficial epidermal infection mediated by exfoliative toxins of Staphylococcus aureus or Streptococcus pyogenes.",
        goldStandard: "Clinical visual recognition of golden-yellow honey-colored crusted erosions centered about the perioral facial skin.",
        firstLineRx: "Topical mupirocin or retapamulin ointment for limited disease; oral systemic beta-lactamase resistant antibiotics for extensive cases.",
        keyDifferentiator: "Pathognomonic honey-colored 'stuck-on' crusting encircling the mouth and nostrils with rapid contagiousness."
      }
    }
  },
  {
    word: {
      id: 'w568',
      word: { Arabic: 'الشرى', English: 'Urticaria' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Dermatology', 'Immunology', 'Emergency Medicine'],
      synonyms: ['الشرى', 'الأرتيكاريا', 'حكة الحساسية', 'الدرنات الجلدية', 'Urticaria', 'Hives'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "اندفاع جلدي تحسسي شائع يتميز بظهور لويحات حمراء شاحبة المركز، مرتفعة ومتورمة تسمى انتبارات (Wheals).",
        "تترافق مع حكة جلدية شديدة لا تطاق، وتتميز الآفة الواحدة بأنها عابرة تختفي تماماً خلال أقل من 24 ساعة دون ترك أثر.",
        "تنتج عن تحرر فوري للهيستامين من الخلايا البدينة (Mast cells) في الأدمة مما يرفع نفاذية الأوعية الدموية ويحدث ارتشاحاً سائلاً.",
        "قد تثيرها أطعمة معينة، أو أدوية كالبنسلين، أو لدغات الحشرات، أو محفزات فيزيائية كالبرد والضغط والحرارة.",
        "إذا ترافقت مع تورم عميق في الشفتين أو اللسان أو الحنجرة وضيق تنفس فإنها تدل على وذمة وعائية وتأق طارئ."
      ],
      English: [
        "A common cutaneous vascular reaction characterized by transient pruritic, edematous, erythematous plaques termed wheals.",
        "Accompanied by intense stinging pruritus, with the hallmark biological feature that individual lesions resolve within 24 hours without scarring.",
        "Pathophysiologically initiated by preformed histamine and prostaglandin degranulation from dermal mast cells increasing capillary permeability.",
        "Triggered by IgE-mediated food allergies, pharmaceuticals (beta-lactams), viral infections, or physical cold/pressure stimuli.",
        "Co-occurrence with deep subcutaneous tumefaction of the lips, tongue, or glottis signifies angioedema portending anaphylaxis."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تفاعل تحسسي من النوع الأول يسبب إفراز الهيستامين والوسائط الالتهابية من الخلايا البدينة إثر محفزات مختلفة.",
        goldStandard: "التشخيص الإكلينيكي المعتمد على رؤية الانتبارات المرتفعة الحاكة التي تتلاشى خلال 24 ساعة.",
        firstLineRx: "مضادات الهيستامين الفموية من الجيل الثاني غير المهدئة (مثل السيتريزين أو اللوراتادين) بجرعات تصل لأربعة أضعاف.",
        keyDifferentiator: "الانتبارات الجلدية المتنقلة العابرة التي تختفي من موضع وتظهر في آخر خلال ساعات دون أي تقشير أو تصبغ."
      },
      English: {
        etiology: "Type I IgE-dependent or non-immunologic degranulation of dermal mast cells dumping histamine into the interstitium.",
        goldStandard: "Clinical history and physical examination demonstrating fleeting, migratory edematous wheals that disappear within 24 hours.",
        firstLineRx: "Second-generation non-sedating oral H1-antihistamines (cetirizine, fexofenadine, or bilastine) titrated up to four-fold doses.",
        keyDifferentiator: "Evanescent nature of individual lesions disappearing entirely within 24 hours without leaving post-inflammatory changes."
      }
    }
  },
  {
    word: {
      id: 'w569',
      word: { Arabic: 'الفقاع الشائع', English: 'Pemphigus Vulgaris' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Dermatology', 'Immunology', 'Pathology'],
      synonyms: ['الفقاع الشائع', 'داء الفقاع', 'البمفيغوس', 'Pemphigus Vulgaris'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "مرض مناعي ذاتي نادر وخطير يهدد الحياة يصيب الجلد والأغشية المخاطية مسبباً تقرحات وبثوراً رخوة وسريعة التمزق.",
        "تهاجم فيه الأجسام المضادة الذاتية بروتينات الدسموجلين (Desmoglein 3 و 1) المسؤولة عن ربط خلايا البشرة ببعضها.",
        "يحدث انحلال في الروابط بين الخلايا الطلائية (Acantholysis) مما يؤدي لتشكل فقاعات داخل طبقة البشرة رقيقة الجدار.",
        "تبدأ الإصابة في أكثر من 70% من الحالات بتقرحات مؤلمة لا تلتئم في الغشاء المخاطي لتجويف الفم تسبق الآفات الجلدية بأشهر.",
        "تكون علامة نيكولسكي (Nikolsky sign) إيجابية حيث ينفصل الجلد السطحي وينسلخ بمجرد الفرك الجانبي الخفيف باليد."
      ],
      English: [
        "A severe, potentially fatal autoimmune intraepidermal blistering dermatosis targeting cutaneous and mucosal surfaces.",
        "Mediated by pathogenic autoantibodies (IgG) directed against desmosomal cadherins, predominantly desmoglein 3 and desmoglein 1.",
        "Induces intraepidermal cell-to-cell detachment (acantholysis) producing extremely fragile, flaccid, thin-roofed blisters.",
        "In over 70% of cases, initial presenting manifestations are intractable, painful oral mucosal erosions preceding skin lesions by months.",
        "Demonstrates a positive Nikolsky sign, wherein gentle lateral shearing pressure on normal-appearing epidermis sloughs the epidermal roof."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "أجسام مضادة ذاتية IgG موجهة ضد الدسموجلين 3 و 1 تؤدي لانحلال الأشواك والتصاق خلايا البشرة فوق الطبقة القاعدية مباشرة.",
        goldStandard: "الخزعة الجلدية مع فحص التألق المناعي المباشر (DIF) لإظهار ترسبات IgG بين الخلايا بنمط يشبه قفص الدجاج (Chicken-wire).",
        firstLineRx: "الستيرويدات القشرية الجهازية بجرعات عالية (بريدنيزون) مع العلاج البيولوجي بمضاد CD20 ريتوكسيماب (Rituximab).",
        keyDifferentiator: "فقاعات جلدية رخوة سريعة الانفجار مع إصابة فموية مبكرة مستمرة وإيجابية علامة نيكولسكي للسلخ."
      },
      English: {
        etiology: "Autoimmune IgG antibody production against desmoglein 3 and 1, causing suprabasilar acantholysis within the epidermis.",
        goldStandard: "Direct immunofluorescence (DIF) of perilesional tissue showing IgG deposition in an intercellular 'fishnet' or 'chicken-wire' pattern.",
        firstLineRx: "High-dose systemic oral corticosteroids combined with anti-CD20 monoclonal antibody biologic therapy (rituximab).",
        keyDifferentiator: "Intraepidermal flaccid fragile blisters with ubiquitous severe oral mucosal involvement and a positive Nikolsky sign."
      }
    }
  },
  {
    word: {
      id: 'w570',
      word: { Arabic: 'شبيه الفقاع الفقاعي', English: 'Bullous Pemphigoid' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Dermatology', 'Immunology', 'Geriatrics'],
      synonyms: ['شبيه الفقاع الفقاعي', 'الفقاعاني الفقاعي', 'البمفيجويد', 'Bullous Pemphigoid'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "مرض مناعي ذاتي فقاعي تحت البشرة يصيب كبار السن غالباً فوق سن السبعين، ويتميز بظهور فقاعات جلدية متوترة وصلبة.",
        "تنتجه أجسام مضادة ذاتية موجهة ضد بروتينات الجسيمات نصف الرابطة (Hemidesmosomes) في الغشاء القاعدي (BP180 و BP230).",
        "تكون الفقاعات تحت البشرة ذات سقف سميك ومتوتر ومقاومة للتمزق، وتظهر فوق جلد محمر أو طبيعي مع حكة شديدة.",
        "تكون علامة نيكولسكي سلبية (Nikolsky negative) ونادراً جداً ما يصيب الغشاء المخاطي لتجويف الفم بخلاف الفقاع الشائع.",
        "الفحص النسيجي بالتألق المناعي المباشر يظهر ترسباً خطياً مستمراً للأجسام المضادة والمتمم على طول الغشاء القاعدي."
      ],
      English: [
        "An autoimmune subepidermal blistering eruption predominantly striking elderly populations over the age of 70.",
        "Driven by pathogenic IgG autoantibodies targeted against hemidesmosomal adhesion antigens BP180 and BP230 at the dermo-epidermal junction.",
        "Presents with tense, sturdy, fluid-filled bullae that resist rupture, emerging upon an erythematous urticarial or normal cutaneous base.",
        "Nikolsky sign is characteristically negative, and mucosal surfaces (such as the oral cavity) are spared in the overwhelming majority.",
        "Direct immunofluorescence reveals a smooth, unbroken linear band of IgG and C3 deposition along the basement membrane zone."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "أجسام مضادة ذاتية ترتبط بمستضدات الغشاء القاعدي BP180 و BP230 مما يفصل كامل البشرة عن الأدمة التحتية.",
        goldStandard: "فحص التألق المناعي المباشر (DIF) للخزعة الجلدية مظهراً ترسباً خطياً متواصلاً لـ IgG و C3 على طول الغشاء القاعدي.",
        firstLineRx: "الستيرويدات الموضعية القوية جداً (كريم كلوبيتاسول Clobetasol) على كامل الجسم، أو الستيرويدات الفموية.",
        keyDifferentiator: "فقاعات سميكة متوترة صلبة غير رخوة، وسلبية علامة نيكولسكي، وندرة إصابة الأغشية المخاطية لدى كبار السن."
      },
      English: {
        etiology: "Autoantibodies directed against hemidesmosomal transmembrane structural proteins (BP180/BP230) anchoring the basement membrane.",
        goldStandard: "Perilesional skin punch biopsy with direct immunofluorescence demonstrating a classic linear IgG and C3 line along the dermo-epidermal junction.",
        firstLineRx: "High-potency superpotent topical corticosteroids (clobetasol propionate cream) or moderate-dose oral prednisone.",
        keyDifferentiator: "Subepidermal tense sturdy non-fragile bullae, a negative Nikolsky sign, and absence of mucosal involvement in elderly patients."
      }
    }
  },
  {
    word: {
      id: 'w571',
      word: { Arabic: 'التهاب الجلد التماسي', English: 'Contact Dermatitis' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Dermatology', 'Immunology'],
      synonyms: ['التهاب الجلد التماسي', 'أكزيما التماس', 'الأكزيما التلامسية', 'Contact Dermatitis'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "رد فعل التهابي جلدي يحدث نتيجة ملامسة مادة خارجية معينة لسطح الجلد بصورة مباشرة.",
        "ينقسم لنوعين: تهيجي ناجم عن مادة كيميائية حارقة كالصابون والمذيبات (80%)، وتحسسي بوساطة الخلايا التائية (Type IV).",
        "النوع التحسسي يشتهر بحدوثه إثر ملامسة معدن النيكل في الإكسسوارات وساعات اليد، أو العطور، أو نبات اللبلاب السام.",
        "تتطابق حدود الاحمرار والطفح الجلدي والحويصلات تماماً مع شكل ومساحة المادة الملامسة للجلد (كشكل حزام الساعة).",
        "يشخص النوع التحسسي باختبار الرقعة الجلدية (Patch test) عبر تثبيت مواد مختلفة على ظهر المريض لـ 48 ساعة."
      ],
      English: [
        "An acute or chronic cutaneous inflammatory reaction precipitated by direct epicutaneous exposure to an exogenous environmental substance.",
        "Dichotomized into irritant contact forms from cytotoxic chemical barrier disruption (80%) and cell-mediated Type IV delayed allergic forms.",
        "Allergic triggers classically include nickel hardware in costume jewelry and belt buckles, neomycin, fragrances, or poison ivy.",
        "The anatomical distribution of erythema, papules, and microvesicles mirrors the geometric outline of the offending physical item.",
        "Allergic etiologies are definitively unmasked through standardized epicutaneous patch testing interpreted after 48 and 96 hours."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تفاعل تهيجي غير مناعي بالمواد الكيميائية، أو فرط حساسية خلوية متأخرة من النوع الرابع ناتجة عن مستضدات كالنيكل.",
        goldStandard: "اختبار الرقعة الجلدية (Patch Testing) لتأكيد الحساسية التحسسية المتأخرة بعد استبعاد المواد المخرشة.",
        firstLineRx: "تحديد المادة المسببة وتجنب ملامستها تماماً، مع تطبيق كريمات الكورتيكوستيرويد الموضعية والكمادات الباردة.",
        keyDifferentiator: "طفح جلدي محدد بوضوح شديد يطابق بالضبط شكل وحدود المادة الملامسة (مثل زر الجينز المعدني أو سوار الساعة)."
      },
      English: {
        etiology: "Direct non-allergic chemical barrier dissolution (irritant) or delayed type IV T-cell-mediated hypersensitivity (allergic).",
        goldStandard: "Standardized epicutaneous patch testing read at 48 and 72-96 hours identifying specific culprit allergen sensitization.",
        firstLineRx: "Absolute allergen/irritant avoidance alongside barrier repair creams and potent topical corticosteroids for acute flares.",
        keyDifferentiator: "Geometric or sharply demarcated cutaneous lesions conforming precisely to the physical boundary of the external contactant."
      }
    }
  },
  {
    word: {
      id: 'w572',
      word: { Arabic: 'سرطان الخلايا الحرشفية الجلدي', English: 'Squamous Cell Carcinoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Dermatology', 'Oncology', 'Pathology'],
      synonyms: ['سرطان الخلايا الحرشفية الجلدي', 'كارسينوما حرشفية الخلايا', 'SCC', 'Cutaneous Squamous Cell Carcinoma'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "ثاني أكثر سرطانات الجلد انتشاراً بعد الورم القاعدي، وينشأ من الخلايا الكيراتينية في الطبقة الشائكة للبشرة.",
        "يرتبط بالتعرض التراكمي الشديد للشمس، وتسبقه عادة بقعة خشنة شبيهة بورق الصنفرة تعرف بالتقران الشعاعي (Actinic Keratosis).",
        "يظهر كعقدة أو لويحة صلبة متقشرة مفرطة التقرن، غالباً ما تتقرح وتنزف بسهولة في مناطق الوجه والشفتين والأذنين وظهر اليدين.",
        "يشيع حدوثه في الندبات المزمنة وحروق الجلد القديمة المهملة ويعرف حينها باسم قرحة مارجولين (Marjolin ulcer).",
        "يمتلك قدرة حقيقية على الانبثاث والانتشار للعقد اللمفاوية المجاورة بنسبة تصل إلى 5% خاصة إذا كان على الشفة أو الأذن."
      ],
      English: [
        "The second most frequent cutaneous neoplasm, derived from the malignant clonal proliferation of keratinocytes within the stratum spinosum.",
        "Driven by lifelong actinic solar radiation, frequently evolving from premalignant rough sandpaper-like actinic keratosis precursors.",
        "Presents as an indurated, firm, hyperkeratotic crusted nodule or ulcerated crater on sun-exposed lips, pinnae, face, or hands.",
        "Arises notoriously within chronic unhealed burn scars, sinus tracts, or venous ulcers as an aggressive Marjolin ulcer variant.",
        "Carries an authentic potential for regional lymphatic metastasis (approximately 2% to 5%), significantly escalated when located on the ear or vermilion."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات في جين TP53 ناتجة عن التلف التراكمي للحمض النووي بالأشعة فوق البنفسجية في خلايا الكيراتينوسايت.",
        goldStandard: "الخزعة الجلدية العميقة للآفة لإظهار ارتشاح الخلايا الشوكية الخبيثة وتكون لآلئ الكيراتين (Keratin pearls).",
        firstLineRx: "الاستئصال الجراحي الكامل مع هوامش أمان كافية (4-6 ملم)، أو جراحة موهز الميكروغرافية للآفات عالية الخطورة.",
        keyDifferentiator: "كتلة جلدية صلبة متقرنة سميكة سريعة التقرح وتنزف عند اللمس مع وجود خطر للانتشار اللمفاوي بخلاف الورم القاعدي."
      },
      English: {
        etiology: "Cumulative UV-induced driver mutations (notably in the TP53 tumor suppressor gene) within epidermal keratinocytes.",
        goldStandard: "Deep punch or incisional biopsy capturing dermal invasion and pathognomonic laminated eosinophilic keratin pearls.",
        firstLineRx: "Complete surgical excision with defined 4-6 mm peripheral margins or Mohs micrographic surgery for high-risk facial lesions.",
        keyDifferentiator: "Thick hyperkeratotic, crusted, frequently ulcerated nodule demonstrating true regional nodal metastatic capacity."
      }
    }
  },
  {
    word: {
      id: 'w573',
      word: { Arabic: 'الحزام الناري', English: 'Herpes Zoster' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Dermatology', 'Neurology', 'Infectious Diseases'],
      synonyms: ['الحزام الناري', 'داء المنطقة', 'القوباء المنطقية', 'Herpes Zoster', 'Shingles'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "مرض فيروسي مؤلم ينتج عن إعادة تنشيط فيروس الجدري المائي (Varicella-Zoster Virus) الكامن في العقد العصبية الحسية.",
        "يتميز بظهور طفح حويصلي مؤلم مقتصر بدقة بالغة على قطاع جلدي حسي واحد (Dermatome) دون أن يتجاوز خط منتصف الجسم.",
        "يسبق ظهور الطفح الجلدي بأيام ألم حارق مبرح أو وخز خدر في المنطقة المصابة قد يشخص خطأً كجلطة قلبية أو مغص كلوي.",
        "أخطر اختلاطاته المزمنة هو ألم العصب التالي للهربس (Postherpetic Neuralgia) الذي قد يستمر لشهور بعد شفاء الجلد.",
        "يعالج بمضادات الفيروسات الفموية مثل الفالاسيكلوفير (Valacyclovir) التي يجب بدؤها خلال أول 72 ساعة من الطفح لتكون فعالة."
      ],
      English: [
        "A distressing neurocutaneous syndrome resulting from the clinical reactivation of latent varicella-zoster virus from dorsal root ganglia.",
        "Exhibits a classic, highly specific dermatomal eruption of clustered painful grouped vesicles that strictly respects the anatomic midline.",
        "Preceded by a prodrome of intense radicular burning pain, hyperesthesia, or allodynia that mimics acute cardiac or visceral pathology.",
        "The leading chronic debilitating sequela is postherpetic neuralgia (PHN), characterized by agonizing neuropathic pain lasting months.",
        "Treated with prompt initiation of oral antiviral therapy (valacyclovir, famciclovir) administered within 72 hours of rash onset."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "إعادة تنشيط فيروس النطاقي الحماقي (VZV) الكامن في العقد الشوكية الظهرية نتيجة انخفاض المناعة الخلوية مع التقدم في السن.",
        goldStandard: "التشخيص السريري المباشر بالطفح الحويصلي المؤلم المحصور في مسار عصب جلدي أحادي الجانب، ويؤكد باختبار PCR.",
        firstLineRx: "مضادات الفيروسات الفموية (Valacyclovir بجرعة 1000 ملغ 3 مرات يومياً) لمدة 7 أيام بدءاً من أول 72 ساعة، مع مسكنات الألم.",
        keyDifferentiator: "حويصلات مجمعة في شريط جلدي محدد (Dermatome) تحترم خط منتصف الجسم بدقة متناهية ولا تعبره للجهة الأخرى."
      },
      English: {
        etiology: "Reactivation of latent Varicella-Zoster Virus (VZV) dormant within cranial or spinal sensory dorsal root ganglia.",
        goldStandard: "Clinical visual recognition of clustered dermatomal vesicles strictly bounded by the midline; confirmed by viral PCR swabs if atypical.",
        firstLineRx: "Oral antiviral nucleoside analogues (valacyclovir 1000 mg TID or famciclovir) within 72 hours of symptom onset, plus neuropathic analgesia.",
        keyDifferentiator: "Unilateral dermatomal belt distribution that halts abruptly at the anatomical vertical midline without crossing."
      }
    }
  }
];
