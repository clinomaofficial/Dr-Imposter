import { WordExpansionEntry } from './types';

export const OBGYN_EXPANSION: WordExpansionEntry[] = [
  {
    word: {
      id: 'w616',
      word: { Arabic: 'انفصال المشيمة المبكر', English: 'Placental Abruption' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Emergency Medicine'],
      synonyms: ['انفصال المشيمة المبكر', 'انفكاك المشيمة', 'انفصال الخلاص الباكر', 'Placental Abruption', 'Abruptio Placentae'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "حالة ولادية طارئة خطيرة تنفصل فيها المشيمة جزئياً أو كلياً عن جدار الرحم قبل ولادة الجنين بعد الأسبوع العشرين من الحمل.",
        "تتظاهر كلاسيكياً بنزيف مهبلي داكن مصحوب بألم بطني حاد ومفاجئ، مع تشنج وتصلب مستمر بجدار الرحم يشبه الخشب (Woody uterus).",
        "يعد ارتفاع ضغط دم الأم وتسمم الحمل، والصدمات المباشرة للبطن، وتعاطي الكوكايين من أقوى عوامل خطورتها.",
        "قد يكون النزيف مخفياً خلف المشيمة (Concealed) بنسبة 20% دون خروج دم ظاهر، وتظهر علاماته فقط بتدهور نبض الجنين والصدمة.",
        "أخطر مضاعفاتها على الأم هو تخثر الدم المنتشر داخل الأوعية (DIC) الناجم عن تحرر الثرومبوبلاستين، ونزيف كوفلير الرحمي."
      ],
      English: [
        "A catastrophic obstetric emergency defined as premature separation of a normally implanted placenta from the uterine wall prior to delivery.",
        "Classically presents with dark painful vaginal bleeding, continuous unremitting abdominal or back agony, and a rigid, hypertonic 'woody' uterus.",
        "Maternal chronic or gestational hypertension, severe preeclampsia, blunt abdominal trauma, and cocaine abuse are sentinel risk factors.",
        "Can manifest as a concealed retroplacental hematoma in roughly 20% of cases with no external hemorrhage, recognized by fetal distress.",
        "High maternal morbidity stems from consumptive disseminated intravascular coagulation (DIC) driven by massive tissue factor release."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تمزق الشرايين الحلزونية في الساقط الرحمي مما يحدث ورم دموي خلف المشيمة يفصلها تدريجياً عن سرير الرحم.",
        goldStandard: "التشخيص سريري بالدرجة الأولى بالنزف المؤلم وتصلب الرحم؛ ويؤكد بعد الولادة بمعاينة المشيمة وإظهار الجلطة الرجعية الملتصقة.",
        firstLineRx: "الإنعاش الدوري بالسوائل ونقل الدم فوراً، مع إجراء عملية قيصرية إسعافية عاجلة إذا كان الجنين حياً أو الأم غير مستقرة.",
        keyDifferentiator: "ألم بطني حاد وتصلب خشبي بالرحم مع نزيف داكن يميزه بوضوح عن المشيمة المنزاحة (Placenta Previa) غير المؤلمة."
      },
      English: {
        etiology: "Rupture of maternal decidual spiral arterioles forming a retroplacental hematoma that shears the placenta off the decidua basalis.",
        goldStandard: "Primarily a clinical emergency diagnosis based on painful tetanic contractions; confirmed post-delivery by an adherent retroplacental clot.",
        firstLineRx: "Aggressive maternal hemodynamic resuscitation, large-bore IV access, cross-matched blood products, and emergent crash Cesarean section.",
        keyDifferentiator: "Painful, dark vaginal bleeding accompanied by severe uterine hypertonicity and tenderness, contrasting with painless placenta previa."
      }
    }
  },
  {
    word: {
      id: 'w617',
      word: { Arabic: 'متلازمة تكيس المبايض', English: 'Polycystic Ovary Syndrome' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Syndrome',
      subjects: ['Obstetrics and Gynecology', 'Endocrinology'],
      synonyms: ['متلازمة تكيس المبايض', 'تكيسات المبيضين', 'متلازمة شتاين-ليفينثال', 'Polycystic Ovary Syndrome', 'PCOS'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أكثر الاضطرابات الهرمونية الصماوية انتشاراً لدى النساء في سن الإنجاب، وتعد السبب الرئيسي لعقم انعدام الإباضة.",
        "تعتمد في تشخيصها الدولي على معايير روتردام (Rotterdam): تباعد الطمث، فرط الأندروجينات السريري أو المخبري، ومظهر المبيض بالسونار.",
        "تتظاهر سريرياً بالشعرانية الزائدة (Hirsutism) في الوجه والذقن، حب الشباب المستعصي، تساقط شعر الرأس الذكوري، وزيادة الوزن.",
        "ترتبط جذورها المرضية بمقاومة شديدة للإنسولين وفرط إفرازه، مما يحفز خلايا القراب في المبيض على إنتاج كميات مفرطة من التيستوستيرون.",
        "يظهر فحص السونار المهبلي مبيضين متضخمين محاطين بأكثر من 12 إلى 20 جريب صغير تشبه قلادة اللؤلؤ (String of pearls)."
      ],
      English: [
        "The most prevalent reproductive endocrine pathology afflicting premenopausal women, standing as the leading cause of anovulatory infertility.",
        "Diagnosed globally using the Rotterdam consensus criteria: oligo-/anovulation, clinical or biochemical hyperandrogenism, and polycystic ovaries.",
        "Clinically marked by terminal male-pattern hirsutism on the face and trunk, cystic recalcitrant acne, androgenic alopecia, and central obesity.",
        "Fundamentally driven by compensatory hyperinsulinemia secondary to peripheral insulin resistance, driving theca cell androgen synthesis.",
        "Pelvic ultrasound typically demonstrates enlarged ovaries bearing multiple small subcapsular antral follicles arranged like a 'string of pearls'."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "مقاومة الإنسولين المحيطية مع اضطراب إفراز هرمون LH تحفز فرط تصنيع الأندروجينات المبيضية وتعطل نضج الجريبات وانطلاق البويضة.",
        goldStandard: "استيفاء اثنين من معايير روتردام الثلاثة (قلة الإباضة، علامات فرط الأندروجينات، ومظهر قلادة اللؤلؤ بالسونار).",
        firstLineRx: "تعديل نمط الحياة وإنقاص الوزن، وحبوب منع الحمل المركبة لتنظيم الدورة وعلاج الشعرانية، وعقار الميتفورمين، والليتروزول للإنجاب.",
        keyDifferentiator: "مظهر قلادة اللؤلؤ للجريبات الصغيرة المحيطية بالسونار المهبلي مع ارتفاع نسبة LH إلى FSH والشعرانية."
      },
      English: {
        etiology: "Peripheral insulin resistance driving compensatory hyperinsulinemia that synergizes with excess LH to stimulate ovarian androgen overproduction.",
        goldStandard: "Meeting at least two of the three Rotterdam criteria after excluding secondary endocrine disorders (Cushing, CAH, hyperprolactinemia).",
        firstLineRx: "Lifestyle modification and structured weight loss, combined oral contraceptives for cycle regulation, metformin, and letrozole for fertility.",
        keyDifferentiator: "Characteristic 'string-of-pearls' peripheral follicle necklace on transvaginal ultrasound coupled with elevated LH:FSH ratio and hirsutism."
      }
    }
  },
  {
    word: {
      id: 'w618',
      word: { Arabic: 'الورم العضلي الأملس الرحمي', English: 'Uterine Leiomyoma' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'General Surgery'],
      synonyms: ['الورم العضلي الأملس الرحمي', 'ألياف الرحم', 'تليف الرحم', 'الورم الليفي الرحمي', 'Uterine Fibroids', 'Fibroid', 'Leiomyoma'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الورم الحميد الأكثر شيوعاً على الإطلاق في الجهاز التناسلي الأنثوي، وينشأ من خلايا العضلات الملساء لجدار الرحم.",
        "ورم حساس جداً للإستروجين والبروجستيرون، لذا ينمو ويكبر أثناء سنوات الخصوبة والحمل، ويضمر وينكمش تلقائياً بعد سن اليأس.",
        "يصنف تشريحياً حسب موقعه إلى: تحت المخاطية (Submucosal)، وداخل الجدار العضلي (Intramural)، وتحت المصلية (Subserosal).",
        "العرض الأكثر شيوعاً هو غزارة الطمث ونزيف الدورة الشديد والمطول (Menorrhagia) مما يسبب فقر دم مزمن بنقص الحديد.",
        "تسبب الأورام الكبيرة أعراض ضغط كتلي على المثانة مسببة تكرار التبول، أو ضغطاً على المستقيم مسببة الإمساك."
      ],
      English: [
        "The single most ubiquitous benign neoplasm of the female reproductive tract, originating clonally from uterine smooth muscle myometrium.",
        "Exquisitely hormone-dependent, growing under estrogen and progesterone exposure during fertile years and regressing after menopause.",
        "Anatomically subclassified according to FIGO guidelines into submucosal, intramural, subserosal, or pedunculated topological variants.",
        "The leading presenting complaint is heavy, prolonged, cyclical menstrual bleeding (menorrhagia) predisposing to microcytic iron-deficiency anemia.",
        "Substantial bulk effect produces pelvic pressure, urinary frequency through anterior bladder compression, and chronic tenesmus."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تكاثر نسيلي حميد وحيد الخلية لعضلات الرحم الملساء يتغذى على هرموني الإستروجين والبروجستيرون مع ترسب ألياف كولاجينية.",
        goldStandard: "السونار الحوضي عبر البطن والمهبل (Pelvic Ultrasonography) مظهراً كتلاً دائرية مصمتة ناقصة الصدوية محددة بوضوح.",
        firstLineRx: "حمض الترانيكساميك أو اللولب الهرموني المفرز للبروجستيرون (Mirena) للنزيف؛ واستئصال الورم (Myomectomy) أو استئصال الرحم جراحياً.",
        keyDifferentiator: "كتلة رحمية صلبة حميدة ملساء متحدة المركز مرتبطة بنزيف طمثي غزير دوري وتتراجع تلقائياً بعد انقطاع الطمث."
      },
      English: {
        etiology: "Clonal benign expansion of myometrial smooth muscle myocytes driven by estrogen and progesterone receptor hyperactivity.",
        goldStandard: "Pelvic and transvaginal ultrasonography delineating well-circumscribed, hypoechoic concentric solid intramural masses.",
        firstLineRx: "Tranexamic acid, levonorgestrel-releasing intrauterine devices (LNG-IUD), or surgical myomectomy/hysterectomy for intractable bulk symptoms.",
        keyDifferentiator: "Concentric, well-circumscribed benign firm pelvic mass tied directly to cyclical menorrhagia that predictably shrinks after menopause."
      }
    }
  },
  {
    word: {
      id: 'w619',
      word: { Arabic: 'سرطان عنق الرحم', English: 'Cervical Cancer' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Oncology', 'Infectious Diseases'],
      synonyms: ['سرطان عنق الرحم', 'خباثة عنق الرحم', 'كارسينوما عنق الرحم', 'Cervical Cancer', 'Cervical Carcinoma'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "ورم خبيث يصيب مدخل الرحم، وتعود أكثر من 99% من حالاته سببياً إلى عدوى مزمنة بالأنماط عالية الخطورة من فيروس الورم الحليمي البشري (HPV).",
        "النوعان الفيروسيان 16 و 18 مسؤولان وحدهما عن نحو 70% من جميع حالات الإصابة حول العالم.",
        "تنتج بروتيناته الفيروسية (E6 و E7) مواد تعطل الجينات الكابتة للأورام الأساسية (p53 و Rb) مما يحفز التسرطن.",
        "العرض الأكثر دلالة عليه هو النزيف المهبلي بعد الجماع (Post-coital bleeding) أو النزيف غير المنتظم بين الدورات.",
        "يمكن الوقاية منه بفعالية تامة عبر اللقاح المضاد للفيروس قبل الزواج وإجراء مسحة عنق الرحم الدورية للكشف المبكر."
      ],
      English: [
        "A gynecologic malignancy affecting the lower uterine segment, virtually 100% etiologically linked to persistent high-risk Human Papillomavirus (HPV).",
        "Oncogenic viral genotypes 16 and 18 alone account for approximately 70% of invasive cervical carcinoma burdens globally.",
        "Viral oncoproteins E6 and E7 drive malignant transformation by accelerating the targeted degradation of p53 and RB tumor suppressors.",
        "The quintessential presenting symptom is post-coital vaginal contact bleeding or abnormal, malodorous intermenstrual staining.",
        "Extremely preventable via routine prophylactic adolescent HPV vaccination programs paired with periodic cervical screening."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى مستمرة بالأنماط المسرطنة من فيروس HPV (خاصة 16 و 18) التي تعطل بروتينات p53 و Rb في منطقة التحول بعنق الرحم.",
        goldStandard: "فحص مسحة عنق الرحم (Pap smear) متبوعاً بتنظير المهبل المكبر (Colposcopy) وأخذ خزعة نسيجية موجهة بحمض الخليك.",
        firstLineRx: "الاستئصال المخروطي (Conization) للمراحل الباكرة، والاستئصال الجذري للرحم (Radical Hysterectomy) أو العلاج الإشعاعي الكيميائي.",
        keyDifferentiator: "نزيف مهبلي مميز يحدث عقب الجماع مباشرة مع قرحة أو كتلة خبيثة مرئية على عنق الرحم وإيجابية فيروس HPV."
      },
      English: {
        etiology: "Persistent infection by oncogenic high-risk human papillomaviruses (HPV 16, 18) expressing E6 and E7 oncoproteins that disable p53 and pRb.",
        goldStandard: "Colposcopy with directed punch biopsy of acetic-acid acetowhite lesions within the cervical transformation zone, following abnormal cytology.",
        firstLineRx: "Cone biopsy (LEEP) for microinvasive disease; radical hysterectomy with lymphadenectomy or definitive chemoradiation for invasive stages.",
        keyDifferentiator: "Pathognomonic post-coital vaginal bleeding combined with a friable exophytic cervical mass and high-risk HPV oncogenicity."
      }
    }
  },
  {
    word: {
      id: 'w620',
      word: { Arabic: 'مسحة عنق الرحم', English: 'Pap Smear' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Technique',
      subjects: ['Obstetrics and Gynecology', 'Oncology', 'Pathology'],
      synonyms: ['مسحة عنق الرحم', 'لطاخة بابانيكولاو', 'فحص باب سمير', 'مسحة باب', 'Pap Smear', 'Papanicolaou Test'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "فحص مسحي خلوي دوري للنساء ابتكره العالم جورجيوس بابانيكولاو للكشف عن التغيرات قبل السرطانية في عنق الرحم.",
        "يستخدم فيه منظار مهبلي (Speculum) وفرشاة دقيقة لكشط خلايا طلائية متساقطة من منطقة التحول (Transformation zone).",
        "توضع الخلايا على شريحة زجاجية أو في سائل مثبت خاص ليتم فحصها مجهرياً بحثاً عن خلل التنسج (Dysplasia).",
        "أدى تطبيقها الروتيني الشامل إلى خفض معدلات الوفاة من سرطان عنق الرحم بنسبة تفوق 70% في الدول المتقدمة.",
        "تدمج حالياً مع اختبار الكشف عن الحمض النووي للأنماط المسرطنة من فيروس الورم الحليمي البشري (HPV Co-testing)."
      ],
      English: [
        "A routine gynecological cytological screening procedure engineered by George Papanicolaou to detect preinvasive cervical dysplasia.",
        "Conducted during speculum examination utilizing an Ayre spatula and endocervical cytobrush to sample the transformation zone.",
        "Exfoliated cells are transferred to liquid-based fixative vials for high-resolution Papanicolaou staining and microscopic screening.",
        "Widespread implementation of this screening test has reduced invasive cervical cancer incidence and mortality by over 70%.",
        "Routinely coupled in modern clinical guidelines with molecular co-testing for high-risk oncogenic human papillomavirus (HPV) DNA."
      ]
    }
  },
  {
    word: {
      id: 'w621',
      word: { Arabic: 'سكري الحمل', English: 'Gestational Diabetes' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Endocrinology', 'Internal Medicine'],
      synonyms: ['سكري الحمل', 'مرض السكر أثناء الحمل', 'داء السكري الحملي', 'Gestational Diabetes Mellitus', 'GDM'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "أي درجة من عدم تحمل الجلوكوز وارتفاع سكر الدم يتم تشخيصها لأول مرة أثناء الثلث الثاني أو الثالث من فترة الحمل.",
        "ينتج عن إفراز المشيمة لهرمونات مضادة للإنسولين تعزز نمو الجنين، وأهمها هرمون لاكتوجين المشيمة البشري (hPL).",
        "يتم مسحه روتينياً لجميع الحوامل بين الأسبوعين 24 و 28 من الحمل عبر اختبار تحمل الجلوكوز الفموي (OGTT).",
        "يؤدي سكر الأم المرتفع إلى فرط إفراز إنسولين الجنين مما يسبب كبر حجم الجنين وضخامته (Macrosomia) وصعوبة الولادة.",
        "يبدأ علاجه بالحمية والرياضة، وفي حال عدم الانضباط يعد الإنسولين البشري هو الخيار الدوائي الآمن الأول المفضل."
      ],
      English: [
        "Any degree of carbohydrate intolerance with hyperglycemia manifesting with initial onset or first recognition during pregnancy.",
        "Pathophysiologically initiated by placental secretion of diabetogenic contrainsular hormones, principally human placental lactogen (hPL).",
        "Screened universally among all pregnant gravidas between the 24th and 28th weeks of gestation via oral glucose tolerance testing (OGTT).",
        "Maternal hyperglycemia drives fetal hyperinsulinemia, prompting accelerated fetal adiposity, macrosomia, and birth trauma risks.",
        "First-line management centers upon Medical Nutrition Therapy and physical activity; subcutaneous insulin is the gold-standard pharmacotherapy."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "إفراز المشيمة لهرمونات معادية للإنسولين (مثل hPL والبروجستيرون والكورتيزول) تتجاوز قدرة بنكرياس الأم على التعويض.",
        goldStandard: "اختبار تحمل الجلوكوز الفموي (OGTT بجرعة 75 جم سكر) مع قياس مستويات السكر على الريق وبعد ساعة وساعتين.",
        firstLineRx: "النظام الغذائي المضبوط مع مراقبة سكر الدم منزلياً؛ والبدء بحقن الإنسولين في حال تجاوز أرقام السكر المستهدفة.",
        keyDifferentiator: "ارتفاع سكر الدم الذي يظهر تحديداً في النصف الثاني من الحمل ويزول تلقائياً بعد ولادة المشيمة، مع زيادة وزن الجنين."
      },
      English: {
        etiology: "Placental secretion of contrainsular anti-insulin hormones (hPL, cortisol, progesterone) overwhelming maternal beta-cell reserve.",
        goldStandard: "Diagnostic 75-gram 2-hour oral glucose tolerance test (OGTT) performed at 24-28 weeks meeting validated glycemic cutoff thresholds.",
        firstLineRx: "Structured medical nutrition therapy and moderate exercise; titrated human subcutaneous insulin when targets are unmet.",
        keyDifferentiator: "Onset of maternal hyperglycemia emerging exclusively in the late second/third trimester that resolves postpartum, linked to fetal macrosomia."
      }
    }
  },
  {
    word: {
      id: 'w622',
      word: { Arabic: 'تمزق الأغشية الباكر', English: 'Premature Rupture of Membranes' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology'],
      synonyms: ['تمزق الأغشية الباكر', 'نزول ماء الرأس المبكر', 'انفجار جيب المياه الباكر', 'PROM', 'PPROM'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "حدوث تمزق وتدفق للسائل السلوي المحيط بالجنين قبل بدء المخاض وانقباضات الولادة الفعلية.",
        "إذا حدث قبل إتمام الأسبوع 37 من الحمل يسمى التمزق المبكر جداً (PPROM) ويرتبط بمخاطر الولادة المبكرة والخداج.",
        "تشكو الحامل من تدفق مفاجئ أو تسريب مستمر لسائل مائي شفاف دافئ من المهبل.",
        "يثبت تشخيصه برؤية تجمع السائل بالمنظار المعقم المعاين، وتغير لون ورقة النيترازين (Nitrazine) للأزرق بسبب قلوية السائل.",
        "أخطر مضاعفاته هو صعود البكتيريا المهبلية وحدوث عدوى والتهاب داخل الكيس الأمنيوسي وحمى للأم تعرف بـ (Chorioamnionitis)."
      ],
      English: [
        "Spontaneous rupture of the amniotic sac and chorionic membranes occurring prior to the clinical onset of active labor contractions.",
        "Designated as preterm (PPROM) when occurring prior to 37 completed gestational weeks, serving as a primary driver of prematurity.",
        "Patients recount a classic history of an abrupt gush or continuous persistent warm watery trickling from the vaginal introitus.",
        "Confirmed via sterile speculum examination observing fluid pooling, positive nitrazine paper alkaline blue shift, and ferning patterns.",
        "The most dreaded acute maternal-fetal infectious sequela is ascending intraamniotic bacterial infection (chorioamnionitis)."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "ضعف ميكانيكي أو تنكس إنزيمي في كولاجين الأغشية الجنينية تسرعه العدوى المهبلية الصاعدة أو فرط تمدد الرحم.",
        goldStandard: "المعاينة بالمنظار المهبلي المعقم لإثبات تجمع السائل، وإيجابية اختبار ورقة النيترازين الزرقاء، ونمط التسرخس (Ferning).",
        firstLineRx: "المضادات الحيوية الوريدية واسعة الطيف (أمبيسيلين وإريثرومايسين)، وحقن الكورتيزون لنضج رئة الجنين إذا كان أقل من 34 أسبوعاً.",
        keyDifferentiator: "خروج وتجمع السائل السلوي المائي الشفاف القلوي من عنق الرحم قبل بدء أي طلق ولادي حقيقي."
      },
      English: {
        etiology: "Fetal membrane apoptotic weakening and collagenolytic matrix metalloproteinase activation triggered by ascending bacterial protease activity.",
        goldStandard: "Sterile speculum exam confirming amniotic fluid pooling in the posterior fornix, alkaline Nitrazine test, and microscopic arborizing ferning.",
        firstLineRx: "Latency broad-spectrum antibiotics (ampicillin and erythromycin) paired with maternal betamethasone for fetal lung maturity <34 weeks.",
        keyDifferentiator: "Clear alkaline watery pooling emanating from the cervical os prior to the establishment of true active labor contractions."
      }
    }
  },
  {
    word: {
      id: 'w623',
      word: { Arabic: 'عسر ولادة الكتف', English: 'Shoulder Dystocia' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Emergency Medicine', 'Pediatrics'],
      synonyms: ['عسر ولادة الكتف', 'انحشار كتف الجنين', 'عسرة الكتف التوليدية', 'Shoulder Dystocia'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "حالة طوارئ ولادية حادة لا يمكن التنبؤ بها، ينحشر فيها الكتف الأمامي للجنين خلف عظم عانة الأم بعد خروج الرأس.",
        "تتظاهر بالعلامة الشهيرة المسماة علامة السلحفاة (Turtle sign) حيث يتراجع رأس الجنين المولود ويلتصق بقوة بالعجان.",
        "يشكل كبر وزن الجنين وتضخمه (خاصة في أمهات السكري) والولادة بالشفاط أهم عوامل خطورتها.",
        "يمنع منعاً باتاً ممارسة الشد إلى الأسفل على رأس الجنين تجنباً لتمزق الضفيرة العضدية وحدوث شلل إرب (Erb palsy).",
        "تدار بمناورات إسعافية قياسية فورية كـ مناورة ماكروبرتس (ثني فخذي الأم بقوة للبطن) والضغط فوق العانة لتخليص الكتف."
      ],
      English: [
        "An unpredictable, dramatic obstetric emergency wherein the anterior fetal shoulder becomes impacted behind the maternal pubic symphysis.",
        "Characterized clinically by the cardinal 'turtle sign', where the delivered fetal head retracts tightly back against the maternal perineum.",
        "Strongly preconditioned by fetal macrosomia (>4000g), maternal gestational diabetes, post-dates pregnancy, and instrumental vacuum delivery.",
        "Downward traction on the fetal head is strictly contraindicated to prevent avulsion of the brachial plexus and resulting Erb's palsy.",
        "Resolved via standardized sequential obstetric emergency drills: McRoberts maneuver (hyperflexing maternal thighs) and suprapubic pressure."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدم تناسب حجمي عظمي يؤدي لانحشار القطر ثنائي الأخرم لكتف الجنين خلف ارتفاق عانة الأم بعد ولادة الرأس مباشرة.",
        goldStandard: "التشخيص السريري الفوري بفشل ولادة الكتفين بالدفع العادي وظهور علامة السلحفاة بانكماش الرأس على العجان.",
        firstLineRx: "مناورة ماكروبرتس (ثني فخذي الأم) مع الضغط فوق العانة، وتجنب الشد لأسفل، والانتقال لمناورات التدوير الداخلي (Wood screw).",
        keyDifferentiator: "علامة السلحفاة بتراجع رأس الجنين إلى العجان وانحشار الكتف خلف عظم العانة أثناء الولادة المهبلية."
      },
      English: {
        etiology: "Bony mechanical arrest of the wider biacromial diameter wedged behind the anterior maternal pubic symphysis following head delivery.",
        goldStandard: "Immediate clinical diagnosis upon delivery of the fetal head failing to restitute alongside the hallmark 'turtle sign' perineal retraction.",
        firstLineRx: "Immediate execution of the McRoberts maneuver coupled with directional suprapubic downward pressure (avoiding fundal pressure).",
        keyDifferentiator: "Retraction of the delivered fetal face tightly back into the vulvar ring (turtle sign) due to anterior shoulder bone impaction."
      }
    }
  },
  {
    word: {
      id: 'w624',
      word: { Arabic: 'المشيمة الملتصقة', English: 'Placenta Accreta' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'General Surgery'],
      synonyms: ['المشيمة الملتصقة', 'التصاق المشيمة غير الطبيعي', 'المشيمة الغازية', 'Placenta Accreta', 'Placenta Accreta Spectrum', 'PAS'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "حالة خطيرة تنغرس فيها الزغابات المشيمية مباشرة داخل الطبقة العضلية لجدار الرحم بسبب غياب الطبقة الساقطة الإسفنجية (Decidua).",
        "أهم عامل خطورة للإصابة بها هو وجود سوابق لعمليات قيصرية متعددة مع وجود مشيمة منزاحة تغطي ندبة الجرح القديم.",
        "تشمل درجاتها الأكثر عمقاً: المشيمة المنغرسة بعمق في العضل (Increta)، والمشيمة المخترقة لجدار الرحم والمثانة (Percreta).",
        "تفشل المشيمة في الانفصال التلقائي بعد ولادة الجنين، وتؤدي محاولات شدها أو نزعها يدوياً إلى نزيف صاعق مهدد للحياة.",
        "تتطلب ولادة قيصرية مخططة بدقة بفريق متعدد التخصصات وتجهيز وحدات دم مكثفة مع استئصال الرحم في نفس الوقت غالباً."
      ],
      English: [
        "A life-threatening obstetric condition where chorionic villi attach abnormally directly to the myometrium due to absent decidua basalis.",
        "The overriding risk factor is the combination of prior Cesarean deliveries and an overlying anterior placenta previa over the hysterotomy scar.",
        "Spectrum encompasses increta (invading deep into myometrium) and percreta (penetrating through the uterine serosa into the urinary bladder).",
        "The placenta fails to separate spontaneously following delivery; attempts at manual traction provoke torrential, catastrophic hemorrhage.",
        "Demands planned multidisciplinary Cesarean delivery with massive transfusion protocol on standby, culminating in planned Cesarean hysterectomy."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل في تعافي بطانة الرحم فوق ندبة قيصرية سابقة يؤدي لغياب طبقة نيتابوخ وانغراس المشيمة المباشر في عضلات الرحم.",
        goldStandard: "السونار الحوضي الملون المتقدم (Color Doppler) مظهراً بحيرات دموية مشيمية مضطربة واختفاء الخط ناقص الصدوية بين الرحم والمشيمة.",
        firstLineRx: "الولادة القيصرية المبرمجة مع ترك المشيمة مكانها وتجنب نزعها، وإجراء استئصال كامل للرحم (Cesarean Hysterectomy).",
        keyDifferentiator: "فشل تام لانفصال المشيمة بعد الولادة مع نزيف حاد صاعق عند محاولة فكها في مريضة لديها سوابق قيصرية."
      },
      English: {
        etiology: "Defective decidualization and absence of the Nitabuch fibrinoid layer over prior hysterotomy scars, allowing deep myometrial invasion.",
        goldStandard: "Antenatal color Doppler ultrasonography and pelvic MRI demonstrating abnormal placental lacunae and loss of the retroplacental clear zone.",
        firstLineRx: "Planned multidisciplinary Cesarean delivery with non-separation of the placenta and immediate peripartum Cesarean hysterectomy.",
        keyDifferentiator: "Inability to achieve third-stage placental detachment, resulting in torrential hemorrhage if manual avulsion is attempted."
      }
    }
  },
  {
    word: {
      id: 'w625',
      word: { Arabic: 'نزف ما بعد الوضع', English: 'Postpartum Hemorrhage' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Emergency Medicine'],
      synonyms: ['نزف ما بعد الوضع', 'نزيف ما بعد الولادة', 'النزف النفاسي الحاد', 'PPH', 'Postpartum Hemorrhage'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "السبب الرئيسي لوفيات الأمهات حول العالم بعد الولادة، ويعرف بفقدان دم يتجاوز 500 مل بعد الولادة الطبيعية أو 1000 مل بعد القيصرية.",
        "تختصر أسبابه الرئيسية في القاعدة التذكيرية الشهيرة (4Ts): ارتخاء الرحم (Tone)، بقايا المشيمة (Tissue)، الجروح (Trauma)، والتخثر (Thrombin).",
        "يعد ارتخاء وكسل عضلات الرحم (Uterine Atony) المسؤول عن أكثر من 70% إلى 80% من جميع الحالات.",
        "يظهر الفحص السريري رحماً رخواً طرياً يشبه الإسفنج (Boggy uterus) لا ينقبض ليغلق الأوعية الدموية المفتوحة.",
        "يبدأ تدبيره فوراً بالتدليك الخارجي لعضلة الرحم، وإعطاء مقبضات الرحم الوريدية وأولها هرمون الأوكسيتوسين (Oxytocin)."
      ],
      English: [
        "The leading cause of maternal mortality worldwide, defined as cumulative blood loss exceeding 500 mL following vaginal or 1000 mL post-Cesarean delivery.",
        "Etiological drivers are systematically categorized by the classic '4 Ts' mnemonic: Tone (atony), Tissue (retained products), Trauma, and Thrombin.",
        "Failure of effective myometrial contraction (uterine atony) accounts for greater than 70% to 80% of all severe clinical hemorrhages.",
        "Bimanual abdominal examination reveals an uncontracted, soft, flaccid, sponge-like uterus (classically described as a 'boggy' uterus).",
        "Immediate emergency protocol dictates continuous bimanual fundal massage and rapid infusion of uterotonic agents, headlined by oxytocin."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "فشل انقباض الألياف العضلية للرحم بعد انفصال المشيمة (ارتخاء الرحم Tone) أو احتباس أجزاء مشيمية أو تمزق المهبل وعنق الرحم.",
        goldStandard: "التقييم السريري الكمي للدم المفقود مع الفحص اليدوي المزدوج لتحديد سبب النزف (رحم رخو، بقايا، أو تمزق).",
        firstLineRx: "التدليك اليدوي للرحم، وإعطاء مقبضات الرحم (الأوكسيتوسين الوريدي، الميزوبروستول، وميثيل إرغومترين)، ووضع بالون باكري الضاغط.",
        keyDifferentiator: "فقدان دم مفاجئ غزير يتجاوز 500 مل مباشرة بعد الولادة مع جس رحم إسفنجي رخو غير منقبض في أسفل البطن."
      },
      English: {
        etiology: "Loss of myometrial living ligatures clamping spiral arterioles post-placental delivery (uterine atony), retained cotyledons, or genital lacerations.",
        goldStandard: "Quantitative gravimetric assessment of active cumulative blood loss coupled with immediate bimanual uterine and speculum exam.",
        firstLineRx: "Vigorous fundal massage, first-line IV oxytocin infusion, second-line uterotonics (carboprost/methylergonovine), and Bakri balloon tamponade.",
        keyDifferentiator: "Profuse post-delivery genital blood loss exceeding 500-1000 mL accompanied by a palpable soft, boggy, non-contracted uterus."
      }
    }
  },
  {
    word: {
      id: 'w626',
      word: { Arabic: 'الحمل العنقودي', English: 'Molar Pregnancy' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Pathology', 'Oncology'],
      synonyms: ['الحمل العنقودي', 'الرحى العدارية', 'الورم الأرومي الغاذي الحملي', 'Hydatidiform Mole', 'Molar Pregnancy'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "حمل شاذ غير طبيعي ينتج عن خلل في الإخصاب يؤدي إلى تكاثر ورمي حميد في خلايا الأرومة الغاذية للمشيمة.",
        "في النوع الكامل (Complete) تخصب بويضة فارغة بحيوان منوي يتضاعف، وتكون كل الكروموسومات من منشأ أبوي ويغيب الجنين تماماً.",
        "تتميز زغابات المشيمة بانتفاخ حويصلي كيسي غزير يشبه عناقيد العنب (Bunch of grapes).",
        "تشكو المريضة من نزيف مهبلي داكن يشبه عصير الخوخ، وحجم رحم أكبر بكثير من عمر الحمل المفترض، وقيء حملي شديد.",
        "يرتفع هرمون الحمل (beta-hCG) لمستويات فلكية تفوق 100 ألف، وتظهر صورة السونار نمط العاصفة الثلجية (Snowstorm pattern)."
      ],
      English: [
        "An aberrant gestational conceptus originating from abnormal fertilization, marked by hyperplastic proliferation of trophoblastic syncytia.",
        "In complete moles, an enucleated ovum is fertilized by haploid sperm that duplicates, resulting in purely paternal diandric diploidy with no embryo.",
        "Histopathology displays hydropic swelling and vesicular ballooning of placental villi classically resembling macroscopic bunches of grapes.",
        "Presents with dark prune-juice vaginal bleeding, uterine size inappropriately large for gestational age, and hyperemesis gravidarum.",
        "Serum quantitative beta-hCG surges to astronomical levels (>100,000 mIU/mL), and pelvic ultrasound displays a classic 'snowstorm' pattern."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل جيني صبغي في الإخصاب (تخصيب بويضة ميتة أو تخصيب مزدوج) يؤدي لتكاثر مفرط لأنسجة المشيمة الغاذية بدون جنين حي.",
        goldStandard: "السونار المهبلي مبيناً المظهر المميز للعاصفة الثلجية (Snowstorm pattern) مع ارتفاع هرمون beta-hCG لأكثر من 100,000.",
        firstLineRx: "الإفراغ والتوسيع بالشفط الجراحي الفوري (Suction Curettage) مع المتابعة الأسبوعية الصارمة لهرمون الحمل للتأكد من تصفيره.",
        keyDifferentiator: "مظهر العاصفة الثلجية بالسونار وخروج حويصلات كعناقيد العنب مع مستويات هائلة وغير طبيعية لهرمون الحمل."
      },
      English: {
        etiology: "Androgenetic chromosomal error during fertilization (paternal genome duplication in an empty egg) causing trophoblastic hyperplasia.",
        goldStandard: "Transvaginal pelvic ultrasound demonstrating the diffuse intrauterine 'snowstorm' or 'grape-like' vesicular texture with sky-high beta-hCG.",
        firstLineRx: "Immediate surgical evacuation via suction dilation and curettage, backed by mandatory serial weekly serum beta-hCG monitoring.",
        keyDifferentiator: "Ultrasonographic intrauterine snowstorm appearance paired with expulsion of grape-like vesicles and extreme beta-hCG elevation."
      }
    }
  },
  {
    word: {
      id: 'w627',
      word: { Arabic: 'العملية القيصرية', English: 'Cesarean Section' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Technique',
      subjects: ['Obstetrics and Gynecology', 'General Surgery', 'Anaesthesia'],
      synonyms: ['العملية القيصرية', 'الولادة القيصرية', 'شق البطن التوليدي', 'Cesarean Section', 'C-section'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "تدخل جراحي توليدي رئيسي يتم فيه توليد الجنين عبر إحداث شق جراحي في جدار البطن وجدار الرحم.",
        "أكثر الجراحات الكبرى إجراءً على مستوى العالم، وتجرى عادة تحت التخدير النخاعي الموضعي (Spinal anesthesia).",
        "أشهر شق رحمي مستخدم هو الشق المستعرض في القطعة السفلية للرحم (Pfannenstiel / Lower segment) لتقليل النزيف وخطر التمزق لاحقاً.",
        "تجرى كإجراء طارئ منقذ في حالات ضيق واختناق الجنين، انفصال المشيمة، تدلي الحبل السري، أو تعسر تقدم المخاض.",
        "تشمل استطباباتها المنتخبة المسبقة: المشيمة المنزاحة المركزية، المجيء المقعدي المستعصي، أو وجود سوابق لجراحات رحمية واسعة."
      ],
      English: [
        "A major operative obstetric intervention delivering one or more neonates via surgical incisions through the anterior abdominal wall and uterus.",
        "The most commonly executed inpatient surgical procedure globally, predominantly conducted under spinal regional anesthesia.",
        "The standard anatomical hysterotomy is the low transverse uterine incision, optimized to minimize intraoperative bleeding and rupture risk.",
        "Executed emergently for non-reassuring fetal heart status, umbilical cord prolapse, severe placental abruption, or arrest of dilation.",
        "Elective maternal indications include complete placenta previa, persistent transverse or breech presentations, and prior classical hysterotomies."
      ]
    }
  },
  {
    word: {
      id: 'w628',
      word: { Arabic: 'تخطيط قلب الجنين والرحم', English: 'Cardiotocography' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Obstetrics and Gynecology', 'Pediatrics'],
      synonyms: ['تخطيط قلب الجنين والرحم', 'جهاز رسم نبض الجنين', 'مراقبة الجنين الإلكترونية', 'Cardiotocography', 'CTG', 'Electronic Fetal Monitoring'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "جهاز مراقبة إلكتروني توليدي يسجل في نفس الوقت وبشكل مستمر كلاً من معدل نبضات قلب الجنين وانقباضات عضلات الرحم.",
        "يستخدم مسبارين يثبتان على بطن الأم الحامل بحزامين: أحدهما مسبار دوبلر للنبض والآخر مقياس لضغط انقباضات الرحم (Tocodynamometer).",
        "المعدل الطبيعي لنبض الجنين على الشريط الورقي يتراوح بين 110 و 160 نبضة في الدقيقة مع وجود تغيرية طبيعية صحية (Variability).",
        "يقيم الأنماط الإنذارية كالتباطؤ المبكر (الضاغط للرأس)، والتباطؤ المتغير (انضغاط الحبل السري)، والتباطؤ المتأخر (قصور المشيمة).",
        "ظهور التباطؤ المتأخر المتكرر المتزامن مع انخفاض التغيرية يشير إلى حماض ونقص أكسجة جنيني ويستدعي التدخل العاجل."
      ],
      English: [
        "An electronic fetal assessment technology simultaneously and continuously tracing the baseline fetal heart rate alongside uterine contractions.",
        "Utilizes two elastic transducers secured across the gravid abdomen: an ultrasound Doppler crystal and a pressure-sensitive tocodynamometer.",
        "Normal baseline physiological fetal heart rate traces oscillate between 110 and 160 beats per minute with reassuring baseline variability.",
        "Diagnoses decelerations: early decelerations (fetal head compression), variable decelerations (cord compression), and late decelerations (placental insufficiency).",
        "Recurrent late decelerations accompanied by loss of variability warn of developing fetal hypoxemia and acidemia demanding rapid delivery."
      ]
    }
  },
  {
    word: {
      id: 'w629',
      word: { Arabic: 'بزل السائل السلوي الأمنيوسي', English: 'Amniocentesis' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Obstetrics and Gynecology', 'Genetics', 'Pediatrics'],
      synonyms: ['بزل السائل السلوي الأمنيوسي', 'سحب ماء الجنين', 'بزل السلى', 'Amniocentesis'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "إجراء تشخيصي باضع قبل الولادة يتم فيه إدخال إبرة رفيعة عبر جدار بطن الحامل لسحب عينة من السائل المحيط بالجنين.",
        "يجرى عادة بين الأسبوعين 15 و 20 من الحمل تحت مراقبة وتوجيه مستمر بالموجات فوق الصوتية لتجنب إصابة الجنين أو المشيمة.",
        "تستخدم الخلايا الجنينية المتساقطة في السائل لإجراء الفحص الجيني للكروموسومات والتأكد من متلازمة داون والتشوهات الصبغية.",
        "يمكن من خلاله قياس مستوى بروتين ألفا فيتو بالسائل لتأكيد عيوب الأنبوب العصبي المفتوحة كالقيلة السحائية النخاعية.",
        "يحمل خطورة ضئيلة للغاية لحدوث إجهاض تلقائي تقدر بنحو 0.1% إلى 0.3%، ويجب إعطاء حقنة Anti-D للأمهات سالبات العامل الريزوسي."
      ],
      English: [
        "An invasive prenatal diagnostic procedure wherein a fine-gauge needle is introduced transabdominally to aspirate amniotic fluid.",
        "Routinely scheduled between the 15th and 20th gestational weeks under continuous real-time sonographic guidance to safeguard the fetus.",
        "Desquamated fetal cells harvested from the fluid undergo cytogenetic karyotyping or chromosomal microarray to diagnose Trisomy 21.",
        "Measures amniotic alpha-fetoprotein and acetylcholinesterase concentrations to definitively verify open neural tube lesions.",
        "Carries an estimated procedural pregnancy loss risk under 0.3%; mandates prophylactic Anti-D immunoglobulin in Rh-negative mothers."
      ]
    }
  },
  {
    word: {
      id: 'w630',
      word: { Arabic: 'السائل السلوي الأمنيوسي', English: 'Amniotic Fluid' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Obstetrics and Gynecology', 'Pediatrics', 'Physiology'],
      synonyms: ['السائل السلوي الأمنيوسي', 'ماء الجنين', 'السائل الأمنيوسي', 'السلى', 'Amniotic Fluid'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "السائل الصافي الشفاف الذي يحيط بالجنين داخل الكيس الأمنيوسي طوال فترة تطوره في الرحم.",
        "ينتج في النصف الثاني من الحمل أساساً من بول الجنين وإفرازات الرئة، ويبتلعه الجنين ويعاد امتصاصه في دورة مستمرة.",
        "يوفر حماية ميكانيكية للجنين من الصدمات الخارجية، ويسمح بحريته الحركية، ويعد ضرورياً جداً لنمو وتوسع الرئتين الطبيعي.",
        "يقاس حجمه بالسونار عبر مؤشر السائل السلوي (AFI)؛ ونقصه الشديد (Oligohydramnios) يسبب متلازمة بوتر وتخلف نمو الرئتين.",
        "زيادته المفرطة (Polyhydramnios) ترتبط بتشوهات ابتلاع الجنين كرتتق المريء وسكري الحمل لدى الأم."
      ],
      English: [
        "The sterile, dynamic protective liquid volume enveloping the developing fetus within the membranous amniotic sac.",
        "In the second half of gestation, its volume is predominantly derived from fetal micturition, balanced by fetal swallowing dynamics.",
        "Furnishes vital hydraulic cushioning against external abdominal trauma, permits skeletal movement, and is critical for pulmonary alveolization.",
        "Quantified via the ultrasound Amniotic Fluid Index (AFI); marked deficit (oligohydramnios) provokes pulmonary hypoplasia and Potter sequence.",
        "Pathological excess (polyhydramnios) strongly correlates with fetal upper GI tract atresias (esophageal/duodenal) and maternal diabetes."
      ]
    }
  },
  {
    word: {
      id: 'w631',
      word: { Arabic: 'عنق الرحم', English: 'Cervix' },
      level: 'Academic',
      difficulty: 1,
      type: 'Organ',
      subjects: ['Obstetrics and Gynecology', 'Anatomy'],
      synonyms: ['عنق الرحم', 'فوهة الرحم', 'مدخل الرحم', 'Cervix', 'Cervix Uteri'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الجزء السفلي الأسطواني الضيق من الرحم الذي يبرز في الجزء العلوي من المهبل ويربط تجويف الرحم بالعالم الخارجي.",
        "يحتوي على قناة داخلية مبطنة بخلايا عمودية مفرزة للمخاط، بينما سطحه الخارجي مبطن بظهارة حرشفية مطبقة غير متقرنة.",
        "تعتبر منطقة التحول (Transformation zone) بين نوعي الخلايا البؤرة الأساسية التي ينشأ منها سرطان هذا العضو بفيروس HPV.",
        "يفرز مخاطاً متغيراً بتأثير الهرمونات: يصبح مائياً رائقاً ومطاطياً كالخيوط أثناء التبويض لتسهيل مرور النطاف.",
        "أثناء المخاض يخضع لعمليتي الإمحاء والترقق (Effacement) والتوسع حتى يصل قطره إلى 10 سم ليسمح بمرور رأس الجنين."
      ],
      English: [
        "The fibromuscular, cylindrical lower anatomical portal of the uterus projecting into the apex of the vaginal canal.",
        "Encloses an endocervical canal lined by mucin-secreting columnar cells, terminating externally at the ectocervix covered by stratified squamous epithelium.",
        "The squamocolumnar junction (transformation zone) represents the pivotal oncogenic niche susceptible to HPV-induced dysplastic transformation.",
        "Cervical mucus fluctuates cyclically: becoming thin, clear, and highly elastic (spinnbarkeit) under midcycle estrogen peaks to facilitate sperm entry.",
        "Undergoes progressive physiological softening, effacement, and dilatation to a terminal 10 cm aperture during active first-stage labor."
      ]
    }
  },
  {
    word: {
      id: 'w632',
      word: { Arabic: 'كيس المبيض', English: 'Ovarian Cyst' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology'],
      synonyms: ['كيس المبيض', 'تكيسات المبيض المفردة', 'الأكياس المبيضية', 'Ovarian Cyst'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "كيس ممتلئ بسائل يتشكل داخل مبيض المرأة أو على سطحه الخارجي، وأكثره أكياس وظيفية فسيولوجية حميدة.",
        "أشهر أنواعه الوظيفية هي كيس الجريب (Follicular cyst) عندما تفشل البويضة في الانفلاق، وكيس الجسم الأصفر بعد التبويض.",
        "تزول معظم الأكياس الوظيفية الصغيرة تلقائياً دون أي علاج دوائي خلال دورة إلى دورتين شهريتين.",
        "قد يتعرض لمضاعفات حادة طارئة تشمل التمزق مع نزيف داخلي، أو التواء المبيض الحاد (Ovarian Torsion) مسبباً نقص تروية وألماً مبرحاً.",
        "الكيس الديرمويدي (Dermoid / Teratoma) هو ورم كيسي حميد شهير يحتوي على أنسجة غريبة كالشعر والأسنان والدهون والغضاريف."
      ],
      English: [
        "A fluid-filled sac situated within the ovarian parenchyma or perched upon its cortical surface, the vast majority being benign functional cysts.",
        "The most frequent functional variants comprise simple follicular cysts from unruptured follicles and persistent corpus luteum cysts.",
        "Most physiological simple unilocular thin-walled cysts spontaneously regress within one to two menstrual cycles without medical intervention.",
        "Acute catastrophic complications include spontaneous intraperitoneal rupture with hemoperitoneum, or acute ovarian torsion causing ischemia.",
        "Mature cystic teratomas (dermoid cysts) represent benign germ-cell cysts famously packed with hair, sebum, calcified teeth, and thyroid tissue."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "فشل انفجار الجريب المبيضي أو استمرار الجسم الأصفر وتراكم السوائل بداخلهما، أو نشوء أورام كيسية حميدة كالورم الديرمويدي.",
        goldStandard: "السونار الحوضي المهبلي مع الدوبلر الملون لتقييم معالم الكيس (سماكة الجدار، وجود حواجز، أو مكونات صلبة، وتدفق الدم).",
        firstLineRx: "المراقبة والمتابعة بالسونار بعد 6-8 أسابيع للأكياس البسيطة؛ والتدخل الجراحي بالمنظار لاستئصال الكيس إذا كان كبيراً أو مشبوهاً.",
        keyDifferentiator: "كيسة مبيضية ممتلئة بسوائل تكتشف بالسونار غالباً ما تكون وحيدة الجانب وتزول تلقائياً بخلاف الأورام الصلبة الخبيثة."
      },
      English: {
        etiology: "Physiological failure of follicular rupture or persistent corpus luteum remodeling, or benign cystic neoplastic tissue differentiation.",
        goldStandard: "Transvaginal pelvic ultrasound with color Doppler interrogating internal architecture, wall thickness, septations, and papillary projections.",
        firstLineRx: "Expectant surveillance with repeat transvaginal ultrasound in 6-12 weeks for simple premenopausal cysts; laparoscopic cystectomy for persistent lesions.",
        keyDifferentiator: "Discrete, fluid-filled, thin-walled adnexal structure that frequently displays spontaneous cyclic involution without malignancy."
      }
    }
  },
  {
    word: {
      id: 'w633',
      word: { Arabic: 'شق العجان التوليدي', English: 'Episiotomy' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Technique',
      subjects: ['Obstetrics and Gynecology', 'General Surgery'],
      synonyms: ['شق العجان التوليدي', 'بضع الفرج', 'شق الولادة المهبلية', 'Episiotomy'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "شق جراحي مقصود يجريه الطبيب في جدار المهبل والعجان لتوسيع مخرج الولادة وتسهيل خروج رأس الجنين.",
        "النوع الأكثر أماناً واستخداماً دولياً هو الشق الجانبي الإنسي (Mediolateral) لحماية مصرة الشرج من التمزق.",
        "يمنع استخدامه كإجراء روتيني في التوصيات الحديثة، ويقتصر على حالات الضرورة كتعسر ولادة الكتف أو استخدام الجفت.",
        "يجرى تحت تأثير التخدير الموضعي في ذروة انقباضة الرحم عندما يكون جلد العجان مشدوداً على آخره فوق رأس الجنين.",
        "يخاط جراحياً بعد ولادة المشيمة بخيوط قابلة للامتصاص على طبقات تشمل الغشاء المخاطي وعضلات العجان والجلد."
      ],
      English: [
        "A surgical incision strategically placed across the posterior vaginal orifice and perineum to broaden the outlet during second-stage labor.",
        "The preferred technique worldwide is the mediolateral approach, engineered to prevent catastrophic propagation into the external anal sphincter.",
        "Routine liberal execution is discouraged by international guidelines, restricted to specific indications like operative forceps or shoulder dystocia.",
        "Infiltrated with local lidocaine and cut at the acme of a uterine contraction when the perineum is maximally thinned by crowning fetal head.",
        "Repaired systematically in anatomical layers following placental delivery utilizing absorbable polyglactin sutures."
      ]
    }
  },
  {
    word: {
      id: 'w634',
      word: { Arabic: 'ونى الرحم الارتخائي', English: 'Uterine Atony' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Emergency Medicine'],
      synonyms: ['ونى الرحم الارتخائي', 'ارتخاء الرحم', 'قصور انقباض الرحم بعد الولادة', 'Uterine Atony'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فشل عضلة الرحم في الانقباض والتقلص القوي بعد انفصال وولادة المشيمة، ويعد السبب رقم واحد لنزيف ما بعد الولادة (PPH).",
        "تعتمد الآلية الطبيعية لمنع النزيف على انقباض ألياف الرحم المتقاطعة لتضغط كأربطة حية شريانية تسد الشرايين الحلزونية.",
        "تزداد خطورة حدوثه عند فرط تمدد جدار الرحم (كالحمل بتوائم، الجنين الضخم، وزيادة السائل السلوي) أو طول مدة المخاض.",
        "عند فحص بطن المريضة باليد، يشعر الفاحص برحم طري ورخو وإسفنجي يفتقد تماماً للصلابة الكروية الطبيعية.",
        "يتطلب تدليكاً قوياً للرحم عبر البطن مع التسريب الفوري لمقبضات الرحم (الأوكسيتوسين وميثيل إرغومترين والميزوبروستول)."
      ],
      English: [
        "The inability of the myometrium to achieve sustained physiological contraction and tone following placental delivery.",
        "Represents the single most prevalent cause of severe postpartum hemorrhage, accounting for over 70% of acute obstetrical hemorrhages.",
        "Precipitated by uterine overdistension (multifetal gestation, fetal macrosomia, polyhydramnios), prolonged dysfunctional labor, or chorioamnionitis.",
        "Palpation through the anterior abdominal wall reveals a soft, flaccid, ill-defined 'boggy' uterus unable to clamp maternal spiral vessels.",
        "Managed by immediate vigorous fundal massage alongside synchronized intravenous uterotonic pharmacotherapy (oxytocin, ergots, prostaglandins)."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "إجهاد أو فرط تمدد خلايا العضلات الملساء للرحم مما يمنع انقباضها الفيزيولوجي الخانق للأوعية الدموية في سرير المشيمة.",
        goldStandard: "الفحص الإكلينيكي اليدوي للبطن والحوض مظهراً رحماً كبيراً رخواً غير متقلص مع نزيف مهبلي مستمر دون تمزقات مرئية.",
        firstLineRx: "التدليك اليدوي المزدوج للرحم، وإعطاء محلول الأوكسيتوسين الوريدي السريع، يليه الإرغومترين والميزوبروستول، وحقن حمض الترانيكساميك.",
        keyDifferentiator: "فقدان القوام العضلي الصلب للرحم بعد الولادة وتحوله لكتلة رخوة إسفنجية مترافقة مع نزيف حاد غزير."
      },
      English: {
        etiology: "Myometrial exhaustion or overstretching precluding the physiologic ligature-like mechanical constriction of opened spiral arteries.",
        goldStandard: "Clinical physical examination discovering an abnormally enlarged, soft, flaccid, non-contracted boggy uterus during active genital hemorrhage.",
        firstLineRx: "Continuous manual fundal massage, immediate high-dose intravenous oxytocin infusion, second-line uterotonics, and IV tranexamic acid.",
        keyDifferentiator: "Absence of the firm, globular fundal contraction naturally expected post-delivery, with palpation yielding a soft spongy uterine mass."
      }
    }
  },
  {
    word: {
      id: 'w635',
      word: { Arabic: 'انقلاب الرحم', English: 'Uterine Inversion' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Emergency Medicine'],
      synonyms: ['انقلاب الرحم', 'انقلاب الرحم التوليدي', 'انقلاب قاع الرحم', 'Uterine Inversion'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "حالة طوارئ توليدية نادرة وشديدة الخطورة ينقلب فيها قاع الرحم إلى الداخل كالجورب ويبرز في المهبل أو خارجه.",
        "تحدث غالباً نتيجة الشد المفرط العنيف على الحبل السري قبل انفصال المشيمة بالكامل مع الضغط بقوة على قاع الرحم.",
        "تتظاهر بكتلة لحمية حمراء كروية تبرز فجأة من فتحة المهبل مع غياب قاع الرحم الملموس كروياً في أسفل البطن.",
        "تسبب صدمة عصبية ونزفية صاعقة تفوق كمية الدم الظاهرة للخارج نتيجة الشد الشديد على البريتوان والأعصاب الحشوية.",
        "تتطلب إيقاف مقبضات الرحم فوراً وإعادة الرحم يدوياً لمكانه الطبيعي (مناورة جونسون Johnson maneuver) تحت تخدير عام قبل انغلاق عنقه."
      ],
      English: [
        "A rare, catastrophic obstetric emergency where the uterine fundus collapses inward into the endometrial cavity like an inverted sock.",
        "Iatrogenically precipitated by premature, excessive traction on the umbilical cord paired with fundal pressure before complete placental separation.",
        "Evident as a globular, beefy red, bleeding vascular mass protruding through the vulva, alongside a conspicuous abdominal fundal hollow.",
        "Induces severe, disproportionate neurogenic and hypovolemic shock driven by peritoneal stretching and parasympathetic visceral traction.",
        "Mandates immediate cessation of uterotonics and urgent manual uterine replacement (Johnson's maneuver) under general tocolytic anesthesia."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انقلاب بطانة وقاع الرحم إلى الداخل وبروزها عبر عنق الرحم والمهبل ناجم عن الجر الشديد للحبل السري على مشيمة ملتصقة بقاع رخو.",
        goldStandard: "المعاينة البصرية برؤية الكتلة الحمراء الحبيبية خارجة من المهبل وغياب جس قاع الرحم في مكانه الطبيعي بالبطن.",
        firstLineRx: "إيقاف الأوكسيتوسين وإعطاء مرخيات الرحم (نتروغليسرين أو تخدير عام) وإعادة الرحم يدوياً بقبضة اليد (مناورة جونسون) ثم إعطاء المقبضات.",
        keyDifferentiator: "بروز كتلة كروية حمراء داكنة من المهبل مع اختفاء قاع الرحم من البطن وحدوث صدمة عصبية ونزفية شديدة وفورية."
      },
      English: {
        etiology: "Invagination of the uterine fundus through the cervical canal provoked by excessive cord traction upon an unseparated fundal placenta.",
        goldStandard: "Direct inspection of a large, purplish-red globular mass projecting outside the introitus and a palpable indentation over the suprapubic abdomen.",
        firstLineRx: "Discontinue uterotonics, administer uterine relaxants (nitroglycerin/terbutaline), perform manual fundal repositioning (Johnson maneuver), then administer oxytocin.",
        keyDifferentiator: "Sudden appearance of an externalized beefy red uterine fundus at the introitus paired with absolute loss of normal abdominal fundal contour."
      }
    }
  },
  {
    word: {
      id: 'w636',
      word: { Arabic: 'قصور عنق الرحم', English: 'Incompetent Cervix' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology'],
      synonyms: ['قصور عنق الرحم', 'ارتخاء عنق الرحم', 'عجز عنق الرحم', 'قصور فوهة الرحم', 'Incompetent Cervix', 'Cervical Insufficiency'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "عجز وظيفي وتشريحي في أنسجة عنق الرحم يجعله يتسع ويترقق في الثلث الثاني من الحمل دون وجود مخاض أو ألم.",
        "السبب الكلاسيكي الأكثر شيوعاً لحدوث الإجهاض المتكرر في منتصف الحمل (الثلث الثاني) دون سابق إنذار.",
        "يرتبط بتاريخ جراحي سابق على عنق الرحم كاستئصال مخروطي (Conization) لعلاج خلل التنسج، أو ولادات سابقة متعسرة.",
        "يظهر بالسونار المهبلي ترقق شديد في طول عنق الرحم لأقل من 25 ملم مع تشكل قمعي لكيس الماء (Funneling).",
        "يعالج جراحياً بربط وتطويق عنق الرحم بخيط غير قابل للامتصاص (Cervical Cerclage) في بداية الثلث الثاني ويفك قبل موعد الولادة."
      ],
      English: [
        "Structural inability of the cervical stroma to retain an intrauterine pregnancy in the absence of clinical contractions or labor.",
        "The quintessential cause of recurrent, painless, second-trimester miscarriages occurring typically between 16 and 24 weeks of gestation.",
        "Frequently precipitated by prior mechanical cervical trauma, notably diagnostic cone biopsies, loop electrosurgical excisions, or cervical tears.",
        "Transvaginal ultrasonography demonstrates progressive cervical shortening below 25 mm alongside characteristic membrane 'funneling'.",
        "Treated surgically via cervical cerclage (McDonald or Shirodkar tape placement) deployed prophylactically at 12 to 14 weeks."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "ضعف هيكلي في كولاجين وألياف عنق الرحم يفشل في تحمل الضغط الميكانيكي لوزن الحمل المتزايد دون وجود انقباضات رحمية.",
        goldStandard: "السونار المهبلي المتكرر كاشفاً قصر طول عنق الرحم لأقل من 25 ملم مع مظهر القمع (Funneling) وخروج الأغشية.",
        firstLineRx: "تطويق عنق الرحم الجراحي (Cervical Cerclage) بخيط شيرودكار أو ماكدونالد عند الأسبوع 12-14 مع البروجستيرون المهبلي اليومي.",
        keyDifferentiator: "فقدان الحمل المتكرر في الثلث الثاني بتوسع غير مؤلم إطلاقاً لعنق الرحم ودون أي طلق ولادي."
      },
      English: {
        etiology: "Biomechanical collagen deficiency of cervical connective tissue failing to withstand progressive hydrostatic gravity load.",
        goldStandard: "Serial transvaginal sonography demonstrating progressive cervical length shortening below 25 mm with inner os funneling.",
        firstLineRx: "Prophylactic cervical cerclage placement (McDonald or Shirodkar suture technique) at 12-14 weeks paired with vaginal micronized progesterone.",
        keyDifferentiator: "Recurrent second-trimester pregnancy loss characterized by totally painless, silent cervical dilation in the absence of uterine contractions."
      }
    }
  },
  {
    word: {
      id: 'w637',
      word: { Arabic: 'حمى النفاس الإنتانية', English: 'Puerperal Sepsis' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Obstetrics and Gynecology', 'Infectious Diseases', 'Internal Medicine'],
      synonyms: ['حمى النفاس الإنتانية', 'حمى النفاس', 'إنتان ما بعد الولادة', 'التهاب بطانة الرحم النفاسي', 'Puerperal Sepsis', 'Postpartum Endometritis'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "عدوى بكتيرية حادة تصيب الجهاز التناسلي للمرأة خلال فترة النفاس (أول 6 أسابيع بعد الولادة) مسببة حمى وارتعاشاً.",
        "تاريخياً كانت القاتل الأول للأمهات في المستشفيات قبل أن يثبت الطبيب إجناتس سيملفيس أهمية غسيل أيدي الأطباء بالمطهر.",
        "أهم عامل خطورة على الإطلاق لحدوثها هو الولادة عبر عملية قيصرية، وطول مدة تمزق الأغشية الباكر، وكثرة الفحوصات المهبلية.",
        "تتظاهر بحمى تتجاوز 38.5 درجة مئوية، ألم ومضض شديد فوق الرحم، وإفرازات مهبلية كريهة الرائحة غزيرة (Lochia).",
        "تعد عدوى مختلطة متعددة الميكروبات (بكتيريا لا هوائية وهوائية)، وتعالج بالمضادات الحيوية الوريدية التوليفية كالكليندامايسين والجنتاميسين."
      ],
      English: [
        "A severe bacterial infection of the genital tract occurring at any time from rupture of membranes or labor up to the 42nd postpartum day.",
        "Historically claimed thousands of maternal lives in hospital wards before Ignaz Semmelweis championed hand hygiene with chlorinated lime.",
        "Cesarean delivery stands as the single most prominent predisposing risk factor, alongside prolonged rupture of membranes and multiple digital exams.",
        "Presents with fever exceeding 38.5°C, marked exquisite uterine tenderness on bimanual exam, and foul-smelling purulent lochial discharge.",
        "Characterized microbiologically as a polymicrobial mixed aerobic-anaerobic infection, managed with IV clindamycin plus gentamicin."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى بكتيرية مختلطة متعددة الميكروبات (هوائية ولا هوائية من المهبل والجلد) تصيب سرير المشيمة وجدار الرحم بعد الولادة.",
        goldStandard: "التشخيص الإكلينيكي المعتمد على حمى بعد الولادة مع ألم ومضض شديد في الرحم وإفرازات نفاسية كريهة الرائحة ومزرعة الدم.",
        firstLineRx: "المضادات الحيوية الوريدية التوليفية واسعة الطيف: كليندامايسين (900 ملغ) وجنتاميسين (1.5 ملغ/كغ) كل 8 ساعات حتى زوال الحمى لـ 48 ساعة.",
        keyDifferentiator: "حمى شديدة مع ألم بالرحم عند اللمس وإفرازات نفاسية كريهة الرائحة تظهر تحديداً في الأيام الأولى بعد الولادة القيصرية."
      },
      English: {
        etiology: "Polymicrobial ascending infection involving endogenous vaginal and enteric aerobes and anaerobes invading the exposed placental wound bed.",
        goldStandard: "Clinical triad of postpartum fever ≥38.5°C, pronounced uterine tenderness, and foul lochia, supported by leukocytosis and blood cultures.",
        firstLineRx: "Gold-standard dual IV antibiotic regimen: clindamycin (900 mg IV q8h) plus gentamicin (1.5 mg/kg IV q8h) continued until afebrile for 24-48 hours.",
        keyDifferentiator: "Postpartum pyrexia accompanied by exquisite uterine palpation tenderness and malodorous purulent lochia following Cesarean section."
      }
    }
  }
];
