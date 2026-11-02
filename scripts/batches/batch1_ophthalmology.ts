import { WordExpansionEntry } from './types';

export const OPHTHALMOLOGY_EXPANSION: WordExpansionEntry[] = [
  {
    word: {
      id: 'w517',
      word: { Arabic: 'التهاب الملتحمة', English: 'Conjunctivitis' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Infectious Diseases', 'Pediatrics'],
      synonyms: ['التهاب الملتحمة', 'الرمد', 'احمرار العين المعدي', 'العين الوردية', 'pink eye'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "التهاب شائع جداً يصيب الغشاء المخاطي الشفاف المبطن للجفون والمغطي لصلبة العين.",
        "يظهر باحمرار صريح في بياض العين مع حكة شديدة وإفرازات مائية أو قيحية تلتصق بها الجفون صباحاً.",
        "النوع الفيروسي منه غالباً ما تسببه الفيروسات الغدية (Adenovirus) ويرتبط بضخامة العقد اللمفاوية أمام الأذن.",
        "النوع البكتيري يفرز صديداً مائلاً للصفرة ويعالج بقطرات المضادات الحيوية الموضعية مثل التوبراميسين.",
        "النوع التحسسي يتميز بحكة عينية لا تطاق مع تورم الجفون ويستجيب لمضادات الهيستامين ومثبتات الخلايا البدينة."
      ],
      English: [
        "Diffuse hyperemia and inflammation involving the transparent mucous membrane lining the inner eyelids and anterior sclera.",
        "Classically presents with ocular injection, gritty sensation, and morning eyelid crusting with discharge.",
        "Viral etiologies are frequently driven by adenoviruses, typically featuring preauricular lymphadenopathy.",
        "Bacterial forms produce thick mucopurulent discharge that clears with topical broad-spectrum fluoroquinolones or aminoglycosides.",
        "Allergic variants present with intense pruritus, bilateral chemosis, and seasonal exacerbations responsive to topical mast cell stabilizers."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى فيروسية (Adenovirus) أو بكتيرية أو استجابة تحسسية تصيب الغشاء المبطن للجفن والصلبة.",
        goldStandard: "التشخيص السريري بالفحص بالمصباح الشقي (Slit Lamp) مع مسحة الإفرازات في الحالات المعقدة.",
        firstLineRx: "كمادات باردة وقطرات ترطيب للفيروسي، ومضادات حيوية موضعية للبكتيري، ومضادات هيستامين للتحسسي.",
        keyDifferentiator: "يتميز بسلامة حدة الإبصار تماماً وعدم تأثر استجابة الحدقة للضوء بخلاف التهاب القزحية."
      },
      English: {
        etiology: "Viral (adenovirus), bacterial, or allergen-mediated inflammatory reaction of the ocular mucous coat.",
        goldStandard: "Clinical evaluation on slit-lamp biomicroscopy; swabs and bacterial cultures reserved for refractory presentations.",
        firstLineRx: "Supportive cold compresses and artificial tears for viral, topical antibiotics for bacterial, topical antihistamines for allergic.",
        keyDifferentiator: "Visual acuity and pupillary light reflexes remain completely intact, distinguishing it from uveitis or acute glaucoma."
      }
    }
  },
  {
    word: {
      id: 'w518',
      word: { Arabic: 'اللابؤرية', English: 'Astigmatism' },
      level: 'Academic',
      difficulty: 2,
      type: 'Other',
      subjects: ['Ophthalmology', 'Physiology'],
      synonyms: ['اللابؤرية', 'الاستجماتيزم', 'انحراف النظر', 'حرج البصر'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "عيب انكساري في العين ناجم عن عدم انتظام انحناء القرنية أو العدسة في المستويات المختلفة.",
        "بدلاً من تركيز الضوء في نقطة بؤرية دقيقة واحدة على الشبكية، تتشكل نقطتان بؤريتان منفصلتان.",
        "يشبه شكل القرنية المصابة به كرة الركبي البيضاوية بدلاً من الكرة المستديرة تماماً.",
        "يعاني المصاب من تشوش الرؤية وازدواجيتها الخفيفة وإجهاد العين والصداع عند التركيز في القراءة.",
        "يتم تصحيحه طبياً باستخدام عدسات أسطوانية (Cylindrical lenses) أو جراحة الليزك."
      ],
      English: [
        "A common refractive error caused by an asymmetric or toric curvature of the anterior refracting optical surface.",
        "Light rays entering the eye in orthogonal meridians fail to converge onto a single focal point upon the sensory retina.",
        "The corneal geometry resembles the steep-and-flat contours of a rugby ball rather than a spherical dome.",
        "Clinical manifestations include meridional blurring, ghosting of characters, visual fatigue, and frontal cephalalgia.",
        "Optically corrected utilizing toric or cylindrical spectacle lenses or customized topography-guided refractive keratectomy."
      ]
    }
  },
  {
    word: {
      id: 'w519',
      word: { Arabic: 'الحول', English: 'Strabismus' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Neurology', 'Pediatrics'],
      synonyms: ['الحول', 'انحراف العينين', 'العين المتصالبة', 'crossed eyes', 'squint'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "اضطراب في المحاذاة الحركية بين العينين حيث لا تنظر كلتا المقلتين إلى نفس النقطة في وقت واحد.",
        "يحدث نتيجة خلل في التوازن بين العضلات خارج المقلة الستة أو إصابة الأعصاب القحفية المغذية لها (III, IV, VI).",
        "قد يكون الانحراف للداخل (الإنسي Esotropia) أو للخارج (الوحشي Exotropia) أو للأعلى.",
        "إهمال علاجه في الطفولة المبكرة يؤدي لفقدان دائم في القدرة البصرية يعرف بكسل العين (Amblyopia).",
        "يقيّم باختبار التغطية والكشف (Cover-uncover test) ويعالج بالنظارات أو تغطية العين السليمة أو الجراحة."
      ],
      English: [
        "A binocular ocular alignment disorder wherein the visual axes do not intersect simultaneously at the fixation point.",
        "Results from neuromuscular dysfunction of the six extraocular muscles or cranial nerve palsies (CN III, IV, or VI).",
        "Subclassified based on deviation vector into convergent, divergent, hypertropic, or hypotropic manifest misalignments.",
        "Failure to correct the deviation during childhood neurodevelopment leads directly to cortical amblyopia.",
        "Diagnosed with the prism cover test and Hirschberg corneal light reflex; managed with occlusion patching, prisms, or muscle resection."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل في التنسيق العضلي الحركي العيني أو شلل بأحد الأعصاب القحفية الثالث أو الرابع أو السادس.",
        goldStandard: "فحص قياس درجات الانحراف باستخدام الموشور واختبار التغطية التبادلي (Prism Cover Test).",
        firstLineRx: "تصحيح العيوب الانكسارية بالنظارات، وتغطية العين القوية لعلاج الكسل، أو تصحيح شد العضلات جراحياً.",
        keyDifferentiator: "يُحدث غياباً في التناظر المتزامن لانعكاس الضوء على قرنيتي العينين (Hirschberg Reflex)."
      },
      English: {
        etiology: "Extraocular muscle imbalance, uncorrected high hyperopia, or cranial nerve paresis disrupting binocular fusion.",
        goldStandard: "Quantitative alternate and prism cover testing alongside Hirschberg corneal reflex photography.",
        firstLineRx: "Optical refractive correction, part-time penalization/patching of the dominant eye, and surgical muscle repositioning.",
        keyDifferentiator: "Characterized by asymmetrical displacement of the corneal light reflection when focusing on a penlight."
      }
    }
  },
  {
    word: {
      id: 'w520',
      word: { Arabic: 'قرحة القرنية', English: 'Corneal Ulcer' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Infectious Diseases', 'Emergency Medicine'],
      synonyms: ['قرحة القرنية', 'تقرح القرنية', 'Corneal Ulcer'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "حالة طارئة في طب العيون تتمثل في تآكل عميق بنسيج النسيج الطلائي واللحمة الأمامية لسطح العين.",
        "تنتج عادة عن عدوى بكتيرية كبكتيريا الزائفة الزنجارية (Pseudomonas) المرتبطة بالعدسات اللاصقة.",
        "يشكو المريض من ألم مبرح، وخوف شديد من الضوء (Photophobia)، وإحساس بوجود جسم غريب ونقص حاد في الرؤية.",
        "تصبغ بصبغة الفلورسين الصفراء تحت ضوء الكوبالت الأزرق لتظهر كمنطقة مضيئة خضراء متهتكة.",
        "قد يرافقها تراكم صديد في الغرفة الأمامية للعين (Hypopyon) وتتطلب مضادات حيوية مكثفة لتجنب الانثقاب."
      ],
      English: [
        "An ophthalmologic emergency characterized by an epithelial defect with underlying stromal infiltration and necrosis.",
        "Pseudomonas aeruginosa infection secondary to overnight contact lens wear is an aggressive and common pathogen.",
        "Patients experience severe deep ocular agony, photophobia, foreign body sensation, and rapid vision decline.",
        "Topical fluorescein application reveals sharply demarcated green luminescence over the stromal defect under cobalt blue filter.",
        "Complicated by hypopyon in the anterior chamber, requiring immediate fortified topical antibiotic drops to avert globe perforation."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى بكتيرية (خاصة الزائفة في مستخدمي العدسات) أو فطرية أو فيروسية تحدث بعد خدش طلائي للقرنية.",
        goldStandard: "صبغة الفلورسين تحت الضوء الأزرق بالمصباح الشقي مع كشط قاع الآفة وإجراء مزرعة ميكروبية.",
        firstLineRx: "قطرات مضادات حيوية مكثفة مدعمة (Fortified Antibiotics مثل فانكوميسين وتوبراميسين) كل ساعة.",
        keyDifferentiator: "تسبب عتامة بيضاء مرئية بالقرنية مع تجمع صديدي صريح في قاع الغرفة الأمامية (Hypopyon)."
      },
      English: {
        etiology: "Bacterial, fungal, or Acanthamoeba stromal invasion following epithelial breakdown, often linked to soft contact lenses.",
        goldStandard: "Slit-lamp examination with fluorescein staining, accompanied by corneal scraping for Gram stain and culture.",
        firstLineRx: "Hourly fortified topical antibacterial drops (e.g., tobramycin and vancomycin or high-potency fluoroquinolones).",
        keyDifferentiator: "Directly visible focal white stromal infiltrate often associated with an anterior chamber sterile hypopyon."
      }
    }
  },
  {
    word: {
      id: 'w521',
      word: { Arabic: 'التهاب القزحية', English: 'Uveitis' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Immunology', 'Rheumatology'],
      synonyms: ['التهاب القزحية', 'التهاب العنبية', 'التهاب باطن العين المناعي', 'Uveitis'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "التهاب يصيب الطبقة الوعائية المصطبغة المتوسطة من مقلة العين والتي تشمل القزحية والجسم الهدبي والمشيمية.",
        "يرتبط ارتباطاً وثيقاً بأمراض المناعة الذاتية وجينات مستضد الكريات البيضاء (HLA-B27) كالتهاب الفقار اللاصق.",
        "يتميز بوجود احتقان هدبي circumcorneal injection حول حافة القرنية مع ضيق في الحدقة وألم يزداد عند محاولة التركيز.",
        "الفحص بالمجهر الشقي يكشف خلايا بيضاء طافية وبروتين في الخلط المائي يشبه الدخان في شعاع الضوء (Tyndall flare).",
        "يعالج بقطرات الكورتيكوستيرويدات الموضعية وقطرات توسيع الحدقة (Mydriatics) لمنع تكون الالتصاقات الخلفية."
      ],
      English: [
        "Inflammation targeting the vascular pigmented middle tunic of the eye, encompassing the iris, ciliary body, and choroid.",
        "Frequently associated with systemic autoinflammatory disorders, particularly HLA-B27 spondyloarthropathies and sarcoidosis.",
        "Exhibits circumcorneal ciliary flush, painful accommodation, photophobia, and a sluggish or miotic pupil.",
        "Slit-lamp biomicroscopy demonstrates keratic precipitates on the endothelium and inflammatory cells floating like dust in light.",
        "Primary management hinges on intensive topical corticosteroids paired with cycloplegic drops to prevent posterior synechiae."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "خلل مناعي ذاتي مرتبط بـ HLA-B27 وداء بهجت والغرناوية، أو عدوى كالهربس والزهري.",
        goldStandard: "الفحص بالمصباح الشقي لإثبات وجود خلايا التهابية ووميض بروتيني (Cells and Flare) في الغرفة الأمامية.",
        firstLineRx: "قطرات الستيرويدات الموضعية القوية بجرعات متقاربة مع قطرات موسعة ومشلة للعضلة الهدبية (Cyclopentolate).",
        keyDifferentiator: "يحدث احتقاناً وعائياً عميقاً حول القرنية مباشرة (Ciliary flush) مع التصاقات قزحية بالعدسة وتغير شكل الحدقة."
      },
      English: {
        etiology: "Autoimmune dysregulation linked to HLA-B27, Behçet disease, or sarcoidosis, occasionally triggered by viral or treponemal agents.",
        goldStandard: "High-magnification slit-lamp biomicroscopy establishing inflammatory anterior chamber cells and proteinaceous flare.",
        firstLineRx: "Intensive topical corticosteroid regimens combined with cycloplegic agents to relieve ciliary spasm and prevent synechiae.",
        keyDifferentiator: "Displays deep violaceous perilimbal ciliary injection and irregularly shaped pupil due to posterior adhesions."
      }
    }
  },
  {
    word: {
      id: 'w522',
      word: { Arabic: 'قصر النظر', English: 'Myopia' },
      level: 'Academic',
      difficulty: 1,
      type: 'Other',
      subjects: ['Ophthalmology', 'Physiology'],
      synonyms: ['قصر النظر', 'حسر النظر', 'قصر البصر', 'Nearsightedness'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "أكثر العيوب الانكسارية شيوعاً حيث يرى الشخص الأجسام القريبة بوضوح بينما تبدو الأجسام البعيدة مشوشة وضبابية.",
        "يحدث نتيجة استطالة المحور الأمامي الخلفي لمقلة العين أو زيادة مفرطة في القوة الكاسرة للقرنية والعدسة.",
        "تتجمع أشعة الضوء المنكسرة أمام الشبكية بدلاً من التركيز الدقيق على سطحها.",
        "يقوم المصاب بتضييق جفنيه لا شعورياً لتوليد فتحة صغيرة (Pinhole effect) لتحسين وضوح الرؤية البعيدة.",
        "يتم تصحيحه باستخدام عدسات كروية مقعرة مفرقة (Concave lenses) ذات قوة سالبة."
      ],
      English: [
        "A highly prevalent refractive condition wherein proximal objects are resolved sharply while distant targets appear blurred.",
        "Arises when the anteroposterior axial length of the globe is excessively prolonged relative to optical refractive power.",
        "Parallel rays of incident light focus into a convergent focal plane anterior to the light-sensitive sensory retina.",
        "Patients habitually squint their palpebral fissures to exploit the pinhole optical aperture effect and sharpen distant images.",
        "Optically compensated by employing divergent concave (minus-diopter) lenses or photorefractive keratectomy."
      ]
    }
  },
  {
    word: {
      id: 'w523',
      word: { Arabic: 'طول النظر', English: 'Hyperopia' },
      level: 'Academic',
      difficulty: 1,
      type: 'Other',
      subjects: ['Ophthalmology', 'Physiology'],
      synonyms: ['طول النظر', 'مد البصر', 'بعد النظر', 'Farsightedness'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "عيب انكساري يستطيع فيه الشخص رؤية الأشياء البعيدة أفضل بكثير من قدرته على تمييز الأشياء القريبة.",
        "يحدث عندما تكون مقلة العين أقصر من الطبيعي أو عندما تكون قوة انكسار القرنية والعدسة ضعيفة ومسطحة.",
        "تسقط بؤرة تركيز الأشعة الضوئية في نقطة افتراضية تقع خلف شبكية العين.",
        "يتطلب من المريض إجهاداً مستمراً في عضلة التكيف الهدبية مما يسبب إرهاق العين والصداع بعد القراءة المطولة.",
        "يعالج ويصحح باستخدام عدسات كروية محدبة مجمعة (Convex lenses) ذات قوة قياس موجبة."
      ],
      English: [
        "A refractive disorder characterized by relative clarity of distant objects alongside distinct difficulty focusing on near tasks.",
        "Mechanistically stems from an abnormally shortened ocular axial length or insufficient corneal-lenticular refractive power.",
        "The focal point of incoming parallel light waves is positioned virtually behind the anatomic plane of the retina.",
        "Mandates constant compensatory accommodative tone in younger patients, leading to asthenopia and brow-ache after reading.",
        "Corrected through the application of convergent convex (plus-diopter) spectacle lenses or surgical refractive correction."
      ]
    }
  },
  {
    word: {
      id: 'w524',
      word: { Arabic: 'طول النظر الشيخوخي', English: 'Presbyopia' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Other',
      subjects: ['Ophthalmology', 'Physiology', 'General Medicine'],
      synonyms: ['طول النظر الشيخوخي', 'قصر البصر الشيخوخي', 'مد البصر الكبري', 'Presbyopia'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "فقدان فسيولوجي تدريجي بقدرة العين على المطابقة والتكيف البصري يظهر طبيعياً بعد سن الأربعين.",
        "ينتج عن فقدان العدسة البلورية لمرونتها وتصلب نواتها، مع ضعف تدريجي في مرونة الجسم الهدبي.",
        "يضطر المصاب إلى مد ذراعه وإبعاد الهاتف أو الكتاب لمسافة بعيدة ليتمكن من قراءة الكلمات الدقيقة.",
        "لا يعتبر مرضاً بل هو تغير فيزيولوجي حتمي مرتبط بعملية التقدم الطبيعي في السن لجميع البشر.",
        "يحل ببساطة بارتداء نظارات قراءة محدبة مخصصة للمسافات القريبة أو عدسات ثنائية البؤرة (Bifocal)."
      ],
      English: [
        "A universal physiological decline in ocular accommodative amplitude that typically manifests clinically after age 40.",
        "Underpinned by age-related loss of crystalline lens elasticity and sclerosis of lens nuclear fibers.",
        "Individuals characteristically hold reading material and digital devices at arm's length to bring small text into focus.",
        "Represents a benign universal aging phenomenon rather than a pathological refractive aberration.",
        "Readily remedied using positive-power reading spectacles, progressive addition lenses, or monovision contact lenses."
      ]
    }
  },
  {
    word: {
      id: 'w525',
      word: { Arabic: 'التهاب الجفن', English: 'Blepharitis' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Dermatology'],
      synonyms: ['التهاب الجفن', 'التهاب حافة الجفن', 'Blepharitis'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "التهاب مزمن وشائع جداً يصيب حواف الجفون في منابت الرموش ومخارج غدد ميبوميوس الدهنية.",
        "ينقسم لنوع أمامي ترتبط به بكتيريا العنقوديات وقشور الرموش، ونوع خلفي ناجم عن انسداد الغدد الدهنية.",
        "يصاحبه شعور بالحرقة وجفاف العين، وإحساس برمل داخل الجفن، وسقوط الرموش أو تشوه نموها.",
        "يترافق بكثرة مع أمراض جلدية مزمنة كالوردية (Rosacea) والتهاب الجلد الدهني (Seborrheic dermatitis).",
        "يعتمد علاجه الأساسي على النظافة الصارمة لحافة الجفن بشامبو أطفال مخفف وكمادات دافئة وتدليك الغدد."
      ],
      English: [
        "A chronic, recurrent inflammatory disease affecting the eyelid margins, eyelash follicles, and meibomian gland orifices.",
        "Categorized into anterior variants often colonized by staphylococci and posterior variants tied to meibomian gland dysfunction.",
        "Elicits burning, ocular grittiness, hyperemic lid collars, dandruff-like flaking along lashes, and secondary dry eye.",
        "Demonstrates significant clinical overlap with dermatologic conditions including rosacea and seborrheic dermatitis.",
        "Foundation of treatment consists of dedicated lid hygiene, warm compresses, meibomian expression, and topical azithromycin."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "فرط نمو بكتيريا المكورات العنقودية أو انسداد غدد ميبوميوس الدهنية واختلال إفرازاتها.",
        goldStandard: "فحص حواف الجفون بالمصباح الشقي لاكتشاف سدادات الدهون أو قشور الأسطوانية للرموش (Collarettes).",
        firstLineRx: "كمادات دافئة وتدليك حواف الجفون بانتظام مع تنظيف منابت الرموش بقطن ومحلول منظف مخصص.",
        keyDifferentiator: "التهاب موضعي مقتصر على أطراف الجفن لا يسبب عتامة بالقرنية ولا يؤثر على سلامة رد الفعل الحدقي."
      },
      English: {
        etiology: "Staphylococcal colonization, meibomian lipid stagnation, or Demodex mite proliferation along the eyelash follicles.",
        goldStandard: "Slit-lamp examination revealing thickened lid margins, plugged meibomian orifices, and cylindrical lash collarettes.",
        firstLineRx: "Consistent eyelid hygiene routines, thermal compress therapy, and vertical eyelid margin massage.",
        keyDifferentiator: "Isolated strictly to the palpebral border, preserving visual acuity and pupillary dynamics entirely."
      }
    }
  },
  {
    word: {
      id: 'w526',
      word: { Arabic: 'القرنية', English: 'Cornea' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy', 'Physiology'],
      synonyms: ['القرنية', 'قرنية العين', 'نافذة العين الأمامية', 'Cornea'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الطبقة الشفافة المقوسة الواقعة في الجزء الأمامي من مقلة العين والتي تسمح بمرور الضوء إلى الداخل.",
        "تعد أقوى وسط كاسر للضوء في الجهاز البصري حيث تساهم بنحو ثلثي إجمالي القوة الانكسارية للعين (نحو 43 ديوبتر).",
        "تتكون من خمس طبقات نسيجية رئيسية (الطلائية، بومان، اللحمة، ديسميه، والبطانية)، وتعتبر خالية تماماً من الأوعية الدموية.",
        "تحصل على الأكسجين والمغذيات مباشرة من الهواء الجوي الخارجي ومن السائل المائي في الغرفة الأمامية.",
        "تمتلك أعلى كثافة من النهايات العصبية الحسية للألم في جسم الإنسان مما يجعل أي خدش بسيط بها مبرحاً."
      ],
      English: [
        "The transparent, convex avascular structure forming the anterior one-sixth of the outer fibrous tunic of the globe.",
        "Accounts for approximately two-thirds of the total refractive power of the human eye (roughly 40 to 44 diopters).",
        "Histologically organized into five distinct strata: epithelium, Bowman layer, stroma, Descemet membrane, and endothelium.",
        "Maintains total avascular deturgescence, deriving metabolic oxygen directly from the tear film and anterior chamber aqueous humor.",
        "Possesses the highest concentration of sensory nerve endings in the entire human body via the ophthalmic division of CN V."
      ]
    }
  },
  {
    word: {
      id: 'w527',
      word: { Arabic: 'الشبكية', English: 'Retina' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy', 'Physiology', 'Neurology'],
      synonyms: ['الشبكية', 'شبكية العين', 'الطبقة الحساسة للضوء', 'Retina'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الطبقة العصبية الداخلية المبطنة للجدار الخلفي لمقلة العين والمسؤولة عن تحويل الموجات الضوئية إلى إشارات كهروعصبية.",
        "تحتوي على نوعين رئيسيين من المستقبلات الضوئية: العصي (Rods) للرؤية الليلية والمخاريط (Cones) للألوان ودقة التفاصيل.",
        "تتصل بالألياف العصبية التي تلتقي لتشكل العصب القحفي الثاني الذي ينقل الإشارات إلى القشرة البصرية بالمخ.",
        "تتغذى ترويتها الدموية من الشريان المركزي المتفرع من الشريان العيني عبر فتحة القرص البصري.",
        "فحصها المباشر بمنظار قاع العين هو النافذة الوحيدة في جسم الإنسان التي تتيح رؤية الأوعية الدموية الدقيقة مباشرة دون جراحة."
      ],
      English: [
        "The neurosensory internal tunic of the globe that phototransduces incoming photons into electromechanical nerve impulses.",
        "Houses two specialized photoreceptor classes: rods for scotopic low-light vision and cones for color and high-resolution photopic vision.",
        "Axons of its ganglion cell layer converge at the optic nerve head, transmitting coded visual information to the occipital cortex.",
        "Receives vascular supply through the central retinal artery and the underlying choriocapillaris across 10 histogenetic layers.",
        "Direct ophthalmoscopy of its surface provides the only non-invasive clinical window to directly inspect human microvasculature."
      ]
    }
  },
  {
    word: {
      id: 'w528',
      word: { Arabic: 'العنبية', English: 'Iris' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy'],
      synonyms: ['العنبية', 'قزحية العين', 'الحدقة والملونة', 'Iris'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الغشاء الملون الحلقي الواقع بين القرنية والعدسة، والذي يحدد لون عين الشخص بحسب تركيز صبغة الميلانين.",
        "يحتوي في مركزه على فتحة دائرية قابلة للتغير تعرف بالحدقة (بؤبؤ العين) للتحكم في كمية الضوء الداخلة.",
        "تضم نوعين من العضلات الملساء: العضلة المضيقّة الحلقية (السمبثاوية) والعضلة الموسعة الشعاعية.",
        "تفصل بين الغرفة الأمامية والغرفة الخلفية لمقلة العين وتسمح بتدفق السائل المائي عبر ثقبها الأوسط.",
        "تمتلك بصمة نسيجية فريدة بالغة التعقيد تستخدم في أنظمة التحقق البيومترية كبصمة العين الأمنية."
      ],
      English: [
        "The circular pigmented contractile diaphragm positioned in the aqueous space between the anterior cornea and crystalline lens.",
        "Features a variable central aperture (the pupil) that modulates the volume of luminous flux reaching the retina.",
        "Contains two intrinsic smooth muscle groups: the parasympathetically innervated sphincter pupillae and the sympathetic dilator pupillae.",
        "Anatomically partitions the anterior and posterior chambers, allowing free trans-pupillary passage of aqueous humor.",
        "Exhibits a chaotic, highly stable stroma-crypt pattern utilized worldwide as an unalterable biometric identification modality."
      ]
    }
  },
  {
    word: {
      id: 'w529',
      word: { Arabic: 'السائل الزجاجي', English: 'Vitreous Humor' },
      level: 'Academic',
      difficulty: 2,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy'],
      synonyms: ['السائل الزجاجي', 'الجسم الزجاجي', 'الخلط الزجاجي', 'Vitreous Humor', 'Vitreous body'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "كتلة هلامية شفافة تملأ الفراغ الكبير الواقع بين العدسة وشبكية العين في الحجرة الخلفية للمقلة.",
        "يشكل نحو 80% من الحجم الكلي لكرة العين ويحافظ على شكلها الكروي ويثبت الشبكية في موضعها مقابل المشيمية.",
        "يتكون من 99% ماء مع شبكة دقيقة من ألياف الكولاجين من النوع الثاني وحمض الهيالورونيك اللزج.",
        "مع التقدم في السن يخضع لعملية تسييل (Syneresis) قد تؤدي لانفصاله عن الشبكية وظهور خيوط طافية (ذباب طائر).",
        "في جراحات العيون المعقدة والنزيف يمكن استئصاله واستبداله بغاز طبي أو زيت السيليكون (Vitrectomy)."
      ],
      English: [
        "An inert, optically clear hydrogel substance filling the posterior four-fifths of the globe between the lens and retinal plane.",
        "Constitutes roughly 80% of total ocular volume, providing structural support to preserve spherical geometry and retinal apposition.",
        "Composed predominantly of 99% water scaffolded within an extracellular network of type II collagen fibrils and hyaluronic acid.",
        "Undergoes age-related liquefaction and collapse (syneresis), often precipitating posterior detachment perceived as entoptic floaters.",
        "Can be surgically aspirated and replaced with balanced salt solutions, intraocular gas tampanodes, or silicone oil in vitrectomy."
      ]
    }
  },
  {
    word: {
      id: 'w530',
      word: { Arabic: 'الصلبة', English: 'Sclera' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy'],
      synonyms: ['الصلبة', 'صلبة العين', 'بياض العين', 'Sclera'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الغلاف الخارجي الليفي الأبيض القوي الذي يغطي الخمسة أسداس الخلفية من مقلة العين.",
        "تتكون من نسيج ضام كثيف غني بألياف الكولاجين المتشابكة بطريقة عشوائية معتمة تعطيها لونها الأبيض الناصع.",
        "توفر الحماية الميكانيكية لمحتويات العين الداخلية الدقيقة وتحافظ على ثبات الضغط داخل المقلة.",
        "تلتصق بسطحها الخارجي أوتار العضلات خارج المقلة الست المسؤولة عن تحريك العين في كافة الاتجاهات.",
        "يتغير لونها للأصفر الفاقع في حالات اليرقان الكبدي (Jaundice) نتيجة ألفة نسيجها الإيلاستيني الشديدة للبيليروبين."
      ],
      English: [
        "The dense, opaque, tough fibrous outer protective layer covering approximately five-sixths of the posterior eyeball.",
        "Histologically structured from irregularly woven collagen type I bundles that scatter light, creating its distinct white appearance.",
        "Maintains ocular mechanical structural integrity, resisting deformational stress and sustaining intraocular pressure.",
        "Serves as the precise anatomic insertion platform for the tendons of all six voluntary extraocular movement muscles.",
        "Demonstrates striking yellow discoloration (icterus) during systemic hyperbilirubinemia due to high elastin-bilirubin tropism."
      ]
    }
  },
  {
    word: {
      id: 'w531',
      word: { Arabic: 'الملتحمة', English: 'Conjunctiva' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy'],
      synonyms: ['الملتحمة', 'ملتحمة العين', 'غشاء العين المخاطي', 'Conjunctiva'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "غشاء مخاطي شفاف رقيق يبطن السطح الداخلي للجفون وينعكس ليغطي الجزء الأمامي من صلبة العين.",
        "ينقسم تشريحياً إلى جزء جفني (Palpebral)، وجزء بصلبي يغطي بياض العين، وقبو واصل بينهما (Fornix).",
        "يحتوي على خلايا كأسية (Goblet cells) تفرز طبقة الميوسين اللزجة الأساسية لتثبيت الدموع على القرنية.",
        "غني بالأوعية الدموية الدقيقة والأنسجة اللمفاوية التي تلعب دوراً دفاعياً مناعياً أولياً لحماية المقلة.",
        "يحدث به احتقان شديد وسيلان في نزلات البرد وحالات التحسس الشائعة ويعرف التهابه بالرمد."
      ],
      English: [
        "A delicate, vascularized transparent mucous membrane lining the inner eyelids and folding back over the anterior sclera.",
        "Subdivided anatomically into palpebral, bulbar, and fornix zones ending circumferentially at the corneal limbus.",
        "Houses mucin-secreting goblet cells essential for fabricating the basal hydrophilic layer of the precorneal tear film.",
        "Endowed with an extensive microvascular network and mucosal-associated lymphoid tissue mediating ocular surface immunity.",
        "Exhibits pronounced vasodilation and chemosis in response to pathogens or allergens, a hallmark of pink eye reactions."
      ]
    }
  },
  {
    word: {
      id: 'w532',
      word: { Arabic: 'العدسة', English: 'Lens' },
      level: 'Academic',
      difficulty: 1,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy', 'Physiology'],
      synonyms: ['العدسة', 'عدسة العين', 'العدسة البلورية', 'Crystalline Lens'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "عضو كروي ثنائي التحدب ومرن يقع مباشرة خلف القزحية وأمام الجسم الزجاجي في العين.",
        "مسؤول عن قوة الانكسار المتغيرة في العين من خلال عملية المطابقة (Accommodation) للتركيز على المسافات المختلفة.",
        "معلق في مكانه بواسطة ألياف دقيقة تسمى خيوط الزونول (Zonules) المتصلة بعضلات الجسم الهدبي.",
        "خالٍ تماماً من الأوعية الدموية والأعصاب ويعتمد في تغذيته وشفافيته على السائل المائي المحيط به.",
        "عتامته التدريجية مع التقدم في السن أو السكري تعرف بالمياه البيضاء ويتم استبداله بعدسة صناعية جراحياً."
      ],
      English: [
        "A transparent, biconvex, flexible, encapsulated intraocular structure suspended directly behind the iris and pupil aperture.",
        "Enables dynamic optical focus adjustment (accommodation) for proximal objects via ciliary muscle tone modification.",
        "Tethered circumferentially to the ciliary body by delicate radial suspensory ligaments known as the zonules of Zinn.",
        "Completely devoid of intrinsic blood vessels and nerve supplies, relying on aqueous humor diffusion to sustain clarity.",
        "Progressive opacification of its crystalline fibers constitutes cataracts, successfully cured via phacoemulsification."
      ]
    }
  },
  {
    word: {
      id: 'w533',
      word: { Arabic: 'البقعة المركزية', English: 'Macula' },
      level: 'Academic',
      difficulty: 3,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy'],
      synonyms: ['البقعة المركزية', 'اللطخة الصفراء', 'الماكيولا', 'Macula lutea', 'Fovea'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "منطقة مصطبغة صفراء صغيرة شديدة الأهمية تقع بالقرب من مركز شبكية العين مسؤولة عن حدة الإبصار.",
        "تضم في مركزها النقرة المركزية (Fovea centralis) التي تحتوي على أعلى كثافة للمخاريط البصرية في العين.",
        "مسؤولة عن الرؤية المركزية الدقيقة المستخدمة في القراءة وتمييز وجوه الأشخاص وقيادة السيارات والمهام الدقيقة.",
        "تحتوي على صبغات الكاروتينويد (اللوتين والزياكسانثين) التي تحمي الخلايا الحساسة من أضرار الضوء الأزرق.",
        "تلفها التدريجي لدى كبار السن يسبب فقداناً مأساوياً للرؤية المركزية مع الحفاظ على الرؤية المحيطية."
      ],
      English: [
        "An oval, yellowish pigmented area located lateral to the optic disc near the geometric posterior pole of the sensory retina.",
        "Encloses the central fovea, boasting the highest packing density of retinal cone photoreceptors in the human organism.",
        "Directly governs high-acuity central vision indispensable for fine reading, color appreciation, and facial recognition.",
        "Richly imbued with xanthophyll carotenoids (lutein and zeaxanthin) filtering phototoxic high-energy blue wavelengths.",
        "Pathologic degradation in elderly populations impairs central visual fields, hallmark of macular degenerative disorders."
      ]
    }
  },
  {
    word: {
      id: 'w534',
      word: { Arabic: 'القرص البصري', English: 'Optic Disc' },
      level: 'Academic',
      difficulty: 3,
      type: 'Component',
      subjects: ['Ophthalmology', 'Anatomy', 'Neurology'],
      synonyms: ['القرص البصري', 'حليمة العصب البصري', 'رأس العصب البصري', 'Optic Disc', 'Optic nerve head'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "الموقع الدائري على الشبكية الذي تتجمع عنده ألياف العصب القحفي الثاني قبل مغادرتها مقلة العين باتجاه المخ.",
        "يمثل فسيولوجياً النقطة العمياء (Blind spot) في المجال البصري لعدم احتوائه على أي مستقبلات ضوئية.",
        "يخرج من مركزه الشريان الشبكي المركزي ويتفرع، بينما يدخل الوريد الشبكي المركزي عائداً للجمجمة.",
        "تورمه وامتلاء حدوده بسبب ارتفاع ضغط السائل الدماغي الشوكي داخل الجمجمة يعرف بـ (Papilledema).",
        "اتساع التقعر في وسطه وزيادة نسبة الكأس إلى القرص (Cup-to-disc ratio) يعد علامة كلاسيكية للمياه الزرقاء."
      ],
      English: [
        "The circular pale pink retinal landmark where ganglion cell unmyelinated axons coalesce to exit the globe.",
        "Corresponds physiological to the blind spot in visual field topography because it lacks all rods and cone photoreceptors.",
        "Serves as the conduit through which the central retinal artery enters and the central retinal vein exits the posterior pole.",
        "Bilateral margin blurring and elevation induced by intracranial hypertension represents life-threatening papilledema.",
        "Progressive excavation and pathological enlargement of its central cup-to-disc ratio is pathognomonic for glaucoma."
      ]
    }
  },
  {
    word: {
      id: 'w535',
      word: { Arabic: 'عمى الألوان', English: 'Color Blindness' },
      level: 'Academic',
      difficulty: 2,
      type: 'Other',
      subjects: ['Ophthalmology', 'Genetics'],
      synonyms: ['عمى الألوان', 'عجز تمييز الألوان', 'الدلتونية', 'Color Vision Deficiency', 'Daltonism'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "خلل وراثي شائع يتميز بعدم القدرة على التمييز الدقيق بين بعض الألوان، وأشهر أنماطه الخلط بين الأحمر والأخضر.",
        "ينتقل كصفة وراثية متنحية مرتبطة بالصبغي الجنسي X، ولذلك يصيب الذكور بنسبة أعلى بكثير من الإناث (نحو 8%).",
        "ينتج عن غياب أو خلل وظيفي في أصباغ أحد أنواع الخلايا المخروطية الحساسة للضوء في شبكية العين.",
        "يشخص سريرياً بسهولة في العيادات باستخدام ألواح إيشيهارا الشهيرة المكونة من نقاط لونية بداخلها أرقام.",
        "لا يوجد علاج شافي له حالياً، لكن تتوفر نظارات ذات مرشحات بصرية خاصة تساعد على تعزيز تباين الألوان."
      ],
      English: [
        "A hereditary condition characterized by an inability or diminished capacity to accurately differentiate specific color hues.",
        "Transmitted as an X-linked recessive trait, explaining its disproportionately high prevalence in males (approximately 8%).",
        "Pathophysiologically stems from absent or dysfunctional opsin photopigments within red, green, or blue retinal cone cohorts.",
        "Routinely detected during clinical testing using pseudoisochromatic Ishihara plates displaying camouflaged numerals.",
        "Lacks pharmacological cure; managed with lifestyle adaptations and selective spectral filter notch glasses."
      ]
    }
  },
  {
    word: {
      id: 'w536',
      word: { Arabic: 'الرؤية المزدوجة', English: 'Diplopia' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Other',
      subjects: ['Ophthalmology', 'Neurology', 'Emergency Medicine'],
      synonyms: ['الرؤية المزدوجة', 'ازدواج الرؤية', 'ازدواج البصر', 'Diplopia', 'Double Vision'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "شكوى بصرية يرى فيها المريض صورتين متجاورتين أو متراكبتين لشيء واحد في نفس الوقت.",
        "أهم خطوة تشخيصية هي التفريق بين نوع وحيد العين (يستمر عند إغلاق إحدى العينين) وثنائي العينين (يختفي عند إغلاق أي عين).",
        "النوع ثنائي العينين ينجم عن خلل في محاذاة المقلتين بسبب شلل بأحد الأعصاب المحركة للعين (III, IV, VI) أو وهن عضلي.",
        "الظهور المفاجئ له قد يكون علامة إنذار خطيرة على سكتة دماغية، تمدد شرياني دماغي، أو ورم في قاع الجمجمة.",
        "يتم تقييم حركة العينين في الاتجاهات التسعة، ويستخدم منشور بصري في النظارة للتخفيف من تشويش المريض."
      ],
      English: [
        "A distressing visual perception wherein a solitary physical object is seen simultaneously as two duplicated images.",
        "Crucially differentiated by covering one eye: monocular forms persist, whereas binocular misalignment forms resolve instantly.",
        "Binocular variants arise from extraocular muscle dyssynergy or paresis of ocular motor cranial nerves (CN III, IV, or VI).",
        "Hyperacute onset mandates emergency neuroimaging to exclude brainstem stroke, expanding intracranial aneurysm, or neoplasm.",
        "Evaluated with cardinal gaze movement charting; prism spectacles or temporary unilateral occlusion afford functional relief."
      ]
    }
  },
  {
    word: {
      id: 'w537',
      word: { Arabic: 'العمى الليلي', English: 'Nyctalopia' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Other',
      subjects: ['Ophthalmology', 'Biochemistry'],
      synonyms: ['العمى الليلي', 'العشى الليلي', 'صعوبة الرؤية في الظلام', 'Nyctalopia', 'Night Blindness'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "عرض سريري يتمثل في عجز غير طبيعي وصعوبة بالغة في الرؤية عند انخفاض الإضاءة أو أثناء الليل.",
        "يرتبط كلاسيكياً بنقص فيتامين (أ) الضروري لتصنيع صبغة الرودوبسين الحساسة للضوء في خلايا العصي الشبكية.",
        "يعد العرض الباكر والمميز للمرض الوراثي التنكسي المعروف بالتهاب الشبكية الصباغي (Retinitis Pigmentosa).",
        "يجد المصاب صعوبة بالغة في التكيف عند الانتقال من غرفة مضيئة إلى غرفة مظلمة ويخشى قيادة السيارة ليلاً.",
        "إذا كان سببه نقصاً غذائياً فإنه يشفى سريعاً بإعطاء جرعات علاجية تعويضية من فيتامين أ الفموي."
      ],
      English: [
        "An impairment of visual capacity in dim lighting or scotopic darkness, well beyond physiological thresholds.",
        "Biochemically classic for vitamin A deficiency, which starves photoreceptors of retinal rhodopsin pigment synthesis.",
        "Serves as the earliest presenting cardinal complaint in hereditary photoreceptor dystrophies like retinitis pigmentosa.",
        "Patients experience marked delay in dark adaptation kinetics when transitioning from bright illumination into shadows.",
        "Promptly reverses when secondary to dietary malabsorption following high-dose therapeutic oral vitamin A supplementation."
      ]
    }
  },
  {
    word: {
      id: 'w538',
      word: { Arabic: 'الوميض الضوئي', English: 'Photopsia' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Other',
      subjects: ['Ophthalmology', 'Neurology'],
      synonyms: ['الوميض الضوئي', 'فلاشات العين', 'رؤية ومضات مضيئة', 'بريق العين', 'Photopsia'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "إحساس بصري بوجود ومضات أو شرارات أو خيوط مضيئة خاطفة في المجال البصري دون وجود مصدر ضوء خارجي.",
        "ينتج عن شد ميكانيكي حركي يمارسه الجسم الزجاجي المنكمش على الخلايا العصبية الحساسة لشبكية العين.",
        "ظهوره المفاجئ والمتزايد بالتزامن مع طفو نقاط سوداء (عائمات) يستوجب فحصاً عاجلاً للشبكية لاستبعاد تمزقها.",
        "قد يظهر أيضاً كأورة بصرية (Visual aura) مرافقة للصداع النصفي مع خطوط متعرجة متكسرة تدوم دقائق.",
        "فحص قاع العين بالمصابع الشقي مع توسيع الحدقة إلزامي للتأكد من عدم وجود انقطاع أو انفصال شبكي يستدعي الليزر."
      ],
      English: [
        "Subjective entoptic visual phenomena characterized by spontaneous flashes, sparks, or flickers of perceived light.",
        "Triggered by mechanical traction exerted by a collapsing or detaching posterior vitreous gel upon the sensitive neuroretina.",
        "Sudden escalation, especially when accompanied by a shower of pigmented floaters, signals imminent retinal tear formation.",
        "May also occur as a scintillating fortification scotoma during the spreading cortical depression of a classical migraine aura.",
        "Demands immediate indirect ophthalmoscopy with scleral depression to rule out peripheral breaks warranting laser retinopexy."
      ]
    }
  },
  {
    word: {
      id: 'w539',
      word: { Arabic: 'التهاب القرنية', English: 'Keratitis' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Infectious Diseases'],
      synonyms: ['التهاب القرنية', 'عدوى القرنية', 'Keratitis'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "التهاب يصيب النسيج الطلائي والشفاف لقرنية العين يهدد بحدوث عتامات دائمة ونقص في حدة الإبصار.",
        "أحد أشهر أسبابه الفيروسية هو فيروس الهربس البسيط (HSV-1) الذي يحدث قرحة مميزة ذات تفرعات شجرية (Dendritic ulcer).",
        "تسببه طفيليات الأميبا الشائكة (Acanthamoeba) في مرتدي العدسات اللاصقة عند غسلها بماء الصنبور العادي.",
        "يتظاهر بألم عيني شديد، احمرار حاد، رهاب الضوء، وإحساس رملي حارق لا يهدأ مع زيادة في إفراز الدموع.",
        "يمنع منعاً باتاً استخدام قطرات الكورتيزون في النوع الهربسي لتجنب انتشار الفيروس الجغرافي وانثقاب العين."
      ],
      English: [
        "Inflammatory involvement of the corneal epithelium and underlying stroma threatening permanent optical scarring.",
        "Herpes simplex virus (HSV-1) is a frequent culprit, characteristically etching a terminal-bulb dendritic arborizing ulcer.",
        "Acanthamoeba protozoal strains provoke excruciating ring-infiltrate forms in contact lens users rinsing cases in tap water.",
        "Marked by deep lancinating ocular pain, photophobia, intense lacrimation, and marked conjunctival injection.",
        "Topical corticosteroids are strictly contraindicated during active epithelial herpetic bouts to prevent geographic ulceration."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "عدوى فيروسية (HSV) أو بكتيرية أو أميبية تهاجم الطبقة الشفافة السطحية للعين.",
        goldStandard: "فحص الفلورسين بالمصباح الشقي لإظهار التقرح التفرعي الشجري المميز لهربس القرنية.",
        firstLineRx: "مضادات الفيروسات الموضعية كمرهم الآسيكلوفير أو الغانسيكلوفير للنوع الهربسي، وقطرات مضادات حيوية للبكتيري.",
        keyDifferentiator: "ألم عيني شديد يرافقه وذمة قرنية واضحة مع إمكانية فقدان الإحساس القرني في الإصابة الهربسية المزمنة."
      },
      English: {
        etiology: "Infectious invasion (Herpes simplex, Pseudomonas, or Acanthamoeba) colonizing the anterior refracting window.",
        goldStandard: "Slit-lamp biomicroscopy with fluorescein dye highlighting classic terminal-budded dendritic branching epithelial lesions.",
        firstLineRx: "Topical antiviral ointments (acyclovir or ganciclovir) for HSV; targeted antimicrobial drops for bacterial forms.",
        keyDifferentiator: "Features prominent corneal stromal edema, photophobia, and reduced corneal sensation (neurotrophic keratitis) in chronic cases."
      }
    }
  },
  {
    word: {
      id: 'w540',
      word: { Arabic: 'احتقان الملتحمة', English: 'Conjunctival Hyperemia' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Other',
      subjects: ['Ophthalmology'],
      synonyms: ['احتقان الملتحمة', 'احمرار العين', 'حقن الملتحمة', 'Conjunctival Hyperemia', 'Bloodshot eyes'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "علامة سريرية شائعة تتميز بتوسع الأوعية الدموية الدقيقة السطحية في بياض العين مما يجعلها تبدو حمراء اللون.",
        "تنتج عن استجابة وعائية توسعية موضعية نتيجة التعرض للمهيجات، الدخان، قلة النوم، أو التحسس والعدوى.",
        "تتحرك هذه الأوعية الدموية المحتقنة بحرية مع تحريك غشاء الملتحمة فوق الصلبة البيضاء التحتية.",
        "تتلاشى وتبيض سريعاً عند وضع قطرة من مضادات الاحتقان القابضة للأوعية مثل الفينيليفرين الموضعي.",
        "تعد أكثر الشكاوى انتشاراً في عيادات طب العيون والطوارئ وتدل على طيف واسع من الحالات البسيطة إلى المعقدة."
      ],
      English: [
        "An exceedingly frequent clinical physical sign characterized by active engorgement of the superficial bulbar microvessels.",
        "Represents local vasodilation driven by histamine, mechanical irritants, environmental pollutants, or dry eye syndrome.",
        "These tortuous congested vessels move freely with mechanical displacement of the overlying conjunctival tissue.",
        "Rapidly blanches upon instillation of topical weak vasoconstrictor drops like dilute phenylephrine.",
        "Ranks as the leading chief ocular complaint presenting to outpatient clinics and urgent care environments."
      ]
    }
  },
  {
    word: {
      id: 'w541',
      word: { Arabic: 'قطرات العين', English: 'Eye Drops' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Pharma',
      subjects: ['Ophthalmology', 'Pharmacology'],
      synonyms: ['قطرات العين', 'المحاليل العينية الموضعية', 'قطرة عينية', 'Ophthalmic Solutions', 'Eye Drops'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "الشكل الدوائي الصيدلاني الأكثر استخداماً في طب العيون لإيصال المواد الفعالة موضعياً إلى أنسجة مقلة العين.",
        "تتراوح بين قطرات ترطيب بديلة للدموع، ومضادات حيوية، ومخفضات لضغط العين، وموسعات للحدقة لأغراض الفحص.",
        "عادة ما يبلغ حجم القطرة الواحدة نحو 50 ميكرولتر بينما لا يتسع كيس الملتحمة لأكثر من 10 إلى 20 ميكرولتر.",
        "ينصح المريض بالضغط الخفيف على زاوية العين الداخلية (الدمعية) لدقيقة بعد تقطيرها لتقليل امتصاص الدواء في مجرى الدم.",
        "تحتوي العبوات متعددة الجرعات على مواد حافظة ككلوريد البنزالكونيوم، وتتوفر عبوات أحادية الاستخدام خالية منها."
      ],
      English: [
        "The primary pharmacological liquid formulation engineered to deliver therapeutics topically to the ocular surface.",
        "Ranges therapeutically across ocular lubricants, antibiotics, pressure-lowering agents, and diagnostic cycloplegics.",
        "A commercial dispensed drop delivers approximately 50 microliters, while the conjunctival cul-de-sac holds only 10 to 20.",
        "Punctal occlusion applied at the medial canthus immediately following instillation minimizes systemic mucosal drug absorption.",
        "Multi-dose vials contain stabilizing preservatives like benzalkonium chloride, while preservative-free single-unit vials spare ocular epithelium."
      ]
    }
  },
  {
    word: {
      id: 'w542',
      word: { Arabic: 'الكيس الدهني الجفني', English: 'Chalazion' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology'],
      synonyms: ['الكيس الدهني الجفني', 'البردة', 'الكيس الدهني بالعين', 'شحيمة الجفن', 'Chalazion'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "تورم عقدي حبيبي غير معدٍ وغير مؤلم يصيب الجفن العلوي أو السفلي نتيجة انسداد إحدى غدد ميبوميوس الدهنية.",
        "يتشكل كرد فعل التهابي مناعي حبيبومي (Granulomatous) تجاه الدهون المحتبسة داخل صفيحة الجفن الليفية.",
        "يتميز عن دمل الجفن (Stye) بأنه غير مؤلم عادة عند اللمس ويكون أعمق في نسيج الجفن وأبطأ في التكون.",
        "قد يضغط على القرنية في حال كان كبيراً مسبباً اللابؤرية وتشوشاً مؤقتاً في الرؤية.",
        "يبدأ علاجه بالكمادات الدافئة والتدليك، وفي حال استمراره يستأصل جراحياً عبر جفن العين الداخلي دون ترك ندبة."
      ],
      English: [
        "A chronic, non-infectious, typically painless granulomatous nodular tumefaction embedded within the tarsal plate of the eyelid.",
        "Develops following sterile lipogranulomatous inflammatory reaction sparked by extravasated meibomian sebum.",
        "Differentiated from an acute external hordeolum by its indolent, non-tender course and deeper intramural anatomical plane.",
        "Large central lesions can exert mechanical mass effect upon the cornea, inducing temporary irregular astigmatism.",
        "Responds to conservative hot moist compresses; chronic refractory lesions undergo incision and curettage from the conjunctival surface."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "انسداد ميكانيكي لفتحات غدد ميبوميوس التارسال يؤدي لاحتباس الدهون وتفاعل حبيبومي جسمي غريب غير بكتيري.",
        goldStandard: "التشخيص الإكلينيكي بفحص الجفن وقلبه لرؤية الكتلة الصلبة غير المؤلمة المغطاة بغشاء أصفر رمادي.",
        firstLineRx: "كمادات دافئة موضعية مكثفة 4 مرات يومياً مع تدليك الجفن؛ والتدخل الجراحي بالكحت في حال فشل العلاج التحفظي.",
        keyDifferentiator: "كتلة صلبة غير مؤلمة داخل الجفن تميزه تماماً عن دمل الجفن الإنتاني الحاد شديد الألم (Stye)."
      },
      English: {
        etiology: "Lipogranulomatous inflammatory blockage of tarsal meibomian glands without active acute bacterial infection.",
        goldStandard: "Clinical inspection upon eyelid eversion showing a focal, firm, non-tender nodular elevation within the tarsal plate.",
        firstLineRx: "Intensive warm compress therapy with firm digital massage; surgical incision and curettage if unresolved after weeks.",
        keyDifferentiator: "A chronic indolent non-tender mass, easily distinguished from the exquisitely painful, acute erythematous stye."
      }
    }
  },
  {
    word: {
      id: 'w543',
      word: { Arabic: 'ظفرة العين', English: 'Pterygium' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology'],
      synonyms: ['ظفرة العين', 'الظفرة', 'اللحمية في العين', 'Pterygium', 'surfers eye'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "نمو حميد مثلثي الشكل من النسيج الليفي الوعائي للملتحمة يمتد زاحفاً فوق سطح قرنية العين.",
        "ينشأ غالباً من الجهة الإنسية (القريبة من الأنف) ويرتبط ارتباطاً وثيقاً بالتعرض المزمن لأشعة الشمس فوق البنفسجية والرياح والغبار.",
        "يشيع جداً بين الصيادين والمزارعين وراكبي الأمواج وسكان المناطق الاستوائية المشمسة.",
        "يسبب احمراراً وتهيجاً في العين، وإذا وصل إلى محور الرؤية وحجب حدقة العين فإنه يهدد البصر ويسبب تشوه انكساري.",
        "يعالج بالقطرات المرطبة، ويستأصل جراحياً مع رقعة ملتحمة ذاتية (Autograft) للحد من فرصة رجوعه المرتفعة."
      ],
      English: [
        "A triangular or wing-shaped fibrovascular proliferation originating from the bulbar conjunctiva that invades the cornea.",
        "Arises almost universally from the nasal limbus, strongly driven by chronic actinic UV-B exposure, wind, and arid environmental dust.",
        "Particularly prevalent among outdoor laborers, agriculturalists, and surfers residing within equatorial latitudes.",
        "Generates persistent ocular irritation, grittiness, and visually threatening irregular astigmatism as it encroaches onto the central pupil.",
        "Managed conservatively with lubricants and UV-protective sunglasses; surgically excised with conjunctival autografting to curb recurrence."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "تغير تنكسي تكاثري للألياف الكولاجينية للملتحمة والأوعية نتيجة التعرض الطويل للأشعة فوق البنفسجية والغبار.",
        goldStandard: "المعاينة السريرية بالمصباح الشقي لرؤية الامتداد الوعائي المثلثي المتصل من الملتحمة إلى القرنية وخط ستوكر (Stocker line).",
        firstLineRx: "حماية العين بالنظارات الشمسية والقطرات المرطبة؛ والاستئصال الجراحي مع الترقيع الذاتي عند تهديد محور البصر.",
        keyDifferentiator: "نسيج وعائي ليفي مميز يتجاوز الحافة القرنية (Limbus) ويزحف مباشرة على القرنية بخلاف الشحيمة (Pinguecula)."
      },
      English: {
        etiology: "Elastotic degeneration of conjunctival collagen coupled with fibrovascular limbal proliferation induced by UV-B radiation.",
        goldStandard: "Slit-lamp examination demonstrating a wing-shaped vascular growth crossing the limbus onto the cornea, with Stocker iron line.",
        firstLineRx: "UV blocking sunglasses and topical artificial tear lubrication; surgical excision with autologous graft when encroaching visual axis.",
        keyDifferentiator: "Actively crosses the corneal limbus and invades the clear stroma, whereas pingueculae remain confined entirely to the sclera."
      }
    }
  },
  {
    word: {
      id: 'w544',
      word: { Arabic: 'القرنية المخروطية', English: 'Keratoconus' },
      level: 'Clinical',
      difficulty: 3,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Genetics'],
      synonyms: ['القرنية المخروطية', 'تخروط القرنية', 'Keratoconus'],
      guessingDifficulty: 3
    },
    hints: {
      Arabic: [
        "مرض تنكسي غير التهابي تصاب فيه قرنية العين بترقق تدريجي وبروز غير منتظم لتتحول من شكل القبة إلى شكل مخروطي.",
        "يظهر غالباً في مرحلة المراهقة أو بداية العشرينات، ويرتبط بحك العين المتكرر والعنيف لدى مرضى الحساسية.",
        "يؤدي إلى تشوه انكساري شديد من اللابؤرية غير المنتظمة وقصر النظر السريع التدهور الذي لا يصحح بالنظارات العادية.",
        "تظهر علامات سريرية خاصة مثل علامة مونسون (Munson sign) حيث ينبعج الجفن السفلي عند النظر للأسفل.",
        "يعالج في بداياته بتثبيت القرنية بالأشعة فوق البنفسجية والريبوفلافين (Cross-linking)، والعدسات الصلبة، أو زراعة القرنية."
      ],
      English: [
        "A progressive, non-inflammatory corneal ectasia characterized by structural biomechanical thinning and conical protrusion of the stroma.",
        "Typically debuts during adolescence or early adulthood, strongly accelerated by vigorous habitual eye rubbing in atopic patients.",
        "Induces worsening irregular myopic astigmatism, monocular polyopia, and rapid degradation of best-corrected visual acuity.",
        "Classic physical exam findings include Munson sign (V-shaped lower lid notch on downgaze) and Fleischer iron rings.",
        "Arrested in early phases via corneal collagen cross-linking (CXL) with riboflavin, optical rigid lenses, or keratoplasty."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "ضعف هيكلي جيني في ألياف كولاجين القرنية تفاقمه الصدمات الميكانيكية المزمنة الناجمة عن فرك العين.",
        goldStandard: "التصوير الطبوغرافي المقطعي لسطح القرنية (Corneal Topography / Pentacam) لإثبات ترقق وبروز السطح الخلفي والأمامي.",
        firstLineRx: "تثبيت روابط كولاجين القرنية (Corneal Collagen Cross-linking - CXL) لإيقاف التدهور، مع استخدام عدسات صلبة نافذة للغاز.",
        keyDifferentiator: "انبعاج مخروطي محدد للقرنية مع حلقات فلايشر للحديد وعلامة مونسون، مع تدهور سريع لقوة الإبصار في سن الشباب."
      },
      English: {
        etiology: "Biomechanical structural weakness of stromal collagen matrix coupled with genetic susceptibility and chronic mechanical eye rubbing.",
        goldStandard: "Corneal topography and Scheimpflug tomography (Pentacam) demonstrating posterior/anterior elevation and pachymetric thinning.",
        firstLineRx: "Corneal collagen cross-linking with riboflavin (CXL) to stabilize the cornea, followed by rigid gas-permeable or scleral contact lenses.",
        keyDifferentiator: "Progressive conical ectasia with lower lid protrusion on downgaze (Munson sign) and Fleischer ring iron deposition."
      }
    }
  },
  {
    word: {
      id: 'w545',
      word: { Arabic: 'قياس ضغط العين', English: 'Tonometry' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Technique',
      subjects: ['Ophthalmology'],
      synonyms: ['قياس ضغط العين', 'مقياس التوتر العيني', 'فحص ضغط العين', 'Tonometry'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "إجراء تشخيصي أساسي في عيادات العيون يهدف إلى قياس مقدار الضغط الهيدروستاتيكي للسائل داخل مقلة العين (IOP).",
        "المعيار الذهبي الكلاسيكي له هو مقياس غولدمان للضغط (Goldmann Applanation Tonometer) المثبت على المصباح الشقي.",
        "يتطلب استخدام قطرة مخدر موضعي مع صبغة الفلورسين لرؤية نصفي حلقتين متقابلتين تنطبقان معاً عند القياس الدقيق.",
        "يستخدم في مسوحات العيادات العامة أجهزة غير تلامسية تعتمد على نفخة هواء مفاجئة ترتد من سطح القرنية.",
        "المستوى الطبيعي يتراوح عادة بين 10 و 21 ملم زئبق، وارتفاعه المستمر يعد أهم عامل خطر للإصابة بالمياه الزرقاء."
      ],
      English: [
        "A routine diagnostic ophthalmologic procedure employed to determine intraocular pressure (IOP) within the anterior segment.",
        "The universally accepted clinical gold standard remains the Goldmann applanation method mounted onto the slit lamp.",
        "Requires instillation of a topical anesthetic and fluorescein dye to align two fluorescent semicircular mires precisely.",
        "Community screening frequently employs non-contact air-puff devices measuring the time-to-flattening of the central corneal apex.",
        "Normal physiological readings span 10 to 21 mmHg; elevated sustained measurements constitute the principal risk factor for glaucoma."
      ]
    }
  },
  {
    word: {
      id: 'w546',
      word: { Arabic: 'فحص قاع العين', English: 'Fundoscopy' },
      level: 'Clinical',
      difficulty: 1,
      type: 'Technique',
      subjects: ['Ophthalmology', 'Internal Medicine', 'Neurology'],
      synonyms: ['فحص قاع العين', 'تنظير قاع العين', 'تنظير الشبكية', 'Fundoscopy', 'Ophthalmoscopy'],
      guessingDifficulty: 1
    },
    hints: {
      Arabic: [
        "فحص سريري يتيح للطبيب النظر مباشرة عبر بؤبؤ العين لفحص الأجزاء الخلفية من المقلة بما في ذلك الشبكية والقرص البصري.",
        "ينفذ باستخدام منظار العين المباشر المحمول باليد (Direct) أو المنظار غير المباشر المثبت على رأس الطبيب مع عدسة مكبرة.",
        "يساعد وضع قطرات موسعة للحدقة كقطرة التروبيكاميد على توفير رؤية بانورامية شاملة وواضحة لقاع العين.",
        "يمكن من خلاله تشخيص مضاعفات الأمراض المزمنة كاعتلال الشبكية السكري واعتلال الشبكية بفرط ضغط الدم.",
        "يكشف علامات عصبية طارئة مثل وذمة حليمة العصب البصري الناتجة عن ارتفاع ضغط السائل الدماغي داخل الجمجمة."
      ],
      English: [
        "A clinical examination permitting non-invasive direct optical inspection of the posterior fundus through the pupil.",
        "Conducted via handheld direct ophthalmoscopes providing high magnification or binocular indirect headbands offering stereoscopic depth.",
        "Pharmacological pupil dilation with short-acting mydriatics like tropicamide substantially broadens the field of peripheral view.",
        "Crucial for staging target-organ vascular damage in chronic diseases such as diabetic and hypertensive microangiopathy.",
        "Provides immediate detection of critical neurosurgical emergencies, notably optic disc edema (papilledema) in intracranial hypertension."
      ]
    }
  },
  {
    word: {
      id: 'w547',
      word: { Arabic: 'المصباح الشقي', English: 'Slit Lamp' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Equipment',
      subjects: ['Ophthalmology'],
      synonyms: ['المصباح الشقي', 'المجهر الشقي', 'جهاز فحص العين الشقي', 'Slit Lamp', 'Biomicroscope'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "الجهاز التشخيصي المحوري في عيادات طب وجراحة العيون، ويجمع بين مجهر ثنائي العينين ومصدر ضوء عالي الشدة يمكن تضييقه إلى شق.",
        "يقوم المريض بإسناد ذقنه وجبهته على إطار مخصص بينما يفحص الطبيب الأنسجة الدقيقة للعين بتكبير يصل إلى 40 ضعفاً.",
        "يتيح الشق الضوئي إحداث مقطع بصري دقيق يوضح عمق الآفات في القرنية والعدسة والغرفة الأمامية ثلاثية الأبعاد.",
        "يحتوي على فلاتر ضوئية مختلفة مثل فلتر الكوبالت الأزرق المستخدم مع صبغة الفلورسين لإظهار خدوش القرنية.",
        "تضاف إليه عدسات خاصة كعدسة غولدمان ثلاثية المرايا لفحص زاوية تصريف السائل المائي وأطراف الشبكية."
      ],
      English: [
        "The cornerstone diagnostic instrument in ophthalmology, integrating a binocular stereoscopic biomicroscope with a high-intensity slit illuminator.",
        "The patient stabilizes their chin and forehead upon ergonomic rests while the examiner inspects ocular anatomy up to 40x magnification.",
        "The adjustable focal slit beam cuts an optical cross-section through transparent media, defining the exact depth of corneal and lens pathology.",
        "Equipped with specialized color filters including a cobalt blue filter to excite fluorescein dye for detecting epithelial erosions.",
        "Complemented by accessory diagnostic contact lenses (like Goldmann three-mirror lenses) to visualize the trabecular meshwork and retina."
      ]
    }
  },
  {
    word: {
      id: 'w548',
      word: { Arabic: 'اعتلال الشبكية السكري', English: 'Diabetic Retinopathy' },
      level: 'Clinical',
      difficulty: 2,
      type: 'Disease',
      subjects: ['Ophthalmology', 'Endocrinology', 'Internal Medicine'],
      synonyms: ['اعتلال الشبكية السكري', 'تأثر الشبكية بالسكر', 'Diabetic Retinopathy'],
      guessingDifficulty: 2
    },
    hints: {
      Arabic: [
        "اختلاط وعائي دقيق مزمن يصيب شبكية العين لدى مرضى السكري ويعد من أهم أسباب فقدان البصر الدائم في سن العمل.",
        "ينجم عن تلف الخلايا الحوطية (Pericytes) لجدران الشعيرات الدموية الدقيقة مما يؤدي لنقص التروية وزيادة نفاذية الأوعية.",
        "ينقسم إلى نوع غير تكاثري تظهر فيه أمهات دم مجهرية ونزوف نقطية وإفرازات صلبة، ونوع تكاثري تتشكل فيه أوعية دموية جديدة غير طبيعية.",
        "قد يفرز نسيج الشبكية المحروم من الأكسجين عامل نمو بطانة الأوعية (VEGF) مما يؤدي لتشكل أوعية هشة سهلة النزف داخل السائل الزجاجي.",
        "يعالج بحقن الأدوية المضادة لـ VEGF داخل العين وجلسات التخثير الضوئي بالليزر مع الضبط الصارم للسكر التراكمي."
      ],
      English: [
        "A sight-threatening microvascular complication of chronic hyperglycemia, standing as a leading cause of preventable adult blindness.",
        "Triggered by pericyte dropout and capillary basement membrane thickening, leading to capillary occlusion and retinal ischemia.",
        "Classified into non-proliferative stages marked by microaneurysms, dot-blot hemorrhages, and hard exudates, and advanced proliferative stages.",
        "Retinal tissue hypoxia drives massive compensatory release of vascular endothelial growth factor (VEGF), spurring fragile neovascularization.",
        "Managed via repeated intravitreal anti-VEGF injections, panretinal photocoagulation laser therapy, and rigorous glycemic control."
      ]
    },
    flashcard: {
      Arabic: {
        etiology: "سمية الجلوكوز المزمنة التي تدمر الخلايا الحوطية المحيطة بالأوعية الشعرية للشبكية مسببة نقص التروية وإفراز عامل VEGF.",
        goldStandard: "فحص قاع العين الموسع وتصوير قاع العين بصبغة الفلورسين (FFA) مع التصوير البصري المقطعي للشبكية (OCT).",
        firstLineRx: "حقن مضادات عامل نمو الأوعية (Anti-VEGF) داخل الجسم الزجاجي للوذمة البقعية، مع ليزر تخثير الشبكية الشامل (PRP) للنوع التكاثري.",
        keyDifferentiator: "وجود أمهات الدم الشعرية المجهرية والأوعية الدموية الحديثة الهشة والنزوف النمشية في مريض سكري."
      },
      English: {
        etiology: "Chronic hyperglycemic microangiopathy triggering retinal pericyte loss, ischemia, and compensatory VEGF-driven neovascularization.",
        goldStandard: "Dilated funduscopy confirmed by fluorescein fundus angiography (FFA) and macular optical coherence tomography (OCT).",
        firstLineRx: "Serial intravitreal anti-VEGF biologics for macular edema alongside panretinal photocoagulation (PRP) for proliferative disease.",
        keyDifferentiator: "Hallmark presence of microaneurysms, cotton-wool spots, hard exudates, and abnormal retinal neovascular tufts in a diabetic host."
      }
    }
  }
];
