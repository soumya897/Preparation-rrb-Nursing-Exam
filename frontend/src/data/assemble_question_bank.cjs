// Script to assemble questionBank.ts with all 420 official questions + balanced mock system
const fs = require('fs');
const path = require('path');

const msQuestions = require('./generators/gen_med_surg.cjs');
const obgQuestions = require('./generators/gen_obg.cjs');
const chnQuestions = require('./generators/gen_chn.cjs');
const pedQuestions = require('./generators/gen_ped.cjs');
const fonQuestions = require('./generators/gen_fon.cjs');
const apQuestions = require('./generators/gen_ap.cjs');
const microQuestions = require('./generators/gen_micro.cjs');
const pharmaQuestions = require('./generators/gen_pharma.cjs');
const psychQuestions = require('./generators/gen_psych.cjs');
const socQuestions = require('./generators/gen_soc.cjs');

// Foundation & General Non-Nursing Questions for Days 1-6 and Full Mock balance
const generalAndFoundationalQuestions = [
  // --- Day 1 ---
  {
    id: "d1-q1",
    dayId: 1,
    section: "NURSING",
    topic: "Nursing Process - Assessment",
    difficulty: "EASY",
    question: "Which of the following is considered 'subjective data' during a patient's nursing assessment?",
    options: [
      "Blood pressure measurement of 140/90 mmHg",
      "Patient states, 'I feel severe throbbing pain in my head'",
      "Serum potassium level of 3.2 mEq/L",
      "Presence of 2+ pitting edema in lower extremities"
    ],
    correctIndex: 1,
    explanationEn: "Subjective data consists of the client's verbal descriptions of their health problems, feelings, and symptoms that cannot be directly measured or verified by the nurse. Measured signs like BP, lab values, and edema are objective data.",
    explanationBn: "রোগী নিজে মুখে যা বর্ণনা করেন (যেমন: তীব্র মাথাব্যথা) তা হলো Subjective Data। নার্স বা ডাক্তার যা সরাসরি পরিমাপ বা পরীক্ষা করেন তা হলো Objective Data।"
  },
  {
    id: "d1-q2",
    dayId: 1,
    section: "NURSING",
    topic: "Nursing Diagnosis - NANDA",
    difficulty: "MEDIUM",
    question: "In formulating a three-part NANDA nursing diagnosis, what does the phrase 'as evidenced by' represent?",
    options: [
      "The underlying pathophysiology or etiology",
      "The defining characteristics (signs and symptoms)",
      "The medical diagnosis given by the physician",
      "The short-term and long-term nursing outcomes"
    ],
    correctIndex: 1,
    explanationEn: "A complete three-part nursing diagnosis includes Problem (P) + Etiology/Related to (E) + Signs/Symptoms/As evidenced by (S). 'As evidenced by' introduces the defining characteristics and clinical manifestations.",
    explanationBn: "NANDA নার্সিং ডায়াগনোসিসে 'As evidenced by' দিয়ে রোগীর লক্ষণ ও ক্লিনিক্যাল উপসর্গ (Defining characteristics) বোঝানো হয়।"
  },
  {
    id: "d1-q3",
    dayId: 1,
    section: "NURSING",
    topic: "Nursing Care Planning - Maslow Priority",
    difficulty: "MEDIUM",
    question: "According to Maslow's Hierarchy of Needs, which nursing diagnosis must receive the highest priority?",
    options: [
      "Risk for loneliness related to social isolation",
      "Ineffective airway clearance related to thick tracheobronchial secretions",
      "Deficient knowledge regarding diabetic foot care",
      "Disturbed body image related to surgical scar"
    ],
    correctIndex: 1,
    explanationEn: "According to Maslow's hierarchy, physiological needs (specifically Airway, Breathing, and Circulation) take top priority over safety, love, and esteem needs.",
    explanationBn: "ম্যাসলোর চাহিদা তত্ত্ব অনুযায়ী শারীরবৃত্তীয় প্রয়োজন—বিশেষ করে শ্বাসনালী মুক্ত রাখা (Airway)—সর্বদা সর্বোচ্চ প্রাধান্য পাবে।"
  },
  {
    id: "d1-q4",
    dayId: 1,
    section: "NURSING",
    topic: "Nursing Evaluation",
    difficulty: "EASY",
    question: "What is the primary purpose of the 'Evaluation' phase in the nursing process?",
    options: [
      "To administer doctor's prescribed medications on time",
      "To establish baseline laboratory parameters",
      "To determine whether patient goals and expected outcomes were achieved",
      "To delegate bedside duties to nursing assistants"
    ],
    correctIndex: 2,
    explanationEn: "Evaluation is the final step where the nurse compares the patient's current health status with expected outcomes to determine if goals are met, partially met, or if the plan needs modification.",
    explanationBn: "Evaluation ধাপের প্রধান উদ্দেশ্য হলো রোগী নির্ধারিত লক্ষ্য অর্জন করতে পেরেছে কি না তা যাচাই করা ও যত্ন পরিকল্পনা সংশোধন করা।"
  },
  {
    id: "d1-q5",
    dayId: 1,
    section: "REASONING",
    topic: "Analogy - Medical Instruments",
    difficulty: "EASY",
    question: "Thermometer : Temperature :: Sphygmomanometer : ?",
    options: [
      "Pulse Rate",
      "Blood Sugar",
      "Blood Pressure",
      "Respiratory Rate"
    ],
    correctIndex: 2,
    explanationEn: "A thermometer is an instrument used to measure temperature, while a sphygmomanometer is an instrument used to measure arterial blood pressure.",
    explanationBn: "থার্মোমিটার দিয়ে যেমন তাপমাত্রা মাপা হয়, তেমনি স্ফিগমোম্যানোমিটার দিয়ে রক্তচাপ (Blood Pressure) পরিমাপ করা হয়।"
  },
  {
    id: "d1-q6",
    dayId: 1,
    section: "REASONING",
    topic: "Classification (Odd One Out)",
    difficulty: "MEDIUM",
    question: "Find the odd one out among the following medical conditions:",
    options: [
      "Tuberculosis",
      "Cholera",
      "Pertussis",
      "Hepatitis B"
    ],
    correctIndex: 3,
    explanationEn: "Tuberculosis, Cholera, and Pertussis are bacterial diseases caused by Mycobacterium tuberculosis, Vibrio cholerae, and Bordetella pertussis respectively. Hepatitis B is a viral infection.",
    explanationBn: "যক্ষ্মা, কলেরা ও পার্টুসিস হলো ব্যাকটেরিয়া ঘটিত রোগ; একমাত্র হেপাটাইটিস বি হলো ভাইরাস ঘটিত রোগ।"
  },
  {
    id: "d1-q7",
    dayId: 1,
    section: "NURSING",
    topic: "Ethics in Nursing - Autonomy",
    difficulty: "MEDIUM",
    question: "A competent patient refuses a blood transfusion based on personal and religious beliefs. Which ethical principle must the nurse uphold?",
    options: [
      "Beneficence",
      "Non-maleficence",
      "Autonomy",
      "Veracity"
    ],
    correctIndex: 2,
    explanationEn: "Autonomy is the ethical principle recognizing the right of competent individuals to make decisions about their own healthcare, including treatment refusal.",
    explanationBn: "অটোনমি (Autonomy) নীতি অনুযায়ী একজন প্রাপ্তবয়স্ক ও সচেতন রোগীর নিজের চিকিৎসা বা রক্ত নিতে অস্বীকার করার সম্পূর্ণ অধিকার রয়েছে।"
  },
  {
    id: "d1-q8",
    dayId: 1,
    section: "NURSING",
    topic: "Documentation Principles",
    difficulty: "EASY",
    question: "Which of the following is a fundamental legal rule of nursing documentation?",
    options: [
      "Documenting care ahead of time before it is provided",
      "Leaving blank lines between nursing notes",
      "'If it was not documented, it was not done'",
      "Erasing incorrect entries with correction fluid"
    ],
    correctIndex: 2,
    explanationEn: "In medical-legal jurisprudence, 'if it wasn't charted, it wasn't done.' Timely, accurate, and contemporaneous charting is legally indispensable.",
    explanationBn: "নার্সিং আইনের প্রধান নীতি হলো: যা খাতায় লেখা নেই, তা সেবা হিসেবে সম্পন্ন হয়নি বলে গণ্য হবে ('If not documented, not done')।"
  },
  {
    id: "d1-q9",
    dayId: 1,
    section: "REASONING",
    topic: "Analogy - Anatomical Units",
    difficulty: "EASY",
    question: "Nephron : Kidney :: Neuron : ?",
    options: [
      "Liver",
      "Brain / Nervous System",
      "Heart",
      "Lungs"
    ],
    correctIndex: 1,
    explanationEn: "Nephron is the basic structural and functional unit of the kidney, just as the neuron is the basic functional unit of the brain and nervous system.",
    explanationBn: "নেফ্রন যেমন বৃক্কের (Kidney) গঠনমূলক ও কার্যমূলক একক, তেমনি নিউরন হলো স্নায়ুতন্ত্রের (Brain/Nervous System) মৌলিক একক।"
  },
  {
    id: "d1-q10",
    dayId: 1,
    section: "NURSING",
    topic: "Therapeutic Communication",
    difficulty: "MEDIUM",
    question: "A patient facing surgery says, 'I am terrified I might not wake up.' What is the nurse's most therapeutic response?",
    options: [
      "'Don't worry, our surgeons never make mistakes.'",
      "'You shouldn't feel that way; everyone gets nervous.'",
      "'Tell me more about what is making you feel afraid.'",
      "'Let's talk about something happy to take your mind off it.'"
    ],
    correctIndex: 2,
    explanationEn: "Open-ended, empathetic exploration ('Tell me more...') validates the client's feelings and encourages them to express their underlying anxieties without false reassurance.",
    explanationBn: "রোগীর ভয় দূর করতে 'Tell me more...' বলে তার ভয়ের কারণটি মন দিয়ে শোনাই হলো সঠিক থেরাপিউটিক রেসপন্স।"
  },

  // --- Day 2 ---
  {
    id: "d2-q1",
    dayId: 2,
    section: "NURSING",
    topic: "Vital Signs - Blood Pressure Cuff",
    difficulty: "MEDIUM",
    question: "When measuring blood pressure, using a cuff that is too narrow or too small for the patient's arm will cause:",
    options: [
      "A falsely low blood pressure reading",
      "A falsely elevated (high) blood pressure reading",
      "An accurate diastolic but inaccurate systolic reading",
      "No effect on the recorded values"
    ],
    correctIndex: 1,
    explanationEn: "A cuff that is too narrow or loose results in falsely elevated (high) BP readings because extra pressure is required to compress the artery. A cuff that is too wide causes falsely low readings.",
    explanationBn: "রোগীর বাহুর তুলনায় ছোট বা সরু ব্লাড প্রেশার কাফ ব্যবহার করলে রক্তচাপের মান বাস্তবে যা তার চেয়ে বেশি (Falsely high) দেখাবে।"
  },
  {
    id: "d2-q2",
    dayId: 2,
    section: "NURSING",
    topic: "Patient Positioning - Enema Administration",
    difficulty: "EASY",
    question: "Which position is best suited for administering a cleansing enema or rectal examination in adult patients?",
    options: [
      "Dorsal recumbent position",
      "Left lateral Sims' position",
      "Trendelenburg position",
      "Lithotomy position"
    ],
    correctIndex: 1,
    explanationEn: "Left Sims' position allows enema solution to flow naturally downward into the sigmoid colon and rectum by gravity, minimizing reflux and abdominal cramping.",
    explanationBn: "এনিমা দেওয়ার জন্য রোগীর উপযুক্ত অবস্থান হলো বাঁ-কাত হয়ে শোয়া বা Left Sims' position।"
  },
  {
    id: "d2-q3",
    dayId: 2,
    section: "NURSING",
    topic: "Physical Assessment - Sequence",
    difficulty: "MEDIUM",
    question: "What is the correct sequence of examination techniques for an abdominal physical assessment?",
    options: [
      "Inspection -> Palpation -> Percussion -> Auscultation",
      "Inspection -> Auscultation -> Percussion -> Palpation",
      "Palpation -> Inspection -> Auscultation -> Percussion",
      "Auscultation -> Inspection -> Palpation -> Percussion"
    ],
    correctIndex: 1,
    explanationEn: "For abdomen: Inspection -> Auscultation -> Percussion -> Palpation (IAPP). Auscultation is performed before percussion and palpation so that manual manipulation does not artificially alter bowel sounds.",
    explanationBn: "পেট পরীক্ষার সঠিক ক্রম হলো: Inspection -> Auscultation -> Percussion -> Palpation (IAPP), যাতে চাপ লেগে অন্ত্রের শব্দ বদলে না যায়।"
  },
  {
    id: "d2-q4",
    dayId: 2,
    section: "ARITHMETIC",
    topic: "Percentages in Nursing",
    difficulty: "EASY",
    question: "A ward has 60 admitted patients. If 15% of the patients are scheduled for emergency surgery today, how many patients are having surgery?",
    options: [
      "6",
      "9",
      "12",
      "15"
    ],
    correctIndex: 1,
    explanationEn: "Number of patients = 15% of 60 = (15 / 100) × 60 = 9 patients.",
    explanationBn: "৬০ জনের ১৫% = (১৫/১০০) × ৬০ = ৯ জন রোগী।"
  },
  {
    id: "d2-q5",
    dayId: 2,
    section: "ARITHMETIC",
    topic: "Ratios in Hospital Staffing",
    difficulty: "MEDIUM",
    question: "In a medical camp, the ratio of female to male nurses is 5:3. If there are 24 male nurses, how many female nurses are in the camp?",
    options: [
      "32",
      "36",
      "40",
      "45"
    ],
    correctIndex: 2,
    explanationEn: "Ratio F:M = 5:3. If 3 parts = 24, 1 part = 8. Female nurses = 5 × 8 = 40.",
    explanationBn: "অনুপাত ৫:৩। ৩ ভাগ = ২৪ হলে, ১ ভাগ = ৮। সুতরাং মহিলা নার্স = ৫ × ৮ = ৪০ জন।"
  },
  {
    id: "d2-q6",
    dayId: 2,
    section: "NURSING",
    topic: "Vital Signs - Pulse Deficit",
    difficulty: "HARD",
    question: "A nurse finds an apical pulse of 88 bpm and a radial pulse of 76 bpm. What is the calculated pulse deficit?",
    options: [
      "12 bpm",
      "164 bpm",
      "6 bpm",
      "8 bpm"
    ],
    correctIndex: 0,
    explanationEn: "Pulse deficit = Apical pulse - Radial pulse = 88 - 76 = 12 bpm. It indicates that not all cardiac contractions are producing peripheral arterial waves, common in atrial fibrillation.",
    explanationBn: "পালস ডেফিসিট = অ্যাপিকাল পালস - রেডিয়াল পালস = ৮৮ - ৭৬ = ১২ bpm।"
  },

  // --- Day 3 ---
  {
    id: "d3-q1",
    dayId: 3,
    section: "NURSING",
    topic: "Biomedical Waste - Color Coding",
    difficulty: "EASY",
    question: "According to Biomedical Waste Management Rules, which category of waste must be discarded into the Yellow Bag?",
    options: [
      "Recyclable plastic syringes and IV tubing",
      "Human anatomical tissues, placenta, and blood-soaked cotton dressings",
      "Discarded metallic glass vials and ampoules",
      "Contaminated sharps, scalpel blades, and needles"
    ],
    correctIndex: 1,
    explanationEn: "Yellow bags are designated for incinerable organic waste: human tissues, anatomical organs, placenta, and cotton gauze soaked in body fluids.",
    explanationBn: "মানবদেহাংশ, গর্ভফুল (প্লাসেন্টা) এবং রক্তমাখা ড্রেসিং হলুদ ব্যাগে (Yellow Bag) ফেলতে হয় যা পরবর্তীতে পুড়িয়ে (Incineration) ফেলা হয়।"
  },
  {
    id: "d3-q2",
    dayId: 3,
    section: "NURSING",
    topic: "Biomedical Waste - White Container",
    difficulty: "EASY",
    question: "Used disposable needles and surgical scalpel blades must be discarded into which category of container?",
    options: [
      "Red bag",
      "White translucent puncture-proof container",
      "Blue cardboard box",
      "Black general waste container"
    ],
    correctIndex: 1,
    explanationEn: "All metallic sharps (needles, scalpels, lancets) must be deposited into rigid, white, puncture-proof, tamper-evident containers.",
    explanationBn: "ব্যবহৃত সূঁচ ও ব্লেড সাদা রঙের পাংচার-প্রুফ পাত্রে (White translucent container) ফেলতে হয়।"
  },
  {
    id: "d3-q3",
    dayId: 3,
    section: "NURSING",
    topic: "Autoclave Sterilisation Standards",
    difficulty: "MEDIUM",
    question: "What is the standard temperature, pressure, and minimum holding time for hospital steam autoclaving?",
    options: [
      "100°C at 10 psi for 10 minutes",
      "121°C at 15 psi for 15 to 20 minutes",
      "160°C at 30 psi for 60 minutes",
      "134°C at atmospheric pressure for 30 minutes"
    ],
    correctIndex: 1,
    explanationEn: "Standard moist heat steam sterilization (autoclaving) requires 121°C (250°F) at 15 pounds per square inch (psi) pressure for at least 15-20 minutes to kill all vegetative organisms and spores.",
    explanationBn: "অটোক্লেভের আদর্শ মান হলো ১২১°C তাপমাত্রা, ১৫ psi চাপ এবং ১৫ থেকে ২০ মিনিট সময়।"
  },
  {
    id: "d3-q4",
    dayId: 3,
    section: "NURSING",
    topic: "Hand Hygiene Duration",
    difficulty: "EASY",
    question: "According to WHO guidelines, what is the recommended minimum duration for effective hand hygiene using an alcohol-based hand rub?",
    options: [
      "5 to 10 seconds",
      "20 to 30 seconds",
      "40 to 60 seconds",
      "2 full minutes"
    ],
    correctIndex: 1,
    explanationEn: "WHO recommends 20 to 30 seconds for alcohol-based hand rubs, and 40 to 60 seconds when washing visibly soiled hands with soap and water.",
    explanationBn: "অ্যালকোহল হ্যান্ড রাব দিয়ে হাত জীবাণুমুক্ত করার আদর্শ সময় হলো ২০ থেকে ৩০ সেকেন্ড।"
  },
  {
    id: "d3-q5",
    dayId: 3,
    section: "GENERAL_SCIENCE",
    topic: "Cell Biology - Mitochondria",
    difficulty: "EASY",
    question: "Which organelle is universally known as the 'powerhouse of the cell' due to its role in ATP synthesis?",
    options: [
      "Ribosome",
      "Golgi apparatus",
      "Mitochondria",
      "Lysosome"
    ],
    correctIndex: 2,
    explanationEn: "Mitochondria generate the majority of cellular adenosine triphosphate (ATP) through oxidative phosphorylation, earning the title 'powerhouse of the cell.'",
    explanationBn: "মাইটোকন্ড্রিয়ায় কোষের শক্তি (ATP) উৎপন্ন হয় বলে একে 'কোষের শক্তিঘর' (Powerhouse) বলা হয়।"
  },

  // --- Day 4 ---
  {
    id: "d4-q1",
    dayId: 4,
    section: "NURSING",
    topic: "Cardiovascular Anatomy - Pacemaker",
    difficulty: "EASY",
    question: "Which anatomical structure is known as the natural pacemaker of the human heart?",
    options: [
      "Atrioventricular (AV) Node",
      "Sinoatrial (SA) Node",
      "Bundle of His",
      "Purkinje Fibers"
    ],
    correctIndex: 1,
    explanationEn: "The Sinoatrial (SA) Node in the right atrium initiates electrical impulses at a physiological intrinsic rate of 60-100 beats per minute.",
    explanationBn: "হৃদপিণ্ডের প্রাকৃতিক পেসমেকার হলো সাইনোঅ্যাট্রিয়াল নোড (SA Node)।"
  },
  {
    id: "d4-q2",
    dayId: 4,
    section: "NURSING",
    topic: "Hematology - RBC Lifespan",
    difficulty: "EASY",
    question: "What is the normal average lifespan of mature human erythrocytes (red blood cells) in systemic circulation?",
    options: [
      "30 days",
      "60 days",
      "120 days",
      "365 days"
    ],
    correctIndex: 2,
    explanationEn: "Human red blood cells circulate for an average of 120 days before becoming senescent and being broken down by reticuloendothelial macrophages in the spleen and liver.",
    explanationBn: "লোহিত রক্তকণিকার (RBC) গড় আয়ুষ্কাল হলো ১২০ দিন।"
  },
  {
    id: "d4-q3",
    dayId: 4,
    section: "NURSING",
    topic: "Respiratory Anatomy - Phrenic Nerve",
    difficulty: "MEDIUM",
    question: "Which nerve provides motor innervation to the diaphragm, the primary muscle of inspiration?",
    options: [
      "Vagus nerve (CN X)",
      "Phrenic nerve (C3-C5)",
      "Intercostal nerve (T1-T6)",
      "Accessory nerve (CN XI)"
    ],
    correctIndex: 1,
    explanationEn: "The phrenic nerve arises from cervical spinal nerves C3, C4, and C5 ('C3, 4, 5 keep the diaphragm alive') and supplies exclusive motor innervation to the diaphragm.",
    explanationBn: "ডায়াফ্রামের প্রধান মোটর স্নায়ু হলো ফ্রেনিক নার্ভ (Phrenic nerve - C3, C4, C5)।"
  },
  {
    id: "d4-q4",
    dayId: 4,
    section: "REASONING",
    topic: "Number Series",
    difficulty: "MEDIUM",
    question: "Complete the series: 2, 6, 12, 20, 30, ?",
    options: [
      "36",
      "40",
      "42",
      "48"
    ],
    correctIndex: 2,
    explanationEn: "Pattern: Differences are consecutive even numbers (+4, +6, +8, +10, +12). Next number = 30 + 12 = 42 (or n² + n: 1²+1=2, 2²+2=6, 3²+3=12, 4²+4=20, 5²+5=30, 6²+6=42).",
    explanationBn: "পার্থক্য ক্রম: +৪, +৬, +৮, +১০, +১২। অতএব ৩০ + ১২ = ৪২।"
  },
  {
    id: "d4-q5",
    dayId: 4,
    section: "REASONING",
    topic: "Coding-Decoding",
    difficulty: "EASY",
    question: "If 'NURSE' is coded as 'OWSTF' (each letter shifted +1 forward), how will 'HEART' be coded?",
    options: [
      "IFBSU",
      "IGCTU",
      "HFBSU",
      "IFCRU"
    ],
    correctIndex: 0,
    explanationEn: "Each letter is shifted forward by 1 position: H->I, E->F, A->B, R->S, T->U = IFBSU.",
    explanationBn: "প্রতিটি বর্ণ ১ ঘর এগিয়েছে: H->I, E->F, A->B, R->S, T->U = IFBSU।"
  },

  // --- Day 5 ---
  {
    id: "d5-q1",
    dayId: 5,
    section: "NURSING",
    topic: "Renal Physiology - GFR",
    difficulty: "EASY",
    question: "What is the normal resting Glomerular Filtration Rate (GFR) in a healthy young adult?",
    options: [
      "60 mL/min/1.73 m²",
      "125 mL/min/1.73 m²",
      "180 mL/min/1.73 m²",
      "250 mL/min/1.73 m²"
    ],
    correctIndex: 1,
    explanationEn: "Normal adult resting GFR is approximately 125 mL/min/1.73 m² (about 180 liters of filtrate per day).",
    explanationBn: "স্বাভাবিক প্রাপ্তবয়স্কদের গ্লোমেরুলার ফিল্ট্রেশন রেট (GFR) হলো প্রায় ১২৫ মিলি/মিনিট।"
  },
  {
    id: "d5-q2",
    dayId: 5,
    section: "NURSING",
    topic: "Neuroanatomy - Medulla Centers",
    difficulty: "MEDIUM",
    question: "Vital cardiac, vasomotor, and respiratory reflex centers are located in which part of the brain?",
    options: [
      "Cerebrum",
      "Cerebellum",
      "Medulla Oblongata",
      "Hypothalamus"
    ],
    correctIndex: 2,
    explanationEn: "The medulla oblongata contains autonomic centers regulating cardiovascular rhythm, vasomotor tone, respirations, and vomiting reflexes.",
    explanationBn: "হৃদস্পন্দন ও শ্বাসপ্রশ্বাস নিয়ন্ত্রণকারী ভাইটাল সেন্টারগুলো মেডুলা অবলংগাটাতে (Medulla Oblongata) অবস্থিত।"
  },
  {
    id: "d5-q3",
    dayId: 5,
    section: "NURSING",
    topic: "Endocrine Anatomy - Beta Cells",
    difficulty: "EASY",
    question: "Insulin is synthesized and secreted by which specific cells of the pancreas?",
    options: [
      "Alpha cells of Islets of Langerhans",
      "Beta cells of Islets of Langerhans",
      "Delta cells of Islets of Langerhans",
      "Acinar exocrine cells"
    ],
    correctIndex: 1,
    explanationEn: "Pancreatic beta cells within the Islets of Langerhans secrete insulin, while alpha cells secrete glucagon and delta cells secrete somatostatin.",
    explanationBn: "অগ্ন্যাশয়ের আইলেটস অব ল্যাঙ্গারহ্যান্সের বিটা কোষ (Beta cells) থেকে ইনসুলিন নিঃসৃত হয়।"
  },
  {
    id: "d5-q4",
    dayId: 5,
    section: "ARITHMETIC",
    topic: "Averages in Clinical Data",
    difficulty: "EASY",
    question: "A nurse recorded pulse rates of four patients as 72, 76, 80, and 84 bpm. What is the average pulse rate?",
    options: [
      "76 bpm",
      "78 bpm",
      "80 bpm",
      "82 bpm"
    ],
    correctIndex: 1,
    explanationEn: "Sum = 72 + 76 + 80 + 84 = 312 bpm. Average = 312 / 4 = 78 bpm.",
    explanationBn: "গড় পাল্স রেট = (৭২ + ৭৬ + ৮০ + ৮৪) / ৪ = ৩১২ / ৪ = ৭৮ bpm।"
  },

  // --- Day 6 ---
  {
    id: "d6-q1",
    dayId: 6,
    section: "NURSING",
    topic: "Nutritional Deficiency - Vitamin A",
    difficulty: "EASY",
    question: "Bitot's spots, night blindness, and xerophthalmia are hallmark signs of deficiency of which vitamin?",
    options: [
      "Vitamin A (Retinol)",
      "Vitamin B1 (Thiamine)",
      "Vitamin C (Ascorbic acid)",
      "Vitamin D (Calciferol)"
    ],
    correctIndex: 0,
    explanationEn: "Vitamin A deficiency damages ocular rhodopsin regeneration and conjunctival goblet cells, producing night blindness, Bitot's spots, xerophthalmia, and keratomalacia.",
    explanationBn: "বিটট স্পট (Bitot's spots) ও রাতকানা রোগ ভিটামিন এ-এর ঘাটতির কারণে ঘটে।"
  },
  {
    id: "d6-q2",
    dayId: 6,
    section: "NURSING",
    topic: "Therapeutic Diet - DASH Diet",
    difficulty: "EASY",
    question: "Which dietary instruction is mandatory for a patient with essential hypertension on a DASH diet?",
    options: [
      "High sodium intake (> 5 g/day)",
      "Restriction of dietary sodium (< 2 g/day)",
      "Strict avoidance of all green vegetables",
      "High saturated animal fat consumption"
    ],
    correctIndex: 1,
    explanationEn: "DASH (Dietary Approaches to Stop Hypertension) emphasizes restricting sodium (< 2000 mg/day) and increasing potassium, magnesium, and dietary fiber.",
    explanationBn: "উচ্চ রক্তচাপের রোগীদের খাবারে সোডিয়ামের (লবণের) পরিমাণ দৈনিক ২ গ্রামের নিচে সীমিত রাখতে হয়।"
  }
];

