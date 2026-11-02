import { MedicalWord } from './medicalWords';
import { SOLO_DISEASE_HINTS } from './soloHints';

export interface SoloFlashcard {
  etiology: string;        // المسبب الرئيسي (Etiology / Pathophysiology)
  goldStandard: string;    // الفحص الذهبي (Gold Standard Dx)
  firstLineRx: string;     // خط العلاج الأول (First-line Management)
  diffKey: string;         // كيف فرّقنا بينه وبين الخيارات الخمسة الأخرى (Key Differentiator)
}

export interface SoloFlashcardData {
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
}

/**
 * قاعدة بيانات الفلاش كارد السريرية (High-Yield Case Debriefs)
 * تغطي جميع أمراض ومتلازمات اللعبة (245 حالة) وفق الأركان الأربعة:
 * 1. المسبب الرئيسي (Etiology)
 * 2. الفحص الذهبي (Gold Standard Dx)
 * 3. خط العلاج الأول (First-line Management)
 * 4. الفارق التشخيصي الحاسم (Differential Hallmark)
 */
export const SOLO_FLASHCARDS_DB: Record<string, SoloFlashcardData> = {
  "w5": {
    "Arabic": {
      "etiology": "خلل مناعي ذاتي أو مقاومة محيطية للإنسولين تؤدي لنقص نسبي أو مطلق في إفرازه من خلايا بيتا البنكرياسية.",
      "goldStandard": "المعيار الذهبي لتشخيصه ومتابعة السيطرة عليه على المدى الطويل هو اختبار السكر التراكمي (HbA1c) بنسبة ≥ 6.5%.",
      "firstLineRx": "تعديل نمط الحياة والحمية + الميتفورمين (Metformin) للنوع الثاني، والإنسولين للنوع الأول مع ضبط مستمر للسكر.",
      "keyDifferentiator": "المضاعفات الوعائية الدقيقة لهذا المرض تتبع نمطاً حسياً متناظراً في الأطراف يشبه ارتداء القفاز والجورب."
    },
    "English": {
      "etiology": "Autoimmune destruction of pancreatic beta cells or peripheral insulin resistance causing absolute or relative insulin deficiency.",
      "goldStandard": "The gold standard for diagnosis and long-term glycemic monitoring is glycated hemoglobin (HbA1c) ≥ 6.5%.",
      "firstLineRx": "Lifestyle modifications + Metformin for Type 2; lifelong basal-bolus insulin regimens for Type 1.",
      "keyDifferentiator": "Microvascular complications of this disorder classically manifest as a symmetrical \"glove-and-stocking\" peripheral neuropathy."
    }
  },
  "w9": {
    "Arabic": {
      "etiology": "تثلث الصبغي 21 (Trisomy 21) بنسبة 95% ناجم عن عدم الانفصال الصبغي (Nondisjunction) أثناء الانقسام الاختزالي للبويضة.",
      "goldStandard": "التحليل الجيني للصبغيات (Karyotype) يؤكد وجود ثلاثية في الصبغي رقم 21 (Trisomy 21).",
      "firstLineRx": "برامج التدخل المبكر، ومتابعة عيوب القلب الخلقية بالإيكو، ومراقبة هرمونات الغدة الدرقية والسمع والنمو.",
      "keyDifferentiator": "يزداد خطر حدوث هذه الحالة الوراثية بشكل طردي وحاد مع تقدم عمر الأم أثناء الحمل، وتكشف بسماكة طية الرقبة بالجنين."
    },
    "English": {
      "etiology": "Trisomy 21 (95% meiotic nondisjunction), strongly correlated with advanced maternal age.",
      "goldStandard": "Karyotype analysis definitively establishes Trisomy 21 in approximately 95% of cases.",
      "firstLineRx": "Multidisciplinary surveillance (routine echocardiography, thyroid screens, audiology, and early intervention therapies).",
      "keyDifferentiator": "Incidence correlates exponentially with advanced maternal age, often screened early via fetal nuchal translucency ultrasound."
    }
  },
  "w10": {
    "Arabic": {
      "etiology": "أذية كبدية مزمنة ومتكررة (كالتهاب الكبد B أو C، أو الكبد الدهني، أو الكحول) تنشط الخلايا النجمية مؤدية لترسب ألياف الكولاجين.",
      "goldStandard": "ارتفاع الضغط في الوريد البابي يؤدي لظهور دوالي المريء النازفة ورعاش الخفقان (Asterixis) عند اعتلال الدماغ.",
      "firstLineRx": "علاج المسبب الأصلي، إدرار البول (سبيرونولاكتون + فوروسيميد)، حاصرات بيتا للوقاية من الدوالي، وزراعة الكبد للحالات النهائية.",
      "keyDifferentiator": "تتحول الأنسجة الحيوية في هذا العضو الداخلي إلى عقيدات تجددية محاطة بأشرطة ليفية سميكة تفقد بنيتها المعمارية الطبيعية."
    },
    "English": {
      "etiology": "Chronic repetitive hepatic parenchymal injury and stellar cell activation driving diffuse fibrosis and architectural distortion.",
      "goldStandard": "Portal hypertension frequently precipitates life-threatening esophageal variceal bleeding and flapping tremor (asterixis).",
      "firstLineRx": "Management of underlying cause, diuretics (spironolactone + furosemide), non-selective beta-blockers, and liver transplantation.",
      "keyDifferentiator": "Characterized histologically by diffuse irreversible replacement of parenchyma with regenerative nodules and dense fibrous septa."
    }
  },
  "w11": {
    "Arabic": {
      "etiology": "ضعف تنكسي بنيوي في الطبقة العضلية المتوسطة للشريان (Tunica media) مرتبط بارتفاع الضغط الشرياني المزمن والتصلب العصيدي.",
      "goldStandard": "انفجاره المفاجئ يسبب ألماً تمزقياً فجائياً هائلاً وهبوطاً حاداً في ضغط الدم وصدمة نزفية قاتلة تتطلب جراحة طارئة.",
      "firstLineRx": "المراقبة الدقيقة بالسونار وضبط ضغط الدم، والتدخل الجراحي أو عبر الدعامة الوعائية (EVAR) إذا زاد القطر عن 5.5 سم أو كان سريع النمو.",
      "keyDifferentiator": "تمدد مرضي موضعي ودائم في جدار وعاء دموي شرياني يتجاوز 50% من قطره الطبيعي نتيجة ضعف بنيوي في الطبقة المتوسطة."
    },
    "English": {
      "etiology": "Degenerative weakness of the arterial tunica media accelerated by chronic hemodynamic shear stress and atherosclerosis.",
      "goldStandard": "Acute rupture precipitates sudden tearing pain, profound hypotensive collapse, and fatal hemorrhagic shock.",
      "firstLineRx": "Strict blood pressure control, smoking cessation, surveillance ultrasound, and surgical or endovascular repair (EVAR) if >5.5 cm.",
      "keyDifferentiator": "A localized, permanent abnormal ballooning of an arterial vessel exceeding 50% of its normal baseline diameter due to media weakness."
    }
  },
  "w19": {
    "Arabic": {
      "etiology": "تراجع مستمر في عدد النفرونات الوظيفية ناتج غالباً عن الاعتلال السكري الوعائي أو التصلب الكلوي بارتفاع ضغط الدم المزمن.",
      "goldStandard": "الفحوصات تظهر ارتفاعاً حاداً في اليوريا والكرياتينين مع فرط بوتاسيوم الدم، ويحتاج المريض لغسيل دموي (Dialysis).",
      "firstLineRx": "ضبط ضغط الدم الشديد بحاصرات RAAS، علاج فقر الدم بالإريثروبويتين، والغسيل الدموي/الصفاقي أو زراعة الكلى.",
      "keyDifferentiator": "تراجع تدريجي مستمر في معدل الترشيح الكبيبي لأكثر من 3 أشهر يؤدي لتراكم نواتج الأيض النيتروجينية واضطراب الكهارل."
    },
    "English": {
      "etiology": "Progressive nephron loss and parenchymal sclerosis predominantly caused by diabetic nephropathy and hypertensive nephrosclerosis.",
      "goldStandard": "Marked elevations of BUN and serum creatinine accompanied by refractory hyperkalemia, necessitating renal replacement therapy.",
      "firstLineRx": "Strict BP control (RAAS blockade), erythropoietin for anemia, dietary phosphate binders, and dialysis or renal transplant.",
      "keyDifferentiator": "Progressive, irreversible decline in glomerular filtration rate exceeding 3 months, precipitating systemic uremic retention."
    }
  },
  "w20": {
    "Arabic": {
      "etiology": "طفرة وراثية سائدة في جين FBN1 على الصبغي 15 تؤدي لخلل في تركيب بروتين الفيبريلين-1 وضعف النسيج الضام.",
      "goldStandard": "الخطر الأكبر يهدد الحياة بتوسع جذر الشريان الأبهر الصاعد وانسلاخه، مع ارتخاء الصمام التاجي (Mitral Valve Prolapse).",
      "firstLineRx": "حاصرات بيتا أو مثبطات ARB للحد من توسع الشريان الأبهر، وتجنب الإجهاد الشديد، والجراحة الوقائية لصمام وجذر الأبهر.",
      "keyDifferentiator": "خلل وراثي جسمي سائد في جين FBN1 المسؤول عن بروتين الفيبريلين-1، يؤثر على مرونة الأنسجة الضامة بالجسم."
    },
    "English": {
      "etiology": "Autosomal dominant mutation in the FBN1 gene on chromosome 15 encoding abnormal fibrillin-1 microfibrillar protein.",
      "goldStandard": "Carries high mortality due to progressive aortic root dilatation, dissection, and severe mitral valve prolapse.",
      "firstLineRx": "Beta-blockers or ARBs to reduce aortic root expansion, avoidance of strenuous exertion, and elective root repair.",
      "keyDifferentiator": "Autosomal dominant connective tissue disorder caused by mutations in the FBN1 gene encoding fibrillin-1 glycoprotein."
    }
  },
  "w23": {
    "Arabic": {
      "etiology": "اضطراب عصبي نمائى يبدأ في مرحلة الطفولة، تسبقه رغبة حركية قاهرة ملحة (Premonitory urge) تخف مؤقتاً بعد تفريغها.",
      "goldStandard": "قد تشمل الحركات رمش العين وهز الرقبة، وتصحبها حركات لفظية لاإرادية مثل تكرار الكلمات أو الشتائم اللاإرادية (Coprolalia).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "اضطراب عصبي نمائى يبدأ في مرحلة الطفولة، تسبقه رغبة حركية قاهرة ملحة (Premonitory urge) تخف مؤقتاً بعد تفريغها."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: neurodevelopmental disorder originating in childhood, heralded by a preceding sensory \"premonitory urge\" relieved by tic execution.",
      "goldStandard": "Manifests as involuntary blinking, facial grimacing, grunting, and in rare cases, involuntary obscene vocalizations (coprolalia).",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A neurodevelopmental disorder originating in childhood, heralded by a preceding sensory \"premonitory urge\" relieved by tic execution."
    }
  },
  "w29": {
    "Arabic": {
      "etiology": "عدوى التهابية حادة تملأ الأسناخ الرئوية بالإفرازات القيحية والخلايا الالتهابية، مما يعيق تبادل الغازات.",
      "goldStandard": "الأشعة السينية للصدر (Chest X-ray) تكشف عن كثافة تكثف فصي واضحة (Lobar Consolidation) مع سماع خشخشة بالتسمع.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "عدوى التهابية حادة تملأ الأسناخ الرئوية بالإفرازات القيحية والخلايا الالتهابية، مما يعيق تبادل الغازات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Infectious parenchymal inflammation where alveolar spaces become filled with purulent exudate, impairing diffusion.",
      "goldStandard": "Chest radiography definitively demonstrates dense lobar consolidation with air bronchograms, accompanied by auscultatory crackles.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Infectious parenchymal inflammation where alveolar spaces become filled with purulent exudate, impairing diffusion."
    }
  },
  "w31": {
    "Arabic": {
      "etiology": "انسداد لمعة الزائدة الدودية بحصاة برازية (Fecalith) أو فرط تصنع نسيج لمفاوي متبوعاً باحتقان بكتيري ونقص تروية.",
      "goldStandard": "إيجابية علامة ماكبيرني (McBurney's sign) وعلامة روفسينج (Rovsing's sign)، والحل الجذري هو استئصال العضو بالمنظار.",
      "firstLineRx": "استئصال الزائدة الدودية العاجل (جراحياً أو بالمنظار) مع المضادات الحيوية الوريدية واسعة الطيف ومحاليل الإماهة.",
      "keyDifferentiator": "ألم يبدأ مبهمًا في المنطقة المحيطة بالسرة ثم يتغير موضعه تدريجيًا إلى منطقة أخرى في البطن."
    },
    "English": {
      "etiology": "Luminal obstruction of the vermiform appendix by a fecalith or lymphoid hyperplasia precipitating ischemia and bacterial proliferation.",
      "goldStandard": "Positive McBurney sign, Rovsing sign, and psoas stretch test confirm the diagnosis; managed definitively by appendectomy.",
      "firstLineRx": "Urgent appendectomy (laparoscopic preferred), intravenous fluid resuscitation, and broad-spectrum perioperative antibiotics.",
      "keyDifferentiator": "Initially manifests as dull, poorly localized periumbilical discomfort that gradually migrates to a distinct quadrant."
    }
  },
  "w35": {
    "Arabic": {
      "etiology": "فرط تحسس والتهاب مزمن في المجاري الهوائية بوساطة الخلايا البدينة واليوزينيات (Th2 pathway) وتشنج قصبي عكوس.",
      "goldStandard": "يظهر فحص وظائف الرئة (Spirometry) تحسناً يفوق 12% و200 مل في FEV1 بعد إعطاء بخاخ السالبوتامول (Albuterol).",
      "firstLineRx": "موسعات القصبات قصيرة المفعول (SABA كالسالبوتامول) مع الستيرويدات المستنشقة (ICS)، وتجنب المهيجات والمحسسات.",
      "keyDifferentiator": "انسداد المسالك الهوائية في هذا المرض يتميز بأنه عكوس (Reversible) بشكل كامل أو ملحوظ بعد استنشاق موسع قصبات."
    },
    "English": {
      "etiology": "Chronic bronchial inflammation driven by Th2/eosinophil hypersensitivity leading to airway hyperreactivity and reversible bronchospasm.",
      "goldStandard": "Spirometry documents a post-bronchodilator increase in FEV1 greater than 12% and 200 mL following inhaled albuterol.",
      "firstLineRx": "Inhaled short-acting beta2-agonists (SABA) for relief plus inhaled corticosteroids (ICS) for controller maintenance.",
      "keyDifferentiator": "A chronic airway inflammatory pathology characterized uniquely by spontaneous or pharmacologically reversible bronchoconstriction."
    }
  },
  "w37": {
    "Arabic": {
      "etiology": "اضطراب حركي تنكسي ينجم عن الفقد التدريجي للخلايا العصبية المنتجة للدوبامين في المادة السوداء (Substantia Nigra).",
      "goldStandard": "رعاش مميز وقت الراحة يشبه دحرجة حبة الدواء بين الأصابع (Pill-rolling tremor)، ويستجيب المريض بشكل سحري لعقار Levodopa.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "اضطراب حركي تنكسي ينجم عن الفقد التدريجي للخلايا العصبية المنتجة للدوبامين في المادة السوداء (Substantia Nigra)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Neurodegenerative movement disorder stemming from progressive dopaminergic neuronal depletion within the substantia nigra pars compacta.",
      "goldStandard": "Classic 4-6 Hz resting \"pill-rolling\" tremor that diminishes with voluntary action, dramatically alleviated by Levodopa therapy.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Neurodegenerative movement disorder stemming from progressive dopaminergic neuronal depletion within the substantia nigra pars compacta."
    }
  },
  "w38": {
    "Arabic": {
      "etiology": "يبدأ بفقدان تدريجي خبيث للذاكرة القريبة (الأحداث الأخيرة) مع الحفاظ النسبي على ذكريات الطفولة البعيدة في مراحله الأولى.",
      "goldStandard": "تشريحياً يظهر ضموراً قشرياً كبيراً مع لويحات بيتا أميلويد (Beta-amyloid plaques) وحبائل تاو العصبية الليفية (Tau tangles).",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "يبدأ بفقدان تدريجي خبيث للذاكرة القريبة (الأحداث الأخيرة) مع الحفاظ النسبي على ذكريات الطفولة البعيدة في مراحله الأولى."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Insidious, progressive deterioration of short-term anterograde memory with relative preservation of distant recollections in early stages.",
      "goldStandard": "Neuropathology reveals diffuse cortical cerebral atrophy driven by extracellular amyloid-beta plaques and hyperphosphorylated tau neurofibrillary tangles.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Insidious, progressive deterioration of short-term anterograde memory with relative preservation of distant recollections in early stages."
    }
  },
  "w39": {
    "Arabic": {
      "etiology": "يرتبط بأقوى علاقة سببية مباشرة مع عادة يومية ضارة يمارسها ملايين الأشخاص، وترتفع خطورته مع زيادة سنوات التعرض.",
      "goldStandard": "قد تفرز أورامه هرمونات غير متوقعة (Paraneoplastic) كالهرمون المضاد لإدرار البول، وتكشف الأشعة المقطعية كتلة ذات حواف شائكة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يرتبط بأقوى علاقة سببية مباشرة مع عادة يومية ضارة يمارسها ملايين الأشخاص، وترتفع خطورته مع زيادة سنوات التعرض."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Exhibits the most potent direct causal association with heavy long-term cigarette smoking, scaling strictly with pack-years.",
      "goldStandard": "May present with paraneoplastic syndromes (e.g., SIADH in small cell) and a spiculated pulmonary mass on high-resolution CT.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Exhibits the most potent direct causal association with heavy long-term cigarette smoking, scaling strictly with pack-years."
    }
  },
  "w42": {
    "Arabic": {
      "etiology": "التهاب مفصلي مناعي ذاتي متناظر يصيب المفاصل الصغيرة في كف اليدين والقدمين، مع تيبس صباحي يستمر لأكثر من ساعة.",
      "goldStandard": "الفحوصات تظهر إيجابية عامل الروماتويد (RF) والأجسام المضادة الأكثر نوعية للببتيد السيتروليني الحلقي (Anti-CCP).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التهاب مفصلي مناعي ذاتي متناظر يصيب المفاصل الصغيرة في كف اليدين والقدمين، مع تيبس صباحي يستمر لأكثر من ساعة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Symmetric, autoimmune inflammatory polyarthritis predominantly targeting small joints of hands and feet, featuring morning stiffness exceeding 60 minutes.",
      "goldStandard": "Serology demonstrates high titers of Anti-Cyclic Citrullinated Peptide antibodies (anti-CCP) and Rheumatoid Factor (RF).",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Symmetric, autoimmune inflammatory polyarthritis predominantly targeting small joints of hands and feet, featuring morning stiffness exceeding 60 minutes."
    }
  },
  "w47": {
    "Arabic": {
      "etiology": "طوارئ عصبية تسبب التهاباً حاداً في الأغشية الواقية المحيطة بالدماغ والحبل الشوكي، وتتدهور بسرعة خلال ساعات.",
      "goldStandard": "إيجابية علامة كيرنيغ (Kernig) وبرودزينسكي (Brudzinski)، ويؤكد البزل القطني (Lumbar puncture) عكارة السائل الدماغي وانخفاض الجلوكوز.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "طوارئ عصبية تسبب التهاباً حاداً في الأغشية الواقية المحيطة بالدماغ والحبل الشوكي، وتتدهور بسرعة خلال ساعات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: n acute life-threatening infectious inflammation of the protective leptomeningeal membranes enveloping the brain and spinal cord.",
      "goldStandard": "Positive Kernig and Brudzinski signs; lumbar puncture reveals cloudy cerebrospinal fluid with profound pleocytosis and low glucose.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "An acute life-threatening infectious inflammation of the protective leptomeningeal membranes enveloping the brain and spinal cord."
    }
  },
  "w48": {
    "Arabic": {
      "etiology": "علامة سريرية ناتجة عن تراكم صبغة صفراء في الأنسجة الغنية بالإيلاستين، وتبدأ في الظهور بصلبة العين عندما يتجاوز مستواها 2.5-3 ملغ/دل.",
      "goldStandard": "تنجم كيميائياً عن فرط تركيز البيليروبين في الدم (Hyperbilirubinemia)، سواء المقترن أو غير المقترن.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "علامة سريرية ناتجة عن تراكم صبغة صفراء في الأنسجة الغنية بالإيلاستين، وتبدأ في الظهور بصلبة العين عندما يتجاوز مستواها 2.5-3 ملغ/دل."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical yellow discoloration of tissues with high elastin affinity, clinically detectable in sclera once levels exceed 2.5-3 mg/dL.",
      "goldStandard": "Pathophysiologically driven by elevated systemic total serum bilirubin (hyperbilirubinemia), conjugated or unconjugated.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Clinical yellow discoloration of tissues with high elastin affinity, clinically detectable in sclera once levels exceed 2.5-3 mg/dL."
    }
  },
  "w49": {
    "Arabic": {
      "etiology": "عدوى بفيروس الإنفلونزا (Influenza A or B virus) من عائلة الأورثوميكسوفيروس تصيب السبيل التنفسي العلوي والسفلي.",
      "goldStandard": "عدوى تنفسية حادة ناتجة عن فيروسات الحمض النووي الريبي.",
      "firstLineRx": "الراحة والإماهة وخافضات الحرارة، ومثبطات النيورامينيداز (كالأوسيلتاميفير Oseltamivir) خلال أول 48 ساعة للحالات عالية الخطورة.",
      "keyDifferentiator": "يمكن أن يسبب أوبئة عالمية واسعة النطاق."
    },
    "English": {
      "etiology": "Infection by orthomyxoviruses (Influenza A or B) causing cytopathic airway epithelial damage and systemic inflammatory response.",
      "goldStandard": "Acute respiratory infection caused by RNA viruses.",
      "firstLineRx": "Supportive hydration, antipyretics, and neuraminidase inhibitors (e.g., oral oseltamivir) initiated within 48 hours for high-risk patients.",
      "keyDifferentiator": "Capable of causing widespread global pandemics."
    }
  },
  "w50": {
    "Arabic": {
      "etiology": "يستخدم مقياس بريستول لتقييم حركة الأمعاء.",
      "goldStandard": "اضطراب وظيفي مزمن في القناة الهضمية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يستخدم مقياس بريستول لتقييم حركة الأمعاء."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Bristol scale is often utilized to assess bowel motility.",
      "goldStandard": "Chronic functional disorder of the gastrointestinal tract.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Bristol scale is often utilized to assess bowel motility."
    }
  },
  "w51": {
    "Arabic": {
      "etiology": "يطلق عليه عالمياً لقب \"القاتل الصامت\" لأنه يتلف الشرايين والأعضاء الحيوية لسنوات طويلة دون أن يشعر المريض بأي عرض.",
      "goldStandard": "يُشخص عند تسجيل قراءات ضغط دم انقباضي ≥ 140 ملم زئبق أو انبساطي ≥ 90 ملم زئبق في قياسات متعددة منفصلة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يطلق عليه عالمياً لقب \"القاتل الصامت\" لأنه يتلف الشرايين والأعضاء الحيوية لسنوات طويلة دون أن يشعر المريض بأي عرض."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Famously designated the \"Silent Killer\" due to its indolent, asymptomatic vascular destruction over decades before clinical crisis.",
      "goldStandard": "Diagnosed by repeated resting office blood pressure measurements demonstrating systolic ≥ 140 mmHg or diastolic ≥ 90 mmHg.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Famously designated the \"Silent Killer\" due to its indolent, asymptomatic vascular destruction over decades before clinical crisis."
    }
  },
  "w52": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في دموية شائعة ينخفض فيها تركيز الهيموجلوبين أو عدد كريات الدم الحمراء، مما يقلل من قدرة الدم على نقل الأكسجين للأنسجة.",
      "goldStandard": "تظهر نتائج فحص الدم الكامل (CBC) انخفاض الهيموجلوبين (Hb < 13 للرجال، < 12 للنساء) وتحديد MCV لكشف نوع الخلل.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "حالة دموية شائعة ينخفض فيها تركيز الهيموجلوبين أو عدد كريات الدم الحمراء، مما يقلل من قدرة الدم على نقل الأكسجين للأنسجة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Hematologic condition marked by deficient hemoglobin concentration or erythrocyte mass, compromising tissue oxygenation.",
      "goldStandard": "Complete blood count (CBC) shows subnormal hemoglobin (< 13 g/dL in males, < 12 g/dL in females) with MCV classifying the subtype.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Hematologic condition marked by deficient hemoglobin concentration or erythrocyte mass, compromising tissue oxygenation."
    }
  },
  "w55": {
    "Arabic": {
      "etiology": "يمكن أن تتطور الحالة إلى تقرحات عميقة إذا لم يتم التعامل مع المسبب.",
      "goldStandard": "تتضمن التهاباً أو تهيجاً في الغشاء المبطن للجزء العلوي من الجهاز الهضمي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يمكن أن تتطور الحالة إلى تقرحات عميقة إذا لم يتم التعامل مع المسبب."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Failure to address the underlying cause can progress to deep-seated mucosal ulceration.",
      "goldStandard": "Involves inflammation or irritation of the lining within the upper digestive tract.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Failure to address the underlying cause can progress to deep-seated mucosal ulceration."
    }
  },
  "w57": {
    "Arabic": {
      "etiology": "تعد التغذية بفيتامين أ جزءاً من بروتوكول العلاج الداعم.",
      "goldStandard": "مرض فيروسي شديد العدوى ينتقل عبر الرذاذ التنفسي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعد التغذية بفيتامين أ جزءاً من بروتوكول العلاج الداعم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Vitamin A supplementation is part of the supportive treatment protocol.",
      "goldStandard": "A highly contagious viral illness transmitted via respiratory droplets.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Vitamin A supplementation is part of the supportive treatment protocol."
    }
  },
  "w59": {
    "Arabic": {
      "etiology": "يعتمد التشخيص الدقيق على الفحص المصلي وتحديد النمط الجيني.",
      "goldStandard": "حالة التهابية تصيب النسيج الوظيفي للغدة الكبيرة في البطن.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتمد التشخيص الدقيق على الفحص المصلي وتحديد النمط الجيني."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Definitive diagnosis relies on serological testing and genotyping.",
      "goldStandard": "An inflammatory condition affecting the functional tissue of the largest abdominal gland.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Definitive diagnosis relies on serological testing and genotyping."
    }
  },
  "w60": {
    "Arabic": {
      "etiology": "تتضمن التقييمات السريرية اختبار سرعة النقر بالأصابع.",
      "goldStandard": "اضطراب عصبي حركي يتميز ببطء الحركة وتصلب العضلات.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "تتضمن التقييمات السريرية اختبار سرعة النقر بالأصابع."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical assessment involves finger-tapping speed tests.",
      "goldStandard": "A motor neurological disorder characterized by bradykinesia and rigidity.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Clinical assessment involves finger-tapping speed tests."
    }
  },
  "w61": {
    "Arabic": {
      "etiology": "عدوى جرثومية مزمنة تنتقل بالرذاذ وتسبب تكوّن أورام حبيبية نخرية مجبنة محاطة بخلايا لانجهانز العملاقة.",
      "goldStandard": "أشعة الصدر تظهر ارتشاحاً أو تجويفاً كهفياً (Cavitation) في الفصوص العلوية للرئة، وصبغة تسيل-نيلسن تؤكد وجود عصيات صامدة للحمض.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "عدوى جرثومية مزمنة تنتقل بالرذاذ وتسبب تكوّن أورام حبيبية نخرية مجبنة محاطة بخلايا لانجهانز العملاقة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic airborne granulomatous mycobacterial infection characteristically inducing central caseating necrosis flanked by Langhans giant cells.",
      "goldStandard": "CXR reveals apical upper lobe cavitary infiltrates; sputum examination confirms Acid-Fast Bacilli (AFB) on Ziehl-Neelsen stain.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic airborne granulomatous mycobacterial infection characteristically inducing central caseating necrosis flanked by Langhans giant cells."
    }
  },
  "w62": {
    "Arabic": {
      "etiology": "يؤدي وجود طفرات في جينات إصلاح الحمض النووي إلى زيادة كبيرة في احتمالية الإصابة.",
      "goldStandard": "يعد من أكثر الأورام شيوعاً بين النساء في مختلف المجتمعات.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يؤدي وجود طفرات في جينات إصلاح الحمض النووي إلى زيادة كبيرة في احتمالية الإصابة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Germline mutations in DNA repair genes significantly increase the lifetime probability of developing the condition.",
      "goldStandard": "It represents the most frequently diagnosed malignant neoplasm among women globally.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Germline mutations in DNA repair genes significantly increase the lifetime probability of developing the condition."
    }
  },
  "w66": {
    "Arabic": {
      "etiology": "تتضمن الخلايا الرغوية التي تبتلع الليبيدات في الطبقة تحت البطانية.",
      "goldStandard": "تراكم المواد الدهنية داخل جدران الأوعية الدموية.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تتضمن الخلايا الرغوية التي تبتلع الليبيدات في الطبقة تحت البطانية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Involves foam cells that sequester lipids within the subendothelial layer.",
      "goldStandard": "Characterized by the accumulation of fatty substances within vessel walls.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Involves foam cells that sequester lipids within the subendothelial layer."
    }
  },
  "w83": {
    "Arabic": {
      "etiology": "علامات تمدد الساقين والرقبة تعتبر مؤشرات سريرية كلاسيكية للتهيج العصبي.",
      "goldStandard": "عدوى شديدة تصيب الأغشية المحيطة بالدماغ والحبل الشوكي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "علامات تمدد الساقين والرقبة تعتبر مؤشرات سريرية كلاسيكية للتهيج العصبي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Positive signs of meningeal irritation during physical maneuvers suggest localized inflammation.",
      "goldStandard": "An acute infection affecting the membranes surrounding the brain and spinal cord.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Positive signs of meningeal irritation during physical maneuvers suggest localized inflammation."
    }
  },
  "w84": {
    "Arabic": {
      "etiology": "اضطراب صداع عصبي وعائي أولي، قد تسبقه أعراض أورة بصرية (Visual aura) كأضواء وامضة أو خطوط متعرجة قبل بدء الألم بنصف ساعة.",
      "goldStandard": "تستمر النوبة من 4 إلى 72 ساعة، وتستجيب النوبات الحادة بشكل انتقائي لمضادات مستقبلات السيروتونين كعائلة التريبتان (Triptans).",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "اضطراب صداع عصبي وعائي أولي، قد تسبقه أعراض أورة بصرية (Visual aura) كأضواء وامضة أو خطوط متعرجة قبل بدء الألم بنصف ساعة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Neurovascular primary headache disorder; frequently preceded in a subset of patients by a transient visual aura (scintillating scotoma).",
      "goldStandard": "Acute abortive therapy preferentially utilizes selective serotonin 5-HT1B/1D receptor agonists known as triptans.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Neurovascular primary headache disorder; frequently preceded in a subset of patients by a transient visual aura (scintillating scotoma)."
    }
  },
  "w85": {
    "Arabic": {
      "etiology": "اضطراب دماغي مزمن يتميز بقابلية دائمة لتوليد نوبات تشنجية عصبية فجائية ناجمة عن تفريغ كهربائي متزامن ومفرط في الخلايا العصبية.",
      "goldStandard": "تخطيط كهربية الدماغ (EEG) هو الفحص التشخيصي الرئيسي الذي يظهر شحنات وموجات مدببة صرعية شاذة تؤكد النشاط الكهربائي المفرط.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "اضطراب دماغي مزمن يتميز بقابلية دائمة لتوليد نوبات تشنجية عصبية فجائية ناجمة عن تفريغ كهربائي متزامن ومفرط في الخلايا العصبية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Neurological condition marked by an enduring predisposition to generate recurrent spontaneous seizures from abnormal hypersynchronous neuronal discharge.",
      "goldStandard": "Electroencephalography (EEG) provides definitive electrophysiological documentation of epileptiform spikes, sharp waves, and spike-wave discharges.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Neurological condition marked by an enduring predisposition to generate recurrent spontaneous seizures from abnormal hypersynchronous neuronal discharge."
    }
  },
  "w86": {
    "Arabic": {
      "etiology": "اضطراب نفسي ذهاني مزمن يسبب تفككاً وخللاً عميقاً في التفكير والإدراك والواقع واللغة، ويبدأ عادة في أواخر المراهقة وبداية العشرينات.",
      "goldStandard": "تشترط المعايير التشخيصية (DSM-5) استمرار الأعراض الإيجابية والسلبية والتدهور الوظيفي لأكثر من 6 أشهر متواصلة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "اضطراب نفسي ذهاني مزمن يسبب تفككاً وخللاً عميقاً في التفكير والإدراك والواقع واللغة، ويبدأ عادة في أواخر المراهقة وبداية العشرينات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Severe, chronic psychiatric disorder characterized by profound disturbances in reality testing, cognition, affect, and volition.",
      "goldStandard": "DSM-5 criteria require continuous persistence of active and negative symptoms leading to functional decline for at least 6 months.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Severe, chronic psychiatric disorder characterized by profound disturbances in reality testing, cognition, affect, and volition."
    }
  },
  "w87": {
    "Arabic": {
      "etiology": "يُعتبر العلاج السلوكي المعرفي خط دفاع أول بجانب مثبطات استرداد السيروتونين.",
      "goldStandard": "اضطراب مزاجي يتميز بشعور مستمر بالحزن وفقدان الاهتمام.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يُعتبر العلاج السلوكي المعرفي خط دفاع أول بجانب مثبطات استرداد السيروتونين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Cognitive behavioral therapy acts as a primary treatment alongside selective serotonin reuptake inhibitors.",
      "goldStandard": "A mood disorder characterized by persistent feelings of sadness and loss of interest.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Cognitive behavioral therapy acts as a primary treatment alongside selective serotonin reuptake inhibitors."
    }
  },
  "w88": {
    "Arabic": {
      "etiology": "عدوى شائعة جداً في الرضع والأطفال الصغار ترتبط ارتباطاً وثيقاً بخلل وظيفي أو قصر في قناة استاكيوس (Eustachian tube).",
      "goldStandard": "منظار الأذن (Otoscopy) يظهر غشاء طبلة محمراً، معتماً، وبارزاً للأمام (Bulging tympanic membrane) مع انعدام حركته بالنفخ.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "عدوى شائعة جداً في الرضع والأطفال الصغار ترتبط ارتباطاً وثيقاً بخلل وظيفي أو قصر في قناة استاكيوس (Eustachian tube)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Prevalent pediatric infection tightly linked to anatomical horizontal orientation and functional immaturity of the Eustachian tube.",
      "goldStandard": "Otoscopic examination definitively demonstrates a hyperemic, opaque, and distinctly bulging tympanic membrane with impaired pneumatic mobility.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Prevalent pediatric infection tightly linked to anatomical horizontal orientation and functional immaturity of the Eustachian tube."
    }
  },
  "w94": {
    "Arabic": {
      "etiology": "العدوى الناتجة عن مسببات معينة قد تتبعها مضاعفات مناعية تؤثر على الصمامات القلبية.",
      "goldStandard": "التهاب يصيب المنطقة الواقعة خلف الفم والأنف.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "العدوى الناتجة عن مسببات معينة قد تتبعها مضاعفات مناعية تؤثر على الصمامات القلبية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Infections from specific organisms may be followed by immunological complications affecting heart valves.",
      "goldStandard": "Inflammation affecting the area posterior to the mouth and nasal cavity.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Infections from specific organisms may be followed by immunological complications affecting heart valves."
    }
  },
  "w95": {
    "Arabic": {
      "etiology": "مرض التهابي مزيل للميالين يستهدف الجهاز العصبي المركزي، وتنتشر إصاباته بشكل مميز \"في المكان والزمان\" (Dissemination in time and space).",
      "goldStandard": "يظهر الرنين المغناطيسي لويحات مزيلة للميالين حول البطينات (أصابع داوسون Dawson fingers)، ويكشف فحص السائل شوكي عصبي حزم Oligoclonal.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "مرض التهابي مزيل للميالين يستهدف الجهاز العصبي المركزي، وتنتشر إصاباته بشكل مميز \"في المكان والزمان\" (Dissemination in time and space)."
    },
    "English": {
      "etiology": "Autoimmune inflammatory demyelinating disease of the central nervous system mediated by autoreactive T cells.",
      "goldStandard": "MRI shows periventricular demyelinating plaques perpendicular to corpus callosum (Dawson fingers); CSF reveals oligoclonal bands.",
      "firstLineRx": "High-dose intravenous methylprednisolone for acute relapses; disease-modifying therapies (DMTs) for maintenance.",
      "keyDifferentiator": "Demyelinating CNS autoimmune disorder hallmark demonstrated by lesions \"disseminated in space and time\"."
    }
  },
  "w96": {
    "Arabic": {
      "etiology": "مرض مناعي ذاتي عند الوصل العصبي العضلي، يتسم بضعف عضلي متقلب يشتد مع المجهود المتكرر بنهاية اليوم ويتحسن بالراحة التامة.",
      "goldStandard": "ينجم عن أجسام مضادة تهاجم مستقبلات الأسيتيل كولين (AChR)، ويرتبط بتضخم أو ورم في غدة التوتة (Thymoma) ويستجيب لـ Pyridostigmine.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "مرض مناعي ذاتي عند الوصل العصبي العضلي، يتسم بضعف عضلي متقلب يشتد مع المجهود المتكرر بنهاية اليوم ويتحسن بالراحة التامة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Neuromuscular junction autoimmune condition marked by fluctuating skeletal muscle weakness that fatigues with exertion and recovers with rest.",
      "goldStandard": "Pathogenic autoantibodies target nicotinic acetylcholine receptors (anti-AChR); associated with thymoma and treated with pyridostigmine.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Neuromuscular junction autoimmune condition marked by fluctuating skeletal muscle weakness that fatigues with exertion and recovers with rest."
    }
  },
  "w97": {
    "Arabic": {
      "etiology": "استجابة مناعية خلطية وخلوية ذاتية تهاجم النخاعين في الأعصاب المحيطية (Molecular mimicry) بعد عدوى كـ Campylobacter jejuni.",
      "goldStandard": "فحص السائل الشوكي يظهر تنافراً فريداً: ارتفاع كبير في البروتين مع بقاء عدد الخلايا طبيعياً (Albuminocytologic dissociation).",
      "firstLineRx": "العلاج بالغلوبولين المناعي الوريدي (IVIG) أو فصادة البلازما (Plasmapheresis) مع مراقبة التنفس الحثيثة (ممنوع الكورتيزون).",
      "keyDifferentiator": "اعتلال عصبي التهابي حاد عديد الجذور يتبع عادةً عدوى تنفسية أو معوية كـ Campylobacter jejuni بعد أسبوع إلى ثلاثة أسابيع."
    },
    "English": {
      "etiology": "Post-infectious autoimmune peripheral nerve demyelination triggered by molecular mimicry (commonly post-Campylobacter jejuni).",
      "goldStandard": "Lumbar puncture pathognomonically demonstrates albuminocytologic dissociation (isolated profound CSF protein elevation with normal cell count).",
      "firstLineRx": "Intravenous immunoglobulin (IVIG) or plasma exchange (plasmapheresis) with rigorous ventilatory monitoring (steroids are ineffective).",
      "keyDifferentiator": "Acute inflammatory demyelinating polyradiculoneuropathy classically triggered 1-3 weeks post gastrointestinal (Campylobacter) or respiratory infection."
    }
  },
  "w98": {
    "Arabic": {
      "etiology": "التهاب أمعاء مزمن يتميز بظاهرة \"الآفات القافزة\" (Skip lesions) حيث تصاب مناطق متقطعة ويفصل بينها نسيج معوي سليم تماماً.",
      "goldStandard": "المنظار يظهر المظهر المرصوف بالحصى (Cobblestone appearance) ويوضح التحليل النسيجي وجود أورام حبيبية غير مجبنة (Non-caseating granulomas).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التهاب أمعاء مزمن يتميز بظاهرة \"الآفات القافزة\" (Skip lesions) حيث تصاب مناطق متقطعة ويفصل بينها نسيج معوي سليم تماماً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic inflammatory bowel disease characterized by discontinuous transmural \"skip lesions\" interspersed with normal mucosal architecture.",
      "goldStandard": "Endoscopy displays a classic \"cobblestone\" appearance, with histology confirming non-caseating granulomas.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic inflammatory bowel disease characterized by discontinuous transmural \"skip lesions\" interspersed with normal mucosal architecture."
    }
  },
  "w99": {
    "Arabic": {
      "etiology": "تآكل موضعي يخترق الطبقة العضلية المخاطية في بطانة الجهاز الهضمي نتيجة اختلال التوازن بين حمض المعدة وآليات الدفاع المخاطية.",
      "goldStandard": "جرثومة المعدة الملوية البوابية (H. pylori) واستخدام مضادات الالتهاب غير الستيرويدية (NSAIDs) هما المسببان لأكثر من 90% من الحالات.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تآكل موضعي يخترق الطبقة العضلية المخاطية في بطانة الجهاز الهضمي نتيجة اختلال التوازن بين حمض المعدة وآليات الدفاع المخاطية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Mucosal defect extending through the muscularis mucosae caused by an imbalance between pepsin/acid and mucosal defenses.",
      "goldStandard": "Helicobacter pylori colonization and NSAID usage account for over 90% of all diagnostic presentations.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Mucosal defect extending through the muscularis mucosae caused by an imbalance between pepsin/acid and mucosal defenses."
    }
  },
  "w100": {
    "Arabic": {
      "etiology": "عملية تدمير ذاتي التهابية خطيرة تنشط فيها الإنزيمات الهاضمة المعطلة داخل أنسجة الغدة نفسها قبل وصولها إلى تجويف الأمعاء.",
      "goldStandard": "ارتفاع إنزيمات المصل: الليباز (Lipase) والأميلاز لأكثر من 3 أضعاف الحد الطبيعي، وتعد حصوات المرارة والكحول المسببين الأكبر.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "عملية تدمير ذاتي التهابية خطيرة تنشط فيها الإنزيمات الهاضمة المعطلة داخل أنسجة الغدة نفسها قبل وصولها إلى تجويف الأمعاء."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute autodigestive cascade initiated by premature intra-acinar activation of zymogen digestive proteases before reaching duodenum.",
      "goldStandard": "Serum amylase and especially lipase elevated > 3 times upper limit of normal; gallstones and alcohol cause > 80% of attacks.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Acute autodigestive cascade initiated by premature intra-acinar activation of zymogen digestive proteases before reaching duodenum."
    }
  },
  "w101": {
    "Arabic": {
      "etiology": "تبلور وتجمع الأملاح المعدنية المفرطة داخل المسالك البولية عند زيادة تركيزها أو نقص السوائل المثبطة للتكلس.",
      "goldStandard": "تترافق مع بيلة دموية (خروج دم مجهري أو مرئي في البول)، وتظهر الأشعة المقطعية المقطعية بدون صبغة (Non-contrast CT) موقع وحجم الحصاة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تبلور وتجمع الأملاح المعدنية المفرطة داخل المسالك البولية عند زيادة تركيزها أو نقص السوائل المثبطة للتكلس."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Precipitation and crystalline aggregation of mineral solutes within the renal collecting system triggered by supersaturation.",
      "goldStandard": "Accompanied by microscopic or gross hematuria; non-contrast helical CT of the abdomen/pelvis serves as the definitive diagnostic standard.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Precipitation and crystalline aggregation of mineral solutes within the renal collecting system triggered by supersaturation."
    }
  },
  "w102": {
    "Arabic": {
      "etiology": "تؤدي زيادة البروستاتا إلى زيادة الضغط على الإحليل البروستاتي مما يسبب التضييق.",
      "goldStandard": "تحدث هذه الحالة الشائعة بسبب تضخم غدة تحيط بقاعدة المثانة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تؤدي زيادة البروستاتا إلى زيادة الضغط على الإحليل البروستاتي مما يسبب التضييق."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Proliferation exerts mechanical pressure on the urethra, causing significant luminal narrowing.",
      "goldStandard": "This common condition arises from the enlargement of a gland surrounding the bladder base.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Proliferation exerts mechanical pressure on the urethra, causing significant luminal narrowing."
    }
  },
  "w103": {
    "Arabic": {
      "etiology": "يتم اختيار المضادات الحيوية بناءً على نتائج حساسية المزارع المخبرية.",
      "goldStandard": "تنتج هذه الحالة عادة عن غزو ميكروبي للمجاري البولية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم اختيار المضادات الحيوية بناءً على نتائج حساسية المزارع المخبرية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ntibiotic therapy is guided by the results of microbiological susceptibility testing.",
      "goldStandard": "This condition typically results from microbial invasion of the excretory pathways.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Antibiotic therapy is guided by the results of microbiological susceptibility testing."
    }
  },
  "w104": {
    "Arabic": {
      "etiology": "انغراس البويضة المخصبة ونموها في نسيج خارج التجويف الرحمي المبطن، ويعد سبباً رئيسياً لوفيات الأمهات في الثلث الأول.",
      "goldStandard": "السونار المهبلي يظهر رحماً فارغاً تماماً رغم ارتفاع هرمون الحمل بالدم (Beta-hCG) أعلى من المستوى التمييزي (1500-2000 mIU/mL).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "انغراس البويضة المخصبة ونموها في نسيج خارج التجويف الرحمي المبطن، ويعد سبباً رئيسياً لوفيات الأمهات في الثلث الأول."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Blastocyst implantation occurs outside the endometrial lining of the uterine cavity; foremost etiology of first-trimester maternal mortality.",
      "goldStandard": "Transvaginal ultrasound reveals an empty uterine cavity despite serum beta-hCG exceeding the discriminatory zone (1,500-2,000 mIU/mL).",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Blastocyst implantation occurs outside the endometrial lining of the uterine cavity; foremost etiology of first-trimester maternal mortality."
    }
  },
  "w105": {
    "Arabic": {
      "etiology": "اضطراب مشيمي وعائي جهازي معقد يظهر حصراً بعد الأسبوع العشرين من الحمل في سيدة كان ضغط دمها طبيعياً سابقاً.",
      "goldStandard": "ظهور الصداع المستمر وزغللة العين وألم الربع العلوي الأيمن ينذر بمضاعفات خطيرة كـ HELLP أو نوبات تشنجية (Eclampsia).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "اضطراب مشيمي وعائي جهازي معقد يظهر حصراً بعد الأسبوع العشرين من الحمل في سيدة كان ضغط دمها طبيعياً سابقاً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Multisystem hypertensive endothelial disorder emerging de novo after 20 weeks of gestation in previously normotensive mothers.",
      "goldStandard": "Severe features include intractable fronto-occipital headache, visual scotomas, and elevated transaminases, risking full eclamptic seizures.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Multisystem hypertensive endothelial disorder emerging de novo after 20 weeks of gestation in previously normotensive mothers."
    }
  },
  "w106": {
    "Arabic": {
      "etiology": "تتطلب الحالات المزمنة تدبيرًا طويل الأمد لمنع الوصول إلى الفشل الكلوي النهائي.",
      "goldStandard": "يؤدي إلى اختلال في وظائف الكلى نتيجة التهاب الأنسجة المصفية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتطلب الحالات المزمنة تدبيرًا طويل الأمد لمنع الوصول إلى الفشل الكلوي النهائي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic cases necessitate long-term management to prevent progression to end-stage renal failure.",
      "goldStandard": "Characterized by inflammatory processes affecting the filtration units of the renal system.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic cases necessitate long-term management to prevent progression to end-stage renal failure."
    }
  },
  "w107": {
    "Arabic": {
      "etiology": "حمى فيروسية حادة تنقلها بعوضة الزاعجة المصرية (Aedes aegypti)، وتشتهر تاريخياً بلقب \"حمى كسر العظام\" لشدة آلامها.",
      "goldStandard": "فحص الدم يظهر انخفاضاً حاداً في الصفائح الدموية (Thrombocytopenia) ونقص كرات الدم البيضاء وارتفاع الهيماتوكريت.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "حمى فيروسية حادة تنقلها بعوضة الزاعجة المصرية (Aedes aegypti)، وتشتهر تاريخياً بلقب \"حمى كسر العظام\" لشدة آلامها."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: rboviral acute febrile illness transmitted by Aedes mosquitoes, historically known as \"breakbone fever\" due to devastating skeletal pain.",
      "goldStandard": "Laboratory workup reveals marked thrombocytopenia, leukopenia, and hemoconcentration reflecting severe capillary hyperpermeability.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Arboviral acute febrile illness transmitted by Aedes mosquitoes, historically known as \"breakbone fever\" due to devastating skeletal pain."
    }
  },
  "w108": {
    "Arabic": {
      "etiology": "عدوى بطفيلي المتصورة (Plasmodium spp.) تنتقل بلدغة أنثى بعوضة الأنوفيلس وتتكاثر في الكبد وكريات الدم الحمراء.",
      "goldStandard": "مسحة الدم الرقيقة والسميكة (Blood smear) تفحص تحت المجهر وتظهر الطفيلي بوضوح داخل كريات الدم الحمراء الحلقية (Ring forms).",
      "firstLineRx": "العلاج المركب القائم على الأرتيميسينين (ACT) أو الكلوروكين للحالات الحساسة، مع الرعاية الداعمة لمضاعفات الدم.",
      "keyDifferentiator": "مرض طفيلي مداري ينتقل عبر لدغة أنثى بعوضة الأنوفيلس (Anopheles) المصابة، ويقضي جزءاً من دورة حياته داخل خلايا الكبد ثم الدم."
    },
    "English": {
      "etiology": "Infection with Plasmodium species transmitted via the bite of an infected female Anopheles mosquito cycling in RBCs.",
      "goldStandard": "Microscopic identification of trophozoite intraerythrocytic \"ring forms\" on Giemsa-stained thick and thin peripheral blood smears.",
      "firstLineRx": "Artemisinin-based combination therapies (ACTs) or chloroquine if sensitive, alongside supportive critical care.",
      "keyDifferentiator": "Vector-borne parasitic disease transmitted via the bite of an infected female Anopheles mosquito, cycling through hepatic and erythrocytic phases."
    }
  },
  "w109": {
    "Arabic": {
      "etiology": "تعتبر متلازمات الأنسجة الضامة الوراثية عامل خطر للإصابة المبكرة.",
      "goldStandard": "يحدث هذا التوسع الوعائي نتيجة ضعف في جدار الشريان الرئيسي الصادر من القلب.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعتبر متلازمات الأنسجة الضامة الوراثية عامل خطر للإصابة المبكرة."
    },
    "English": {
      "etiology": "Degenerative weakness of the arterial tunica media accelerated by chronic hemodynamic shear stress and atherosclerosis.",
      "goldStandard": "Occurs as a result of structural weakness in the wall of the body's largest artery.",
      "firstLineRx": "Strict blood pressure control, smoking cessation, surveillance ultrasound, and surgical or endovascular repair (EVAR) if >5.5 cm.",
      "keyDifferentiator": "Genetic connective tissue disorders are recognized as predisposing factors for early development."
    }
  },
  "w110": {
    "Arabic": {
      "etiology": "يعتمد الوقاية طويلة الأمد على حملات التلقيح الروتينية للأطفال.",
      "goldStandard": "عدوى بكتيرية تصيب الجهاز التنفسي وتتميز بنوبات سعال عنيفة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتمد الوقاية طويلة الأمد على حملات التلقيح الروتينية للأطفال."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Long-term prevention relies heavily on routine pediatric immunization schedules.",
      "goldStandard": "A bacterial respiratory infection characterized by intense paroxysms of coughing.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Long-term prevention relies heavily on routine pediatric immunization schedules."
    }
  },
  "w111": {
    "Arabic": {
      "etiology": "اضطراب هرموني ينتج عن فرط مزمن في هرمون الكورتيزول، يسبب تراكم غير طبيعي للدهون في الجذع وأعلى الظهر مع نحافة الأطراف.",
      "goldStandard": "يُشخص باختبار تثبيط الديكساميثازون الليلي (Dexamethasone suppression test) أو فحص الكورتيزول الحر في بول 24 ساعة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "اضطراب هرموني ينتج عن فرط مزمن في هرمون الكورتيزول، يسبب تراكم غير طبيعي للدهون في الجذع وأعلى الظهر مع نحافة الأطراف."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Endocrine disorder induced by prolonged supraphysiologic glucocorticoid exposure, precipitating central truncal adiposity with wasted limbs.",
      "goldStandard": "Confirmed by elevated 24-hour urinary free cortisol or failure of serum cortisol suppression following low-dose dexamethasone.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Endocrine disorder induced by prolonged supraphysiologic glucocorticoid exposure, precipitating central truncal adiposity with wasted limbs."
    }
  },
  "w112": {
    "Arabic": {
      "etiology": "قصور أولي في قشرة الغدة الكظرية يؤدي لنقص مزمن في الهرمونات القشرية السكرية والمعدنية معاً.",
      "goldStandard": "الفحوصات تظهر انخفاض الصوديوم وفرط البوتاسيوم وانخفاض الكورتيزول، مع عدم استجابة الغدة لاختبار تحفيز هرمون ACTH.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "قصور أولي في قشرة الغدة الكظرية يؤدي لنقص مزمن في الهرمونات القشرية السكرية والمعدنية معاً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Primary chronic adrenocortical insufficiency culminating in global deficiency of both glucocorticoids and mineralocorticoids.",
      "goldStandard": "Hyponatremia and hyperkalemia with subnormal morning cortisol unresponsive to synthetic cosyntropin (ACTH) stimulation.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Primary chronic adrenocortical insufficiency culminating in global deficiency of both glucocorticoids and mineralocorticoids."
    }
  },
  "w113": {
    "Arabic": {
      "etiology": "مرض مناعي ذاتي ينجم عن وجود أجسام مضادة محفزة لمستقبلات هرمون TSH تؤدي لإفراز مفرط وغير خاضع للسيطرة لهرمونات الغدة الدرقية.",
      "goldStandard": "ظهور جحوظ العينين المميز (Exophthalmos) ووذمة ما قبل الظنبوب (Pretibial myxedema) مع دراق متضخم وعائي منتشر.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "مرض مناعي ذاتي ينجم عن وجود أجسام مضادة محفزة لمستقبلات هرمون TSH تؤدي لإفراز مفرط وغير خاضع للسيطرة لهرمونات الغدة الدرقية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: utoimmune hyperthyroidism driven pathologically by circulating thyroid-stimulating immunoglobulin (TSI) activating TSH receptors.",
      "goldStandard": "Hallmarks include bilateral infiltrative proptosis (exophthalmos), pretibial myxedema, and diffuse thyroid vascular bruit.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Autoimmune hyperthyroidism driven pathologically by circulating thyroid-stimulating immunoglobulin (TSI) activating TSH receptors."
    }
  },
  "w114": {
    "Arabic": {
      "etiology": "التهاب مناعي ذاتي مزمن يؤدي لتدمير تدريجي في خلايا الغدة الدرقية بواسطة ارتشاح لمفاوي كثيف وخلايا هورثل (Hürthle cells).",
      "goldStandard": "الفحوصات تؤكد ارتفاع TSH وانخفاض Free T4 مع وجود إيجابية عالية للأجسام المضادة ضد بيروكسيداز الغدة الدرقية (Anti-TPO).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التهاب مناعي ذاتي مزمن يؤدي لتدمير تدريجي في خلايا الغدة الدرقية بواسطة ارتشاح لمفاوي كثيف وخلايا هورثل (Hürthle cells)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic autoimmune destruction of thyroid follicular cells by dense lymphoplasmacytic infiltrates with oxyphilic Hürthle metaplasia.",
      "goldStandard": "High-titer positivity for anti-thyroid peroxidase antibodies (anti-TPO) coupled with elevated serum TSH and subnormal free T4.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic autoimmune destruction of thyroid follicular cells by dense lymphoplasmacytic infiltrates with oxyphilic Hürthle metaplasia."
    }
  },
  "w115": {
    "Arabic": {
      "etiology": "يحدث الألم غالباً في ساعات الليل أو الصباح الباكر.",
      "goldStandard": "ترسب بلورات حمض اليوريك في المفاصل.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يحدث الألم غالباً في ساعات الليل أو الصباح الباكر."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Nocturnal or early morning onset of severe pain is characteristic.",
      "goldStandard": "Deposition of monosodium urate crystals in synovial joints.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Nocturnal or early morning onset of severe pain is characteristic."
    }
  },
  "w116": {
    "Arabic": {
      "etiology": "تؤدي قراءات مقياس T-score التي تقل عن -2.5 إلى تأكيد التشخيص السريري.",
      "goldStandard": "يتميز المرض بانخفاض كثافة المعادن في الهيكل العظمي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تؤدي قراءات مقياس T-score التي تقل عن -2.5 إلى تأكيد التشخيص السريري."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: T-score reading of -2.5 or lower confirms the clinical diagnosis.",
      "goldStandard": "This condition is characterized by a reduction in skeletal mineral density.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A T-score reading of -2.5 or lower confirms the clinical diagnosis."
    }
  },
  "w117": {
    "Arabic": {
      "etiology": "تتضمن التغيرات النسيجية غياب الطبقة الحبيبية مع وجود خراجات مونرو داخل البشرة.",
      "goldStandard": "تظهر على الجلد بقع حمراء مغطاة بقشور فضية سميكة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتضمن التغيرات النسيجية غياب الطبقة الحبيبية مع وجود خراجات مونرو داخل البشرة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Microscopic examination reveals the absence of the granular layer and Munro's microabscesses.",
      "goldStandard": "The clinical presentation features erythematous plaques covered with thick silvery scales.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Microscopic examination reveals the absence of the granular layer and Munro's microabscesses."
    }
  },
  "w118": {
    "Arabic": {
      "etiology": "تُشاهد تغيرات في التقرن الوريدي داخل البشرة المصابة.",
      "goldStandard": "تتجلى الحالة كتهيج جلدي حاد يتميز بالحكة الشديدة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تُشاهد تغيرات في التقرن الوريدي داخل البشرة المصابة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Histopathology frequently displays features of spongiosis within the affected tissue.",
      "goldStandard": "The condition manifests as persistent cutaneous irritation characterized by intense pruritus.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Histopathology frequently displays features of spongiosis within the affected tissue."
    }
  },
  "w119": {
    "Arabic": {
      "etiology": "تُستخدم قطرات العين لتثبيط إنتاج السائل أو تسهيل خروجه.",
      "goldStandard": "تؤدي هذه الحالة إلى تلف العصب البصري بشكل تدريجي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تُستخدم قطرات العين لتثبيط إنتاج السائل أو تسهيل خروجه."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Pharmacological agents are used to inhibit fluid production or enhance aqueous outflow.",
      "goldStandard": "The condition results in progressive damage to the optic nerve.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Pharmacological agents are used to inhibit fluid production or enhance aqueous outflow."
    }
  },
  "w120": {
    "Arabic": {
      "etiology": "يتم إزالة القشرة المصابة مع الحفاظ على المحفظة لدعم العدسة الجديدة.",
      "goldStandard": "يحدث تعتيم في عدسة العين الطبيعية مما يؤثر على حدة الإبصار.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم إزالة القشرة المصابة مع الحفاظ على المحفظة لدعم العدسة الجديدة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The process involves extracting the clouded cortex while preserving the capsule for support.",
      "goldStandard": "Opacity of the natural lens leads to a significant decrease in visual acuity.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The process involves extracting the clouded cortex while preserving the capsule for support."
    }
  },
  "w131": {
    "Arabic": {
      "etiology": "اضطراب نظم قلبي فوق بطيني شائع ينجم عن إشارات كهربائية فوضوية سريعة تحل محل النشاط المنتظم للعقدة الجيبية الأذينية.",
      "goldStandard": "تخطيط كهربية القلب (ECG) يظهر غياباً تاماً للموجة P (Absent P waves) مع خط قاعدي متذبذب غير منتظم وفترات R-R متباينة.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "اضطراب نظم قلبي فوق بطيني شائع ينجم عن إشارات كهربائية فوضوية سريعة تحل محل النشاط المنتظم للعقدة الجيبية الأذينية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Common supraventricular tachyarrhythmia characterized by chaotic, disorganized atrial depolarizations overriding the sinoatrial node.",
      "goldStandard": "12-lead ECG demonstrates total absence of discernible P waves, erratic baseline fibrillatory waves, and variable R-R intervals.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Common supraventricular tachyarrhythmia characterized by chaotic, disorganized atrial depolarizations overriding the sinoatrial node."
    }
  },
  "w132": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في بضعف النبض المحيطي وتأخره مقارنة بضربات القلب.",
      "goldStandard": "تضيق في الصمام المسؤول عن ضخ الدم للجسم.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "يتميز بضعف النبض المحيطي وتأخره مقارنة بضربات القلب."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: a weakened and delayed carotid upstroke, known as parvus et tardus.",
      "goldStandard": "Narrowing of the valve orifice through which blood exits the left ventricle.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Presents with a weakened and delayed carotid upstroke, known as parvus et tardus."
    }
  },
  "w133": {
    "Arabic": {
      "etiology": "يمكن أن يسبب تلفاً هيكلياً يؤدي إلى قصور حاد في وظيفة الصمام.",
      "goldStandard": "عدوى ميكروبية تصيب البطانة الداخلية للقلب أو الصمامات.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يمكن أن يسبب تلفاً هيكلياً يؤدي إلى قصور حاد في وظيفة الصمام."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Can cause significant structural damage resulting in acute valvular regurgitation.",
      "goldStandard": "Microbial infection of the internal lining of the heart or cardiac valves.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Can cause significant structural damage resulting in acute valvular regurgitation."
    }
  },
  "w134": {
    "Arabic": {
      "etiology": "يعتمد العلاج على دعم وظيفة القلب وعلاج السبب الكامن.",
      "goldStandard": "التهاب يصيب النسيج العضلي المسؤول عن ضخ الدم.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "يعتمد العلاج على دعم وظيفة القلب وعلاج السبب الكامن."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment focuses on supportive care for hemodynamic stability and addressing the underlying trigger.",
      "goldStandard": "Inflammation of the muscular layer of the heart wall.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Treatment focuses on supportive care for hemodynamic stability and addressing the underlying trigger."
    }
  },
  "w135": {
    "Arabic": {
      "etiology": "التهاب حاد يصيب الغشاء الليفي المزدوج المغلف للقلب، وغالباً ما يعقب عدوى فيروسية تنفسية حديثة.",
      "goldStandard": "سماع احتكاك تاموري صريري (Pericardial friction rub) بالسماعة، وECG يظهر ارتفاعاً مقعراً واسعاً في قطعة ST (Diffuse ST elevation) في معظم الليدات.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "التهاب حاد يصيب الغشاء الليفي المزدوج المغلف للقلب، وغالباً ما يعقب عدوى فيروسية تنفسية حديثة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute inflammation of the fibroserous pericardial sac, frequently developing as a post-viral inflammatory reaction.",
      "goldStandard": "Auscultation captures a high-pitched superficial friction rub; ECG displays widespread upward concave ST-segment elevation with PR depression.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Acute inflammation of the fibroserous pericardial sac, frequently developing as a post-viral inflammatory reaction."
    }
  },
  "w136": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في بوجود صوت ثالث ناتج عن التدفق السريع للدم إلى البطين المتوسع.",
      "goldStandard": "يؤدي إلى زيادة حجم تدفق الدم العائد إلى الأذين الأيسر خلال انقباض البطين.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "يتميز بوجود صوت ثالث ناتج عن التدفق السريع للدم إلى البطين المتوسع."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Presence of a third heart sound often indicates significant regurgitant volume and ventricular dilation.",
      "goldStandard": "Causes increased volume of blood flow back into the left atrium during ventricular contraction.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Presence of a third heart sound often indicates significant regurgitant volume and ventricular dilation."
    }
  },
  "w137": {
    "Arabic": {
      "etiology": "عجز سريري في المضخة القلبية عن تلبية متطلبات الأنسجة من الأكسجين أو القدرة على ذلك فقط تحت ضغوط ملء بطينية مرتفعة شاذة.",
      "goldStandard": "الفحص يظهر ارتفاع الضغط الوريدي الوداجي (JVD) مع صوت القلب الثالث (S3 gallop)، وارتفاع نوعي في ببتيد الدماغ المدر للصوديوم (BNP).",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "عجز سريري في المضخة القلبية عن تلبية متطلبات الأنسجة من الأكسجين أو القدرة على ذلك فقط تحت ضغوط ملء بطينية مرتفعة شاذة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: complex clinical syndrome stemming from structural or functional ventricular impairment, elevating filling pressures or reducing output.",
      "goldStandard": "Physical examination demonstrates elevated jugular venous distension (JVD), an S3 gallop rhythm, and marked elevation in plasma BNP.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "A complex clinical syndrome stemming from structural or functional ventricular impairment, elevating filling pressures or reducing output."
    }
  },
  "w138": {
    "Arabic": {
      "etiology": "إقفار موضعي عابر في عضلة القلب ينجم عن عدم التوازن بين إمداد الشرايين التاجية بالدم وزيادة استهلاك القلب للأكسجين.",
      "goldStandard": "تتميز في شكلها المستقر بأن الألم يستمر لدقائق قليلة (أقل من 15-20 دقيقة) ويزول تماماً بالراحة أو بتناول حبة النيتروجليسرين تحت اللسان.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "إقفار موضعي عابر في عضلة القلب ينجم عن عدم التوازن بين إمداد الشرايين التاجية بالدم وزيادة استهلاك القلب للأكسجين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Transient reversible myocardial ischemia provoked when metabolic myocardial oxygen demand outstrips restricted coronary supply.",
      "goldStandard": "Stable episodes persist briefly (< 10-15 minutes) and resolve completely with rest or sublingual nitroglycerin tablets.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Transient reversible myocardial ischemia provoked when metabolic myocardial oxygen demand outstrips restricted coronary supply."
    }
  },
  "w139": {
    "Arabic": {
      "etiology": "يؤدي الإفراز غير المنضبط للهرمونات إلى مخاطر عالية لحدوث نوبات قلبية أو سكتات دماغية.",
      "goldStandard": "ورم نادر ينشأ في الغدة الكظرية ويؤدي إلى إفراز مفرط للهرمونات المسببة للتوتر.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "يؤدي الإفراز غير المنضبط للهرمونات إلى مخاطر عالية لحدوث نوبات قلبية أو سكتات دماغية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Uncontrolled hormone release places the patient at high risk for myocardial infarction or stroke.",
      "goldStandard": "A rare tumor arising in the adrenal medulla that causes excessive secretion of catecholamines.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Uncontrolled hormone release places the patient at high risk for myocardial infarction or stroke."
    }
  },
  "w140": {
    "Arabic": {
      "etiology": "يتطلب العلاج استئصال الكتلة الموجودة في قاعدة الدماغ لخفض مستويات الهرمون.",
      "goldStandard": "اضطراب ناتج عن إفراز مفرط لهرمون النمو بعد انغلاق مشاش العظام.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "يتطلب العلاج استئصال الكتلة الموجودة في قاعدة الدماغ لخفض مستويات الهرمون."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical resection of the pituitary mass is the primary therapeutic goal to normalize hormone levels.",
      "goldStandard": "A disorder caused by excessive secretion of growth hormone after the closure of epiphyseal plates.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Surgical resection of the pituitary mass is the primary therapeutic goal to normalize hormone levels."
    }
  },
  "w141": {
    "Arabic": {
      "etiology": "يؤدي غياب القنوات المائية المعتمدة على المستقبلات في الأنابيب الجامعة إلى فقدان القدرة على حفظ السوائل.",
      "goldStandard": "يتميز المرض بإخراج كميات كبيرة من البول المخفف.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "يؤدي غياب القنوات المائية المعتمدة على المستقبلات في الأنابيب الجامعة إلى فقدان القدرة على حفظ السوائل."
    },
    "English": {
      "etiology": "Autoimmune destruction of pancreatic beta cells or peripheral insulin resistance causing absolute or relative insulin deficiency.",
      "goldStandard": "The condition is characterized by the excretion of large volumes of dilute urine.",
      "firstLineRx": "Lifestyle modifications + Metformin for Type 2; lifelong basal-bolus insulin regimens for Type 1.",
      "keyDifferentiator": "Lack of aquaporin channel translocation in the collecting ducts prevents effective water reabsorption."
    }
  },
  "w142": {
    "Arabic": {
      "etiology": "يتضمن التدخل العلاجي الجراحي إزالة الغدة التي تعاني من فرط النشاط.",
      "goldStandard": "يؤدي هذا الاضطراب إلى اختلال في مستويات الكالسيوم في الدم.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "يتضمن التدخل العلاجي الجراحي إزالة الغدة التي تعاني من فرط النشاط."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical intervention involves the resection of the overactive glandular tissue.",
      "goldStandard": "This disorder leads to a significant imbalance in serum calcium levels.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Surgical intervention involves the resection of the overactive glandular tissue."
    }
  },
  "w143": {
    "Arabic": {
      "etiology": "التهاب حاد في الجدار المراري يبدأ في أكثر من 90% من الحالات بسبب انحشار حصوة في عنق المرارة أو القناة الكيسية (Cystic duct).",
      "goldStandard": "إيجابية علامة ميرفي (Murphy's sign) بتوقف الشهيق فجأة من الألم عند الضغط تحت الحافة الضلعية اليمنى، والسونار يظهر سماكة الجدار > 4 ملم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التهاب حاد في الجدار المراري يبدأ في أكثر من 90% من الحالات بسبب انحشار حصوة في عنق المرارة أو القناة الكيسية (Cystic duct)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute gallbladder inflammation triggered in > 90% of instances by calculus impaction at the gallbladder neck or cystic duct orifice.",
      "goldStandard": "Sonographic or manual Murphy sign (inspiratory arrest on deep right subcostal palpation); ultrasound shows wall thickening > 4 mm.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Acute gallbladder inflammation triggered in > 90% of instances by calculus impaction at the gallbladder neck or cystic duct orifice."
    }
  },
  "w144": {
    "Arabic": {
      "etiology": "يمكن أن يؤدي عدم الالتزام بالحمية إلى زيادة خطر الإصابة بأورام الغدد اللمفاوية المعوية.",
      "goldStandard": "يحدث هذا الاضطراب نتيجة رد فعل مناعي تجاه بروتين معين موجود في الحبوب.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يمكن أن يؤدي عدم الالتزام بالحمية إلى زيادة خطر الإصابة بأورام الغدد اللمفاوية المعوية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Failure to adhere to the dietary regimen increases the long-term risk of intestinal lymphoma.",
      "goldStandard": "This disorder occurs due to an immune-mediated reaction against a specific protein found in cereals.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Failure to adhere to the dietary regimen increases the long-term risk of intestinal lymphoma."
    }
  },
  "w145": {
    "Arabic": {
      "etiology": "مرض معوي التهابي مزمن يقتصر على الطبقة المخاطية والتحت مخاطية، ويبدأ دائماً في المستقيم ويمتد بشكل مستمر وغير متقطع نحو الأعلى.",
      "goldStandard": "منظار القولون يظهر التهاباً احتقانياً مستمراً هشاً نازفاً عند اللمس، وخزعات الأنسجة تؤكد وجود خراجات في الخبايا المخاطية (Crypt abscesses).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "مرض معوي التهابي مزمن يقتصر على الطبقة المخاطية والتحت مخاطية، ويبدأ دائماً في المستقيم ويمتد بشكل مستمر وغير متقطع نحو الأعلى."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic inflammatory bowel disorder restricted strictly to mucosal and submucosal layers, invariably involving the rectum and extending contiguously.",
      "goldStandard": "Colonoscopy demonstrates confluent mucosal erythema, friability, and superficial ulcerations; histology confirms mucosal crypt abscesses.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic inflammatory bowel disorder restricted strictly to mucosal and submucosal layers, invariably involving the rectum and extending contiguously."
    }
  },
  "w146": {
    "Arabic": {
      "etiology": "مثبطات مضخة البروتون هي العلاج الأكثر فاعلية لتقليل الحموضة.",
      "goldStandard": "حالة شائعة تنتج عن ارتجاع محتويات المعدة إلى المريء.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "مثبطات مضخة البروتون هي العلاج الأكثر فاعلية لتقليل الحموضة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Proton pump inhibitors represent the gold standard therapy for reducing gastric acidity.",
      "goldStandard": "A common condition resulting from the retrograde flow of gastric contents into the esophagus.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Proton pump inhibitors represent the gold standard therapy for reducing gastric acidity."
    }
  },
  "w147": {
    "Arabic": {
      "etiology": "الربط بشريط مطاطي هو إجراء علاجي شائع للحالات غير الجراحية.",
      "goldStandard": "توسع وتورم في الأوعية الدموية الموجودة في القناة الشرجية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "الربط بشريط مطاطي هو إجراء علاجي شائع للحالات غير الجراحية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Rubber band ligation is a standard non-surgical procedural intervention.",
      "goldStandard": "Dilated and swollen blood vessels located within the anal canal.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Rubber band ligation is a standard non-surgical procedural intervention."
    }
  },
  "w148": {
    "Arabic": {
      "etiology": "تتطلب الحالات غير القابلة للرد تدخلاً جراحياً عاجلاً لتجنب تموت الأنسجة.",
      "goldStandard": "بروز غير طبيعي لعضو أو نسيج من خلال عيب في جدار العضلات المحيط به.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتطلب الحالات غير القابلة للرد تدخلاً جراحياً عاجلاً لتجنب تموت الأنسجة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Irreducible cases necessitate urgent surgical intervention to prevent tissue necrosis.",
      "goldStandard": "An abnormal protrusion of an organ or tissue through a defect in the surrounding muscular wall.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Irreducible cases necessitate urgent surgical intervention to prevent tissue necrosis."
    }
  },
  "w149": {
    "Arabic": {
      "etiology": "تجمع غير طبيعي للهواء داخل التجويف الجنبي بين وريقتي غشاء الجنب، مما يلغي الضغط السلبي ويؤدي لانخماص الرئة جزئياً أو كلياً.",
      "goldStandard": "الفحص السريري يظهر فرط رنين بالقرع (Hyperresonance) مع غياب كامل لأصوات التنفس بالجانب المصاب، وتؤكده أشعة الصدر بغياب علامات النسيج الرئوي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تجمع غير طبيعي للهواء داخل التجويف الجنبي بين وريقتي غشاء الجنب، مما يلغي الضغط السلبي ويؤدي لانخماص الرئة جزئياً أو كلياً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ccumulation of atmospheric air within the pleural space abolishing negative intrapleural pressure, leading to ipsilateral lung collapse.",
      "goldStandard": "Hyperresonance to percussion with absent vesicular breath sounds on the affected hemithorax; upright CXR displays a distinct visceral pleural line.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Accumulation of atmospheric air within the pleural space abolishing negative intrapleural pressure, leading to ipsilateral lung collapse."
    }
  },
  "w150": {
    "Arabic": {
      "etiology": "انسداد حاد في الشريان الرئوي أو أحد فروعه الرئيسية ناجم عن صمة خثرية تنتقل غالباً من أوردة الأطراف السفلية العميقة (DVT).",
      "goldStandard": "الفحص التشخيصي المفضل ذو المعيار الذهبي هو الأشعة المقطعية للشرايين الرئوية بالصبغة (CT Pulmonary Angiography).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "انسداد حاد في الشريان الرئوي أو أحد فروعه الرئيسية ناجم عن صمة خثرية تنتقل غالباً من أوردة الأطراف السفلية العميقة (DVT)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute mechanical occlusion of the pulmonary arterial bed caused by an embolus originating predominantly from deep vein thrombosis (DVT).",
      "goldStandard": "Computed tomography pulmonary angiography (CTPA) serves as the definitive reference imaging modality.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Acute mechanical occlusion of the pulmonary arterial bed caused by an embolus originating predominantly from deep vein thrombosis (DVT)."
    }
  },
  "w151": {
    "Arabic": {
      "etiology": "يظهر المرضى غالباً ما يعرف بالنمط الظاهري للمنتفخ الوردي أو المحتقن الأزرق.",
      "goldStandard": "يرتبط المرض بشكل وثيق بالتدخين طويل الأمد وتلوث الهواء.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يظهر المرضى غالباً ما يعرف بالنمط الظاهري للمنتفخ الوردي أو المحتقن الأزرق."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical presentations often follow the archetypes of the pink puffer or the blue bloater.",
      "goldStandard": "This condition is strongly linked to long-term cigarette smoking and air pollution.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Clinical presentations often follow the archetypes of the pink puffer or the blue bloater."
    }
  },
  "w152": {
    "Arabic": {
      "etiology": "يعتبر الاستعمار البكتيري المزمن بالزائفة الزنجارية تحدياً علاجياً كبيراً.",
      "goldStandard": "يحدث توسع دائم وغير طبيعي في الممرات الهوائية الكبرى.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتبر الاستعمار البكتيري المزمن بالزائفة الزنجارية تحدياً علاجياً كبيراً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic colonization by Pseudomonas aeruginosa represents a significant therapeutic challenge.",
      "goldStandard": "There is permanent and abnormal dilatation of the larger conducting airways.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Chronic colonization by Pseudomonas aeruginosa represents a significant therapeutic challenge."
    }
  },
  "w153": {
    "Arabic": {
      "etiology": "يؤدي انخفاض مرونة الرئة إلى اضطراب حصر وظائف التنفس.",
      "goldStandard": "تنتج الحالة عن استنشاق الألياف المعدنية المجهرية في بيئات العمل.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يؤدي انخفاض مرونة الرئة إلى اضطراب حصر وظائف التنفس."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Decreased pulmonary compliance leads to a classic restrictive pattern on spirometry.",
      "goldStandard": "The condition arises from the inhalation of microscopic mineral fibers in occupational settings.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Decreased pulmonary compliance leads to a classic restrictive pattern on spirometry."
    }
  },
  "w154": {
    "Arabic": {
      "etiology": "تعتبر الرعشات العضلية اللاإرادية تحت الجلد علامة سريرية كلاسيكية.",
      "goldStandard": "يؤدي المرض إلى تنكس تدريجي في الخلايا العصبية الحركية.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "تعتبر الرعشات العضلية اللاإرادية تحت الجلد علامة سريرية كلاسيكية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Visible involuntary twitching of muscles under the skin is a classic clinical sign.",
      "goldStandard": "The disease leads to progressive degeneration of motor neurons.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Visible involuntary twitching of muscles under the skin is a classic clinical sign."
    }
  },
  "w155": {
    "Arabic": {
      "etiology": "يعتمد التشخيص النهائي على الاختبارات الجينية الجزيئية.",
      "goldStandard": "ينتقل المرض عبر نمط وراثي جسدي سائد.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "يعتمد التشخيص النهائي على الاختبارات الجينية الجزيئية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Definitive diagnosis is established through molecular genetic testing.",
      "goldStandard": "The disorder follows an autosomal dominant pattern of inheritance.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Definitive diagnosis is established through molecular genetic testing."
    }
  },
  "w156": {
    "Arabic": {
      "etiology": "تتميز النوبات بزيادة ملحوظة في السلوكيات المندفعة والمخاطرة دون تقدير للعواقب",
      "goldStandard": "حالة نفسية مزمنة تتميز بتقلبات مزاجية حادة بين الاكتئاب والنشاط المفرط",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتميز النوبات بزيادة ملحوظة في السلوكيات المندفعة والمخاطرة دون تقدير للعواقب"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical presentation often involves distinct periods of high-risk, impulsive behaviors without regard for consequences",
      "goldStandard": "A chronic mental health condition characterized by significant shifts in mood between depression and elevated energy",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Clinical presentation often involves distinct periods of high-risk, impulsive behaviors without regard for consequences"
    }
  },
  "w157": {
    "Arabic": {
      "etiology": "يرتبط الاضطراب باختلافات في توصيلات القشرة الدماغية وتطور التشابكات العصبية",
      "goldStandard": "اضطراب نماء عصبي يظهر في مراحل الطفولة المبكرة",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يرتبط الاضطراب باختلافات في توصيلات القشرة الدماغية وتطور التشابكات العصبية"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ssociated with structural and functional differences in cortical connectivity and neural pruning",
      "goldStandard": "A neurodevelopmental condition manifesting during early childhood",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Associated with structural and functional differences in cortical connectivity and neural pruning"
    }
  },
  "w158": {
    "Arabic": {
      "etiology": "تؤدي العمليات الجراحية بدون تحضير مسبق إلى مضاعفات نزفية تهدد الحياة",
      "goldStandard": "اضطراب وراثي يؤدي إلى خلل في عملية تخثر الدم الطبيعية",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "تؤدي العمليات الجراحية بدون تحضير مسبق إلى مضاعفات نزفية تهدد الحياة"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical interventions without adequate prophylaxis carry a high risk of life-threatening hemorrhage",
      "goldStandard": "An inherited disorder leading to a disruption in the physiological coagulation process",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Surgical interventions without adequate prophylaxis carry a high risk of life-threatening hemorrhage"
    }
  },
  "w159": {
    "Arabic": {
      "etiology": "يستخدم الرحلان الكهربائي لتحديد نوع الخلل في سلاسل البروتين بدقة",
      "goldStandard": "اضطراب دم وراثي يقلل من إنتاج بروتين الهيموجلوبين",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يستخدم الرحلان الكهربائي لتحديد نوع الخلل في سلاسل البروتين بدقة"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Hemoglobin electrophoresis is essential for confirming the specific chain deficiency",
      "goldStandard": "An inherited blood disorder that reduces the production of hemoglobin protein",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Hemoglobin electrophoresis is essential for confirming the specific chain deficiency"
    }
  },
  "w160": {
    "Arabic": {
      "etiology": "يؤدي التلف التراكمي للأعضاء إلى مضاعفات مزمنة مثل نوبات الصدر الحادة",
      "goldStandard": "اضطراب جيني يؤثر على شكل خلايا الدم الحمراء ويجعلها صلبة",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يؤدي التلف التراكمي للأعضاء إلى مضاعفات مزمنة مثل نوبات الصدر الحادة"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Cumulative organ damage manifests in chronic complications such as acute chest episodes",
      "goldStandard": "A genetic disorder causing red blood cells to become rigid and distorted",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Cumulative organ damage manifests in chronic complications such as acute chest episodes"
    }
  },
  "w161": {
    "Arabic": {
      "etiology": "يتم علاج الحالات المزمنة أحياناً بمثبطات كيناز التيروزين النوعية لاستهداف البروتينات المسببة للسرطان.",
      "goldStandard": "يتميز هذا الاضطراب بإنتاج غير منضبط لخلايا الدم البيضاء الأولية في نخاع العظم.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يتم علاج الحالات المزمنة أحياناً بمثبطات كيناز التيروزين النوعية لاستهداف البروتينات المسببة للسرطان."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic cases are sometimes treated with specific tyrosine kinase inhibitors to target oncogenic proteins.",
      "goldStandard": "This disorder is characterized by the uncontrolled production of primitive white blood cells in the bone marrow.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Chronic cases are sometimes treated with specific tyrosine kinase inhibitors to target oncogenic proteins."
    }
  },
  "w162": {
    "Arabic": {
      "etiology": "قد يسبب الورم ضغطاً على الأعضاء الحيوية مثل القصبة الهوائية أو الوريد الأجوف العلوي.",
      "goldStandard": "يصنف هذا المرض كنمو خبيث ينشأ من الخلايا اللمفاوية في الجهاز المناعي.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "قد يسبب الورم ضغطاً على الأعضاء الحيوية مثل القصبة الهوائية أو الوريد الأجوف العلوي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The tumor may cause pressure on vital structures such as the trachea or the superior vena cava.",
      "goldStandard": "This condition is classified as a malignant growth arising from immune system lymphocytes.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "The tumor may cause pressure on vital structures such as the trachea or the superior vena cava."
    }
  },
  "w163": {
    "Arabic": {
      "etiology": "قد يتطلب العلاج زراعة ذاتية للخلايا الجذعية ومثبطات البروتيازوم.",
      "goldStandard": "يتميز هذا الاضطراب الخبيث بتكاثر مفرط لخلايا البلازما في نخاع العظم.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "قد يتطلب العلاج زراعة ذاتية للخلايا الجذعية ومثبطات البروتيازوم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment may require autologous stem cell transplantation and proteasome inhibitors.",
      "goldStandard": "This malignant disorder is characterized by excessive proliferation of plasma cells in the bone marrow.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Treatment may require autologous stem cell transplantation and proteasome inhibitors."
    }
  },
  "w164": {
    "Arabic": {
      "etiology": "يعتبر تراكم السوائل في التجويف البريتوني من المضاعفات المحتملة في الحالات الشديدة.",
      "goldStandard": "يتميز هذا الاضطراب السريري بفقدان كميات كبيرة من البروتين عبر البول.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتبر تراكم السوائل في التجويف البريتوني من المضاعفات المحتملة في الحالات الشديدة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ccumulation of fluid in the peritoneal cavity is a potential complication in severe cases.",
      "goldStandard": "This clinical disorder is characterized by the loss of massive amounts of protein in the urine.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Accumulation of fluid in the peritoneal cavity is a potential complication in severe cases."
    }
  },
  "w165": {
    "Arabic": {
      "etiology": "يتم العلاج باستخدام مضادات حيوية واسعة الطيف يتم تعديلها حسب نتائج المزرعة.",
      "goldStandard": "هو التهاب بكتيري يصيب حويض الكلية والأنسجة الكلوية الخلالية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم العلاج باستخدام مضادات حيوية واسعة الطيف يتم تعديلها حسب نتائج المزرعة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment involves broad-spectrum antibiotics, which are adjusted based on culture results.",
      "goldStandard": "This is a bacterial infection affecting the renal pelvis and interstitial renal tissues.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Treatment involves broad-spectrum antibiotics, which are adjusted based on culture results."
    }
  },
  "w166": {
    "Arabic": {
      "etiology": "يظهر في التصوير بالرنين المغناطيسي كاستسقاء في الحويضة الكلوية مع ضمور القشرة.",
      "goldStandard": "يؤدي إلى توسع الجهاز المفرغ للكلى نتيجة انسداد تدفق البول.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يظهر في التصوير بالرنين المغناطيسي كاستسقاء في الحويضة الكلوية مع ضمور القشرة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Magnetic resonance imaging reveals pelvicalyceal distention with cortical thinning.",
      "goldStandard": "Leads to dilatation of the renal collecting system due to obstruction of urine outflow.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Magnetic resonance imaging reveals pelvicalyceal distention with cortical thinning."
    }
  },
  "w167": {
    "Arabic": {
      "etiology": "يظهر تضخماً في الغدد الليمفاوية مع تقرحات في الأغشية المخاطية للفم.",
      "goldStandard": "اضطراب مناعي ذاتي متعدد الأجهزة يؤثر على أعضاء مختلفة.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يظهر تضخماً في الغدد الليمفاوية مع تقرحات في الأغشية المخاطية للفم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: lymphadenopathy and oral mucosal ulcerations.",
      "goldStandard": "A multisystem autoimmune disorder affecting various organ systems.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Presents with lymphadenopathy and oral mucosal ulcerations."
    }
  },
  "w168": {
    "Arabic": {
      "etiology": "تؤدي النتوءات العظمية إلى تشوهات ملموسة في المفاصل المحيطية.",
      "goldStandard": "حالة تنكسية تسبب تآكل الغضاريف المفصلية.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "تؤدي النتوءات العظمية إلى تشوهات ملموسة في المفاصل المحيطية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Osteophytes lead to palpable deformities in the peripheral joints.",
      "goldStandard": "A degenerative condition causing the erosion of articular cartilage.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Osteophytes lead to palpable deformities in the peripheral joints."
    }
  },
  "w169": {
    "Arabic": {
      "etiology": "يؤدي في النهاية إلى فقدان كامل لمرونة العمود الفقري.",
      "goldStandard": "التهاب مزمن يؤثر بشكل رئيسي على العمود الفقري والمفاصل الحرقفية.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يؤدي في النهاية إلى فقدان كامل لمرونة العمود الفقري."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Ultimately results in the complete loss of spinal mobility.",
      "goldStandard": "A chronic inflammatory condition primarily affecting the spine and sacroiliac joints.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Ultimately results in the complete loss of spinal mobility."
    }
  },
  "w170": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في المرضى من انخفاض عتبة تحمل المؤثرات المؤلمة.",
      "goldStandard": "حالة مزمنة تتميز بانتشار الألم في الجهاز العضلي الهيكلي.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يعاني المرضى من انخفاض عتبة تحمل المؤثرات المؤلمة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Patients exhibit a lowered threshold for painful stimuli.",
      "goldStandard": "A chronic condition characterized by widespread musculoskeletal pain.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Patients exhibit a lowered threshold for painful stimuli."
    }
  },
  "w171": {
    "Arabic": {
      "etiology": "تتضمن الأنماط السريرية النوع المنتشر سطحياً، العقدي، والعدسي الخبيث.",
      "goldStandard": "يعد أحد أكثر أشكال سرطان الجلد عدوانية وخطورة.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "تتضمن الأنماط السريرية النوع المنتشر سطحياً، العقدي، والعدسي الخبيث."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical subtypes include superficial spreading, nodular, and lentigo maligna.",
      "goldStandard": "It is considered one of the most aggressive and dangerous forms of skin malignancy.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Clinical subtypes include superficial spreading, nodular, and lentigo maligna."
    }
  },
  "w172": {
    "Arabic": {
      "etiology": "تعتمد التوقعات المستقبلية على مدى شمولية المنطقة المتأثرة.",
      "goldStandard": "يتميز بفقدان مفاجئ وموضعي للشعر في مناطق محددة من الجسم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعتمد التوقعات المستقبلية على مدى شمولية المنطقة المتأثرة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Prognosis is generally dependent on the extent of the body surface area involved.",
      "goldStandard": "It is characterized by sudden, localized loss of hair in specific body regions.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Prognosis is generally dependent on the extent of the body surface area involved."
    }
  },
  "w173": {
    "Arabic": {
      "etiology": "تتضمن الأبحاث الحديثة مثبطات JAK كخيار علاجي واعد.",
      "goldStandard": "تظهر الحالة على شكل بقع جلدية بيضاء فاقدة للصبغة الطبيعية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتضمن الأبحاث الحديثة مثبطات JAK كخيار علاجي واعد."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Recent research has identified JAK inhibitors as a promising therapeutic option.",
      "goldStandard": "The condition presents as white patches on the skin lacking natural pigmentation.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Recent research has identified JAK inhibitors as a promising therapeutic option."
    }
  },
  "w174": {
    "Arabic": {
      "etiology": "يُستخدم أحياناً جهاز إلغاء الضوضاء لتشتيت الانتباه عن الصوت الداخلي.",
      "goldStandard": "يُعرف بإدراك صوت في الأذن أو الرأس في غياب مصدر صوت خارجي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يُستخدم أحياناً جهاز إلغاء الضوضاء لتشتيت الانتباه عن الصوت الداخلي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Sound masking devices are sometimes used to redirect attention from the internal noise.",
      "goldStandard": "It is defined as the perception of sound in the ear or head in the absence of an external source.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Sound masking devices are sometimes used to redirect attention from the internal noise."
    }
  },
  "w196": {
    "Arabic": {
      "etiology": "تعتمد الوقاية بشكل أساسي على التطعيم الدوري بلقاح الذيفان المضعف.",
      "goldStandard": "عدوى بكتيرية حادة تصيب الجهاز العصبي وتؤدي إلى تشنجات عضلية شديدة.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تعتمد الوقاية بشكل أساسي على التطعيم الدوري بلقاح الذيفان المضعف."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Prevention relies heavily on regular active immunization with toxoid vaccines.",
      "goldStandard": "An acute bacterial infection affecting the nervous system resulting in severe muscle spasms.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Prevention relies heavily on regular active immunization with toxoid vaccines."
    }
  },
  "w197": {
    "Arabic": {
      "etiology": "يعد البروتوكول العلاجي الوقائي فور التعرض للعضة حيوياً لمنع تطور المرض.",
      "goldStandard": "عدوى فيروسية حيوانية المنشأ تؤثر بشكل رئيسي على الجهاز العصبي المركزي.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يعد البروتوكول العلاجي الوقائي فور التعرض للعضة حيوياً لمنع تطور المرض."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Post-exposure prophylaxis protocols are critical immediately after the bite occurs.",
      "goldStandard": "A zoonotic viral infection that primarily affects the central nervous system.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Post-exposure prophylaxis protocols are critical immediately after the bite occurs."
    }
  },
  "w198": {
    "Arabic": {
      "etiology": "تترك أثراً مزمناً يتمثل في تغيرات في حجم البؤبؤ وعدم استجابته للضوء.",
      "goldStandard": "عدوى بكتيرية تنتقل بشكل أساسي عن طريق الاتصال الجنسي المباشر.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تترك أثراً مزمناً يتمثل في تغيرات في حجم البؤبؤ وعدم استجابته للضوء."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: It can leave a chronic sign represented by pupils that react to accommodation but not light.",
      "goldStandard": "A bacterial infection transmitted primarily through direct sexual contact.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "It can leave a chronic sign represented by pupils that react to accommodation but not light."
    }
  },
  "w199": {
    "Arabic": {
      "etiology": "يُنصح دائماً بفحص وعلاج الشركاء الجنسيين لمنع إعادة العدوى.",
      "goldStandard": "عدوى بكتيرية شائعة تنتقل بالاتصال الجنسي وتصيب الأغشية المخاطية.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يُنصح دائماً بفحص وعلاج الشركاء الجنسيين لمنع إعادة العدوى."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Partner notification and treatment are essential to prevent reinfection.",
      "goldStandard": "A common bacterial infection transmitted sexually that affects mucosal surfaces.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Partner notification and treatment are essential to prevent reinfection."
    }
  },
  "w200": {
    "Arabic": {
      "etiology": "تعتبر مراقبة مصادر المياه ومعالجة الصرف الصحي الركيزة الأساسية للوقاية.",
      "goldStandard": "عدوى معوية حادة تسببها بكتيريا تفرز سموماً تؤثر على الأمعاء الدقيقة.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تعتبر مراقبة مصادر المياه ومعالجة الصرف الصحي الركيزة الأساسية للوقاية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Monitoring water sources and sewage treatment are the cornerstones of prevention.",
      "goldStandard": "An acute intestinal infection caused by bacteria secreting toxins that affect the small intestine.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Monitoring water sources and sewage treatment are the cornerstones of prevention."
    }
  },
  "w201": {
    "Arabic": {
      "etiology": "تظهر الأجسام المجهرية المميزة داخل الخلايا البلعمية",
      "goldStandard": "تنتقل العدوى عن طريق لدغة أنثى ذبابة الرمل المصابة",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تظهر الأجسام المجهرية المميزة داخل الخلايا البلعمية"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Characteristic intracellular bodies are visible within macrophages",
      "goldStandard": "Transmission occurs through the bite of an infected female sandfly",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Characteristic intracellular bodies are visible within macrophages"
    }
  },
  "w202": {
    "Arabic": {
      "etiology": "تعتبر العيادات المهنية والبيطرية مراكز خطورة عالية للإصابة",
      "goldStandard": "ترتبط العدوى عادة بالتعامل مع الحيوانات المصابة أو استهلاك منتجات الألبان غير المبسترة",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تعتبر العيادات المهنية والبيطرية مراكز خطورة عالية للإصابة"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Occupational exposure in veterinary and laboratory settings is a major risk factor",
      "goldStandard": "Infection is typically associated with exposure to infected animals or unpasteurized dairy products",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Occupational exposure in veterinary and laboratory settings is a major risk factor"
    }
  },
  "w203": {
    "Arabic": {
      "etiology": "تتميز الحالة بغياب الحمى والحفاظ على الوعي التام",
      "goldStandard": "تحدث الإصابة نتيجة تناول أطعمة ملوثة بسموم خارجية تفرزها جراثيم لاهوائية",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تتميز الحالة بغياب الحمى والحفاظ على الوعي التام"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: the absence of fever and preservation of consciousness",
      "goldStandard": "Caused by ingestion of food contaminated with potent exotoxins produced by anaerobic bacteria",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Characterized by the absence of fever and preservation of consciousness"
    }
  },
  "w204": {
    "Arabic": {
      "etiology": "يؤدي إلى التهاب في الأغشية المخاطية للفم واللسان الذي يشبه ثمرة الفراولة",
      "goldStandard": "تعد سبباً رئيسياً لأمراض القلب المكتسبة لدى الأطفال في الدول المتقدمة",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يؤدي إلى التهاب في الأغشية المخاطية للفم واللسان الذي يشبه ثمرة الفراولة"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Causes mucositis of the oral cavity and a characteristic strawberry-like tongue appearance",
      "goldStandard": "Represents a leading cause of acquired heart disease in children within developed nations",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Causes mucositis of the oral cavity and a characteristic strawberry-like tongue appearance"
    }
  },
  "w205": {
    "Arabic": {
      "etiology": "تكون القدرات العقلية لدى المصابات غالباً ضمن النطاق الطبيعي",
      "goldStandard": "تنتج الحالة عن فقدان كامل أو جزئي لكروموسوم إكس لدى الإناث",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تكون القدرات العقلية لدى المصابات غالباً ضمن النطاق الطبيعي"
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Cognitive abilities are typically within the normal range",
      "goldStandard": "Results from the complete or partial absence of an X chromosome in females",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Cognitive abilities are typically within the normal range"
    }
  },
  "w206": {
    "Arabic": {
      "etiology": "النمط النووي المكتشف هو 47,XXY.",
      "goldStandard": "اضطراب جيني ناتج عن وجود نسخة إضافية من الصبغي الجنسي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "النمط النووي المكتشف هو 47,XXY."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The standard karyotype analysis reveals a 47,XXY configuration.",
      "goldStandard": "Genetic disorder characterized by the presence of an extra sex chromosome.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The standard karyotype analysis reveals a 47,XXY configuration."
    }
  },
  "w207": {
    "Arabic": {
      "etiology": "كان يصيب البحارة قديماً نتيجة غياب الأغذية الطازجة.",
      "goldStandard": "ينتج عن نقص حاد في فيتامين ضروري لتركيب الكولاجين.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "كان يصيب البحارة قديماً نتيجة غياب الأغذية الطازجة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Historically common in sailors due to the absence of fresh produce in the diet.",
      "goldStandard": "Caused by a severe deficiency of a vitamin essential for collagen synthesis.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Historically common in sailors due to the absence of fresh produce in the diet."
    }
  },
  "w208": {
    "Arabic": {
      "etiology": "يُلاحظ وجود تشوهات في الفقرات والعمود الفقري.",
      "goldStandard": "حالة مرضية تصيب العظام خلال مرحلة النمو نتيجة نقص فيتامين حيوي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يُلاحظ وجود تشوهات في الفقرات والعمود الفقري."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Vertebral deformities and spinal curvatures are commonly observed.",
      "goldStandard": "Pathological condition affecting bones during development due to a critical vitamin deficiency.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Vertebral deformities and spinal curvatures are commonly observed."
    }
  },
  "w209": {
    "Arabic": {
      "etiology": "يتم علاجه بتعويض فيتامين ب3.",
      "goldStandard": "ينتج عن نقص حاد في النياسين أو تريبتوفان.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم علاجه بتعويض فيتامين ب3."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Managed through therapeutic supplementation of vitamin B3.",
      "goldStandard": "Caused by a profound deficiency of niacin or its precursor tryptophan.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Managed through therapeutic supplementation of vitamin B3."
    }
  },
  "w210": {
    "Arabic": {
      "etiology": "يعمل الفيتامين المفقود كعامل مرافق أساسي في استقلاب الكربوهيدرات.",
      "goldStandard": "ينتج عن نقص حاد في فيتامين ب1.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعمل الفيتامين المفقود كعامل مرافق أساسي في استقلاب الكربوهيدرات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The deficient vitamin serves as a crucial cofactor in carbohydrate metabolism.",
      "goldStandard": "Results from a severe deficiency of vitamin B1.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The deficient vitamin serves as a crucial cofactor in carbohydrate metabolism."
    }
  },
  "w211": {
    "Arabic": {
      "etiology": "يعتبر من عوامل الوقاية الطبيعية ضد الإصابة الشديدة بمرض الملاريا.",
      "goldStandard": "اضطراب وراثي مرتبط بالكروموسوم إكس يؤدي إلى خلل في استقلاب الكربوهيدرات داخل كريات الدم الحمراء.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يعتبر من عوامل الوقاية الطبيعية ضد الإصابة الشديدة بمرض الملاريا."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Considered a protective factor against severe forms of malaria infection.",
      "goldStandard": "An X-linked genetic disorder that impairs carbohydrate metabolism within erythrocytes.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Considered a protective factor against severe forms of malaria infection."
    }
  },
  "w212": {
    "Arabic": {
      "etiology": "تميل الحالة للظهور بشكل أكبر في المواليد الذكور بكر الولادة.",
      "goldStandard": "تحدث نتيجة تضخم عضلي في المخرج المعدي مما يعيق مرور الطعام.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تميل الحالة للظهور بشكل أكبر في المواليد الذكور بكر الولادة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Shows a strong predilection for first-born male infants.",
      "goldStandard": "Occurs due to muscular hypertrophy at the gastric outlet that obstructs food passage.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Shows a strong predilection for first-born male infants."
    }
  },
  "w213": {
    "Arabic": {
      "etiology": "التأخر في التشخيص قد يؤدي إلى نقص تروية الأمعاء وتنخرها.",
      "goldStandard": "حالة طارئة تحدث نتيجة تداخل جزء من الأمعاء داخل جزء آخر.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التأخر في التشخيص قد يؤدي إلى نقص تروية الأمعاء وتنخرها."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Delayed recognition can lead to bowel ischemia and necrosis.",
      "goldStandard": "An acute emergency where one segment of the bowel slides into an adjacent segment.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Delayed recognition can lead to bowel ischemia and necrosis."
    }
  },
  "w231": {
    "Arabic": {
      "etiology": "عدوى بطفيلي المتصورة (Plasmodium spp.) تنتقل بلدغة أنثى بعوضة الأنوفيلس وتتكاثر في الكبد وكريات الدم الحمراء.",
      "goldStandard": "مرض مداري شهير تسببه بروتوزوا وحيدة الخلية تنتقل عبر البعوض.",
      "firstLineRx": "العلاج المركب القائم على الأرتيميسينين (ACT) أو الكلوروكين للحالات الحساسة، مع الرعاية الداعمة لمضاعفات الدم.",
      "keyDifferentiator": "المسؤول عن أكثر من نصف مليون حالة وفاة سنوياً خاصة في أفريقيا."
    },
    "English": {
      "etiology": "Infection with Plasmodium species transmitted via the bite of an infected female Anopheles mosquito cycling in RBCs.",
      "goldStandard": "A famous tropical disease caused by a protozoan parasite transmitted by mosquitoes.",
      "firstLineRx": "Artemisinin-based combination therapies (ACTs) or chloroquine if sensitive, alongside supportive critical care.",
      "keyDifferentiator": "Causes over half a million deaths annually, particularly in Sub-Saharan Africa."
    }
  },
  "w241": {
    "Arabic": {
      "etiology": "تستمر الحكة لعدة أسابيع بعد العلاج الناجح بسبب بقايا الطفيل الميتة بالجلد (حساسية هذا المرض).",
      "goldStandard": "مرض جلدي طفيلي معدي وشديد الانتشار يسببه سوس مجهري يحفر خنادق بالبشرة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تستمر الحكة لعدة أسابيع بعد العلاج الناجح بسبب بقايا الطفيل الميتة بالجلد (حساسية هذا المرض)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Post-scabietic itch can persist for several weeks after successful eradication due to hypersensitivity.",
      "goldStandard": "A highly contagious parasitic skin infestation caused by the microscopic itch mite.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Post-scabietic itch can persist for several weeks after successful eradication due to hypersensitivity."
    }
  },
  "w263": {
    "Arabic": {
      "etiology": "تتغير التوقيتات السمعية بناءً على حجم البطين الأيسر أثناء الدورة القلبية.",
      "goldStandard": "حالة شائعة تصيب الصمام الموجود بين الأذين الأيسر والبطين الأيسر.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تتغير التوقيتات السمعية بناءً على حجم البطين الأيسر أثناء الدورة القلبية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: uscultatory findings shift based on left ventricular volume during the cardiac cycle.",
      "goldStandard": "A common condition affecting the structure separating the left atrium and left ventricle.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Auscultatory findings shift based on left ventricular volume during the cardiac cycle."
    }
  },
  "w264": {
    "Arabic": {
      "etiology": "تنتج عن تفاعل عوامل التخثر، ركود الدم، وتضرر بطانة الأوعية، المعروفة بثالوث فيرشو.",
      "goldStandard": "تكون جلطة دموية داخل الأوردة العميقة، غالباً في الأطراف السفلية.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تنتج عن تفاعل عوامل التخثر، ركود الدم، وتضرر بطانة الأوعية، المعروفة بثالوث فيرشو."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: rises from the interaction of stasis, hypercoagulability, and endothelial injury, known as Virchow's triad.",
      "goldStandard": "Formation of a blood clot within deep veins, most commonly in the lower extremities.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Arises from the interaction of stasis, hypercoagulability, and endothelial injury, known as Virchow's triad."
    }
  },
  "w265": {
    "Arabic": {
      "etiology": "يُلاحظ غياب التغيرات النسيجية الدائمة في النوع الأولي.",
      "goldStandard": "اضطراب وعائي يؤثر على تدفق الدم إلى الأطراف استجابةً للبرد أو التوتر.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يُلاحظ غياب التغيرات النسيجية الدائمة في النوع الأولي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Permanent tissue changes are typically absent in the primary form.",
      "goldStandard": "Vascular disorder affecting blood flow to extremities in response to cold or stress.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Permanent tissue changes are typically absent in the primary form."
    }
  },
  "w266": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في بوجود علامة رينو في بدايته كعرض إضافي.",
      "goldStandard": "اضطراب وعائي التهابي مزمن يصيب الشرايين والأوردة الصغيرة والمتوسطة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتميز بوجود علامة رينو في بدايته كعرض إضافي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Often presents with vasospastic symptoms in the early stages.",
      "goldStandard": "Chronic inflammatory vascular disorder affecting small and medium-sized arteries and veins.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Often presents with vasospastic symptoms in the early stages."
    }
  },
  "w267": {
    "Arabic": {
      "etiology": "تؤدي إلى انخفاض النتاج القلبي بشكل حاد وخطير.",
      "goldStandard": "تجمع سائل في الجيب المحيط بالقلب مما يضغط على الحجرات القلبية.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تؤدي إلى انخفاض النتاج القلبي بشكل حاد وخطير."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Leads to a severe and critical reduction in cardiac output.",
      "goldStandard": "Fluid accumulation within the sac surrounding the heart, compressing cardiac chambers.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Leads to a severe and critical reduction in cardiac output."
    }
  },
  "w268": {
    "Arabic": {
      "etiology": "تتميز الفئة الضخامية بزيادة سماكة جدار البطين الأيسر، مما قد يسبب انسداد مخرج الدم.",
      "goldStandard": "مجموعة من الاضطرابات التي تؤدي إلى تغيرات هيكلية ووظيفية في عضلات القلب.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تتميز الفئة الضخامية بزيادة سماكة جدار البطين الأيسر، مما قد يسبب انسداد مخرج الدم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The hypertrophic form involves increased thickness of the left ventricular wall, potentially obstructing outflow.",
      "goldStandard": "A group of disorders leading to structural and functional changes in the heart muscle.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "The hypertrophic form involves increased thickness of the left ventricular wall, potentially obstructing outflow."
    }
  },
  "w269": {
    "Arabic": {
      "etiology": "تتطلب الخطة العلاجية دورات طويلة من المضادات الحيوية الوريدية المكثفة.",
      "goldStandard": "عدوى ميكروبية تصيب البطانة الداخلية للقلب أو الصمامات القلبية.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "تتطلب الخطة العلاجية دورات طويلة من المضادات الحيوية الوريدية المكثفة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Management requires prolonged courses of high-dose intravenous antibiotic therapy.",
      "goldStandard": "A microbial infection involving the inner lining of the heart or the cardiac valves.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "Management requires prolonged courses of high-dose intravenous antibiotic therapy."
    }
  },
  "w270": {
    "Arabic": {
      "etiology": "غالباً ما يكون النسبة بين انقباضات الأذين والبطين ثابتة، مثل اثنين إلى واحد.",
      "goldStandard": "نوع من أنواع اضطرابات نظم القلب التسرعي المنشأ من الأذينين.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "غالباً ما يكون النسبة بين انقباضات الأذين والبطين ثابتة، مثل اثنين إلى واحد."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The conduction ratio between the atria and ventricles is often fixed, such as two-to-one.",
      "goldStandard": "A type of supraventricular tachycardia originating from the atria.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "The conduction ratio between the atria and ventricles is often fixed, such as two-to-one."
    }
  },
  "w271": {
    "Arabic": {
      "etiology": "يمكن إجراء تدخل جراحي أو قسطري لإغلاق الوعاء بشكل دائم عند فشل الأدوية.",
      "goldStandard": "حالة قلبية وعائية تحدث نتيجة فشل القناة الوعائية الجنينية في الانغلاق بعد الولادة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يمكن إجراء تدخل جراحي أو قسطري لإغلاق الوعاء بشكل دائم عند فشل الأدوية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical or catheter-based interventions are performed for permanent closure when medication fails.",
      "goldStandard": "A cardiovascular condition resulting from the failure of a fetal vessel to close after birth.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Surgical or catheter-based interventions are performed for permanent closure when medication fails."
    }
  },
  "w272": {
    "Arabic": {
      "etiology": "تتنوع الخيارات العلاجية بين الليزر أو الترددات الراديوية أو الاستئصال الجراحي.",
      "goldStandard": "حالة شائعة تتميز بتوسع وتعرج الأوردة السطحية في الساقين.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتنوع الخيارات العلاجية بين الليزر أو الترددات الراديوية أو الاستئصال الجراحي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment options include endovenous laser, radiofrequency ablation, or surgical stripping.",
      "goldStandard": "A common condition characterized by dilated and tortuous superficial veins in the legs.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Treatment options include endovenous laser, radiofrequency ablation, or surgical stripping."
    }
  },
  "w273": {
    "Arabic": {
      "etiology": "يتم التركيز في الإدارة طويلة الأمد على التحكم في ضغط الدم والكوليسترول وتناول مضادات التجمع الصفيحي.",
      "goldStandard": "تحدث نوبة عصبية مؤقتة ناتجة عن اضطراب تروية الدم في الدماغ.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "يتم التركيز في الإدارة طويلة الأمد على التحكم في ضغط الدم والكوليسترول وتناول مضادات التجمع الصفيحي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Long-term management focuses on blood pressure control, lipid management, and antiplatelet therapy.",
      "goldStandard": "This event involves a temporary focal neurological deficit caused by impaired blood flow in the brain.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Long-term management focuses on blood pressure control, lipid management, and antiplatelet therapy."
    }
  },
  "w274": {
    "Arabic": {
      "etiology": "الاستجابة الكهربائية للعصب توفر معلومات تشخيصية حول مدى تضرر الألياف العصبية.",
      "goldStandard": "يحدث ضعف مفاجئ في العصب القحفي السابع يؤدي إلى شلل العضلات التعبيرية للوجه.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "الاستجابة الكهربائية للعصب توفر معلومات تشخيصية حول مدى تضرر الألياف العصبية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Electrophysiological studies of the nerve provide diagnostic insights into the extent of axonal damage.",
      "goldStandard": "Sudden onset of weakness in the seventh cranial nerve leads to paralysis of facial expression muscles.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Electrophysiological studies of the nerve provide diagnostic insights into the extent of axonal damage."
    }
  },
  "w275": {
    "Arabic": {
      "etiology": "طورت علاجات حديثة تعمل على تعديل الربط الجيني لتعزيز إنتاج البروتين المفقود.",
      "goldStandard": "تحدث نتيجة خلل جيني يؤدي إلى فقدان الخلايا العصبية الحركية في الحبل الشوكي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "طورت علاجات حديثة تعمل على تعديل الربط الجيني لتعزيز إنتاج البروتين المفقود."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Modern therapies utilize genetic splicing modification to enhance the production of the missing protein.",
      "goldStandard": "This condition results from a genetic defect leading to the loss of motor neurons in the spinal cord.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Modern therapies utilize genetic splicing modification to enhance the production of the missing protein."
    }
  },
  "w276": {
    "Arabic": {
      "etiology": "تعد البروتينات المسببة للمرض مقاومة للتعقيم الحراري والكيماوي المعتاد.",
      "goldStandard": "يعد اضطراباً دماغياً تنكسياً نادراً ومميتاً وسريع التطور.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "تعد البروتينات المسببة للمرض مقاومة للتعقيم الحراري والكيماوي المعتاد."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The causative proteins are resistant to conventional heat and chemical sterilization.",
      "goldStandard": "It is a rare, fatal, and rapidly progressive degenerative brain disorder.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "The causative proteins are resistant to conventional heat and chemical sterilization."
    }
  },
  "w277": {
    "Arabic": {
      "etiology": "يمكن أن تؤثر الحالة بشكل كبير على جودة الحياة والقدرة على التركيز اليومي.",
      "goldStandard": "اضطراب عصبي مزمن يؤثر على قدرة الدماغ على تنظيم دورات النوم والاستيقاظ.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "يمكن أن تؤثر الحالة بشكل كبير على جودة الحياة والقدرة على التركيز اليومي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The condition can significantly impact quality of life and daily cognitive focus.",
      "goldStandard": "A chronic neurological disorder affecting the brain's ability to regulate sleep-wake cycles.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "The condition can significantly impact quality of life and daily cognitive focus."
    }
  },
  "w278": {
    "Arabic": {
      "etiology": "تتضمن المضاعفات طويلة الأمد ضعفاً معرفياً مستمراً أو اضطرابات حركية.",
      "goldStandard": "يتميز بحدوث التهاب حاد في نسيج الدماغ المتني.",
      "firstLineRx": "العلاجات العصبية المتخصصة ومضادات الاختلاج أو الستيرويدات مع برامج التأهيل الوظيفي المستمر.",
      "keyDifferentiator": "تتضمن المضاعفات طويلة الأمد ضعفاً معرفياً مستمراً أو اضطرابات حركية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Long-term complications often include persistent cognitive impairment or movement disorders.",
      "goldStandard": "Characterized by acute inflammation of the brain parenchyma.",
      "firstLineRx": "Targeted neurological pharmacotherapy, anticonvulsants or immunosuppressants, and multidisciplinary neuro-rehabilitation.",
      "keyDifferentiator": "Long-term complications often include persistent cognitive impairment or movement disorders."
    }
  },
  "w279": {
    "Arabic": {
      "etiology": "يلعب العلاج السلوكي المعرفي دوراً محورياً في إعادة هيكلة الأفكار الكارثية.",
      "goldStandard": "تتجلى الحالة بنوبات مفاجئة ومكثفة من الخوف الشديد.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يلعب العلاج السلوكي المعرفي دوراً محورياً في إعادة هيكلة الأفكار الكارثية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Cognitive behavioral therapy is crucial for restructuring maladaptive catastrophic cognitions.",
      "goldStandard": "Manifests as sudden, intense episodes of overwhelming apprehension.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Cognitive behavioral therapy is crucial for restructuring maladaptive catastrophic cognitions."
    }
  },
  "w280": {
    "Arabic": {
      "etiology": "تستخدم جرعات أعلى من مضادات الاكتئاب المعتادة لتحقيق استجابة علاجية.",
      "goldStandard": "تتضمن الحالة أفكاراً متكررة وغير مرغوب فيها تسبب قلقاً شديداً.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تستخدم جرعات أعلى من مضادات الاكتئاب المعتادة لتحقيق استجابة علاجية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Higher doses of standard antidepressant medications are often required for symptom management.",
      "goldStandard": "Involves persistent, intrusive thoughts that cause significant distress.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Higher doses of standard antidepressant medications are often required for symptom management."
    }
  },
  "w281": {
    "Arabic": {
      "etiology": "تعد حاصرات مستقبلات الأدرينالين أحياناً جزءاً من استراتيجيات الوقاية الثانوية.",
      "goldStandard": "تنتج الحالة عن التعرض لحدث صادم أو تهديد جسيم للحياة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعد حاصرات مستقبلات الأدرينالين أحياناً جزءاً من استراتيجيات الوقاية الثانوية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: drenergic receptor antagonists are sometimes investigated for secondary prevention strategies.",
      "goldStandard": "Develops following exposure to a traumatic event or a severe life threat.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Adrenergic receptor antagonists are sometimes investigated for secondary prevention strategies."
    }
  },
  "w282": {
    "Arabic": {
      "etiology": "يساهم التدريب على الاسترخاء في تخفيف الأعراض الجسدية المصاحبة.",
      "goldStandard": "تتميز بقلق مستمر ومفرط حول مواضيع متعددة وأحداث الحياة اليومية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يساهم التدريب على الاسترخاء في تخفيف الأعراض الجسدية المصاحبة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Relaxation techniques and mindfulness training are commonly used to mitigate somatic tension.",
      "goldStandard": "Characterized by persistent, excessive apprehension about various daily life events.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Relaxation techniques and mindfulness training are commonly used to mitigate somatic tension."
    }
  },
  "w283": {
    "Arabic": {
      "etiology": "تتطلب إدارة دوائية بحاصرات بيتا غير الانتقائية لتقليل مخاطر النزيف.",
      "goldStandard": "تؤدي إلى زيادة المقاومة في تدفق الدم عبر الكبد.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "تتطلب إدارة دوائية بحاصرات بيتا غير الانتقائية لتقليل مخاطر النزيف."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Requires pharmacological management with non-selective beta-blockers to reduce bleeding risks.",
      "goldStandard": "Leads to increased resistance to blood flow through the liver.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Requires pharmacological management with non-selective beta-blockers to reduce bleeding risks."
    }
  },
  "w284": {
    "Arabic": {
      "etiology": "يرتبط بزيادة طفيفة في مخاطر الإصابة بأورام المريء الخبيثة.",
      "goldStandard": "يتميز بفشل ارتخاء العضلة العاصرة للمريء السفلية.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "يرتبط بزيادة طفيفة في مخاطر الإصابة بأورام المريء الخبيثة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ssociated with a slight increase in the risk of esophageal malignancy.",
      "goldStandard": "Characterized by the failure of the lower esophageal sphincter to relax.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Associated with a slight increase in the risk of esophageal malignancy."
    }
  },
  "w285": {
    "Arabic": {
      "etiology": "تتضمن التوصيات استخدام مثبطات مضخة البروتون لتقليل التهيج.",
      "goldStandard": "يحدث نتيجة التعرض المزمن لحمض المعدة في الجزء السفلي للمريء.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "تتضمن التوصيات استخدام مثبطات مضخة البروتون لتقليل التهيج."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Recommendations include the use of proton pump inhibitors to reduce chronic irritation.",
      "goldStandard": "Occurs due to chronic exposure of the distal esophagus to gastric acid.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Recommendations include the use of proton pump inhibitors to reduce chronic irritation."
    }
  },
  "w286": {
    "Arabic": {
      "etiology": "يعتمد التشخيص التفريقي على استبعاد الأسباب الأخرى لألم البطن السفلي.",
      "goldStandard": "يحدث نتيجة التهاب الأكياس الصغيرة في جدار القولون.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "يعتمد التشخيص التفريقي على استبعاد الأسباب الأخرى لألم البطن السفلي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Differential diagnosis relies on excluding other causes of lower abdominal pain.",
      "goldStandard": "Occurs due to inflammation of small pouches in the colon wall.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Differential diagnosis relies on excluding other causes of lower abdominal pain."
    }
  },
  "w287": {
    "Arabic": {
      "etiology": "يتم التدخل الجراحي عند وجود علامات على وجود غرغرينا.",
      "goldStandard": "يؤدي إلى توقف مرور المحتويات المعوية في المسار الهضمي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم التدخل الجراحي عند وجود علامات على وجود غرغرينا."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical intervention is indicated when there are signs of gangrene.",
      "goldStandard": "Leads to the cessation of the passage of intestinal contents through the digestive tract.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Surgical intervention is indicated when there are signs of gangrene."
    }
  },
  "w288": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في الفحص بوجود ألم عند القرع الخفيف وتوقف حركة الأمعاء تماماً.",
      "goldStandard": "حالة التهابية حادة تصيب الغشاء المبطن لتجويف البطن والأحشاء.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتميز الفحص بوجود ألم عند القرع الخفيف وتوقف حركة الأمعاء تماماً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Clinical assessment is characterized by extreme sensitivity to percussion and absent bowel sounds.",
      "goldStandard": "An acute inflammatory condition affecting the serous membrane lining the abdominal cavity.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Clinical assessment is characterized by extreme sensitivity to percussion and absent bowel sounds."
    }
  },
  "w289": {
    "Arabic": {
      "etiology": "يعد توسع القنوات الصفراوية في التصوير بالموجات فوق الصوتية علامة رئيسية.",
      "goldStandard": "عدوى بكتيرية حادة تصيب القنوات الناقلة للعصارة الصفراوية.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "يعد توسع القنوات الصفراوية في التصوير بالموجات فوق الصوتية علامة رئيسية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Dilation of the biliary tree on ultrasonography is a hallmark diagnostic finding.",
      "goldStandard": "An acute bacterial infection involving the ducts that transport bile.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Dilation of the biliary tree on ultrasonography is a hallmark diagnostic finding."
    }
  },
  "w290": {
    "Arabic": {
      "etiology": "تظهر خزعة الكبد وجود تدمير في القنوات الصفراوية مع ارتشاح لمفاوي.",
      "goldStandard": "اضطراب مناعي مزمن يؤدي إلى تدمير القنوات الصفراوية داخل الكبد.",
      "firstLineRx": "مثبطات مضخة البروتون (PPIs)، تعويض السوائل الوريدية، والتعديل الغذائي أو التدخل التنظيري/الجراحي.",
      "keyDifferentiator": "تظهر خزعة الكبد وجود تدمير في القنوات الصفراوية مع ارتشاح لمفاوي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Histopathological examination reveals ductal destruction accompanied by lymphocytic infiltration.",
      "goldStandard": "A chronic autoimmune disorder characterized by the destruction of intrahepatic bile ducts.",
      "firstLineRx": "Proton pump inhibitors, intravenous volume restoration, and targeted endoscopic or surgical intervention.",
      "keyDifferentiator": "Histopathological examination reveals ductal destruction accompanied by lymphocytic infiltration."
    }
  },
  "w291": {
    "Arabic": {
      "etiology": "ينتج عن تحويل الدم الوريدي عن الكبد دون تنقيته من السموم الاستقلابية.",
      "goldStandard": "خلل في الوظائف الإدراكية يحدث بسبب فشل الكبد في التخلص من السموم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "ينتج عن تحويل الدم الوريدي عن الكبد دون تنقيته من السموم الاستقلابية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Occurs due to shunting of blood away from the liver, bypassing metabolic detoxification.",
      "goldStandard": "A neuropsychiatric abnormality resulting from the failure of the liver to clear systemic toxins.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Occurs due to shunting of blood away from the liver, bypassing metabolic detoxification."
    }
  },
  "w292": {
    "Arabic": {
      "etiology": "يجب تمييزها سريرياً عن تضخم العقد اللمفاوية أو الخصية الهاجرة.",
      "goldStandard": "بروز غير طبيعي للأحشاء عبر منطقة ضعيفة في جدار البطن.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يجب تمييزها سريرياً عن تضخم العقد اللمفاوية أو الخصية الهاجرة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Must be clinically differentiated from lymphadenopathy or undescended testes.",
      "goldStandard": "An abnormal protrusion of abdominal viscera through a weakness in the abdominal wall.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Must be clinically differentiated from lymphadenopathy or undescended testes."
    }
  },
  "w293": {
    "Arabic": {
      "etiology": "يمكن أن يؤدي فرط الكالسيوم في الدم والبول بسبب زيادة حساسية فيتامين د.",
      "goldStandard": "يتميز بوجود تجمعات خلوية غير متنخرة في مختلف أنحاء الجسم.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "يمكن أن يؤدي فرط الكالسيوم في الدم والبول بسبب زيادة حساسية فيتامين د."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Hypercalcemia and hypercalciuria may arise from hypersensitivity to vitamin D metabolites.",
      "goldStandard": "Characterized by the presence of non-caseating granulomatous clusters throughout the body.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "Hypercalcemia and hypercalciuria may arise from hypersensitivity to vitamin D metabolites."
    }
  },
  "w294": {
    "Arabic": {
      "etiology": "النمط النسيجي المسمى تضخم قرص العسل في الرئتين يظهر في مراحل متأخرة من التصوير الإشعاعي.",
      "goldStandard": "حالة تنكسية مزمنة تؤثر على النسيج الخلالي في الرئتين.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "النمط النسيجي المسمى تضخم قرص العسل في الرئتين يظهر في مراحل متأخرة من التصوير الإشعاعي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Radiographic findings in advanced stages typically demonstrate a honeycomb lung pattern.",
      "goldStandard": "A progressive chronic degenerative condition affecting the interstitial tissue of the lungs.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "Radiographic findings in advanced stages typically demonstrate a honeycomb lung pattern."
    }
  },
  "w295": {
    "Arabic": {
      "etiology": "يُعد الضغط الهوائي الإيجابي المستمر العلاج الذهبي الموصى به للمصابين.",
      "goldStandard": "اضطراب متكرر يؤدي إلى توقف التنفس أثناء فترة النوم.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "يُعد الضغط الهوائي الإيجابي المستمر العلاج الذهبي الموصى به للمصابين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Continuous positive airway pressure remains the gold standard treatment for affected individuals.",
      "goldStandard": "A repetitive disorder resulting in cessation of breathing during nocturnal sleep periods.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "Continuous positive airway pressure remains the gold standard treatment for affected individuals."
    }
  },
  "w296": {
    "Arabic": {
      "etiology": "غالباً ما تتطلب الإدارة الطبية مسكنات للألم وعلاج المسبب الأساسي.",
      "goldStandard": "التهاب يصيب الغشاء المبطن للتجويف الصدري.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "غالباً ما تتطلب الإدارة الطبية مسكنات للألم وعلاج المسبب الأساسي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Management typically requires analgesics and treatment of the underlying etiology.",
      "goldStandard": "An inflammatory condition involving the lining membrane of the thoracic cavity.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "Management typically requires analgesics and treatment of the underlying etiology."
    }
  },
  "w297": {
    "Arabic": {
      "etiology": "الاستخدام المفرط للكافيين يمكن أن يزيد من جفاف الأنسجة المتهيجة.",
      "goldStandard": "التهاب حاد في بنية الحنجرة يؤدي إلى تغير في الصوت.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "الاستخدام المفرط للكافيين يمكن أن يزيد من جفاف الأنسجة المتهيجة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Excessive caffeine consumption can exacerbate the dryness of the irritated tissues.",
      "goldStandard": "Acute inflammation of the laryngeal structures leading to vocal alterations.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Excessive caffeine consumption can exacerbate the dryness of the irritated tissues."
    }
  },
  "w298": {
    "Arabic": {
      "etiology": "تُشير مستويات نازعة هيدروجين اللاكتات العالية في العينة المسحوبة إلى وجود تدرك خلوي واسع.",
      "goldStandard": "حالة التهابية تتضمن تراكم السوائل قيحية في الحيز التشريحي المحيط بالرئة.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "تُشير مستويات نازعة هيدروجين اللاكتات العالية في العينة المسحوبة إلى وجود تدرك خلوي واسع."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: High levels of lactate dehydrogenase in the aspirated sample indicate extensive cellular breakdown.",
      "goldStandard": "An inflammatory condition involving the accumulation of purulent fluid in the anatomic space surrounding the lung.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "High levels of lactate dehydrogenase in the aspirated sample indicate extensive cellular breakdown."
    }
  },
  "w299": {
    "Arabic": {
      "etiology": "يتم استبعاد الأسباب العضوية الخطيرة كالانصمام الرئوي قبل تأكيد التشخيص الوظيفي.",
      "goldStandard": "حالة سريرية تتميز بزيادة في معدل أو عمق التنفس بما يتجاوز احتياجات التمثيل الغذائي للجسم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتم استبعاد الأسباب العضوية الخطيرة كالانصمام الرئوي قبل تأكيد التشخيص الوظيفي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Serious organic causes like pulmonary embolism must be excluded before confirming a functional diagnosis.",
      "goldStandard": "A clinical condition characterized by an increase in respiratory rate or depth exceeding the body metabolic requirements.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Serious organic causes like pulmonary embolism must be excluded before confirming a functional diagnosis."
    }
  },
  "w300": {
    "Arabic": {
      "etiology": "تظهر علامات احتقان وريدي جهازي عند وصول الحالة إلى مراحل الفشل البطيني الأيمن المتقدم.",
      "goldStandard": "ارتفاع غير طبيعي في ضغط الدم داخل الشرايين التي تغذي الرئتين.",
      "firstLineRx": "العلاج الاستنشاقي الموسع للشعب الهوائية، الستيرويدات، ودعم الأكسجة مع معالجة المسبب الرئيسي.",
      "keyDifferentiator": "تظهر علامات احتقان وريدي جهازي عند وصول الحالة إلى مراحل الفشل البطيني الأيمن المتقدم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Signs of systemic venous congestion appear when the condition reaches advanced right ventricular failure stages.",
      "goldStandard": "Abnormally elevated blood pressure within the arteries that supply the lungs.",
      "firstLineRx": "Inhaled bronchodilators, corticosteroids, controlled oxygen delivery, and smoking cessation.",
      "keyDifferentiator": "Signs of systemic venous congestion appear when the condition reaches advanced right ventricular failure stages."
    }
  },
  "w301": {
    "Arabic": {
      "etiology": "يمكن أن تتطور إلى فشل كلوي دائم إذا طال أمد الضرر الخلوي دون تدخل.",
      "goldStandard": "سبب رئيسي للفشل الكلوي المفاجئ نتيجة حدوث ضرر خلوي في الوحدة الوظيفية للكلى.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يمكن أن تتطور إلى فشل كلوي دائم إذا طال أمد الضرر الخلوي دون تدخل."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Can progress to permanent renal failure if the cellular damage persists without intervention.",
      "goldStandard": "A leading cause of sudden kidney failure resulting from cellular damage in the functional unit of the kidney.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Can progress to permanent renal failure if the cellular damage persists without intervention."
    }
  },
  "w302": {
    "Arabic": {
      "etiology": "يتطلب تدبير المرض متابعة دورية لضبط ضغط الدم وتخفيف الضغط على النسيج المتبقي.",
      "goldStandard": "اضطراب وراثي يؤدي إلى نمو أكياس متعددة ومملوءة بالسوائل في أنسجة العضو المسؤول عن تصفية الدم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يتطلب تدبير المرض متابعة دورية لضبط ضغط الدم وتخفيف الضغط على النسيج المتبقي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Disease management requires periodic monitoring to control blood pressure and reduce pressure on the remaining parenchyma.",
      "goldStandard": "A genetic disorder leading to the development of numerous fluid-filled sacs within the tissue of the organ responsible for blood filtration.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Disease management requires periodic monitoring to control blood pressure and reduce pressure on the remaining parenchyma."
    }
  },
  "w303": {
    "Arabic": {
      "etiology": "يُعتقد أن خللًا في الطبقة المخاطية الواقية المبطنة للجدار العضلي يساهم في نفاذية الأنسجة للمواد المهيجة.",
      "goldStandard": "حالة مزمنة تتضمن ألمًا في منطقة الحوض وتكرارًا في الحاجة للتبول.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يُعتقد أن خللًا في الطبقة المخاطية الواقية المبطنة للجدار العضلي يساهم في نفاذية الأنسجة للمواد المهيجة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Pathogenesis involves a compromised glycosaminoglycan layer leading to increased permeability of the urothelium.",
      "goldStandard": "A chronic condition involving pelvic pain and frequent urge to void.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Pathogenesis involves a compromised glycosaminoglycan layer leading to increased permeability of the urothelium."
    }
  },
  "w304": {
    "Arabic": {
      "etiology": "تعتبر البكتيريا المنتجة لليورياز سببًا رئيسيًا في تكوين حصوات الستروفيت المرتبطة بالعدوى المتكررة.",
      "goldStandard": "تتكون كتل صلبة من ترسبات الأملاح والمعادن داخل المسالك البولية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعتبر البكتيريا المنتجة لليورياز سببًا رئيسيًا في تكوين حصوات الستروفيت المرتبطة بالعدوى المتكررة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Urease-producing bacteria are the underlying cause of struvite formations associated with recurrent infections.",
      "goldStandard": "Solid deposits of minerals and salts form within the urinary tract system.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Urease-producing bacteria are the underlying cause of struvite formations associated with recurrent infections."
    }
  },
  "w305": {
    "Arabic": {
      "etiology": "يستخدم فحص البول المقسم (قبل وبعد التدليك) لتحديد مكان الالتهاب بدقة.",
      "goldStandard": "التهاب يصيب غدة تناسلية ذكرية مسؤولة عن إفراز جزء من السائل المنوي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يستخدم فحص البول المقسم (قبل وبعد التدليك) لتحديد مكان الالتهاب بدقة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The Meares-Stamey four-glass test is historically utilized to localize the inflammatory source.",
      "goldStandard": "Inflammation affecting a male accessory gland involved in semen production.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The Meares-Stamey four-glass test is historically utilized to localize the inflammatory source."
    }
  },
  "w306": {
    "Arabic": {
      "etiology": "تتطلب الحالات الشديدة تدخلًا جراحيًا لإعادة زرع الحالب ومنع حدوث الجزر.",
      "goldStandard": "حالة طبية يحدث فيها عودة غير طبيعية للبول من المثانة إلى الحالبين.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتطلب الحالات الشديدة تدخلًا جراحيًا لإعادة زرع الحالب ومنع حدوث الجزر."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: High-grade cases may necessitate surgical ureteral reimplantation to definitively correct the valvular insufficiency.",
      "goldStandard": "A condition characterized by the abnormal retrograde flow of urine from the bladder into the ureters.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "High-grade cases may necessitate surgical ureteral reimplantation to definitively correct the valvular insufficiency."
    }
  },
  "w307": {
    "Arabic": {
      "etiology": "تساهم العوامل الميكانيكية والالتهابية في تحفيز الخلايا على إنتاج فائض من المصفوفة خارج الخلية.",
      "goldStandard": "عملية مرضية تتضمن زيادة تراكم الأنسجة الندبية داخل وحدات الترشيح الكلوية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تساهم العوامل الميكانيكية والالتهابية في تحفيز الخلايا على إنتاج فائض من المصفوفة خارج الخلية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Mechanical and inflammatory signaling pathways induce cellular production of excess extracellular matrix components.",
      "goldStandard": "A pathological process involving the progressive accumulation of scar tissue within renal filtration units.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Mechanical and inflammatory signaling pathways induce cellular production of excess extracellular matrix components."
    }
  },
  "w308": {
    "Arabic": {
      "etiology": "خلل مناعي ذاتي أو مقاومة محيطية للإنسولين تؤدي لنقص نسبي أو مطلق في إفرازه من خلايا بيتا البنكرياسية.",
      "goldStandard": "حالة استقلابية حادة تتسم بارتفاع سكر الدم مع وجود حموضة.",
      "firstLineRx": "تعديل نمط الحياة والحمية + الميتفورمين (Metformin) للنوع الثاني، والإنسولين للنوع الأول مع ضبط مستمر للسكر.",
      "keyDifferentiator": "يستهدف العلاج استبدال السوائل الوريدية وتصحيح اضطراب الأملاح وتوفير الأنسولين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment involves aggressive intravenous fluid resuscitation, electrolyte correction, and insulin infusion.",
      "goldStandard": "An acute metabolic state characterized by hyperglycemia and metabolic acidosis.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Treatment involves aggressive intravenous fluid resuscitation, electrolyte correction, and insulin infusion."
    }
  },
  "w309": {
    "Arabic": {
      "etiology": "تتطلب الحالة تعويضاً هرمونياً مستمراً مدى الحياة لجميع المحاور الغدية المتأثرة.",
      "goldStandard": "قصور وظيفي في الغدة النخامية ينتج عن فقدان دم حاد أثناء الولادة.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "تتطلب الحالة تعويضاً هرمونياً مستمراً مدى الحياة لجميع المحاور الغدية المتأثرة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Requires lifelong hormone replacement therapy for all affected endocrine axes.",
      "goldStandard": "Pituitary dysfunction resulting from severe hemorrhage during childbirth.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Requires lifelong hormone replacement therapy for all affected endocrine axes."
    }
  },
  "w310": {
    "Arabic": {
      "etiology": "العلاج الجذري يكون عبر الاستئصال الجراحي للغدة المصابة أو تثبيط المستقبلات دوائياً.",
      "goldStandard": "اضطراب غدي يؤدي إلى ارتفاع ضغط الدم الثانوي غير المستجيب للعلاجات التقليدية.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "العلاج الجذري يكون عبر الاستئصال الجراحي للغدة المصابة أو تثبيط المستقبلات دوائياً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Definitive management involves surgical resection or pharmacological receptor antagonism.",
      "goldStandard": "Endocrine disorder causing secondary hypertension resistant to conventional treatment.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Definitive management involves surgical resection or pharmacological receptor antagonism."
    }
  },
  "w311": {
    "Arabic": {
      "etiology": "لا يوجد دور للمضادات الحيوية في علاج هذه الحالة الالتهابية.",
      "goldStandard": "حالة التهابية للغدة الدرقية تبدأ غالباً بعد الإصابة بعدوى فيروسية في الجهاز التنفسي.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "لا يوجد دور للمضادات الحيوية في علاج هذه الحالة الالتهابية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ntibiotics are ineffective in the management of this inflammatory pathology.",
      "goldStandard": "Inflammatory condition of the thyroid gland often following an upper respiratory viral infection.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Antibiotics are ineffective in the management of this inflammatory pathology."
    }
  },
  "w312": {
    "Arabic": {
      "etiology": "لا يوجد استجابة هرمونية في حال كان المسبب غياب الغدد المسؤولة عن تنظيم المعادن.",
      "goldStandard": "حالة سريرية ناتجة عن نقص في نشاط الهرمون المنظم للكالسيوم.",
      "firstLineRx": "العلاج الهرموني التعويضي أو المثبط المتخصص، مع متابعة دورية للمؤشرات الحيوية وتحاليل الدم.",
      "keyDifferentiator": "لا يوجد استجابة هرمونية في حال كان المسبب غياب الغدد المسؤولة عن تنظيم المعادن."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Hormonal response is absent if the etiology is the surgical removal of the parathyroid glands.",
      "goldStandard": "Clinical state resulting from deficient activity of the calcium-regulating hormone.",
      "firstLineRx": "Targeted endocrine replacement or suppressive hormonal pharmacotherapy with longitudinal clinical monitoring.",
      "keyDifferentiator": "Hormonal response is absent if the etiology is the surgical removal of the parathyroid glands."
    }
  },
  "w313": {
    "Arabic": {
      "etiology": "يرتبط أحياناً بوجود طفرة في جين KISSR أو GNPR5.",
      "goldStandard": "ظهور العلامات الجنسية الثانوية قبل سن الثامنة لدى الإناث.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يرتبط أحياناً بوجود طفرة في جين KISSR أو GNPR5."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Sometimes associated with activating mutations in KISSR or GNPR5 genes.",
      "goldStandard": "Development of secondary sexual characteristics before age eight in females.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Sometimes associated with activating mutations in KISSR or GNPR5 genes."
    }
  },
  "w314": {
    "Arabic": {
      "etiology": "يرتبط بوجود أليل HLA-DR3 و HLA-DRW52.",
      "goldStandard": "تلف مناعي ذاتي في الغدد المفرزة للدموع واللعاب.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يرتبط بوجود أليل HLA-DR3 و HLA-DRW52."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Linked to the presence of HLA-DR3 and HLA-DRW52 alleles.",
      "goldStandard": "Autoimmune destruction of lacrimal and salivary glands.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Linked to the presence of HLA-DR3 and HLA-DRW52 alleles."
    }
  },
  "w315": {
    "Arabic": {
      "etiology": "تظهر ميزة 'وجه القناع' نتيجة تيبس الجلد.",
      "goldStandard": "اضطراب مناعي ذاتي يتسم بتليف الجلد والأعضاء الداخلية.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "تظهر ميزة 'وجه القناع' نتيجة تيبس الجلد."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Development of a mask-like facies due to skin tautness.",
      "goldStandard": "Autoimmune disorder characterized by fibrosis of skin and internal organs.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Development of a mask-like facies due to skin tautness."
    }
  },
  "w316": {
    "Arabic": {
      "etiology": "يرتبط بوجود أليل HLA-DR4.",
      "goldStandard": "ألم وتصلب في العضلات القريبة لدى كبار السن.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "يرتبط بوجود أليل HLA-DR4."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Genetically associated with the HLA-DR4 allele.",
      "goldStandard": "Muscle pain and stiffness in the proximal regions among the elderly.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Genetically associated with the HLA-DR4 allele."
    }
  },
  "w317": {
    "Arabic": {
      "etiology": "يعتبر البايفوسفونيت العلاج الأساسي لتقليل نشاط الخلايا العظمية.",
      "goldStandard": "اضطراب أيضي عظمي يتميز بزيادة غير منظمة في إعادة البناء.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتبر البايفوسفونيت العلاج الأساسي لتقليل نشاط الخلايا العظمية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Bisphosphonates are the primary treatment to suppress osteoclastic activity.",
      "goldStandard": "Metabolic bone disorder characterized by disorganized bone remodeling.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Bisphosphonates are the primary treatment to suppress osteoclastic activity."
    }
  },
  "w318": {
    "Arabic": {
      "etiology": "تعتبر معظم الحالات مجهولة السبب ولكن هناك نماذج عصبية عضلية مرافقة.",
      "goldStandard": "تظهر غالباً في مرحلة النمو السريع أثناء الطفولة والمراهقة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعتبر معظم الحالات مجهولة السبب ولكن هناك نماذج عصبية عضلية مرافقة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Most cases are idiopathic, though neuromuscular variants also exist.",
      "goldStandard": "Often manifests during rapid growth spurts in childhood and adolescence.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Most cases are idiopathic, though neuromuscular variants also exist."
    }
  },
  "w319": {
    "Arabic": {
      "etiology": "يعد المرضى الذين يعانون من السكري أو ضعف المناعة أكثر عرضة للإصابة.",
      "goldStandard": "تحدث نتيجة غزو بكتيري أو فطري لأنسجة العظم ونخاعه.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعد المرضى الذين يعانون من السكري أو ضعف المناعة أكثر عرضة للإصابة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Patients with diabetes or immunocompromised states are at significantly higher risk.",
      "goldStandard": "Occurs due to bacterial or fungal invasion of bone and marrow tissue.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Patients with diabetes or immunocompromised states are at significantly higher risk."
    }
  },
  "w320": {
    "Arabic": {
      "etiology": "يعد قطع الرباط الرسغي المستعرض جراحياً الخيار النهائي لتحرير العصب.",
      "goldStandard": "ينتج عن انضغاط العصب المتوسط داخل ممر ضيق في المعصم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعد قطع الرباط الرسغي المستعرض جراحياً الخيار النهائي لتحرير العصب."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Surgical release of the transverse carpal ligament is the definitive intervention.",
      "goldStandard": "Results from compression of the median nerve within a narrow anatomical space.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Surgical release of the transverse carpal ligament is the definitive intervention."
    }
  },
  "w321": {
    "Arabic": {
      "etiology": "يمكن أن تكون المضاعفات الثانوية مثل العدوى البكتيرية مهددة للحياة.",
      "goldStandard": "اضطراب مناعي ذاتي نادر يهاجم الروابط بين الخلايا البشرية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يمكن أن تكون المضاعفات الثانوية مثل العدوى البكتيرية مهددة للحياة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Secondary complications such as severe bacterial infections can be life-threatening.",
      "goldStandard": "A rare autoimmune disorder attacking intercellular adhesion proteins.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Secondary complications such as severe bacterial infections can be life-threatening."
    }
  },
  "w322": {
    "Arabic": {
      "etiology": "تظهر الخزعة الجلدية ارتشاحاً خفيفاً للخلايا اللمفاوية مع تضخم طفيف.",
      "goldStandard": "حالة التهابية مزمنة تظهر غالباً في سنوات الطفولة الأولى.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تظهر الخزعة الجلدية ارتشاحاً خفيفاً للخلايا اللمفاوية مع تضخم طفيف."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Histopathology reveals mild lymphocytic infiltration and slight epidermal hyperplasia.",
      "goldStandard": "A chronic inflammatory condition commonly manifesting in early childhood.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Histopathology reveals mild lymphocytic infiltration and slight epidermal hyperplasia."
    }
  },
  "w323": {
    "Arabic": {
      "etiology": "يلاحظ ارتشاح لمفاوي شريطي الشكل في طبقة الأدمة العلوية تحت الفحص النسيجي.",
      "goldStandard": "يتميز بظهور طفح جلدي التهابي مزمن.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يلاحظ ارتشاح لمفاوي شريطي الشكل في طبقة الأدمة العلوية تحت الفحص النسيجي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: band-like lymphocytic infiltration is noted in the upper dermis upon histological evaluation.",
      "goldStandard": "Characterized by the appearance of a chronic inflammatory skin eruption.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A band-like lymphocytic infiltration is noted in the upper dermis upon histological evaluation."
    }
  },
  "w324": {
    "Arabic": {
      "etiology": "تتطلب العلاج بمضادات حيوية موضعية أو جهازية لمنع المضاعفات.",
      "goldStandard": "عدوى جلدية سطحية معدية للغاية وشائعة بين الأطفال.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتطلب العلاج بمضادات حيوية موضعية أو جهازية لمنع المضاعفات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Requires topical or systemic antibiotic treatment to prevent complications.",
      "goldStandard": "A highly contagious superficial skin infection common among children.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Requires topical or systemic antibiotic treatment to prevent complications."
    }
  },
  "w325": {
      "Arabic": {
          "etiology": "تحول خمائر الملاسيزية الفطرية الطبيعية المحبة للدهن (Malassezia furfur) إلى الطور الخيطي الإمراضي في الطقس الحار الرطب.",
          "goldStandard": "فحص كشاطة الجلد المباشر بمحلول هيدروكسيد البوتاسيوم (KOH) مع رؤية خيوط وأبواغ 'السباغيتي وكرات اللحم'.",
          "firstLineRx": "مضادات الفطريات الموضعية (شامبو كبريتيد السيلينيوم 2.5% أو كيتوكونازول) ومضادات الفطريات الفموية للحالات المعندة.",
          "keyDifferentiator": "بقع صبغية متباينة غير حاكة تتقشر بفركها خفيفاً وتظهر مجهرياً بمظهر 'السباغيتي وكرات اللحم' المميز."
      },
      "English": {
          "etiology": "Opportunistic conversion of lipid-dependent commensal Malassezia furfur yeast to hyphal parasitic form in hot, humid climates.",
          "goldStandard": "Potassium hydroxide (KOH) examination of skin scales displaying short hyphae and yeast cells ('spaghetti and meatballs').",
          "firstLineRx": "Topical antifungal formulations (selenium sulfide 2.5% lotion, ketoconazole shampoo) or oral azoles for extensive disease.",
          "keyDifferentiator": "Hypopigmented or hyperpigmented scaling macules on the trunk exhibiting classic 'spaghetti and meatballs' on KOH preparation."
      }
  },
  "w326": {
    "Arabic": {
      "etiology": "تتضمن خيارات التدبير التحكم في المحفزات واستخدام العلاجات الموضعية المضادة للالتهاب.",
      "goldStandard": "اضطراب جلدي مزمن يصيب الوجه ويتميز باحمرار وتوسع الأوعية.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتضمن خيارات التدبير التحكم في المحفزات واستخدام العلاجات الموضعية المضادة للالتهاب."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Management options include controlling triggers and using topical anti-inflammatory therapies.",
      "goldStandard": "A chronic dermatological disorder affecting the face, characterized by redness and vascular dilation.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Management options include controlling triggers and using topical anti-inflammatory therapies."
    }
  },
  "w327": {
    "Arabic": {
      "etiology": "يعتمد البروتوكول العلاجي على الجراحة، الكيماوي، أو العلاج الموجه.",
      "goldStandard": "نمو خبيث ينشأ في الأمعاء الغليظة أو المستقيم.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يعتمد البروتوكول العلاجي على الجراحة، الكيماوي، أو العلاج الموجه."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Treatment protocols involve surgery, chemotherapy, or targeted therapy.",
      "goldStandard": "A malignant growth arising in the large intestine or the rectum.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Treatment protocols involve surgery, chemotherapy, or targeted therapy."
    }
  },
  "w328": {
    "Arabic": {
      "etiology": "يتم فحص العلامة الورمية سي أيه 19-9 لمراقبة الاستجابة للعلاج.",
      "goldStandard": "تعتبر هذه الحالة أحد أكثر أنواع الأورام الخبيثة فتكاً في الجهاز الهضمي.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يتم فحص العلامة الورمية سي أيه 19-9 لمراقبة الاستجابة للعلاج."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The tumor marker CA 19-9 is utilized to monitor response to therapeutic regimens.",
      "goldStandard": "This condition is considered one of the most lethal malignancies of the digestive system.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "The tumor marker CA 19-9 is utilized to monitor response to therapeutic regimens."
    }
  },
  "w329": {
    "Arabic": {
      "etiology": "يُستخدم العلاج الكيميائي بمادة تيموزولوميد كجزء من البروتوكول القياسي بعد الجراحة.",
      "goldStandard": "هو أكثر أنواع أورام الدماغ الأولية شيوعاً وعدوانية لدى البالغين.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يُستخدم العلاج الكيميائي بمادة تيموزولوميد كجزء من البروتوكول القياسي بعد الجراحة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Standard care involves surgical resection followed by temozolomide chemotherapy.",
      "goldStandard": "This is the most common and aggressive primary brain malignancy in adults.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Standard care involves surgical resection followed by temozolomide chemotherapy."
    }
  },
  "w330": {
    "Arabic": {
      "etiology": "يتطلب العلاج بروتوكولاً مكثفاً يجمع بين الجراحة والاستئصال الورمي الكيميائي.",
      "goldStandard": "هو أكثر أنواع سرطانات العظام الأولية شيوعاً لدى الأطفال والمراهقين.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يتطلب العلاج بروتوكولاً مكثفاً يجمع بين الجراحة والاستئصال الورمي الكيميائي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Management requires a multimodal approach combining surgery and neoadjuvant chemotherapy.",
      "goldStandard": "This is the most frequent primary malignant bone tumor in children and adolescents.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Management requires a multimodal approach combining surgery and neoadjuvant chemotherapy."
    }
  },
  "w331": {
    "Arabic": {
      "etiology": "يتم تصنيفه بناءً على نظام التقييم الدولي لحالات الجهاز العصبي الودي.",
      "goldStandard": "ينشأ هذا الورم من خلايا العرف العصبي في الجهاز العصبي الودي.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يتم تصنيفه بناءً على نظام التقييم الدولي لحالات الجهاز العصبي الودي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Staging is determined by the International this condition Staging System.",
      "goldStandard": "It arises from the neural crest cells of the sympathetic nervous system.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Staging is determined by the International this condition Staging System."
    }
  },
  "w332": {
    "Arabic": {
      "etiology": "يتم الاعتماد على نظام المجموعة الوطنية للأورام لدراسة النتائج وتصنيفها.",
      "goldStandard": "يعد الورم الكلوي الأكثر شيوعاً عند الأطفال.",
      "firstLineRx": "الخطة متعددة التخصصات المنسقة بين الجراحة الاستئصالية والعلاج الكيميائي والإشعاعي أو الموجه.",
      "keyDifferentiator": "يتم الاعتماد على نظام المجموعة الوطنية للأورام لدراسة النتائج وتصنيفها."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Staging protocols from national oncology groups are used to guide treatment intensity.",
      "goldStandard": "This is the most common renal malignancy occurring in pediatric patients.",
      "firstLineRx": "Multidisciplinary treatment plan integrating surgical resection, chemotherapy, radiation, or targeted immunotherapy.",
      "keyDifferentiator": "Staging protocols from national oncology groups are used to guide treatment intensity."
    }
  },
  "w333": {
    "Arabic": {
      "etiology": "يظهر تحليل النخاع فراغاً خلوياً مع غياب التليف.",
      "goldStandard": "تتميز هذه الحالة بفشل شامل في نخاع العظم.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يظهر تحليل النخاع فراغاً خلوياً مع غياب التليف."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Marrow analysis shows hypocellularity without evidence of fibrosis or malignancy.",
      "goldStandard": "This condition is characterized by a global failure of the bone marrow.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Marrow analysis shows hypocellularity without evidence of fibrosis or malignancy."
    }
  },
  "w334": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في هذه الحالة أحياناً إلى تليف في النخاع أو مرحلة حادة.",
      "goldStandard": "تتسم هذه الحالة بزيادة مفرطة في إنتاج كريات الدم الحمراء.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "تتحول هذه الحالة أحياناً إلى تليف في النخاع أو مرحلة حادة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The condition may occasionally evolve into myelofibrosis or a leukemic phase.",
      "goldStandard": "This condition is marked by an excessive production of red blood cells.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "The condition may occasionally evolve into myelofibrosis or a leukemic phase."
    }
  },
  "w335": {
    "Arabic": {
      "etiology": "يحدث تطاول في زمن النزف بينما تظل اختبارات التخثر الأخرى طبيعية.",
      "goldStandard": "تتمثل هذه الحالة بانخفاض عدد الصفيحات في الدورة الدموية.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يحدث تطاول في زمن النزف بينما تظل اختبارات التخثر الأخرى طبيعية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Bleeding time is typically prolonged while other coagulation parameters remain normal.",
      "goldStandard": "This condition consists of a decreased count of circulating platelets.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Bleeding time is typically prolonged while other coagulation parameters remain normal."
    }
  },
  "w336": {
    "Arabic": {
      "etiology": "يعد التوازن الهش بين التجلط والنزف هو السمة المميزة سريرياً.",
      "goldStandard": "تعتبر هذه الحالة اضطراباً استهلاكياً حاداً في آليات تجلط الدم.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يعد التوازن الهش بين التجلط والنزف هو السمة المميزة سريرياً."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The delicate clinical balance between widespread thrombosis and bleeding is hallmark.",
      "goldStandard": "This is an acute consumptive disorder of the blood clotting mechanisms.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "The delicate clinical balance between widespread thrombosis and bleeding is hallmark."
    }
  },
  "w337": {
    "Arabic": {
      "etiology": "يتم العلاج عادة عبر إعطاء الفيتامين المفقود عن طريق الحقن.",
      "goldStandard": "ينتج هذا المرض عن نقص في امتصاص فيتامين حيوي من الأمعاء.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يتم العلاج عادة عبر إعطاء الفيتامين المفقود عن طريق الحقن."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Management typically involves intramuscular administration of the missing vitamin.",
      "goldStandard": "This disease results from a deficiency in the absorption of a vital vitamin from the gut.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Management typically involves intramuscular administration of the missing vitamin."
    }
  },
  "w338": {
    "Arabic": {
      "etiology": "يؤدي تفعيل المكمل عبر المسار الكلاسيكي إلى انحلال الدم داخل الأوعية في بعض الحالات الشديدة.",
      "goldStandard": "يؤدي هذا الاضطراب إلى تدمير مبكر لخلايا الدم الحمراء بواسطة الجهاز المناعي.",
      "firstLineRx": "نقل الدم ومشتقاته الداعم، ومكملات تصنيع الدم، أو كبت المناعة وزراعة الخلايا الجذعية.",
      "keyDifferentiator": "يؤدي تفعيل المكمل عبر المسار الكلاسيكي إلى انحلال الدم داخل الأوعية في بعض الحالات الشديدة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ctivation of the complement system via the classical pathway leads to intravascular hemolysis.",
      "goldStandard": "This disorder involves premature destruction of red blood cells by the immune system.",
      "firstLineRx": "Supportive blood product transfusions, hematinic supplementation, or immunosuppression / allogeneic stem cell transplant.",
      "keyDifferentiator": "Activation of the complement system via the classical pathway leads to intravascular hemolysis."
    }
  },
  "w339": {
    "Arabic": {
      "etiology": "قد يؤدي تجاهل العلاج إلى استقرار الميكروب في المرارة مما يخلق حالة حامل مزمن.",
      "goldStandard": "عدوى بكتيرية جهازية تنتقل عبر الغذاء أو الماء الملوث.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "قد يؤدي تجاهل العلاج إلى استقرار الميكروب في المرارة مما يخلق حالة حامل مزمن."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Chronic carriage can occur if the pathogen persists within the gallbladder.",
      "goldStandard": "A systemic bacterial infection transmitted through contaminated food or water.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Chronic carriage can occur if the pathogen persists within the gallbladder."
    }
  },
  "w340": {
    "Arabic": {
      "etiology": "يؤدي التلف الكلوي والكبدي الحاد إلى ارتفاع معدل الوفيات دون رعاية داعمة.",
      "goldStandard": "عدوى فيروسية حادة تنتقل عن طريق البعوض في المناطق المدارية.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يؤدي التلف الكلوي والكبدي الحاد إلى ارتفاع معدل الوفيات دون رعاية داعمة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute renal and hepatic damage lead to high mortality without intensive supportive care.",
      "goldStandard": "An acute viral infection transmitted by mosquitoes in tropical regions.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Acute renal and hepatic damage lead to high mortality without intensive supportive care."
    }
  },
  "w341": {
    "Arabic": {
      "etiology": "يظل العامل الممرض كامناً في الخلايا البائية مدى الحياة بعد الإصابة الأولية.",
      "goldStandard": "عدوى فيروسية شائعة غالباً ما تصيب المراهقين والشباب.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يظل العامل الممرض كامناً في الخلايا البائية مدى الحياة بعد الإصابة الأولية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The pathogen remains latent in B-lymphocytes for the host's lifetime.",
      "goldStandard": "A common viral infection frequently affecting adolescents and young adults.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "The pathogen remains latent in B-lymphocytes for the host's lifetime."
    }
  },
  "w342": {
      "Arabic": {
          "etiology": "ابتلاع بيوض المشوكة الحبيبية (Echinococcus granulosus) المنطلقة من براز الكلاب لتهاجر اليرقات للجهاز البابي الكبدي.",
          "goldStandard": "التصوير المقطعي المحوري (CT) والسونار لكشف الكيسة متعددة الحجيرات وعلامة زنبق الماء، مع اختبار ELISA الإيجابي.",
          "firstLineRx": "الألبيندازول الفموي (Albendazole) بالتزامن مع تقنية البزل والشفط والحقن وإعادة الشفط (PAIR) أو الاستئصال الجراحي المحترس.",
          "keyDifferentiator": "كيسة كبدية مائية محاطة بجدار صفاحي مفرخ مع خطر الصدمة التآقية القاتلة عند تمزقها وعلامة زنبق الماء الشعاعية."
      },
      "English": {
          "etiology": "Accidental ingestion of Echinococcus granulosus oncospheres from infected canine feces penetrating portal circulation.",
          "goldStandard": "Ultrasonography and CT imaging demonstrating daughter cysts and the floating membrane 'water-lily sign', corroborated by serology.",
          "firstLineRx": "Albendazole therapy combined with percutaneous aspiration, injection of protoscolicide, and re-aspiration (PAIR) or careful cystectomy.",
          "keyDifferentiator": "Encapsulated hepatic fluid collection showing floating endocyst membranes with extreme vulnerability to fatal anaphylaxis upon rupture."
      }
  },
  "w343": {
    "Arabic": {
      "etiology": "تنتج عن بكتيريا حلزونية الشكل تنتقل عبر نوع معين من المفصليات.",
      "goldStandard": "عدوى بكتيرية تنتقل عن طريق لدغة القراد.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تنتج عن بكتيريا حلزونية الشكل تنتقل عبر نوع معين من المفصليات."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Caused by spirochetes transmitted by the bite of Ixodes ticks.",
      "goldStandard": "A bacterial infection transmitted primarily through tick bites.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Caused by spirochetes transmitted by the bite of Ixodes ticks."
    }
  },
  "w344": {
    "Arabic": {
      "etiology": "تتسبب بها بكتيريا ملتفة الشكل تعيش في الكلى لدى الحيوانات البرية والأليفة.",
      "goldStandard": "مرض حيواني المصدر ينتشر في المناطق الاستوائية والمناطق ذات الفيضانات.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تتسبب بها بكتيريا ملتفة الشكل تعيش في الكلى لدى الحيوانات البرية والأليفة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Caused by thin, aerobic spirochetes that colonize the kidneys of reservoir hosts.",
      "goldStandard": "A zoonotic disease prevalent in tropical regions and areas prone to flooding.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Caused by thin, aerobic spirochetes that colonize the kidneys of reservoir hosts."
    }
  },
  "w345": {
    "Arabic": {
      "etiology": "العلاج المعتمد يتضمن مزيجاً من البيريميثامين والسلفاديازين.",
      "goldStandard": "عدوى طفيلية أولية تنتقل عبر الاتصال بفضلات القطط.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "العلاج المعتمد يتضمن مزيجاً من البيريميثامين والسلفاديازين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Standard treatment involves a combination of pyrimethamine and sulfadiazine.",
      "goldStandard": "A protozoan infection commonly acquired through contact with infected feline feces.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Standard treatment involves a combination of pyrimethamine and sulfadiazine."
    }
  },
  "w346": {
    "Arabic": {
      "etiology": "يستخدم دواء البنزنيدازول كعلاج أساسي للقضاء على الطفيلي.",
      "goldStandard": "عدوى طفيلية تنتشر في مناطق معينة من أمريكا اللاتينية.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "يستخدم دواء البنزنيدازول كعلاج أساسي للقضاء على الطفيلي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Benznidazole is a key pharmacological agent used to eliminate the causative protozoa.",
      "goldStandard": "A parasitic infection endemic to regions of Latin America.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Benznidazole is a key pharmacological agent used to eliminate the causative protozoa."
    }
  },
  "w347": {
    "Arabic": {
      "etiology": "العلاج المفضل للحالات الشديدة هو الفوريكونازول.",
      "goldStandard": "عدوى فطرية تنشأ غالباً عن استنشاق الأبواغ الموجودة في البيئة.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "العلاج المفضل للحالات الشديدة هو الفوريكونازول."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Voriconazole is currently the gold-standard treatment for invasive clinical presentations.",
      "goldStandard": "A fungal infection primarily acquired through the inhalation of environmental spores.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Voriconazole is currently the gold-standard treatment for invasive clinical presentations."
    }
  },
  "w348": {
    "Arabic": {
      "etiology": "تعتبر المزارع المخبرية وسيلة دقيقة لتأكيد نمو هذه الكائنات الخميرية.",
      "goldStandard": "تعتبر هذه العدوى من أكثر مسببات الالتهابات الفطرية شيوعاً في جسم الإنسان.",
      "firstLineRx": "المضادات الحيوية أو مضادات الميكروبات المستهدفة للممرض المسبب مع الإماهة الداعمة وعزل المريض إن تطلب الأمر.",
      "keyDifferentiator": "تعتبر المزارع المخبرية وسيلة دقيقة لتأكيد نمو هذه الكائنات الخميرية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Laboratory culture is a reliable method for confirming the presence of these yeast organisms.",
      "goldStandard": "This infection is one of the most common fungal inflammatory conditions in humans.",
      "firstLineRx": "Targeted antimicrobial therapy (antibiotic/antiviral/antifungal), hydration, and appropriate infection control.",
      "keyDifferentiator": "Laboratory culture is a reliable method for confirming the presence of these yeast organisms."
    }
  },
  "w349": {
    "Arabic": {
      "etiology": "العلاجات الهرمونية تهدف إلى تثبيط النشاط المبيضي للسيطرة على الأعراض.",
      "goldStandard": "تتميز بنمو أنسجة مشابهة للبطانة الرحمية في مواقع خارج تجويف الرحم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "العلاجات الهرمونية تهدف إلى تثبيط النشاط المبيضي للسيطرة على الأعراض."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Hormonal therapies aim to suppress ovarian activity to manage symptoms.",
      "goldStandard": "Characterized by the presence of tissue similar to the uterine lining in locations outside the uterine cavity.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Hormonal therapies aim to suppress ovarian activity to manage symptoms."
    }
  },
  "w350": {
    "Arabic": {
      "etiology": "يُصنف النمط بناءً على المسافة بين حافة المشيمة والفوهة الداخلية لعنق الرحم.",
      "goldStandard": "تحدث هذه الحالة عندما يغطي النسيج المشيمي عنق الرحم جزئياً أو كلياً.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يُصنف النمط بناءً على المسافة بين حافة المشيمة والفوهة الداخلية لعنق الرحم."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Classification is based on the distance between the placental edge and the internal cervical os.",
      "goldStandard": "Occurs when the chorionic tissue partially or completely covers the cervical os.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Classification is based on the distance between the placental edge and the internal cervical os."
    }
  },
  "w351": {
    "Arabic": {
      "etiology": "تعتبر الولادة الفورية هي الإجراء العلاجي الأساسي لإنقاذ الأم والجنين.",
      "goldStandard": "تتميز بالانفصال المبكر للمشيمة عن جدار الرحم قبل خروج الجنين.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تعتبر الولادة الفورية هي الإجراء العلاجي الأساسي لإنقاذ الأم والجنين."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Immediate delivery is the primary therapeutic intervention to save both mother and fetus.",
      "goldStandard": "Characterized by the premature separation of the placenta from the uterine wall before fetal delivery.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Immediate delivery is the primary therapeutic intervention to save both mother and fetus."
    }
  },
  "w352": {
    "Arabic": {
      "etiology": "تؤثر الحالة سلباً على نوعية حياة الحامل وقد تسبب مضاعفات كبدية.",
      "goldStandard": "تتضمن هذه الحالة غثياناً وقيئاً شديداً وغير قابل للسيطرة خلال فترة الحمل.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تؤثر الحالة سلباً على نوعية حياة الحامل وقد تسبب مضاعفات كبدية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The condition significantly impairs the quality of life and may lead to hepatic complications.",
      "goldStandard": "Involves severe, intractable nausea and vomiting during the gestation period.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The condition significantly impairs the quality of life and may lead to hepatic complications."
    }
  },
  "w353": {
    "Arabic": {
      "etiology": "تتطلب المتابعة الدقيقة قياسات تسلسلية لمستويات الهرمون الموجه للغدد التناسلية المشيمية لمنع حدوث أورام خبيثة لاحقة.",
      "goldStandard": "يحدث خلل في التخصيب يؤدي إلى نمو نسيج مشيمي غير طبيعي داخل الرحم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتطلب المتابعة الدقيقة قياسات تسلسلية لمستويات الهرمون الموجه للغدد التناسلية المشيمية لمنع حدوث أورام خبيثة لاحقة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Strict monitoring of serial human chorionic gonadotropin levels is essential to exclude subsequent malignant transformation.",
      "goldStandard": "An abnormality in fertilization leads to the growth of atypical placental tissue within the uterus.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Strict monitoring of serial human chorionic gonadotropin levels is essential to exclude subsequent malignant transformation."
    }
  },
  "w354": {
    "Arabic": {
      "etiology": "تؤدي نوبات التهاب الأنسجة المبطنة المتموضعة في العضلة إلى آلام حادة أثناء الدورة الشهرية.",
      "goldStandard": "حالة حميدة تتميز بوجود أنسجة بطانة الرحم داخل الطبقة العضلية للرحم.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تؤدي نوبات التهاب الأنسجة المبطنة المتموضعة في العضلة إلى آلام حادة أثناء الدورة الشهرية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Cyclical hemorrhage within the ectopic glandular tissue leads to significant dysmenorrhea.",
      "goldStandard": "A benign condition characterized by the presence of endometrial tissue within the myometrium.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Cyclical hemorrhage within the ectopic glandular tissue leads to significant dysmenorrhea."
    }
  },
  "w355": {
    "Arabic": {
      "etiology": "خلل مناعي ذاتي أو مقاومة محيطية للإنسولين تؤدي لنقص نسبي أو مطلق في إفرازه من خلايا بيتا البنكرياسية.",
      "goldStandard": "أحد المضاعفات الوعائية الدقيقة المزمنة الناتجة عن ارتفاع سكر الدم لفترات طويلة.",
      "firstLineRx": "تعديل نمط الحياة والحمية + الميتفورمين (Metformin) للنوع الثاني، والإنسولين للنوع الأول مع ضبط مستمر للسكر.",
      "keyDifferentiator": "تعتبر السيطرة الصارمة على مستويات الجلوكوز وضغط الدم الركيزة الأساسية للوقاية من تدهور الحالة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Strict metabolic control of glucose and systemic blood pressure is fundamental to preventing disease progression.",
      "goldStandard": "A chronic microvascular complication resulting from prolonged hyperglycemia.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Strict metabolic control of glucose and systemic blood pressure is fundamental to preventing disease progression."
    }
  },
  "w356": {
    "Arabic": {
      "etiology": "تستخدم اختبارات شبكة معينة للكشف المبكر عن تغيرات الإبصار لدى كبار السن.",
      "goldStandard": "تدهور تدريجي في الرؤية المركزية الحادة المرتبط بتقدم العمر.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تستخدم اختبارات شبكة معينة للكشف المبكر عن تغيرات الإبصار لدى كبار السن."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: specialized grid test is commonly used to screen elderly patients for central visual disturbances.",
      "goldStandard": "A progressive deterioration of sharp, central vision associated with advancing age.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A specialized grid test is commonly used to screen elderly patients for central visual disturbances."
    }
  },
  "w357": {
    "Arabic": {
      "etiology": "يعتمد التشخيص الدقيق على الفحص الدقيق للمحيط باستخدام عدسات خاصة بعد توسيع الحدقة.",
      "goldStandard": "حالة طبية طارئة تنفصل فيها الطبقة العصبية الحساسة للضوء عن الطبقة الداعمة لها.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "يعتمد التشخيص الدقيق على الفحص الدقيق للمحيط باستخدام عدسات خاصة بعد توسيع الحدقة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: ccurate diagnosis relies on thorough peripheral fundus examination with specialized lenses after pupillary dilation.",
      "goldStandard": "An ophthalmic emergency where the light-sensitive layer separates from the underlying supporting tissue.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Accurate diagnosis relies on thorough peripheral fundus examination with specialized lenses after pupillary dilation."
    }
  },
  "w358": {
    "Arabic": {
      "etiology": "في الحالات الشديدة، قد يتطلب الأمر إدخال فتيلة قطنية مشبعة بالدواء لضمان وصوله للعمق.",
      "goldStandard": "يحدث التهاب في القناة السمعية الناتجة عن التعرض المستمر للرطوبة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "في الحالات الشديدة، قد يتطلب الأمر إدخال فتيلة قطنية مشبعة بالدواء لضمان وصوله للعمق."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Severe cases may necessitate the insertion of a medicated wick to ensure delivery to the deeper structures.",
      "goldStandard": "Inflammation often arises from prolonged exposure to moisture within the auditory canal.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Severe cases may necessitate the insertion of a medicated wick to ensure delivery to the deeper structures."
    }
  },
  "w359": {
    "Arabic": {
      "etiology": "في الحالات المستعصية، قد تُستخدم حقن الجنتاميسين داخل الطبلة لتثبيط الوظيفة الدهليزية.",
      "goldStandard": "اضطراب يصيب الأذن الداخلية ويؤثر على التوازن والسمع.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "في الحالات المستعصية، قد تُستخدم حقن الجنتاميسين داخل الطبلة لتثبيط الوظيفة الدهليزية."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: In refractory cases, intratympanic gentamicin injections may be used to ablate vestibular function.",
      "goldStandard": "A disorder affecting the inner ear that impairs both balance and hearing.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "In refractory cases, intratympanic gentamicin injections may be used to ablate vestibular function."
    }
  },
  "w360": {
    "Arabic": {
      "etiology": "تتحسن الأعراض عادة بشكل تلقائي خلال أسابيع مع تكيف الجهاز العصبي المركزي.",
      "goldStandard": "التهاب يصيب الهياكل المسؤولة عن التوازن داخل الأذن.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "تتحسن الأعراض عادة بشكل تلقائي خلال أسابيع مع تكيف الجهاز العصبي المركزي."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: Symptoms typically resolve spontaneously within weeks as the central nervous system compensates.",
      "goldStandard": "Inflammation involving the structures responsible for balance within the ear.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Symptoms typically resolve spontaneously within weeks as the central nervous system compensates."
    }
  },
  "w361": {
    "Arabic": {
      "etiology": "التهاب فيروسي حاد في الحنجرة والرغامي يصيب الرضع والأطفال بين 6 أشهر و3 سنوات، وغالباً يسببه فيروس Parainfluenza.",
      "goldStandard": "أشعة الرقبة الأمامية تظهر التضيق المخروطي المميز أسفل لسان المزمار والمعروف بعلامة برج الكنيسة (Steeple sign).",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "التهاب فيروسي حاد في الحنجرة والرغامي يصيب الرضع والأطفال بين 6 أشهر و3 سنوات، وغالباً يسببه فيروس Parainfluenza."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute viral laryngotracheobronchitis classically affecting toddlers 6 months to 3 years of age, predominantly caused by Parainfluenza virus.",
      "goldStandard": "Anteroposterior soft tissue neck radiography demonstrates pathognomonic subglottic tracheal narrowing termed the \"steeple sign\".",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "Acute viral laryngotracheobronchitis classically affecting toddlers 6 months to 3 years of age, predominantly caused by Parainfluenza virus."
    }
  },
  "w362": {
    "Arabic": {
      "etiology": "العدوى التنفسية السفلية الأكثر شيوعاً التي تؤدي إلى دخول المستشفى في الرضع دون سن الثانية، يسببها الفيروس المخلوي التنفسي (RSV).",
      "goldStandard": "فحص الصدر بالسماعة يكشف خشخشة ناعمة منتشرة مع أزيز زفيري، وتكشف أشعة الصدر فرط انتفاخ الرئتين وتسطح الحجاب الحاجز.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "العدوى التنفسية السفلية الأكثر شيوعاً التي تؤدي إلى دخول المستشفى في الرضع دون سن الثانية، يسببها الفيروس المخلوي التنفسي (RSV)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: The most common lower respiratory tract infection requiring infant hospitalization worldwide, primarily caused by Respiratory Syncytial Virus (RSV).",
      "goldStandard": "Auscultation reveals widespread fine inspiratory crackles; chest radiography shows bilateral hyperinflation with flattened diaphragms.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "The most common lower respiratory tract infection requiring infant hospitalization worldwide, primarily caused by Respiratory Syncytial Virus (RSV)."
    }
  },
  "w400": {
    "Arabic": {
      "etiology": "استجابة مناعية متأخرة بعد التهاب البلعوم بالعقديات المقيحة من المجموعة أ (Group A Strep) ناجمة عن التشابه الجزيئي.",
      "goldStandard": "يعتمد التشخيص على معايير جونز (Jones Criteria)؛ ويعد التهاب عضلة القلب وتلف صماماته (خاصة التاجي) أخطر المضاعفات الدائمة.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "مضاعفة التهابية مناعية ذاتية غير صديدية تتبع التهاب الحلق بالمكورات العقدية من المجموعة أ (Group A Strep) بعد أسبوعين إلى ثلاثة أسابيع."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: multisystem post-infectious autoimmune sequel occurring 2-3 weeks after untreated Group A beta-hemolytic streptococcal pharyngitis.",
      "goldStandard": "Diagnosed using the revised Jones Criteria; pancarditis with chronic permanent mitral valvular scarring represents the chief mortality risk.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A multisystem post-infectious autoimmune sequel occurring 2-3 weeks after untreated Group A beta-hemolytic streptococcal pharyngitis."
    }
  },
  "w401": {
      "Arabic": {
          "etiology": "التهاب وعائي التهابي ذاتي معقد يصيب الأوعية الدموية بمختلف أحجامها، مرتبط بخلل مناعي ومورثة HLA-B51 بطول طريق الحرير.",
          "goldStandard": "المعايير السريرية الدولية (تقرحات فموية متكررة + اثنان من: تقرحات تناسلية، التهاب عنبية مع قيح، آفات جلدية، أو اختبار باثيرجي إيجابي).",
          "firstLineRx": "الكورتيكوستيرويدات الجهازية، الكولشيسين للآفات المخاطية، ومثبطات مناعية كالأزاتيوبرين ومضادات TNF-alpha للحالات العينية.",
          "keyDifferentiator": "ثالوث القرح الفموية والتناسلية المؤلمة مع التهاب العنبية الصديدي (Hypopyon) وإيجابية اختبار الباثيرجي الجلدي."
      },
      "English": {
          "etiology": "Immune-mediated systemic vasculitis involving small-to-large vessels, strongly associated with HLA-B51 along the ancient Silk Road.",
          "goldStandard": "International Criteria for Behcet Disease (recurrent oral ulcerations plus genital ulcers, ocular lesions, or positive pathergy test).",
          "firstLineRx": "Corticosteroids, Colchicine for mucocutaneous disease, and systemic immunosuppressants (Azathioprine, Infliximab) for ocular disease.",
          "keyDifferentiator": "Oral aphthosis coupled with scarring genital ulcers, hypopyon uveitis, and cutaneous hypersensitivity to needle pricks (pathergy)."
      }
  },
  "w402": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في مرضية هامة تدرس بعناية ضمن تخصصات (Rheumatology و Dermatology و Pathology)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "goldStandard": "المصطلح الطبي المعني يبدأ بحرف (ت) ويعد من أهم موضوعات التشخيص التفريقي.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Rheumatology و Dermatology و Pathology)، وترتبط بآليات فسيولوجية وإمراضية محددة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: clinically significant condition studied thoroughly within Rheumatology & Dermatology & Pathology, exhibiting characteristic pathophysiologic mechanisms.",
      "goldStandard": "The medical terminology starts with \"S\" and forms an essential component of clinical differential diagnosis.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "A clinically significant condition studied thoroughly within Rheumatology & Dermatology & Pathology, exhibiting characteristic pathophysiologic mechanisms."
    }
  },
  "w403": {
    "Arabic": {
      "etiology": "التهاب مفصلي بلوري حاد شديد الألم يستهدف في أول نوبة له المفصل المشطي السلامي الأول لإصبع القدم الكبير (Podagra).",
      "goldStandard": "بزل المفصل وفحص السائل الزليلي بالمجهر المستقطب يظهر بلورات يورات أحادية الصوديوم إبرية الشكل ذات انكسار ضوئي سلبي قوي.",
      "firstLineRx": "مضادات الالتهاب غير الستيرويدية ومعدلات المناعة (DMARDs/Biologics) والستيرويدات للسيطرة على النشاط المناعي.",
      "keyDifferentiator": "التهاب مفصلي بلوري حاد شديد الألم يستهدف في أول نوبة له المفصل المشطي السلامي الأول لإصبع القدم الكبير (Podagra)."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: cute crystal-induced arthritis whose classic initial manifestation is excruciating monoarthritis of the first metatarsophalangeal joint (podagra).",
      "goldStandard": "Arthrocentesis under polarized microscopy definitively reveals needle-shaped monosodium urate crystals exhibiting strong negative birefringence.",
      "firstLineRx": "NSAIDs, glucocorticoid bridge therapy, and disease-modifying antirheumatic drugs (DMARDs or biologics).",
      "keyDifferentiator": "Acute crystal-induced arthritis whose classic initial manifestation is excruciating monoarthritis of the first metatarsophalangeal joint (podagra)."
    }
  },
  "w404": {
      "Arabic": {
          "etiology": "تكاثر سرطاني خبيث للخلايا الغضروفية المنتجة للمطرق الغضروفي دون تشكيل نسيج عظمي، وقد ينشأ ثانوياً من ورم غضروفي عظمي سابق.",
          "goldStandard": "الخزعة النسيجية الجراحية المؤكدة للخلايا الغضروفية اللانمطية مترافقة مع مظهر أقواس الفشار في التصوير المقطعي.",
          "firstLineRx": "الاستئصال الجراحي الجذري الواسع للحواف الورمية، لكون الورم مقاوماً تماماً للعلاج الكيميائي والإشعاعي.",
          "keyDifferentiator": "ورم عظمي خبيث لدى الكبار يظهر تكلسات 'حلقات وأقواس الفشار' في الحوض ويقاوم العلاج الكيميائي ويستأصل جراحياً."
      },
      "English": {
          "etiology": "Malignant transformed chondrogenic cells producing hyaline and myxoid matrix without osteoid, de novo or from osteochondroma.",
          "goldStandard": "Surgical core biopsy confirming chondrocytic nuclear atypia, paired with characteristic CT 'rings and arcs' mineralization.",
          "firstLineRx": "En bloc surgical excision with clear margins; standard chemotherapy and radiation are completely ineffective.",
          "keyDifferentiator": "Adult pelvic malignant bone lesion demonstrating 'popcorn' rings-and-arcs calcification that is unresponsive to chemotherapy."
      }
  },
  "w405": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في مرضية هامة تدرس بعناية ضمن تخصصات (Urology و Pathology و Internal Medicine)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "goldStandard": "المصطلح الطبي المعني يبدأ بحرف (ت) ويعد من أهم موضوعات التشخيص التفريقي.",
      "firstLineRx": "البروتوكول السريري القياسي المتضمن العلاج الدوائي الموجه، والإماهة الداعمة، والمتابعة الدقيقة للاستجابة السريرية.",
      "keyDifferentiator": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Urology و Pathology و Internal Medicine)، وترتبط بآليات فسيولوجية وإمراضية محددة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: clinically significant condition studied thoroughly within Urology & Pathology & Internal Medicine, exhibiting characteristic pathophysiologic mechanisms.",
      "goldStandard": "The medical terminology starts with \"B\" and forms an essential component of clinical differential diagnosis.",
      "firstLineRx": "Standard evidence-based clinical regimen: targeted pharmacotherapy, supportive resuscitation, and continuous clinical monitoring.",
      "keyDifferentiator": "A clinically significant condition studied thoroughly within Urology & Pathology & Internal Medicine, exhibiting characteristic pathophysiologic mechanisms."
    }
  },
  "w406": {
      "Arabic": {
          "etiology": "ارتفاع الضغط البلعومي وفشل ارتخاء العضلة الحلقية البلعومية مسبباً انبعاج المخاطية عبر مثلث كيليان الضعيف.",
          "goldStandard": "الأشعة السينية للبلعوم والمريء بابتلاع سائل الباريوم (Barium swallow) لإظهار الكيس الرتجي الخلفي.",
          "firstLineRx": "بضع العضلة الحلقية البلعومية بالتنظير الداخلي (Dohlman endoscopic myotomy) أو الاستئصال الجراحي المفتوح.",
          "keyDifferentiator": "قلس طعام غير مهضوم ورائحة فم نتنة مع كيس رتجي يبرز خلفياً في مثلث كيليان بابتلاع الباريوم."
      },
      "English": {
          "etiology": "Elevated hypopharyngeal intraluminal pressure against a non-compliant cricopharyngeus muscle herniating mucosa through Killian triangle.",
          "goldStandard": "Barium swallow fluoroscopy demonstrating a contrast-filled outpouching in the posterior hypopharyngeal wall.",
          "firstLineRx": "Endoscopic cricopharyngeal myotomy (Dohlman procedure/stapling) or open surgical diverticulectomy.",
          "keyDifferentiator": "Regurgitation of undigested food and foul halitosis with posterior pouching at Killian dehiscence on barium swallow."
      }
  },
  "w407": {
      "Arabic": {
          "etiology": "ورم غاستريني عصبي صماوي في البنكرياس أو جدار العفج يفرز الغاسترين دون خضوع لآليات التلقيم الراجع السلبي.",
          "goldStandard": "ارتفاع الغاسترين الصائم (>1000 pg/mL) مع pH معدي <2، وإيجابية اختبار تحفيز السيكريتين المتناقض، وتحديد الورم بسونار المنظار أو Ga-68 DOTATATE.",
          "firstLineRx": "مثبطات مضخة البروتون بجرعات عالية مضاعفة لضبط فرط الحموضة، يتبعها الاستئصال الجراحي التام للورم الغاستريني.",
          "keyDifferentiator": "قرحات هضمية متعددة في الصائم مع إسهال مائي دهني وارتفاع متناقض في الغاسترين بعد حقن السيكريتين."
      },
      "English": {
          "etiology": "Autonomous ectopic gastrin secretion by a neuroendocrine tumor within the Passaro gastrinoma triangle triggering massive acid output.",
          "goldStandard": "Fasting gastrin >1000 pg/mL with gastric pH <2, positive secretin stimulation test, and somatostatin receptor scintigraphy (Ga-68 DOTATATE).",
          "firstLineRx": "High-dose proton pump inhibitors to prevent ulcer complications, followed by surgical exploration and oncologic tumor resection.",
          "keyDifferentiator": "Jejunal peptic ulcers paired with secretory diarrhea and a paradoxical spike in gastrin following secretin infusion."
      }
  },
  "w408": {
      "Arabic": {
          "etiology": "تمزق في بطانة الشريان الأبهر ينشأ عن إجهاد القص الهيموديناميكي المرتبط بارتفاع الضغط المزمن أو أمراض النسيج الضام (مارفان).",
          "goldStandard": "الأشعة المقطعية الوعائية للصدر والبطن بالصبغة (CT Angiography) لإظهار السديلة الباطنية الفاصلة بين التجويفين.",
          "firstLineRx": "حاصرات بيتا الوريدية (لابيتالول) لخفض النبض (<60) والضغط (<120)، وجراحة استبدال عاجلة للنوع A وتدبير طبي أو دعامة للنوع B.",
          "keyDifferentiator": "ألم تمزقي مفاجئ يبدأ بذروته مع تفاوت في ضغط الذراعين وظهور تجويف كاذب بالأشعة المقطعية."
      },
      "English": {
          "etiology": "Intimal tear driven by hemodynamic shear stress secondary to chronic systemic hypertension or connective tissue weakness (Marfan).",
          "goldStandard": "Contrast-enhanced chest and abdominal CT Angiography (CTA) displaying the intimomedial flap and false lumen perfusion.",
          "firstLineRx": "Intravenous beta-blockers (Labetalol) targeting heart rate <60 and SBP 100-120 mmHg; emergent surgical replacement for Type A.",
          "keyDifferentiator": "Instantaneous maximum tearing back pain with bilateral arm blood pressure disparity and visualization of an intimal flap on CTA."
      }
  },
  "w409": {
    "Arabic": {
      "etiology": "آلية إمراضية تتمثل في مرضية هامة تدرس بعناية ضمن تخصصات (Cardiology و Vascular Surgery و Physiology)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "goldStandard": "المصطلح الطبي المعني يبدأ بحرف (ا) ويعد من أهم موضوعات التشخيص التفريقي.",
      "firstLineRx": "العلاج الدوائي المستهدف (حاصرات بيتا، مضادات التخثر/الصفائح، ومثبطات ACE) والتدخل الوعائي عند اللزوم.",
      "keyDifferentiator": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Cardiology و Vascular Surgery و Physiology)، وترتبط بآليات فسيولوجية وإمراضية محددة."
    },
    "English": {
      "etiology": "Pathophysiologic mechanism characterized by: clinically significant condition studied thoroughly within Cardiology & Vascular Surgery & Physiology, exhibiting characteristic pathophysiologic mechanisms.",
      "goldStandard": "The medical terminology starts with \"T\" and forms an essential component of clinical differential diagnosis.",
      "firstLineRx": "Guideline-directed medical therapy (beta-blockers, ACEi/ARBs, antiplatelets/anticoagulation), and interventional catheterization.",
      "keyDifferentiator": "A clinically significant condition studied thoroughly within Cardiology & Vascular Surgery & Physiology, exhibiting characteristic pathophysiologic mechanisms."
    }
  },
  "w410": {
      "Arabic": {
          "etiology": "إزالة مناعية ذاتية لغمد الميالين المحيط بالعصب البصري بوساطة الخلايا التائية، وتعد أول تظاهرة للتصلب المتعدد في 20% من المرضى.",
          "goldStandard": "الرنين المغناطيسي للدماغ والحجاج بالصبغة (MRI) مع وجود عيب حدقي وارد نسبي (RAPD) وانخفاض التمييز اللوني للأحمر.",
          "firstLineRx": "ميثيل بريدنيزولون وريدي بجرعة عالية (1000 ملغ/يوم لمدة 3 أيام) لتسريع الشفاء، مع تجنب الكورتيزون الفموي كعلاج أولي لمنع النكس.",
          "keyDifferentiator": "فقدان بصر أحادي الجانب مؤلم عند حركة العين مع حدقة ماركوس غان وتلاشي تمييز اللون الأحمر."
      },
      "English": {
          "etiology": "Autoimmune T-cell mediated demyelination of the optic nerve, serving as the initial clinical demyelinating presentation in 20% of MS cases.",
          "goldStandard": "Contrast-enhanced brain and orbital MRI showing optic nerve sheath hyperintensity, corroborating a relative afferent pupillary defect.",
          "firstLineRx": "Intravenous high-dose Methylprednisolone (1 g/day for 3 days) to accelerate recovery; low-dose oral prednisone alone is contraindicated.",
          "keyDifferentiator": "Painful monocular vision loss on eye excursion with red desaturation and a Marcus Gunn relative afferent pupillary defect."
      }
  },
  "w411": {
      "Arabic": {
          "etiology": "عدوى متكررة بالبكتيريا داخل الخلوية المتدثرة الحثرية (Chlamydia trachomatis) الأنماط A-C تؤدي إلى تندب ملتحمي مستمر.",
          "goldStandard": "المعاينة السريرية المعتمدة من منظمة الصحة العالمية (WHO grading) مع تأكيد وجود الكلاميديا عبر اختبار PCR أو مسحة الملتحمة.",
          "firstLineRx": "جرعة وحيدة فموية من الأزيثرومايسين (Azithromycin) للجماعات الموبوءة، وإصلاح انقلاب الجفن جراحياً (Trabut surgery).",
          "keyDifferentiator": "خط أرلت التندبي على الملتحمة وانقلاب رموش الجفن العلوي للداخل لاحتكاك القرنية في مناطق انتشار الذباب."
      },
      "English": {
          "etiology": "Recurrent conjunctival infection with intracellular Chlamydia trachomatis (serovars A, B, Ba, C) prompting progressive cicatrization.",
          "goldStandard": "Clinical grading using WHO simplified system; laboratory nucleic acid amplification testing (NAAT) from conjunctival swabs.",
          "firstLineRx": "Mass community administration of single-dose oral Azithromycin, alongside bilamellar tarsal rotation surgery for trichiasis.",
          "keyDifferentiator": "Tarsal conjunctival Arlt line scarring complicated by inward eyelash turning (trichiasis) causing blinded vascular pannus."
      }
  },
  "w412": {
      "Arabic": {
          "etiology": "انسداد صمي أو خثاري حاد في الشريان المساريقي العلوي (SMA) يؤدي إلى نقص تروية ونخر جداري في الأمعاء الدقيقة.",
          "goldStandard": "الأشعة المقطعية الوعائية للبطن بالصبغة (Mesenteric CT Angiography) وتوثيق فرط لاكتات الدم الشرياني.",
          "firstLineRx": "الإنعاش بالسوائل الوريدية ومضادات التخثر (هيبارين) مع التدخل الجراحي الفوري لاستئصال الصمة أو إعادة التوعي واستئصال الأمعاء الميتة.",
          "keyDifferentiator": "ألم بطني هائل لا يتناسب مع الفحص البطني الطبيعي في مريض رجفان أذيني مع حماض لاكتيكي مرتفع."
      },
      "English": {
          "etiology": "Acute embolic or thrombotic occlusion of the superior mesenteric artery (SMA) driving rapid transmural intestinal gangrene.",
          "goldStandard": "Mesenteric CT angiography (CTA) showing vascular occlusion, pneumatosis intestinalis, and elevated arterial lactate.",
          "firstLineRx": "Systemic anticoagulation with unfractionated heparin, resuscitation, emergent surgical embolectomy/revascularization, and resection.",
          "keyDifferentiator": "Excruciating periumbilical pain dramatically out of proportion to physical exam findings with lactic acidosis."
      }
  },
  "w413": {
      "Arabic": {
          "etiology": "عصيات الوتدية الخناقية (Corynebacterium diphtheriae) المفرزة للذيفان المشفر بملقم عاثية (Bacteriophage beta).",
          "goldStandard": "عزل البكتيريا على وسط لوفلر (Loeffler) أو وسط تيلوريت وتأكيد إفراز الذيفان باختبار إليك للترسيب (Elek test).",
          "firstLineRx": "مضاد الذيفان الخناقي النوعي فورياً (Diphtheria antitoxin) مع الإريثروميسين أو البنسلين G الوريدي والوقاية بلقاح DTaP.",
          "keyDifferentiator": "غشاء كاذب رمادي لاصق ينزف عند نزعه مع مظهر عنق الثور والتهاب العضلة القلبية السمّي واختبار إليك الإيجابي."
      },
      "English": {
          "etiology": "Lysogenic bacteriophage beta-encoded exotoxin production by Corynebacterium diphtheriae inhibiting host elongation factor EF-2.",
          "goldStandard": "Culture on cystine-tellurite blood agar / Loeffler slant with confirmation of toxin production via Elek immunodiffusion test.",
          "firstLineRx": "Immediate administration of equine Diphtheria Antitoxin plus Erythromycin or IV Penicillin G; vaccine-preventable via DTaP.",
          "keyDifferentiator": "Adherent friable grey tonsillar pseudomembrane with striking 'bull neck' swelling and positive Elek toxin assay."
      }
  },
  "w414": {
      "Arabic": {
          "etiology": "طفرة متماثلة اللواقح في جين CFTR (حذف الفينيل ألانين delta-F508) تعطل فتح قنوات كلوريد الأغشية المخاطية وتسبب لزوجة الإفرازات.",
          "goldStandard": "فحص كلوريد العرق بالبيلوكاربين (Sweat Chloride ≥60 mmol/L) في قياسين منفصلين، مع التحليل الجيني لطفرات CFTR.",
          "firstLineRx": "معدلات CFTR (إيفا كافتور/تيزار كافتور/إليكسا كافتور)، وإنزيمات البنكرياس البديلة، والعلاج الطبيعي الصدري، ومضادات الزوائف.",
          "keyDifferentiator": "جلد مالح المذاق مع علوص عقي باكر وتوسع قصبات بالزوائف وكلوريد عرق مرتفع فوق 60 مليمول/لتر."
      },
      "English": {
          "etiology": "Autosomal recessive mutation in the CFTR gene (classically delta-F508) misfolding the chloride channel and dehydrating mucus.",
          "goldStandard": "Quantitative pilocarpine iontophoresis sweat test documenting chloride ≥60 mmol/L, confirmed by CFTR gene sequencing.",
          "firstLineRx": "CFTR potentiators/correctors (elexacaftor-tezacaftor-ivacaftor), pancreatic enzyme replacement therapy (PERT), and chest physiotherapy.",
          "keyDifferentiator": "Salty-tasting skin, meconium ileus, pancreatic exocrine insufficiency, and sweat chloride ≥60 mmol/L."
      }
  },
  "w417": {
      "Arabic": {
          "etiology": "ابتلاع أكياس الجيارديا اللمبلية المقاومة للكلور في المياه الملوثة؛ تفقس في العفج وتلتصق الأتاريف بالقرص البطني مسببة سوء الامتصاص.",
          "goldStandard": "فحص مستضد الجيارديا في البراز باختبار الإنزيم المناعي (Stool Giardia antigen EIA) أو كشف الأكياس والطور النشط مجهرياً.",
          "firstLineRx": "الميترونيدازول الفموي (Metronidazole 250 mg ثلاث مرات يومياً لـ 5-7 أيام) أو تينيدازول بجرعة وحيدة.",
          "keyDifferentiator": "إسهال دهني طافٍ غير مدمم مع تجشؤ كبريتي بعد التخييم وتحديد كائنات كمثرية ثنائية النوى تشبه الوجه الضاحك."
      },
      "English": {
          "etiology": "Ingestion of infectious Giardia duodenalis cysts; excystation in duodenum yields trophozoites that carpet brush borders via ventral sucking discs.",
          "goldStandard": "Stool Giardia enzyme immunoassay (EIA) for coproantigen detection, or direct microscopic stool visualization of binucleate trophozoites.",
          "firstLineRx": "Oral Metronidazole (250 mg TID for 5-7 days) or a single 2-gram dose of Tinidazole; Nitazoxanide as alternative.",
          "keyDifferentiator": "Greasy floating stools with sulfuric belching following camping, with characteristic 'owl-eyed' face-like trophozoites."
      }
  },
  "w419": {
      "Arabic": {
          "etiology": "خلل معقد في مسارات النقل العصبي أحادي الأمين (السيروتونين والنورأدرينالين) وتراجع اللدونة العصبية في الحصين بتأثير الكورتيزول والوراثة.",
          "goldStandard": "المعايير التشخيصية للدليل الإحصائي DSM-5 (وجود 5 أو أكثر من أعراض SIG E CAPS لمدة أسبوعين بما فيها المزاج المكتئب أو فقدان المتعة).",
          "firstLineRx": "مضادات الاكتئاب من زمرة مثبطات استرداد السيروتونين الانتقائية (SSRIs كالسيرترالين) بالتزامن مع العلاج السلوكي المعرفي (CBT).",
          "keyDifferentiator": "هبوط مستمر بالمزاج مع فقدان المتعة وانعدام القيمة لمدة أسبوعين على الأقل دون وجود نوبات هوس سابقة."
      },
      "English": {
          "etiology": "Dysregulation of monoamine neurotransmitters (serotonin, norepinephrine) coupled with neuroendocrine HPA axis hyperactivity and genetic vulnerability.",
          "goldStandard": "Clinical psychiatric evaluation fulfilling DSM-5 criteria: ≥5 of 9 SIG E CAPS symptoms for ≥2 weeks, including depressed mood or anhedonia.",
          "firstLineRx": "Selective serotonin reuptake inhibitors (SSRIs, e.g., Escitalopram, Sertraline) combined with cognitive behavioral psychotherapy (CBT).",
          "keyDifferentiator": "Sustained depressed mood and anhedonia for ≥2 weeks without any lifetime history of hypomanic or manic episodes."
      }
  },
  "w420": {
      "Arabic": {
          "etiology": "فشل انطمار وتراجع القناة السُّرية المساريقية (القناة المحية Vitelline duct) في الأسبوع السابع الجنيني مشكلة رتجاً حقيقياً في الدقاق.",
          "goldStandard": "المسح النووي بالتكنيشيوم-99م (Meckel scan / Tc-99m pertechnetate) الذي يرتبط انتخابياً بخلايا الغشاء المخاطي المعدي المنتبذ.",
          "firstLineRx": "التثبيت بالسوائل ونقل الدم إن لزم، يليه الاستئصال الجراحي التام للرتج (Diverticulectomy) أو استئصال القطعة المعوية المصابة.",
          "keyDifferentiator": "نزف مستقيمي غير مؤلم بلون الكشمش عند طفل صغير مع بؤرة مضيئة بمسح التكنيشيوم في أسفل البطن الأيمن."
      },
      "English": {
          "etiology": "Failure of normal obliteration of the embryonic vitelline (omphalomesenteric) duct, forming an antimesenteric true ileal diverticulum.",
          "goldStandard": "Technetium-99m pertechnetate scintigraphy ('Meckel scan') identifying ectopic gastric mucosa, or diagnostic laparoscopy.",
          "firstLineRx": "Hemodynamic stabilization followed by surgical resection (laparoscopic diverticulectomy or segmental ileal resection).",
          "keyDifferentiator": "Painless gross lower GI bleeding in a child under 2 years with a positive focal hot spot on Technetium-99m scan."
      }
  },
  "w422": {
      "Arabic": {
          "etiology": "انضغاط وعائي مجهري لجذر العصب القحفي الخامس عند منطقة دخوله بواسطة الشريان المخيخي العلوي مسبباً زوال ميالين موضعي ونبضات كاذبة.",
          "goldStandard": "التشخيص سريري بالمعايير الدولية لآلام الوجه المؤقتة الصاعقة، مع الرنين المغناطيسي عالي الدقة (FIESTA/CISS) لإثبات الانضغاط الوعائي.",
          "firstLineRx": "الكاربامازيبين (Carbamazepine 200-1200 mg/day) أو الأوكسكاربازيبين، وجراحة إزالة الضغط الوعائي المجهري (MVD) للحالات المعندة.",
          "keyDifferentiator": "ألم كهربائي خاطف ثوانٍ معدودة يثيره لمس الوجه أو غسيل الأسنان في نطاق العصب الخامس ويستجيب للكاربامازيبين."
      },
      "English": {
          "etiology": "Pulsatile microvascular compression of CN V root entry zone by the superior cerebellar artery causing focal demyelination and ephaptic transmission.",
          "goldStandard": "Clinical diagnostic criteria (paroxysmal electric shocks lasting <2 minutes triggered by light touch), with 3D CISS/FIESTA MRI.",
          "firstLineRx": "Oral Carbamazepine (or Oxcarbazepine) as first-line pharmacotherapy; microvascular decompression (Jannetta surgery) for refractory cases.",
          "keyDifferentiator": "Lancinating unilateral electric shock-like facial pain triggered by non-painful stimuli in V2/V3 successfully managed with carbamazepine."
      }
  },
  "w425": {
      "Arabic": {
          "etiology": "طفرة وراثية جسمية سائدة في جين SCN5A تقلل من تيار قنوات الصوديوم السريعة (INa) مما يقصر كمون العمل البطيني النخابي.",
          "goldStandard": "تخطيط القلب الكهربائي بنمط بروغادا النوع 1 (ارتفاع ST مقوس كالسنام ≥2 مم يتبعه انقلاب موجة T في V1-V2) عفوياً أو باختبار الأجملين.",
          "firstLineRx": "زرع جهاز مقوم ومزيل الرجفان الآلي القلبي (ICD) لمنع الموت القلبي المفاجئ، مع خفض الحرارة فورياً وتجنب أدوية حصر الصوديوم.",
          "keyDifferentiator": "موجة ST مقوسة كالسنام ≥2 مم في V1-V2 تظهر في الحمى وتسبب الموت القلبي المفاجئ للشباب أثناء النوم."
      },
      "English": {
          "etiology": "Autosomal dominant loss-of-function mutation in SCN5A encoding the cardiac Nav1.5 voltage-gated sodium channel alpha subunit.",
          "goldStandard": "Type 1 ECG pattern showing ≥2 mm coved ST elevation with T wave inversion in ≥1 right precordial lead (spontaneous or drug-induced).",
          "firstLineRx": "Implantable cardioverter-defibrillator (ICD) placement for secondary prevention; aggressive antipyresis during fevers.",
          "keyDifferentiator": "Coved ST elevation ≥2 mm in right precordial leads (V1-V2) with inverted T waves predisposing to nocturnal ventricular fibrillation."
      }
  },
  "w427": {
      "Arabic": {
          "etiology": "انقطاع أو ضغط على السلسلة العصبية الودية العينية (ورم بانكوست الرئوي، تسلخ الشريان السباتي، أو جلطة جذع الدماغ).",
          "goldStandard": "الاختبار الدوائي بقطرة الأبراكلونيدين (Apraclonidine) الذي يعكس تضيق الحدقة ويوسعها، أو قطرة الكوكايين، يليه التصوير بالرنين والمقطعي.",
          "firstLineRx": "علاج المسبب الأصلي الأساسي (جراحة أو إشعاع لورم قمة الرئة، أو مضادات التخثر لتسلخ الشريان السباتي).",
          "keyDifferentiator": "ثالوث تدلي الجفن الخفيف وتضيق الحدقة مع غياب التعرق في نصف الوجه واستجابتها العكسية لقطرة الأبراكلونيدين."
      },
      "English": {
          "etiology": "Lesion along the three-neuron sympathetic axis (apical Pancoast tumor, internal carotid dissection, or Wallenberg syndrome).",
          "goldStandard": "Pharmacologic pupillary testing with Apraclonidine drops (causing paradoxical reversal/dilation), followed by neck/chest CT angiography.",
          "firstLineRx": "Treatment directed specifically at the underlying compressive pathology (carotid stent, oncologic resection of Pancoast tumor).",
          "keyDifferentiator": "Triad of unilateral mild ptosis, miosis, and anhidrosis with confirmation by reversal of anisocoria on apraclonidine testing."
      }
  },
  "w517": {
    "Arabic": {
          "etiology": "عدوى فيروسية (Adenovirus) أو بكتيرية أو استجابة تحسسية تصيب الغشاء المبطن للجفن والصلبة.",
          "goldStandard": "التشخيص السريري بالفحص بالمصباح الشقي (Slit Lamp) مع مسحة الإفرازات في الحالات المعقدة.",
          "firstLineRx": "كمادات باردة وقطرات ترطيب للفيروسي، ومضادات حيوية موضعية للبكتيري، ومضادات هيستامين للتحسسي.",
          "keyDifferentiator": "يتميز بسلامة حدة الإبصار تماماً وعدم تأثر استجابة الحدقة للضوء بخلاف التهاب القزحية."
    },
    "English": {
          "etiology": "Viral (adenovirus), bacterial, or allergen-mediated inflammatory reaction of the ocular mucous coat.",
          "goldStandard": "Clinical evaluation on slit-lamp biomicroscopy; swabs and bacterial cultures reserved for refractory presentations.",
          "firstLineRx": "Supportive cold compresses and artificial tears for viral, topical antibiotics for bacterial, topical antihistamines for allergic.",
          "keyDifferentiator": "Visual acuity and pupillary light reflexes remain completely intact, distinguishing it from uveitis or acute glaucoma."
    }
  },
  "w519": {
    "Arabic": {
          "etiology": "خلل في التنسيق العضلي الحركي العيني أو شلل بأحد الأعصاب القحفية الثالث أو الرابع أو السادس.",
          "goldStandard": "فحص قياس درجات الانحراف باستخدام الموشور واختبار التغطية التبادلي (Prism Cover Test).",
          "firstLineRx": "تصحيح العيوب الانكسارية بالنظارات، وتغطية العين القوية لعلاج الكسل، أو تصحيح شد العضلات جراحياً.",
          "keyDifferentiator": "يُحدث غياباً في التناظر المتزامن لانعكاس الضوء على قرنيتي العينين (Hirschberg Reflex)."
    },
    "English": {
          "etiology": "Extraocular muscle imbalance, uncorrected high hyperopia, or cranial nerve paresis disrupting binocular fusion.",
          "goldStandard": "Quantitative alternate and prism cover testing alongside Hirschberg corneal reflex photography.",
          "firstLineRx": "Optical refractive correction, part-time penalization/patching of the dominant eye, and surgical muscle repositioning.",
          "keyDifferentiator": "Characterized by asymmetrical displacement of the corneal light reflection when focusing on a penlight."
    }
  },
  "w520": {
    "Arabic": {
          "etiology": "عدوى بكتيرية (خاصة الزائفة في مستخدمي العدسات) أو فطرية أو فيروسية تحدث بعد خدش طلائي للقرنية.",
          "goldStandard": "صبغة الفلورسين تحت الضوء الأزرق بالمصباح الشقي مع كشط قاع الآفة وإجراء مزرعة ميكروبية.",
          "firstLineRx": "قطرات مضادات حيوية مكثفة مدعمة (Fortified Antibiotics مثل فانكوميسين وتوبراميسين) كل ساعة.",
          "keyDifferentiator": "تسبب عتامة بيضاء مرئية بالقرنية مع تجمع صديدي صريح في قاع الغرفة الأمامية (Hypopyon)."
    },
    "English": {
          "etiology": "Bacterial, fungal, or Acanthamoeba stromal invasion following epithelial breakdown, often linked to soft contact lenses.",
          "goldStandard": "Slit-lamp examination with fluorescein staining, accompanied by corneal scraping for Gram stain and culture.",
          "firstLineRx": "Hourly fortified topical antibacterial drops (e.g., tobramycin and vancomycin or high-potency fluoroquinolones).",
          "keyDifferentiator": "Directly visible focal white stromal infiltrate often associated with an anterior chamber sterile hypopyon."
    }
  },
  "w521": {
    "Arabic": {
          "etiology": "خلل مناعي ذاتي مرتبط بـ HLA-B27 وداء بهجت والغرناوية، أو عدوى كالهربس والزهري.",
          "goldStandard": "الفحص بالمصباح الشقي لإثبات وجود خلايا التهابية ووميض بروتيني (Cells and Flare) في الغرفة الأمامية.",
          "firstLineRx": "قطرات الستيرويدات الموضعية القوية بجرعات متقاربة مع قطرات موسعة ومشلة للعضلة الهدبية (Cyclopentolate).",
          "keyDifferentiator": "يحدث احتقاناً وعائياً عميقاً حول القرنية مباشرة (Ciliary flush) مع التصاقات قزحية بالعدسة وتغير شكل الحدقة."
    },
    "English": {
          "etiology": "Autoimmune dysregulation linked to HLA-B27, Behçet disease, or sarcoidosis, occasionally triggered by viral or treponemal agents.",
          "goldStandard": "High-magnification slit-lamp biomicroscopy establishing inflammatory anterior chamber cells and proteinaceous flare.",
          "firstLineRx": "Intensive topical corticosteroid regimens combined with cycloplegic agents to relieve ciliary spasm and prevent synechiae.",
          "keyDifferentiator": "Displays deep violaceous perilimbal ciliary injection and irregularly shaped pupil due to posterior adhesions."
    }
  },
  "w525": {
    "Arabic": {
          "etiology": "فرط نمو بكتيريا المكورات العنقودية أو انسداد غدد ميبوميوس الدهنية واختلال إفرازاتها.",
          "goldStandard": "فحص حواف الجفون بالمصباح الشقي لاكتشاف سدادات الدهون أو قشور الأسطوانية للرموش (Collarettes).",
          "firstLineRx": "كمادات دافئة وتدليك حواف الجفون بانتظام مع تنظيف منابت الرموش بقطن ومحلول منظف مخصص.",
          "keyDifferentiator": "التهاب موضعي مقتصر على أطراف الجفن لا يسبب عتامة بالقرنية ولا يؤثر على سلامة رد الفعل الحدقي."
    },
    "English": {
          "etiology": "Staphylococcal colonization, meibomian lipid stagnation, or Demodex mite proliferation along the eyelash follicles.",
          "goldStandard": "Slit-lamp examination revealing thickened lid margins, plugged meibomian orifices, and cylindrical lash collarettes.",
          "firstLineRx": "Consistent eyelid hygiene routines, thermal compress therapy, and vertical eyelid margin massage.",
          "keyDifferentiator": "Isolated strictly to the palpebral border, preserving visual acuity and pupillary dynamics entirely."
    }
  },
  "w539": {
    "Arabic": {
          "etiology": "عدوى فيروسية (HSV) أو بكتيرية أو أميبية تهاجم الطبقة الشفافة السطحية للعين.",
          "goldStandard": "فحص الفلورسين بالمصباح الشقي لإظهار التقرح التفرعي الشجري المميز لهربس القرنية.",
          "firstLineRx": "مضادات الفيروسات الموضعية كمرهم الآسيكلوفير أو الغانسيكلوفير للنوع الهربسي، وقطرات مضادات حيوية للبكتيري.",
          "keyDifferentiator": "ألم عيني شديد يرافقه وذمة قرنية واضحة مع إمكانية فقدان الإحساس القرني في الإصابة الهربسية المزمنة."
    },
    "English": {
          "etiology": "Infectious invasion (Herpes simplex, Pseudomonas, or Acanthamoeba) colonizing the anterior refracting window.",
          "goldStandard": "Slit-lamp biomicroscopy with fluorescein dye highlighting classic terminal-budded dendritic branching epithelial lesions.",
          "firstLineRx": "Topical antiviral ointments (acyclovir or ganciclovir) for HSV; targeted antimicrobial drops for bacterial forms.",
          "keyDifferentiator": "Features prominent corneal stromal edema, photophobia, and reduced corneal sensation (neurotrophic keratitis) in chronic cases."
    }
  },
  "w542": {
    "Arabic": {
          "etiology": "انسداد ميكانيكي لفتحات غدد ميبوميوس التارسال يؤدي لاحتباس الدهون وتفاعل حبيبومي جسمي غريب غير بكتيري.",
          "goldStandard": "التشخيص الإكلينيكي بفحص الجفن وقلبه لرؤية الكتلة الصلبة غير المؤلمة المغطاة بغشاء أصفر رمادي.",
          "firstLineRx": "كمادات دافئة موضعية مكثفة 4 مرات يومياً مع تدليك الجفن؛ والتدخل الجراحي بالكحت في حال فشل العلاج التحفظي.",
          "keyDifferentiator": "كتلة صلبة غير مؤلمة داخل الجفن تميزه تماماً عن دمل الجفن الإنتاني الحاد شديد الألم (Stye)."
    },
    "English": {
          "etiology": "Lipogranulomatous inflammatory blockage of tarsal meibomian glands without active acute bacterial infection.",
          "goldStandard": "Clinical inspection upon eyelid eversion showing a focal, firm, non-tender nodular elevation within the tarsal plate.",
          "firstLineRx": "Intensive warm compress therapy with firm digital massage; surgical incision and curettage if unresolved after weeks.",
          "keyDifferentiator": "A chronic indolent non-tender mass, easily distinguished from the exquisitely painful, acute erythematous stye."
    }
  },
  "w543": {
    "Arabic": {
          "etiology": "تغير تنكسي تكاثري للألياف الكولاجينية للملتحمة والأوعية نتيجة التعرض الطويل للأشعة فوق البنفسجية والغبار.",
          "goldStandard": "المعاينة السريرية بالمصباح الشقي لرؤية الامتداد الوعائي المثلثي المتصل من الملتحمة إلى القرنية وخط ستوكر (Stocker line).",
          "firstLineRx": "حماية العين بالنظارات الشمسية والقطرات المرطبة؛ والاستئصال الجراحي مع الترقيع الذاتي عند تهديد محور البصر.",
          "keyDifferentiator": "نسيج وعائي ليفي مميز يتجاوز الحافة القرنية (Limbus) ويزحف مباشرة على القرنية بخلاف الشحيمة (Pinguecula)."
    },
    "English": {
          "etiology": "Elastotic degeneration of conjunctival collagen coupled with fibrovascular limbal proliferation induced by UV-B radiation.",
          "goldStandard": "Slit-lamp examination demonstrating a wing-shaped vascular growth crossing the limbus onto the cornea, with Stocker iron line.",
          "firstLineRx": "UV blocking sunglasses and topical artificial tear lubrication; surgical excision with autologous graft when encroaching visual axis.",
          "keyDifferentiator": "Actively crosses the corneal limbus and invades the clear stroma, whereas pingueculae remain confined entirely to the sclera."
    }
  },
  "w544": {
    "Arabic": {
          "etiology": "ضعف هيكلي جيني في ألياف كولاجين القرنية تفاقمه الصدمات الميكانيكية المزمنة الناجمة عن فرك العين.",
          "goldStandard": "التصوير الطبوغرافي المقطعي لسطح القرنية (Corneal Topography / Pentacam) لإثبات ترقق وبروز السطح الخلفي والأمامي.",
          "firstLineRx": "تثبيت روابط كولاجين القرنية (Corneal Collagen Cross-linking - CXL) لإيقاف التدهور، مع استخدام عدسات صلبة نافذة للغاز.",
          "keyDifferentiator": "انبعاج مخروطي محدد للقرنية مع حلقات فلايشر للحديد وعلامة مونسون، مع تدهور سريع لقوة الإبصار في سن الشباب."
    },
    "English": {
          "etiology": "Biomechanical structural weakness of stromal collagen matrix coupled with genetic susceptibility and chronic mechanical eye rubbing.",
          "goldStandard": "Corneal topography and Scheimpflug tomography (Pentacam) demonstrating posterior/anterior elevation and pachymetric thinning.",
          "firstLineRx": "Corneal collagen cross-linking with riboflavin (CXL) to stabilize the cornea, followed by rigid gas-permeable or scleral contact lenses.",
          "keyDifferentiator": "Progressive conical ectasia with lower lid protrusion on downgaze (Munson sign) and Fleischer ring iron deposition."
    }
  },
  "w548": {
      "Arabic": {
          "etiology": "عدم اكتمال نمو أوعية الشبكية في الخدج؛ فرط الأكسجين بالحاضنة يوقف نموها الأولي، ثم يحفز نقص الأكسجة فرط عامل نمو البطانة الوعائية VEGF.",
          "goldStandard": "فحص قاع العين الموسع الدوري بالمنظار العيني غير المباشر مع مباعد الجفون وكشف خط الترسيم وعلامة بلس (Plus disease).",
          "firstLineRx": "التخثير الضوئي بالليزر للأطراف الشبكية غير الموعاة (Laser photocoagulation) أو حقن البيفاسيزوماب المضاد للـ VEGF داخل الزجاجي.",
          "keyDifferentiator": "أوعية شبكية غير مكتملة ونمو وعائي شاذ لدى طفل خديج في الحاضنة مع علامة Plus disease يهدد بانفصال الشبكية."
      },
      "English": {
          "etiology": "Incomplete retinal vascularization arrested by supplemental hyperoxia downregulating VEGF, followed by hypoxia-driven neovascular surge.",
          "goldStandard": "Serial dilated indirect ophthalmoscopy documenting vascular arrest, demarcation ridge, and posterior pole arteriolar tortuosity (plus disease).",
          "firstLineRx": "Diode laser photocoagulation to avascular peripheral retina or intravitreal anti-VEGF (Bevacizumab/Ranibizumab) injection.",
          "keyDifferentiator": "Neovascular ridge formation and plus disease tortuosity in a preterm infant with prior oxygen exposure, managed with retinal laser."
      }
  },
  "w564": {
    "Arabic": {
          "etiology": "انسداد المسام بفرط التقرن مع فرط إفراز الغدد الدهنية تحت تأثير الأندروجينات وتكاثر بكتيريا Cutibacterium acnes.",
          "goldStandard": "التشخيص الإكلينيكي البحت بمعاينة الوجه والظهر لرؤية الزؤان (Comedones) المتعدد مع الحطاطات والبثور.",
          "firstLineRx": "بنزويل بيروكسايد الموضعي مع ريتينويد موضعي (أدابالين) للحالات البسيطة، والإيزوتريتينوين الفموي للحالات العقدية المتكيسة.",
          "keyDifferentiator": "وجود الزؤان (Comedones) كعلامة فارقة حاسمة تميزه عن الوردية (Rosacea) التي تخلو تماماً من الرؤوس السوداء أو البيضاء."
    },
    "English": {
          "etiology": "Androgen-mediated sebum hypersecretion, follicular infundibular hyperkeratosis, and Cutibacterium acnes colonization.",
          "goldStandard": "Clinical visual dermatologic assessment confirming hallmark comedones alongside polymorphic papulopustular lesions.",
          "firstLineRx": "Topical benzoyl peroxide plus topical retinoid (adapalene); oral isotretinoin for severe recalcitrant nodular scarring disease.",
          "keyDifferentiator": "Presence of comedones (open and closed) represents the pathognomonic hallmark distinguishing it from acne rosacea."
    }
  },
  "w565": {
    "Arabic": {
          "etiology": "طفرات جينية في مسار إشارات هيدجهوغ (Hedgehog pathway / PTCH1) ناجمة عن التعرض المزمن للأشعة فوق البنفسجية.",
          "goldStandard": "الخزعة الجلدية بالمقراض (Punch/Shave Biopsy) لإثبات وجود أعشاش من الخلايا القاعدية مع سياج نووي محيطي (Peripheral palisading).",
          "firstLineRx": "الاستئصال الجراحي بهوامش أمان أو جراحة موهز الميكروغرافية في الوجه والمناطق الحساسة تجميلياً.",
          "keyDifferentiator": "مظهر العقدة اللؤلؤية الشفافة مع الأوعية المتوسعة الشجرية والنمو الموضعي البطيء جداً بدون انتشار بعيد."
    },
    "English": {
          "etiology": "Mutational inactivation of the PTCH1 gene activating the Sonic Hedgehog signaling pathway induced by chronic UV exposure.",
          "goldStandard": "Punch or shave skin biopsy showing basaloid keratinocyte nests displaying characteristic peripheral nuclear palisading.",
          "firstLineRx": "Standard surgical excision with margin clearance or Mohs micrographic surgery for high-risk facial cosmetically sensitive areas.",
          "keyDifferentiator": "Pearly translucent papulonodular contour with fine branching telangiectasias and virtually zero metastatic potential."
    }
  },
  "w566": {
    "Arabic": {
          "etiology": "استجابة التهابية دهنية جلدية لتكاثر خمائر الملاسيزية الفطرية المعتمدة على إفرازات الزهم.",
          "goldStandard": "التشخيص الإكلينيكي البحت القائم على التوزيع الكلاسيكي في الثنايا الأنفية الشفوية وفروة الرأس مع القشور الدهنية الصفراء.",
          "firstLineRx": "شامبوهات وكريمات الكيتوكونازول الموضعية المضادة للفطريات (Ketoconazole 2%) مع كورتيزون موضعي خفيف في النوبات الحادة.",
          "keyDifferentiator": "قشور صفراء دهنية لزجة متوضعة في مناطق الغدد الدهنية دون المساس ببقية الجلد الجاف."
    },
    "English": {
          "etiology": "Epidermal barrier inflammatory reaction to lipid metabolites produced by commensal Malassezia furfur yeasts.",
          "goldStandard": "Clinical diagnostic recognition based upon classic greasy salmon-colored scaly plaques over nasolabial and scalp seborrheic tracts.",
          "firstLineRx": "Topical antifungal shampoos (ketoconazole 2%, ciclopirox, selenium sulfide) combined with mild topical hydrocortisone.",
          "keyDifferentiator": "Characteristically greasy, yellowish adherent squames confined strictly to sebum-dense zones, distinguishing it from plaque psoriasis."
    }
  },
  "w567": {
      "Arabic": {
          "etiology": "عدوى جرثومية سريعة التوغل بالمكورات العقدية المقيحة (GAS) أو جراثيم لاهوائية تفرز ذيفانات خارجية تسبب خثار الأوعية ونخر اللفافة.",
          "goldStandard": "الاستكشاف الجراحي الطارئ المباشر في غرفة العمليات وملاحظة اللفافة الرمادية المتنخرة وعدم النزف وخروج سائل غسيل الأطباق.",
          "firstLineRx": "التنضير الجراحي الإسعافي الواسع لجميع الأنسجة الميتة مع مضادات حيوية وريدية واسعة (فانكومايسين + ميروبينيم + كليندامايسين).",
          "keyDifferentiator": "ألم عنيف يفوق المظهر السريري مع فرقعة غازية وسرعة نخر اللفافة العميقة التي تتطلب تدخلاً جراحياً عاجلاً."
      },
      "English": {
          "etiology": "Rapidly spreading bacterial infection (Streptococcus pyogenes or mixed anaerobes) producing exotoxins that infarct fascial vessels.",
          "goldStandard": "Emergency surgical exploration confirming dull grey necrotic fascia, easy blunt finger separation, and lack of tissue bleeding.",
          "firstLineRx": "Immediate radical surgical debridement of all necrotic tissue paired with IV Vancomycin, Meropenem, and Clindamycin (anti-toxin).",
          "keyDifferentiator": "Agonizing pain out of proportion to skin changes followed by subcutaneous crepitus and bullae mandating surgical debridement."
      }
  },
  "w568": {
    "Arabic": {
          "etiology": "تفاعل تحسسي من النوع الأول يسبب إفراز الهيستامين والوسائط الالتهابية من الخلايا البدينة إثر محفزات مختلفة.",
          "goldStandard": "التشخيص الإكلينيكي المعتمد على رؤية الانتبارات المرتفعة الحاكة التي تتلاشى خلال 24 ساعة.",
          "firstLineRx": "مضادات الهيستامين الفموية من الجيل الثاني غير المهدئة (مثل السيتريزين أو اللوراتادين) بجرعات تصل لأربعة أضعاف.",
          "keyDifferentiator": "الانتبارات الجلدية المتنقلة العابرة التي تختفي من موضع وتظهر في آخر خلال ساعات دون أي تقشير أو تصبغ."
    },
    "English": {
          "etiology": "Type I IgE-dependent or non-immunologic degranulation of dermal mast cells dumping histamine into the interstitium.",
          "goldStandard": "Clinical history and physical examination demonstrating fleeting, migratory edematous wheals that disappear within 24 hours.",
          "firstLineRx": "Second-generation non-sedating oral H1-antihistamines (cetirizine, fexofenadine, or bilastine) titrated up to four-fold doses.",
          "keyDifferentiator": "Evanescent nature of individual lesions disappearing entirely within 24 hours without leaving post-inflammatory changes."
    }
  },
  "w569": {
      "Arabic": {
          "etiology": "تفاعل فرط حساسية مناعي متواسط بالخلايا التائية التسامية (CD4+/CD8+) محفز بنسبة تفوق 70% بشظايا الحمض النووي لفيروس الهربس البسيط (HSV).",
          "goldStandard": "التشخيص السريري برؤية الآفات الهدفية ثلاثية المناطق متحدة المركز في الأطراف، وتؤكد الخزعة النخر الحبيبي التدميري للبشرة.",
          "firstLineRx": "المعالجة العرضية بمضادات الهيستامين والكورتيكوستيرويدات الموضعية، مع الأسيكلوفير الفموي الوقائي لحالات الهربس الناكسة.",
          "keyDifferentiator": "آفات هدفية كلاسيكية بثلاث حلقات متحدة المركز في راحتي اليدين والأطراف تظهر عقب نوبة قرحة هربس الشفاه."
      },
      "English": {
          "etiology": "Cell-mediated type IV hypersensitivity response driven by herpes simplex virus (HSV) DNA fragments transported to skin by CD34+ cells.",
          "goldStandard": "Clinical recognition of typical three-zoned concentric target lesions on acral sites; skin biopsy showing basal layer vacuolization.",
          "firstLineRx": "Supportive topical steroids and antihistamines; suppressive oral Acyclovir therapy for recurrent HSV-associated episodes.",
          "keyDifferentiator": "Symmetric acral targetoid 'bullseye' lesions with three concentric color rings following a herpes labialis cold sore."
      }
  },
  "w570": {
    "Arabic": {
          "etiology": "أجسام مضادة ذاتية ترتبط بمستضدات الغشاء القاعدي BP180 و BP230 مما يفصل كامل البشرة عن الأدمة التحتية.",
          "goldStandard": "فحص التألق المناعي المباشر (DIF) للخزعة الجلدية مظهراً ترسباً خطياً متواصلاً لـ IgG و C3 على طول الغشاء القاعدي.",
          "firstLineRx": "الستيرويدات الموضعية القوية جداً (كريم كلوبيتاسول Clobetasol) على كامل الجسم، أو الستيرويدات الفموية.",
          "keyDifferentiator": "فقاعات سميكة متوترة صلبة غير رخوة، وسلبية علامة نيكولسكي، وندرة إصابة الأغشية المخاطية لدى كبار السن."
    },
    "English": {
          "etiology": "Autoantibodies directed against hemidesmosomal transmembrane structural proteins (BP180/BP230) anchoring the basement membrane.",
          "goldStandard": "Perilesional skin punch biopsy with direct immunofluorescence demonstrating a classic linear IgG and C3 line along the dermo-epidermal junction.",
          "firstLineRx": "High-potency superpotent topical corticosteroids (clobetasol propionate cream) or moderate-dose oral prednisone.",
          "keyDifferentiator": "Subepidermal tense sturdy non-fragile bullae, a negative Nikolsky sign, and absence of mucosal involvement in elderly patients."
    }
  },
  "w571": {
    "Arabic": {
          "etiology": "تفاعل تهيجي غير مناعي بالمواد الكيميائية، أو فرط حساسية خلوية متأخرة من النوع الرابع ناتجة عن مستضدات كالنيكل.",
          "goldStandard": "اختبار الرقعة الجلدية (Patch Testing) لتأكيد الحساسية التحسسية المتأخرة بعد استبعاد المواد المخرشة.",
          "firstLineRx": "تحديد المادة المسببة وتجنب ملامستها تماماً، مع تطبيق كريمات الكورتيكوستيرويد الموضعية والكمادات الباردة.",
          "keyDifferentiator": "طفح جلدي محدد بوضوح شديد يطابق بالضبط شكل وحدود المادة الملامسة (مثل زر الجينز المعدني أو سوار الساعة)."
    },
    "English": {
          "etiology": "Direct non-allergic chemical barrier dissolution (irritant) or delayed type IV T-cell-mediated hypersensitivity (allergic).",
          "goldStandard": "Standardized epicutaneous patch testing read at 48 and 72-96 hours identifying specific culprit allergen sensitization.",
          "firstLineRx": "Absolute allergen/irritant avoidance alongside barrier repair creams and potent topical corticosteroids for acute flares.",
          "keyDifferentiator": "Geometric or sharply demarcated cutaneous lesions conforming precisely to the physical boundary of the external contactant."
    }
  },
  "w572": {
    "Arabic": {
          "etiology": "طفرات في جين TP53 ناتجة عن التلف التراكمي للحمض النووي بالأشعة فوق البنفسجية في خلايا الكيراتينوسايت.",
          "goldStandard": "الخزعة الجلدية العميقة للآفة لإظهار ارتشاح الخلايا الشوكية الخبيثة وتكون لآلئ الكيراتين (Keratin pearls).",
          "firstLineRx": "الاستئصال الجراحي الكامل مع هوامش أمان كافية (4-6 ملم)، أو جراحة موهز الميكروغرافية للآفات عالية الخطورة.",
          "keyDifferentiator": "كتلة جلدية صلبة متقرنة سميكة سريعة التقرح وتنزف عند اللمس مع وجود خطر للانتشار اللمفاوي بخلاف الورم القاعدي."
    },
    "English": {
          "etiology": "Cumulative UV-induced driver mutations (notably in the TP53 tumor suppressor gene) within epidermal keratinocytes.",
          "goldStandard": "Deep punch or incisional biopsy capturing dermal invasion and pathognomonic laminated eosinophilic keratin pearls.",
          "firstLineRx": "Complete surgical excision with defined 4-6 mm peripheral margins or Mohs micrographic surgery for high-risk facial lesions.",
          "keyDifferentiator": "Thick hyperkeratotic, crusted, frequently ulcerated nodule demonstrating true regional nodal metastatic capacity."
    }
  },
  "w573": {
    "Arabic": {
          "etiology": "إعادة تنشيط فيروس النطاقي الحماقي (VZV) الكامن في العقد الشوكية الظهرية نتيجة انخفاض المناعة الخلوية مع التقدم في السن.",
          "goldStandard": "التشخيص السريري المباشر بالطفح الحويصلي المؤلم المحصور في مسار عصب جلدي أحادي الجانب، ويؤكد باختبار PCR.",
          "firstLineRx": "مضادات الفيروسات الفموية (Valacyclovir بجرعة 1000 ملغ 3 مرات يومياً) لمدة 7 أيام بدءاً من أول 72 ساعة، مع مسكنات الألم.",
          "keyDifferentiator": "حويصلات مجمعة في شريط جلدي محدد (Dermatome) تحترم خط منتصف الجسم بدقة متناهية ولا تعبره للجهة الأخرى."
    },
    "English": {
          "etiology": "Reactivation of latent Varicella-Zoster Virus (VZV) dormant within cranial or spinal sensory dorsal root ganglia.",
          "goldStandard": "Clinical visual recognition of clustered dermatomal vesicles strictly bounded by the midline; confirmed by viral PCR swabs if atypical.",
          "firstLineRx": "Oral antiviral nucleoside analogues (valacyclovir 1000 mg TID or famciclovir) within 72 hours of symptom onset, plus neuropathic analgesia.",
          "keyDifferentiator": "Unilateral dermatomal belt distribution that halts abruptly at the anatomical vertical midline without crossing."
    }
  },
  "w586": {
    "Arabic": {
          "etiology": "تفاعل فرط حساسية جهازي فوري من النوع الأول يسبب إطلاقاً صاعقاً للهيستامين وموسعات الأوعية في كافة أنحاء الجسم.",
          "goldStandard": "التشخيص الإكلينيكي الفوري بناء على المعايير السريرية لتأثر جهازين أو أكثر أو حدوث هبوط مفاجئ في الضغط.",
          "firstLineRx": "حقن الإبينفرين عضلياً في الوجه الوحشي للفخذ (جرعة 0.3-0.5 ملغ للبالغين)، مع الأكسجين وسوائل وريدية سريعة.",
          "keyDifferentiator": "هبوط حاد في ضغط الدم وانسداد مجرى التنفس بوذمة الحنجرة بعد تعرض مباشر لمسبب تحسسي معروف."
    },
    "English": {
          "etiology": "Massive systemic IgE-dependent degranulation of basophils and mast cells provoking simultaneous distributive shock and bronchospasm.",
          "goldStandard": "Immediate clinical diagnosis meeting consensus criteria (acute onset mucosal compromise, respiratory distress, and hypotension).",
          "firstLineRx": "Intramuscular epinephrine (1:1000) 0.3-0.5 mg injected immediately into the anterolateral vastus lateralis muscle, IV fluid boluses, and oxygen.",
          "keyDifferentiator": "Rapidly progressive hemodynamic collapse accompanied by stridor and acute airway compromise following allergen exposure."
    }
  },
  "w587": {
    "Arabic": {
          "etiology": "خلل في التحمل المناعي يؤدي لتكوين أجسام مضادة ضد المكونات النووية وترسب معقدات مناعية وتلف بالأوعية والأعضاء.",
          "goldStandard": "استيفاء معايير EULAR/ACR بإيجابية فحص ANA مع ارتفاع أضداد Anti-dsDNA وانخفاض المتمم (C3/C4).",
          "firstLineRx": "الهيدروكسي كلوروكوين (Hydroxychloroquine) كعلاج أساسي لجميع المرضى، مع الكورتيكوستيرويدات ومثبطات المناعة في الإصابات الكلوية.",
          "keyDifferentiator": "طفح الفراشة الجلدي بالوجه مع التهاب المفاصل وترسبات كلوية وإيجابية مضادات Anti-dsDNA النوعية."
    },
    "English": {
          "etiology": "Systemic breakdown of self-tolerance generating pathogenic autoantibodies against nucleic acids and chromatin with immune complex vasculitis.",
          "goldStandard": "Classification via EULAR/ACR criteria: positive ANA entry criterion plus specific Anti-dsDNA or Anti-Smith titers and complement consumption.",
          "firstLineRx": "Lifelong hydroxychloroquine for all patients; pulse systemic glucocorticoids combined with mycophenolate or cyclophosphamide for nephritis.",
          "keyDifferentiator": "Photosensitive malar butterfly rash, polyarthritis, glomerulonephritis, and high-titer Anti-dsDNA antibodies."
    }
  },
  "w588": {
    "Arabic": {
          "etiology": "أجسام مضادة ذاتية IgG تستهدف الغشاء القاعدي الكبيبي والسنخي (Anti-GBM) مسببة تفاعل فرط حساسية من النوع الثاني وتدمير الأنسجة.",
          "goldStandard": "فحص مصل الدم لإثبات وجود أضداد Anti-GBM مع خزعة الكلى التي تظهر ترسباً خطياً مستمراً بالتألق المناعي وتكون الأهلة (Crescents).",
          "firstLineRx": "جلسات فصادة البلازما اليومية (Plasmapheresis) لغسيل الأجسام المضادة مع جرعات عالية من الكورتيزون وسيكلوفوسفاميد.",
          "keyDifferentiator": "الجمع المزدوج الحاد بين بصق الدم الرئوي والقصور الكلوي السريع مع النمط الخطي لترسب الأجسام المضادة."
    },
    "English": {
          "etiology": "Type II cytotoxic hypersensitivity driven by autoantibodies against the alpha-3 chain of Type IV collagen shared by alveoli and glomeruli.",
          "goldStandard": "Serum anti-GBM antibody immunoassay confirmed by renal biopsy displaying linear immunofluorescent IgG tracking and extensive crescentic destruction.",
          "firstLineRx": "Immediate daily therapeutic plasma exchange (plasmapheresis) combined with pulse methylprednisolone and oral cyclophosphamide.",
          "keyDifferentiator": "Coexisting alveolar pulmonary hemorrhage and rapidly progressive glomerulonephritis with a linear basement membrane IgG deposition pattern."
    }
  },
  "w589": {
    "Arabic": {
          "etiology": "حذف صبغي 22q11.2 يؤدي لخلل في تشكل الجيوب البلعومية 3 و 4 مع غياب نسيج الغدة الزعترية والغدد جارات الدرقية.",
          "goldStandard": "فحص التهجين الموضعي المشع (FISH) أو تحليل المصفوفة الدقيقة الصبغية (Chromosomal Microarray) لإثبات الحذف الصبغي.",
          "firstLineRx": "تصحيح نقص الكالسيوم الوريدي الحاد وإعطاء فيتامين د، وزراعة نسيج الغدة الزعترية للحالات الشديدة، وإصلاح عيوب القلب جراحياً.",
          "keyDifferentiator": "الثالوث الكلاسيكي: غياب الظل الزعتري بالأشعة، ونقص الكالسيوم التكززي، وعيوب القلب الخلقية المخروطية."
    },
    "English": {
          "etiology": "Microdeletion at chromosome locus 22q11.2 impairing neural crest cell migration into the 3rd and 4th pharyngeal pouches.",
          "goldStandard": "Fluorescence in situ hybridization (FISH) or chromosomal microarray definitively confirming the 22q11.2 genetic deletion.",
          "firstLineRx": "Acute calcium gluconate repletion and active vitamin D analogs; allogeneic thymic tissue transplantation for severe athymia.",
          "keyDifferentiator": "Classic developmental constellation of absent thymic shadow, hypocalcemic tetany, and conotruncal congenital heart defects."
    }
  },
  "w590": {
    "Arabic": {
          "etiology": "طفرة في جين BTK تمنع نضج الخلايا البائية مما يؤدي لغيابها من الدم التداولي وانعدام كافة أصناف الأجسام المضادة.",
          "goldStandard": "قياس التدفق الخلوي (Flow Cytometry) لإثبات غياب الخلايا البائية CD19+ في الدم مع انخفاض حاد في جميع فئات الغلوبولينات.",
          "firstLineRx": "حقن الغلوبولين المناعي الوريدي التعويضي بانتظام (IVIG كل 3-4 أسابيع) مدى الحياة مع العلاج المبكر بالمضادات الحيوية.",
          "keyDifferentiator": "ضمور شديد في اللوزتين والعقد اللمفاوية مع غياب شبه كامل لكافة الأجسام المضادة وخلايا B في طفل ذكر."
    },
    "English": {
          "etiology": "X-linked mutation in the Bruton tyrosine kinase (BTK) gene arresting B-cell differentiation in the bone marrow.",
          "goldStandard": "Flow cytometry demonstrating profoundly depleted or absent peripheral CD19+ B lymphocytes alongside negligible serum immunoglobulin levels.",
          "firstLineRx": "Lifelong periodic intravenous or subcutaneous immunoglobulin (IVIG/SCIG) replacement therapy and aggressive antibiotic protocols.",
          "keyDifferentiator": "Male infant presenting past 6 months with absent tonsillar tissue, recurrent encapsulated bacterial infections, and near-zero B cells."
    }
  },
  "w591": {
    "Arabic": {
          "etiology": "خلل وراثي جيني في مستقبلات السيتوكينات (IL2RG) أو إنزيم ADA يمنع تطور ونضج كل من الخلايا اللمفاوية التائية والبائية.",
          "goldStandard": "فحص مسح حديثي الولادة لدوائر استئصال مستقبلات الخلايا التائية (TRECs) في الدم الجاف مع قياس التدفق الخلوي.",
          "firstLineRx": "زراعة الخلايا الجذعية المكونة للدم (Bone Marrow Transplantation) كعلاج شافٍ وحيد، مع العزل المعقم الصارم والمضادات الوقائية.",
          "keyDifferentiator": "فقدان شامل تام لكلا المناعتين الخلوية والخلطية مع عدوى فطرية وانتهازية مبكرة مهددة للحياة في الأشهر الأولى."
    },
    "English": {
          "etiology": "Defective common gamma chain cytokine signaling or adenosine deaminase toxicity causing developmental arrest of both T and B lymphocytes.",
          "goldStandard": "Newborn screening via T-cell receptor excision circles (TRECs) assay, confirmed by flow cytometry showing profound lymphopenia.",
          "firstLineRx": "Allogeneic hematopoietic stem cell transplantation (HSCT) performed emergently, supplemented by sterile reverse isolation and prophylaxis.",
          "keyDifferentiator": "Complete simultaneous collapse of both T-cell and B-cell immune arms presenting with severe opportunistic infections in infancy."
    }
  },
  "w593": {
    "Arabic": {
          "etiology": "مهاجمة الخلايا التائية المناعية الحية القادمة من الطعم المزروع لأنسجة المضيف المستقبل نتيجة التباين النسيجي التوافقي.",
          "goldStandard": "الخزعة النسيجية من الجلد أو بطانة المستقيم/الأمعاء لإثبات استماتة ونخر الخلايا الطلائية وحويصلات الكريبت.",
          "firstLineRx": "الستيرويدات القشرية الجهازية الوريدية بجرعات عالية (ميثيل بريدنيزولون 2 ملغ/كغ/يوم) مع استمرار مثبطات المناعة.",
          "keyDifferentiator": "حدوث ثالوث الطفح الجلدي والإسهال الصفراوي الغزير واليرقان الركودي تحديداً بعد زراعة نخاع العظم الخيفي."
    },
    "English": {
          "etiology": "Donor graft alloreactive T lymphocytes recognizing mismatched host recipient histocompatibility antigens as foreign, destroying host tissues.",
          "goldStandard": "Histopathological biopsy of target skin or rectosigmoid mucosa revealing characteristic apoptotic crypt cell dropouts.",
          "firstLineRx": "High-dose intravenous systemic methylprednisolone (2 mg/kg/day) paired with optimized calcineurin inhibitor regimens.",
          "keyDifferentiator": "The distinctive presentation of secretory watery diarrhea, palmar-plantar erythema, and cholestasis occurring post-allogeneic stem cell graft."
    }
  },
  "w595": {
    "Arabic": {
          "etiology": "تحول سرطاني لخلايا البائية اللمفاوية في مراكز التكاثر يرتبط بفيروس إبشتاين-بار (EBV) مع ظهور خلايا ريد-ستيرنبيرغ.",
          "goldStandard": "خزعة استئصالية كاملة للعقدة اللمفاوية (Excisional Lymph Node Biopsy) لإثبات وجود خلايا Reed-Sternberg إيجابية CD30 و CD15.",
          "firstLineRx": "بروتوكول العلاج الكيميائي التوليفي ABVD (دوكسوروبيسين، بليوميسين، فينبلستين، داكاربازين) مع العلاج الإشعاعي الموضعي.",
          "keyDifferentiator": "خلايا ريد-ستيرنبيرغ العملاقة ثنائية النوى بنمط عيون البومة مع الانتشار المنظم المتتالي من عقدة لأخرى."
    },
    "English": {
          "etiology": "Malignant clonal transformation of germinal center B lymphocytes, strongly linked in many subtypes to Epstein-Barr Virus (EBV).",
          "goldStandard": "Excisional lymph node biopsy confirming binucleated Reed-Sternberg cells characteristically immunophenotyped as CD30+ and CD15+.",
          "firstLineRx": "Combination chemotherapy with the ABVD regimen (Doxorubicin, Bleomycin, Vinblastine, Dacarbazine) with or without involved-site radiotherapy.",
          "keyDifferentiator": "Microscopic pathognomonic owl-eyed Reed-Sternberg cells embedded in an abundant reactive inflammatory background."
    }
  },
  "w596": {
    "Arabic": {
          "etiology": "طفرات جينية وانتقالات صبغية مسببة للأورام (مثل انتقال t(14;18) في جين BCL-2) تصيب الخلايا اللمفاوية.",
          "goldStandard": "الخزعة النسيجية الاستئصالية للعقدة أو العضو المصاب مع دراسة التنميط المناعي (Immunophenotyping) والتدفق الخلوي.",
          "firstLineRx": "بروتوكول العلاج المناعي الكيميائي R-CHOP (ريتوكسيماب، سيكلوفوسفاميد، دوكسوروبيسين، فينكريستين، وبريدنيزون).",
          "keyDifferentiator": "تضخم عقدي منتشر غير متتالٍ مع إصابة متكررة للأعضاء خارج العقد وغياب خلايا ريد-ستيرنبيرغ."
    },
    "English": {
          "etiology": "Somatic chromosomal translocations (such as t(14;18) overexpressing BCL-2) and molecular lesions arresting lymphoid differentiation.",
          "goldStandard": "Excisional lymph node or extranodal tissue biopsy analyzed with immunohistochemical panels, flow cytometry, and cytogenetics.",
          "firstLineRx": "R-CHOP chemoimmunotherapy (Rituximab, Cyclophosphamide, Hydroxydaunorubicin, Oncovin/Vincristine, Prednisone).",
          "keyDifferentiator": "Non-contiguous nodal involvement with high predilection for extranodal visceral sites and total lack of Reed-Sternberg giants."
    }
  },
  "w597": {
    "Arabic": {
          "etiology": "تحول خبيث لخلايا الغدد العصبية الصماء في الرئة مدفوع بطفرات تعطيلية مزدوجة في جينات TP53 و RB1 إثر التدخين الكثيف.",
          "goldStandard": "الخزعة النسيجية عبر تنظير القصبات الهوائية مع الصبغ المناعي الإيجابي للواسمات العصبية الصماوية (Chromogranin / Synaptophysin).",
          "firstLineRx": "العلاج الكيميائي التوليفي القائم على البلاتين (سيسبلاتين أو كاربوبلاتين مع إيتوبوسيد) مع العلاج المناعي وإشعاع الجمجمة الوقائي.",
          "keyDifferentiator": "كتلة رئوية مركزية لدى مدخن شره مع متلازمات هرمونية أباعد ورامية (SIADH أو Cushing) وخلايا مجهرية شبيهة بالشوفان."
    },
    "English": {
          "etiology": "Malignant neuroendocrine bronchial transformation driven by near-universal biallelic inactivation of TP53 and RB1 from tobacco carcinogens.",
          "goldStandard": "Bronchoscopic core biopsy exhibiting small dark neuroendocrine cells positive for synaptophysin, chromogranin A, and CD56.",
          "firstLineRx": "Systemic platinum-doublet chemotherapy (cisplatin/carboplatin plus etoposide) combined with PD-L1 immune checkpoint inhibitors.",
          "keyDifferentiator": "Centrally placed hilar mass with paraneoplastic neuroendocrine syndromes (SIADH/Cushing) and microscopic oat-cell morphology."
    }
  },
  "w598": {
    "Arabic": {
          "etiology": "طفرات متراكمة في خلايا الكبد ناجمة عن الالتهاب المزمن والتجدد النسيجي المستمر في بيئة التليف (خاصة التهاب الكبد B و C).",
          "goldStandard": "الأشعة المقطعية أو الرنين الديناميكي رباعي المراحل مبيناً تعزيزاً شريانياً كبيراً يتبعه غسيل سريع بالطور الوريدي (Washout).",
          "firstLineRx": "الاستئصال الجراحي أو زراعة الكبد للحالات المبكرة؛ والكي الموضعي أو الحقن الشرياني (TACE) والعلاج المناعي للحالات المتقدمة.",
          "keyDifferentiator": "كتلة كبدية ناشئة في كبد متليف تفرز ألفا فيتو بروتين وتظهر ظاهرة الغسيل السريع (Washout) في الأشعة المقطعية متعددة المراحل."
    },
    "English": {
          "etiology": "Malignant transformation of hepatocytes driven by chronic necroinflammation, oxidative stress, and regenerative cycles in cirrhosis.",
          "goldStandard": "Dynamic multiphasic contrast-enhanced CT or MRI demonstrating characteristic arterial phase hyperenhancement with delayed washout.",
          "firstLineRx": "Surgical resection or orthotopic liver transplantation for early disease; transarterial chemoembolization (TACE) or atezolizumab-bevacizumab for advanced cases.",
          "keyDifferentiator": "Focal liver lesion evolving in a cirrhotic liver, displaying hallmark radiologic arterial enhancement with rapid venous washout."
    }
  },
  "w599": {
    "Arabic": {
          "etiology": "تحول خبيث تدرجي لبطانة المعدة من الالتهاب المزمن بالملوية البوابية إلى الحؤول المعوي ثم خلل التنسج والسرطان الغدي.",
          "goldStandard": "المنظار الهضمي العلوي (EGD) مع أخذ عينات وخزعات متعددة من حواف وقاع القرحة أو الكتلة المعدية المشبوهة.",
          "firstLineRx": "الاستئصال الجراحي للمعدة (جزئي أو كلي) مع تجريف العقد اللمفاوية المحيطية (D2 Lymphadenectomy) والعلاج الكيميائي المحيط بالجراحة.",
          "keyDifferentiator": "قرحة معدية خبيثة ذات حواف مرتفعة متآكلة تترافق بعقدة فيرجوف الرقبية وظهور خلايا فص الخاتم (Signet-ring)."
    },
    "English": {
          "etiology": "Stepwise gastric carcinogenesis proceeding from chronic H. pylori mucosal injury to intestinal metaplasia, dysplasia, and invasive adenocarcinoma.",
          "goldStandard": "Upper esophagogastroduodenoscopy (EGD) with comprehensive multiple biopsies of ulcerated or indurated gastric lesions.",
          "firstLineRx": "Total or subtotal surgical gastrectomy combined with extended D2 lymphadenectomy and perioperative fluoropyrimidine-platinum chemotherapy.",
          "keyDifferentiator": "Malignant non-healing gastric ulcer exhibiting signet-ring cell histology, capable of metastatic seeding to Virchow's node."
    }
  },
  "w600": {
    "Arabic": {
          "etiology": "طفرات جينية سائدة في الجين الورمي KRAS (أكثر من 90%) وتعطيل جينات كابتة للأورام كـ CDKN2A و TP53 في بطانة قنوات البنكرياس.",
          "goldStandard": "الأشعة المقطعية المخصصة للبنكرياس متعددة المراحل (Pancreatic Protocol CT) متبوعة بالسونار التنظيري (EUS) والخزعة بالإبرة.",
          "firstLineRx": "جراحة استئصال البنكرياس والاثني عشر (عملية ويبل Whipple) للحالات القابلة للاستئصال متبوعة بالعلاج الكيميائي المساعد بالفولفيرينوكس.",
          "keyDifferentiator": "يرقان انسدادي غير مؤلم مع مرارة متضخمة ملموسة غير مؤلمة (Courvoisier sign) وارتفاع حاد في CA 19-9."
    },
    "English": {
          "etiology": "Ductal epithelial transformation propelled by activating KRAS oncogene mutations (>90%) alongside inactivation of TP53 and SMAD4.",
          "goldStandard": "Multiphasic thin-slice pancreatic protocol helical CT supplemented by endoscopic ultrasound (EUS) with fine-needle aspiration.",
          "firstLineRx": "Pancreaticoduodenectomy (Whipple operation) for anatomically resectable disease, followed by adjuvant mFOLFIRINOX chemotherapy.",
          "keyDifferentiator": "Painless progressive obstructive jaundice paired with a palpable non-tender gallbladder (Courvoisier sign) and marked CA 19-9 elevation."
    }
  },
  "w601": {
    "Arabic": {
          "etiology": "طفرات في جينات إصلاح الكسور بالحمض النووي (BRCA1/2 و TP53) تنشأ غالباً من ظهارة خملات قناة فالوب وتنتشر إلى المبيض.",
          "goldStandard": "السونار المهبلي والأشعة المقطعية للحوض والبطن مع تأكيد التشخيص النسيجي واستئصال وتدريج الورم جراحياً.",
          "firstLineRx": "جراحة تقليص الورم القصوى (Maximal debulking) مع العلاج الكيميائي المساعد (كارببلاتين + باكليتاكسيل) ومثبطات PARP لحاملي طفرة BRCA.",
          "keyDifferentiator": "كتلة حوضية صلبة غير منتظمة لدى سيدة مع استسقاء بطني خبيث وارتفاع واسم الورم CA-125."
    },
    "English": {
          "etiology": "Defective homologous recombination repair (BRCA1/2 mutations) initiating neoplastic transformation within fallopian tubal/ovarian epithelia.",
          "goldStandard": "Transvaginal pelvic Doppler ultrasound and CT staging confirmed histopathologically through primary surgical staging and cytoreduction.",
          "firstLineRx": "Primary maximal surgical cytoreduction followed by systemic carboplatin-paclitaxel chemotherapy and maintenance PARP inhibitors.",
          "keyDifferentiator": "Complex adnexal mass presenting alongside malignant ascites and profound serum CA-125 elevation in a postmenopausal female."
    }
  },
  "w609": {
    "Arabic": {
          "etiology": "انفصال خلايا خبيثة من الورم الأصلي وغزو الغشاء القاعدي ودخول مجرى الدم أو اللمف والاستقرار في أعضاء حيوية أخرى.",
          "goldStandard": "التصوير المقطعي بالإصدار البوزيتروني المدمج (PET-CT) لتحديد مواقع البؤر الثانوية النشطة أيضياً مع تأكيد الخزعة.",
          "firstLineRx": "العلاجات الدوائية الجهازية (كيميائي، مناعي، أو موجه) للسيطرة على انتشار المرض مع العلاج التلطيفي للأعراض.",
          "keyDifferentiator": "وجود كتل ورمية ثانوية متعددة في أعضاء بعيدة كالكبد والرئة والعظام مثبتة المنشأ من نسيج ورمي أولي مختلف."
    },
    "English": {
          "etiology": "Epithelial-mesenchymal transition enabling primary tumor detachment, intravasation into vascular channels, extravasation, and distant colonization.",
          "goldStandard": "Whole-body 18F-FDG PET-CT scan identifying hypermetabolic secondary lesions, correlated histopathologically with immunohistochemistry.",
          "firstLineRx": "Comprehensive systemic antineoplastic regimens (targeted biologics, chemotherapy, or immunotherapy) tailored to the primary molecular driver.",
          "keyDifferentiator": "Disseminated secondary neoplastic deposits colonizing distant organ beds confirmed histologically to match the primary tumor origin."
    }
  },
  "w612": {
    "Arabic": {
          "etiology": "انتقال صبغي متوازن t(11;22) ينشئ البروتين الاندماجي EWS-FLI1 المسرطن في خلايا الأديم الظاهر العصبي غير الناضجة.",
          "goldStandard": "الخزعة العظمية مع الفحص الجزيئي (FISH أو RT-PCR) لإثبات وجود انتقال الكروموسومين t(11;22) وتعبير مستضد CD99.",
          "firstLineRx": "العلاج الكيميائي التوليفي المكثف قبل الجراحة (VDC/IE) متبوعاً بالاستئصال الجراحي الكامل أو العلاج الإشعاعي.",
          "keyDifferentiator": "أشعة سينية لعظم طفل تظهر تفاعل قشر البصل العظمي المميز مع أورام الخلايا الزرقاء الصغيرة الدائرية الموجبة لـ CD99."
    },
    "English": {
          "etiology": "Somatic chromosomal translocation t(11;22) generating the aberrant chimeric transcription factor EWS-FLI1.",
          "goldStandard": "Core needle bone biopsy coupled with molecular cytogenetics (FISH or RT-PCR) confirming the t(11;22) translocation and strong membranous CD99 positivity.",
          "firstLineRx": "Intensive multi-agent neoadjuvant chemotherapy (vincristine, doxorubicin, cyclophosphamide alternating with ifosfamide-etoposide), followed by definitive surgery.",
          "keyDifferentiator": "Diaphyseal long bone lesion in a child displaying concentric 'onion-skin' periostitis and CD99+ small round blue cell histology."
    }
  },
  "w613": {
    "Arabic": {
          "etiology": "طفرات تعطيلية ثنائية الأليل في الجين الكابت للأورام RB1 على الكروموسوم 13q14 في الخلايا العصبية لشبكية العين.",
          "goldStandard": "فحص قاع العين غير المباشر تحت التخدير العام وظهور كتل بيضاء طباشيرية متكلسة مع التصوير بالرنين المغناطيسي والموجات فوق الصوتية.",
          "firstLineRx": "العلاج الكيميائي الشرياني الموضعي عبر الشريان العيني لإنقاذ العين والبصر، أو استئصال المقلة (Enucleation) في الأورام المتقدمة.",
          "keyDifferentiator": "ظهور المنعكس الأبيض الشاذ في حدقة عين الرضيع (Leukocoria) واختفاء المنعكس الأحمر الطبيعي في الصور الفوتوغرافية."
    },
    "English": {
          "etiology": "Biallelic loss-of-function mutations within the canonical RB1 tumor suppressor gene locus on chromosome 13q14.",
          "goldStandard": "Dilated indirect ophthalmoscopy under general anesthesia coupled with high-resolution orbit MRI showing calcified intraocular retinal masses.",
          "firstLineRx": "Intra-arterial ophthalmic artery chemotherapy or laser photocoagulation for globe salvage; primary enucleation for advanced disease.",
          "keyDifferentiator": "Pathognomonic leukocoria (abnormal white pupillary reflex) replacing the normal red reflex in infant eye photography."
    }
  },
  "w614": {
    "Arabic": {
          "etiology": "تكاثر خبيث بطيء لخلايا الغدد العصبية الصماء المعوية يفرز السيروتونين والوسائط الوعائية مباشرة إلى الدورة الدموية.",
          "goldStandard": "ارتفاع مستويات حمض 5-HIAA في تجميع بول 24 ساعة مع التصوير بالنظائر المشعة للمستقبلات السوماتوستاتينية (OctreoScan / Gallium-68 DOTATATE).",
          "firstLineRx": "الاستئصال الجراحي للكتلة الأولية ونقائل الكبد، مع الحقن المنتظم لمشابهات السوماتوستاتين (Octreotide) لتثبيط الأعراض وإبطاء النمو.",
          "keyDifferentiator": "نوبات الاحمرار الجلدي الفجائي المفاجئ المترافقة مع إسهال مائي مستمر وأضرار في صمامات القلب اليمنى."
    },
    "English": {
          "etiology": "Neoplastic neuroendocrine proliferation dumping high-affinity serotonin and vasoactive kinins escaping hepatic monoamine oxidase breakdown.",
          "goldStandard": "Markedly elevated 24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA) paired with somatostatin receptor PET imaging (68Ga-DOTATATE).",
          "firstLineRx": "Surgical cytoreduction of primary and hepatic tumors, backed by long-acting somatostatin receptor analogues (octreotide/lanreotide).",
          "keyDifferentiator": "Paroxysmal dramatic episodic facial flushing and chronic secretory diarrhea triggered by systemic serotonin flooding."
    }
  },
  "w615": {
    "Arabic": {
          "etiology": "انتقال صبغي متوازن t(8;14) يضع الجين المسرطن c-MYC تحت سيطرة محفز الأجسام المضادة مع ارتباط وثيق بفيروس EBV.",
          "goldStandard": "الخزعة النسيجية التي تظهر نمط السماء المرصعة بالنجوم مع فحص التهجين الموضعي (FISH) لتأكيد انتقال الجين c-MYC.",
          "firstLineRx": "العلاج الكيميائي المكثف متعدد الأدوية قصير الأمد بجرعات عالية (بروتوكول CODOX-M/IVAC) مع ريتوكسيماب والحماية العصبية.",
          "keyDifferentiator": "معدل انقسام يقارب 100%، ومظهر السماء المرصعة بالنجوم مجهرياً، والكتلة الفكية سريعة الانفجار في طفل إفريقي."
    },
    "English": {
          "etiology": "Constitutive overexpression of the c-MYC nuclear transcription factor driven by the reciprocal chromosomal translocation t(8;14)(q24;q32).",
          "goldStandard": "Tissue biopsy establishing high-grade B-cell morphology with 'starry-sky' pattern and interphase FISH demonstrating c-MYC gene rearrangement.",
          "firstLineRx": "Intensive, high-dose, short-cycle multi-agent chemotherapy regimens (CODOX-M/IVAC) combined with rituximab and vigorous tumor lysis prophylaxis.",
          "keyDifferentiator": "Unmatched Ki-67 proliferation index of ~100%, microscopic starry-sky architecture, and rapid expansion of pediatric jaw or abdominal tumors."
    }
  },
  "w616": {
      "Arabic": {
          "etiology": "مرور أوعية دموية جنينية غير محمية بهلام وارتون فوق عنق الرحم نتيجة انغراس الحبل السري الغشائي، مما يعرضها للتمزق عند انفجار الأغشية.",
          "goldStandard": "السونار المهبلي مع الدوبلر الملون (Transvaginal color Doppler) قبل الولادة، واختبار آبت (Apt test) لإثبات الدم الجنيني عند النزف.",
          "firstLineRx": "الولادة القيصرية الإسعافية الفورية (Emergency STAT Cesarean delivery) وإنعاش الوليد بنقل الدم الخزاني O-negative.",
          "keyDifferentiator": "نزف مهبلي غير مؤلم يحدث فور تمزق الأغشية مع اضطراب نبض الجنين الجيبي وإيجابية فحص هيموغلوبين الجنين."
      },
      "English": {
          "etiology": "Abnormal velamentous insertion allowing vulnerable fetal vessels to traverse membranes unprotected by Wharton jelly across internal os.",
          "goldStandard": "Transvaginal ultrasound with color Doppler demonstrating fetal vessels over os; bedside Apt alkali test confirms fetal hemoglobin.",
          "firstLineRx": "Immediate emergent STAT Cesarean section; aggressive neonatal resuscitation with emergency O-negative uncrossed blood transfusion.",
          "keyDifferentiator": "Painless vaginal bleeding immediately upon rupture of membranes with rapid sinusoidal fetal heart tracing and fetal blood on Apt test."
      }
  },
  "w617": {
    "Arabic": {
          "etiology": "مقاومة الإنسولين المحيطية مع اضطراب إفراز هرمون LH تحفز فرط تصنيع الأندروجينات المبيضية وتعطل نضج الجريبات وانطلاق البويضة.",
          "goldStandard": "استيفاء اثنين من معايير روتردام الثلاثة (قلة الإباضة، علامات فرط الأندروجينات، ومظهر قلادة اللؤلؤ بالسونار).",
          "firstLineRx": "تعديل نمط الحياة وإنقاص الوزن، وحبوب منع الحمل المركبة لتنظيم الدورة وعلاج الشعرانية، وعقار الميتفورمين، والليتروزول للإنجاب.",
          "keyDifferentiator": "مظهر قلادة اللؤلؤ للجريبات الصغيرة المحيطية بالسونار المهبلي مع ارتفاع نسبة LH إلى FSH والشعرانية."
    },
    "English": {
          "etiology": "Peripheral insulin resistance driving compensatory hyperinsulinemia that synergizes with excess LH to stimulate ovarian androgen overproduction.",
          "goldStandard": "Meeting at least two of the three Rotterdam criteria after excluding secondary endocrine disorders (Cushing, CAH, hyperprolactinemia).",
          "firstLineRx": "Lifestyle modification and structured weight loss, combined oral contraceptives for cycle regulation, metformin, and letrozole for fertility.",
          "keyDifferentiator": "Characteristic 'string-of-pearls' peripheral follicle necklace on transvaginal ultrasound coupled with elevated LH:FSH ratio and hirsutism."
    }
  },
  "w618": {
    "Arabic": {
          "etiology": "تكاثر نسيلي حميد وحيد الخلية لعضلات الرحم الملساء يتغذى على هرموني الإستروجين والبروجستيرون مع ترسب ألياف كولاجينية.",
          "goldStandard": "السونار الحوضي عبر البطن والمهبل (Pelvic Ultrasonography) مظهراً كتلاً دائرية مصمتة ناقصة الصدوية محددة بوضوح.",
          "firstLineRx": "حمض الترانيكساميك أو اللولب الهرموني المفرز للبروجستيرون (Mirena) للنزيف؛ واستئصال الورم (Myomectomy) أو استئصال الرحم جراحياً.",
          "keyDifferentiator": "كتلة رحمية صلبة حميدة ملساء متحدة المركز مرتبطة بنزيف طمثي غزير دوري وتتراجع تلقائياً بعد انقطاع الطمث."
    },
    "English": {
          "etiology": "Clonal benign expansion of myometrial smooth muscle myocytes driven by estrogen and progesterone receptor hyperactivity.",
          "goldStandard": "Pelvic and transvaginal ultrasonography delineating well-circumscribed, hypoechoic concentric solid intramural masses.",
          "firstLineRx": "Tranexamic acid, levonorgestrel-releasing intrauterine devices (LNG-IUD), or surgical myomectomy/hysterectomy for intractable bulk symptoms.",
          "keyDifferentiator": "Concentric, well-circumscribed benign firm pelvic mass tied directly to cyclical menorrhagia that predictably shrinks after menopause."
    }
  },
  "w619": {
    "Arabic": {
          "etiology": "عدوى مستمرة بالأنماط المسرطنة من فيروس HPV (خاصة 16 و 18) التي تعطل بروتينات p53 و Rb في منطقة التحول بعنق الرحم.",
          "goldStandard": "فحص مسحة عنق الرحم (Pap smear) متبوعاً بتنظير المهبل المكبر (Colposcopy) وأخذ خزعة نسيجية موجهة بحمض الخليك.",
          "firstLineRx": "الاستئصال المخروطي (Conization) للمراحل الباكرة، والاستئصال الجذري للرحم (Radical Hysterectomy) أو العلاج الإشعاعي الكيميائي.",
          "keyDifferentiator": "نزيف مهبلي مميز يحدث عقب الجماع مباشرة مع قرحة أو كتلة خبيثة مرئية على عنق الرحم وإيجابية فيروس HPV."
    },
    "English": {
          "etiology": "Persistent infection by oncogenic high-risk human papillomaviruses (HPV 16, 18) expressing E6 and E7 oncoproteins that disable p53 and pRb.",
          "goldStandard": "Colposcopy with directed punch biopsy of acetic-acid acetowhite lesions within the cervical transformation zone, following abnormal cytology.",
          "firstLineRx": "Cone biopsy (LEEP) for microinvasive disease; radical hysterectomy with lymphadenectomy or definitive chemoradiation for invasive stages.",
          "keyDifferentiator": "Pathognomonic post-coital vaginal bleeding combined with a friable exophytic cervical mass and high-risk HPV oncogenicity."
    }
  },
  "w621": {
    "Arabic": {
          "etiology": "إفراز المشيمة لهرمونات معادية للإنسولين (مثل hPL والبروجستيرون والكورتيزول) تتجاوز قدرة بنكرياس الأم على التعويض.",
          "goldStandard": "اختبار تحمل الجلوكوز الفموي (OGTT بجرعة 75 جم سكر) مع قياس مستويات السكر على الريق وبعد ساعة وساعتين.",
          "firstLineRx": "النظام الغذائي المضبوط مع مراقبة سكر الدم منزلياً؛ والبدء بحقن الإنسولين في حال تجاوز أرقام السكر المستهدفة.",
          "keyDifferentiator": "ارتفاع سكر الدم الذي يظهر تحديداً في النصف الثاني من الحمل ويزول تلقائياً بعد ولادة المشيمة، مع زيادة وزن الجنين."
    },
    "English": {
          "etiology": "Placental secretion of contrainsular anti-insulin hormones (hPL, cortisol, progesterone) overwhelming maternal beta-cell reserve.",
          "goldStandard": "Diagnostic 75-gram 2-hour oral glucose tolerance test (OGTT) performed at 24-28 weeks meeting validated glycemic cutoff thresholds.",
          "firstLineRx": "Structured medical nutrition therapy and moderate exercise; titrated human subcutaneous insulin when targets are unmet.",
          "keyDifferentiator": "Onset of maternal hyperglycemia emerging exclusively in the late second/third trimester that resolves postpartum, linked to fetal macrosomia."
    }
  },
  "w622": {
    "Arabic": {
          "etiology": "ضعف ميكانيكي أو تنكس إنزيمي في كولاجين الأغشية الجنينية تسرعه العدوى المهبلية الصاعدة أو فرط تمدد الرحم.",
          "goldStandard": "المعاينة بالمنظار المهبلي المعقم لإثبات تجمع السائل، وإيجابية اختبار ورقة النيترازين الزرقاء، ونمط التسرخس (Ferning).",
          "firstLineRx": "المضادات الحيوية الوريدية واسعة الطيف (أمبيسيلين وإريثرومايسين)، وحقن الكورتيزون لنضج رئة الجنين إذا كان أقل من 34 أسبوعاً.",
          "keyDifferentiator": "خروج وتجمع السائل السلوي المائي الشفاف القلوي من عنق الرحم قبل بدء أي طلق ولادي حقيقي."
    },
    "English": {
          "etiology": "Fetal membrane apoptotic weakening and collagenolytic matrix metalloproteinase activation triggered by ascending bacterial protease activity.",
          "goldStandard": "Sterile speculum exam confirming amniotic fluid pooling in the posterior fornix, alkaline Nitrazine test, and microscopic arborizing ferning.",
          "firstLineRx": "Latency broad-spectrum antibiotics (ampicillin and erythromycin) paired with maternal betamethasone for fetal lung maturity <34 weeks.",
          "keyDifferentiator": "Clear alkaline watery pooling emanating from the cervical os prior to the establishment of true active labor contractions."
    }
  },
  "w623": {
    "Arabic": {
          "etiology": "عدم تناسب حجمي عظمي يؤدي لانحشار القطر ثنائي الأخرم لكتف الجنين خلف ارتفاق عانة الأم بعد ولادة الرأس مباشرة.",
          "goldStandard": "التشخيص السريري الفوري بفشل ولادة الكتفين بالدفع العادي وظهور علامة السلحفاة بانكماش الرأس على العجان.",
          "firstLineRx": "مناورة ماكروبرتس (ثني فخذي الأم) مع الضغط فوق العانة، وتجنب الشد لأسفل، والانتقال لمناورات التدوير الداخلي (Wood screw).",
          "keyDifferentiator": "علامة السلحفاة بتراجع رأس الجنين إلى العجان وانحشار الكتف خلف عظم العانة أثناء الولادة المهبلية."
    },
    "English": {
          "etiology": "Bony mechanical arrest of the wider biacromial diameter wedged behind the anterior maternal pubic symphysis following head delivery.",
          "goldStandard": "Immediate clinical diagnosis upon delivery of the fetal head failing to restitute alongside the hallmark 'turtle sign' perineal retraction.",
          "firstLineRx": "Immediate execution of the McRoberts maneuver coupled with directional suprapubic downward pressure (avoiding fundal pressure).",
          "keyDifferentiator": "Retraction of the delivered fetal face tightly back into the vulvar ring (turtle sign) due to anterior shoulder bone impaction."
    }
  },
  "w624": {
    "Arabic": {
          "etiology": "خلل في تعافي بطانة الرحم فوق ندبة قيصرية سابقة يؤدي لغياب طبقة نيتابوخ وانغراس المشيمة المباشر في عضلات الرحم.",
          "goldStandard": "السونار الحوضي الملون المتقدم (Color Doppler) مظهراً بحيرات دموية مشيمية مضطربة واختفاء الخط ناقص الصدوية بين الرحم والمشيمة.",
          "firstLineRx": "الولادة القيصرية المبرمجة مع ترك المشيمة مكانها وتجنب نزعها، وإجراء استئصال كامل للرحم (Cesarean Hysterectomy).",
          "keyDifferentiator": "فشل تام لانفصال المشيمة بعد الولادة مع نزيف حاد صاعق عند محاولة فكها في مريضة لديها سوابق قيصرية."
    },
    "English": {
          "etiology": "Defective decidualization and absence of the Nitabuch fibrinoid layer over prior hysterotomy scars, allowing deep myometrial invasion.",
          "goldStandard": "Antenatal color Doppler ultrasonography and pelvic MRI demonstrating abnormal placental lacunae and loss of the retroplacental clear zone.",
          "firstLineRx": "Planned multidisciplinary Cesarean delivery with non-separation of the placenta and immediate peripartum Cesarean hysterectomy.",
          "keyDifferentiator": "Inability to achieve third-stage placental detachment, resulting in torrential hemorrhage if manual avulsion is attempted."
    }
  },
  "w625": {
    "Arabic": {
          "etiology": "فشل انقباض الألياف العضلية للرحم بعد انفصال المشيمة (ارتخاء الرحم Tone) أو احتباس أجزاء مشيمية أو تمزق المهبل وعنق الرحم.",
          "goldStandard": "التقييم السريري الكمي للدم المفقود مع الفحص اليدوي المزدوج لتحديد سبب النزف (رحم رخو، بقايا، أو تمزق).",
          "firstLineRx": "التدليك اليدوي للرحم، وإعطاء مقبضات الرحم (الأوكسيتوسين الوريدي، الميزوبروستول، وميثيل إرغومترين)، ووضع بالون باكري الضاغط.",
          "keyDifferentiator": "فقدان دم مفاجئ غزير يتجاوز 500 مل مباشرة بعد الولادة مع جس رحم إسفنجي رخو غير منقبض في أسفل البطن."
    },
    "English": {
          "etiology": "Loss of myometrial living ligatures clamping spiral arterioles post-placental delivery (uterine atony), retained cotyledons, or genital lacerations.",
          "goldStandard": "Quantitative gravimetric assessment of active cumulative blood loss coupled with immediate bimanual uterine and speculum exam.",
          "firstLineRx": "Vigorous fundal massage, first-line IV oxytocin infusion, second-line uterotonics (carboprost/methylergonovine), and Bakri balloon tamponade.",
          "keyDifferentiator": "Profuse post-delivery genital blood loss exceeding 500-1000 mL accompanied by a palpable soft, boggy, non-contracted uterus."
    }
  },
  "w626": {
      "Arabic": {
          "etiology": "خلل بطاني وعائي جهازي شديد ناجم عن المشيمة يسبب تنشيط الصفائح الدموية وترسب الفبرين في الجيوب الكبدية وانحلال الدم ميكانيكياً.",
          "goldStandard": "معايير تينيسي المخبرية الثلاثية: انحلال دم ميكروي (LDH >600 وشيستوسايت ولطاخة دم)، AST ≥70 IU/L، والصفائح <100,000/mcL.",
          "firstLineRx": "الولادة الإسعافية العاجلة كعلاج جذري، مع كبريتات المغنيسيوم للوقاية من النوبات الصرعية، واللابيتالول لضبط الضغط، ونقل الصفيحات.",
          "keyDifferentiator": "ألم الشرسوف والمراق الأيمن مع ثالوث انحلال الدم وارتفاع إنزيمات الكبد ونقص الصفائح دون 100,000."
      },
      "English": {
          "etiology": "Systemic microvascular endothelial damage and platelet activation causing microvascular fibrin deposition, hepatic ischemia, and microangiopathy.",
          "goldStandard": "Tennessee diagnostic criteria: evidence of microangiopathic hemolysis (LDH >600 U/L, schistocytes), AST ≥70 U/L, and platelets <100,000/mcL.",
          "firstLineRx": "Prompt delivery of the fetus and placenta regardless of gestational age, IV Magnesium Sulfate for seizure prophylaxis, and platelet transfusion.",
          "keyDifferentiator": "Severe right upper quadrant pain in pregnancy with the laboratory triad of hemolysis (schistocytes), elevated AST, and platelets <100,000."
      }
  },
  "w632": {
    "Arabic": {
          "etiology": "فشل انفجار الجريب المبيضي أو استمرار الجسم الأصفر وتراكم السوائل بداخلهما، أو نشوء أورام كيسية حميدة كالورم الديرمويدي.",
          "goldStandard": "السونار الحوضي المهبلي مع الدوبلر الملون لتقييم معالم الكيس (سماكة الجدار، وجود حواجز، أو مكونات صلبة، وتدفق الدم).",
          "firstLineRx": "المراقبة والمتابعة بالسونار بعد 6-8 أسابيع للأكياس البسيطة؛ والتدخل الجراحي بالمنظار لاستئصال الكيس إذا كان كبيراً أو مشبوهاً.",
          "keyDifferentiator": "كيسة مبيضية ممتلئة بسوائل تكتشف بالسونار غالباً ما تكون وحيدة الجانب وتزول تلقائياً بخلاف الأورام الصلبة الخبيثة."
    },
    "English": {
          "etiology": "Physiological failure of follicular rupture or persistent corpus luteum remodeling, or benign cystic neoplastic tissue differentiation.",
          "goldStandard": "Transvaginal pelvic ultrasound with color Doppler interrogating internal architecture, wall thickness, septations, and papillary projections.",
          "firstLineRx": "Expectant surveillance with repeat transvaginal ultrasound in 6-12 weeks for simple premenopausal cysts; laparoscopic cystectomy for persistent lesions.",
          "keyDifferentiator": "Discrete, fluid-filled, thin-walled adnexal structure that frequently displays spontaneous cyclic involution without malignancy."
    }
  },
  "w634": {
    "Arabic": {
          "etiology": "إجهاد أو فرط تمدد خلايا العضلات الملساء للرحم مما يمنع انقباضها الفيزيولوجي الخانق للأوعية الدموية في سرير المشيمة.",
          "goldStandard": "الفحص الإكلينيكي اليدوي للبطن والحوض مظهراً رحماً كبيراً رخواً غير متقلص مع نزيف مهبلي مستمر دون تمزقات مرئية.",
          "firstLineRx": "التدليك اليدوي المزدوج للرحم، وإعطاء محلول الأوكسيتوسين الوريدي السريع، يليه الإرغومترين والميزوبروستول، وحقن حمض الترانيكساميك.",
          "keyDifferentiator": "فقدان القوام العضلي الصلب للرحم بعد الولادة وتحوله لكتلة رخوة إسفنجية مترافقة مع نزيف حاد غزير."
    },
    "English": {
          "etiology": "Myometrial exhaustion or overstretching precluding the physiologic ligature-like mechanical constriction of opened spiral arteries.",
          "goldStandard": "Clinical physical examination discovering an abnormally enlarged, soft, flaccid, non-contracted boggy uterus during active genital hemorrhage.",
          "firstLineRx": "Continuous manual fundal massage, immediate high-dose intravenous oxytocin infusion, second-line uterotonics, and IV tranexamic acid.",
          "keyDifferentiator": "Absence of the firm, globular fundal contraction naturally expected post-delivery, with palpation yielding a soft spongy uterine mass."
    }
  },
  "w635": {
    "Arabic": {
          "etiology": "انقلاب بطانة وقاع الرحم إلى الداخل وبروزها عبر عنق الرحم والمهبل ناجم عن الجر الشديد للحبل السري على مشيمة ملتصقة بقاع رخو.",
          "goldStandard": "المعاينة البصرية برؤية الكتلة الحمراء الحبيبية خارجة من المهبل وغياب جس قاع الرحم في مكانه الطبيعي بالبطن.",
          "firstLineRx": "إيقاف الأوكسيتوسين وإعطاء مرخيات الرحم (نتروغليسرين أو تخدير عام) وإعادة الرحم يدوياً بقبضة اليد (مناورة جونسون) ثم إعطاء المقبضات.",
          "keyDifferentiator": "بروز كتلة كروية حمراء داكنة من المهبل مع اختفاء قاع الرحم من البطن وحدوث صدمة عصبية ونزفية شديدة وفورية."
    },
    "English": {
          "etiology": "Invagination of the uterine fundus through the cervical canal provoked by excessive cord traction upon an unseparated fundal placenta.",
          "goldStandard": "Direct inspection of a large, purplish-red globular mass projecting outside the introitus and a palpable indentation over the suprapubic abdomen.",
          "firstLineRx": "Discontinue uterotonics, administer uterine relaxants (nitroglycerin/terbutaline), perform manual fundal repositioning (Johnson maneuver), then administer oxytocin.",
          "keyDifferentiator": "Sudden appearance of an externalized beefy red uterine fundus at the introitus paired with absolute loss of normal abdominal fundal contour."
    }
  },
  "w636": {
    "Arabic": {
          "etiology": "ضعف هيكلي في كولاجين وألياف عنق الرحم يفشل في تحمل الضغط الميكانيكي لوزن الحمل المتزايد دون وجود انقباضات رحمية.",
          "goldStandard": "السونار المهبلي المتكرر كاشفاً قصر طول عنق الرحم لأقل من 25 ملم مع مظهر القمع (Funneling) وخروج الأغشية.",
          "firstLineRx": "تطويق عنق الرحم الجراحي (Cervical Cerclage) بخيط شيرودكار أو ماكدونالد عند الأسبوع 12-14 مع البروجستيرون المهبلي اليومي.",
          "keyDifferentiator": "فقدان الحمل المتكرر في الثلث الثاني بتوسع غير مؤلم إطلاقاً لعنق الرحم ودون أي طلق ولادي."
    },
    "English": {
          "etiology": "Biomechanical collagen deficiency of cervical connective tissue failing to withstand progressive hydrostatic gravity load.",
          "goldStandard": "Serial transvaginal sonography demonstrating progressive cervical length shortening below 25 mm with inner os funneling.",
          "firstLineRx": "Prophylactic cervical cerclage placement (McDonald or Shirodkar suture technique) at 12-14 weeks paired with vaginal micronized progesterone.",
          "keyDifferentiator": "Recurrent second-trimester pregnancy loss characterized by totally painless, silent cervical dilation in the absence of uterine contractions."
    }
  },
  "w637": {
    "Arabic": {
          "etiology": "عدوى بكتيرية مختلطة متعددة الميكروبات (هوائية ولا هوائية من المهبل والجلد) تصيب سرير المشيمة وجدار الرحم بعد الولادة.",
          "goldStandard": "التشخيص الإكلينيكي المعتمد على حمى بعد الولادة مع ألم ومضض شديد في الرحم وإفرازات نفاسية كريهة الرائحة ومزرعة الدم.",
          "firstLineRx": "المضادات الحيوية الوريدية التوليفية واسعة الطيف: كليندامايسين (900 ملغ) وجنتاميسين (1.5 ملغ/كغ) كل 8 ساعات حتى زوال الحمى لـ 48 ساعة.",
          "keyDifferentiator": "حمى شديدة مع ألم بالرحم عند اللمس وإفرازات نفاسية كريهة الرائحة تظهر تحديداً في الأيام الأولى بعد الولادة القيصرية."
    },
    "English": {
          "etiology": "Polymicrobial ascending infection involving endogenous vaginal and enteric aerobes and anaerobes invading the exposed placental wound bed.",
          "goldStandard": "Clinical triad of postpartum fever ≥38.5°C, pronounced uterine tenderness, and foul lochia, supported by leukocytosis and blood cultures.",
          "firstLineRx": "Gold-standard dual IV antibiotic regimen: clindamycin (900 mg IV q8h) plus gentamicin (1.5 mg/kg IV q8h) continued until afebrile for 24-48 hours.",
          "keyDifferentiator": "Postpartum pyrexia accompanied by exquisite uterine palpation tenderness and malodorous purulent lochia following Cesarean section."
    }
  },
  "w638": {
      "Arabic": {
          "etiology": "الأسباب: حمى روماتيزمية سابقة، توسع جذر الأبهر، صمام أبهري ثنائي الشرف، التهاب شغاف، تسلخ الأبهر.",
          "goldStandard": "المعيار الذهبي: تخطيط صدى القلب عبر الصدر مع دوبلر لتقييم شدة القلس وآليات الصمام.",
          "firstLineRx": "العلاج الأول: موسعات الأوعية الدموية مثل مثبطات الإنزيم المحول للأنجيوتنسين؛ الجراحة لاستبدال الصمام عند المؤشرات.",
          "keyDifferentiator": "المميز الرئيسي: نفخة انبساطية مبكرة على الحد الأيسر للقص مع ضغط نبضي واسع ونبض محيطي قافز."
      },
      "English": {
          "etiology": "Causes: prior rheumatic fever, aortic root dilation, bicuspid aortic valve, infective endocarditis, aortic dissection.",
          "goldStandard": "Gold standard: transthoracic echocardiography with Doppler to assess severity and valve morphology.",
          "firstLineRx": "First-line: vasodilators such as ACE inhibitors; surgical valve replacement when indicated.",
          "keyDifferentiator": "Key differentiator: early diastolic murmur at the left sternal border with wide pulse pressure and bounding peripheral pulses."
      }
  },
  "w639": {
      "Arabic": {
          "etiology": "وجود حزمة توصيل إضافية (مسلك كينت) خلقية تربط الأذينين بالبطينين خارج العقدة الأذينية البطينية.",
          "goldStandard": "تخطيط القلب السطحي (ECG) مع معايير كلاسيكية: PR قصير، موجة دلتا، واتساع QRS.",
          "firstLineRx": "التحفيز المبهم أو أدينوسين للتسرع فوق البطيني المنتظم؛ وللرجفان الأذيني: بروكاييناميد أو تقويم كهربائي متزامن، وتجنب الديجوكسين وفيراباميل.",
          "keyDifferentiator": "موجة دلتا مع PR قصير وQRS واسع لدى شاب يعاني نوبات خفقان."
      },
      "English": {
          "etiology": "A congenital accessory pathway (bundle of Kent) directly connects atria and ventricles, bypassing the AV node.",
          "goldStandard": "Surface ECG showing short PR interval, delta wave, and widened QRS.",
          "firstLineRx": "Vagal maneuvers or adenosine for regular AVRT; for atrial fibrillation: procainamide or synchronized cardioversion; avoid AV nodal blockers.",
          "keyDifferentiator": "Delta wave with short PR and wide QRS in a young patient with palpitations."
      }
  },
  "w640": {
      "Arabic": {
          "etiology": "قصور أولي في مضخة القلب بسبب احتشاء عضلة القلب الحاد الواسع أو التهاب عضلة القلب أو اعتلال عضلة القلب أو مرض صمامي حاد.",
          "goldStandard": "المعيار التشخيصي الذهبي هو القياس الغازي للديناميكا الدموية (Swan-Ganz): مؤشر قلبي <2.2 لتر/دقيقة/م² وضغط إسفين شعيري رئوي >15 ملم زئبقي مع هبوط ضغط وعلامات نقص تروية طرفية.",
          "firstLineRx": "خط أول: إعادة تروية تاجية فورية (PCI) + نورإبينفرين لرفع الضغط + دوبوتامين لزيادة الناتج + دعم ميكانيكي مؤقت مثل IABP أو Impella أو VA-ECMO.",
          "keyDifferentiator": "تمييزه عن بقية أنواع الصدمات: وجود هبوط ضغط مع نقص تروية طرفية رغم امتلاء بطيني كافٍ وناتج قلبي منخفض، دون استجابة للسوائل."
      },
      "English": {
          "etiology": "Primary pump failure due to acute extensive myocardial infarction, myocarditis, cardiomyopathy, or acute valvular disease.",
          "goldStandard": "Gold standard is invasive hemodynamic measurement (Swan-Ganz): cardiac index <2.2 L/min/m² and pulmonary capillary wedge pressure >15 mmHg with hypotension and end-organ hypoperfusion.",
          "firstLineRx": "First-line: immediate coronary revascularization (PCI) + norepinephrine for pressure + dobutamine for output + temporary mechanical support such as IABP, Impella, or VA-ECMO.",
          "keyDifferentiator": "Distinguishes from other shocks: hypotension with end-organ hypoperfusion despite adequate ventricular filling and low cardiac output, with no response to fluids."
      }
  },
  "w641": {
      "Arabic": {
          "etiology": "زيادة الكاتيكولامينات الحادة الناتجة عن الإجهاد النفسي أو الجسدي الشديد، مما يؤدي إلى ذهول مؤقت بعضلة القلب.",
          "goldStandard": "القسطرة القلبية مع تصوير البطين الأيسر: غياب انسداد تاجي مهم + انتفاخ قمي بالوني مميز.",
          "firstLineRx": "العلاج الداعم: حاصرات بيتا، مثبطات الإنزيم المحول للأنجيوتنسين، ومدرات البول عند الحاجة.",
          "keyDifferentiator": "خلل قلبي عابر قابل للعكس دون وجود انسداد تاجي، مع ارتفاع طفيف للتروبونين مقارنة بحدّة اضطراب الحركة الجدارية."
      },
      "English": {
          "etiology": "Acute catecholamine surge from intense emotional or physical stress causing transient myocardial stunning.",
          "goldStandard": "Coronary angiography and left ventriculography demonstrating apical ballooning without significant obstructive coronary artery disease.",
          "firstLineRx": "Supportive care including beta-blockers, ACE inhibitors, and diuretics as needed.",
          "keyDifferentiator": "Transient reversible left ventricular dysfunction disproportionate to mild troponin elevation, in the absence of obstructive coronary disease."
      }
  },
  "w642": {
      "Arabic": {
          "etiology": "التهاب وعائي حبيبي يصيب الشرايين الكبيرة والمتوسطة، خاصة فروع الشريان السباتي؛ السبب غير معروف ويرتبط بالتقدم بالعمر.",
          "goldStandard": "خزعة الشريان الصدغي التي تُظهر التهاباً حبيبومياً مع خلايا عملاقة.",
          "firstLineRx": "كورتيكوستيرويدات بجرعة عالية (بريدنيزون) فوراً ولا يُنتظر تأكيد الخزعة.",
          "keyDifferentiator": "صداع جديد مع عرج الفك وارتفاع كبير في ESR لدى مريض مسن، مع خطر فقدان بصر لا رجعة فيه."
      },
      "English": {
          "etiology": "Granulomatous vasculitis of large and medium arteries, especially branches of the carotid artery; unknown cause, strongly age-related.",
          "goldStandard": "Temporal artery biopsy demonstrating granulomatous inflammation with giant cells.",
          "firstLineRx": "High-dose corticosteroids (prednisone) immediately, without waiting for biopsy confirmation.",
          "keyDifferentiator": "New headache with jaw claudication and markedly elevated ESR in an elderly patient, with risk of irreversible vision loss."
      }
  },
  "w643": {
      "Arabic": {
          "etiology": "انضغاط جذور ذيل الفرس بسبب انفتاق قرص قطني مركزي، ورم، أو تضيق شوكي حاد.",
          "goldStandard": "التصوير بالرنين المغناطيسي الطارئ للقطني.",
          "firstLineRx": "استئصال جراحي طارئ لتخفيف الضغط خلال 24-48 ساعة مع جرعة عالية من الستيرويد.",
          "keyDifferentiator": "وجود احتباس بولي وخدر سرجي وفقد حس العجان مع ضعف سفلي."
      },
      "English": {
          "etiology": "Compression of lumbosacral nerve roots by a massive central disc herniation, tumor, or spinal stenosis.",
          "goldStandard": "Emergency MRI of the lumbosacral spine.",
          "firstLineRx": "Urgent surgical decompression within 24–48 hours plus high-dose corticosteroids.",
          "keyDifferentiator": "Acute urinary retention with saddle anesthesia and perianal sensory loss."
      }
  },
  "w644": {
      "Arabic": {
          "etiology": "غالباً خِلقي مع تشوه خلفي (متلازمة كياري)، أو مكتسب بسبب أورام/تشوهات في النخاع أو صدمة.",
          "goldStandard": "تصوير الرنين المغناطيسي (MRI) للحبل الشوكي هو المعيار الذهبي للتشخيص.",
          "firstLineRx": "العلاج يعتمد على السبب؛ جراحة تخفيف الضغط الخلفي في حالات كياري، أو تحويل السائل (shunt) للنخاع.",
          "keyDifferentiator": "التفارق الحسي (فقدان الألم والحرارة مع بقاء اللمس والاهتزاز) هو العلامة المميزة."
      },
      "English": {
          "etiology": "Mostly congenital with hindbrain malformation (Chiari syndrome), or acquired from spinal cord tumors/trauma.",
          "goldStandard": "MRI of the spinal cord is the gold standard for diagnosis.",
          "firstLineRx": "Treatment is cause-driven; posterior fossa decompression for Chiari, or syrinx shunting when needed.",
          "keyDifferentiator": "Dissociated sensory loss (loss of pain/temperature with preserved touch/vibration) is the hallmark feature."
      }
  },
  "w645": {
      "Arabic": {
          "etiology": "التهاب وتليف القنوات الصفراوية ذو منشأ مناعي، يرتبط بقوة مع مرض التهاب الأمعاء (خاصة التهاب القولون التقرحي).",
          "goldStandard": "تصوير القنوات الصفراوية بالرنين المغناطيسي (MRCP) أو تصوير البنكرياس والقنوات الصفراوية بالتنظير (ERCP) اللذان يظهران نمط الخرز.",
          "firstLineRx": "لا يوجد علاج طبي مثبت يبطئ المرض؛ يستخدم حمض أورسوديوكسيكوليك (UDCA) لتحسين إنزيمات الكبد لكن دون إثبات تحسين البقيا، والعلاج النهائي زراعة الكبد.",
          "keyDifferentiator": "وجود تضيقات متعددة في القنوات الصفراوية مع مرض التهاب الأمعاء يرجّح التشخيص، وتتميز عن التهاب الأقنية الصفراوية الأولي بغياب الأجسام المضادة للميتوكوندريا."
      },
      "English": {
          "etiology": "Immune-mediated inflammation and fibrosis of bile ducts, strongly associated with inflammatory bowel disease, especially ulcerative colitis.",
          "goldStandard": "Magnetic resonance cholangiopancreatography (MRCP) or endoscopic retrograde cholangiopancreatography (ERCP) showing a beaded ductal pattern.",
          "firstLineRx": "No proven disease-modifying medical therapy; ursodeoxycholic acid (UDCA) may improve liver enzymes but does not improve survival, and liver transplantation is definitive.",
          "keyDifferentiator": "Multifocal bile duct strictures with inflammatory bowel disease strongly suggest the diagnosis; unlike primary biliary cholangitis, anti-mitochondrial antibodies are absent."
      }
  },
  "w646": {
      "Arabic": {
          "etiology": "تمزق كامل في جدار المريء بسبب ارتفاع مفاجئ في الضغط داخل لمعة المريء، غالباً من قيء عنيف بعد تناول وجبة كبيرة أو كحول.",
          "goldStandard": "تصوير المريء بوسيط تباين قابل للذوبان في الماء أو التصوير المقطعي المحوسب لإظهار تسرب التباين خارج المريء.",
          "firstLineRx": "جراحة طارئة لإصلاح التمزق مع تصريف المنصف، بالإضافة إلى مضادات حيوية واسعة الطيف ودعم دموي.",
          "keyDifferentiator": "ثالوث ماكلر: قيء، ألم صدري، وانتفاخ رقبة مع فرقعة تحت الجلد."
      },
      "English": {
          "etiology": "Full-thickness esophageal tear due to a sudden rise in intraluminal pressure, typically from forceful vomiting after a large meal or alcohol intake.",
          "goldStandard": "Water-soluble contrast esophagography or CT scan demonstrating contrast extravasation outside the esophagus.",
          "firstLineRx": "Emergency surgery to repair the tear and drain the mediastinum, along with broad-spectrum antibiotics and hemodynamic support.",
          "keyDifferentiator": "Mackler's triad: vomiting, chest pain, and neck swelling with subcutaneous emphysema."
      }
  },
  "w647": {
      "Arabic": {
          "etiology": "خلل الجراثيم نتيجة مضادات حيوية حديثة تسمح بنمو المطثية العسيرة وإنتاج سموم A وB المؤذية لخلايا القولون.",
          "goldStandard": "فحص البراز بتقنية PCR للكشف عن جين السموم، والتنظير القولوني الذي يُظهر الأغشية الكاذبة عند الحاجة.",
          "firstLineRx": "إيقاف المضاد الحيوي المسبب ثم فانكومايسين فموياً أو فيداكسومايسين.",
          "keyDifferentiator": "حدوث إسهال بعد مضادات حيوية مع لويحات صفراء على الغشاء المخاطي بالتنظير."
      },
      "English": {
          "etiology": "Antibiotic-induced gut dysbiosis permits Clostridioides difficile overgrowth and toxin A/B-mediated colonic epithelial injury.",
          "goldStandard": "Stool PCR/NAAT for toxin genes; colonoscopy demonstrating pseudomembranes in uncertain cases.",
          "firstLineRx": "Discontinue the precipitating antibiotic; treat with oral vancomycin or fidaxomicin.",
          "keyDifferentiator": "History of recent antibiotic use plus yellowish mucosal plaques (pseudomembranes) on endoscopy."
      }
  },
  "w648": {
      "Arabic": {
          "etiology": "فطر انتهازي يسبب التهاب رئوي عند نقص المناعة، خاصة الإيدز مع CD4 أقل من 200.",
          "goldStandard": "رؤية الكيسات في عينة البلغم المستحث أو غسل القصبات بصبغة غوموري أو كالكوفلور الأبيض.",
          "firstLineRx": "تريميثوبريم-سلفاميثوكسازول (كوتريموكسازول).",
          "keyDifferentiator": "نقص CD4 أقل من 200، صورة زجاجية أرضية متناظرة مع نقص تأكسج واضح."
      },
      "English": {
          "etiology": "Opportunistic fungus causing pneumonia in immunosuppression, especially HIV with CD4 below 200.",
          "goldStandard": "Visualization of cysts in induced sputum or BAL with Gomori methenamine silver or calcofluor white.",
          "firstLineRx": "Trimethoprim-sulfamethoxazole (co-trimoxazole).",
          "keyDifferentiator": "CD4 <200, bilateral interstitial ground-glass opacities with disproportionate hypoxemia."
      }
  },
  "w649": {
      "Arabic": {
          "etiology": "محفزات متعددة مثل الإنتان والالتهاب الرئوي والصدمة التي تؤدي إلى أذى سنخي منتشر.",
          "goldStandard": "معايير برلين السريرية مع تصوير الصدر وغازات الدم واستبعاد فرط الضغط الأذيني الأيسر.",
          "firstLineRx": "تهوية واقية للرئة بحجم مدي منخفض 4-6 مل/كغ مع PEEP.",
          "keyDifferentiator": "بداية حادة وارتشاح ثنائي ووذمة غير قلبية مع نقص تأكسج شديد."
      },
      "English": {
          "etiology": "Multiple triggers including sepsis, pneumonia, and trauma causing diffuse alveolar damage.",
          "goldStandard": "Berlin clinical criteria with chest imaging and ABG, excluding left atrial hypertension.",
          "firstLineRx": "Lung-protective ventilation with low tidal volume 4-6 mL/kg ideal body weight and PEEP.",
          "keyDifferentiator": "Acute onset, bilateral opacities, non-cardiogenic edema, and severe hypoxemia."
      }
  },
  "w650": {
      "Arabic": {
          "etiology": "ورم خبيث ينشأ من الخلايا الظهارية المتوسطة لبطانة غشاء الجنب، ويرتبط بشدة بالتعرض المهني للأسبستوس.",
          "goldStandard": "الخزعة الجنبية مع الفحص الكيميائي المناعي (إيجابية الكالريتينين وWT1).",
          "firstLineRx": "العلاج الكيميائي المركب: بيميتريكسيد مع سيسبلاتين؛ مع تقييم الجراحة في الحالات الموضعية.",
          "keyDifferentiator": "الارتباط الوثيق بالأسبستوس وظهور لويحات جنبية وسماكة منتشرة مع انصباب نضحي متكرر."
      },
      "English": {
          "etiology": "Malignancy arising from mesothelial lining of the pleura, strongly linked to asbestos exposure.",
          "goldStandard": "Pleural biopsy with immunohistochemistry (positive for calretinin and WT1).",
          "firstLineRx": "Combination chemotherapy with pemetrexed and cisplatin; surgery considered in localized cases.",
          "keyDifferentiator": "Strong asbestos association with pleural plaques, diffuse thickening, and recurrent exudative effusion."
      }
  },
  "w651": {
      "Arabic": {
          "etiology": "نقص نسبي شديد في الإنسولين مع ارتفاع هرمونات مضادة للعمل مثل الجلوكاجون يؤدي إلى فرط سكر دم حاد، إدرار تناضحي، وفقدان سوائل شديد دون تكوين كيتوني مهم.",
          "goldStandard": "قياس سكر الدم والأسمولية الفعالة والكهارل؛ القيمة النمطية سكر >600 ملغ/دل وأسمولية >320.",
          "firstLineRx": "سوائل وريدية (محلول ملحي 0.45% أو 0.9%) تدريجيًا، تعويض البوتاسيوم، ثم أنسولين وريدي منخفض الجرعة.",
          "keyDifferentiator": "غياب الحماض الكيتوني المهم مقابل DKA؛ الأسمولية مرتفعة جدًا مع سكر دم شديد الارتفاع."
      },
      "English": {
          "etiology": "Relative severe insulin deficiency with elevated counter-regulatory hormones causing profound hyperglycemia, osmotic diuresis, and massive volume depletion with minimal ketogenesis.",
          "goldStandard": "Diagnosis confirmed by blood glucose >600 mg/dL, effective serum osmolality >320 mOsm/kg, and absence of significant ketones/acidosis.",
          "firstLineRx": "Aggressive IV fluid resuscitation with 0.9% or 0.45% saline, potassium replacement, then low-dose IV insulin once potassium is stable.",
          "keyDifferentiator": "Presence of extreme hyperosmolarity and dehydration with little to no ketoacidosis, unlike diabetic ketoacidosis."
      }
  },
  "w652": {
      "Arabic": {
          "etiology": "فرط إفراز هرمونات الغدة الدرقية بشكل حاد يؤدي إلى تعويض استقلابي مهدد للحياة.",
          "goldStandard": "التقييم السريري بمقياس Burch-Wartofsky مع مخبرية تؤكد ارتفاع T4/T3 وانخفاض TSH.",
          "firstLineRx": "بروبرانولول + بروبيل ثيويوراسيل + يود البوتاسيوم + هيدروكورتيزون مع دعم حيوي.",
          "keyDifferentiator": "الحمى المرتفعة مع الهياج وتسرع القلب رغم خافضات الحرارة تميز هذه الحالة عن القصور الدرقي."
      },
      "English": {
          "etiology": "Acute excessive thyroid hormone release causing life-threatening metabolic decompensation.",
          "goldStandard": "Clinical scoring with Burch-Wartofsky criteria plus labs showing elevated T4/T3 and suppressed TSH.",
          "firstLineRx": "Propranolol plus propylthiouracil plus potassium iodide plus hydrocortisone with intensive supportive care.",
          "keyDifferentiator": "High fever with agitation and tachycardia unresponsive to antipyretics distinguishes this from hypothyroid coma."
      }
  },
  "w653": {
      "Arabic": {
          "etiology": "طفرات جينية في جينات مثل MEN1 وRET تسبب أوراماً متعددة في الغدد الصماء.",
          "goldStandard": "الفحص الجيني والتقييم الهرموني والتصوير المتعدد.",
          "firstLineRx": "الاستئصال الجراحي للأورام المفرزة وعلاج فرط الإفراز الهرموني.",
          "keyDifferentiator": "وجود ورمين صماويين أو أكثر لدى مريض واحد مع نمط وراثي واضح."
      },
      "English": {
          "etiology": "Germline mutations in genes such as MEN1 and RET cause multiple endocrine gland tumors.",
          "goldStandard": "Genetic testing combined with biochemical screening and multimodality imaging.",
          "firstLineRx": "Surgical resection of functioning tumors and medical control of hormonal hypersecretion.",
          "keyDifferentiator": "Two or more endocrine tumors in one patient with a clear inherited pattern."
      }
  },
  "w654": {
      "Arabic": {
          "etiology": "عدوى سابقة بالمكورات العقدية الحالة للدم من المجموعة A (التهاب بلعوم أو عدوى جلدية) تؤدي إلى تفاعل مناعي ومعقدات مناعية في الكبيبات.",
          "goldStandard": "التشخيص يعتمد على الصورة السريرية مع انخفاض C3 وارتفاع ASO/anti-DNase B، وقد تُستخدم الخزعة الكلوية في الحالات غير النمطية.",
          "firstLineRx": "علاج داعم: السيطرة على ارتفاع ضغط الدم والوذمة بمدرات البول وتقييد الصوديوم والماء، ومعالجة العدوى البكتيرية النشطة إن وجدت.",
          "keyDifferentiator": "فترة كامنة تتراوح بين 1-3 أسابيع بعد التهاب البلعوم أو 2-6 أسابيع بعد العدوى الجلدية، مع نقص المتممة C3."
      },
      "English": {
          "etiology": "Previous infection with group A beta-hemolytic Streptococcus (pharyngitis or skin infection) triggering immune complex deposition in glomeruli.",
          "goldStandard": "Diagnosis is based on clinical presentation with low C3 and elevated ASO/anti-DNase B; renal biopsy is reserved for atypical cases.",
          "firstLineRx": "Supportive care: control hypertension and edema with diuretics, restrict sodium and fluids, and treat active bacterial infection if present.",
          "keyDifferentiator": "A latent period of 1-3 weeks after pharyngitis or 2-6 weeks after skin infection, accompanied by low serum C3."
      }
  },
  "w655": {
      "Arabic": {
          "etiology": "انزياح اتصال الغلالة المهبلية بشكل غير طبيعي فوق الحبل المنوي (تشوه الجرس) يسمح بدوران الخصية.",
          "goldStandard": "الاستكشاف الجراحي العاجل للصفن هو المعيار التشخيصي والعلاجي المؤكد عند الشك.",
          "firstLineRx": "تثبيت الخصية (أوركيدوبكسي) بعد إعادة الالتواء يدوياً أو جراحياً، وقد تُثَبَّت الخصية المقابلة أيضاً.",
          "keyDifferentiator": "ألم خصية حاد مفاجئ مع غياب التروية الدموية في الدوبلكس وغياب المنعكس المشمري يميزه عن التهاب البربخ."
      },
      "English": {
          "etiology": "Abnormal high insertion of the tunica vaginalis on the spermatic cord (bell-clapper deformity) allows the testis to twist.",
          "goldStandard": "Urgent scrotal surgical exploration is the definitive diagnostic and therapeutic standard when torsion is suspected.",
          "firstLineRx": "Surgical detorsion with orchiopexy; the contralateral testis is usually fixed as well.",
          "keyDifferentiator": "Sudden severe scrotal pain with absent flow on Doppler and absent cremasteric reflex differentiates it from epididymitis."
      }
  },
  "w656": {
      "Arabic": {
          "etiology": "غير معروف غالباً؛ قد يتبع عدوى فيروسية أو تطعيماً أو أدوية معينة.",
          "goldStandard": "الخزعة الكلوية: طبيعية بالمجهر الضوئي مع اندماج الزغيبات بالمجهر الإلكتروني.",
          "firstLineRx": "الكورتيكوستيرويدات (بريدنيزون) كخط أول.",
          "keyDifferentiator": "متلازمة كلوية نقية بدون بيلة دموية أو ارتفاع ضغط الدم أو فشل كلوي؛ مع استجابة سريعة للستيرويد."
      },
      "English": {
          "etiology": "Unknown; may follow a viral infection, immunization, or certain medications.",
          "goldStandard": "Renal biopsy: normal on light microscopy with foot-process effacement on electron microscopy.",
          "firstLineRx": "Corticosteroids (prednisone) as first-line therapy.",
          "keyDifferentiator": "Pure nephrotic syndrome without hematuria, hypertension, or renal failure; rapid steroid response."
      }
  },
  "w657": {
      "Arabic": {
          "etiology": "جرعة زائدة من مسكن ألم خافض للحرارة شائع، يُستقلب في الكبد عبر CYP2E1 إلى NAPQI؛ وعند استنزاف الغلوتاثيون يحدث نخر كبدي حاد.",
          "goldStandard": "مستوى الدواء في الدم وتطبيق مخطط رماك-ماثيو (Rumack-Matthew) لتقييم خطورة الجرعة الزائدة.",
          "firstLineRx": "N-أسيتيل سيستئين (NAC) وريدياً أو فموياً، وهو ترياق يعيد تجديد الغلوتاثيون.",
          "keyDifferentiator": "ارتفاع ترانساميناسات الكبد بشكل ضخم غالباً > 1000 وحدة/لتر مع بيليروبين منخفض نسبياً في البداية، مقابل التهاب كبدي آخر."
      },
      "English": {
          "etiology": "Massive ingestion of a widely used analgesic leads to accumulation of NAPQI after glutathione depletion, causing severe centrilobular hepatic necrosis.",
          "goldStandard": "Plasma drug level interpreted on the Rumack-Matthew nomogram, with liver panel and coagulation studies.",
          "firstLineRx": "N-acetylcysteine (NAC) IV or oral; initiates glutathione repletion and should be started early.",
          "keyDifferentiator": "A striking aminotransferase elevation often >1,000, sometimes >10,000 IU/L early with relatively low bilirubin, distinguishing it from other hepatitis causes."
      }
  },
  "w658": {
      "Arabic": {
          "etiology": "استخدام الأدوية السيروتونينية مثل مثبطات استرداد السيروتونين، ترامادول، أو خطأ دوائي بجرعة زائدة.",
          "goldStandard": "معايير هانتر السريرية (Hunter Criteria) بعد استبعاد الأسباب الأخرى.",
          "firstLineRx": "إيقاف المحفز، الرعاية الداعمة، والبنزوديازيبينات للسيطرة على الأعراض.",
          "keyDifferentiator": "الرمع العضلي وفرط المنعكسات مع فرط الحرارة وتغير الحالة العقلية، مقارنة بمتلازمة الذهان الخبيث."
      },
      "English": {
          "etiology": "Use of serotonergic agents such as SSRIs, tramadol, or a medication error with an overdose.",
          "goldStandard": "Hunter Criteria clinically after excluding other causes.",
          "firstLineRx": "Discontinue the offending agent, supportive care, and benzodiazepines for symptom control.",
          "keyDifferentiator": "Myoclonus and hyperreflexia with hyperthermia and altered mental status, unlike neuroleptic malignant syndrome."
      }
  },
  "w659": {
      "Arabic": {
          "etiology": "طفرة في مستقبل الريانودين (RYR1) تؤدي لانطلاق كالسيوم غير منضبط بعد التعرض لمخدر استنشاقي أو سكسينيل كولين.",
          "goldStandard": "التشخيص يعتمد على المعايير السريرية: ارتفاع حرارة، تصلب عضلي، ارتفاع CO2 نهاية الزفير، حماض أيضي، وارتفاع CK.",
          "firstLineRx": "دانترولين الصوديوم 2.5 ملغ/كغ وريدياً مع إيقاف المحفز فوراً.",
          "keyDifferentiator": "ارتفاع الحرارة لا يستجيب للباراسيتامول أو مضادات الالتهاب، ويترافق مع فرط ثاني أكسيد الكربون وتصلب عضلي."
      },
      "English": {
          "etiology": "Ryanodine receptor (RYR1) mutation causes uncontrolled calcium release after exposure to volatile anesthetics or succinylcholine.",
          "goldStandard": "Clinical diagnosis using standard criteria: hyperthermia, muscle rigidity, elevated end-tidal CO2, metabolic acidosis, and elevated CK.",
          "firstLineRx": "Dantrolene sodium 2.5 mg/kg IV immediately after discontinuing the triggering agent.",
          "keyDifferentiator": "Hyperthermia does not respond to antipyretics and is associated with hypercapnia and muscle rigidity."
      }
  },
  "w660": {
      "Arabic": {
          "etiology": "رضض حادة أو اختراقية تسبب نزيفًا داخليًا وتجمعًا حرًا في السوائل.",
          "goldStandard": "الفحص بالموجات فوق الصوتية عند السرير (FAST/E-FAST) وهو المعيار الذهبي للكشف السريع.",
          "firstLineRx": "إنعاش فوري وتحويل للحالات الإيجابية إلى تدخل جراحي أو إجراءات تداخلية.",
          "keyDifferentiator": "يكشف بسرعة دم البطن أو التأمور أو الصدر بدون نقل المريض، مقارنة بالتصوير المقطعي."
      },
      "English": {
          "etiology": "Blunt or penetrating trauma causing internal hemorrhage and free fluid accumulation.",
          "goldStandard": "Bedside sonography (FAST/E-FAST) is the gold standard for rapid detection.",
          "firstLineRx": "Immediate resuscitation and surgical referral when positive.",
          "keyDifferentiator": "Rapidly identifies hemoperitoneum, pericardial, or pleural fluid without transporting the patient, unlike CT."
      }
  },
  "w661": {
      "Arabic": {
          "etiology": "الالتهاب الرئوي، الوذمة الرئوية، النزف السنخي، اللمفوما، أو الساركويد.",
          "goldStandard": "التصوير المقطعي عالي الدقة للصدر هو الأفضل لإظهار هذا العلامة التشخيصية.",
          "firstLineRx": "علاج السبب الأساسي؛ المضادات الحيوية للالتهاب الرئوي الجرثومي، مدرات البول للوذمة، إلخ.",
          "keyDifferentiator": "رؤية قصبات هوائية مفتوحة داخل عتامة رئوية تميز الارتشاح السنخي عن الانخماص."
      },
      "English": {
          "etiology": "Pneumonia, pulmonary edema, alveolar hemorrhage, lymphoma, or sarcoidosis.",
          "goldStandard": "High-resolution CT chest is the best modality to demonstrate this diagnostic sign.",
          "firstLineRx": "Treat the underlying cause; antibiotics for bacterial pneumonia, diuretics for edema, etc.",
          "keyDifferentiator": "Seeing patent air-filled bronchi within lung opacity differentiates airspace consolidation from collapse."
      }
  },
  "w662": {
      "Arabic": {
          "etiology": "ورم غدي أو سرطان قولوني حلقي النمو يسبب تضيقاً دائرياً في تجويف الأمعاء.",
          "goldStandard": "حقنة الباريوم الشرجية أو التصوير المقطعي المحوري للقولون، مع التنظير والخزعة للتأكيد النسيجي.",
          "firstLineRx": "استئصال القولون الجزئي مع تفريغ العقد اللمفاوية، يليه علاج كيميائي مساعد حسب المرحلة.",
          "keyDifferentiator": "تضيق قصير دائري بحواف مرفوعة كالكتفين ومخاطية متقرحة في الوسط، مع قناة مركزية ضيقة جداً."
      },
      "English": {
          "etiology": "A circumferential colorectal adenocarcinoma growing as an annular lesion that narrows the bowel lumen.",
          "goldStandard": "Barium enema or CT colonography shows the classic shouldered stricture; endoscopy with biopsy confirms histology.",
          "firstLineRx": "Segmental colectomy with lymph node dissection, followed by adjuvant chemotherapy based on staging.",
          "keyDifferentiator": "A short, annular stricture with overhanging 'shouldered' edges and a severely narrowed central lumen."
      }
  },  "w453": {
      "Arabic": {
          "etiology": "تمزق الشريان السحائي الأوسط (Middle Meningeal Artery) نتيجة كسر عظم الصدغ عند نقطة التيريون (Pterion).",
          "goldStandard": "الأشعة المقطعية للرأس بدون صبغة تظهر تجمعاً دموياً محدب الوجهين يشبه العدسة (Biconvex) لا يتجاوز دروز الجمجمة.",
          "firstLineRx": "التفريغ الجراحي العاجل عبر فتح الجمجمة (Craniotomy / Burr Hole) لإزالة الضغط عن المخ والسيطرة على النزف الشرياني.",
          "keyDifferentiator": "يتميز بوجود 'الفترة الصحوة' (Lucid interval) الكلاسيكية: فقدان وعي مؤقت يليه استعادة الوعي لعدة ساعات ثم تدهور عصبي سريع."
      },
      "English": {
          "etiology": "Laceration of the middle meningeal artery secondary to temporal bone fracture at the pterion.",
          "goldStandard": "Non-contrast head CT demonstrating a biconvex, lenticular hyperdense hematoma bounded by cranial sutures.",
          "firstLineRx": "Emergent surgical evacuation via craniotomy/burr hole to relieve intracranial pressure and coagulate the bleeding artery.",
          "keyDifferentiator": "Classically features a 'lucid interval' with transient loss of consciousness, apparent recovery, and subsequent precipitous neurological decline."
      }
  },
  "w454": {
      "Arabic": {
          "etiology": "تمزق الأوردة الجسرية (Bridging veins) العابرة للحيز تحت الجافية نتيجة قوى تسارع وتباطؤ أو رضوض رأس لدى كبار السن ومدمني الكحول.",
          "goldStandard": "الأشعة المقطعية للرأس تظهر نزفاً هلالي الشكل (Crescent-shaped) مقعر يمتد على طول نصف الكرة المخية ويتجاوز خطوط الدروز.",
          "firstLineRx": "الجراحة العاجلة (Burr hole evacuation or Craniotomy) في حال وجود انزياح خط الوسط (>5 مم) أو تدهور عصبي، مع ضبط الضغط داخل الجمجمة.",
          "keyDifferentiator": "تجمع وريدي هلالي يتجاوز الدروز القحفية، ويكون مزمناً وغادراً لدى كبار السن مع ضمور الدماغ أو حاداً في الرضوض الشديدة."
      },
      "English": {
          "etiology": "Tearing of bridging cortical veins spanning the subdural space, typically caused by acceleration-deceleration trauma in elderly patients or alcoholics.",
          "goldStandard": "Non-contrast head CT demonstrating a crescent-shaped hyperdense (acute) or hypodense (chronic) hematoma crossing cranial suture lines.",
          "firstLineRx": "Urgent surgical decompression (craniotomy or burr-hole drainage) for hematoma thickness >10 mm or midline shift >5 mm, plus ICP management.",
          "keyDifferentiator": "Crescentic venous collection traversing suture lines, with insidious onset and cognitive fluctuation in elderly individuals."
      }
  },
  "w456": {
      "Arabic": {
          "etiology": "قوى قص حركية دورانية وتسارعية عنيفة ناجمة عن هز الرضيع بعنف ذهاباً وإياباً دون ارتطام جمجمي مباشر.",
          "goldStandard": "ثالوث جنائي مميز: نزف تحت الجافية، ونزف متعدد الطبقات في شبكية العين (Retinal hemorrhages)، ووذمة دماغية شديدة.",
          "firstLineRx": "الإنعاش التنفسي ودعم الدورة الدموية وخفض الضغط داخل الجمجمة، مع التبليغ الجنائي الفوري وحماية الطفل قانونياً.",
          "keyDifferentiator": "ثالوث النزف الشبكي متعدد الطبقات مع نزف تحت الجافية واعتلال دماغي حاد في رضيع سليم دون تاريخ لرضوض مفسرة."
      },
      "English": {
          "etiology": "Severe rotational and acceleration-deceleration shear forces from violent shaking of an infant without direct cranial impact.",
          "goldStandard": "Diagnostic triad of subdural hemorrhage, multilayered retinal hemorrhages, and diffuse encephalopathy/cerebral edema.",
          "firstLineRx": "Emergency cardiorespiratory stabilization, ICP control, neurosurgical intervention if indicated, and immediate mandatory child protective reporting.",
          "keyDifferentiator": "Presence of extensive retinal hemorrhages and subdural collections in an infant with no external trauma or plausible accidental mechanism."
      }
  },
  "w467": {
      "Arabic": {
          "etiology": "انهيار كامل في آليات التنظيم الحراري للجسم وفشل التعرق يؤدي لارتفاع درجة الحرارة المركزية فوق 40°C وحدوث استجابة التهابية جهازية.",
          "goldStandard": "قياس درجة الحرارة الشرجية المركزية (>40°C) بالتزامن مع اضطراب عصبي حاد (هذيان، سبات، تشنجات) في بيئة حارة.",
          "firstLineRx": "التبريد الفيزيائي السريع الفوري عبر التبخير والماء البارد (Evaporative cooling) وخفض الحرارة إلى <39°C خلال 30 دقيقة، مع السوائل الوريدية.",
          "keyDifferentiator": "ارتفاع حرارة الجسم المركزية فوق 40 درجة مئوية مقروناً باختلال عصبي مركزي وغياب التعرق في ضربة الشمس الكلاسيكية."
      },
      "English": {
          "etiology": "Total breakdown of thermoregulatory mechanisms and sweat failure resulting in core temperature escalation (>40°C) and systemic inflammatory cascade.",
          "goldStandard": "Core rectal temperature >40°C (104°F) accompanied by acute central nervous system dysfunction (delirium, coma, seizures).",
          "firstLineRx": "Immediate rapid physical conductive and evaporative cooling (ice water immersion or cold water mist with fans) to reduce core temp <39°C within 30 min.",
          "keyDifferentiator": "Severe hyperthermia (>40°C) combined with acute encephalopathy/CNS dysfunction distinguishing it from simple heat exhaustion."
      }
  },
  "w468": {
      "Arabic": {
          "etiology": "هبوط درجة حرارة الجسم المركزية دون 35°C نتيجة التعرض المديد للبرد القارس أو الغمر في المياه المتجمدة مع قصور توليد الحرارة.",
          "goldStandard": "قياس درجة الحرارة المركزية بميزان حرارة منخفض النطاق (مستقيمي أو مريئي)، وتخطيط القلب يظهر موجات أوزبورن (Osborne J waves).",
          "firstLineRx": "إعادة التدفئة التدريجية (بطانيات دافئة، سوائل وريدية مدفأة عند 42°C، وغسيل صفاقي دافئ في الحالات الشديدة) قبل إعلان الوفاة.",
          "keyDifferentiator": "ظهور موجة أوزبورن (J wave) كحدبة موجبة في نقطة التقاء QRS مع قطعة ST برسم القلب مع بطء شديد في النبض."
      },
      "English": {
          "etiology": "Drop in core body temperature below 35°C (95°F) due to prolonged environmental cold exposure or cold-water immersion overwhelming heat production.",
          "goldStandard": "Low-range core thermometry (esophageal or rectal probe) and characteristic electrocardiographic Osborne (J) waves.",
          "firstLineRx": "Active rewarming (external radiant heat, warmed IV fluids at 42°C, humidified oxygen, and internal peritoneal/thoracic lavage for severe cases).",
          "keyDifferentiator": "Pathognomonic Osborne J waves at the QRS-ST junction on ECG alongside marked bradycardia and shivering cessation at <32°C."
      }
  },
  "w469": {
      "Arabic": {
          "etiology": "اعتداء بدني ورضحي متكرر وغير عرضي يمارسه الوالدان أو القائمون على الرعاية ضد طفل صغير عاجز عن الدفاع عن نفسه.",
          "goldStandard": "المسح العظمي الشعاعي الكامل (Skeletal survey) يظهر كسوراً عظمية متعددة في مراحل التئام مختلفة مع كدمات غير متناظرة.",
          "firstLineRx": "العلاج الطبي والإسعافي للكسور والإصابات، مع عزل الطفل في بيئة آمنة وإخطار السلطات القضائية وحماية الطفل فورياً.",
          "keyDifferentiator": "وجود إصابات وكسور هيكلية متعددة بمراحل شفاء مختلفة تتناقض تماماً مع الرواية التاريخية للوالدين أو قدرات الطفل الحركية."
      },
      "English": {
          "etiology": "Repeated, non-accidental physical assault inflicted upon a child by parents or caregivers.",
          "goldStandard": "Full skeletal radiographic survey revealing multiple fractures at different stages of healing and classic metaphyseal corner fractures.",
          "firstLineRx": "Immediate medical stabilization of traumatic injuries, admission for child safety, and mandatory notification of child protective services.",
          "keyDifferentiator": "Discrepancy between stated mechanism and physical findings, coupled with multisite fractures in varying phases of osseous healing."
      }
  },
  "w474": {
      "Arabic": {
          "etiology": "تثبيط لا رجعي لإنزيم أسيتيل كولين إستراز (AChE) عبر الفسفرة مما يؤدي لتراكم مفرط لأسيتيل كولين في المشابك العصبية والوصلات العضلية.",
          "goldStandard": "قياس نشاط إنزيم الكولين إستراز الكاذب في البلازما وإنزيم كولين إستراز كرات الدم الحمراء المنخفضين بشدة.",
          "firstLineRx": "الأتروبين الوريدي بجرعات متضاعفة حتى جفاف الإفرازات الصدرية (Atropinization)، يليه البراليدوكسيم (2-PAM) قبل حدوث تعتيق الإنزيم.",
          "keyDifferentiator": "ثالوث الإفرازات الغزيرة وحدقة العين النقطية (Pinpoint pupils) مع التشنج القصبي الفاشل للأكسجة ووجود رائحة المبيد الحشري."
      },
      "English": {
          "etiology": "Irreversible phosphorylation and inhibition of acetylcholinesterase (AChE), driving catastrophic acetylcholine accumulation across synaptic clefts.",
          "goldStandard": "Measurement of markedly depressed RBC and serum butyrylcholinesterase (pseudocholinesterase) activity levels.",
          "firstLineRx": "High-dose intravenous Atropine titrated to dry bronchial secretions, combined with Pralidoxime (2-PAM) prior to enzyme aging.",
          "keyDifferentiator": "Full cholinergic crisis: pinpoint miosis, diffuse bronchorrhea, bradycardia, fasciculations, and a characteristic garlic-like hydrocarbon odor."
      }
  },
  "w477": {
      "Arabic": {
          "etiology": "ابتلاع مبيد الأعشاب الثنائي البيريديل الذي يتراكم انتخابياً في الخلايا الرئوية من النوعين I و II ويولد جذور هيدروكسيل حرة مدمرة عبر تفاعلات الأكسدة والاختزال.",
          "goldStandard": "فحص البول بالديثيونيت القلوي (Sodium dithionite test) يظهر لوناً أزرق فاقعاً يؤكد وجود الباراكوات وتركيزه.",
          "firstLineRx": "غسيل المعدة السريع بالفحم النشط أو طين الفولر (Fuller's earth)، مع حظر إعطاء الأكسجين الإضافي تماماً لتجنب تفاقم التليف الرئوي.",
          "keyDifferentiator": "حظر إعطاء الأكسجين الإضافي لأن الأكسجين يسرع عملية التلف التأكسدي الرئوي القاتل المؤدي لتليف رئوي صاعق."
      },
      "English": {
          "etiology": "Ingestion of bipyridyl herbicide selectively accumulated in type I/II alveolar pneumocytes, generating cytotoxic reactive oxygen species through redox cycling.",
          "goldStandard": "Urinary sodium dithionite test turning blue in the presence of paraquat, combined with spectrophotometric serum concentration curves.",
          "firstLineRx": "Immediate gastrointestinal decontamination with activated charcoal or Fuller's earth; supplemental oxygen is strictly withheld unless pO2 < 40 mmHg.",
          "keyDifferentiator": "Absolute contraindication to liberal oxygen administration because oxygen accelerates radical-mediated fulminant pulmonary fibrosis."
      }
  },
  "w478": {
      "Arabic": {
          "etiology": "فرط تحفيز مستقبلات الأسيتيل كولين المسكارينية والنيكوتينية بالجهازين العصبيين المركزي والمحيطي نتيجة مثبطات الكولين إستراز أو السموم.",
          "goldStandard": "المتلازمة السريرية الكلاسيكية الممثلة بالاختصار الشهير (SLUDGE/DUMBELS) مع استجابة تشخيصية فورية لجرعة تجريبية من الأتروبين.",
          "firstLineRx": "الأتروبين الوريدي بالجرعات العالية المستمرة حتى تتوقف الإفرازات الرئوية، مع البراليدوكسيم ودعم مجرى التنفس.",
          "keyDifferentiator": "تميزه بفرط الإفرازات في كافة أجهزة الجسم (دموع، لعاب، عرق، بوال، إسهال، إفرازات قصبية) وضيق شديد بالحدقة مع بطء النبض."
      },
      "English": {
          "etiology": "Excessive stimulation of muscarinic and nicotinic receptors in central and peripheral nervous systems by cholinesterase inhibitors or cholinomimetics.",
          "goldStandard": "Characteristic clinical constellation encapsulated by the SLUDGE/DUMBELS mnemonics and prompt reversal with atropine trial.",
          "firstLineRx": "IV Atropine titrated to clearing of bronchorrhea and relief of bronchospasm, alongside supportive airway management.",
          "keyDifferentiator": "Profuse universal hypersecretion (diaphoresis, lacrimation, salivation, bronchorrhea) paired with pinpoint miosis and bradycardia."
      }
  },
  "w479": {
      "Arabic": {
          "etiology": "ارتباط الرصاص بمجموعات السلفهيدريل وتثبيط إنزيمي فيروتشيلاتاز (Ferrochelatase) و ALA-dehydratase في مسار تصنيع الهيم.",
          "goldStandard": "قياس مستوى الرصاص في الدم الوريدي (Blood Lead Level)، ووجود التنقيط القاعدي بكرات الدم الحمراء.",
          "firstLineRx": "إبعاد المصدر السام فوراً، والعلاج بالمخالب المعدنية: سوكسيمير (Succimer/DMSA) أو الكالسيوم ثنائي الصوديوم EDTA مع الديمركابرول في الاعتلال الدماغي.",
          "keyDifferentiator": "خطوط بيرتون الزرقاء الرمادية على حواف اللثة (Burton's lines) وخطوط الكثافة الرصاصية على نهايات العظام بالأشعة مع هبوط الرسغ."
      },
      "English": {
          "etiology": "Lead binding to sulfhydryl groups inhibiting ferrochelatase and ALA dehydratase in heme synthesis, alongside disrupting cellular calcium signaling.",
          "goldStandard": "Whole blood lead level (BLL) via atomic absorption spectrometry, coupled with basophilic stippling on peripheral blood smear.",
          "firstLineRx": "Environmental abatement and chelation therapy: oral Succimer (DMSA) for moderate elevations; IV CaNa2EDTA + IM Dimercaprol (BAL) for acute encephalopathy.",
          "keyDifferentiator": "Burton lines along gingival margins, radiodense metaphyseal 'lead lines' on long bone X-rays, and motor neuropathy presenting as wrist drop."
      }
  },
  "w481": {
      "Arabic": {
          "etiology": "ارتباط الزرنيخ الخماسي والثلاثي بمجموعات السلفهيدريل لحمض الليبويك وتثبيط معقد إنزيم البيروفات ديهيدروجيناز وإنتاج ATP.",
          "goldStandard": "جمع البول على مدار 24 ساعة لقياس تركيز الزرنيخ غير العضوي، وفحص بصيلات الشعر والأظافر (ظهور خطوط ميس Mees lines).",
          "firstLineRx": "الديمركابرول (Dimercaprol / BAL) بالحقن العضلي في التسمم الحاد، يليه السوكسيمير (DMSA)، مع الإماهة الوريدية المكثفة.",
          "keyDifferentiator": "رائحة الثوم المميزة في أنفاس المريض مع القيء الشديد الشبيه بماء الأرز (Rice-water stools) وخطوط ميس البيضاء العرضية على الأظافر."
      },
      "English": {
          "etiology": "Trivalent arsenite binding to lipoic acid sulfhydryl groups, disrupting pyruvate dehydrogenase, cellular respiration, and oxidative phosphorylation.",
          "goldStandard": "24-hour urinary arsenic quantification (>50 mcg/L) and presence of transverse white Mees lines on fingernails.",
          "firstLineRx": "Immediate chelation with intramuscular Dimercaprol (BAL) or oral Succimer (DMSA), aggressive fluid resuscitation, and electrolyte repletion.",
          "keyDifferentiator": "Classic garlic breath odor, watery 'rice-water' diarrhea mimicking cholera, and transverse leukonychia (Mees lines) on nail beds."
      }
  },
  "w483": {
      "Arabic": {
          "etiology": "ارتباط الزئبق التساهمي مع مجاميع الثيول الخلوية مسبباً تلفاً غشائياً وتثبيطاً أنزيمياً وتدميراً عصبياً في قشرة الدماغ والمخيخ.",
          "goldStandard": "قياس الزئبق بالدم (للتعرض الحاد أو العضوي) أو البول لمدة 24 ساعة (للتعرض غير العضوي)، مع تخطيط العصب.",
          "firstLineRx": "استخلاب الزئبق بالسوكسيمير (DMSA) أو الديمركابرول (BAL للزئبق غير العضوي فقط ويحظر في العضوي)، مع تجنب مسببات التلوث.",
          "keyDifferentiator": "ثالوث التسمم العصبي: الرعاش القصدي، واضطراب المزاج والتهيجية والخجل الشديد (Erethism mercurialis)، وانقباض المجال البصري النفقي."
      },
      "English": {
          "etiology": "High-affinity binding to tissue thiol groups disrupting enzymatic functions, targeting the cerebellar vermis, calcarine cortex, and renal tubules.",
          "goldStandard": "Whole-blood mercury levels (for acute or organic methylmercury) or 24-hour urine collection (for elemental/inorganic forms).",
          "firstLineRx": "Chelation therapy with oral Succimer (DMSA) or Dimercaprol (BAL, for inorganic only; contraindicated in elemental/organic forms due to brain redistribution).",
          "keyDifferentiator": "Triad of intentional tremor, profound neuro-behavioral instability ('erethism mercurialis'), and concentric visual field constriction."
      }
  },
  "w484": {
      "Arabic": {
          "etiology": "ابتلاع كميات مفرطة من أقراص الحديد تتجاوز قدرة ارتباط الترانسفيرين، فيتدفق الحديد الحر مسبباً بيروكسدة دهنية وتآكلاً بطانياً ونخراً كبدياً.",
          "goldStandard": "قياس مستوى الحديد المصلي عند الذروة (2-4 ساعات بعد الابتلاع)، حيث يشير المستوى > 500 mcg/dL لتسمم شديد مع وجود حماض فجوة صاعدة.",
          "firstLineRx": "الاستخلاب بالترياق النوعي ديفيروكسامين الوريدي (Deferoxamine) حتى تحول لون البول من اللون الوردي النبيذي (Vin rosé) إلى لونه الطبيعي.",
          "keyDifferentiator": "تحول بول المريض إلى اللون الوردي الداكن (Vin rosé urine) عند الاستخلاب بالديفيروكسامين مع قيء مدمم وتآكل هضمي شديد."
      },
      "English": {
          "etiology": "Free unbuffered ferric and ferrous ions exceeding transferrin-binding capacity, catalyzing hydroxyl radical lipid peroxidation and profound metabolic acidosis.",
          "goldStandard": "Peak serum iron measurement at 2-4 hours post-ingestion (>500 mcg/dL confirms systemic toxicity; >1000 mcg/dL lethal risk).",
          "firstLineRx": "IV continuous Deferoxamine chelation until serum iron normalizes and characteristic 'vin rosé' urine clears, plus whole-bowel irrigation.",
          "keyDifferentiator": "Pathognomonic 'vin rosé' (red-orange) urine during deferoxamine chelation combined with acute necrotizing hemorrhagic gastroenteritis."
      }
  },
  "w488": {
      "Arabic": {
          "etiology": "أكسدة الميثانول بواسطة إنزيم الكحول ديهيدروجيناز إلى فورمالدهيد ثم إلى حمض الفورميك (Formic acid) السام للشبكية والمسؤول عن الحماض.",
          "goldStandard": "قياس غازات الدم (حماض استقلابي شديد مع فجوة أنيونية وأسمولية مرتفعة)، وقياس مستوى الميثانول بالدم، ونخر النواة العدسية بالرنين.",
          "firstLineRx": "إعطاء مثبط إنزيم الكحول ديهيدروجيناز فومبيزول (Fomepizole) أو الإيثانول، وحمض الفولينيك، والغسيل الكلوي العاجل.",
          "keyDifferentiator": "اضطراب بصري وصفي يشبه 'النظر من خلال عاصفة ثلجية' (Snowstorm vision) مع وذمة حليمة العصب البصري وحماض فجوة أنيونية وأسمولية هائل."
      },
      "English": {
          "etiology": "Alcohol dehydrogenase oxidation of methanol into formaldehyde, subsequently converted by aldehyde dehydrogenase into cytotoxic formic acid.",
          "goldStandard": "Severe high-anion-gap metabolic acidosis with elevated osmolar gap, serum methanol chromatography, and bilateral putaminal necrosis on MRI.",
          "firstLineRx": "Fomepizole (or ethanol infusion) to block alcohol dehydrogenase, IV folinic acid, and emergent hemodialysis for refractory acidosis or vision loss.",
          "keyDifferentiator": "Complaint of blindness described as walking in an expansive 'snowstorm', accompanying marked optic disc hyperemia and severe metabolic acidosis."
      }
  },
  "w490": {
      "Arabic": {
          "etiology": "استقلاب غليكول الإيثيلين عبر إنزيم الكحول ديهيدروجيناز إلى حمض الغليكوليك وحمض الأوكساليك الذي يرسب بلورات أوكسالات الكالسيوم في الأنابيب الكلوية.",
          "goldStandard": "فحص البول المجهري يظهر بلورات أوكسالات الكالسيوم المغلفية (Envelope-shaped crystals)، مع توهج البول بضوء وود (Wood's lamp).",
          "firstLineRx": "الفومبيزول الوريدي (Fomepizole) أو الإيثانول لتثبيط الإنزيم، مع الثيامين والبيريدوكسين، والغسيل الكلوي العاجل عند الفشل الكلوي.",
          "keyDifferentiator": "ظهور بلورات أوكسالات الكالسيوم المغلفية المميزة في فحص راسب البول المجهري وتوهج بول المريض بالأشعة فوق البنفسجية لوجود الفلورسين."
      },
      "English": {
          "etiology": "Sequential oxidation by alcohol and aldehyde dehydrogenases into toxic glycolic, glyoxylic, and oxalic acids forming insoluble calcium oxalate monohydrate.",
          "goldStandard": "Urine microscopy revealing monohydrate/dihydrate calcium oxalate envelope-shaped crystals, fluorescence under Wood's lamp, and osmolar gap.",
          "firstLineRx": "Fomepizole (or IV ethanol), cofactor therapy with Thiamine and Pyridoxine, and urgent hemodialysis to prevent permanent acute tubular necrosis.",
          "keyDifferentiator": "Envelope-shaped calcium oxalate crystalluria under polarized light and urinary fluorescence under Wood's lamp alongside acute renal failure."
      }
  },
  "w491": {
      "Arabic": {
          "etiology": "ابتلاع مشتقات البترول الهيدروكربونية منخفضة اللزوجة وسريعة التطاير يسبب استنشاقها في المجرى الهوائي وتخريب مادة السورفاكتانت الرئوية.",
          "goldStandard": "أشعة الصدر السينية (Chest X-ray) تظهر ارتشاحات خلالية وقاعدية لذات الرئة الاستنشاقية (Chemical pneumonitis)، مع مراقبة أكسجة الدم.",
          "firstLineRx": "الرعاية الداعمة بالأكسجين والترطيب؛ ويُحظر تماماً إحداث القيء أو غسيل المعدة أو إعطاء الفحم النشط لتفادي وصوله للرئتين.",
          "keyDifferentiator": "الحظر القاطع لإحداث التقيؤ أو تركيب أنبوب معدي بسبب انخفاض لزوجة الهيدروكربون وخطورة تفاقم الاستنشاق الرئوي الكيميائي القاتل."
      },
      "English": {
          "etiology": "Low-viscosity, high-volatility liquid hydrocarbon aspiration into the tracheobronchial tree, destroying pulmonary surfactant and causing atelectasis.",
          "goldStandard": "Serial chest radiographs revealing bilateral basilar infiltrates and consolidation diagnostic of chemical pneumonitis within 2-6 hours.",
          "firstLineRx": "Supportive respiratory care and supplemental oxygen; induction of emesis, gastric lavage, and activated charcoal are strictly contraindicated.",
          "keyDifferentiator": "Absolute prohibition of gastric emptying or induced emesis due to high vapor pressure and extreme risk of chemical pneumonitis aspiration."
      }
  },
  "w495": {
      "Arabic": {
          "etiology": "ارتباط أحادي أكسيد الكربون بالهيموغلوبين بألفة تفوق الأكسجين بـ 200-250 ضعفاً مشكلاً الكاربوكسي هيموغلوبين (HbCO) وحارفاً منحنى التفكك لليسار.",
          "goldStandard": "قياس غازات الدم عبر جهاز تحليل أكسجة الهيموغلوبين (Co-oximetry) لإثبات ارتفاع نسبة الكاربوكسي هيموغلوبين (>3% لغير المدخنين).",
          "firstLineRx": "استنشاق الأكسجين النقي بنسبة 100% عبر قناع غير عاود للتنفس، أو الأكسجين عالي الضغط (Hyperbaric oxygen) للحالات الشديدة والحوامل.",
          "keyDifferentiator": "قراءة مقياس النبض القياسي (Pulse oximeter) تظهر طبيعية كاذبة لأن الجهاز لا يفرق بين أوكسي هيموغلوبين وكاربوكسي هيموغلوبين."
      },
      "English": {
          "etiology": "Carbon monoxide binds hemoglobin with an affinity 200-250 times greater than oxygen, shifting the oxygen-hemoglobin dissociation curve to the left.",
          "goldStandard": "Arterial or venous co-oximetry demonstrating elevated carboxyhemoglobin (COHb >3-4% in non-smokers, >10% in smokers); standard pulse oximetry is falsely normal.",
          "firstLineRx": "Immediate administration of 100% normobaric oxygen via non-rebreather mask; hyperbaric oxygen (HBO) indicated for loss of consciousness, pregnancy, or COHb >25%.",
          "keyDifferentiator": "Falsely normal pulse oximetry reading despite severe cellular hypoxia, coupled with classic bilateral globus pallidus hyperintensities on brain MRI."
      }
  },
  "w498": {
      "Arabic": {
          "etiology": "ارتباط السيانيد بالحديد ثلاثي التكافؤ (Fe3+) في إنزيم سيتوكروم سي أوكسيداز بالميتوكوندريا، مما يوقف الفسفرة التأكسدية ويحبس الأكسجين.",
          "goldStandard": "حماض لاكتيكي حاد وفجوة أنيونية مرتفعة مع ارتفاع غير طبيعي في تشبع الأكسجين الوريدي المركزي (ScvO2 > 85%) لعجز الأنسجة عن استهلاكه.",
          "firstLineRx": "الترياق النوعي هيدروكسوكوبالامين الوريدي (Hydroxocobalamin / Cyanokit) الذي يرتبط بالسيانيد ليشكل فيتامين B12، أو ثيوسلفات الصوديوم.",
          "keyDifferentiator": "رائحة اللوز المر في أنفاس المريض مع تشبع وريدي مرتفع شاذ للأكسجين بالدم الوريدي ولون الدم الوريدي الأحمر الفاقع المشابه للشرياني."
      },
      "English": {
          "etiology": "High-affinity binding to ferric (Fe3+) iron in mitochondrial cytochrome c oxidase (complex IV), completely halting electron transport and aerobic ATP synthesis.",
          "goldStandard": "Marked lactic acidosis with high anion gap, elevated whole blood cyanide levels, and abnormally high central venous oxygen saturation (ScvO2 > 85-90%).",
          "firstLineRx": "Immediate intravenous Hydroxocobalamin (Cyanokit) forming non-toxic cyanocobalamin excreted in urine, or Sodium Nitrite plus Sodium Thiosulfate.",
          "keyDifferentiator": "Bitter almond breath odor paired with 'arterialized' bright red venous blood due to failure of peripheral tissue extraction of oxygen."
      }
  },
  "w500": {
      "Arabic": {
          "etiology": "استنشاق غاز كبريتيد الهيدروجين الذي يثبط إنزيم سيتوكروم سي أوكسيداز في الميتوكوندريا على غرار السيانيد، مما يسبب اختناقاً خلوياً كيميائياً سريعاً.",
          "goldStandard": "السقوط الفجائي فاقداً للوعي (Knockdown phenomenon) في بيئة الصرف الصحي أو النفط مع رائحة البيض الفاسد واختبار شريط خلات الرصاص.",
          "firstLineRx": "الإخراج الفوري لمكان آمن، الأكسجين بنسبة 100%، وإعطاء نتريت الصوديوم (Sodium nitrite) لتوليد الميتهيموغلوبين الذي يجذب السلفيد.",
          "keyDifferentiator": "رائحة البيض الفاسد النفاذة عند التراكيز المنخفضة، يتبعها شلل فوري لحاسة الشم عند التراكيز العالية مع ظاهرة الإطاحة السريعة بالوعي (Knockdown)."
      },
      "English": {
          "etiology": "Rapid inhalation of H2S gas inhibiting mitochondrial cytochrome oxidase through binding to ferric heme, causing immediate cellular chemical asphyxiation.",
          "goldStandard": "Classic occupational/sewer history of immediate 'knockdown' syncope, detection of atmospheric levels, and lead acetate test-paper darkening.",
          "firstLineRx": "Rapid evacuation, 100% oxygen, intensive supportive airway therapy, and consideration of IV Sodium Nitrite to generate sulfmethemoglobin sink.",
          "keyDifferentiator": "Pungent rotten-egg olfactory sensation at low concentrations transitioning to rapid olfactory fatigue/paralysis and sudden collapse."
      }
  },
  "w501": {
      "Arabic": {
          "etiology": "تحفيز مفرط لمستقبلات الأفيون ميو (Mu-opioid receptors) في جذع الدماغ والجهاز العصبي، مما يثبط محفزات التنفس ويقلل الاستجابة لثاني أكسيد الكربون.",
          "goldStandard": "ثالوث التسمم الأفيوني: تثبيط التنفس السطحي البطيء، وتدني درجة الوعي والسبات، والحدقات النقطية الدقيقة (Pinpoint pupils).",
          "firstLineRx": "إعطاء الترياق النوعي النالوكسون (Naloxone) بالحقن الوريدي أو العضلي أو الرذاذ الأنفي، مع المعايرة لضمان استعادة التنفس.",
          "keyDifferentiator": "الاستجابة الدراماتيكية الفورية واليقظة السريعة لمريض فاقد للوعي والتنفس بعد حقن جرعة وريدية من النالوكسون."
      },
      "English": {
          "etiology": "Supratherapeutic stimulation of central mu-opioid receptors, depressing pontine and medullary respiratory drive centers and blunting hypercapnic response.",
          "goldStandard": "Classic toxidrome triad: profound respiratory depression (<8-10 breaths/min), depressed level of consciousness/coma, and symmetric pinpoint miosis.",
          "firstLineRx": "Titrated Naloxone administration (IV, IM, SC, or intranasal) aimed at restoring adequate spontaneous ventilation without precipitating acute withdrawal.",
          "keyDifferentiator": "Dramatic, immediate reversal of respiratory arrest and awakening within minutes following therapeutic administration of naloxone."
      }
  },
  "w503": {
      "Arabic": {
          "etiology": "تعزيز وظيفة وتكرار فتح قنوات الكلوريد المرتبطة بمستقبلات GABA-A في الجهاز العصبي المركزي، مما يزيد من تثبيط النقل العصبي.",
          "goldStandard": "فحص البول السريع لوجود البنزوديازيبينات بالتزامن مع ثالوث التثبيط العصبي: النعاس والسبات مع علامات حيوية مستقرة نسبياً ورتة في الكلام.",
          "firstLineRx": "الرعاية الداعمة وحماية مجرى التنفس؛ ويمكن استخدام الترياق التنافسي فلومازينيل (Flumazenil) بحذر شديد مع تجنب استخدامه في الاعتماد المزمن.",
          "keyDifferentiator": "النعاس والترنح الشديد مع استقرار نسبي في العلامات الحيوية (عدم وجود هبوط تنفسي شديد بمعزل عن الكحول أو الأفيونات) وعكسه بالفلومازينيل."
      },
      "English": {
          "etiology": "Positive allosteric modulation of GABA-A receptors, increasing chloride channel opening frequency and hyperpolarizing central neuronal membranes.",
          "goldStandard": "Comprehensive urinary drug screen coupled with clinical presentation of isolated central nervous system depression with preserved vital signs.",
          "firstLineRx": "Airway protection and supportive care; Flumazenil is a specific competitive antagonist used selectively but avoided in chronic users or co-ingestions.",
          "keyDifferentiator": "Severe lethargy and slurred speech with remarkably stable hemodynamics and minimal respiratory compromise compared to opioid overdoses."
      }
  },
  "w505": {
      "Arabic": {
          "etiology": "حصر قنوات الصوديوم السريعة في عضلة القلب، وحصر مستقبلات ألفا-1، والمستقبلات المسكارينية، ومستقبلات الهيستامين وإعادة قبط النورأدرينالين.",
          "goldStandard": "تخطيط القلب الكهربائي يظهر اتساع مركب QRS (>100 ms)، وظهور موجة R طرفية في مسرى aVR (>3 mm)، مع اضطرابات نظم بطينية خطيرة.",
          "firstLineRx": "بيكربونات الصوديوم الوريدية (Sodium bicarbonate) بجرعة 1-2 mEq/kg كجرعة دفعية وريدية لقلونة الدم إلى pH 7.45-7.55 وتجاوز حصر قنوات الصوديوم.",
          "keyDifferentiator": "اتساع معقد QRS مع موجة R متأخرة مهيمنة في اشتقاق aVR يستجيب نوعياً وفورياً لبيكربونات الصوديوم الوريدية."
      },
      "English": {
          "etiology": "Fast inward myocardial sodium channel blockade (phase 0 depolarization), peripheral alpha-1 antagonism, muscarinic/H1 blockade, and GABA antagonism.",
          "goldStandard": "Electrocardiogram showing QRS prolongation (>100 ms predicts seizures, >160 ms predicts ventricular dysrhythmias) and prominent terminal R wave in aVR (>3 mm).",
          "firstLineRx": "Immediate IV Sodium Bicarbonate boluses titrated to arterial pH 7.45-7.55 to overcome competitive sodium channel inhibition and restore conduction.",
          "keyDifferentiator": "Pathognomonic terminal R wave in lead aVR (>3 mm or R/S ratio >0.7) and rapid narrowing of widened QRS upon hypertonic sodium bicarbonate administration."
      }
  },
  "w507": {
      "Arabic": {
          "etiology": "تداخل الليثيوم مع مسارات إشارات الفوسفوإينوزيتول ونقل الكاتيونات الخلوية، وتراكمه نتيجة الجفاف أو نقص الصوديوم أو استخدام مدرات البول.",
          "goldStandard": "قياس مستوى الليثيوم المصلي في الدم (>1.5 mEq/L في التسمم، و >2.5 mEq/L في الحالات الشديدة المهددة للحياة).",
          "firstLineRx": "الإماهة الشديدة بمحلول ملحي نظامي (Normal saline 0.9%)، وإجراء جلسات الغسيل الكلوي الدموي الإسعافي عند المستويات >4 mEq/L أو الأعراض الشديدة.",
          "keyDifferentiator": "تسببه في داء السكري الكاذب كلوي المنشأ (Nephrogenic Diabetes Insipidus) ورعاش عضلي خشن متقدم مع رنح وتشنجات وضرورة علاجه بالغسيل الكلوي."
      },
      "English": {
          "etiology": "Substitution for sodium and intracellular accumulation inhibiting inositol monophosphatase and GSK-3, precipitated by dehydration, hyponatremia, or NSAIDs.",
          "goldStandard": "Serum lithium concentration measurement (>1.5 mEq/L indicates clinical toxicity; >2.5 mEq/L defines severe toxicity).",
          "firstLineRx": "Vigorous volume expansion with 0.9% normal saline to promote renal excretion, alongside emergent hemodialysis for concentrations >4-5 mEq/L.",
          "keyDifferentiator": "Coarse intention tremors, ataxia, development of nephrogenic diabetes insipidus with polyuria, and definitive clearance via hemodialysis."
      }
  },
  "w508": {
      "Arabic": {
          "etiology": "فك اقتران الفسفرة التأكسدية الميتوكوندرية (Uncoupling of oxidative phosphorylation) وتحفيز مركز التنفس مسبباً اضطراباً حمضياً قاعدياً مركباً.",
          "goldStandard": "اضطراب حمضي قاعدي مزدوج كلاسيكي: قلاء تنفسي باكر متبوع بحماض استقلابي بفجوة أنيونية مرتفعة، مع مستوى ساليسيلات بالمصل >30-40 mg/dL.",
          "firstLineRx": "قلوية البول والدم بإعطاء بيكربونات الصوديوم الوريدية لتعزيز الإفراز الكلوي (Urinary alkalinization pH >7.5)، والغسيل الكلوي للحالات الوخيمة.",
          "keyDifferentiator": "ثنائية طنين الأذن المميز (Tinnitus) مع الحماض الاستقلابي والقلاء التنفسي المختلط، واستجابتها لقلوية البول ببيكربونات الصوديوم."
      },
      "English": {
          "etiology": "Uncoupling of oxidative phosphorylation leading to hyperthermia and metabolic acidosis, coupled with direct stimulation of the medullary respiratory center.",
          "goldStandard": "Mixed acid-base disturbance: primary respiratory alkalosis paired with primary high anion gap metabolic acidosis, and serum salicylate level >40 mg/dL.",
          "firstLineRx": "Aggressive urinary alkalinization using IV Sodium Bicarbonate infusion with potassium repletion to urine pH 7.5-8.0, and hemodialysis for severe poisoning.",
          "keyDifferentiator": "Hallmark early bilateral tinnitus and tachypnea, coupled with pathognomonic concurrent primary respiratory alkalosis and metabolic acidosis."
      }
  },
  "w510": {
      "Arabic": {
          "etiology": "استقلاب الباراسيتامول المفرط عبر إنزيم CYP2E1 إلى المركب عالي السمية NAPQI، واستنزاف مخزون الجلوتاثيون الكبدي مؤدياً لنخر خلايا الكبد وتلف الميتوكوندريا.",
          "goldStandard": "مخطط روماك-ماثيو (Rumack-Matthew nomogram) لتقييم خطورة سمية الكبد بالاعتماد على تركيز الباراسيتامول في المصل عند 4 ساعات، مع ارتفاع إنزيمات ALT/AST.",
          "firstLineRx": "الترياق النوعي إن-أسيتيل سيستئين (N-acetylcysteine / NAC) وريدياً أو فموياً بأسرع ما يمكن، وتكون فعاليته القصوى خلال 8-10 ساعات من الابتلاع.",
          "keyDifferentiator": "تطبيقه الدقيق لمخطط روماك-ماثيو الزمني (Rumack-Matthew nomogram) لتحديد قرار إعطاء الترياق المنقذ للحياة إن-أسيتيل سيستئين (NAC)."
      },
      "English": {
          "etiology": "Saturation of glucuronidation/sulfation pathways shunting paracetamol to CYP2E1, forming toxic NAPQI which depletes hepatocellular glutathione stores.",
          "goldStandard": "Application of the 4-hour post-ingestion serum acetaminophen concentration plotted on the Rumack-Matthew nomogram, alongside marked AST/ALT elevations.",
          "firstLineRx": "Intravenous or oral N-acetylcysteine (NAC) initiated within 8 hours of ingestion to replenish glutathione and detoxify reactive NAPQI intermediates.",
          "keyDifferentiator": "Definitive clinical stratification utilizing the time-dependent Rumack-Matthew nomogram and life-saving reversal via N-acetylcysteine."
      }
  },
  "w513": {
      "Arabic": {
          "etiology": "ابتلاع ثمار أو أوراق نبات ست الحسن المحتوية على قلويدات التروبان الطبيعية (الأتروبين، الهيوسيامين، والسكوبولامين) الحاجبة لمستقبلات الأسيتيل كولين.",
          "goldStandard": "المتلازمة المضادة للكولين الكلاسيكية المصحوبة بهذيان وتوسع شديد غير مستجيب بالحدقتين، مع تاريخ لابتلاع النبات أو ثماره اللامعة.",
          "firstLineRx": "الفوسوستيغمين (Physostigmine) بالحقن الوريدي البطيء لعكس التثبيط العصبي والهذيان تحت مراقبة القلب، مع الرعاية الداعمة وتبريد الجسم.",
          "keyDifferentiator": "اتساع حدقة العين التام غير المستجيب للضوء مع جفاف الجلد واللسان التام والهذيان الحاد وعكس الأعراض التنافسي بواسطة الفوسوستيغمين."
      },
      "English": {
          "etiology": "Ingestion of deadly nightshade berries/leaves containing potent natural tropane alkaloids (atropine, hyoscyamine, scopolamine) causing muscarinic antagonism.",
          "goldStandard": "Clinical identification of the classic anticholinergic toxidrome alongside botanic confirmation of black cherry-like berries and mydriasis.",
          "firstLineRx": "Supportive temperature cooling, sedating agitation with benzodiazepines, and titrated Physostigmine for severe delirium under continuous cardiac telemetry.",
          "keyDifferentiator": "Severe mydriasis, profound xerostomia, anhidrosis, and visual hallucinations reversing upon administration of the tertiary amine physostigmine."
      }
  },
  "w514": {
      "Arabic": {
          "etiology": "حصر تنافسي لمستقبلات الأسيتيل كولين المسكارينية المحيطية والمركزية بفعل مضادات الهيستامين، مضادات الذهان، الأتروبين، أو مضادات التشنج.",
          "goldStandard": "الخماسية السريرية الشهيرة: 'أعمى كالخفاش، أحمر كالشمندر، جاف كالعظم، ساخن كالأتون، مجنون كصانع القبعات' مع احتباس البول وغياب أصوات الأمعاء.",
          "firstLineRx": "الفوسوستيغمين (Physostigmine) للحالات الشديدة ذات الهذيان، والبنزوديازيبينات للسيطرة على الهياج، والتبريد الفيزيائي، والقسطرة البولية.",
          "keyDifferentiator": "الجفاف الجلدي التام وغياب التعرق تحت الإبطين الذي يميزه بوضوح عن المتلازمة المحاكية للسمبثاوي (كالتعرق في الكوكايين والأمفيتامين)."
      },
      "English": {
          "etiology": "Competitive antagonism of central and peripheral muscarinic acetylcholine receptors by antihistamines, antispasmodics, atropine, or plant alkaloids.",
          "goldStandard": "Clinical hallmark mnemonic: 'Blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone (anhidrosis)'.",
          "firstLineRx": "Benzodiazepines for agitation, urinary catheterization for retention, active external cooling, and IV Physostigmine for severe delirium.",
          "keyDifferentiator": "Completely dry skin and axillae with absent bowel sounds, clinically differentiating it from diaphoresis seen in sympathomimetic toxidromes."
      }
  },
  "w516": {
      "Arabic": {
          "etiology": "حصر تنافسي نوعي لمستقبلات الغلايسين (Glycine receptors) المثبطة في الحبل الشوكي وجذع الدماغ، مما يؤدي لنشاط عصبي حركي مفرط وغير مقيد.",
          "goldStandard": "التشنجات العضلية الانعكاسية الشديدة المؤلمة (Opisthotonos) المستثارة بأبسط المثيرات اللمسية أو الصوتية مع بقاء المريض كامل الوعي.",
          "firstLineRx": "البنزوديازيبينات بالجرعات العالية (ديازيبام) لإيقاف التشنجات، والباربيتورات، وعزل المريض في غرفة مظلمة هادئة تماماً وتجنب أي لمس أو صوت.",
          "keyDifferentiator": "بقاء المريض في كامل وعيه وإدراكه الحسي أثناء نوبات تشنج الظهر والرقبة الشديدة (Opisthotonos) والابتسامة السردونية (Risus sardonicus)."
      },
      "English": {
          "etiology": "Potent competitive antagonism of inhibitory post-synaptic glycine receptors in the spinal cord anterior horn and brainstem, unleashing uninhibited motor firing.",
          "goldStandard": "Characteristic awake reflex tetanic convulsions triggered by minor tactile or auditory stimuli, combined with laboratory alkaloid detection in urine.",
          "firstLineRx": "High-dose IV Benzodiazepines (diazepam/lorazepam) for muscle relaxation, endotracheal intubation/paralysis if needed, and absolute dark/quiet isolation.",
          "keyDifferentiator": "Severe, exquisitely painful tonic muscle spasms and opisthotonos occurring while the patient maintains entirely preserved consciousness and lucidity."
      }
  },

};

/**
 * دالة استخراج بطاقة الفلاش كارد السريرية الشاملة مع المقارنة الديناميكية بالخيارات الخمسة
 */
export function getSoloFlashcard(
  targetWord: MedicalWord,
  options: MedicalWord[],
  lang: 'Arabic' | 'English'
): SoloFlashcard {
  const dbEntry = SOLO_FLASHCARDS_DB[targetWord.id];
  const hints = SOLO_DISEASE_HINTS[targetWord.id];
  
  const distractors = options.filter(o => o.id !== targetWord.id);

  if (lang === 'Arabic') {
    const etiology = dbEntry?.Arabic?.etiology ||
      `اضطراب سريري يرتبط بآلية إمراضية في (${targetWord.subjects[0] || 'الطب السريري'}).`;

    const goldStandard = dbEntry?.Arabic?.goldStandard ||
      hints?.Arabic?.hint3 ||
      `الفحص التأكيدي السريري والمخبري المتوافق مع معايير ${targetWord.word.Arabic}.`;

    const firstLineRx = dbEntry?.Arabic?.firstLineRx ||
      `البروتوكول العلاجي المعتمد، التدبير الداعم، ومتابعة الاستجابة السريرية الحثيثة.`;

    const keyDiff = dbEntry?.Arabic?.keyDifferentiator || hints?.Arabic?.hint1 || targetWord.word.Arabic;

    const distractorNames = distractors.map(d => d.word.Arabic).join('، ');

    const diffKey = distractorNames.length > 0
      ? `العلامة الفارقة للحالة: (${keyDiff}). بالمقارنة مع الخيارات البديلة المعروضة في الجولة (${distractorNames})، تم استبعادها لأنها تتبع مساراً إمراضياً مختلفاً وتفتقر لهذا المعيار التشخيصي الحاسم.`
      : `العلامة الفارقة للحالة: (${keyDiff}) التي تحسم التشخيص دون الخيارات المتقاربة.`;

    return {
      etiology,
      goldStandard,
      firstLineRx,
      diffKey
    };
  } else {
    const etiology = dbEntry?.English?.etiology ||
      `A clinical condition intrinsically linked to pathophysiologic mechanisms in ${targetWord.subjects[0] || 'Internal Medicine'}.`;

    const goldStandard = dbEntry?.English?.goldStandard ||
      hints?.English?.hint3 ||
      `Definitive diagnostic workup and criteria corroborating ${targetWord.word.English}.`;

    const firstLineRx = dbEntry?.English?.firstLineRx ||
      `Guideline-directed therapeutic intervention, supportive management, and close clinical monitoring.`;

    const keyDiff = dbEntry?.English?.keyDifferentiator || hints?.English?.hint1 || targetWord.word.English;

    const distractorNames = distractors.map(d => d.word.English).join(', ');

    const diffKey = distractorNames.length > 0
      ? `Key differentiator: (${keyDiff}). Compared to the other differential choices presented (${distractorNames}), they were ruled out because they lack this diagnostic hallmark and follow distinct management pathways.`
      : `Key differentiator: (${keyDiff}) definitively establishing the diagnosis.`;

    return {
      etiology,
      goldStandard,
      firstLineRx,
      diffKey
    };
  }
}
