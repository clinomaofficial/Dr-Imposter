import { MedicalWord } from './medicalWords';
import { HINTS_DICTIONARY } from './hints';

export interface SoloProgressiveHint {
  hint1: string; // التلميح الاستكشافي الذكي (يميز الحالة من بين الخيارات الخمسة)
  hint2: string; // التلميح السريري التوضيحي (أعراض وفحوصات تضيق الاحتمالات)
  hint3: string; // العلامة الفارقة الحاسمة (علامة مميزة، ثالوث كلاسيكي، أو فحص ذهبي)
  pearl?: string; // درة سريرية مختصرة تظهر بعد انتهاء التخمين
}

export interface SoloDiseaseData {
  Arabic: SoloProgressiveHint;
  English: SoloProgressiveHint;
}

/**
 * قاعدة بيانات التلميحات التدريجية لنمط اللعب الفردي (Solo Mode)
 * تغطي جميع أمراض ومتلازمات اللعبة بنظام الـ 3 تلميحات التدريجية
 * (التلميح 1: استكشافي ذكي | التلميح 2: سريري تفصيلي | التلميح 3: علامة فارقة حاسمة)
 */
export const SOLO_DISEASE_HINTS: Record<string, SoloDiseaseData> = {
  "w5": {
    "Arabic": {
      "hint1": "المضاعفات الوعائية الدقيقة لهذا المرض تتبع نمطاً حسياً متناظراً في الأطراف يشبه ارتداء القفاز والجورب.",
      "hint2": "يتميز بالثالوث الكلاسيكي الشهير: البوال التناضحي المفرط، العطش المستمر، وزيادة الشهية مع فقدان الوزن غير المبرر.",
      "hint3": "المعيار الذهبي لتشخيصه ومتابعة السيطرة عليه على المدى الطويل هو اختبار السكر التراكمي (HbA1c) بنسبة ≥ 6.5%.",
      "pearl": "السبب الرئيسي للفشل الكلوي وبتر الأطراف غير الحادثي على مستوى العالم."
    },
    "English": {
      "hint1": "Microvascular complications of this disorder classically manifest as a symmetrical \"glove-and-stocking\" peripheral neuropathy.",
      "hint2": "Presents with the classic triad of osmotic polyuria, unquenchable polydipsia, and polyphagia with unexplained weight loss.",
      "hint3": "The gold standard for diagnosis and long-term glycemic monitoring is glycated hemoglobin (HbA1c) ≥ 6.5%.",
      "pearl": "Leading cause of end-stage renal disease and non-traumatic lower limb amputations worldwide."
    }
  },
  "w9": {
    "Arabic": {
      "hint1": "يزداد خطر حدوث هذه الحالة الوراثية بشكل طردي وحاد مع تقدم عمر الأم أثناء الحمل، وتكشف بسماكة طية الرقبة بالجنين.",
      "hint2": "يتميز المريض بوجود خط عرضي مفرد في راحة اليد (Simian crease) وفرط مرونة بالمفاصل وعيوب خلقية في وسائد الشغاف القلبية.",
      "hint3": "التحليل الجيني للصبغيات (Karyotype) يؤكد وجود ثلاثية في الصبغي رقم 21 (Trisomy 21).",
      "pearl": "أكثر المتلازمات الصبغية شيوعاً، ويرتبط بزيادة احتمالية الإصابة بمرض ألزهايمر المبكر."
    },
    "English": {
      "hint1": "Incidence correlates exponentially with advanced maternal age, often screened early via fetal nuchal translucency ultrasound.",
      "hint2": "Physical findings include a single transverse palmar crease (Simian crease), joint hyperflexibility, and atrioventricular septal heart defects.",
      "hint3": "Karyotype analysis definitively establishes Trisomy 21 in approximately 95% of cases.",
      "pearl": "Most common chromosomal disorder, with a notable predisposition to early-onset Alzheimer disease."
    }
  },
  "w10": {
    "Arabic": {
      "hint1": "تتحول الأنسجة الحيوية في هذا العضو الداخلي إلى عقيدات تجددية محاطة بأشرطة ليفية سميكة تفقد بنيتها المعمارية الطبيعية.",
      "hint2": "يعاني المريض من تراكم السوائل في تجويف البطن (الاستسقاء Ascites)، وظهور أوردة عنكبوتية جلدية وحمامى راحة اليد.",
      "hint3": "ارتفاع الضغط في الوريد البابي يؤدي لظهور دوالي المريء النازفة ورعاش الخفقان (Asterixis) عند اعتلال الدماغ.",
      "pearl": "النتيجة النهائية لمعظم الاعتلالات الكبدية المزمنة، وتعد زراعة الكبد الحل الجذري الوحيد في مراحله النهائية."
    },
    "English": {
      "hint1": "Characterized histologically by diffuse irreversible replacement of parenchyma with regenerative nodules and dense fibrous septa.",
      "hint2": "Clinical features include tense abdominal ascites, spider angiomas on the trunk, and prominent palmar erythema.",
      "hint3": "Portal hypertension frequently precipitates life-threatening esophageal variceal bleeding and flapping tremor (asterixis).",
      "pearl": "End-stage irreversible consequence of chronic liver insults; liver transplantation is the definitive therapy."
    }
  },
  "w11": {
    "Arabic": {
      "hint1": "تمدد مرضي موضعي ودائم في جدار وعاء دموي شرياني يتجاوز 50% من قطره الطبيعي نتيجة ضعف بنيوي في الطبقة المتوسطة.",
      "hint2": "غالباً ما يظل صامتاً تماماً حتى يكتشف صدفة بالأشعة، أو يظهر ككتلة نابضة في البطن تتزامن مع ضربات القلب.",
      "hint3": "انفجاره المفاجئ يسبب ألماً تمزقياً فجائياً هائلاً وهبوطاً حاداً في ضغط الدم وصدمة نزفية قاتلة تتطلب جراحة طارئة.",
      "pearl": "يعد التدخين وارتفاع ضغط الدم المزمن من أقوى عوامل الخطر القابلة للتعديل."
    },
    "English": {
      "hint1": "A localized, permanent abnormal ballooning of an arterial vessel exceeding 50% of its normal baseline diameter due to media weakness.",
      "hint2": "Frequently asymptomatic until incidental discovery or palpated as a distinct pulsatile expansile abdominal mass.",
      "hint3": "Acute rupture precipitates sudden tearing pain, profound hypotensive collapse, and fatal hemorrhagic shock.",
      "pearl": "Chronic hypertension and tobacco abuse are the most potent modifiable etiologic risk factors."
    }
  },
  "w19": {
    "Arabic": {
      "hint1": "تراجع تدريجي مستمر في معدل الترشيح الكبيبي لأكثر من 3 أشهر يؤدي لتراكم نواتج الأيض النيتروجينية واضطراب الكهارل.",
      "hint2": "يصاب المريض بفقر دم معند نتيجة نقص إفراز هرمون الإريثروبويتين، واعتلال عظمي بسبب اضطراب فيتامين D والكالسيوم.",
      "hint3": "الفحوصات تظهر ارتفاعاً حاداً في اليوريا والكرياتينين مع فرط بوتاسيوم الدم، ويحتاج المريض لغسيل دموي (Dialysis).",
      "pearl": "السكري وارتفاع ضغط الدم هما المسببان الأكبر لنحو 75% من حالات الفشل الكلوي المزمن."
    },
    "English": {
      "hint1": "Progressive, irreversible decline in glomerular filtration rate exceeding 3 months, precipitating systemic uremic retention.",
      "hint2": "Normocytic anemia develops secondary to erythropoietin deficiency, alongside mineral bone disease from dysregulated Vitamin D.",
      "hint3": "Marked elevations of BUN and serum creatinine accompanied by refractory hyperkalemia, necessitating renal replacement therapy.",
      "pearl": "Diabetes and chronic hypertension account for approximately three-quarters of all end-stage renal disease cases."
    }
  },
  "w20": {
    "Arabic": {
      "hint1": "خلل وراثي جسمي سائد في جين FBN1 المسؤول عن بروتين الفيبريلين-1، يؤثر على مرونة الأنسجة الضامة بالجسم.",
      "hint2": "يتميز المريض بطول القامة المفرط ونحافة الأطراف، وأصابع طويلة تشبه أرجل العنكبوت (Arachnodactyly) مع انتباذ عدسة العين للأعلى.",
      "hint3": "الخطر الأكبر يهدد الحياة بتوسع جذر الشريان الأبهر الصاعد وانسلاخه، مع ارتخاء الصمام التاجي (Mitral Valve Prolapse).",
      "pearl": "الفحص الدوري بالإيكو وتناول حاصرات بيتا يقللان بشكل جوهري من خطر التسلخ الأبهري القاتل."
    },
    "English": {
      "hint1": "Autosomal dominant connective tissue disorder caused by mutations in the FBN1 gene encoding fibrillin-1 glycoprotein.",
      "hint2": "Patients exhibit disproportionately long slender limbs, spider-like fingers (arachnodactyly), and superior ectopia lentis.",
      "hint3": "Carries high mortality due to progressive aortic root dilatation, dissection, and severe mitral valve prolapse.",
      "pearl": "Regular echocardiographic surveillance and prophylactic beta-blockers dramatically prolong life expectancy."
    }
  },
  "w23": {
    "Arabic": {
      "hint1": "اضطراب عصبي نمائى يبدأ في مرحلة الطفولة، تسبقه رغبة حركية قاهرة ملحة (Premonitory urge) تخف مؤقتاً بعد تفريغها.",
      "hint2": "يتميز بوجود تشنجات لاإرادية حركية وصوتية متعددة تتقلب في الشدة والنوع وتستمر لأكثر من عام كامل.",
      "hint3": "قد تشمل الحركات رمش العين وهز الرقبة، وتصحبها حركات لفظية لاإرادية مثل تكرار الكلمات أو الشتائم اللاإرادية (Coprolalia).",
      "pearl": "يرتبط بشكل كبير باضطراب فرط الحركة وتشتت الانتباه (ADHD) والوسواس القهري (OCD)."
    },
    "English": {
      "hint1": "A neurodevelopmental disorder originating in childhood, heralded by a preceding sensory \"premonitory urge\" relieved by tic execution.",
      "hint2": "Requires both multiple motor tics and at least one vocal tic persisting for more than 12 consecutive months.",
      "hint3": "Manifests as involuntary blinking, facial grimacing, grunting, and in rare cases, involuntary obscene vocalizations (coprolalia).",
      "pearl": "Highly comorbid with ADHD (up to 60%) and obsessive-compulsive disorder (OCD)."
    }
  },
  "w29": {
    "Arabic": {
      "hint1": "عدوى التهابية حادة تملأ الأسناخ الرئوية بالإفرازات القيحية والخلايا الالتهابية، مما يعيق تبادل الغازات.",
      "hint2": "يعاني المريض من حمى مفاجئة وسعال مصحوب ببلغم صدئ أو قيحي وضيق تنفس مع ألم صدري جنبي يزداد بالشهيق.",
      "hint3": "الأشعة السينية للصدر (Chest X-ray) تكشف عن كثافة تكثف فصي واضحة (Lobar Consolidation) مع سماع خشخشة بالتسمع.",
      "pearl": "بكتيريا المكورات العقدية الرئوية (Streptococcus pneumoniae) هي المسبب الجرثومي الأكثر شيوعاً مجتمعياً."
    },
    "English": {
      "hint1": "Infectious parenchymal inflammation where alveolar spaces become filled with purulent exudate, impairing diffusion.",
      "hint2": "Presents with acute high-grade fever, productive cough with rust-colored sputum, dyspnea, and pleuritic chest pain on inspiration.",
      "hint3": "Chest radiography definitively demonstrates dense lobar consolidation with air bronchograms, accompanied by auscultatory crackles.",
      "pearl": "Streptococcus pneumoniae remains the predominant community-acquired bacterial pathogen."
    }
  },
  "w31": {
    "Arabic": {
      "hint1": "ألم يبدأ مبهمًا في المنطقة المحيطة بالسرة ثم يتغير موضعه تدريجيًا إلى منطقة أخرى في البطن.",
      "hint2": "الفحص السريري يظهر ارتدادًا مؤلمًا (Rebound Tenderness) مع زيادة الألم عند الضغط على الجانب الأيسر المنعكس، وارتفاع كرات الدم البيضاء.",
      "hint3": "إيجابية علامة ماكبيرني (McBurney's sign) وعلامة روفسينج (Rovsing's sign)، والحل الجذري هو استئصال العضو بالمنظار.",
      "pearl": "أكثر أسباب البطن الحاد التي تستدعي جراحة طارئة عالمياً، وانسداد لمعتها بحصاة برازية (Fecalith) هو المسبب الشائع."
    },
    "English": {
      "hint1": "Initially manifests as dull, poorly localized periumbilical discomfort that gradually migrates to a distinct quadrant.",
      "hint2": "Examination reveals striking localized rebound tenderness in the right lower quadrant and notable leukocytosis.",
      "hint3": "Positive McBurney sign, Rovsing sign, and psoas stretch test confirm the diagnosis; managed definitively by appendectomy.",
      "pearl": "Most frequent cause of non-traumatic acute surgical abdomen; luminal obstruction by a fecalith is the primary trigger."
    }
  },
  "w35": {
    "Arabic": {
      "hint1": "انسداد المسالك الهوائية في هذا المرض يتميز بأنه عكوس (Reversible) بشكل كامل أو ملحوظ بعد استنشاق موسع قصبات.",
      "hint2": "نوبات متكررة من السعال الليلي وضيق النفس والأزيز الصدري (Wheezing) تثار بالهواء البارد أو الجهد أو مسببات الحساسية.",
      "hint3": "يظهر فحص وظائف الرئة (Spirometry) تحسناً يفوق 12% و200 مل في FEV1 بعد إعطاء بخاخ السالبوتامول (Albuterol).",
      "pearl": "الستيرويدات الاستنشاقية هي حجر الأساس في السيطرة الوقائية طويلة الأمد على الالتهاب المزمن."
    },
    "English": {
      "hint1": "A chronic airway inflammatory pathology characterized uniquely by spontaneous or pharmacologically reversible bronchoconstriction.",
      "hint2": "Recurrent paroxysms of nocturnal coughing, breathlessness, and expiratory wheezing triggered by cold air, allergens, or exercise.",
      "hint3": "Spirometry documents a post-bronchodilator increase in FEV1 greater than 12% and 200 mL following inhaled albuterol.",
      "pearl": "Inhaled corticosteroids represent the definitive foundation for long-term controller maintenance."
    }
  },
  "w37": {
    "Arabic": {
      "hint1": "اضطراب حركي تنكسي ينجم عن الفقد التدريجي للخلايا العصبية المنتجة للدوبامين في المادة السوداء (Substantia Nigra).",
      "hint2": "يتميز ببطء الحركة (Bradykinesia) وتيبس الأطراف كعجلة المسننات (Cogwheel rigidity) وانعدام تعابير الوجه كالقناع.",
      "hint3": "رعاش مميز وقت الراحة يشبه دحرجة حبة الدواء بين الأصابع (Pill-rolling tremor)، ويستجيب المريض بشكل سحري لعقار Levodopa.",
      "pearl": "الفحص النسيجي يظهر أجسام ليوي (Lewy Bodies) المكونة من تراكم بروتين ألفا-سينوكلين."
    },
    "English": {
      "hint1": "Neurodegenerative movement disorder stemming from progressive dopaminergic neuronal depletion within the substantia nigra pars compacta.",
      "hint2": "Clinically defined by progressive bradykinesia, cogwheel lead-pipe rigidity, and a mask-like blunted facial expression.",
      "hint3": "Classic 4-6 Hz resting \"pill-rolling\" tremor that diminishes with voluntary action, dramatically alleviated by Levodopa therapy.",
      "pearl": "Histopathological hallmark is intracellular accumulation of alpha-synuclein aggregates forming Lewy bodies."
    }
  },
  "w38": {
    "Arabic": {
      "hint1": "يبدأ بفقدان تدريجي خبيث للذاكرة القريبة (الأحداث الأخيرة) مع الحفاظ النسبي على ذكريات الطفولة البعيدة في مراحله الأولى.",
      "hint2": "يتطور إلى صعوبة في التوجيه الزماني والمكاني، وصعوبة إيجاد الكلمات (Aphasia) وعجز عن أداء المهام الحركية المألوفة (Apraxia).",
      "hint3": "تشريحياً يظهر ضموراً قشرياً كبيراً مع لويحات بيتا أميلويد (Beta-amyloid plaques) وحبائل تاو العصبية الليفية (Tau tangles).",
      "pearl": "السبب الأكثر شيوعاً للخرف (Dementia) في كبار السن، حيث يمثل 60-70% من إجمالي الحالات."
    },
    "English": {
      "hint1": "Insidious, progressive deterioration of short-term anterograde memory with relative preservation of distant recollections in early stages.",
      "hint2": "Advances to severe topographical disorientation, word-finding anomia (aphasia), and inability to execute skilled motor tasks (apraxia).",
      "hint3": "Neuropathology reveals diffuse cortical cerebral atrophy driven by extracellular amyloid-beta plaques and hyperphosphorylated tau neurofibrillary tangles.",
      "pearl": "The most prevalent etiology of senile dementia, responsible for 60-70% of clinical cases."
    }
  },
  "w39": {
    "Arabic": {
      "hint1": "يرتبط بأقوى علاقة سببية مباشرة مع عادة يومية ضارة يمارسها ملايين الأشخاص، وترتفع خطورته مع زيادة سنوات التعرض.",
      "hint2": "يعاني المريض من سعال مستمر متفاقم، نفث دموي (Hemoptysis)، فقدان وزن ملحوظ، وألم صدري غامض غير مستجيب للمسكنات.",
      "hint3": "قد تفرز أورامه هرمونات غير متوقعة (Paraneoplastic) كالهرمون المضاد لإدرار البول، وتكشف الأشعة المقطعية كتلة ذات حواف شائكة.",
      "pearl": "السبب الأول للوفيات المرتبطة بالأورام الخبيثة بين الرجال والنساء في معظم دول العالم."
    },
    "English": {
      "hint1": "Exhibits the most potent direct causal association with heavy long-term cigarette smoking, scaling strictly with pack-years.",
      "hint2": "Presents with an unremitting refractory cough, hemoptysis, rapid unintentional weight loss, and chronic deep thoracic pain.",
      "hint3": "May present with paraneoplastic syndromes (e.g., SIADH in small cell) and a spiculated pulmonary mass on high-resolution CT.",
      "pearl": "The foremost cause of cancer-related mortality globally across both male and female populations."
    }
  },
  "w42": {
    "Arabic": {
      "hint1": "التهاب مفصلي مناعي ذاتي متناظر يصيب المفاصل الصغيرة في كف اليدين والقدمين، مع تيبس صباحي يستمر لأكثر من ساعة.",
      "hint2": "يستهدف الغشاء الزليلي (Synovitis) مسبباً تآكل الغضاريف وتشوهات مميزة مثل تشوه عنق البجعة (Swan-neck) وانحراف الزند.",
      "hint3": "الفحوصات تظهر إيجابية عامل الروماتويد (RF) والأجسام المضادة الأكثر نوعية للببتيد السيتروليني الحلقي (Anti-CCP).",
      "pearl": "مثبطات المناعة البيولوجية ومضادات الروماتيزم المعدلة لسير المرض (DMARDs مثل Methotrexate) تحمي من تدمير المفاصل."
    },
    "English": {
      "hint1": "Symmetric, autoimmune inflammatory polyarthritis predominantly targeting small joints of hands and feet, featuring morning stiffness exceeding 60 minutes.",
      "hint2": "Chronic proliferative synovitis forms invasive pannus tissue leading to swan-neck deformities and ulnar deviation.",
      "hint3": "Serology demonstrates high titers of Anti-Cyclic Citrullinated Peptide antibodies (anti-CCP) and Rheumatoid Factor (RF).",
      "pearl": "Early intervention with DMARDs (primarily Methotrexate) halts progressive joint destruction and permanent deformity."
    }
  },
  "w47": {
    "Arabic": {
      "hint1": "طوارئ عصبية تسبب التهاباً حاداً في الأغشية الواقية المحيطة بالدماغ والحبل الشوكي، وتتدهور بسرعة خلال ساعات.",
      "hint2": "يتميز بالثالوث الكلاسيكي: حمى شديدة مفاجئة، صداع خانق، وتصلب لاإرادي في عضلات الرقبة (Neck stiffness).",
      "hint3": "إيجابية علامة كيرنيغ (Kernig) وبرودزينسكي (Brudzinski)، ويؤكد البزل القطني (Lumbar puncture) عكارة السائل الدماغي وانخفاض الجلوكوز.",
      "pearl": "البدء الفوري بالمضادات الحيوية واسعة الطيف والديكساميثازون أمر منقذ للحياة حتى قبل صدور نتائج الزراعة."
    },
    "English": {
      "hint1": "An acute life-threatening infectious inflammation of the protective leptomeningeal membranes enveloping the brain and spinal cord.",
      "hint2": "Triad of sudden high fever, excruciating bursting headache, and unyielding nuchal rigidity.",
      "hint3": "Positive Kernig and Brudzinski signs; lumbar puncture reveals cloudy cerebrospinal fluid with profound pleocytosis and low glucose.",
      "pearl": "Empirical intravenous broad-spectrum bactericidal therapy and dexamethasone must not be delayed for imaging."
    }
  },
  "w48": {
    "Arabic": {
      "hint1": "علامة سريرية ناتجة عن تراكم صبغة صفراء في الأنسجة الغنية بالإيلاستين، وتبدأ في الظهور بصلبة العين عندما يتجاوز مستواها 2.5-3 ملغ/دل.",
      "hint2": "تترافق في حالات الانسداد الصفراوي مع براز باهت شاحب كصلصال الخزف وبول داكن يشبه الشاي وحكة جلدية معذبة.",
      "hint3": "تنجم كيميائياً عن فرط تركيز البيليروبين في الدم (Hyperbilirubinemia)، سواء المقترن أو غير المقترن.",
      "pearl": "ظهوره الفجائي غير المؤلم مع تضخم المرارة (علامة كورفوازييه) يوجه بقوة نحو ورم في رأس البنكرياس."
    },
    "English": {
      "hint1": "Clinical yellow discoloration of tissues with high elastin affinity, clinically detectable in sclera once levels exceed 2.5-3 mg/dL.",
      "hint2": "Biliary obstruction variants present with pale acholic clay-colored stools, tea-colored dark urine, and intractable pruritus.",
      "hint3": "Pathophysiologically driven by elevated systemic total serum bilirubin (hyperbilirubinemia), conjugated or unconjugated.",
      "pearl": "Painless jaundice accompanied by a palpably enlarged gallbladder (Courvoisier sign) strongly indicates pancreatic head malignancy."
    }
  },
  "w51": {
    "Arabic": {
      "hint1": "يطلق عليه عالمياً لقب \"القاتل الصامت\" لأنه يتلف الشرايين والأعضاء الحيوية لسنوات طويلة دون أن يشعر المريض بأي عرض.",
      "hint2": "يتلف تدريجياً الشبكية ويسبب تضخماً تعويضياً في البطين الأيسر للقلب وتصلباً في الشرايين الكلوية مسبباً قصوراً كلوياً.",
      "hint3": "يُشخص عند تسجيل قراءات ضغط دم انقباضي ≥ 140 ملم زئبق أو انبساطي ≥ 90 ملم زئبق في قياسات متعددة منفصلة.",
      "pearl": "أكبر عامل خطر قابل للتعديل مؤدٍ للسكتات الدماغية واحتشاء عضلة القلب حول العالم."
    },
    "English": {
      "hint1": "Famously designated the \"Silent Killer\" due to its indolent, asymptomatic vascular destruction over decades before clinical crisis.",
      "hint2": "Causes concentric left ventricular hypertrophy, hypertensive retinopathy, and progressive renal nephrosclerosis.",
      "hint3": "Diagnosed by repeated resting office blood pressure measurements demonstrating systolic ≥ 140 mmHg or diastolic ≥ 90 mmHg.",
      "pearl": "The single most critical modifiable risk factor for hemorrhagic stroke, ischemic infarction, and myocardial infarction."
    }
  },
  "w52": {
    "Arabic": {
      "hint1": "حالة دموية شائعة ينخفض فيها تركيز الهيموجلوبين أو عدد كريات الدم الحمراء، مما يقلل من قدرة الدم على نقل الأكسجين للأنسجة.",
      "hint2": "يعاني المريض من شحوب بالملتحمة والجلد، وإرهاق سريع، وخفقان قلبي تعويضي، ودوخة عند الوقوف وصداع مستمر.",
      "hint3": "تظهر نتائج فحص الدم الكامل (CBC) انخفاض الهيموجلوبين (Hb < 13 للرجال، < 12 للنساء) وتحديد MCV لكشف نوع الخلل.",
      "pearl": "نقص الحديد الغذائي أو النزف المزمن من القناة الهضمية هو المسبب الأكثر انتشاراً عالمياً."
    },
    "English": {
      "hint1": "Hematologic condition marked by deficient hemoglobin concentration or erythrocyte mass, compromising tissue oxygenation.",
      "hint2": "Manifests clinically as conjunctival and cutaneous pallor, exertional fatigue, compensatory tachycardia, and orthostatic lightheadedness.",
      "hint3": "Complete blood count (CBC) shows subnormal hemoglobin (< 13 g/dL in males, < 12 g/dL in females) with MCV classifying the subtype.",
      "pearl": "Chronic occult gastrointestinal blood loss or dietary iron deficiency represents the predominant worldwide etiology."
    }
  },
  "w95": {
    "Arabic": {
      "hint1": "مرض التهابي مزيل للميالين يستهدف الجهاز العصبي المركزي، وتنتشر إصاباته بشكل مميز \"في المكان والزمان\" (Dissemination in time and space).",
      "hint2": "يصيب غالباً الشابات بنوبات متكررة وتراجعات، وتتفاقم الأعراض بشكل مؤقت عند الاستحمام بماء دافئ أو الحمى (ظاهرة أوهتوف Uhthoff).",
      "hint3": "يظهر الرنين المغناطيسي لويحات مزيلة للميالين حول البطينات (أصابع داوسون Dawson fingers)، ويكشف فحص السائل شوكي عصبي حزم Oligoclonal.",
      "pearl": "العلاج بمعدلات المرض المناعية يقلل من وتيرة الانتكاسات السريرية وتراكم العجز العصبي."
    },
    "English": {
      "hint1": "Demyelinating CNS autoimmune disorder hallmark demonstrated by lesions \"disseminated in space and time\".",
      "hint2": "Predominates in young females; symptoms transiently worsen upon exposure to heat, exertion, or hot showers (Uhthoff phenomenon).",
      "hint3": "MRI shows periventricular demyelinating plaques perpendicular to corpus callosum (Dawson fingers); CSF reveals oligoclonal bands.",
      "pearl": "Early disease-modifying therapies significantly decrease annualized relapse rates and retard long-term disability progression."
    }
  },
  "w96": {
    "Arabic": {
      "hint1": "مرض مناعي ذاتي عند الوصل العصبي العضلي، يتسم بضعف عضلي متقلب يشتد مع المجهود المتكرر بنهاية اليوم ويتحسن بالراحة التامة.",
      "hint2": "العرض الأولي الأكثر شيوعاً هو تدلي الجفون (Ptosis) وازدواج الرؤية (Diplopia) دون أي اضطراب في استجابة حدقة العين للضوء.",
      "hint3": "ينجم عن أجسام مضادة تهاجم مستقبلات الأسيتيل كولين (AChR)، ويرتبط بتضخم أو ورم في غدة التوتة (Thymoma) ويستجيب لـ Pyridostigmine.",
      "pearl": "علاج أزمة الوهن الحادة (Myasthenic Crisis) التي تعطل التنفس يتم بتبديل البلازما أو الأجسام المضادة الوريدية (IVIG)."
    },
    "English": {
      "hint1": "Neuromuscular junction autoimmune condition marked by fluctuating skeletal muscle weakness that fatigues with exertion and recovers with rest.",
      "hint2": "Most frequently debuts with asymmetric ocular symptoms: ptosis and binocular diplopia with strictly spared pupillary reflexes.",
      "hint3": "Pathogenic autoantibodies target nicotinic acetylcholine receptors (anti-AChR); associated with thymoma and treated with pyridostigmine.",
      "pearl": "Respiratory failure in myasthenic crisis is treated emergently with plasma exchange or intravenous immunoglobulin (IVIG)."
    }
  },
  "w97": {
    "Arabic": {
      "hint1": "اعتلال عصبي التهابي حاد عديد الجذور يتبع عادةً عدوى تنفسية أو معوية كـ Campylobacter jejuni بعد أسبوع إلى ثلاثة أسابيع.",
      "hint2": "يتميز بضعف عضلي صاعد وتناظري يبدأ في أصابع وساقي المريض ثم يزحف للأعلى، مترافقاً مع فقدان منعكسات الأوتار العميقة (Areflexia).",
      "hint3": "فحص السائل الشوكي يظهر تنافراً فريداً: ارتفاع كبير في البروتين مع بقاء عدد الخلايا طبيعياً (Albuminocytologic dissociation).",
      "pearl": "المراقبة اللصيقة للسعة الحيوية للرئتين ضرورية لأن شلل عضلات التنفس قد يتطلب تنبيباً وإنعاشاً ميكانيكياً فورياً."
    },
    "English": {
      "hint1": "Acute inflammatory demyelinating polyradiculoneuropathy classically triggered 1-3 weeks post gastrointestinal (Campylobacter) or respiratory infection.",
      "hint2": "Hallmark is symmetric, ascending flaccid paralysis beginning in the lower extremities, accompanied by early generalized areflexia.",
      "hint3": "Lumbar puncture pathognomonically demonstrates albuminocytologic dissociation (isolated profound CSF protein elevation with normal cell count).",
      "pearl": "Serial forced vital capacity monitoring is vital, as diaphragmatic respiratory failure warrants prompt mechanical ventilation."
    }
  },
  "w98": {
    "Arabic": {
      "hint1": "التهاب أمعاء مزمن يتميز بظاهرة \"الآفات القافزة\" (Skip lesions) حيث تصاب مناطق متقطعة ويفصل بينها نسيج معوي سليم تماماً.",
      "hint2": "الالتهاب عبر جدار الأمعاء بالكامل (Transmural) مما يؤدي لتكوين نواسير (Fistulas) وخراجات وضيق تجويف الأمعاء وألم في الربع السفلي الأيمن.",
      "hint3": "المنظار يظهر المظهر المرصوف بالحصى (Cobblestone appearance) ويوضح التحليل النسيجي وجود أورام حبيبية غير مجبنة (Non-caseating granulomas).",
      "pearl": "قد يصيب أي جزء من الجهاز الهضمي من الفم حتى فتحة الشرج، لكن اللفائفي النهائي (Terminal ileum) هو الموقع المفضل."
    },
    "English": {
      "hint1": "Chronic inflammatory bowel disease characterized by discontinuous transmural \"skip lesions\" interspersed with normal mucosal architecture.",
      "hint2": "Transmural depth predisposes to intra-abdominal fistulae, deep fissures, strictures, and chronic right lower quadrant cramping pain.",
      "hint3": "Endoscopy displays a classic \"cobblestone\" appearance, with histology confirming non-caseating granulomas.",
      "pearl": "Can involve any portion of the gastrointestinal tract from mouth to anus, most frequently terminal ileum."
    }
  },
  "w99": {
    "Arabic": {
      "hint1": "تآكل موضعي يخترق الطبقة العضلية المخاطية في بطانة الجهاز الهضمي نتيجة اختلال التوازن بين حمض المعدة وآليات الدفاع المخاطية.",
      "hint2": "ألم حارق في فم المعدة؛ يشتد بعد تناول الطعام مباشرة في النوع المعدي، بينما يخف بالأكل ويوقظ المريض ليلاً في نوع الاثني عشر.",
      "hint3": "جرثومة المعدة الملوية البوابية (H. pylori) واستخدام مضادات الالتهاب غير الستيرويدية (NSAIDs) هما المسببان لأكثر من 90% من الحالات.",
      "pearl": "المنظار الهضمي العلوي هو المعيار الذهبي للتشخيص المباشر وأخذ الخزعات لاستبعاد الأورام والسيطرة على النزف."
    },
    "English": {
      "hint1": "Mucosal defect extending through the muscularis mucosae caused by an imbalance between pepsin/acid and mucosal defenses.",
      "hint2": "Epigastric burning pain; exacerbated immediately after meals in gastric ulcers, but relieved by food and waking patient at night in duodenal ulcers.",
      "hint3": "Helicobacter pylori colonization and NSAID usage account for over 90% of all diagnostic presentations.",
      "pearl": "Upper gastrointestinal endoscopy is the diagnostic gold standard, enabling biopsy and therapeutic hemostasis."
    }
  },
  "w100": {
    "Arabic": {
      "hint1": "عملية تدمير ذاتي التهابية خطيرة تنشط فيها الإنزيمات الهاضمة المعطلة داخل أنسجة الغدة نفسها قبل وصولها إلى تجويف الأمعاء.",
      "hint2": "ألم شرسوفي حارق وشديد جداً في أعلى البطن يخترق ويشع مباشرة إلى الظهر، ويخف قليلاً عند انحناء المريض للأمام.",
      "hint3": "ارتفاع إنزيمات المصل: الليباز (Lipase) والأميلاز لأكثر من 3 أضعاف الحد الطبيعي، وتعد حصوات المرارة والكحول المسببين الأكبر.",
      "pearl": "ظهور كدمات حول السرة (علامة كولين Cullen) أو على الخاصرتين (علامة غراي تورنر) ينذر بنزف نسيجي نخر شديد."
    },
    "English": {
      "hint1": "Acute autodigestive cascade initiated by premature intra-acinar activation of zymogen digestive proteases before reaching duodenum.",
      "hint2": "Severe, intractable epigastric pain radiating directly into the back, characteristically partially relieved by leaning forward.",
      "hint3": "Serum amylase and especially lipase elevated > 3 times upper limit of normal; gallstones and alcohol cause > 80% of attacks.",
      "pearl": "Ecchymotic periumbilical discoloration (Cullen sign) or flank purpura (Grey Turner sign) heralds necrotizing hemorrhagic pancreatitis."
    }
  },
  "w101": {
    "Arabic": {
      "hint1": "تبلور وتجمع الأملاح المعدنية المفرطة داخل المسالك البولية عند زيادة تركيزها أو نقص السوائل المثبطة للتكلس.",
      "hint2": "مغص كلوي عاصف ومتقطع يبدأ في الخاصرة (Flank) ويشع بشكل مميز إلى أسفل البطن ومنطقة الفخذ والأعضاء التناسلية.",
      "hint3": "تترافق مع بيلة دموية (خروج دم مجهري أو مرئي في البول)، وتظهر الأشعة المقطعية المقطعية بدون صبغة (Non-contrast CT) موقع وحجم الحصاة.",
      "pearl": "حصوات أكسالات الكالسيوم هي النوع الأكثر شيوعاً بنسبة تقارب 75-80% من الحصيات الكلوية."
    },
    "English": {
      "hint1": "Precipitation and crystalline aggregation of mineral solutes within the renal collecting system triggered by supersaturation.",
      "hint2": "Severe, spasmodic \"loin-to-groin\" flank colic radiating down along dermatomes toward the ipsilateral labium or testicle.",
      "hint3": "Accompanied by microscopic or gross hematuria; non-contrast helical CT of the abdomen/pelvis serves as the definitive diagnostic standard.",
      "pearl": "Calcium oxalate stones constitute approximately 75-80% of all analyzed nephrolithiasis specimens."
    }
  },
  "w104": {
    "Arabic": {
      "hint1": "انغراس البويضة المخصبة ونموها في نسيج خارج التجويف الرحمي المبطن، ويعد سبباً رئيسياً لوفيات الأمهات في الثلث الأول.",
      "hint2": "سيدة في سن الإنجاب تعاني من تأخر الدورة الشهرية (انقطاع طمث)، ونزيف مهبلي غير طبيعي، وألم حاد أسفل البطن في أحد الجانبين.",
      "hint3": "السونار المهبلي يظهر رحماً فارغاً تماماً رغم ارتفاع هرمون الحمل بالدم (Beta-hCG) أعلى من المستوى التمييزي (1500-2000 mIU/mL).",
      "pearl": "قناة فالوب (الأمبولة) هي الموقع الأكثر شيوعاً للانغراس بنسبة تتجاوز 95%، وانفجارها يسبب صدمة نزفية قاتلة."
    },
    "English": {
      "hint1": "Blastocyst implantation occurs outside the endometrial lining of the uterine cavity; foremost etiology of first-trimester maternal mortality.",
      "hint2": "Classic clinical presentation consists of amenorrhea followed by abnormal vaginal spotting and acute unilateral pelvic pain.",
      "hint3": "Transvaginal ultrasound reveals an empty uterine cavity despite serum beta-hCG exceeding the discriminatory zone (1,500-2,000 mIU/mL).",
      "pearl": "The ampulla of the fallopian tube hosts > 95% of ectopic nidations; rupture triggers catastrophic hemoperitoneum."
    }
  },
  "w105": {
    "Arabic": {
      "hint1": "اضطراب مشيمي وعائي جهازي معقد يظهر حصراً بعد الأسبوع العشرين من الحمل في سيدة كان ضغط دمها طبيعياً سابقاً.",
      "hint2": "يتميز بظهور ارتفاع ضغط الدم (≥ 140/90 ملم زئبق) مترافقاً مع زلال في البول (Proteinuria) وتورم في الوجه واليدين.",
      "hint3": "ظهور الصداع المستمر وزغللة العين وألم الربع العلوي الأيمن ينذر بمضاعفات خطيرة كـ HELLP أو نوبات تشنجية (Eclampsia).",
      "pearl": "توليد الجنين والمشيمة هو العلاج الجذري الوحيد، وتستخدم كبريتات المغنيسيوم للوقاية من التشنجات."
    },
    "English": {
      "hint1": "Multisystem hypertensive endothelial disorder emerging de novo after 20 weeks of gestation in previously normotensive mothers.",
      "hint2": "Clinically identified by new-onset hypertension (≥ 140/90 mmHg) coupled with significant proteinuria or end-organ dysfunction.",
      "hint3": "Severe features include intractable fronto-occipital headache, visual scotomas, and elevated transaminases, risking full eclamptic seizures.",
      "pearl": "Delivery of the fetus and placenta represents the only definitive cure; magnesium sulfate provides seizure prophylaxis."
    }
  },
  "w108": {
    "Arabic": {
      "hint1": "مرض طفيلي مداري ينتقل عبر لدغة أنثى بعوضة الأنوفيلس (Anopheles) المصابة، ويقضي جزءاً من دورة حياته داخل خلايا الكبد ثم الدم.",
      "hint2": "نوبات نوبية دورية مميزة من قشعريرة رجفانية شديدة تتبعها حمى حارقة ثم تعرق غزير مترافق مع تكسر الدم وتضخم الطحال.",
      "hint3": "مسحة الدم الرقيقة والسميكة (Blood smear) تفحص تحت المجهر وتظهر الطفيلي بوضوح داخل كريات الدم الحمراء الحلقية (Ring forms).",
      "pearl": "طفيل المتصورة المنجلية (Plasmodium falciparum) هو النوع الأكثر خطورة وقدرة على إحداث ملاريا دماغية قاتلة."
    },
    "English": {
      "hint1": "Vector-borne parasitic disease transmitted via the bite of an infected female Anopheles mosquito, cycling through hepatic and erythrocytic phases.",
      "hint2": "Characterized by paroxysmal cycles of violent shivering rigors, spike high fevers, and drenching diaphoresis alongside hemolytic anemia.",
      "hint3": "Microscopic identification of trophozoite intraerythrocytic \"ring forms\" on Giemsa-stained thick and thin peripheral blood smears.",
      "pearl": "Plasmodium falciparum is the most virulent species, capable of microvascular sequestration causing lethal cerebral malaria."
    }
  },
  "w61": {
    "Arabic": {
      "hint1": "عدوى جرثومية مزمنة تنتقل بالرذاذ وتسبب تكوّن أورام حبيبية نخرية مجبنة محاطة بخلايا لانجهانز العملاقة.",
      "hint2": "سعال تدريجي يستمر لأكثر من 3 أسابيع مصحوب بنفث دموي، وحمى خفيفة مسائية، وتعرّق ليلي غزير يبلل الوسادة وفقدان شديد في الوزن.",
      "hint3": "أشعة الصدر تظهر ارتشاحاً أو تجويفاً كهفياً (Cavitation) في الفصوص العلوية للرئة، وصبغة تسيل-نيلسن تؤكد وجود عصيات صامدة للحمض.",
      "pearl": "العلاج الرباعي المعتمد يضم (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) لعدة أشهر لمنع ظهور سلالات مقاومة."
    },
    "English": {
      "hint1": "Chronic airborne granulomatous mycobacterial infection characteristically inducing central caseating necrosis flanked by Langhans giant cells.",
      "hint2": "Subacute unremitting cough > 3 weeks, hemoptysis, low-grade evening fever spikes, drenching night sweats, and marked cachectic wasting.",
      "hint3": "CXR reveals apical upper lobe cavitary infiltrates; sputum examination confirms Acid-Fast Bacilli (AFB) on Ziehl-Neelsen stain.",
      "pearl": "Standard first-line regimen utilizes the RIPE combination (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) over 6 months."
    }
  },
  "w85": {
    "Arabic": {
      "hint1": "اضطراب دماغي مزمن يتميز بقابلية دائمة لتوليد نوبات تشنجية عصبية فجائية ناجمة عن تفريغ كهربائي متزامن ومفرط في الخلايا العصبية.",
      "hint2": "النوبة الكبرى تشمل مرحلة توترية متيبسة تتبعها حركات نفضان اهتزازية متناظرة مع عض اللسان وفقدان التحكم بالمثانة ثم غيبوبة نوم تالية.",
      "hint3": "تخطيط كهربية الدماغ (EEG) هو الفحص التشخيصي الرئيسي الذي يظهر شحنات وموجات مدببة صرعية شاذة تؤكد النشاط الكهربائي المفرط.",
      "pearl": "يتم تشخيصه سريرياً بعد حدوث نوبتين تشنجيتين غير مبررتين يفصل بينهما أكثر من 24 ساعة."
    },
    "English": {
      "hint1": "Neurological condition marked by an enduring predisposition to generate recurrent spontaneous seizures from abnormal hypersynchronous neuronal discharge.",
      "hint2": "Generalized tonic-clonic attacks feature sudden loss of consciousness, axial stiffness, rhythmic jerking, lateral tongue biting, and postictal stupor.",
      "hint3": "Electroencephalography (EEG) provides definitive electrophysiological documentation of epileptiform spikes, sharp waves, and spike-wave discharges.",
      "pearl": "Clinically confirmed by at least two unprovoked seizures occurring more than 24 hours apart."
    }
  },
  "w84": {
    "Arabic": {
      "hint1": "اضطراب صداع عصبي وعائي أولي، قد تسبقه أعراض أورة بصرية (Visual aura) كأضواء وامضة أو خطوط متعرجة قبل بدء الألم بنصف ساعة.",
      "hint2": "ألم رأسي نبضي أحادي الجانب (Unilateral) متوسط إلى شديد، يزداد سوءاً مع الحركة العادية ويترافق مع غثيان ورهاب الضوء والصوت.",
      "hint3": "تستمر النوبة من 4 إلى 72 ساعة، وتستجيب النوبات الحادة بشكل انتقائي لمضادات مستقبلات السيروتونين كعائلة التريبتان (Triptans).",
      "pearl": "النساء أكثر عرضة للإصابة به بثلاثة أضعاف مقارنة بالرجال، وتلعب التقلبات الهرمونية دوراً محفزاً بارزاً."
    },
    "English": {
      "hint1": "Neurovascular primary headache disorder; frequently preceded in a subset of patients by a transient visual aura (scintillating scotoma).",
      "hint2": "Pulsatile, throbbing unilateral hemicranial ache lasting 4-72 hours, aggravated by routine activity and accompanied by photophobia and nausea.",
      "hint3": "Acute abortive therapy preferentially utilizes selective serotonin 5-HT1B/1D receptor agonists known as triptans.",
      "pearl": "Affects females three times more frequently than males, often exhibiting temporal correlation with menstrual estrogen fluctuations."
    }
  },
  "w86": {
    "Arabic": {
      "hint1": "اضطراب نفسي ذهاني مزمن يسبب تفككاً وخللاً عميقاً في التفكير والإدراك والواقع واللغة، ويبدأ عادة في أواخر المراهقة وبداية العشرينات.",
      "hint2": "يعاني المريض من هلاوس سمعية كأصوات تعلق على أفعاله، وضلالات اضطهادية أو عظمة، مع كلام وتصرفات مفككة غير مترابطة.",
      "hint3": "تشترط المعايير التشخيصية (DSM-5) استمرار الأعراض الإيجابية والسلبية والتدهور الوظيفي لأكثر من 6 أشهر متواصلة.",
      "pearl": "فرط نشاط الدوبامين في المسار الميزوليمبي يفسر الأعراض الإيجابية وتستهدفه مضادات الذهان كـ Haloperidol و Risperidone."
    },
    "English": {
      "hint1": "Severe, chronic psychiatric disorder characterized by profound disturbances in reality testing, cognition, affect, and volition.",
      "hint2": "Core features comprise auditory hallucinations (often running commentary), paranoid persecutory delusions, and disorganized speech.",
      "hint3": "DSM-5 criteria require continuous persistence of active and negative symptoms leading to functional decline for at least 6 months.",
      "pearl": "Dopaminergic hyperactivity in the mesolimbic tract underlies positive psychotic symptoms, targeted by D2 receptor antagonist neuroleptics."
    }
  },
  "w88": {
    "Arabic": {
      "hint1": "عدوى شائعة جداً في الرضع والأطفال الصغار ترتبط ارتباطاً وثيقاً بخلل وظيفي أو قصر في قناة استاكيوس (Eustachian tube).",
      "hint2": "طفل يبكي ويشد أذنه باستمرار، مصحوب بحمى وصعوبة في النوم وضعف مؤقت في السمع بعد نزلة برد حديثة.",
      "hint3": "منظار الأذن (Otoscopy) يظهر غشاء طبلة محمراً، معتماً، وبارزاً للأمام (Bulging tympanic membrane) مع انعدام حركته بالنفخ.",
      "pearl": "المكورات العقدية الرئوية والمستدمية النزلية والموراكسيلا هي الثالوث البكتيري المسبب لمعظم الحالات."
    },
    "English": {
      "hint1": "Prevalent pediatric infection tightly linked to anatomical horizontal orientation and functional immaturity of the Eustachian tube.",
      "hint2": "Infant presents with persistent ear-tugging, acute fever, nocturnal irritability, and conductive hearing dampening following an upper respiratory infection.",
      "hint3": "Otoscopic examination definitively demonstrates a hyperemic, opaque, and distinctly bulging tympanic membrane with impaired pneumatic mobility.",
      "pearl": "Streptococcus pneumoniae, non-typeable Haemophilus influenzae, and Moraxella catarrhalis form the dominant bacterial triad."
    }
  },
  "w408": {
      "Arabic": {
          "hint1": "ألم صدري حاد ومفاجئ يشبه الطعن أو التمزق يبدأ بأقصى شدته فوراً وينتقل إلى الظهر بين الكتفين.",
          "hint2": "فارق ملحوظ يتجاوز 20 ملم زئبقي في قياس ضغط الدم الانقباضي بين الذراعين الأيمن والأيسر.",
          "hint3": "الأشعة المقطعية الوعائية بالصبغة (CTA) تظهر شريحة الغشاء الباطن العائمة التي تفصل بين التجويف الحقيقي والكاذب.",
          "pearl": "التشخيص النهائي: سلخ الأبهر (Aortic Dissection) - من أساسيات Emergency Cardiology."
      },
      "English": {
          "hint1": "Abrupt-onset, excruciating tearing chest pain radiating straight through to the interscapular back.",
          "hint2": "Significant blood pressure differential (>20 mmHg systolic) noted between the right and left upper extremities.",
          "hint3": "CT angiography demonstrates a distinct intimal flap separating the true lumen from the contrast-filled false lumen.",
          "pearl": "Definitive diagnosis: Aortic Dissection - Core Emergency Cardiology & Vascular Surgery."
      }
  },
  "w410": {
      "Arabic": {
          "hint1": "فقدان مفاجئ للبصر في عين واحدة لدى أنثى شابة يترافق بألم عميق في محجر العين عند النظر يمنة أو يسرة.",
          "hint2": "فحص استجابة الحدقة للضوء المتأرجح يظهر توسع الحدقة متناقضاً عند تسليط الضوء على العين المصابة (حدقة ماركوس غان).",
          "hint3": "انحسار حاد في رؤية الألوان وبخاصة تلاشي اللون الأحمر (Red desaturation) مع التماع العصب بالرنين المغناطيسي.",
          "pearl": "التشخيص النهائي: التهاب العصب البصري (Optic Neuritis) - من أساسيات Neuro-Ophthalmology."
      },
      "English": {
          "hint1": "Subacute monocular vision loss in a young adult female accompanied by aching periorbital pain exacerbated by eye motion.",
          "hint2": "Swinging-flashlight test elicits an abnormal relative afferent pupillary defect (Marcus Gunn pupil) in the symptomatic eye.",
          "hint3": "Profound desaturation of bright red colors paired with linear gadolinium enhancement along the intraorbital optic nerve.",
          "pearl": "Definitive diagnosis: Optic Neuritis - Core Neuro-Ophthalmology."
      }
  },
  "w411": {
      "Arabic": {
          "hint1": "مرض عيني معد في المناطق النامية يبدأ بالتهاب جريبي متكرر في الوجه الداخلي للجفن العلوي.",
          "hint2": "التندب المتكرر يسبب انقلاب الجفن للداخل واحتكاك الرموش مباشرة بالقرنية محدثة جروحاً وعتامات.",
          "hint3": "العلامة التندبية المميزة لخط أرلت (Arlt's line) وانحراف الأهداب (Trichiasis) الناجم عن بكتيريا الكلاميديا.",
          "pearl": "التشخيص النهائي: التراخوما (Trachoma) - من أساسيات Ophthalmology & Global Health."
      },
      "English": {
          "hint1": "An endemic ocular infection in resource-limited rural communities causing chronic follicular upper tarsal inflammation.",
          "hint2": "Progressive conjunctival cicatrization rolls the lid margins inward, with lashes scratching and clouding the corneal stroma.",
          "hint3": "Presence of linear conjunctival cicatricial bands (Arlt's line) and trichiasis driven by Chlamydia trachomatis.",
          "pearl": "Definitive diagnosis: Trachoma - Core Ophthalmology & Infectious Disease."
      }
  },
  "w107": {
    "Arabic": {
      "hint1": "حمى فيروسية حادة تنقلها بعوضة الزاعجة المصرية (Aedes aegypti)، وتشتهر تاريخياً بلقب \"حمى كسر العظام\" لشدة آلامها.",
      "hint2": "حمى مفاجئة شديدة مصحوبة بصداع خلف العينين (Retro-orbital pain)، وآلام مبرحة في العضلات والمفاصل وطفح جلدي بقعي.",
      "hint3": "فحص الدم يظهر انخفاضاً حاداً في الصفائح الدموية (Thrombocytopenia) ونقص كرات الدم البيضاء وارتفاع الهيماتوكريت.",
      "pearl": "تسرب البلازما في المرحلة الحرجة قد يؤدي إلى متلازمة صدمة الضنك النزفية المميتة إذا لم يعوض بالمحاليل الوريدية بدقة."
    },
    "English": {
      "hint1": "Arboviral acute febrile illness transmitted by Aedes mosquitoes, historically known as \"breakbone fever\" due to devastating skeletal pain.",
      "hint2": "Characterized by abrupt high fever, severe retro-orbital retrobulbar headache, myalgias, arthralgias, and a diffuse maculopapular exanthem.",
      "hint3": "Laboratory workup reveals marked thrombocytopenia, leukopenia, and hemoconcentration reflecting severe capillary hyperpermeability.",
      "pearl": "The critical phase may precipitate fatal Dengue Shock Syndrome if plasma leakage is not aggressively corrected with isotonic fluid resuscitations."
    }
  },
  "w361": {
    "Arabic": {
      "hint1": "التهاب فيروسي حاد في الحنجرة والرغامي يصيب الرضع والأطفال بين 6 أشهر و3 سنوات، وغالباً يسببه فيروس Parainfluenza.",
      "hint2": "سعال مميز جداً يشبه نباح كلب البحر (Barking seal cough)، مع بحة صوت واضحة وصرير تنفسي شهيقي (Stridor) يزداد ليلاً.",
      "hint3": "أشعة الرقبة الأمامية تظهر التضيق المخروطي المميز أسفل لسان المزمار والمعروف بعلامة برج الكنيسة (Steeple sign).",
      "pearl": "جرعة وحيدة من الديكساميثازون (Dexamethasone) بالفم أو العضل كفيلة بتخفيف وذمة الحنجرة بشكل فعال وسريع."
    },
    "English": {
      "hint1": "Acute viral laryngotracheobronchitis classically affecting toddlers 6 months to 3 years of age, predominantly caused by Parainfluenza virus.",
      "hint2": "Features a distinctive harsh \"barking seal\" brassy cough, hoarseness, and inspiratory stridor that worsens dramatically at night.",
      "hint3": "Anteroposterior soft tissue neck radiography demonstrates pathognomonic subglottic tracheal narrowing termed the \"steeple sign\".",
      "pearl": "A single dose of systemic dexamethasone (oral or IM) rapidly resolves subglottic mucosal edema and prevents admissions."
    }
  },
  "w362": {
    "Arabic": {
      "hint1": "العدوى التنفسية السفلية الأكثر شيوعاً التي تؤدي إلى دخول المستشفى في الرضع دون سن الثانية، يسببها الفيروس المخلوي التنفسي (RSV).",
      "hint2": "يبدأ برشح أنفي خفيف ثم يتطور سريعاً إلى ضيق تنفس، تسرع بالتنفس، توسع فتحتي الأنف، وسحب بين الأضلاع وأزيز صدري واسع.",
      "hint3": "فحص الصدر بالسماعة يكشف خشخشة ناعمة منتشرة مع أزيز زفيري، وتكشف أشعة الصدر فرط انتفاخ الرئتين وتسطح الحجاب الحاجز.",
      "pearl": "العلاج الأساسي هو علاج داعم بالأكسجين الرطب وترطيب السوائل، بينما لا ينصح بالاستخدام الروتيني لموسعات القصبات والستيرويدات."
    },
    "English": {
      "hint1": "The most common lower respiratory tract infection requiring infant hospitalization worldwide, primarily caused by Respiratory Syncytial Virus (RSV).",
      "hint2": "Begins with mild viral coryza, rapidly progressing to tachypnea, intercostal and subcostal retractions, nasal flaring, and diffuse expiratory wheezing.",
      "hint3": "Auscultation reveals widespread fine inspiratory crackles; chest radiography shows bilateral hyperinflation with flattened diaphragms.",
      "pearl": "Therapy is strictly supportive with humidified oxygen and enteral hydration; routine bronchodilators and systemic steroids are not indicated."
    }
  },
  "w400": {
    "Arabic": {
      "hint1": "مضاعفة التهابية مناعية ذاتية غير صديدية تتبع التهاب الحلق بالمكورات العقدية من المجموعة أ (Group A Strep) بعد أسبوعين إلى ثلاثة أسابيع.",
      "hint2": "يتميز بالتهاب مفاصل متنقل يصيب المفاصل الكبيرة (Migratory polyarthritis)، مترافقاً مع طفح جلدي حافوي (Erythema marginatum).",
      "hint3": "يعتمد التشخيص على معايير جونز (Jones Criteria)؛ ويعد التهاب عضلة القلب وتلف صماماته (خاصة التاجي) أخطر المضاعفات الدائمة.",
      "pearl": "حقن البنسلين طويلة المفعول توفر وقاية ثانوية ممتازة لمنع تكرار الهجمات وتفاقم أمراض القلب الروماتيزمية."
    },
    "English": {
      "hint1": "A multisystem post-infectious autoimmune sequel occurring 2-3 weeks after untreated Group A beta-hemolytic streptococcal pharyngitis.",
      "hint2": "Characterized by migratory polyarthritis shifting across large joints, accompanied by transient erythema marginatum and subcutaneous nodules.",
      "hint3": "Diagnosed using the revised Jones Criteria; pancarditis with chronic permanent mitral valvular scarring represents the chief mortality risk.",
      "pearl": "Secondary prophylaxis with monthly intramuscular benzathine penicillin G is mandatory to avert recurrent valvular devastation."
    }
  },
  "w403": {
    "Arabic": {
      "hint1": "التهاب مفصلي بلوري حاد شديد الألم يستهدف في أول نوبة له المفصل المشطي السلامي الأول لإصبع القدم الكبير (Podagra).",
      "hint2": "يستيقظ المريض فجراً بألم حارق كأن المفصل يشتعل، بحيث لا يستطيع حتى تحمل لمس غطاء الفراش الخفيف لشدة الحساسية.",
      "hint3": "بزل المفصل وفحص السائل الزليلي بالمجهر المستقطب يظهر بلورات يورات أحادية الصوديوم إبرية الشكل ذات انكسار ضوئي سلبي قوي.",
      "pearl": "عقار الكولشيسين أو مضادات الالتهاب غير الستيرويدية تعالج النوبة الحادة، بينما Allopurinol يخفض حمض اليوريك على المدى الطويل."
    },
    "English": {
      "hint1": "Acute crystal-induced arthritis whose classic initial manifestation is excruciating monoarthritis of the first metatarsophalangeal joint (podagra).",
      "hint2": "Awakens patients abruptly overnight with excruciating swelling and erythema so intense that even the weight of a bedsheet is intolerable.",
      "hint3": "Arthrocentesis under polarized microscopy definitively reveals needle-shaped monosodium urate crystals exhibiting strong negative birefringence.",
      "pearl": "Colchicine and NSAIDs control acute flares; xanthine oxidase inhibitors like Allopurinol manage chronic hyperuricemia."
    }
  },
  "w406": {
      "Arabic": {
          "hint1": "مسن يشتكي من ارتداد طعام غير مهضوم إلى فمه ورائحة فم كريهة جداً مع صوت قرقعة عند لمس عنقه.",
          "hint2": "بروز جداري خلفي في البلعوم السفلي يحدث في منطقة ضعف تشريحية تعرف بمثلث كيليان (Killian triangle).",
          "hint3": "التصوير الظليل بالباريوم يظهر كيس الرتج البلعومي المريئي الكاذب في مستوى الفقرة العنقية السادسة.",
          "pearl": "التشخيص النهائي: رتج زنكر (Zenker Diverticulum) - من أساسيات Gastroenterology & ENT."
      },
      "English": {
          "hint1": "An elderly gentleman with severe halitosis and regurgitation of foul undigested food particles into the mouth while supine.",
          "hint2": "Posterior mucosal herniation protruding through a zone of muscular weakness known as Killian's dehiscence.",
          "hint3": "Barium swallow demonstration of a contrast-filled posterior pharyngeal pouch above the upper esophageal sphincter.",
          "pearl": "Definitive diagnosis: Zenker Diverticulum - Core Gastroenterology & Otolaryngology."
      }
  },
  "w425": {
      "Arabic": {
          "hint1": "شاب ثلاثيني سليم البنية يتعرض لنوبة إغماء فجائية أثناء النوم أو أثناء إصابته بارتفاع حاد في درجة الحرارة.",
          "hint2": "تخطيط القلب في قسم الطوارئ يكشف عن حصار غصن أيمن غير مكتمل مع تقوس غريب في قطعة ST في المسريين V1 و V2.",
          "hint3": "المظهر التخطيطي الكلاسيكي المعقوف الشبيه بسنام القبة (Coved ST elevation) في V1-V2 مع موجة T مقلوبة.",
          "pearl": "التشخيص النهائي: متلازمة بروغادا (Brugada Syndrome) - من أساسيات Electrophysiology & Cardiology."
      },
      "English": {
          "hint1": "A young, healthy male presenting with syncope or nocturnal agonal respiration precipitated by a febrile viral illness.",
          "hint2": "Electrocardiography in the emergency department reveals atypical right precordial ST elevation resembling a peaked dome.",
          "hint3": "Type 1 pathognomonic coved ST-segment elevation ≥2 mm followed by an inverted T wave across leads V1 and V2.",
          "pearl": "Definitive diagnosis: Brugada Syndrome - Core Electrophysiology & Cardiology."
      }
  },
  "w111": {
    "Arabic": {
      "hint1": "اضطراب هرموني ينتج عن فرط مزمن في هرمون الكورتيزول، يسبب تراكم غير طبيعي للدهون في الجذع وأعلى الظهر مع نحافة الأطراف.",
      "hint2": "يعاني المريض من وجه قمري مستدير (Moon face)، وحدبة دهنية بالظهر (Buffalo hump)، وخطوط بنفسجية عريضة على جلد البطن (Purple striae).",
      "hint3": "يُشخص باختبار تثبيط الديكساميثازون الليلي (Dexamethasone suppression test) أو فحص الكورتيزول الحر في بول 24 ساعة.",
      "pearl": "استخدام الستيرويدات العلاجية لفترات طويلة هو السبب الأكثر شيوعاً على الإطلاق."
    },
    "English": {
      "hint1": "Endocrine disorder induced by prolonged supraphysiologic glucocorticoid exposure, precipitating central truncal adiposity with wasted limbs.",
      "hint2": "Presents with plethoric \"moon facies\", dorsocervical fat pad (\"buffalo hump\"), and wide violaceous abdominal cutaneous striae.",
      "hint3": "Confirmed by elevated 24-hour urinary free cortisol or failure of serum cortisol suppression following low-dose dexamethasone.",
      "pearl": "Exogenous therapeutic corticosteroid administration represents the overwhelmingly predominant clinical etiology."
    }
  },
  "w112": {
    "Arabic": {
      "hint1": "قصور أولي في قشرة الغدة الكظرية يؤدي لنقص مزمن في الهرمونات القشرية السكرية والمعدنية معاً.",
      "hint2": "يعاني المريض من إرهاق شديد، وهبوط ضغط دم انتصابي، واشتهاء شديد للأملاح، وفرط تصبغ جلدي برونزي في ثنايا الجلد والغشاء المخاطي للفم.",
      "hint3": "الفحوصات تظهر انخفاض الصوديوم وفرط البوتاسيوم وانخفاض الكورتيزول، مع عدم استجابة الغدة لاختبار تحفيز هرمون ACTH.",
      "pearl": "أزمة الكظر الحادة (Adrenal crisis) تسبب هبوطاً دورياً مميتاً وتستدعي حقن الهيدروكورتيزون الوريدي فوراً."
    },
    "English": {
      "hint1": "Primary chronic adrenocortical insufficiency culminating in global deficiency of both glucocorticoids and mineralocorticoids.",
      "hint2": "Profound fatigue, orthostatic hypotension, salt craving, and distinctive generalized bronze hyperpigmentation of mucosal membranes.",
      "hint3": "Hyponatremia and hyperkalemia with subnormal morning cortisol unresponsive to synthetic cosyntropin (ACTH) stimulation.",
      "pearl": "Acute adrenal crisis precipitates life-threatening hemodynamic vascular collapse, treated with emergent parenteral hydrocortisone."
    }
  },
  "w113": {
    "Arabic": {
      "hint1": "مرض مناعي ذاتي ينجم عن وجود أجسام مضادة محفزة لمستقبلات هرمون TSH تؤدي لإفراز مفرط وغير خاضع للسيطرة لهرمونات الغدة الدرقية.",
      "hint2": "يعاني المريض من عدم تحمل الحرارة، وفقدان الوزن رغم زيادة الشهية، وتسرع ضربات القلب ورعاش خفيف في اليدين وقلق مستمر.",
      "hint3": "ظهور جحوظ العينين المميز (Exophthalmos) ووذمة ما قبل الظنبوب (Pretibial myxedema) مع دراق متضخم وعائي منتشر.",
      "pearl": "أكثر أسباب فرط نشاط الغدة الدرقية شيوعاً، ويعالج بمضادات الدرقية كـ Methimazole أو اليود المشع."
    },
    "English": {
      "hint1": "Autoimmune hyperthyroidism driven pathologically by circulating thyroid-stimulating immunoglobulin (TSI) activating TSH receptors.",
      "hint2": "Heat intolerance, involuntary weight loss despite hyperphagia, sinus tachycardia, fine resting finger tremors, and emotional lability.",
      "hint3": "Hallmarks include bilateral infiltrative proptosis (exophthalmos), pretibial myxedema, and diffuse thyroid vascular bruit.",
      "pearl": "The foremost etiology of thyrotoxicosis; managed with thionamides (Methimazole) or radioactive iodine ablation."
    }
  },
  "w114": {
    "Arabic": {
      "hint1": "التهاب مناعي ذاتي مزمن يؤدي لتدمير تدريجي في خلايا الغدة الدرقية بواسطة ارتشاح لمفاوي كثيف وخلايا هورثل (Hürthle cells).",
      "hint2": "يشكو المريض من تعب مزمن، زيادة غير مبررة بالوزن، عدم تحمل البرد، إمساك، جفاف الجلد وتباطؤ في معدل ضربات القلب.",
      "hint3": "الفحوصات تؤكد ارتفاع TSH وانخفاض Free T4 مع وجود إيجابية عالية للأجسام المضادة ضد بيروكسيداز الغدة الدرقية (Anti-TPO).",
      "pearl": "السبب الأول لقصور الغدة الدرقية في المناطق التي يتوفر فيها اليود بالملح، وعلاجه الدائم هو هرمون الليفوثيروكسين."
    },
    "English": {
      "hint1": "Chronic autoimmune destruction of thyroid follicular cells by dense lymphoplasmacytic infiltrates with oxyphilic Hürthle metaplasia.",
      "hint2": "Insidious lethargy, cold intolerance, unprovoked weight gain, chronic constipation, xeroderma, and bradycardia.",
      "hint3": "High-titer positivity for anti-thyroid peroxidase antibodies (anti-TPO) coupled with elevated serum TSH and subnormal free T4.",
      "pearl": "Leading cause of primary hypothyroidism in iodine-sufficient countries; treated with lifelong oral Levothyroxine monotherapy."
    }
  },
  "w131": {
    "Arabic": {
      "hint1": "اضطراب نظم قلبي فوق بطيني شائع ينجم عن إشارات كهربائية فوضوية سريعة تحل محل النشاط المنتظم للعقدة الجيبية الأذينية.",
      "hint2": "يشعر المريض بخفقان قلبي غير منتظم تماماً (Irregularly irregular pulse) وضيق تنفس ودوخة، مع تذبذب النبض بالسماعة.",
      "hint3": "تخطيط كهربية القلب (ECG) يظهر غياباً تاماً للموجة P (Absent P waves) مع خط قاعدي متذبذب غير منتظم وفترات R-R متباينة.",
      "pearl": "ركود الدم في أذينة القلب اليسرى يرفع خطر السكتات الدماغية التخثرية 5 أضعاف، مما يستدعي استخدام مضادات التجلط."
    },
    "English": {
      "hint1": "Common supraventricular tachyarrhythmia characterized by chaotic, disorganized atrial depolarizations overriding the sinoatrial node.",
      "hint2": "Patients experience palpitations marked by a characteristically \"irregularly irregular\" arterial pulse, dyspnea, and presyncope.",
      "hint3": "12-lead ECG demonstrates total absence of discernible P waves, erratic baseline fibrillatory waves, and variable R-R intervals.",
      "pearl": "Stasis in the left atrial appendage increases thromboembolic stroke risk fivefold, necessitating systemic anticoagulation."
    }
  },
  "w135": {
    "Arabic": {
      "hint1": "التهاب حاد يصيب الغشاء الليفي المزدوج المغلف للقلب، وغالباً ما يعقب عدوى فيروسية تنفسية حديثة.",
      "hint2": "ألم صدري حاد كالوخز يخف بشكل واضح ومميز عند جلوس المريض وانحنائه للأمام، ويزداد سوءاً عند الاستلقاء على الظهر أو أخذ شهيق عميق.",
      "hint3": "سماع احتكاك تاموري صريري (Pericardial friction rub) بالسماعة، وECG يظهر ارتفاعاً مقعراً واسعاً في قطعة ST (Diffuse ST elevation) في معظم الليدات.",
      "pearl": "مضادات الالتهاب غير الستيرويدية (NSAIDs) مع عقار الكولشيسين تمثل الخط العلاجي الأول لمنع الانتكاس."
    },
    "English": {
      "hint1": "Acute inflammation of the fibroserous pericardial sac, frequently developing as a post-viral inflammatory reaction.",
      "hint2": "Sharp pleuritic chest pain that characteristically improves upon sitting upright and leaning forward, worsening when supine.",
      "hint3": "Auscultation captures a high-pitched superficial friction rub; ECG displays widespread upward concave ST-segment elevation with PR depression.",
      "pearl": "First-line therapy pairs high-dose NSAIDs with adjunct colchicine to accelerate remission and suppress recurrent attacks."
    }
  },
  "w137": {
    "Arabic": {
      "hint1": "عجز سريري في المضخة القلبية عن تلبية متطلبات الأنسجة من الأكسجين أو القدرة على ذلك فقط تحت ضغوط ملء بطينية مرتفعة شاذة.",
      "hint2": "يعاني المريض من ضيق تنفس عند الاستلقاء (Orthopnea) وضيق تنفس انتيابي ليلي يوقظه من النوم (PND) مع تورم الساقين.",
      "hint3": "الفحص يظهر ارتفاع الضغط الوريدي الوداجي (JVD) مع صوت القلب الثالث (S3 gallop)، وارتفاع نوعي في ببتيد الدماغ المدر للصوديوم (BNP).",
      "pearl": "مجموعات الأدوية الأربعة الذهبية (ARNI/ACEi, Beta-blocker, MRA, SGLT2i) تقلل الوفيات بشكل جذري في قصور القلب الانقباضي."
    },
    "English": {
      "hint1": "A complex clinical syndrome stemming from structural or functional ventricular impairment, elevating filling pressures or reducing output.",
      "hint2": "Cardinal manifestations include orthopnea, paroxysmal nocturnal dyspnea (PND), bilateral lower-extremity pitting edema, and hepatomegaly.",
      "hint3": "Physical examination demonstrates elevated jugular venous distension (JVD), an S3 gallop rhythm, and marked elevation in plasma BNP.",
      "pearl": "Guideline-directed medical therapy utilizing the \"four pillars\" (ARNI, beta-blocker, MRA, SGLT2i) dramatically slashes mortality."
    }
  },
  "w138": {
    "Arabic": {
      "hint1": "إقفار موضعي عابر في عضلة القلب ينجم عن عدم التوازن بين إمداد الشرايين التاجية بالدم وزيادة استهلاك القلب للأكسجين.",
      "hint2": "ألم ضاغط أو ثقل عاصر خلف عظم القص يشع للذراع الأيسر أو الفك، تثيره نوبات الجهد البدني أو الانفعال النفسي الشديد.",
      "hint3": "تتميز في شكلها المستقر بأن الألم يستمر لدقائق قليلة (أقل من 15-20 دقيقة) ويزول تماماً بالراحة أو بتناول حبة النيتروجليسرين تحت اللسان.",
      "pearl": "تخطيط القلب أثناء نوبة الألم يظهر غالباً انخفاضاً عابراً في قطعة ST (ST-segment depression) دون ارتفاع إنزيمات القلب التخريبية."
    },
    "English": {
      "hint1": "Transient reversible myocardial ischemia provoked when metabolic myocardial oxygen demand outstrips restricted coronary supply.",
      "hint2": "Substernal squeezing or heavy chest pressure radiating to the left arm or mandible, elicited predictably by exertion or emotional stress.",
      "hint3": "Stable episodes persist briefly (< 10-15 minutes) and resolve completely with rest or sublingual nitroglycerin tablets.",
      "pearl": "Transient horizontal or downsloping ST-segment depression on stress ECG in the absence of elevated cardiac troponins."
    }
  },
  "w143": {
    "Arabic": {
      "hint1": "التهاب حاد في الجدار المراري يبدأ في أكثر من 90% من الحالات بسبب انحشار حصوة في عنق المرارة أو القناة الكيسية (Cystic duct).",
      "hint2": "ألم مستمر شديد في الربع العلوي الأيمن من البطن يشع للكتف الأيمن أو تحت لوح الكتف، يتلو تناول وجبة دهنية دسمة مترافقاً مع غثيان وحمى.",
      "hint3": "إيجابية علامة ميرفي (Murphy's sign) بتوقف الشهيق فجأة من الألم عند الضغط تحت الحافة الضلعية اليمنى، والسونار يظهر سماكة الجدار > 4 ملم.",
      "pearl": "استئصال المرارة بالمنظار خلال أول 72 ساعة من بدء الأعراض يمثل المعيار الجراحي الذهبي لمنع الانفجار والغرغرينا."
    },
    "English": {
      "hint1": "Acute gallbladder inflammation triggered in > 90% of instances by calculus impaction at the gallbladder neck or cystic duct orifice.",
      "hint2": "Constant, severe right upper quadrant colic radiating to the right scapula, typically triggered after fatty meal ingestion alongside fever.",
      "hint3": "Sonographic or manual Murphy sign (inspiratory arrest on deep right subcostal palpation); ultrasound shows wall thickening > 4 mm.",
      "pearl": "Early laparoscopic cholecystectomy within 72 hours of symptom onset constitutes the standard of care."
    }
  },
  "w145": {
    "Arabic": {
      "hint1": "مرض معوي التهابي مزمن يقتصر على الطبقة المخاطية والتحت مخاطية، ويبدأ دائماً في المستقيم ويمتد بشكل مستمر وغير متقطع نحو الأعلى.",
      "hint2": "يعاني المريض من إسهال مزمن متكرر ممزوج بالدم والمخاط، وزحير مؤلم ملح (Tenesmus)، وتشنجات بطنية تخف بعد التغوط.",
      "hint3": "منظار القولون يظهر التهاباً احتقانياً مستمراً هشاً نازفاً عند اللمس، وخزعات الأنسجة تؤكد وجود خراجات في الخبايا المخاطية (Crypt abscesses).",
      "pearl": "تضخم القولون السمي (Toxic Megacolon) والتحول السرطاني بعد 8-10 سنوات من المرض من أخطر المضاعفات المراقبة دورياً."
    },
    "English": {
      "hint1": "Chronic inflammatory bowel disorder restricted strictly to mucosal and submucosal layers, invariably involving the rectum and extending contiguously.",
      "hint2": "Presents with recurrent bouts of bloody mucus diarrhea, severe fecal tenesmus, and lower cramping abdominal pain relieved by defecation.",
      "hint3": "Colonoscopy demonstrates confluent mucosal erythema, friability, and superficial ulcerations; histology confirms mucosal crypt abscesses.",
      "pearl": "Toxic megacolon and cumulative colorectal cancer risk after 8-10 years mandate rigorous regular surveillance colonoscopies."
    }
  },
  "w149": {
    "Arabic": {
      "hint1": "تجمع غير طبيعي للهواء داخل التجويف الجنبي بين وريقتي غشاء الجنب، مما يلغي الضغط السلبي ويؤدي لانخماص الرئة جزئياً أو كلياً.",
      "hint2": "ألم صدري جنبي فجائي حاد في أحد الجانبين مع ضيق تنفس شديد، وغالباً يحدث النوع الأولي التلقائي في الشباب طوال القامة والنحاف.",
      "hint3": "الفحص السريري يظهر فرط رنين بالقرع (Hyperresonance) مع غياب كامل لأصوات التنفس بالجانب المصاب، وتؤكده أشعة الصدر بغياب علامات النسيج الرئوي.",
      "pearl": "استرواح الصدر الموتر (Tension Pneumothorax) يسبب انحراف القصبة الهوائية وهبوط الضغط ويستدعي إدخال إبرة تفريغ فورية بالصدر دون انتظار الأشعة."
    },
    "English": {
      "hint1": "Accumulation of atmospheric air within the pleural space abolishing negative intrapleural pressure, leading to ipsilateral lung collapse.",
      "hint2": "Sudden-onset unilateral pleuritic thoracic pain and dyspnea; primary spontaneous variant classically strikes tall, thin young men.",
      "hint3": "Hyperresonance to percussion with absent vesicular breath sounds on the affected hemithorax; upright CXR displays a distinct visceral pleural line.",
      "pearl": "Tension pneumothorax produces contralateral tracheal deviation and hemodynamic shock, demanding immediate needle thoracostomy decompression."
    }
  },
  "w150": {
    "Arabic": {
      "hint1": "انسداد حاد في الشريان الرئوي أو أحد فروعه الرئيسية ناجم عن صمة خثرية تنتقل غالباً من أوردة الأطراف السفلية العميقة (DVT).",
      "hint2": "ضيق تنفس فجائي غير مفسر، ألم صدري جنبي يزداد بالشهيق، تسرع ضربات القلب ونفث دموي، في مريض خضع لجراحة حديثة أو طريح الفراش.",
      "hint3": "الفحص التشخيصي المفضل ذو المعيار الذهبي هو الأشعة المقطعية للشرايين الرئوية بالصبغة (CT Pulmonary Angiography).",
      "pearl": "تحليل D-dimer سلبي يستبعد الحالة في المرضى منخفضي الخطورة وفق معايير ويلز (Wells Criteria)."
    },
    "English": {
      "hint1": "Acute mechanical occlusion of the pulmonary arterial bed caused by an embolus originating predominantly from deep vein thrombosis (DVT).",
      "hint2": "Abrupt, unexplained dyspnea, pleuritic chest pain, sinus tachycardia, and hemoptysis in patients with immobilized or postoperative risk factors.",
      "hint3": "Computed tomography pulmonary angiography (CTPA) serves as the definitive reference imaging modality.",
      "pearl": "A negative quantitative D-dimer safely excludes the diagnosis in patients with low clinical pre-test probability (Wells score)."
    }
  },
  "w49": {
    "Arabic": {
      "hint1": "يمكن أن يسبب أوبئة عالمية واسعة النطاق.",
      "hint2": "يؤدي إلى التهاب في المجاري التنفسية العلوية والسفلية.",
      "hint3": "عدوى تنفسية حادة ناتجة عن فيروسات الحمض النووي الريبي.",
      "pearl": "التشخيص النهائي: الإنفلونزا (Influenza) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Capable of causing widespread global pandemics.",
      "hint2": "Causes inflammation of the upper and lower respiratory tracts.",
      "hint3": "Acute respiratory infection caused by RNA viruses.",
      "pearl": "Definitive diagnosis: Influenza (الإنفلونزا) - Core Internal Medicine."
    }
  },
  "w50": {
    "Arabic": {
      "hint1": "يستخدم مقياس بريستول لتقييم حركة الأمعاء.",
      "hint2": "تغير قوام البراز يعد سمة جوهرية للتشخيص.",
      "hint3": "اضطراب وظيفي مزمن في القناة الهضمية.",
      "pearl": "التشخيص النهائي: القولون العصبي (Irritable Bowel Syndrome) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Bristol scale is often utilized to assess bowel motility.",
      "hint2": "Stool consistency changes are essential for diagnosis.",
      "hint3": "Chronic functional disorder of the gastrointestinal tract.",
      "pearl": "Definitive diagnosis: Irritable Bowel Syndrome (القولون العصبي) - Core Internal Medicine."
    }
  },
  "w55": {
    "Arabic": {
      "hint1": "يمكن أن تتطور الحالة إلى تقرحات عميقة إذا لم يتم التعامل مع المسبب.",
      "hint2": "يؤدي التآكل المستمر للغشاء المخاطي إلى فقدان طبقة الحماية الوقائية.",
      "hint3": "تتضمن التهاباً أو تهيجاً في الغشاء المبطن للجزء العلوي من الجهاز الهضمي.",
      "pearl": "التشخيص النهائي: التهاب المعدة (Gastritis) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Failure to address the underlying cause can progress to deep-seated mucosal ulceration.",
      "hint2": "Persistent erosion of the mucosal lining leads to a breakdown of protective barriers.",
      "hint3": "Involves inflammation or irritation of the lining within the upper digestive tract.",
      "pearl": "Definitive diagnosis: Gastritis (التهاب المعدة) - Core Internal Medicine."
    }
  },
  "w57": {
    "Arabic": {
      "hint1": "تعد التغذية بفيتامين أ جزءاً من بروتوكول العلاج الداعم.",
      "hint2": "قد يؤدي إلى مضاعفات خطيرة مثل التهاب الدماغ.",
      "hint3": "مرض فيروسي شديد العدوى ينتقل عبر الرذاذ التنفسي.",
      "pearl": "التشخيص النهائي: الحصبة (Measles) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Vitamin A supplementation is part of the supportive treatment protocol.",
      "hint2": "May lead to severe complications such as encephalitis.",
      "hint3": "A highly contagious viral illness transmitted via respiratory droplets.",
      "pearl": "Definitive diagnosis: Measles (الحصبة) - Core Pediatrics."
    }
  },
  "w59": {
    "Arabic": {
      "hint1": "يعتمد التشخيص الدقيق على الفحص المصلي وتحديد النمط الجيني.",
      "hint2": "قد يتطور بشكل مزمن مؤدياً إلى تليف نسيجي.",
      "hint3": "حالة التهابية تصيب النسيج الوظيفي للغدة الكبيرة في البطن.",
      "pearl": "التشخيص النهائي: التهاب الكبد الوبائي (Hepatitis) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Definitive diagnosis relies on serological testing and genotyping.",
      "hint2": "May progress into a chronic form leading to fibrotic tissue scarring.",
      "hint3": "An inflammatory condition affecting the functional tissue of the largest abdominal gland.",
      "pearl": "Definitive diagnosis: Hepatitis (التهاب الكبد الوبائي) - Core Internal Medicine."
    }
  },
  "w60": {
    "Arabic": {
      "hint1": "تتضمن التقييمات السريرية اختبار سرعة النقر بالأصابع.",
      "hint2": "تستخدم سلائف النواقل العصبية لتحسين السيطرة الحركية.",
      "hint3": "اضطراب عصبي حركي يتميز ببطء الحركة وتصلب العضلات.",
      "pearl": "التشخيص النهائي: الشلل الرعاش (Parkinsonism) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Clinical assessment involves finger-tapping speed tests.",
      "hint2": "Neurotransmitter precursors are utilized to improve motor control.",
      "hint3": "A motor neurological disorder characterized by bradykinesia and rigidity.",
      "pearl": "Definitive diagnosis: Parkinsonism (الشلل الرعاش) - Core Neurology."
    }
  },
  "w62": {
    "Arabic": {
      "hint1": "يؤدي وجود طفرات في جينات إصلاح الحمض النووي إلى زيادة كبيرة في احتمالية الإصابة.",
      "hint2": "تُجرى خزعة إبرية لتحديد الخصائص النسيجية والكيمياء الحيوية للأنسجة المتأثرة.",
      "hint3": "يعد من أكثر الأورام شيوعاً بين النساء في مختلف المجتمعات.",
      "pearl": "التشخيص النهائي: سرطان الثدي (Breast Cancer) - من أساسيات Surgery."
    },
    "English": {
      "hint1": "Germline mutations in DNA repair genes significantly increase the lifetime probability of developing the condition.",
      "hint2": "Core needle biopsy is the gold standard for evaluating cellular architecture and molecular markers.",
      "hint3": "It represents the most frequently diagnosed malignant neoplasm among women globally.",
      "pearl": "Definitive diagnosis: Breast Cancer (سرطان الثدي) - Core Surgery."
    }
  },
  "w66": {
    "Arabic": {
      "hint1": "تتضمن الخلايا الرغوية التي تبتلع الليبيدات في الطبقة تحت البطانية.",
      "hint2": "تحدث كنتيجة لاستجابة التهابية مزمنة في بطانة الوعاء الدموي.",
      "hint3": "تراكم المواد الدهنية داخل جدران الأوعية الدموية.",
      "pearl": "التشخيص النهائي: تصلب الشرايين (Atherosclerosis) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Involves foam cells that sequester lipids within the subendothelial layer.",
      "hint2": "Occurs as a chronic inflammatory response within the vessel endothelium.",
      "hint3": "Characterized by the accumulation of fatty substances within vessel walls.",
      "pearl": "Definitive diagnosis: Atherosclerosis (تصلب الشرايين) - Core Cardiology."
    }
  },
  "w83": {
    "Arabic": {
      "hint1": "علامات تمدد الساقين والرقبة تعتبر مؤشرات سريرية كلاسيكية للتهيج العصبي.",
      "hint2": "تنتشر العدوى غالباً عبر الجهاز التنفسي من خلال الرذاذ المحمول جواً.",
      "hint3": "عدوى شديدة تصيب الأغشية المحيطة بالدماغ والحبل الشوكي.",
      "pearl": "التشخيص النهائي: التهاب السحايا الجرثومي (Bacterial Meningitis) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Positive signs of meningeal irritation during physical maneuvers suggest localized inflammation.",
      "hint2": "Infection is often transmitted via the respiratory tract through airborne droplets.",
      "hint3": "An acute infection affecting the membranes surrounding the brain and spinal cord.",
      "pearl": "Definitive diagnosis: Bacterial Meningitis (التهاب السحايا الجرثومي) - Core Pediatrics."
    }
  },
  "w87": {
    "Arabic": {
      "hint1": "يُعتبر العلاج السلوكي المعرفي خط دفاع أول بجانب مثبطات استرداد السيروتونين.",
      "hint2": "تُشير المعايير التشخيصية إلى استمرار الأعراض لمدة أسبوعين على الأقل.",
      "hint3": "اضطراب مزاجي يتميز بشعور مستمر بالحزن وفقدان الاهتمام.",
      "pearl": "التشخيص النهائي: الاكتئاب (Depression) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Cognitive behavioral therapy acts as a primary treatment alongside selective serotonin reuptake inhibitors.",
      "hint2": "Diagnostic criteria require symptoms to persist for a minimum duration of two weeks.",
      "hint3": "A mood disorder characterized by persistent feelings of sadness and loss of interest.",
      "pearl": "Definitive diagnosis: Depression (الاكتئاب) - Core Psychiatry."
    }
  },
  "w94": {
    "Arabic": {
      "hint1": "العدوى الناتجة عن مسببات معينة قد تتبعها مضاعفات مناعية تؤثر على الصمامات القلبية.",
      "hint2": "يجب تمييز المسببات الفيروسية عن البكتيرية لتجنب الاستخدام الخاطئ للمضادات الحيوية.",
      "hint3": "التهاب يصيب المنطقة الواقعة خلف الفم والأنف.",
      "pearl": "التشخيص النهائي: التهاب البلعوم والحلق (Pharyngitis) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Infections from specific organisms may be followed by immunological complications affecting heart valves.",
      "hint2": "Differentiating viral from bacterial etiology is crucial to avoid inappropriate antibiotic use.",
      "hint3": "Inflammation affecting the area posterior to the mouth and nasal cavity.",
      "pearl": "Definitive diagnosis: Pharyngitis (التهاب البلعوم والحلق) - Core Pediatrics."
    }
  },
  "w102": {
    "Arabic": {
      "hint1": "تؤدي زيادة البروستاتا إلى زيادة الضغط على الإحليل البروستاتي مما يسبب التضييق.",
      "hint2": "يستخدم فحص المستقيم الرقمي لتقييم حجم وقوام هذا العضو.",
      "hint3": "تحدث هذه الحالة الشائعة بسبب تضخم غدة تحيط بقاعدة المثانة.",
      "pearl": "التشخيص النهائي: تضخم البروستاتا (Prostate Hyperplasia) - من أساسيات Surgery."
    },
    "English": {
      "hint1": "Proliferation exerts mechanical pressure on the urethra, causing significant luminal narrowing.",
      "hint2": "Digital rectal examination is employed to assess the size and consistency of this organ.",
      "hint3": "This common condition arises from the enlargement of a gland surrounding the bladder base.",
      "pearl": "Definitive diagnosis: Prostate Hyperplasia (تضخم البروستاتا) - Core Surgery."
    }
  },
  "w103": {
    "Arabic": {
      "hint1": "يتم اختيار المضادات الحيوية بناءً على نتائج حساسية المزارع المخبرية.",
      "hint2": "قد يرافق الحالة ألم في منطقة العانة وحمى في حال انتقالها للأعلى.",
      "hint3": "تنتج هذه الحالة عادة عن غزو ميكروبي للمجاري البولية.",
      "pearl": "التشخيص النهائي: التهاب المسالك البولية (Urinary Tract Infection) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Antibiotic therapy is guided by the results of microbiological susceptibility testing.",
      "hint2": "Suprapubic tenderness and systemic fever occur if the infection ascends.",
      "hint3": "This condition typically results from microbial invasion of the excretory pathways.",
      "pearl": "Definitive diagnosis: Urinary Tract Infection (التهاب المسالك البولية) - Core Internal Medicine."
    }
  },
  "w106": {
    "Arabic": {
      "hint1": "تتطلب الحالات المزمنة تدبيرًا طويل الأمد لمنع الوصول إلى الفشل الكلوي النهائي.",
      "hint2": "يمكن أن يحدث بسبب استجابة مناعية غير طبيعية للعدوى العقدية.",
      "hint3": "يؤدي إلى اختلال في وظائف الكلى نتيجة التهاب الأنسجة المصفية.",
      "pearl": "التشخيص النهائي: التهاب كبيبات الكلى (Glomerulonephritis) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Chronic cases necessitate long-term management to prevent progression to end-stage renal failure.",
      "hint2": "Commonly triggered by an abnormal immune response following a streptococcal infection.",
      "hint3": "Characterized by inflammatory processes affecting the filtration units of the renal system.",
      "pearl": "Definitive diagnosis: Glomerulonephritis (التهاب كبيبات الكلى) - Core Internal Medicine."
    }
  },
  "w109": {
    "Arabic": {
      "hint1": "تعتبر متلازمات الأنسجة الضامة الوراثية عامل خطر للإصابة المبكرة.",
      "hint2": "يزداد خطر التمزق بشكل كبير مع زيادة قطر الوعاء عن حد معين.",
      "hint3": "يحدث هذا التوسع الوعائي نتيجة ضعف في جدار الشريان الرئيسي الصادر من القلب.",
      "pearl": "التشخيص النهائي: أم الدم الأبهرية (Aortic Aneurysm) - من أساسيات Surgery."
    },
    "English": {
      "hint1": "Genetic connective tissue disorders are recognized as predisposing factors for early development.",
      "hint2": "The risk of catastrophic rupture increases significantly once the diameter exceeds a threshold.",
      "hint3": "Occurs as a result of structural weakness in the wall of the body's largest artery.",
      "pearl": "Definitive diagnosis: Aortic Aneurysm (أم الدم الأبهرية) - Core Surgery."
    }
  },
  "w110": {
    "Arabic": {
      "hint1": "يعتمد الوقاية طويلة الأمد على حملات التلقيح الروتينية للأطفال.",
      "hint2": "تنتشر العدوى عبر القطيرات المتطايرة من الشخص المصاب.",
      "hint3": "عدوى بكتيرية تصيب الجهاز التنفسي وتتميز بنوبات سعال عنيفة.",
      "pearl": "التشخيص النهائي: السعال الديكي (Whooping Cough) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Long-term prevention relies heavily on routine pediatric immunization schedules.",
      "hint2": "Transmission occurs primarily through respiratory droplets from an infected individual.",
      "hint3": "A bacterial respiratory infection characterized by intense paroxysms of coughing.",
      "pearl": "Definitive diagnosis: Whooping Cough (السعال الديكي) - Core Pediatrics."
    }
  },
  "w115": {
    "Arabic": {
      "hint1": "يحدث الألم غالباً في ساعات الليل أو الصباح الباكر.",
      "hint2": "تكون حصوات في المسالك البولية نتيجة تراكم الأملاح.",
      "hint3": "ترسب بلورات حمض اليوريك في المفاصل.",
      "pearl": "التشخيص النهائي: النقرس (Gout) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Nocturnal or early morning onset of severe pain is characteristic.",
      "hint2": "Formation of nephrolithiasis due to crystal aggregation.",
      "hint3": "Deposition of monosodium urate crystals in synovial joints.",
      "pearl": "Definitive diagnosis: Gout (النقرس) - Core Internal Medicine."
    }
  },
  "w116": {
    "Arabic": {
      "hint1": "تؤدي قراءات مقياس T-score التي تقل عن -2.5 إلى تأكيد التشخيص السريري.",
      "hint2": "يتم التقييم التشخيصي غالباً باستخدام قياس امتصاص الأشعة السينية ثنائي الطاقة.",
      "hint3": "يتميز المرض بانخفاض كثافة المعادن في الهيكل العظمي.",
      "pearl": "التشخيص النهائي: هشاشة العظام (Osteoporosis) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "A T-score reading of -2.5 or lower confirms the clinical diagnosis.",
      "hint2": "Diagnostic evaluation typically utilizes dual-energy X-ray absorptiometry.",
      "hint3": "This condition is characterized by a reduction in skeletal mineral density.",
      "pearl": "Definitive diagnosis: Osteoporosis (هشاشة العظام) - Core Internal Medicine."
    }
  },
  "w117": {
    "Arabic": {
      "hint1": "تتضمن التغيرات النسيجية غياب الطبقة الحبيبية مع وجود خراجات مونرو داخل البشرة.",
      "hint2": "تؤدي إصابة المفاصل المرتبطة بهذه الحالة إلى التهاب مفصلي تآكلي.",
      "hint3": "تظهر على الجلد بقع حمراء مغطاة بقشور فضية سميكة.",
      "pearl": "التشخيص النهائي: الصدفية (Psoriasis) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Microscopic examination reveals the absence of the granular layer and Munro's microabscesses.",
      "hint2": "Associated articular involvement leads to a distinct form of erosive arthritis.",
      "hint3": "The clinical presentation features erythematous plaques covered with thick silvery scales.",
      "pearl": "Definitive diagnosis: Psoriasis (الصدفية) - Core Dermatology."
    }
  },
  "w118": {
    "Arabic": {
      "hint1": "تُشاهد تغيرات في التقرن الوريدي داخل البشرة المصابة.",
      "hint2": "تظهر الآفات النسيجية توسعاً في المسافات بين الخلايا الكيراتينية.",
      "hint3": "تتجلى الحالة كتهيج جلدي حاد يتميز بالحكة الشديدة.",
      "pearl": "التشخيص النهائي: الأكزيما (Eczema) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Histopathology frequently displays features of spongiosis within the affected tissue.",
      "hint2": "Histological features show widening of the intercellular spaces within the epidermis.",
      "hint3": "The condition manifests as persistent cutaneous irritation characterized by intense pruritus.",
      "pearl": "Definitive diagnosis: Eczema (الأكزيما) - Core Dermatology."
    }
  },
  "w119": {
    "Arabic": {
      "hint1": "تُستخدم قطرات العين لتثبيط إنتاج السائل أو تسهيل خروجه.",
      "hint2": "يظهر قرص العصب البصري تقعراً غير طبيعي في الفحص المباشر.",
      "hint3": "تؤدي هذه الحالة إلى تلف العصب البصري بشكل تدريجي.",
      "pearl": "التشخيص النهائي: المياه الزرقاء بالعين (Glaucoma) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Pharmacological agents are used to inhibit fluid production or enhance aqueous outflow.",
      "hint2": "The optic disc demonstrates characteristic cupping during fundoscopic evaluation.",
      "hint3": "The condition results in progressive damage to the optic nerve.",
      "pearl": "Definitive diagnosis: Glaucoma (المياه الزرقاء بالعين) - Core Ophthalmology."
    }
  },
  "w120": {
    "Arabic": {
      "hint1": "يتم إزالة القشرة المصابة مع الحفاظ على المحفظة لدعم العدسة الجديدة.",
      "hint2": "يلاحظ الفحص وجود انعكاس أحمر باهت أو مفقود أثناء التنظير.",
      "hint3": "يحدث تعتيم في عدسة العين الطبيعية مما يؤثر على حدة الإبصار.",
      "pearl": "التشخيص النهائي: إعتام عدسة العين (Cataract) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "The process involves extracting the clouded cortex while preserving the capsule for support.",
      "hint2": "Examination reveals a dull or absent red reflex during ophthalmoscopy.",
      "hint3": "Opacity of the natural lens leads to a significant decrease in visual acuity.",
      "pearl": "Definitive diagnosis: Cataract (إعتام عدسة العين) - Core Ophthalmology."
    }
  },
  "w132": {
    "Arabic": {
      "hint1": "يتميز بضعف النبض المحيطي وتأخره مقارنة بضربات القلب.",
      "hint2": "يؤدي إلى انخفاض تدريجي في مساحة فتحة الصمام.",
      "hint3": "تضيق في الصمام المسؤول عن ضخ الدم للجسم.",
      "pearl": "التشخيص النهائي: تضيق الأبهر (Aortic Stenosis) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Presents with a weakened and delayed carotid upstroke, known as parvus et tardus.",
      "hint2": "Progressive reduction in the valve area significantly restricts cardiac output.",
      "hint3": "Narrowing of the valve orifice through which blood exits the left ventricle.",
      "pearl": "Definitive diagnosis: Aortic Stenosis (تضيق الأبهر) - Core Cardiology."
    }
  },
  "w133": {
    "Arabic": {
      "hint1": "يمكن أن يسبب تلفاً هيكلياً يؤدي إلى قصور حاد في وظيفة الصمام.",
      "hint2": "يتطلب تشخيصه معايير سريرية مخبرية دقيقة.",
      "hint3": "عدوى ميكروبية تصيب البطانة الداخلية للقلب أو الصمامات.",
      "pearl": "التشخيص النهائي: التهاب شغاف القلب (Endocarditis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Can cause significant structural damage resulting in acute valvular regurgitation.",
      "hint2": "Diagnosis relies on specific clinical and laboratory criteria.",
      "hint3": "Microbial infection of the internal lining of the heart or cardiac valves.",
      "pearl": "Definitive diagnosis: Endocarditis (التهاب شغاف القلب) - Core Infectious Diseases."
    }
  },
  "w134": {
    "Arabic": {
      "hint1": "يعتمد العلاج على دعم وظيفة القلب وعلاج السبب الكامن.",
      "hint2": "يعد أحد أسباب الموت المفاجئ لدى الشباب.",
      "hint3": "التهاب يصيب النسيج العضلي المسؤول عن ضخ الدم.",
      "pearl": "التشخيص النهائي: التهاب عضلة القلب (Myocarditis) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Treatment focuses on supportive care for hemodynamic stability and addressing the underlying trigger.",
      "hint2": "A known cause of sudden cardiac death in otherwise healthy young individuals.",
      "hint3": "Inflammation of the muscular layer of the heart wall.",
      "pearl": "Definitive diagnosis: Myocarditis (التهاب عضلة القلب) - Core Cardiology."
    }
  },
  "w136": {
    "Arabic": {
      "hint1": "يتميز بوجود صوت ثالث ناتج عن التدفق السريع للدم إلى البطين المتوسع.",
      "hint2": "يؤدي تمدد الحلقة المحيطة بالصمام إلى فشل الإغلاق التام أثناء الانقباض.",
      "hint3": "يؤدي إلى زيادة حجم تدفق الدم العائد إلى الأذين الأيسر خلال انقباض البطين.",
      "pearl": "التشخيص النهائي: ارتجاع الصمام الميترالي (Mitral Regurgitation) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Presence of a third heart sound often indicates significant regurgitant volume and ventricular dilation.",
      "hint2": "Dilation of the annular ring prevents complete closure of the leaflets during systole.",
      "hint3": "Causes increased volume of blood flow back into the left atrium during ventricular contraction.",
      "pearl": "Definitive diagnosis: Mitral Regurgitation (ارتجاع الصمام الميترالي) - Core Cardiology."
    }
  },
  "w139": {
    "Arabic": {
      "hint1": "يؤدي الإفراز غير المنضبط للهرمونات إلى مخاطر عالية لحدوث نوبات قلبية أو سكتات دماغية.",
      "hint2": "قد يتسبب الورم في نوبات من الهلع أو القلق الشديد دون مبرر واضح.",
      "hint3": "ورم نادر ينشأ في الغدة الكظرية ويؤدي إلى إفراز مفرط للهرمونات المسببة للتوتر.",
      "pearl": "التشخيص النهائي: ورم القواتم (Pheochromocytoma) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Uncontrolled hormone release places the patient at high risk for myocardial infarction or stroke.",
      "hint2": "Tumor activity can manifest as episodic panic attacks or severe anxiety of unexplained origin.",
      "hint3": "A rare tumor arising in the adrenal medulla that causes excessive secretion of catecholamines.",
      "pearl": "Definitive diagnosis: Pheochromocytoma (ورم القواتم) - Core Endocrinology."
    }
  },
  "w140": {
    "Arabic": {
      "hint1": "يتطلب العلاج استئصال الكتلة الموجودة في قاعدة الدماغ لخفض مستويات الهرمون.",
      "hint2": "غالباً ما يكون السبب هو وجود ورم حميد في الفص الأمامي للغدة النخامية.",
      "hint3": "اضطراب ناتج عن إفراز مفرط لهرمون النمو بعد انغلاق مشاش العظام.",
      "pearl": "التشخيص النهائي: ضخامة الأطراف (Acromegaly) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Surgical resection of the pituitary mass is the primary therapeutic goal to normalize hormone levels.",
      "hint2": "The etiology is most commonly a benign tumor located in the anterior pituitary gland.",
      "hint3": "A disorder caused by excessive secretion of growth hormone after the closure of epiphyseal plates.",
      "pearl": "Definitive diagnosis: Acromegaly (ضخامة الأطراف) - Core Endocrinology."
    }
  },
  "w141": {
    "Arabic": {
      "hint1": "يؤدي غياب القنوات المائية المعتمدة على المستقبلات في الأنابيب الجامعة إلى فقدان القدرة على حفظ السوائل.",
      "hint2": "يمكن أن يكون هذا الاضطراب ثانوياً لاستخدام بعض الأدوية مثل الليثيوم.",
      "hint3": "يتميز المرض بإخراج كميات كبيرة من البول المخفف.",
      "pearl": "التشخيص النهائي: البوال التفه (Diabetes Insipidus) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Lack of aquaporin channel translocation in the collecting ducts prevents effective water reabsorption.",
      "hint2": "This state may occur secondary to the prolonged use of specific medications such as lithium.",
      "hint3": "The condition is characterized by the excretion of large volumes of dilute urine.",
      "pearl": "Definitive diagnosis: Diabetes Insipidus (البوال التفه) - Core Endocrinology."
    }
  },
  "w142": {
    "Arabic": {
      "hint1": "يتضمن التدخل العلاجي الجراحي إزالة الغدة التي تعاني من فرط النشاط.",
      "hint2": "يظهر الفحص المخبري ارتفاعاً متزامناً في مستوى الكالسيوم وهرمون الغدة المعنية.",
      "hint3": "يؤدي هذا الاضطراب إلى اختلال في مستويات الكالسيوم في الدم.",
      "pearl": "التشخيص النهائي: نشاط جارات الدرقية (Hyperparathyroidism) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Surgical intervention involves the resection of the overactive glandular tissue.",
      "hint2": "Laboratory investigation reveals a concordant increase in both serum calcium and the specific glandular hormone.",
      "hint3": "This disorder leads to a significant imbalance in serum calcium levels.",
      "pearl": "Definitive diagnosis: Hyperparathyroidism (نشاط جارات الدرقية) - Core Endocrinology."
    }
  },
  "w144": {
    "Arabic": {
      "hint1": "يمكن أن يؤدي عدم الالتزام بالحمية إلى زيادة خطر الإصابة بأورام الغدد اللمفاوية المعوية.",
      "hint2": "تظهر خزعة الأمعاء ضموراً في الزغابات المعوية مع تضخم في الخبايا.",
      "hint3": "يحدث هذا الاضطراب نتيجة رد فعل مناعي تجاه بروتين معين موجود في الحبوب.",
      "pearl": "التشخيص النهائي: مرض سيلياك (Celiac Disease) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Failure to adhere to the dietary regimen increases the long-term risk of intestinal lymphoma.",
      "hint2": "Biopsy findings typically show villous atrophy with crypt hyperplasia.",
      "hint3": "This disorder occurs due to an immune-mediated reaction against a specific protein found in cereals.",
      "pearl": "Definitive diagnosis: Celiac Disease (مرض سيلياك) - Core Pediatrics."
    }
  },
  "w146": {
    "Arabic": {
      "hint1": "مثبطات مضخة البروتون هي العلاج الأكثر فاعلية لتقليل الحموضة.",
      "hint2": "قد تسبب تآكل مينا الأسنان بسبب الحمض الصاعد.",
      "hint3": "حالة شائعة تنتج عن ارتجاع محتويات المعدة إلى المريء.",
      "pearl": "التشخيص النهائي: ارتجاع المريء (Gastroesophageal Reflux) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Proton pump inhibitors represent the gold standard therapy for reducing gastric acidity.",
      "hint2": "Can cause dental enamel erosion due to chronic exposure to acidic gastric juice.",
      "hint3": "A common condition resulting from the retrograde flow of gastric contents into the esophagus.",
      "pearl": "Definitive diagnosis: Gastroesophageal Reflux (ارتجاع المريء) - Core Internal Medicine."
    }
  },
  "w147": {
    "Arabic": {
      "hint1": "الربط بشريط مطاطي هو إجراء علاجي شائع للحالات غير الجراحية.",
      "hint2": "قد تظهر ككتلة بارزة في منطقة الشرج تسبب حكة أو ألماً.",
      "hint3": "توسع وتورم في الأوعية الدموية الموجودة في القناة الشرجية.",
      "pearl": "التشخيص النهائي: البواسير (Hemorrhoids) - من أساسيات Surgery."
    },
    "English": {
      "hint1": "Rubber band ligation is a standard non-surgical procedural intervention.",
      "hint2": "May present as a protruding mass in the anal area causing pruritus or discomfort.",
      "hint3": "Dilated and swollen blood vessels located within the anal canal.",
      "pearl": "Definitive diagnosis: Hemorrhoids (البواسير) - Core Surgery."
    }
  },
  "w148": {
    "Arabic": {
      "hint1": "تتطلب الحالات غير القابلة للرد تدخلاً جراحياً عاجلاً لتجنب تموت الأنسجة.",
      "hint2": "يعد الانحباس والغرغرينا من المضاعفات الطارئة الخطيرة.",
      "hint3": "بروز غير طبيعي لعضو أو نسيج من خلال عيب في جدار العضلات المحيط به.",
      "pearl": "التشخيص النهائي: الفتق (Hernia) - من أساسيات Surgery."
    },
    "English": {
      "hint1": "Irreducible cases necessitate urgent surgical intervention to prevent tissue necrosis.",
      "hint2": "Incarceration and strangulation are considered critical emergency complications.",
      "hint3": "An abnormal protrusion of an organ or tissue through a defect in the surrounding muscular wall.",
      "pearl": "Definitive diagnosis: Hernia (الفتق) - Core Surgery."
    }
  },
  "w151": {
    "Arabic": {
      "hint1": "يظهر المرضى غالباً ما يعرف بالنمط الظاهري للمنتفخ الوردي أو المحتقن الأزرق.",
      "hint2": "يصبح المريض أكثر عرضة للإصابة بنوبات تفاقم حادة نتيجة العدوى التنفسية.",
      "hint3": "يرتبط المرض بشكل وثيق بالتدخين طويل الأمد وتلوث الهواء.",
      "pearl": "التشخيص النهائي: السدة الرئوية المزمنة (COPD) - من أساسيات Pulmonary."
    },
    "English": {
      "hint1": "Clinical presentations often follow the archetypes of the pink puffer or the blue bloater.",
      "hint2": "Patients are highly susceptible to acute exacerbations often triggered by respiratory infections.",
      "hint3": "This condition is strongly linked to long-term cigarette smoking and air pollution.",
      "pearl": "Definitive diagnosis: COPD (السدة الرئوية المزمنة) - Core Pulmonary."
    }
  },
  "w152": {
    "Arabic": {
      "hint1": "يعتبر الاستعمار البكتيري المزمن بالزائفة الزنجارية تحدياً علاجياً كبيراً.",
      "hint2": "يؤكد التصوير المقطعي المحوسب وجود علامة الخاتم الماسي في الرئتين.",
      "hint3": "يحدث توسع دائم وغير طبيعي في الممرات الهوائية الكبرى.",
      "pearl": "التشخيص النهائي: توسع القصبات (Bronchiectasis) - من أساسيات Pulmonary."
    },
    "English": {
      "hint1": "Chronic colonization by Pseudomonas aeruginosa represents a significant therapeutic challenge.",
      "hint2": "High-resolution computed tomography typically displays the signet-ring sign.",
      "hint3": "There is permanent and abnormal dilatation of the larger conducting airways.",
      "pearl": "Definitive diagnosis: Bronchiectasis (توسع القصبات) - Core Pulmonary."
    }
  },
  "w153": {
    "Arabic": {
      "hint1": "يؤدي انخفاض مرونة الرئة إلى اضطراب حصر وظائف التنفس.",
      "hint2": "تعد الإصابة عاملاً مستقلاً يزيد من خطر الإصابة بأورام غشاء الجنب.",
      "hint3": "تنتج الحالة عن استنشاق الألياف المعدنية المجهرية في بيئات العمل.",
      "pearl": "التشخيص النهائي: تليف الرئة بالأسبيستوس (Asbestosis) - من أساسيات Pulmonary."
    },
    "English": {
      "hint1": "Decreased pulmonary compliance leads to a classic restrictive pattern on spirometry.",
      "hint2": "The condition serves as an independent risk factor for the development of pleural malignancies.",
      "hint3": "The condition arises from the inhalation of microscopic mineral fibers in occupational settings.",
      "pearl": "Definitive diagnosis: Asbestosis (تليف الرئة بالأسبيستوس) - Core Pulmonary."
    }
  },
  "w154": {
    "Arabic": {
      "hint1": "تعتبر الرعشات العضلية اللاإرادية تحت الجلد علامة سريرية كلاسيكية.",
      "hint2": "لا يتأثر الإدراك الحسي أو الوظائف المعرفية في الغالبية العظمى من الحالات.",
      "hint3": "يؤدي المرض إلى تنكس تدريجي في الخلايا العصبية الحركية.",
      "pearl": "التشخيص النهائي: التصلب الضموري الجانبي (Amyotrophic Lateral Sclerosis) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Visible involuntary twitching of muscles under the skin is a classic clinical sign.",
      "hint2": "Sensory perception and cognitive functions are largely preserved in the vast majority of cases.",
      "hint3": "The disease leads to progressive degeneration of motor neurons.",
      "pearl": "Definitive diagnosis: Amyotrophic Lateral Sclerosis (التصلب الضموري الجانبي) - Core Neurology."
    }
  },
  "w155": {
    "Arabic": {
      "hint1": "يعتمد التشخيص النهائي على الاختبارات الجينية الجزيئية.",
      "hint2": "تشمل الاضطرابات النفسية تغيرات في الشخصية واكتئاباً حاداً.",
      "hint3": "ينتقل المرض عبر نمط وراثي جسدي سائد.",
      "pearl": "التشخيص النهائي: داء هانتينغتون (Huntington Disease) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Definitive diagnosis is established through molecular genetic testing.",
      "hint2": "Psychiatric disturbances frequently include personality changes and severe depression.",
      "hint3": "The disorder follows an autosomal dominant pattern of inheritance.",
      "pearl": "Definitive diagnosis: Huntington Disease (داء هانتينغتون) - Core Neurology."
    }
  },
  "w156": {
    "Arabic": {
      "hint1": "تتميز النوبات بزيادة ملحوظة في السلوكيات المندفعة والمخاطرة دون تقدير للعواقب",
      "hint2": "قد تؤدي فترات الانخفاض إلى فقدان الاهتمام بالأنشطة الاعتيادية والانسحاب الاجتماعي",
      "hint3": "حالة نفسية مزمنة تتميز بتقلبات مزاجية حادة بين الاكتئاب والنشاط المفرط",
      "pearl": "التشخيص النهائي: الاضطراب ثنائي القطب (Bipolar Disorder) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Clinical presentation often involves distinct periods of high-risk, impulsive behaviors without regard for consequences",
      "hint2": "Depressive phases are marked by anhedonia and profound social withdrawal",
      "hint3": "A chronic mental health condition characterized by significant shifts in mood between depression and elevated energy",
      "pearl": "Definitive diagnosis: Bipolar Disorder (الاضطراب ثنائي القطب) - Core Psychiatry."
    }
  },
  "w157": {
    "Arabic": {
      "hint1": "يرتبط الاضطراب باختلافات في توصيلات القشرة الدماغية وتطور التشابكات العصبية",
      "hint2": "تختلف شدة الأعراض بشكل واسع بين الأفراد مما يجعله طيفاً واسعاً",
      "hint3": "اضطراب نماء عصبي يظهر في مراحل الطفولة المبكرة",
      "pearl": "التشخيص النهائي: طيف التوحد (Autism) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Associated with structural and functional differences in cortical connectivity and neural pruning",
      "hint2": "Symptom severity varies significantly among affected individuals, forming a broad spectrum",
      "hint3": "A neurodevelopmental condition manifesting during early childhood",
      "pearl": "Definitive diagnosis: Autism (طيف التوحد) - Core Pediatrics."
    }
  },
  "w158": {
    "Arabic": {
      "hint1": "تؤدي العمليات الجراحية بدون تحضير مسبق إلى مضاعفات نزفية تهدد الحياة",
      "hint2": "يتم تشخيصه عادةً من خلال قياس زمن التجلط الجزئي المفعل",
      "hint3": "اضطراب وراثي يؤدي إلى خلل في عملية تخثر الدم الطبيعية",
      "pearl": "التشخيص النهائي: الهيموفيليا (Hemophilia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Surgical interventions without adequate prophylaxis carry a high risk of life-threatening hemorrhage",
      "hint2": "Diagnosis is typically supported by an isolated elevation in the activated partial thromboplastin time",
      "hint3": "An inherited disorder leading to a disruption in the physiological coagulation process",
      "pearl": "Definitive diagnosis: Hemophilia (الهيموفيليا) - Core Hematology."
    }
  },
  "w159": {
    "Arabic": {
      "hint1": "يستخدم الرحلان الكهربائي لتحديد نوع الخلل في سلاسل البروتين بدقة",
      "hint2": "قد يحتاج المريض إلى نقل دم دوري للبقاء على قيد الحياة",
      "hint3": "اضطراب دم وراثي يقلل من إنتاج بروتين الهيموجلوبين",
      "pearl": "التشخيص النهائي: الثلاسيميا (Thalassemia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Hemoglobin electrophoresis is essential for confirming the specific chain deficiency",
      "hint2": "Patients often require lifelong regular blood transfusions for survival",
      "hint3": "An inherited blood disorder that reduces the production of hemoglobin protein",
      "pearl": "Definitive diagnosis: Thalassemia (الثلاسيميا) - Core Hematology."
    }
  },
  "w160": {
    "Arabic": {
      "hint1": "يؤدي التلف التراكمي للأعضاء إلى مضاعفات مزمنة مثل نوبات الصدر الحادة",
      "hint2": "تعد الطحال من الأعضاء المتأثرة بشدة بسبب احتجاز الخلايا المنجلية",
      "hint3": "اضطراب جيني يؤثر على شكل خلايا الدم الحمراء ويجعلها صلبة",
      "pearl": "التشخيص النهائي: الأنيميا المنجلية (Sickle Cell Anemia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Cumulative organ damage manifests in chronic complications such as acute chest episodes",
      "hint2": "The spleen is particularly vulnerable due to sequestration of abnormal cells",
      "hint3": "A genetic disorder causing red blood cells to become rigid and distorted",
      "pearl": "Definitive diagnosis: Sickle Cell Anemia (الأنيميا المنجلية) - Core Hematology."
    }
  },
  "w161": {
    "Arabic": {
      "hint1": "يتم علاج الحالات المزمنة أحياناً بمثبطات كيناز التيروزين النوعية لاستهداف البروتينات المسببة للسرطان.",
      "hint2": "يمكن رؤية الخلايا غير الناضجة المنتشرة في مسحة الدم المحيطي بشكل متكرر.",
      "hint3": "يتميز هذا الاضطراب بإنتاج غير منضبط لخلايا الدم البيضاء الأولية في نخاع العظم.",
      "pearl": "التشخيص النهائي: سرطان الدم (Leukemia) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Chronic cases are sometimes treated with specific tyrosine kinase inhibitors to target oncogenic proteins.",
      "hint2": "Immature cells circulating in peripheral blood smears are frequently observed.",
      "hint3": "This disorder is characterized by the uncontrolled production of primitive white blood cells in the bone marrow.",
      "pearl": "Definitive diagnosis: Leukemia (سرطان الدم) - Core Oncology."
    }
  },
  "w162": {
    "Arabic": {
      "hint1": "قد يسبب الورم ضغطاً على الأعضاء الحيوية مثل القصبة الهوائية أو الوريد الأجوف العلوي.",
      "hint2": "يستخدم تصنيف آن أربور لتحديد مدى انتشار المرض وتطور مراحله السريرية.",
      "hint3": "يصنف هذا المرض كنمو خبيث ينشأ من الخلايا اللمفاوية في الجهاز المناعي.",
      "pearl": "التشخيص النهائي: سرطان الغدد الليمفاوية (Lymphoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "The tumor may cause pressure on vital structures such as the trachea or the superior vena cava.",
      "hint2": "The Ann Arbor staging system is used to determine the extent and clinical progression of the disease.",
      "hint3": "This condition is classified as a malignant growth arising from immune system lymphocytes.",
      "pearl": "Definitive diagnosis: Lymphoma (سرطان الغدد الليمفاوية) - Core Oncology."
    }
  },
  "w163": {
    "Arabic": {
      "hint1": "قد يتطلب العلاج زراعة ذاتية للخلايا الجذعية ومثبطات البروتيازوم.",
      "hint2": "تظهر الصور الشعاعية آفات انحلالية تشبه الثقوب في الجمجمة والعظام الطويلة.",
      "hint3": "يتميز هذا الاضطراب الخبيث بتكاثر مفرط لخلايا البلازما في نخاع العظم.",
      "pearl": "التشخيص النهائي: سرطان نخاع العظم (Multiple Myeloma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Treatment may require autologous stem cell transplantation and proteasome inhibitors.",
      "hint2": "Radiographic imaging typically reveals lytic lesions that appear as punched-out defects in the skull and long bones.",
      "hint3": "This malignant disorder is characterized by excessive proliferation of plasma cells in the bone marrow.",
      "pearl": "Definitive diagnosis: Multiple Myeloma (سرطان نخاع العظم) - Core Oncology."
    }
  },
  "w164": {
    "Arabic": {
      "hint1": "يعتبر تراكم السوائل في التجويف البريتوني من المضاعفات المحتملة في الحالات الشديدة.",
      "hint2": "يؤدي فقدان مضادات التخثر الطبيعية في البول إلى زيادة خطر حدوث تجلطات وريدية.",
      "hint3": "يتميز هذا الاضطراب السريري بفقدان كميات كبيرة من البروتين عبر البول.",
      "pearl": "التشخيص النهائي: المتلازمة الكلوية (Nephrotic Syndrome) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Accumulation of fluid in the peritoneal cavity is a potential complication in severe cases.",
      "hint2": "The loss of natural anticoagulants in urine increases the risk of venous thrombosis.",
      "hint3": "This clinical disorder is characterized by the loss of massive amounts of protein in the urine.",
      "pearl": "Definitive diagnosis: Nephrotic Syndrome (المتلازمة الكلوية) - Core Pediatrics."
    }
  },
  "w165": {
    "Arabic": {
      "hint1": "يتم العلاج باستخدام مضادات حيوية واسعة الطيف يتم تعديلها حسب نتائج المزرعة.",
      "hint2": "تكشف تحاليل البول وجود خلايا صديدية واسطوانات بيضاء دقيقة.",
      "hint3": "هو التهاب بكتيري يصيب حويض الكلية والأنسجة الكلوية الخلالية.",
      "pearl": "التشخيص النهائي: التهاب حوض الكلية (Pyelonephritis) - من أساسيات Urology."
    },
    "English": {
      "hint1": "Treatment involves broad-spectrum antibiotics, which are adjusted based on culture results.",
      "hint2": "Urinalysis reveals the presence of pus cells and white blood cell casts.",
      "hint3": "This is a bacterial infection affecting the renal pelvis and interstitial renal tissues.",
      "pearl": "Definitive diagnosis: Pyelonephritis (التهاب حوض الكلية) - Core Urology."
    }
  },
  "w166": {
    "Arabic": {
      "hint1": "يظهر في التصوير بالرنين المغناطيسي كاستسقاء في الحويضة الكلوية مع ضمور القشرة.",
      "hint2": "يسبب ألمًا في الخاصرة مع احتمال حدوث عدوى ثانوية.",
      "hint3": "يؤدي إلى توسع الجهاز المفرغ للكلى نتيجة انسداد تدفق البول.",
      "pearl": "التشخيص النهائي: استسقاء الكلية (Hydronephrosis) - من أساسيات Urology."
    },
    "English": {
      "hint1": "Magnetic resonance imaging reveals pelvicalyceal distention with cortical thinning.",
      "hint2": "Clinically presents with flank pain and potential secondary infection.",
      "hint3": "Leads to dilatation of the renal collecting system due to obstruction of urine outflow.",
      "pearl": "Definitive diagnosis: Hydronephrosis (استسقاء الكلية) - Core Urology."
    }
  },
  "w167": {
    "Arabic": {
      "hint1": "يظهر تضخماً في الغدد الليمفاوية مع تقرحات في الأغشية المخاطية للفم.",
      "hint2": "قد يسبب قصوراً كلوياً نتيجة ترسب المعقدات المناعية في الكبيبات.",
      "hint3": "اضطراب مناعي ذاتي متعدد الأجهزة يؤثر على أعضاء مختلفة.",
      "pearl": "التشخيص النهائي: الذئبة الحمراء (Systemic Lupus) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Presents with lymphadenopathy and oral mucosal ulcerations.",
      "hint2": "May lead to renal failure due to immune complex deposition in the glomeruli.",
      "hint3": "A multisystem autoimmune disorder affecting various organ systems.",
      "pearl": "Definitive diagnosis: Systemic Lupus (الذئبة الحمراء) - Core Rheumatology."
    }
  },
  "w168": {
    "Arabic": {
      "hint1": "تؤدي النتوءات العظمية إلى تشوهات ملموسة في المفاصل المحيطية.",
      "hint2": "يصيب مفاصل الأصابع البعيدة بشكل شائع.",
      "hint3": "حالة تنكسية تسبب تآكل الغضاريف المفصلية.",
      "pearl": "التشخيص النهائي: خشونة المفاصل (Osteoarthritis) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Osteophytes lead to palpable deformities in the peripheral joints.",
      "hint2": "Commonly affects the distal interphalangeal joints.",
      "hint3": "A degenerative condition causing the erosion of articular cartilage.",
      "pearl": "Definitive diagnosis: Osteoarthritis (خشونة المفاصل) - Core Rheumatology."
    }
  },
  "w169": {
    "Arabic": {
      "hint1": "يؤدي في النهاية إلى فقدان كامل لمرونة العمود الفقري.",
      "hint2": "قد يؤدي إلى تشوه العمود الفقري في شكل انحناء ظهري مبالغ فيه.",
      "hint3": "التهاب مزمن يؤثر بشكل رئيسي على العمود الفقري والمفاصل الحرقفية.",
      "pearl": "التشخيص النهائي: التهاب الفقار المقسط (Ankylosing Spondylitis) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Ultimately results in the complete loss of spinal mobility.",
      "hint2": "May result in spinal deformity characterized by exaggerated thoracic kyphosis.",
      "hint3": "A chronic inflammatory condition primarily affecting the spine and sacroiliac joints.",
      "pearl": "Definitive diagnosis: Ankylosing Spondylitis (التهاب الفقار المقسط) - Core Rheumatology."
    }
  },
  "w170": {
    "Arabic": {
      "hint1": "يعاني المرضى من انخفاض عتبة تحمل المؤثرات المؤلمة.",
      "hint2": "يعتبر اضطراباً في معالجة الألم داخل الجهاز العصبي المركزي.",
      "hint3": "حالة مزمنة تتميز بانتشار الألم في الجهاز العضلي الهيكلي.",
      "pearl": "التشخيص النهائي: الألم العضلي الليفي (Fibromyalgia) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Patients exhibit a lowered threshold for painful stimuli.",
      "hint2": "Considered a disorder of central pain processing in the nervous system.",
      "hint3": "A chronic condition characterized by widespread musculoskeletal pain.",
      "pearl": "Definitive diagnosis: Fibromyalgia (الألم العضلي الليفي) - Core Rheumatology."
    }
  },
  "w171": {
    "Arabic": {
      "hint1": "تتضمن الأنماط السريرية النوع المنتشر سطحياً، العقدي، والعدسي الخبيث.",
      "hint2": "تعد المرحلة السريرية وعمق الغزو وفقًا لمقياس بريسلو محددات هامة للإنذار.",
      "hint3": "يعد أحد أكثر أشكال سرطان الجلد عدوانية وخطورة.",
      "pearl": "التشخيص النهائي: الميلانوما (Melanoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Clinical subtypes include superficial spreading, nodular, and lentigo maligna.",
      "hint2": "Staging and depth of invasion according to the Breslow scale are critical prognostic factors.",
      "hint3": "It is considered one of the most aggressive and dangerous forms of skin malignancy.",
      "pearl": "Definitive diagnosis: Melanoma (الميلانوما) - Core Oncology."
    }
  },
  "w172": {
    "Arabic": {
      "hint1": "تعتمد التوقعات المستقبلية على مدى شمولية المنطقة المتأثرة.",
      "hint2": "قد تظهر علامات مميزة مثل الشعر بشكل علامة التعجب عند الحواف.",
      "hint3": "يتميز بفقدان مفاجئ وموضعي للشعر في مناطق محددة من الجسم.",
      "pearl": "التشخيص النهائي: الثعلبة (Alopecia Areata) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Prognosis is generally dependent on the extent of the body surface area involved.",
      "hint2": "Exclamation point hairs may be visible at the margins of the affected areas.",
      "hint3": "It is characterized by sudden, localized loss of hair in specific body regions.",
      "pearl": "Definitive diagnosis: Alopecia Areata (الثعلبة) - Core Dermatology."
    }
  },
  "w173": {
    "Arabic": {
      "hint1": "تتضمن الأبحاث الحديثة مثبطات JAK كخيار علاجي واعد.",
      "hint2": "تظهر الآفات غالباً بشكل متناظر على جانبي الجسم.",
      "hint3": "تظهر الحالة على شكل بقع جلدية بيضاء فاقدة للصبغة الطبيعية.",
      "pearl": "التشخيص النهائي: البهاق (Vitiligo) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Recent research has identified JAK inhibitors as a promising therapeutic option.",
      "hint2": "Lesions frequently appear in a symmetric distribution on both sides of the body.",
      "hint3": "The condition presents as white patches on the skin lacking natural pigmentation.",
      "pearl": "Definitive diagnosis: Vitiligo (البهاق) - Core Dermatology."
    }
  },
  "w174": {
    "Arabic": {
      "hint1": "يُستخدم أحياناً جهاز إلغاء الضوضاء لتشتيت الانتباه عن الصوت الداخلي.",
      "hint2": "قد يكون ناتجاً عن التعرض المتكرر للأصوات العالية جداً.",
      "hint3": "يُعرف بإدراك صوت في الأذن أو الرأس في غياب مصدر صوت خارجي.",
      "pearl": "التشخيص النهائي: طنين الأذن (Tinnitus) - من أساسيات ENT."
    },
    "English": {
      "hint1": "Sound masking devices are sometimes used to redirect attention from the internal noise.",
      "hint2": "It may result from repeated exposure to high-intensity noise environments.",
      "hint3": "It is defined as the perception of sound in the ear or head in the absence of an external source.",
      "pearl": "Definitive diagnosis: Tinnitus (طنين الأذن) - Core ENT."
    }
  },
  "w196": {
    "Arabic": {
      "hint1": "تعتمد الوقاية بشكل أساسي على التطعيم الدوري بلقاح الذيفان المضعف.",
      "hint2": "تعد الإصابة بالجروح العميقة الملوثة بالصدأ أو الأجسام المعدنية عامل خطر رئيسي.",
      "hint3": "عدوى بكتيرية حادة تصيب الجهاز العصبي وتؤدي إلى تشنجات عضلية شديدة.",
      "pearl": "التشخيص النهائي: الكزاز (Tetanus) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Prevention relies heavily on regular active immunization with toxoid vaccines.",
      "hint2": "Deep puncture wounds contaminated with soil or metal objects are primary risk factors.",
      "hint3": "An acute bacterial infection affecting the nervous system resulting in severe muscle spasms.",
      "pearl": "Definitive diagnosis: Tetanus (الكزاز) - Core Infectious Diseases."
    }
  },
  "w197": {
    "Arabic": {
      "hint1": "يعد البروتوكول العلاجي الوقائي فور التعرض للعضة حيوياً لمنع تطور المرض.",
      "hint2": "يعد النفور الشديد من الماء أو محاولة الشرب علامة سريرية كلاسيكية.",
      "hint3": "عدوى فيروسية حيوانية المنشأ تؤثر بشكل رئيسي على الجهاز العصبي المركزي.",
      "pearl": "التشخيص النهائي: داء الكلب (Rabies) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Post-exposure prophylaxis protocols are critical immediately after the bite occurs.",
      "hint2": "Extreme aversion to water or attempts to drink is a hallmark clinical sign.",
      "hint3": "A zoonotic viral infection that primarily affects the central nervous system.",
      "pearl": "Definitive diagnosis: Rabies (داء الكلب) - Core Infectious Diseases."
    }
  },
  "w198": {
    "Arabic": {
      "hint1": "تترك أثراً مزمناً يتمثل في تغيرات في حجم البؤبؤ وعدم استجابته للضوء.",
      "hint2": "يمكن أن تؤدي الإصابة غير المعالجة إلى اضطرابات عصبية حادة في الجهاز العصبي المركزي.",
      "hint3": "عدوى بكتيرية تنتقل بشكل أساسي عن طريق الاتصال الجنسي المباشر.",
      "pearl": "التشخيص النهائي: الزهري (Syphilis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "It can leave a chronic sign represented by pupils that react to accommodation but not light.",
      "hint2": "Untreated infection can lead to severe neurological involvement in the central nervous system.",
      "hint3": "A bacterial infection transmitted primarily through direct sexual contact.",
      "pearl": "Definitive diagnosis: Syphilis (الزهري) - Core Infectious Diseases."
    }
  },
  "w199": {
    "Arabic": {
      "hint1": "يُنصح دائماً بفحص وعلاج الشركاء الجنسيين لمنع إعادة العدوى.",
      "hint2": "يتم التشخيص مخبرياً عبر مسحات مأخوذة من المناطق المصابة.",
      "hint3": "عدوى بكتيرية شائعة تنتقل بالاتصال الجنسي وتصيب الأغشية المخاطية.",
      "pearl": "التشخيص النهائي: السيلان (Gonorrhea) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Partner notification and treatment are essential to prevent reinfection.",
      "hint2": "Diagnosis is confirmed through laboratory culture or molecular testing of swabs.",
      "hint3": "A common bacterial infection transmitted sexually that affects mucosal surfaces.",
      "pearl": "Definitive diagnosis: Gonorrhea (السيلان) - Core Infectious Diseases."
    }
  },
  "w200": {
    "Arabic": {
      "hint1": "تعتبر مراقبة مصادر المياه ومعالجة الصرف الصحي الركيزة الأساسية للوقاية.",
      "hint2": "التدخل العلاجي الأساسي هو الإماهة الفموية أو الوريدية السريعة.",
      "hint3": "عدوى معوية حادة تسببها بكتيريا تفرز سموماً تؤثر على الأمعاء الدقيقة.",
      "pearl": "التشخيص النهائي: الكوليرا (Cholera) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Monitoring water sources and sewage treatment are the cornerstones of prevention.",
      "hint2": "The primary therapeutic intervention is rapid oral or intravenous rehydration.",
      "hint3": "An acute intestinal infection caused by bacteria secreting toxins that affect the small intestine.",
      "pearl": "Definitive diagnosis: Cholera (الكوليرا) - Core Infectious Diseases."
    }
  },
  "w201": {
    "Arabic": {
      "hint1": "تظهر الأجسام المجهرية المميزة داخل الخلايا البلعمية",
      "hint2": "تؤدي الأنواع الحشوية إلى تضخم كبير في الكبد والطحال",
      "hint3": "تنتقل العدوى عن طريق لدغة أنثى ذبابة الرمل المصابة",
      "pearl": "التشخيص النهائي: الليشمانيا (Leishmaniasis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Characteristic intracellular bodies are visible within macrophages",
      "hint2": "Visceral forms lead to significant hepatosplenomegaly",
      "hint3": "Transmission occurs through the bite of an infected female sandfly",
      "pearl": "Definitive diagnosis: Leishmaniasis (الليشمانيا) - Core Infectious Diseases."
    }
  },
  "w202": {
    "Arabic": {
      "hint1": "تعتبر العيادات المهنية والبيطرية مراكز خطورة عالية للإصابة",
      "hint2": "تظهر في شكل بكتيريا سالبة الجرام صغيرة الحجم",
      "hint3": "ترتبط العدوى عادة بالتعامل مع الحيوانات المصابة أو استهلاك منتجات الألبان غير المبسترة",
      "pearl": "التشخيص النهائي: الحمى المالطية (Brucellosis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Occupational exposure in veterinary and laboratory settings is a major risk factor",
      "hint2": "Manifests as small gram-negative coccobacilli",
      "hint3": "Infection is typically associated with exposure to infected animals or unpasteurized dairy products",
      "pearl": "Definitive diagnosis: Brucellosis (الحمى المالطية) - Core Infectious Diseases."
    }
  },
  "w203": {
    "Arabic": {
      "hint1": "تتميز الحالة بغياب الحمى والحفاظ على الوعي التام",
      "hint2": "تؤدي الحالات الشديدة إلى فشل تنفسي نتيجة شلل عضلات الصدر",
      "hint3": "تحدث الإصابة نتيجة تناول أطعمة ملوثة بسموم خارجية تفرزها جراثيم لاهوائية",
      "pearl": "التشخيص النهائي: التسمم السجقي (Botulism) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Characterized by the absence of fever and preservation of consciousness",
      "hint2": "Severe cases progress to respiratory failure due to paralysis of thoracic muscles",
      "hint3": "Caused by ingestion of food contaminated with potent exotoxins produced by anaerobic bacteria",
      "pearl": "Definitive diagnosis: Botulism (التسمم السجقي) - Core Infectious Diseases."
    }
  },
  "w204": {
    "Arabic": {
      "hint1": "يؤدي إلى التهاب في الأغشية المخاطية للفم واللسان الذي يشبه ثمرة الفراولة",
      "hint2": "تظهر الأطراف بتورم واحمرار يتلوه تقشر في أطراف الأصابع",
      "hint3": "تعد سبباً رئيسياً لأمراض القلب المكتسبة لدى الأطفال في الدول المتقدمة",
      "pearl": "التشخيص النهائي: مرض كاواساكي (Kawasaki Disease) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Causes mucositis of the oral cavity and a characteristic strawberry-like tongue appearance",
      "hint2": "Extremities exhibit edema and redness followed by periungual desquamation",
      "hint3": "Represents a leading cause of acquired heart disease in children within developed nations",
      "pearl": "Definitive diagnosis: Kawasaki Disease (مرض كاواساكي) - Core Pediatrics."
    }
  },
  "w205": {
    "Arabic": {
      "hint1": "تكون القدرات العقلية لدى المصابات غالباً ضمن النطاق الطبيعي",
      "hint2": "تترافق الإصابة غالباً مع عيوب قلبية خلقية مثل تضيق برزخ الأبهر",
      "hint3": "تنتج الحالة عن فقدان كامل أو جزئي لكروموسوم إكس لدى الإناث",
      "pearl": "التشخيص النهائي: متلازمة تيرنر (Turner Syndrome) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Cognitive abilities are typically within the normal range",
      "hint2": "Commonly associated with congenital cardiac anomalies such as coarctation of the aorta",
      "hint3": "Results from the complete or partial absence of an X chromosome in females",
      "pearl": "Definitive diagnosis: Turner Syndrome (متلازمة تيرنر) - Core Pediatrics."
    }
  },
  "w206": {
    "Arabic": {
      "hint1": "النمط النووي المكتشف هو 47,XXY.",
      "hint2": "توزيع دهون الجسم يميل للنمط الأنثوي.",
      "hint3": "اضطراب جيني ناتج عن وجود نسخة إضافية من الصبغي الجنسي.",
      "pearl": "التشخيص النهائي: متلازمة كلاينفلتر (Klinefelter Syndrome) - من أساسيات Genetics."
    },
    "English": {
      "hint1": "The standard karyotype analysis reveals a 47,XXY configuration.",
      "hint2": "Adipose tissue distribution often follows a gynoid pattern.",
      "hint3": "Genetic disorder characterized by the presence of an extra sex chromosome.",
      "pearl": "Definitive diagnosis: Klinefelter Syndrome (متلازمة كلاينفلتر) - Core Genetics."
    }
  },
  "w207": {
    "Arabic": {
      "hint1": "كان يصيب البحارة قديماً نتيجة غياب الأغذية الطازجة.",
      "hint2": "يسبب آلاماً مفصلية شديدة وتورماً في الأطراف.",
      "hint3": "ينتج عن نقص حاد في فيتامين ضروري لتركيب الكولاجين.",
      "pearl": "التشخيص النهائي: الإسقربوط (Scurvy) - من أساسيات Biochemistry."
    },
    "English": {
      "hint1": "Historically common in sailors due to the absence of fresh produce in the diet.",
      "hint2": "Causes significant arthralgia and extremity swelling.",
      "hint3": "Caused by a severe deficiency of a vitamin essential for collagen synthesis.",
      "pearl": "Definitive diagnosis: Scurvy (الإسقربوط) - Core Biochemistry."
    }
  },
  "w208": {
    "Arabic": {
      "hint1": "يُلاحظ وجود تشوهات في الفقرات والعمود الفقري.",
      "hint2": "يظهر بروز في عظمة الصدر بشكل ملحوظ.",
      "hint3": "حالة مرضية تصيب العظام خلال مرحلة النمو نتيجة نقص فيتامين حيوي.",
      "pearl": "التشخيص النهائي: الكساح (Rickets) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Vertebral deformities and spinal curvatures are commonly observed.",
      "hint2": "Displays a prominent protrusion of the sternum.",
      "hint3": "Pathological condition affecting bones during development due to a critical vitamin deficiency.",
      "pearl": "Definitive diagnosis: Rickets (الكساح) - Core Pediatrics."
    }
  },
  "w209": {
    "Arabic": {
      "hint1": "يتم علاجه بتعويض فيتامين ب3.",
      "hint2": "يؤدي إلى تقرحات مؤلمة في اللسان والفم.",
      "hint3": "ينتج عن نقص حاد في النياسين أو تريبتوفان.",
      "pearl": "التشخيص النهائي: البلاغرا (Pellagra) - من أساسيات Biochemistry."
    },
    "English": {
      "hint1": "Managed through therapeutic supplementation of vitamin B3.",
      "hint2": "Leads to painful ulcerations of the tongue and oral mucosa.",
      "hint3": "Caused by a profound deficiency of niacin or its precursor tryptophan.",
      "pearl": "Definitive diagnosis: Pellagra (البلاغرا) - Core Biochemistry."
    }
  },
  "w210": {
    "Arabic": {
      "hint1": "يعمل الفيتامين المفقود كعامل مرافق أساسي في استقلاب الكربوهيدرات.",
      "hint2": "يرتبط استهلاك الكحول المزمن بزيادة مخاطر الإصابة به.",
      "hint3": "ينتج عن نقص حاد في فيتامين ب1.",
      "pearl": "التشخيص النهائي: البري بري (Beriberi) - من أساسيات Biochemistry."
    },
    "English": {
      "hint1": "The deficient vitamin serves as a crucial cofactor in carbohydrate metabolism.",
      "hint2": "Chronic alcohol consumption is a major predisposing factor.",
      "hint3": "Results from a severe deficiency of vitamin B1.",
      "pearl": "Definitive diagnosis: Beriberi (البري بري) - Core Biochemistry."
    }
  },
  "w211": {
    "Arabic": {
      "hint1": "يعتبر من عوامل الوقاية الطبيعية ضد الإصابة الشديدة بمرض الملاريا.",
      "hint2": "تنتج الحالة عن طفرات تقلل من كفاءة مسار فوسفات البنتوز.",
      "hint3": "اضطراب وراثي مرتبط بالكروموسوم إكس يؤدي إلى خلل في استقلاب الكربوهيدرات داخل كريات الدم الحمراء.",
      "pearl": "التشخيص النهائي: أنيميا الفول (G6PD Deficiency) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Considered a protective factor against severe forms of malaria infection.",
      "hint2": "Results from mutations that reduce the efficiency of the pentose phosphate pathway.",
      "hint3": "An X-linked genetic disorder that impairs carbohydrate metabolism within erythrocytes.",
      "pearl": "Definitive diagnosis: G6PD Deficiency (أنيميا الفول) - Core Hematology."
    }
  },
  "w212": {
    "Arabic": {
      "hint1": "تميل الحالة للظهور بشكل أكبر في المواليد الذكور بكر الولادة.",
      "hint2": "تؤدي إلى اضطراب حمضي قاعدي يتميز بنقص الكلوريد في الدم.",
      "hint3": "تحدث نتيجة تضخم عضلي في المخرج المعدي مما يعيق مرور الطعام.",
      "pearl": "التشخيص النهائي: تضيق البواب (Pyloric Stenosis) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Shows a strong predilection for first-born male infants.",
      "hint2": "Leads to a specific acid-base disturbance characterized by hypochloremia.",
      "hint3": "Occurs due to muscular hypertrophy at the gastric outlet that obstructs food passage.",
      "pearl": "Definitive diagnosis: Pyloric Stenosis (تضيق البواب) - Core Pediatrics."
    }
  },
  "w213": {
    "Arabic": {
      "hint1": "التأخر في التشخيص قد يؤدي إلى نقص تروية الأمعاء وتنخرها.",
      "hint2": "تُشخص وتُعالج غالباً باستخدام الحقنة الشرجية الهوائية أو الملونة.",
      "hint3": "حالة طارئة تحدث نتيجة تداخل جزء من الأمعاء داخل جزء آخر.",
      "pearl": "التشخيص النهائي: انغلاف الأمعاء (Intussusception) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Delayed recognition can lead to bowel ischemia and necrosis.",
      "hint2": "Frequently diagnosed and treated using pneumatic or contrast enemas.",
      "hint3": "An acute emergency where one segment of the bowel slides into an adjacent segment.",
      "pearl": "Definitive diagnosis: Intussusception (انغلاف الأمعاء) - Core Pediatrics."
    }
  },
  "w231": {
    "Arabic": {
      "hint1": "المسؤول عن أكثر من نصف مليون حالة وفاة سنوياً خاصة في أفريقيا.",
      "hint2": "يستهدف كرات الدم الحمراء ويسبب انفجارها الدوري (التحلل الدموي).",
      "hint3": "مرض مداري شهير تسببه بروتوزوا وحيدة الخلية تنتقل عبر البعوض.",
      "pearl": "التشخيص النهائي: الملاريا (Malaria) - من أساسيات Parasitology."
    },
    "English": {
      "hint1": "Causes over half a million deaths annually, particularly in Sub-Saharan Africa.",
      "hint2": "Invades and replicates inside red blood cells, causing periodic hemolysis.",
      "hint3": "A famous tropical disease caused by a protozoan parasite transmitted by mosquitoes.",
      "pearl": "Definitive diagnosis: Malaria (الملاريا) - Core Parasitology."
    }
  },
  "w241": {
    "Arabic": {
      "hint1": "تستمر الحكة لعدة أسابيع بعد العلاج الناجح بسبب بقايا الطفيل الميتة بالجلد (حساسية هذا المرض).",
      "hint2": "المناطق المفضلة للإصابة تشمل بين الأصابع، ثنايا الرسغ، الإبطين، وحول السرة.",
      "hint3": "مرض جلدي طفيلي معدي وشديد الانتشار يسببه سوس مجهري يحفر خنادق بالبشرة.",
      "pearl": "التشخيص النهائي: الجرب (Scabies) - من أساسيات Parasitology."
    },
    "English": {
      "hint1": "Post-scabietic itch can persist for several weeks after successful eradication due to hypersensitivity.",
      "hint2": "Predilection sites include interdigital webs, flexor wrists, axillae, beltline, and periumbilical area.",
      "hint3": "A highly contagious parasitic skin infestation caused by the microscopic itch mite.",
      "pearl": "Definitive diagnosis: Scabies (الجرب) - Core Parasitology."
    }
  },
  "w263": {
    "Arabic": {
      "hint1": "تتغير التوقيتات السمعية بناءً على حجم البطين الأيسر أثناء الدورة القلبية.",
      "hint2": "تزداد شدة الصوت عند إجراء مناورة فالسلفا بسبب تقليل العائد الوريدي.",
      "hint3": "حالة شائعة تصيب الصمام الموجود بين الأذين الأيسر والبطين الأيسر.",
      "pearl": "التشخيص النهائي: ارتخاء الصمام الميترالي (Mitral Valve Prolapse) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Auscultatory findings shift based on left ventricular volume during the cardiac cycle.",
      "hint2": "Intensity increases during the Valsalva maneuver due to decreased venous return.",
      "hint3": "A common condition affecting the structure separating the left atrium and left ventricle.",
      "pearl": "Definitive diagnosis: Mitral Valve Prolapse (ارتخاء الصمام الميترالي) - Core Cardiology."
    }
  },
  "w264": {
    "Arabic": {
      "hint1": "تنتج عن تفاعل عوامل التخثر، ركود الدم، وتضرر بطانة الأوعية، المعروفة بثالوث فيرشو.",
      "hint2": "تُعد مادة داي-ديمر (D-dimer) مؤشراً مخبرياً حساساً لاستبعاد التشخيص.",
      "hint3": "تكون جلطة دموية داخل الأوردة العميقة، غالباً في الأطراف السفلية.",
      "pearl": "التشخيص النهائي: جلطة الأوردة العميقة (Deep Vein Thrombosis) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Arises from the interaction of stasis, hypercoagulability, and endothelial injury, known as Virchow's triad.",
      "hint2": "D-dimer is a highly sensitive laboratory marker used to rule out the diagnosis.",
      "hint3": "Formation of a blood clot within deep veins, most commonly in the lower extremities.",
      "pearl": "Definitive diagnosis: Deep Vein Thrombosis (جلطة الأوردة العميقة) - Core Cardiology."
    }
  },
  "w265": {
    "Arabic": {
      "hint1": "يُلاحظ غياب التغيرات النسيجية الدائمة في النوع الأولي.",
      "hint2": "قد يشكو المريض من تنميل أو خدر أثناء النوبة.",
      "hint3": "اضطراب وعائي يؤثر على تدفق الدم إلى الأطراف استجابةً للبرد أو التوتر.",
      "pearl": "التشخيص النهائي: ظاهرة رينود (Raynaud's Phenomenon) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Permanent tissue changes are typically absent in the primary form.",
      "hint2": "Patients often report numbness or paresthesia during an acute episode.",
      "hint3": "Vascular disorder affecting blood flow to extremities in response to cold or stress.",
      "pearl": "Definitive diagnosis: Raynaud's Phenomenon (ظاهرة رينود) - Core Rheumatology."
    }
  },
  "w266": {
    "Arabic": {
      "hint1": "يتميز بوجود علامة رينو في بدايته كعرض إضافي.",
      "hint2": "تظهر الخزعة النسيجية التهاباً وعائياً مع تجلط في تجويف الوعاء.",
      "hint3": "اضطراب وعائي التهابي مزمن يصيب الشرايين والأوردة الصغيرة والمتوسطة.",
      "pearl": "التشخيص النهائي: مرض بورجر (Buerger's Disease) - من أساسيات Vascular Surgery."
    },
    "English": {
      "hint1": "Often presents with vasospastic symptoms in the early stages.",
      "hint2": "Histopathology reveals inflammatory infiltrates with thrombus formation in the lumen.",
      "hint3": "Chronic inflammatory vascular disorder affecting small and medium-sized arteries and veins.",
      "pearl": "Definitive diagnosis: Buerger's Disease (مرض بورجر) - Core Vascular Surgery."
    }
  },
  "w267": {
    "Arabic": {
      "hint1": "تؤدي إلى انخفاض النتاج القلبي بشكل حاد وخطير.",
      "hint2": "يظهر تخطيط القلب الكهربائي انخفاضاً في الجهد الكهربائي.",
      "hint3": "تجمع سائل في الجيب المحيط بالقلب مما يضغط على الحجرات القلبية.",
      "pearl": "التشخيص النهائي: اندحاس قلبي (Cardiac Tamponade) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Leads to a severe and critical reduction in cardiac output.",
      "hint2": "Electrocardiogram typically demonstrates low voltage complexes.",
      "hint3": "Fluid accumulation within the sac surrounding the heart, compressing cardiac chambers.",
      "pearl": "Definitive diagnosis: Cardiac Tamponade (اندحاس قلبي) - Core Cardiology."
    }
  },
  "w268": {
    "Arabic": {
      "hint1": "تتميز الفئة الضخامية بزيادة سماكة جدار البطين الأيسر، مما قد يسبب انسداد مخرج الدم.",
      "hint2": "يتم التشخيص غالباً باستخدام تخطيط صدى القلب لتقييم حركة الجدران وقوة الضخ.",
      "hint3": "مجموعة من الاضطرابات التي تؤدي إلى تغيرات هيكلية ووظيفية في عضلات القلب.",
      "pearl": "التشخيص النهائي: اعتلال عضلة القلب (Cardiomyopathy) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "The hypertrophic form involves increased thickness of the left ventricular wall, potentially obstructing outflow.",
      "hint2": "Diagnosis frequently involves echocardiography to assess wall motion and pumping capacity.",
      "hint3": "A group of disorders leading to structural and functional changes in the heart muscle.",
      "pearl": "Definitive diagnosis: Cardiomyopathy (اعتلال عضلة القلب) - Core Cardiology."
    }
  },
  "w269": {
    "Arabic": {
      "hint1": "تتطلب الخطة العلاجية دورات طويلة من المضادات الحيوية الوريدية المكثفة.",
      "hint2": "يتم تأكيد التشخيص من خلال مزارع الدم المتكررة وتصوير القلب بالأمواج فوق الصوتية.",
      "hint3": "عدوى ميكروبية تصيب البطانة الداخلية للقلب أو الصمامات القلبية.",
      "pearl": "التشخيص النهائي: التهاب الشغاف الإنتاني (Infective Endocarditis) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "Management requires prolonged courses of high-dose intravenous antibiotic therapy.",
      "hint2": "Diagnosis is confirmed through serial blood cultures and echocardiographic imaging.",
      "hint3": "A microbial infection involving the inner lining of the heart or the cardiac valves.",
      "pearl": "Definitive diagnosis: Infective Endocarditis (التهاب الشغاف الإنتاني) - Core Cardiology."
    }
  },
  "w270": {
    "Arabic": {
      "hint1": "غالباً ما يكون النسبة بين انقباضات الأذين والبطين ثابتة، مثل اثنين إلى واحد.",
      "hint2": "يمكن أن يؤدي إلى أعراض مثل خفقان القلب والدوار ونقص القدرة على التحمل البدني.",
      "hint3": "نوع من أنواع اضطرابات نظم القلب التسرعي المنشأ من الأذينين.",
      "pearl": "التشخيص النهائي: الرفرفة الأذينية (Atrial Flutter) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "The conduction ratio between the atria and ventricles is often fixed, such as two-to-one.",
      "hint2": "Can cause symptoms such as palpitations, dizziness, and reduced physical stamina.",
      "hint3": "A type of supraventricular tachycardia originating from the atria.",
      "pearl": "Definitive diagnosis: Atrial Flutter (الرفرفة الأذينية) - Core Cardiology."
    }
  },
  "w271": {
    "Arabic": {
      "hint1": "يمكن إجراء تدخل جراحي أو قسطري لإغلاق الوعاء بشكل دائم عند فشل الأدوية.",
      "hint2": "يتميز النبض المحيطي بكونه نابضاً بقوة، مما يعكس اتساع ضغط النبض.",
      "hint3": "حالة قلبية وعائية تحدث نتيجة فشل القناة الوعائية الجنينية في الانغلاق بعد الولادة.",
      "pearl": "التشخيص النهائي: القناة الشريانية المفتوحة (Patent Ductus Arteriosus) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Surgical or catheter-based interventions are performed for permanent closure when medication fails.",
      "hint2": "Peripheral pulses are typically bounding, reflecting a widened pulse pressure.",
      "hint3": "A cardiovascular condition resulting from the failure of a fetal vessel to close after birth.",
      "pearl": "Definitive diagnosis: Patent Ductus Arteriosus (القناة الشريانية المفتوحة) - Core Pediatrics."
    }
  },
  "w272": {
    "Arabic": {
      "hint1": "تتنوع الخيارات العلاجية بين الليزر أو الترددات الراديوية أو الاستئصال الجراحي.",
      "hint2": "يؤدي الركود الوريدي المستمر إلى تغيرات في تصبغ الجلد وتصلب الأنسجة.",
      "hint3": "حالة شائعة تتميز بتوسع وتعرج الأوردة السطحية في الساقين.",
      "pearl": "التشخيص النهائي: دوالي الساقين (Varicose Veins) - من أساسيات Vascular Surgery."
    },
    "English": {
      "hint1": "Treatment options include endovenous laser, radiofrequency ablation, or surgical stripping.",
      "hint2": "Persistent venous stasis leads to skin pigmentation changes and tissue induration.",
      "hint3": "A common condition characterized by dilated and tortuous superficial veins in the legs.",
      "pearl": "Definitive diagnosis: Varicose Veins (دوالي الساقين) - Core Vascular Surgery."
    }
  },
  "w273": {
    "Arabic": {
      "hint1": "يتم التركيز في الإدارة طويلة الأمد على التحكم في ضغط الدم والكوليسترول وتناول مضادات التجمع الصفيحي.",
      "hint2": "تنتج الأعراض عن انسداد وعائي مؤقت دون حدوث نخر نسيجي دائم.",
      "hint3": "تحدث نوبة عصبية مؤقتة ناتجة عن اضطراب تروية الدم في الدماغ.",
      "pearl": "التشخيص النهائي: النوبة الإقفارية العابرة (Transient Ischemic Attack) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Long-term management focuses on blood pressure control, lipid management, and antiplatelet therapy.",
      "hint2": "Pathophysiology involves temporary vascular occlusion without permanent tissue infarction.",
      "hint3": "This event involves a temporary focal neurological deficit caused by impaired blood flow in the brain.",
      "pearl": "Definitive diagnosis: Transient Ischemic Attack (النوبة الإقفارية العابرة) - Core Neurology."
    }
  },
  "w274": {
    "Arabic": {
      "hint1": "الاستجابة الكهربائية للعصب توفر معلومات تشخيصية حول مدى تضرر الألياف العصبية.",
      "hint2": "يجب استبعاد الأسباب المركزية مثل الجلطات الدماغية عند وجود أي خلل عصبي آخر.",
      "hint3": "يحدث ضعف مفاجئ في العصب القحفي السابع يؤدي إلى شلل العضلات التعبيرية للوجه.",
      "pearl": "التشخيص النهائي: شلل بل (Bell's Palsy) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Electrophysiological studies of the nerve provide diagnostic insights into the extent of axonal damage.",
      "hint2": "Central causes like strokes must be excluded if other neurological deficits are present.",
      "hint3": "Sudden onset of weakness in the seventh cranial nerve leads to paralysis of facial expression muscles.",
      "pearl": "Definitive diagnosis: Bell's Palsy (شلل بل) - Core Neurology."
    }
  },
  "w275": {
    "Arabic": {
      "hint1": "طورت علاجات حديثة تعمل على تعديل الربط الجيني لتعزيز إنتاج البروتين المفقود.",
      "hint2": "يؤدي الضمور إلى ضعف شديد في العضلات القريبة والمستعرضة.",
      "hint3": "تحدث نتيجة خلل جيني يؤدي إلى فقدان الخلايا العصبية الحركية في الحبل الشوكي.",
      "pearl": "التشخيص النهائي: الضمور العضلي الشوكي (Spinal Muscular Atrophy) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Modern therapies utilize genetic splicing modification to enhance the production of the missing protein.",
      "hint2": "Atrophy causes significant weakness in proximal and postural muscles.",
      "hint3": "This condition results from a genetic defect leading to the loss of motor neurons in the spinal cord.",
      "pearl": "Definitive diagnosis: Spinal Muscular Atrophy (الضمور العضلي الشوكي) - Core Pediatrics."
    }
  },
  "w276": {
    "Arabic": {
      "hint1": "تعد البروتينات المسببة للمرض مقاومة للتعقيم الحراري والكيماوي المعتاد.",
      "hint2": "لا يوجد علاج شافٍ حتى الآن، وتكون المسارات دائماً مميتة.",
      "hint3": "يعد اضطراباً دماغياً تنكسياً نادراً ومميتاً وسريع التطور.",
      "pearl": "التشخيص النهائي: مرض كروتزفيلد جاكوب (Creutzfeldt-Jakob Disease) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "The causative proteins are resistant to conventional heat and chemical sterilization.",
      "hint2": "There is currently no cure, and the disease course is universally fatal.",
      "hint3": "It is a rare, fatal, and rapidly progressive degenerative brain disorder.",
      "pearl": "Definitive diagnosis: Creutzfeldt-Jakob Disease (مرض كروتزفيلد جاكوب) - Core Neurology."
    }
  },
  "w277": {
    "Arabic": {
      "hint1": "يمكن أن تؤثر الحالة بشكل كبير على جودة الحياة والقدرة على التركيز اليومي.",
      "hint2": "يعاني الكثيرون من شلل النوم المؤقت عند الانتقال بين النوم والاستيقاظ.",
      "hint3": "اضطراب عصبي مزمن يؤثر على قدرة الدماغ على تنظيم دورات النوم والاستيقاظ.",
      "pearl": "التشخيص النهائي: التغفيق (Narcolepsy) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "The condition can significantly impact quality of life and daily cognitive focus.",
      "hint2": "Many suffer from temporary sleep paralysis during transitions between sleep and wakefulness.",
      "hint3": "A chronic neurological disorder affecting the brain's ability to regulate sleep-wake cycles.",
      "pearl": "Definitive diagnosis: Narcolepsy (التغفيق) - Core Neurology."
    }
  },
  "w278": {
    "Arabic": {
      "hint1": "تتضمن المضاعفات طويلة الأمد ضعفاً معرفياً مستمراً أو اضطرابات حركية.",
      "hint2": "يتم التشخيص غالباً عبر تحليل السائل الدماغي الشوكي للبحث عن كثرة الخلايا الليمفاوية.",
      "hint3": "يتميز بحدوث التهاب حاد في نسيج الدماغ المتني.",
      "pearl": "التشخيص النهائي: التهاب الدماغ (Encephalitis) - من أساسيات Neurology."
    },
    "English": {
      "hint1": "Long-term complications often include persistent cognitive impairment or movement disorders.",
      "hint2": "Diagnosis often involves cerebrospinal fluid analysis showing lymphocytic pleocytosis.",
      "hint3": "Characterized by acute inflammation of the brain parenchyma.",
      "pearl": "Definitive diagnosis: Encephalitis (التهاب الدماغ) - Core Neurology."
    }
  },
  "w279": {
    "Arabic": {
      "hint1": "يلعب العلاج السلوكي المعرفي دوراً محورياً في إعادة هيكلة الأفكار الكارثية.",
      "hint2": "تؤدي النوبات المتكررة إلى حدوث قلق استباقي بشأن توقيت حدوث النوبة القادمة.",
      "hint3": "تتجلى الحالة بنوبات مفاجئة ومكثفة من الخوف الشديد.",
      "pearl": "التشخيص النهائي: اضطراب الهلع (Panic Disorder) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Cognitive behavioral therapy is crucial for restructuring maladaptive catastrophic cognitions.",
      "hint2": "Recurrent episodes lead to persistent anticipatory anxiety about future attacks.",
      "hint3": "Manifests as sudden, intense episodes of overwhelming apprehension.",
      "pearl": "Definitive diagnosis: Panic Disorder (اضطراب الهلع) - Core Psychiatry."
    }
  },
  "w280": {
    "Arabic": {
      "hint1": "تستخدم جرعات أعلى من مضادات الاكتئاب المعتادة لتحقيق استجابة علاجية.",
      "hint2": "تعد الفحوصات والترتيب والتنظيف من الطقوس السلوكية الأكثر انتشاراً.",
      "hint3": "تتضمن الحالة أفكاراً متكررة وغير مرغوب فيها تسبب قلقاً شديداً.",
      "pearl": "التشخيص النهائي: الوسواس القهري (Obsessive Compulsive Disorder) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Higher doses of standard antidepressant medications are often required for symptom management.",
      "hint2": "Checking, ordering, and excessive cleaning are among the most prevalent rituals.",
      "hint3": "Involves persistent, intrusive thoughts that cause significant distress.",
      "pearl": "Definitive diagnosis: Obsessive Compulsive Disorder (الوسواس القهري) - Core Psychiatry."
    }
  },
  "w281": {
    "Arabic": {
      "hint1": "تعد حاصرات مستقبلات الأدرينالين أحياناً جزءاً من استراتيجيات الوقاية الثانوية.",
      "hint2": "يمكن أن تظهر الأعراض بعد فترة من حدوث الواقعة المسببة.",
      "hint3": "تنتج الحالة عن التعرض لحدث صادم أو تهديد جسيم للحياة.",
      "pearl": "التشخيص النهائي: اضطراب ما بعد الصدمة (Post-Traumatic Stress Disorder) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Adrenergic receptor antagonists are sometimes investigated for secondary prevention strategies.",
      "hint2": "Symptoms can emerge months or even years after the triggering experience.",
      "hint3": "Develops following exposure to a traumatic event or a severe life threat.",
      "pearl": "Definitive diagnosis: Post-Traumatic Stress Disorder (اضطراب ما بعد الصدمة) - Core Psychiatry."
    }
  },
  "w282": {
    "Arabic": {
      "hint1": "يساهم التدريب على الاسترخاء في تخفيف الأعراض الجسدية المصاحبة.",
      "hint2": "يترافق الاضطراب مع تهيج سريع وتقلبات في المزاج.",
      "hint3": "تتميز بقلق مستمر ومفرط حول مواضيع متعددة وأحداث الحياة اليومية.",
      "pearl": "التشخيص النهائي: اضطراب القلق العام (Generalized Anxiety Disorder) - من أساسيات Psychiatry."
    },
    "English": {
      "hint1": "Relaxation techniques and mindfulness training are commonly used to mitigate somatic tension.",
      "hint2": "The clinical presentation often includes irritability and generalized restlessness.",
      "hint3": "Characterized by persistent, excessive apprehension about various daily life events.",
      "pearl": "Definitive diagnosis: Generalized Anxiety Disorder (اضطراب القلق العام) - Core Psychiatry."
    }
  },
  "w283": {
    "Arabic": {
      "hint1": "تتطلب إدارة دوائية بحاصرات بيتا غير الانتقائية لتقليل مخاطر النزيف.",
      "hint2": "تتطور نتيجة لانسداد التدفق الوريدي داخل الكبد.",
      "hint3": "تؤدي إلى زيادة المقاومة في تدفق الدم عبر الكبد.",
      "pearl": "التشخيص النهائي: ارتفاع ضغط الوريد البابي (Portal Hypertension) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Requires pharmacological management with non-selective beta-blockers to reduce bleeding risks.",
      "hint2": "Develops as a consequence of obstructed intrahepatic venous outflow.",
      "hint3": "Leads to increased resistance to blood flow through the liver.",
      "pearl": "Definitive diagnosis: Portal Hypertension (ارتفاع ضغط الوريد البابي) - Core Gastroenterology."
    }
  },
  "w284": {
    "Arabic": {
      "hint1": "يرتبط بزيادة طفيفة في مخاطر الإصابة بأورام المريء الخبيثة.",
      "hint2": "يتم تأكيد التشخيص عن طريق قياس ضغط المريء.",
      "hint3": "يتميز بفشل ارتخاء العضلة العاصرة للمريء السفلية.",
      "pearl": "التشخيص النهائي: تعذر الارتخاء المريئي (Achalasia) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Associated with a slight increase in the risk of esophageal malignancy.",
      "hint2": "Diagnosis is confirmed via esophageal manometry.",
      "hint3": "Characterized by the failure of the lower esophageal sphincter to relax.",
      "pearl": "Definitive diagnosis: Achalasia (تعذر الارتخاء المريئي) - Core Gastroenterology."
    }
  },
  "w285": {
    "Arabic": {
      "hint1": "تتضمن التوصيات استخدام مثبطات مضخة البروتون لتقليل التهيج.",
      "hint2": "يتطلب مراقبة دورية بسبب خطر تحوله إلى خلايا سرطانية.",
      "hint3": "يحدث نتيجة التعرض المزمن لحمض المعدة في الجزء السفلي للمريء.",
      "pearl": "التشخيص النهائي: مريء باريت (Barrett's Esophagus) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Recommendations include the use of proton pump inhibitors to reduce chronic irritation.",
      "hint2": "Requires regular surveillance due to the risk of malignant progression.",
      "hint3": "Occurs due to chronic exposure of the distal esophagus to gastric acid.",
      "pearl": "Definitive diagnosis: Barrett's Esophagus (مريء باريت) - Core Gastroenterology."
    }
  },
  "w286": {
    "Arabic": {
      "hint1": "يعتمد التشخيص التفريقي على استبعاد الأسباب الأخرى لألم البطن السفلي.",
      "hint2": "تتضمن المضاعفات المحتملة تشكل الخراجات أو الانثقاب.",
      "hint3": "يحدث نتيجة التهاب الأكياس الصغيرة في جدار القولون.",
      "pearl": "التشخيص النهائي: التهاب الرتوج (Diverticulitis) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Differential diagnosis relies on excluding other causes of lower abdominal pain.",
      "hint2": "Potential complications include the formation of abscesses or perforation.",
      "hint3": "Occurs due to inflammation of small pouches in the colon wall.",
      "pearl": "Definitive diagnosis: Diverticulitis (التهاب الرتوج) - Core Gastroenterology."
    }
  },
  "w287": {
    "Arabic": {
      "hint1": "يتم التدخل الجراحي عند وجود علامات على وجود غرغرينا.",
      "hint2": "يسمع في الفحص السريري أصوات أمعاء معدنية عالية النبرة.",
      "hint3": "يؤدي إلى توقف مرور المحتويات المعوية في المسار الهضمي.",
      "pearl": "التشخيص النهائي: الانسداد المعوي (Intestinal Obstruction) - من أساسيات General Surgery."
    },
    "English": {
      "hint1": "Surgical intervention is indicated when there are signs of gangrene.",
      "hint2": "High-pitched, metallic bowel sounds are heard on physical examination.",
      "hint3": "Leads to the cessation of the passage of intestinal contents through the digestive tract.",
      "pearl": "Definitive diagnosis: Intestinal Obstruction (الانسداد المعوي) - Core General Surgery."
    }
  },
  "w288": {
    "Arabic": {
      "hint1": "يتميز الفحص بوجود ألم عند القرع الخفيف وتوقف حركة الأمعاء تماماً.",
      "hint2": "يحدث ارتداد في الألم عند رفع الضغط عن البطن فجأة.",
      "hint3": "حالة التهابية حادة تصيب الغشاء المبطن لتجويف البطن والأحشاء.",
      "pearl": "التشخيص النهائي: التهاب الصفاق (Peritonitis) - من أساسيات General Surgery."
    },
    "English": {
      "hint1": "Clinical assessment is characterized by extreme sensitivity to percussion and absent bowel sounds.",
      "hint2": "Rebound tenderness is a classic sign detected upon sudden release of palpation pressure.",
      "hint3": "An acute inflammatory condition affecting the serous membrane lining the abdominal cavity.",
      "pearl": "Definitive diagnosis: Peritonitis (التهاب الصفاق) - Core General Surgery."
    }
  },
  "w289": {
    "Arabic": {
      "hint1": "يعد توسع القنوات الصفراوية في التصوير بالموجات فوق الصوتية علامة رئيسية.",
      "hint2": "يساهم وجود حصوات في القناة الجامعة في حدوث هذه الحالة بشكل شائع.",
      "hint3": "عدوى بكتيرية حادة تصيب القنوات الناقلة للعصارة الصفراوية.",
      "pearl": "التشخيص النهائي: التهاب القنوات الصفراوية (Cholangitis) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Dilation of the biliary tree on ultrasonography is a hallmark diagnostic finding.",
      "hint2": "Presence of calculi in the common duct is a frequent predisposing factor.",
      "hint3": "An acute bacterial infection involving the ducts that transport bile.",
      "pearl": "Definitive diagnosis: Cholangitis (التهاب القنوات الصفراوية) - Core Gastroenterology."
    }
  },
  "w290": {
    "Arabic": {
      "hint1": "تظهر خزعة الكبد وجود تدمير في القنوات الصفراوية مع ارتشاح لمفاوي.",
      "hint2": "يظهر ارتفاع مستمر في إنزيم الفوسفاتاز القلوية في الفحوصات المخبرية.",
      "hint3": "اضطراب مناعي مزمن يؤدي إلى تدمير القنوات الصفراوية داخل الكبد.",
      "pearl": "التشخيص النهائي: التهاب القنوات الصفراوية الأولي (Primary Biliary Cholangitis) - من أساسيات Gastroenterology."
    },
    "English": {
      "hint1": "Histopathological examination reveals ductal destruction accompanied by lymphocytic infiltration.",
      "hint2": "Laboratory investigations consistently show elevation of alkaline phosphatase.",
      "hint3": "A chronic autoimmune disorder characterized by the destruction of intrahepatic bile ducts.",
      "pearl": "Definitive diagnosis: Primary Biliary Cholangitis (التهاب القنوات الصفراوية الأولي) - Core Gastroenterology."
    }
  },
  "w291": {
    "Arabic": {
      "hint1": "ينتج عن تحويل الدم الوريدي عن الكبد دون تنقيته من السموم الاستقلابية.",
      "hint2": "يتم العلاج بتقليل تراكم المواد النيتروجينية في الأمعاء.",
      "hint3": "خلل في الوظائف الإدراكية يحدث بسبب فشل الكبد في التخلص من السموم.",
      "pearl": "التشخيص النهائي: الاعتلال الدماغي الكبدي (Hepatic Encephalopathy) - من أساسيات Internal Medicine."
    },
    "English": {
      "hint1": "Occurs due to shunting of blood away from the liver, bypassing metabolic detoxification.",
      "hint2": "Management strategies focus on reducing the nitrogenous load produced in the gut.",
      "hint3": "A neuropsychiatric abnormality resulting from the failure of the liver to clear systemic toxins.",
      "pearl": "Definitive diagnosis: Hepatic Encephalopathy (الاعتلال الدماغي الكبدي) - Core Internal Medicine."
    }
  },
  "w292": {
    "Arabic": {
      "hint1": "يجب تمييزها سريرياً عن تضخم العقد اللمفاوية أو الخصية الهاجرة.",
      "hint2": "يستخدم الفحص السريري تقنية إدخال الإصبع عبر القناة لتقييم الضعف.",
      "hint3": "بروز غير طبيعي للأحشاء عبر منطقة ضعيفة في جدار البطن.",
      "pearl": "التشخيص النهائي: الفتق الإربي (Inguinal Hernia) - من أساسيات General Surgery."
    },
    "English": {
      "hint1": "Must be clinically differentiated from lymphadenopathy or undescended testes.",
      "hint2": "Physical examination involves digital palpation of the canal to assess the fascial defect.",
      "hint3": "An abnormal protrusion of abdominal viscera through a weakness in the abdominal wall.",
      "pearl": "Definitive diagnosis: Inguinal Hernia (الفتق الإربي) - Core General Surgery."
    }
  },
  "w293": {
    "Arabic": {
      "hint1": "يمكن أن يؤدي فرط الكالسيوم في الدم والبول بسبب زيادة حساسية فيتامين د.",
      "hint2": "تظهر الخزعات وجود تشكيلات حبيبية متماسكة دون وجود تنخر جبني.",
      "hint3": "يتميز بوجود تجمعات خلوية غير متنخرة في مختلف أنحاء الجسم.",
      "pearl": "التشخيص النهائي: الساركويد (Sarcoidosis) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "Hypercalcemia and hypercalciuria may arise from hypersensitivity to vitamin D metabolites.",
      "hint2": "Biopsy samples demonstrate tight granulomatous formations without central necrosis.",
      "hint3": "Characterized by the presence of non-caseating granulomatous clusters throughout the body.",
      "pearl": "Definitive diagnosis: Sarcoidosis (الساركويد) - Core Pulmonology."
    }
  },
  "w294": {
    "Arabic": {
      "hint1": "النمط النسيجي المسمى تضخم قرص العسل في الرئتين يظهر في مراحل متأخرة من التصوير الإشعاعي.",
      "hint2": "يعتبر فقدان مرونة الأنسجة الرئوية ونقص تبادل الغازات سمة مميزة.",
      "hint3": "حالة تنكسية مزمنة تؤثر على النسيج الخلالي في الرئتين.",
      "pearl": "التشخيص النهائي: التليف الرئوي مجهول السبب (Idiopathic Pulmonary Fibrosis) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "Radiographic findings in advanced stages typically demonstrate a honeycomb lung pattern.",
      "hint2": "Loss of pulmonary compliance and impaired gas exchange are hallmark features.",
      "hint3": "A progressive chronic degenerative condition affecting the interstitial tissue of the lungs.",
      "pearl": "Definitive diagnosis: Idiopathic Pulmonary Fibrosis (التليف الرئوي مجهول السبب) - Core Pulmonology."
    }
  },
  "w295": {
    "Arabic": {
      "hint1": "يُعد الضغط الهوائي الإيجابي المستمر العلاج الذهبي الموصى به للمصابين.",
      "hint2": "يزداد خطر الإصابة بأمراض القلب والأوعية الدموية وارتفاع ضغط الدم.",
      "hint3": "اضطراب متكرر يؤدي إلى توقف التنفس أثناء فترة النوم.",
      "pearl": "التشخيص النهائي: متلازمة انقطاع النفس النومي (Sleep Apnea Syndrome) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "Continuous positive airway pressure remains the gold standard treatment for affected individuals.",
      "hint2": "Associated with an increased risk of cardiovascular disease and systemic hypertension.",
      "hint3": "A repetitive disorder resulting in cessation of breathing during nocturnal sleep periods.",
      "pearl": "Definitive diagnosis: Sleep Apnea Syndrome (متلازمة انقطاع النفس النومي) - Core Pulmonology."
    }
  },
  "w296": {
    "Arabic": {
      "hint1": "غالباً ما تتطلب الإدارة الطبية مسكنات للألم وعلاج المسبب الأساسي.",
      "hint2": "يؤدي تراكم السوائل بين طبقات الغشاء إلى تخفيف حدة الألم ولكنه يقلل سعة التنفس.",
      "hint3": "التهاب يصيب الغشاء المبطن للتجويف الصدري.",
      "pearl": "التشخيص النهائي: التهاب غشاء الجنب (Pleurisy) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "Management typically requires analgesics and treatment of the underlying etiology.",
      "hint2": "Fluid accumulation between membrane layers may reduce pain but restricts respiratory capacity.",
      "hint3": "An inflammatory condition involving the lining membrane of the thoracic cavity.",
      "pearl": "Definitive diagnosis: Pleurisy (التهاب غشاء الجنب) - Core Pulmonology."
    }
  },
  "w297": {
    "Arabic": {
      "hint1": "الاستخدام المفرط للكافيين يمكن أن يزيد من جفاف الأنسجة المتهيجة.",
      "hint2": "تعتبر الحمى الطفيفة والتهاب الحلق من الأعراض المصاحبة الشائعة.",
      "hint3": "التهاب حاد في بنية الحنجرة يؤدي إلى تغير في الصوت.",
      "pearl": "التشخيص النهائي: التهاب الحنجرة (Laryngitis) - من أساسيات Otolaryngology."
    },
    "English": {
      "hint1": "Excessive caffeine consumption can exacerbate the dryness of the irritated tissues.",
      "hint2": "Low-grade fever and pharyngeal soreness are common accompanying symptoms.",
      "hint3": "Acute inflammation of the laryngeal structures leading to vocal alterations.",
      "pearl": "Definitive diagnosis: Laryngitis (التهاب الحنجرة) - Core Otolaryngology."
    }
  },
  "w298": {
    "Arabic": {
      "hint1": "تُشير مستويات نازعة هيدروجين اللاكتات العالية في العينة المسحوبة إلى وجود تدرك خلوي واسع.",
      "hint2": "يتم التشخيص الأكيد عن طريق سحب عينة من السائل وفحص خصائصها الكيميائية الحيوية.",
      "hint3": "حالة التهابية تتضمن تراكم السوائل قيحية في الحيز التشريحي المحيط بالرئة.",
      "pearl": "التشخيص النهائي: الدبيلة الصدرية (Empyema) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "High levels of lactate dehydrogenase in the aspirated sample indicate extensive cellular breakdown.",
      "hint2": "Definitive diagnosis is achieved via aspiration of the fluid to analyze its biochemical characteristics.",
      "hint3": "An inflammatory condition involving the accumulation of purulent fluid in the anatomic space surrounding the lung.",
      "pearl": "Definitive diagnosis: Empyema (الدبيلة الصدرية) - Core Pulmonology."
    }
  },
  "w299": {
    "Arabic": {
      "hint1": "يتم استبعاد الأسباب العضوية الخطيرة كالانصمام الرئوي قبل تأكيد التشخيص الوظيفي.",
      "hint2": "يؤدي التغير في توازن الغازات في الدم إلى تحول الوسط الداخلي نحو القلوية.",
      "hint3": "حالة سريرية تتميز بزيادة في معدل أو عمق التنفس بما يتجاوز احتياجات التمثيل الغذائي للجسم.",
      "pearl": "التشخيص النهائي: متلازمة فرط التنفس (Hyperventilation Syndrome) - من أساسيات Emergency Medicine."
    },
    "English": {
      "hint1": "Serious organic causes like pulmonary embolism must be excluded before confirming a functional diagnosis.",
      "hint2": "The alteration in blood gas balance shifts the internal environment toward an alkaline state.",
      "hint3": "A clinical condition characterized by an increase in respiratory rate or depth exceeding the body metabolic requirements.",
      "pearl": "Definitive diagnosis: Hyperventilation Syndrome (متلازمة فرط التنفس) - Core Emergency Medicine."
    }
  },
  "w300": {
    "Arabic": {
      "hint1": "تظهر علامات احتقان وريدي جهازي عند وصول الحالة إلى مراحل الفشل البطيني الأيمن المتقدم.",
      "hint2": "يتم التأكيد التشخيصي من خلال القسطرة القلبية اليمنى لقياس الضغوط المباشرة.",
      "hint3": "ارتفاع غير طبيعي في ضغط الدم داخل الشرايين التي تغذي الرئتين.",
      "pearl": "التشخيص النهائي: ارتفاع ضغط الشريان الرئوي (Pulmonary Hypertension) - من أساسيات Pulmonology."
    },
    "English": {
      "hint1": "Signs of systemic venous congestion appear when the condition reaches advanced right ventricular failure stages.",
      "hint2": "Diagnostic confirmation is achieved via right heart catheterization to measure direct pressures.",
      "hint3": "Abnormally elevated blood pressure within the arteries that supply the lungs.",
      "pearl": "Definitive diagnosis: Pulmonary Hypertension (ارتفاع ضغط الشريان الرئوي) - Core Pulmonology."
    }
  },
  "w301": {
    "Arabic": {
      "hint1": "يمكن أن تتطور إلى فشل كلوي دائم إذا طال أمد الضرر الخلوي دون تدخل.",
      "hint2": "يُظهر الفحص المجهري للبول وجود أسطوانات حبيبية بنية اللون كعلامة مميزة.",
      "hint3": "سبب رئيسي للفشل الكلوي المفاجئ نتيجة حدوث ضرر خلوي في الوحدة الوظيفية للكلى.",
      "pearl": "التشخيص النهائي: تنخر الأنابيب الحاد (Acute Tubular Necrosis) - من أساسيات Nephrology."
    },
    "English": {
      "hint1": "Can progress to permanent renal failure if the cellular damage persists without intervention.",
      "hint2": "Microscopic examination of urine reveals muddy brown granular casts as a hallmark sign.",
      "hint3": "A leading cause of sudden kidney failure resulting from cellular damage in the functional unit of the kidney.",
      "pearl": "Definitive diagnosis: Acute Tubular Necrosis (تنخر الأنابيب الحاد) - Core Nephrology."
    }
  },
  "w302": {
    "Arabic": {
      "hint1": "يتطلب تدبير المرض متابعة دورية لضبط ضغط الدم وتخفيف الضغط على النسيج المتبقي.",
      "hint2": "يتم توريث الحالة بنمط سائد، مما يعني احتمالية عالية لانتقالها للأجيال القادمة.",
      "hint3": "اضطراب وراثي يؤدي إلى نمو أكياس متعددة ومملوءة بالسوائل في أنسجة العضو المسؤول عن تصفية الدم.",
      "pearl": "التشخيص النهائي: تكيس الكلى (Polycystic Kidney Disease) - من أساسيات Nephrology."
    },
    "English": {
      "hint1": "Disease management requires periodic monitoring to control blood pressure and reduce pressure on the remaining parenchyma.",
      "hint2": "The condition is inherited in an autosomal dominant pattern, implying a high likelihood of transmission to subsequent generations.",
      "hint3": "A genetic disorder leading to the development of numerous fluid-filled sacs within the tissue of the organ responsible for blood filtration.",
      "pearl": "Definitive diagnosis: Polycystic Kidney Disease (تكيس الكلى) - Core Nephrology."
    }
  },
  "w303": {
    "Arabic": {
      "hint1": "يُعتقد أن خللًا في الطبقة المخاطية الواقية المبطنة للجدار العضلي يساهم في نفاذية الأنسجة للمواد المهيجة.",
      "hint2": "تتضمن الأعراض إلحاحًا مستمرًا يزداد سوءًا مع تناول أطعمة معينة مثل الحمضيات.",
      "hint3": "حالة مزمنة تتضمن ألمًا في منطقة الحوض وتكرارًا في الحاجة للتبول.",
      "pearl": "التشخيص النهائي: التهاب المثانة الخلالي (Interstitial Cystitis) - من أساسيات Urology."
    },
    "English": {
      "hint1": "Pathogenesis involves a compromised glycosaminoglycan layer leading to increased permeability of the urothelium.",
      "hint2": "Patients often report flares triggered by specific dietary items like acidic foods.",
      "hint3": "A chronic condition involving pelvic pain and frequent urge to void.",
      "pearl": "Definitive diagnosis: Interstitial Cystitis (التهاب المثانة الخلالي) - Core Urology."
    }
  },
  "w304": {
    "Arabic": {
      "hint1": "تعتبر البكتيريا المنتجة لليورياز سببًا رئيسيًا في تكوين حصوات الستروفيت المرتبطة بالعدوى المتكررة.",
      "hint2": "غالبًا ما يصاحب نوبات الألم الشديدة غثيان وقيء ودم في البول.",
      "hint3": "تتكون كتل صلبة من ترسبات الأملاح والمعادن داخل المسالك البولية.",
      "pearl": "التشخيص النهائي: حصوات الكلى الطبية (Nephrolithiasis) - من أساسيات Urology."
    },
    "English": {
      "hint1": "Urease-producing bacteria are the underlying cause of struvite formations associated with recurrent infections.",
      "hint2": "Episodes of severe discomfort are frequently accompanied by nausea, vomiting, and hematuria.",
      "hint3": "Solid deposits of minerals and salts form within the urinary tract system.",
      "pearl": "Definitive diagnosis: Nephrolithiasis (حصوات الكلى الطبية) - Core Urology."
    }
  },
  "w305": {
    "Arabic": {
      "hint1": "يستخدم فحص البول المقسم (قبل وبعد التدليك) لتحديد مكان الالتهاب بدقة.",
      "hint2": "تعد العدوى البكتيرية أحد الأسباب الشائعة، خاصة في الحالات الحادة.",
      "hint3": "التهاب يصيب غدة تناسلية ذكرية مسؤولة عن إفراز جزء من السائل المنوي.",
      "pearl": "التشخيص النهائي: التهاب البروستاتا (Prostatitis) - من أساسيات Urology."
    },
    "English": {
      "hint1": "The Meares-Stamey four-glass test is historically utilized to localize the inflammatory source.",
      "hint2": "Bacterial pathogens are common triggers, especially in sudden-onset symptomatic cases.",
      "hint3": "Inflammation affecting a male accessory gland involved in semen production.",
      "pearl": "Definitive diagnosis: Prostatitis (التهاب البروستاتا) - Core Urology."
    }
  },
  "w306": {
    "Arabic": {
      "hint1": "تتطلب الحالات الشديدة تدخلًا جراحيًا لإعادة زرع الحالب ومنع حدوث الجزر.",
      "hint2": "يعتمد التشخيص الدقيق على تصوير المثانة والإحليل أثناء التبول.",
      "hint3": "حالة طبية يحدث فيها عودة غير طبيعية للبول من المثانة إلى الحالبين.",
      "pearl": "التشخيص النهائي: الارتجاع المثاني الحالببي (Vesicoureteral Reflux) - من أساسيات Urology."
    },
    "English": {
      "hint1": "High-grade cases may necessitate surgical ureteral reimplantation to definitively correct the valvular insufficiency.",
      "hint2": "The definitive diagnosis is established through a voiding cystourethrogram.",
      "hint3": "A condition characterized by the abnormal retrograde flow of urine from the bladder into the ureters.",
      "pearl": "Definitive diagnosis: Vesicoureteral Reflux (الارتجاع المثاني الحالببي) - Core Urology."
    }
  },
  "w307": {
    "Arabic": {
      "hint1": "تساهم العوامل الميكانيكية والالتهابية في تحفيز الخلايا على إنتاج فائض من المصفوفة خارج الخلية.",
      "hint2": "يعتبر تسرب البروتين في البول علامة مبكرة وشائعة قبل حدوث الفشل الوظيفي.",
      "hint3": "عملية مرضية تتضمن زيادة تراكم الأنسجة الندبية داخل وحدات الترشيح الكلوية.",
      "pearl": "التشخيص النهائي: تصلب كبيبات الكلى (Glomerulosclerosis) - من أساسيات Nephrology."
    },
    "English": {
      "hint1": "Mechanical and inflammatory signaling pathways induce cellular production of excess extracellular matrix components.",
      "hint2": "Proteinuria is a common clinical hallmark indicating early stages of filter degradation.",
      "hint3": "A pathological process involving the progressive accumulation of scar tissue within renal filtration units.",
      "pearl": "Definitive diagnosis: Glomerulosclerosis (تصلب كبيبات الكلى) - Core Nephrology."
    }
  },
  "w308": {
    "Arabic": {
      "hint1": "يستهدف العلاج استبدال السوائل الوريدية وتصحيح اضطراب الأملاح وتوفير الأنسولين.",
      "hint2": "تظهر رائحة فاكهية مميزة في نفس المريض نتيجة انطلاق الأسيتون.",
      "hint3": "حالة استقلابية حادة تتسم بارتفاع سكر الدم مع وجود حموضة.",
      "pearl": "التشخيص النهائي: التحمض الكيتوني السكري (Diabetic Ketoacidosis) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Treatment involves aggressive intravenous fluid resuscitation, electrolyte correction, and insulin infusion.",
      "hint2": "A fruity odor is detected on the patient's breath due to acetone exhalation.",
      "hint3": "An acute metabolic state characterized by hyperglycemia and metabolic acidosis.",
      "pearl": "Definitive diagnosis: Diabetic Ketoacidosis (التحمض الكيتوني السكري) - Core Endocrinology."
    }
  },
  "w309": {
    "Arabic": {
      "hint1": "تتطلب الحالة تعويضاً هرمونياً مستمراً مدى الحياة لجميع المحاور الغدية المتأثرة.",
      "hint2": "يعاني المريض من فقدان شعر العانة والإبط وتغيرات في صبغة الجلد.",
      "hint3": "قصور وظيفي في الغدة النخامية ينتج عن فقدان دم حاد أثناء الولادة.",
      "pearl": "التشخيص النهائي: متلازمة شيهان (Sheehan's Syndrome) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Requires lifelong hormone replacement therapy for all affected endocrine axes.",
      "hint2": "Patients exhibit loss of axillary and pubic hair with pigmentary changes.",
      "hint3": "Pituitary dysfunction resulting from severe hemorrhage during childbirth.",
      "pearl": "Definitive diagnosis: Sheehan's Syndrome (متلازمة شيهان) - Core Endocrinology."
    }
  },
  "w310": {
    "Arabic": {
      "hint1": "العلاج الجذري يكون عبر الاستئصال الجراحي للغدة المصابة أو تثبيط المستقبلات دوائياً.",
      "hint2": "يتم تشخيصه من خلال حساب نسبة الهرمون المفرط إلى نشاط إنزيم الرينين.",
      "hint3": "اضطراب غدي يؤدي إلى ارتفاع ضغط الدم الثانوي غير المستجيب للعلاجات التقليدية.",
      "pearl": "التشخيص النهائي: متلازمة كون (Conn's Syndrome) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Definitive management involves surgical resection or pharmacological receptor antagonism.",
      "hint2": "Diagnosed by calculating the ratio of hormone levels to plasma renin activity.",
      "hint3": "Endocrine disorder causing secondary hypertension resistant to conventional treatment.",
      "pearl": "Definitive diagnosis: Conn's Syndrome (متلازمة كون) - Core Endocrinology."
    }
  },
  "w311": {
    "Arabic": {
      "hint1": "لا يوجد دور للمضادات الحيوية في علاج هذه الحالة الالتهابية.",
      "hint2": "تظهر نتائج فحص امتصاص اليود المشع انخفاضاً شديداً في التقاط المادة.",
      "hint3": "حالة التهابية للغدة الدرقية تبدأ غالباً بعد الإصابة بعدوى فيروسية في الجهاز التنفسي.",
      "pearl": "التشخيص النهائي: التهاب الغدة الدرقية الحاد (De Quervain's Thyroiditis) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Antibiotics are ineffective in the management of this inflammatory pathology.",
      "hint2": "Radioactive iodine uptake studies show significantly decreased tracer uptake.",
      "hint3": "Inflammatory condition of the thyroid gland often following an upper respiratory viral infection.",
      "pearl": "Definitive diagnosis: De Quervain's Thyroiditis (التهاب الغدة الدرقية الحاد) - Core Endocrinology."
    }
  },
  "w312": {
    "Arabic": {
      "hint1": "لا يوجد استجابة هرمونية في حال كان المسبب غياب الغدد المسؤولة عن تنظيم المعادن.",
      "hint2": "يلاحظ وجود تشنج كربدي عند قياس ضغط الدم في الطرف العلوي.",
      "hint3": "حالة سريرية ناتجة عن نقص في نشاط الهرمون المنظم للكالسيوم.",
      "pearl": "التشخيص النهائي: قصور الغدد جارات الدرقية (Hypoparathyroidism) - من أساسيات Endocrinology."
    },
    "English": {
      "hint1": "Hormonal response is absent if the etiology is the surgical removal of the parathyroid glands.",
      "hint2": "Trousseau's sign is observed during blood pressure cuff inflation.",
      "hint3": "Clinical state resulting from deficient activity of the calcium-regulating hormone.",
      "pearl": "Definitive diagnosis: Hypoparathyroidism (قصور الغدد جارات الدرقية) - Core Endocrinology."
    }
  },
  "w313": {
    "Arabic": {
      "hint1": "يرتبط أحياناً بوجود طفرة في جين KISSR أو GNPR5.",
      "hint2": "الشكل المحيطي يظهر بسبب مستويات مرتفعة من الهرمونات الجنسية المستقلة عن الغدة النخامية.",
      "hint3": "ظهور العلامات الجنسية الثانوية قبل سن الثامنة لدى الإناث.",
      "pearl": "التشخيص النهائي: البلوغ المبكر (Precocious Puberty) - من أساسيات Pediatrics."
    },
    "English": {
      "hint1": "Sometimes associated with activating mutations in KISSR or GNPR5 genes.",
      "hint2": "Peripheral form arises from elevated sex hormone levels independent of pituitary signals.",
      "hint3": "Development of secondary sexual characteristics before age eight in females.",
      "pearl": "Definitive diagnosis: Precocious Puberty (البلوغ المبكر) - Core Pediatrics."
    }
  },
  "w314": {
    "Arabic": {
      "hint1": "يرتبط بوجود أليل HLA-DR3 و HLA-DRW52.",
      "hint2": "يعد تضخم الغدد اللعابية النكفية علامة سريرية شائعة.",
      "hint3": "تلف مناعي ذاتي في الغدد المفرزة للدموع واللعاب.",
      "pearl": "التشخيص النهائي: متلازمة شوغرن (Sjögren's Syndrome) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Linked to the presence of HLA-DR3 and HLA-DRW52 alleles.",
      "hint2": "Parotid gland enlargement is a classic clinical feature.",
      "hint3": "Autoimmune destruction of lacrimal and salivary glands.",
      "pearl": "Definitive diagnosis: Sjögren's Syndrome (متلازمة شوغرن) - Core Rheumatology."
    }
  },
  "w315": {
    "Arabic": {
      "hint1": "تظهر ميزة 'وجه القناع' نتيجة تيبس الجلد.",
      "hint2": "يرتبط بالنمط المحدود بوجود أجسام مضادة للسنترومير.",
      "hint3": "اضطراب مناعي ذاتي يتسم بتليف الجلد والأعضاء الداخلية.",
      "pearl": "التشخيص النهائي: تصلب الجلد المنهجي (Systemic Sclerosis) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Development of a mask-like facies due to skin tautness.",
      "hint2": "The limited subtype is associated with anti-centromere antibodies.",
      "hint3": "Autoimmune disorder characterized by fibrosis of skin and internal organs.",
      "pearl": "Definitive diagnosis: Systemic Sclerosis (تصلب الجلد المنهجي) - Core Rheumatology."
    }
  },
  "w316": {
    "Arabic": {
      "hint1": "يرتبط بوجود أليل HLA-DR4.",
      "hint2": "يستجيب المرضى بشكل دراماتيكي لجرعات منخفضة من الستيرويدات.",
      "hint3": "ألم وتصلب في العضلات القريبة لدى كبار السن.",
      "pearl": "التشخيص النهائي: ألم العضلات الروماتيزمي (Polymyalgia Rheumatica) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "Genetically associated with the HLA-DR4 allele.",
      "hint2": "Patients show a dramatic response to low-dose corticosteroids.",
      "hint3": "Muscle pain and stiffness in the proximal regions among the elderly.",
      "pearl": "Definitive diagnosis: Polymyalgia Rheumatica (ألم العضلات الروماتيزمي) - Core Rheumatology."
    }
  },
  "w317": {
    "Arabic": {
      "hint1": "يعتبر البايفوسفونيت العلاج الأساسي لتقليل نشاط الخلايا العظمية.",
      "hint2": "يمكن أن يسبب تشوهات في العظام كالانحناء أو التضخم.",
      "hint3": "اضطراب أيضي عظمي يتميز بزيادة غير منظمة في إعادة البناء.",
      "pearl": "التشخيص النهائي: مرض باجيت للعظام (Paget's Disease of Bone) - من أساسيات Orthopedics."
    },
    "English": {
      "hint1": "Bisphosphonates are the primary treatment to suppress osteoclastic activity.",
      "hint2": "Can cause skeletal deformities such as bowing or enlargement.",
      "hint3": "Metabolic bone disorder characterized by disorganized bone remodeling.",
      "pearl": "Definitive diagnosis: Paget's Disease of Bone (مرض باجيت للعظام) - Core Orthopedics."
    }
  },
  "w318": {
    "Arabic": {
      "hint1": "تعتبر معظم الحالات مجهولة السبب ولكن هناك نماذج عصبية عضلية مرافقة.",
      "hint2": "يعد انحراف العمود الفقري أكثر من 10 درجات معياراً تشخيصياً.",
      "hint3": "تظهر غالباً في مرحلة النمو السريع أثناء الطفولة والمراهقة.",
      "pearl": "التشخيص النهائي: الجنف (Scoliosis) - من أساسيات Orthopedics."
    },
    "English": {
      "hint1": "Most cases are idiopathic, though neuromuscular variants also exist.",
      "hint2": "A curvature exceeding 10 degrees is the established diagnostic threshold.",
      "hint3": "Often manifests during rapid growth spurts in childhood and adolescence.",
      "pearl": "Definitive diagnosis: Scoliosis (الجنف) - Core Orthopedics."
    }
  },
  "w319": {
    "Arabic": {
      "hint1": "يعد المرضى الذين يعانون من السكري أو ضعف المناعة أكثر عرضة للإصابة.",
      "hint2": "قد تظهر الأشعة السينية علامات تآكل العظم أو انفصال السمحاق في المراحل المتأخرة.",
      "hint3": "تحدث نتيجة غزو بكتيري أو فطري لأنسجة العظم ونخاعه.",
      "pearl": "التشخيص النهائي: التهاب نخاع العظم (Osteomyelitis) - من أساسيات Orthopedics."
    },
    "English": {
      "hint1": "Patients with diabetes or immunocompromised states are at significantly higher risk.",
      "hint2": "Radiographs may show bony erosions or periosteal elevation in later stages.",
      "hint3": "Occurs due to bacterial or fungal invasion of bone and marrow tissue.",
      "pearl": "Definitive diagnosis: Osteomyelitis (التهاب نخاع العظم) - Core Orthopedics."
    }
  },
  "w320": {
    "Arabic": {
      "hint1": "يعد قطع الرباط الرسغي المستعرض جراحياً الخيار النهائي لتحرير العصب.",
      "hint2": "تظهر دراسات التوصيل العصبي بطئاً في نقل الإشارات العصبية عبر الرسغ.",
      "hint3": "ينتج عن انضغاط العصب المتوسط داخل ممر ضيق في المعصم.",
      "pearl": "التشخيص النهائي: متلازمة النفق الرسغي (Carpal Tunnel Syndrome) - من أساسيات Orthopedics."
    },
    "English": {
      "hint1": "Surgical release of the transverse carpal ligament is the definitive intervention.",
      "hint2": "Nerve conduction studies demonstrate delayed impulse latency across the wrist.",
      "hint3": "Results from compression of the median nerve within a narrow anatomical space.",
      "pearl": "Definitive diagnosis: Carpal Tunnel Syndrome (متلازمة النفق الرسغي) - Core Orthopedics."
    }
  },
  "w321": {
    "Arabic": {
      "hint1": "يمكن أن تكون المضاعفات الثانوية مثل العدوى البكتيرية مهددة للحياة.",
      "hint2": "يؤثر المرض غالباً على الأغشية المخاطية للفم قبل ظهور الطفح الجلدي.",
      "hint3": "اضطراب مناعي ذاتي نادر يهاجم الروابط بين الخلايا البشرية.",
      "pearl": "التشخيص النهائي: الفقاع الشائع (Pemphigus Vulgaris) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Secondary complications such as severe bacterial infections can be life-threatening.",
      "hint2": "Oral mucosal involvement typically precedes the appearance of skin lesions.",
      "hint3": "A rare autoimmune disorder attacking intercellular adhesion proteins.",
      "pearl": "Definitive diagnosis: Pemphigus Vulgaris (الفقاع الشائع) - Core Dermatology."
    }
  },
  "w322": {
    "Arabic": {
      "hint1": "تظهر الخزعة الجلدية ارتشاحاً خفيفاً للخلايا اللمفاوية مع تضخم طفيف.",
      "hint2": "يعاني المرضى من خلل في وظيفة الحاجز الجلدي وتفقد الرطوبة.",
      "hint3": "حالة التهابية مزمنة تظهر غالباً في سنوات الطفولة الأولى.",
      "pearl": "التشخيص النهائي: التهاب الجلد التأتبي (Atopic Dermatitis) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Histopathology reveals mild lymphocytic infiltration and slight epidermal hyperplasia.",
      "hint2": "Patients exhibit an impaired skin barrier function with significant transepidermal water loss.",
      "hint3": "A chronic inflammatory condition commonly manifesting in early childhood.",
      "pearl": "Definitive diagnosis: Atopic Dermatitis (التهاب الجلد التأتبي) - Core Dermatology."
    }
  },
  "w323": {
    "Arabic": {
      "hint1": "يلاحظ ارتشاح لمفاوي شريطي الشكل في طبقة الأدمة العلوية تحت الفحص النسيجي.",
      "hint2": "يظهر تضخم في الطبقة الحبيبية للبشرة عند الفحص المجهري.",
      "hint3": "يتميز بظهور طفح جلدي التهابي مزمن.",
      "pearl": "التشخيص النهائي: الحزاز المسطح (Lichen Planus) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "A band-like lymphocytic infiltration is noted in the upper dermis upon histological evaluation.",
      "hint2": "Hypergranulosis of the epidermis is observed upon microscopic examination.",
      "hint3": "Characterized by the appearance of a chronic inflammatory skin eruption.",
      "pearl": "Definitive diagnosis: Lichen Planus (الحزاز المسطح) - Core Dermatology."
    }
  },
  "w324": {
    "Arabic": {
      "hint1": "تتطلب العلاج بمضادات حيوية موضعية أو جهازية لمنع المضاعفات.",
      "hint2": "قد تظهر الآفات الفقاعية كبثور كبيرة ممتلئة بسائل صافٍ يتحول إلى عكر.",
      "hint3": "عدوى جلدية سطحية معدية للغاية وشائعة بين الأطفال.",
      "pearl": "التشخيص النهائي: القوباء (Impetigo) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Requires topical or systemic antibiotic treatment to prevent complications.",
      "hint2": "Bullous lesions may manifest as large blisters filled with clear fluid that turns cloudy.",
      "hint3": "A highly contagious superficial skin infection common among children.",
      "pearl": "Definitive diagnosis: Impetigo (القوباء) - Core Dermatology."
    }
  },
  "w325": {
      "Arabic": {
          "hint1": "تتفاقم هذه البقع الجلدية بعد التعرض لأشعة الشمس حيث يفشل الجلد المصاب في التسمير مقارنة بالجلد السليم.",
          "hint2": "الفحص المجهري المباشر لكشاطة الجلد بواسطة هيدروكسيد البوتاسيوم KOH يظهر خيوطاً فطرية قصيرة مع أبواغ مستديرة.",
          "hint3": "المظهر المجهري الكلاسيكي الموصوف بـ 'السباغيتي وكرات اللحم' (Spaghetti and meatballs) يؤكد التشخيص الفطري.",
          "pearl": "التشخيص النهائي: النخالية المبرقشة (Tinea Versicolor) - من أساسيات Dermatology."
      },
      "English": {
          "hint1": "Cutaneous macules fail to tan upon sun exposure, creating stark contrast against normally pigmented adjacent skin.",
          "hint2": "Direct KOH mount microscopy reveals short unbranched pseudohyphae clustered with round yeast cells.",
          "hint3": "Pathognomonic 'spaghetti and meatballs' microscopic appearance confirms Malassezia furfur overgrowth.",
          "pearl": "Definitive diagnosis: Tinea Versicolor (Pityriasis Versicolor) - Core Dermatology."
      }
  },
  "w326": {
    "Arabic": {
      "hint1": "تتضمن خيارات التدبير التحكم في المحفزات واستخدام العلاجات الموضعية المضادة للالتهاب.",
      "hint2": "يمكن أن يسبب تورماً مزمناً واحتقاناً في الأنسجة الرخوة للأنف.",
      "hint3": "اضطراب جلدي مزمن يصيب الوجه ويتميز باحمرار وتوسع الأوعية.",
      "pearl": "التشخيص النهائي: الوردية الجلدي (Rosacea) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Management options include controlling triggers and using topical anti-inflammatory therapies.",
      "hint2": "Can cause chronic swelling and hypertrophy of the soft tissues of the nose.",
      "hint3": "A chronic dermatological disorder affecting the face, characterized by redness and vascular dilation.",
      "pearl": "Definitive diagnosis: Rosacea (الوردية الجلدي) - Core Dermatology."
    }
  },
  "w327": {
    "Arabic": {
      "hint1": "يعتمد البروتوكول العلاجي على الجراحة، الكيماوي، أو العلاج الموجه.",
      "hint2": "يرتبط نمط الحياة، بما في ذلك الحمية الغنية باللحوم الحمراء، بزيادة الاحتمالية.",
      "hint3": "نمو خبيث ينشأ في الأمعاء الغليظة أو المستقيم.",
      "pearl": "التشخيص النهائي: سرطان القولون والمستقيم (Colorectal Cancer) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Treatment protocols involve surgery, chemotherapy, or targeted therapy.",
      "hint2": "Lifestyle factors, including a diet rich in red meat, are associated with increased susceptibility.",
      "hint3": "A malignant growth arising in the large intestine or the rectum.",
      "pearl": "Definitive diagnosis: Colorectal Cancer (سرطان القولون والمستقيم) - Core Oncology."
    }
  },
  "w328": {
    "Arabic": {
      "hint1": "يتم فحص العلامة الورمية سي أيه 19-9 لمراقبة الاستجابة للعلاج.",
      "hint2": "يمكن ملاحظة علامة كورفوازيه أثناء الفحص البدني.",
      "hint3": "تعتبر هذه الحالة أحد أكثر أنواع الأورام الخبيثة فتكاً في الجهاز الهضمي.",
      "pearl": "التشخيص النهائي: سرطان البنكرياس (Pancreatic Cancer) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "The tumor marker CA 19-9 is utilized to monitor response to therapeutic regimens.",
      "hint2": "Courvoisier sign is a classic clinical finding on physical examination.",
      "hint3": "This condition is considered one of the most lethal malignancies of the digestive system.",
      "pearl": "Definitive diagnosis: Pancreatic Cancer (سرطان البنكرياس) - Core Oncology."
    }
  },
  "w329": {
    "Arabic": {
      "hint1": "يُستخدم العلاج الكيميائي بمادة تيموزولوميد كجزء من البروتوكول القياسي بعد الجراحة.",
      "hint2": "يُعرف بنموه السريع وتسلله إلى أنسجة المخ المحيطة.",
      "hint3": "هو أكثر أنواع أورام الدماغ الأولية شيوعاً وعدوانية لدى البالغين.",
      "pearl": "التشخيص النهائي: الأرومة الدبقية (Glioblastoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Standard care involves surgical resection followed by temozolomide chemotherapy.",
      "hint2": "It is characterized by rapid growth and extensive infiltration into surrounding brain parenchyma.",
      "hint3": "This is the most common and aggressive primary brain malignancy in adults.",
      "pearl": "Definitive diagnosis: Glioblastoma (الأرومة الدبقية) - Core Oncology."
    }
  },
  "w330": {
    "Arabic": {
      "hint1": "يتطلب العلاج بروتوكولاً مكثفاً يجمع بين الجراحة والاستئصال الورمي الكيميائي.",
      "hint2": "يظهر رد فعل السمحاق المعروف بـ مثلث كودمان في التصوير.",
      "hint3": "هو أكثر أنواع سرطانات العظام الأولية شيوعاً لدى الأطفال والمراهقين.",
      "pearl": "التشخيص النهائي: سرطان العظام والغرن العظمي (Osteosarcoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Management requires a multimodal approach combining surgery and neoadjuvant chemotherapy.",
      "hint2": "Periosteal reaction known as Codman triangle is a diagnostic hallmark.",
      "hint3": "This is the most frequent primary malignant bone tumor in children and adolescents.",
      "pearl": "Definitive diagnosis: Osteosarcoma (سرطان العظام والغرن العظمي) - Core Oncology."
    }
  },
  "w331": {
    "Arabic": {
      "hint1": "يتم تصنيفه بناءً على نظام التقييم الدولي لحالات الجهاز العصبي الودي.",
      "hint2": "تترافق الإصابة أحياناً بمتلازمة هورنر أو إسهال مائي مزمن.",
      "hint3": "ينشأ هذا الورم من خلايا العرف العصبي في الجهاز العصبي الودي.",
      "pearl": "التشخيص النهائي: ورم الأرومة العصبية (Neuroblastoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Staging is determined by the International this condition Staging System.",
      "hint2": "Clinical presentation may involve Horner syndrome or intractable watery diarrhea.",
      "hint3": "It arises from the neural crest cells of the sympathetic nervous system.",
      "pearl": "Definitive diagnosis: Neuroblastoma (ورم الأرومة العصبية) - Core Oncology."
    }
  },
  "w332": {
    "Arabic": {
      "hint1": "يتم الاعتماد على نظام المجموعة الوطنية للأورام لدراسة النتائج وتصنيفها.",
      "hint2": "ترتبط الإصابة بمتلازمة دنيس-دراش أو متلازمة بيكويث-فيدمان.",
      "hint3": "يعد الورم الكلوي الأكثر شيوعاً عند الأطفال.",
      "pearl": "التشخيص النهائي: ورم ويلمز (Wilms' Tumor) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Staging protocols from national oncology groups are used to guide treatment intensity.",
      "hint2": "It is associated with genetic syndromes such as Denys-Drash or Beckwith-Wiedemann.",
      "hint3": "This is the most common renal malignancy occurring in pediatric patients.",
      "pearl": "Definitive diagnosis: Wilms' Tumor (ورم ويلمز) - Core Oncology."
    }
  },
  "w333": {
    "Arabic": {
      "hint1": "يظهر تحليل النخاع فراغاً خلوياً مع غياب التليف.",
      "hint2": "يظهر فحص خزعة العظم استبدال الخلايا المكونة للدم بنسيج دهني.",
      "hint3": "تتميز هذه الحالة بفشل شامل في نخاع العظم.",
      "pearl": "التشخيص النهائي: فقر الدم اللاتنسجي (Aplastic Anemia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Marrow analysis shows hypocellularity without evidence of fibrosis or malignancy.",
      "hint2": "Bone marrow biopsy reveals replacement of hematopoietic cells with adipose tissue.",
      "hint3": "This condition is characterized by a global failure of the bone marrow.",
      "pearl": "Definitive diagnosis: Aplastic Anemia (فقر الدم اللاتنسجي) - Core Hematology."
    }
  },
  "w334": {
    "Arabic": {
      "hint1": "تتحول هذه الحالة أحياناً إلى تليف في النخاع أو مرحلة حادة.",
      "hint2": "يمكن أن يترافق الاضطراب مع تضخم في الطحال بشكل شائع.",
      "hint3": "تتسم هذه الحالة بزيادة مفرطة في إنتاج كريات الدم الحمراء.",
      "pearl": "التشخيص النهائي: كثرة الحمر الحقيقية (Polycythemia Vera) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "The condition may occasionally evolve into myelofibrosis or a leukemic phase.",
      "hint2": "The disorder is commonly associated with splenomegaly.",
      "hint3": "This condition is marked by an excessive production of red blood cells.",
      "pearl": "Definitive diagnosis: Polycythemia Vera (كثرة الحمر الحقيقية) - Core Hematology."
    }
  },
  "w335": {
    "Arabic": {
      "hint1": "يحدث تطاول في زمن النزف بينما تظل اختبارات التخثر الأخرى طبيعية.",
      "hint2": "يظهر مسح الدم المحيطي نقصاً في عدد العناصر المسؤولة عن التخثر.",
      "hint3": "تتمثل هذه الحالة بانخفاض عدد الصفيحات في الدورة الدموية.",
      "pearl": "التشخيص النهائي: قلة الصفائح الدموية (Thrombocytopenia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Bleeding time is typically prolonged while other coagulation parameters remain normal.",
      "hint2": "Peripheral blood smear reveals a reduction in the count of clotting elements.",
      "hint3": "This condition consists of a decreased count of circulating platelets.",
      "pearl": "Definitive diagnosis: Thrombocytopenia (قلة الصفائح الدموية) - Core Hematology."
    }
  },
  "w336": {
    "Arabic": {
      "hint1": "يعد التوازن الهش بين التجلط والنزف هو السمة المميزة سريرياً.",
      "hint2": "يؤدي تراكم الخثرات الصغيرة إلى قصور عضوي متعدد.",
      "hint3": "تعتبر هذه الحالة اضطراباً استهلاكياً حاداً في آليات تجلط الدم.",
      "pearl": "التشخيص النهائي: التخثر المنتثر داخل الأوعية (Disseminated Intravascular Coagulation) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "The delicate clinical balance between widespread thrombosis and bleeding is hallmark.",
      "hint2": "Microvascular thrombus deposition leads to multi-organ failure.",
      "hint3": "This is an acute consumptive disorder of the blood clotting mechanisms.",
      "pearl": "Definitive diagnosis: Disseminated Intravascular Coagulation (التخثر المنتثر داخل الأوعية) - Core Hematology."
    }
  },
  "w337": {
    "Arabic": {
      "hint1": "يتم العلاج عادة عبر إعطاء الفيتامين المفقود عن طريق الحقن.",
      "hint2": "يُظهر فحص النخاع وجود أرومات ضخمة غير ناضجة.",
      "hint3": "ينتج هذا المرض عن نقص في امتصاص فيتامين حيوي من الأمعاء.",
      "pearl": "التشخيص النهائي: الأنيميا الخبيثة (Pernicious Anemia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Management typically involves intramuscular administration of the missing vitamin.",
      "hint2": "Bone marrow examination reveals the presence of large, immature megaloblastic precursors.",
      "hint3": "This disease results from a deficiency in the absorption of a vital vitamin from the gut.",
      "pearl": "Definitive diagnosis: Pernicious Anemia (الأنيميا الخبيثة) - Core Hematology."
    }
  },
  "w338": {
    "Arabic": {
      "hint1": "يؤدي تفعيل المكمل عبر المسار الكلاسيكي إلى انحلال الدم داخل الأوعية في بعض الحالات الشديدة.",
      "hint2": "قد تظهر نتائج إيجابية في فحص الغلوبولين المناعي المرتبط بسطح الخلايا.",
      "hint3": "يؤدي هذا الاضطراب إلى تدمير مبكر لخلايا الدم الحمراء بواسطة الجهاز المناعي.",
      "pearl": "التشخيص النهائي: فقر الدم الانحلالي المناعي الذاتي (Autoimmune Hemolytic Anemia) - من أساسيات Hematology."
    },
    "English": {
      "hint1": "Activation of the complement system via the classical pathway leads to intravascular hemolysis.",
      "hint2": "Testing reveals a positive result for antibodies or complement proteins bound to cell surfaces.",
      "hint3": "This disorder involves premature destruction of red blood cells by the immune system.",
      "pearl": "Definitive diagnosis: Autoimmune Hemolytic Anemia (فقر الدم الانحلالي المناعي الذاتي) - Core Hematology."
    }
  },
  "w339": {
    "Arabic": {
      "hint1": "قد يؤدي تجاهل العلاج إلى استقرار الميكروب في المرارة مما يخلق حالة حامل مزمن.",
      "hint2": "يؤدي تورم الأنسجة اللمفاوية في الأمعاء إلى خطر الانثقاب المعوي.",
      "hint3": "عدوى بكتيرية جهازية تنتقل عبر الغذاء أو الماء الملوث.",
      "pearl": "التشخيص النهائي: حمى التيفوئيد (Typhoid Fever) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Chronic carriage can occur if the pathogen persists within the gallbladder.",
      "hint2": "Inflammation of Peyer's patches carries a risk of intestinal perforation.",
      "hint3": "A systemic bacterial infection transmitted through contaminated food or water.",
      "pearl": "Definitive diagnosis: Typhoid Fever (حمى التيفوئيد) - Core Infectious Diseases."
    }
  },
  "w340": {
    "Arabic": {
      "hint1": "يؤدي التلف الكلوي والكبدي الحاد إلى ارتفاع معدل الوفيات دون رعاية داعمة.",
      "hint2": "تؤدي الإصابة إلى تثبيط نخاع العظم ونقص شديد في الصفائح الدموية.",
      "hint3": "عدوى فيروسية حادة تنتقل عن طريق البعوض في المناطق المدارية.",
      "pearl": "التشخيص النهائي: الحمى الصفراء (Yellow Fever) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Acute renal and hepatic damage lead to high mortality without intensive supportive care.",
      "hint2": "Infection often causes bone marrow suppression and severe thrombocytopenia.",
      "hint3": "An acute viral infection transmitted by mosquitoes in tropical regions.",
      "pearl": "Definitive diagnosis: Yellow Fever (الحمى الصفراء) - Core Infectious Diseases."
    }
  },
  "w341": {
    "Arabic": {
      "hint1": "يظل العامل الممرض كامناً في الخلايا البائية مدى الحياة بعد الإصابة الأولية.",
      "hint2": "تظهر الخلايا اللمفاوية غير النمطية بوضوح في فحص لطاخة الدم.",
      "hint3": "عدوى فيروسية شائعة غالباً ما تصيب المراهقين والشباب.",
      "pearl": "التشخيص النهائي: كثرة الوحيدات الخمجية (Infectious Mononucleosis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "The pathogen remains latent in B-lymphocytes for the host's lifetime.",
      "hint2": "Atypical lymphocytes are prominent features on peripheral blood smears.",
      "hint3": "A common viral infection frequently affecting adolescents and young adults.",
      "pearl": "Definitive diagnosis: Infectious Mononucleosis (كثرة الوحيدات الخمجية) - Core Infectious Diseases."
    }
  },
  "w342": {
      "Arabic": {
          "hint1": "تاريخ مخالطة المريض للكلاب في بيئة ريفية أو رعي الأغنام يشكل مفتاح الاشتباه الوبائي الأساسي.",
          "hint2": "يظهر التصوير الشعاعي كيسة كبدية محاطة بكلس دائري مع أغشية داخلية متموجة طافية.",
          "hint3": "العلامة الشعاعية لـ 'زنبق الماء' (Water-lily sign) تدل على انفصال الغشاء الداخلي للكيسة المائية الطفيلية.",
          "pearl": "التشخيص النهائي: الكيسة العدارية (Hydatid Cyst) - من أساسيات Parasitology & Surgery."
      },
      "English": {
          "hint1": "Epidemiological history of close contact with rural pastoral dogs or sheep farming serves as the primary diagnostic clue.",
          "hint2": "Cross-sectional imaging demonstrates a well-defined calcified hepatic cyst harboring undulating, detached internal membranes.",
          "hint3": "The pathognomonic radiologic 'water-lily sign' reflects endocyst detachment floating within cystic fluid.",
          "pearl": "Definitive diagnosis: Hydatid Cyst (Echinococcosis) - Core Parasitology & Surgery."
      }
  },
  "w343": {
    "Arabic": {
      "hint1": "تنتج عن بكتيريا حلزونية الشكل تنتقل عبر نوع معين من المفصليات.",
      "hint2": "قد تؤدي إلى التهاب السحايا أو شلل العصب الوجهي في مراحلها المبكرة.",
      "hint3": "عدوى بكتيرية تنتقل عن طريق لدغة القراد.",
      "pearl": "التشخيص النهائي: داء لايم (Lyme Disease) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Caused by spirochetes transmitted by the bite of Ixodes ticks.",
      "hint2": "May lead to meningitis or unilateral facial nerve palsy in early disseminated stages.",
      "hint3": "A bacterial infection transmitted primarily through tick bites.",
      "pearl": "Definitive diagnosis: Lyme Disease (داء لايم) - Core Infectious Diseases."
    }
  },
  "w344": {
    "Arabic": {
      "hint1": "تتسبب بها بكتيريا ملتفة الشكل تعيش في الكلى لدى الحيوانات البرية والأليفة.",
      "hint2": "تسبب التهاب الملتحمة دون إفرازات قيحية.",
      "hint3": "مرض حيواني المصدر ينتشر في المناطق الاستوائية والمناطق ذات الفيضانات.",
      "pearl": "التشخيص النهائي: داء البريميات (Leptospirosis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Caused by thin, aerobic spirochetes that colonize the kidneys of reservoir hosts.",
      "hint2": "Characterized by conjunctival suffusion in the absence of purulent discharge.",
      "hint3": "A zoonotic disease prevalent in tropical regions and areas prone to flooding.",
      "pearl": "Definitive diagnosis: Leptospirosis (داء البريميات) - Core Infectious Diseases."
    }
  },
  "w345": {
    "Arabic": {
      "hint1": "العلاج المعتمد يتضمن مزيجاً من البيريميثامين والسلفاديازين.",
      "hint2": "تشكل خطراً قاتلاً للمرضى الذين يعانون من نقص المناعة المكتسب.",
      "hint3": "عدوى طفيلية أولية تنتقل عبر الاتصال بفضلات القطط.",
      "pearl": "التشخيص النهائي: داء المقوسات (Toxoplasmosis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Standard treatment involves a combination of pyrimethamine and sulfadiazine.",
      "hint2": "Can cause life-threatening encephalitis in patients with advanced immunodeficiency.",
      "hint3": "A protozoan infection commonly acquired through contact with infected feline feces.",
      "pearl": "Definitive diagnosis: Toxoplasmosis (داء المقوسات) - Core Infectious Diseases."
    }
  },
  "w346": {
    "Arabic": {
      "hint1": "يستخدم دواء البنزنيدازول كعلاج أساسي للقضاء على الطفيلي.",
      "hint2": "تؤدي إلى تضخم المريء أو القولون بسبب تدمير الضفائر العصبية المعوية.",
      "hint3": "عدوى طفيلية تنتشر في مناطق معينة من أمريكا اللاتينية.",
      "pearl": "التشخيص النهائي: داء شاغاس (Chagas Disease) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Benznidazole is a key pharmacological agent used to eliminate the causative protozoa.",
      "hint2": "Causes megacolon or megaesophagus due to destruction of the enteric nerve plexuses.",
      "hint3": "A parasitic infection endemic to regions of Latin America.",
      "pearl": "Definitive diagnosis: Chagas Disease (داء شاغاس) - Core Infectious Diseases."
    }
  },
  "w347": {
    "Arabic": {
      "hint1": "العلاج المفضل للحالات الشديدة هو الفوريكونازول.",
      "hint2": "ترتبط الحالات الغازية بمرضى نقص المناعة الشديد أو زارعي الأعضاء.",
      "hint3": "عدوى فطرية تنشأ غالباً عن استنشاق الأبواغ الموجودة في البيئة.",
      "pearl": "التشخيص النهائي: داء الرشاشيات (Aspergillosis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Voriconazole is currently the gold-standard treatment for invasive clinical presentations.",
      "hint2": "Invasive forms are most common in patients with profound neutropenia or organ transplants.",
      "hint3": "A fungal infection primarily acquired through the inhalation of environmental spores.",
      "pearl": "Definitive diagnosis: Aspergillosis (داء الرشاشيات) - Core Infectious Diseases."
    }
  },
  "w348": {
    "Arabic": {
      "hint1": "تعتبر المزارع المخبرية وسيلة دقيقة لتأكيد نمو هذه الكائنات الخميرية.",
      "hint2": "يُشاهد في الفحص المجهري خيوط فطرية وبراعم كاذبة.",
      "hint3": "تعتبر هذه العدوى من أكثر مسببات الالتهابات الفطرية شيوعاً في جسم الإنسان.",
      "pearl": "التشخيص النهائي: داء المبيضات (Candidiasis) - من أساسيات Infectious Diseases."
    },
    "English": {
      "hint1": "Laboratory culture is a reliable method for confirming the presence of these yeast organisms.",
      "hint2": "Microscopic examination reveals budding yeast and pseudohyphae.",
      "hint3": "This infection is one of the most common fungal inflammatory conditions in humans.",
      "pearl": "Definitive diagnosis: Candidiasis (داء المبيضات) - Core Infectious Diseases."
    }
  },
  "w349": {
    "Arabic": {
      "hint1": "العلاجات الهرمونية تهدف إلى تثبيط النشاط المبيضي للسيطرة على الأعراض.",
      "hint2": "تستجيب الأنسجة غير الطبيعية للهرمونات الأنثوية الدورية.",
      "hint3": "تتميز بنمو أنسجة مشابهة للبطانة الرحمية في مواقع خارج تجويف الرحم.",
      "pearl": "التشخيص النهائي: بطانة الرحم المهاجرة (Endometriosis) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Hormonal therapies aim to suppress ovarian activity to manage symptoms.",
      "hint2": "The ectopic tissue remains responsive to cyclical female hormones.",
      "hint3": "Characterized by the presence of tissue similar to the uterine lining in locations outside the uterine cavity.",
      "pearl": "Definitive diagnosis: Endometriosis (بطانة الرحم المهاجرة) - Core Obstetrics and Gynecology."
    }
  },
  "w350": {
    "Arabic": {
      "hint1": "يُصنف النمط بناءً على المسافة بين حافة المشيمة والفوهة الداخلية لعنق الرحم.",
      "hint2": "تزداد احتمالية الإصابة مع تكرار العمليات القيصرية والولادات المتعددة.",
      "hint3": "تحدث هذه الحالة عندما يغطي النسيج المشيمي عنق الرحم جزئياً أو كلياً.",
      "pearl": "التشخيص النهائي: المشيمة المزاحة (Placenta Previa) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Classification is based on the distance between the placental edge and the internal cervical os.",
      "hint2": "Risk increases with a history of prior cesarean sections and multiparity.",
      "hint3": "Occurs when the chorionic tissue partially or completely covers the cervical os.",
      "pearl": "Definitive diagnosis: Placenta Previa (المشيمة المزاحة) - Core Obstetrics and Gynecology."
    }
  },
  "w351": {
    "Arabic": {
      "hint1": "تعتبر الولادة الفورية هي الإجراء العلاجي الأساسي لإنقاذ الأم والجنين.",
      "hint2": "يُشاهد في الحالات الشديدة تلون عضلة الرحم بالدم فيما يعرف بـ 'رحم كوفيلير'.",
      "hint3": "تتميز بالانفصال المبكر للمشيمة عن جدار الرحم قبل خروج الجنين.",
      "pearl": "التشخيص النهائي: انفصال المشيمة المبكر (Abruptio Placentae) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Immediate delivery is the primary therapeutic intervention to save both mother and fetus.",
      "hint2": "Severe cases may present with extravasation of blood into the myometrium, known as Couvelaire uterus.",
      "hint3": "Characterized by the premature separation of the placenta from the uterine wall before fetal delivery.",
      "pearl": "Definitive diagnosis: Abruptio Placentae (انفصال المشيمة المبكر) - Core Obstetrics and Gynecology."
    }
  },
  "w352": {
    "Arabic": {
      "hint1": "تؤثر الحالة سلباً على نوعية حياة الحامل وقد تسبب مضاعفات كبدية.",
      "hint2": "قد تتطلب الإدخال للمستشفى لتلقي السوائل الوريدية والتغذية.",
      "hint3": "تتضمن هذه الحالة غثياناً وقيئاً شديداً وغير قابل للسيطرة خلال فترة الحمل.",
      "pearl": "التشخيص النهائي: القيء المفرط الحملي (Hyperemesis Gravidarum) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "The condition significantly impairs the quality of life and may lead to hepatic complications.",
      "hint2": "Hospitalization is often required for intravenous fluid replacement and nutritional support.",
      "hint3": "Involves severe, intractable nausea and vomiting during the gestation period.",
      "pearl": "Definitive diagnosis: Hyperemesis Gravidarum (القيء المفرط الحملي) - Core Obstetrics and Gynecology."
    }
  },
  "w353": {
    "Arabic": {
      "hint1": "تتطلب المتابعة الدقيقة قياسات تسلسلية لمستويات الهرمون الموجه للغدد التناسلية المشيمية لمنع حدوث أورام خبيثة لاحقة.",
      "hint2": "قد تعاني المريضة من غثيان وقيء شديد يفوق الحالات الفسيولوجية الطبيعية.",
      "hint3": "يحدث خلل في التخصيب يؤدي إلى نمو نسيج مشيمي غير طبيعي داخل الرحم.",
      "pearl": "التشخيص النهائي: الحمل العنقودي (Hydatidiform Mole) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Strict monitoring of serial human chorionic gonadotropin levels is essential to exclude subsequent malignant transformation.",
      "hint2": "Patients may experience hyperemesis gravidarum more severe than typical pregnancy physiology.",
      "hint3": "An abnormality in fertilization leads to the growth of atypical placental tissue within the uterus.",
      "pearl": "Definitive diagnosis: Hydatidiform Mole (الحمل العنقودي) - Core Obstetrics and Gynecology."
    }
  },
  "w354": {
    "Arabic": {
      "hint1": "تؤدي نوبات التهاب الأنسجة المبطنة المتموضعة في العضلة إلى آلام حادة أثناء الدورة الشهرية.",
      "hint2": "يصعب التمييز بينها وبين الأورام العضلية الملساء في الفحوصات الأولية.",
      "hint3": "حالة حميدة تتميز بوجود أنسجة بطانة الرحم داخل الطبقة العضلية للرحم.",
      "pearl": "التشخيص النهائي: العضال الغدي الرحمي (Adenomyosis) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Cyclical hemorrhage within the ectopic glandular tissue leads to significant dysmenorrhea.",
      "hint2": "It is often clinically indistinguishable from leiomyomas during initial pelvic examination.",
      "hint3": "A benign condition characterized by the presence of endometrial tissue within the myometrium.",
      "pearl": "Definitive diagnosis: Adenomyosis (العضال الغدي الرحمي) - Core Obstetrics and Gynecology."
    }
  },
  "w355": {
    "Arabic": {
      "hint1": "تعتبر السيطرة الصارمة على مستويات الجلوكوز وضغط الدم الركيزة الأساسية للوقاية من تدهور الحالة.",
      "hint2": "تؤدي الأوعية الدموية المسدودة إلى نقص تروية ونمو أوعية جديدة غير طبيعية.",
      "hint3": "أحد المضاعفات الوعائية الدقيقة المزمنة الناتجة عن ارتفاع سكر الدم لفترات طويلة.",
      "pearl": "التشخيص النهائي: اعتلال الشبكية السكري (Diabetic Retinopathy) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Strict metabolic control of glucose and systemic blood pressure is fundamental to preventing disease progression.",
      "hint2": "Vascular occlusion results in retinal ischemia and subsequent proliferative neovascularization.",
      "hint3": "A chronic microvascular complication resulting from prolonged hyperglycemia.",
      "pearl": "Definitive diagnosis: Diabetic Retinopathy (اعتلال الشبكية السكري) - Core Ophthalmology."
    }
  },
  "w356": {
    "Arabic": {
      "hint1": "تستخدم اختبارات شبكة معينة للكشف المبكر عن تغيرات الإبصار لدى كبار السن.",
      "hint2": "يؤدي تراكم السوائل تحت الشبكية إلى تشوه الرؤية الخطية أو انحنائها.",
      "hint3": "تدهور تدريجي في الرؤية المركزية الحادة المرتبط بتقدم العمر.",
      "pearl": "التشخيص النهائي: الضمور البقعي (Macular Degeneration) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "A specialized grid test is commonly used to screen elderly patients for central visual disturbances.",
      "hint2": "Subretinal fluid accumulation causes the distortion of straight lines, known as metamorphopsia.",
      "hint3": "A progressive deterioration of sharp, central vision associated with advancing age.",
      "pearl": "Definitive diagnosis: Macular Degeneration (الضمور البقعي) - Core Ophthalmology."
    }
  },
  "w357": {
    "Arabic": {
      "hint1": "يعتمد التشخيص الدقيق على الفحص الدقيق للمحيط باستخدام عدسات خاصة بعد توسيع الحدقة.",
      "hint2": "تتطلب التدخل الجراحي الفوري لإعادة تثبيت الأنسجة ومنع فقدان البصر الدائم.",
      "hint3": "حالة طبية طارئة تنفصل فيها الطبقة العصبية الحساسة للضوء عن الطبقة الداعمة لها.",
      "pearl": "التشخيص النهائي: انفصال الشبكية (Retinal Detachment) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Accurate diagnosis relies on thorough peripheral fundus examination with specialized lenses after pupillary dilation.",
      "hint2": "Prompt surgical intervention is required to reattach the tissues and prevent permanent blindness.",
      "hint3": "An ophthalmic emergency where the light-sensitive layer separates from the underlying supporting tissue.",
      "pearl": "Definitive diagnosis: Retinal Detachment (انفصال الشبكية) - Core Ophthalmology."
    }
  },
  "w358": {
    "Arabic": {
      "hint1": "في الحالات الشديدة، قد يتطلب الأمر إدخال فتيلة قطنية مشبعة بالدواء لضمان وصوله للعمق.",
      "hint2": "تظهر المعاينة السريرية تورماً واحمراراً في جلد المجرى السمعي.",
      "hint3": "يحدث التهاب في القناة السمعية الناتجة عن التعرض المستمر للرطوبة.",
      "pearl": "التشخيص النهائي: التهاب الأذن الخارجية (Otitis Externa) - من أساسيات Otolaryngology."
    },
    "English": {
      "hint1": "Severe cases may necessitate the insertion of a medicated wick to ensure delivery to the deeper structures.",
      "hint2": "Clinical examination reveals edema and erythema of the skin lining the canal.",
      "hint3": "Inflammation often arises from prolonged exposure to moisture within the auditory canal.",
      "pearl": "Definitive diagnosis: Otitis Externa (التهاب الأذن الخارجية) - Core Otolaryngology."
    }
  },
  "w359": {
    "Arabic": {
      "hint1": "في الحالات المستعصية، قد تُستخدم حقن الجنتاميسين داخل الطبلة لتثبيط الوظيفة الدهليزية.",
      "hint2": "يحدث الشعور بالضغط أو الامتلاء داخل الأذن المتضررة.",
      "hint3": "اضطراب يصيب الأذن الداخلية ويؤثر على التوازن والسمع.",
      "pearl": "التشخيص النهائي: مرض مينيير (Meniere's Disease) - من أساسيات Otolaryngology."
    },
    "English": {
      "hint1": "In refractory cases, intratympanic gentamicin injections may be used to ablate vestibular function.",
      "hint2": "A sensation of pressure or fullness is common within the involved ear.",
      "hint3": "A disorder affecting the inner ear that impairs both balance and hearing.",
      "pearl": "Definitive diagnosis: Meniere's Disease (مرض مينيير) - Core Otolaryngology."
    }
  },
  "w360": {
    "Arabic": {
      "hint1": "تتحسن الأعراض عادة بشكل تلقائي خلال أسابيع مع تكيف الجهاز العصبي المركزي.",
      "hint2": "يظهر فحص العين وجود رأرأة أفقية باتجاه الأذن السليمة.",
      "hint3": "التهاب يصيب الهياكل المسؤولة عن التوازن داخل الأذن.",
      "pearl": "التشخيص النهائي: التهاب التيه الأذني (Labyrinthitis) - من أساسيات Otolaryngology."
    },
    "English": {
      "hint1": "Symptoms typically resolve spontaneously within weeks as the central nervous system compensates.",
      "hint2": "Ocular examination reveals horizontal nystagmus directed toward the healthy ear.",
      "hint3": "Inflammation involving the structures responsible for balance within the ear.",
      "pearl": "Definitive diagnosis: Labyrinthitis (التهاب التيه الأذني) - Core Otolaryngology."
    }
  },
  "w401": {
      "Arabic": {
          "hint1": "الشكوى الرئيسية هي تقرحات فموية قلاعية شديدة الإيلام تتكرر دورياً على مدار العام.",
          "hint2": "الفحص العيني يظهر عتامة والتهاب عنبية مع ترسب صديدي أبيض في قاع الغرفة الأمامية للعين (Hypopyon).",
          "hint3": "تشكل بثرة التهابية معقمة عقب وخز الجلد بإبرة فحص معقمة (اختبار الباثيرجي الإيجابي Pathergy test).",
          "pearl": "التشخيص النهائي: مرض بهجت (Behcet Disease) - من أساسيات Rheumatology & Ophthalmology."
      },
      "English": {
          "hint1": "Hallmarked by recurrent, exquisitely painful aphthous mouth ulcers recurring multiple times throughout the year.",
          "hint2": "Slit-lamp examination reveals anterior uveitis with layering of white blood cells in the anterior chamber (hypopyon).",
          "hint3": "Development of a sterile erythematous pustule 48 hours after a sterile oblique needle stick confirms a positive pathergy sign.",
          "pearl": "Definitive diagnosis: Behcet Disease (Silk Road Disease) - Core Rheumatology."
      }
  },
  "w402": {
    "Arabic": {
      "hint1": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Rheumatology و Dermatology و Pathology)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "hint2": "المظاهر السريرية الأساسية تتضمن أعراضاً وعلامات موجهة ترتبط بـ (Rheumatology).",
      "hint3": "المصطلح الطبي المعني يبدأ بحرف (ت) ويعد من أهم موضوعات التشخيص التفريقي.",
      "pearl": "التشخيص النهائي: تصلب الجلد (Scleroderma) - من أساسيات Rheumatology."
    },
    "English": {
      "hint1": "A clinically significant condition studied thoroughly within Rheumatology & Dermatology & Pathology, exhibiting characteristic pathophysiologic mechanisms.",
      "hint2": "Key clinical features and presentation are intrinsically related to Rheumatology.",
      "hint3": "The medical terminology starts with \"S\" and forms an essential component of clinical differential diagnosis.",
      "pearl": "Definitive diagnosis: Scleroderma (تصلب الجلد) - Core Rheumatology."
    }
  },
  "w404": {
      "Arabic": {
          "hint1": "ألم عظمي عميق مستمر يزداد ليلاً ويصيب الحوض أو الكتف لدى مريض يتجاوز سن الخمسين عاماً.",
          "hint2": "الأشعة السينية تظهر بؤرة تحلل عظمي مع تكلسات مميزة تسمى حلقات وأقواس الفشار (Rings and arcs / Popcorn).",
          "hint3": "الخزعة النسيجية تؤكد تكاثر خلايا غضروفية غير نمطية مع غياب تام لتكون النسيج العظمي المسرطن.",
          "pearl": "التشخيص النهائي: الغرن الغضروفي (Chondrosarcoma) - من أساسيات Orthopedic Oncology."
      },
      "English": {
          "hint1": "Deep, insidious musculoskeletal bone pain predilecting the pelvis or proximal femur in patients past their fifth decade.",
          "hint2": "Radiography demonstrates aggressive cortical expansion and intralesional 'rings-and-arcs' punctate calcifications.",
          "hint3": "Histological confirmation reveals atypical chondrocytes embedded within chondroid matrix completely devoid of osteoid.",
          "pearl": "Definitive diagnosis: Chondrosarcoma - Core Orthopedic Oncology."
      }
  },
  "w405": {
    "Arabic": {
      "hint1": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Urology و Pathology و Internal Medicine)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "hint2": "المظاهر السريرية الأساسية تتضمن أعراضاً وعلامات موجهة ترتبط بـ (Urology).",
      "hint3": "المصطلح الطبي المعني يبدأ بحرف (ت) ويعد من أهم موضوعات التشخيص التفريقي.",
      "pearl": "التشخيص النهائي: تضخم البروستاتا الحميد (Benign Prostatic Hyperplasia) - من أساسيات Urology."
    },
    "English": {
      "hint1": "A clinically significant condition studied thoroughly within Urology & Pathology & Internal Medicine, exhibiting characteristic pathophysiologic mechanisms.",
      "hint2": "Key clinical features and presentation are intrinsically related to Urology.",
      "hint3": "The medical terminology starts with \"B\" and forms an essential component of clinical differential diagnosis.",
      "pearl": "Definitive diagnosis: Benign Prostatic Hyperplasia (تضخم البروستاتا الحميد) - Core Urology."
    }
  },
  "w407": {
      "Arabic": {
          "hint1": "قرحات هضمية متكررة ومعندة على العلاج ومصحوبة بإسهال مائي مزمن لا يستجيب لمضادات الحموضة التقليدية.",
          "hint2": "قياس الغاسترين الصائم يظهر أرقاماً خيالية تتجاوز 1000 بيكوغرام/مل مع حموضة معدية شديدة.",
          "hint3": "اختبار حقن هرمون السيكريتين يسبب ارتفاعاً متناقضاً غير متوقع في غاسترين المصل بدلاً من تثبيطه.",
          "pearl": "التشخيص النهائي: متلازمة زولينجر-إليسون (Zollinger-Ellison Syndrome) - من أساسيات Gastroenterology."
      },
      "English": {
          "hint1": "Refractory, recurrent peptic ulcerations extending into the distal duodenum or jejunum alongside persistent secretory diarrhea.",
          "hint2": "Fasting serum gastrin levels exceed 1000 pg/mL in the setting of basal gastric acid hypersecretion (pH < 2.0).",
          "hint3": "Intravenous secretin administration paradoxically triggers a sharp rise in serum gastrin instead of normal physiological inhibition.",
          "pearl": "Definitive diagnosis: Zollinger-Ellison Syndrome (Gastrinoma) - Core Gastroenterology & Endocrinology."
      }
  },
  "w409": {
    "Arabic": {
      "hint1": "حالة مرضية هامة تدرس بعناية ضمن تخصصات (Cardiology و Vascular Surgery و Physiology)، وترتبط بآليات فسيولوجية وإمراضية محددة.",
      "hint2": "المظاهر السريرية الأساسية تتضمن أعراضاً وعلامات موجهة ترتبط بـ (Cardiology).",
      "hint3": "المصطلح الطبي المعني يبدأ بحرف (ا) ويعد من أهم موضوعات التشخيص التفريقي.",
      "pearl": "التشخيص النهائي: ارتجاع الصمام ثلاثي الشرفات (Tricuspid Regurgitation) - من أساسيات Cardiology."
    },
    "English": {
      "hint1": "A clinically significant condition studied thoroughly within Cardiology & Vascular Surgery & Physiology, exhibiting characteristic pathophysiologic mechanisms.",
      "hint2": "Key clinical features and presentation are intrinsically related to Cardiology.",
      "hint3": "The medical terminology starts with \"T\" and forms an essential component of clinical differential diagnosis.",
      "pearl": "Definitive diagnosis: Tricuspid Regurgitation (ارتجاع الصمام ثلاثي الشرفات) - Core Cardiology."
    }
  },
  "w412": {
      "Arabic": {
          "hint1": "مريض مسن يعاني من رجفان أذيني يصرخ من ألم بطني ممزق بينما يظهر جدار بطنه ليناً تماماً بالفحص السريري.",
          "hint2": "التناقض الصارخ بين شدة الألم الشكوى وفقر علامات الفحص البدني هو المفتاح السريري الحاسم لتشخيص هذه الكارثة الوعائية.",
          "hint3": "الأشعة المقطعية للشرايين المساريقية CTA تكشف عن انصمام حاد يقطع تدفق الدم داخل الشريان المساريقي العلوي SMA.",
          "pearl": "التشخيص النهائي: نقص التروية المساريقية (Mesenteric Ischemia) - من أساسيات Emergency Surgery."
      },
      "English": {
          "hint1": "An elderly patient with atrial fibrillation presenting with severe, agonizing visceral abdominal pain despite an initially benign, soft belly.",
          "hint2": "The classic clinical hallmark: severe pain completely out of proportion to unremarkable initial abdominal palpation.",
          "hint3": "Mesenteric CTA definitively reveals acute cut-off and thrombus within the main trunk of the superior mesenteric artery.",
          "pearl": "Definitive diagnosis: Acute Mesenteric Ischemia - Core Vascular & Emergency Surgery."
      }
  },
  "w413": {
      "Arabic": {
          "hint1": "طفل غير ملقح يعاني من احتقان حلقي شديد وتورم هائل في جانبي العنق يمنحه مظهر 'عنق الثور' المتضخم.",
          "hint2": "فحص الفم يظهر غشاءً ليفياً رمادياً سميكاً ملتصقاً بجدار الحلق ينزف دماً ناصعاً عند محاولة كشطه بخافض اللسان.",
          "hint3": "ذيفان جرثومي يثبط عامل الاستطالة EF-2 ويستدعي إعطاء الترياق المضاد للسم فورياً لإنقاذ القلب من التوقف.",
          "pearl": "التشخيص النهائي: الخناق (Diphtheria) - من أساسيات Pediatric Infectious Diseases."
      },
      "English": {
          "hint1": "An unvaccinated pediatric patient presenting with sore throat, profound cervical lymphadenopathy, and a dramatic 'bull neck'.",
          "hint2": "Oropharyngeal examination reveals a thick, firmly adherent grey pseudomembrane over the posterior pharynx that bleeds on scraping.",
          "hint3": "Bacterial exotoxin inactivating elongation factor 2 (EF-2) mandating prompt administration of equine antitoxin.",
          "pearl": "Definitive diagnosis: Diphtheria - Core Pediatric Infectious Disease."
      }
  },
  "w414": {
      "Arabic": {
          "hint1": "رضيع يعاني من سوء هضم وإسهال دهني متكرر ورائحة ملحية فاقعة عند تقبيل جلده بواسطة والدته.",
          "hint2": "تكرار الإصابة بالالتهابات الرئوية الشديدة وتوسع الشعب الهوائية مع استعمار جرثومي بالبكتيريا الزائفة الزنجارية.",
          "hint3": "اختبار قياس كلوريد العرق (Sweat test) يظهر تركيزاً مرتفعاً جداً لكلوريد العرق يتجاوز 60 مليمول في اللتر.",
          "pearl": "التشخيص النهائي: التليف الكيسي (Cystic Fibrosis) - من أساسيات Pediatric Pulmonology."
      },
      "English": {
          "hint1": "An infant presenting with foul-smelling steatorrhea, failure to thrive, and a distinct salty taste when kissed by parents.",
          "hint2": "Bronchiectasis complicated by recurrent lower respiratory tract infections with mucoid Pseudomonas aeruginosa strains.",
          "hint3": "Quantitative sweat chloride iontophoresis yielding diagnostic concentrations exceeding 60 mmol/L on two occasions.",
          "pearl": "Definitive diagnosis: Cystic Fibrosis - Core Pediatric Pulmonology & Genetics."
      }
  },
  "w417": {
      "Arabic": {
          "hint1": "إسهال دهني رغوي كريه الرائحة يطفو في المرحاض وتجشؤ برائحة البيض الفاسد بعد شرب مياه جدول جبلي أثناء التخييم.",
          "hint2": "الفحص المجهري للبراز يكشف عن أكياس بيضاوية أو كائنات طفيلية كمثرية مسوطة تمتلك نواتين تمنحها مظهر 'الوجه الضاحك'.",
          "hint3": "طفيلي العفج الملتصق بالقرص الماص دون دم في البراز، والذي يستجيب بسرعة فائقة لجرعات الميترونيدازول.",
          "pearl": "التشخيص النهائي: داء الجيارديات (Giardiasis) - من أساسيات Clinical Parasitology."
      },
      "English": {
          "hint1": "Foul-smelling, greasy, buoyant diarrhea paired with rotten-egg sulfur burps following wilderness stream-water consumption.",
          "hint2": "Stool wet mount microscopy discloses pear-shaped flagellated trophozoites featuring two symmetrical nuclei resembling an owl's face.",
          "hint3": "Non-invasive duodenal attachment via ventral suction disk provoking malabsorptive steatorrhea reversible with Metronidazole.",
          "pearl": "Definitive diagnosis: Giardiasis (Beaver Fever) - Core Clinical Parasitology."
      }
  },
  "w419": {
      "Arabic": {
          "hint1": "فقدان مستمر للشغف والمتعة في كافة الأنشطة اليومية مع مزاج سوداوي مستمر يستمر لأكثر من أسبوعين متتاليين.",
          "hint2": "تراجع حاد في التركيز واضطراب شديد في النوم مع أفكار متكررة بالرغبة في الموت أو إيذاء النفس.",
          "hint3": "تحقق 5 على الأقل من معايير SIG E CAPS التشخيصية الكلاسيكية واستجابة الحالة لمثبطات السيروتونين SSRIs.",
          "pearl": "التشخيص النهائي: الاضطراب الاكتئابي الجسيم (Major Depressive Disorder) - من أساسيات Psychiatry."
      },
      "English": {
          "hint1": "Pervasive depressed mood and profound loss of interest in all previously enjoyable activities persisting for over two weeks.",
          "hint2": "Marked diurnal mood variation, insomnia or hypersomnia, feelings of inappropriate guilt, and recurrent suicidal ideation.",
          "hint3": "Fulfillment of at least 5 SIG E CAPS diagnostic criteria with therapeutic response to SSRI antidepressants and CBT.",
          "pearl": "Definitive diagnosis: Major Depressive Disorder (MDD) - Core Psychiatry."
      }
  },
  "w420": {
      "Arabic": {
          "hint1": "طفل صغير دون سن الثانية يخرج برازاً مدمماً بلون النبيذ الأحمر الداكن بغزارة دون أي بكاء أو ألم بطني واضح.",
          "hint2": "التشوه الجنيني الأشهر في الأمعاء الدقيقة الذي يخضع لقاعدة الاثنان الشهيرة (Rule of 2s).",
          "hint3": "الفحص النووي بالمسح بالتكنيشيوم 99m يظهر بؤرة التقاط وظيفية مضيئة في الحفرة الحرقفية اليمنى تمثل مخاطية معدية منتبذة.",
          "pearl": "التشخيص النهائي: رتج ميكل (Meckel Diverticulum) - من أساسيات Pediatric Surgery."
      },
      "English": {
          "hint1": "A 2-year-old toddler presenting with sudden-onset, profuse, painless rectal bleeding producing currant-jelly or maroon stool.",
          "hint2": "Conforms meticulously to the famous embryologic 'Rule of 2s' on the antimesenteric border of the terminal ileum.",
          "hint3": "Technetium-99m pertechnetate scintigraphy lights up an ectopic focus of acid-secreting gastric mucosa in the right lower quadrant.",
          "pearl": "Definitive diagnosis: Meckel Diverticulum - Core Pediatric Surgery."
      }
  },
  "w422": {
      "Arabic": {
          "hint1": "ألم وجهي مبرح يشبه الصعقة الكهربائية الخاطفة يستمر لثوانٍ في الخد والفك ويجعل المريض يتلوى من شدة الألم.",
          "hint2": "تستثار النوبة بلمس منطقة محددة بالوجه أو أثناء غسيل الوجه وتنظيف الأسنان برقة تامة (Trigger zones).",
          "hint3": "انضغاط العصب القحفي الخامس بحلقة شريانية مخيخية، واستجابة الألم الدراماتيكية لعقار الكاربامازيبين.",
          "pearl": "التشخيص النهائي: ألم العصب ثلاثي التوائم (Trigeminal Neuralgia) - من أساسيات Clinical Neurology."
      },
      "English": {
          "hint1": "Sudden, brief paroxysms of unilateral lancinating electric shock-like pain shooting across the cheek and jawline.",
          "hint2": "Provoked by trivial cutaneous stimulation within trigger zones, such as gentle breezes, chewing, or light touch.",
          "hint3": "Neurovascular compression of the fifth cranial nerve root by the superior cerebellar artery, responding to Carbamazepine.",
          "pearl": "Definitive diagnosis: Trigeminal Neuralgia (Tic Douloureux) - Core Neurology."
      }
  },
  "w427": {
      "Arabic": {
          "hint1": "مدخن مسن يعاني من ألم في الكتف وتدلي خفيف في جفن عينه اليمنى مع صغر واضح في حدقتها مقارنة بالعين اليسرى.",
          "hint2": "الثالوث الكلاسيكي لتضيق الحدقة وتدلي الجفن مع جفاف نصف الوجه من العرق الناتج عن انقطاع ألياف الجهاز الودي.",
          "hint3": "ورم قمة الرئة (Pancoast tumor) الضاغط على السلسلة الودية العنقية مسبباً الثالوث العيني المميز لمتلازمة هورنر.",
          "pearl": "التشخيص النهائي: متلازمة هورنر (Horner Syndrome) - من أساسيات Neuro-Ophthalmology."
      },
      "English": {
          "hint1": "A heavy smoker with apical shoulder pain exhibiting unilateral mild eyelid droop and an asymmetrical, constricted pupil.",
          "hint2": "The hallmark classic triad: ipsilateral ptosis, pupillary miosis, and absence of facial perspiration (anhidrosis).",
          "hint3": "Interruption of the oculosympathetic chain by a bronchogenic Pancoast tumor at the thoracic inlet.",
          "pearl": "Definitive diagnosis: Horner Syndrome - Core Neuro-Ophthalmology & Pulmonology."
      }
  },
  "w453": {
    "Arabic": {
      "hint1": "يستوجب تفريغاً جراحياً عاجلاً عبر فتح الجمجمة لتفادي انفتاق المخ والضغط القاتل على مراكز التنفس بجذع الدماغ.",
      "hint2": "يترافق كلاسيكياً مع فترة صحو مؤقتة يستعيد فيها المصاب وعيه لساعات قبل أن ينتكس بغيبوبة مباغتة.",
      "hint3": "تجمع دموي شرياني ضاغط يتشكل في الحيز الضيق الكامن بين السطح الداخلي لعظام الجمجمة وغشاء الأم الجافية.",
      "pearl": "التشخيص النهائي: نزيف فوق الجافية (Epidural Hematoma) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "Represents a neurosurgical emergency demanding immediate burr hole or craniotomy evacuation to prevent fatal uncal herniation.",
      "hint2": "Classically features a lucid interval wherein a transiently concussed patient awakens before precipitously relapsing into deep coma.",
      "hint3": "An arterial hematoma expanding rapidly within the potential space between the inner cranial vault and the dura mater.",
      "pearl": "Definitive diagnosis: Epidural Hematoma (نزيف فوق الجافية) - Core Forensic Medicine."
    }
  },
  "w454": {
    "Arabic": {
      "hint1": "يشكل ركناً أساسياً في ثالوث التشخيص الجنائي لمتلازمة هز الرضيع العنيفة.",
      "hint2": "يأخذ في الأشعة المقطعية شكلاً هلالياً مقعر الحافة الداخلية يمتد على طول نصف الكرة المخية متجاوزاً خطوط الدروز.",
      "hint3": "انصباب دموي وريدي يتجمع في الحيز الحقيقي الكائن بين السطح الداخلي للأم الجافية وغشاء العنكبوتية المخي.",
      "pearl": "التشخيص النهائي: نزيف تحت الجافية (Subdural Hematoma) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "Constitutes the primary intracranial finding in pediatric non-accidental abusive head trauma (shaken baby syndrome).",
      "hint2": "Computed tomography demonstrates a characteristic crescentic, concave-inner hematoma extending along the hemispheric convexity across sutures.",
      "hint3": "A venous intracranial hemorrhage expanding within the anatomic space between the inner dura mater and arachnoid membrane.",
      "pearl": "Definitive diagnosis: Subdural Hematoma (نزيف تحت الجافية) - Core Forensic Medicine."
    }
  },
  "w456": {
    "Arabic": {
      "hint1": "تعد سبباً رئيساً للوفاة المفاجئة أو الشلل الدماغي الدائم لدى الرضع دون سن السنتين في قضايا إيذاء الأطفال.",
      "hint2": "تحدث التلفيات العصبية بفعل قوى القصور الذاتي الدورانية التي تؤدي لتمزق الأوردة الجسرية وإصابة المحاور العصبية الدماغية المنتشرة.",
      "hint3": "صورة بالغة الخطورة من صور العنف الجنائي ضد الأطفال تنجم عن هز الرضيع بعنف ذهاباً وإياباً دون ارتطام مباشر للجمجمة.",
      "pearl": "التشخيص النهائي: متلازمة هز الرضيع (Shaken Baby Syndrome) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "A leading cause of fatal abusive head trauma and permanent neurological disability in infants under two years of age.",
      "hint2": "Rotational acceleration-deceleration shearing forces rupture bridging parasagittal veins and shear cerebral axonal fibers.",
      "hint3": "A devastating form of non-accidental pediatric physical abuse caused by violent repetitive shaking of an infant without direct impact.",
      "pearl": "Definitive diagnosis: Shaken Baby Syndrome (متلازمة هز الرضيع) - Core Forensic Medicine."
    }
  },
  "w467": {
    "Arabic": {
      "hint1": "تستلزم تبريداً فيزيائياً سريعاً عبر التبخير والماء البارد لتفادي الموت المحقق بتلف خلايا المخ.",
      "hint2": "تتوقف الغدد العرقية عن العمل في النمط الكلاسيكي فيصبح الجلد جافاً وحاراً وقرمزياً ومتوهجاً.",
      "hint3": "حالة طوارئ طبية مهددة للحياة تنجم عن انهيار كامل في آليات التنظيم الحراري للجسم تحت وطأة الحرارة الشديدة.",
      "pearl": "التشخيص النهائي: ضربة الشمس (Heat Stroke) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "Demands immediate aggressive physical cooling via conductive or evaporative methods to halt irreversible cerebral thermal injury.",
      "hint2": "Classic environmental presentations exhibit anhidrosis where sweat glands fail, rendering skin hot, dry, and flushed.",
      "hint3": "A life-threatening medical emergency precipitated by the total failure of physiological thermoregulatory mechanisms during extreme heat.",
      "pearl": "Definitive diagnosis: Heat Stroke (ضربة الشمس) - Core Forensic Medicine."
    }
  },
  "w468": {
    "Arabic": {
      "hint1": "يترافق مع تباطؤ نبض القلب وظهور موجات أوزبورن (Osborne J waves) برسم القلب قبل توقف الدورة الدموية.",
      "hint2": "تتوزع كدمات ولطخات حمراء زاهية فوق المفاصل الكبرى كالركبتين والمرفقين بتأثير البرودة الشديدة.",
      "hint3": "هبوط حاد في درجة حرارة الجسم الأساسية دون 35 درجة مئوية ينتج عن التعرض للبرد الشديد أو السقوط في المياه المتجمدة.",
      "pearl": "التشخيص النهائي: انخفاض حرارة الجسم المميت (Hypothermia) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "Characterized electrophysiologically by profound bradycardia and pathognomonic Osborn (J) waves on cardiac tracing.",
      "hint2": "Postmortem inspection reveals bright pinkish-red patches over extensor joint surfaces such as knees and elbows.",
      "hint3": "A dangerous drop in core body temperature below 35 degrees Celsius resulting from prolonged environmental cold exposure.",
      "pearl": "Definitive diagnosis: Hypothermia (انخفاض حرارة الجسم المميت) - Core Forensic Medicine."
    }
  },
  "w469": {
    "Arabic": {
      "hint1": "تستدعي تدخلاً قانونياً وطبياً فورياً لعزل الطفل وحمايته جنائياً من خطر القتل العمد.",
      "hint2": "تشيع فيها الحروق النمطية المتعمدة كحروق السلق بالغمر في ماء مغلي (Glove and stocking) وعلامات أعقاب السجائر.",
      "hint3": "اعتداء بدني متكرر وغير عرضي يمارسه الوالدان أو القائمون على الرعاية ضد طفل صغير لا حول له.",
      "pearl": "التشخيص النهائي: متلازمة الطفل المعنف (Battered Child Syndrome) - من أساسيات Forensic Medicine."
    },
    "English": {
      "hint1": "Mandates urgent forensic intervention, legal child protection reporting, and emergency removal to prevent fatal escalation.",
      "hint2": "Frequently displays deliberate thermal patterns including immersion scalds with sharp immersion lines and cigarette contact burns.",
      "hint3": "A pattern of repetitive, non-accidental physical trauma inflicted on a vulnerable child by parents or primary caregivers.",
      "pearl": "Definitive diagnosis: Battered Child Syndrome (متلازمة الطفل المعنف) - Core Forensic Medicine."
    }
  },
  "w474": {
    "Arabic": {
      "hint1": "يُعالج فورياً بإعطاء جرعات وريدية متكررة من الأتروبين حتى جفاف الإفرازات الرئوية، مع البراليدوكسيم لإعادة تنشيط الإنزيم.",
      "hint2": "تظهر على المصاب أعراض متلازمة الإفرازات الغزيرة وتشمل سيلان اللعاب والدموع والإسهال والتبول وضيق التنفس (SLUDGEM).",
      "hint3": "تسمم حاد ينجم عن التعرض للمبيدات الحشرية الفوسفورية الزراعية عبر الجلد أو الاستنشاق أو البلع.",
      "pearl": "التشخيص النهائي: التسمم بالفوسفات العضوي (Organophosphate Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed aggressively with escalating doses of atropine until bronchial secretions dry, alongside pralidoxime to reactivate the enzyme.",
      "hint2": "Precipitates a massive cholinergic crisis manifest by the SLUDGEM acronym (salivation, lacrimation, urination, defecation, GI upset, emesis).",
      "hint3": "Acute toxic envenomation caused by cutaneous absorption, inhalation, or ingestion of agricultural organophosphorus pesticides.",
      "pearl": "Definitive diagnosis: Organophosphate Poisoning (التسمم بالفوسفات العضوي) - Core Clinical Toxicology."
    }
  },
  "w477": {
    "Arabic": {
      "hint1": "يُحظر تماماً إعطاء الأكسجين الإضافي بتركيزات عالية للمصاب لأنه يزيد من توليد الجذور الحرة ويسرع التدمير الرئوي.",
      "hint2": "يولد كميات هائلة من جذور الأكسجين الحرة المدمرة (Reactive oxygen species) عبر دورات الأكسدة والاختزال المتكررة.",
      "hint3": "تسمم حاد ينجم عن بلع مبيد أعشاب زراعي ثنائي البيريديل شديد التآكل والسمية للأنسجة الرئوية.",
      "pearl": "التشخيص النهائي: التسمم بالباراكوات (Paraquat Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Supplemental oxygen therapy is strictly contraindicated in early stages because oxygen accelerates free radical-mediated lung necrosis.",
      "hint2": "Drives relentless intracellular redox cycling, generating catastrophic cascades of destructive reactive oxygen species.",
      "hint3": "Severe intoxication following ingestion of a highly toxic, corrosive bipyridyl herbicide marketed commercially as Gramoxone.",
      "pearl": "Definitive diagnosis: Paraquat Toxicity (التسمم بالباراكوات) - Core Clinical Toxicology."
    }
  },
  "w478": {
    "Arabic": {
      "hint1": "تمثل المرجع السريري الأبرز لتحديد التسممات البيئية الفوسفورية في غرف الطوارئ وتستوجب ترياق الأتروبين فوراً.",
      "hint2": "تتميز بفيضان إفرازات الجسم: تعرق غزير، إفرازات قصبية رغوية، بطء النبض، تقلصات بطنية وإسهال حاد.",
      "hint3": "متلازمة سريرية حادة تنشأ عن التحفيز المفرط لمستقبلات الأسيتيل كولين المسكارينية والنيكوتينية في الجهاز العصبي.",
      "pearl": "التشخيص النهائي: متلازمة الكولينيرجيك (Cholinergic Toxidrome) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Constitutes a hallmark toxidrome recognized in emergency toxicology that immediately mandates high-dose intravenous atropinization.",
      "hint2": "Manifests through the DUMBELS mnemonic: diarrhea, urination, miosis, bradycardia, bronchospasm, emesis, lacrimation, and salivation.",
      "hint3": "A clinical toxidrome resulting from excessive stimulation of muscarinic and nicotinic acetylcholine receptors across the nervous system.",
      "pearl": "Definitive diagnosis: Cholinergic Toxidrome (متلازمة الكولينيرجيك) - Core Clinical Toxicology."
    }
  },
  "w479": {
    "Arabic": {
      "hint1": "يعالج بالأدوية الخالبة للمعادن كالديمركابرول، إيديتات الكالسيوم ثنائية الصوديوم (Ca-EDTA)، أو السكسيمر (DMSA).",
      "hint2": "يسبب أنيميا فقر دم صغيرة الكريات مع تنقيط قاعدي مميز يظهر داخل كريات الدم الحمراء (Basophilic stippling).",
      "hint3": "تسمم معدني تراكمي خطير ينجم عن التعرض المهني أو البيئي لغبار الدهانات القديمة وبطاريات السيارات والمواسير الرصاصية.",
      "pearl": "التشخيص النهائي: التسمم بالرصاص (Lead Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Treated with systemic chelating regimens such as dimercaprol (BAL), calcium disodium EDTA, or oral succimer (DMSA).",
      "hint2": "Produces microcytic hypochromic anemia characteristically adorned with coarse basophilic stippling on peripheral blood smear.",
      "hint3": "A multisystem cumulative heavy metal toxicity arising from occupational hazards, deteriorating lead paints, or contaminated water pipes.",
      "pearl": "Definitive diagnosis: Lead Poisoning (التسمم بالرصاص) - Core Clinical Toxicology."
    }
  },
  "w481": {
    "Arabic": {
      "hint1": "يُعالج بحقن الديمركابرول (BAL) كخالب أولي في التسمم الحاد، ويترسب بكثافة في الشعر والأظافر لشهور طويلة.",
      "hint2": "يسبب التسمم الحاد إسهالاً غزيراً يشبه ماء الأرز (Rice-water stools) مترافقاً مع رائحة ثوم نفاذة منبعثة من الفم.",
      "hint3": "سم معدني جنائي وتاريخي شهير عُرف بلقب سم الملوك لكونه عديم الطعم والرائحة ويسهل دسه في الطعام والشراب.",
      "pearl": "التشخيص النهائي: التسمم بالزرنيخ (Arsenic Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed with dimercaprol (BAL) chelation in acute poisonings; the metalloid persists stored in keratinous hair and nails for months.",
      "hint2": "Acute ingestion provokes massive rice-water cholera-like diarrhea, vomiting, dehydration, and an unmistakable garlicky breath odor.",
      "hint3": "An infamous homicidal and environmental metalloid poison historically called the 'poison of kings' due to its odorless, tasteless profile.",
      "pearl": "Definitive diagnosis: Arsenic Poisoning (التسمم بالزرنيخ) - Core Clinical Toxicology."
    }
  },
  "w483": {
    "Arabic": {
      "hint1": "يسبب في الأطفال الصغار متلازمة الأكرودينيا (Acrodynia) بطفح جلدي وردي مؤلم وتقشر وتورم في الراحتين والأخمصين.",
      "hint2": "يسبب اعتلالاً عصبياً كلاسيكياً يظهر في صورة ترنح، ضيق في المجال البصري، ورعاش حركي وتغيرات نفسية وعاطفية.",
      "hint3": "تسمم خطير ينجم عن التعرض لأبخرة المعدن الفضي السائل أو تناول مأكولات بحرية ملوثة بالزئبق العضوي.",
      "pearl": "التشخيص النهائي: التسمم بالزئبق (Mercury Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "In young pediatric patients, it provokes acrodynia (pink disease) featuring painful, erythematous, desquamating hands and feet.",
      "hint2": "Presents classically with cerebellar ataxia, progressive tunnel vision constriction, intention tremors, and emotional lability.",
      "hint3": "Severe toxicosis resulting from inhalation of elemental mercury vapor or dietary consumption of seafood contaminated with methylmercury.",
      "pearl": "Definitive diagnosis: Mercury Poisoning (التسمم بالزئبق) - Core Clinical Toxicology."
    }
  },
  "w484": {
    "Arabic": {
      "hint1": "يعالج بالترياق النوعي الخالب الديفيروكسامين الوريدي الذي يحول لون بول المريض إلى اللون الوردي البرتقالي المميز.",
      "hint2": "يتطور عبر مراحل سريرية تبدأ بقيء دموي، تعقبها فترة تحسن ظاهري خادعة، ثم انهيار قلبي وعائي وحماض أيضي شديد.",
      "hint3": "تسمم حاد يكثر عند الأطفال الصغار عند ابتلاع حبوب مكملات الحديد الملونة الجذابة المخصصة للأمهات.",
      "pearl": "التشخيص النهائي: التسمم الحاد بالحديد (Acute Iron Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Treated with the specific parenteral chelator deferoxamine, which binds free iron and colors the urine a classic 'vin rosé' orange.",
      "hint2": "Progresses through distinct clinical phases: acute hemorrhagic gastroenteritis, deceptive clinical quiescence, and multiorgan metabolic collapse.",
      "hint3": "A common, dangerous pediatric accidental ingestion of attractive, brightly colored adult prenatal iron supplement tablets.",
      "pearl": "Definitive diagnosis: Acute Iron Toxicity (التسمم الحاد بالحديد) - Core Clinical Toxicology."
    }
  },
  "w488": {
    "Arabic": {
      "hint1": "يُعالج فورياً بترياق الفومبيزول أو الكحول الإيثيلي لتثبيط الإنزيم الاستقلابي، مع الغسيل الكلوي لتصفية السم وحمضه.",
      "hint2": "يثبط حمض الفورميك إنزيم سيتوكروم أوكسيداز في شبكية العين والعصب البصري مسبباً ضبابية الرؤية وعمى تام كعاصفة ثلجية.",
      "hint3": "تسمم كحولي صاعق ينجم عن شرب المشروبات الكحولية المغشوشة أو المذيبات الصناعية ومزيلات الطلاء.",
      "pearl": "التشخيص النهائي: التسمم بالميثانول (Methanol Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed urgently with the competitive enzyme inhibitor fomepizole (or ethanol) and emergent hemodialysis to eliminate formate.",
      "hint2": "Formic acid poisons mitochondrial cytochrome oxidase in the retina and optic nerve, producing classic 'snowstorm' visual loss and blindness.",
      "hint3": "Severe toxic alcohol ingestion resulting from consumption of adulterated bootleg liquor, windshield washer fluids, or industrial solvents.",
      "pearl": "Definitive diagnosis: Methanol Poisoning (التسمم بالميثانول) - Core Clinical Toxicology."
    }
  },
  "w490": {
    "Arabic": {
      "hint1": "يُعالج بالفومبيزول لتثبيط الإنزيم، مع إعطاء الثيامين والبيريدوكسين وحتمية الغسيل الكلوي العاجل لتنقية الدم.",
      "hint2": "تتحد الأوكزالات مع الكالسيوم لتشكل بلورات أوكزالات الكالسيوم التي تترسب بكثافة في الأنابيب الكلوية مسببة فشلاً كلوياً حاداً.",
      "hint3": "تسمم حاد ينجم عن شرب سائل تبريد محركات السيارات ومانع التجمد ذي المذاق الحلو في محاولات الانتحار أو بالخطأ.",
      "pearl": "التشخيص النهائي: التسمم بإيثيلين جليكول (Ethylene Glycol Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed with fomepizole, thiamine and pyridoxine cofactors, and emergent hemodialysis to clear glycolic acid and prevent anuria.",
      "hint2": "Oxalate chelates circulating calcium, precipitating calcium oxalate monohydrate crystals that destroy renal tubules, provoking acute kidney injury.",
      "hint3": "Severe toxic alcohol poisoning caused by accidental or suicidal ingestion of sweet-tasting automotive antifreeze coolant.",
      "pearl": "Definitive diagnosis: Ethylene Glycol Poisoning (التسمم بإيثيلين جليكول) - Core Clinical Toxicology."
    }
  },
  "w491": {
    "Arabic": {
      "hint1": "تُظهر أشعة الصدر ارتشاحات والتهابات خلال الساعات الأولى، ويُراقب المريض تنفسياً لمدة ست ساعات على الأقل قبل تقرير خروجه.",
      "hint2": "يسبب التهاباً رئوياً كيميائياً مدمراً (Chemical pneumonitis) نتيجة إذابة مادة السورفاكتانت الرئوية وتخريب بطانة الحويصلات.",
      "hint3": "تسمم هيدروكربوني شائع جداً عند الأطفال الصغار في البيئات الريفية نتيجة حفظ الوقود المنزلي في زجاجات المياه الغازية.",
      "pearl": "التشخيص النهائي: التسمم بالكيروسين (Kerosene Ingestion) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Chest radiography exhibits basilar infiltrates within hours; asymptomatic children mandate at least six hours of pulse oximetry monitoring.",
      "hint2": "Triggers rapid necrotizing chemical pneumonitis by dissolving endogenous pulmonary surfactant and inducing severe alveolar destruction.",
      "hint3": "A frequent accidental pediatric hydrocarbon intoxication occurring in domestic settings where fuel is stored in beverage containers.",
      "pearl": "Definitive diagnosis: Kerosene Ingestion (التسمم بالكيروسين) - Core Clinical Toxicology."
    }
  },
  "w495": {
    "Arabic": {
      "hint1": "يُعالج فورياً بالأكسجين النقي بنسبة 100 بالمئة عبر قناع غير قابل لإعادة التنفس، مع اللجوء لحجرات الأكسجين عالي الضغط في الحالات الشديدة.",
      "hint2": "يعطل نقل الأكسجين للأنسجة ويزيح منحنى تفكك الهيموجلوبين نحو اليسار مما يسبب نقص أكسجة خلوي شديد في الدماغ والقلب.",
      "hint3": "تسمم غازي خانق شهير يُلقب بالقاتل الصامت لكونه غازاً عديم اللون والرائحة والطعم ينبعث من الاحتراق غير الكامل للوقود.",
      "pearl": "التشخيص النهائي: التسمم بأول أكسيد الكربون (Carbon Monoxide Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed with immediate high-flow 100% normobaric oxygen via a non-rebreather mask, or hyperbaric oxygen therapy (HBOT) in severe toxicity.",
      "hint2": "Shifts the oxyhemoglobin dissociation curve to the left, suffocating tissues by impairing oxygen delivery to brain and myocardium.",
      "hint3": "A notorious asphyxiant gas toxicity dubbed the 'silent killer' because the gas is completely colorless, odorless, and non-irritating.",
      "pearl": "Definitive diagnosis: Carbon Monoxide Poisoning (التسمم بأول أكسيد الكربون) - Core Clinical Toxicology."
    }
  },
  "w498": {
    "Arabic": {
      "hint1": "يُعالج إسعافياً بالهيدروكسوكوبالامين أو مجموعة ترياق السيانيد المتضمنة نتريت الصوديوم وثيوكبريتات الصوديوم.",
      "hint2": "تعجز الخلايا عن استخدام الأكسجين رغم وفرته في الدم فيما يعرف بالاختناق السام الداخلي للأنسجة (Histotoxic hypoxia).",
      "hint3": "تسمم خلوي صاعق وفائق السرعة ينجم عن استنشاق أدخنة حرائق المنازل أو التعرض للمواد الكيميائية في صناعة الذهب والتعدين.",
      "pearl": "التشخيص النهائي: التسمم بالسيانيد (Cyanide Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Treated with the immediate administration of hydroxocobalamin, or the traditional cyanide antidote kit (sodium nitrite and sodium thiosulfate).",
      "hint2": "Cells become incapable of utilizing oxygen despite rich arterial saturation, precipitating catastrophic histotoxic cellular hypoxia.",
      "hint3": "A severe acute, rapidly fatal cellular poison contracted from residential structure fire smoke inhalation or gold electroplating chemicals.",
      "pearl": "Definitive diagnosis: Cyanide Poisoning (التسمم بالسيانيد) - Core Clinical Toxicology."
    }
  },
  "w500": {
    "Arabic": {
      "hint1": "يؤدي إلى سقوط مفاجئ وفقدان فوري للوعي فيما يعرف بظاهرة السقوط الخاطف (Knockdown phenomenon) وموت فوري.",
      "hint2": "يسبب شللاً سريعاً وخادعاً للعصب الشمي عند الارتفاع الطفيف في تركيزه مما يفقد الضحية القدرة على تحسس الخطر.",
      "hint3": "غاز سام خانق وخانق للخلايا يشتهر برائحته النفاذة الكريهة الشبيهة برائحة البيض الفاسد في التراكيز المنخفضة.",
      "pearl": "التشخيص النهائي: كبريتيد الهيدروجين (Hydrogen Sulfide) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Triggers instant loss of consciousness and sudden collapse upon inhalation, known clinically as the 'knockdown' phenomenon.",
      "hint2": "Rapidly induces olfactory fatigue and paralysis at elevated levels, deceptively extinguishing its own warning odor before poisoning victims.",
      "hint3": "A toxic asphyxiant gas infamously recognizable at low atmospheric concentrations by its pungent odor of rotten eggs.",
      "pearl": "Definitive diagnosis: Hydrogen Sulfide (كبريتيد الهيدروجين) - Core Clinical Toxicology."
    }
  },
  "w501": {
    "Arabic": {
      "hint1": "تستجيب بشكل درامي ومدهش لحقن ترياق النالوكسون النوعي الذي يستعيد وعي وتنفس المريض خلال ثوان معدودة.",
      "hint2": "تؤدي إلى هبوط عدد مرات التنفس إلى أقل من 4-6 أنفاس في الدقيقة مسببة زرقة ونقص أكسجة دماغي مميت وتوقف التنفس.",
      "hint3": "حالة طوارئ مهددة للحياة تنجم عن التعاطي المفرط للمسكنات الأفيونية أو المخدرات المحظورة كالهيروين والفنتانيل والمورفين.",
      "pearl": "التشخيص النهائي: التسمم بالأفيونات (Opioid Overdose) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Dramatically and promptly reversed by titrated administration of the competitive opioid receptor antagonist naloxone.",
      "hint2": "Respiratory frequency plummets below four to six breaths per minute, culminating in severe hypercapnia, cyanosis, and fatal respiratory arrest.",
      "hint3": "A life-threatening toxicological emergency caused by excessive consumption of prescription opioids or illicit narcotics such as heroin and fentanyl.",
      "pearl": "Definitive diagnosis: Opioid Overdose (التسمم بالأفيونات) - Core Clinical Toxicology."
    }
  },
  "w503": {
    "Arabic": {
      "hint1": "يُعالج الحالات الانتقائية الشديدة بترياق الفلومازينيل الوريدي مع الحذر التام من إثارة التشنجات العصبية.",
      "hint2": "تتظاهر سريرياً بنعاس شديد، رتة وصعوبة في نطق الكلام، ترنح واختلال في التوازن، مع استقرار نسبي في العلامات الحيوية بمفردها.",
      "hint3": "تسمم دوائي شائع ينجم عن تناول جرعات مفرطة من الأدوية المنومة والمهدئة كالديازيبام واللورازيبام والألبرازولام.",
      "pearl": "التشخيص النهائي: التسمم بالبنزوديازيبينات (Benzodiazepine Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Reversible in strictly selected non-tolerant presentations using the competitive benzodiazepine receptor antagonist flumazenil.",
      "hint2": "Classic presentation includes marked somnolence, slurred speech, cerebellar ataxia, and hyporeflexia with relatively stable vital signs alone.",
      "hint3": "A frequent sedative-hypnotic drug overdose resulting from excessive ingestion of anxiolytics such as diazepam, lorazepam, or alprazolam.",
      "pearl": "Definitive diagnosis: Benzodiazepine Toxicity (التسمم بالبنزوديازيبينات) - Core Clinical Toxicology."
    }
  },
  "w505": {
    "Arabic": {
      "hint1": "يمثل محلول بيكربونات الصوديوم الوريدي الترياق المنقذ للحياة حيث يعادل حصر قنوات الصوديوم ويعدل حماض الدم.",
      "hint2": "يظهر تخطيط القلب اتساعاً تدريجياً في مركب QRS ليتجاوز 100 إلى 160 مليمتر ثانية وانحراف المحور وانقلاب موجة R في مشتق aVR.",
      "hint3": "تسمم دوائي قلبي وعصبي بالغ الخطورة ينجم عن الجرعات الزائدة من أدوية الاكتئاب الكلاسيكية كالأميتريبتيلين والإميبرامين.",
      "pearl": "التشخيص النهائي: التسمم بمضادات الاكتئاب ثلاثية الحلقات (TCA Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Intravenous hypertonic sodium bicarbonate serves as the life-saving antidote by overwhelming sodium channel blockade and alkalinizing blood.",
      "hint2": "Classic ECG hallmarks demonstrate progressive QRS prolongation exceeding 100-160 ms, rightward axis shift, and a prominent R wave in lead aVR.",
      "hint3": "A notoriously lethal psychotropic drug toxicity resulting from intentional overdose of traditional tricyclic agents like amitriptyline.",
      "pearl": "Definitive diagnosis: TCA Toxicity (التسمم بمضادات الاكتئاب ثلاثية الحلقات) - Core Clinical Toxicology."
    }
  },
  "w507": {
    "Arabic": {
      "hint1": "تعتبر جلسات الغسيل الكلوي الدموي الإسعافية الوسيلة الحاسمة والفعالة لتخليص الجسم من مستوياته السامة المرتفعة.",
      "hint2": "يتظاهر عصبياً برعاش خشن واسع في اليدين، ترنح في المشي، رتة في الكلام، واختلاجات عضلية قد تتطور لغيبوبة واعتلال مخي.",
      "hint3": "تسمم دوائي خطير ينجم عن استخدام دواء الليثيوم المثبت للمزاج في علاج الاضطراب ثنائي القطب بسبب ضيق نافذته العلاجية.",
      "pearl": "التشخيص النهائي: التسمم بالليثيوم (Lithium Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Hemodialysis constitutes the definitive, highly effective extracorporeal removal modality in severe acute-on-chronic poisoning.",
      "hint2": "Presents with progressive neurotoxicity: coarse hand tremors, hyperreflexia, cerebellar ataxia, slurred speech, seizures, and encephalopathy.",
      "hint3": "A serious heavy cation intoxication complicating lithium mood-stabilizer therapy in bipolar disorder due to its very narrow therapeutic index.",
      "pearl": "Definitive diagnosis: Lithium Toxicity (التسمم بالليثيوم) - Core Clinical Toxicology."
    }
  },
  "w508": {
    "Arabic": {
      "hint1": "يُعالج بإعطاء بيكربونات الصوديوم الوريدية لإجراء قلوية البول ومنع اختراق الساليسيلات للحاجز الدموي الدماغي، مع اللجوء للغسيل الكلوي.",
      "hint2": "ينتج عنه اضطراب حمضي قاعدي مركب فريد من نوعه يجمع بين القلاء التنفسي والحماض الأيضي في آن واحد.",
      "hint3": "تسمم دوائي حاد وشائع ينجم عن الجرعات المفرطة من عقار الأسبرين أو مركبات دهان المفاصل المحتوية على ساليسيلات الميثيل.",
      "pearl": "التشخيص النهائي: التسمم بالساليسيلات (Salicylate Toxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed with intravenous sodium bicarbonate to achieve urinary alkalinization and trap salicylate ions, reserving hemodialysis for severe poisoning.",
      "hint2": "Yields a pathognomonic, complex mixed acid-base disturbance characterized by simultaneous respiratory alkalosis and metabolic acidosis.",
      "hint3": "A common, life-threatening overdose of acetylsalicylic acid (aspirin) or topical methyl salicylate liniments.",
      "pearl": "Definitive diagnosis: Salicylate Toxicity (التسمم بالساليسيلات) - Core Clinical Toxicology."
    }
  },
  "w510": {
    "Arabic": {
      "hint1": "يُعالج فورياً بالترياق النوعي المنقذ للحياة إن-أسيتيل سيستئين (NAC) لاستعادة مخزون الجلوتاثيون وحماية الكبد.",
      "hint2": "يقوم المستقلب السام بالارتباط التساهمي ببروتينات خلايا الكبد مسبباً نخراً نسيجياً صاعقاً في المنطقة الكبدية المركزية (Centrilobular necrosis).",
      "hint3": "السبب الأكثر شيوعاً على الإطلاق لحدوث الفشل الكبدي الصاعق في غرف الطوارئ نتيجة تناول جرعات زائدة من مسكنات الباراسيتامول.",
      "pearl": "التشخيص النهائي: التسمم الكبدي بالباراسيتامول (Paracetamol Hepatotoxicity) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Managed specifically with the lifesaving antidote N-acetylcysteine (NAC) which replenishes glutathione stores and conjugates NAPQI.",
      "hint2": "NAPQI binds covalently to hepatic macromolecules, causing devastating centrilobular zone III necrosis and mitochondrial failure.",
      "hint3": "The leading etiology of drug-induced acute severe acute liver failure in emergency departments, triggered by supratherapeutic paracetamol ingestion.",
      "pearl": "Definitive diagnosis: Paracetamol Hepatotoxicity (التسمم الكبدي بالباراسيتامول) - Core Clinical Toxicology."
    }
  },
  "w513": {
    "Arabic": {
      "hint1": "يُعالج في حالات التسمم الشديدة والمصحوبة بهذيان بالدواء الترياقي فوسوستيجمين تحت المراقبة القلبية المستمرة.",
      "hint2": "يسبب شللاً في المستقبلات المسكارينية في الجهاز العصبي، فيتوقف إفراز العرق واللعاب وتتسع حدقتا العينين بشدة.",
      "hint3": "نبات بري سام شهير ينتمي للعائلة الباذنجانية يحتوي على قلويدات طبيعية قوية مضادة للكولين كالأتروبين والسكوبولامين.",
      "pearl": "التشخيص النهائي: نبات ست الحسن (Atropa Belladonna) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Severe poisoning accompanied by refractory delirium or tachyarrhythmias is managed with the tertiary carbamate antidote physostigmine.",
      "hint2": "Competitively blocks central and peripheral muscarinic acetylcholine receptors, abruptly drying all exocrine bodily secretions.",
      "hint3": "An infamous perennial plant belonging to the Solanaceae family rich in potent naturally occurring anticholinergic tropane alkaloids.",
      "pearl": "Definitive diagnosis: Atropa Belladonna (نبات ست الحسن) - Core Clinical Toxicology."
    }
  },
  "w514": {
    "Arabic": {
      "hint1": "يفرَّق عن التسمم المحاكي للسمبثاوي (Sympathomimetic) بجفاف الإبطين والجلد التام مقارنة بالتعرق الغزير في الكوكايين والأمفيتامين.",
      "hint2": "تُحفظ كلاسيكياً بالبيت المشهور: أعمى كالخفاش (اتساع الحدقة)، مجنون كصانع القبعات (هذيان)، أحمر كالبنجر، جاف كالعظم، وساخن كالأرنب.",
      "hint3": "متلازمة سريرية حادة تنشأ عن تثبيط وحصار مستقبلات الأسيتيل كولين المسكارينية بفعل الأدوية أو النباتات السامة.",
      "pearl": "التشخيص النهائي: متلازمة مضادات الكولين (Anticholinergic Toxidrome) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "Crucially differentiated from sympathomimetic toxicity (cocaine, amphetamines) by completely dry skin and absent diaphoresis.",
      "hint2": "Remembered by the classical medical mnemonic: blind as a bat, mad as a hatter, red as a beet, hot as a hare, and dry as a bone.",
      "hint3": "A common clinical toxidrome precipitated by competitive blockade of muscarinic acetylcholine neurotransmission.",
      "pearl": "Definitive diagnosis: Anticholinergic Toxidrome (متلازمة مضادات الكولين) - Core Clinical Toxicology."
    }
  },
  "w516": {
    "Arabic": {
      "hint1": "يظل المريض كامل الوعي والإدراك ويتعذب بآلام التشنجات العنيفة حتى يلقى حتفه بالاختناق وتشنج عضلات التنفس.",
      "hint2": "يؤدي حصر التثبيط العصبي إلى إطلاق عصبي حركي عنيف غير مقيد مسبباً تشنجات عضلية تكززية مؤلمة للغاية عند أقل محفز حسي.",
      "hint3": "تسمم قلويدي شديد الخطورة يستخلص من بذور شجرة الجوز القيء ويستخدم تاريخياً كمبيد للقوارض والجرذان.",
      "pearl": "التشخيص النهائي: التسمم بالاستركنين (Strychnine Poisoning) - من أساسيات Clinical Toxicology."
    },
    "English": {
      "hint1": "The patient remains completely conscious, experiencing excruciating pain during recurrent spasms until dying from asphyxia.",
      "hint2": "Elimination of post-synaptic glycinergic inhibition allows sensory stimuli to trigger massive, uncontrolled, agonizing motor contractions.",
      "hint3": "A lethal alkaloid neurotoxin extracted from the seeds of the Strychnos nux-vomica tree, historically employed as a rodenticide.",
      "pearl": "Definitive diagnosis: Strychnine Poisoning (التسمم بالاستركنين) - Core Clinical Toxicology."
    }
  },
  "w517": {
    "Arabic": {
      "hint1": "النوع التحسسي يتميز بحكة عينية لا تطاق مع تورم الجفون ويستجيب لمضادات الهيستامين ومثبتات الخلايا البدينة.",
      "hint2": "النوع الفيروسي منه غالباً ما تسببه الفيروسات الغدية (Adenovirus) ويرتبط بضخامة العقد اللمفاوية أمام الأذن.",
      "hint3": "التهاب شائع جداً يصيب الغشاء المخاطي الشفاف المبطن للجفون والمغطي لصلبة العين.",
      "pearl": "التشخيص النهائي: التهاب الملتحمة (Conjunctivitis) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Allergic variants present with intense pruritus, bilateral chemosis, and seasonal exacerbations responsive to topical mast cell stabilizers.",
      "hint2": "Viral etiologies are frequently driven by adenoviruses, typically featuring preauricular lymphadenopathy.",
      "hint3": "Diffuse hyperemia and inflammation involving the transparent mucous membrane lining the inner eyelids and anterior sclera.",
      "pearl": "Definitive diagnosis: Conjunctivitis (التهاب الملتحمة) - Core Ophthalmology."
    }
  },
  "w519": {
    "Arabic": {
      "hint1": "يقيّم باختبار التغطية والكشف (Cover-uncover test) ويعالج بالنظارات أو تغطية العين السليمة أو الجراحة.",
      "hint2": "قد يكون الانحراف للداخل (الإنسي Esotropia) أو للخارج (الوحشي Exotropia) أو للأعلى.",
      "hint3": "اضطراب في المحاذاة الحركية بين العينين حيث لا تنظر كلتا المقلتين إلى نفس النقطة في وقت واحد.",
      "pearl": "التشخيص النهائي: الحول (Strabismus) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Diagnosed with the prism cover test and Hirschberg corneal light reflex; managed with occlusion patching, prisms, or muscle resection.",
      "hint2": "Subclassified based on deviation vector into convergent, divergent, hypertropic, or hypotropic manifest misalignments.",
      "hint3": "A binocular ocular alignment disorder wherein the visual axes do not intersect simultaneously at the fixation point.",
      "pearl": "Definitive diagnosis: Strabismus (الحول) - Core Ophthalmology."
    }
  },
  "w520": {
    "Arabic": {
      "hint1": "قد يرافقها تراكم صديد في الغرفة الأمامية للعين (Hypopyon) وتتطلب مضادات حيوية مكثفة لتجنب الانثقاب.",
      "hint2": "يشكو المريض من ألم مبرح، وخوف شديد من الضوء (Photophobia)، وإحساس بوجود جسم غريب ونقص حاد في الرؤية.",
      "hint3": "حالة طارئة في طب العيون تتمثل في تآكل عميق بنسيج النسيج الطلائي واللحمة الأمامية لسطح العين.",
      "pearl": "التشخيص النهائي: قرحة القرنية (Corneal Ulcer) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Complicated by hypopyon in the anterior chamber, requiring immediate fortified topical antibiotic drops to avert globe perforation.",
      "hint2": "Patients experience severe deep ocular agony, photophobia, foreign body sensation, and rapid vision decline.",
      "hint3": "An ophthalmologic emergency characterized by an epithelial defect with underlying stromal infiltration and necrosis.",
      "pearl": "Definitive diagnosis: Corneal Ulcer (قرحة القرنية) - Core Ophthalmology."
    }
  },
  "w521": {
    "Arabic": {
      "hint1": "يعالج بقطرات الكورتيكوستيرويدات الموضعية وقطرات توسيع الحدقة (Mydriatics) لمنع تكون الالتصاقات الخلفية.",
      "hint2": "يتميز بوجود احتقان هدبي circumcorneal injection حول حافة القرنية مع ضيق في الحدقة وألم يزداد عند محاولة التركيز.",
      "hint3": "التهاب يصيب الطبقة الوعائية المصطبغة المتوسطة من مقلة العين والتي تشمل القزحية والجسم الهدبي والمشيمية.",
      "pearl": "التشخيص النهائي: التهاب القزحية (Uveitis) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Primary management hinges on intensive topical corticosteroids paired with cycloplegic drops to prevent posterior synechiae.",
      "hint2": "Exhibits circumcorneal ciliary flush, painful accommodation, photophobia, and a sluggish or miotic pupil.",
      "hint3": "Inflammation targeting the vascular pigmented middle tunic of the eye, encompassing the iris, ciliary body, and choroid.",
      "pearl": "Definitive diagnosis: Uveitis (التهاب القزحية) - Core Ophthalmology."
    }
  },
  "w525": {
    "Arabic": {
      "hint1": "يعتمد علاجه الأساسي على النظافة الصارمة لحافة الجفن بشامبو أطفال مخفف وكمادات دافئة وتدليك الغدد.",
      "hint2": "يصاحبه شعور بالحرقة وجفاف العين، وإحساس برمل داخل الجفن، وسقوط الرموش أو تشوه نموها.",
      "hint3": "التهاب مزمن وشائع جداً يصيب حواف الجفون في منابت الرموش ومخارج غدد ميبوميوس الدهنية.",
      "pearl": "التشخيص النهائي: التهاب الجفن (Blepharitis) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Foundation of treatment consists of dedicated lid hygiene, warm compresses, meibomian expression, and topical azithromycin.",
      "hint2": "Elicits burning, ocular grittiness, hyperemic lid collars, dandruff-like flaking along lashes, and secondary dry eye.",
      "hint3": "A chronic, recurrent inflammatory disease affecting the eyelid margins, eyelash follicles, and meibomian gland orifices.",
      "pearl": "Definitive diagnosis: Blepharitis (التهاب الجفن) - Core Ophthalmology."
    }
  },
  "w539": {
    "Arabic": {
      "hint1": "يمنع منعاً باتاً استخدام قطرات الكورتيزون في النوع الهربسي لتجنب انتشار الفيروس الجغرافي وانثقاب العين.",
      "hint2": "تسببه طفيليات الأميبا الشائكة (Acanthamoeba) في مرتدي العدسات اللاصقة عند غسلها بماء الصنبور العادي.",
      "hint3": "التهاب يصيب النسيج الطلائي والشفاف لقرنية العين يهدد بحدوث عتامات دائمة ونقص في حدة الإبصار.",
      "pearl": "التشخيص النهائي: التهاب القرنية (Keratitis) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Topical corticosteroids are strictly contraindicated during active epithelial herpetic bouts to prevent geographic ulceration.",
      "hint2": "Acanthamoeba protozoal strains provoke excruciating ring-infiltrate forms in contact lens users rinsing cases in tap water.",
      "hint3": "Inflammatory involvement of the corneal epithelium and underlying stroma threatening permanent optical scarring.",
      "pearl": "Definitive diagnosis: Keratitis (التهاب القرنية) - Core Ophthalmology."
    }
  },
  "w542": {
    "Arabic": {
      "hint1": "يبدأ علاجه بالكمادات الدافئة والتدليك، وفي حال استمراره يستأصل جراحياً عبر جفن العين الداخلي دون ترك ندبة.",
      "hint2": "يتميز عن دمل الجفن (Stye) بأنه غير مؤلم عادة عند اللمس ويكون أعمق في نسيج الجفن وأبطأ في التكون.",
      "hint3": "تورم عقدي حبيبي غير معدٍ وغير مؤلم يصيب الجفن العلوي أو السفلي نتيجة انسداد إحدى غدد ميبوميوس الدهنية.",
      "pearl": "التشخيص النهائي: الكيس الدهني الجفني (Chalazion) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Responds to conservative hot moist compresses; chronic refractory lesions undergo incision and curettage from the conjunctival surface.",
      "hint2": "Differentiated from an acute external hordeolum by its indolent, non-tender course and deeper intramural anatomical plane.",
      "hint3": "A chronic, non-infectious, typically painless granulomatous nodular tumefaction embedded within the tarsal plate of the eyelid.",
      "pearl": "Definitive diagnosis: Chalazion (الكيس الدهني الجفني) - Core Ophthalmology."
    }
  },
  "w543": {
    "Arabic": {
      "hint1": "يعالج بالقطرات المرطبة، ويستأصل جراحياً مع رقعة ملتحمة ذاتية (Autograft) للحد من فرصة رجوعه المرتفعة.",
      "hint2": "يشيع جداً بين الصيادين والمزارعين وراكبي الأمواج وسكان المناطق الاستوائية المشمسة.",
      "hint3": "نمو حميد مثلثي الشكل من النسيج الليفي الوعائي للملتحمة يمتد زاحفاً فوق سطح قرنية العين.",
      "pearl": "التشخيص النهائي: ظفرة العين (Pterygium) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Managed conservatively with lubricants and UV-protective sunglasses; surgically excised with conjunctival autografting to curb recurrence.",
      "hint2": "Particularly prevalent among outdoor laborers, agriculturalists, and surfers residing within equatorial latitudes.",
      "hint3": "A triangular or wing-shaped fibrovascular proliferation originating from the bulbar conjunctiva that invades the cornea.",
      "pearl": "Definitive diagnosis: Pterygium (ظفرة العين) - Core Ophthalmology."
    }
  },
  "w544": {
    "Arabic": {
      "hint1": "يعالج في بداياته بتثبيت القرنية بالأشعة فوق البنفسجية والريبوفلافين (Cross-linking)، والعدسات الصلبة، أو زراعة القرنية.",
      "hint2": "يؤدي إلى تشوه انكساري شديد من اللابؤرية غير المنتظمة وقصر النظر السريع التدهور الذي لا يصحح بالنظارات العادية.",
      "hint3": "مرض تنكسي غير التهابي تصاب فيه قرنية العين بترقق تدريجي وبروز غير منتظم لتتحول من شكل القبة إلى شكل مخروطي.",
      "pearl": "التشخيص النهائي: القرنية المخروطية (Keratoconus) - من أساسيات Ophthalmology."
    },
    "English": {
      "hint1": "Arrested in early phases via corneal collagen cross-linking (CXL) with riboflavin, optical rigid lenses, or keratoplasty.",
      "hint2": "Induces worsening irregular myopic astigmatism, monocular polyopia, and rapid degradation of best-corrected visual acuity.",
      "hint3": "A progressive, non-inflammatory corneal ectasia characterized by structural biomechanical thinning and conical protrusion of the stroma.",
      "pearl": "Definitive diagnosis: Keratoconus (القرنية المخروطية) - Core Ophthalmology."
    }
  },
  "w548": {
      "Arabic": {
          "hint1": "رضيع ولد خديجاً قبل الأسبوع الثلاثين ووضع في الحاضنة على الأكسجين لعدة أسابيع تظهر عينه نمواً وعائياً غير طبيعي.",
          "hint2": "فحص قاع العين غير المباشر يكشف عن خط فاصل وتكاثر أوعية دموية جديدة غير مكتملة تمتد نحو الجسم الزجاجي.",
          "hint3": "العلامة الزائدة (Plus disease) وتكاثر الأوعية الدموية غير السوية المحفزة بنقص الأكسجة الموضعي المهددة بانفصال الشبكية.",
          "pearl": "التشخيص النهائي: اعتلال الشبكية الخداجي (Retinopathy of Prematurity) - من أساسيات Pediatric Ophthalmology."
      },
      "English": {
          "hint1": "A preterm neonate born at 27 weeks gestation subjected to prolonged neonatal ICU supplemental oxygen therapy.",
          "hint2": "Dilated funduscopic screening demonstrates arrest of peripheral retinal vascularization with an abnormal demarcation ridge.",
          "hint3": "VEGF-mediated vitreoretinal neovascular proliferation and 'plus disease' threatening tractional retinal detachment.",
          "pearl": "Definitive diagnosis: Retinopathy of Prematurity (ROP) - Core Pediatric Ophthalmology."
      }
  },
  "w564": {
    "Arabic": {
      "hint1": "يبدأ علاجه بالمطهرات ومقشرات الريتينويد الموضعية، وفي الحالات العقدية المستعصية يعالج بعقار الإيزوتريتينوين (Roaccutane) الفموي.",
      "hint2": "تظهر الآفات الأساسية غير الالتهابية على هيئة زؤان مغلق (رؤوس بيضاء) أو زؤان مفتوح متأكسد (رؤوس سوداء).",
      "hint3": "مرض التهابي مزمن يصيب الجريبات الشعرية الدهنية، ويعد أكثر الحالات الجلدية انتشاراً على الإطلاق بين المراهقين والشباب.",
      "pearl": "التشخيص النهائي: حب الشباب (Acne Vulgaris) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Managed stepwise with topical benzoyl peroxide and retinoids; recalcitrant nodulocystic disease responds dramatically to oral isotretinoin.",
      "hint2": "Primary non-inflammatory pathognomonic hallmark lesions are open comedones (blackheads) and closed comedones (whiteheads).",
      "hint3": "A chronic inflammatory disorder of the pilosebaceous unit, standing as the most ubiquitous dermatologic complaint of adolescence.",
      "pearl": "Definitive diagnosis: Acne Vulgaris (حب الشباب) - Core Dermatology."
    }
  },
  "w565": {
    "Arabic": {
      "hint1": "العلاج الأمثل له هو الاستئصال الجراحي بتقنية موهز (Mohs Micrographic Surgery) الدقيقة لضمان نظافة الحواف والحفاظ على أنسجة الوجه.",
      "hint2": "يظهر كلاسيكياً على الوجه أو الرقبة كحطاطة أو عقدة لؤلؤية شفافة ذات حواف ملتفة وتوسع في الشعيرات الدموية السطحية (Telangiectasia).",
      "hint3": "أكثر أنواع سرطانات الجلد انتشاراً بين البشر على الإطلاق، ويمثل نحو 80% من جميع الأورام الجلدية الخبيثة غير الميلانينية.",
      "pearl": "التشخيص النهائي: سرطان الخلايا القاعدية (Basal Cell Carcinoma) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Surgical excision via Mohs micrographic surgery provides the highest cure rate while maximally preserving cosmetically sensitive tissue.",
      "hint2": "Classically manifests on sun-exposed head and neck zones as a pearly translucent papule with rolled borders and prominent arborizing telangiectasias.",
      "hint3": "The most prevalent malignancy diagnosed in humans worldwide, representing approximately 80% of all non-melanoma skin cancers.",
      "pearl": "Definitive diagnosis: Basal Cell Carcinoma (سرطان الخلايا القاعدية) - Core Dermatology."
    }
  },
  "w566": {
    "Arabic": {
      "hint1": "تشتد وتكون شديدة المقاومة لدى المصابين بمرض باركنسون ومرضى ضعف المناعة (HIV)، وتعالج بشامبوهات مضادة للفطريات كالكيتوكونازول.",
      "hint2": "تتظاهر بظهور قشور دهنية صفراء سميكة ومتقشرة مع احمرار خفيف وحكة في فروة الرأس والوجه.",
      "hint3": "حالة جلدية التهابية شائعة جداً تصيب المناطق الغنية بالغدد الدهنية مثل فروة الرأس والحواجب وثنايا الأنف ووسط الصدر.",
      "pearl": "التشخيص النهائي: الالتهاب الجلدي الدهني (Seborrheic Dermatitis) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Exhibits extreme severity in neurological diseases (particularly Parkinson disease) and HIV; responsive to topical ketoconazole and zinc pyrithione.",
      "hint2": "Features greasy, yellowish scales plastered over erythematous plaques, accompanied by mild to moderate pruritus (severe dandruff).",
      "hint3": "A highly prevalent chronic inflammatory dermatosis selectively targeting sebum-rich zones including the scalp, eyebrows, and nasolabial folds.",
      "pearl": "Definitive diagnosis: Seborrheic Dermatitis (الالتهاب الجلدي الدهني) - Core Dermatology."
    }
  },
  "w567": {
      "Arabic": {
          "hint1": "ألم مبرح لا يطاق في الساق يتجاوز بمراحل مساحة الاحمرار الجلدي الخفيف لدى مريض مصاب بالسكري.",
          "hint2": "ظهور فقاعات جلدية بلون رمادي داكن مع إحساس بالفرقعة الغازية (Crepitus) وتخدر مفاجئ في مركز الإصابة.",
          "hint3": "انعدام مقاومة الأنسجة عند الفحص بإصبع الجراح (Positive finger test) مع خروج سائل بلون ماء غسيل الأطباق وسرعة نخر اللفافة.",
          "pearl": "التشخيص النهائي: التهاب اللفافة الناخر (Necrotizing Fasciitis) - من أساسيات Emergency Surgery."
      },
      "English": {
          "hint1": "Excruciating pain localized to an extremity that is starkly disproportionate to mild cutaneous erythema.",
          "hint2": "Development of dusky violaceous bullae, palpable subcutaneous crepitus, and patchy anesthesia from nerve necrosis.",
          "hint3": "Surgical inspection confirms necrotic 'dishwater' fluid and lack of bleeding with positive blunt finger dissection along fascial planes.",
          "pearl": "Definitive diagnosis: Necrotizing Fasciitis - Core Emergency Surgery & Critical Care."
      }
  },
  "w568": {
    "Arabic": {
      "hint1": "إذا ترافقت مع تورم عميق في الشفتين أو اللسان أو الحنجرة وضيق تنفس فإنها تدل على وذمة وعائية وتأق طارئ.",
      "hint2": "تنتج عن تحرر فوري للهيستامين من الخلايا البدينة (Mast cells) في الأدمة مما يرفع نفاذية الأوعية الدموية ويحدث ارتشاحاً سائلاً.",
      "hint3": "اندفاع جلدي تحسسي شائع يتميز بظهور لويحات حمراء شاحبة المركز، مرتفعة ومتورمة تسمى انتبارات (Wheals).",
      "pearl": "التشخيص النهائي: الشرى (Urticaria) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Co-occurrence with deep subcutaneous tumefaction of the lips, tongue, or glottis signifies angioedema portending anaphylaxis.",
      "hint2": "Pathophysiologically initiated by preformed histamine and prostaglandin degranulation from dermal mast cells increasing capillary permeability.",
      "hint3": "A common cutaneous vascular reaction characterized by transient pruritic, edematous, erythematous plaques termed wheals.",
      "pearl": "Definitive diagnosis: Urticaria (الشرى) - Core Dermatology."
    }
  },
  "w569": {
      "Arabic": {
          "hint1": "ظهور طفح جلدي متناظر في راحتي اليدين وظهر الذراعين بعد أسبوعين من إصابة المريض بهربس الشفاه البسيط.",
          "hint2": "الطفح الجلدي يتكون من بقع دائرية مميزة تشبه أهداف الرماية أو عين الثور مكونة من ثلاث حلقات لونية متحدة المركز.",
          "hint3": "الآفات الهدفية النموذجية (Targetoid lesions) متحدة المركز الناتجة عن تفاعل مناعي تالٍ لعدوى فيروس الهربس البسيط.",
          "pearl": "التشخيص النهائي: الحمامى متعددة الأشكال (Erythema Multiforme) - من أساسيات Dermatology."
      },
      "English": {
          "hint1": "Sudden eruption of symmetric circular skin lesions on the palms and extremities 10 days after a recurrent cold sore flare.",
          "hint2": "Each cutaneous lesion displays a distinct three-zoned target pattern mimicking an archery bullseye with a dusky center.",
          "hint3": "Pathognomonic concentric 'target' or 'iris' cutaneous lesions emerging secondary to cell-mediated HSV hypersensitivity.",
          "pearl": "Definitive diagnosis: Erythema Multiforme - Core Dermatology."
      }
  },
  "w570": {
    "Arabic": {
      "hint1": "الفحص النسيجي بالتألق المناعي المباشر يظهر ترسباً خطياً مستمراً للأجسام المضادة والمتمم على طول الغشاء القاعدي.",
      "hint2": "تكون الفقاعات تحت البشرة ذات سقف سميك ومتوتر ومقاومة للتمزق، وتظهر فوق جلد محمر أو طبيعي مع حكة شديدة.",
      "hint3": "مرض مناعي ذاتي فقاعي تحت البشرة يصيب كبار السن غالباً فوق سن السبعين، ويتميز بظهور فقاعات جلدية متوترة وصلبة.",
      "pearl": "التشخيص النهائي: شبيه الفقاع الفقاعي (Bullous Pemphigoid) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Direct immunofluorescence reveals a smooth, unbroken linear band of IgG and C3 deposition along the basement membrane zone.",
      "hint2": "Presents with tense, sturdy, fluid-filled bullae that resist rupture, emerging upon an erythematous urticarial or normal cutaneous base.",
      "hint3": "An autoimmune subepidermal blistering eruption predominantly striking elderly populations over the age of 70.",
      "pearl": "Definitive diagnosis: Bullous Pemphigoid (شبيه الفقاع الفقاعي) - Core Dermatology."
    }
  },
  "w571": {
    "Arabic": {
      "hint1": "يشخص النوع التحسسي باختبار الرقعة الجلدية (Patch test) عبر تثبيت مواد مختلفة على ظهر المريض لـ 48 ساعة.",
      "hint2": "النوع التحسسي يشتهر بحدوثه إثر ملامسة معدن النيكل في الإكسسوارات وساعات اليد، أو العطور، أو نبات اللبلاب السام.",
      "hint3": "رد فعل التهابي جلدي يحدث نتيجة ملامسة مادة خارجية معينة لسطح الجلد بصورة مباشرة.",
      "pearl": "التشخيص النهائي: التهاب الجلد التماسي (Contact Dermatitis) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Allergic etiologies are definitively unmasked through standardized epicutaneous patch testing interpreted after 48 and 96 hours.",
      "hint2": "Allergic triggers classically include nickel hardware in costume jewelry and belt buckles, neomycin, fragrances, or poison ivy.",
      "hint3": "An acute or chronic cutaneous inflammatory reaction precipitated by direct epicutaneous exposure to an exogenous environmental substance.",
      "pearl": "Definitive diagnosis: Contact Dermatitis (التهاب الجلد التماسي) - Core Dermatology."
    }
  },
  "w572": {
    "Arabic": {
      "hint1": "يمتلك قدرة حقيقية على الانبثاث والانتشار للعقد اللمفاوية المجاورة بنسبة تصل إلى 5% خاصة إذا كان على الشفة أو الأذن.",
      "hint2": "يظهر كعقدة أو لويحة صلبة متقشرة مفرطة التقرن، غالباً ما تتقرح وتنزف بسهولة في مناطق الوجه والشفتين والأذنين وظهر اليدين.",
      "hint3": "ثاني أكثر سرطانات الجلد انتشاراً بعد الورم القاعدي، وينشأ من الخلايا الكيراتينية في الطبقة الشائكة للبشرة.",
      "pearl": "التشخيص النهائي: سرطان الخلايا الحرشفية الجلدي (Squamous Cell Carcinoma) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Carries an authentic potential for regional lymphatic metastasis (approximately 2% to 5%), significantly escalated when located on the ear or vermilion.",
      "hint2": "Presents as an indurated, firm, hyperkeratotic crusted nodule or ulcerated crater on sun-exposed lips, pinnae, face, or hands.",
      "hint3": "The second most frequent cutaneous neoplasm, derived from the malignant clonal proliferation of keratinocytes within the stratum spinosum.",
      "pearl": "Definitive diagnosis: Squamous Cell Carcinoma (سرطان الخلايا الحرشفية الجلدي) - Core Dermatology."
    }
  },
  "w573": {
    "Arabic": {
      "hint1": "يعالج بمضادات الفيروسات الفموية مثل الفالاسيكلوفير (Valacyclovir) التي يجب بدؤها خلال أول 72 ساعة من الطفح لتكون فعالة.",
      "hint2": "يسبق ظهور الطفح الجلدي بأيام ألم حارق مبرح أو وخز خدر في المنطقة المصابة قد يشخص خطأً كجلطة قلبية أو مغص كلوي.",
      "hint3": "مرض فيروسي مؤلم ينتج عن إعادة تنشيط فيروس الجدري المائي (Varicella-Zoster Virus) الكامن في العقد العصبية الحسية.",
      "pearl": "التشخيص النهائي: الحزام الناري (Herpes Zoster) - من أساسيات Dermatology."
    },
    "English": {
      "hint1": "Treated with prompt initiation of oral antiviral therapy (valacyclovir, famciclovir) administered within 72 hours of rash onset.",
      "hint2": "Preceded by a prodrome of intense radicular burning pain, hyperesthesia, or allodynia that mimics acute cardiac or visceral pathology.",
      "hint3": "A distressing neurocutaneous syndrome resulting from the clinical reactivation of latent varicella-zoster virus from dorsal root ganglia.",
      "pearl": "Definitive diagnosis: Herpes Zoster (الحزام الناري) - Core Dermatology."
    }
  },
  "w586": {
    "Arabic": {
      "hint1": "العلاج المنقذ للحياة الإلزامي الأول هو الحقن العضلي الفوري لعقار الإبينفرين (Epinephrine) في الفخذ دون أدنى تأخير.",
      "hint2": "يتظاهر بانسداد المجرى الهوائي بوذمة الحنجرة، تضيق القصيبات والصرير، هبوط حاد في ضغط الدم، والشرى المعمم.",
      "hint3": "حالة طوارئ طبية مهددة للحياة تتمثل في تفاعل تحسسي جهازي حاد وشامل وسريع الظهور خلال دقائق من التعرض للمحفز.",
      "pearl": "التشخيص النهائي: الصدمة التأقية (Anaphylaxis) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "The mandatory, life-saving first-line intervention is emergent intramuscular injection of epinephrine into the anterolateral thigh.",
      "hint2": "Presents with acute stridor from laryngeal edema, wheezing bronchospasm, profound vascular collapse/hypotension, and diffuse urticaria.",
      "hint3": "A hyperacute, severe, potentially fatal multi-system hypersensitivity reaction erupting within seconds to minutes of allergen exposure.",
      "pearl": "Definitive diagnosis: Anaphylaxis (الصدمة التأقية) - Core Immunology."
    }
  },
  "w587": {
    "Arabic": {
      "hint1": "فحصه المسحي الأول هو الأجسام المضادة للنواة (ANA)، والفحص التأكيدي عالي النوعية هو الأجسام المضادة لـ (Anti-dsDNA و Anti-Smith).",
      "hint2": "العلامة الجلدية الكلاسيكية له هي طفح جلدي أحمر فوق الخدين وجسر الأنف يسمى طفح الفراشة (Malar/Butterfly rash).",
      "hint3": "مرض مناعي ذاتي جهازي التهابي مزمن معقد يتميز بإنتاج واسع لأجسام مضادة ذاتية ضد مكونات نواة الخلية.",
      "pearl": "التشخيص النهائي: الذئبة الحمامية الجهازية (Systemic Lupus Erythematosus) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Screened initially via antinuclear antibodies (ANA), and confirmed through highly disease-specific markers: Anti-dsDNA and Anti-Smith.",
      "hint2": "The classic hallmark cutaneous manifestation is a photosensitive fixed erythema spanning the malar eminences and nasal bridge (butterfly rash).",
      "hint3": "A prototypical chronic systemic autoimmune disorder characterized by loss of self-tolerance and polyclonal antinuclear antibody synthesis.",
      "pearl": "Definitive diagnosis: Systemic Lupus Erythematosus (الذئبة الحمامية الجهازية) - Core Immunology."
    }
  },
  "w588": {
    "Arabic": {
      "hint1": "يشمل علاجها الطارئ فصادة البلازما (Plasmapheresis) لإزالة الأجسام المضادة السارية مع الستيرويدات وسيكلوفوسفاميد.",
      "hint2": "يتظاهر المريض الكلاسيكي بسعال مدمم (Hemoptysis)، ضيق تنفس حاد، وبول مدمم مع قصور كلوي سريع التدهور.",
      "hint3": "متلازمة مناعية نادرة وخطيرة من النوع الثاني تجمع بين نزيف سنخي حاد في الرئتين والتهاب كبيبات الكلى سريع الترقي.",
      "pearl": "التشخيص النهائي: متلازمة غودباستشر (Goodpasture Syndrome) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Emergency therapeutic protocol mandates urgent therapeutic plasmapheresis to remove circulating antibodies, paired with cyclophosphamide and steroids.",
      "hint2": "Clinical presentation is marked by hemoptysis, bilateral alveolar infiltrates, microscopic hematuria, and rapid azotemic renal failure.",
      "hint3": "A fulminant autoimmune pulmonary-renal syndrome characterized by diffuse alveolar hemorrhage coupled with rapidly progressive glomerulonephritis.",
      "pearl": "Definitive diagnosis: Goodpasture Syndrome (متلازمة غودباستشر) - Core Immunology."
    }
  },
  "w589": {
    "Arabic": {
      "hint1": "تترافق بعيوب خلقية في القلب كرباعية فالوت وجذع شرياني مشترك، وانشقاق في الحنك، وملامح وجه مميزة.",
      "hint2": "يعاني الرضيع حديث الولادة من تشنجات عضلية تكززية ناجمة عن هبوط حاد في مستوى الكالسيوم بالدم لنقص هرمون PTH.",
      "hint3": "متلازمة وراثية خلقية تنتج عن حذف صبغي مجهري دقيق في الذراع الطويلة للكروموسوم رقم 22 (22q11.2 deletion).",
      "pearl": "التشخيص النهائي: متلازمة دي جورج (DiGeorge Syndrome) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Universally linked with conotruncal cardiac anomalies (Tetralogy of Fallot, truncus arteriosus), cleft palate, and dysmorphic facies.",
      "hint2": "Neonates present with neonatal hypocalcemic tetany and seizures due to severe parathyroid hormone deficiency.",
      "hint3": "A congenital neurocristopathy caused by a recurrent microdeletion on the long arm of chromosome 22 at position 22q11.2.",
      "pearl": "Definitive diagnosis: DiGeorge Syndrome (متلازمة دي جورج) - Core Immunology."
    }
  },
  "w590": {
    "Arabic": {
      "hint1": "الفحص السريري يظهر غياباً تاماً للوزتين والعقد اللمفاوية المحيطية، ويعالج بإعطاء الغلوبولين المناعي الوريدي (IVIG) شهرياً مدى الحياة.",
      "hint2": "تبدأ الأعراض في الظهور بعد عمر 6 أشهر عندما تبدأ الأجسام المضادة المكتسبة من الأم عبر المشيمة في التلاشي.",
      "hint3": "عوز مناعي أولي وراثي متنحٍ مرتبط بالصبغي X يصيب الذكور فقط، ويتميز بغياب شبه تام للأجسام المضادة في الدم.",
      "pearl": "التشخيص النهائي: داء بروتون لنقص المناعة (Bruton Agammaglobulinemia) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Physical examination reveals strikingly hypoplastic or absent palatine tonsils and peripheral lymph nodes; managed with lifelong regular IVIG infusions.",
      "hint2": "Clinical vulnerability surfaces around 6 months of age coincident with the physiological catabolism of maternal transplacental IgG.",
      "hint3": "An inherited primary immunodeficiency transmitted as an X-linked recessive trait, exclusively afflicting male pediatric patients.",
      "pearl": "Definitive diagnosis: Bruton Agammaglobulinemia (داء بروتون لنقص المناعة) - Core Immunology."
    }
  },
  "w591": {
    "Arabic": {
      "hint1": "يمثل طوارئ مناعية قصوى تؤدي للوفاة في السنة الأولى إذا لم يتم علاجه بزراعة نخاع العظم (خلايا جذعية) في الأشهر الأولى.",
      "hint2": "يعرف تاريخياً وإعلامياً بمرض طفل الفقاعة لأن الرضيع لا يستطيع العيش إلا في بيئة معقمة ومعزولة كلياً.",
      "hint3": "أخطر أشكال العوز المناعي الوراثي الأولي على الإطلاق حيث يتعطل الشقان الخلوي والخلطي للجهاز المناعي تماماً.",
      "pearl": "التشخيص النهائي: عوز المناعة المشترك الشديد (Severe Combined Immunodeficiency) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Constitutes an absolute medical emergency uniformly fatal within the first year of life unless rescued by allogeneic hematopoietic stem cell transplantation.",
      "hint2": "Historically immortalized as the 'bubble boy disease' because infants were shielded from the microbial world within sterile enclosures.",
      "hint3": "The most devastating primary pediatric immunodeficiency disorder, characterized by a complete absence of both cellular and humoral immunity.",
      "pearl": "Definitive diagnosis: Severe Combined Immunodeficiency (عوز المناعة المشترك الشديد) - Core Immunology."
    }
  },
  "w593": {
    "Arabic": {
      "hint1": "تتم الوقاية منه بمطابقة HLA الدقيقة وتثبيط المناعة، ويعالج بالجرعات العالية من الكورتيكوستيرويدات ومضادات الكالسينيورين.",
      "hint2": "يستهدف كلاسيكياً ثلاثة أعضاء رئيسية في الجسم: الجلد (طفح حمامي وتقشر)، الكبد (يرقان وركود صفراوي)، والجهاز الهضمي (إسهال مدمم غزير).",
      "hint3": "اختلاط مناعي خطير يحدث بعد زراعة نخاع العظم أو الخلايا الجذعية الخيفية المنقولة من متبرع إلى مريض سرطاني.",
      "pearl": "التشخيص النهائي: داء الطعم حيال الثوي (Graft Versus Host Disease) - من أساسيات Immunology."
    },
    "English": {
      "hint1": "Mitigated prophylactic via strict HLA matching and T-cell depletion; treated with high-dose systemic methylprednisolone and calcineurin inhibitors.",
      "hint2": "Selectively ravages a canonical triad of target organs: the skin (maculopapular desquamative rash), liver (cholestatic jaundice), and gut (profuse secretory diarrhea).",
      "hint3": "A severe systemic immunological complication occurring after allogeneic hematopoietic stem cell transplantation.",
      "pearl": "Definitive diagnosis: Graft Versus Host Disease (داء الطعم حيال الثوي) - Core Immunology."
    }
  },
  "w595": {
    "Arabic": {
      "hint1": "يصيب فئتين عمريتين (توزيع ثنائي الذروة): الشباب في العشرينات وكبار السن، ويستجيب بنسب شفاء عالية لبروتوكول ABVD الكيميائي.",
      "hint2": "يترافق بأعراض جهازية مشهورة تعرف بـ (B symptoms): حمى متموجة (Pel-Ebstein)، تعرق ليلي غزير، وفقدان غير مبرر للوزن.",
      "hint3": "ورم لمفاوي خبيث يصيب الجهاز اللمفاوي ويتميز بوجود خلايا ريد-ستيرنبيرغ (Reed-Sternberg) العملاقة الشبيهة بعيون البومة.",
      "pearl": "التشخيص النهائي: ليمفوما هودجكين (Hodgkin Lymphoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Exhibits a bimodal age distribution peaking in young adulthood and late life; boasts extraordinary cure rates via the ABVD chemotherapy regimen.",
      "hint2": "Frequently accompanied by constitutional 'B symptoms': Pel-Ebstein cyclic fevers, drenching nocturnal diaphoresis, and unexplained weight loss.",
      "hint3": "A lymphoid malignancy distinguished histopathologically by the presence of pathognomonic binucleated Reed-Sternberg cells with prominent owl-eye nucleoli.",
      "pearl": "Definitive diagnosis: Hodgkin Lymphoma (ليمفوما هودجكين) - Core Oncology."
    }
  },
  "w596": {
    "Arabic": {
      "hint1": "يعتمد علاج أكثر أنواعها البائية شيوعاً على البروتوكول المناعي الكيميائي الشهير (R-CHOP) المحتوي على عقار ريتوكسيماب.",
      "hint2": "أكثر أنواعها انتشاراً وشراسة هو سرطان الخلايا البائية الكبيرة المنتشر (DLBCL)، بينما الليمفوما الجريبية هي الأكثر بطئاً.",
      "hint3": "مجموعة غير متجانسة ومتنوعة من الأورام الخبيثة التي تنشأ من الخلايا اللمفاوية التائية أو البائية وتفوق غيرها انتشاراً بنحو خمسة أضعاف.",
      "pearl": "التشخيص النهائي: الليمفوما اللاهودجكينية (Non-Hodgkin Lymphoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Standard front-line curative chemoimmunotherapy for CD20+ B-cell phenotypes revolves around the famous R-CHOP regimen (Rituximab-CHOP).",
      "hint2": "The most prevalent aggressive histologic subtype is Diffuse Large B-Cell Lymphoma (DLBCL), while Follicular Lymphoma represents the indolent prototype.",
      "hint3": "A heterogeneous cohort of lymphoid malignancies arising from B, T, or NK lineage precursors, outnumbering other lymphomas five-fold.",
      "pearl": "Definitive diagnosis: Non-Hodgkin Lymphoma (الليمفوما اللاهودجكينية) - Core Oncology."
    }
  },
  "w597": {
    "Arabic": {
      "hint1": "بسبب سرعة انبثاثه الباكر للدماغ والكبد، نادراً ما يكون مرشحاً للجراحة ويعالج بالكيميائي (بلاتينوم + إيتوبوسيد) وإشعاع الدماغ الوقائي.",
      "hint2": "تظهر خلاياه المجهرية صغيرة الحجم كحبات الشوفان مع سيتوبلازم ضئيل جداً وتفتت كروماتيني داكن (Salt-and-pepper chromatin).",
      "hint3": "أكثر أورام الرئة شراسة وسرعة في الانتشار والانقسام، ويرتبط ارتباطاً سببياً شبه مطلق بالتدخين الكثيف (أكثر من 98%).",
      "pearl": "التشخيص النهائي: سرطان الرئة صغير الخلايا (Small Cell Lung Carcinoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Virtually never amenable to curative surgical resection due to micro-metastases at diagnosis; treated with platinum-etoposide and prophylactic cranial irradiation.",
      "hint2": "Histologically composed of small, fragile round-to-oval cells with scant cytoplasm, granular 'salt-and-pepper' chromatin, and nuclear molding.",
      "hint3": "The most biologically aggressive lung malignancy, notorious for rapid doubling times and an almost absolute linkage to heavy tobacco smoking (>98%).",
      "pearl": "Definitive diagnosis: Small Cell Lung Carcinoma (سرطان الرئة صغير الخلايا) - Core Oncology."
    }
  },
  "w598": {
    "Arabic": {
      "hint1": "تشمل خياراته العلاجية: الاستئصال الجراحي، زراعة الكبد (ضمن معايير ميلانو)، الكي بالتردد الحراري، أو سد الشريان الكيميائي (TACE).",
      "hint2": "الواسم الورمي المصلي الرئيسي المستخدم في مسحه ومتابعته في الدم هو بروتين ألفا فيتو (Alpha-Fetoprotein - AFP).",
      "hint3": "الورم الخبيث الأولي الأكثر شيوعاً في الكبد، وينشأ في أكثر من 80% من الحالات كاختلاط متأخر لتليف الكبد المزمن.",
      "pearl": "التشخيص النهائي: سرطان الخلايا الكبدية (Hepatocellular Carcinoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Therapeutic armamentarium spans anatomical resection, orthotopic liver transplantation (within Milan criteria), RF ablation, and TACE.",
      "hint2": "The sentinel oncologic serum biomarker utilized for clinical screening and surveillance of high-risk cirrhotic cohorts is Alpha-Fetoprotein (AFP).",
      "hint3": "The predominant primary malignancy of the liver parenchyma, developing in upwards of 80% of cases upon a background of established cirrhosis.",
      "pearl": "Definitive diagnosis: Hepatocellular Carcinoma (سرطان الخلايا الكبدية) - Core Oncology."
    }
  },
  "w599": {
    "Arabic": {
      "hint1": "المعيار الذهبي لتشخيصه هو المنظار الهضمي العلوي مع أخذ خزعات متعددة، ويعالج بالاستئصال الجراحي مع تجريف العقد اللمفاوية.",
      "hint2": "النوع المنتشر منه (Diffuse type) يتميز بظهور خلايا مجهرية تشبه الخاتم فصي الخاتم (Signet-ring cells) وتصلب جدار المعدة كالزجاجة.",
      "hint3": "ورم خبيث ينشأ من الخلايا الغدية المبطنة للمعدة، ويرتبط ارتباطاً وثيقاً بعدوى جرثومة المعدة الملوية البوابية (H. pylori).",
      "pearl": "التشخيص النهائي: سرطان المعدة (Gastric Carcinoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "The indisputable diagnostic gold standard is esophagogastroduodenoscopy (EGD) with direct mucosal biopsies, followed by surgical gastrectomy.",
      "hint2": "Diffuse histologic subtypes feature malignant signet-ring cells diffusely infiltrating the muscularis, producing a rigid 'leather bottle' stomach (linitis plastica).",
      "hint3": "A lethal gastrointestinal malignancy originating from gastric mucosal glandular epithelia, powerfully tied to chronic Helicobacter pylori gastritis.",
      "pearl": "Definitive diagnosis: Gastric Carcinoma (سرطان المعدة) - Core Oncology."
    }
  },
  "w600": {
    "Arabic": {
      "hint1": "الواسم الورمي المرتبط به في الدم هو CA 19-9، والجراحة الاستئصالية الكبرى المعتمدة لرأس البنكرياس هي عملية ويبل (Whipple procedure).",
      "hint2": "يترافق بعلامة كورفوازيه (Courvoisier sign) الإيجابية حيث تكون المرارة متضخمة وملموسة وغير مؤلمة بوجود اليرقان.",
      "hint3": "أحد أشد الأورام السرطانية فتكاً وصعوبة في الكشف المبكر، وينشأ في أكثر من 70% من الحالات في رأس غدة البنكرياس.",
      "pearl": "التشخيص النهائي: سرطان البنكرياس الغدي (Pancreatic Adenocarcinoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Monitored serologically via tumor marker CA 19-9; surgical candidates undergo pancreaticoduodenectomy (the Whipple procedure).",
      "hint2": "Demonstrates a positive Courvoisier sign: an enlarged, palpable, non-tender gallbladder in the setting of clinical jaundice.",
      "hint3": "One of the most lethal human neoplasms with exceptionally dismal 5-year survival, arising predominantly within the pancreatic head (70%).",
      "pearl": "Definitive diagnosis: Pancreatic Adenocarcinoma (سرطان البنكرياس الغدي) - Core Oncology."
    }
  },
  "w601": {
    "Arabic": {
      "hint1": "يستخدم واسم الورم CA-125 في الدم لمتابعة الاستجابة للعلاج، ويعالج بجراحة تقليص الورم القصوى مع العلاج الكيميائي القائم على البلاتين.",
      "hint2": "تأتي أكثر من 90% من أنواعه من الظهارة السطحية وأشهرها السرطان المصلي عالي الدرجة (High-grade serous).",
      "hint3": "القاتل الصامت في أورام النساء والتوليد لغياب الأعراض المبكرة واكتشافه غالباً في مراحل متقدمة بعد انتشاره في التجويف البطني.",
      "pearl": "التشخيص النهائي: سرطان المبيض (Ovarian Carcinoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Monitored serologically via serum CA-125 biomarker; managed with maximal cytoreductive debulking surgery and platinum-taxane chemotherapy.",
      "hint2": "The predominant histological subtype is high-grade serous carcinoma, thought to originate largely within the fimbriated ends of Fallopian tubes.",
      "hint3": "Referred to as the silent gynecological killer because early disease is asymptomatic, with >70% presenting with peritoneal carcinomatosis.",
      "pearl": "Definitive diagnosis: Ovarian Carcinoma (سرطان المبيض) - Core Oncology."
    }
  },
  "w609": {
    "Arabic": {
      "hint1": "يحدد وجودها وصول المريض إلى المرحلة الرابعة (Stage IV) من مراحل تدريج المرض، وتتحول الأهداف العلاجية غالباً إلى التلطيف والتحكم.",
      "hint2": "تسلك الخلايا الخبيثة ثلاثة مسارات رئيسية: الانتشار عبر الأوعية اللمفاوية (للعقد)، عبر مجرى الدم (للأعضاء)، أو عبر التجاويف الصفاقية.",
      "hint3": "الخاصية البيولوجية الأخطر للأورام الخبيثة، وتتمثل في انتشار خلايا السرطان من موضع الورم الأولي إلى أعضاء وأنسجة بعيدة.",
      "pearl": "التشخيص النهائي: النقائل الورمية الخبيثة (Neoplasm Metastasis) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Its clinical presence automatically upstages disease to Stage IV in TNM taxonomy, pivoting therapeutic goals toward disease control and palliation.",
      "hint2": "Operates through three anatomical pathways: lymphatic dissemination to regional nodes, hematogenous spread, or transcoelomic cavity seeding.",
      "hint3": "The lethal hallmark characteristic of malignant neoplasms, defined as the biological dissemination of cancer cells from a primary nidus to distant organs.",
      "pearl": "Definitive diagnosis: Neoplasm Metastasis (النقائل الورمية الخبيثة) - Core Oncology."
    }
  },
  "w612": {
    "Arabic": {
      "hint1": "قد يقلد التهاب العظم والنقي الإنتاني لظهوره بألم عظمي موضعي، تورم، ارتفاع بالحرارة، وزيادة في كريات الدم البيضاء.",
      "hint2": "ينتج جينياً عن انتقال صبغي مميز جداً بنسبة تفوق 85% بين الكروموسومين 11 و 22 مسبباً الجين المندمج (EWS-FLI1).",
      "hint3": "ورم عظمي خبيث شديد العدوانية يصيب الأطفال والمراهقين، وينشأ كلاسيكياً في جذع العظام الطويلة (Diaphysis) كعظم الفخذ وعظام الحوض.",
      "pearl": "التشخيص النهائي: ساركوما إيوينغ العظمية (Ewing Sarcoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Frequently mimics acute bacterial osteomyelitis on presentation with localized bone pain, swelling, systemic pyrexia, and leukocytosis.",
      "hint2": "Defined cytogenetically by a pathognomonic balanced reciprocal translocation t(11;22)(q24;q12) forging the oncogenic EWS-FLI1 fusion transcript.",
      "hint3": "A highly aggressive primary malignant pediatric bone tumor, classically predilecting the diaphyses of long tubular bones and the pelvis.",
      "pearl": "Definitive diagnosis: Ewing Sarcoma (ساركوما إيوينغ العظمية) - Core Oncology."
    }
  },
  "w613": {
    "Arabic": {
      "hint1": "يمنع منعاً باتاً أخذ خزعة بالإبرة من مقلة العين تجنباً لانتشار الخلايا السرطانية الخبيثة خارج المدار إلى الدماغ.",
      "hint2": "العلامة السريرية الأكثر شيوعاً هي ابيضاض بؤبؤ العين (Leukocoria) حيث ينعكس الضوء الأبيض من الحدقة في الصور بدلاً من المنعكس الأحمر.",
      "hint3": "أكثر أورام العين الخبيثة انتشاراً لدى الرضع والأطفال الصغار دون سن الخامسة، وينشأ من الخلايا العصبية الجنينية لشبكية العين.",
      "pearl": "التشخيص النهائي: ورم أرومة الشبكية (Retinoblastoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Incisional or aspiration biopsy of the globe is strictly and absolutely contraindicated to prevent catastrophic extraocular tumor dissemination.",
      "hint2": "The leading cardinal clinical sign is leukocoria ('cat's eye reflex'), where a white pupillary reflection replaces the normal red reflex in photographs.",
      "hint3": "The most prevalent primary intraocular malignancy of infancy and early childhood, developing from primitive neuroepithelial retinal precursors.",
      "pearl": "Definitive diagnosis: Retinoblastoma (ورم أرومة الشبكية) - Core Oncology."
    }
  },
  "w614": {
    "Arabic": {
      "hint1": "يشخص مخبرياً بقياس ناتج أيض السيروتونين في البول على مدار 24 ساعة وهو حمض (5-HIAA)، ويعالج بمشابهات السوماتوستاتين (Octreotide).",
      "hint2": "تحدث المتلازمة المرتبطة به كلاسيكياً فقط بعد حدوث نقائل كبدية تتجاوز قدرة الكبد على استقلاب السيروتونين المفرز.",
      "hint3": "ورم عصبي صماوي بطيء النمو ينشأ من خلايا كولتشيتسكي المعوية الأليفة للفضة، ويصيب غالباً الزائدة الدودية والأمعاء الدقيقة والرئتين.",
      "pearl": "التشخيص النهائي: الورم السرطاوي (Carcinoid Tumor) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Confirmed biochemically through elevated 24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA); medically managed with octreotide somatostatin analogues.",
      "hint2": "The classic clinical syndrome erupts strictly once hepatic metastases develop, bypassing liver first-pass metabolic serotonin degradation.",
      "hint3": "A well-differentiated, indolent neuroendocrine neoplasm derived from enterochromaffin cells, most frequently residing in the appendix, ileum, and bronchi.",
      "pearl": "Definitive diagnosis: Carcinoid Tumor (الورم السرطاوي) - Core Oncology."
    }
  },
  "w615": {
    "Arabic": {
      "hint1": "الفحص المجهري يظهر منظراً باثولوجياً كلاسيكياً يسمى السماء المرصعة بالنجوم (Starry sky pattern) بسبب التهام البلاعم للخلايا الميتة.",
      "hint2": "النوع المتوطن في إفريقيا يرتبط بفيروس إبشتاين-بار (EBV) ويظهر ككتلة ضخمة مشوهة سريعة النمو في عظام الفك والوجه عند الأطفال.",
      "hint3": "أسرع الأورام البشرية نمواً وانقساماً على الإطلاق، حيث يتضاعف حجم كتلته الورمية خلال أقل من 24 ساعة ومؤشر تكاثره Ki-67 يقارب 100%.",
      "pearl": "التشخيص النهائي: ليمفوما بوركيت (Burkitt Lymphoma) - من أساسيات Oncology."
    },
    "English": {
      "hint1": "Histopathology displays the iconic 'starry-sky appearance', wherein tingible-body macrophages digesting apoptotic debris stand out against sheets of basophilic blasts.",
      "hint2": "Endemic African forms are universally driven by Epstein-Barr virus (EBV), presenting as a rapidly expanding disfiguring pediatric jaw/mandibular mass.",
      "hint3": "The fastest-growing human malignancy known, boasting cellular doubling times under 24 hours and a proliferative Ki-67 growth fraction nearing 100%.",
      "pearl": "Definitive diagnosis: Burkitt Lymphoma (ليمفوما بوركيت) - Core Oncology."
    }
  },
  "w616": {
      "Arabic": {
          "hint1": "نزف مهبلي أحمر فاقع غير مؤلم يحدث في اللحظة التي تنفجر فيها مياه الجنين أثناء الولادة.",
          "hint2": "تخطيط قلب الجنين يظهر فجأة نمطاً جيبياً متموجاً شديد الخطورة (Sinusoidal pattern) ينذر بموت الجنين بالنزف.",
          "hint3": "اختبار آبت (Apt test) يثبت أن الدم النازف يحتوي على هيموغلوبين الجنين المقاوم لمحلول هيدروكسيد الصوديوم.",
          "pearl": "التشخيص النهائي: الأوعية المنزاحة (Vasa Previa) - من أساسيات Emergency Obstetrics."
      },
      "English": {
          "hint1": "Sudden onset of painless, bright red vaginal bleeding occurring instantaneously upon amniotic membrane rupture.",
          "hint2": "Electronic fetal heart rate monitoring immediately deteriorates into an ominous, agonal sinusoidal trace.",
          "hint3": "The Apt test reveals that the vaginal blood is predominantly alkali-resistant fetal hemoglobin originating from unprotected vessels.",
          "pearl": "Definitive diagnosis: Vasa Previa - Core Emergency Obstetrics."
      }
  },
  "w617": {
    "Arabic": {
      "hint1": "يظهر فحص السونار المهبلي مبيضين متضخمين محاطين بأكثر من 12 إلى 20 جريب صغير تشبه قلادة اللؤلؤ (String of pearls).",
      "hint2": "تتظاهر سريرياً بالشعرانية الزائدة (Hirsutism) في الوجه والذقن، حب الشباب المستعصي، تساقط شعر الرأس الذكوري، وزيادة الوزن.",
      "hint3": "أكثر الاضطرابات الهرمونية الصماوية انتشاراً لدى النساء في سن الإنجاب، وتعد السبب الرئيسي لعقم انعدام الإباضة.",
      "pearl": "التشخيص النهائي: متلازمة تكيس المبايض (Polycystic Ovary Syndrome) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Pelvic ultrasound typically demonstrates enlarged ovaries bearing multiple small subcapsular antral follicles arranged like a 'string of pearls'.",
      "hint2": "Clinically marked by terminal male-pattern hirsutism on the face and trunk, cystic recalcitrant acne, androgenic alopecia, and central obesity.",
      "hint3": "The most prevalent reproductive endocrine pathology afflicting premenopausal women, standing as the leading cause of anovulatory infertility.",
      "pearl": "Definitive diagnosis: Polycystic Ovary Syndrome (متلازمة تكيس المبايض) - Core Obstetrics and Gynecology."
    }
  },
  "w618": {
    "Arabic": {
      "hint1": "تسبب الأورام الكبيرة أعراض ضغط كتلي على المثانة مسببة تكرار التبول، أو ضغطاً على المستقيم مسببة الإمساك.",
      "hint2": "يصنف تشريحياً حسب موقعه إلى: تحت المخاطية (Submucosal)، وداخل الجدار العضلي (Intramural)، وتحت المصلية (Subserosal).",
      "hint3": "الورم الحميد الأكثر شيوعاً على الإطلاق في الجهاز التناسلي الأنثوي، وينشأ من خلايا العضلات الملساء لجدار الرحم.",
      "pearl": "التشخيص النهائي: الورم العضلي الأملس الرحمي (Uterine Leiomyoma) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Substantial bulk effect produces pelvic pressure, urinary frequency through anterior bladder compression, and chronic tenesmus.",
      "hint2": "Anatomically subclassified according to FIGO guidelines into submucosal, intramural, subserosal, or pedunculated topological variants.",
      "hint3": "The single most ubiquitous benign neoplasm of the female reproductive tract, originating clonally from uterine smooth muscle myometrium.",
      "pearl": "Definitive diagnosis: Uterine Leiomyoma (الورم العضلي الأملس الرحمي) - Core Obstetrics and Gynecology."
    }
  },
  "w619": {
    "Arabic": {
      "hint1": "يمكن الوقاية منه بفعالية تامة عبر اللقاح المضاد للفيروس قبل الزواج وإجراء مسحة عنق الرحم الدورية للكشف المبكر.",
      "hint2": "تنتج بروتيناته الفيروسية (E6 و E7) مواد تعطل الجينات الكابتة للأورام الأساسية (p53 و Rb) مما يحفز التسرطن.",
      "hint3": "ورم خبيث يصيب مدخل الرحم، وتعود أكثر من 99% من حالاته سببياً إلى عدوى مزمنة بالأنماط عالية الخطورة من فيروس الورم الحليمي البشري (HPV).",
      "pearl": "التشخيص النهائي: سرطان عنق الرحم (Cervical Cancer) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Extremely preventable via routine prophylactic adolescent HPV vaccination programs paired with periodic cervical screening.",
      "hint2": "Viral oncoproteins E6 and E7 drive malignant transformation by accelerating the targeted degradation of p53 and RB tumor suppressors.",
      "hint3": "A gynecologic malignancy affecting the lower uterine segment, virtually 100% etiologically linked to persistent high-risk Human Papillomavirus (HPV).",
      "pearl": "Definitive diagnosis: Cervical Cancer (سرطان عنق الرحم) - Core Obstetrics and Gynecology."
    }
  },
  "w621": {
    "Arabic": {
      "hint1": "يبدأ علاجه بالحمية والرياضة، وفي حال عدم الانضباط يعد الإنسولين البشري هو الخيار الدوائي الآمن الأول المفضل.",
      "hint2": "يتم مسحه روتينياً لجميع الحوامل بين الأسبوعين 24 و 28 من الحمل عبر اختبار تحمل الجلوكوز الفموي (OGTT).",
      "hint3": "أي درجة من عدم تحمل الجلوكوز وارتفاع سكر الدم يتم تشخيصها لأول مرة أثناء الثلث الثاني أو الثالث من فترة الحمل.",
      "pearl": "التشخيص النهائي: سكري الحمل (Gestational Diabetes) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "First-line management centers upon Medical Nutrition Therapy and physical activity; subcutaneous insulin is the gold-standard pharmacotherapy.",
      "hint2": "Screened universally among all pregnant gravidas between the 24th and 28th weeks of gestation via oral glucose tolerance testing (OGTT).",
      "hint3": "Any degree of carbohydrate intolerance with hyperglycemia manifesting with initial onset or first recognition during pregnancy.",
      "pearl": "Definitive diagnosis: Gestational Diabetes (سكري الحمل) - Core Obstetrics and Gynecology."
    }
  },
  "w622": {
    "Arabic": {
      "hint1": "أخطر مضاعفاته هو صعود البكتيريا المهبلية وحدوث عدوى والتهاب داخل الكيس الأمنيوسي وحمى للأم تعرف بـ (Chorioamnionitis).",
      "hint2": "تشكو الحامل من تدفق مفاجئ أو تسريب مستمر لسائل مائي شفاف دافئ من المهبل.",
      "hint3": "حدوث تمزق وتدفق للسائل السلوي المحيط بالجنين قبل بدء المخاض وانقباضات الولادة الفعلية.",
      "pearl": "التشخيص النهائي: تمزق الأغشية الباكر (Premature Rupture of Membranes) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "The most dreaded acute maternal-fetal infectious sequela is ascending intraamniotic bacterial infection (chorioamnionitis).",
      "hint2": "Patients recount a classic history of an abrupt gush or continuous persistent warm watery trickling from the vaginal introitus.",
      "hint3": "Spontaneous rupture of the amniotic sac and chorionic membranes occurring prior to the clinical onset of active labor contractions.",
      "pearl": "Definitive diagnosis: Premature Rupture of Membranes (تمزق الأغشية الباكر) - Core Obstetrics and Gynecology."
    }
  },
  "w623": {
    "Arabic": {
      "hint1": "تدار بمناورات إسعافية قياسية فورية كـ مناورة ماكروبرتس (ثني فخذي الأم بقوة للبطن) والضغط فوق العانة لتخليص الكتف.",
      "hint2": "يشكل كبر وزن الجنين وتضخمه (خاصة في أمهات السكري) والولادة بالشفاط أهم عوامل خطورتها.",
      "hint3": "حالة طوارئ ولادية حادة لا يمكن التنبؤ بها، ينحشر فيها الكتف الأمامي للجنين خلف عظم عانة الأم بعد خروج الرأس.",
      "pearl": "التشخيص النهائي: عسر ولادة الكتف (Shoulder Dystocia) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Resolved via standardized sequential obstetric emergency drills: McRoberts maneuver (hyperflexing maternal thighs) and suprapubic pressure.",
      "hint2": "Strongly preconditioned by fetal macrosomia (>4000g), maternal gestational diabetes, post-dates pregnancy, and instrumental vacuum delivery.",
      "hint3": "An unpredictable, dramatic obstetric emergency wherein the anterior fetal shoulder becomes impacted behind the maternal pubic symphysis.",
      "pearl": "Definitive diagnosis: Shoulder Dystocia (عسر ولادة الكتف) - Core Obstetrics and Gynecology."
    }
  },
  "w624": {
    "Arabic": {
      "hint1": "تتطلب ولادة قيصرية مخططة بدقة بفريق متعدد التخصصات وتجهيز وحدات دم مكثفة مع استئصال الرحم في نفس الوقت غالباً.",
      "hint2": "تشمل درجاتها الأكثر عمقاً: المشيمة المنغرسة بعمق في العضل (Increta)، والمشيمة المخترقة لجدار الرحم والمثانة (Percreta).",
      "hint3": "حالة خطيرة تنغرس فيها الزغابات المشيمية مباشرة داخل الطبقة العضلية لجدار الرحم بسبب غياب الطبقة الساقطة الإسفنجية (Decidua).",
      "pearl": "التشخيص النهائي: المشيمة الملتصقة (Placenta Accreta) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Demands planned multidisciplinary Cesarean delivery with massive transfusion protocol on standby, culminating in planned Cesarean hysterectomy.",
      "hint2": "Spectrum encompasses increta (invading deep into myometrium) and percreta (penetrating through the uterine serosa into the urinary bladder).",
      "hint3": "A life-threatening obstetric condition where chorionic villi attach abnormally directly to the myometrium due to absent decidua basalis.",
      "pearl": "Definitive diagnosis: Placenta Accreta (المشيمة الملتصقة) - Core Obstetrics and Gynecology."
    }
  },
  "w625": {
    "Arabic": {
      "hint1": "يبدأ تدبيره فوراً بالتدليك الخارجي لعضلة الرحم، وإعطاء مقبضات الرحم الوريدية وأولها هرمون الأوكسيتوسين (Oxytocin).",
      "hint2": "يعد ارتخاء وكسل عضلات الرحم (Uterine Atony) المسؤول عن أكثر من 70% إلى 80% من جميع الحالات.",
      "hint3": "السبب الرئيسي لوفيات الأمهات حول العالم بعد الولادة، ويعرف بفقدان دم يتجاوز 500 مل بعد الولادة الطبيعية أو 1000 مل بعد القيصرية.",
      "pearl": "التشخيص النهائي: نزف ما بعد الوضع (Postpartum Hemorrhage) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Immediate emergency protocol dictates continuous bimanual fundal massage and rapid infusion of uterotonic agents, headlined by oxytocin.",
      "hint2": "Failure of effective myometrial contraction (uterine atony) accounts for greater than 70% to 80% of all severe clinical hemorrhages.",
      "hint3": "The leading cause of maternal mortality worldwide, defined as cumulative blood loss exceeding 500 mL following vaginal or 1000 mL post-Cesarean delivery.",
      "pearl": "Definitive diagnosis: Postpartum Hemorrhage (نزف ما بعد الوضع) - Core Obstetrics and Gynecology."
    }
  },
  "w626": {
      "Arabic": {
          "hint1": "حامل في الثلث الأخير تتلوى من ألم حاد في الجانب الأيمن العلوي للبطن تحت الأضلاع مع غثيان ويرقان خفيف.",
          "hint2": "تحاليل الدم تظهر هبوطاً حاداً في الصفائح الدموية مع ارتفاع ملحوظ في إنزيمات الكبد وإنزيم LDH وظهور خلايا Schistocytes.",
          "hint3": "الثالوث التوليدي الشهير: انحلال الدم باعتلال الأوعية الدقيقة، وفرط إنزيمات الكبد، ونقص الصفيحات الدموية.",
          "pearl": "التشخيص النهائي: متلازمة هيلب (HELLP Syndrome) - من أساسيات Maternal-Fetal Medicine."
      },
      "English": {
          "hint1": "A third-trimester gravida presenting with severe epigastric and right upper quadrant visceral pain, malaise, and mild jaundice.",
          "hint2": "Laboratory workup reveals microangiopathic hemolytic anemia, thrombocytopenia (<100,000), and pronounced AST/LDH transaminitis.",
          "hint3": "The classic obstetric triad: Hemolysis, Elevated Liver enzymes, and Low Platelets mandating prompt delivery.",
          "pearl": "Definitive diagnosis: HELLP Syndrome - Core Obstetrics & Critical Care."
      }
  },
  "w632": {
    "Arabic": {
      "hint1": "الكيس الديرمويدي (Dermoid / Teratoma) هو ورم كيسي حميد شهير يحتوي على أنسجة غريبة كالشعر والأسنان والدهون والغضاريف.",
      "hint2": "تزول معظم الأكياس الوظيفية الصغيرة تلقائياً دون أي علاج دوائي خلال دورة إلى دورتين شهريتين.",
      "hint3": "كيس ممتلئ بسائل يتشكل داخل مبيض المرأة أو على سطحه الخارجي، وأكثره أكياس وظيفية فسيولوجية حميدة.",
      "pearl": "التشخيص النهائي: كيس المبيض (Ovarian Cyst) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Mature cystic teratomas (dermoid cysts) represent benign germ-cell cysts famously packed with hair, sebum, calcified teeth, and thyroid tissue.",
      "hint2": "Most physiological simple unilocular thin-walled cysts spontaneously regress within one to two menstrual cycles without medical intervention.",
      "hint3": "A fluid-filled sac situated within the ovarian parenchyma or perched upon its cortical surface, the vast majority being benign functional cysts.",
      "pearl": "Definitive diagnosis: Ovarian Cyst (كيس المبيض) - Core Obstetrics and Gynecology."
    }
  },
  "w634": {
    "Arabic": {
      "hint1": "يتطلب تدليكاً قوياً للرحم عبر البطن مع التسريب الفوري لمقبضات الرحم (الأوكسيتوسين وميثيل إرغومترين والميزوبروستول).",
      "hint2": "تزداد خطورة حدوثه عند فرط تمدد جدار الرحم (كالحمل بتوائم، الجنين الضخم، وزيادة السائل السلوي) أو طول مدة المخاض.",
      "hint3": "فشل عضلة الرحم في الانقباض والتقلص القوي بعد انفصال وولادة المشيمة، ويعد السبب رقم واحد لنزيف ما بعد الولادة (PPH).",
      "pearl": "التشخيص النهائي: ونى الرحم الارتخائي (Uterine Atony) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Managed by immediate vigorous fundal massage alongside synchronized intravenous uterotonic pharmacotherapy (oxytocin, ergots, prostaglandins).",
      "hint2": "Precipitated by uterine overdistension (multifetal gestation, fetal macrosomia, polyhydramnios), prolonged dysfunctional labor, or chorioamnionitis.",
      "hint3": "The inability of the myometrium to achieve sustained physiological contraction and tone following placental delivery.",
      "pearl": "Definitive diagnosis: Uterine Atony (ونى الرحم الارتخائي) - Core Obstetrics and Gynecology."
    }
  },
  "w635": {
    "Arabic": {
      "hint1": "تتطلب إيقاف مقبضات الرحم فوراً وإعادة الرحم يدوياً لمكانه الطبيعي (مناورة جونسون Johnson maneuver) تحت تخدير عام قبل انغلاق عنقه.",
      "hint2": "تتظاهر بكتلة لحمية حمراء كروية تبرز فجأة من فتحة المهبل مع غياب قاع الرحم الملموس كروياً في أسفل البطن.",
      "hint3": "حالة طوارئ توليدية نادرة وشديدة الخطورة ينقلب فيها قاع الرحم إلى الداخل كالجورب ويبرز في المهبل أو خارجه.",
      "pearl": "التشخيص النهائي: انقلاب الرحم (Uterine Inversion) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Mandates immediate cessation of uterotonics and urgent manual uterine replacement (Johnson's maneuver) under general tocolytic anesthesia.",
      "hint2": "Evident as a globular, beefy red, bleeding vascular mass protruding through the vulva, alongside a conspicuous abdominal fundal hollow.",
      "hint3": "A rare, catastrophic obstetric emergency where the uterine fundus collapses inward into the endometrial cavity like an inverted sock.",
      "pearl": "Definitive diagnosis: Uterine Inversion (انقلاب الرحم) - Core Obstetrics and Gynecology."
    }
  },
  "w636": {
    "Arabic": {
      "hint1": "يعالج جراحياً بربط وتطويق عنق الرحم بخيط غير قابل للامتصاص (Cervical Cerclage) في بداية الثلث الثاني ويفك قبل موعد الولادة.",
      "hint2": "يرتبط بتاريخ جراحي سابق على عنق الرحم كاستئصال مخروطي (Conization) لعلاج خلل التنسج، أو ولادات سابقة متعسرة.",
      "hint3": "عجز وظيفي وتشريحي في أنسجة عنق الرحم يجعله يتسع ويترقق في الثلث الثاني من الحمل دون وجود مخاض أو ألم.",
      "pearl": "التشخيص النهائي: قصور عنق الرحم (Incompetent Cervix) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Treated surgically via cervical cerclage (McDonald or Shirodkar tape placement) deployed prophylactically at 12 to 14 weeks.",
      "hint2": "Frequently precipitated by prior mechanical cervical trauma, notably diagnostic cone biopsies, loop electrosurgical excisions, or cervical tears.",
      "hint3": "Structural inability of the cervical stroma to retain an intrauterine pregnancy in the absence of clinical contractions or labor.",
      "pearl": "Definitive diagnosis: Incompetent Cervix (قصور عنق الرحم) - Core Obstetrics and Gynecology."
    }
  },
  "w637": {
    "Arabic": {
      "hint1": "تعد عدوى مختلطة متعددة الميكروبات (بكتيريا لا هوائية وهوائية)، وتعالج بالمضادات الحيوية الوريدية التوليفية كالكليندامايسين والجنتاميسين.",
      "hint2": "أهم عامل خطورة على الإطلاق لحدوثها هو الولادة عبر عملية قيصرية، وطول مدة تمزق الأغشية الباكر، وكثرة الفحوصات المهبلية.",
      "hint3": "عدوى بكتيرية حادة تصيب الجهاز التناسلي للمرأة خلال فترة النفاس (أول 6 أسابيع بعد الولادة) مسببة حمى وارتعاشاً.",
      "pearl": "التشخيص النهائي: حمى النفاس الإنتانية (Puerperal Sepsis) - من أساسيات Obstetrics and Gynecology."
    },
    "English": {
      "hint1": "Characterized microbiologically as a polymicrobial mixed aerobic-anaerobic infection, managed with IV clindamycin plus gentamicin.",
      "hint2": "Cesarean delivery stands as the single most prominent predisposing risk factor, alongside prolonged rupture of membranes and multiple digital exams.",
      "hint3": "A severe bacterial infection of the genital tract occurring at any time from rupture of membranes or labor up to the 42nd postpartum day.",
      "pearl": "Definitive diagnosis: Puerperal Sepsis (حمى النفاس الإنتانية) - Core Obstetrics and Gynecology."
    }
  },
  "w638": {
      "Arabic": {
          "hint1": "ما هو السبب الذي يؤدي إلى قصور الصمام الهجائي بين البطين الأيسر والأبهر؟ فكر في الحمى الروماتيزمية وتوسع جذر الأبهر.",
          "hint2": "أعراض مثل الخفقان وضيق النفس الجهدي وإحساس بنبض قوي، مع وجود علامات سريرية تدل على ارتفاع ضغط النبض وقصور انبساطي.",
          "hint3": "العلامة المحددة: نفخة انبساطية مبكرة متناقصة تُسمع بأفضل شكل على الحد الأيسر للقص مع نبض محيطي قافز.",
          "pearl": "التشخيص النهائي: قلس الأبهر (Aortic Regurgitation) - من أساسيات Cardiology."
      },
      "English": {
          "hint1": "What condition results from diastolic leakage of blood from the aorta back into the left ventricle? Think of rheumatic heart disease and aortic root dilation.",
          "hint2": "Symptoms include palpitations, exertional dyspnea, and bounding pulses, with a wide pulse pressure on examination.",
          "hint3": "The hallmark is an early diastolic decrescendo murmur best heard at the left sternal border with collapsing peripheral pulses.",
          "pearl": "Definitive diagnosis: Aortic Regurgitation (قلس الأبهر) - Core Cardiology."
      }
  },
  "w639": {
      "Arabic": {
          "hint1": "فكر في اضطراب توصيل خلقي يسمح بالوصول السريع للبطينين عبر طريق إضافي، ويتجلى بنمط ECG مميز.",
          "hint2": "أعراض نوبات خفقان سريع تبدأ وتتوقف فجأة، مع دوخة أو إغماء، وقد يكون الفحص القلبي طبيعياً بين النوبات.",
          "hint3": "العلامة المميزة في التخطيط: PR قصير جداً وموجة دلتا قبل QRS الواسع.",
          "pearl": "التشخيص النهائي: متلازمة وولف-باركنسون-وايت (Wolff-Parkinson-White Syndrome) - من أساسيات Cardiology."
      },
      "English": {
          "hint1": "Think of a congenital conduction disorder that lets impulses reach the ventricles rapidly through an extra pathway, producing a distinctive ECG pattern.",
          "hint2": "Recurrent episodes of sudden-onset palpitations with dizziness or syncope; cardiac exam is often normal between episodes.",
          "hint3": "The ECG hallmark is a very short PR interval and a delta wave preceding a widened QRS.",
          "pearl": "Definitive diagnosis: Wolff-Parkinson-White Syndrome (متلازمة وولف-باركنسون-وايت) - Core Cardiology."
      }
  },
  "w640": {
      "Arabic": {
          "hint1": "ما هو السبب القلبي المباشر الذي يؤدي إلى فشل المضخة وهبوط الضغط مع برودة الأطراف؟",
          "hint2": "مريض بعد احتشاء قلبي حاد يظهر بشحوب وتعرق وهبوط ضغط وتشوش ذهني وقلة تبول - ما المتلازمة السريرية؟",
          "hint3": "العلامة المميزة هي هبوط ضغط مع نقص تروية طرفية رغم امتلاء البطينين وناتج قلبي منخفض جداً.",
          "pearl": "التشخيص النهائي: الصدمة قلبية المنشأ (Cardiogenic Shock) - من أساسيات Cardiology."
      },
      "English": {
          "hint1": "Which direct cardiac cause leads to pump failure and hypotension with cold extremities?",
          "hint2": "Post large myocardial infarction, the patient is pale, diaphoretic, hypotensive, confused, and oliguric – what syndrome?",
          "hint3": "The hallmark is hypotension with end-organ hypoperfusion despite adequate ventricular filling and very low cardiac output.",
          "pearl": "Definitive diagnosis: Cardiogenic Shock (الصدمة قلبية المنشأ) - Core Cardiology."
      }
  },
  "w641": {
      "Arabic": {
          "hint1": "امرأة في سن اليأس تصاب بألم صدري حاد بعد صدمة عاطفية شديدة، وتخطيط القلب يُظهر تغيرات إقفارية لكن القسطرة التاجية سليمة.",
          "hint2": "يظهر العرض بقصور قلبي حاد مع ألم صدري وضيق نفس وتعرق، وقد توجد علامات احتقان رئوي.",
          "hint3": "العلامة المميزة على تصوير البطين الأيسر هي انتفاخ القمة بشكل بالوني مع فرط حركة القاعدة.",
          "pearl": "التشخيص النهائي: اعتلال تاكوتسوبو لعضلة القلب (Takotsubo Cardiomyopathy) - من أساسيات Cardiology."
      },
      "English": {
          "hint1": "A postmenopausal woman develops sudden crushing chest pain after devastating emotional news; ECG shows ischemic changes but coronary angiography is normal.",
          "hint2": "Patients often present with acute heart failure features including chest pain, dyspnea, diaphoresis, and possible pulmonary congestion signs.",
          "hint3": "The hallmark on left ventriculography is apical ballooning with a hypercontractile base and preserved basal function.",
          "pearl": "Definitive diagnosis: Takotsubo Cardiomyopathy (اعتلال تاكوتسوبو لعضلة القلب) - Core Cardiology."
      }
  },
  "w642": {
      "Arabic": {
          "hint1": "مريض مسن يعاني صداعاً جديداً وحساسية في فروة الرأس وألماً عند المضغ، ما التشخيص الأرجح؟",
          "hint2": "ارتفاع شديد في ESR مع أعراض بصرية عابرة أو فقدان بصر، وأحياناً حمى ونقص وزن.",
          "hint3": "العلامة الحاسمة تأتي من خزعة وعائية تبين التهاباً حبيبومياً وخلايا عملاقة.",
          "pearl": "التشخيص النهائي: التهاب الشرايين الخلوية العملاقة (Giant Cell Arteritis) - من أساسيات Neurology."
      },
      "English": {
          "hint1": "An elderly patient with new headache, scalp tenderness, and jaw pain on chewing—what is the likely diagnosis?",
          "hint2": "Markedly elevated ESR with transient visual symptoms or vision loss, sometimes fever and weight loss.",
          "hint3": "The decisive clue comes from a vascular biopsy showing granulomatous inflammation and giant cells.",
          "pearl": "Definitive diagnosis: Giant Cell Arteritis (التهاب الشرايين الخلوية العملاقة) - Core Neurology."
      }
  },
  "w643": {
      "Arabic": {
          "hint1": "ما المتلازمة السريرية التي تتطلب رنيناً مغناطيسياً طارئاً وجراحة عاجلة؟",
          "hint2": "أعراض: ألم قطني حاد، خدر سرجي، ضعف سفلي مترقي.",
          "hint3": "العلامة المميزة: احتباس بولي حاد مع فقد حس العجان.",
          "pearl": "التشخيص النهائي: متلازمة ذيل الفرس (Cauda Equina Syndrome) - من أساسيات Neurology."
      },
      "English": {
          "hint1": "Which clinical syndrome demands urgent MRI and emergency decompression?",
          "hint2": "Symptoms: acute back pain, saddle anesthesia, ascending leg weakness.",
          "hint3": "Hallmark: acute urinary retention with perianal sensory loss.",
          "pearl": "Definitive diagnosis: Cauda Equina Syndrome (متلازمة ذيل الفرس) - Core Neurology."
      }
  },
  "w644": {
      "Arabic": {
          "hint1": "ما الحالة التي تتميز بتجمع سائل داخل نسيج الحبل الشوكي وتسبب أعراضاً عصبية تدريجية؟",
          "hint2": "يعاني المريض من ضعف وضمور في اليدين مع فقدان الإحساس بالألم والحرارة في الطرفين العلويين.",
          "hint3": "العلامة المميزة هي التفارق الحسي: فقدان الحس النخاعي الشوكي المهادي مع بقاء حس العمود الخلفي.",
          "pearl": "التشخيص النهائي: تكهف النخاع (Syringomyelia) - من أساسيات Neurology."
      },
      "English": {
          "hint1": "What condition features a fluid-filled cavity inside the spinal cord causing progressive neurological deficits?",
          "hint2": "The patient has hand weakness and wasting with loss of pain and temperature sensation in the upper limbs.",
          "hint3": "The hallmark is dissociated sensory loss: impairment of spinothalamic sensation with preserved dorsal column function.",
          "pearl": "Definitive diagnosis: Syringomyelia (تكهف النخاع) - Core Neurology."
      }
  },
  "w645": {
      "Arabic": {
          "hint1": "ابدأ بأعراض ركود صفراوي مزمن عند مريض شاب لديه تاريخ التهاب قولون تقرحي.",
          "hint2": "يظهر ارتفاع الفوسفاتاز القلوية مع تصوير قنوات يُظهر تضيقات متعددة وتوسعات بينها.",
          "hint3": "النمط التصويري يشبه حبات الخرز على طول الشجرة الصفراوية.",
          "pearl": "التشخيص النهائي: التهاب الأقنية الصفراوية المصلب البدئي (Primary Sclerosing Cholangitis) - من أساسيات Gastroenterology."
      },
      "English": {
          "hint1": "Think of chronic cholestasis in a young patient with a history of ulcerative colitis.",
          "hint2": "Elevated alkaline phosphatase with multifocal biliary strictures and intervening dilatations on imaging.",
          "hint3": "The cholangiographic appearance of multiple strictures and dilations resembles a string of beads.",
          "pearl": "Definitive diagnosis: Primary Sclerosing Cholangitis (التهاب الأقنية الصفراوية المصلب البدئي) - Core Gastroenterology."
      }
  },
  "w646": {
      "Arabic": {
          "hint1": "تخيل مريضاً أتى للطوارئ بألم صدري حاد بعد نوبة قيء عنيفة؛ ما الحالة الإسعافية التي يجب استبعادها فوراً؟",
          "hint2": "تترافق الحالة مع حمى، وضيق تنفس، وانتفاخ في الرقبة مع الفرقعة تحت الجلد، وقد يتطور صدمة إنتانية.",
          "hint3": "العلامة المفصلية: هواء في المنصف وانصباب جنبي أيسر، مع تسرب تباين خارج المريء عند التصوير.",
          "pearl": "التشخيص النهائي: متلازمة بورهاف (Boerhaave Syndrome) - من أساسيات Gastroenterology."
      },
      "English": {
          "hint1": "Imagine a patient presenting to the ER with severe chest pain after forceful vomiting; what life-threatening condition must you rule out immediately?",
          "hint2": "This condition is associated with fever, dyspnea, neck swelling with subcutaneous crepitus, and can progress to septic shock.",
          "hint3": "The defining clue is pneumomediastinum with left pleural effusion and contrast extravasation outside the esophagus on imaging.",
          "pearl": "Definitive diagnosis: Boerhaave Syndrome (متلازمة بورهاف) - Core Gastroenterology."
      }
  },
  "w647": {
      "Arabic": {
          "hint1": "مريض مسن أصيب بإسهال مائي غزير بعد دورة علاج بمضاد حيوي واسع الطيف، فما السبب الأرجح؟",
          "hint2": "الحالة تترافق مع تشنجات بطنية وحمى وارتفاع كريات الدم البيضاء، وقد تحدث مضاعفات كتضخم القولون السام.",
          "hint3": "بالمنظار القولوني تظهر لويحات صفراء ملتصقة على الغشاء المخاطي الملتهب، وهي العلامة المفصلية للتشخيص.",
          "pearl": "التشخيص النهائي: التهاب القولون بالمطثية العسيرة (Clostridioides difficile Colitis) - من أساسيات Gastroenterology."
      },
      "English": {
          "hint1": "An elderly patient develops profuse watery diarrhea after a course of broad-spectrum antibiotics. What is the most likely disease?",
          "hint2": "The illness includes abdominal cramping, fever, and leukocytosis, with risk of toxic megacolon.",
          "hint3": "Colonoscopy shows raised yellowish plaques adherent to the inflamed mucosa, the pivotal diagnostic feature.",
          "pearl": "Definitive diagnosis: Clostridioides difficile Colitis (التهاب القولون بالمطثية العسيرة) - Core Gastroenterology."
      }
  },
  "w648": {
      "Arabic": {
          "hint1": "ما الكائن الانتهازي الذي يسبب التهاب رئوي حاد لدى مريض الإيدز مع تعداد CD4 منخفض جداً؟",
          "hint2": "حمى تحت حادة، سعال جاف، تسرع تنفس، ونقص تأكسج متفاقم مع خراخر ثنائية.",
          "hint3": "عتامات زجاجية أرضية حول النقير في التصوير المقطعي ووجود كيسات في صبغة فطرية.",
          "pearl": "التشخيص النهائي: ذات الرئة بالمتكيسة الرئوية الجيروفيسية (Pneumocystis Jirovecii Pneumonia) - من أساسيات Pulmonology."
      },
      "English": {
          "hint1": "Which opportunistic organism causes pneumonia in AIDS patients with very low CD4 counts?",
          "hint2": "Subacute fever, dry cough, tachypnea, and progressive hypoxemia with bilateral crackles.",
          "hint3": "Perihilar ground-glass opacities on CT and cysts seen on fungal stain.",
          "pearl": "Definitive diagnosis: Pneumocystis Jirovecii Pneumonia (ذات الرئة بالمتكيسة الرئوية الجيروفيسية) - Core Pulmonology."
      }
  },
  "w649": {
      "Arabic": {
          "hint1": "ابدأ بالتمييز بين الوذمة الرئوية القلبية وغير القلبية لدى مريض يعاني نقص تأكسج حاداً.",
          "hint2": "تسرع تنفس، زلة تنفسية شديدة، وخشخيشات ثنائية مع زرقة.",
          "hint3": "العلامة المميزة: PaO2/FiO2 أقل من أو يساوي 300 مع ارتشاح ثنائي واستبعاد قصور القلب الأيسر.",
          "pearl": "التشخيص النهائي: متلازمة الضائقة التنفسية الحادة (Acute Respiratory Distress Syndrome) - من أساسيات Pulmonology."
      },
      "English": {
          "hint1": "Start by distinguishing cardiogenic from non-cardiogenic pulmonary edema in a patient with acute hypoxemia.",
          "hint2": "Tachypnea, severe dyspnea, bilateral crackles, and cyanosis.",
          "hint3": "Definitive hallmark: PaO2/FiO2 ≤ 300 with bilateral opacities and no left atrial hypertension.",
          "pearl": "Definitive diagnosis: Acute Respiratory Distress Syndrome (متلازمة الضائقة التنفسية الحادة) - Core Pulmonology."
      }
  },
  "w650": {
      "Arabic": {
          "hint1": "مريض يعاني ضيق تنفس تدريجي وألم جنبي مع تاريخ تعرض مهني لغبار عازل حراري قديم.",
          "hint2": "انخفاض أصوات التنفس، باهتية القرع، وانخفاض التوسع الصدري على الجانب المصاب.",
          "hint3": "تصوير الصور المقطعي يُظهر سماكة جنبية عقدية ولويحات متكلسة مع انصباب جنبي نضحي.",
          "pearl": "التشخيص النهائي: ورم الظهارة المتوسطة (Mesothelioma) - من أساسيات Pulmonology."
      },
      "English": {
          "hint1": "Progressive dyspnea and pleuritic chest pain in a patient with remote occupational exposure to heat-resistant fibrous insulation.",
          "hint2": "Decreased breath sounds, dullness to percussion, and reduced chest expansion over the affected hemithorax.",
          "hint3": "CT shows nodular pleural thickening, pleural plaques, and an exudative effusion.",
          "pearl": "Definitive diagnosis: Mesothelioma (ورم الظهارة المتوسطة) - Core Pulmonology."
      }
  },
  "w651": {
      "Arabic": {
          "hint1": "لماذا يشكو مريض سكر من النوع الثاني من العطش الشديد وقلة البول ثم تشوش ذهني خلال أيام دون رائحة فواكه؟",
          "hint2": "الفحص يظهر جفافًا واضحًا، انخفاض ضغط الدم، تسرع القلب، ودرجة وعي متقلبة من التعب إلى الغيبوبة.",
          "hint3": "المختبر يكشف سكر دم أعلى من 600 ملغ/دل وأسمولية بلازما أعلى من 320 دون حماض كيتوني مهم.",
          "pearl": "التشخيص النهائي: متلازمة فرط سكر الدم وفرط الأسمولية (Hyperosmolar Hyperglycemic State) - من أساسيات Endocrinology."
      },
      "English": {
          "hint1": "Why would a type 2 diabetic patient develop intense thirst, worsening dehydration, and lethargy over days without a fruity breath odor?",
          "hint2": "Examination reveals poor skin turgor, dry mucosa, hypotension, tachycardia, and fluctuating mental status ranging from drowsiness to coma.",
          "hint3": "Labs show glucose >600 mg/dL, osmolality >320 mOsm/kg, and no significant ketones or metabolic acidosis.",
          "pearl": "Definitive diagnosis: Hyperosmolar Hyperglycemic State (متلازمة فرط سكر الدم وفرط الأسمولية) - Core Endocrinology."
      }
  },
  "w652": {
      "Arabic": {
          "hint1": "ما الحالة الطارئة التي تظهر بسبب تعرض مريض الدرقية لعدوى أو عملية جراحية؟",
          "hint2": "أعراضها حمى شديدة وتعرق وتسارع القلب واضطراب الوعي.",
          "hint3": "العلامة المميزة هي فرط الاستقلاب الحاد مع حمى وخلل عصبي مركزي.",
          "pearl": "التشخيص النهائي: العاصفة الدرقية (Thyroid Storm) - من أساسيات Endocrinology."
      },
      "English": {
          "hint1": "What endocrine emergency occurs in a thyroid patient after infection or surgery?",
          "hint2": "It presents with high fever, sweating, tachycardia, and altered mental status.",
          "hint3": "The hallmark is acute hypermetabolism with fever and CNS dysfunction.",
          "pearl": "Definitive diagnosis: Thyroid Storm (العاصفة الدرقية) - Core Endocrinology."
      }
  },
  "w653": {
      "Arabic": {
          "hint1": "أي متلازمة وراثية تسبب أوراماً متعددة في الغدد الصماء وتُكشف بطفرات جينية؟",
          "hint2": "فرط كالسيوم الدم، قرحات هضمية، ورم القواتم، وتضخم النخامية.",
          "hint3": "إصابة متزامنة لغدتين صماويتين على الأقل لدى فرد واحد تؤكد المتلازمة.",
          "pearl": "التشخيص النهائي: تعدد الأورام الصماوية الصمائية (Multiple Endocrine Neoplasia) - من أساسيات Endocrinology."
      },
      "English": {
          "hint1": "Which genetic syndrome presents with multiple endocrine tumors and is linked to defined germline mutations?",
          "hint2": "Think of a patient with hypercalcemia, recurrent ulcers, pheochromocytoma, and pituitary enlargement.",
          "hint3": "The hallmark is synchronous or metachronous neoplasms in at least two endocrine glands.",
          "pearl": "Definitive diagnosis: Multiple Endocrine Neoplasia (تعدد الأورام الصماوية الصمائية) - Core Endocrinology."
      }
  },
  "w654": {
      "Arabic": {
          "hint1": "كلوي حاد يظهر لدى طفل بعد التهاب حلق أو قوباء جلدية بأسبوع إلى ثلاثة أسابيع، فما التشخيص الأرجح؟",
          "hint2": "يشتكي المريض من بول دموي داكن، وذمة صباحية حول العينين، وارتفاع ضغط الدم مع قلة البول.",
          "hint3": "العلامة المميزة: انخفاض المتممة C3 مع ارتفاع ASO وظهور رواسب سنامية في الخزعة الكلوية.",
          "pearl": "التشخيص النهائي: التهاب كبيبات الكلى بعد العقديات (Post-Streptococcal Glomerulonephritis) - من أساسيات Nephrology."
      },
      "English": {
          "hint1": "A child develops acute nephritis 1-3 weeks after a sore throat or impetigo; what is the most likely diagnosis?",
          "hint2": "The patient has dark brown urine, morning periorbital edema, hypertension, and decreased urine output.",
          "hint3": "The hallmark is low serum C3 with elevated ASO titers and subepithelial hump deposits on kidney biopsy.",
          "pearl": "Definitive diagnosis: Post-Streptococcal Glomerulonephritis (التهاب كبيبات الكلى بعد العقديات) - Core Nephrology."
      }
  },
  "w655": {
      "Arabic": {
          "hint1": "مريض صغير بالسن يعاني ألماً صفنياً حاداً مفاجئاً دون حمى أو أعراض بولية؛ ما أول تشخيص يجب استبعاده؟",
          "hint2": "يوجد غثيان وإقياء، والخصية المصابة مرتفعة وأفقية، والمنعكس المشمري غائب.",
          "hint3": "الدوبلكس الملون يظهر انعدام التروية الدموية للخصية؛ أي تأخير قد يفقد العضو.",
          "pearl": "التشخيص النهائي: انفتال الخصية (Testicular Torsion) - من أساسيات Nephrology and Urology."
      },
      "English": {
          "hint1": "A young male has abrupt, severe scrotal pain with no fever or urinary symptoms—what must be ruled out first?",
          "hint2": "Nausea and vomiting are present; the affected testis is high-riding and horizontal, and the cremasteric reflex is absent.",
          "hint3": "Color Doppler shows no blood flow to the testis; any delay can cost the organ.",
          "pearl": "Definitive diagnosis: Testicular Torsion (انفتال الخصية) - Core Nephrology and Urology."
      }
  },
  "w656": {
      "Arabic": {
          "hint1": "طفل يعاني وذمة معممة ووزناً زائداً وبولاً رغوياً؛ ما السبب الكلوي الأرجح؟",
          "hint2": "لا دم في البول، ضغط الدم طبيعي، والزلال منخفض جداً مع بروتين بولي مرتفع.",
          "hint3": "الخزعة سليمة بالمجهر الضوئي، والتغير يظهر فقط بالمجهر الإلكتروني في الكبيبات.",
          "pearl": "التشخيص النهائي: مرض التغير الأدنى (Minimal Change Disease) - من أساسيات Nephrology."
      },
      "English": {
          "hint1": "A child with generalized edema, weight gain, and frothy urine; what renal cause tops the differential?",
          "hint2": "No hematuria, normal blood pressure, very low albumin, and heavy proteinuria.",
          "hint3": "Biopsy is unremarkable by light microscopy; the change is visible only on electron microscopy.",
          "pearl": "Definitive diagnosis: Minimal Change Disease (مرض التغير الأدنى) - Core Nephrology."
      }
  },
  "w657": {
      "Arabic": {
          "hint1": "مريض تناول كمية كبيرة من مسكن شائع قبل ساعات؛ ما أهم سؤال بعد تحديد كمية الجرعة وتوقيت آخر تناول؟",
          "hint2": "يبدأ بغثيان وإقياء وألم بطني علوي أيمن، ثم يتطور إلى يرقان ونزف واضطراب وعي خلال أيام.",
          "hint3": "نمط كبدي مخبري حاد جداً: ترانساميناسات تتجاوز 1000 وحدة/لتر بكثير مع بيليروبين طبيعي أو منخفض نسبياً في البداية.",
          "pearl": "التشخيص النهائي: تسمم الباراسيتامول (Acetaminophen Toxicity) - من أساسيات Clinical Toxicology."
      },
      "English": {
          "hint1": "A patient presents after ingesting a whole bottle of a common OTC analgesic: what two questions most urgently guide your risk assessment?",
          "hint2": "Early nausea and vomiting with right-upper-quadrant pain progress over days to jaundice, coagulopathy, and altered mentation.",
          "hint3": "Markedly elevated aminotransferases often several thousand IU/L with relatively preserved bilirubin early is the classic biochemical signature.",
          "pearl": "Definitive diagnosis: Acetaminophen Toxicity (تسمم الباراسيتامول) - Core Clinical Toxicology."
      }
  },
  "w658": {
      "Arabic": {
          "hint1": "ما المتلازمة التي تجمع بين تغير الحالة العقلية وفرط المنعكسات والرمع العضلي بعد التعرض لدواء يرفع السيروتونين؟",
          "hint2": "مراقبة العلامات الحيوية قد تظهر فرط حرارة وتسارع قلب، والفحص العصبي يظهر فرط منعكسات ورمع عضلي.",
          "hint3": "العلامة المميزة هي الرمع العضلي وفرط المنعكسات مع تغير الحالة العقلية وفرط الحرارة.",
          "pearl": "التشخيص النهائي: متلازمة السيروتونين (Serotonin Syndrome) - من أساسيات Clinical Toxicology."
      },
      "English": {
          "hint1": "What syndrome combines altered mental status, hyperreflexia, and myoclonus after exposure to a serotonin-boosting drug?",
          "hint2": "Vitals may show hyperthermia and tachycardia; neurologic exam reveals hyperreflexia and myoclonus.",
          "hint3": "The hallmark is myoclonus and hyperreflexia with altered mental status and hyperthermia.",
          "pearl": "Definitive diagnosis: Serotonin Syndrome (متلازمة السيروتونين) - Core Clinical Toxicology."
      }
  },
  "w659": {
      "Arabic": {
          "hint1": "ما هي المتلازمة الوراثية التي تظهر بعد التخدير العام مع ارتفاع حرارة وتصلب عضلي؟",
          "hint2": "أعراض سريرية: تسرع قلب، فرط ثاني أكسيد الكربون، تشنج عضلي، بول داكن.",
          "hint3": "العلامة المميزة: ارتفاع حرارة غير مستجيب للخافضات مع فرط استقلاب عضلي.",
          "pearl": "التشخيص النهائي: فرط الحرارة الخبيث (Malignant Hyperthermia) - من أساسيات Clinical Toxicology."
      },
      "English": {
          "hint1": "Which inherited syndrome occurs after general anesthesia with high fever and muscle rigidity?",
          "hint2": "Clinical features: tachycardia, hypercarbia, muscle spasm, and dark urine.",
          "hint3": "Hallmark: severe hyperthermia unresponsive to antipyretics with hypermetabolic state.",
          "pearl": "Definitive diagnosis: Malignant Hyperthermia (فرط الحرارة الخبيث) - Core Clinical Toxicology."
      }
  },
  "w660": {
      "Arabic": {
          "hint1": "ما الفحص التصويري الذي يجرى فورًا عند سرير مريض الرضض ليكشف النزيف الداخلي؟",
          "hint2": "يظهر تجمعًا سائلًا حرًا في البطن أو حول القلب أو الرئتين مع أعراض صدمة.",
          "hint3": "العلامة المميزة هي ظهور سائل حر في جيب Morrison أو حول الطحال أو التأمور.",
          "pearl": "التشخيص النهائي: السونار السريع لرضوض البطن (FAST Ultrasound) - من أساسيات Radiology."
      },
      "English": {
          "hint1": "What bedside imaging test is performed emergently on trauma patients to detect internal bleeding?",
          "hint2": "It shows free fluid in the abdomen, around the heart, or in the chest with shock features.",
          "hint3": "The hallmark is free fluid in Morison's pouch, perisplenic view, or pericardial view.",
          "pearl": "Definitive diagnosis: FAST Ultrasound (السونار السريع لرضوض البطن) - Core Radiology."
      }
  },
  "w661": {
      "Arabic": {
          "hint1": "تخيل علامة شعاعية تظهر عندما تملأ الهواء القصبات وسط نسيج رئوي كثيف ومعتم.",
          "hint2": "تظهر في التهابات الرئة المتجمعة والوذمة الرئوية أو النزف السنخي.",
          "hint3": "العلامة المميزة هي خطوط هوائية متفرعة داخل عتامة رئوية.",
          "pearl": "التشخيص النهائي: مخطط القصبات الهوائي الظليل (Air Bronchogram) - من أساسيات Radiology."
      },
      "English": {
          "hint1": "Imagine a radiographic sign where air fills bronchi within an opaque, consolidated lung.",
          "hint2": "It appears in lobar pneumonia, pulmonary edema, or alveolar hemorrhage.",
          "hint3": "The hallmark is branching air lucencies within a pulmonary opacity.",
          "pearl": "Definitive diagnosis: Air Bronchogram (مخطط القصبات الهوائي الظليل) - Core Radiology."
      }
  },
  "w662": {
      "Arabic": {
          "hint1": "فكر في حالة تضيق قصير دائري في القولون يسبب انسداداً تدريجياً لدى مريض كبير بالسن.",
          "hint2": "المريض يعاني من تغير في عادات التغوط، نزيف شرجي، ألم بطني مغص، وفقدان وزن.",
          "hint3": "العلامة الحاسمة: عيب حشو مركزي في حقنة الباريوم بحواف مرفوعة كالكتفين وقناة ضيقة جداً.",
          "pearl": "التشخيص النهائي: علامة لب التفاحة (Apple Core Sign) - من أساسيات Radiology."
      },
      "English": {
          "hint1": "Think of a short, annular constricting bowel lesion causing progressive obstruction in an older adult.",
          "hint2": "Look for altered bowel habits, rectal bleeding, colicky pain, and weight loss in the clinical picture.",
          "hint3": "The hallmark on barium study is a central filling defect with overhanging 'shouldered' edges and a narrow residual lumen.",
          "pearl": "Definitive diagnosis: Apple Core Sign (علامة لب التفاحة) - Core Radiology."
      }
  },
};

/**
 * دالة استخراج التلميحات التدريجية الثلاثة لأي مصطلح أو مرض
 */
export function getSoloProgressiveHints(
  word: MedicalWord,
  lang: 'Arabic' | 'English'
): SoloProgressiveHint {
  if (!word || !word.word) {
    return {
      hint1: lang === 'Arabic' ? 'حالة سريرية تتطلب تشخيصاً دقيقاً.' : 'Clinical condition requiring precise diagnosis.',
      hint2: lang === 'Arabic' ? 'ترتبط بالأعراض والمظاهر السريرية الشائعة.' : 'Associated with characteristic clinical presentations.',
      hint3: lang === 'Arabic' ? 'راجع التشخيصات التفريقية بعناية.' : 'Evaluate differential diagnosis carefully.'
    };
  }

  const custom = SOLO_DISEASE_HINTS[word.id];
  if (custom && custom[lang]) {
    return custom[lang];
  }

  // محرك الاستخلاص الذكي الاحتياطي لأي مصطلح إضافي
  const rawDict = HINTS_DICTIONARY[word.id];
  const cluesList = rawDict && rawDict[lang] ? rawDict[lang] : [];
  const nameEn = word.word?.English || 'Condition';
  const nameAr = word.word?.Arabic || 'حالة طبية';
  const subjects = (word.subjects || []).slice(0, 3).join(lang === 'Arabic' ? ' و ' : ' & ');

  if (lang === 'Arabic') {
    const cleanClues = cluesList.map(c => c.replace(/^\[.*?\]\s*/, ''));

    const hint1 = cleanClues.length > 2
      ? cleanClues[cleanClues.length - 1]
      : `حالة طبية سريرية ذات ارتباط وثيق بمقررات (${subjects})، وتتطلب فحصاً تفريقياً دقيقاً بين الحالات المشابهة.`;

    const hint2 = cleanClues.length > 1
      ? cleanClues[Math.floor(cleanClues.length / 2)]
      : `تشمل المظاهر السريرية الشائعة لهذه الحالة أعراضاً وعلامات ترتبط بصورة مباشرة بـ (${word.subjects[0] || 'الطب الباطني'}).`;

    const hint3 = cleanClues.length > 0
      ? cleanClues[0]
      : `المصطلح الطبي يبدأ بحرف (${nameAr.replace(/^ال/, '').charAt(0)}) ويتألف اسمه من (${nameAr.replace(/\s+/g, '').length}) أحرف.`;

    return {
      hint1,
      hint2,
      hint3,
      pearl: `التشخيص النهائي: ${nameAr} (${nameEn}).`
    };
  } else {
    const cleanClues = cluesList.map(c => c.replace(/^\[.*?\]\s*/, ''));

    const hint1 = cleanClues.length > 2
      ? cleanClues[cleanClues.length - 1]
      : `A critical clinical condition studied within ${subjects}, exhibiting notable differential diagnostic overlap.`;

    const hint2 = cleanClues.length > 1
      ? cleanClues[Math.floor(cleanClues.length / 2)]
      : `Clinical presentation features findings intrinsically associated with ${word.subjects[0] || 'Internal Medicine'}.`;

    const hint3 = cleanClues.length > 0
      ? cleanClues[0]
      : `The clinical term begins with "${nameEn.charAt(0)}" and comprises ${nameEn.replace(/\s+/g, '').length} letters.`;

    return {
      hint1,
      hint2,
      hint3,
      pearl: `Definitive diagnosis: ${nameEn} (${nameAr}).`
    };
  }
}

/**
 * توليد 5 خيارات سريرية ذكية (الهدف + 4 مموهات تشخيص تفريقي متوافقة)
 */
export function generateSoloOptions(
  targetWord: MedicalWord,
  allWords: MedicalWord[]
): MedicalWord[] {
  const others = allWords.filter(w => w.id !== targetWord.id);

  const scored = others.map(w => {
    let score = 0;
    if (w.type === targetWord.type) score += 20;
    else if (
      (w.type === 'Disease' || w.type === 'Syndrome') &&
      (targetWord.type === 'Disease' || targetWord.type === 'Syndrome')
    ) {
      score += 15;
    }

    const sharedSubjects = w.subjects.filter(s => targetWord.subjects.includes(s));
    score += sharedSubjects.length * 10;

    if (w.difficulty === targetWord.difficulty) score += 5;
    if (SOLO_DISEASE_HINTS[w.id]) score += 8;

    score += Math.random() * 8;
    return { word: w, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const topCandidates = scored.slice(0, Math.min(16, scored.length)).map(item => item.word);
  const shuffledCandidates = [...topCandidates].sort(() => Math.random() - 0.5);
  const selectedDistractors = shuffledCandidates.slice(0, 4);

  while (selectedDistractors.length < 4 && others.length > selectedDistractors.length) {
    const fallback = others[Math.floor(Math.random() * others.length)];
    if (!selectedDistractors.some(d => d.id === fallback.id)) {
      selectedDistractors.push(fallback);
    }
  }

  return [targetWord, ...selectedDistractors].sort(() => Math.random() - 0.5);
}