// Combine all 420 official questions + foundational/general questions
const withSection = (arr) => arr.map(q => ({ section: "NURSING", ...q }));

const combinedQuestionBank = [
  ...generalAndFoundationalQuestions,
  ...withSection(msQuestions),
  ...withSection(obgQuestions),
  ...withSection(chnQuestions),
  ...withSection(pedQuestions),
  ...withSection(fonQuestions),
  ...withSection(apQuestions),
  ...withSection(microQuestions),
  ...withSection(pharmaQuestions),
  ...withSection(psychQuestions),
  ...withSection(socQuestions)
];

console.log('Total questions in combined bank:', combinedQuestionBank.length);

// Generate questionBank.ts content
const tsFileHeader = `import { Question, QuestionSection, StudyDay } from '../types';

/**
 * COMPREHENSIVE OFFICIAL RRB STAFF NURSE QUESTION BANK
 * Incorporates all 420 official professional ability questions from March 2026 (CEN 03/2025)
 * and April 2025 (CEN 04/2024) across all 10 clinical & foundational subjects,
 * plus curated non-nursing & general reasoning/math/science modules for balanced full mocks.
 */
export const CORE_QUESTION_BANK: Question[] = ${JSON.stringify(combinedQuestionBank, null, 2)};

// Helper to generate curated questions for any specific study day or 100-question full mock
export function generateCuratedQuestions(day: StudyDay): Question[] {
  const targetCount = day.isFullMock ? 100 : 20;

  // 1. For Full CBT Mocks (Days 9, 16, 23, 27, 29):
  // Deliver a realistic 100-question CBT mock adhering to the official RRB exam blueprint:
  // ~70 Professional Ability (Nursing across all 10 domains) + ~10 Reasoning + ~10 Arithmetic + ~10 Science & GK
  if (day.isFullMock) {
    const nursingPool = CORE_QUESTION_BANK.filter(q => q.section === "NURSING");
    const reasoningPool = CORE_QUESTION_BANK.filter(q => q.section === "REASONING");
    const arithmeticPool = CORE_QUESTION_BANK.filter(q => q.section === "ARITHMETIC");
    const sciencePool = CORE_QUESTION_BANK.filter(q => q.section === "GENERAL_SCIENCE" || q.section === "GENERAL_AWARENESS");

    // Shuffle each pool
    const shuffledNursing = [...nursingPool].sort(() => Math.random() - 0.5);
    const shuffledReasoning = [...reasoningPool].sort(() => Math.random() - 0.5);
    const shuffledArithmetic = [...arithmeticPool].sort(() => Math.random() - 0.5);
    const shuffledScience = [...sciencePool].sort(() => Math.random() - 0.5);

    const mockQuestions: Question[] = [];

    // Add up to 70 nursing questions
    mockQuestions.push(...shuffledNursing.slice(0, 70));
    
    // Add non-nursing questions
    mockQuestions.push(...shuffledReasoning);
    mockQuestions.push(...shuffledArithmetic);
    mockQuestions.push(...shuffledScience);

    // If still below 100, fill remaining from leftover nursing bank
    if (mockQuestions.length < 100) {
      const remainingNursing = shuffledNursing.slice(70, 70 + (100 - mockQuestions.length));
      mockQuestions.push(...remainingNursing);
    }

    return mockQuestions.sort(() => Math.random() - 0.5).slice(0, 100);
  }

  // 2. For Daily Study Practice (Target = 20 questions):
  // Filter questions specifically tagged with day.id
  const daySpecific = CORE_QUESTION_BANK.filter(q => q.dayId === day.id);
  
  if (daySpecific.length >= 20) {
    // We have plenty of authentic questions for this day, shuffle and pick 20
    const shuffled = [...daySpecific].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  }

  // If fewer than 20 tagged specifically for this day, supplement with relevant questions from the broader bank
  const pool: Question[] = [...daySpecific];
  const otherQuestions = CORE_QUESTION_BANK.filter(q => q.dayId !== day.id).sort(() => Math.random() - 0.5);

  for (const q of otherQuestions) {
    if (pool.length >= 20) break;
    pool.push(q);
  }

  return pool.sort(() => Math.random() - 0.5).slice(0, 20);
}

// Helper to shuffle options without losing track of correct answer
export function shuffleQuestionOptions(question: Question): Question {
  const optionsWithIndices = question.options.map((opt: string, idx: number) => ({
    text: opt,
    isCorrect: idx === question.correctIndex
  }));

  // Fisher-Yates shuffle
  for (let i = optionsWithIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
  }

  const newCorrectIndex = optionsWithIndices.findIndex((item: { text: string; isCorrect: boolean }) => item.isCorrect);

  return {
    ...question,
    options: optionsWithIndices.map((item: { text: string; isCorrect: boolean }) => item.text),
    correctIndex: newCorrectIndex
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'questionBank.ts'), tsFileHeader, 'utf8');
console.log('Successfully written questionBank.ts in frontend/src/data!');
