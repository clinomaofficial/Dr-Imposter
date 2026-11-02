import { WordExpansionEntry } from './types';

export const IMMUNOLOGY_ONCOLOGY_EXPANSION: WordExpansionEntry[] = [
  // =================== IMMUNOLOGY (21 Terms) ===================
  {
    word: {
      id: 'w574',
      word: { Arabic: 'الخلية اللمفاوية التائية', English: 'T Lymphocyte' },
      level: 'Academic',
      difficulty: 1,
      type: 'Cell',
      subjects: ['Immunology', 'Histology', 'Physiology'],
      synonyms: ['الخلية اللمفاوية التائية', 'الخلية التائية', 'خلايا تي', 'T Cell', 'T Lymphocyte'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "كرية دم بيضاء مناعية تنشأ في نخاع العظم وتهاجر لتنضج وتكتسب كفاءتها في الغدة الزعترية (Thymus).",
        "تعد القائد الميداني للمناعة الخلوية (Cell-mediated immunity) ضد الفيروسات والطفيليات والخلايا السرطانية.",
        "تنقسم إلى خلايا مساعدة تحمل مستقبل (CD4) وخلايا سامة قاتلة تحمل مستقبل (CD8).",
        "تتعرف على المستضدات المعالجة فقط عندما تقدم إليها محمولة على جزيئات معقد التوافق النسيجي (MHC).",
        "يؤدي استهدافها وتدميرها بواسطة فيروس نقص المناعة المكتسب (HIV) إلى انهيار المناعة وحدوث الإيدز."
      ],
      English: [
        "A principal leukocyte lineage originating in the bone marrow that undergoes critical maturation and education inside the thymus.",
        "Serves as the central orchestrator of adaptive cell-mediated immunity against intracellular pathogens and neoplasms.",
        "Dichotomized into helper subpopulations expressing surface marker CD4 and cytotoxic killer effectors expressing CD8.",
        "Recognizes processed peptide epitopes strictly when presented in the binding cleft of major histocompatibility complex (MHC) molecules.",
        "Selective progressive depletion of its CD4+ helper subpopulation by retroviral HIV particles precipitates clinical AIDS."
      ]
    }
  },
  {
    word: {
      id: 'w575',
      word: { Arabic: 'الخلية اللمفاوية البائية', English: 'B Lymphocyte' },
      level: 'Academic',
      difficulty: 1,
      type: 'Cell',
      subjects: ['Immunology', 'Histology', 'Physiology'],
      synonyms: ['الخلية اللمفاوية البائية', 'الخلية البائية', 'خلايا بي', 'B Cell', 'B Lymphocyte'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "كرية دم بيضاء تنشأ وتنضج بالكامل داخل نخاع العظم البشري، وتمثل حجر الزاوية في المناعة الخلطية (Humoral immunity).",
        "تحمل على غشائها مستقبلات نوعية (BCR) تتكون أساساً من أجسام مضادة سطحية من طرازي IgM و IgD.",
        "تتميز بقدرتها على التعرف المباشر على المستضدات الأصلية السائبة دون الحاجة لعرضها مسبقاً على جزيئات MHC.",
        "عند تنشيطها بالخلايا المساعدة تتكاثر وتتمايز إلى خلايا بلازمية مفرزة للغلوبولينات وخلايا ذاكرة طويلة الأجل.",
        "غيابها الوراثي الخلقي يسبب داء بروتون حيث يعاني الرضيع من نوبات عدوى بكتيرية متكررة ذات محفظة."
      ],
      English: [
        "An adaptive immune lineage that undergoes both genesis and developmental maturation within the human bone marrow stroma.",
        "Constitutes the foundational effector of humoral adaptive immunity via the eventual biosynthesis of circulating immunoglobulins.",
        "Displays surface antigen-binding receptors (BCR) primarily configured from membrane-bound monomeric IgM and IgD.",
        "Capable of recognizing native conformational antigens in their free fluid state without mandatory MHC antigen processing.",
        "Upon antigenic stimulation and T-cell licensing, terminal differentiation yields antibody-factory plasma cells and memory pools."
      ]
    }
  },
  {
    word: {
      id: 'w576',
      word: { Arabic: 'الخلية القاتلة الطبيعية', English: 'Natural Killer Cell' },
      level: 'Academic',
      difficulty: 2,
      type: 'Cell',
      subjects: ['Immunology', 'Histology', 'Oncology'],
      synonyms: ['الخلية القاتلة الطبيعية', 'خلايا إن كي', 'الخلايا الفاتكة الطبيعية', 'NK Cell', 'Natural Killer'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "خلية لمفاوية حبيبية كبيرة تتبع جهاز المناعة الفطرية الطبيعي وتعمل كخط دفاع سريع دون حاجة لتحسس مسبق.",
        "تتخصص في رصد وتدمير الخلايا المصابة بالفيروسات والخلايا السرطانية التي تحاول الإفلات من الجهاز المناعي.",
        "تعتمد استراتيجيتها على فرضية الذات المفقودة (Missing-self) حيث تهاجم أي خلية خفضت تعبير جزيئات MHC-I.",
        "تحتوي حبيباتها السيتوبلازمية على البيرفورين (Perforin) لإحداث ثقوب، والجرانزايم (Granzyme) لتحفيز الموت المبرمج.",
        "تشارك بفعالية في آلية السمية الخلوية المعتمدة على الأجسام المضادة (ADCC) عبر ارتباطها بمستقبل CD16."
      ],
      English: [
        "A specialized large granular lymphocyte representing the innate cytotoxic arm, mounting immediate responses without clonal priming.",
        "Engineered evolutionary to eliminate virus-infected targets and incipient neoplastic cells attempting immune evasion.",
        "Executes target surveillance via the 'missing-self hypothesis', triggered when cells downregulate surface MHC Class I expression.",
        "Discharges cytotoxic granules containing perforin to puncture cell membranes and granzymes to initiate caspase-mediated apoptosis.",
        "Mediates antibody-dependent cellular cytotoxicity (ADCC) by binding the Fc constant domains of IgG through surface CD16 receptors."
      ]
    }
  },
  {
    word: {
      id: 'w577',
      word: { Arabic: 'البلعم الكبير', English: 'Macrophage' },
      level: 'Academic',
      difficulty: 1,
      type: 'Cell',
      subjects: ['Immunology', 'Histology', 'Pathology'],
      synonyms: ['البلعم الكبير', 'الخلايا البلعمية الكبيرة', 'الماكروفاج', 'البلعميات', 'Macrophage'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "خلية مناعية دفاعية كبرى تتمايز من الوحيدات (Monocytes) بعد هجرتها من مجرى الدم واستقرارها في الأنسجة المختلفة.",
        "تمتلك قدرة بلعمة استثنائية لابتلاع الحطام الخلوي، الميكروبات، وكريات الدم المسنة، وهضمها داخل الجسيمات الحالة.",
        "تسمى بأسماء خاصة في الأنسجة: خلايا كوبفر في الكبد، الخلايا الدبقية الصغيرة في الدماغ، وخلايا الغبار بالرئة.",
        "تعمل كخلية عارضة للمستضد (APC) احترافية حيث تقدم الشظايا المهضومة للخلايا التائية عبر جزيئات MHC-II.",
        "تفرز سيتوكينات التهابية أساسية كعامل نخر الورم وإنترلوكين-1، وتلتحم لتشكيل خلايا عملاقة في الالتهاب الحبيبي كالسل."
      ],
      English: [
        "A formidable mononuclear phagocyte derived from circulating blood monocytes that extravasate into resident connective tissues.",
        "Specialized in high-capacity phagocytosis, engulfing apoptotic cellular corpses, foreign particulates, and microbial pathogens.",
        "Adopts tissue-specific monikers: Kupffer cells in hepatic sinusoids, microglia in neural parenchyma, and alveolar dust cells in lungs.",
        "Functions as a professional antigen-presenting cell (APC), loading processed peptides onto MHC Class II complexes for CD4+ T cells.",
        "Fuses into multinucleated Langhans giant cells during chronic granulomatous reactions classically seen in Mycobacterium tuberculosis."
      ]
    }
  },
  {
    word: {
      id: 'w578',
      word: { Arabic: 'الخلية المتغصنة', English: 'Dendritic Cell' },
      level: 'Academic',
      difficulty: 2,
      type: 'Cell',
      subjects: ['Immunology', 'Histology'],
      synonyms: ['الخلية المتغصنة', 'الخلايا التغصنية', 'خلايا لانجرهانز', 'Dendritic Cell', 'DC'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "أقوى وأكفأ خلية عارضة للمستضدات (Professional APC) على الإطلاق في جسم الإنسان، وتربط بين المناعة الفطرية والمكتسبة.",
        "تتميز بامتدادات وتفرعات سيتوبلازمية شجرية تشبه تشعبات الخلايا العصبية ولكنها تتبع الجهاز المناعي.",
        "تنتشر في الأنسجة المعرضة للبيئة الخارجية كالجلد حيث تعرف باسم خلايا لانغرهانس (Langerhans cells).",
        "تلتقط المستضد وتهاجر عبر الأوعية اللمفاوية إلى أقرب عقدة لمفاوية لتقديمه وتنشيط الخلايا التائية البكر (Naive).",
        "تمتلك قدرة نادرة على التقديم المتصالب (Cross-presentation) لتنشيط الخلايا السامة CD8 ضد الفيروسات."
      ],
      English: [
        "The most potent professional antigen-presenting cell in biological systems, serving as the bridge between innate and adaptive immunity.",
        "Characterized morphologically by elaborate arborizing cytoplasmic projections reminiscent of neuronal dendrites.",
        "Stationed sentinel at external environmental interfaces, notably designated as Langerhans cells within the cutaneous epidermis.",
        "Captures antigens, undergoes maturation, and migrates through afferent lymphatics to regional nodes to prime naive helper T lymphocytes.",
        "Uniquely endowed with the mechanism of cross-presentation, feeding exogenous antigens into MHC Class I pathways to activate CD8+ T cells."
      ]
    }
  },
  {
    word: {
      id: 'w579',
      word: { Arabic: 'الغلوبولين المناعي G', English: 'Immunoglobulin G' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Immunology', 'Biochemistry', 'Pathology'],
      synonyms: ['الغلوبولين المناعي G', 'الأجسام المضادة IgG', 'غلوبيولين مناعي ج', 'IgG', 'Immunoglobulin G'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الجسم المضاد الأكثر وفرة في بلازما الدم حيث يشكل نحو 75% إلى 80% من إجمالي الأجسام المضادة السارية.",
        "الجسم المضاد الوحيد القادر على عبور المشيمة من الأم إلى الجنين ليمنحه مناعة سلبية تحميه في أشهره الأولى.",
        "يمثل المكون الرئيسي في الاستجابة المناعية الثانوية اللاحقة، مما يمنح الجسم حماية ومناعة طويلة الأمد بعد اللقاحات.",
        "يعمل بكفاءة عالية على طهاية البكتيريا (Opsonization) لتسهيل بلعمتها وتفعيل مسار الجهاز المتمم التقليدي.",
        "يتكون من وحدتين ثقيلتين وسلسلتين خفيفتين متصلتين بروابط ثنائية الكبريتيد على شكل حرف Y الكلاسيكي."
      ],
      English: [
        "The most abundant circulating immunoglobulin isotype in human plasma, accounting for approximately 75% to 80% of total serum antibodies.",
        "The solitary antibody isotype capable of crossing the placental syncytiotrophoblast barrier, bestowing passive neonatal humoral immunity.",
        "Dominates the secondary anamnestic immune response, driving high-affinity memory immunity elicited by successful vaccination regimens.",
        "Acts as a premier opsonin coating bacterial capsules to facilitate macrophage clearance and triggering the classical complement cascade.",
        "Possesses a monomeric Y-shaped structural architecture consisting of two identical heavy gamma chains and two identical light chains."
      ]
    }
  },
  {
    word: {
      id: 'w580',
      word: { Arabic: 'الغلوبولين المناعي E', English: 'Immunoglobulin E' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Biochemistry', 'Pediatrics'],
      synonyms: ['الغلوبولين المناعي E', 'الأجسام المضادة IgE', 'غلوبيولين مناعي هـ', 'IgE', 'Immunoglobulin E'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "الجسم المضاد الأقل تركيزاً في مصل الدم الطبيعي، لكنه يلعب الدور الرئيسي في تفاعلات الحساسية المفرطة الفورية (Type I).",
        "يرتبط بقوة بالغة عبر شقته الثابتة بمستقبلات خاصة (Fc-epsilon-RI) عالية الألفة على أسطح الخلايا البدينة والقاعدية.",
        "عندما يلتقي بمسببات التحسس يسبب ارتباطاً تشابكياً يطلق الهيستامين مسبباً الشرى، الربو، والصدمة التأقية.",
        "يلعب دوراً تطورياً رئيسياً في حماية الجسم من العدوى بالديدان الطفيلية عبر تجنيد وتنشيط الخلايا الحمضية (Eosinophils).",
        "يرتفع تركيزه بشكل ملحوظ في الدم لدى المصابين بالأكزيما التأتبية، حمى القش، ومتلازمة فرط هذا الجسم المضاد (Job syndrome)."
      ],
      English: [
        "The least concentrated immunoglobulin class in normal physiological serum, yet the pivotal mediator of Type I immediate hypersensitivity.",
        "Binds with extraordinarily high affinity via its Fc region to high-affinity receptors (FcεRI) anchored on mast cells and basophils.",
        "Cross-linking of surface-bound molecules by bivalent allergens triggers catastrophic degranulation of histamine and leukotrienes.",
        "Provides primary evolutionary host defense against metazoan helminthic worm parasites by orchestrating eosinophil-mediated cytotoxicity.",
        "Consistently elevated in atopic conditions (allergic rhinitis, extrinsic asthma) and rare hyper-IgE syndrome (Job syndrome)."
      ]
    }
  },
  {
    word: {
      id: 'w581',
      word: { Arabic: 'الغلوبولين المناعي A', English: 'Immunoglobulin A' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Biochemistry', 'Gastroenterology'],
      synonyms: ['الغلوبولين المناعي A', 'الأجسام المضادة IgA', 'غلوبيولين مناعي أ', 'IgA', 'Immunoglobulin A'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "الجسم المضاد الأساسي المسؤول عن مناعة الأغشية المخاطية في الجهاز الهضمي والتنفسي والتناسلي.",
        "يفرز بكثافة في سوائل الإفرازات الخارجية مثل اللعاب، الدموع، العرق، وحليب اللبأ (Colostrum) لتغذية الرضيع.",
        "يوجد في الإفرازات على شكل ثنائي الجزيء (Dimer) مرتبط بسلسلة J ومحمي بقطعة إفرازية تمنع هضمه بالإنزيمات.",
        "يمنع التصاق البكتيريا والفيروسات بالخلايا الطلائية للأمعاء دون أن يحدث تفاعلاً التهابياً مدمراً للأنسجة.",
        "نقصه الوراثي الانتقائي (Selective deficiency) يعد أشهر عوز مناعي أولي ويزيد عرضة المريض للحساسية والعدوى والإسهال."
      ],
      English: [
        "The primary antibody isotype providing mucosal surface barrier immunity across the gastrointestinal and respiratory tracts.",
        "Produced abundantly in external secretions including saliva, tears, colostrum breast milk, and tracheobronchial mucus.",
        "Exists within mucosal secretions as a dimeric complex joined by a joining (J) chain and stabilized by a protective secretory component.",
        "Neutralizes viral and bacterial surface adhesins, preventing pathogen mucosal adherence without inciting destructive inflammatory cascades.",
        "Selective inherited deficiency of this antibody class is the most common primary immunodeficiency, predisposing to mucosal infections."
      ]
    }
  },
  {
    word: {
      id: 'w582',
      word: { Arabic: 'الغلوبولين المناعي M', English: 'Immunoglobulin M' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Biochemistry', 'Infectious Diseases'],
      synonyms: ['الغلوبولين المناعي M', 'الأجسام المضادة IgM', 'غلوبيولين مناعي م', 'IgM', 'Immunoglobulin M'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "أول جسم مضاد يتم إنتاجه بواسطة الخلايا البائية أثناء الاستجابة المناعية الأولية عند التعرض لميكروب جديد.",
        "أكبر الأجسام المضادة حجماً في جسم الإنسان، حيث يتكون في البلازما من خمسة جزيئات متصلة معاً (Pentamer).",
        "يمتلك 10 مواقع للارتباط بالمستضد مما يجعله فائق الكفاءة في تراص البكتيريا وتفعيل شلال الجهاز المتمم.",
        "وجوده الإيجابي في دم المريض يدل على وجود عدوى حديثة حادة، بينما يدل وجود غيره على عدوى قديمة أو مناعة سابقة.",
        "لا يستطيع عبور المشيمة لكبر وزنه الجزيئي، لذا فإن اكتشافه في دم المولود يثبت حدوث عدوى خلقية داخل الرحم."
      ],
      English: [
        "The earliest immunoglobulin isotype synthesized by B cells in response to initial primary exposure to a novel foreign antigen.",
        "The largest antibody macromolecule in human circulation, circulating in serum as a massive star-shaped pentameric structure.",
        "Possesses 10 theoretical antigen-binding Fab domains, conferring unparalleled theoretical avidity for microbial agglutination.",
        "Presence in serological assays signifies active, primary, or acute infection, contrasting with the convalescent memory profile of others.",
        "Incapable of traversing the placental barrier due to its bulky pentameric size; its detection in neonates confirms congenital intrauterine infection."
      ]
    }
  },
  {
    word: {
      id: 'w583',
      word: { Arabic: 'الجهاز المتمم', English: 'Complement System' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Physiology', 'Pathology'],
      synonyms: ['الجهاز المتمم', 'نظام المتممة', 'بروتينات المتممة', 'Complement System', 'Complement Cascade'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "شلال إنزيمي معقد يتألف من أكثر من 30 بروتيناً سارياً في بلازما الدم يصنع معظمها في الكبد بصورة غير نشطة.",
        "ينشط عبر ثلاثة مسارات رئيسية: المسار التقليدي (بالأجسام المضادة)، والمسار البديل (تلقائي)، ومسار اللكتين.",
        "تلتقي جميع مساراته عند تنشيط بروتين C3 الذي ينشطر إلى C3a (مسبب للالتهاب) و C3b (طاهٍ ميسر للبلعمة).",
        "تتجمع مكوناته المتأخرة (C5b إلى C9) لتشكل معقد الهجوم الغشائي (MAC) الذي يثقب جدار الخلية الميكروبية ويفجرها.",
        "نقص مكوناته الأخيرة (C5-C9) يجعل المصاب عرضة بشكل خاص ومتكرر لعدوى بكتيريا النيسيرية السحائية المسببة لالتهاب السحايا."
      ],
      English: [
        "A sophisticated biochemical cascade comprising over 30 circulating serum proteins synthesized primarily by the liver as inactive zymogens.",
        "Triggered through three distinct activation limbs: the classical pathway (immune complexes), the lectin pathway, and the alternative pathway.",
        "All activating vectors converge on the central cleavage of factor C3 into an anaphylatoxin fragment (C3a) and an opsonin fragment (C3b).",
        "Terminal components (C5b through C9) assemble into the transmembrane ring-shaped membrane attack complex (MAC), lysing target bacteria.",
        "Inherited deficiencies of terminal components (C5 to C9) confer extreme selective susceptibility to recurrent Neisseria meningitidis bacteremia."
      ]
    }
  },
  {
    word: {
      id: 'w584',
      word: { Arabic: 'الهيستامين', English: 'Histamine' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Immunology', 'Pharmacology', 'Physiology'],
      synonyms: ['الهيستامين', 'وسيط الحساسية', 'Histamine'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أمين حيوي فعال ينتج من نزع مجموعة الكربوكسيل من الحمض الأميني هيستيدين، ويخزن داخل حبيبات الخلايا البدينة.",
        "الوسيط الالتهابي الأساسي المسؤول عن أعراض الحساسية الكلاسيكية: الحكة، سيلان الأنف، العطاس، وتدميع العينين.",
        "يرتبط بمستقبلات H1 في الأوعية الدموية فيحدث توسعاً وعائياً وزيادة نفاذية الشعيرات، وتضيقاً في القصبات الهوائية.",
        "يرتبط بمستقبلات H2 في الخلايا الجدارية للمعدة ليحفز إفراز حمض الهيدروكلوريك، وتعالجه أدوية كالفاموتيدين.",
        "تعاكس تأثيراته التحسسية فئة شهيرة من الأدوية تعرف بمضادات هذا الأمين مثل السيتريزين والديفينهيدرامين."
      ],
      English: [
        "A biogenic vasoactive amine synthesized via decarboxylation of the amino acid histidine, pre-stored within granules of tissue mast cells.",
        "The primary fast-acting inflammatory chemical messenger driving allergic rhinorrhea, intense pruritus, sneezing, and watery chemosis.",
        "Stimulation of its H1 receptor subtype provokes profound arteriolar vasodilation, microvascular hyperpermeability, and bronchoconstriction.",
        "Binds to parietal cell H2 receptors within the gastric mucosa to stimulate hydrochloric acid output, blocked by famotidine.",
        "Its physiological downstream effects are antagonized clinically by first- and second-generation competitive H1-receptor antagonists."
      ]
    }
  },
  {
    word: {
      id: 'w585',
      word: { Arabic: 'الإنترفيرون', English: 'Interferon' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Pharmacology', 'Infectious Diseases'],
      synonyms: ['الإنترفيرون', 'بروتينات الإنترفيرون', 'IFN', 'Interferon'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "عائلة من السيتوكينات السكرية الطبيعية تفرزها خلايا الجسم استجابة لهجوم الفيروسات لتتداخل مع تكاثرها وتمنع انتشارها.",
        "ينقسم إلى النوع الأول (ألفا وبيتا) المضاد للفيروسات، والنوع الثاني (جاما) الذي تفرزه الخلايا التائية لتنشيط البلاعم.",
        "يحفز الخلايا المجاورة غير المصابة على إنتاج إنزيمات تحلل الحمض النووي الريبي الفيروسي وتوقف تصنيع البروتينات.",
        "يستخدم كعلاج دوائي مركب في التهاب الكبد الفيروسي المزمن، وبعض الأورام، والنوع بيتا منه يستخدم لعلاج التصلب المتعدد.",
        "يسبب إفرازه أثناء العدوى الفيروسية الحادة الأعراض الشبيهة بالإنفلونزا كالحمى والقشعريرة وآلام العضلات والإجهاد."
      ],
      English: [
        "A multigene family of inducible signaling glycoproteins secreted by host cells in response to viral invasion to interfere with viral replication.",
        "Classified into Type I (alpha and beta) conferring cell-autonomous antiviral states, and Type II (gamma) secreted by T cells to prime macrophages.",
        "Binds to uninfected bystander cellular receptors, stimulating interferon-stimulated genes (ISGs) that degrade viral mRNA genomes.",
        "Manufactured pharmacologically as recombinant biologics deployed in chronic viral hepatitis, melanoma, and multiple sclerosis (IFN-beta).",
        "Endogenous systemic surge during acute viral syndromes accounts directly for classic constitutional symptoms including fever, rigors, and myalgias."
      ]
    }
  },
  {
    word: {
      id: 'w586',
      word: { Arabic: 'الصدمة التأقية', English: 'Anaphylaxis' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Immunology', 'Emergency Medicine', 'Pediatrics'],
      synonyms: ['الصدمة التأقية', 'التأق', 'الحساسية المفرطة القاتلة', 'فرط الحساسية الحاد', 'Anaphylaxis', 'Anaphylactic shock'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "حالة طوارئ طبية مهددة للحياة تتمثل في تفاعل تحسسي جهازي حاد وشامل وسريع الظهور خلال دقائق من التعرض للمحفز.",
        "ينتج عن تفاعل فرط حساسية سريع من النوع الأول (IgE-mediated) يؤدي لتفريغ هائل وفوري لمحتويات الخلايا البدينة في الدم.",
        "يتظاهر بانسداد المجرى الهوائي بوذمة الحنجرة، تضيق القصيبات والصرير، هبوط حاد في ضغط الدم، والشرى المعمم.",
        "أشهر محفزاته: لدغات النحل والدبابير، أدوية كالبنسلين، والمكسرات كالفول السوداني والمأكولات البحرية.",
        "العلاج المنقذ للحياة الإلزامي الأول هو الحقن العضلي الفوري لعقار الإبينفرين (Epinephrine) في الفخذ دون أدنى تأخير."
      ],
      English: [
        "A hyperacute, severe, potentially fatal multi-system hypersensitivity reaction erupting within seconds to minutes of allergen exposure.",
        "Mechanistically driven by explosive IgE-mediated degranulation of tissue mast cells and basophils releasing massive histamine showers.",
        "Presents with acute stridor from laryngeal edema, wheezing bronchospasm, profound vascular collapse/hypotension, and diffuse urticaria.",
        "Most frequently triggered by Hymenoptera stings, parenteral beta-lactam antibiotics, tree nuts, peanuts, and shellfish.",
        "The mandatory, life-saving first-line intervention is emergent intramuscular injection of epinephrine into the anterolateral thigh."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تفاعل فرط حساسية جهازي فوري من النوع الأول يسبب إطلاقاً صاعقاً للهيستامين وموسعات الأوعية في كافة أنحاء الجسم.",
        goldStandard: "التشخيص الإكلينيكي الفوري بناء على المعايير السريرية لتأثر جهازين أو أكثر أو حدوث هبوط مفاجئ في الضغط.",
        firstLineRx: "حقن الإبينفرين عضلياً في الوجه الوحشي للفخذ (جرعة 0.3-0.5 ملغ للبالغين)، مع الأكسجين وسوائل وريدية سريعة.",
        keyDifferentiator: "هبوط حاد في ضغط الدم وانسداد مجرى التنفس بوذمة الحنجرة بعد تعرض مباشر لمسبب تحسسي معروف."
      },
      English: {
        etiology: "Massive systemic IgE-dependent degranulation of basophils and mast cells provoking simultaneous distributive shock and bronchospasm.",
        goldStandard: "Immediate clinical diagnosis meeting consensus criteria (acute onset mucosal compromise, respiratory distress, and hypotension).",
        firstLineRx: "Intramuscular epinephrine (1:1000) 0.3-0.5 mg injected immediately into the anterolateral vastus lateralis muscle, IV fluid boluses, and oxygen.",
        keyDifferentiator: "Rapidly progressive hemodynamic collapse accompanied by stridor and acute airway compromise following allergen exposure."
      }
    }
  },
  {
    word: {
      id: 'w587',
      word: { Arabic: 'الذئبة الحمامية الجهازية', English: 'Systemic Lupus Erythematosus' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Immunology', 'Rheumatology', 'Internal Medicine', 'Nephrology'],
      synonyms: ['الذئبة الحمامية الجهازية', 'الذئبة الحمراء', 'مرض اللوبس', 'Systemic Lupus Erythematosus', 'SLE'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "مرض مناعي ذاتي جهازي التهابي مزمن معقد يتميز بإنتاج واسع لأجسام مضادة ذاتية ضد مكونات نواة الخلية.",
        "يصيب الإناث في سن الإنجاب بنسبة 9 إلى 1 مقارنة بالذكور، ويتبع نمطاً متقلباً من الهجمات والهدوء السريري.",
        "العلامة الجلدية الكلاسيكية له هي طفح جلدي أحمر فوق الخدين وجسر الأنف يسمى طفح الفراشة (Malar/Butterfly rash).",
        "يحدث ترسب معقدات مناعية (Type III) في الكبيبات الكلوية مسبباً التهاب الكلية الذئبي والبروتين بالبول.",
        "فحصه المسحي الأول هو الأجسام المضادة للنواة (ANA)، والفحص التأكيدي عالي النوعية هو الأجسام المضادة لـ (Anti-dsDNA و Anti-Smith)."
      ],
      English: [
        "A prototypical chronic systemic autoimmune disorder characterized by loss of self-tolerance and polyclonal antinuclear antibody synthesis.",
        "Strikingly predominates in women of childbearing age with a 9:1 female-to-male ratio, featuring an episodic relapsing-remitting course.",
        "The classic hallmark cutaneous manifestation is a photosensitive fixed erythema spanning the malar eminences and nasal bridge (butterfly rash).",
        "Type III immune complex deposition within glomerular basement membranes incites severe proliferative lupus nephritis.",
        "Screened initially via antinuclear antibodies (ANA), and confirmed through highly disease-specific markers: Anti-dsDNA and Anti-Smith."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل في التحمل المناعي يؤدي لتكوين أجسام مضادة ضد المكونات النووية وترسب معقدات مناعية وتلف بالأوعية والأعضاء.",
        goldStandard: "استيفاء معايير EULAR/ACR بإيجابية فحص ANA مع ارتفاع أضداد Anti-dsDNA وانخفاض المتمم (C3/C4).",
        firstLineRx: "الهيدروكسي كلوروكوين (Hydroxychloroquine) كعلاج أساسي لجميع المرضى، مع الكورتيكوستيرويدات ومثبطات المناعة في الإصابات الكلوية.",
        keyDifferentiator: "طفح الفراشة الجلدي بالوجه مع التهاب المفاصل وترسبات كلوية وإيجابية مضادات Anti-dsDNA النوعية."
      },
      English: {
        etiology: "Systemic breakdown of self-tolerance generating pathogenic autoantibodies against nucleic acids and chromatin with immune complex vasculitis.",
        goldStandard: "Classification via EULAR/ACR criteria: positive ANA entry criterion plus specific Anti-dsDNA or Anti-Smith titers and complement consumption.",
        firstLineRx: "Lifelong hydroxychloroquine for all patients; pulse systemic glucocorticoids combined with mycophenolate or cyclophosphamide for nephritis.",
        keyDifferentiator: "Photosensitive malar butterfly rash, polyarthritis, glomerulonephritis, and high-titer Anti-dsDNA antibodies."
      }
    }
  },
  {
    word: {
      id: 'w588',
      word: { Arabic: 'متلازمة غودباستشر', English: 'Goodpasture Syndrome' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Syndrome',
      subjects: ['Immunology', 'Nephrology', 'Pulmonology'],
      synonyms: ['متلازمة غودباستشر', 'مرض الأجسام المضادة للغشاء القاعدي', 'Anti-GBM Disease', 'Goodpasture Syndrome'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "متلازمة مناعية نادرة وخطيرة من النوع الثاني تجمع بين نزيف سنخي حاد في الرئتين والتهاب كبيبات الكلى سريع الترقي.",
        "تنتج عن أجسام مضادة ذاتية نوعية موجهة ضد نطاق الكولاجين من النوع الرابع (سلسلة ألفا 3) في الغشاء القاعدي.",
        "يتظاهر المريض الكلاسيكي بسعال مدمم (Hemoptysis)، ضيق تنفس حاد، وبول مدمم مع قصور كلوي سريع التدهور.",
        "خزعة الكلى مع فحص التألق المناعي تظهر نمطاً خطياً أملس ومستمراً لترسب IgG على طول الغشاء القاعدي للكبيبات.",
        "يشمل علاجها الطارئ فصادة البلازما (Plasmapheresis) لإزالة الأجسام المضادة السارية مع الستيرويدات وسيكلوفوسفاميد."
      ],
      English: [
        "A fulminant autoimmune pulmonary-renal syndrome characterized by diffuse alveolar hemorrhage coupled with rapidly progressive glomerulonephritis.",
        "Mediated by pathogenic circulating autoantibodies targeted against the non-collagenous domain of the alpha-3 chain of Type IV collagen.",
        "Clinical presentation is marked by hemoptysis, bilateral alveolar infiltrates, microscopic hematuria, and rapid azotemic renal failure.",
        "Renal biopsy evaluated by direct immunofluorescence reveals an unmistakable continuous smooth linear ribbon of IgG along glomerular basements.",
        "Emergency therapeutic protocol mandates urgent therapeutic plasmapheresis to remove circulating antibodies, paired with cyclophosphamide and steroids."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "أجسام مضادة ذاتية IgG تستهدف الغشاء القاعدي الكبيبي والسنخي (Anti-GBM) مسببة تفاعل فرط حساسية من النوع الثاني وتدمير الأنسجة.",
        goldStandard: "فحص مصل الدم لإثبات وجود أضداد Anti-GBM مع خزعة الكلى التي تظهر ترسباً خطياً مستمراً بالتألق المناعي وتكون الأهلة (Crescents).",
        firstLineRx: "جلسات فصادة البلازما اليومية (Plasmapheresis) لغسيل الأجسام المضادة مع جرعات عالية من الكورتيزون وسيكلوفوسفاميد.",
        keyDifferentiator: "الجمع المزدوج الحاد بين بصق الدم الرئوي والقصور الكلوي السريع مع النمط الخطي لترسب الأجسام المضادة."
      },
      English: {
        etiology: "Type II cytotoxic hypersensitivity driven by autoantibodies against the alpha-3 chain of Type IV collagen shared by alveoli and glomeruli.",
        goldStandard: "Serum anti-GBM antibody immunoassay confirmed by renal biopsy displaying linear immunofluorescent IgG tracking and extensive crescentic destruction.",
        firstLineRx: "Immediate daily therapeutic plasma exchange (plasmapheresis) combined with pulse methylprednisolone and oral cyclophosphamide.",
        keyDifferentiator: "Coexisting alveolar pulmonary hemorrhage and rapidly progressive glomerulonephritis with a linear basement membrane IgG deposition pattern."
      }
    }
  },
  {
    word: {
      id: 'w589',
      word: { Arabic: 'متلازمة دي جورج', English: 'DiGeorge Syndrome' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Syndrome',
      subjects: ['Immunology', 'Pediatrics', 'Genetics'],
      synonyms: ['متلازمة دي جورج', 'متلازمة الحذف الصبغي 22q11', 'متلازمة الحنك والقلب والوجه', 'DiGeorge Syndrome', '22q11.2 deletion'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "متلازمة وراثية خلقية تنتج عن حذف صبغي مجهري دقيق في الذراع الطويلة للكروموسوم رقم 22 (22q11.2 deletion).",
        "تنجم عن فشل تطور الجيبين البلعوميين الثالث والرابع مما يؤدي إلى غياب أو ضمور الغدة الزعترية والغدد جارات الدرقية.",
        "يعاني الرضيع حديث الولادة من تشنجات عضلية تكززية ناجمة عن هبوط حاد في مستوى الكالسيوم بالدم لنقص هرمون PTH.",
        "يحدث عوز مناعي خلوي شديد بسبب غياب نضج الخلايا التائية مما يسهل إصابة الطفل بعدوى فطرية وفيروسية متكررة.",
        "تترافق بعيوب خلقية في القلب كرباعية فالوت وجذع شرياني مشترك، وانشقاق في الحنك، وملامح وجه مميزة."
      ],
      English: [
        "A congenital neurocristopathy caused by a recurrent microdeletion on the long arm of chromosome 22 at position 22q11.2.",
        "Stems from embryological dysgenesis of the third and fourth pharyngeal pouches, resulting in aplasia or hypoplasia of the thymus and parathyroids.",
        "Neonates present with neonatal hypocalcemic tetany and seizures due to severe parathyroid hormone deficiency.",
        "Profound T-cell immunodeficiency ensues from thymic absence, predisposing infants to recurrent opportunistic fungal and viral infections.",
        "Universally linked with conotruncal cardiac anomalies (Tetralogy of Fallot, truncus arteriosus), cleft palate, and dysmorphic facies."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "حذف صبغي 22q11.2 يؤدي لخلل في تشكل الجيوب البلعومية 3 و 4 مع غياب نسيج الغدة الزعترية والغدد جارات الدرقية.",
        goldStandard: "فحص التهجين الموضعي المشع (FISH) أو تحليل المصفوفة الدقيقة الصبغية (Chromosomal Microarray) لإثبات الحذف الصبغي.",
        firstLineRx: "تصحيح نقص الكالسيوم الوريدي الحاد وإعطاء فيتامين د، وزراعة نسيج الغدة الزعترية للحالات الشديدة، وإصلاح عيوب القلب جراحياً.",
        keyDifferentiator: "الثالوث الكلاسيكي: غياب الظل الزعتري بالأشعة، ونقص الكالسيوم التكززي، وعيوب القلب الخلقية المخروطية."
      },
      English: {
        etiology: "Microdeletion at chromosome locus 22q11.2 impairing neural crest cell migration into the 3rd and 4th pharyngeal pouches.",
        goldStandard: "Fluorescence in situ hybridization (FISH) or chromosomal microarray definitively confirming the 22q11.2 genetic deletion.",
        firstLineRx: "Acute calcium gluconate repletion and active vitamin D analogs; allogeneic thymic tissue transplantation for severe athymia.",
        keyDifferentiator: "Classic developmental constellation of absent thymic shadow, hypocalcemic tetany, and conotruncal congenital heart defects."
      }
    }
  },
  {
    word: {
      id: 'w590',
      word: { Arabic: 'داء بروتون لنقص المناعة', English: 'Bruton Agammaglobulinemia' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Immunology', 'Pediatrics', 'Genetics'],
      synonyms: ['داء بروتون لنقص المناعة', 'فقد غاما غلوبولين الدم المرتبط بالجنس', 'مرض بروتون', 'X-linked Agammaglobulinemia', 'XLA'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "عوز مناعي أولي وراثي متنحٍ مرتبط بالصبغي X يصيب الذكور فقط، ويتميز بغياب شبه تام للأجسام المضادة في الدم.",
        "ينتج عن طفرة في جين إنزيم تيروزين كاينيز (BTK) الضروري لتطور الخلايا البائية السلفية إلى خلايا ناضجة.",
        "تبدأ الأعراض في الظهور بعد عمر 6 أشهر عندما تبدأ الأجسام المضادة المكتسبة من الأم عبر المشيمة في التلاشي.",
        "يعاني الطفل من التهابات بكتيرية متكررة وخطيرة في الجهاز التنفسي والجيوب والأذن بواسطة بكتيريا ذات محفظة كالمكورات الرئوية.",
        "الفحص السريري يظهر غياباً تاماً للوزتين والعقد اللمفاوية المحيطية، ويعالج بإعطاء الغلوبولين المناعي الوريدي (IVIG) شهرياً مدى الحياة."
      ],
      English: [
        "An inherited primary immunodeficiency transmitted as an X-linked recessive trait, exclusively afflicting male pediatric patients.",
        "Caused by loss-of-function mutations within the Bruton tyrosine kinase (BTK) gene, blocking pro-B cell progression into pre-B cells.",
        "Clinical vulnerability surfaces around 6 months of age coincident with the physiological catabolism of maternal transplacental IgG.",
        "Children endure severe, recurrent sinopulmonary pyogenic infections driven by encapsulated bacteria like Streptococcus pneumoniae.",
        "Physical examination reveals strikingly hypoplastic or absent palatine tonsils and peripheral lymph nodes; managed with lifelong regular IVIG infusions."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرة في جين BTK تمنع نضج الخلايا البائية مما يؤدي لغيابها من الدم التداولي وانعدام كافة أصناف الأجسام المضادة.",
        goldStandard: "قياس التدفق الخلوي (Flow Cytometry) لإثبات غياب الخلايا البائية CD19+ في الدم مع انخفاض حاد في جميع فئات الغلوبولينات.",
        firstLineRx: "حقن الغلوبولين المناعي الوريدي التعويضي بانتظام (IVIG كل 3-4 أسابيع) مدى الحياة مع العلاج المبكر بالمضادات الحيوية.",
        keyDifferentiator: "ضمور شديد في اللوزتين والعقد اللمفاوية مع غياب شبه كامل لكافة الأجسام المضادة وخلايا B في طفل ذكر."
      },
      English: {
        etiology: "X-linked mutation in the Bruton tyrosine kinase (BTK) gene arresting B-cell differentiation in the bone marrow.",
        goldStandard: "Flow cytometry demonstrating profoundly depleted or absent peripheral CD19+ B lymphocytes alongside negligible serum immunoglobulin levels.",
        firstLineRx: "Lifelong periodic intravenous or subcutaneous immunoglobulin (IVIG/SCIG) replacement therapy and aggressive antibiotic protocols.",
        keyDifferentiator: "Male infant presenting past 6 months with absent tonsillar tissue, recurrent encapsulated bacterial infections, and near-zero B cells."
      }
    }
  },
  {
    word: {
      id: 'w591',
      word: { Arabic: 'عوز المناعة المشترك الشديد', English: 'Severe Combined Immunodeficiency' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Syndrome',
      subjects: ['Immunology', 'Pediatrics', 'Genetics'],
      synonyms: ['عوز المناعة المشترك الشديد', 'مرض طفل الفقاعة', 'السيد', 'Severe Combined Immunodeficiency', 'SCID'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "أخطر أشكال العوز المناعي الوراثي الأولي على الإطلاق حيث يتعطل الشقان الخلوي والخلطي للجهاز المناعي تماماً.",
        "أشهر أسبابه الوراثية طفرة في السلسلة غاما لمستقبلات الإنترلوكين (مرتبط بـ X) أو نقص إنزيم أدينوسين دي أمينيز (ADA).",
        "يعرف تاريخياً وإعلامياً بمرض طفل الفقاعة لأن الرضيع لا يستطيع العيش إلا في بيئة معقمة ومعزولة كلياً.",
        "يصاب الرضيع سريعاً بإسهال مزمن مستعصٍ، وفشل نمو حاد، وعدوى انتهازية مميتة بفطريات المتكيسة الرئوية والمبيضات.",
        "يمثل طوارئ مناعية قصوى تؤدي للوفاة في السنة الأولى إذا لم يتم علاجه بزراعة نخاع العظم (خلايا جذعية) في الأشهر الأولى."
      ],
      English: [
        "The most devastating primary pediatric immunodeficiency disorder, characterized by a complete absence of both cellular and humoral immunity.",
        "Most common genetic subtype is X-linked recessive via IL-2 receptor gamma-chain (IL2RG) mutations, alongside autosomal recessive ADA deficiency.",
        "Historically immortalized as the 'bubble boy disease' because infants were shielded from the microbial world within sterile enclosures.",
        "Presents in early infancy with intractable diarrhea, severe failure to thrive, candidiasis, and fatal Pneumocystis jirovecii pneumonia.",
        "Constitutes an absolute medical emergency uniformly fatal within the first year of life unless rescued by allogeneic hematopoietic stem cell transplantation."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل وراثي جيني في مستقبلات السيتوكينات (IL2RG) أو إنزيم ADA يمنع تطور ونضج كل من الخلايا اللمفاوية التائية والبائية.",
        goldStandard: "فحص مسح حديثي الولادة لدوائر استئصال مستقبلات الخلايا التائية (TRECs) في الدم الجاف مع قياس التدفق الخلوي.",
        firstLineRx: "زراعة الخلايا الجذعية المكونة للدم (Bone Marrow Transplantation) كعلاج شافٍ وحيد، مع العزل المعقم الصارم والمضادات الوقائية.",
        keyDifferentiator: "فقدان شامل تام لكلا المناعتين الخلوية والخلطية مع عدوى فطرية وانتهازية مبكرة مهددة للحياة في الأشهر الأولى."
      },
      English: {
        etiology: "Defective common gamma chain cytokine signaling or adenosine deaminase toxicity causing developmental arrest of both T and B lymphocytes.",
        goldStandard: "Newborn screening via T-cell receptor excision circles (TRECs) assay, confirmed by flow cytometry showing profound lymphopenia.",
        firstLineRx: "Allogeneic hematopoietic stem cell transplantation (HSCT) performed emergently, supplemented by sterile reverse isolation and prophylaxis.",
        keyDifferentiator: "Complete simultaneous collapse of both T-cell and B-cell immune arms presenting with severe opportunistic infections in infancy."
      }
    }
  },
  {
    word: {
      id: 'w592',
      word: { Arabic: 'مستضد الكريات البيضاء البشرية', English: 'Human Leukocyte Antigen' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Genetics', 'Pathology'],
      synonyms: ['مستضد الكريات البيضاء البشرية', 'نظام مستضدات الكريات البيضاء', 'معقد HLA', 'معقد التوافق النسيجي البشري', 'HLA', 'Human Leukocyte Antigen'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "معقد بروتيني جيني فائق التباين يقع على الكروموسوم رقم 6، ويمثل بطاقة الهوية البيولوجية المميزة لأنسجة كل إنسان.",
        "ينقسم إلى الصنف الأول (HLA-A, B, C) الموجود على جميع الخلايا ذات النواة، والصنف الثاني على الخلايا المناعية العارضة فقط.",
        "المحدد الأساسي لمدى تطابق الأنسجة ونجاح أو رفض عمليات زراعة الأعضاء ونقل نخاع العظم بين المتبرع والمتلقي.",
        "ترتبط بعض أليلاته بقوة بأمراض مناعية ذاتية شهيرة، مثل ارتباط الأليل (HLA-B27) بالتهاب الفقار المقسط والتهاب القزحية.",
        "يقدم شظايا الببتيدات المستضدية من داخل وخارج الخلية إلى مستقبلات الخلايا التائية لتحفيز الاستجابة المناعية."
      ],
      English: [
        "A hyperpolymorphic cluster of cell-surface glycoproteins encoded on chromosome 6 constituting the biological tissue identity of each individual.",
        "Partitioned into Class I loci (A, B, C) ubiquitous on all nucleated cells and Class II loci (DP, DQ, DR) restricted to professional APCs.",
        "Serves as the paramount molecular barrier determining immunological histocompatibility or graft rejection in organ and stem cell transplantation.",
        "Specific alleles demonstrate massive epidemiological links to autoimmune disorders, notably HLA-B27 with ankylosing spondylitis.",
        "Functions physiologically to cradle degraded intracellular or endocytosed peptide fragments for presentation to circulating T-cell receptors."
      ]
    }
  },
  {
    word: {
      id: 'w593',
      word: { Arabic: 'داء الطعم حيال الثوي', English: 'Graft Versus Host Disease' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Immunology', 'Hematology', 'Oncology'],
      synonyms: ['داء الطعم حيال الثوي', 'مرض الطعم ضد المضيف', 'رفض الطعم للجسم', 'Graft Versus Host Disease', 'GVHD'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "اختلاط مناعي خطير يحدث بعد زراعة نخاع العظم أو الخلايا الجذعية الخيفية المنقولة من متبرع إلى مريض سرطاني.",
        "تهاجم فيه الخلايا اللمفاوية التائية المناعية المزروعة القادمة من المتبرع أنسجة وأعضاء المريض المضيف الضعيف مناعياً.",
        "يستهدف كلاسيكياً ثلاثة أعضاء رئيسية في الجسم: الجلد (طفح حمامي وتقشر)، الكبد (يرقان وركود صفراوي)، والجهاز الهضمي (إسهال مدمم غزير).",
        "ينقسم إلى شكل حاد يظهر خلال أول 100 يوم بعد الزراعة، وشكل مزمن يظهر لاحقاً ويشبه مرض تصلب الجلد وجفاف الأغشية.",
        "تتم الوقاية منه بمطابقة HLA الدقيقة وتثبيط المناعة، ويعالج بالجرعات العالية من الكورتيكوستيرويدات ومضادات الكالسينيورين."
      ],
      English: [
        "A severe systemic immunological complication occurring after allogeneic hematopoietic stem cell transplantation.",
        "Driven by donor-derived immunocompetent mature T lymphocytes mounting a cytolytic attack against alloantigens of the immunocompromised host.",
        "Selectively ravages a canonical triad of target organs: the skin (maculopapular desquamative rash), liver (cholestatic jaundice), and gut (profuse secretory diarrhea).",
        "Clinically segregated into an acute syndrome classically erupting within the first 100 days post-engraftment and a sclerodermatous chronic syndrome.",
        "Mitigated prophylactic via strict HLA matching and T-cell depletion; treated with high-dose systemic methylprednisolone and calcineurin inhibitors."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "مهاجمة الخلايا التائية المناعية الحية القادمة من الطعم المزروع لأنسجة المضيف المستقبل نتيجة التباين النسيجي التوافقي.",
        goldStandard: "الخزعة النسيجية من الجلد أو بطانة المستقيم/الأمعاء لإثبات استماتة ونخر الخلايا الطلائية وحويصلات الكريبت.",
        firstLineRx: "الستيرويدات القشرية الجهازية الوريدية بجرعات عالية (ميثيل بريدنيزولون 2 ملغ/كغ/يوم) مع استمرار مثبطات المناعة.",
        keyDifferentiator: "حدوث ثالوث الطفح الجلدي والإسهال الصفراوي الغزير واليرقان الركودي تحديداً بعد زراعة نخاع العظم الخيفي."
      },
      English: {
        etiology: "Donor graft alloreactive T lymphocytes recognizing mismatched host recipient histocompatibility antigens as foreign, destroying host tissues.",
        goldStandard: "Histopathological biopsy of target skin or rectosigmoid mucosa revealing characteristic apoptotic crypt cell dropouts.",
        firstLineRx: "High-dose intravenous systemic methylprednisolone (2 mg/kg/day) paired with optimized calcineurin inhibitor regimens.",
        keyDifferentiator: "The distinctive presentation of secretory watery diarrhea, palmar-plantar erythema, and cholestasis occurring post-allogeneic stem cell graft."
      }
    }
  },
  {
    word: {
      id: 'w594',
      word: { Arabic: 'الجسم المضاد الذاتي', English: 'Autoantibody' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Immunology', 'Pathology', 'Rheumatology'],
      synonyms: ['الجسم المضاد الذاتي', 'الأضداد الذاتية', 'الأجسام المناعية الذاتية', 'Autoantibody', 'Autoantibodies'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "بروتين مناعي يصنعه الجهاز المناعي عن طريق الخطأ ويوجهه لمهاجمة خلايا وأنسجة وبروتينات الجسم السليمة نفسها.",
        "يمثل الدعامة الباثولوجية والواسم التشخيصي الأساسي في جميع أمراض المناعة الذاتية مثل الذئبة، والوهن العضلي، والسكري النمطي الأول.",
        "تنتجه نسائل من الخلايا البائية والبلازمية التي أفلتت من آليات الرقابة والتسامح المناعي المركزي والمحيطي.",
        "من أمثلتها الشهيرة: العامل الروماتويدي (RF)، والأجسام المضادة للنواة (ANA)، والأجسام المضادة للغدة الدرقية (Anti-TPO).",
        "يمكن اكتشافها وتحديد معايرتها في عينات مصل الدم باستخدام تقنيات المقايسة الامتصاصية المناعية (ELISA) والتألق المناعي."
      ],
      English: [
        "A pathological immunoglobulin produced aberrantly by the immune system that specifically targets host self-antigens.",
        "Forms the diagnostic cornerstone and driving pathogenic mechanism across the spectrum of autoimmune rheumatic and organ-specific diseases.",
        "Synthesized by self-reactive B-cell and plasma-cell clones that successfully evade central negative selection and peripheral tolerance checkpoints.",
        "Classic clinical prototypes include Rheumatoid Factor (RF), Antinuclear Antibodies (ANA), and anti-thyroid peroxidase (anti-TPO).",
        "Quantitatively titered in patient serum utilizing enzyme-linked immunosorbent assays (ELISA) or indirect immunofluorescence microscopy."
      ]
    }
  },

  // =================== ONCOLOGY (21 Terms) ===================
  {
    word: {
      id: 'w595',
      word: { Arabic: 'ليمفوما هودجكين', English: 'Hodgkin Lymphoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Oncology', 'Hematology', 'Pathology'],
      synonyms: ['ليمفوما هودجكين', 'داء هودجكين', 'ورم هودجكين اللمفاوي', 'Hodgkin Lymphoma', 'Hodgkins Disease'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "ورم لمفاوي خبيث يصيب الجهاز اللمفاوي ويتميز بوجود خلايا ريد-ستيرنبيرغ (Reed-Sternberg) العملاقة الشبيهة بعيون البومة.",
        "يظهر كلاسيكياً بتضخم غير مؤلم وصلب ومطاطي في العقد اللمفاوية الرقبية أو فوق الترقوة، وينتشر بنمط متتالٍ منتظم.",
        "يترافق بأعراض جهازية مشهورة تعرف بـ (B symptoms): حمى متموجة (Pel-Ebstein)، تعرق ليلي غزير، وفقدان غير مبرر للوزن.",
        "من العلامات السريرية الغريبة والمميزة له حدوث ألم حاد في العقد اللمفاوية المتضخمة فور تناول المشروبات الكحولية.",
        "يصيب فئتين عمريتين (توزيع ثنائي الذروة): الشباب في العشرينات وكبار السن، ويستجيب بنسب شفاء عالية لبروتوكول ABVD الكيميائي."
      ],
      English: [
        "A lymphoid malignancy distinguished histopathologically by the presence of pathognomonic binucleated Reed-Sternberg cells with prominent owl-eye nucleoli.",
        "Typically debuts as a firm, rubbery, non-tender, painless lymphadenopathy in the cervical or supraclavicular chains, spreading contiguously.",
        "Frequently accompanied by constitutional 'B symptoms': Pel-Ebstein cyclic fevers, drenching nocturnal diaphoresis, and unexplained weight loss.",
        "Features a rare, highly specific physical clue: immediate severe localized aching pain within involved lymph nodes upon alcohol ingestion.",
        "Exhibits a bimodal age distribution peaking in young adulthood and late life; boasts extraordinary cure rates via the ABVD chemotherapy regimen."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تحول سرطاني لخلايا البائية اللمفاوية في مراكز التكاثر يرتبط بفيروس إبشتاين-بار (EBV) مع ظهور خلايا ريد-ستيرنبيرغ.",
        goldStandard: "خزعة استئصالية كاملة للعقدة اللمفاوية (Excisional Lymph Node Biopsy) لإثبات وجود خلايا Reed-Sternberg إيجابية CD30 و CD15.",
        firstLineRx: "بروتوكول العلاج الكيميائي التوليفي ABVD (دوكسوروبيسين، بليوميسين، فينبلستين، داكاربازين) مع العلاج الإشعاعي الموضعي.",
        keyDifferentiator: "خلايا ريد-ستيرنبيرغ العملاقة ثنائية النوى بنمط عيون البومة مع الانتشار المنظم المتتالي من عقدة لأخرى."
      },
      English: {
        etiology: "Malignant clonal transformation of germinal center B lymphocytes, strongly linked in many subtypes to Epstein-Barr Virus (EBV).",
        goldStandard: "Excisional lymph node biopsy confirming binucleated Reed-Sternberg cells characteristically immunophenotyped as CD30+ and CD15+.",
        firstLineRx: "Combination chemotherapy with the ABVD regimen (Doxorubicin, Bleomycin, Vinblastine, Dacarbazine) with or without involved-site radiotherapy.",
        keyDifferentiator: "Microscopic pathognomonic owl-eyed Reed-Sternberg cells embedded in an abundant reactive inflammatory background."
      }
    }
  },
  {
    word: {
      id: 'w596',
      word: { Arabic: 'الليمفوما اللاهودجكينية', English: 'Non-Hodgkin Lymphoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Oncology', 'Hematology', 'Internal Medicine'],
      synonyms: ['الليمفوما اللاهودجكينية', 'ورم الغدد اللمفاوية اللاهودجكيني', 'Non-Hodgkin Lymphoma', 'NHL'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "مجموعة غير متجانسة ومتنوعة من الأورام الخبيثة التي تنشأ من الخلايا اللمفاوية التائية أو البائية وتفوق غيرها انتشاراً بنحو خمسة أضعاف.",
        "تتميز بانتشار عشوائي غير متتالٍ، مع إصابة شائعة للأنسجة اللمفاوية خارج العقد (كالجهاز الهضمي، الجلد، ونخاع العظم).",
        "أكثر أنواعها انتشاراً وشراسة هو سرطان الخلايا البائية الكبيرة المنتشر (DLBCL)، بينما الليمفوما الجريبية هي الأكثر بطئاً.",
        "ترتبط بنقص المناعة المكتسب (الإيدز)، ومثبطات المناعة بعد زراعة الأعضاء، وعدوى بكتيريا الملوية البوابية في ليمفوما المعدة.",
        "يعتمد علاج أكثر أنواعها البائية شيوعاً على البروتوكول المناعي الكيميائي الشهير (R-CHOP) المحتوي على عقار ريتوكسيماب."
      ],
      English: [
        "A heterogeneous cohort of lymphoid malignancies arising from B, T, or NK lineage precursors, outnumbering other lymphomas five-fold.",
        "Exhibits unpredictable, non-contiguous hematogenous dissemination, with frequent involvement of extranodal sites (GI tract, skin, marrow).",
        "The most prevalent aggressive histologic subtype is Diffuse Large B-Cell Lymphoma (DLBCL), while Follicular Lymphoma represents the indolent prototype.",
        "Strongly correlated with secondary immunodeficiency states (HIV/AIDS), post-transplant immunosuppression, and Helicobacter pylori (MALT lymphoma).",
        "Standard front-line curative chemoimmunotherapy for CD20+ B-cell phenotypes revolves around the famous R-CHOP regimen (Rituximab-CHOP)."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات جينية وانتقالات صبغية مسببة للأورام (مثل انتقال t(14;18) في جين BCL-2) تصيب الخلايا اللمفاوية.",
        goldStandard: "الخزعة النسيجية الاستئصالية للعقدة أو العضو المصاب مع دراسة التنميط المناعي (Immunophenotyping) والتدفق الخلوي.",
        firstLineRx: "بروتوكول العلاج المناعي الكيميائي R-CHOP (ريتوكسيماب، سيكلوفوسفاميد، دوكسوروبيسين، فينكريستين، وبريدنيزون).",
        keyDifferentiator: "تضخم عقدي منتشر غير متتالٍ مع إصابة متكررة للأعضاء خارج العقد وغياب خلايا ريد-ستيرنبيرغ."
      },
      English: {
        etiology: "Somatic chromosomal translocations (such as t(14;18) overexpressing BCL-2) and molecular lesions arresting lymphoid differentiation.",
        goldStandard: "Excisional lymph node or extranodal tissue biopsy analyzed with immunohistochemical panels, flow cytometry, and cytogenetics.",
        firstLineRx: "R-CHOP chemoimmunotherapy (Rituximab, Cyclophosphamide, Hydroxydaunorubicin, Oncovin/Vincristine, Prednisone).",
        keyDifferentiator: "Non-contiguous nodal involvement with high predilection for extranodal visceral sites and total lack of Reed-Sternberg giants."
      }
    }
  },
  {
    word: {
      id: 'w597',
      word: { Arabic: 'سرطان الرئة صغير الخلايا', English: 'Small Cell Lung Carcinoma' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Pulmonology', 'Pathology'],
      synonyms: ['سرطان الرئة صغير الخلايا', 'أورام الرئة صغيرة الخلايا', 'ورم خلايا الشوفان', 'Small Cell Lung Cancer', 'SCLC'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "أكثر أورام الرئة شراسة وسرعة في الانتشار والانقسام، ويرتبط ارتباطاً سببياً شبه مطلق بالتدخين الكثيف (أكثر من 98%).",
        "ينشأ مركزياً في الشعب الهوائية الكبرى من خلايا كولتشيتسكي ذات الإفراز العصبي الصماوي (Neuroendocrine origin).",
        "تظهر خلاياه المجهرية صغيرة الحجم كحبات الشوفان مع سيتوبلازم ضئيل جداً وتفتت كروماتيني داكن (Salt-and-pepper chromatin).",
        "يشتهر بإحداث متلازمات الأباعد الورمية (Paraneoplastic) كإفراز هرمون ACTH المسبب لكوشينغ، أو هرمون ADH مسبباً نقص الصوديوم SIADH.",
        "بسبب سرعة انبثاثه الباكر للدماغ والكبد، نادراً ما يكون مرشحاً للجراحة ويعالج بالكيميائي (بلاتينوم + إيتوبوسيد) وإشعاع الدماغ الوقائي."
      ],
      English: [
        "The most biologically aggressive lung malignancy, notorious for rapid doubling times and an almost absolute linkage to heavy tobacco smoking (>98%).",
        "Originates centrally near bronchial hilums from neuroendocrine Kulchitsky cells expressing chromogranin and synaptophysin.",
        "Histologically composed of small, fragile round-to-oval cells with scant cytoplasm, granular 'salt-and-pepper' chromatin, and nuclear molding.",
        "Renowned for driving florid paraneoplastic endocrinopathies, including ectopic ACTH secretion (Cushingoid state) and SIADH hyponatremia.",
        "Virtually never amenable to curative surgical resection due to micro-metastases at diagnosis; treated with platinum-etoposide and prophylactic cranial irradiation."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تحول خبيث لخلايا الغدد العصبية الصماء في الرئة مدفوع بطفرات تعطيلية مزدوجة في جينات TP53 و RB1 إثر التدخين الكثيف.",
        goldStandard: "الخزعة النسيجية عبر تنظير القصبات الهوائية مع الصبغ المناعي الإيجابي للواسمات العصبية الصماوية (Chromogranin / Synaptophysin).",
        firstLineRx: "العلاج الكيميائي التوليفي القائم على البلاتين (سيسبلاتين أو كاربوبلاتين مع إيتوبوسيد) مع العلاج المناعي وإشعاع الجمجمة الوقائي.",
        keyDifferentiator: "كتلة رئوية مركزية لدى مدخن شره مع متلازمات هرمونية أباعد ورامية (SIADH أو Cushing) وخلايا مجهرية شبيهة بالشوفان."
      },
      English: {
        etiology: "Malignant neuroendocrine bronchial transformation driven by near-universal biallelic inactivation of TP53 and RB1 from tobacco carcinogens.",
        goldStandard: "Bronchoscopic core biopsy exhibiting small dark neuroendocrine cells positive for synaptophysin, chromogranin A, and CD56.",
        firstLineRx: "Systemic platinum-doublet chemotherapy (cisplatin/carboplatin plus etoposide) combined with PD-L1 immune checkpoint inhibitors.",
        keyDifferentiator: "Centrally placed hilar mass with paraneoplastic neuroendocrine syndromes (SIADH/Cushing) and microscopic oat-cell morphology."
      }
    }
  },
  {
    word: {
      id: 'w598',
      word: { Arabic: 'سرطان الخلايا الكبدية', English: 'Hepatocellular Carcinoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Oncology', 'Gastroenterology', 'Internal Medicine', 'General Surgery'],
      synonyms: ['سرطان الخلايا الكبدية', 'سرطان الكبد الأولي', 'كارسينوما الكبد', 'Hepatocellular Carcinoma', 'HCC'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "الورم الخبيث الأولي الأكثر شيوعاً في الكبد، وينشأ في أكثر من 80% من الحالات كاختلاط متأخر لتليف الكبد المزمن.",
        "أهم عوامل خطورته العالمية هي العدوى المزمنة بفيروسات الكبد الوبائي (B و C)، وتليف الكبد الكحولي والدهني، وسموم الأفلاتوكسين.",
        "الواسم الورمي المصلي الرئيسي المستخدم في مسحه ومتابعته في الدم هو بروتين ألفا فيتو (Alpha-Fetoprotein - AFP).",
        "يمكن تشخيصه بالأشعة المقطعية أو الرنين متعدد المراحل دون حاجة لخزعة: تعزيز سريع للشريان (Wash-in) وغسيل مبكر بالوريد (Wash-out).",
        "تشمل خياراته العلاجية: الاستئصال الجراحي، زراعة الكبد (ضمن معايير ميلانو)، الكي بالتردد الحراري، أو سد الشريان الكيميائي (TACE)."
      ],
      English: [
        "The predominant primary malignancy of the liver parenchyma, developing in upwards of 80% of cases upon a background of established cirrhosis.",
        "Major global etiologic drivers comprise chronic viral hepatitis B and C, non-alcoholic steatohepatitis (NASH), alcohol abuse, and aflatoxin B1.",
        "The sentinel oncologic serum biomarker utilized for clinical screening and surveillance of high-risk cirrhotic cohorts is Alpha-Fetoprotein (AFP).",
        "Can be definitively diagnosed non-invasively via multiphase dynamic CT or MRI demonstrating arterial hyperenhancement and venous phase washout.",
        "Therapeutic armamentarium spans anatomical resection, orthotopic liver transplantation (within Milan criteria), RF ablation, and TACE."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات متراكمة في خلايا الكبد ناجمة عن الالتهاب المزمن والتجدد النسيجي المستمر في بيئة التليف (خاصة التهاب الكبد B و C).",
        goldStandard: "الأشعة المقطعية أو الرنين الديناميكي رباعي المراحل مبيناً تعزيزاً شريانياً كبيراً يتبعه غسيل سريع بالطور الوريدي (Washout).",
        firstLineRx: "الاستئصال الجراحي أو زراعة الكبد للحالات المبكرة؛ والكي الموضعي أو الحقن الشرياني (TACE) والعلاج المناعي للحالات المتقدمة.",
        keyDifferentiator: "كتلة كبدية ناشئة في كبد متليف تفرز ألفا فيتو بروتين وتظهر ظاهرة الغسيل السريع (Washout) في الأشعة المقطعية متعددة المراحل."
      },
      English: {
        etiology: "Malignant transformation of hepatocytes driven by chronic necroinflammation, oxidative stress, and regenerative cycles in cirrhosis.",
        goldStandard: "Dynamic multiphasic contrast-enhanced CT or MRI demonstrating characteristic arterial phase hyperenhancement with delayed washout.",
        firstLineRx: "Surgical resection or orthotopic liver transplantation for early disease; transarterial chemoembolization (TACE) or atezolizumab-bevacizumab for advanced cases.",
        keyDifferentiator: "Focal liver lesion evolving in a cirrhotic liver, displaying hallmark radiologic arterial enhancement with rapid venous washout."
      }
    }
  },
  {
    word: {
      id: 'w599',
      word: { Arabic: 'سرطان المعدة', English: 'Gastric Carcinoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Oncology', 'Gastroenterology', 'General Surgery'],
      synonyms: ['سرطان المعدة', 'سرطان المعدة الغدي', 'أورام المعدة الخبيثة', 'Gastric Carcinoma', 'Stomach Cancer'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "ورم خبيث ينشأ من الخلايا الغدية المبطنة للمعدة، ويرتبط ارتباطاً وثيقاً بعدوى جرثومة المعدة الملوية البوابية (H. pylori).",
        "تشمل عوامل خطورته البيئية تناول الأطعمة المملحة والمدخنة بكثرة، والتدخين، وفقر الدم الخبيث بنقص فيتامين B12.",
        "النوع المنتشر منه (Diffuse type) يتميز بظهور خلايا مجهرية تشبه الخاتم فصي الخاتم (Signet-ring cells) وتصلب جدار المعدة كالزجاجة.",
        "يشتهر بظهور نقائل ورمية بعيدة مميزة: عقدة فيرجوف (عقدة فوق الترقوة اليسرى)، وعقدة ماري جوزيف (في السرة)، وورم كروكنبرغ بالمبيض.",
        "المعيار الذهبي لتشخيصه هو المنظار الهضمي العلوي مع أخذ خزعات متعددة، ويعالج بالاستئصال الجراحي مع تجريف العقد اللمفاوية."
      ],
      English: [
        "A lethal gastrointestinal malignancy originating from gastric mucosal glandular epithelia, powerfully tied to chronic Helicobacter pylori gastritis.",
        "Dietary risk factors include excessive intake of salted, smoked, and nitrate-preserved foods, compounded by smoking and autoimmune gastritis.",
        "Diffuse histologic subtypes feature malignant signet-ring cells diffusely infiltrating the muscularis, producing a rigid 'leather bottle' stomach (linitis plastica).",
        "Renowned for classic metastatic physical signs: Virchow node (left supraclavicular), Sister Mary Joseph nodule (umbilicus), and Krukenberg ovarian tumors.",
        "The indisputable diagnostic gold standard is esophagogastroduodenoscopy (EGD) with direct mucosal biopsies, followed by surgical gastrectomy."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تحول خبيث تدرجي لبطانة المعدة من الالتهاب المزمن بالملوية البوابية إلى الحؤول المعوي ثم خلل التنسج والسرطان الغدي.",
        goldStandard: "المنظار الهضمي العلوي (EGD) مع أخذ عينات وخزعات متعددة من حواف وقاع القرحة أو الكتلة المعدية المشبوهة.",
        firstLineRx: "الاستئصال الجراحي للمعدة (جزئي أو كلي) مع تجريف العقد اللمفاوية المحيطية (D2 Lymphadenectomy) والعلاج الكيميائي المحيط بالجراحة.",
        keyDifferentiator: "قرحة معدية خبيثة ذات حواف مرتفعة متآكلة تترافق بعقدة فيرجوف الرقبية وظهور خلايا فص الخاتم (Signet-ring)."
      },
      English: {
        etiology: "Stepwise gastric carcinogenesis proceeding from chronic H. pylori mucosal injury to intestinal metaplasia, dysplasia, and invasive adenocarcinoma.",
        goldStandard: "Upper esophagogastroduodenoscopy (EGD) with comprehensive multiple biopsies of ulcerated or indurated gastric lesions.",
        firstLineRx: "Total or subtotal surgical gastrectomy combined with extended D2 lymphadenectomy and perioperative fluoropyrimidine-platinum chemotherapy.",
        keyDifferentiator: "Malignant non-healing gastric ulcer exhibiting signet-ring cell histology, capable of metastatic seeding to Virchow's node."
      }
    }
  },
  {
    word: {
      id: 'w600',
      word: { Arabic: 'سرطان البنكرياس الغدي', English: 'Pancreatic Adenocarcinoma' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Gastroenterology', 'General Surgery'],
      synonyms: ['سرطان البنكرياس الغدي', 'سرطان البنكرياس', 'أورام البنكرياس', 'Pancreatic Adenocarcinoma', 'Pancreatic Cancer'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "أحد أشد الأورام السرطانية فتكاً وصعوبة في الكشف المبكر، وينشأ في أكثر من 70% من الحالات في رأس غدة البنكرياس.",
        "يتظاهر كلاسيكياً بيرقان انسدادي غير مؤلم (Painless jaundice) مع بول داكن وبراز شاحب وحكة جلدية شديدة.",
        "يترافق بعلامة كورفوازيه (Courvoisier sign) الإيجابية حيث تكون المرارة متضخمة وملموسة وغير مؤلمة بوجود اليرقان.",
        "قد يرافقه التهاب الوريد الخثاري المهاجر المتنقل في الأطراف والمعروف بمتلازمة تروسو (Trousseau syndrome).",
        "الواسم الورمي المرتبط به في الدم هو CA 19-9، والجراحة الاستئصالية الكبرى المعتمدة لرأس البنكرياس هي عملية ويبل (Whipple procedure)."
      ],
      English: [
        "One of the most lethal human neoplasms with exceptionally dismal 5-year survival, arising predominantly within the pancreatic head (70%).",
        "Classically heralds its presence via painless obstructive jaundice accompanied by dark tea-colored urine, acholic pale stools, and pruritus.",
        "Demonstrates a positive Courvoisier sign: an enlarged, palpable, non-tender gallbladder in the setting of clinical jaundice.",
        "Frequently precipitates Trousseau syndrome, a migratory superficial thrombophlebitis driven by cancer-induced hypercoagulability.",
        "Monitored serologically via tumor marker CA 19-9; surgical candidates undergo pancreaticoduodenectomy (the Whipple procedure)."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات جينية سائدة في الجين الورمي KRAS (أكثر من 90%) وتعطيل جينات كابتة للأورام كـ CDKN2A و TP53 في بطانة قنوات البنكرياس.",
        goldStandard: "الأشعة المقطعية المخصصة للبنكرياس متعددة المراحل (Pancreatic Protocol CT) متبوعة بالسونار التنظيري (EUS) والخزعة بالإبرة.",
        firstLineRx: "جراحة استئصال البنكرياس والاثني عشر (عملية ويبل Whipple) للحالات القابلة للاستئصال متبوعة بالعلاج الكيميائي المساعد بالفولفيرينوكس.",
        keyDifferentiator: "يرقان انسدادي غير مؤلم مع مرارة متضخمة ملموسة غير مؤلمة (Courvoisier sign) وارتفاع حاد في CA 19-9."
      },
      English: {
        etiology: "Ductal epithelial transformation propelled by activating KRAS oncogene mutations (>90%) alongside inactivation of TP53 and SMAD4.",
        goldStandard: "Multiphasic thin-slice pancreatic protocol helical CT supplemented by endoscopic ultrasound (EUS) with fine-needle aspiration.",
        firstLineRx: "Pancreaticoduodenectomy (Whipple operation) for anatomically resectable disease, followed by adjuvant mFOLFIRINOX chemotherapy.",
        keyDifferentiator: "Painless progressive obstructive jaundice paired with a palpable non-tender gallbladder (Courvoisier sign) and marked CA 19-9 elevation."
      }
    }
  },
  {
    word: {
      id: 'w601',
      word: { Arabic: 'سرطان المبيض', English: 'Ovarian Carcinoma' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Oncology', 'Obstetrics and Gynecology'],
      synonyms: ['سرطان المبيض', 'أورام المبيض الخبيثة', 'السرطان المبيضي الظهاري', 'Ovarian Carcinoma', 'Ovarian Cancer'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "القاتل الصامت في أورام النساء والتوليد لغياب الأعراض المبكرة واكتشافه غالباً في مراحل متقدمة بعد انتشاره في التجويف البطني.",
        "يرتبط ارتباطاً وراثياً وثيقاً بطفرات جينات إصلاح الحمض النووي (BRCA1 و BRCA2) ومتلازمة لينش الوراثية.",
        "تأتي أكثر من 90% من أنواعه من الظهارة السطحية وأشهرها السرطان المصلي عالي الدرجة (High-grade serous).",
        "تتظاهر أعراضه المتأخرة بانتفاخ البطن المستمر، الشبع المبكر، آلام الحوض، وتجمع السائل الاستسقائي (Ascites).",
        "يستخدم واسم الورم CA-125 في الدم لمتابعة الاستجابة للعلاج، ويعالج بجراحة تقليص الورم القصوى مع العلاج الكيميائي القائم على البلاتين."
      ],
      English: [
        "Referred to as the silent gynecological killer because early disease is asymptomatic, with >70% presenting with peritoneal carcinomatosis.",
        "Powerfully linked to germline hereditary breast and ovarian cancer mutations in BRCA1 and BRCA2, as well as Lynch syndrome.",
        "The predominant histological subtype is high-grade serous carcinoma, thought to originate largely within the fimbriated ends of Fallopian tubes.",
        "Clinical late signs comprise progressive abdominal distension, early satiety, pelvic pain, weight loss, and malignant ascites accumulation.",
        "Monitored serologically via serum CA-125 biomarker; managed with maximal cytoreductive debulking surgery and platinum-taxane chemotherapy."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات في جينات إصلاح الكسور بالحمض النووي (BRCA1/2 و TP53) تنشأ غالباً من ظهارة خملات قناة فالوب وتنتشر إلى المبيض.",
        goldStandard: "السونار المهبلي والأشعة المقطعية للحوض والبطن مع تأكيد التشخيص النسيجي واستئصال وتدريج الورم جراحياً.",
        firstLineRx: "جراحة تقليص الورم القصوى (Maximal debulking) مع العلاج الكيميائي المساعد (كارببلاتين + باكليتاكسيل) ومثبطات PARP لحاملي طفرة BRCA.",
        keyDifferentiator: "كتلة حوضية صلبة غير منتظمة لدى سيدة مع استسقاء بطني خبيث وارتفاع واسم الورم CA-125."
      },
      English: {
        etiology: "Defective homologous recombination repair (BRCA1/2 mutations) initiating neoplastic transformation within fallopian tubal/ovarian epithelia.",
        goldStandard: "Transvaginal pelvic Doppler ultrasound and CT staging confirmed histopathologically through primary surgical staging and cytoreduction.",
        firstLineRx: "Primary maximal surgical cytoreduction followed by systemic carboplatin-paclitaxel chemotherapy and maintenance PARP inhibitors.",
        keyDifferentiator: "Complex adnexal mass presenting alongside malignant ascites and profound serum CA-125 elevation in a postmenopausal female."
      }
    }
  },
  {
    word: {
      id: 'w602',
      word: { Arabic: 'مستضد البروستاتا النوعي', English: 'Prostate-Specific Antigen' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Component',
      subjects: ['Oncology', 'Urology', 'Biochemistry'],
      synonyms: ['مستضد البروستاتا النوعي', 'واسم البي إس إيه', 'إنزيم البروستاتا', 'Prostate-Specific Antigen', 'PSA'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "بروتين سكري إنزيمي يفرزه النسيج الطلائي لغدة البروستاتا وظيفته الفسيولوجية تسييل السائل المنوي المتخثر.",
        "يستخدم كأشهر واسم حيوي في الدم للمسح والمتابعة السريرية لسرطان البروستاتا لدى الرجال فوق سن الخمسين.",
        "المستوى الطبيعي في الدم يعتبر تقليدياً أقل من 4 نانوغرام/مل، وتجاوزه يستوجب استقصاءات إضافية كأخذ خزعة.",
        "ليس نوعياً للسرطان فقط؛ إذ يمكن أن يرتفع أيضاً في حالات تضخم البروستاتا الحميد (BPH)، والتهاب البروستاتا، وبعد الفحص الشرجي.",
        "يساعد حساب نسبة النوع الحر إلى الكلي (Free-to-total ratio) في تقليل الخزعات غير الضرورية عند وجود قيم حدودية مشبوهة."
      ],
      English: [
        "A kallikrein-related serine protease synthesized by prostatic epithelial cells, whose physiological duty is liquefaction of the seminal coagulum.",
        "The universally utilized serum biomarker for screening, risk stratification, and post-treatment monitoring of adenocarcinoma of the prostate.",
        "Historically defined by a normal upper threshold limit of 4.0 ng/mL, above which the suspicion for malignancy escalates.",
        "Organ-specific but not cancer-specific: levels spike in benign prostatic hyperplasia (BPH), acute prostatitis, and mechanical catheterization.",
        "The ratio of free to total biomarker (free/total ratio) helps differentiate benign prostatic enlargement from true aggressive carcinoma."
      ]
    }
  },
  {
    word: {
      id: 'w603',
      word: { Arabic: 'المستضد السرطاني المضغي', English: 'Carcinoembryonic Antigen' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Component',
      subjects: ['Oncology', 'Gastroenterology', 'Biochemistry'],
      synonyms: ['المستضد السرطاني المضغي', 'واسم سي إي إيه', 'بروتين الجنين السرطاني', 'Carcinoembryonic Antigen', 'CEA'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "بروتين سكري جنيني ورمي يوجد طبيعياً بتراكيز عالية في أنسجة القناة الهضمية للجنين أثناء الحمل وينخفض للحد الأدنى بعد الولادة.",
        "يعاد إنتاجه وإفرازه في دم البالغين بكميات كبيرة بواسطة الأورام السرطانية، وخاصة سرطان القولون والمستقيم.",
        "لا يصلح كأداة مسح أولي لعشواء العامة لعدم نوعيته، لكنه المعيار الذهبي الأهم لمتابعة عودة أو انتكاس سرطان القولون بعد الجراحة.",
        "يرتفع بدرجات طفيفة لدى المدخنين الأصحاء، ومرضى التهاب القولون التقرحي، وتليف الكبد المزمن.",
        "الارتفاع المتصاعد في مستوياته بعد استئصال الورم الجراحي يعد المؤشر الأول على حدوث نقائل خبيثة في الكبد."
      ],
      English: [
        "An oncofetal glycoprotein synthesized abundantly in embryonic endodermal gut tissues during gestation, dropping to near zero postnatally.",
        "Re-expressed and shed into adult systemic circulation by various carcinomas, most famously colorectal adenocarcinomas.",
        "Lacks sufficient sensitivity and specificity for initial population cancer screening, but is vital for post-resection recurrence monitoring.",
        "Mild non-malignant elevations occur in chronic cigarette smokers, inflammatory bowel disease, and hepatic cirrhosis.",
        "A persistent post-surgical elevation or steady upward trajectory serves as the earliest biochemical harbinger of occult hepatic metastases."
      ]
    }
  },
  {
    word: {
      id: 'w604',
      word: { Arabic: 'ألفا فيتو بروتين', English: 'Alpha-Fetoprotein' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Component',
      subjects: ['Oncology', 'Obstetrics and Gynecology', 'Pediatrics'],
      synonyms: ['ألفا فيتو بروتين', 'بروتين الجنين ألفا', 'واسم إيه إف بي', 'Alpha-Fetoprotein', 'AFP'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "بروتين بلازمي جنيني رئيسي يصنعه الكيس المحي وكبد الجنين، ويمثل المكافئ الجنيني لبروتين الألبومين لدى البالغين.",
        "يستخدم كواسم ورمي أساسي في دم البالغين لتشخيص ومتابعة سرطان الخلايا الكبدية (HCC) وأورام الخلايا الجرثومية في الخصية والمبيض.",
        "يقاس روتينياً في دم الحامل بالسائل الأمنيوسي؛ فارتفاعه الشديد ينذر بعيوب الأنبوب العصبي للجنين كالسنسنة المشقوقة (Spina bifida).",
        "انخفاض مستواه بشكل ملحوظ في دم الأم الحامل خلال الثلث الثاني من الحمل يعد مؤشراً مسحياً على احتمالية متلازمة داون.",
        "يساعد قياسه المتزامن مع هرمون HCG في تصنيف ومتابعة أورام الخصية غير المنوية (Non-seminomatous germ cell tumors)."
      ],
      English: [
        "The dominant fetal plasma glycoprotein synthesized sequentially by the yolk sac and embryonic liver, serving as the fetal analogue of albumin.",
        "Utilized in adult clinical oncology as the primary surveillance and diagnostic serum biomarker for hepatocellular carcinoma and testicular germ cell tumors.",
        "Routinely measured during maternal antenatal screening: marked maternal elevations alert clinicians to open neural tube defects (spina bifida).",
        "Abnormally depressed maternal serum levels during the second-trimester quadruple screen correlate with fetal Down syndrome (Trisomy 21).",
        "Paired routinely with beta-hCG to stage, stratify, and monitor therapeutic responses in non-seminomatous testicular germ cell tumors."
      ]
    }
  },
  {
    word: {
      id: 'w605',
      word: { Arabic: 'واسم الورم CA-125', English: 'CA-125 Antigen' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Component',
      subjects: ['Oncology', 'Obstetrics and Gynecology', 'Biochemistry'],
      synonyms: ['واسم الورم CA-125', 'مستضد السرطان 125', 'واسم سرطان المبيض', 'CA-125', 'Cancer Antigen 125'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "بروتين سكري تركيبي كبير مشتق من ظهارة اللولوم الجنينية، ويعد أشهر واسم ورمي مرتبط بسرطان المبيض الظهاري.",
        "يستخدم سريرياً لتقييم الكتل الحوضية لدى النساء بعد سن اليأس، ولمتابعة الاستجابة للعلاج الكيميائي ورصد انتكاس الورم.",
        "القيمة الطبيعية له في الدم تعتبر عموماً أقل من 35 وحدة/مل، وقد يتجاوز آلاف الوحدات في حالات سرطان المبيض المصلي المنتشر.",
        "ليس خاصاً بالسرطان فقط؛ إذ يمكن أن يرتفع في حالات حميدة كبطانة الرحم المهاجرة (Endometriosis)، وألياف الرحم، والحمل، وأثناء الطمث.",
        "يعد جزءاً أساسياً في حساب مؤشر خطورة الخباثة (RMI) مع معايير السونار المهبلي وحالة انقطاع الطمث لتوجيه الجراحة."
      ],
      English: [
        "A high-molecular-weight transmembrane mucin glycoprotein (MUC16) derived embryologically from coelomic and Müllerian epithelia.",
        "The premier oncologic serum biomarker deployed for tracking disease progression and post-surgical recurrence in epithelial ovarian cancer.",
        "Historically calibrated to a standard laboratory upper reference limit of 35 U/mL, often soaring into thousands in disseminated serous cancer.",
        "Lacks absolute tumor specificity: physiological or benign spikes occur during menstruation, pregnancy, endometriosis, and pelvic peritonitis.",
        "Serves as an integral arithmetic variable within the Risk of Malignancy Index (RMI) scoring system guiding specialist gynecologic surgery."
      ]
    }
  },
  {
    word: {
      id: 'w606',
      word: { Arabic: 'العلاج الكيميائي للسرطان', English: 'Chemotherapy' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Pharma',
      subjects: ['Oncology', 'Pharmacology'],
      synonyms: ['العلاج الكيميائي للسرطان', 'الكيماوي', 'الأدوية السامة للخلايا', 'العلاج الكيماوي', 'Chemotherapy', 'Chemo'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "صنف رئيسي من العلاجات الدوائية الجهازية يعتمد على استخدام عقاقير سامة للخلايا لتدمير الخلايا السرطانية سريعة الانقسام.",
        "تشمل فئاته: العوامل المؤلكلة التي تدمر الحمض النووي (كسيكلوفوسفاميد)، ومضادات المستقلبات (كميثوتريكسات)، وسموم المغزل (كباكليتاكسيل).",
        "نظراً لاستهدافه جميع الخلايا سريعة الانقسام في الجسم دون تمييز، فإنه يؤثر على بصيلات الشعر مسبباً الصلع، وبطانة الأمعاء مسبباً القيء.",
        "يعد تثبيط نخاع العظم (Myelosuppression) وما ينجم عنه من فقر دم، ونزف بنقص الصفائح، وعدوى خطيرة بنقص العدلات أخطر سمياته الحادة.",
        "يعطى ببروتوكولات دورية دقيقة لحساب الجرعة بناءً على مساحة سطح جسم المريض (Body Surface Area) مع أدوية مانعة للغثيان."
      ],
      English: [
        "A major category of systemic pharmacological antineoplastic therapy employing cytotoxic agents designed to disrupt cellular mitosis.",
        "Spans diverse mechanistic classes: alkylating agents (cyclophosphamide), antimetabolites (methotrexate), and microtubule poisons (paclitaxel).",
        "Because it non-specifically attacks rapidly proliferating cell lines, it damages hair follicles (alopecia) and gut mucosa (mucositis/emesis).",
        "Dose-limiting acute toxicity is profound bone marrow suppression, generating life-threatening febrile neutropenia, anemia, and thrombocytopenia.",
        "Administered in scheduled cyclical regimens strictly dosed to calculated body surface area (BSA) alongside prophylactic antiemetic 5-HT3 blockers."
      ]
    }
  },
  {
    word: {
      id: 'w607',
      word: { Arabic: 'العلاج الإشعاعي للأورام', English: 'Radiotherapy' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Technique',
      subjects: ['Oncology', 'Radiology'],
      synonyms: ['العلاج الإشعاعي للأورام', 'العلاج بالأشعة', 'الإشعاعي', 'الراديوي العلاجي', 'Radiation Therapy', 'Radiotherapy'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أسلوب علاجي موضعي للسرطان يعتمد على توجيه حزم مكثفة من الإشعاعات المؤينة عالية الطاقة لتدمير الحمض النووي للخلايا الخبيثة.",
        "تولد فوتونات الأشعة السينية أو الجسيمات المشحونة جذوراً حرة تسبب كسوراً مزدوجة في شريطي الحمض النووي مما يمنع انقسام الورم.",
        "يطبق إما عبر حزم خارجية من مسرع خطي (Linear accelerator) موجه نحو المريض، أو داخلياً بزرع بذور مشعة موضعية (Brachytherapy).",
        "تجزأ الجرعة الكلية إلى جرعات صغيرة متساوية (Fractions) تعطى يومياً على مدى أسابيع للسماح للأنسجة السليمة المجاورة بإصلاح نفسها.",
        "يستخدم إما بهدف الشفاء الجذري، أو كعلاج مساعد قبل أو بعد الجراحة، أو كعلاج تلطيفي مسكن لآلام النقائل العظمية وضغط الحبل الشوكي."
      ],
      English: [
        "A localized oncological treatment modality delivering high doses of ionizing radiation to permanently fracture malignant double-stranded DNA.",
        "Operates via direct ionization or indirect generation of reactive oxygen free radicals, incapacitating cellular replication machinery.",
        "Delivered externally via specialized medical linear accelerators (LINACs) or internally via implanted radioactive sealed sources (brachytherapy).",
        "Total therapeutic doses are fractionated into daily aliquots over multiple weeks to exploit normal tissue DNA repair kinetics.",
        "Deployed with curative intent, as adjuvant or neoadjuvant surgical therapy, or for emergent palliation of painful bone metastases."
      ]
    }
  },
  {
    word: {
      id: 'w608',
      word: { Arabic: 'العلاج المناعي للأورام', English: 'Cancer Immunotherapy' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Pharma',
      subjects: ['Oncology', 'Immunology', 'Pharmacology'],
      synonyms: ['العلاج المناعي للأورام', 'العلاج المناعي للسرطان', 'مثبطات نقاط التفتيش', 'Cancer Immunotherapy', 'Immune Checkpoint Inhibitors'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "نهج علاجي ثوري في طب الأورام لا يستهدف الخلايا السرطانية مباشرة، بل يعيد تحفيز وتنشيط الجهاز المناعي للمريض لمهاجمة الورم.",
        "أبرز أصنافه هي مثبطات نقاط التفتيش المناعية (Checkpoint inhibitors) التي تحصر بروتينات (PD-1, PD-L1, CTLA-4).",
        "تقوم بإزالة المكابح التي تضعها الخلايا السرطانية الخبيثة على الخلايا التائية، مما يمكن الأخيرة من التعرف على الورم وتدميره.",
        "أحدثت طفرة هائلة في معدلات الشفاء والبقاء على قيد الحياة في أورام كانت تعتبر ميؤوسة مثل الميلانوما المتقدمة وسرطان الرئة.",
        "تترافق مع آثار جانبية مميزة تشبه أمراض المناعة الذاتية مثل التهاب القولون، والتهاب الكبد، والتهاب الغدد الصماء."
      ],
      English: [
        "A revolutionary paradigm in oncology that does not poison tumor cells directly, but instead re-arms the host immune system to eradicate them.",
        "Dominated by immune checkpoint inhibitor monoclonal antibodies blocking inhibitory molecules including PD-1, PD-L1, and CTLA-4.",
        "Releases the biological 'molecular brakes' through which malignant cells induce T-cell exhaustion, unleashing potent anti-tumor cytotoxicity.",
        "Transformed historical prognoses in formerly refractory metastatic malignancies, establishing durable remissions in melanoma and lung cancer.",
        "Exhibits a distinct toxicity spectrum termed immune-related adverse events (irAEs) manifesting as autoimmune colitis, pneumonitis, and hypophysitis."
      ]
    }
  },
  {
    word: {
      id: 'w609',
      word: { Arabic: 'النقائل الورمية الخبيثة', English: 'Neoplasm Metastasis' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Oncology', 'Pathology'],
      synonyms: ['النقائل الورمية الخبيثة', 'انبثاث السرطان', 'انتشار الورم الثانوي', 'النقائل السرطانية', 'Metastasis', 'Metastatic Disease'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الخاصية البيولوجية الأخطر للأورام الخبيثة، وتتمثل في انتشار خلايا السرطان من موضع الورم الأولي إلى أعضاء وأنسجة بعيدة.",
        "تعد السبب المباشر لأكثر من 90% من إجمالي الوفيات المرتبطة بمرض السرطان بين البشر.",
        "تسلك الخلايا الخبيثة ثلاثة مسارات رئيسية: الانتشار عبر الأوعية اللمفاوية (للعقد)، عبر مجرى الدم (للأعضاء)، أو عبر التجاويف الصفاقية.",
        "أشهر الأعضاء المستهدفة باستقبال هذه المستعمرات الثانوية هي الكبد، الرئتان، العظام، والدماغ.",
        "يحدد وجودها وصول المريض إلى المرحلة الرابعة (Stage IV) من مراحل تدريج المرض، وتتحول الأهداف العلاجية غالباً إلى التلطيف والتحكم."
      ],
      English: [
        "The lethal hallmark characteristic of malignant neoplasms, defined as the biological dissemination of cancer cells from a primary nidus to distant organs.",
        "Directly responsible for upwards of 90% of all cancer-associated mortalities worldwide.",
        "Operates through three anatomical pathways: lymphatic dissemination to regional nodes, hematogenous spread, or transcoelomic cavity seeding.",
        "The most notorious sanctuary target organs receptive to secondary colonization comprise the liver, lungs, bone matrix, and brain.",
        "Its clinical presence automatically upstages disease to Stage IV in TNM taxonomy, pivoting therapeutic goals toward disease control and palliation."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انفصال خلايا خبيثة من الورم الأصلي وغزو الغشاء القاعدي ودخول مجرى الدم أو اللمف والاستقرار في أعضاء حيوية أخرى.",
        goldStandard: "التصوير المقطعي بالإصدار البوزيتروني المدمج (PET-CT) لتحديد مواقع البؤر الثانوية النشطة أيضياً مع تأكيد الخزعة.",
        firstLineRx: "العلاجات الدوائية الجهازية (كيميائي، مناعي، أو موجه) للسيطرة على انتشار المرض مع العلاج التلطيفي للأعراض.",
        keyDifferentiator: "وجود كتل ورمية ثانوية متعددة في أعضاء بعيدة كالكبد والرئة والعظام مثبتة المنشأ من نسيج ورمي أولي مختلف."
      },
      English: {
        etiology: "Epithelial-mesenchymal transition enabling primary tumor detachment, intravasation into vascular channels, extravasation, and distant colonization.",
        goldStandard: "Whole-body 18F-FDG PET-CT scan identifying hypermetabolic secondary lesions, correlated histopathologically with immunohistochemistry.",
        firstLineRx: "Comprehensive systemic antineoplastic regimens (targeted biologics, chemotherapy, or immunotherapy) tailored to the primary molecular driver.",
        keyDifferentiator: "Disseminated secondary neoplastic deposits colonizing distant organ beds confirmed histologically to match the primary tumor origin."
      }
    }
  },
  {
    word: {
      id: 'w610',
      word: { Arabic: 'الخزعة بالإبرة الدقيقة', English: 'Fine Needle Aspiration' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Oncology', 'Pathology', 'General Surgery'],
      synonyms: ['الخزعة بالإبرة الدقيقة', 'سحب العينات بالإبرة الدقيقة', 'السحب الخلوي', 'Fine Needle Aspiration', 'FNA', 'FNAC'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "إجراء تشخيصي سريع وقليل التوغل يستخدم إبرة رفيعة مجوفة ومحقنة لسحب عينات خلوية من الكتل السطحية لفحصها مجهرياً.",
        "يعد الفحص الأولي المعياري لتقييم عقيدات الغدة الدرقية، والكتل المشبوهة في الثدي، وتضخم العقد اللمفاوية الرقبية.",
        "غالباً ما يجرى تحت توجيه فوري بأجهزة الموجات فوق الصوتية (السونار) لضمان دخول الإبرة بدقة في مركز الكتلة المشتبهة.",
        "يقدم فحصاً خلوياً (Cytology) سريعاً يظهر الخلايا المفردة لكنه لا يحافظ على المعمارية النسيجية الشاملة للأنسجة.",
        "يتميز بعدم حاجته لتخدير عام أو شق جراحي، مع انعدام شبه تام للمضاعفات وإمكانية إجرائه في العيادة الخارجية خلال دقائق."
      ],
      English: [
        "A rapid, minimally invasive diagnostic outpatient procedure utilizing a narrow-gauge needle and syringe to aspirate free cells from lesions.",
        "Serves as the frontline standard of care investigation for thyroid nodules, palpable breast masses, and suspicious cervical lymphadenopathy.",
        "Routinely performed under direct real-time ultrasound guidance to steer the needle tip into the solid or suspicious core of the lesion.",
        "Yields purely cytological specimens evaluating cellular nuclear-to-cytoplasmic morphology rather than preserved histological architecture.",
        "Requires no general anesthesia or surgical incisions, carrying near-zero morbidity and providing provisional answers within hours."
      ]
    }
  },
  {
    word: {
      id: 'w611',
      word: { Arabic: 'نظام تدريج الأورام TNM', English: 'TNM Staging System' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Other',
      subjects: ['Oncology', 'Pathology', 'General Surgery'],
      synonyms: ['نظام تدريج الأورام TNM', 'تدريج السرطان TNM', 'تصنيف TNM', 'TNM Staging System', 'TNM'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "النظام المعياري العالمي الموحد الأكثر استخداماً في طب الأورام لتوثيق وتصنيف مدى انتشار الورم الخبيث في جسم المريض.",
        "يعتمد على ثلاثة محاور رئيسية: حجم الورم الأولي وعمقه، إصابة العقد اللمفاوية الإقليمية، ووجود نقائل ورمية بعيدة.",
        "يستخدم الحرف الأول لتوصيف الكتلة من 0 إلى 4، والحرف الثاني للعقد من 0 إلى 3، والحرف الثالث للنقائل (M0 أو M1).",
        "يعد المحدد الحاسم لاختيار الخطة العلاجية: فالأورام المبكرة تكون مرشحة للجراحة الاستئصالية، بينما المتقدمة تتطلب علاجاً جهازياً.",
        "يمنح الأطباء حول العالم لغة مشتركة دقيقة وموحدة لتحديد الإنذار المستقبلي للمرض ومقارنة نتائج الأبحاث السريرية."
      ],
      English: [
        "The universally accepted benchmark anatomical staging language developed by the AJCC and UICC to categorize cancer extent.",
        "Anchored upon three pivotal parameters: primary tumor size and extent, regional lymph node involvement, and distant metastasis.",
        "Designates primary tumor progression numerically from 0 to 4, regional nodal status from 0 to 3, and distant spread as M0 or M1.",
        "Serves as the indispensable decision-making blueprint for therapeutic triage (curative surgical resection versus palliative chemotherapy).",
        "Establishes a rigorous, standardized international nomenclature providing vital prognostic stratification for oncologic trials."
      ]
    }
  },
  {
    word: {
      id: 'w612',
      word: { Arabic: 'ساركوما إيوينغ العظمية', English: 'Ewing Sarcoma' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Orthopedics', 'Pediatrics'],
      synonyms: ['ساركوما إيوينغ العظمية', 'ورم إيوينغ', 'ساركوما يوينغ', 'Ewing Sarcoma'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "ورم عظمي خبيث شديد العدوانية يصيب الأطفال والمراهقين، وينشأ كلاسيكياً في جذع العظام الطويلة (Diaphysis) كعظم الفخذ وعظام الحوض.",
        "ينتمي لعائلة أورام الخلايا الزرقاء الصغيرة المستديرة (Small round blue cell tumors) تحت الفحص المجهري.",
        "ينتج جينياً عن انتقال صبغي مميز جداً بنسبة تفوق 85% بين الكروموسومين 11 و 22 مسبباً الجين المندمج (EWS-FLI1).",
        "تظهر الأشعة السينية للعظم المصاب تفاعلاً سمحاقياً متعدداً يشبه قشرة البصل (Onion-skinning periosteal reaction).",
        "قد يقلد التهاب العظم والنقي الإنتاني لظهوره بألم عظمي موضعي، تورم، ارتفاع بالحرارة، وزيادة في كريات الدم البيضاء."
      ],
      English: [
        "A highly aggressive primary malignant pediatric bone tumor, classically predilecting the diaphyses of long tubular bones and the pelvis.",
        "Belongs histologically to the classic diagnostic category of small round blue cell neoplasms packed with high nuclear-to-cytoplasmic ratios.",
        "Defined cytogenetically by a pathognomonic balanced reciprocal translocation t(11;22)(q24;q12) forging the oncogenic EWS-FLI1 fusion transcript.",
        "Plain radiographs demonstrate an aggressive lamellated periosteal reaction creating a classic multi-layered 'onion-skin' appearance.",
        "Frequently mimics acute bacterial osteomyelitis on presentation with localized bone pain, swelling, systemic pyrexia, and leukocytosis."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انتقال صبغي متوازن t(11;22) ينشئ البروتين الاندماجي EWS-FLI1 المسرطن في خلايا الأديم الظاهر العصبي غير الناضجة.",
        goldStandard: "الخزعة العظمية مع الفحص الجزيئي (FISH أو RT-PCR) لإثبات وجود انتقال الكروموسومين t(11;22) وتعبير مستضد CD99.",
        firstLineRx: "العلاج الكيميائي التوليفي المكثف قبل الجراحة (VDC/IE) متبوعاً بالاستئصال الجراحي الكامل أو العلاج الإشعاعي.",
        keyDifferentiator: "أشعة سينية لعظم طفل تظهر تفاعل قشر البصل العظمي المميز مع أورام الخلايا الزرقاء الصغيرة الدائرية الموجبة لـ CD99."
      },
      English: {
        etiology: "Somatic chromosomal translocation t(11;22) generating the aberrant chimeric transcription factor EWS-FLI1.",
        goldStandard: "Core needle bone biopsy coupled with molecular cytogenetics (FISH or RT-PCR) confirming the t(11;22) translocation and strong membranous CD99 positivity.",
        firstLineRx: "Intensive multi-agent neoadjuvant chemotherapy (vincristine, doxorubicin, cyclophosphamide alternating with ifosfamide-etoposide), followed by definitive surgery.",
        keyDifferentiator: "Diaphyseal long bone lesion in a child displaying concentric 'onion-skin' periostitis and CD99+ small round blue cell histology."
      }
    }
  },
  {
    word: {
      id: 'w613',
      word: { Arabic: 'ورم أرومة الشبكية', English: 'Retinoblastoma' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Ophthalmology', 'Pediatrics', 'Genetics'],
      synonyms: ['ورم أرومة الشبكية', 'سرطان شبكية العين لدى الأطفال', 'ريتينوبلاستوما', 'Retinoblastoma'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "أكثر أورام العين الخبيثة انتشاراً لدى الرضع والأطفال الصغار دون سن الخامسة، وينشأ من الخلايا العصبية الجنينية لشبكية العين.",
        "المرض النموذجي الذي صاغ العالم كوندسون من خلاله فرضية الضربتين (Knudson two-hit hypothesis) لتعطيل الجين الكابت للأورام (RB1).",
        "العلامة السريرية الأكثر شيوعاً هي ابيضاض بؤبؤ العين (Leukocoria) حيث ينعكس الضوء الأبيض من الحدقة في الصور بدلاً من المنعكس الأحمر.",
        "تعد الحول (Strabismus) ثاني أكثر العلامات ظهوراً نتيجة فقدان التثبيت البصري المركزي في العين المصابة.",
        "يمنع منعاً باتاً أخذ خزعة بالإبرة من مقلة العين تجنباً لانتشار الخلايا السرطانية الخبيثة خارج المدار إلى الدماغ."
      ],
      English: [
        "The most prevalent primary intraocular malignancy of infancy and early childhood, developing from primitive neuroepithelial retinal precursors.",
        "Serves as the historical prototype establishing Knudson's famous 'two-hit hypothesis' of tumor suppressor gene inactivation (RB1 gene on 13q14).",
        "The leading cardinal clinical sign is leukocoria ('cat's eye reflex'), where a white pupillary reflection replaces the normal red reflex in photographs.",
        "Strabismus ranks as the second most common presenting complaint, precipitated by macular involvement disrupting central binocular fixation.",
        "Incisional or aspiration biopsy of the globe is strictly and absolutely contraindicated to prevent catastrophic extraocular tumor dissemination."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "طفرات تعطيلية ثنائية الأليل في الجين الكابت للأورام RB1 على الكروموسوم 13q14 في الخلايا العصبية لشبكية العين.",
        goldStandard: "فحص قاع العين غير المباشر تحت التخدير العام وظهور كتل بيضاء طباشيرية متكلسة مع التصوير بالرنين المغناطيسي والموجات فوق الصوتية.",
        firstLineRx: "العلاج الكيميائي الشرياني الموضعي عبر الشريان العيني لإنقاذ العين والبصر، أو استئصال المقلة (Enucleation) في الأورام المتقدمة.",
        keyDifferentiator: "ظهور المنعكس الأبيض الشاذ في حدقة عين الرضيع (Leukocoria) واختفاء المنعكس الأحمر الطبيعي في الصور الفوتوغرافية."
      },
      English: {
        etiology: "Biallelic loss-of-function mutations within the canonical RB1 tumor suppressor gene locus on chromosome 13q14.",
        goldStandard: "Dilated indirect ophthalmoscopy under general anesthesia coupled with high-resolution orbit MRI showing calcified intraocular retinal masses.",
        firstLineRx: "Intra-arterial ophthalmic artery chemotherapy or laser photocoagulation for globe salvage; primary enucleation for advanced disease.",
        keyDifferentiator: "Pathognomonic leukocoria (abnormal white pupillary reflex) replacing the normal red reflex in infant eye photography."
      }
    }
  },
  {
    word: {
      id: 'w614',
      word: { Arabic: 'الورم السرطاوي', English: 'Carcinoid Tumor' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Gastroenterology', 'Endocrinology'],
      synonyms: ['الورم السرطاوي', 'أورام الغدد الصم العصبية', 'الورم الكارسينويدي', 'Carcinoid Tumor', 'Neuroendocrine Tumor', 'NET'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "ورم عصبي صماوي بطيء النمو ينشأ من خلايا كولتشيتسكي المعوية الأليفة للفضة، ويصيب غالباً الزائدة الدودية والأمعاء الدقيقة والرئتين.",
        "يفرز كميات هائلة من المواد الفعالة الحيوية كالسيروتونين (Serotonin)، والهيستامين، والبراديكينين في مجرى الدم.",
        "تحدث المتلازمة المرتبطة به كلاسيكياً فقط بعد حدوث نقائل كبدية تتجاوز قدرة الكبد على استقلاب السيروتونين المفرز.",
        "تتظاهر المتلازمة بنوبات احمرار فجائي بالوجه والرقبة (Flushing)، إسهال مائي مزمن، وتضيق قصبي ربوي، وتلف صمامات القلب اليمنى.",
        "يشخص مخبرياً بقياس ناتج أيض السيروتونين في البول على مدار 24 ساعة وهو حمض (5-HIAA)، ويعالج بمشابهات السوماتوستاتين (Octreotide)."
      ],
      English: [
        "A well-differentiated, indolent neuroendocrine neoplasm derived from enterochromaffin cells, most frequently residing in the appendix, ileum, and bronchi.",
        "Actively secretes vasoactive biogenic amines, predominantly massive quantities of serotonin (5-HT), histamine, and prostaglandins.",
        "The classic clinical syndrome erupts strictly once hepatic metastases develop, bypassing liver first-pass metabolic serotonin degradation.",
        "Features the classic clinical tetrad: paroxysmal cutaneous flushing of the face, secretory explosive diarrhea, wheezing, and right-sided tricuspid fibrosis.",
        "Confirmed biochemically through elevated 24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA); medically managed with octreotide somatostatin analogues."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تكاثر خبيث بطيء لخلايا الغدد العصبية الصماء المعوية يفرز السيروتونين والوسائط الوعائية مباشرة إلى الدورة الدموية.",
        goldStandard: "ارتفاع مستويات حمض 5-HIAA في تجميع بول 24 ساعة مع التصوير بالنظائر المشعة للمستقبلات السوماتوستاتينية (OctreoScan / Gallium-68 DOTATATE).",
        firstLineRx: "الاستئصال الجراحي للكتلة الأولية ونقائل الكبد، مع الحقن المنتظم لمشابهات السوماتوستاتين (Octreotide) لتثبيط الأعراض وإبطاء النمو.",
        keyDifferentiator: "نوبات الاحمرار الجلدي الفجائي المفاجئ المترافقة مع إسهال مائي مستمر وأضرار في صمامات القلب اليمنى."
      },
      English: {
        etiology: "Neoplastic neuroendocrine proliferation dumping high-affinity serotonin and vasoactive kinins escaping hepatic monoamine oxidase breakdown.",
        goldStandard: "Markedly elevated 24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA) paired with somatostatin receptor PET imaging (68Ga-DOTATATE).",
        firstLineRx: "Surgical cytoreduction of primary and hepatic tumors, backed by long-acting somatostatin receptor analogues (octreotide/lanreotide).",
        keyDifferentiator: "Paroxysmal dramatic episodic facial flushing and chronic secretory diarrhea triggered by systemic serotonin flooding."
      }
    }
  },
  {
    word: {
      id: 'w615',
      word: { Arabic: 'ليمفوما بوركيت', English: 'Burkitt Lymphoma' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Oncology', 'Hematology', 'Pediatrics'],
      synonyms: ['ليمفوما بوركيت', 'ورم بوركيت اللمفاوي', 'Burkitt Lymphoma'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "أسرع الأورام البشرية نمواً وانقساماً على الإطلاق، حيث يتضاعف حجم كتلته الورمية خلال أقل من 24 ساعة ومؤشر تكاثره Ki-67 يقارب 100%.",
        "يرتبط انتقالياً بطفرة إزفاء مميزة جداً t(8;14) تؤدي إلى فرط تعبير الجين الورمي المحفز للنمو (c-MYC) تحت تأثير محفز الجينات المناعية.",
        "النوع المتوطن في إفريقيا يرتبط بفيروس إبشتاين-بار (EBV) ويظهر ككتلة ضخمة مشوهة سريعة النمو في عظام الفك والوجه عند الأطفال.",
        "النوع غير المتوطن (العشوائي) يصيب عادة منطقة البطن حول الأعور واللفائفي مسبباً آلاماً حادة وانسداداً في الأمعاء.",
        "الفحص المجهري يظهر منظراً باثولوجياً كلاسيكياً يسمى السماء المرصعة بالنجوم (Starry sky pattern) بسبب التهام البلاعم للخلايا الميتة."
      ],
      English: [
        "The fastest-growing human malignancy known, boasting cellular doubling times under 24 hours and a proliferative Ki-67 growth fraction nearing 100%.",
        "Defined cytogenetically by reciprocal translocation t(8;14) translocating the c-MYC proto-oncogene downstream of the heavy-chain Ig promoter.",
        "Endemic African forms are universally driven by Epstein-Barr virus (EBV), presenting as a rapidly expanding disfiguring pediatric jaw/mandibular mass.",
        "Sporadic Western variants present primarily as a rapidly expanding abdominal or ileocecal mass presenting with pain or bowel intussusception.",
        "Histopathology displays the iconic 'starry-sky appearance', wherein tingible-body macrophages digesting apoptotic debris stand out against sheets of basophilic blasts."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انتقال صبغي متوازن t(8;14) يضع الجين المسرطن c-MYC تحت سيطرة محفز الأجسام المضادة مع ارتباط وثيق بفيروس EBV.",
        goldStandard: "الخزعة النسيجية التي تظهر نمط السماء المرصعة بالنجوم مع فحص التهجين الموضعي (FISH) لتأكيد انتقال الجين c-MYC.",
        firstLineRx: "العلاج الكيميائي المكثف متعدد الأدوية قصير الأمد بجرعات عالية (بروتوكول CODOX-M/IVAC) مع ريتوكسيماب والحماية العصبية.",
        keyDifferentiator: "معدل انقسام يقارب 100%، ومظهر السماء المرصعة بالنجوم مجهرياً، والكتلة الفكية سريعة الانفجار في طفل إفريقي."
      },
      English: {
        etiology: "Constitutive overexpression of the c-MYC nuclear transcription factor driven by the reciprocal chromosomal translocation t(8;14)(q24;q32).",
        goldStandard: "Tissue biopsy establishing high-grade B-cell morphology with 'starry-sky' pattern and interphase FISH demonstrating c-MYC gene rearrangement.",
        firstLineRx: "Intensive, high-dose, short-cycle multi-agent chemotherapy regimens (CODOX-M/IVAC) combined with rituximab and vigorous tumor lysis prophylaxis.",
        keyDifferentiator: "Unmatched Ki-67 proliferation index of ~100%, microscopic starry-sky architecture, and rapid expansion of pediatric jaw or abdominal tumors."
      }
    }
  }
];
