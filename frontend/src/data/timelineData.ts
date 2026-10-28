import { StudyDay } from '../types';

export const INITIAL_TIMELINE: StudyDay[] = [
  // WEEK 1: FUNDAMENTALS (24 - 30 October 2026)
  {
    id: 1,
    dayNumber: 1,
    dateStr: "2026-10-24",
    displayDate: "24 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Nursing Foundations & Reasoning Basics",
    nursingTopic: "Nursing Foundations — principles, nursing process, assessment, diagnosis, planning and evaluation.",
    generalTopic: "Reasoning — analogy and classification.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Nursing Process (ADPIE)",
        pointsEn: [
          "Assessment: Subjective data (patient's verbal reports/symptoms) vs Objective data (measurable signs, BP, lab values).",
          "Diagnosis: NANDA formulation: Problem + Etiology (Related to) + Signs/Symptoms (As evidenced by).",
          "Planning: SMART goals (Specific, Measurable, Attainable, Realistic, Timed) prioritized via Maslow's Hierarchy.",
          "Implementation: Direct patient care, medication administration, monitoring, patient education.",
          "Evaluation: Comparing patient response against expected outcomes to modify or resolve care plan."
        ],
        bengaliTip: "নার্সিং প্রসেসের ধাপগুলো মনে রাখবে: ADPIE (Assessment -> Diagnosis -> Planning -> Implementation -> Evaluation)। রোগীর নিজের মুখে বলা কষ্ট হলো Subjective, আর নার্স যা পরিমাপ করেন (BP, Pulse) তা Objective।"
      },
      {
        topic: "Reasoning: Analogy & Classification",
        pointsEn: [
          "Semantic Analogy: Stethoscope : Heart :: Sphygmomanometer : Blood Pressure.",
          "Number Analogy: Look for squares, cubes, prime numbers, differences, ratios.",
          "Classification / Odd-One-Out: Identify common traits (e.g., organ systems, bacterial vs viral diseases)."
        ],
        bengaliTip: "Analogy তে প্রথম জোড়ার সম্পর্কের ধরন (কার্যাবলী, একক, অবস্থান) নিখুঁতভাবে দ্বিতীয় জোড়ায় মেলাও।"
      }
    ]
  },
  {
    id: 2,
    dayNumber: 2,
    dateStr: "2026-10-25",
    displayDate: "25 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Vital Signs, Physical Assessment & Positioning",
    nursingTopic: "Vital signs, physical assessment, bed making, hygiene, positioning and documentation.",
    generalTopic: "Arithmetic — percentages and ratios.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Vital Signs & Patient Positioning",
        pointsEn: [
          "Normal Vital Ranges: BP 120/80 mmHg, Pulse 60-100 bpm, Resp 12-20 bpm, Core Temp 98.6°F (37°C).",
          "Fowler's Position: Low (15-30°), Semi (30-45°), High (60-90°). Indicated for respiratory distress and tube feeding.",
          "Trendelenburg: Feet higher than head (shock management); Reverse Trendelenburg: Head higher (GERD, intracranial pressure reduction).",
          "Sims' Position: Left lateral semi-prone, right leg flexed — ideal for rectal examinations, enema administration."
        ],
        bengaliTip: "এনিমা দেওয়ার জন্য সর্বদা Left Sims' position ব্যবহার করতে হয় যাতে Sigmoid colon বরাবর দ্রবণ সহজে প্রবেশ করে।"
      },
      {
        topic: "Arithmetic: Percentages & Ratios",
        pointsEn: [
          "Percentage formula: (Part / Whole) × 100%.",
          "Ratio simplification: a:b = ma:mb. Cross-multiplication method for drug dilution ratios."
        ],
        bengaliTip: "শতকরা ও অনুপাতের অঙ্কগুলো ওষুধ গণনা (Drug dose calculation)-তেও সরাসরি কাজে লাগবে।"
      }
    ]
  },
  {
    id: 3,
    dayNumber: 3,
    dateStr: "2026-10-26",
    displayDate: "26 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Infection Control, Sterilisation & Biomedical Waste",
    nursingTopic: "Infection Control — hand hygiene, PPE, sterilisation, disinfection and biomedical waste.",
    generalTopic: "General Science — basic Biology.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Biomedical Waste (BMW) Management Rules",
        pointsEn: [
          "Yellow Bag: Anatomical waste, placenta, soiled cotton, dressings, chemotherapy drugs, expired medicines (incineration/plasma pyrolysis).",
          "Red Bag: Contaminated recyclable plastics (IV tubing, catheters, gloves, syringes without needles) - autoclaving/microwaving.",
          "White Puncture-Proof Container: Sharps including needles, scalpels, blades (shredding/iron smelting).",
          "Blue Cardboard Box/Bag: Glassware, medicine vials, ampoules, metallic orthopedic implants."
        ],
        bengaliTip: "হলুদ ব্যাগ = মানব দেহাংশ ও রক্তমাখা তুলা/ব্যান্ডেজ। লাল ব্যাগ = প্লাস্টিক সামগ্রী (IV set, gloves)। সাদা বোতল = সূঁচ ও ধারালো ব্লেড। নীল বক্স = কাঁচের শিশি ও অ্যাম্পুল।"
      },
      {
        topic: "Hand Hygiene (WHO 5 Moments)",
        pointsEn: [
          "1. Before touching a patient; 2. Before clean/aseptic procedure; 3. After body fluid exposure risk; 4. After touching a patient; 5. After touching patient surroundings.",
          "Alcohol hand rub: 20-30 seconds. Soap & water wash: 40-60 seconds (mandatory when visibly soiled or C. difficile suspected)."
        ],
        bengaliTip: "হাত খালি চোখে নোংরা থাকলে অবশ্যই সাবান-পানি দিয়ে ৪০-৬০ সেকেন্ড ধুতে হবে। শুধু অ্যালকোহল রাবে স্পোর ধ্বংস হয় না।"
      }
    ]
  },
  {
    id: 4,
    dayNumber: 4,
    dateStr: "2026-10-27",
    displayDate: "27 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Anatomy & Physiology: Cardio, Respiratory & Blood",
    nursingTopic: "Anatomy & Physiology — cardiovascular, respiratory and blood systems.",
    generalTopic: "Reasoning — series and coding-decoding.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Cardiovascular & Hematology Systems",
        pointsEn: [
          "Cardiac Conduction: SA Node (Pacemaker, 60-100 bpm) -> AV Node (40-60 bpm) -> Bundle of His -> Purkinje Fibers (20-40 bpm).",
          "Valves: Tricuspid & Mitral (Bicuspid) = AV valves (S1 sound 'LUB'); Aortic & Pulmonary = Semilunar (S2 sound 'DUB').",
          "Blood Components: Erythrocytes (120 days lifespan), Leukocytes (Neutrophils highest 60%), Platelets (1.5-4.5 lakh/cu mm, 7-10 days)."
        ],
        bengaliTip: "SA Node হলো হার্টের প্রধান পেসমেকার। হার্টের প্রথম শব্দ (S1) AV ভাল্ব বন্ধ হওয়ার কারণে এবং দ্বিতীয় শব্দ (S2) সেমিলুনার ভাল্ব বন্ধ হওয়ার কারণে সৃষ্টি হয়।"
      },
      {
        topic: "Respiratory Mechanics",
        pointsEn: [
          "Primary muscle of quiet breathing: Diaphragm (phrenic nerve C3-C5).",
          "Gas exchange takes place across the alveolar-capillary membrane via passive simple diffusion."
        ],
        bengaliTip: "Alveoli-তে অক্সিজেন এবং কার্বন ডাই-অক্সাইডের আদান-প্রদান সাধারণ ব্যাপন (Simple Diffusion) প্রক্রিয়ায় সম্পন্ন হয়।"
      }
    ]
  },
  {
    id: 5,
    dayNumber: 5,
    dateStr: "2026-10-28",
    displayDate: "28 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Anatomy & Physiology: Renal, Neuro, Endocrine & GI",
    nursingTopic: "Anatomy & Physiology — renal, nervous, endocrine and digestive systems.",
    generalTopic: "Arithmetic — averages and simplification.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Renal & Nervous Systems",
        pointsEn: [
          "Nephron: Structural & functional unit. Glomerular Filtration Rate (GFR) normal is ~125 mL/min (180 L/day).",
          "Loop of Henle concentrates urine via countercurrent multiplier mechanism.",
          "Brainstem: Medulla oblongata contains vital cardiac, vasomotor, and respiratory reflex centres."
        ],
        bengaliTip: "Medulla Oblongata তে শ্বাস-প্রশ্বাস, হৃদস্পন্দন এবং রক্তচাপ নিয়ন্ত্রণের ভাইটাল সেন্টার অবস্থান করে।"
      },
      {
        topic: "Endocrine Hormones",
        pointsEn: [
          "Islets of Langerhans: Alpha cells secrete Glucagon; Beta cells secrete Insulin; Delta cells secrete Somatostatin.",
          "Adrenal Medulla: Epinephrine and Norepinephrine (Fight-or-Flight catecholamines)."
        ],
        bengaliTip: "ইনসুলিন তৈরি হয় অগ্ন্যাশয়ের Beta কোষ থেকে যা রক্তের গ্লুকোজ হ্রাস করে।"
      }
    ]
  },
  {
    id: 6,
    dayNumber: 6,
    dateStr: "2026-10-29",
    displayDate: "29 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Nutrition, Biochemistry & Deficiency Diseases",
    nursingTopic: "Nutrition, Biochemistry, deficiency diseases, diet and therapeutic nutrition.",
    generalTopic: "General Science — Physics basics.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Nutritional Deficiencies & Vitamins",
        pointsEn: [
          "Fat-soluble vitamins: A, D, E, K (stored in liver). Water-soluble: B-complex, C.",
          "Vit A deficiency: Night blindness (Nyctalopia), Bitot's spots, Xerophthalmia, Keratomalacia.",
          "Vit C deficiency: Scurvy, bleeding gums, impaired wound collagen synthesis.",
          "Vit D deficiency: Rickets in children, Osteomalacia in adults.",
          "Protein-Energy Malnutrition: Kwashiorkor (protein deficiency with edema/moon face) vs Marasmus (calorie deficiency with severe wasting/old man face)."
        ],
        bengaliTip: "কোয়াশিয়রকর এ এডিমা (ফোলা মুখ) থাকে প্রোটিনের অভাবে, কিন্তু মারাসমাসে চরম শুকিয়ে যাওয়া (ত্বক ঝুলে পড়া) ঘটে শক্তির সার্বিক ঘাটতিতে।"
      }
    ]
  },
  {
    id: 7,
    dayNumber: 7,
    dateStr: "2026-10-30",
    displayDate: "30 October 2026",
    weekNumber: 1,
    weekTitle: "Week 1: Fundamentals — 24–30 October 2026",
    title: "Microbiology, Pathology & Specimen Collection",
    nursingTopic: "Microbiology, Pathology, immunity, infection and specimen collection.",
    generalTopic: "General Awareness — current affairs and static GK.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Microbiology & Types of Immunity",
        pointsEn: [
          "Innate Immunity: Non-specific anatomical barriers (skin, stomach acid, lysozyme).",
          "Active Immunity: Body produces antibodies (Natural: after infection; Artificial: after vaccination).",
          "Passive Immunity: Pre-formed antibodies received (Natural: Maternal IgG cross placenta, IgA in colostrum; Artificial: Anti-tetanus serum ATS, rabies immunoglobulin).",
          "Autoclaving parameters: 121°C (250°F) at 15 psi for 15-20 minutes — destroys all vegetative bacteria and bacterial spores."
        ],
        bengaliTip: "মা থেকে অমরা (Placenta) দিয়ে ভ্রূণে যায় IgG অ্যান্টিবডি, আর শালদুধ (Colostrum)-এ থাকে প্রচুর IgA।"
      }
    ]
  },

  // WEEK 2: CLINICAL NURSING (31 October - 6 November 2026)
  {
    id: 8,
    dayNumber: 8,
    dateStr: "2026-10-31",
    displayDate: "31 October 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Weekly Consolidation & Mixed Practice",
    nursingTopic: "Weekly revision of Foundations, Anatomy, Nutrition, Microbiology and Pathology.",
    generalTopic: "Mixed Reasoning and Arithmetic.",
    mcqTarget: 50,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Weekly High-Yield Integration",
        pointsEn: [
          "Sterilization check: Biological indicator for Autoclave is Geobacillus stearothermophilus.",
          "Therapeutic diets: Low sodium (Hypertension, HF), High biological value protein (Renal failure on dialysis), Purine-restricted (Gout).",
          "Blood crossmatch: Blood transfusion must start within 30 minutes of release from blood bank and complete within 4 hours."
        ],
        bengaliTip: "ব্লাড ট্রান্সফিউশন অবশ্যই রক্তব্যাংক থেকে আনার ৩০ মিনিটের মধ্যে শুরু করতে হবে এবং সর্বোচ্চ ৪ ঘণ্টার মধ্যে সম্পন্ন করতে হবে।"
      }
    ]
  },
  {
    id: 9,
    dayNumber: 9,
    dateStr: "2026-11-01",
    displayDate: "1 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Full CBT Mock Test 1 (All Exam Sections)",
    nursingTopic: "Comprehensive Full CBT Mock Test covering all syllabus sections: Nursing Foundations, Anatomy, Micro, Clinical Nursing, Reasoning, Arithmetic, Science & GK.",
    generalTopic: "Full Exam Simulation: 100 Questions in 90 Minutes with negative marking review.",
    mcqTarget: 100,
    isFullMock: true,
    timeLimitMins: 90,
    questionCount: 100,
    revisionNotes: [
      {
        topic: "Exam Hall Strategy & Time Management",
        pointsEn: [
          "RRB CBT Blueprint: 70 Nursing questions, 30 General Ability questions (Reasoning, Arithmetic, General Science, GK).",
          "Attempt Nursing first: Aim to finish 70 Nursing questions in 45-50 minutes.",
          "Negative marking discipline: 1/3rd mark deducted for wrong answers — do not guess blindly without elimination!",
          "Review flagged questions with remaining 15 minutes."
        ],
        bengaliTip: "১০০ টি প্রশ্নের জন্য ৯০ মিনিট। নার্সিং অংশের ৭০ টি প্রশ্ন আগে ৪৫-৫০ মিনিটে শেষ করবে, আন্দাজে দাগাবে না কারণ ১/৩ নেগেটিভ মার্কিং রয়েছে।"
      }
    ]
  },
  {
    id: 10,
    dayNumber: 10,
    dateStr: "2026-11-02",
    displayDate: "2 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Med-Surg: Cardiovascular, Shock & Emergency Care",
    nursingTopic: "Medical-Surgical Nursing — cardiovascular diseases, hypertension, shock and emergency care.",
    generalTopic: "General Science — Chemistry basics.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Myocardial Infarction & Shock Types",
        pointsEn: [
          "MI Biomarkers: Troponin I & T are gold standard (elevates within 3-4h, peaks 12-24h, stays 10-14 days). CK-MB for re-infarction.",
          "MONA Protocol: Morphine, Oxygen, Nitroglycerin, Aspirin.",
          "Shock stages & types: Hypovolemic (hemorrhage/burns), Cardiogenic (pump failure), Septic (vasodilation/endotoxins), Anaphylactic (IgE/histamine).",
          "Anaphylactic Shock drug of choice: Intramuscular Adrenaline (Epinephrine) 1:1000 in anterolateral thigh."
        ],
        bengaliTip: "অ্যানাফাইলাকটিক শক-এর ফার্স্ট লাইন ওষুধ হলো Intramuscular Adrenaline (1:1000)। রোগীর উরুর বাইরের দিকে (Vastus lateralis) দ্রুত দিতে হয়।"
      }
    ]
  },
  {
    id: 11,
    dayNumber: 11,
    dateStr: "2026-11-03",
    displayDate: "3 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Med-Surg: Respiratory Diseases & Oxygen Therapy",
    nursingTopic: "Medical-Surgical Nursing — respiratory diseases, oxygen therapy and respiratory emergencies.",
    generalTopic: "Arithmetic — profit/loss and simple interest.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Oxygen Delivery & COPD Precautions",
        pointsEn: [
          "Venturi Mask: Delivers exact, precise FiO2 (ideal for COPD patients to prevent hypoxic drive depression).",
          "Nasal Cannula: 1-6 L/min delivering 24-44% FiO2.",
          "Non-Rebreather Mask (NRBM): Delivers highest FiO2 (80-95%) at 10-15 L/min.",
          "Chest Drainage System: Water seal chamber must fluctuate (tidaling) with respiration; continuous bubbling indicates an air leak."
        ],
        bengaliTip: "COPD রোগীদের ক্ষেত্রে সবসময় ভেনচুরি মাস্ক দিয়ে নিয়ন্ত্রিত স্বল্পমাত্রার অক্সিজেন দিতে হয়, অতিরিক্ত অক্সিজেনে তাদের শ্বাসপ্রশ্বাস বন্ধ হয়ে যেতে পারে (Loss of hypoxic drive)।"
      }
    ]
  },
  {
    id: 12,
    dayNumber: 12,
    dateStr: "2026-11-04",
    displayDate: "4 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Med-Surg: Renal, Electrolytes & Acid-Base",
    nursingTopic: "Medical-Surgical Nursing — renal disorders, fluids, electrolytes and acid-base balance.",
    generalTopic: "Reasoning — directions and blood relations.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Arterial Blood Gas (ABG) & Potassium Rules",
        pointsEn: [
          "Normal ABG: pH 7.35-7.45, PaCO2 35-45 mmHg (respiratory), HCO3 22-26 mEq/L (metabolic).",
          "ROME rule: Respiratory Opposite (pH up, PaCO2 down = Resp Alkalosis), Metabolic Equal (pH down, HCO3 down = Met Acidosis).",
          "Potassium: 3.5 - 5.0 mEq/L. Hyperkalemia (>5.0) causes tall tented T-waves and fatal arrhythmias. NEVER give IV push potassium!"
        ],
        bengaliTip: "পটাশিয়াম কখনো সরাসরি IV Push দেওয়া যায় না — এতে তাৎক্ষণিক কার্ডিয়াক অ্যারেস্ট ঘটবে! অবশ্যই ডাইলিউট করে ড্রিপে ধীরে ধীরে দিতে হয়।"
      }
    ]
  },
  {
    id: 13,
    dayNumber: 13,
    dateStr: "2026-11-05",
    displayDate: "5 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Med-Surg: Endocrine, Neurological & GI Conditions",
    nursingTopic: "Medical-Surgical Nursing — diabetes, endocrine disorders, neurological and digestive conditions.",
    generalTopic: "General Science — Biology revision.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Diabetes & Glasgow Coma Scale (GCS)",
        pointsEn: [
          "Hypoglycemia rule of 15: Give 15g fast-acting carbohydrate, recheck blood glucose in 15 minutes.",
          "GCS scoring: Total 3 to 15. Eye opening (4), Verbal response (5), Motor response (6). Score <= 8 signifies severe coma ('Less than 8, intubate').",
          "Increased ICP: Cushing's Triad (Bradycardia, Systolic Hypertension with widened pulse pressure, Irregular respirations)."
        ],
        bengaliTip: "Cushing's Triad হলো শক-এর বিপরীত: রক্তচাপ বাড়ে কিন্তু নাড়ির গতি (Pulse) এবং শ্বাসপ্রশ্বাস কমে যায়।"
      }
    ]
  },
  {
    id: 14,
    dayNumber: 14,
    dateStr: "2026-11-06",
    displayDate: "6 November 2026",
    weekNumber: 2,
    weekTitle: "Week 2: Clinical Nursing — 31 October–6 November 2026",
    title: "Pharmacology: Drug Classes, Dosages & Calculations",
    nursingTopic: "Pharmacology — drug classes, routes, adverse effects, medication safety and calculations.",
    generalTopic: "Arithmetic — time/work and speed/distance.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "High-Alert Medications & Specific Antidotes",
        pointsEn: [
          "Heparin antidote: Protamine Sulfate; Warfarin antidote: Vitamin K (Phytonadione).",
          "Paracetamol (Acetaminophen) antidote: N-Acetylcysteine (NAC).",
          "Opioids/Morphine antidote: Naloxone (Narcan).",
          "Magnesium Sulfate toxicity antidote: 10% Calcium Gluconate.",
          "Pediatric / IV drop formula: (Volume in mL × Drop Factor) / (Time in minutes) = Drops per minute (gtts/min)."
        ],
        bengaliTip: "হেপারিনের অ্যান্টিডোট প্রোতামিন সালফেট, আর ওয়ারফারিনের অ্যান্টিডোট ভিটামিন কে। ম্যাগনেসিয়াম টক্সিসিটির প্রতিকার ক্যালসিয়াম গ্লুকোনেট।"
      }
    ]
  },

  // WEEK 3: MATERNAL, CHILD & COMMUNITY NURSING (7 - 13 November 2026)
  {
    id: 15,
    dayNumber: 15,
    dateStr: "2026-11-07",
    displayDate: "7 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Midwifery: Antenatal Care & Stages of Labour",
    nursingTopic: "Midwifery — antenatal care, stages of labour, maternal assessment and normal delivery.",
    generalTopic: "General Awareness — static GK and current affairs.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Stages of Labour & Naegele's Rule",
        pointsEn: [
          "EDD Calculation (Naegele's Rule): First day of LMP + 9 calendar months + 7 days (or LMP + 1 year - 3 months + 7 days).",
          "Stage 1: Onset of true labour pain to full cervical dilatation (10 cm).",
          "Stage 2: Full dilatation to birth of fetus.",
          "Stage 3: Delivery of infant to complete expulsion of placenta and membranes.",
          "Stage 4: First 1-4 hours post-delivery (observation for Postpartum Hemorrhage - PPH)."
        ],
        bengaliTip: "প্রসবের ৩য় ধাপ হলো প্লাসেন্টা ডেলিভারি, এবং ৪র্থ ধাপ হলো প্রসবোত্তর নিবিড় পর্যবেক্ষণ (PPH রোধের প্রধান সময়)।"
      }
    ]
  },
  {
    id: 16,
    dayNumber: 16,
    dateStr: "2026-11-08",
    displayDate: "8 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Full CBT Mock Test 2 (100 Questions in 90 Mins)",
    nursingTopic: "Full CBT mock: Midwifery, Pediatrics, Med-Surg, Foundations, Anatomy, Reasoning, Arithmetic, Science & GK.",
    generalTopic: "Full Exam Simulation: 100 questions in 90 minutes. Detailed post-test review.",
    mcqTarget: 100,
    isFullMock: true,
    timeLimitMins: 90,
    questionCount: 100,
    revisionNotes: [
      {
        topic: "Mock Test 2 Analysis Focus",
        pointsEn: [
          "Benchmark target: Minimum 90 correct answers needed to clear the day checklist gate.",
          "Analyze unforced errors in Arithmetic and Reasoning.",
          "Focus on OBG drug dosages (Oxytocin, Methergine, MgSO4)."
        ],
        bengaliTip: "ফুল মক টেস্ট ২ এ মাতৃত্ব ও শিশুস্বাস্থ্য প্রশ্নের অনুপাত বেশি থাকবে। প্রতিটি ভুল উত্তরের ব্যাখ্যা গভীর মনোযোগ দিয়ে পড়বে।"
      }
    ]
  },
  {
    id: 17,
    dayNumber: 17,
    dateStr: "2026-11-09",
    displayDate: "9 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Obstetric Complications, Newborn Care & Family Planning",
    nursingTopic: "Obstetric complications, postpartum care, newborn care and family planning.",
    generalTopic: "Reasoning — syllogism and logical questions.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Obstetric Emergencies & APGAR Score",
        pointsEn: [
          "APGAR assessed at 1 min and 5 min: Appearance (Color), Pulse (Heart rate), Grimace (Reflex irritability), Activity (Muscle tone), Respiration. 7-10 normal, 4-6 moderate depression, 0-3 severe depression.",
          "Postpartum Hemorrhage (PPH): Blood loss >500 mL in vaginal delivery, >1000 mL in Cesarean. Most common cause: Uterine Atony (boggy uterus).",
          "Eclampsia: Preeclampsia with seizures. Drug of choice: Magnesium Sulfate (Pritchard regimen)."
        ],
        bengaliTip: "PPH এর সবচেয়ে প্রধান কারণ Uterine Atony (জরায়ুর শিথিলতা)। এক্লাম্পসিয়ার খিঁচুনি বন্ধের প্রধান ড্রাগ ম্যাগনেসিয়াম সালফেট।"
      }
    ]
  },
  {
    id: 18,
    dayNumber: 18,
    dateStr: "2026-11-10",
    displayDate: "10 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Child Health: Growth, Milestones & Immunisation",
    nursingTopic: "Child Health Nursing — growth, development, milestones and immunisation.",
    generalTopic: "Arithmetic — mixed practice.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Developmental Milestones & National Immunization",
        pointsEn: [
          "Weight: Doubles by 5-6 months, triples by 12 months (1 year), quadruples by 2 years.",
          "Gross Motor: Social smile (2 months), Neck holding (3 months), Rolls over (5 months), Sits without support (8 months), Stands alone (12 months).",
          "Birth Vaccines: BCG (0.05 mL intradermal in left deltoid), OPV-0 (2 drops oral), Hepatitis B birth dose (0.5 mL IM anterolateral thigh)."
        ],
        bengaliTip: "শিশুর ওজন ৫ মাসে দ্বিগুণ এবং ১ বছরে তিনগুণ হয়। BCG টিকা জন্মের সময় দেওয়া হয় বাম হাতের কাঁধে চামড়ার ভেতর (Intradermal)।"
      }
    ]
  },
  {
    id: 19,
    dayNumber: 19,
    dateStr: "2026-11-11",
    displayDate: "11 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Child Health: Common Illnesses, Nutrition & Emergencies",
    nursingTopic: "Child Health Nursing — common paediatric illnesses, nutrition and emergency care.",
    generalTopic: "General Science — mixed MCQs.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Pediatric Emergencies & Dehydration Assessment",
        pointsEn: [
          "IMNCI Diarrhea classification: Some dehydration vs Severe dehydration (sunken eyes, skin pinch goes back very slowly >2 seconds, lethargic).",
          "Croup (Laryngotracheobronchitis): Barking cough, inspiratory stridor, steeple sign on X-ray.",
          "Epiglottitis: Thumb sign, drooling of saliva, tripod position. NEVER inspect throat with tongue depressor!"
        ],
        bengaliTip: "এপিগ্লটাইটিস আক্রান্ত শিশুর মুখের ভেতর কখনো জিহ্বার ডিপ্রেসর (Tongue Depressor) ঢোকাবে না, এতে হঠাৎ শ্বাসনালী সম্পূর্ণ বন্ধ হয়ে যেতে পারে।"
      }
    ]
  },
  {
    id: 20,
    dayNumber: 20,
    dateStr: "2026-11-12",
    displayDate: "12 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Community Health: Epidemiology & National Programmes",
    nursingTopic: "Community Health Nursing — epidemiology, prevention, primary health care and national programmes.",
    generalTopic: "General Awareness — revision.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Levels of Prevention & Health Centre Population Norms",
        pointsEn: [
          "Primordial: Preventing development of risk factors in entire population (lifestyle education for youth).",
          "Primary: Specific protection and health promotion before disease occurs (Immunization, condoms, helmets).",
          "Secondary: Early diagnosis and prompt treatment to stop progression (Screening, Pap smear, Sputum AFB test).",
          "Tertiary: Disability limitation and rehabilitation (Physiotherapy, prosthesis).",
          "Population norms: Sub-Centre (5,000 plain / 3,000 hilly); PHC (30,000 plain / 20,000 hilly); CHC (1,20,000 plain / 80,000 hilly)."
        ],
        bengaliTip: "টিকা দেওয়া হলো Primary prevention, আর রোগ নির্ণয়ের স্ক্রিনিং টেস্ট (যেমন Pap smear) হলো Secondary prevention।"
      }
    ]
  },
  {
    id: 21,
    dayNumber: 21,
    dateStr: "2026-11-13",
    displayDate: "13 November 2026",
    weekNumber: 3,
    weekTitle: "Week 3: Maternal, Child & Community — 7–13 November 2026",
    title: "Mental Health Nursing & Patient Safety",
    nursingTopic: "Mental Health Nursing — psychiatric conditions, therapeutic communication and patient safety.",
    generalTopic: "Reasoning — mixed practice.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Psychiatric Conditions & Therapeutic Care",
        pointsEn: [
          "Schizophrenia: Bleuler's 4 A's (Affect blunting, Autism, Ambivalence, Associative looseness). Auditory hallucinations are most common.",
          "Lithium Carbonate: Therapeutic window 0.6 - 1.2 mEq/L. Maintain adequate sodium and water intake to avoid toxicity (>1.5 mEq/L causes coarse tremors, ataxia).",
          "Defense Mechanisms: Projection (blaming others for one's own faults), Sublimation (channeling unacceptable urges into socially productive goals)."
        ],
        bengaliTip: "লিথিয়াম থেরাপিতে সোডিয়ামের ভারসাম্য ঠিক রাখা জরুরি। শরীরে লবণ কমলে লিথিয়াম টক্সিসিটি বেড়ে যায়।"
      }
    ]
  },

  // WEEK 4: REVISION AND MOCK TESTS (14 - 20 November 2026)
  {
    id: 22,
    dayNumber: 22,
    dateStr: "2026-11-14",
    displayDate: "14 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Nursing Management, Research & Behavioral Sciences",
    nursingTopic: "Nursing Management, Education, Research, Statistics, Psychology and Sociology.",
    generalTopic: "Arithmetic and General Science mixed set.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Management Principles & Research Methodology",
        pointsEn: [
          "POSDCORB (Gulick & Urwick): Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.",
          "Leadership styles: Autocratic (directive), Democratic (participative), Laissez-faire (hands-off).",
          "Research Sampling: Probability (Simple random, Stratified, Systematic, Cluster) vs Non-probability (Convenience, Purposive, Snowball)."
        ],
        bengaliTip: "জরুরি আইসিইউ পরিস্থিতিতে Autocratic নেতৃত্ব দরকার, কিন্তু দৈনন্দিন দল পরিচালনায় Democratic নেতৃত্ব সবচেয়ে ফলপ্রসূ।"
      }
    ]
  },
  {
    id: 23,
    dayNumber: 23,
    dateStr: "2026-11-15",
    displayDate: "15 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Full CBT Mock Test 3 (100 Questions in 90 Mins)",
    nursingTopic: "Full CBT mock: 100 questions in 90 minutes. Compare errors with previous mocks.",
    generalTopic: "Comparison analysis of weak areas against Mock 1 and Mock 2.",
    mcqTarget: 100,
    isFullMock: true,
    timeLimitMins: 90,
    questionCount: 100,
    revisionNotes: [
      {
        topic: "Mid-Term Mock Benchmark",
        pointsEn: [
          "Compare time spent per section with earlier attempts.",
          "Target >90% to unlock this critical revision milestone.",
          "Tag recurring difficult questions for Day 24 targeted revision."
        ],
        bengaliTip: "মক ৩ তে আগের দুটো মকের তুলনায় গতি ও ভুলের সংখ্যা কমছে কি না মূল্যায়ন করো।"
      }
    ]
  },
  {
    id: 24,
    dayNumber: 24,
    dateStr: "2026-11-16",
    displayDate: "16 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Targeted Revision: Med-Surg & Pharmacology",
    nursingTopic: "Revise weak Medical-Surgical Nursing topics and Pharmacology.",
    generalTopic: "Review the weakest non-nursing section.",
    mcqTarget: 50,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Critical Med-Surg Traps",
        pointsEn: [
          "Burns: Rule of Nines (Head 9%, Each Arm 9%, Chest & Abdomen 18%, Back 18%, Each Leg 18%, Perineum 1%). Parkland formula: 4 mL × kg × % TBSA.",
          "Digoxin: Toxicity signs (anorexia, nausea, yellow-green halos around lights). Hold if heart rate < 60 bpm in adults.",
          "Insulin types: Rapid-acting (Lispro, Aspart), Short-acting (Regular - only one given IV), Intermediate (NPH), Long-acting (Glargine)."
        ],
        bengaliTip: "রেগুলার ইনসুলিনই একমাত্র ইনসুলিন যা শিরাপথে (IV) দেওয়া যায়। ডিগক্সিনের বিষক্রিয়ায় চোখে হলুদ-সবুজ বলয় দেখা যায়।"
      }
    ]
  },
  {
    id: 25,
    dayNumber: 25,
    dateStr: "2026-11-17",
    displayDate: "17 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Targeted Revision: Midwifery, Ped & Community",
    nursingTopic: "Revise Midwifery, Obstetrics, Child Health and Community Health.",
    generalTopic: "Arithmetic and Reasoning timed practice.",
    mcqTarget: 50,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "High-Frequency Maternal & Child Points",
        pointsEn: [
          "Lochia: Rubra (days 1-3, dark red), Serosa (days 4-10, pinkish/brown), Alba (days 10-21, whitish/yellow).",
          "Cold Chain Equipment: ILR (Ice Lined Refrigerator) kept at +2°C to +8°C for vaccines; Deep freezer at -15°C to -25°C for OPV and ice packs."
        ],
        bengaliTip: "ভ্যাকসিন সংরক্ষণের আদর্শ তাপমাত্রা হলো +২° থেকে +৮° সেলসিয়াস। ডিপ ফ্রিজারে থাকে OPV এবং বরফের প্যাক।"
      }
    ]
  },
  {
    id: 26,
    dayNumber: 26,
    dateStr: "2026-11-18",
    displayDate: "18 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Targeted Revision: Foundations, BMW, Anatomy & Micro",
    nursingTopic: "Revise Foundations, Infection Control, Anatomy, Microbiology and Nutrition.",
    generalTopic: "General Science and General Awareness timed practice.",
    mcqTarget: 50,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Core Fundamentals Checklist",
        pointsEn: [
          "Spaulding's Classification: Critical items (enter sterile tissue, need sterilization), Semi-critical (contact intact mucous membranes, need high-level disinfection), Non-critical (contact intact skin, need low/intermediate disinfection).",
          "Enema tube insertion depth: Adult 3-4 inches (7.5 - 10 cm); Child 2-3 inches (5 - 7.5 cm)."
        ],
        bengaliTip: "প্রাপ্তবয়স্কদের ক্ষেত্রে এনিমা টিউব পায়ুপথে ৩ থেকে ৪ ইঞ্চি (৭.৫-১০ সেমি) প্রবেশ করাতে হয়।"
      }
    ]
  },
  {
    id: 27,
    dayNumber: 27,
    dateStr: "2026-11-19",
    displayDate: "19 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Full CBT Mock Test 4 (100 Questions in 90 Mins)",
    nursingTopic: "Full CBT mock: 100 questions in 90 minutes. Analyse performance and identify final weak areas.",
    generalTopic: "Speed, accuracy and negative marking elimination drill.",
    mcqTarget: 100,
    isFullMock: true,
    timeLimitMins: 90,
    questionCount: 100,
    revisionNotes: [
      {
        topic: "Speed & Accuracy Fine-Tuning",
        pointsEn: [
          "Simulate full exam environment: uninterrupted 90 minutes.",
          "Identify and eliminate hesitation on standard nursing formulas and lab ranges.",
          "Must achieve 90% or higher to earn the checklist tick."
        ],
        bengaliTip: "এই মকটিতে কোনো বিরতি না নিয়ে সম্পূর্ণ পরীক্ষার হলের পরিবেশে পরীক্ষাটি শেষ করো।"
      }
    ]
  },
  {
    id: 28,
    dayNumber: 28,
    dateStr: "2026-11-20",
    displayDate: "20 November 2026",
    weekNumber: 4,
    weekTitle: "Week 4: Revision & CBT Mocks — 14–20 November 2026",
    title: "Final Targeted Weak-Spot Elimination",
    nursingTopic: "Targeted revision of the three weakest nursing topics.",
    generalTopic: "Revise weak non-nursing topics.",
    mcqTarget: 40,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Precision Fixes for Final Stretch",
        pointsEn: [
          "Focus on confusing pairs: Abruptio Placentae (painful, dark bleeding) vs Placenta Previa (painless, bright red bleeding).",
          "Kernig's and Brudzinski's signs indicate meningeal irritation in meningitis."
        ],
        bengaliTip: "Placenta Previa তে রক্তক্ষরণ হয় ব্যথাহীন ও উজ্জ্বল লাল; আর Abruptio Placentae তে তীব্র পেটে ব্যথাসহ কালচে রক্ত বের হয়।"
      }
    ]
  },

  // FINAL REVISION (21 - 22 November 2026)
  {
    id: 29,
    dayNumber: 29,
    dateStr: "2026-11-21",
    displayDate: "21 November 2026",
    weekNumber: 5,
    weekTitle: "Final Revision — 21–22 November 2026",
    title: "Final Full CBT Mock Test 5 (Grand Rehearsal)",
    nursingTopic: "Final Full CBT mock: 100 questions in 90 minutes. Review incorrect answers and final readiness.",
    generalTopic: "Grand exam rehearsal under actual RRB CEN 05/2026 timing.",
    mcqTarget: 100,
    isFullMock: true,
    timeLimitMins: 90,
    questionCount: 100,
    revisionNotes: [
      {
        topic: "Grand CBT Rehearsal",
        pointsEn: [
          "Final full dress test before actual exam.",
          "Consolidate confidence, maintain calm mindset.",
          "Achieve >= 90% to seal exam readiness."
        ],
        bengaliTip: "এটি তোমার অন্তিম ফুল মক। আত্মবিশ্বাস বজায় রাখো, তোমার দীর্ঘ প্রস্তুতির প্রতি আস্থা রাখো!"
      }
    ]
  },
  {
    id: 30,
    dayNumber: 30,
    dateStr: "2026-11-22",
    displayDate: "22 November 2026",
    weekNumber: 5,
    weekTitle: "Final Revision — 21–22 November 2026",
    title: "Calm Light Revision & Exam Readiness",
    nursingTopic: "Light revision: short notes, drug safety, infection control, important nursing procedures and previous mistakes.",
    generalTopic: "Formulas and reasoning shortcuts. No heavy new topics. Rest and document preparation.",
    mcqTarget: 25,
    isFullMock: false,
    timeLimitMins: 25,
    questionCount: 20,
    revisionNotes: [
      {
        topic: "Pre-Exam Calming & Document Checklist",
        pointsEn: [
          "No heavy new studying today! Focus on positive visualization and adequate 8-hour sleep.",
          "Check RRB e-Call letter printout, valid original photo ID proof (Aadhaar/Voter/Passport), and passport photos.",
          "Remember the Golden Rule: Read every question stem carefully for negative words ('EXCEPT', 'NOT', 'LEAST likely')."
        ],
        bengaliTip: "আজ কোনো নতুন কঠিন জিনিস পড়ার প্রয়োজন নেই। পর্যাপ্ত বিশ্রাম নাও, অ্যাডমিট কার্ড ও প্রয়োজনীয় কাগজপত্র গুছিয়ে রাখো। অল দ্য বেস্ট রেমিটা! 💙"
      }
    ]
  }
];
