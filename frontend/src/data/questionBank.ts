import { Question, QuestionSection, StudyDay } from '../types';

/**
 * COMPREHENSIVE OFFICIAL RRB STAFF NURSE QUESTION BANK
 * Incorporates all 420 official professional ability questions from March 2026 (CEN 03/2025)
 * and April 2025 (CEN 04/2024) across all 10 clinical & foundational subjects,
 * plus curated non-nursing & general reasoning/math/science modules for balanced full mocks.
 */
export const CORE_QUESTION_BANK: Question[] = [
  {
    "id": "d1-q1",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Nursing Process - Assessment",
    "difficulty": "EASY",
    "question": "Which of the following is considered 'subjective data' during a patient's nursing assessment?",
    "options": [
      "Blood pressure measurement of 140/90 mmHg",
      "Patient states, 'I feel severe throbbing pain in my head'",
      "Serum potassium level of 3.2 mEq/L",
      "Presence of 2+ pitting edema in lower extremities"
    ],
    "correctIndex": 1,
    "explanationEn": "Subjective data consists of the client's verbal descriptions of their health problems, feelings, and symptoms that cannot be directly measured or verified by the nurse. Measured signs like BP, lab values, and edema are objective data.",
    "explanationBn": "রোগী নিজে মুখে যা বর্ণনা করেন (যেমন: তীব্র মাথাব্যথা) তা হলো Subjective Data। নার্স বা ডাক্তার যা সরাসরি পরিমাপ বা পরীক্ষা করেন তা হলো Objective Data।"
  },
  {
    "id": "d1-q2",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Nursing Diagnosis - NANDA",
    "difficulty": "MEDIUM",
    "question": "In formulating a three-part NANDA nursing diagnosis, what does the phrase 'as evidenced by' represent?",
    "options": [
      "The underlying pathophysiology or etiology",
      "The defining characteristics (signs and symptoms)",
      "The medical diagnosis given by the physician",
      "The short-term and long-term nursing outcomes"
    ],
    "correctIndex": 1,
    "explanationEn": "A complete three-part nursing diagnosis includes Problem (P) + Etiology/Related to (E) + Signs/Symptoms/As evidenced by (S). 'As evidenced by' introduces the defining characteristics and clinical manifestations.",
    "explanationBn": "NANDA নার্সিং ডায়াগনোসিসে 'As evidenced by' দিয়ে রোগীর লক্ষণ ও ক্লিনিক্যাল উপসর্গ (Defining characteristics) বোঝানো হয়।"
  },
  {
    "id": "d1-q3",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Nursing Care Planning - Maslow Priority",
    "difficulty": "MEDIUM",
    "question": "According to Maslow's Hierarchy of Needs, which nursing diagnosis must receive the highest priority?",
    "options": [
      "Risk for loneliness related to social isolation",
      "Ineffective airway clearance related to thick tracheobronchial secretions",
      "Deficient knowledge regarding diabetic foot care",
      "Disturbed body image related to surgical scar"
    ],
    "correctIndex": 1,
    "explanationEn": "According to Maslow's hierarchy, physiological needs (specifically Airway, Breathing, and Circulation) take top priority over safety, love, and esteem needs.",
    "explanationBn": "ম্যাসলোর চাহিদা তত্ত্ব অনুযায়ী শারীরবৃত্তীয় প্রয়োজন—বিশেষ করে শ্বাসনালী মুক্ত রাখা (Airway)—সর্বদা সর্বোচ্চ প্রাধান্য পাবে।"
  },
  {
    "id": "d1-q4",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Nursing Evaluation",
    "difficulty": "EASY",
    "question": "What is the primary purpose of the 'Evaluation' phase in the nursing process?",
    "options": [
      "To administer doctor's prescribed medications on time",
      "To establish baseline laboratory parameters",
      "To determine whether patient goals and expected outcomes were achieved",
      "To delegate bedside duties to nursing assistants"
    ],
    "correctIndex": 2,
    "explanationEn": "Evaluation is the final step where the nurse compares the patient's current health status with expected outcomes to determine if goals are met, partially met, or if the plan needs modification.",
    "explanationBn": "Evaluation ধাপের প্রধান উদ্দেশ্য হলো রোগী নির্ধারিত লক্ষ্য অর্জন করতে পেরেছে কি না তা যাচাই করা ও যত্ন পরিকল্পনা সংশোধন করা।"
  },
  {
    "id": "d1-q5",
    "dayId": 1,
    "section": "REASONING",
    "topic": "Analogy - Medical Instruments",
    "difficulty": "EASY",
    "question": "Thermometer : Temperature :: Sphygmomanometer : ?",
    "options": [
      "Pulse Rate",
      "Blood Sugar",
      "Blood Pressure",
      "Respiratory Rate"
    ],
    "correctIndex": 2,
    "explanationEn": "A thermometer is an instrument used to measure temperature, while a sphygmomanometer is an instrument used to measure arterial blood pressure.",
    "explanationBn": "থার্মোমিটার দিয়ে যেমন তাপমাত্রা মাপা হয়, তেমনি স্ফিগমোম্যানোমিটার দিয়ে রক্তচাপ (Blood Pressure) পরিমাপ করা হয়।"
  },
  {
    "id": "d1-q6",
    "dayId": 1,
    "section": "REASONING",
    "topic": "Classification (Odd One Out)",
    "difficulty": "MEDIUM",
    "question": "Find the odd one out among the following medical conditions:",
    "options": [
      "Tuberculosis",
      "Cholera",
      "Pertussis",
      "Hepatitis B"
    ],
    "correctIndex": 3,
    "explanationEn": "Tuberculosis, Cholera, and Pertussis are bacterial diseases caused by Mycobacterium tuberculosis, Vibrio cholerae, and Bordetella pertussis respectively. Hepatitis B is a viral infection.",
    "explanationBn": "যক্ষ্মা, কলেরা ও পার্টুসিস হলো ব্যাকটেরিয়া ঘটিত রোগ; একমাত্র হেপাটাইটিস বি হলো ভাইরাস ঘটিত রোগ।"
  },
  {
    "id": "d1-q7",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Ethics in Nursing - Autonomy",
    "difficulty": "MEDIUM",
    "question": "A competent patient refuses a blood transfusion based on personal and religious beliefs. Which ethical principle must the nurse uphold?",
    "options": [
      "Beneficence",
      "Non-maleficence",
      "Autonomy",
      "Veracity"
    ],
    "correctIndex": 2,
    "explanationEn": "Autonomy is the ethical principle recognizing the right of competent individuals to make decisions about their own healthcare, including treatment refusal.",
    "explanationBn": "অটোনমি (Autonomy) নীতি অনুযায়ী একজন প্রাপ্তবয়স্ক ও সচেতন রোগীর নিজের চিকিৎসা বা রক্ত নিতে অস্বীকার করার সম্পূর্ণ অধিকার রয়েছে।"
  },
  {
    "id": "d1-q8",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Documentation Principles",
    "difficulty": "EASY",
    "question": "Which of the following is a fundamental legal rule of nursing documentation?",
    "options": [
      "Documenting care ahead of time before it is provided",
      "Leaving blank lines between nursing notes",
      "'If it was not documented, it was not done'",
      "Erasing incorrect entries with correction fluid"
    ],
    "correctIndex": 2,
    "explanationEn": "In medical-legal jurisprudence, 'if it wasn't charted, it wasn't done.' Timely, accurate, and contemporaneous charting is legally indispensable.",
    "explanationBn": "নার্সিং আইনের প্রধান নীতি হলো: যা খাতায় লেখা নেই, তা সেবা হিসেবে সম্পন্ন হয়নি বলে গণ্য হবে ('If not documented, not done')।"
  },
  {
    "id": "d1-q9",
    "dayId": 1,
    "section": "REASONING",
    "topic": "Analogy - Anatomical Units",
    "difficulty": "EASY",
    "question": "Nephron : Kidney :: Neuron : ?",
    "options": [
      "Liver",
      "Brain / Nervous System",
      "Heart",
      "Lungs"
    ],
    "correctIndex": 1,
    "explanationEn": "Nephron is the basic structural and functional unit of the kidney, just as the neuron is the basic functional unit of the brain and nervous system.",
    "explanationBn": "নেফ্রন যেমন বৃক্কের (Kidney) গঠনমূলক ও কার্যমূলক একক, তেমনি নিউরন হলো স্নায়ুতন্ত্রের (Brain/Nervous System) মৌলিক একক।"
  },
  {
    "id": "d1-q10",
    "dayId": 1,
    "section": "NURSING",
    "topic": "Therapeutic Communication",
    "difficulty": "MEDIUM",
    "question": "A patient facing surgery says, 'I am terrified I might not wake up.' What is the nurse's most therapeutic response?",
    "options": [
      "'Don't worry, our surgeons never make mistakes.'",
      "'You shouldn't feel that way; everyone gets nervous.'",
      "'Tell me more about what is making you feel afraid.'",
      "'Let's talk about something happy to take your mind off it.'"
    ],
    "correctIndex": 2,
    "explanationEn": "Open-ended, empathetic exploration ('Tell me more...') validates the client's feelings and encourages them to express their underlying anxieties without false reassurance.",
    "explanationBn": "রোগীর ভয় দূর করতে 'Tell me more...' বলে তার ভয়ের কারণটি মন দিয়ে শোনাই হলো সঠিক থেরাপিউটিক রেসপন্স।"
  },
  {
    "id": "d2-q1",
    "dayId": 2,
    "section": "NURSING",
    "topic": "Vital Signs - Blood Pressure Cuff",
    "difficulty": "MEDIUM",
    "question": "When measuring blood pressure, using a cuff that is too narrow or too small for the patient's arm will cause:",
    "options": [
      "A falsely low blood pressure reading",
      "A falsely elevated (high) blood pressure reading",
      "An accurate diastolic but inaccurate systolic reading",
      "No effect on the recorded values"
    ],
    "correctIndex": 1,
    "explanationEn": "A cuff that is too narrow or loose results in falsely elevated (high) BP readings because extra pressure is required to compress the artery. A cuff that is too wide causes falsely low readings.",
    "explanationBn": "রোগীর বাহুর তুলনায় ছোট বা সরু ব্লাড প্রেশার কাফ ব্যবহার করলে রক্তচাপের মান বাস্তবে যা তার চেয়ে বেশি (Falsely high) দেখাবে।"
  },
  {
    "id": "d2-q2",
    "dayId": 2,
    "section": "NURSING",
    "topic": "Patient Positioning - Enema Administration",
    "difficulty": "EASY",
    "question": "Which position is best suited for administering a cleansing enema or rectal examination in adult patients?",
    "options": [
      "Dorsal recumbent position",
      "Left lateral Sims' position",
      "Trendelenburg position",
      "Lithotomy position"
    ],
    "correctIndex": 1,
    "explanationEn": "Left Sims' position allows enema solution to flow naturally downward into the sigmoid colon and rectum by gravity, minimizing reflux and abdominal cramping.",
    "explanationBn": "এনিমা দেওয়ার জন্য রোগীর উপযুক্ত অবস্থান হলো বাঁ-কাত হয়ে শোয়া বা Left Sims' position।"
  },
  {
    "id": "d2-q3",
    "dayId": 2,
    "section": "NURSING",
    "topic": "Physical Assessment - Sequence",
    "difficulty": "MEDIUM",
    "question": "What is the correct sequence of examination techniques for an abdominal physical assessment?",
    "options": [
      "Inspection -> Palpation -> Percussion -> Auscultation",
      "Inspection -> Auscultation -> Percussion -> Palpation",
      "Palpation -> Inspection -> Auscultation -> Percussion",
      "Auscultation -> Inspection -> Palpation -> Percussion"
    ],
    "correctIndex": 1,
    "explanationEn": "For abdomen: Inspection -> Auscultation -> Percussion -> Palpation (IAPP). Auscultation is performed before percussion and palpation so that manual manipulation does not artificially alter bowel sounds.",
    "explanationBn": "পেট পরীক্ষার সঠিক ক্রম হলো: Inspection -> Auscultation -> Percussion -> Palpation (IAPP), যাতে চাপ লেগে অন্ত্রের শব্দ বদলে না যায়।"
  },
  {
    "id": "d2-q4",
    "dayId": 2,
    "section": "ARITHMETIC",
    "topic": "Percentages in Nursing",
    "difficulty": "EASY",
    "question": "A ward has 60 admitted patients. If 15% of the patients are scheduled for emergency surgery today, how many patients are having surgery?",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "correctIndex": 1,
    "explanationEn": "Number of patients = 15% of 60 = (15 / 100) × 60 = 9 patients.",
    "explanationBn": "৬০ জনের ১৫% = (১৫/১০০) × ৬০ = ৯ জন রোগী।"
  },
  {
    "id": "d2-q5",
    "dayId": 2,
    "section": "ARITHMETIC",
    "topic": "Ratios in Hospital Staffing",
    "difficulty": "MEDIUM",
    "question": "In a medical camp, the ratio of female to male nurses is 5:3. If there are 24 male nurses, how many female nurses are in the camp?",
    "options": [
      "32",
      "36",
      "40",
      "45"
    ],
    "correctIndex": 2,
    "explanationEn": "Ratio F:M = 5:3. If 3 parts = 24, 1 part = 8. Female nurses = 5 × 8 = 40.",
    "explanationBn": "অনুপাত ৫:৩। ৩ ভাগ = ২৪ হলে, ১ ভাগ = ৮। সুতরাং মহিলা নার্স = ৫ × ৮ = ৪০ জন।"
  },
  {
    "id": "d2-q6",
    "dayId": 2,
    "section": "NURSING",
    "topic": "Vital Signs - Pulse Deficit",
    "difficulty": "HARD",
    "question": "A nurse finds an apical pulse of 88 bpm and a radial pulse of 76 bpm. What is the calculated pulse deficit?",
    "options": [
      "12 bpm",
      "164 bpm",
      "6 bpm",
      "8 bpm"
    ],
    "correctIndex": 0,
    "explanationEn": "Pulse deficit = Apical pulse - Radial pulse = 88 - 76 = 12 bpm. It indicates that not all cardiac contractions are producing peripheral arterial waves, common in atrial fibrillation.",
    "explanationBn": "পালস ডেফিসিট = অ্যাপিকাল পালস - রেডিয়াল পালস = ৮৮ - ৭৬ = ১২ bpm।"
  },
  {
    "id": "d3-q1",
    "dayId": 3,
    "section": "NURSING",
    "topic": "Biomedical Waste - Color Coding",
    "difficulty": "EASY",
    "question": "According to Biomedical Waste Management Rules, which category of waste must be discarded into the Yellow Bag?",
    "options": [
      "Recyclable plastic syringes and IV tubing",
      "Human anatomical tissues, placenta, and blood-soaked cotton dressings",
      "Discarded metallic glass vials and ampoules",
      "Contaminated sharps, scalpel blades, and needles"
    ],
    "correctIndex": 1,
    "explanationEn": "Yellow bags are designated for incinerable organic waste: human tissues, anatomical organs, placenta, and cotton gauze soaked in body fluids.",
    "explanationBn": "মানবদেহাংশ, গর্ভফুল (প্লাসেন্টা) এবং রক্তমাখা ড্রেসিং হলুদ ব্যাগে (Yellow Bag) ফেলতে হয় যা পরবর্তীতে পুড়িয়ে (Incineration) ফেলা হয়।"
  },
  {
    "id": "d3-q2",
    "dayId": 3,
    "section": "NURSING",
    "topic": "Biomedical Waste - White Container",
    "difficulty": "EASY",
    "question": "Used disposable needles and surgical scalpel blades must be discarded into which category of container?",
    "options": [
      "Red bag",
      "White translucent puncture-proof container",
      "Blue cardboard box",
      "Black general waste container"
    ],
    "correctIndex": 1,
    "explanationEn": "All metallic sharps (needles, scalpels, lancets) must be deposited into rigid, white, puncture-proof, tamper-evident containers.",
    "explanationBn": "ব্যবহৃত সূঁচ ও ব্লেড সাদা রঙের পাংচার-প্রুফ পাত্রে (White translucent container) ফেলতে হয়।"
  },
  {
    "id": "d3-q3",
    "dayId": 3,
    "section": "NURSING",
    "topic": "Autoclave Sterilisation Standards",
    "difficulty": "MEDIUM",
    "question": "What is the standard temperature, pressure, and minimum holding time for hospital steam autoclaving?",
    "options": [
      "100°C at 10 psi for 10 minutes",
      "121°C at 15 psi for 15 to 20 minutes",
      "160°C at 30 psi for 60 minutes",
      "134°C at atmospheric pressure for 30 minutes"
    ],
    "correctIndex": 1,
    "explanationEn": "Standard moist heat steam sterilization (autoclaving) requires 121°C (250°F) at 15 pounds per square inch (psi) pressure for at least 15-20 minutes to kill all vegetative organisms and spores.",
    "explanationBn": "অটোক্লেভের আদর্শ মান হলো ১২১°C তাপমাত্রা, ১৫ psi চাপ এবং ১৫ থেকে ২০ মিনিট সময়।"
  },
  {
    "id": "d3-q4",
    "dayId": 3,
    "section": "NURSING",
    "topic": "Hand Hygiene Duration",
    "difficulty": "EASY",
    "question": "According to WHO guidelines, what is the recommended minimum duration for effective hand hygiene using an alcohol-based hand rub?",
    "options": [
      "5 to 10 seconds",
      "20 to 30 seconds",
      "40 to 60 seconds",
      "2 full minutes"
    ],
    "correctIndex": 1,
    "explanationEn": "WHO recommends 20 to 30 seconds for alcohol-based hand rubs, and 40 to 60 seconds when washing visibly soiled hands with soap and water.",
    "explanationBn": "অ্যালকোহল হ্যান্ড রাব দিয়ে হাত জীবাণুমুক্ত করার আদর্শ সময় হলো ২০ থেকে ৩০ সেকেন্ড।"
  },
  {
    "id": "d3-q5",
    "dayId": 3,
    "section": "GENERAL_SCIENCE",
    "topic": "Cell Biology - Mitochondria",
    "difficulty": "EASY",
    "question": "Which organelle is universally known as the 'powerhouse of the cell' due to its role in ATP synthesis?",
    "options": [
      "Ribosome",
      "Golgi apparatus",
      "Mitochondria",
      "Lysosome"
    ],
    "correctIndex": 2,
    "explanationEn": "Mitochondria generate the majority of cellular adenosine triphosphate (ATP) through oxidative phosphorylation, earning the title 'powerhouse of the cell.'",
    "explanationBn": "মাইটোকন্ড্রিয়ায় কোষের শক্তি (ATP) উৎপন্ন হয় বলে একে 'কোষের শক্তিঘর' (Powerhouse) বলা হয়।"
  },
  {
    "id": "d4-q1",
    "dayId": 4,
    "section": "NURSING",
    "topic": "Cardiovascular Anatomy - Pacemaker",
    "difficulty": "EASY",
    "question": "Which anatomical structure is known as the natural pacemaker of the human heart?",
    "options": [
      "Atrioventricular (AV) Node",
      "Sinoatrial (SA) Node",
      "Bundle of His",
      "Purkinje Fibers"
    ],
    "correctIndex": 1,
    "explanationEn": "The Sinoatrial (SA) Node in the right atrium initiates electrical impulses at a physiological intrinsic rate of 60-100 beats per minute.",
    "explanationBn": "হৃদপিণ্ডের প্রাকৃতিক পেসমেকার হলো সাইনোঅ্যাট্রিয়াল নোড (SA Node)।"
  },
  {
    "id": "d4-q2",
    "dayId": 4,
    "section": "NURSING",
    "topic": "Hematology - RBC Lifespan",
    "difficulty": "EASY",
    "question": "What is the normal average lifespan of mature human erythrocytes (red blood cells) in systemic circulation?",
    "options": [
      "30 days",
      "60 days",
      "120 days",
      "365 days"
    ],
    "correctIndex": 2,
    "explanationEn": "Human red blood cells circulate for an average of 120 days before becoming senescent and being broken down by reticuloendothelial macrophages in the spleen and liver.",
    "explanationBn": "লোহিত রক্তকণিকার (RBC) গড় আয়ুষ্কাল হলো ১২০ দিন।"
  },
  {
    "id": "d4-q3",
    "dayId": 4,
    "section": "NURSING",
    "topic": "Respiratory Anatomy - Phrenic Nerve",
    "difficulty": "MEDIUM",
    "question": "Which nerve provides motor innervation to the diaphragm, the primary muscle of inspiration?",
    "options": [
      "Vagus nerve (CN X)",
      "Phrenic nerve (C3-C5)",
      "Intercostal nerve (T1-T6)",
      "Accessory nerve (CN XI)"
    ],
    "correctIndex": 1,
    "explanationEn": "The phrenic nerve arises from cervical spinal nerves C3, C4, and C5 ('C3, 4, 5 keep the diaphragm alive') and supplies exclusive motor innervation to the diaphragm.",
    "explanationBn": "ডায়াফ্রামের প্রধান মোটর স্নায়ু হলো ফ্রেনিক নার্ভ (Phrenic nerve - C3, C4, C5)।"
  },
  {
    "id": "d4-q4",
    "dayId": 4,
    "section": "REASONING",
    "topic": "Number Series",
    "difficulty": "MEDIUM",
    "question": "Complete the series: 2, 6, 12, 20, 30, ?",
    "options": [
      "36",
      "40",
      "42",
      "48"
    ],
    "correctIndex": 2,
    "explanationEn": "Pattern: Differences are consecutive even numbers (+4, +6, +8, +10, +12). Next number = 30 + 12 = 42 (or n² + n: 1²+1=2, 2²+2=6, 3²+3=12, 4²+4=20, 5²+5=30, 6²+6=42).",
    "explanationBn": "পার্থক্য ক্রম: +৪, +৬, +৮, +১০, +১২। অতএব ৩০ + ১২ = ৪২।"
  },
  {
    "id": "d4-q5",
    "dayId": 4,
    "section": "REASONING",
    "topic": "Coding-Decoding",
    "difficulty": "EASY",
    "question": "If 'NURSE' is coded as 'OWSTF' (each letter shifted +1 forward), how will 'HEART' be coded?",
    "options": [
      "IFBSU",
      "IGCTU",
      "HFBSU",
      "IFCRU"
    ],
    "correctIndex": 0,
    "explanationEn": "Each letter is shifted forward by 1 position: H->I, E->F, A->B, R->S, T->U = IFBSU.",
    "explanationBn": "প্রতিটি বর্ণ ১ ঘর এগিয়েছে: H->I, E->F, A->B, R->S, T->U = IFBSU।"
  },
  {
    "id": "d5-q1",
    "dayId": 5,
    "section": "NURSING",
    "topic": "Renal Physiology - GFR",
    "difficulty": "EASY",
    "question": "What is the normal resting Glomerular Filtration Rate (GFR) in a healthy young adult?",
    "options": [
      "60 mL/min/1.73 m²",
      "125 mL/min/1.73 m²",
      "180 mL/min/1.73 m²",
      "250 mL/min/1.73 m²"
    ],
    "correctIndex": 1,
    "explanationEn": "Normal adult resting GFR is approximately 125 mL/min/1.73 m² (about 180 liters of filtrate per day).",
    "explanationBn": "স্বাভাবিক প্রাপ্তবয়স্কদের গ্লোমেরুলার ফিল্ট্রেশন রেট (GFR) হলো প্রায় ১২৫ মিলি/মিনিট।"
  },
  {
    "id": "d5-q2",
    "dayId": 5,
    "section": "NURSING",
    "topic": "Neuroanatomy - Medulla Centers",
    "difficulty": "MEDIUM",
    "question": "Vital cardiac, vasomotor, and respiratory reflex centers are located in which part of the brain?",
    "options": [
      "Cerebrum",
      "Cerebellum",
      "Medulla Oblongata",
      "Hypothalamus"
    ],
    "correctIndex": 2,
    "explanationEn": "The medulla oblongata contains autonomic centers regulating cardiovascular rhythm, vasomotor tone, respirations, and vomiting reflexes.",
    "explanationBn": "হৃদস্পন্দন ও শ্বাসপ্রশ্বাস নিয়ন্ত্রণকারী ভাইটাল সেন্টারগুলো মেডুলা অবলংগাটাতে (Medulla Oblongata) অবস্থিত।"
  },
  {
    "id": "d5-q3",
    "dayId": 5,
    "section": "NURSING",
    "topic": "Endocrine Anatomy - Beta Cells",
    "difficulty": "EASY",
    "question": "Insulin is synthesized and secreted by which specific cells of the pancreas?",
    "options": [
      "Alpha cells of Islets of Langerhans",
      "Beta cells of Islets of Langerhans",
      "Delta cells of Islets of Langerhans",
      "Acinar exocrine cells"
    ],
    "correctIndex": 1,
    "explanationEn": "Pancreatic beta cells within the Islets of Langerhans secrete insulin, while alpha cells secrete glucagon and delta cells secrete somatostatin.",
    "explanationBn": "অগ্ন্যাশয়ের আইলেটস অব ল্যাঙ্গারহ্যান্সের বিটা কোষ (Beta cells) থেকে ইনসুলিন নিঃসৃত হয়।"
  },
  {
    "id": "d5-q4",
    "dayId": 5,
    "section": "ARITHMETIC",
    "topic": "Averages in Clinical Data",
    "difficulty": "EASY",
    "question": "A nurse recorded pulse rates of four patients as 72, 76, 80, and 84 bpm. What is the average pulse rate?",
    "options": [
      "76 bpm",
      "78 bpm",
      "80 bpm",
      "82 bpm"
    ],
    "correctIndex": 1,
    "explanationEn": "Sum = 72 + 76 + 80 + 84 = 312 bpm. Average = 312 / 4 = 78 bpm.",
    "explanationBn": "গড় পাল্স রেট = (৭২ + ৭৬ + ৮০ + ৮৪) / ৪ = ৩১২ / ৪ = ৭৮ bpm।"
  },
  {
    "id": "d6-q1",
    "dayId": 6,
    "section": "NURSING",
    "topic": "Nutritional Deficiency - Vitamin A",
    "difficulty": "EASY",
    "question": "Bitot's spots, night blindness, and xerophthalmia are hallmark signs of deficiency of which vitamin?",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin B1 (Thiamine)",
      "Vitamin C (Ascorbic acid)",
      "Vitamin D (Calciferol)"
    ],
    "correctIndex": 0,
    "explanationEn": "Vitamin A deficiency damages ocular rhodopsin regeneration and conjunctival goblet cells, producing night blindness, Bitot's spots, xerophthalmia, and keratomalacia.",
    "explanationBn": "বিটট স্পট (Bitot's spots) ও রাতকানা রোগ ভিটামিন এ-এর ঘাটতির কারণে ঘটে।"
  },
  {
    "id": "d6-q2",
    "dayId": 6,
    "section": "NURSING",
    "topic": "Therapeutic Diet - DASH Diet",
    "difficulty": "EASY",
    "question": "Which dietary instruction is mandatory for a patient with essential hypertension on a DASH diet?",
    "options": [
      "High sodium intake (> 5 g/day)",
      "Restriction of dietary sodium (< 2 g/day)",
      "Strict avoidance of all green vegetables",
      "High saturated animal fat consumption"
    ],
    "correctIndex": 1,
    "explanationEn": "DASH (Dietary Approaches to Stop Hypertension) emphasizes restricting sodium (< 2000 mg/day) and increasing potassium, magnesium, and dietary fiber.",
    "explanationBn": "উচ্চ রক্তচাপের রোগীদের খাবারে সোডিয়ামের (লবণের) পরিমাণ দৈনিক ২ গ্রামের নিচে সীমিত রাখতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-1",
    "dayId": 12,
    "topic": "Fluid & Electrolyte Imbalance - Hypocalcemia",
    "difficulty": "EASY",
    "question": "When caring for a patient with hypocalcemia, which symptom should the nurse closely observe?",
    "options": [
      "Muscle flaccidity",
      "Muscle twitching",
      "Hypoactive bowel sounds",
      "Loss of deep tendon reflexes"
    ],
    "correctIndex": 1,
    "explanationEn": "Hypocalcemia (serum calcium < 8.5 mg/dL) increases neuromuscular excitability, causing paresthesias, muscle spasms, twitching, tetany, Chvostek's sign, and Trousseau's sign.",
    "explanationBn": "হাইপোক্যালসেমিয়া (রক্তে ক্যালসিয়াম কমে যাওয়া)-র প্রধান লক্ষণ হলো স্নায়ুপেশির উত্তেজনা বৃদ্ধি এবং মাংসপেশির খিঁচুনি বা কাঁপুনি (Muscle twitching)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-2",
    "dayId": 11,
    "topic": "Chest Trauma & Gas Exchange",
    "difficulty": "MEDIUM",
    "question": "A patient with severe chest trauma is unable to ventilate effectively. Which best explains the immediate physiological consequence regarding gas exchange?",
    "options": [
      "Increased oxygen delivery to peripheral tissues",
      "Reduced oxygen diffusion from alveoli to blood",
      "Excessive exhalation of nitrogen",
      "Enhanced alveolar surfactant regeneration"
    ],
    "correctIndex": 1,
    "explanationEn": "Ineffective ventilation reduces alveolar oxygen tension, decreasing the partial pressure gradient required for passive oxygen diffusion across the alveolar-capillary membrane into the blood.",
    "explanationBn": "বুকের আঘাতের কারণে ফুসফুস সঠিকভাবে প্রসারিত না হলে অ্যালভিওলাই থেকে রক্তে অক্সিজেনের ব্যাপন (diffusion) মারাত্মকভাবে কমে যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-3",
    "dayId": 12,
    "topic": "Post-operative Fluid & Electrolytes",
    "difficulty": "HARD",
    "question": "A post-operative patient receiving D5 and 0.45% normal saline at 160 ml/hour develops puffiness, 2 kg weight gain, hypotension, muscle cramps, confusion, and serum sodium of 126 mEq/L. Most likely cause?",
    "options": [
      "Hypernatremic dehydration",
      "Fluid overload and hyponatremia",
      "Acute hypercalcemic crisis",
      "Cardiogenic pulmonary infarction"
    ],
    "correctIndex": 1,
    "explanationEn": "Infusing hypotonic fluids at a high rate (160 ml/hr) postoperatively leads to free water retention, rapid weight gain, edema, and dilutional hyponatremia (Na 126 mEq/L), triggering neurological confusion and muscle cramps.",
    "explanationBn": "অতিরিক্ত মাত্রায় হাইপোটোনিক স্যালাইন দেওয়ায় শরীরে জল জমে ওজন বৃদ্ধি, ফোলাভাব এবং সোডিয়ামের মাত্রা ১২৬ mEq/L-এ নেমে গিয়ে ফ্লুইড ওভারলোড ও হাইপোন্যাট্রেমিয়া দেখা দিয়েছে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-4",
    "dayId": 13,
    "topic": "Peptic Ulcer Disease & Pharmacotherapy",
    "difficulty": "MEDIUM",
    "question": "A patient with a peptic ulcer is prescribed a proton pump inhibitor and advised to avoid NSAIDs. Which rationale explains this combined approach?",
    "options": [
      "To promote ulcer healing and prevent further irritation",
      "To stimulate pepsin and gastrin secretion",
      "To increase gastric motility and prevent constipation",
      "To sterilize the small intestinal microbiome"
    ],
    "correctIndex": 0,
    "explanationEn": "Proton pump inhibitors (PPIs) powerfully inhibit gastric H+/K+ ATPase to reduce acid and promote mucosal healing, while avoiding NSAIDs prevents the suppression of protective prostaglandins.",
    "explanationBn": "PPI পাকস্থলীর অ্যাসিড উৎপাদন কমিয়ে আলসার নিরাময়ে সহায়তা করে এবং NSAID ব্যথানাশক এড়িয়ে চললে গ্যাস্ট্রিক শ্লেষ্মাঝিল্লির অতিরিক্ত প্রদাহ ও রক্তক্ষরণ প্রতিরোধ হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-5",
    "dayId": 10,
    "topic": "Disaster Triage & Prioritization",
    "difficulty": "MEDIUM",
    "question": "A nurse encounters four patients after a mass casualty event. Who should be given the highest triage priority?",
    "options": [
      "A patient with a closed forearm fracture",
      "A patient with severe respiratory distress",
      "A patient with minor facial abrasions and intact vitals",
      "A patient with extensive lethal injuries and absent respirations"
    ],
    "correctIndex": 1,
    "explanationEn": "In disaster triage (START system), patients with severe respiratory compromise or airway obstruction are classified as Immediate (Red tag), receiving top resuscitation priority.",
    "explanationBn": "বিপর্যয় মোকাবিলার ট্রায়াজ (Triage) পদ্ধতিতে তীব্র শ্বাসকষ্টে ভোগা রোগীকে রেড ট্যাগ বা সর্বোচ্চ অগ্রাধিকার (Highest Priority) দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-6",
    "dayId": 10,
    "topic": "Emergency Burn Management",
    "difficulty": "MEDIUM",
    "question": "A patient arrives with severe burns. After ensuring a patent airway, what is the next step in emergency management?",
    "options": [
      "Perform thorough skin grafting",
      "Initiate fluid resuscitation",
      "Apply occlusive dressings with topical steroids",
      "Administer high-protein oral nutrition"
    ],
    "correctIndex": 1,
    "explanationEn": "Following airway and breathing stabilization (ABC), the paramount life-saving intervention for major burns is aggressive intravenous fluid resuscitation (e.g., Parkland formula) to prevent hypovolemic burn shock.",
    "explanationBn": "মারাত্মকভাবে পুড়ে যাওয়া রোগীর শ্বাসনালী উন্মুক্ত করার পরই পরবর্তী সবচেয়ে জরুরি পদক্ষেপ হলো শিরাপথে ফ্লুইড রিসাসিটেশন (IV Fluid Resuscitation) শুরু করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-7",
    "dayId": 10,
    "topic": "Hypovolemic Shock Assessment",
    "difficulty": "EASY",
    "question": "During a morning assessment, a patient has cool, clammy skin, a weak pulse, and decreased urine output. Most appropriate nursing action?",
    "options": [
      "Administer prescribed loop diuretic",
      "Report possible hypovolemic shock to the physician",
      "Place patient in high Fowler's position and withhold IV fluids",
      "Reassess vitals at the end of the shift in 6 hours"
    ],
    "correctIndex": 1,
    "explanationEn": "Cool clammy skin, tachycardia with weak thready pulse, and oliguria are classic compensatory signs of hypovolemic shock requiring immediate clinical escalation and fluid resuscitation.",
    "explanationBn": "ত্বক ঠান্ডা ও আঠালো হওয়া, নাড়ির স্পন্দন দুর্বল হওয়া এবং প্রস্রাব কমে যাওয়া হাইপোভলেমিক শকের লক্ষণ; দ্রুত ডাক্তারকে জানানো ও ফ্লুইড দেওয়া নার্সের প্রধান কর্তব্য।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-8",
    "dayId": 10,
    "topic": "Emergency Anaphylaxis Management",
    "difficulty": "EASY",
    "question": "Which nursing intervention is most appropriate when caring for a patient experiencing an anaphylactic reaction?",
    "options": [
      "Maintain a patent airway and administer epinephrine",
      "Give oral diphenhydramine and encourage fluids",
      "Place the patient in Trendelenburg and apply cold compresses",
      "Apply warm water bag to chest and monitor blood pressure"
    ],
    "correctIndex": 0,
    "explanationEn": "Epinephrine IM (1:1000) is the first-line medication of choice for anaphylaxis to reverse bronchospasm and hypotension, alongside immediate airway maintenance and oxygen delivery.",
    "explanationBn": "তীব্র অ্যালার্জি বা অ্যানাফিল্যাক্টিক শকে আক্রান্ত রোগীর শ্বাসনালী সচল রাখা এবং দ্রুত ইন্ট্রামাসকুলার এপিনেফ্রিন (Epinephrine) প্রয়োগ করাই প্রধান নার্সিং পদক্ষেপ।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-9",
    "dayId": 11,
    "topic": "Post-operative Respiratory Evaluation",
    "difficulty": "EASY",
    "question": "A patient has just returned to the ward after abdominal surgery. Which action should the nurse take first to evaluate respiratory interventions?",
    "options": [
      "Check surgical wound dressing for discharge",
      "Assess the patient's oxygen saturation and respiratory rate",
      "Measure abdominal girth and auscultate bowel sounds",
      "Administer prescribed oral pain medication"
    ],
    "correctIndex": 1,
    "explanationEn": "Airway and breathing are always evaluated first after general anesthesia. Assessing respiratory rate and pulse oximetry provides immediate objective baseline data on ventilation.",
    "explanationBn": "পেটের অস্ত্রোপচারের পর ওয়ার্ডে আসা রোগীর ক্ষেত্রে শ্বাসযন্ত্রের কার্যকারিতা মূল্যায়নে সবার আগে অক্সিজেন স্যাচুরেশন ও শ্বাসপ্রশ্বাসের গতি (SpO2 & RR) মাপতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-10",
    "dayId": 13,
    "topic": "Colostomy Complications & Assessment",
    "difficulty": "MEDIUM",
    "question": "A nurse is monitoring a patient with a colostomy. Which observation requires immediate attention?",
    "options": [
      "Stoma appears beefy red and moist",
      "Stoma appears dark and bluish",
      "Slight serosanguinous oozing around stoma border",
      "Flatus present in the collection pouch"
    ],
    "correctIndex": 1,
    "explanationEn": "A normal healthy stoma is pink or beefy red and moist. A dark, purple, or bluish stoma signifies vascular compromise, ischemia, and impending necrosis, requiring urgent surgical notification.",
    "explanationBn": "কোলোস্টমির স্টোমা কালচে বা নীলচে দেখা দিলে বুঝতে হবে সেখানে রক্ত চলাচল ব্যাহত বা ইসকেমিয়া হয়েছে; এটি দ্রুত ডাক্তারকে জানানো প্রয়োজন।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-11",
    "dayId": 10,
    "topic": "Burn Resuscitation Fluids",
    "difficulty": "EASY",
    "question": "Which solution is commonly used for fluid replacement in burn patients?",
    "options": [
      "0.45% Normal Saline",
      "5% Dextrose in Water",
      "Ringer's lactate",
      "3% Hypertonic Saline"
    ],
    "correctIndex": 2,
    "explanationEn": "Ringer's lactate (Hartmann's solution) is the crystalloid of choice in acute burn shock resuscitation as its electrolyte composition and buffer capacity closely resemble plasma.",
    "explanationBn": "পুড়ে যাওয়া রোগীর শরীরে ফ্লুইড প্রতিস্থাপনের (Resuscitation) জন্য রিংগার্স ল্যাকটেট (Ringer's Lactate) হলো প্রথম পছন্দের দ্রবণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-12",
    "dayId": 13,
    "topic": "Ostomy Self-Care Education",
    "difficulty": "MEDIUM",
    "question": "A nurse is evaluating elimination needs of a patient with a newly established colostomy. Which action demonstrates best practice for promoting self-care?",
    "options": [
      "Performing all pouch changes without patient viewing",
      "Encouraging the patient to observe and participate in ostomy care",
      "Instructing family members to perform all care permanently",
      "Restricting patient from touching stoma appliance"
    ],
    "correctIndex": 1,
    "explanationEn": "Active patient observation and graduated participation in ostomy pouch emptying and wafer changing fosters self-efficacy, psychomotor mastery, and positive body-image adaptation.",
    "explanationBn": "নতুন কোলোস্টমি হওয়া রোগীকে স্বাবলম্বী করে তুলতে তাকে নিজে দেখে স্টোমা পরিষ্কার ও ব্যাগ পরিবর্তনের কাজে সক্রিয়ভাবে অংশগ্রহণ করতে উৎসাহিত করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-13",
    "dayId": 10,
    "topic": "Disaster Resource Allocation",
    "difficulty": "MEDIUM",
    "question": "A hospital is conducting a disaster drill. How should the nurse leader allocate limited medical supplies while ensuring patient care?",
    "options": [
      "Distribute supplies on a first-come, first-served basis",
      "Allocate supplies based on triage principles",
      "Reserve all supplies exclusively for intensive care patients",
      "Ration supplies equally among all patients regardless of acuity"
    ],
    "correctIndex": 1,
    "explanationEn": "In mass disaster situations, scarce resources are ethically and clinically allocated according to triage principles to deliver the greatest good for the greatest number of salvageable patients.",
    "explanationBn": "দুর্যোগকালীন জরুরি পরিস্থিতিতে সীমিত চিকিৎসা সরঞ্জাম ট্রায়াজ নীতি (Triage principles) অনুযায়ী রোগীর তাৎক্ষণিক প্রয়োজনীয়তার ভিত্তিতে বণ্টন করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-14",
    "dayId": 1,
    "topic": "Intraoperative Equipment Malfunction",
    "difficulty": "MEDIUM",
    "question": "During a complex surgical procedure, a critical piece of equipment malfunctions. Most appropriate action for the OT nurse?",
    "options": [
      "Attempt to repair internal electrical wiring while in use",
      "Immediately inform the surgeon and provide a sterile backup",
      "Wait until the next phase of surgery before taking action",
      "Disconnect power and continue the surgery without the tool"
    ],
    "correctIndex": 1,
    "explanationEn": "Operating room safety dictates immediate closed-loop communication to the operating surgeon and the rapid retrieval of a verified sterile backup to maintain patient safety.",
    "explanationBn": "অপারেশন চলাকালীন কোনো জরুরি যন্ত্রপাতি বিকল হলে কালবিলম্ব না করে সাথে সাথে সার্জনকে জানাতে হবে এবং বিকল্প জীবাণুমুক্ত (sterile) ব্যাকআপ দিতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-15",
    "dayId": 13,
    "topic": "Neurological Localization - Aphasia",
    "difficulty": "MEDIUM",
    "question": "After a stroke, a patient has difficulty comprehending speech but speaks fluently with words lacking meaning. Which brain region is damaged?",
    "options": [
      "Broca's area in the left frontal lobe",
      "Wernicke's area in the left temporal lobe",
      "Occipital visual cortex",
      "Precentral motor gyrus"
    ],
    "correctIndex": 1,
    "explanationEn": "Wernicke's aphasia (receptive or sensory aphasia), caused by lesions in the posterior superior temporal gyrus of the dominant hemisphere, features fluent, paraphasic speech with severely impaired comprehension.",
    "explanationBn": "স্ট্রোকের পর কথা স্পষ্টভাবে বলতে পারলেও কথার অর্থ না থাকা এবং অন্যের কথা বুঝতে না পারা Wernicke's Aphasia-র লক্ষণ, যা বাম টেম্পোরাল লোবের ক্ষতির কারণে ঘটে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-16",
    "dayId": 11,
    "topic": "Respiratory Therapy - Nebulizer Troubleshooting",
    "difficulty": "EASY",
    "question": "During nebulization for a patient with COPD, the medication is not visibly misting. Best nursing action?",
    "options": [
      "Increase oxygen flow to 15 L/min without checking",
      "Check for kinks in the tubing and ensure the device is connected",
      "Pour out medication and administer orally",
      "Instruct the patient that invisible mist is normal"
    ],
    "correctIndex": 1,
    "explanationEn": "Troubleshooting a non-functioning nebulizer requires verifying gas source connection, checking flow rate (typically 6-8 L/min), and ensuring no tubing kinks or loose fittings exist.",
    "explanationBn": "নেবুলাইজার দিয়ে ওষুধ ভেপারের মতো না বেরোলে সর্বপ্রথম টিউবিং-এ কোনো ভাঁজ (kink) আছে কি না এবং সংযোগ ঠিক আছে কি না তা পরীক্ষা করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-17",
    "dayId": 13,
    "topic": "ENT Disorders - Meniere's Disease",
    "difficulty": "MEDIUM",
    "question": "Which dietary modification should be recommended for a patient with Meniere's disease to control symptoms?",
    "options": [
      "Increasing fluid and sodium intake",
      "Restricting sodium intake",
      "High purine diet with red meats",
      "Restricting all dietary protein"
    ],
    "correctIndex": 1,
    "explanationEn": "A low-sodium diet (1500-2000 mg/day) reduces endolymphatic fluid pressure in the inner ear, decreasing vertigo episodes, tinnitus, and sensorineural hearing loss in Meniere's disease.",
    "explanationBn": "মেনিয়ার্স রোগে অন্তর্কর্ণের ফ্লুইড প্রেশার কমাতে রোগীকে খাবারে লবণের পরিমাণ বা সোডিয়াম সীমিত (Restricting sodium) রাখার পরামর্শ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-18",
    "dayId": 13,
    "topic": "Increased Intracranial Pressure (ICP) Care",
    "difficulty": "MEDIUM",
    "question": "When managing a patient with increased intracranial pressure (ICP), which combination of actions should the nurse prioritize?",
    "options": [
      "Trendelenburg position and deep chest suctioning",
      "Elevate the head of the bed and monitor vital signs",
      "Flat supine positioning with neck flexed to right",
      "Continuous hypoventilation with high PEEP"
    ],
    "correctIndex": 1,
    "explanationEn": "Elevating the head of bed 30 degrees promotes jugular venous drainage without compromising cerebral perfusion, while vital signs monitoring detects Cushing's triad (hypertension, bradycardia, irregular respirations).",
    "explanationBn": "মস্তিষ্কে চাপ (ICP) বৃদ্ধি পেলে মাথার দিক ৩০ ডিগ্রি উঁচু (Head of the bed elevated) রাখতে হয় এবং নিয়মিত ভাইটাল সাইন্স পর্যবেক্ষণ করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-19",
    "dayId": 13,
    "topic": "Diagnostic Tests - Urea Breath Test",
    "difficulty": "EASY",
    "question": "Urea breath test is done for identifying infection of the gastric mucosa with which microorganism?",
    "options": [
      "Escherichia coli",
      "Helicobacter pylori",
      "Clostridium difficile",
      "Campylobacter jejuni"
    ],
    "correctIndex": 1,
    "explanationEn": "The urea breath test detects urease enzyme activity produced specifically by Helicobacter pylori, which splits labeled urea into ammonia and carbon dioxide.",
    "explanationBn": "ইউরিয়া ব্রেথ টেস্ট (Urea breath test) পাকস্থলীতে হেলিকোব্যাক্টার পাইলোরি (Helicobacter pylori) ব্যাকটেরিয়ার সংক্রমণ শনাক্ত করতে করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-20",
    "dayId": 12,
    "topic": "Urological Procedures - Cystoscopy",
    "difficulty": "EASY",
    "question": "Which diagnostic study is done to obtain biopsy specimens of bladder lesions?",
    "options": [
      "Intravenous pyelography (IVP)",
      "Renal ultrasound",
      "Cystoscopy",
      "Abdominal flat plate X-ray"
    ],
    "correctIndex": 2,
    "explanationEn": "Cystoscopy involves introducing an endoscope through the urethra into the urinary bladder, allowing direct visualization of mucosa and retrieval of biopsy specimens.",
    "explanationBn": "মূত্রথলির ক্ষতের সরাসরি দর্শন এবং বায়োপসি নমুনা সংগ্রহের জন্য সিস্টোস্কোপি (Cystoscopy) পরীক্ষা করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-21",
    "dayId": 12,
    "topic": "Trauma Nursing - Pelvic Fractures",
    "difficulty": "MEDIUM",
    "question": "A patient with a fracture of the pelvis should be monitored for:",
    "options": [
      "Changes in urine output",
      "Pupillary light reflex changes",
      "Patellar tendon hyperreflexia",
      "Serum amylase elevations"
    ],
    "correctIndex": 0,
    "explanationEn": "Pelvic fractures present a high risk of lower urinary tract injuries (bladder rupture, urethral transection) and massive retroperitoneal bleeding, requiring vigilant monitoring of urine output and hematuria.",
    "explanationBn": "পেলভিস বা শ্রোণিচক্রের হাড় ভাঙলে মূত্রথলি ও মূত্রনালী ক্ষতিগ্রস্ত হওয়ার ঝুঁকি থাকে, তাই রোগীর প্রস্রাবের পরিমাণ ও রক্তক্ষরণ নিবিড়ভাবে পর্যবেক্ষণ করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-22",
    "dayId": 12,
    "topic": "Oncology - Renal Cell Carcinoma Risk Factors",
    "difficulty": "EASY",
    "question": "Which is the most significant risk factor for the development of renal cancer?",
    "options": [
      "High dietary fiber intake",
      "Cigarette smoking",
      "Chronic bacterial cystitis",
      "Moderate alcohol intake"
    ],
    "correctIndex": 1,
    "explanationEn": "Cigarette smoking is the single most significant established environmental risk factor for renal cell carcinoma, doubling an individual's relative risk.",
    "explanationBn": "কিডনি ক্যানসার বা রেনাল সেল কার্সিনোমার সবচেয়ে প্রধান ও ঝুঁকিপূর্ণ কারণ হলো ধূমপান (Cigarette smoking)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-23",
    "dayId": 13,
    "topic": "Gastrointestinal Oncology",
    "difficulty": "EASY",
    "question": "Which infectious agent is a risk factor for the development of stomach cancer?",
    "options": [
      "Hepatitis B virus",
      "Helicobacter pylori",
      "Human papillomavirus",
      "Epstein-Barr virus"
    ],
    "correctIndex": 1,
    "explanationEn": "Chronic colonization with Helicobacter pylori causes persistent gastric mucosal inflammation, leading to chronic atrophic gastritis, dysplasia, and gastric adenocarcinoma.",
    "explanationBn": "পাকস্থলীর ক্যানসারের অন্যতম প্রধান সংক্রমণজনিত ঝুঁকি হলো হেলিকোব্যাক্টার পাইলোরি (H. pylori) ব্যাকটেরিয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-24",
    "dayId": 12,
    "topic": "Renal Oncology Symptoms",
    "difficulty": "EASY",
    "question": "The most common presenting symptom of renal cell carcinoma is:",
    "options": [
      "Severe flank colic",
      "Hematuria",
      "Generalized pruritus",
      "Urinary retention"
    ],
    "correctIndex": 1,
    "explanationEn": "Hematuria (gross or microscopic painless blood in urine) occurs in more than 60% of patients and is the most common presenting sign of renal cell carcinoma.",
    "explanationBn": "রেনাল সেল কার্সিনোমার প্রাথমিক ও সবচেয়ে সাধারণ লক্ষণ হলো প্রস্রাবের সাথে রক্ত যাওয়া বা হেমাটুরিয়া (Hematuria)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-25",
    "dayId": 7,
    "topic": "General Pathology - Medical Terminology",
    "difficulty": "EASY",
    "question": "What does aetiology refer to?",
    "options": [
      "The predicted course of a disease",
      "The cause of a disease",
      "The surgical excision of diseased tissue",
      "The laboratory confirmation of death"
    ],
    "correctIndex": 1,
    "explanationEn": "Etiology (aetiology) refers to the study or determination of the cause or origin of a disease or medical condition.",
    "explanationBn": "মেডিকেল ভাষায় ইটিওলজি (Aetiology) বলতে কোনো রোগের কারণ বা উৎসকে বোঝায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-26",
    "dayId": 13,
    "topic": "Oncology - TNM Staging",
    "difficulty": "MEDIUM",
    "question": "When a patient's cancer is classified as 'T1N0M0', what does it indicate?",
    "options": [
      "Large primary tumor with distant organ involvement",
      "Small primary tumour with no lymph node involvement and no metastasis",
      "In situ lesion with positive regional lymph node involvement",
      "Metastatic recurrence after surgical clearance"
    ],
    "correctIndex": 1,
    "explanationEn": "In TNM staging: T1 indicates a small primary tumor confined to its site of origin, N0 indicates no regional lymph node metastasis, and M0 indicates no distant metastasis.",
    "explanationBn": "'T1N0M0' নির্দেশ করে ক্যানসারের প্রাথমিক টিউমারটি আকারে ছোট এবং কোনো লিম্ফ নোড বা দূরবর্তী অঙ্গে ছড়ায়নি (No metastasis)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-27",
    "dayId": 10,
    "topic": "Cardiovascular Pathology - Atherosclerosis",
    "difficulty": "MEDIUM",
    "question": "Which layer of coronary blood vessels gets blocked and narrowed by fatty substances in atherosclerosis?",
    "options": [
      "Tunica adventitia",
      "Tunica media",
      "Tunica intima",
      "Tunica elastica"
    ],
    "correctIndex": 2,
    "explanationEn": "Atherosclerosis begins with endothelial injury in the tunica intima, leading to lipid accumulation, foam cell formation, and atheromatous plaque thickening that narrows the lumen.",
    "explanationBn": "অ্যাথেরোস্ক্লেরোসিস প্রক্রিয়ায় রক্তনালীর সবচেয়ে ভেতরের স্তর টিউনিকা ইনটিমা (Tunica intima)-তে চর্বি ও কোলেস্টেরল জমে রক্তনালী সংকুচিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-28",
    "dayId": 10,
    "topic": "Resuscitation - ALS Defibrillation Cycles",
    "difficulty": "MEDIUM",
    "question": "How many cycles of CPR are given followed by one shock if the victim has a shockable rhythm during ALS in cardiac arrest?",
    "options": [
      "2",
      "3",
      "5",
      "8"
    ],
    "correctIndex": 2,
    "explanationEn": "Advanced Life Support guidelines dictate performing 2 minutes of CPR (approximately 5 cycles of 30:2 compressions-to-ventilations) between defibrillation shocks.",
    "explanationBn": "কার্ডিয়াক অ্যারেস্টে শক দেওয়ার পর প্রতিবারে ২ মিনিট বা প্রায় ৫ সাইকেল CPR সম্পন্ন করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-29",
    "dayId": 13,
    "topic": "Tissue Healing - Proliferative Phase",
    "difficulty": "EASY",
    "question": "In which phase of wound healing does the wound appear pink and vascular?",
    "options": [
      "Hemostasis phase",
      "Inflammatory phase",
      "Granulation phase",
      "Maturation phase"
    ],
    "correctIndex": 2,
    "explanationEn": "During the granulation (proliferative) phase, new capillary networks form via angiogenesis, giving healthy healing tissue its characteristic beefy pink, granular, vascular appearance.",
    "explanationBn": "ক্ষত নিরাময়ের গ্র্যানুলেশন দশায় (Granulation phase) নতুন রক্তজালক গঠিত হওয়ায় ক্ষতস্থানটি উজ্জ্বল গোলাপি ও রক্তনালীবহুল দেখায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-30",
    "dayId": 1,
    "topic": "Preoperative Legal Protocols",
    "difficulty": "EASY",
    "question": "What legal preparation is done for a patient undergoing fracture surgery?",
    "options": [
      "Signed informed consent",
      "Verbal authorization over telephone",
      "Hospital discharge summary",
      "Living will notarization"
    ],
    "correctIndex": 0,
    "explanationEn": "Signed informed consent is the mandatory legal prerequisite before surgery, confirming that the patient understands the nature, risks, benefits, and alternatives of the procedure.",
    "explanationBn": "হাড়ের অস্ত্রোপচারের আগে রোগীকে দিয়ে স্বাক্ষরিত সম্মতিপত্র (Signed informed consent) পূরণ করা আইনগতভাবে বাধ্যতামূলক।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-31",
    "dayId": 10,
    "topic": "Shock Signs & Manifestations",
    "difficulty": "EASY",
    "question": "Which of the following is a symptom of shock?",
    "options": [
      "Warm flushed extremities and bounding pulse",
      "Rapid breathing and weak pulse",
      "Hypertension and wide pulse pressure",
      "Deep slow respirations and pupil constriction"
    ],
    "correctIndex": 1,
    "explanationEn": "In shock, sympathetic activation and tissue hypoxia result in compensatory tachypnea (rapid breathing) and tachycardia with a weak, thready peripheral pulse.",
    "explanationBn": "শকের প্রধান লক্ষণ হলো দ্রুত অগভীর শ্বাসপ্রশ্বাস এবং দ্রুত দুর্বল নাড়ির স্পন্দন (Rapid breathing and weak pulse)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-32",
    "dayId": 10,
    "topic": "Acute Coronary Syndromes - Pulmonary Edema",
    "difficulty": "MEDIUM",
    "question": "A client with a myocardial infarction develops rapid heart rate, dyspnea, and coughs up pink, frothy sputum. What lung sound is heard?",
    "options": [
      "Stridor",
      "Wheezes",
      "Crackles",
      "Pleural friction rub"
    ],
    "correctIndex": 2,
    "explanationEn": "Left ventricular failure post-MI causes acute pulmonary edema, producing alveoli fluid transudation, frothy pink hemoptysis, and inspiratory crackles (rales) on auscultation.",
    "explanationBn": "মায়োকার্ডিয়াল ইনফার্কশনের পর ফুসফুসে পানি জমলে (Pulmonary edema) গোলাপি ফেনাযুক্ত কফ বের হয় এবং স্টেথোস্কোপে ক্র্যাকল্স (Crackles) শব্দ শোনা যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-33",
    "dayId": 10,
    "topic": "Hemorrhagic Shock Staging",
    "difficulty": "HARD",
    "question": "In stage 3 hypovolemic shock, the patient will have blood loss of:",
    "options": [
      "Up to 15%",
      "15–30%",
      "30–40%",
      "Over 50%"
    ],
    "correctIndex": 2,
    "explanationEn": "According to ATLS classification: Class I is <15% blood loss, Class II is 15-30%, Class III is 30-40% (1500-2000 mL blood loss, marked hypotension and oliguria), and Class IV is >40%.",
    "explanationBn": "হাইপোভলেমিক শকের স্টেজ ৩ (Class III)-তে রোগীর রক্তের ৩০-৪০% (১৫০০-২০০০ মিলি) অপচয় ঘটে এবং রক্তচাপ তীব্রভাবে কমে যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-34",
    "dayId": 12,
    "topic": "Renal Neoplasm Signs",
    "difficulty": "EASY",
    "question": "What is the most common initial sign of a renal tumor?",
    "options": [
      "Severe dysuria",
      "Painless hematuria",
      "Scrotal varicocele",
      "Acute anuria"
    ],
    "correctIndex": 1,
    "explanationEn": "Painless gross or microscopic hematuria is the classic and most frequent initial presenting sign of renal tumors, occurring before flank pain or palpable mass appear.",
    "explanationBn": "কিডনি টিউমারের প্রাথমিক এবং সবচেয়ে সাধারণ লক্ষণ হলো ব্যথাহীন রক্তমিশ্রিত প্রস্রাব (Painless hematuria)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-35",
    "dayId": 12,
    "topic": "Urinary Elimination Pathophysiology",
    "difficulty": "EASY",
    "question": "Which statement best explains urinary retention?",
    "options": [
      "Excessive production of urine exceeding 3 L/day",
      "Inability of the bladder to empty properly",
      "Involuntary passage of urine during coughing",
      "Inflammation of the urethra causing burning"
    ],
    "correctIndex": 1,
    "explanationEn": "Urinary retention is the inability to completely empty urine from the bladder, resulting in progressive bladder distension, discomfort, and risk of overflow incontinence.",
    "explanationBn": "ইউরিনারি রিটেনশন (Urinary retention) বলতে মূত্রথলি সম্পূর্ণভাবে খালি করতে না পারাকে বোঝায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-36",
    "dayId": 10,
    "topic": "CPR Guidelines - Rescuer Fatigue",
    "difficulty": "EASY",
    "question": "While performing CPR in cardiac arrest, rescuers should change roles every:",
    "options": [
      "1 minute",
      "2 minutes",
      "5 minutes",
      "10 minutes"
    ],
    "correctIndex": 1,
    "explanationEn": "To prevent chest compressor fatigue and maintain effective compression depth (>5 cm) and rate (100-120/min), rescuers should rotate roles every 2 minutes (every 5 cycles).",
    "explanationBn": "CPR দেওয়ার সময় ক্লান্তি দূর করতে ও সঠিক কম্প্রেশন বজায় রাখতে উদ্ধারকারীদের প্রতি ২ মিনিট পর পর স্থান পরিবর্তন করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-37",
    "dayId": 13,
    "topic": "Cancer Staging - TNM System",
    "difficulty": "EASY",
    "question": "In the TNM classification system, ascending degrees of increase in tumor size and involvement is denoted by:",
    "options": [
      "T1–4",
      "N0–3",
      "M0–1",
      "G1–4"
    ],
    "correctIndex": 0,
    "explanationEn": "In the TNM staging system, 'T' denotes the primary tumor, with T1 through T4 reflecting progressive increases in tumor size and local tissue invasion.",
    "explanationBn": "TNM ক্যানসার ক্লাসিফিকেশনে টিউমারের আকার ও বৃদ্ধির পরিধি বোঝাতে T1 থেকে T4 (T1–4) ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-38",
    "dayId": 13,
    "topic": "Oncology - Genetic Predisposition",
    "difficulty": "MEDIUM",
    "question": "Individuals with which blood group have a higher risk of developing gastric carcinoma?",
    "options": [
      "Type O",
      "Type A",
      "Type B",
      "Type AB"
    ],
    "correctIndex": 1,
    "explanationEn": "Epidemiological research demonstrates that people with ABO blood group Type A have approximately a 20% increased susceptibility to developing gastric carcinoma.",
    "explanationBn": "গবেষণায় দেখা গেছে যে ব্লাড গ্রুপ 'A' (Type A) যুক্ত ব্যক্তিদের পাকস্থলীর ক্যানসার হওয়ার ঝুঁকি বেশি থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-39",
    "dayId": 12,
    "topic": "Electrolyte Imbalance - Hyperkalemia Etiology",
    "difficulty": "EASY",
    "question": "Which disease has a greater risk of developing hyperkalemia?",
    "options": [
      "Renal failure",
      "Primary aldosteronism",
      "Diabetes insipidus",
      "Cushing's syndrome"
    ],
    "correctIndex": 0,
    "explanationEn": "In renal failure, impaired glomerular filtration and damaged renal tubular secretion prevent potassium excretion, posing a critical risk of lethal hyperkalemia.",
    "explanationBn": "কিডনি ফেইলিওর (Renal failure)-এ প্রস্রাবের সাথে পটাশিয়াম বের হতে না পেরে রক্তে পটাশিয়ামের মাত্রা মারাত্মক বেড়ে যায় (Hyperkalemia)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-40",
    "dayId": 10,
    "topic": "Myocardial Infarction Clinical Diagnosis",
    "difficulty": "EASY",
    "question": "Severe chest pain not relieved by rest, position change, or nitrate administration indicates:",
    "options": [
      "Costochondritis",
      "Gastroesophageal reflux",
      "Myocardial infarction",
      "Chronic stable angina"
    ],
    "correctIndex": 2,
    "explanationEn": "Anginal pain typically subsides with sublingual nitroglycerin and rest; crushing substernal chest pain unresponsive to nitrates signifies acute myocardial infarction.",
    "explanationBn": "বিশ্রাম নেওয়া বা নাইট্রেট ওষুধ খাওয়ার পরেও যে তীব্র বুকের ব্যথা কমে না, তা মায়োকার্ডিয়াল ইনফার্কশন (হার্ট অ্যাটাক) নির্দেশ করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-41",
    "dayId": 12,
    "topic": "Renal Cell Carcinoma Risk Factors",
    "difficulty": "HARD",
    "question": "Which of the following is NOT a recognised risk factor for the development of renal carcinoma?",
    "options": [
      "Cigarette smoking",
      "Obesity",
      "Hypertension",
      "Hemodialysis"
    ],
    "correctIndex": 3,
    "explanationEn": "While long-standing acquired cystic kidney disease in ESRD carries some risk, hemodialysis itself is a renal replacement modality rather than an independent etiological risk factor compared to smoking, obesity, and hypertension.",
    "explanationBn": "ধূমপান, স্থূলতা এবং উচ্চ রক্তচাপ রেনাল ক্যানসারের স্বীকৃত ঝুঁকি হলেও হিমোডায়ালাইসিস এর কোনো মূল কারণ বা ঝুঁকি নয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-42",
    "dayId": 10,
    "topic": "Vascular Pathology",
    "difficulty": "EASY",
    "question": "In atherosclerosis, accumulation of lipid or fatty substances and fibrous tissue is present in:",
    "options": [
      "Artery",
      "Vein",
      "Capillary",
      "Lymph vessel"
    ],
    "correctIndex": 0,
    "explanationEn": "Atherosclerosis is a chronic inflammatory disorder that selectively targets the intimal lining of large and medium-sized arteries.",
    "explanationBn": "অ্যাথেরোস্ক্লেরোসিসে চর্বি ও আঁশযুক্ত পদার্থ মূলত ধমনি বা আর্টারি (Artery)-র দেওয়ালে জমা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-43",
    "dayId": 13,
    "topic": "First Aid & Fracture Immobilization",
    "difficulty": "EASY",
    "question": "In which condition is a collar sling applied as a first aid measure before shifting the patient to the hospital?",
    "options": [
      "Dislocation of the hip joint",
      "Fracture femur",
      "Fracture lower arm",
      "Cervical spine subluxation"
    ],
    "correctIndex": 2,
    "explanationEn": "A collar-and-cuff or broad arm sling is applied to elevate and immobilize fractures of the forearm, wrist, and hand before definitive hospital immobilization.",
    "explanationBn": "হাতের নিচের অংশ বা ফোরআর্ম ভাঙলে (Fracture lower arm) প্রাথমিক চিকিৎসা হিসেবে কলার স্লিং ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-44",
    "dayId": 12,
    "topic": "Urinary Bladder Neuromuscular Function",
    "difficulty": "MEDIUM",
    "question": "Which muscle dysfunction results in urinary retention?",
    "options": [
      "Pectineus muscle",
      "Detrusor muscles",
      "External anal sphincter",
      "Cremaster muscle"
    ],
    "correctIndex": 1,
    "explanationEn": "The detrusor muscle contracts during micturition to empty bladder contents; detrusor hypotonia or neurogenic acontractility directly causes urinary retention.",
    "explanationBn": "মূত্রথলির ডেট্রুসর পেশি (Detrusor muscle) দুর্বল বা অকেজো হয়ে পড়লে প্রস্রাব আটকে যায় বা রিটেনশন ঘটে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-45",
    "dayId": 12,
    "topic": "Acute Kidney Injury Fluid Assessment",
    "difficulty": "EASY",
    "question": "In assessing fluid status in a patient with acute kidney injury, which physical finding best indicates fluid deficit?",
    "options": [
      "Distended neck veins at 45 degrees",
      "Bilateral dependent pitting ankle edema",
      "Poor skin turgor and dry mucous membranes",
      "Audible pulmonary bibasilar crackles"
    ],
    "correctIndex": 2,
    "explanationEn": "Decreased skin turgor (tenting) and dry, cracked oral mucous membranes are classical physical indicators of hypovolemia and dehydration.",
    "explanationBn": "শরীরে তরলের ঘাটতি বা পানিশূন্যতা বোঝার সবচেয়ে প্রধান লক্ষণ হলো ত্বকের স্থিতিস্থাপকতা কমে যাওয়া (Poor skin turgor) এবং শুষ্ক শ্লেষ্মাঝিল্লি।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-46",
    "dayId": 12,
    "topic": "Acid-Base Imbalance - Respiratory Alkalosis",
    "difficulty": "MEDIUM",
    "question": "The decrease in carbonic acid seen in hyperventilation is called:",
    "options": [
      "Respiratory acidosis",
      "Respiratory alkalosis",
      "Metabolic acidosis",
      "Metabolic alkalosis"
    ],
    "correctIndex": 1,
    "explanationEn": "Alveolar hyperventilation causes excessive elimination of carbon dioxide, decreasing dissolved carbonic acid (H2CO3) and raising blood pH (> 7.45), creating respiratory alkalosis.",
    "explanationBn": "অতিরিক্ত দ্রুত শ্বাসপ্রশ্বাস (Hyperventilation)-এর কারণে রক্তে কার্বনিক অ্যাসিডের মাত্রা কমে যাওয়াকে রেসপিরেটরি অ্যালকালোসিস (Respiratory alkalosis) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-47",
    "dayId": 10,
    "topic": "Burn Pathophysiology - Zones of Injury",
    "difficulty": "MEDIUM",
    "question": "In burns, the associated tissue damage with greatest destruction occurs in:",
    "options": [
      "Zone of hyperemia",
      "Zone of stasis",
      "Zone of coagulation",
      "Zone of erythema"
    ],
    "correctIndex": 2,
    "explanationEn": "Jackson's burn model: The Zone of Coagulation is the central epicenter of maximal thermal damage where irreversible tissue necrosis and cellular death have occurred.",
    "explanationBn": "পুড়ে যাওয়ার ক্ষতে সবচেয়ে বেশি ধ্বংসপ্রাপ্ত ও অপূরণীয় ক্ষতিগ্রস্ত অঞ্চলটিকে জোন অব কোয়াগুলেশন (Zone of coagulation) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-48",
    "dayId": 13,
    "topic": "Orthopedic Diagnostics - Arthrocentesis",
    "difficulty": "EASY",
    "question": "The purpose of performing Arthrocentesis is:",
    "options": [
      "Synovial fluid analysis",
      "Measurement of bone calcium density",
      "Repair of torn ligaments under laparoscopy",
      "Assessment of spinal fluid pressure"
    ],
    "correctIndex": 0,
    "explanationEn": "Arthrocentesis involves needle aspiration of fluid from a joint capsule for diagnostic analysis of crystals, cell counts, culture, and pain relief from effusion.",
    "explanationBn": "আর্থ্রোসেন্টেসিস (Arthrocentesis) পদ্ধতির মূল উদ্দেশ্য হলো অস্থিসন্ধির সাইনোভিয়াল ফ্লুইড সংগ্রহ করে তা পরীক্ষা করা (Synovial fluid analysis)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-49",
    "dayId": 7,
    "topic": "Cellular Pathology - Reversible Injury",
    "difficulty": "MEDIUM",
    "question": "The morphology of reversible cell injury seen includes:",
    "options": [
      "Karyolysis",
      "Karyorrhexis",
      "Hydropic change",
      "Pyknosis"
    ],
    "correctIndex": 2,
    "explanationEn": "Hydropic change (cellular swelling or vacuolar degeneration) occurs due to failure of energy-dependent Na+/K+ pumps and is the earliest morphological hallmark of reversible cellular injury.",
    "explanationBn": "কোষের নিরাময়যোগ্য ক্ষতির (Reversible cell injury) প্রাথমিক রূপ হলো কোষে জল জমে ফুলে যাওয়া বা হাইড্রপিক পরিবর্তন (Hydropic change)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-50",
    "dayId": 7,
    "topic": "Cellular Pathology - Irreversible Injury",
    "difficulty": "MEDIUM",
    "question": "Which morphological pathological process occurs in irreversible cell injury?",
    "options": [
      "Hydropic swelling",
      "Fatty change",
      "Autolysis change",
      "Cell membrane blebbing"
    ],
    "correctIndex": 2,
    "explanationEn": "Irreversible injury progresses to necrosis and enzymatic digestion of cellular components by intrinsic lysosomal enzymes, termed autolysis.",
    "explanationBn": "কোষের অপূরণীয় ক্ষতিতে (Irreversible cell injury) লাইসোজোমের এনজাইম দ্বারা কোষ নিজেই ধ্বংসপ্রাপ্ত হয়, যাকে অটোলাইসিস (Autolysis) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-51",
    "dayId": 1,
    "topic": "Bioethics in Emergency Care",
    "difficulty": "MEDIUM",
    "question": "When multiple trauma patients arrive simultaneously with orthopaedic injuries, the ethical principle guiding resource allocation is:",
    "options": [
      "Autonomy",
      "Beneficence",
      "Justice",
      "Paternalism"
    ],
    "correctIndex": 2,
    "explanationEn": "The ethical principle of Justice requires fair, equitable distribution of healthcare resources based on objective clinical priority, severity, and need.",
    "explanationBn": "একসাথে অনেক ট্রমা রোগী আসলে চিকিৎসা সরঞ্জাম ও সেবা বণ্টনের মূল নৈতিক ভিত্তি হলো ন্যায়বিচার বা জাস্টিস (Justice)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-52",
    "dayId": 7,
    "topic": "Diagnostic Pathology - FNAC",
    "difficulty": "EASY",
    "question": "Study of cells collected by fine needle aspiration of superficial and deep-seated lesions for diagnosis is termed:",
    "options": [
      "Histopathology",
      "Cytopathology",
      "Immunology",
      "Hematology"
    ],
    "correctIndex": 1,
    "explanationEn": "Cytopathology is the branch of pathology that studies free individual cells or tissue fragments obtained by fine-needle aspiration cytology (FNAC) or scraping.",
    "explanationBn": "এফএনএসি (FNAC) সুই দিয়ে কোষ সংগ্রহ করে মাইক্রোস্কোপে রোগ নির্ণয় করার পদ্ধতিকে সাইটোপ্যাথলজি (Cytopathology) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-53",
    "dayId": 10,
    "topic": "Ischemic Heart Disease - Angina Types",
    "difficulty": "MEDIUM",
    "question": "Chest pain occurring intermittently over a long period with the same pattern of onset, duration, and intensity is called:",
    "options": [
      "Unstable angina",
      "Chronic stable angina",
      "Variant (Prinzmetal's) angina",
      "Acute aortic dissection"
    ],
    "correctIndex": 1,
    "explanationEn": "Chronic stable angina is characterized by predictable, episodic chest discomfort provoked by exertion or emotional stress that subsides with rest or sublingual nitroglycerin.",
    "explanationBn": "নির্দিষ্ট পরিশ্রমের পর দীর্ঘ সময় ধরে একই তীব্রতা ও স্থায়িত্বে যে বুকের ব্যথা দেখা দেয় তাকে ক্রনিক স্টেবল অ্যানজাইনা (Chronic stable angina) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-54",
    "dayId": 7,
    "topic": "Cellular Injury Mechanisms",
    "difficulty": "EASY",
    "question": "Which is an example of a reversible morphological change?",
    "options": [
      "Cellular swelling",
      "Coagulative necrosis",
      "Caseous necrosis",
      "Liquefactive necrosis"
    ],
    "correctIndex": 0,
    "explanationEn": "Cellular swelling (cloudy swelling) is completely reversible once normal cellular perfusion, ATP generation, and membrane ion pumping are restored.",
    "explanationBn": "কোষের রিভার্সিবল বা নিরাময়যোগ্য রূপ পরিবর্তনের প্রধান উদাহরণ হলো সেলুলার সোয়েলিং (Cellular swelling বা কোষের ফোলাভাব)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-55",
    "dayId": 13,
    "topic": "Orthopaedic Nursing Quality Indicators",
    "difficulty": "MEDIUM",
    "question": "A key performance indicator specific to orthopaedic nursing that should be monitored regularly is:",
    "options": [
      "Total number of visitors per patient",
      "Functional improvement from admission to discharge",
      "Daily food tray delivery timing",
      "Length of cafeteria lines"
    ],
    "correctIndex": 1,
    "explanationEn": "Measuring functional mobility and independence gain from admission to discharge is a core patient-centered Key Performance Indicator (KPI) in orthopaedic care.",
    "explanationBn": "অর্থোপেডিক নার্সিং সেবার মান মূল্যায়নের প্রধান নির্দেশক (KPI) হলো ভর্তি থেকে ছুটির সময় পর্যন্ত রোগীর অঙ্গ সঞ্চালন ও শারীরিক কর্মক্ষমতার উন্নতি।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-56",
    "dayId": 12,
    "topic": "Electrolyte Imbalances - Hypercalcemia",
    "difficulty": "MEDIUM",
    "question": "The risk factor of hypercalcemia is:",
    "options": [
      "Prolonged immobilization",
      "Extreme marathon running",
      "Hypoparathyroidism",
      "High dietary phosphorus intake"
    ],
    "correctIndex": 0,
    "explanationEn": "Prolonged bed rest and lack of weight-bearing stress stimulate osteoclastic bone resorption, leaching calcium from bones into the bloodstream and causing hypercalcemia.",
    "explanationBn": "দীর্ঘদিন বিছানায় শুয়ে থাকলে বা চলাফেরা না করলে (Prolonged immobilization) হাড় থেকে ক্যালসিয়াম রক্তে এসে হাইপারক্যালসেমিয়া সৃষ্টি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-57",
    "dayId": 13,
    "topic": "Wound Healing Biochemistry",
    "difficulty": "MEDIUM",
    "question": "In which wound healing phase does the synthesis of collagen occur?",
    "options": [
      "Hemostasis phase",
      "Inflammatory phase",
      "Granulation phase",
      "Vascular spasm phase"
    ],
    "correctIndex": 2,
    "explanationEn": "In the granulation (proliferative) phase, proliferating fibroblasts actively synthesize collagen fibers and proteoglycans to restore tissue structural integrity.",
    "explanationBn": "ক্ষত নিরাময়ের গ্র্যানুলেশন দশায় (Granulation phase) ফাইব্রোব্লাস্ট দ্বারা কোলাজেন প্রোটিন সংশ্লেষিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-58",
    "dayId": 10,
    "topic": "First Aid - Envenomation",
    "difficulty": "EASY",
    "question": "What is the first step in providing first aid for a snake bite?",
    "options": [
      "Apply a tight arterial tourniquet above the bite",
      "Keep the affected limb immobilized and below heart level",
      "Incise the fang puncture marks and apply suction",
      "Pack the wound with crushed ice cubes"
    ],
    "correctIndex": 1,
    "explanationEn": "Immobilizing the bitten limb with a splint and positioning it at or below heart level slows lymphatic circulation of venom while avoiding tissue-damaging tourniquets or incisions.",
    "explanationBn": "সাপের কামড়ের প্রাথমিক চিকিৎসায় আক্রান্ত অঙ্গটি না নাড়িয়ে সম্পূর্ণ স্থির রাখা এবং হৃদপিণ্ডের স্তরের নিচে (Below heart level) রাখা আবশ্যক।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-59",
    "dayId": 13,
    "topic": "Metabolic Joint Disorders - Gout",
    "difficulty": "EASY",
    "question": "Chronic gout is characterised by multiple joint involvement with the presence of:",
    "options": [
      "Heberden's nodes",
      "Bouchard's nodes",
      "Tophi",
      "Aschoff nodules"
    ],
    "correctIndex": 2,
    "explanationEn": "Tophi are macroscopic chalky subcutaneous and synovial deposits of monosodium urate crystals characteristic of chronic advanced gout.",
    "explanationBn": "ক্রনিক গাউট বা বাতরোগের প্রধান বৈশিষ্ট্য হলো অস্থিসন্ধিতে ইউরিক অ্যাসিড জমে শক্ত দলা বা টোফাই (Tophi) তৈরি হওয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-60",
    "dayId": 13,
    "topic": "Orthopedic Surgery - Total Ankle Arthroplasty",
    "difficulty": "HARD",
    "question": "Which activity should be avoided by a patient scheduled for total ankle replacement surgery?",
    "options": [
      "Gentle toe wiggling exercises",
      "Bearing weight on the affected leg for 6 weeks",
      "Deep breathing exercises postoperatively",
      "Elevating the leg on two pillows"
    ],
    "correctIndex": 1,
    "explanationEn": "Following total ankle replacement, strictly avoiding weight-bearing on the operative leg for approximately 6 weeks protects implant integration and bony fusion.",
    "explanationBn": "টোটাল অ্যাঙ্কেল রিপ্লেসমেন্ট সার্জারির পর ক্ষতিগ্রস্ত পায়ে ৬ সপ্তাহ কোনো ভর দেওয়া (Bearing weight for 6 weeks) সম্পূর্ণ এড়িয়ে চলতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-61",
    "dayId": 13,
    "topic": "Oncology - TNM Nodal Staging",
    "difficulty": "EASY",
    "question": "What does 'NX' signify in the TNM classification?",
    "options": [
      "No regional lymph node involvement",
      "Regional lymph nodes cannot be assessed",
      "Distant node metastasis verified",
      "Metastasis to contralateral nodes"
    ],
    "correctIndex": 1,
    "explanationEn": "In the TNM cancer classification, 'NX' indicates that regional lymph nodes cannot be assessed or evaluated (e.g., previously removed or unexamined).",
    "explanationBn": "TNM পদ্ধতিতে 'NX' দিয়ে বোঝানো হয় যে নিকটবর্তী লিম্ফ নোডগুলো পরীক্ষা বা মূল্যায়ন করা সম্ভব হয়নি (Cannot be assessed)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-62",
    "dayId": 13,
    "topic": "Histological Grading of Tumors",
    "difficulty": "MEDIUM",
    "question": "In which grade does a tumour possess cells that are moderately differentiated?",
    "options": [
      "Grade I",
      "Grade II",
      "Grade III",
      "Grade IV"
    ],
    "correctIndex": 1,
    "explanationEn": "Histological grading: Grade I = well-differentiated, Grade II = moderately differentiated, Grade III = poorly differentiated, Grade IV = undifferentiated/anaplastic.",
    "explanationBn": "টিউমার গ্রেডিং পদ্ধতিতে গ্রেড ২ (Grade II)-তে ক্যানসার কোষগুলো মাঝারি মাত্রায় পৃথকীকৃত (Moderately differentiated) থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-63",
    "dayId": 10,
    "topic": "Hematological Emergencies - Acute DIC",
    "difficulty": "HARD",
    "question": "Which laboratory finding is most consistent with acute DIC?",
    "options": [
      "Shortened PT and high platelet count",
      "Prolonged PT/PTT with thrombocytopenia",
      "Normal fibrinogen and low D-dimer",
      "Isolated elevation of red blood cells"
    ],
    "correctIndex": 1,
    "explanationEn": "Consumptive coagulopathy in acute Disseminated Intravascular Coagulation (DIC) rapidly depletes platelets (thrombocytopenia) and clotting factors, prolonging PT and aPTT.",
    "explanationBn": "তীব্র DIC রোগে ক্লটিং ফ্যাক্টর ও অণুচক্রিকা নিঃশেষিত হওয়ায় PT/PTT দীর্ঘায়িত হয় এবং থ্রম্বোসাইটোপেনিয়া (প্লেটলেট কমে যাওয়া) দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-64",
    "dayId": 10,
    "topic": "Thermal Burns Systemic Complications",
    "difficulty": "MEDIUM",
    "question": "When there is necrosis of tissue due to burn injury, the patient is at risk of developing:",
    "options": [
      "Disseminated intravascular coagulation (DIC)",
      "Primary hypothyroidism",
      "Aplastic anemia",
      "Pernicious anemia"
    ],
    "correctIndex": 0,
    "explanationEn": "Severe tissue necrosis from major burn trauma releases abundant tissue factor and inflammatory cytokines, triggering systemic intravascular microthrombosis and acute DIC.",
    "explanationBn": "পুড়ে গিয়ে ব্যাপক টিস্যু নষ্ট হলে সেখান থেকে থ্রম্বোপ্লাস্টিন নিঃসৃত হয়ে রক্ত জমাট বাঁধার জটিলতা বা DIC সৃষ্টি হতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-65",
    "dayId": 7,
    "topic": "Tissue Pathology - Choristoma",
    "difficulty": "HARD",
    "question": "Normal tissue present at an ectopic site, which is not a true tumour, is known as:",
    "options": [
      "Hamartoma",
      "Teratoma",
      "Choristoma",
      "Adenoma"
    ],
    "correctIndex": 2,
    "explanationEn": "A choristoma (heterotopia) is a developmental mass of histologically normal mature tissue located in an abnormal anatomical site (e.g., normal pancreatic tissue in the stomach wall).",
    "explanationBn": "স্বাভাবিক টিস্যু শরীরের অস্বাভাবিক কোনো স্থানে উপস্থিত থাকলে (যা প্রকৃত টিউমার নয়) তাকে কোরিস্তোমা (Choristoma) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-66",
    "dayId": 13,
    "topic": "Orthopedic Assessment Instruments",
    "difficulty": "EASY",
    "question": "The important use of a Goniometer is to measure the:",
    "options": [
      "Pulse pressure",
      "Range of motion",
      "Bone mineral density",
      "Lung tidal volume"
    ],
    "correctIndex": 1,
    "explanationEn": "A goniometer is an instrument used by nurses, physicians, and physical therapists to accurately measure the angular range of motion (ROM) of joints.",
    "explanationBn": "অস্থিসন্ধির নড়াচড়ার কোণ বা রেঞ্জ অব মোশন (Range of motion) পরিমাপের জন্য গোনিওমিটার (Goniometer) ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ms-67",
    "dayId": 13,
    "topic": "Neuro-oncology - Metastatic Tumors",
    "difficulty": "MEDIUM",
    "question": "In which brain tumor are multiple well-defined deposits usually located at the grey and white matter junction?",
    "options": [
      "Metastatic brain tumor",
      "Pituitary microadenoma",
      "Meningioma",
      "Acoustic neuroma"
    ],
    "correctIndex": 0,
    "explanationEn": "Metastatic brain tumors characteristically present as multiple circumscribed spherical masses located at the junction of grey and white matter where caliber of microvasculature abruptly changes.",
    "explanationBn": "গ্রে এবং হোয়াইট ম্যাটারের সংযোগস্থলে একাধিক স্পষ্ট গোলাকার টিউমার দেখা যাওয়া মেটাস্ট্যাটিক ব্রেন টিউমারের (Metastatic brain tumor) প্রধান লক্ষণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-1",
    "dayId": 17,
    "topic": "Surgical Menopause Symptoms",
    "difficulty": "MEDIUM",
    "question": "A 45-year-old woman undergoes total abdominal hysterectomy with bilateral salpingo-oophorectomy and reports sudden hot flashes and night sweats two weeks later. Most likely cause?",
    "options": [
      "Systemic surgical site infection",
      "Abrupt loss of ovarian hormone production following surgery",
      "Onset of acute thyroiditis",
      "Adverse reaction to prophylactic antibiotics"
    ],
    "correctIndex": 1,
    "explanationEn": "Bilateral oophorectomy causes acute surgical menopause due to the immediate cessation of ovarian estrogen and progesterone secretion, triggering vasomotor instability (hot flashes, night sweats).",
    "explanationBn": "অস্ত্রোপচারের মাধ্যমে দুটি ডিম্বাশয় অপসারণ করায় শরীরে ইস্ট্রোজেন হরমোন হঠাৎ বন্ধ হয়ে যায়, ফলে হট ফ্ল্যাশ ও রাতের ঘামের মতো মেনোপজের লক্ষণ দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-2",
    "dayId": 17,
    "topic": "Congenital Uterine Anomalies",
    "difficulty": "EASY",
    "question": "Which of the following is a common type of congenital uterine malformation?",
    "options": [
      "Bicornuate uterus",
      "Retroverted uterus",
      "Prolapsed uterus",
      "Fibroid uterus"
    ],
    "correctIndex": 0,
    "explanationEn": "A bicornuate uterus (heart-shaped uterus with two horns) is a common congenital Müllerian duct anomaly resulting from incomplete fusion during embryogenesis.",
    "explanationBn": "বাইকর্নুয়েট জরায়ু (Bicornuate uterus) হলো জরায়ুর একটি সাধারণ জন্মগত ত্রুটি যেখানে জরায়ু দুটি পৃথক শিং বা প্রকোষ্ঠে বিভক্ত থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-3",
    "dayId": 18,
    "topic": "Postpartum Care - Rooming-In",
    "difficulty": "EASY",
    "question": "Which statement by new parents shows an accurate understanding of rooming-in?",
    "options": [
      "Rooming-in allows us to recognize and respond to our baby's needs quickly",
      "Rooming-in ensures hospital staff do all feedings",
      "Rooming-in prevents mother from sleeping during the night",
      "Rooming-in guarantees baby never cries"
    ],
    "correctIndex": 0,
    "explanationEn": "Rooming-in keeps mother and infant together 24 hours a day, facilitating mother-infant bonding, cue recognition, and demand breastfeeding.",
    "explanationBn": "রুমিং-ইন (Rooming-in) ব্যবস্থার প্রধান সুবিধা হলো মা ও বাবা খুব দ্রুত তাদের নবজাতকের প্রয়োজন ও ক্ষুধার ইঙ্গিত বুঝতে ও সাড়া দিতে পারেন।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-4",
    "dayId": 17,
    "topic": "Gynecological Infections - Vaginal Candidiasis",
    "difficulty": "EASY",
    "question": "During a gynecological assessment, a nurse observes erythema, edema, and a thick, curd-like vaginal discharge. Causative organism?",
    "options": [
      "Trichomonas vaginalis",
      "Candida albicans",
      "Neisseria gonorrhoeae",
      "Gardnerella vaginalis"
    ],
    "correctIndex": 1,
    "explanationEn": "Thick, white, curd-like (cottage cheese-like) vaginal discharge accompanied by vulvar pruritus, erythema, and edema is classical for Candida albicans vulvovaginitis.",
    "explanationBn": "দইয়ের মতো ঘন সাদা যোনিস্রাব এবং চুলকানি ও লালচে ফোলাভাব ক্যানডিডা অ্যালবিকানস (Candida albicans) ফাঙ্গাল ইনফেকশনের বৈশিষ্ট্য।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-5",
    "dayId": 17,
    "topic": "Vaginitis Clinical Management",
    "difficulty": "MEDIUM",
    "question": "In the management of pelvic infections such as vaginitis, which two interventions are typically combined?",
    "options": [
      "Antibiotic therapy and patient education on hygiene",
      "Surgical hysterectomy and strict bed rest",
      "High-dose radiation and fluid restriction",
      "Oral analgesics only and cessation of bathing"
    ],
    "correctIndex": 0,
    "explanationEn": "Effective vaginitis management combines appropriate antimicrobial/antifungal therapy with education regarding perineal hygiene and prevention of reinfection.",
    "explanationBn": "ভ্যাজাইনাইটিস নিয়ন্ত্রণে সঠিক অ্যান্টিবায়োটিক/অ্যান্টিফাঙ্গাল ওষুধের সাথে ব্যক্তিগত পরিচ্ছন্নতার স্বাস্থ্যশিক্ষা (Patient education on hygiene) দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-6",
    "dayId": 15,
    "topic": "Preconception Health Guidance",
    "difficulty": "EASY",
    "question": "Which lifestyle modification is recommended during preconception care?",
    "options": [
      "Increase caffeine intake to boost energy",
      "Avoidance of smoking",
      "Strict low-carbohydrate starvation diet",
      "Sedentary lifestyle with bed rest"
    ],
    "correctIndex": 1,
    "explanationEn": "Preconception avoidance of smoking prevents adverse reproductive outcomes including subfertility, miscarriage, intrauterine growth restriction (IUGR), and placental abruption.",
    "explanationBn": "গর্ভধারণের পূর্ববর্তী পরামর্শে (Preconception care) মা ও ভ্রূণের সুরক্ষায় ধূমপান সম্পূর্ণ বর্জন (Avoidance of smoking) করার নির্দেশ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-7",
    "dayId": 18,
    "topic": "Human Breast Milk Composition",
    "difficulty": "HARD",
    "question": "What is the typical amount of iron found in 100 ml of mature breast milk?",
    "options": [
      "0.03 to 0.07 milligrams iron per 100 ml",
      "1.0 to 1.5 milligrams iron per 100 ml",
      "5.0 milligrams iron per 100 ml",
      "10 milligrams iron per 100 ml"
    ],
    "correctIndex": 0,
    "explanationEn": "Mature human breast milk contains approximately 0.03 to 0.07 mg of iron per 100 mL, but it has extremely high bioavailability (up to 50% absorbed compared to ~10% in cow's milk).",
    "explanationBn": "পরিপক্ক মাতৃদুগ্ধে প্রতি ১০০ মিলিলিটারে প্রায় ০.০৩ থেকে ০.০৭ মিলিগ্রাম আয়রন থাকে, যা নবজাতকের শরীরে অত্যন্ত কার্যকরভাবে শোষিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-8",
    "dayId": 18,
    "topic": "Infant Feeding - Breastfeeding Latch",
    "difficulty": "EASY",
    "question": "Which of the following is a correct sign of a proper latch during breastfeeding?",
    "options": [
      "Baby's mouth grasps only the tip of the nipple",
      "Baby's mouth covers most of the areola",
      "Clicking and smacking sounds are loud",
      "Lower lip is curled inward"
    ],
    "correctIndex": 1,
    "explanationEn": "A proper latch features a wide open mouth, flanged lips, chin touching the breast, and the mouth covering most of the lower and upper areola.",
    "explanationBn": "সঠিক ল্যাচ (Proper latch)-এর মূল লক্ষণ হলো শিশুর মুখ স্তনের বোঁটা ছাড়িয়ে অ্যারিওলার (Areola) অধিকাংশ অংশ আবৃত করে রাখে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-9",
    "dayId": 17,
    "topic": "Gestational Diabetes Complications",
    "difficulty": "EASY",
    "question": "Which is a common complication associated with poorly managed gestational diabetes mellitus?",
    "options": [
      "Macrosomia",
      "Microcephaly",
      "Renal agenesis",
      "Severe neonatal hypercalcemia"
    ],
    "correctIndex": 0,
    "explanationEn": "Maternal hyperglycemia triggers fetal hyperinsulinemia, leading to excessive fetal fat and muscle deposition and fetal macrosomia (birth weight > 4000 g).",
    "explanationBn": "জেস্টেশনাল ডায়াবেটিস নিয়ন্ত্রণে না থাকলে ভ্রূণের অতিরিক্ত বৃদ্ধি ও স্থূলতা বা ম্যাক্রোসোমিয়া (Macrosomia) দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-10",
    "dayId": 17,
    "topic": "Assisted Reproductive Technology - IVF",
    "difficulty": "MEDIUM",
    "question": "Which step is performed first in the process of in vitro fertilization (IVF)?",
    "options": [
      "Embryo transfer into uterine cavity",
      "Controlled ovarian stimulation",
      "Intracytoplasmic sperm injection",
      "Progesterone luteal support"
    ],
    "correctIndex": 1,
    "explanationEn": "IVF protocol begins with controlled ovarian hyperstimulation using exogenous gonadotropins to recruit and mature multiple ovarian follicles before oocyte retrieval.",
    "explanationBn": "আইভিএফ (IVF) পদ্ধতির সর্বপ্রথম ধাপ হলো হরমোন ইনজেকশনের মাধ্যমে ডিম্বাশয়কে উদ্দীপিত করা বা কন্ট্রোলড ওভারিয়ান স্টিমুলেশন (Controlled ovarian stimulation)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-11",
    "dayId": 17,
    "topic": "Infertility Diagnostics - Tubal Patency",
    "difficulty": "MEDIUM",
    "question": "A 29-year-old woman presents with primary infertility and hysterosalpingography reveals bilateral tubal blockage. Next investigation to prioritize?",
    "options": [
      "Diagnostic laparoscopy with chromopertubation",
      "Serum prolactin monitoring",
      "Endometrial biopsy for dating",
      "Post-coital Huhner test"
    ],
    "correctIndex": 0,
    "explanationEn": "Diagnostic laparoscopy with chromopertubation is the gold standard investigation to confirm tubal patency and assess pelvic adhesions or endometriosis.",
    "explanationBn": "এইচএসজি (HSG)-তে ফেলোপিয়ান টিউব বন্ধ দেখা দিলে তা নিশ্চিত করতে ল্যাপারোস্কোপি ও ক্রোমোপ্রটিউবেশন (Chromopertubation) করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-12",
    "dayId": 17,
    "topic": "Asherman's Syndrome Infertility",
    "difficulty": "MEDIUM",
    "question": "What is the primary mechanism by which Asherman's syndrome causes infertility?",
    "options": [
      "Anovulatory follicular cysts",
      "Intrauterine adhesions preventing implantation",
      "Bilateral fallopian tube spasm",
      "Cervical mucus hostile antibodies"
    ],
    "correctIndex": 1,
    "explanationEn": "Asherman's syndrome involves intrauterine synechiae (fibrous scar tissue / adhesions) that obliterate the endometrial cavity, preventing embryo implantation.",
    "explanationBn": "অ্যাশারম্যান সিন্ড্রোমে জরায়ুর ভেতরে ক্ষত বা আঠালো পর্দা (Intrauterine adhesions) তৈরি হয়, যা ভ্রূণ প্রতিস্থাপন ব্যাহত করে বন্ধ্যাত্ব ঘটায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-13",
    "dayId": 17,
    "topic": "Endocrine Gynecology - PMS",
    "difficulty": "EASY",
    "question": "Which hormone fluctuation is primarily linked to premenstrual syndrome (PMS) symptoms?",
    "options": [
      "Growth hormone and insulin",
      "Estrogen and progesterone",
      "Thyroid hormones and cortisol",
      "Prolactin and oxytocin"
    ],
    "correctIndex": 1,
    "explanationEn": "Cyclical fluctuations of estrogen and progesterone during the luteal phase influence central neurotransmitters (such as serotonin), triggering PMS emotional and somatic symptoms.",
    "explanationBn": "মাসিকের আগে পিএমএস (PMS) লক্ষণগুলোর জন্য মূলত ইস্ট্রোজেন ও প্রোজেস্টেরন হরমোনের তারতম্য দায়ী।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-14",
    "dayId": 17,
    "topic": "Hyperemesis Gravidarum Neurological Complications",
    "difficulty": "HARD",
    "question": "A 30-year-old pregnant woman with hyperemesis gravidarum is at risk for Wernicke's encephalopathy. Which vitamin supplement is essential?",
    "options": [
      "Administer intravenous vitamin C",
      "Administer intravenous thiamine therapy",
      "Oral vitamin K supplement",
      "Intramuscular vitamin D3"
    ],
    "correctIndex": 1,
    "explanationEn": "Severe protracted vomiting in hyperemesis gravidarum depletes thiamine (vitamin B1), predisposing to life-threatening Wernicke's encephalopathy; parenteral thiamine must precede glucose infusions.",
    "explanationBn": "হাইপারইমেসিস গ্র্যাভিডোরামে অতিরিক্ত বমির ফলে থায়ামিন (ভিটামিন বি১)-এর ঘাটতি হয়ে ওয়ার্নিক এনসেফালোপ্যাথি হতে পারে, তাই থায়ামিন ইনজেকশন দেওয়া জরুরি।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-15",
    "dayId": 15,
    "topic": "Signs of Impending Labour",
    "difficulty": "EASY",
    "question": "During assessment, a midwife observes a blood-tinged mucus discharge ('show') in a pregnant woman. Significance?",
    "options": [
      "It indicates immediate uterine rupture",
      "It indicates softening and opening of the cervix",
      "It represents placenta previa bleeding",
      "It indicates intra-amniotic bacterial infection"
    ],
    "correctIndex": 1,
    "explanationEn": "The 'show' is the expulsion of the cervical mucus plug mixed with small amounts of blood from ruptured capillaries, indicating cervical effacement and dilatation.",
    "explanationBn": "'শো' (Show) বা রক্তমিশ্রিত শ্লেষ্মা নিঃসরণ প্রসবের প্রাথমিক লক্ষণ, যা জরায়ুমুখ নরম ও প্রসারিত হওয়া (Softening and opening of cervix) নির্দেশ করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-16",
    "dayId": 18,
    "topic": "Maternal-Infant Attachment",
    "difficulty": "EASY",
    "question": "Effective maternal-infant bonding in the immediate postnatal period primarily helps the mother achieve:",
    "options": [
      "Eliminating the need for medical checkups",
      "Recognizing and responding to baby's needs",
      "Sleeping for 12 hours uninterrupted",
      "Resuming heavy physical employment"
    ],
    "correctIndex": 1,
    "explanationEn": "Early maternal-infant attachment and skin-to-skin contact attune the mother to subtle infant cues, promoting responsive parenting and emotional security.",
    "explanationBn": "প্রসবের পরপরই মা ও শিশুর ঘনিষ্ঠ বন্ধন (Bonding) মায়ের মধ্যে শিশুর চাহিদা বুঝে দ্রুত সাড়া দেওয়ার দক্ষতা তৈরি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-17",
    "dayId": 15,
    "topic": "Dystocia - Abnormal Uterine Action",
    "difficulty": "MEDIUM",
    "question": "A woman in labor presents with uncoordinated, painful uterine contractions and no cervical progress. Which abnormal uterine action is responsible?",
    "options": [
      "Hypotonic uterine dysfunction",
      "Incoordinate uterine action",
      "Precipitate labor contractions",
      "Physiological retraction ring"
    ],
    "correctIndex": 1,
    "explanationEn": "Incoordinate uterine action (hypertonic labor) is characterized by unsynchronized contractions with elevated resting tone and severe pain, failing to cause progressive cervical dilatation.",
    "explanationBn": "ব্যথাদায়ক কিন্তু অকার্যকর ও অসংলগ্ন জরায়ু সংকোচনকে ইনকোঅর্ডিনেট ইউটেরাইন অ্যাকশন (Incoordinate uterine action) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-18",
    "dayId": 17,
    "topic": "Ovarian Reserve Evaluation",
    "difficulty": "MEDIUM",
    "question": "Which hormone is typically measured during infertility investigations to assess ovarian reserve?",
    "options": [
      "Follicle Stimulating Hormone (FSH)",
      "Adrenocorticotropic hormone (ACTH)",
      "Parathyroid hormone (PTH)",
      "Human chorionic gonadotropin (hCG)"
    ],
    "correctIndex": 0,
    "explanationEn": "Day-3 basal serum Follicle Stimulating Hormone (FSH) (along with Anti-Müllerian Hormone / AMH) is universally measured to assess follicular quantity and ovarian reserve.",
    "explanationBn": "ডিম্বাশয়ে ডিম্বাণুর মজুদ বা রিজার্ভ মূল্যায়নে রক্তে ফলিকল স্টিমুলেটিং হরমোন (FSH) ও AMH পরীক্ষা করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-19",
    "dayId": 17,
    "topic": "Postpartum Family Planning",
    "difficulty": "MEDIUM",
    "question": "Which family planning method is most appropriate during normal puerperium if a woman desires long-term, reversible contraception?",
    "options": [
      "Combined oral contraceptive pills",
      "Intrauterine contraceptive device (IUCD)",
      "Natural rhythm temperature tracking",
      "Emergency levonorgestrel pill"
    ],
    "correctIndex": 1,
    "explanationEn": "A postpartum IUCD (Cu-T 380A or LNG-IUS) inserted within 48 hours or at 6 weeks puerperium provides safe, long-term (up to 10 years), reversible contraception without affecting lactation.",
    "explanationBn": "প্রসবোত্তর সময়ে দীর্ঘমেয়াদী এবং স্তন্যপানে কোনো ব্যাঘাত না ঘটানো নির্ভরযোগ্য গর্ভনিরোধক পদ্ধতি হলো আইইউসিডি (IUCD বা কপার-টি)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-20",
    "dayId": 17,
    "topic": "Endocrine Changes in Oophorectomy",
    "difficulty": "EASY",
    "question": "Which hormone decreases most rapidly after surgical menopause?",
    "options": [
      "Prolactin",
      "Estrogen",
      "Luteinizing Hormone (LH)",
      "Thyroid stimulating hormone (TSH)"
    ],
    "correctIndex": 1,
    "explanationEn": "Surgical removal of functional ovaries results in an immediate and precipitous drop in circulating 17-beta estradiol (estrogen).",
    "explanationBn": "অস্ত্রোপচারের মাধ্যমে ডিম্বাশয় অপসারণের পর রক্তে ইস্ট্রোজেন (Estrogen) হরমোনের মাত্রা সবচেয়ে দ্রুত হ্রাস পায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-21",
    "dayId": 17,
    "topic": "Contraceptive Safety - Migraine with Aura",
    "difficulty": "HARD",
    "question": "Why is Depo Provera preferred over combined oral contraceptives for a patient with migraine with aura?",
    "options": [
      "It lacks estrogen, reducing stroke risk",
      "It contains high doses of synthetic estrogen",
      "It promotes rapid vasodilation of cerebral arteries",
      "It permanently treats migraine headaches"
    ],
    "correctIndex": 0,
    "explanationEn": "Combined hormonal contraceptives containing estrogen are contraindicated in migraine with aura due to markedly increased ischemic stroke risk; progestin-only Depo-Provera avoids estrogen-mediated thrombogenesis.",
    "explanationBn": "মাইগ্রেন উইথ অরা আক্রান্ত নারীদের ক্ষেত্রে ইস্ট্রোজেনযুক্ত পিল স্ট্রোকের ঝুঁকি বাড়ায়, তাই ইস্ট্রোজেনহীন প্রজেস্টিন ইনজেকশন ডেপো-প্রোভেরা (Depo Provera) নিরাপদ।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-22",
    "dayId": 17,
    "topic": "Obstetric Emergencies - Amniotic Fluid Embolism",
    "difficulty": "HARD",
    "question": "During active labor, a woman experiences sudden respiratory distress, hypotension, and cyanosis. Most likely diagnosis?",
    "options": [
      "Suspect amniotic fluid embolism",
      "Preeclampsia seizure",
      "Placental abruption hemorrhage",
      "Supine hypotensive vena cava syndrome"
    ],
    "correctIndex": 0,
    "explanationEn": "Sudden cardiovascular collapse, acute respiratory distress, severe hypoxemia, and cyanosis during labor are hallmark signs of catastrophic Amniotic Fluid Embolism (AFE).",
    "explanationBn": "প্রসব চলাকালীন হঠাৎ তীব্র শ্বাসকষ্ট, সায়ানোসিস ও রক্তচাপ শূন্যে নেমে যাওয়ার লক্ষণ অ্যামনিওটিক ফ্লুইড এমবোলিজম (Amniotic fluid embolism) নির্দেশ করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-23",
    "dayId": 17,
    "topic": "Recurrent Miscarriages - Müllerian Anomalies",
    "difficulty": "MEDIUM",
    "question": "A patient with recurrent second-trimester miscarriages has an MRI showing a heart-shaped uterine cavity with two distinct horns. Diagnosis?",
    "options": [
      "Asherman's syndrome",
      "Bicornuate uterus",
      "Endometriosis",
      "Imperforate hymen"
    ],
    "correctIndex": 1,
    "explanationEn": "A bicornuate uterus features an external fundal indentation and two symmetrical uterine horns, commonly associated with cervical insufficiency and second-trimester pregnancy loss.",
    "explanationBn": "হার্ট-আকৃতির জরায়ু এবং দুটি পৃথক শিং বা হর্ন থাকা বাইকর্নুয়েট জরায়ু (Bicornuate uterus)-র স্পষ্ট লক্ষণ, যা বারবার গর্ভপাতের কারণ হতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-24",
    "dayId": 15,
    "topic": "Lochia Stages - Lochia Serosa",
    "difficulty": "EASY",
    "question": "What is the expected color and composition of lochia serosa?",
    "options": [
      "Bright red blood with large tissue clots",
      "Pinkish or brownish discharge containing serous fluid and leukocytes",
      "Yellowish-white odorless mucus",
      "Clear amniotic fluid with meconium"
    ],
    "correctIndex": 1,
    "explanationEn": "Lochia serosa occurs on days 4 to 10 postpartum, appearing pink or brown-pink and containing serous exudate, red blood cells, leukocytes, and cervical mucus.",
    "explanationBn": "প্রসবের ৪ থেকে ১০ দিনে নির্গত লোকিয়া সেরোসা (Lochia serosa) গোলাপি বা বাদামী বর্ণের হয় এবং এতে সিরাস ফ্লুইড ও শ্বেতকণিকা থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-25",
    "dayId": 15,
    "topic": "Puerperal Healing - Lochia Progression",
    "difficulty": "MEDIUM",
    "question": "A woman's lochia transitions from rubra to alba on the twelfth postpartum day. What does this indicate?",
    "options": [
      "Endometrial infection has developed",
      "The healing of the endometrial lining is progressing normally",
      "Secondary postpartum hemorrhage is impending",
      "Uterine subinvolution requires dilation and curettage"
    ],
    "correctIndex": 1,
    "explanationEn": "Normal lochial transition (Rubra: days 1-3, Serosa: days 4-10, Alba: days 10-21+) confirms progressive placental site re-epithelialization and physiological involution.",
    "explanationBn": "প্রসবের ১২তম দিনে লোকিয়া অ্যালবা (সাদাটে-হলুদ স্রাব)-তে রূপান্তর নির্দেশ করে যে জরায়ুর ভেতরের ক্ষত নিরাময় স্বাভাবিকভাবে এগিয়ে চলেছে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-26",
    "dayId": 15,
    "topic": "Malposition & Prolonged Labor",
    "difficulty": "MEDIUM",
    "question": "Which fetal position is most commonly associated with prolonged labor due to malposition?",
    "options": [
      "Left occipito-anterior position",
      "Occipito-posterior position",
      "Right occipito-anterior position",
      "Direct occipito-transverse position"
    ],
    "correctIndex": 1,
    "explanationEn": "Occipito-posterior (OP) position causes persistent severe backache ('back labor'), longer first and second stages, and failure of spontaneous internal rotation.",
    "explanationBn": "অক্সিপিটাল বোন পেছনের দিকে থাকা বা অক্সিপিটোপোস্টেরিয়র (Occipito-posterior) পজিশনের কারণে প্রসব বেদনা দীর্ঘায়িত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-27",
    "dayId": 15,
    "topic": "Antenatal Minor Ailments - Pyrosis",
    "difficulty": "EASY",
    "question": "A pregnant woman complains of heartburn during her third trimester. Most appropriate management strategy?",
    "options": [
      "Lying flat immediately after consuming heavy meals",
      "Consuming small frequent meals and avoiding spicy foods",
      "Drinking large amounts of citrus juice before bed",
      "Taking high-dose systemic antispasmodics"
    ],
    "correctIndex": 1,
    "explanationEn": "Third-trimester heartburn (pyrosis) is alleviated by eating small, frequent meals, remaining upright for 2 hours postprandially, and avoiding fatty, acidic, or spicy triggers.",
    "explanationBn": "গর্ভকালীন বুকজ্বালা বা এসিডিটি কমাতে রোগীকে একসাথে বেশি না খেয়ে অল্প অল্প করে ঘন ঘন খাবার খাওয়া এবং মসলাযুক্ত খাবার বর্জন করার পরামর্শ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-28",
    "dayId": 15,
    "topic": "Female Reproductive Anatomy - Vulva",
    "difficulty": "EASY",
    "question": "Localized pain and swelling at the opening of the genital tract, including the clitoris and vestibule, affects which anatomical region?",
    "options": [
      "Cervix",
      "Vulva",
      "Uterus",
      "Fallopian tube"
    ],
    "correctIndex": 1,
    "explanationEn": "The vulva (pudendum) comprises external female genital structures: mons pubis, labia majora, labia minora, clitoris, vestibule, and bulb of vestibule.",
    "explanationBn": "ক্লিটোরিস, ভেস্টিবিউল এবং বহিরাঙ্গনের সংবেদনশীল অংশগুলোকে সামগ্রিকভাবে ভালভা (Vulva) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-29",
    "dayId": 17,
    "topic": "Polyhydramnios Emergencies",
    "difficulty": "MEDIUM",
    "question": "A pregnant woman diagnosed with hydramnios presents with sudden severe abdominal pain and difficulty breathing. Immediate nursing action?",
    "options": [
      "Place patient in Trendelenburg position and restrict oxygen",
      "Provide rest position to left side and provide oxygen",
      "Administer high-dose oxytocin drip immediately",
      "Encourage vigorous ambulation in hallway"
    ],
    "correctIndex": 1,
    "explanationEn": "Severe hydramnios causes diaphragmatic splinting and inferior vena cava compression. Positioning on the left lateral side relieves aortocaval compression while oxygen supports fetal-maternal oxygenation.",
    "explanationBn": "হাইড্রোঅ্যামনিওসের ক্ষেত্রে পেটে তীব্র চাপ ও শ্বাসকষ্ট দেখা দিলে রোগীকে দ্রুত বাম কাত করে (Left lateral) শোয়াতে হবে এবং অক্সিজেন সরবরাহ করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-30",
    "dayId": 17,
    "topic": "Infertility Treatments - Artificial Insemination",
    "difficulty": "EASY",
    "question": "In gynecological nursing, why might artificial insemination be recommended as a fertility treatment?",
    "options": [
      "When male infertility factors prevent natural conception",
      "When the mother has advanced heart failure",
      "To replace all forms of prenatal diagnostic testing",
      "When bilateral fallopian tubes are completely blocked"
    ],
    "correctIndex": 0,
    "explanationEn": "Artificial insemination (e.g., intrauterine insemination / IUI) directly deposits concentrated, washed motile sperm into the uterine cavity, bypassing male factors such as oligospermia or asthenospermia.",
    "explanationBn": "পুরুষের বীর্যে শুক্রাণুর সংখ্যা বা গুণমান কম থাকলে গর্ভধারণের জন্য কৃত্রিম শুক্রাণু প্রতিস্থাপন (Artificial insemination/IUI) কার্যকর চিকিৎসা।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-31",
    "dayId": 17,
    "topic": "Obstetric Fistula Management",
    "difficulty": "MEDIUM",
    "question": "In pelvic infections affecting the vagina, which management strategy is most appropriate when both infection and fistula are present?",
    "options": [
      "Immediate reconstructive surgery without medications",
      "Antibiotic therapy followed by surgical repair",
      "Cauterization of tissue without sterile irrigation",
      "Peritoneal dialysis without antibiotics"
    ],
    "correctIndex": 1,
    "explanationEn": "Surgical repair of vesicovaginal or rectovaginal fistulas must be delayed until active localized infection, edema, and inflammation are completely eradicated with targeted antibiotics.",
    "explanationBn": "ফিস্টুলা ও সংক্রমণ একসাথে থাকলে আগে অ্যান্টিবায়োটিক দিয়ে ইনফেকশন নিরাময় করতে হবে, তারপর সার্জারির (Antibiotic therapy followed by surgical repair) মাধ্যমে ফিস্টুলা মেরামত করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-32",
    "dayId": 17,
    "topic": "Multiple Gestation Placentation",
    "difficulty": "MEDIUM",
    "question": "A patient is diagnosed with monozygotic monoamniotic twins. Most accurate explanation?",
    "options": [
      "Twins that develop from two eggs with two separate placentas",
      "Twins that develop from a single fertilized egg, share both placenta and amniotic sac",
      "Twins of different genders sharing a placenta",
      "Twins developing in separate horns of a bicornuate uterus"
    ],
    "correctIndex": 1,
    "explanationEn": "Monozygotic monoamniotic (MoMo) twins arise from a single blastocyst dividing late (days 8-12), resulting in sharing of a single placenta and a single amniotic cavity.",
    "explanationBn": "মনোজাইগোটিক মনোঅ্যামনিওটিক যমজ শিশু একটিমাত্র নিষিক্ত ডিম্বাণু থেকে সৃষ্টি হয় এবং তারা একই প্লাসেন্টা ও অ্যামনিওটিক থলি ভাগাভাগি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-33",
    "dayId": 17,
    "topic": "Postpartum Hemorrhage Management",
    "difficulty": "HARD",
    "question": "A 34-year-old multiparous woman develops severe PPH unresponsive to uterine massage and oxytocin, with a soft, boggy uterus. Next best step?",
    "options": [
      "Administer uterotonic agents",
      "Perform immediate emergency hysterectomy without medication",
      "Place ice packs on abdomen and observe for 2 hours",
      "Discontinue all intravenous fluids"
    ],
    "correctIndex": 0,
    "explanationEn": "If primary postpartum hemorrhage due to uterine atony fails to respond to bimanual fundal massage and oxytocin, second-line uterotonics (e.g., Methylergonovine, Carboprost PGF2a, or Misoprostol) are immediately indicated.",
    "explanationBn": "জরায়ু ম্যাসাজ ও অক্সিটোসিন দেওয়ার পরেও রক্তক্ষরণ না থামলে পরবর্তী পদক্ষেপ হিসেবে অতিরিক্ত ইউটেরোটনিক ওষুধ (Administer uterotonic agents) প্রয়োগ করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-34",
    "dayId": 15,
    "topic": "True vs False Labour Characteristics",
    "difficulty": "EASY",
    "question": "Which of the following is NOT a sign of true labour?",
    "options": [
      "Contractions that increase in frequency and intensity",
      "Progressive effacement and dilatation of the cervix",
      "Pain radiating from back to lower abdomen",
      "Irregular contractions that subside with rest"
    ],
    "correctIndex": 3,
    "explanationEn": "Irregular, painless or mildly uncomfortable contractions that decrease or subside with ambulation, hydration, and rest represent false labor (Braxton Hicks contractions).",
    "explanationBn": "বিশ্রাম নিলে যে ব্যথা কমে যায় এবং যা অনিয়মিত (Irregular contractions that subside with rest), তা আসল প্রসব বেদনার লক্ষণ নয় (False labour)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-35",
    "dayId": 15,
    "topic": "Menstrual Cycle Endocrinology",
    "difficulty": "EASY",
    "question": "During the menstrual cycle, what typically occurs when estrogen and progesterone levels drop at the end of the cycle?",
    "options": [
      "Ovulation is immediately triggered",
      "Menstruation starts",
      "Prolactin peaks and induces milk ejection",
      "Fertilization and implantation occur"
    ],
    "correctIndex": 1,
    "explanationEn": "Withdrawal of estrogen and progesterone due to corpus luteum involution causes endometrial vasospasm, tissue ischemia, and sloughing, initiating menses.",
    "explanationBn": "মাসিক চক্রের শেষে ইস্ট্রোজেন ও প্রোজেস্টেরন হরমোনের মাত্রা হঠাৎ কমে গেলে জরায়ুর এন্ডোমেট্রিয়াম ভেঙে রক্তক্ষরণ বা ঋতুস্রাব (Menstruation) শুরু হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-36",
    "dayId": 15,
    "topic": "Intrapartum Monitoring - Partograph",
    "difficulty": "EASY",
    "question": "In a partograph, number of uterine contractions and duration of each contraction is charted every:",
    "options": [
      "15 minutes",
      "30 minutes",
      "1 hour",
      "2 hours"
    ],
    "correctIndex": 1,
    "explanationEn": "According to WHO partograph protocols, maternal contractions (frequency per 10 minutes and duration in seconds) and fetal heart rate are plotted every 30 minutes.",
    "explanationBn": "পার্টোগ্রাফে (Partograph) জরায়ুর সংকোচনের সংখ্যা ও স্থায়িত্ব প্রতি ৩০ মিনিট (30 minutes) পর পর লিপিবদ্ধ করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-37",
    "dayId": 15,
    "topic": "Endocrinology of Cervical Dilatation",
    "difficulty": "MEDIUM",
    "question": "Which hormone is responsible for dilatation of the cervix in the first stage of labour?",
    "options": [
      "Progesterone",
      "Estrogen",
      "Oxytocin alone without prostaglandins",
      "Luteinizing Hormone"
    ],
    "correctIndex": 1,
    "explanationEn": "During labor initiation, estrogen increases gap junctions, upregulates oxytocin receptors, and stimulates local prostaglandin synthesis, orchestrating cervical softening and dilatation.",
    "explanationBn": "প্রসবের প্রথম ধাপে জরায়ুমুখ নরম ও প্রসারিত করার পেছনে ইস্ট্রোজেন (Estrogen) হরমোন বিশেষ ভূমিকা পালন করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-38",
    "dayId": 17,
    "topic": "Antepartum Hemorrhage - Placenta Previa",
    "difficulty": "HARD",
    "question": "What is the indication of definitive management for placenta previa?",
    "options": [
      "Bleeding occurs at or after 37 weeks of pregnancy",
      "Mild brown spotting at 20 weeks",
      "Intact fetal membranes at 28 weeks",
      "Absence of contractions at 32 weeks"
    ],
    "correctIndex": 0,
    "explanationEn": "Expectant conservative management (MacAfee regimen) is discontinued and definitive delivery (usually cesarean) is indicated once pregnancy reaches term (≥37 weeks) or if severe maternal hemorrhage occurs.",
    "explanationBn": "প্লাসেন্টা প্রিভিয়াতে গর্ভাবস্থা ৩৭ সপ্তাহ বা তার বেশি সময়ে (≥37 weeks) পৌঁছালে বা অতিরিক্ত রক্তক্ষরণ হলে চূড়ান্ত চিকিৎসা বা ডেলিভারি করানো আবশ্যক।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-39",
    "dayId": 15,
    "topic": "Placental Physiology - Gas Exchange",
    "difficulty": "EASY",
    "question": "The foeto-maternal exchange of gases and nutrients occurs in the:",
    "options": [
      "Placenta",
      "Amniotic fluid",
      "Decidua basalis alone",
      "Yolk sac"
    ],
    "correctIndex": 0,
    "explanationEn": "The placenta facilitates maternal-fetal gas exchange, nutrient delivery, and metabolic waste excretion via the intervillous space and chorionic villi.",
    "explanationBn": "মা এবং ভ্রূণের মধ্যে অক্সিজেন, পুষ্টি এবং বর্জ্য পদার্থের আদান-প্রদান প্লাসেন্টা বা অমরার (Placenta) মাধ্যমে সম্পন্ন হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-40",
    "dayId": 15,
    "topic": "Puerperium Physiology - Involution",
    "difficulty": "EASY",
    "question": "The process whereby the genital organs revert back approximately to the state they were before pregnancy after delivery is called:",
    "options": [
      "Subinvolution",
      "Involution",
      "Evolution",
      "Regeneration"
    ],
    "correctIndex": 1,
    "explanationEn": "Involution is the physiological anatomical and functional regression of reproductive organs (particularly the uterus) back to their non-pregnant dimensions during the 6 weeks postpartum.",
    "explanationBn": "প্রসবের পর জননাঙ্গ ও জরায়ু পূর্বাবস্থায় ফিরে আসার স্বাভাবিক শারীরবৃত্তীয় প্রক্রিয়াকে ইনভোলিউশন (Involution) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-41",
    "dayId": 15,
    "topic": "Puerperal Urinary Bladder Changes",
    "difficulty": "MEDIUM",
    "question": "Which of the following is a NORMAL finding during puerperium?",
    "options": [
      "Persistent anuria",
      "Mild transient urinary retention",
      "Copious gross hematuria",
      "Severe continuous dysuria"
    ],
    "correctIndex": 1,
    "explanationEn": "Due to pelvic tissue edema, birth trauma to bladder base, and decreased bladder tone, mild transient urinary retention is common and normal during early puerperium.",
    "explanationBn": "প্রসবের পরপরই পেরিইউরেথ্রাল ফোলাভাবের কারণে সাময়িক প্রস্রাব আটকে থাকা (Mild transient urinary retention) একটি স্বাভাবিক ঘটনা।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-42",
    "dayId": 17,
    "topic": "Obstetric Complications - PROM",
    "difficulty": "EASY",
    "question": "The condition when the membranes are ruptured before onset of labour is called:",
    "options": [
      "Premature rupture",
      "Artificial rupture of membranes",
      "Prolonged labour",
      "Precipitate labour"
    ],
    "correctIndex": 0,
    "explanationEn": "Premature Rupture of Membranes (PROM) is defined as spontaneous rupture of fetal membranes prior to the onset of regular uterine contractions.",
    "explanationBn": "প্রসব বেদনা ওঠার আগেই জরায়ুর অ্যামনিওটিক ঝিল্লি ফেটে পানি বের হয়ে যাওয়াকে প্রিম্যাচিউর রাপচার (Premature rupture of membranes) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-43",
    "dayId": 17,
    "topic": "Reproductive Genetics - PGT",
    "difficulty": "MEDIUM",
    "question": "Which reproductive option allows for genetic testing of embryos before implantation?",
    "options": [
      "Amniocentesis at 16 weeks",
      "In Vitro fertilization with PGT",
      "Chorionic villus sampling at 11 weeks",
      "Maternal serum quad screen"
    ],
    "correctIndex": 1,
    "explanationEn": "Preimplantation Genetic Testing (PGT) analyzes embryonic blastomere or trophectoderm cells generated via IVF before transfer into the maternal uterus.",
    "explanationBn": "জরায়ুতে প্রতিস্থাপনের পূর্বেই ভ্রূণের জিনগত ত্রুটি পরীক্ষা করার পদ্ধতি হলো IVF উইথ PGT (Preimplantation Genetic Testing)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-44",
    "dayId": 15,
    "topic": "Maternal Nutrition - Folic Acid",
    "difficulty": "EASY",
    "question": "The recommended dietary allowance for folic acid during pregnancy is:",
    "options": [
      "100 mcg",
      "200 mcg",
      "400 mcg",
      "1000 mcg"
    ],
    "correctIndex": 2,
    "explanationEn": "Standard preconception and routine pregnancy guidelines recommend 400 mcg (0.4 mg) of folic acid daily to prevent neural tube defects.",
    "explanationBn": "স্বাভাবিক গর্ভাবস্থায় ভ্রূণের নিউরাল টিউব ত্রুটি রোধে দৈনিক ৪০০ মাইক্রোগ্রাম (400 mcg) ফলিক অ্যাসিড গ্রহণ করার সুপারিশ করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-45",
    "dayId": 15,
    "topic": "Myometrial Physiology - Gap Junctions",
    "difficulty": "MEDIUM",
    "question": "Increased gap junctions in the myometrium contribute to:",
    "options": [
      "Complete relaxation of the uterine musculature",
      "Synchronized and coordinated uterine contractions",
      "Arterial thrombosis and uterine infarction",
      "Inhibition of oxytocin receptor density"
    ],
    "correctIndex": 1,
    "explanationEn": "Myometrial gap junctions (connexin-43) form low-resistance electrical channels between smooth muscle cells, enabling rapid depolarization spread and synchronized, forceful contractions.",
    "explanationBn": "জরায়ুর পেশিতে গ্যাপ জংশন বৃদ্ধি পেলে সংকোচনগুলো সুসমন্বিত ও সুসংগত (Synchronized and coordinated uterine contractions) হয়ে ওঠে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-46",
    "dayId": 17,
    "topic": "Maternal Hyperglycemia - Fetal Consequences",
    "difficulty": "EASY",
    "question": "If a mother has gestational diabetes, there is a risk of development of fetal:",
    "options": [
      "Microcephaly",
      "Macrosomia",
      "Renal hypoplasia",
      "Hypopituitarism"
    ],
    "correctIndex": 1,
    "explanationEn": "Maternal hyperglycemia allows glucose to freely cross the placenta, inducing fetal beta-cell hypertrophy and insulin release, causing fetal overgrowth (macrosomia).",
    "explanationBn": "মায়ের রক্তে সুগার বেশি থাকলে ভ্রূণের শরীরে ইনসুলিন বেড়ে যায় এবং শিশুর অতিরিক্ত বৃদ্ধি বা ম্যাক্রোসোমিয়া (Macrosomia) ঘটে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-47",
    "dayId": 15,
    "topic": "Pelvic Anatomy - Fourchette",
    "difficulty": "EASY",
    "question": "Lower portion of the labia minora fuses across the midline to form a fold of skin called:",
    "options": [
      "Mons pubis",
      "Clitoris",
      "Fourchette",
      "Prepuce"
    ],
    "correctIndex": 2,
    "explanationEn": "The posterior merging or fold of the labia minora across the midline at the posterior margin of the vulval vestibule is the frenulum of labia minora or fourchette.",
    "explanationBn": "ল্যাবিয়া মাইনোরার নিচের প্রান্তদ্বয় পেছনে মিলিত হয়ে ত্বকের যে পাতলা ভাঁজ গঠন করে তাকে ফোরশেট (Fourchette) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-48",
    "dayId": 15,
    "topic": "Placental Transport - Immunoglobulins",
    "difficulty": "EASY",
    "question": "Which component is transferred from mother to fetus through the placenta?",
    "options": [
      "Immunoglobulin M (IgM)",
      "Immunoglobulin G (IgG)",
      "Immunoglobulin A (IgA)",
      "Immunoglobulin E (IgE)"
    ],
    "correctIndex": 1,
    "explanationEn": "IgG is the only class of immunoglobulin capable of crossing the placental syncytiotrophoblast into fetal circulation via specialized Fc receptors, providing passive immunity.",
    "explanationBn": "মায়ের শরীর থেকে অমরা বা প্লাসেন্টা ভেদ করে শুধুমাত্র ইমিউনোগ্লোবুলিন জি (IgG) অ্যান্টিবডি ভ্রূণের শরীরে প্রবেশ করতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-49",
    "dayId": 15,
    "topic": "Antenatal Vitamins - Neural Tube Defect Prevention",
    "difficulty": "EASY",
    "question": "Which vitamin supplement is most important for pregnant women to prevent Neural Tube Defects in the fetus?",
    "options": [
      "Vitamin C",
      "Vitamin B9 (Folic Acid)",
      "Vitamin D",
      "Vitamin K"
    ],
    "correctIndex": 1,
    "explanationEn": "Vitamin B9 (folic acid) supplementation initiated periconceptionally prevents up to 70% of neural tube defects (such as anencephaly and spina bifida).",
    "explanationBn": "ভ্রূণের নিউরাল টিউব ত্রুটি (NTD) প্রতিরোধ করার জন্য সবচেয়ে গুরুত্বপূর্ণ ভিটামিন হলো ভিটামিন বি৯ বা ফলিক অ্যাসিড (Folic Acid)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-50",
    "dayId": 17,
    "topic": "Intrauterine Fetal Demise Management",
    "difficulty": "MEDIUM",
    "question": "Which first-line medication is commonly used during labour induction for intrauterine foetal death?",
    "options": [
      "Oral broad-spectrum tetracycline",
      "Misoprostol and prostaglandin",
      "High-dose magnesium sulfate drip",
      "Intravenous bolus heparin"
    ],
    "correctIndex": 1,
    "explanationEn": "Prostaglandin analogues such as Misoprostol (PGE1) are the first-line pharmacotherapeutic agents for cervical ripening and uterine evacuation in intrauterine fetal demise.",
    "explanationBn": "গর্ভস্থ মৃত সন্তান (IUFD) প্রসব করানোর জন্য জরায়ুমুখ নরম ও সংকোচন সৃষ্টি করতে মিসোপ্রোস্টল ও প্রোস্টাগ্ল্যান্ডিন (Misoprostol and prostaglandin) ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-51",
    "dayId": 17,
    "topic": "Rh Isoimmunization Sensitization Timeline",
    "difficulty": "MEDIUM",
    "question": "In Rh hemolytic disease, when does maternal sensitization typically occur?",
    "options": [
      "During the first trimester organogenesis",
      "During delivery of the first Rh-positive infant",
      "Prior to first conception in childhood",
      "Only during the third pregnancy"
    ],
    "correctIndex": 1,
    "explanationEn": "Fetomaternal microtransfusion occurs primarily during placental separation and delivery of the first Rh-positive child to an Rh-negative mother, triggering primary sensitization.",
    "explanationBn": "প্রথম আরএইচ-পজিটিভ শিশুর প্রসবের সময় (Delivery of the first Rh-positive infant) রক্তক্ষরণের ফলে আরএইচ-নেগেটিভ মায়ের দেহে অ্যান্টিবডি তৈরি হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-52",
    "dayId": 18,
    "topic": "Neonatal Immunity Transfer",
    "difficulty": "EASY",
    "question": "Which immunoglobulin crosses the placenta and protects the newborn naturally against bacteria?",
    "options": [
      "IgG",
      "IgM",
      "IgE",
      "IgD"
    ],
    "correctIndex": 0,
    "explanationEn": "Maternal IgG antibodies passively cross the placental barrier during the third trimester, conferring protective humoral immunity to the neonate during the first months of life.",
    "explanationBn": "IgG অ্যান্টিবডি প্লাসেন্টা অতিক্রম করে নবজাতককে জীবনের প্রথম কয়েকমাস ব্যাক্টেরিয়ার বিরুদ্ধে প্রাকৃতিক সুরক্ষা প্রদান করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-53",
    "dayId": 15,
    "topic": "Amniotic Fluid Compartments",
    "difficulty": "MEDIUM",
    "question": "In a woman in labour pain, 'fore-waters' refers to:",
    "options": [
      "Fluid trapped between the presenting part and membranes",
      "The bulk of amniotic fluid above the fetus",
      "Maternal urinary bladder contents",
      "Uterine cervical mucus discharge"
    ],
    "correctIndex": 0,
    "explanationEn": "The 'fore-waters' is the small collection of amniotic fluid located below the presenting fetal part and bounded by the intact bulging amniotic membranes at the cervix.",
    "explanationBn": "প্রসবের সময় জরায়ুমুখে শিশুর মাথার সামনে যে তরল অ্যামনিওটিক থলির মধ্যে জমা থাকে তাকে 'ফোর-ওয়াটারস' (Fore-waters) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-54",
    "dayId": 17,
    "topic": "Hypertensive Disorders of Pregnancy",
    "difficulty": "MEDIUM",
    "question": "Which fetal/neonatal complication is associated with hypertensive disorder during pregnancy?",
    "options": [
      "Intrauterine growth restriction (IUGR)",
      "Macrosomia",
      "Hyperinsulinism",
      "Congenital polycystic kidneys"
    ],
    "correctIndex": 0,
    "explanationEn": "Preeclampsia and gestational hypertension induce spiral artery vasospasm and chronic placental hypoperfusion, restricting fetal nutrient delivery and causing IUGR.",
    "explanationBn": "গর্ভকালীন উচ্চ রক্তচাপের কারণে জরায়ুতে রক্ত চলাচল কমে যায়, ফলে ভ্রূণের ওজন ও বৃদ্ধি মারাত্মকভাবে ব্যাহত হয় (IUGR)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-55",
    "dayId": 17,
    "topic": "Retained Dead Fetus Complications",
    "difficulty": "HARD",
    "question": "A major complication associated with prolonged retention of a dead foetus (>4 weeks) is:",
    "options": [
      "Disseminated intravascular coagulation (DIC)",
      "Hypercalcemic crisis",
      "Renal oncocytoma",
      "Aplastic anemia"
    ],
    "correctIndex": 0,
    "explanationEn": "Retention of a dead fetus beyond 4 weeks causes autolysis and leaching of placental tissue thromboplastin into maternal circulation, inducing consumptive coagulopathy (DIC).",
    "explanationBn": "গর্ভে ৪ সপ্তাহের বেশি সময় ধরে মৃত সন্তান থাকলে সেখান থেকে থ্রম্বোপ্লাস্টিন মায়ের রক্তে মিশে মারাত্মক রক্ত জমাট বাঁধার রোগ বা DIC সৃষ্টি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-56",
    "dayId": 15,
    "topic": "Breech Delivery Maneuvers",
    "difficulty": "HARD",
    "question": "In which method of delivery for the aftercoming head is the baby allowed to hang by its own weight?",
    "options": [
      "Mauriceau-Smellie-Veit maneuver",
      "Burns-Marshall method",
      "Lovset maneuver",
      "Pinard maneuver"
    ],
    "correctIndex": 1,
    "explanationEn": "In the Burns-Marshall technique, the delivered fetal trunk and extremities are allowed to hang supported only by their own weight until the subocciput impinges under the pubic arch.",
    "explanationBn": "ব্রিচ ডেলিভারিতে শিশুর মাথা বের করার সময় যে পদ্ধতিতে বাচ্চাকে নিজের ওজনে নিচে ঝুলতে দেওয়া হয় তাকে বার্নস-মার্শাল পদ্ধতি (Burns-Marshall method) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-57",
    "dayId": 15,
    "topic": "Malpresentation - Frank Breech",
    "difficulty": "MEDIUM",
    "question": "In which breech presentation does the presenting part consist of the two buttocks and external genitalia only?",
    "options": [
      "Complete breech presentation",
      "Frank breech presentation",
      "Footling breech presentation",
      "Kneeling breech presentation"
    ],
    "correctIndex": 1,
    "explanationEn": "In frank breech (extended breech), the thighs are flexed on the abdomen and knees extended along the chest, so only the buttocks and perineum present at the pelvic inlet.",
    "explanationBn": "ফ্রাঙ্ক ব্রিচ প্রেজেন্টেশনে (Frank breech) শিশুর পা দুটি সোজা বুকের দিকে থাকে এবং শুধু নিতম্ব ও বহিরাঙ্গ (Buttocks and external genitalia) নিচে অবস্থান করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-58",
    "dayId": 17,
    "topic": "Intrauterine Demise Clinical Signs",
    "difficulty": "EASY",
    "question": "What is a sign of fetal death in the womb?",
    "options": [
      "Active fetal movements",
      "No heartbeat",
      "Fundal height exceeding dates",
      "Audible uterine souffle on Doppler"
    ],
    "correctIndex": 1,
    "explanationEn": "The definitive diagnostic clinical and ultrasound confirmation of intrauterine fetal demise (IUFD) is the complete absence of fetal cardiac activity.",
    "explanationBn": "গর্ভে ভ্রূণের মৃত্যুর নিশ্চিত লক্ষণ হলো ডপলার বা আল্ট্রাসাউন্ডে হৃদস্পন্দন না থাকা (No heartbeat)।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-59",
    "dayId": 17,
    "topic": "Placenta Previa Nursing Safety",
    "difficulty": "HARD",
    "question": "In case of suspected placenta previa, vaginal examination is advisable:",
    "options": [
      "Immediately on admission with two fingers",
      "After ruling out previa by ultrasound",
      "During active vaginal bleeding to assess dilation",
      "Under local anesthesia in the triage cubicle"
    ],
    "correctIndex": 1,
    "explanationEn": "Digital vaginal examination in placenta previa is strictly contraindicated because inserting fingers into the cervix can provoke massive fatal hemorrhage; ultrasound must rule it out first.",
    "explanationBn": "প্লাসেন্টা প্রিভিয়ার সন্দেহ থাকলে আল্ট্রাসাউন্ডের মাধ্যমে তা নিশ্চিত না হওয়া পর্যন্ত যোনিপথে আঙুল দিয়ে পরীক্ষা (PV examination) করা সম্পূর্ণ নিষিদ্ধ।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-60",
    "dayId": 15,
    "topic": "High-Risk Pregnancy - Folic Acid Dosage",
    "difficulty": "MEDIUM",
    "question": "If a mother previously delivered a child with a neural tube defect, how much folic acid should she take per day to prevent NTD in the second child?",
    "options": [
      "400 mcg per day",
      "1 mg per day",
      "4 mg per day",
      "10 mg per day"
    ],
    "correctIndex": 2,
    "explanationEn": "For women with a prior history of a child affected by a neural tube defect, the recommended prophylactic folic acid dosage is 4 mg (or 5 mg) daily starting before conception.",
    "explanationBn": "পূর্বে নিউরাল টিউব ত্রুটিযুক্ত সন্তান জন্ম দেওয়া মায়ের ক্ষেত্রে পরবর্তী গর্ভধারণে উচ্চ মাত্রায় অর্থাৎ দৈনিক ৪ মিলিগ্রাম (4 mg per day) ফলিক অ্যাসিড প্রয়োজন।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-61",
    "dayId": 17,
    "topic": "Placenta Previa Complications",
    "difficulty": "MEDIUM",
    "question": "In a placenta previa condition, the maternal complication seen during labor is:",
    "options": [
      "Precipitate delivery",
      "Malpresentation",
      "Oligohydramnios",
      "Shoulder dystocia"
    ],
    "correctIndex": 1,
    "explanationEn": "Because the low-lying placenta occupies the lower uterine segment, the fetal head cannot engage normally, predisposing to fetal malpresentations (transverse, breech, oblique lie).",
    "explanationBn": "প্লাসেন্টা প্রিভিয়া থাকলে জরায়ুর নিচের অংশ ফুল দখল করে রাখে, যার ফলে ভ্রূণের মাথা নিচে নামতে না পেরে ম্যালপ্রেজেন্টেশন (Malpresentation) ঘটে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-62",
    "dayId": 15,
    "topic": "Partograph Plotting - Maternal Pulse",
    "difficulty": "EASY",
    "question": "In a partograph, pulse is recorded every 30 minutes and is marked with a:",
    "options": [
      "Cross (X)",
      "Dot",
      "Triangle",
      "Circle (O)"
    ],
    "correctIndex": 1,
    "explanationEn": "On the standard WHO/MOHFW partograph, maternal pulse is plotted every 30 minutes and marked as a solid dot (•). Blood pressure is plotted with arrows (↕).",
    "explanationBn": "পার্টোগ্রাফে প্রসূতি মায়ের নাড়ির স্পন্দন (Pulse) প্রতি ৩০ মিনিট পর পর একটি বিন্দু বা ডট (Dot) চিহ্ন দিয়ে চিহ্নিত করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-63",
    "dayId": 17,
    "topic": "Hemolytic Disease of Newborn Management",
    "difficulty": "MEDIUM",
    "question": "Following is the management of severe hemolytic disease of the newborn due to Rh incompatibility, EXCEPT:",
    "options": [
      "Phototherapy",
      "Exchange blood transfusion",
      "Intravenous immunoglobulin (IVIG)",
      "Antibiotics"
    ],
    "correctIndex": 3,
    "explanationEn": "Rh hemolytic disease is an alloimmune non-infectious pathology treated with phototherapy, exchange transfusion, and IVIG; antibacterial antibiotics have no therapeutic role.",
    "explanationBn": "আরএইচ ইনকম্প্যাটিবিলিটির চিকিৎসায় ফটোথেরাপি ও রক্ত পরিবর্তন প্রয়োজন হলেও অ্যান্টিবায়োটিক (Antibiotics)-এর কোনো ভূমিকা নেই।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-64",
    "dayId": 15,
    "topic": "Puerperal Endometrial Healing",
    "difficulty": "MEDIUM",
    "question": "The process by which the placental site heals during puerperium is called:",
    "options": [
      "Regeneration",
      "Fibrosis and scar contraction",
      "Suppuration",
      "Keloid formation"
    ],
    "correctIndex": 0,
    "explanationEn": "The placental site undergoes complete physiological regeneration of the endometrium without scarring, preventing obliteration of the uterine cavity for future conceptions.",
    "explanationBn": "প্রসবের পর জরায়ুর যেখানে ফুল সংযুক্ত ছিল সেই অংশের নিরাময় দাগ না ফেলে স্বাভাবিকভাবে পুনরায় তৈরি হওয়াকে রিজেনারেশন (Regeneration) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-65",
    "dayId": 15,
    "topic": "Myometrial Quiescence Endocrinology",
    "difficulty": "MEDIUM",
    "question": "Which of the following can inhibit the formation of myometrial gap junctions?",
    "options": [
      "Estrogen",
      "Oxytocin",
      "Progesterone",
      "Prostaglandin F2a"
    ],
    "correctIndex": 2,
    "explanationEn": "Progesterone promotes uterine quiescence throughout pregnancy by inhibiting the transcription and assembly of connexin-43 gap junction channels.",
    "explanationBn": "প্রোজেস্টেরন হরমোন জরায়ুর পেশিতে গ্যাপ জংশন তৈরিতে বাধা দিয়ে পুরো গর্ভাবস্থায় জরায়ুকে শান্ত ও সংকোচনমুক্ত রাখে।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-66",
    "dayId": 15,
    "topic": "Third Stage of Labour Discomfort",
    "difficulty": "EASY",
    "question": "In the third stage of labour, intermittent discomfort in the lower abdomen during expulsion of the placenta is due to:",
    "options": [
      "Full urinary bladder",
      "Uterine contraction",
      "Cervical laceration",
      "Peritoneal irritation"
    ],
    "correctIndex": 1,
    "explanationEn": "Strong, intermittent physiological uterine contractions and retractions shear the placenta off the decidua basalis and expel it through the birth canal.",
    "explanationBn": "প্রসবের তৃতীয় ধাপে প্লাসেন্টা বের হওয়ার সময় পেটের নিচের অংশে ব্যথা জরায়ুর তীব্র সংকোচনের (Uterine contraction) কারণে অনুভূত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-67",
    "dayId": 17,
    "topic": "Genetic Counseling Indications",
    "difficulty": "EASY",
    "question": "Which is NOT an indication for genetic counseling in a pregnant woman?",
    "options": [
      "Previous child born with chromosomal anomaly",
      "Family history of Huntington's chorea",
      "Advanced maternal age over 35 years",
      "Routine pregnancy checkup without any concern"
    ],
    "correctIndex": 3,
    "explanationEn": "Routine uneventful prenatal care without advanced age, consanguinity, abnormal screening tests, or familial hereditary disorders does not require specialist genetic counseling.",
    "explanationBn": "কোনো জটিলতা বা বংশগত ব্যাধি ছাড়া স্বাভাবিক প্রেগন্যান্সি চেকআপে জেনেটিক কাউন্সেলিংয়ের কোনো প্রয়োজন নেই।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-68",
    "dayId": 15,
    "topic": "Puerperium Definitions - Early Puerperium",
    "difficulty": "EASY",
    "question": "Early puerperium begins as soon as the placenta is expelled and lasts:",
    "options": [
      "Up to 24 hours",
      "Up to 7 days",
      "Up to 6 weeks",
      "Up to 6 months"
    ],
    "correctIndex": 1,
    "explanationEn": "Obstetrically, puerperium is categorized into: Immediate puerperium (first 24 hours), Early puerperium (up to 7 days postpartum), and Remote puerperium (up to 6 weeks).",
    "explanationBn": "শারীরবৃত্তীয় শ্রেণীবিভাগ অনুযায়ী প্রসবের পর ফুল পড়ার সময় থেকে প্রথম ৭ দিন পর্যন্ত সময়কে আর্লি পিউয়ারপেরিয়াম (Up to 7 days) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-69",
    "dayId": 15,
    "topic": "Puerperium Physiological Onset",
    "difficulty": "EASY",
    "question": "From a physiological perspective, which marks the beginning of the puerperium period?",
    "options": [
      "Onset of true labor contractions",
      "Rupture of membranes",
      "The delivery of the placenta",
      "The onset of mature lactation on day 3"
    ],
    "correctIndex": 2,
    "explanationEn": "Physiologically and obstetrically, the puerperium commences immediately following the expulsion and delivery of the placenta and fetal membranes.",
    "explanationBn": "শারীরবৃত্তীয় দৃষ্টিকোণ থেকে অমরার সফল প্রসবের (Delivery of the placenta) পর থেকেই পিউয়ারপেরিয়াম পর্ব শুরু হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-obg-70",
    "dayId": 17,
    "topic": "Placenta Previa Pathophysiology",
    "difficulty": "MEDIUM",
    "question": "In placenta previa, repeated small bouts of hemorrhage during expectant treatment cause chronic placental insufficiency leading to:",
    "options": [
      "Fetal macrosomia",
      "Fetal growth restriction",
      "Fetal polycythemia vera",
      "Neural tube defects"
    ],
    "correctIndex": 1,
    "explanationEn": "Recurrent antepartum maternal hemorrhages cause progressive retroplacental infarction, surface area loss, and chronic uteroplacental insufficiency, culminating in fetal growth restriction (FGR/IUGR).",
    "explanationBn": "প্লাসেন্টা প্রিভিয়াতে বারবার রক্তক্ষরণ হলে গর্ভস্থ শিশু পুষ্টি ও অক্সিজেন থেকে বঞ্চিত হয়ে তার শারীরিক বিকাশ মারাত্মক ব্যাহত হয় (Fetal growth restriction)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-1",
    "dayId": 20,
    "topic": "Health Communication Strategies - Mass Approach",
    "difficulty": "EASY",
    "question": "Health education delivered through television and radio is an example of which approach?",
    "options": [
      "Individual approach",
      "Group approach",
      "Mass approach",
      "Interpersonal approach"
    ],
    "correctIndex": 2,
    "explanationEn": "Broadcasting health messages via television, radio, newspapers, and cinema reaches huge heterogeneous populations simultaneously and represents the mass approach.",
    "explanationBn": "টেলিভিশন ও রেডিওর মাধ্যমে একসাথে বহুসংখ্যক মানুষের কাছে স্বাস্থ্য সচেতনতা পৌঁছে দেওয়াকে ম্যাস অ্যাপ্রোচ (Mass approach) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-2",
    "dayId": 20,
    "topic": "Community Health Planning Cycle",
    "difficulty": "EASY",
    "question": "Which is the first step in preparing a health education plan?",
    "options": [
      "Selecting audio-visual aids",
      "Securing financial budget",
      "Assessing community needs",
      "Conducting final program evaluation"
    ],
    "correctIndex": 2,
    "explanationEn": "Any community health education campaign must begin with community needs assessment (situational analysis) to identify prevalent morbidities, beliefs, and resources.",
    "explanationBn": "একটি কার্যকর স্বাস্থ্য শিক্ষা কর্মসূচি তৈরির প্রথম ও প্রধান ধাপ হলো স্থানীয় মানুষের স্বাস্থ্য চাহিদা নিরূপণ করা (Assessing community needs)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-3",
    "dayId": 20,
    "topic": "Immunoprophylaxis - Post-exposure Vaccination",
    "difficulty": "MEDIUM",
    "question": "A 5-year-old child is exposed to measles at school and receives the measles vaccine within 72 hours. Which immunoprophylactic principle is applied?",
    "options": [
      "Passive immunization using antibodies",
      "Active immunization to prevent disease",
      "Innate chemical barrier enhancement",
      "Cell-mediated autoimmune activation"
    ],
    "correctIndex": 1,
    "explanationEn": "Administering live attenuated measles vaccine within 72 hours of exposure stimulates active antibody synthesis before wild virus incubation completes, conferring active protection.",
    "explanationBn": "হামের সংস্পর্শে আসার ৭২ ঘণ্টার মধ্যে টিকা দিলে শিশুর নিজের শরীর সক্রিয়ভাবে অ্যান্টিবডি তৈরি করে রোগ প্রতিরোধ করে (Active immunization)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-4",
    "dayId": 20,
    "topic": "International Health Agencies - UNICEF",
    "difficulty": "EASY",
    "question": "A nurse identifies widespread Vitamin A deficiency among preschoolers. Which international organization supports large-scale supplementation?",
    "options": [
      "World Trade Organization (WTO)",
      "United Nations Children's Fund (UNICEF)",
      "International Labour Organization (ILO)",
      "International Monetary Fund (IMF)"
    ],
    "correctIndex": 1,
    "explanationEn": "UNICEF is the leading United Nations agency that supplies biannual high-dose Vitamin A capsules to prevent nutritional blindness (xerophthalmia) in developing nations.",
    "explanationBn": "শিশুদের পুষ্টিহীনতা ও রাতকানা রোগ দূর করতে বিশ্বজুড়ে ভিটামিন এ ক্যাপসুল সরবরাহ ও সহযোগিতা প্রদান করে ইউনিসেফ (UNICEF)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-5",
    "dayId": 20,
    "topic": "School Health Programs",
    "difficulty": "MEDIUM",
    "question": "During evaluation of a school health ambassador program, the nurse notices inconsistent participation. Most effective strategy?",
    "options": [
      "Imposing monetary fines on non-attending students",
      "Collaborating with student leaders to increase engagement",
      "Cancelling all health programs immediately",
      "Replacing all student roles with outside doctors"
    ],
    "correctIndex": 1,
    "explanationEn": "Engaging student peers and youth leaders empowers students, ensures peer accountability, and significantly boosts motivation and program adherence.",
    "explanationBn": "স্কুল হেলথ কার্যক্রমে শিক্ষার্থীদের অনীহা দূর করতে ছাত্রনেতাদের সাথে সক্রিয় যোগাযোগ ও অংশীদারিত্ব গড়ে তোলাই সর্বোত্তম কৌশল।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-6",
    "dayId": 20,
    "topic": "Family Health Nursing Prioritization",
    "difficulty": "MEDIUM",
    "question": "A family health nurse is planning interventions for a household with limited financial resources and multiple health issues. Best approach?",
    "options": [
      "Address every single issue simultaneously in the first visit",
      "Prioritize interventions based on the most urgent family needs",
      "Refer all family members to distant private hospitals",
      "Focus solely on financial counseling and ignore illnesses"
    ],
    "correctIndex": 1,
    "explanationEn": "When financial and clinical resources are constrained, prioritizing acute, life-threatening, or high-burden needs in partnership with the family delivers optimal care outcomes.",
    "explanationBn": "সীমিত সামর্থ্যের পরিবারের জটিল স্বাস্থ্য সমস্যাগুলো মোকাবিলার জন্য সবচেয়ে জরুরি ও আশু প্রয়োজনীয় বিষয়গুলোকে অগ্রাধিকার দিয়ে শুরু করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-7",
    "dayId": 20,
    "topic": "Demographic Indices - Age-Specific Fertility",
    "difficulty": "HARD",
    "question": "Which approach best demonstrates application of demographic data to improve contraceptive uptake in a rural family welfare program?",
    "options": [
      "Distributing pamphlets randomly at railway stations",
      "Identifying age-specific fertility rates to target interventions",
      "Providing sterilization advice only to elderly women",
      "Counting total village population without age segregation"
    ],
    "correctIndex": 1,
    "explanationEn": "Analyzing Age-Specific Fertility Rates (ASFR) pinpoints peak childbearing age cohorts (e.g., 20-29 years), allowing tailored family planning counseling and spacing methods.",
    "explanationBn": "নির্দিষ্ট বয়সভিত্তিক সন্তান জন্মদানের হার (ASFR) বিশ্লেষণ করে সঠিক বয়সের নারীদের কাছে পরিবার পরিকল্পনার বার্তা পৌঁছে দেওয়া সবচেয়ে বিজ্ঞানসম্মত।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-8",
    "dayId": 20,
    "topic": "School Health Promotion",
    "difficulty": "EASY",
    "question": "In planning a health promotion activity for a school, which two concepts should the nurse integrate?",
    "options": [
      "Nutrition education and physical activity promotion",
      "Heavy competitive lifting and fasting diets",
      "Strict classroom confinement and medication drills",
      "Sedentary gaming and high-carbohydrate snacking"
    ],
    "correctIndex": 0,
    "explanationEn": "Combining dietary balance education with daily active physical exercise builds lifelong healthy habits and combats the dual burden of malnutrition and childhood obesity.",
    "explanationBn": "স্কুল পর্যায়ের স্বাস্থ্যসচেতনতায় সুষম পুষ্টির শিক্ষা এবং নিয়মিত খেলাধুলা ও শারীরিক ব্যায়ামের ওপর সর্বাধিক গুরুত্ব দেওয়া প্রয়োজন।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-9",
    "dayId": 20,
    "topic": "Health Program Objectives - SMART Criteria",
    "difficulty": "MEDIUM",
    "question": "When creating objectives for a health education program, which characteristic is most important for measurable outcomes?",
    "options": [
      "Abstract ambiguity",
      "Broad generalization",
      "Specificity",
      "Unbounded timeframes"
    ],
    "correctIndex": 2,
    "explanationEn": "Under SMART objective criteria (Specific, Measurable, Achievable, Relevant, Time-bound), Specificity is fundamental for clear evaluation of educational outcomes.",
    "explanationBn": "স্বাস্থ্য শিক্ষা কর্মসূচির সাফল্য পরিমাপ করার জন্য উদ্দেশ্যগুলো সুনির্দিষ্ট (Specificity) ও স্পষ্ট হওয়া অত্যন্ত প্রয়োজনীয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-10",
    "dayId": 6,
    "topic": "Therapeutic Diet Compliance in Diabetes",
    "difficulty": "EASY",
    "question": "During a health education session, which strategy is most effective in promoting adherence to a therapeutic diet for diabetic patients?",
    "options": [
      "Handing out rigid generic diet lists without discussion",
      "Involving patients in meal planning",
      "Threatening patients with amputations and blindness",
      "Restricting all food consumption to liquid soups"
    ],
    "correctIndex": 1,
    "explanationEn": "Collaborative meal planning that incorporates patient cultural preferences, daily schedules, and affordable local ingredients ensures sustained dietary compliance.",
    "explanationBn": "ডায়াবেটিস রোগীদের খাদ্যাভ্যাস বজায় রাখতে রোগীর নিজস্ব পছন্দ ও সামর্থ্য অনুযায়ী খাবারের তালিকা তৈরিতে তাদের সরাসরি যুক্ত করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-11",
    "dayId": 20,
    "topic": "Community Health Nursing Standing Orders",
    "difficulty": "MEDIUM",
    "question": "When managing minor ailments in the community, which two key actions should a GNM nurse take per standing instructions?",
    "options": [
      "Prescribe off-label chemotherapy and perform biopsies",
      "Assess symptoms and provide appropriate care",
      "Discharge patients from all community follow-ups",
      "Withhold all treatment until specialist arrival"
    ],
    "correctIndex": 1,
    "explanationEn": "Under national standing orders, community health nurses systematically assess presenting symptoms and deliver prompt symptomatic primary care and appropriate referral.",
    "explanationBn": "স্ট্যান্ডিং অর্ডার অনুযায়ী গ্রামীণ নার্সরা সাধারণ রোগের ক্ষেত্রে উপসর্গ নিখুঁতভাবে মূল্যায়ন করবেন এবং প্রাথমিক চিকিৎসা সেবা প্রদান করবেন।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-12",
    "dayId": 20,
    "topic": "Overcoming Vaccine Hesitancy",
    "difficulty": "EASY",
    "question": "Which communication strategy is most effective for engaging workshop participants in critical thinking to clarify vaccination misconceptions?",
    "options": [
      "Delivering a rapid one-way lecture without pause",
      "Facilitating an open question and answer session",
      "Ignoring audience questions and showing text slides",
      "Criticizing participants who express doubts"
    ],
    "correctIndex": 1,
    "explanationEn": "Interactive two-way Q&A dialogues address specific anxieties, deconstruct myths respectfully, and build trust in immunizations.",
    "explanationBn": "ভ্যাকসিন নিয়ে প্রচলিত ভুল ধারণা দূর করতে অংশগ্রহণকারীদের নিয়ে উন্মুক্ত প্রশ্নোত্তরের আয়োজন করাই সবচেয়ে ফলপ্রসূ কৌশল।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-13",
    "dayId": 20,
    "topic": "National Health Insurance - Nurse Navigation",
    "difficulty": "MEDIUM",
    "question": "In community health nursing, what is the nurse's role when implementing specialized services under a government health insurance scheme?",
    "options": [
      "Denying claims to save government funds",
      "Facilitating access to scheme benefits and coordinating referrals",
      "Auditing commercial tax returns of families",
      "Selling private commercial insurance policies"
    ],
    "correctIndex": 1,
    "explanationEn": "Community nurses serve as care navigators: identifying eligible beneficiaries (e.g., PM-JAY), helping them access cashless hospital benefits, and coordinating specialty referrals.",
    "explanationBn": "সরকারি স্বাস্থ্যবীমার আওতায় সুবিধাবঞ্চিত মানুষকে স্কিমের সুবিধা পাইয়ে দেওয়া এবং হাসপাতালে রেফারেল নিশ্চিত করাই নার্সের মূল দায়িত্ব।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-14",
    "dayId": 20,
    "topic": "Family Health Care Principles",
    "difficulty": "EASY",
    "question": "What is a key aspect of family health care services?",
    "options": [
      "Focusing exclusively on the wage earner",
      "Prevention of diseases in all family members",
      "Providing acute inpatient surgery at home",
      "Disregarding environmental sanitation"
    ],
    "correctIndex": 1,
    "explanationEn": "Family health care views the family as a unit of service, focusing on health promotion, risk reduction, and disease prevention across all generations in the household.",
    "explanationBn": "পারিবারিক স্বাস্থ্য সেবার অন্যতম প্রধান বৈশিষ্ট্য হলো পরিবারের প্রতিটি সদস্যের মধ্যে রোগ প্রতিরোধ (Prevention of diseases in all members) নিশ্চিত করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-15",
    "dayId": 20,
    "topic": "National Family Health Survey (NFHS) Indicators",
    "difficulty": "MEDIUM",
    "question": "According to NFHS vital statistics, which indicator most directly reflects improvements in child health services?",
    "options": [
      "Increase in crude birth rate",
      "Increase in immunization coverage",
      "Rise in neonatal mortality",
      "Decrease in hospital beds"
    ],
    "correctIndex": 1,
    "explanationEn": "Full immunization coverage is the primary vital indicator of child health program performance, reflecting vaccine access, cold-chain integrity, and preventable mortality reduction.",
    "explanationBn": "NFHS পরিসংখ্যান অনুযায়ী শিশু স্বাস্থ্য সেবার উন্নতির প্রত্যক্ষ প্রমাণ হলো শিশুদের টিকাদানের হার বা কভারেজ বৃদ্ধি পাওয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-16",
    "dayId": 18,
    "topic": "Universal Immunization - Missed Doses",
    "difficulty": "EASY",
    "question": "If a child misses the second dose of DPT, what is the recommended action?",
    "options": [
      "Restart the entire vaccine series from dose 1",
      "Administer the missed dose as soon as possible",
      "Omit the dose and administer only the booster at 16 months",
      "Cancel all future immunizations"
    ],
    "correctIndex": 1,
    "explanationEn": "Under national immunization guidelines, a delayed or missed vaccine dose should be administered as soon as possible without restarting the primary series.",
    "explanationBn": "DPT বা যেকোনো টিকার ডোজ মিস হলে প্রথম থেকে নতুন করে শুরু না করে যত দ্রুত সম্ভব মিস হওয়া ডোজটি দিয়ে দিতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-17",
    "dayId": 20,
    "topic": "Health Communication Evaluation",
    "difficulty": "EASY",
    "question": "When evaluating communication in a health education session, which indicator shows successful communication?",
    "options": [
      "Audience members remaining completely silent throughout",
      "Participants can accurately summarize the main points",
      "All handouts are left untouched on chairs",
      "The session finishes 30 minutes before time"
    ],
    "correctIndex": 1,
    "explanationEn": "The true measure of effective health communication is whether learners understand and can accurately articulate key health concepts in their own words.",
    "explanationBn": "স্বাস্থ্য শিক্ষা সফল হয়েছে কি না তা বোঝার সবচেয়ে ভালো লক্ষণ হলো অংশগ্রহণকারীরা নিজের ভাষায় প্রধান বিষয়গুলো সারসংক্ষেপ বলতে পারেন।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-18",
    "dayId": 20,
    "topic": "Community Health Documentation Standards",
    "difficulty": "MEDIUM",
    "question": "During a health camp, a nurse ensures all patient records are updated immediately after each consultation. Which requirement is she adhering to?",
    "options": [
      "Timeliness of data entry and review",
      "Selective recording of favorable cases only",
      "Delegation of clinical notes to community leaders",
      "Postponing notes until month end"
    ],
    "correctIndex": 0,
    "explanationEn": "Real-time, contemporaneous recording of health encounters adheres to the fundamental medico-legal standard of timeliness, ensuring patient safety and clinical continuity.",
    "explanationBn": "ক্যাম্পে রোগী দেখার সাথে সাথে রেকর্ড আপডেট করা তথ্যের সময়ানুবর্তিতা বা টাইমলিনেস (Timeliness of data entry) মানদণ্ডের সাথে সঙ্গতিপূর্ণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-19",
    "dayId": 20,
    "topic": "Culturally Congruent Health Care",
    "difficulty": "MEDIUM",
    "question": "When planning a family health education session, what approach allows a nurse to tailor interventions for diverse cultural backgrounds?",
    "options": [
      "Assuming all families share identical health values",
      "Conducting a preliminary assessment of each family's health beliefs and cultural practices",
      "Enforcing uniform dietary customs regardless of tradition",
      "Excluding culturally diverse families from sessions"
    ],
    "correctIndex": 1,
    "explanationEn": "Assessing local cultural beliefs, folk healing practices, and values enables nurses to deliver culturally congruent care that respects traditions and enhances compliance.",
    "explanationBn": "বিভিন্ন সংস্কৃতির পরিবারের জন্য কার্যকর স্বাস্থ্য শিক্ষা দিতে প্রথমে তাদের নিজস্ব বিশ্বাস ও রীতিনীতির প্রাথমিক মূল্যায়ন করে নিতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-20",
    "dayId": 20,
    "topic": "Home Visit Nursing Bag Technique",
    "difficulty": "MEDIUM",
    "question": "While conducting a home visit, the nurse needs to dispose of contaminated materials. Which step aligns with proper bag technique?",
    "options": [
      "Leaving used dressings on the patient's bed",
      "Placing waste in a separate, leak-proof container brought in the bag",
      "Throwing infectious items out of the window",
      "Washing bloody cotton in the household drinking pitcher"
    ],
    "correctIndex": 1,
    "explanationEn": "Proper public health nursing bag technique requires segregating biomedical waste into designated leak-proof bags/containers to prevent bag contamination and transport back for safe incineration.",
    "explanationBn": "হোম ভিজিটের সময় ব্যবহৃত দূষিত তুলা বা ব্যান্ডেজ ব্যাগে আনা আলাদা লিক-প্রুফ পাত্রে ভরে নিয়ে এসে যথাযথ নিয়মে বিনষ্ট করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-21",
    "dayId": 20,
    "topic": "Refugee Camp Epidemiology & Sanitation",
    "difficulty": "EASY",
    "question": "A community health nurse must evaluate infection transmission risk in a crowded refugee camp. Which combined factors should be prioritized?",
    "options": [
      "Provision of high-end cosmetic amenities",
      "Environmental sanitation and personal hygiene",
      "Air travel availability and passport status",
      "Availability of television entertainment"
    ],
    "correctIndex": 1,
    "explanationEn": "Overcrowding dramatically amplifies feco-oral and airborne transmission; safe potable water, excreta disposal (sanitation), and handwashing are primary life-saving priorities.",
    "explanationBn": "শরণার্থী শিবিরে সংক্রামক ব্যাধি ছড়িয়ে পড়া রোধে সবার আগে পরিবেশগত স্যানিটেশন ও ব্যক্তিগত পরিচ্ছন্নতার ওপর সর্বাধিক গুরুত্ব দিতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-22",
    "dayId": 20,
    "topic": "Maternal Health Records Management",
    "difficulty": "EASY",
    "question": "A nurse is reviewing past reports to analyze trends in maternal health. Which step reflects proper maintenance of community health records?",
    "options": [
      "Storing records in random unindexed heaps",
      "Organizing records systematically for easy retrieval",
      "Discarding records after three weeks to clear desk space",
      "Shredding all delivery records immediately"
    ],
    "correctIndex": 1,
    "explanationEn": "Systematic filing, indexing, and computerized entry of maternal registers ensure quick retrieval, longitudinal audit, epidemiological trend analysis, and patient tracking.",
    "explanationBn": "মাতৃস্বাস্থ্য সংক্রান্ত তথ্যের সঠিক রক্ষণাবেক্ষণের মূল শর্ত হলো নথিগুলো সুশৃঙ্খলভাবে সাজিয়ে রাখা যাতে প্রয়োজনে সহজে খুঁজে পাওয়া যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-23",
    "dayId": 20,
    "topic": "Nurse Role in Health Promotion",
    "difficulty": "EASY",
    "question": "What is a primary role of a nurse in health education?",
    "options": [
      "Providing information about healthy lifestyles",
      "Enforcing legal curfews during epidemics",
      "Manufacturing pharmaceutical drugs",
      "Operating diagnostic CT scanners"
    ],
    "correctIndex": 0,
    "explanationEn": "As health educators, nurses provide evidence-based lifestyle information on nutrition, hygiene, exercise, and tobacco cessation to prevent chronic and acute diseases.",
    "explanationBn": "স্বাস্থ্য শিক্ষায় একজন নার্সের প্রধান দায়িত্ব হলো মানুষকে সুস্থ জীবনযাপনের বিভিন্ন নিয়মাবলী ও তথ্য দিয়ে সচেতন করে তোলা।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-24",
    "dayId": 20,
    "topic": "Genetic Counseling Approaches - Directive vs Non-directive",
    "difficulty": "HARD",
    "question": "A nurse is providing genetic counseling to a couple with a family history of diabetes. Which type of counseling is most appropriate?",
    "options": [
      "Directive counseling focused on risk assessment and preventive advice",
      "Coercive counseling forbidding marriage",
      "Passive avoidance without medical guidance",
      "Psychoanalytic dream interpretation"
    ],
    "correctIndex": 0,
    "explanationEn": "For polygenic multifactorial conditions with modifiable lifestyle risks (like Type 2 diabetes), directive counseling that combines risk evaluation with concrete preventive diet/exercise advice is indicated.",
    "explanationBn": "ডায়াবেটিসের মতো পারিবারিক ঝুঁকির ক্ষেত্রে ডিরেক্টিভ কাউন্সেলিং দিয়ে খাদ্যাভ্যাস ও ব্যায়ামের মাধ্যমে রোগ প্রতিরোধের স্পষ্ট পরামর্শ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-25",
    "dayId": 20,
    "topic": "Audio-Visual Aids in Health Teaching",
    "difficulty": "EASY",
    "question": "Which of the following is an example of a visual aid used in health education?",
    "options": [
      "Podcast audio recording",
      "Poster",
      "Radio broadcast announcement",
      "Telephone hotline helpline"
    ],
    "correctIndex": 1,
    "explanationEn": "Visual aids convey messages through sight alone (e.g., posters, flipcharts, flannelgraphs, brochures), whereas radio/podcasts are purely auditory.",
    "explanationBn": "স্বাস্থ্য শিক্ষায় চাক্ষুষ বা ভিজ্যুয়াল এইড (Visual aid)-এর একটি উৎকৃষ্ট উদাহরণ হলো চিত্রসম্বলিত পোস্টার (Poster)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-26",
    "dayId": 20,
    "topic": "Epidemiological Concepts - Health-Illness Continuum",
    "difficulty": "MEDIUM",
    "question": "Which best describes the relationship between health and disease in community health nursing?",
    "options": [
      "Health and disease are completely isolated separate states",
      "Health and disease are on a continuum and influence each other",
      "Health is solely defined by presence of high blood pressure",
      "Disease is entirely independent of environmental surroundings"
    ],
    "correctIndex": 1,
    "explanationEn": "The health-illness continuum model recognizes health as a dynamic, shifting state ranging from optimal well-being to death, shaped continuously by biological, social, and environmental forces.",
    "explanationBn": "কমিউনিটি নার্সিং অনুযায়ী স্বাস্থ্য ও অসুস্থতা একটি অবিচ্ছিন্ন প্রবাহ বা কন্টিনিউয়াম (Continuum), যা পরস্পরের ওপর প্রতিনিয়ত প্রভাব ফেলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-27",
    "dayId": 6,
    "topic": "Adolescent Obesity Management",
    "difficulty": "EASY",
    "question": "A school nurse is designing a program to address obesity in adolescents. Which combination of interventions best supports healthy weight management?",
    "options": [
      "Extreme water fasting and laxatives",
      "Promoting physical activity and a balanced diet",
      "Sedentary classroom confinement and meal skipping",
      "Prescribing adult anorectic diet pills"
    ],
    "correctIndex": 1,
    "explanationEn": "Sustainable adolescent weight management avoids starvation and combines 60 minutes of daily physical activity with a nutrient-dense, portion-controlled balanced diet.",
    "explanationBn": "কৈশোরে অতিরিক্ত ওজন কমাতে সবচেয়ে কার্যকর উপায় হলো নিয়মিত খেলাধুলা বা ব্যায়াম এবং পুষ্টিকর সুষম খাদ্যাভ্যাস গড়ে তোলা।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-28",
    "dayId": 20,
    "topic": "Indian Five-Year Health Plans",
    "difficulty": "HARD",
    "question": "Which Five-Year Plan first introduced the Minimum Needs Programme?",
    "options": [
      "First Five-Year Plan (1951–56)",
      "Third Five-Year Plan (1961–66)",
      "Fifth Five-Year Plan (1974–79)",
      "Ninth Five-Year Plan (1997–2002)"
    ],
    "correctIndex": 2,
    "explanationEn": "The Minimum Needs Programme (MNP) was introduced in the Fifth Five-Year Plan (1974-79) to establish basic minimum living and health standards for rural populations.",
    "explanationBn": "ভারতে গ্রামীণ মানুষের মৌলিক চাহিদা পূরণের জন্য পঞ্চম পঞ্চবার্ষিকী পরিকল্পনায় (1974–79) মিনিমাম নিডস প্রোগ্রাম চালু করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-29",
    "dayId": 20,
    "topic": "Principles of Health Education",
    "difficulty": "EASY",
    "question": "What is a key principle for making health education effective among diverse groups?",
    "options": [
      "Delivering uniform lectures in technical Latin",
      "Adapt messages to audience needs",
      "Ignoring local dialect and customs",
      "Using identical scientific jargon for all age groups"
    ],
    "correctIndex": 1,
    "explanationEn": "Health education must be tailored to the cultural context, literacy level, language, and specific concerns of the target population to achieve meaningful behavior change.",
    "explanationBn": "বিভিন্ন জনগোষ্ঠীর মাঝে স্বাস্থ্য শিক্ষাকে কার্যকর করতে বার্তাগুলোকে সবসময় শ্রোতাদের চাহিদা ও বোঝার ক্ষমতার সাথে মানানসই করে উপস্থাপন করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-30",
    "dayId": 20,
    "topic": "Health Committees in India - Mudaliar Committee",
    "difficulty": "HARD",
    "question": "Which committee emphasized strengthening district hospitals to provide specialist services as part of health planning in India?",
    "options": [
      "Bhore Committee",
      "Mudaliar Committee",
      "Chadah Committee",
      "Kartar Singh Committee"
    ],
    "correctIndex": 1,
    "explanationEn": "The Mudaliar Committee (Health Survey and Planning Committee, 1962) recommended consolidating primary health centers and upgrading district hospitals to high-quality specialist hubs.",
    "explanationBn": "ভারতের স্বাস্থ্য ব্যবস্থার উন্নয়নে জেলা হাসপাতালগুলোতে বিশেষায়িত চিকিৎসা সেবা জোরদার করার সুপারিশ করেছিল মুদালিয়র কমিটি (1962)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-31",
    "dayId": 20,
    "topic": "Health Economics - Employer Insurance",
    "difficulty": "EASY",
    "question": "Who commonly pays the premium for health insurance in employer-sponsored plans?",
    "options": [
      "The employee's children",
      "The employer",
      "Local municipal corporator",
      "The hospital nursing superintendent"
    ],
    "correctIndex": 1,
    "explanationEn": "In employer-sponsored group health insurance arrangements, the employer pays the insurance premium either fully or subsidized as an employee benefit.",
    "explanationBn": "চাকরিজীবী বা করপোরেট স্বাস্থ্যবীমায় বীমার প্রিমিয়াম সাধারণত নিয়োগকর্তা বা প্রতিষ্ঠান (The employer) প্রদান করে থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-32",
    "dayId": 6,
    "topic": "Determinants of Nutrition",
    "difficulty": "MEDIUM",
    "question": "Which two factors can influence an individual's nutritional status in the context of physiological and psychological aspects?",
    "options": [
      "Automobile ownership and phone brand",
      "Digestion efficiency and emotional state",
      "House painting color and shoe size",
      "Postal zip code and blood type"
    ],
    "correctIndex": 1,
    "explanationEn": "Physiologically, intestinal absorptive and digestive efficiency determines nutrient bioavailability, while emotional states (stress, depression) directly regulate appetite and eating habits.",
    "explanationBn": "পুষ্টির ক্ষেত্রে শারীরবৃত্তীয়ভাবে পরিপাকতন্ত্রের হজম ক্ষমতা এবং মনস্তাত্ত্বিকভাবে মানসিক অবস্থা বা মেজাজ (Emotional state) সরাসরি প্রভাব ফেলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-33",
    "dayId": 20,
    "topic": "Continuity of Community Care",
    "difficulty": "EASY",
    "question": "A family relocates to a new community, and the receiving nurse needs to update their health record. Which practice best promotes continuity of care?",
    "options": [
      "Destroying all past clinical history and creating new numbers",
      "Transferring and integrating previous health records promptly",
      "Assuming the family has never had any medical diagnoses",
      "Withholding child immunizations until year end"
    ],
    "correctIndex": 1,
    "explanationEn": "Prompt retrieval and integration of historical medical records prevents redundant testing, missed vaccine doses, and medication gaps when families relocate.",
    "explanationBn": "নতুন এলাকায় পরিবার স্থানান্তরিত হলে পূর্ববর্তী স্বাস্থ্য রেকর্ডগুলো সংগ্রহ ও সংযুক্ত করার মাধ্যমেই সেবার ধারাবাহিকতা (Continuity of care) নিশ্চিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-34",
    "dayId": 20,
    "topic": "Epidemiological Levels of Prevention - Secondary",
    "difficulty": "EASY",
    "question": "A community health nurse organizes village hypertension screenings, provides dietary counseling, and refers detected cases. Which level of prevention is applied?",
    "options": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention through early detection and intervention",
      "Tertiary rehabilitation"
    ],
    "correctIndex": 2,
    "explanationEn": "Secondary prevention focuses on early case detection (screening) and prompt curative intervention before irreversible target organ damage develops.",
    "explanationBn": "গ্রামে প্রেসার মাপার ক্যাম্প করে প্রাথমিক অবস্থায় রোগী শনাক্ত করা এবং দ্রুত চিকিৎসার ব্যবস্থা করা হলো সেকেন্ডারি প্রিভেনশন (Secondary prevention)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-35",
    "dayId": 20,
    "topic": "National Child Programs - ICDS Grassroots Workers",
    "difficulty": "EASY",
    "question": "Who is primarily responsible for delivering ICDS services at the village level?",
    "options": [
      "Civil Surgeon",
      "Anganwadi Worker",
      "District Collector",
      "Medical College Dean"
    ],
    "correctIndex": 1,
    "explanationEn": "The Anganwadi Worker (AWW) is the grassroots village-level worker under the Integrated Child Development Services (ICDS) scheme providing supplementary nutrition and preschool education.",
    "explanationBn": "গ্রামে আইসিডিএস (ICDS) প্রকল্পের পুষ্টি ও শিশু বিকাশমূলক সেবাগুলো পৌঁছে দেওয়ার প্রধান দায়িত্ব থাকে অঙ্গনওয়াড়ি কর্মীর (Anganwadi Worker)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-36",
    "dayId": 20,
    "topic": "Primary Health Care Preventive Strategies",
    "difficulty": "EASY",
    "question": "In community health nursing, how can nurses most effectively contribute to disease prevention within a health care delivery system?",
    "options": [
      "By performing inpatient complex brain surgeries",
      "By promoting vaccination and educating about hygiene",
      "By restricting community visits to urban clinics",
      "By manufacturing pharmaceutical antibiotics"
    ],
    "correctIndex": 1,
    "explanationEn": "Primary prevention through community immunizations, personal hand hygiene education, and safe drinking water advocacy is the most cost-effective disease prevention strategy.",
    "explanationBn": "কমিউনিটি নার্সরা সবচেয়ে কার্যকরভাবে রোগ প্রতিরোধ করতে পারেন শিশুদের সময়মতো টিকা দিয়ে এবং পরিষ্কার-পরিচ্ছন্নতার শিক্ষা দিয়ে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-37",
    "dayId": 20,
    "topic": "Public Health Behavioral Interventions",
    "difficulty": "EASY",
    "question": "A public health nurse is conducting a rural health awareness mela where most young adults are smokers. Most appropriate aim of health education?",
    "options": [
      "Distributing free tobacco samples",
      "Encouraging behavior change by providing information and support",
      "Punishing smokers with physical isolation",
      "Ignoring smoking habits and discussing only sports"
    ],
    "correctIndex": 1,
    "explanationEn": "Effective public health campaigns encourage voluntary behavioral change by providing accurate harm information, cessation benefits, and practical behavioral support.",
    "explanationBn": "ধূমপায়ী যুবকদের মধ্যে স্বাস্থ্য সভার মূল উদ্দেশ্য হলো তামাকের ক্ষতিকর দিক তুলে ধরে তাদের আচরণ পরিবর্তনে উৎসাহিত ও সহায়তা করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-38",
    "dayId": 6,
    "topic": "Food Safety & Consumer Protection",
    "difficulty": "EASY",
    "question": "A nurse is educating a community about food adulteration. Which combination of actions best prevents consumption of adulterated food?",
    "options": [
      "Buying unpackaged food from unverified street hawkers",
      "Purchasing branded products and checking for standard certification marks",
      "Storing food in open unsealed containers outdoors",
      "Using rancid uninspected cooking oils"
    ],
    "correctIndex": 1,
    "explanationEn": "Verifying quality marks (such as AGMARK, FSSAI, ISI) and purchasing from reliable brands protect consumers from chemical adulterants and contaminated foodstuffs.",
    "explanationBn": "খাবারে ভেজাল এড়াতে ভোক্তাদের সবসময় সিলমোহরযুক্ত খাদ্যপণ্য কেনা এবং সরকারি মানচিহ্ন (FSSAI/AGMARK) দেখে নেওয়া উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-39",
    "dayId": 6,
    "topic": "Nutrition Science - Recommended Dietary Allowance",
    "difficulty": "EASY",
    "question": "The average daily dietary intake for a healthy individual for a given life stage and gender group is called:",
    "options": [
      "Basal metabolic rate (BMR)",
      "Recommended dietary allowance (RDA)",
      "Body mass index (BMI)",
      "Total parenteral nutrition (TPN)"
    ],
    "correctIndex": 1,
    "explanationEn": "Recommended Dietary Allowance (RDA) represents the average daily dietary intake level sufficient to meet nutrient requirements of nearly all (97-98%) healthy individuals in a life stage.",
    "explanationBn": "সুস্থ ব্যক্তির বয়স ও লিঙ্গ অনুযায়ী প্রতিদিনের প্রয়োজনীয় পুষ্টির গড় মাত্রাকে RDA (Recommended Dietary Allowance) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-40",
    "dayId": 20,
    "topic": "Teaching Media in Low-Literacy Populations",
    "difficulty": "MEDIUM",
    "question": "When planning a community health education session, why might a nurse choose posters instead of pamphlets?",
    "options": [
      "Posters contain only dense microprint sentences",
      "Posters are more effective for large groups with limited literacy",
      "Pamphlets are universally understood without reading",
      "Posters cannot display pictures"
    ],
    "correctIndex": 1,
    "explanationEn": "Posters utilize bold graphic illustrations, pictorial diagrams, and minimal text, making them vastly superior for conveying public health messages to groups with limited literacy.",
    "explanationBn": "যেসব জনগোষ্ঠীর মধ্যে সাক্ষরতার হার কম, সেখানে লিফলেটের চেয়ে ছবিযুক্ত পোস্টার (Posters) অনেক বেশি সহজে ও দ্রুত বার্তা পৌঁছে দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-41",
    "dayId": 20,
    "topic": "National Health Policy 2017 Priorities",
    "difficulty": "MEDIUM",
    "question": "A state government seeks to address disparities in health care access. According to the National Health Policy, which initiative should they implement first?",
    "options": [
      "Building high-cost cosmetic surgical towers in capitals",
      "Expanding primary health care outreach",
      "Eliminating rural health sub-centers",
      "Privatizing all immunizations"
    ],
    "correctIndex": 1,
    "explanationEn": "National Health Policy 2017 mandates allocating at least two-thirds of the health budget to primary health care, establishing Ayushman Arogya Mandirs (Health & Wellness Centres).",
    "explanationBn": "জাতীয় স্বাস্থ্য নীতি অনুযায়ী স্বাস্থ্য বৈষম্য কমাতে সবার আগে গ্রামীণ ও দূরবর্তী অঞ্চলে প্রাথমিক স্বাস্থ্য সেবার বিস্তার (Expanding primary health care outreach) ঘটানো দরকার।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-42",
    "dayId": 20,
    "topic": "Teaching Aids - Three-Dimensional Models",
    "difficulty": "EASY",
    "question": "What is the primary advantage of using models as audio-visual aids in health education?",
    "options": [
      "They are completely flat two-dimensional paper sheets",
      "They stimulate the sense of touch and sight",
      "They eliminate the need for the teacher to speak",
      "They can only be viewed in dark rooms"
    ],
    "correctIndex": 1,
    "explanationEn": "Three-dimensional anatomical models (such as pelvic or birth models) engage both tactile and visual sensory pathways, enhancing comprehension of spatial and anatomical concepts.",
    "explanationBn": "স্বাস্থ্য শিক্ষায় ত্রিমাত্রিক মডেল ব্যবহারের সবচেয়ে বড় সুবিধা হলো এটি শিক্ষার্থীদের দৃষ্টি ও স্পর্শ অনুভূতিকে (Touch and sight) একসাথে জাগ্রত করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-43",
    "dayId": 20,
    "topic": "Levels of Health Care Delivery",
    "difficulty": "EASY",
    "question": "The specialised level of health care services is provided by:",
    "options": [
      "Sub-centre",
      "Primary health centre",
      "Tertiary health centre",
      "Village anganwadi"
    ],
    "correctIndex": 2,
    "explanationEn": "Tertiary health centers (such as medical colleges and apex institutions like AIIMS) provide advanced, highly specialized, super-specialty, and intensive diagnostic and therapeutic care.",
    "explanationBn": "সবচেয়ে উন্নত ও বিশেষায়িত সুপার-স্পেশালিটি চিকিৎসা সেবা টারশিয়ারি স্বাস্থ্য কেন্দ্র (Tertiary health centre)-এ প্রদান করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-44",
    "dayId": 6,
    "topic": "Gastrointestinal Enzymology - Lactase",
    "difficulty": "EASY",
    "question": "Lactose intolerance occurs due to deficiency of:",
    "options": [
      "Lactase",
      "Amylase",
      "Pepsin",
      "Lipase"
    ],
    "correctIndex": 0,
    "explanationEn": "Lactose intolerance results from a deficiency of the brush-border enzyme lactase in the small intestine, impairing the hydrolysis of lactose into glucose and galactose.",
    "explanationBn": "দুধে থাকা ল্যাকটোজ শর্করা হজমকারী এনজাইম ল্যাকটেজ (Lactase)-এর ঘাটতির কারণেই ল্যাকটোজ ইনটলারেন্স দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-45",
    "dayId": 6,
    "topic": "Nutritional Energetics - Caloric Yield",
    "difficulty": "EASY",
    "question": "How many kilocalories (kcal) of energy are yielded by carbohydrates upon metabolism?",
    "options": [
      "4 kcal",
      "7 kcal",
      "9 kcal",
      "12 kcal"
    ],
    "correctIndex": 0,
    "explanationEn": "Physiological fuel values: Carbohydrates yield 4 kcal/g, Proteins yield 4 kcal/g, Alcohol yields 7 kcal/g, and Fats yield 9 kcal/g.",
    "explanationBn": "১ গ্রাম কার্বোহাইড্রেট বা শর্করা বিপাকের ফলে মানবদেহে ৪ কিলোক্যালরি (4 kcal) শক্তি উৎপন্ন হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-46",
    "dayId": 20,
    "topic": "Person-Centered Care Quality Indicators",
    "difficulty": "MEDIUM",
    "question": "Which indicator best reflects the person-centeredness of healthcare delivery?",
    "options": [
      "Total number of empty hospital beds",
      "Patient involvement in decision-making",
      "Length of hospital corridors",
      "Number of security guards deployed"
    ],
    "correctIndex": 1,
    "explanationEn": "Person-centered care prioritizes the patient's individual values, preferences, and autonomy by actively involving them and their families in clinical care decisions.",
    "explanationBn": "রোগীকেন্দ্রিক স্বাস্থ্য সেবার প্রধান পরিচায়ক হলো চিকিৎসা সংক্রান্ত যেকোনো সিদ্ধান্ত গ্রহণে রোগীকে সক্রিয়ভাবে যুক্ত করা (Patient involvement in decision-making)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-47",
    "dayId": 20,
    "topic": "Epidemiological Concepts - Disease Carriers",
    "difficulty": "EASY",
    "question": "A person who harbors the microorganisms of a disease and excretes them without suffering from symptoms is called:",
    "options": [
      "Susceptible host",
      "Carrier",
      "Active case",
      "Immune veteran"
    ],
    "correctIndex": 1,
    "explanationEn": "A carrier is an infected individual who harbors a specific infectious pathogen without exhibiting clinical symptoms and serves as a potential source of infection for others.",
    "explanationBn": "যে ব্যক্তি শরীরে রোগের জীবাণু বহন করে এবং তা ছড়িয়ে দেয় কিন্তু নিজে কোনো লক্ষণে ভোগে না, তাকে ক্যারিয়ার বা বাহক (Carrier) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-48",
    "dayId": 6,
    "topic": "Food Chemistry - Lipid Purity Tests",
    "difficulty": "HARD",
    "question": "Name the test employed to check the purity of butter through the estimation of volatile fatty acids:",
    "options": [
      "Benedict's test",
      "Reichert-Meissl number",
      "Biuret test",
      "Widal test"
    ],
    "correctIndex": 1,
    "explanationEn": "The Reichert-Meissl (RM) number measures the quantity of water-soluble volatile fatty acids (such as butyric acid) present in butterfat, detecting adulteration with vegetable fats.",
    "explanationBn": "মাখনে উদ্বায়ী ফ্যাটি অ্যাসিডের মাত্রা পরিমাপ করে তার বিশুদ্ধতা পরীক্ষা করার পদ্ধতিকে রাইকার্ট-মাইসেল নম্বর (Reichert-Meissl number) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-49",
    "dayId": 20,
    "topic": "Vector-Borne Parasitology - Lymphatic Filariasis",
    "difficulty": "MEDIUM",
    "question": "Which causative filaria agent displays a nocturnal periodicity?",
    "options": [
      "Brugia malayi",
      "Onchocerca volvulus",
      "Loa loa",
      "Mansonella perstans"
    ],
    "correctIndex": 0,
    "explanationEn": "Brugia malayi (and Wuchereria bancrofti) microfilariae exhibit nocturnal periodicity, appearing in peak numbers in peripheral blood between 10 PM and 2 AM to coincide with Culex/Mansonia mosquito feeding.",
    "explanationBn": "ব্রুগিয়া মালাই (Brugia malayi) গোদ রোগের পরজীবী রাতের বেলায় রক্তে বেশি মাত্রায় সক্রিয় হয় (Nocturnal periodicity)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-50",
    "dayId": 6,
    "topic": "Holistic Health - Nutrition Outcomes",
    "difficulty": "EASY",
    "question": "A good nutrition helps in maintaining:",
    "options": [
      "Only dental enamel thickness",
      "Both physical and mental health",
      "Only skeletal bone length",
      "Only body fat stores"
    ],
    "correctIndex": 1,
    "explanationEn": "Adequate balanced nutrition provides the macro- and micronutrients required for optimal somatic growth, immune defenses, neurotransmitter synthesis, and cognitive well-being.",
    "explanationBn": "সুষম পুষ্টি একজন মানুষের শারীরিক ও মানসিক উভয় প্রকার স্বাস্থ্য (Both physical and mental health) সুন্দর ও সুস্থ রাখতে অপরিহার্য।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-51",
    "dayId": 20,
    "topic": "Lymphatic Filariasis Progression",
    "difficulty": "MEDIUM",
    "question": "The symptom of elephantiasis (chronic obstructive lesions) is seen after how many years from the onset of the first acute attack?",
    "options": [
      "1–2 years",
      "3–5 years",
      "10–15 years",
      "30–40 years"
    ],
    "correctIndex": 2,
    "explanationEn": "Chronic obstructive lymphatic filariasis (elephantiasis, hydrocele) is a late manifestation that typically evolves over 10 to 15 years of repeated microfilarial lymphangitis and lymphatic vessel fibrosis.",
    "explanationBn": "প্রথম তীব্র সংক্রমণের প্রায় ১০ থেকে ১৫ বছর (10–15 years) পর লিম্ফনালী স্থায়ীভাবে বন্ধ হয়ে হাতির পায়ের মতো ফোলা বা এলিফ্যান্টিয়াসিস দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-52",
    "dayId": 20,
    "topic": "Determinants of Health - Ecological Model",
    "difficulty": "EASY",
    "question": "Which determinant of health believes that if the environment is favorable to the individual, he can make full use of his physical and mental capabilities?",
    "options": [
      "Genetics",
      "Environment",
      "Commercial marketing",
      "Astrological signs"
    ],
    "correctIndex": 1,
    "explanationEn": "The environmental determinant theory emphasizes that physical, biological, and psychosocial environments must be clean, safe, and nurturing for individuals to achieve optimal potential.",
    "explanationBn": "পরিবেশগত তত্ত্ব অনুযায়ী অনুকূল পরিবেশ (Environment) মানুষের শারীরিক ও মানসিক সম্ভাবনার পূর্ণ বিকাশে সাহায্য করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-53",
    "dayId": 6,
    "topic": "Social Determinants of Nutrition",
    "difficulty": "MEDIUM",
    "question": "Which is NOT typically considered a social determinant of nutritional status?",
    "options": [
      "Income level of the household",
      "Maternal education",
      "Cultural food taboos",
      "Genetic factors"
    ],
    "correctIndex": 3,
    "explanationEn": "Income, education, and cultural customs are social determinants, whereas inborn chromosomal and DNA variations are biological/genetic determinants.",
    "explanationBn": "আর্থিক অবস্থা, শিক্ষা এবং সংস্কৃতি সামাজিক নিয়ামক হলেও জিনগত বৈশিষ্ট্য (Genetic factors) হলো জৈবিক নিয়ামক।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-54",
    "dayId": 20,
    "topic": "Secondary Prevention Examples",
    "difficulty": "EASY",
    "question": "Which activity is an example of secondary prevention?",
    "options": [
      "Immunizing an infant against measles",
      "A 50-year-old woman with no history of disease attends screening",
      "Teaching proper handwashing to school children",
      "Physical therapy rehabilitation after a major stroke"
    ],
    "correctIndex": 1,
    "explanationEn": "Screening asymptomatic individuals for occult disease (e.g., mammography, Pap smear, blood pressure checks) is the hallmark of secondary prevention.",
    "explanationBn": "সুস্থ ব্যক্তির রুটিন স্বাস্থ্য পরীক্ষা বা স্ক্রিনিং (Attends screening)-এ অংশ নেওয়া হলো সেকেন্ডারি প্রিভেনশনের উৎকৃষ্ট উদাহরণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-55",
    "dayId": 20,
    "topic": "WHO Definition of Health",
    "difficulty": "EASY",
    "question": "Which is the most comprehensive definition of health?",
    "options": [
      "Health is merely the absence of disease or infirmity",
      "Health is a holistic state that includes physical, mental, and social well-being",
      "Health is having a normal body weight",
      "Health is ability to run a marathon"
    ],
    "correctIndex": 1,
    "explanationEn": "WHO defines health as 'a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.'",
    "explanationBn": "বিশ্ব স্বাস্থ্য সংস্থা (WHO)-র সংজ্ঞা মতে স্বাস্থ্য হলো সম্পূর্ণ শারীরিক, মানসিক ও সামাজিক মঙ্গলজনক অবস্থা (Physical, mental, and social well-being)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-56",
    "dayId": 20,
    "topic": "Special Needs Health Communication",
    "difficulty": "EASY",
    "question": "Which is the best method to ensure health messages reach people with hearing impairments?",
    "options": [
      "Radio megaphone announcements",
      "Visual materials with clear illustrations",
      "Loud shouting into ears",
      "Whispering during consultations"
    ],
    "correctIndex": 1,
    "explanationEn": "Individuals with severe hearing impairments benefit most from clear visual aids, sign language interpretation, captioned videos, and illustrated brochures.",
    "explanationBn": "শ্রবণ প্রতিবন্ধী মানুষের কাছে স্বাস্থ্য বার্তা পৌঁছে দেওয়ার সর্বোত্তম মাধ্যম হলো ছবিযুক্ত দৃশ্যমান সামগ্রী (Visual materials with clear illustrations)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-57",
    "dayId": 10,
    "topic": "Lipid Profile & Coronary Heart Disease",
    "difficulty": "EASY",
    "question": "Increased risk of coronary heart disease and atherosclerosis is due to an increase in:",
    "options": [
      "HDL cholesterol",
      "LDL cholesterol",
      "Serum albumin",
      "Hemoglobin A1c below 5%"
    ],
    "correctIndex": 1,
    "explanationEn": "Low-Density Lipoprotein (LDL) is atherogenic; elevated LDL particles infiltrate the arterial intima, undergo oxidation, and promote atheromatous plaque formation.",
    "explanationBn": "রক্তে ক্ষতিকর এলডিএল কোলেস্টেরল (LDL cholesterol) বেড়ে গেলে ধমনিতে চর্বি জমে হৃদরোগ ও অ্যাথেরোস্ক্লেরোসিসের ঝুঁকি বহুগুণ বেড়ে যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-58",
    "dayId": 6,
    "topic": "ICMR Nutritional Requirements - Calcium",
    "difficulty": "MEDIUM",
    "question": "What is the recommended daily calcium requirement for a sedentary Indian woman?",
    "options": [
      "100 mg/d",
      "300 mg/d",
      "600 mg/d",
      "1500 mg/d"
    ],
    "correctIndex": 2,
    "explanationEn": "According to ICMR-NIN nutrient requirements, the daily dietary calcium allowance for an adult Indian woman is 600 mg/day (rising to 1200 mg/day during pregnancy/lactation).",
    "explanationBn": "ICMR নির্দেশিকা অনুযায়ী একজন প্রাপ্তবয়স্ক ভারতীয় নারীর দৈনিক ক্যালসিয়ামের চাহিদা হলো ৬০০ মিলিগ্রাম/দিন (600 mg/d)।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-59",
    "dayId": 20,
    "topic": "National Health Mission - JSY Scheme",
    "difficulty": "EASY",
    "question": "Janani Suraksha Yojana (JSY) is a safe motherhood intervention under:",
    "options": [
      "National Rural Health Mission (NRHM)",
      "Employees' State Insurance Scheme",
      "Smart Cities Mission",
      "Clean India Mission"
    ],
    "correctIndex": 0,
    "explanationEn": "Janani Suraksha Yojana (JSY), launched under NRHM in 2005, promotes institutional delivery among poor pregnant women through conditional direct cash transfers.",
    "explanationBn": "জননী সুরক্ষা যোজনা (JSY) হলো জাতীয় গ্রামীণ স্বাস্থ্য মিশন (NRHM)-এর অধীনে নিরাপদ মাতৃত্ব ও হাসপাতালে প্রসব বাড়ানোর একটি যুগান্তকারী প্রকল্প।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-60",
    "dayId": 20,
    "topic": "Foodborne Infections - Salmonellosis",
    "difficulty": "EASY",
    "question": "Salmonellosis infection is transmitted through:",
    "options": [
      "Airborne respiratory droplets",
      "Contaminated food and water",
      "Direct skin-to-skin touch",
      "Mosquito vector bites"
    ],
    "correctIndex": 1,
    "explanationEn": "Non-typhoidal and typhoidal Salmonella enterica strains are transmitted via the feco-oral route through contaminated drinking water, undercooked poultry, and unpasteurized milk.",
    "explanationBn": "সালমোনেলোসিস ব্যাক্টেরিয়া মূলত দূষিত খাদ্য এবং পানির (Contaminated food and water) মাধ্যমে শরীরে প্রবেশ করে পেটের রোগ সৃষ্টি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-61",
    "dayId": 6,
    "topic": "Nutritional Science - Calorific Value",
    "difficulty": "EASY",
    "question": "The amount of heat energy liberated by burning 1 gm of foodstuff completely in the presence of O2 is called:",
    "options": [
      "Specific dynamic action",
      "Calorific value",
      "Respiratory quotient",
      "Basal metabolic rate"
    ],
    "correctIndex": 1,
    "explanationEn": "The gross calorific value (measured via bomb calorimetry) is the amount of heat energy produced by the complete oxidation of 1 gram of foodstuff in oxygen.",
    "explanationBn": "অক্সিজেনের উপস্থিতিতে ১ গ্রাম খাদ্য সম্পূর্ণরূপে দহন করলে যে পরিমাণ তাপশক্তি নির্গত হয় তাকে ওই খাদ্যের ক্যালোরিফিক মান (Calorific value) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-62",
    "dayId": 20,
    "topic": "Disaster Management Priorities",
    "difficulty": "EASY",
    "question": "Which is the most immediate priority in assessing disaster impact on a community?",
    "options": [
      "Assessing damage to real estate values",
      "Threat to human life and safety",
      "Counting destroyed private vehicles",
      "Restoring entertainment broadcasts"
    ],
    "correctIndex": 1,
    "explanationEn": "Human life preservation, search, rescue, triage, and emergency medical care are the immediate and overriding priorities in any disaster situation.",
    "explanationBn": "যেকোনো দুর্যোগে ক্ষয়ক্ষতি মূল্যায়নের সময় মানুষের জীবন ও শারীরিক নিরাপত্তা রক্ষা করাই হলো তাৎক্ষণিক সর্বোচ্চ অগ্রাধিকার।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-63",
    "dayId": 20,
    "topic": "National Vector Borne Disease Control - Malaria",
    "difficulty": "MEDIUM",
    "question": "Which diagnostic method is recommended as the gold standard for malaria diagnosis under the National Programme?",
    "options": [
      "Rapid urine dipstick",
      "Microscopic examination of blood smears",
      "Chest radiography",
      "Stool culture for ova"
    ],
    "correctIndex": 1,
    "explanationEn": "Light microscopy of Giemsa-stained thick and thin peripheral blood smears remains the recognized gold standard for confirming plasmodium species and quantifying parasite density.",
    "explanationBn": "জাতীয় ম্যালেরিয়া নিয়ন্ত্রণ কর্মসূচিতে রক্তের স্মিয়ার মাইক্রোস্কোপে পরীক্ষা করাকে (Microscopic examination of blood smears) গোল্ড স্ট্যান্ডার্ড হিসেবে গণ্য করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-chn-64",
    "dayId": 6,
    "topic": "Macronutrient Classification",
    "difficulty": "EASY",
    "question": "Foods rich in carbohydrates and fats are called:",
    "options": [
      "Body building foods",
      "Energy yielding",
      "Protective foods",
      "Regulatory foods"
    ],
    "correctIndex": 1,
    "explanationEn": "Carbohydrates and lipids are primarily oxidized to generate ATP energy for cellular processes, categorizing them as energy-yielding foods.",
    "explanationBn": "কার্বোহাইড্রেট ও ফ্যাট সমৃদ্ধ খাদ্য উপাদানগুলোকে শক্তিদায়ী খাদ্য বা এনার্জি ইল্ডিং (Energy yielding foods) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-1",
    "dayId": 18,
    "topic": "Neonatal Jaundice - Physiological",
    "difficulty": "EASY",
    "question": "Which is a common cause of physiological jaundice in a newborn?",
    "options": [
      "Immature liver function",
      "Biliary atresia",
      "Rh incompatibility with hydrops",
      "Congenital galactosemia"
    ],
    "correctIndex": 0,
    "explanationEn": "Physiological jaundice peaks around day 3-5 in term neonates due to transient immaturity of hepatic UDP-glucuronosyltransferase enzyme, high red cell turnover, and sterile gut.",
    "explanationBn": "নবজাতকের ফিজিওলজিক্যাল জন্ডিসের প্রধান কারণ হলো লিভার বা যকৃতের এনজাইমের অপরিপক্কতা (Immature liver function)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-2",
    "dayId": 18,
    "topic": "Child Development Domains",
    "difficulty": "EASY",
    "question": "Which development type deals with managing and expressing feelings?",
    "options": [
      "Gross motor development",
      "Emotional development",
      "Fine motor development",
      "Spatial development"
    ],
    "correctIndex": 1,
    "explanationEn": "Emotional development encompasses the child's developing capacity to identify, express, regulate, and cope with feelings and emotional responses.",
    "explanationBn": "নিজের অনুভূতি ও আবেগকে প্রকাশ ও নিয়ন্ত্রণ করার প্রক্রিয়াকে মানসিক ও আবেগীয় বিকাশ (Emotional development) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-3",
    "dayId": 18,
    "topic": "Pediatric Mental Health Influences",
    "difficulty": "EASY",
    "question": "Which social factor has recently emerged as a significant challenge in ensuring child mental health?",
    "options": [
      "Rising exposure to social media",
      "Universal free primary education",
      "Access to clean drinking water",
      "Routine MMR vaccination"
    ],
    "correctIndex": 0,
    "explanationEn": "Excessive screen time and unmonitored social media usage in children and adolescents are strongly associated with anxiety, depression, sleep disturbances, cyberbullying, and low self-esteem.",
    "explanationBn": "বর্তমানে শিশুদের মানসিক স্বাস্থ্যের অন্যতম প্রধান সামাজিক ঝুঁকি হলো সোশ্যাল মিডিয়ার মাত্রাতিরিক্ত ব্যবহার ও প্রভাব।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-4",
    "dayId": 19,
    "topic": "Neonatal Hypothermia Prevention",
    "difficulty": "EASY",
    "question": "If a sick newborn is unable to maintain body temperature, which nursing measure is most effective to prevent hypothermia?",
    "options": [
      "Bathing the neonate in cool water",
      "Use of radiant warmer or incubator",
      "Opening windows to increase air circulation",
      "Wrapping neonate in thin wet sheets"
    ],
    "correctIndex": 1,
    "explanationEn": "A servocontrolled radiant warmer or closed incubator provides an optimal neutral thermal environment, preventing non-shivering thermogenesis exhaustion and cold stress.",
    "explanationBn": "অসুস্থ নবজাতকের তাপমাত্রা কমে যাওয়া (Hypothermia) রোধে তাকে অবিলম্বে রেডিয়েন্ট ওয়ার্মার বা ইনকিউবেটরে রাখা সবচেয়ে কার্যকর।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-5",
    "dayId": 18,
    "topic": "Primitive Reflexes - Palmar Grasp",
    "difficulty": "HARD",
    "question": "When assessing a 7-month-old infant, which finding is considered the most significant red flag for neurological dysfunction?",
    "options": [
      "Babbling consonant sounds",
      "Persistence of the palmar grasp reflex",
      "Absence of first tooth eruption",
      "Stranger anxiety presence"
    ],
    "correctIndex": 1,
    "explanationEn": "The palmar grasp reflex normally disappears by 3 to 4 months of age as cortical motor tracts mature; its persistence at 7 months suggests upper motor neuron dysfunction or cerebral palsy.",
    "explanationBn": "হাতের তালুর গ্রাস্প রিফ্লেক্স ৩-৪ মাসের মধ্যে চলে যায়; ৭ মাস বয়সেও এটি বজায় থাকা স্নায়বিক ত্রুটির একটি বড় সংকেত (Red flag)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-6",
    "dayId": 19,
    "topic": "Pediatric Safe Drug Dosing",
    "difficulty": "EASY",
    "question": "When planning care for a pediatric patient, which parameter should the nurse prioritize to ensure safe drug dosing?",
    "options": [
      "Child's height only",
      "Weight of the child",
      "Number of siblings in family",
      "School attendance grade"
    ],
    "correctIndex": 1,
    "explanationEn": "Pediatric medication dosages are calculated primarily based on the child's body weight (mg/kg) or body surface area (BSA) to prevent drug underdosing or fatal toxicity.",
    "explanationBn": "শিশুদের ওষুধের সঠিক ও নিরাপদ মাত্রা নির্ধারণে সর্বদা শিশুর ওজন (Weight of the child) অনুযায়ী গণনা করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-7",
    "dayId": 18,
    "topic": "Infantile Reflexes - Moro Reflex",
    "difficulty": "MEDIUM",
    "question": "Persistence of which reflex beyond 6 months may indicate a neurological abnormality?",
    "options": [
      "Tendon jerk",
      "Moro reflex",
      "Pupillary reflex",
      "Gag reflex"
    ],
    "correctIndex": 1,
    "explanationEn": "The Moro reflex normally integrates and disappears by 4 to 6 months; its persistence beyond 6 months indicates delayed central nervous system maturation or cerebral pathology.",
    "explanationBn": "মোরো রিফ্লেক্স (Moro reflex) ৬ মাসের বেশি সময় স্থায়ী হলে তা শিশুর মস্তিষ্কের স্নায়বিক সমস্যার লক্ষণ হতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-8",
    "dayId": 19,
    "topic": "Pediatric Endocrinology - Type 1 Diabetes",
    "difficulty": "MEDIUM",
    "question": "In managing a child with Type 1 Diabetes Mellitus, which combination is essential for effective care?",
    "options": [
      "Oral sulfonylureas alone and bed rest",
      "Insulin therapy and blood glucose monitoring",
      "Strict sugar starvation without insulin",
      "Fluid restriction and high-protein powder only"
    ],
    "correctIndex": 1,
    "explanationEn": "Type 1 diabetes involves complete autoimmune destruction of pancreatic beta cells; exogenous insulin replacement coupled with frequent blood glucose monitoring is mandatory for survival.",
    "explanationBn": "শিশুদের টাইপ ১ ডায়াবেটিসের ক্ষেত্রে নিয়মিত ইনসুলিন ইনজেকশন ও রক্তে গ্লুকোজের মাত্রা পর্যবেক্ষণ (Insulin therapy and blood glucose monitoring) অপরিহার্য।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-9",
    "dayId": 19,
    "topic": "Levels of Neonatal Intensive Care",
    "difficulty": "MEDIUM",
    "question": "A newborn with respiratory distress syndrome requiring mechanical ventilation is admitted. Which level of NICU care is required?",
    "options": [
      "Level I",
      "Level II",
      "Level III",
      "Level IV home care"
    ],
    "correctIndex": 2,
    "explanationEn": "Level III NICU provides continuous advanced life support, sustained mechanical ventilation, invasive monitoring, and surfactant administration for critically ill neonates.",
    "explanationBn": "রেসপিরেটরি ডিসট্রেস সিন্ড্রোমে আক্রান্ত ভেন্টিলেটর প্রয়োজন এমন নবজাতকের জন্য লেভেল ৩ NICU (Level III NICU) পরিচর্যা আবশ্যক।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-10",
    "dayId": 18,
    "topic": "Psychosocial Development - Erikson",
    "difficulty": "MEDIUM",
    "question": "Which scenario best illustrates Erikson's industry versus inferiority stage in school-age children?",
    "options": [
      "An infant crying when hungry",
      "A child feels proud after completing a group project",
      "A toddler refusing to wear shoes",
      "An adolescent searching for vocational identity"
    ],
    "correctIndex": 1,
    "explanationEn": "In Erikson's Industry vs. Inferiority stage (6-12 years), children develop competence and self-confidence through completing intellectual, academic, and collaborative tasks.",
    "explanationBn": "স্কুল বয়সের শিশুদের দলগত প্রোজেক্ট সম্পন্ন করে গর্ব ও আত্মবিশ্বাস অনুভব করা এরিকসনের ইন্ডাস্ট্রি বনাম ইনফিরিওরিটি পর্যায়ের উদাহরণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-11",
    "dayId": 19,
    "topic": "Emergency Pediatric Hypoglycemia",
    "difficulty": "EASY",
    "question": "A school-aged child with Type 1 diabetes feels dizzy and sweaty during recess. What is the best initial nursing action?",
    "options": [
      "Administer regular subcutaneous insulin",
      "Provide a fast-acting carbohydrate snack",
      "Instruct the child to run more laps",
      "Have child lie down without food for 1 hour"
    ],
    "correctIndex": 1,
    "explanationEn": "Diaphoresis, tremors, and dizziness in a diabetic child indicate hypoglycemia; immediately providing 15 g of fast-acting oral carbohydrates (juice, candy, glucose tabs) is the priority.",
    "explanationBn": "ডায়াবেটিসে আক্রান্ত শিশুর মাথা ঘোরা ও ঘাম হলে দ্রুত মুখে সহজে শোষণযোগ্য মিষ্টি বা গ্লুকোজ (Fast-acting carbohydrate snack) খাওয়াতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-12",
    "dayId": 18,
    "topic": "Scope of Pediatric Nursing",
    "difficulty": "EASY",
    "question": "Which age group is mainly considered in pediatric nursing?",
    "options": [
      "Adults aged 20 to 40",
      "Geriatric patients above 65",
      "Newborns to adolescents",
      "Prenatal mothers only"
    ],
    "correctIndex": 2,
    "explanationEn": "Pediatric nursing encompasses healthcare delivery from birth (neonates) through infancy, toddlerhood, preschool, school age, and adolescence up to 18 years.",
    "explanationBn": "পেডিয়াট্রিক বা শিশু স্বাস্থ্য নার্সিংয়ের আওতা হলো নবজাতক থেকে শুরু করে কৈশোর বয়স পর্যন্ত (Newborns to adolescents)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-13",
    "dayId": 19,
    "topic": "Preterm Neonatal Feeding Techniques",
    "difficulty": "MEDIUM",
    "question": "When instructing parents on cup feeding for a preterm infant, which advice ensures effective feeding and reduces choking risk?",
    "options": [
      "Pour the milk rapidly into the infant's pharynx",
      "Allow the infant to sip at their own pace",
      "Force the cup into the baby's mouth while supine",
      "Feed only while the infant is sleeping"
    ],
    "correctIndex": 1,
    "explanationEn": "In cup feeding, the cup is tipped so milk touches the lower lip; the infant uses their tongue to lap/sip at their own coordinated pace, preventing aspiration.",
    "explanationBn": "প্রিটার্ম শিশুকে কাপে দুধ খাওয়ানোর সময় কাপের দুধ শিশুর ঠোঁটে আলতো করে ছোঁয়াতে হবে যাতে শিশু নিজের গতিতে চুমুক দিতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-14",
    "dayId": 18,
    "topic": "Newborn Vitality Assessment",
    "difficulty": "EASY",
    "question": "Which is an important sign of a healthy newborn?",
    "options": [
      "Weak whimpering sound",
      "Strong cry",
      "Persistent generalized cyanosis",
      "Limp flaccid muscle tone"
    ],
    "correctIndex": 1,
    "explanationEn": "A lusty, vigorous, strong cry at birth demonstrates adequate lung expansion, patent upper airway, and robust neurological vigor (scoring 2 on APGAR respiratory effort).",
    "explanationBn": "একটি সুস্থ নবজাতকের সবচেয়ে প্রধান আশ্বস্তকারী লক্ষণ হলো জন্মের পরেই উচ্চস্বরে সজোরে কান্না (Strong cry) করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-15",
    "dayId": 19,
    "topic": "Neonatal Enteral Feeding Complications",
    "difficulty": "EASY",
    "question": "During orogastric feeding in a neonate, the nurse observes coughing and cyanosis. Immediate response?",
    "options": [
      "Speed up the feeding to finish quickly",
      "Stop the feeding and assess airway patency immediately",
      "Turn neonate prone and continue feeding",
      "Dilute the milk formula with tap water"
    ],
    "correctIndex": 1,
    "explanationEn": "Coughing, choking, and cyanosis during tube feeding suggest pulmonary aspiration or tube displacement; the nurse must immediately stop the feed and clear the airway.",
    "explanationBn": "টিউবে দুধ খাওয়ানোর সময় নবজাতক কেশে উঠলে বা নীল হয়ে গেলে সাথে সাথে ফিডিং বন্ধ করে শ্বাসনালী পরীক্ষা ও পরিষ্কার করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-16",
    "dayId": 20,
    "topic": "Under-Five Clinic Interventions",
    "difficulty": "EASY",
    "question": "A nurse at an under-five clinic observes a child with below-average growth and missed immunizations. Most appropriate intervention?",
    "options": [
      "Refer the child to a punitive correction board",
      "Educate parents on nutrition and immunizations",
      "Withhold all future health checkups",
      "Isolate the child permanently from other children"
    ],
    "correctIndex": 1,
    "explanationEn": "The primary preventive focus of under-five clinics is counseling parents on nutritious supplementary feeding and updating overdue vaccinations.",
    "explanationBn": "পাঁচ বছরের কম বয়সী শিশুর সঠিক বৃদ্ধি না হলে এবং টিকা বাদ পড়লে অভিভাবকদের পুষ্টিকর খাবার ও টিকার গুরুত্ব বুঝিয়ে সচেতন করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-17",
    "dayId": 19,
    "topic": "Autism Spectrum Disorder Parental Guidance",
    "difficulty": "MEDIUM",
    "question": "Which psychoeducation approach is most likely to improve parental support for a child with Autism Spectrum Disorder (ASD)?",
    "options": [
      "Constantly changing daily schedules without warning",
      "Encouraging consistent routines and positive reinforcement",
      "Using punitive physical isolation for sensory behaviors",
      "Discouraging any communication attempts"
    ],
    "correctIndex": 1,
    "explanationEn": "Children with ASD thrive on structured predictability; maintaining consistent daily schedules, visual schedules, and rewarding positive behaviors minimizes meltdowns and promotes learning.",
    "explanationBn": "অটিজম আক্রান্ত শিশুর বিকাশে প্রতিদিনের একটি নির্দিষ্ট রুটিন বজায় রাখা এবং ইতিবাচক কাজের প্রশংসা (Positive reinforcement) অত্যন্ত ফলপ্রসূ।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-18",
    "dayId": 19,
    "topic": "Neonatal Hyperbilirubinemia Nursing Action",
    "difficulty": "MEDIUM",
    "question": "A healthy newborn is found with mild jaundice 24 hours after birth. Best initial nursing action?",
    "options": [
      "Immediately perform exchange transfusion",
      "Continue regular feeding and monitor the jaundice",
      "Administer high-dose phenobarbital",
      "Stop all breast milk permanently"
    ],
    "correctIndex": 1,
    "explanationEn": "Frequent feeding (8-12 times daily) enhances intestinal peristalsis and stooling, clearing bilirubin. The nurse monitors bilirubin progression from cephalocaudal direction.",
    "explanationBn": "২৪ ঘণ্টার পর হালকা জন্ডিস দেখা দিলে নবজাতককে ঘন ঘন দুধ পান করানো চালিয়ে যেতে হবে এবং জন্ডিস বাড়ছে কি না তা নিবিড়ভাবে পর্যবেক্ষণ করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-19",
    "dayId": 2,
    "topic": "Pediatric Medication Administration Positions",
    "difficulty": "EASY",
    "question": "Which is the most appropriate position for a child during rectal suppository administration?",
    "options": [
      "Prone with legs straight",
      "Sims",
      "Standing upright",
      "High Fowler's"
    ],
    "correctIndex": 1,
    "explanationEn": "The left lateral Sims' position (lying on left side with upper leg flexed) relaxes the anal sphincter and exposes the anus for safe, gentle rectal suppository insertion.",
    "explanationBn": "শিশুকে মলদ্বারে সাপোজিটরি দেওয়ার সময় সবচেয়ে উপযুক্ত অবস্থান হলো বাঁ কাত হয়ে শোয়ানো বা সিমস পজিশন (Sims position)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-20",
    "dayId": 18,
    "topic": "Preventive Pediatrics Goals",
    "difficulty": "EASY",
    "question": "Which best describes preventive pediatric care in child health nursing?",
    "options": [
      "Treating end-stage congenital failure only",
      "Promoting health and preventing disease in children",
      "Hospitalizing all children annually",
      "Performing routine surgical exploratory laparotomies"
    ],
    "correctIndex": 1,
    "explanationEn": "Preventive pediatrics focuses on health promotion, growth monitoring, developmental surveillance, immunization, and nutritional guidance to avert illness.",
    "explanationBn": "শিশু স্বাস্থ্য পরিচর্যায় প্রিভেন্টিভ কেয়ারের মূল কথা হলো শিশুদের সুস্বাস্থ্য বজায় রাখা এবং রোগের আক্রমণ প্রতিহত করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-21",
    "dayId": 18,
    "topic": "Developmental Milestones at 6 Months",
    "difficulty": "MEDIUM",
    "question": "Which assessment finding strongly suggests a 6-month-old infant is meeting expected developmental milestones?",
    "options": [
      "Speaking three full word sentences",
      "The infant is able to sit with support and transfers objects between hands",
      "Running across the room independently",
      "Tying shoelaces without assistance"
    ],
    "correctIndex": 1,
    "explanationEn": "By 6 months of age, an infant typically sits with support, rolls both ways, babbles, reaches for toys, and transfers objects from one hand to the other.",
    "explanationBn": "৬ মাস বয়সের শিশুর স্বাভাবিক বিকাশের বড় লক্ষণ হলো কারো সাহায্য নিয়ে বসতে পারা এবং এক হাত থেকে অন্য হাতে জিনিস বদল করতে পারা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-22",
    "dayId": 11,
    "topic": "Pediatric Inhalation Therapy",
    "difficulty": "EASY",
    "question": "A 5-year-old child is prescribed nebulization for acute bronchospasm. Which nursing action best ensures effective medication delivery?",
    "options": [
      "Having the child hold breath for 5 minutes",
      "Ensuring the child breathes slowly and deeply during nebulization",
      "Administering nebulizer while the child is vigorously screaming",
      "Holding the mask 10 inches away from face"
    ],
    "correctIndex": 1,
    "explanationEn": "Slow, deep inspiratory breaths maximize aerosol penetration and deposition into peripheral tracheobronchial airways, relieving bronchospasm.",
    "explanationBn": "নেবুলাইজারের ওষুধ ফুসফুসে সঠিকভাবে পৌঁছানোর জন্য শিশুকে ধীরে ধীরে ও গভীরভাবে শ্বাস নিতে সাহায্য করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-23",
    "dayId": 19,
    "topic": "Congenital Renal Anomalies",
    "difficulty": "MEDIUM",
    "question": "When one kidney fails to develop while the other is normal in size, position, and function, this congenital disease is called:",
    "options": [
      "Polycystic kidney disease",
      "Renal agenesis",
      "Hydronephrosis",
      "Wilms tumor"
    ],
    "correctIndex": 1,
    "explanationEn": "Unilateral renal agenesis is the complete congenital absence of development of one kidney due to failure of ureteric bud outgrowth from the mesonephric duct.",
    "explanationBn": "জন্মগতভাবে একটি কিডনি তৈরি না হওয়া এবং অন্যটি স্বাভাবিক থাকাকে রেনাল এজেনেসিস (Renal agenesis) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-24",
    "dayId": 19,
    "topic": "Pediatric Neuroimaging - Hydrocephalus",
    "difficulty": "EASY",
    "question": "Which diagnostic tool is most commonly used to confirm hydrocephalus?",
    "options": [
      "Barium swallow",
      "CT scan",
      "Electromyography",
      "Bone marrow biopsy"
    ],
    "correctIndex": 1,
    "explanationEn": "Cranial CT (or MRI / transfontanellar ultrasound in infants) visualizes dilated cerebral ventricles, assesses obstruction sites, and confirms hydrocephalus.",
    "explanationBn": "শিশুর মাথায় পানি জমা বা হাইড্রোসেফালাস নিশ্চিত করার জন্য সিটি স্ক্যান (CT scan) একটি বহুল ব্যবহৃত ও নির্ভরযোগ্য পরীক্ষা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-25",
    "dayId": 19,
    "topic": "Abdominal Wall Defects - Omphalocele",
    "difficulty": "MEDIUM",
    "question": "Which congenital anomaly is characterized by incomplete closure of the abdominal wall with protrusion of intestines covered by a protective membrane?",
    "options": [
      "Gastroschisis",
      "Omphalocele",
      "Inguinal hernia",
      "Diaphragmatic hernia"
    ],
    "correctIndex": 1,
    "explanationEn": "Omphalocele is a midline abdominal wall defect at the base of the umbilicus where herniated viscera are enclosed within a protective translucent peritoneal-amniotic sac.",
    "explanationBn": "নাভির মধ্য দিয়ে পেটের ভেতরের অঙ্গ একটি পাতলা ঝিল্লি বা পর্দা দ্বারা আবৃত হয়ে বেরিয়ে আসাকে ওমফ্যালোসিল (Omphalocele) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-26",
    "dayId": 17,
    "topic": "Pediatric Genetics & Preimplantation Options",
    "difficulty": "MEDIUM",
    "question": "Which reproductive option should be informed to parents in a pediatric genetic counseling session for future decision-making?",
    "options": [
      "Consanguineous marriage encouragement",
      "Preimplantation genetic testing",
      "Avoiding all prenatal diagnostic scans",
      "Terminating all future spontaneous pregnancies"
    ],
    "correctIndex": 1,
    "explanationEn": "Preimplantation genetic testing (PGT) allows couples who are carriers of fatal single-gene or chromosomal disorders to select unaffected embryos prior to implantation.",
    "explanationBn": "বংশগত রোগ এড়াতে ভবিষ্যৎ সন্তান ধারণের ক্ষেত্রে প্রিইমপ্ল্যান্টেশন জেনেটিক টেস্টিং (Preimplantation genetic testing)-এর পরামর্শ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-27",
    "dayId": 18,
    "topic": "Universal Immunization - Hepatitis B Site",
    "difficulty": "EASY",
    "question": "The site of administration of Hepatitis B vaccine to a newborn is:",
    "options": [
      "Upper arm deltoid muscle",
      "Antero-lateral aspect of mid-thigh",
      "Dorsogluteal muscle",
      "Forearm volar aspect"
    ],
    "correctIndex": 1,
    "explanationEn": "In neonates and infants under 1 year, intramuscular vaccines (such as Hepatitis B, Pentavalent, PCV) are administered strictly into the anterolateral aspect of the mid-thigh (vastus lateralis).",
    "explanationBn": "নবজাতককে হেপাটাইটিস বি টিকা উরুর সম্মুখ-পার্শ্ববর্তী অংশের মাঝখানে (Antero-lateral aspect of mid-thigh বা ভাস্টাস ল্যাটেরালিস)-এ দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-28",
    "dayId": 19,
    "topic": "Aerosol Therapy Adverse Effects",
    "difficulty": "MEDIUM",
    "question": "Which is a potential complication of frequent nebulization therapy in pediatric patients?",
    "options": [
      "Bradycardia and hypothermia",
      "Tremors and tachycardia",
      "Profound sedation and pinpoint pupils",
      "Hypotension and anuria"
    ],
    "correctIndex": 1,
    "explanationEn": "Beta-2 adrenergic bronchodilators (e.g., salbutamol/albuterol) frequently stimulate peripheral and cardiac beta-receptors, causing fine muscle tremors and reflex sinus tachycardia.",
    "explanationBn": "বারবার সালবিউটামল দিয়ে নেবুলাইজেশন করলে শিশুর শরীরে কাঁপুনি এবং হার্টবিট বেড়ে যাওয়া (Tremors and tachycardia) দেখা দিতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-29",
    "dayId": 17,
    "topic": "Clinical Genetics Documentation",
    "difficulty": "EASY",
    "question": "Which assessment tool is commonly used to document family genetic history?",
    "options": [
      "Snellen chart",
      "Pedigree chart",
      "Braden scale",
      "Partograph"
    ],
    "correctIndex": 1,
    "explanationEn": "A pedigree chart (family genogram) uses standardized symbols across three or more generations to visually trace inheritance patterns of genetic disorders.",
    "explanationBn": "পরিবারের জিনগত রোগ ও বংশলতিকা লিপিবদ্ধ করার জন্য পেডিগ্রি চার্ট (Pedigree chart) ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-30",
    "dayId": 19,
    "topic": "Hydrocephalus Pathophysiology",
    "difficulty": "MEDIUM",
    "question": "A brain tumor located in the aqueduct of Sylvius causes hydrocephalus by:",
    "options": [
      "Excessive production of CSF by choroid plexus",
      "Obstructing the flow of CSF circulation",
      "Increasing venous reabsorption across arachnoid villi",
      "Dilating the spinal canal"
    ],
    "correctIndex": 1,
    "explanationEn": "The cerebral aqueduct (of Sylvius) is the narrow conduit connecting the third and fourth ventricles; its occlusion causes non-communicating (obstructive) hydrocephalus.",
    "explanationBn": "সিলভিয়াসের অ্যাকুইডাক্টে টিউমার হলে সেরিব্রোস্পাইনাল ফ্লুইড (CSF)-এর স্বাভাবিক প্রবাহ বন্ধ হয়ে মস্তিষ্কে পানি জমতে শুরু করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-31",
    "dayId": 18,
    "topic": "Child Guidance Clinic Education",
    "difficulty": "EASY",
    "question": "In the child guidance clinic, which is an important component of parent education?",
    "options": [
      "Strict corporal discipline drills",
      "Strengthening family interaction",
      "Encouraging parent isolation from children",
      "Promoting prolonged digital screen babysitting"
    ],
    "correctIndex": 1,
    "explanationEn": "Child guidance clinics emphasize healthy parent-child relationships, active listening, consistent emotional support, and strengthening positive family interactions.",
    "explanationBn": "চাইল্ড গাইডেন্স ক্লিনিকে পিতা-মাতার শিক্ষার মূল উদ্দেশ্য হলো পরিবারের সদস্যদের মধ্যে পারস্পরিক সুসম্পর্ক ও বোঝাপড়া বৃদ্ধি করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-32",
    "dayId": 19,
    "topic": "Hydrocephalus Clinical Signs - Sunset Sign",
    "difficulty": "HARD",
    "question": "What cranial nerve abnormality may be seen in children with chronic hydrocephalus?",
    "options": [
      "Loss of sense of smell (CN I)",
      "Impaired upward gaze ('sunset eyes') (CN III)",
      "Facial hemispasm (CN VII)",
      "Tongue deviation (CN XII)"
    ],
    "correctIndex": 1,
    "explanationEn": "Elevated intracranial pressure and tectal plate compression in hydrocephalus impair upward conjugate gaze, producing the classic 'setting sun' eye sign (CN III / midbrain tectum compression).",
    "explanationBn": "হাইড্রোসেফালাসে মস্তিষ্কে চাপ বৃদ্ধির কারণে শিশু উপরের দিকে তাকাতে পারে না এবং চোখ নিচের দিকে ঝুঁকে থাকে ('সূর্যাস্ত চোখ' বা Sunset eyes)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-33",
    "dayId": 19,
    "topic": "Pediatric Respiratory Assessment",
    "difficulty": "EASY",
    "question": "What is the most appropriate way to assess the effectiveness of nebulization therapy in a 4-year-old child?",
    "options": [
      "Check blood glucose levels",
      "Monitor oxygen saturation and respiratory rate",
      "Measure abdominal circumference",
      "Test urine for ketones"
    ],
    "correctIndex": 1,
    "explanationEn": "Evaluating pulse oximetry (SpO2), respiratory rate, work of breathing (retractions), and auscultating for decreased wheezing objectively gauge bronchodilator efficacy.",
    "explanationBn": "শিশুর নেবুলাইজেশনের কার্যকারিতা মূল্যায়নে সবচেয়ে নির্ভরযোগ্য উপায় হলো তার অক্সিজেন স্যাচুরেশন ও শ্বাসপ্রশ্বাসের গতি (SpO2 & RR) পরিমাপ করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ped-34",
    "dayId": 18,
    "topic": "Infant Anthropometric Growth Rates",
    "difficulty": "MEDIUM",
    "question": "The average increase in the head circumference of an infant from birth to 3 months is:",
    "options": [
      "0.5 cm/month",
      "2 cm/month",
      "4 cm/month",
      "6 cm/month"
    ],
    "correctIndex": 1,
    "explanationEn": "Infantile head circumference expands rapidly: approximately 2 cm/month during the first 3 months (total ~6 cm), then 1 cm/month from 3-6 months, and 0.5 cm/month from 6-12 months.",
    "explanationBn": "জন্ম থেকে প্রথম ৩ মাস বয়স পর্যন্ত একটি সুস্থ শিশুর মাথার পরিধি গড়ে প্রতি মাসে প্রায় ২ সেমি (2 cm/month) করে বৃদ্ধি পায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-1",
    "dayId": 1,
    "topic": "Nursing Records Quality Assurance",
    "difficulty": "MEDIUM",
    "question": "During a quality assurance review, incomplete nursing records are identified. Most appropriate interpretation by the nurse administrator?",
    "options": [
      "All nurses should be immediately terminated",
      "Documentation standards may be inconsistently followed",
      "Patient charting should be abolished in the hospital",
      "Patient outcomes are automatically zero"
    ],
    "correctIndex": 1,
    "explanationEn": "Incomplete records indicate gaps in adhering to professional clinical documentation standards, calling for root cause analysis, staff training, and audit feedback.",
    "explanationBn": "নার্সিং রেকর্ডে ত্রুটি থাকা ইঙ্গিত করে যে হাসপাতালে ডকুমেন্টেশনের নিয়মনীতি হয়তো ধারাবাহিকভাবে মানা হচ্ছে না (Standards inconsistently followed)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-2",
    "dayId": 1,
    "topic": "Therapeutic Environment",
    "difficulty": "EASY",
    "question": "Which action by a nurse contributes to a therapeutic environment?",
    "options": [
      "Ignoring patient call bells",
      "Listening to patient concerns",
      "Speaking loudly about personal issues at the nurse station",
      "Refusing to explain nursing procedures"
    ],
    "correctIndex": 1,
    "explanationEn": "Active, empathetic listening demonstrates respect, validates emotions, builds a therapeutic nurse-patient alliance, and alleviates patient anxiety.",
    "explanationBn": "রোগীর কষ্টের কথা মনোযোগ দিয়ে শোনা এবং সহানুভূতি প্রকাশ করা একটি উপযুক্ত থেরাপিউটিক পরিবেশ তৈরিতে সবচেয়ে বড় ভূমিকা রাখে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-3",
    "dayId": 22,
    "topic": "Educational Assessment - Bloom's Taxonomy",
    "difficulty": "HARD",
    "question": "An instructor wants to assess students' ability to prioritize nursing interventions in complex scenarios. Which method aligns best with Bloom's Taxonomy?",
    "options": [
      "Multiple choice rote memorization flashcards",
      "Simulation with role-play scenarios",
      "Simple true/false spelling tests",
      "Passive lecture listening"
    ],
    "correctIndex": 1,
    "explanationEn": "Clinical simulation and scenario role-play assess higher-order cognitive domains (Analysis, Synthesis, and Evaluation) under Bloom's Taxonomy.",
    "explanationBn": "ব্লুমের ট্যাক্সোনমি অনুযায়ী জটিল পরিস্থিতিতে অগ্রাধিকার নির্ধারণের দক্ষতা যাচাই করার সর্বোত্তম উপায় হলো সিমুলেশন ও রোল-প্লে পদ্ধতি।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-4",
    "dayId": 22,
    "topic": "Patient Safety - Root Cause Analysis",
    "difficulty": "MEDIUM",
    "question": "During a ward audit, medication errors have increased over the past month. Initial step for the nurse administrator?",
    "options": [
      "Publicly blame and shame junior nurses",
      "Conduct a root cause analysis meeting with nursing staff",
      "Conceal all medication records from the hospital board",
      "Stop administering all medications to patients"
    ],
    "correctIndex": 1,
    "explanationEn": "A non-punitive Root Cause Analysis (RCA) investigates systemic vulnerabilities (e.g., look-alike packaging, understaffing, fatigue) to prevent future errors.",
    "explanationBn": "ওষুধ প্রয়োগে ভুলের সংখ্যা বৃদ্ধি পেলে কাউকে দোষারোপ না করে মূল কারণ অনুসন্ধানের জন্য স্টাফদের সাথে রুট কজ অ্যানালাইসিস (Root cause analysis) করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-5",
    "dayId": 2,
    "topic": "Geriatric Environmental Safety",
    "difficulty": "EASY",
    "question": "What environmental modification should the nurse prioritize to promote safety for a confused elderly patient?",
    "options": [
      "Keeping floors waxed and highly slippery",
      "Ensuring clear pathways and adequate lighting",
      "Placing the bed at the highest possible level",
      "Keeping the room completely pitch black"
    ],
    "correctIndex": 1,
    "explanationEn": "Clear, uncluttered walking paths and adequate glare-free lighting prevent falls, spatial disorientation, and injury in confused geriatric patients.",
    "explanationBn": "মানসিকভাবে বিভ্রান্ত প্রবীণ রোগীর পড়ে গিয়ে আঘাত পাওয়া রোধে চলাচলের পথ পরিষ্কার রাখা এবং পর্যাপ্ত আলোর ব্যবস্থা নিশ্চিত করা সবচেয়ে জরুরি।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-6",
    "dayId": 22,
    "topic": "Ward Material Management - Inventory",
    "difficulty": "MEDIUM",
    "question": "Which best describes the purpose of maintaining a minimum stock level for critical ward supplies?",
    "options": [
      "To maximize storage clutter in hallways",
      "To prevent stock-outs",
      "To let medications expire on shelves",
      "To prevent junior nurses from accessing items"
    ],
    "correctIndex": 1,
    "explanationEn": "Establishing safety/minimum stock thresholds ensures emergency and vital consumables are continually available, preventing life-threatening supply stock-outs.",
    "explanationBn": "ওয়ার্ডে প্রয়োজনীয় সামগ্রীর ন্যূনতম স্টক (Minimum stock level) বজায় রাখার মূল উদ্দেশ্য হলো জিনিসপত্রের হঠাৎ ঘাটতি বা স্টক-আউট (To prevent stock-outs) রোধ করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-7",
    "dayId": 1,
    "topic": "Ethical Nursing Leadership",
    "difficulty": "MEDIUM",
    "question": "Following a newborn death, a midwife is involved in the review process. What action demonstrates ethical leadership?",
    "options": [
      "Altering medical records to hide errors",
      "Facilitating open discussion to identify root causes",
      "Refusing to participate in audit meetings",
      "Falsely blaming the family members"
    ],
    "correctIndex": 1,
    "explanationEn": "Ethical leadership fosters transparent, blameless psychological safety and facilitates open multidisciplinary dialogue to identify preventable factors and learn from adverse events.",
    "explanationBn": "নবজাতকের মৃত্যুর পর নৈতিক নেতৃত্বের পরিচয় হলো খোলামেলা পর্যালোচনার মাধ্যমে মৃত্যুর মূল কারণগুলো চিহ্নিত করে ভবিষ্যতে তা প্রতিরোধের ব্যবস্থা করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-8",
    "dayId": 2,
    "topic": "Basic Nursing Procedures - Oral Care",
    "difficulty": "MEDIUM",
    "question": "When providing oral care to an unconscious patient, what two key actions should be combined?",
    "options": [
      "Placing patient supine and pouring water into mouth",
      "Placing the patient in a side-lying position and using a soft toothbrush",
      "Using dry coarse gauze without lubrication",
      "Having the patient gargle and swallow"
    ],
    "correctIndex": 1,
    "explanationEn": "Side-lying (lateral) positioning allows secretions to drain out by gravity to prevent pulmonary aspiration, while a soft brush protects friable oral mucosa.",
    "explanationBn": "অজ্ঞান রোগীর মুখের যত্ন নেওয়ার সময় রোগীকে কাত করে শোয়ানো (Side-lying position) এবং নরম টুথব্রাশ ব্যবহার করা অপরিহার্য যাতে তরল ফুসফুসে না যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-9",
    "dayId": 22,
    "topic": "Budgetary Control in Nursing",
    "difficulty": "HARD",
    "question": "Actual expenditures for wound care supplies have exceeded budget for three consecutive quarters. Most appropriate immediate action?",
    "options": [
      "Completely stop dressing all surgical wounds",
      "Analyze usage patterns and adjust the budget",
      "Order cheap non-sterile rags instead of gauze",
      "Fire the ward cleaning staff"
    ],
    "correctIndex": 1,
    "explanationEn": "Variance analysis in hospital budgeting requires examining clinical consumption trends, evaluating waste, investigating case mix, and reallocating forecast funds.",
    "explanationBn": "ড্রেসিং সামগ্রীর খরচ বাজেটের চেয়ে বেশি হলে ড্রেসিং বন্ধ না করে সামগ্রীর ব্যবহারের ধরন বিশ্লেষণ করতে হবে এবং প্রয়োজনীয় বাজেট সমন্বয় করতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-10",
    "dayId": 22,
    "topic": "Clinical Education Methods - Simulation",
    "difficulty": "EASY",
    "question": "What is a key advantage of using simulation as a clinical teaching method in nursing education?",
    "options": [
      "It eliminates the need for instructors",
      "It provides a safe environment for practicing complex procedures without risk to patients",
      "It guarantees 100% exam scores without practice",
      "It is done without any equipment"
    ],
    "correctIndex": 1,
    "explanationEn": "High-fidelity simulation provides an authentic, immersive, psychologically safe clinical environment where learners master psychomotor skills and crisis management without endangering patients.",
    "explanationBn": "নার্সিং শিক্ষায় সিমুলেশনের প্রধান সুবিধা হলো রোগীকে কোনো ঝুঁকিতে না ফেলে নিরাপদে জটিল ও জরুরি চিকিৎসা পদ্ধতির বাস্তব অনুশীলন করা যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-11",
    "dayId": 22,
    "topic": "Administrative Functions - Planning vs Supervising",
    "difficulty": "MEDIUM",
    "question": "Which is NOT a function of the planning stage in nursing administration?",
    "options": [
      "Setting unit goals and objectives",
      "Formulating nursing policies and protocols",
      "Supervising staff during procedures",
      "Estimating annual departmental budget"
    ],
    "correctIndex": 2,
    "explanationEn": "Supervising bedside performance is an operational directing/controlling function, whereas planning involves establishing goals, policies, and resource forecasts beforehand.",
    "explanationBn": "পরিকল্পনা (Planning) পর্যায়ে লক্ষ্য নির্ধারণ ও বাজেট তৈরি করা হলেও কাজের সময় সরাসরি তদারকি করা (Supervising staff) পরিচালনার অন্তর্গত, পরিকল্পনার নয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-12",
    "dayId": 1,
    "topic": "Types of Communication",
    "difficulty": "EASY",
    "question": "Which type of communication involves using spoken words?",
    "options": [
      "Non-verbal communication",
      "Verbal communication",
      "Kinesics",
      "Proxemics"
    ],
    "correctIndex": 1,
    "explanationEn": "Verbal communication encompasses both spoken and written language used to convey thoughts, instructions, and messages.",
    "explanationBn": "কথোপকথন বা উচ্চারিত শব্দের মাধ্যমে ভাব প্রকাশ করাকে ভার্বাল কমিউনিকেশন বা মৌখিক যোগাযোগ (Verbal communication) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-13",
    "dayId": 2,
    "topic": "Aspiration Prevention in Unconscious Patients",
    "difficulty": "EASY",
    "question": "Which intervention is most crucial when providing therapeutic care to an unconscious patient to prevent aspiration?",
    "options": [
      "Placing the patient in Trendelenburg position",
      "Placing the patient in lateral recumbent position",
      "Placing the patient flat on back with neck extended",
      "Keeping patient upright in wheelchair"
    ],
    "correctIndex": 1,
    "explanationEn": "The lateral recumbent (recovery) position allows vomitus and oral secretions to drain freely by gravity out of the mouth, preventing fatal tracheobronchial aspiration.",
    "explanationBn": "অজ্ঞান রোগীর বমি বা লালা শ্বাসনালীতে ঢুকে যাওয়া রোধ করতে তাকে কাত করে শোয়ানো বা ল্যাটেরাল রিকাম্বেন্ট পজিশন (Lateral recumbent position) দেওয়া সবচেয়ে জরুরি।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-14",
    "dayId": 22,
    "topic": "Research Sampling - Stratified Random Sampling",
    "difficulty": "HARD",
    "question": "A researcher wants to compare pain management strategies across departments and ensure equal representation from surgery, pediatrics, and oncology. Sampling technique?",
    "options": [
      "Simple accidental sampling",
      "Stratified sampling",
      "Convenience sampling",
      "Snowball sampling"
    ],
    "correctIndex": 1,
    "explanationEn": "Stratified sampling divides the heterogeneous population into distinct homogenous sub-strata (departments) and draws proportional random samples from each stratum.",
    "explanationBn": "বিভিন্ন বিভাগ থেকে সমান বা সুষম প্রতিনিধিত্ব নিশ্চিত করতে গবেষণায় স্ট্র্যাটিফাইড স্যাম্পলিং (Stratified sampling) পদ্ধতি ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-15",
    "dayId": 21,
    "topic": "Stages of Grief - Kübler-Ross Model",
    "difficulty": "EASY",
    "question": "A child with stage IV renal cancer is scheduled for palliative consultation and the parent says, 'There must be a mistake with the pathology report.' Which stage of DABDA is this?",
    "options": [
      "Denial",
      "Anger",
      "Bargaining",
      "Depression"
    ],
    "correctIndex": 0,
    "explanationEn": "In the Kübler-Ross 5 stages of grief (Denial, Anger, Bargaining, Depression, Acceptance), Denial serves as an initial defense mechanism against overwhelming psychological trauma.",
    "explanationBn": "রিপোর্টে ভুল আছে বলে সত্যকে অস্বীকার করা কুবলার-রসের শোকের প্রথম পর্যায় বা ডিনায়াল (Denial)-এর স্পষ্ট প্রকাশ।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-16",
    "dayId": 2,
    "topic": "Respiratory Positioning - High Fowler's",
    "difficulty": "EASY",
    "question": "What is the most effective position to promote lung expansion in patients with impaired respiratory function?",
    "options": [
      "Sims' position",
      "High Fowler's position",
      "Prone position",
      "Trendelenburg position"
    ],
    "correctIndex": 1,
    "explanationEn": "In High Fowler's position (head of bed 60-90°), gravity pulls abdominal viscera downward away from the diaphragm, maximizing thoracic cavity volume and lung expansion.",
    "explanationBn": "শ্বাসকষ্টে ভোগা রোগীর ফুসফুসের সর্বোচ্চ প্রসারণ নিশ্চিত করতে হাই ফাউলার্স পজিশন (High Fowler's position বা ৬০-৯০ ডিগ্রি খাড়া শোয়ানো) সবচেয়ে কার্যকর।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-17",
    "dayId": 3,
    "topic": "Biomedical Waste Segregation",
    "difficulty": "EASY",
    "question": "A nurse finds used gloves and a broken glass ampoule together. Which action ensures proper biomedical waste management?",
    "options": [
      "Throw both into the general black municipal dustbin",
      "Segregate gloves and glass ampoules",
      "Incinerate both immediately in the hospital garden",
      "Flush both down the patient toilet"
    ],
    "correctIndex": 1,
    "explanationEn": "Under BMW Rules: Contaminated plastic gloves go into the Red bag (for autoclaving), while broken glass ampoules must go into the Blue cardboard box/puncture-proof box.",
    "explanationBn": "গ্লাভস (প্লাস্টিক বর্জ্য) এবং ভাঙা কাঁচের অ্যাম্পুলকে আলাদা করা (Segregate) আবশ্যক; গ্লাভস যাবে লাল ব্যাগে এবং কাঁচ যাবে নীল বক্সে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-18",
    "dayId": 22,
    "topic": "Clinical Teaching - Case Study Method",
    "difficulty": "MEDIUM",
    "question": "During clinical teaching, which method is most effective for fostering critical thinking by discussing real-life scenarios?",
    "options": [
      "Rote memorization of drug brand names",
      "Case study method",
      "Dictation of lecture notes",
      "Watching silent instructional slides"
    ],
    "correctIndex": 1,
    "explanationEn": "Case study analysis bridges theory and practice by presenting authentic, multidimensional clinical dilemmas that require synthesis, clinical decision-making, and critical thinking.",
    "explanationBn": "বাস্তব রোগীর ঘটনা নিয়ে বিস্তারিত আলোচনার মাধ্যমে শিক্ষার্থীদের সমালোচনামূলক চিন্তা (Critical thinking) বৃদ্ধিতে কেস স্টাডি পদ্ধতি সবচেয়ে কার্যকর।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-19",
    "dayId": 2,
    "topic": "Oxygen Therapy Complications - Humidification",
    "difficulty": "EASY",
    "question": "A patient receiving oxygen via nasal cannula complains of nasal dryness. What should the nurse do?",
    "options": [
      "Discontinue oxygen completely",
      "Humidify the oxygen",
      "Pack the patient's nostrils with dry gauze",
      "Instruct the patient to tolerate it without intervention"
    ],
    "correctIndex": 1,
    "explanationEn": "Medical gases are anhydrous; bubbling oxygen through sterile water in a humidifier prevents mucosal drying, crusting, irritation, and epistaxis.",
    "explanationBn": "অক্সিজেন চলার কারণে নাকের ভেতর শুকিয়ে গেলে অক্সিজেন লাইনের সাথে আর্দ্রতাকারক বা হিউমিডিফায়ার (Humidify the oxygen) যুক্ত করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-20",
    "dayId": 22,
    "topic": "Interprofessional Conflict Management",
    "difficulty": "MEDIUM",
    "question": "What is the best approach for the nurse administrator to solve frequent conflicts between nurses and physicians regarding patient care responsibilities?",
    "options": [
      "Issue disciplinary notices without listening",
      "Facilitate an inter-professional meeting to clarify roles",
      "Instruct nurses to avoid speaking to physicians",
      "Abolish nursing autonomy completely"
    ],
    "correctIndex": 1,
    "explanationEn": "Collaborative inter-professional meetings create mutual transparency, define scopes of practice, establish shared clinical protocols, and resolve professional friction.",
    "explanationBn": "নার্স ও ডাক্তারদের মধ্যে কাজের দায়িত্ব নিয়ে ভুল বোঝাবুঝি দূর করার সর্বোত্তম উপায় হলো যৌথ সভা ডেকে প্রত্যেকের দায়িত্ব ও ভূমিকা সুস্পষ্ট করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-21",
    "dayId": 2,
    "topic": "Patient Transfer & Wheelchair Safety",
    "difficulty": "EASY",
    "question": "A patient with limited mobility is being transferred from bed to wheelchair. Which action best minimizes injury risk?",
    "options": [
      "Transferring while the wheelchair wheels are unlocked",
      "Locking the wheelchair brakes before moving the patient",
      "Allowing the patient to leap forward",
      "Dragging the patient by the arms while wheels roll"
    ],
    "correctIndex": 1,
    "explanationEn": "Locking both wheelchair wheel brakes establishes a stable, non-movable base of support, preventing the chair from slipping backward and causing catastrophic patient falls.",
    "explanationBn": "বিছানা থেকে রোগীকে হুইলচেয়ারে নেওয়ার আগে যেকোনো দুর্ঘটনা এড়াতে অবশ্যই হুইলচেয়ারের ব্রেক লক (Locking brakes) করে নিতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-22",
    "dayId": 3,
    "topic": "Surgical Asepsis - Indwelling Catheter",
    "difficulty": "EASY",
    "question": "When an indwelling urinary catheter is inserted, which action best applies surgical asepsis?",
    "options": [
      "Using clean unwashed hands",
      "Maintaining a closed sterile system throughout the procedure",
      "Reusing old drainage bags from other patients",
      "Disconnecting drainage tubing repeatedly"
    ],
    "correctIndex": 1,
    "explanationEn": "Surgical asepsis mandates sterile gloves, sterile drapes, and maintaining an unbroken closed sterile urinary drainage system to prevent catheter-associated UTIs (CAUTI).",
    "explanationBn": "ক্যাথেটার পরানোর সময় সম্পূর্ণ জীবাণুমুক্ত বা ক্লোজড স্টেরাইল সিস্টেম (Closed sterile system) বজায় রাখাই হলো সার্জিক্যাল অ্যাসেপসিসের মূল নিয়ম।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-23",
    "dayId": 22,
    "topic": "Research Design - External Validity",
    "difficulty": "HARD",
    "question": "A nurse researcher wants her study results to be applicable to a wide population. Which characteristic should guide her research design?",
    "options": [
      "Internal bias generation",
      "Ensuring generalizability of the study findings",
      "Using an extremely unrepresentative single-case sample",
      "Subjective anecdotal reporting"
    ],
    "correctIndex": 1,
    "explanationEn": "Generalizability (external validity) reflects the extent to which research conclusions can be applied and replicated across larger, diverse clinical populations and settings.",
    "explanationBn": "গবেষণার ফলাফল যাতে সামগ্রিক বৃহত্তর জনগোষ্ঠীর ক্ষেত্রে প্রযোজ্য হয়, তার জন্য গবেষণায় জেনারেলাইজেবিলিটি (Generalizability) নিশ্চিত করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-24",
    "dayId": 22,
    "topic": "Management Principles - Coordination",
    "difficulty": "EASY",
    "question": "What is the primary goal of coordination in nursing administration?",
    "options": [
      "To create rivalry between departments",
      "To ensure all team members work harmoniously",
      "To eliminate the need for doctors",
      "To double the paperwork for nurses"
    ],
    "correctIndex": 1,
    "explanationEn": "Coordination harmonizes and integrates diverse nursing, medical, and ancillary activities toward a common goal: unified, high-quality patient care.",
    "explanationBn": "নার্সিং প্রশাসনে সমন্বয় সাধনের (Coordination) মূল লক্ষ্য হলো দলের সকল সদস্য যাতে পারস্পরিক সম্প্রীতির সাথে সুশৃঙ্খলভাবে কাজ করে তা নিশ্চিত করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-25",
    "dayId": 22,
    "topic": "Measurement Quality - Reliability",
    "difficulty": "MEDIUM",
    "question": "Which term in research methodology refers to the consistency and reproducibility of a measurement tool?",
    "options": [
      "Validity",
      "Reliability",
      "Objectivity",
      "Feasibility"
    ],
    "correctIndex": 1,
    "explanationEn": "Reliability is the consistency and dependability with which a research instrument measures an attribute across repeated administrations under unchanged conditions.",
    "explanationBn": "গবেষণায় কোনো পরিমাপক যন্ত্র বা স্কেলের ফলাফল বারবার এক আসার ধারাবাহিকতাকে রিলায়েবিলিটি বা নির্ভরযোগ্যতা (Reliability) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-26",
    "dayId": 22,
    "topic": "Healthcare Safety Culture",
    "difficulty": "MEDIUM",
    "question": "Which strategy is most effective for promoting a sustained culture of safety on a medical-surgical unit?",
    "options": [
      "Firing nurses after their first reported error",
      "Implementing a non-punitive incident reporting system",
      "Banning all error reporting completely",
      "Blaming junior nurses for equipment failures"
    ],
    "correctIndex": 1,
    "explanationEn": "A 'Just Culture' with voluntary, non-punitive adverse event reporting encourages transparency, allows systemic fault identification, and prevents recurrent errors.",
    "explanationBn": "হাসপাতালে নিরাপত্তার সংস্কৃতি গড়ে তুলতে ভুলের জন্য শাস্তি না দিয়ে কারণ খোঁজার ব্যবস্থা বা নন-পানিশিং রিপোর্টিং সিস্টেম চালু করা দরকার।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-27",
    "dayId": 1,
    "topic": "Maslow's Hierarchy of Human Needs",
    "difficulty": "EASY",
    "question": "Which represents the correct order of Maslow's hierarchy from most basic to higher needs?",
    "options": [
      "Esteem needs, Safety needs, Belonging needs, Physical needs",
      "Physical needs, Safety needs, Belonging needs, Esteem needs",
      "Belonging needs, Physical needs, Esteem needs, Safety needs",
      "Safety needs, Esteem needs, Physical needs, Belonging needs"
    ],
    "correctIndex": 1,
    "explanationEn": "Maslow's hierarchy ascending order: 1. Physiological (physical) needs -> 2. Safety and security -> 3. Love and belongingness -> 4. Self-esteem -> 5. Self-actualization.",
    "explanationBn": "ম্যাসলোর চাহিদা তত্ত্বের সঠিক ক্রম: শারীরবৃত্তীয় প্রয়োজন -> নিরাপত্তা -> ভালোবাসা ও সামাজিক সম্পর্ক -> আত্মসম্মান (Physical -> Safety -> Belonging -> Esteem)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-28",
    "dayId": 22,
    "topic": "Hospital Store Indenting Protocols",
    "difficulty": "MEDIUM",
    "question": "When urgent supplies are required outside the regular ordering cycle, which action aligns with ward management protocols?",
    "options": [
      "Borrowing supplies without recording",
      "Submit a special indent with justification for urgent need",
      "Purchasing retail items with ward nurse's own personal money",
      "Forgoing patient treatment until next month"
    ],
    "correctIndex": 1,
    "explanationEn": "Hospital store protocols dictate submitting an emergency or special indent with formal written justification from the ward in-charge to requisition unscheduled stock.",
    "explanationBn": "জরুরি প্রয়োজনে নির্ধারিত সময়ের বাইরে জিনিসপত্র চাইতে হলে যথাযথ কারণ দর্শিয়ে বিশেষ ইনডেন্ট (Special indent with justification) জমা দিতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-29",
    "dayId": 3,
    "topic": "Infection Control in Catheterization",
    "difficulty": "EASY",
    "question": "A patient with urinary retention is prescribed intermittent catheterization every six hours. Which action minimizes infection risk?",
    "options": [
      "Reusing unsterilized catheters without washing",
      "Perform hand hygiene before and after catheter insertion",
      "Emptying catheter drainage onto bed linens",
      "Skipping periurethral cleansing"
    ],
    "correctIndex": 1,
    "explanationEn": "Rigorous hand hygiene before touching sterile catheter supplies and immediately after procedure termination is the cornerstone of preventing iatrogenic catheter infections.",
    "explanationBn": "ক্যাথেটার প্রবেশ করানোর আগে এবং পরে সঠিকভাবে হাত ধোয়া (Hand hygiene) সংক্রমণ প্রতিরোধের সবচেয়ে প্রধান নিয়ম।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-30",
    "dayId": 1,
    "topic": "Health vs Disease Conceptual Models",
    "difficulty": "EASY",
    "question": "In nursing fundamentals, how does understanding the difference between health and disease assist nurses in planning patient care?",
    "options": [
      "It restricts nurses to only administering injections",
      "It assists nurses to promote holistic care and prevention",
      "It proves disease has no emotional impact",
      "It eliminates the need for patient teaching"
    ],
    "correctIndex": 1,
    "explanationEn": "Understanding health as a holistic balance beyond just pathology empowers nurses to address physiological, psychosocial, preventive, and spiritual dimensions of care.",
    "explanationBn": "স্বাস্থ্য ও রোগের পার্থক্য গভীরভাবে বুঝলে নার্সরা কেবল ওষুধ দেওয়াতেই সীমাবদ্ধ না থেকে রোগীকে সামগ্রিক সেবা (Holistic care) দিতে সক্ষম হন।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-31",
    "dayId": 1,
    "topic": "Communication Barriers in Healthcare",
    "difficulty": "EASY",
    "question": "A nurse is educating patients about diabetes management, but participants are distracted by background ward noises. Which barrier of communication is this?",
    "options": [
      "Psychological barrier",
      "Environmental barrier",
      "Physiological barrier",
      "Language barrier"
    ],
    "correctIndex": 1,
    "explanationEn": "Physical surroundings like noise, poor lighting, extreme temperature, and visual distractions constitute environmental barriers to communication.",
    "explanationBn": "ওয়ার্ডের চিৎকার বা কোলাহলের কারণে শিক্ষাদানে বিঘ্ন ঘটা হলো পরিবেশগত বাধা বা এনভায়রনমেন্টাল ব্যারিয়ার (Environmental barrier)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-32",
    "dayId": 2,
    "topic": "Hospital Fire Safety Protocols - RACE",
    "difficulty": "EASY",
    "question": "What does the acronym RACE stand for in hospital fire safety policies?",
    "options": [
      "Run, Ask, Call, Evacuate",
      "Rescue, Alarm, Confine, Extinguish",
      "Report, Act, Clean, Exit",
      "Ring, Alert, Clear, Escape"
    ],
    "correctIndex": 1,
    "explanationEn": "RACE is the universal fire emergency protocol: R - Rescue patients in immediate danger, A - Activate alarm, C - Confine fire (close doors), E - Extinguish/Evacuate.",
    "explanationBn": "হাসপাতালে অগ্নিকাণ্ডের জরুরি সংকেত RACE-এর পূর্ণরূপ হলো: Rescue (উদ্ধার), Alarm (অ্যালার্ম বাজানো), Confine (আগুন আবদ্ধ করা), Extinguish (নেভানো)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-33",
    "dayId": 22,
    "topic": "Financial Management - Product Integration",
    "difficulty": "HARD",
    "question": "A new policy mandates advanced wound care products in the ward. Which process should the nurse administrator prioritize to integrate this into the budget?",
    "options": [
      "Immediately order unlimited stock without paperwork",
      "Evaluate product costs and revise expenditure forecasts",
      "Cancel staff salaries to buy products",
      "Ignore the policy completely"
    ],
    "correctIndex": 1,
    "explanationEn": "Integrating new technological supplies into ward inventory requires cost-benefit evaluation, analyzing expected utilization rates, and updating expenditure forecasts.",
    "explanationBn": "নতুন চিকিৎসা সামগ্রী কেনার আগে পণ্যের মূল্য যাচাই করা এবং খরচ ও বাজেটের পূর্বাভাস পুনর্বিবেচনা (Evaluate costs and revise forecasts) করা আবশ্যক।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-34",
    "dayId": 1,
    "topic": "Patient Teaching Effectiveness",
    "difficulty": "MEDIUM",
    "question": "What approach reflects effective teaching responsibility when educating newly diagnosed hypertensive patients on medication adherence?",
    "options": [
      "Handing over a flyer and immediately walking away",
      "Evaluating patient ability to explain their medication plan",
      "Assuming the patient knows everything without asking",
      "Speaking rapidly in English to non-English speakers"
    ],
    "correctIndex": 1,
    "explanationEn": "Using the 'Teach-Back' method where patients explain back medication names, dosages, and schedules verifies comprehension and guarantees adherence.",
    "explanationBn": "রোগী নিজের ভাষায় ওষুধের নাম, নিয়ম ও সময় সঠিকভাবে বুঝিয়ে বলতে পারছে কি না তা যাচাই করার মাধ্যমেই সফল স্বাস্থ্য শিক্ষা নিশ্চিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-35",
    "dayId": 3,
    "topic": "Sharps Disposal Standards",
    "difficulty": "EASY",
    "question": "Which is the most appropriate method for disposing of microbiologically contaminated sharps in a clinical laboratory?",
    "options": [
      "Throwing into open plastic dustbins",
      "Placing in puncture-resistant biohazard containers for incineration",
      "Wrapping in newspaper and discarding with office waste",
      "Recycling into school lunchboxes"
    ],
    "correctIndex": 1,
    "explanationEn": "Sharps (needles, scalpels, lancets) must be discarded into rigid, puncture-resistant, leak-proof, color-coded biohazard containers to prevent needle-stick injuries and pathogen spread.",
    "explanationBn": "জীবাণুযুক্ত সূঁচ ও ব্লেড ফুটো হয় না এমন পাংচার-প্রুফ পাত্রে (Puncture-resistant container) রেখে পুড়িয়ে বা অটোক্লেভ করে বিনষ্ট করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-36",
    "dayId": 3,
    "topic": "Aseptic Technique - PPE & Hand Hygiene",
    "difficulty": "EASY",
    "question": "Combining hand hygiene with the use of PPE demonstrates which principle of asepsis?",
    "options": [
      "Promoting aerosol spread",
      "Preventing cross-contamination",
      "Sterilizing room ambient air",
      "Inducing artificial immunity"
    ],
    "correctIndex": 1,
    "explanationEn": "Hand hygiene and appropriate Personal Protective Equipment (gloves, gown, mask) block pathogen transfer routes between healthcare workers and patients, preventing cross-contamination.",
    "explanationBn": "হাত ধোয়া এবং পিপিই ব্যবহারের মূল উদ্দেশ্য হলো একজন রোগীর শরীর থেকে অন্যজনের শরীরে জীবাণু সংক্রমণ বা ক্রস-ইনফেকশন রোধ করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-37",
    "dayId": 1,
    "topic": "Active Learning in Patient Education",
    "difficulty": "EASY",
    "question": "To increase the effectiveness of the teaching-learning process in the ward among patients, the nurse should:",
    "options": [
      "Focus on active learning involving the patient",
      "Monopolize conversations with one-way lectures",
      "Discourage patients from asking questions",
      "Administer written exams under strict exam conditions"
    ],
    "correctIndex": 0,
    "explanationEn": "Active adult learning principles emphasize engaging patients in hands-on demonstrations (e.g., insulin self-injection practice) and interactive discussions.",
    "explanationBn": "রোগীকে হাতে-কলমে অনুশীলনে অংশীদার করা বা সক্রিয় অংশগ্রহণমূলক শিক্ষা (Active learning) শিক্ষণ প্রক্রিয়াকে সবচেয়ে ফলপ্রসূ করে তোলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-38",
    "dayId": 2,
    "topic": "Chest Physical Assessment Techniques",
    "difficulty": "EASY",
    "question": "Which two main techniques are commonly used to assess a patient's lung sounds during physical assessment?",
    "options": [
      "Inspection and olfaction",
      "Auscultation and percussion",
      "Biopsy and venipuncture",
      "Endoscopy and angiography"
    ],
    "correctIndex": 1,
    "explanationEn": "Auscultation with a stethoscope evaluates breath sounds (vesicular, bronchial, adventitious), while percussion evaluates chest resonance and underlying lung consolidation.",
    "explanationBn": "ফুসফুস মূল্যায়নের প্রধান দুটি শারীরিক পরীক্ষা পদ্ধতি হলো স্টেথোস্কোপ দিয়ে শোনা (Auscultation) এবং মৃদু টোকা দিয়ে ধ্বনি পরীক্ষা (Percussion)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-39",
    "dayId": 22,
    "topic": "Equitable Health Financing",
    "difficulty": "MEDIUM",
    "question": "In a rural hospital, which financing strategy aligns with the national health plan's emphasis on equitable access?",
    "options": [
      "Allocating budget solely to VIP suites",
      "Allocate resources based on community health needs assessments",
      "Charging exorbitant fees to impoverished patients",
      "Ceasing all free ambulance services"
    ],
    "correctIndex": 1,
    "explanationEn": "Equitable resource allocation matches healthcare funds to localized disease burden, vulnerability indices, and unmet community health needs.",
    "explanationBn": "জাতীয় স্বাস্থ্য নীতি অনুযায়ী সমতাভিত্তিক স্বাস্থ্য ব্যবস্থার জন্য স্থানীয় গ্রামীণ মানুষের রোগ ও চাহিদার ভিত্তিতে বাজেট বরাদ্দ করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-40",
    "dayId": 1,
    "topic": "Holistic Nurse-Patient Relationship",
    "difficulty": "EASY",
    "question": "The nurse-patient relationship in holistic nursing is best described as:",
    "options": [
      "Authoritarian",
      "Patient-centered",
      "Paternalistic",
      "Transaction-oriented"
    ],
    "correctIndex": 1,
    "explanationEn": "In holistic nursing, care is patient-centered, honoring the individual's dignity, values, autonomy, and participation in their healing journey.",
    "explanationBn": "হোলিস্টিক নার্সিং সেবায় নার্স ও রোগীর সম্পর্ক সর্বদা রোগীকেন্দ্রিক (Patient-centered) এবং পারস্পরিক শ্রদ্ধাপূর্ণ হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-41",
    "dayId": 22,
    "topic": "Evidence-Based Nursing - Systematic Reviews",
    "difficulty": "MEDIUM",
    "question": "In utilizing research in nursing practice, what is the primary role of clinical guidelines derived from systematic reviews?",
    "options": [
      "To replace all nurse clinical judgment",
      "They provide evidence-based recommendations",
      "To serve as legal punitive traps for staff",
      "To eliminate the need for patient consent"
    ],
    "correctIndex": 1,
    "explanationEn": "Clinical practice guidelines synthesize high-level evidence from systematic reviews to guide nurses with proven, standardized, best-practice clinical recommendations.",
    "explanationBn": "সিস্টেমেটিক রিভিউ থেকে প্রাপ্ত ক্লিনিক্যাল গাইডলাইনের প্রধান উদ্দেশ্য হলো প্রমাণভিত্তিক সুনির্দিষ্ট চিকিৎসার দিকনির্দেশনা (Evidence-based recommendations) দেওয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-42",
    "dayId": 1,
    "topic": "Barriers to Therapeutic Listening",
    "difficulty": "EASY",
    "question": "What is an example of poor listening?",
    "options": [
      "Maintaining gentle eye contact",
      "Interrupting the speaker",
      "Nodding to acknowledge feelings",
      "Clarifying misunderstood phrases"
    ],
    "correctIndex": 1,
    "explanationEn": "Interrupting, rushing the speaker, cutting in before thoughts are finished, and finishing sentences illustrate poor listening and break therapeutic rapport.",
    "explanationBn": "রোগী কথা বলার মাঝপথে তাকে থামিয়ে দেওয়া বা কথা কেটে দেওয়া (Interrupting the speaker) খারাপ শোনার বড় লক্ষণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-43",
    "dayId": 1,
    "topic": "Legal Standards in Medical Documentation",
    "difficulty": "EASY",
    "question": "Which of the following is NOT a correct practice in maintaining records?",
    "options": [
      "Signing every entry with name and designation",
      "Writing entries in permanent ink",
      "Using correction fluid to erase mistakes",
      "Recording time and date of each care encounter"
    ],
    "correctIndex": 2,
    "explanationEn": "Using correction fluid (whitener) or obliterating errors is illegal; errors should be crossed out with a single horizontal line, labeled 'mistaken entry', and initialed.",
    "explanationBn": "নার্সিং ফাইলে ভুল হলে কোনোভাবেই কারেকশন ফ্লুইড বা হোয়াইটনার দিয়ে মোছা যাবে না; এটি একটি বেআইনি কাজ।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-44",
    "dayId": 1,
    "topic": "Medication Safety at Shift Handover",
    "difficulty": "EASY",
    "question": "What is the most appropriate action for a nurse if a discrepancy is found in the medication record during shift change?",
    "options": [
      "Ignore the discrepancy and go home",
      "Immediately report to supervisor",
      "Falsify records to match counts",
      "Conceal the narcotic register"
    ],
    "correctIndex": 1,
    "explanationEn": "Any shift change medication discrepancy (especially regarding scheduled drugs) must be investigated and reported immediately to the ward supervisor/charge nurse.",
    "explanationBn": "শিফট পরিবর্তনের সময় ওষুধের রেকর্ডে কোনো গরমিল বা অসংগতি চোখে পড়লে তা অবিলম্বে নার্সিং সুপারভাইজারকে জানাতে হবে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-45",
    "dayId": 22,
    "topic": "Nursing Administration - Role Delegation",
    "difficulty": "MEDIUM",
    "question": "A head nurse notices patient care is delayed due to overlapping responsibilities. Which managerial action demonstrates effective coordination?",
    "options": [
      "Leaving staff to argue among themselves",
      "Clarifying each team member's specific duties for the shift",
      "Threatening staff with salary reductions",
      "Assigning all ward duties to a single student"
    ],
    "correctIndex": 1,
    "explanationEn": "Clear delegation of roles, unambiguous shift assignments, and establishing specific operational duties eliminate redundancy and ensure timely patient care.",
    "explanationBn": "দায়িত্বের অস্পষ্টতার কারণে কাজে দেরি হলে হেড নার্সের দায়িত্ব হলো শিফটের শুরুতে প্রত্যেকের কাজের সুনির্দিষ্ট ক্ষেত্র ও দায়িত্ব স্পষ্ট করে দেওয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-46",
    "dayId": 3,
    "topic": "Hospital Disinfection Protocols - Savlon",
    "difficulty": "HARD",
    "question": "The minimum duration required by 5% Savlon to disinfect glassware items in the hospital is:",
    "options": [
      "30 seconds",
      "2 minutes",
      "5 minutes",
      "1 hour"
    ],
    "correctIndex": 2,
    "explanationEn": "For surface chemical disinfection of clinical glassware and instruments, 5% Savlon (chlorhexidine + cetrimide) requires a minimum contact time of 5 minutes.",
    "explanationBn": "হাসপাতালে কাঁচের সামগ্রী জীবাণুমুক্ত করতে ৫% স্যাভলন দ্রবণে ন্যূনতম ৫ মিনিট (5 minutes) ডুবিয়ে রাখা আবশ্যক।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-47",
    "dayId": 22,
    "topic": "Quantitative Research - Sample Size",
    "difficulty": "MEDIUM",
    "question": "In quantitative research, if the populations are homogenous, what sample size may be sufficient?",
    "options": [
      "Extremely massive nationwide sample",
      "Small sample size",
      "Sample size of zero",
      "Sample size exceeding the entire population"
    ],
    "correctIndex": 1,
    "explanationEn": "When population members share nearly identical characteristics (low variance/homogeneity), a smaller sample size is statistically sufficient to represent the population.",
    "explanationBn": "গবেষণায় সামগ্রিক জনসংখ্যা যদি সমজাতীয় বা একই বৈশিষ্ট্যের (Homogenous) হয়, তবে তুলনামূলক ছোট নমুনার আকারই (Small sample size) যথেষ্ট।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-48",
    "dayId": 22,
    "topic": "Nursing Administration - Institutional Discipline",
    "difficulty": "MEDIUM",
    "question": "Which factor is most important when establishing disciplinary policies in a nursing institution?",
    "options": [
      "Favoritism toward senior employees",
      "Ensuring consistency and fairness",
      "Imposing random penalties without warning",
      "Exempting doctors from all rules"
    ],
    "correctIndex": 1,
    "explanationEn": "Fairness, transparency, consistent application of standards, and progressive discipline without prejudice are the essential hallmarks of ethical institutional governance.",
    "explanationBn": "নার্সিং প্রতিষ্ঠানে শৃঙ্খলাবিধি প্রণয়নের ক্ষেত্রে সবচেয়ে গুরুত্বপূর্ণ দিক হলো সকলের প্রতি সমতা, ধারাবাহিকতা ও ন্যায়বিচার (Consistency and fairness) বজায় রাখা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-49",
    "dayId": 22,
    "topic": "Educational Measurement - Item Analysis",
    "difficulty": "MEDIUM",
    "question": "The value and suitability of each constructed question item are evaluated through a specific method named:",
    "options": [
      "Factorial regression",
      "Item analysis",
      "Variance correlation",
      "Standard deviation"
    ],
    "correctIndex": 1,
    "explanationEn": "Item analysis evaluates difficulty index and discrimination index of examination questions to ensure test reliability and construct validity.",
    "explanationBn": "পরীক্ষার প্রশ্নপত্রের প্রতিটি প্রশ্নের মান, কাঠিন্যের মাত্রা ও উপযুক্ততা যাচাই করার পদ্ধতিকে আইটেম অ্যানালাইসিস (Item analysis) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-50",
    "dayId": 7,
    "topic": "History of Science & Microscopy",
    "difficulty": "HARD",
    "question": "Who first developed the electron microscope?",
    "options": [
      "Robert Hooke, 1665",
      "Anton van Leeuwenhoek, 1674",
      "Ruska and Knoll, 1931",
      "Louis Pasteur, 1885"
    ],
    "correctIndex": 2,
    "explanationEn": "Max Knoll and Ernst Ruska constructed the world's first prototype transmission electron microscope (TEM) in Germany in 1931, breaking optical resolution limits.",
    "explanationBn": "১৯৩১ সালে বিজ্ঞানী আর্নস্ট রুশকা এবং ম্যাক্স নল (Ruska and Knoll, 1931) প্রথম ইলেকট্রন মাইক্রোস্কোপ আবিষ্কার করেন।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-51",
    "dayId": 22,
    "topic": "Complex Sampling Designs - Multistage Sampling",
    "difficulty": "HARD",
    "question": "What type of sampling is applicable when the population consists of units rather than individuals?",
    "options": [
      "Simple random sampling",
      "Multistage",
      "Convenience sampling",
      "Quota sampling"
    ],
    "correctIndex": 1,
    "explanationEn": "Multistage sampling selects clusters or organizational units (e.g., states -> districts -> villages -> households) in progressive hierarchical sampling stages.",
    "explanationBn": "জনসংখ্যা যখন ব্যক্তির পরিবর্তে বড় বড় ইউনিট বা স্তরে বিন্যস্ত থাকে, তখন মাল্টিস্টেজ স্যাম্পলিং (Multistage sampling) পদ্ধতি প্রয়োগ করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-52",
    "dayId": 3,
    "topic": "Hospital Sterilization - Enamelware",
    "difficulty": "EASY",
    "question": "The rationale behind not boiling enamelware for a longer period is:",
    "options": [
      "It dissolves completely in boiling water",
      "It gets chipped off",
      "It catches fire",
      "It absorbs all the water"
    ],
    "correctIndex": 1,
    "explanationEn": "Prolonged boiling causes differential thermal expansion between the metal base and ceramic enamel glaze, causing the brittle coating to chip and crack.",
    "explanationBn": "এনামেলযুক্ত পাত্র বেশিক্ষণ ধরে ফোটালে তার উপরের এনামেলের প্রলেপ ফেটে বা খসে পড়ে (It gets chipped off)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-53",
    "dayId": 1,
    "topic": "Hospital Admission Procedures",
    "difficulty": "EASY",
    "question": "When a patient arrives at the hospital for routine admission, the nurse must first:",
    "options": [
      "Administer IV sedatives immediately",
      "Complete the admission procedure",
      "Send the patient directly to the operating room",
      "Collect the entire hospital bill upfront"
    ],
    "correctIndex": 1,
    "explanationEn": "Routine admission starts with verifying identification, attaching ID wristbands, assessing baseline vital signs, and completing nursing history documentation.",
    "explanationBn": "হাসপাতালে রোগী ভর্তি হতে আসলে নার্সকে সর্বপ্রথম ভর্তি সংক্রান্ত প্রাথমিক আনুষ্ঠানিকতা ও তথ্য গ্রহণ (Complete admission procedure) সম্পন্ন করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-54",
    "dayId": 22,
    "topic": "Nursing Journals & Evidence-Based Practice",
    "difficulty": "HARD",
    "question": "The first issue of Worldviews on Evidence-Based Nursing journal was published in the year:",
    "options": [
      "1990",
      "1998",
      "2004",
      "2015"
    ],
    "correctIndex": 2,
    "explanationEn": "'Worldviews on Evidence-Based Nursing', the prestigious peer-reviewed journal from Sigma Theta Tau International, published its inaugural volume in 2004.",
    "explanationBn": "প্রখ্যাত আন্তর্জাতিক জার্নাল 'Worldviews on Evidence-Based Nursing'-এর প্রথম সংখ্যাটি প্রকাশিত হয়েছিল ২০০৪ সালে (2004)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-55",
    "dayId": 22,
    "topic": "Clinical Trial Guidelines - CONSORT",
    "difficulty": "MEDIUM",
    "question": "The reporting guidelines followed for a Randomized Controlled Trial (RCT) is:",
    "options": [
      "STROBE",
      "CONSORT",
      "PRISMA",
      "COREQ"
    ],
    "correctIndex": 1,
    "explanationEn": "The CONSORT (Consolidated Standards of Reporting Trials) statement provides evidence-based guidelines and flow diagrams for reporting randomized controlled clinical trials.",
    "explanationBn": "র‍্যান্ডমাইজড কন্ট্রোল্ড ট্রায়াল (RCT) গবেষণাপত্র লেখার জন্য আন্তর্জাতিকভাবে কনসর্ট (CONSORT) গাইডলাইন অনুসরণ করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-56",
    "dayId": 22,
    "topic": "Nursing History - Florence Nightingale",
    "difficulty": "EASY",
    "question": "Who is considered the pioneer of nursing research and published Notes on Nursing in 1859?",
    "options": [
      "Clara Barton",
      "Florence Nightingale",
      "Mary Seacole",
      "Dorothea Dix"
    ],
    "correctIndex": 1,
    "explanationEn": "Florence Nightingale pioneered modern professional nursing and biostatistical research; her seminal book 'Notes on Nursing: What It Is, and What It Is Not' appeared in 1859.",
    "explanationBn": "আধুনিক নার্সিং ও স্বাস্থ্য গবেষণার পথিকৃৎ ফ্লোরেন্স নাইটিঙ্গেল ১৮৫৯ সালে তার বিখ্যাত 'Notes on Nursing' বইটি প্রকাশ করেন।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-57",
    "dayId": 22,
    "topic": "Scientific Thinking - Deductive Reasoning",
    "difficulty": "MEDIUM",
    "question": "The type of reasoning that involves drawing specific conclusions from general principles is called:",
    "options": [
      "Inductive reasoning",
      "Deductive reasoning",
      "Intuitive reasoning",
      "Subjective reasoning"
    ],
    "correctIndex": 1,
    "explanationEn": "Deductive reasoning moves from general premises/theories down to specific logical predictions or clinical conclusions (top-down logic).",
    "explanationBn": "সাধারণ বা সার্বজনীন সত্য থেকে নির্দিষ্ট সিদ্ধান্তে উপনীত হওয়ার যৌক্তিক প্রক্রিয়াকে ডিডাক্টিভ রিজনিং (Deductive reasoning) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-58",
    "dayId": 22,
    "topic": "Statistical Power & Sample Size",
    "difficulty": "HARD",
    "question": "The strength of relationships among research variables for calculating sample size for a quantitative study is based on:",
    "options": [
      "Power analysis",
      "Convenience quota",
      "Researcher intuition",
      "Alphabetical listing"
    ],
    "correctIndex": 0,
    "explanationEn": "Statistical power analysis calculates the minimum sample size required to detect a significant effect/relationship of a given magnitude (effect size) at specified alpha and beta levels.",
    "explanationBn": "গবেষণায় নমুনার সঠিক আকার ও সম্পর্ক নির্ধারণের ভিত্তি হলো স্ট্যাটিস্টিক্যাল পাওয়ার অ্যানালাইসিস (Power analysis)।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-59",
    "dayId": 22,
    "topic": "Professional Nursing Organizations in India - TNAI",
    "difficulty": "MEDIUM",
    "question": "The Association of Nursing Superintendents is currently known as:",
    "options": [
      "Indian Medical Association",
      "Trained Nurses Association of India (TNAI)",
      "All India Institute of Medical Sciences",
      "National Health Authority"
    ],
    "correctIndex": 1,
    "explanationEn": "Founded in 1905 as the Association of Nursing Superintendents, the premier national professional organization was renamed the Trained Nurses Association of India (TNAI) in 1908.",
    "explanationBn": "১৯০৫ সালে গঠিত অ্যাসোসিয়েশন অব নার্সিং সুপারিনটেনডেন্টস বর্তমানে প্রশিক্ষিত নার্স অ্যাসোসিয়েশন অব ইন্ডিয়া বা TNAI নামে পরিচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-60",
    "dayId": 22,
    "topic": "RCT Guidelines - CONSORT Statement",
    "difficulty": "MEDIUM",
    "question": "Which guideline is used for writing the report of a randomized controlled trial research study?",
    "options": [
      "AGREE",
      "CONSORT",
      "CARE",
      "MOOSE"
    ],
    "correctIndex": 1,
    "explanationEn": "CONSORT (Consolidated Standards of Reporting Trials) is the global gold standard checklist used to write and evaluate reports of parallel-group randomized trials.",
    "explanationBn": "র‍্যান্ডমাইজড কন্ট্রোল্ড ট্রায়ালের পূর্ণাঙ্গ রিপোর্ট তৈরির জন্য কনসর্ট (CONSORT) গাইডলাইন ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-61",
    "dayId": 1,
    "topic": "Medico-Legal Documentation - LAMA Purpose",
    "difficulty": "MEDIUM",
    "question": "A patient who decides to leave the hospital against medical advice (LAMA) must sign a form. What is its purpose?",
    "options": [
      "To guarantee the patient a full refund of hospital charges",
      "To release the physician and hospital from legal responsibility for the patient's health status",
      "To cancel the patient's citizenship",
      "To ban the patient from ever entering another hospital"
    ],
    "correctIndex": 1,
    "explanationEn": "A LAMA (Leave Against Medical Advice) signature legally protects healthcare providers by verifying the competent patient was warned of risks and voluntarily chose premature discharge.",
    "explanationBn": "ডাক্তারের পরামর্শের বিরুদ্ধে হাসপাতাল ছাড়ার (LAMA) ফর্ম স্বাক্ষরের মূল উদ্দেশ্য হলো রোগীর শারীরিক পরিণতির আইনি দায় থেকে হাসপাতাল ও ডাক্তারকে মুক্ত রাখা।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-62",
    "dayId": 1,
    "topic": "Hospital Discharge Documentation - LAMA",
    "difficulty": "EASY",
    "question": "If a patient or relatives decide to leave the hospital against the advice of the doctor, they must sign which form before discharge?",
    "options": [
      "Consent for blood transfusion",
      "LAMA form",
      "Death certificate",
      "Informed consent for surgery"
    ],
    "correctIndex": 1,
    "explanationEn": "The LAMA (Leaving Against Medical Advice) form document explicitly records the patient's refusal of continued hospitalization despite clinical warnings.",
    "explanationBn": "ডাক্তারের অনুমতি ছাড়া স্বেচ্ছায় হাসপাতাল ত্যাগ করতে চাইলে রোগীকে লামা ফর্ম (LAMA form) স্বাক্ষর করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-63",
    "dayId": 2,
    "topic": "Physical Examination Techniques - Palpation",
    "difficulty": "MEDIUM",
    "question": "In the deep palpation method, the depth of skin depressed is approximately:",
    "options": [
      "1–2 mm",
      "1–2 cm",
      "4–5 cm",
      "10–12 cm"
    ],
    "correctIndex": 2,
    "explanationEn": "In abdominal examination, light palpation depresses 1-2 cm to assess surface tenderness and tone; deep palpation depresses 4 to 5 cm (about 2 inches) to delineate deep viscera and masses.",
    "explanationBn": "শারীরিক পরীক্ষায় ডিপ প্যালপেশন (Deep palpation) করার সময় ত্বক ও পেটের প্রাচীর প্রায় ৪ থেকে ৫ সেমি (4–5 cm) পর্যন্ত চাপ দিয়ে দেখতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-64",
    "dayId": 2,
    "topic": "Health Informatics - UHID",
    "difficulty": "EASY",
    "question": "In the Indian hospital context, UHID commonly refers to:",
    "options": [
      "Universal Housing Identification",
      "Unique Health Identification",
      "United Hospital Insurance Database",
      "Unregistered Health Information Document"
    ],
    "correctIndex": 1,
    "explanationEn": "UHID stands for Unique Health Identification, the standardized individual patient medical record number used under Ayushman Bharat Digital Mission (ABDM).",
    "explanationBn": "ভারতীয় হাসপাতাল ব্যবস্থায় UHID বলতে ইউনিক হেলথ আইডেন্টিফিকেশন (Unique Health Identification) নম্বরকে বোঝায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-fon-65",
    "dayId": 1,
    "topic": "Nursing Regulatory Bodies - INC",
    "difficulty": "EASY",
    "question": "The role of the Indian Nursing Council (INC) in the nursing profession is:",
    "options": [
      "To sell commercial pharmaceuticals",
      "To regulate nursing programmes",
      "To conduct railway locomotive exams",
      "To build highway road bridges"
    ],
    "correctIndex": 1,
    "explanationEn": "Established by the INC Act 1947, the Indian Nursing Council is the statutory national regulatory body establishing uniform standards of training and regulating nursing education programs across India.",
    "explanationBn": "ভারতে ইন্ডিয়ান নার্সিং কাউন্সিল (INC)-এর মূল দায়িত্ব হলো নার্সিং শিক্ষাক্রম ও প্রতিষ্ঠানগুলোকে নিয়ন্ত্রণ ও তাদের মান নির্ধারণ করা (To regulate nursing programmes)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-1",
    "dayId": 5,
    "topic": "Endocrine Physiology - Thyroid Gland",
    "difficulty": "EASY",
    "question": "Which gland in the endocrine system is primarily responsible for regulating metabolism through the secretion of its main hormone?",
    "options": [
      "Adrenal cortex",
      "Thyroid gland",
      "Thymus gland",
      "Pineal gland"
    ],
    "correctIndex": 1,
    "explanationEn": "The thyroid gland secretes thyroxine (T4) and triiodothyronine (T3), which regulate the basal metabolic rate (BMR), protein synthesis, and energy consumption in all body cells.",
    "explanationBn": "মানবদেহের বিপাকক্রিয়া বা মেটাবলিজম নিয়ন্ত্রণকারী প্রধান অন্তঃক্ষরা গ্রন্থি হলো থাইরয়েড গ্রন্থি (Thyroid gland)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-2",
    "dayId": 5,
    "topic": "Skeletal System - Cartilaginous Joints",
    "difficulty": "MEDIUM",
    "question": "Which joint type is found between the vertebral bodies, allowing limited movement?",
    "options": [
      "Synovial ball-and-socket joint",
      "Cartilaginous symphysis joint",
      "Fibrous suture joint",
      "Synovial pivot joint"
    ],
    "correctIndex": 1,
    "explanationEn": "Intervertebral discs form cartilaginous symphysis joints (amphiarthroses), where fibrocartilage pads allow slight compressible movement and shock absorption between vertebral bodies.",
    "explanationBn": "মেরুদণ্ডের কশেরুকাগুলোর মাঝে অবস্থিত সীমিত সঞ্চালনক্ষম অস্থিসন্ধিকে কার্টিলেজিনাস সিমফাইসিস জয়েন্ট (Cartilaginous symphysis joint) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-3",
    "dayId": 4,
    "topic": "Hematology - Plasma Proteins",
    "difficulty": "EASY",
    "question": "One of the important functions of plasma proteins includes:",
    "options": [
      "Production of digestive enzymes in stomach",
      "Coagulation of blood",
      "Transmission of sound waves in cochlea",
      "Direct filtration of air in bronchi"
    ],
    "correctIndex": 1,
    "explanationEn": "Plasma proteins include fibrinogen, prothrombin, and clotting factors that are indispensable for hemostasis and blood coagulation, alongside albumin for oncotic pressure.",
    "explanationBn": "প্লাজমা প্রোটিনের (যেমন ফাইব্রিনোজেন ও প্রথম্বিন) অন্যতম প্রধান কাজ হলো রক্ত জমাট বাঁধতে (Coagulation of blood) সহায়তা করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-4",
    "dayId": 5,
    "topic": "Histology - Connective Tissue Vascularity",
    "difficulty": "HARD",
    "question": "A patient presents with a torn ligament after an athletic injury. Which tissue property best explains the slow healing process in this structure?",
    "options": [
      "Dense regular connective tissue has limited blood supply",
      "It consists exclusively of highly vascular smooth muscle",
      "It lacks extracellular collagen fibers completely",
      "Ligaments are constantly undergoing rapid mitosis"
    ],
    "correctIndex": 0,
    "explanationEn": "Ligaments are composed of dense regular collagenous connective tissue with very poor, hypovascular capillary supply, resulting in notoriously slow healing and scar maturation.",
    "explanationBn": "লিগামেন্ট ঘন নিয়মিত সংযোজক কলা দিয়ে গঠিত এবং এতে রক্ত চলাচল খুব সীমিত (Limited blood supply) হওয়ায় আঘাতের পর এটি নিরাময় হতে দীর্ঘ সময় নেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-5",
    "dayId": 4,
    "topic": "Respiratory Anatomy - Alveoli",
    "difficulty": "EASY",
    "question": "What is the primary function of alveoli in the lungs?",
    "options": [
      "Filtering dust particles with nasal hairs",
      "Exchanging gases",
      "Secreting digestive amylase",
      "Vocal pitch modulation"
    ],
    "correctIndex": 1,
    "explanationEn": "Alveoli are microscopic thin-walled air sacs enveloped by pulmonary capillaries, providing an immense surface area for oxygen and carbon dioxide diffusion.",
    "explanationBn": "ফুসফুসের অ্যালভিওলাইয়ের (Alveoli) প্রধান ও মূল কাজ হলো রক্ত ও বাতাসের মধ্যে গ্যাসীয় আদান-প্রদান (Exchanging gases) ঘটানো।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-6",
    "dayId": 5,
    "topic": "Endocrine System - Posterior Pituitary",
    "difficulty": "MEDIUM",
    "question": "A patient presents with excessive thirst, frequent urination, and fatigue. Laboratory results reveal low levels of antidiuretic hormone (ADH). Which endocrine gland is most likely malfunctioning?",
    "options": [
      "Anterior pituitary gland",
      "Posterior pituitary gland",
      "Adrenal medulla",
      "Pancreatic islets"
    ],
    "correctIndex": 1,
    "explanationEn": "Antidiuretic hormone (ADH / vasopressin) is synthesized by the hypothalamus and stored/released by the posterior pituitary (neurohypophysis); deficiency causes Diabetes Insipidus.",
    "explanationBn": "অ্যান্টিডিউরেটিক হরমোন (ADH) নিঃসৃত হয় পোস্টেরিয়র পিটুইটারি গ্রন্থি (Posterior pituitary gland) থেকে; এর অভাবে বহুমূত্র বা ডায়াবেটিস ইনসিপিডাস হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-7",
    "dayId": 4,
    "topic": "Lymphoid System - Spleen & Thymus",
    "difficulty": "MEDIUM",
    "question": "How do the spleen and thymus work together to support the immune system?",
    "options": [
      "The spleen stores bile and the thymus synthesizes insulin",
      "The spleen filters pathogens from blood and the thymus matures T-lymphocytes",
      "The spleen secretes hydrochloric acid and thymus absorbs fat",
      "Both organs manufacture red blood cells in healthy adults"
    ],
    "correctIndex": 1,
    "explanationEn": "The spleen acts as a lymphoid blood filter clearing circulating microbes and aged RBCs, while the thymus serves as the primary lymphoid organ for T-cell maturation and education.",
    "explanationBn": "প্লীহা বা স্প্লিন রক্ত থেকে ক্ষতিকর জীবাণু ছেঁকে নেয় এবং থাইমাস গ্রন্থি টি-লিম্ফোসাইট কোষকে পরিপক্ক করে রোগ প্রতিরোধ গড়ে তোলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-8",
    "dayId": 4,
    "topic": "Lymphatic Pathways - Virchow's Node",
    "difficulty": "HARD",
    "question": "What is the specific lymphatic pathway that leads to the development of a Virchow's node (Troisier's sign)?",
    "options": [
      "Right lymphatic duct",
      "Thoracic duct",
      "Inguinal lymph trunk",
      "Bronchomediastinal trunk"
    ],
    "correctIndex": 1,
    "explanationEn": "Abdominal malignancies (e.g., gastric cancer) metastasize upward via the thoracic duct to lodge in the left supraclavicular lymph node, known as Virchow's node or Troisier's sign.",
    "explanationBn": "পেটের ক্যানসার থোরাসিক ডাক্ট (Thoracic duct)-এর মধ্য দিয়ে প্রবাহিত হয়ে বাম সুপ্রাক্ল্যাভিকুলার লিম্ফ নোডে ছড়িয়ে পড়ে ভিরচোস নোড তৈরি করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-9",
    "dayId": 5,
    "topic": "Male Reproductive Anatomy - Spermatogenesis",
    "difficulty": "EASY",
    "question": "In the male reproductive system, which structure is primarily responsible for the production of sperm?",
    "options": [
      "Prostate gland",
      "Seminiferous tubules",
      "Seminal vesicles",
      "Bulbourethral gland"
    ],
    "correctIndex": 1,
    "explanationEn": "The seminiferous tubules within the testes contain Sertoli cells and spermatogonia, acting as the primary anatomical site of spermatogenesis.",
    "explanationBn": "পুরুষের প্রজননতন্ত্রে শুক্রাণু উৎপাদনের মূল কারখানা হলো অণ্ডকোষে অবস্থিত সেমিনিফেরাস টিউবিউলস (Seminiferous tubules)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-10",
    "dayId": 5,
    "topic": "Stress Endocrinology - Cortisol",
    "difficulty": "EASY",
    "question": "Which hormone is most associated with the body's stress response?",
    "options": [
      "Calcitonin",
      "Cortisol",
      "Prolactin",
      "Melatonin"
    ],
    "correctIndex": 1,
    "explanationEn": "Cortisol (glucocorticoid secreted by the adrenal cortex) mobilizes glucose, suppresses non-essential inflammation, and adapts the body during physiological stress.",
    "explanationBn": "শারীরিক ও মানসিক চাপের সময় শরীরকে খাপ খাইয়ে নিতে অ্যাড্রিনাল কর্টেক্স থেকে নিঃসৃত প্রধান স্ট্রেস হরমোন হলো কর্টিসল (Cortisol)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-11",
    "dayId": 5,
    "topic": "Neurophysiology - Reflex Arc",
    "difficulty": "EASY",
    "question": "If a person touches a hot surface and quickly pulls their hand away, which type of nerves are primarily responsible for sending the signal to move the hand?",
    "options": [
      "Sensory nerves only",
      "Motor nerves",
      "Parasympathetic preganglionic fibers",
      "Olfactory nerves"
    ],
    "correctIndex": 1,
    "explanationEn": "In the somatic withdrawal reflex arc, sensory afferents carry pain into the spinal cord, but motor (efferent) nerves transmit impulses to effector skeletal muscles to contract and pull the limb away.",
    "explanationBn": "গরম কিছুতে হাত লাগলে হাত সরিয়ে নেওয়ার সংকেত মাংসপেশিতে বহন করে নিয়ে যায় মোটর নার্ভ বা চালক স্নায়ু (Motor nerves)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-12",
    "dayId": 4,
    "topic": "Cardiovascular Control - Baroreceptors",
    "difficulty": "EASY",
    "question": "What is the primary function of the baroreceptors located in the carotid sinus and aortic arch?",
    "options": [
      "Detect blood glucose levels",
      "Monitor blood pressure changes",
      "Measure blood oxygen saturation",
      "Assess serum calcium levels"
    ],
    "correctIndex": 1,
    "explanationEn": "Arterial baroreceptors are mechanoreceptors that detect stretch in the carotid sinus and aortic arch walls, providing beat-to-beat arterial blood pressure feedback to the medulla.",
    "explanationBn": "ক্যারোটিড সাইনাস ও অ্যাওর্টিক আর্চে থাকা ব্যারোরিসেপ্টরগুলোর মূল কাজ হলো রক্তচাপের তারতম্য বা পরিবর্তন পর্যবেক্ষণ করা (Monitor BP changes)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-13",
    "dayId": 4,
    "topic": "Cardiac Conduction - Interatrial Pathway",
    "difficulty": "HARD",
    "question": "Bachmann's bundle is often considered an extension of which of the following, and what is its primary function?",
    "options": [
      "Posterior internodal tract; activating ventricles",
      "Anterior internodal tract; activating the left atrium",
      "Bundle of His; activating right bundle branch",
      "Purkinje fibers; papillary muscle activation"
    ],
    "correctIndex": 1,
    "explanationEn": "Bachmann's bundle (interatrial tract) branches off the anterior internodal tract, rapidly conducting electrical action potentials from the SA node across the septum to depolarize the left atrium.",
    "explanationBn": "বাখম্যানস বান্ডিল (Bachmann's bundle) হলো অ্যান্টিরিয়র ইন্টারনোডাল ট্র্যাক্টের অংশ, যার কাজ হলো বিদ্যুৎ সংকেত দ্রুত বাম অলিন্দে (Left atrium) পৌঁছানো।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-14",
    "dayId": 5,
    "topic": "Renal Physiology - Homeostasis",
    "difficulty": "EASY",
    "question": "Which of the following organs play(s) the primary role in maintaining fluid and electrolyte balance in the human body?",
    "options": [
      "Spleen",
      "Kidneys",
      "Gallbladder",
      "Pancreas"
    ],
    "correctIndex": 1,
    "explanationEn": "The kidneys regulate water excretion, blood osmolality, and systemic concentrations of sodium, potassium, chloride, bicarbonate, and hydrogen ions.",
    "explanationBn": "মানবদেহে পানি এবং ইলেক্ট্রোলাইট বা লবণের সঠিক ভারসাম্য বজায় রাখার প্রধান চালিকাশক্তি হলো কিডনি বা বৃক্ক (Kidneys)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-15",
    "dayId": 5,
    "topic": "Gastrointestinal Histology - Layers",
    "difficulty": "EASY",
    "question": "The innermost layer of the gastrointestinal tract is named as:",
    "options": [
      "Serosa",
      "Muscularis externa",
      "Submucosa",
      "Mucosa"
    ],
    "correctIndex": 3,
    "explanationEn": "From inside to outside, the gut wall layers are: 1. Mucosa (epithelium, lamina propria, muscularis mucosae) -> 2. Submucosa -> 3. Muscularis externa -> 4. Serosa/adventitia.",
    "explanationBn": "পরিপাকতন্ত্রের নালীর সবচেয়ে ভেতরের আস্তরণটিকে মিউকোসা (Mucosa) স্তর বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-16",
    "dayId": 5,
    "topic": "Histology - Areolar Connective Tissue",
    "difficulty": "MEDIUM",
    "question": "The most widely distributed connective tissue in the body is:",
    "options": [
      "Dense elastic tissue",
      "Areolar",
      "Cartilage",
      "Bone"
    ],
    "correctIndex": 1,
    "explanationEn": "Areolar loose connective tissue is the most widely distributed tissue in the human body, packaging organs, supporting blood vessels, and underlying epithelia.",
    "explanationBn": "মানবদেহের বিভিন্ন অঙ্গ ও কলার মাঝে সবচেয়ে ব্যাপকভাবে বিস্তৃত সংযোজক কলা হলো অ্যারিওলার কলা (Areolar connective tissue)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-17",
    "dayId": 4,
    "topic": "Upper Respiratory Anatomy - Nasal Mucosa",
    "difficulty": "EASY",
    "question": "Which layer of the nasal cavity warms the inspired air during inhalation?",
    "options": [
      "Olfactory neuroepithelium",
      "Respiratory mucosa",
      "Ethmoid cribriform plate",
      "Cartilaginous septum"
    ],
    "correctIndex": 1,
    "explanationEn": "The respiratory mucosa lining nasal conchae possesses an extensive plexus of thin-walled venous sinuses that warm and humidify cool incoming air before it reaches the lungs.",
    "explanationBn": "শ্বাস নেওয়ার সময় নাকের ভেতরের রেসপিরেটরি মিউকোসা (Respiratory mucosa) স্তরটি বাইরের বাতাসকে উষ্ণ ও আর্দ্র করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-18",
    "dayId": 5,
    "topic": "Peripheral Nervous System - Obturator Nerve",
    "difficulty": "HARD",
    "question": "Which nerve is responsible for the adductor muscle of the thigh and skin of the medial aspect of the thigh?",
    "options": [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Tibial nerve"
    ],
    "correctIndex": 1,
    "explanationEn": "The obturator nerve (lumbar plexus L2-L4) innervates the medial compartment adductor muscles of the thigh (gracilis, adductor longus/brevis/magnus) and sensory medial thigh skin.",
    "explanationBn": "উরুর ভেতরের দিকের অ্যাডাক্টর পেশি এবং সংবেদনশীল ত্বকের অনুভূতি বহন করে অপটুরেটর নার্ভ (Obturator nerve)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-19",
    "dayId": 5,
    "topic": "Reproductive Endocrinology - Pubertal Hormones",
    "difficulty": "MEDIUM",
    "question": "Which hormone secreted from the pituitary gland stimulates the ovary to secrete estrogen in the adolescence period?",
    "options": [
      "Growth hormone",
      "Luteinizing hormone",
      "Thyroid stimulating hormone",
      "Oxytocin"
    ],
    "correctIndex": 1,
    "explanationEn": "Pulsatile release of pituitary gonadotropins, specifically Luteinizing Hormone (LH) and FSH, stimulates ovarian theca and granulosa cells to synthesize estrogens at puberty.",
    "explanationBn": "কৈশোরে পিটুইটারি গ্রন্থি থেকে ক্ষরিত লিউটিনাইজিং হরমোন (Luteinizing hormone) ডিম্বাশয়কে ইস্ট্রোজেন তৈরিতে উদ্দীপিত করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-20",
    "dayId": 4,
    "topic": "Hemodynamic Reflexes - Baroreceptor Reflex",
    "difficulty": "HARD",
    "question": "When a person's blood pressure rises, the haemostatic mechanism to compensate for an elevation involves stimulation of:",
    "options": [
      "Peripheral chemoreceptors causing vasoconstriction",
      "Baroreceptors that inhibit the sympathetic nervous system, causing vasodilation",
      "Renin release by juxtaglomerular cells",
      "Adrenal medulla catecholamine surge"
    ],
    "correctIndex": 1,
    "explanationEn": "Elevated arterial pressure stretches carotid baroreceptors, triggering cranial nerves IX and X to activate the solitary tract, which inhibits sympathetic outflow, slowing heart rate and causing vasodilation.",
    "explanationBn": "রক্তচাপ বৃদ্ধি পেলে ব্যারোরিসেপ্টর সক্রিয় হয়ে সিম্প্যাথেটিক নার্ভাস সিস্টেমকে বাধা দেয় এবং রক্তনালী প্রসারিত করে রক্তচাপ কমায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-21",
    "dayId": 4,
    "topic": "Cardiovascular Receptors - Baroreceptors",
    "difficulty": "EASY",
    "question": "Baroreceptors are sensitive to changes in:",
    "options": [
      "Arterial blood pressure",
      "Blood urea nitrogen",
      "Inspired oxygen fraction",
      "Skin temperature"
    ],
    "correctIndex": 0,
    "explanationEn": "Baroreceptors are sensory stretch receptors located in the walls of the carotid sinuses and aortic arch sensitive to variations in arterial blood pressure.",
    "explanationBn": "ব্যারোরিসেপ্টর ধমনীর রক্তচাপ বা আর্টারিয়াল ব্লাড প্রেশারের (Arterial blood pressure) পরিবর্তনের প্রতি অত্যন্ত সংবেদনশীল।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-22",
    "dayId": 5,
    "topic": "Digestive Motility - Muscularis Externa",
    "difficulty": "EASY",
    "question": "Which layer controls motility of the digestive tract?",
    "options": [
      "Epithelial serosa",
      "Submucosa",
      "Muscle layer",
      "Lumen"
    ],
    "correctIndex": 2,
    "explanationEn": "The muscularis externa (inner circular and outer longitudinal smooth muscle layers containing the myenteric Auerbach's plexus) coordinates gut peristalsis and segmentation.",
    "explanationBn": "পরিপাকতন্ত্রের পেরিস্টালসিস ও খাদ্য চলাচলের গতি নিয়ন্ত্রণ করে তার পেশী স্তর বা মাসল লেয়ার (Muscle layer)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-23",
    "dayId": 4,
    "topic": "Lower Limb Vascular Anatomy",
    "difficulty": "MEDIUM",
    "question": "Which artery supplies blood to the muscles of the proximal leg and knee joint?",
    "options": [
      "Popliteal artery",
      "Internal carotid artery",
      "Brachial artery",
      "Subclavian artery"
    ],
    "correctIndex": 0,
    "explanationEn": "The popliteal artery (continuation of the femoral artery traversing the popliteal fossa) provides genicular branches supplying the knee joint capsule, ligaments, and upper calf muscles.",
    "explanationBn": "হাঁটুর সন্ধি এবং সংলগ্ন পায়ের মাংসপেশিতে রক্ত সরবরাহ করে পপলিটিয়াল ধমনি (Popliteal artery)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-24",
    "dayId": 4,
    "topic": "Respiratory Anatomy - Paranasal Sinuses",
    "difficulty": "EASY",
    "question": "Which of the following best describes the role of the paranasal sinuses in respiration?",
    "options": [
      "They generate surfactant for the alveoli",
      "They enhance the voice resonance and lighten the skull",
      "They pump deoxygenated blood to the heart",
      "They exchange gases directly into the brain"
    ],
    "correctIndex": 1,
    "explanationEn": "The air-filled paranasal sinuses (frontal, maxillary, ethmoid, sphenoid) lighten the heavy bones of the skull and act as resonance chambers for voice acoustics.",
    "explanationBn": "প্যারানাসাল সাইনাসের প্রধান কাজ হলো মাথার খুলির ওজনকে হালকা রাখা এবং কণ্ঠস্বরের অনুরণন বা প্রতিধ্বনি (Voice resonance) তৈরি করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-25",
    "dayId": 5,
    "topic": "Special Senses - Extraocular Muscles",
    "difficulty": "MEDIUM",
    "question": "Which extraocular muscle is primarily responsible for abduction of the eye and outward rotation of the eyeball?",
    "options": [
      "Medial rectus",
      "Lateral rectus",
      "Superior rectus",
      "Inferior oblique"
    ],
    "correctIndex": 1,
    "explanationEn": "The lateral rectus muscle (innervated by the abducens nerve / CN VI) abducts the eyeball laterally away from the midline.",
    "explanationBn": "চোখের মণিকে বাইরের দিকে বা কানের দিকে ঘোরাতে (Abduction) সাহায্য করে ল্যাটেরাল রেকটাস পেশি (Lateral rectus)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-26",
    "dayId": 5,
    "topic": "Endocrine Anatomy - Parathyroid Glands",
    "difficulty": "EASY",
    "question": "The parathyroid glands are partially embedded in which surface of the lateral lobes of the thyroid?",
    "options": [
      "Anterior",
      "Posterior",
      "Superior pole only",
      "Isthmus"
    ],
    "correctIndex": 1,
    "explanationEn": "The four tiny parathyroid glands are typically embedded within the posterior aspect of the fibrous capsule of the thyroid lateral lobes.",
    "explanationBn": "প্যারাথাইরয়েড গ্রন্থিগুলো থাইরয়েড গ্রন্থির দুই পার্শ্বীয় লোবের পেছনের তলে (Posterior surface) প্রোথিত থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-27",
    "dayId": 4,
    "topic": "Abdominal Vascular Anatomy",
    "difficulty": "MEDIUM",
    "question": "Which artery supplies blood to the large intestine?",
    "options": [
      "Celiac trunk alone",
      "Mesenteric artery",
      "Renal artery",
      "Pulmonary artery"
    ],
    "correctIndex": 1,
    "explanationEn": "The superior and inferior mesenteric arteries branch off the abdominal aorta to supply the midgut and hindgut, including the entire cecum, colon, and rectum.",
    "explanationBn": "বৃহদন্ত্রে রক্ত সরবরাহকারী প্রধান ধমনি হলো মেসেন্টেরিক আর্টারি (Mesenteric artery বা সুপিরিয়র ও ইনফিরিয়র মেসেন্টেরিক ধমনি)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-28",
    "dayId": 4,
    "topic": "Cardiovascular Exercise Physiology",
    "difficulty": "HARD",
    "question": "Which factor increases heart rates of firing during exercise?",
    "options": [
      "Vagus nerve parasympathetic discharge",
      "Proprioceptors",
      "Severe hypothermia",
      "Carotid baroreceptor stretching"
    ],
    "correctIndex": 1,
    "explanationEn": "At the start of exercise, muscle and joint proprioceptors send sensory signals to cardiac centers, immediately increasing sympathetic discharge and heart rate before metabolic changes appear.",
    "explanationBn": "ব্যায়াম শুরু করার সাথে সাথে পেশি ও জয়েন্টে থাকা প্রোপ্রিওসেপ্টর (Proprioceptors) হৃদস্পন্দনের গতি দ্রুত বাড়িয়ে দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-29",
    "dayId": 12,
    "topic": "Acid-Base Chemistry - Phosphate Buffer",
    "difficulty": "HARD",
    "question": "The main elements of the phosphate buffer system are:",
    "options": [
      "NaCl and KCl",
      "NaH2PO4 and Na2HPO4",
      "CaCO3 and CaO",
      "HCl and NaOH"
    ],
    "correctIndex": 1,
    "explanationEn": "The phosphate buffer system consists of a weak acid (monosodium dihydrogen phosphate / NaH2PO4) and a weak base (disodium monohydrogen phosphate / Na2HPO4), crucial for renal tubular urine buffering.",
    "explanationBn": "ফসফেট বাফার সিস্টেমের প্রধান দুটি উপাদান হলো ডাইহাইড্রোজেন ফসফেট (NaH2PO4) এবং মনোডাইসোডিয়াম ফসফেট (Na2HPO4)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-30",
    "dayId": 5,
    "topic": "Histology - Reticular Connective Tissue",
    "difficulty": "MEDIUM",
    "question": "Which connective tissue forms the supporting framework of the liver, spleen, and lymph nodes?",
    "options": [
      "Dense regular tendon tissue",
      "Reticular connective tissue",
      "Hyaline cartilage",
      "Adipose tissue"
    ],
    "correctIndex": 1,
    "explanationEn": "Reticular connective tissue consists of delicate networks of type III collagen (reticular fibers) forming the cellular stroma or framework (stroma) of parenchymal lymphatic and hematopoietic organs.",
    "explanationBn": "যকৃত, প্লীহা এবং লিম্ফ নোডের মতো নরম অঙ্গের অভ্যন্তরীণ কাঠামো তৈরি করে রেটিকুলার সংযোজক কলা (Reticular connective tissue)।"
  },
  {
    "section": "NURSING",
    "id": "cen-ap-31",
    "dayId": 4,
    "topic": "Thoracic Lymphatics - Mediastinal Nodes",
    "difficulty": "EASY",
    "question": "Lymph nodes found in the chest, near the lungs and heart, are called:",
    "options": [
      "Inguinal lymph nodes",
      "Axillary lymph nodes",
      "Mediastinal lymph nodes",
      "Cervical lymph nodes"
    ],
    "correctIndex": 2,
    "explanationEn": "Mediastinal lymph nodes are located in the central chest cavity (mediastinum) surrounding the trachea, bronchi, great vessels, and heart.",
    "explanationBn": "বুকের ভেতরের মধ্যবর্তী স্থানে ফুসফুস ও হৃদপিণ্ডের কাছাকাছি থাকা লিম্ফ নোডগুলোকে মিডিয়াস্টিনাল লিম্ফ নোড (Mediastinal lymph nodes) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-1",
    "dayId": 3,
    "topic": "Nosocomial Infections - HAI Definition",
    "difficulty": "EASY",
    "question": "A patient develops a urinary tract infection two days after being admitted to the nursing home for surgery. Which of the following best describes this infection?",
    "options": [
      "Congenital infection",
      "Hospital-acquired infection after admission",
      "Pre-existing latent childhood infection",
      "Community-acquired infection prior to admission"
    ],
    "correctIndex": 1,
    "explanationEn": "An infection acquired 48 hours or more after hospital or facility admission (which was not incubating at admission) is defined as a Hospital-Acquired Infection (HAI) or nosocomial infection.",
    "explanationBn": "হাসপাতালে ভর্তির ৪৮ ঘণ্টা বা ২ দিন পর নতুন কোনো সংক্রমণ (যেমন ক্যাথেটার থেকে UTI) হলে তাকে হাসপাতাল-অর্জিত সংক্রমণ বা HAI বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-2",
    "dayId": 7,
    "topic": "Bacteriological Staining - Gram Stain",
    "difficulty": "EASY",
    "question": "What is the primary purpose of Gram staining in microbiology?",
    "options": [
      "To measure viral particle velocity",
      "To differentiate bacteria into Gram-positive and Gram-negative",
      "To determine bacterial antibiotic allergy in 5 seconds",
      "To stain eukaryotic nuclear chromosomes"
    ],
    "correctIndex": 1,
    "explanationEn": "Gram staining distinguishes bacterial species based on cell wall peptidoglycan thickness into Gram-positive (thick peptidoglycan, purple) and Gram-negative (thin peptidoglycan with LPS outer membrane, pink).",
    "explanationBn": "গ্রাম স্টেইনিংয়ের প্রধান উদ্দেশ্য হলো ব্যাকটেরিয়ার কোষপ্রাচীরের গঠন অনুযায়ী তাদের গ্রাম-পজিটিভ এবং গ্রাম-নেগেটিভ শ্রেণীতে বিভক্ত করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-3",
    "dayId": 7,
    "topic": "Normal Flora Disruption - Dysbiosis",
    "difficulty": "MEDIUM",
    "question": "Following a course of broad-spectrum antibiotics, a patient develops gastrointestinal discomfort. Which change in the normal flora is most likely responsible for this symptom?",
    "options": [
      "Complete proliferation of beneficial bifidobacteria",
      "Disruption of gut flora balance leads to symptoms",
      "Hypertrophy of stomach parietal cells",
      "Immediate sterilization of colon"
    ],
    "correctIndex": 1,
    "explanationEn": "Broad-spectrum antibiotics eradicate protective commensal gut bacteria, causing dysbiosis, reducing short-chain fatty acids, and allowing overgrowth of opportunistic pathogens (e.g., Clostridium difficile).",
    "explanationBn": "অতিরিক্ত ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক ব্যবহারের ফলে অন্ত্রের উপকারী স্বাভাবিক জীবাণুর ভারসাম্য নষ্ট হয় (Disruption of gut flora), যার ফলে পেটের সমস্যা দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-4",
    "dayId": 3,
    "topic": "Physical Disinfection - Filtration",
    "difficulty": "MEDIUM",
    "question": "Which of the following pairs correctly matches a method with its principle for controlling microbes?",
    "options": [
      "Autoclaving - uses dry chemical gases only",
      "Filtration - removes microbes without killing them",
      "Boiling - creates high-energy ionizing gamma rays",
      "Freezing - permanently incinerates all bacterial spores"
    ],
    "correctIndex": 1,
    "explanationEn": "Filtration (e.g., 0.22 micron membrane filters or HEPA filters) physically separates and sieves out microorganisms from heat-labile liquids or air without destroying/killing them.",
    "explanationBn": "ফিল্ট্রেশন পদ্ধতির মূল বৈশিষ্ট্য হলো এটি জীবাণুকে ধ্বংস বা হত্যা না করেই চালুনির মতো ছেঁকে শরীর বা দ্রবণ থেকে আলাদা (Removes microbes without killing) করে দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-5",
    "dayId": 7,
    "topic": "Microbial Pathogenicity - Virulence",
    "difficulty": "EASY",
    "question": "Which factor describes the ability of a microbe to cause disease in a host?",
    "options": [
      "Symbiosis",
      "Virulence",
      "Commensalism",
      "Mutualism"
    ],
    "correctIndex": 1,
    "explanationEn": "Virulence refers to the degree of pathogenicity or quantitative ability of an infectious organism to overcome host defenses, invade tissues, and produce disease.",
    "explanationBn": "একটি জীবাণুর মানবদেহে রোগ সৃষ্টি করার ক্ষমতা বা মাত্রাকে ভিরুলেন্স (Virulence) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-6",
    "dayId": 7,
    "topic": "Acute Inflammation Cellular Response",
    "difficulty": "EASY",
    "question": "Which cell type is mainly involved during the early stage of inflammation?",
    "options": [
      "Plasma cells",
      "Neutrophils",
      "T memory lymphocytes",
      "Basophils"
    ],
    "correctIndex": 1,
    "explanationEn": "Neutrophils (polymorphonuclear leukocytes) are the first responders in acute inflammation, rapidly migrating to the site within 6 to 24 hours to engulf invaders.",
    "explanationBn": "তীব্র প্রদাহ বা ইনফ্ল্যামেশনের প্রাথমিক পর্যায়ে সবার আগে ঘটনাস্থলে ছুটে আসে নিউট্রোফিল (Neutrophils) রক্তকণিকা।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-7",
    "dayId": 7,
    "topic": "Classification of Microorganisms",
    "difficulty": "EASY",
    "question": "Which microorganism is typically classified as a eukaryote?",
    "options": [
      "Bacteria",
      "Protozoa",
      "Bacteriophages",
      "Prions"
    ],
    "correctIndex": 1,
    "explanationEn": "Protozoa (e.g., Amoeba, Plasmodium, Giardia) are single-celled eukaryotic organisms possessing a true membrane-bound nucleus and specialized organelles.",
    "explanationBn": "প্রোটোজোয়া (Protozoa) হলো প্রকৃত নিউক্লিয়াসযুক্ত সুগঠিত এককোষী ইউক্যারিওটিক বা প্রকৃতকোষী অণুজীব।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-8",
    "dayId": 7,
    "topic": "Immunotherapy Mechanisms",
    "difficulty": "HARD",
    "question": "What is the main mechanism of action for immunotherapy in treating allergic diseases?",
    "options": [
      "Complete surgical removal of the spleen",
      "Desensitizing the immune response to specific allergens",
      "Permanently suppressing all red blood cell formation",
      "Inducing immediate systemic anaphylaxis"
    ],
    "correctIndex": 1,
    "explanationEn": "Allergen immunotherapy (desensitization) involves administering gradually escalating doses of allergen extracts to shift antibody production from IgE to protective IgG4 and induce regulatory T cells.",
    "explanationBn": "অ্যালার্জি চিকিৎসায় ইমিউনোথেরাপির মূল উদ্দেশ্য হলো অ্যালার্জেনের প্রতি অতিরিক্ত রোগ প্রতিরোধ প্রতিক্রিয়া ধীরে ধীরে কমিয়ে সহনশীল বা সংবেদনহীন (Desensitizing) করে তোলা।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-9",
    "dayId": 7,
    "topic": "Infection Classifications - Endogenous",
    "difficulty": "MEDIUM",
    "question": "A middle-aged man with poorly controlled diabetes develops a foot ulcer, which becomes infected with bacteria that are part of his normal skin flora. Which type of infection is this?",
    "options": [
      "Exogenous waterborne infection",
      "An endogenous infection from resident bacteria",
      "Vector-borne zoonotic disease",
      "Direct droplet aerosol contagion"
    ],
    "correctIndex": 1,
    "explanationEn": "Endogenous infections occur when members of the host's normal resident commensal microbiota breach compromised physical barriers to establish an opportunistic infection.",
    "explanationBn": "শরীরের নিজস্ব ত্বকে বসবাসকারী স্বাভাবিক জীবাণু ক্ষত দিয়ে প্রবেশ করে রোগ তৈরি করলে তাকে এন্ডোজেনাস সংক্রমণ (Endogenous infection) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-10",
    "dayId": 7,
    "topic": "Virology - Viral Genome Structure",
    "difficulty": "MEDIUM",
    "question": "Which of the following hepatitis viruses is classified as a DNA virus?",
    "options": [
      "Hepatitis A virus",
      "Hepatitis B virus",
      "Hepatitis C virus",
      "Hepatitis E virus"
    ],
    "correctIndex": 1,
    "explanationEn": "Hepatitis B virus (HBV) is a hepadnavirus with a partially double-stranded circular DNA genome; all other major hepatitis viruses (A, C, D, E) are RNA viruses.",
    "explanationBn": "হেপাটাইটিস ভাইরাসগুলোর মধ্যে একমাত্র হেপাটাইটিস বি ভাইরাস (Hepatitis B virus) হলো একটি ডিএনএ (DNA) ভাইরাস; বাকিগুলো সব আরএনএ ভাইরাস।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-11",
    "dayId": 7,
    "topic": "Chemical Mediators of Inflammation",
    "difficulty": "EASY",
    "question": "Which cell mediator of inflammation stimulates smooth muscle contraction?",
    "options": [
      "Interferon gamma",
      "Histamine",
      "Albumin",
      "Hemoglobin"
    ],
    "correctIndex": 1,
    "explanationEn": "Histamine, released by mast cells and basophils, binds H1 receptors to cause smooth muscle contraction in bronchi and GI tract, alongside potent arteriolar vasodilation.",
    "explanationBn": "প্রদাহ বা অ্যালার্জির সময় নিঃসৃত হিস্টামিন (Histamine) শ্বাসনালীর মসৃণ পেশি সংকোচন বা ব্রঙ্কোস্পাজম ঘটায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-12",
    "dayId": 7,
    "topic": "Innate Immunity - Opsonization",
    "difficulty": "HARD",
    "question": "The role of the complement system in opsonization affects which response of the inflammatory process?",
    "options": [
      "Vascular permeability response",
      "Cellular",
      "Neural reflex arc",
      "Bone marrow erythropoiesis"
    ],
    "correctIndex": 1,
    "explanationEn": "Complement fragment C3b coats (opsonizes) microbial surfaces, allowing phagocytes (neutrophils and macrophages) to bind and ingest pathogens, constituting the cellular response.",
    "explanationBn": "কমপ্লিমেন্ট সিস্টেম অপসোনাইজেশনের মাধ্যমে ফ্যাগোসাইটিক কোষকে জীবাণু ধ্বংসে সাহায্য করে, যা প্রদাহের সেলুলার বা কোষীয় প্রক্রিয়ার (Cellular response) অংশ।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-13",
    "dayId": 7,
    "topic": "Bacterial Environmental Requirements",
    "difficulty": "MEDIUM",
    "question": "The microbes that can grow at pH below 5 are known as:",
    "options": [
      "Neutrophiles",
      "Alkaliphiles",
      "Acidophiles",
      "Halophiles"
    ],
    "correctIndex": 2,
    "explanationEn": "Acidophiles are extremophilic microorganisms that thrive and reproduce in acidic environments with pH values lower than 5.0 (e.g., Lactobacillus, Helicobacter, Thiobacillus).",
    "explanationBn": "যেসব অণুজীব ৫-এর কম অ্যাসিডিক পিএইচ (pH < 5) মাত্রায় স্বাভাবিকভাবে বেড়ে উঠতে পারে তাদের অ্যাসিডোফাইলস (Acidophiles) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-14",
    "dayId": 7,
    "topic": "Bacterial Morphology - Streptococcus",
    "difficulty": "EASY",
    "question": "Streptococcus pneumoniae is a ____ type of bacteria.",
    "options": [
      "Gram negative bacilli",
      "Gram positive cocci",
      "Acid fast bacilli",
      "Spiral spirochete"
    ],
    "correctIndex": 1,
    "explanationEn": "Streptococcus pneumoniae (pneumococcus) is a lancet-shaped Gram-positive coccus that typically appears arranged in pairs (diplococci) or short chains.",
    "explanationBn": "স্ট্রেপ্টোকক্কাস নিউমোনি (Streptococcus pneumoniae) হলো একটি গ্রাম-পজিটিভ কক্কাই (Gram positive cocci) বা গোলাকার ব্যাক্টেরিয়ার উদাহরণ।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-15",
    "dayId": 7,
    "topic": "Immunodeficiency Virology - HIV Targets",
    "difficulty": "EASY",
    "question": "In an individual, Human Immunodeficiency Virus (HIV) infects which cell in the immune system?",
    "options": [
      "Erythrocytes",
      "T helper cells",
      "Neutrophils",
      "Platelets"
    ],
    "correctIndex": 1,
    "explanationEn": "The HIV envelope glycoprotein gp120 binds specifically to the CD4 surface receptor on T-helper (CD4+) lymphocytes and macrophages, leading to their progressive depletion.",
    "explanationBn": "এইচআইভি (HIV) ভাইরাস মানবদেহের রোগ প্রতিরোধ ব্যবস্থার টি-হেল্পার বা সিডি৪ কোষকে (T helper cells) আক্রমণ ও ধ্বংস করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-16",
    "dayId": 7,
    "topic": "Diagnostic Bacteriology - Pseudomonas",
    "difficulty": "HARD",
    "question": "The primary test to identify Pseudomonas aeruginosa in the laboratory is:",
    "options": [
      "Coagulase test",
      "Oxidase test (positive)",
      "Indole negative test",
      "Catalase negative test"
    ],
    "correctIndex": 1,
    "explanationEn": "Pseudomonas aeruginosa is an obligate aerobic Gram-negative rod that produces cytochrome c oxidase, yielding a rapid, characteristic deep purple reaction in the oxidase test.",
    "explanationBn": "ল্যাবরেটরিতে সিউডোমোনাস অ্যারুগিনোসা ব্যাকটেরিয়া শনাক্ত করার সবচেয়ে প্রাথমিক ও প্রধান পরীক্ষা হলো অক্সিডেজ পজিটিভ টেস্ট (Oxidase test positive)।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-17",
    "dayId": 7,
    "topic": "Cell-Mediated Immunity",
    "difficulty": "MEDIUM",
    "question": "The cell which is primarily responsible for immunity to intracellular viruses, tumor cells, and fungi is:",
    "options": [
      "B-lymphocytes",
      "T cytotoxic cells",
      "Erythrocytes",
      "Basophils"
    ],
    "correctIndex": 1,
    "explanationEn": "CD8+ Cytotoxic T-lymphocytes (CTLs) directly recognize viral and tumor antigens presented on MHC Class I molecules, releasing perforins and granzymes to induce target cell apoptosis.",
    "explanationBn": "ভাইরাস দ্বারা আক্রান্ত কোষ, ক্যানসার কোষ এবং ফাঙ্গাসকে সরাসরি ধ্বংস করে শরীরের কোষভিত্তিক রোগ প্রতিরোধ গড়ে তোলে টি-সাইটোটক্সিক কোষ (T cytotoxic cells)।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-18",
    "dayId": 7,
    "topic": "Humoral Immunity Regulation",
    "difficulty": "EASY",
    "question": "Humoral immunity is regulated by:",
    "options": [
      "T-suppressor cells",
      "B-Lymphocytes",
      "Monocytes alone",
      "Eosinophils"
    ],
    "correctIndex": 1,
    "explanationEn": "Humoral (antibody-mediated) immunity is mediated by B-lymphocytes, which differentiate into plasma cells that secrete circulating antigen-specific immunoglobulins.",
    "explanationBn": "হিউমোরাল বা অ্যান্টিবডি নির্ভর রোগ প্রতিরোধ ক্ষমতা মূলত বি-লিম্ফোসাইট (B-Lymphocytes) দ্বারা পরিচালিত ও নিয়ন্ত্রিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-19",
    "dayId": 7,
    "topic": "Immunopathology - Autoimmune Diseases",
    "difficulty": "EASY",
    "question": "Which immunity leads to the development of autoimmune disorders in an individual?",
    "options": [
      "Innate mucosal immunity",
      "Autoimmunity",
      "Passive artificial immunity",
      "Herd immunity"
    ],
    "correctIndex": 1,
    "explanationEn": "Autoimmunity is a breakdown of self-tolerance in which the immune system mounts adaptive cellular or antibody attacks against the body's own normal healthy tissues.",
    "explanationBn": "যখন শরীরের নিজস্ব রোগ প্রতিরোধ ব্যবস্থা নিজের সুস্থ অঙ্গ বা কোষের বিরুদ্ধে আক্রমণ শুরু করে, সেই অবস্থাকে অটোইমিউনিটি (Autoimmunity) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-20",
    "dayId": 7,
    "topic": "Microbial Nutrition & Metabolism",
    "difficulty": "MEDIUM",
    "question": "The microbes that use chemical compounds as a source of energy are known as:",
    "options": [
      "Phototrophs",
      "Chemotrophs",
      "Autotrophs exclusively",
      "Lithotrophs only"
    ],
    "correctIndex": 1,
    "explanationEn": "Chemotrophs obtain metabolic energy through the oxidation of organic or inorganic chemical compounds, in contrast to phototrophs which harvest energy from sunlight.",
    "explanationBn": "যেসব জীবাণু বিভিন্ন রাসায়নিক যৌগ ভেঙে শক্তি বা খাদ্য সংগ্রহ করে বেঁচে থাকে তাদের কেমোট্রফস (Chemotrophs) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-21",
    "dayId": 7,
    "topic": "Cellular Immunology - Phagocytosis",
    "difficulty": "EASY",
    "question": "The process by which macrophages engulf microorganisms and cellular debris refers to:",
    "options": [
      "Pinocytosis",
      "Phagocytosis",
      "Exocytosis",
      "Apoptosis"
    ],
    "correctIndex": 1,
    "explanationEn": "Phagocytosis ('cell eating') is the endocytic mechanism by which specialized phagocytes (macrophages, dendritic cells, neutrophils) engulf, internalize, and digest particulate matter.",
    "explanationBn": "ম্যাক্রোফেজ কোষ দ্বারা জীবাণু ও মৃত কোষের ধ্বংসাবশেষ গিলে ফেলে ধ্বংস করার প্রক্রিয়াকে ফ্যাগোসাইটোসিস (Phagocytosis) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-22",
    "dayId": 7,
    "topic": "Clinical Monitoring in HIV",
    "difficulty": "EASY",
    "question": "What laboratory test is used to monitor disease progression and immune status in HIV-positive patients?",
    "options": [
      "Serum uric acid test",
      "CD4+ T cell count",
      "Random blood sugar",
      "Serum creatinine"
    ],
    "correctIndex": 1,
    "explanationEn": "Absolute CD4+ T-lymphocyte count measures remaining immune competence in HIV patients, guiding opportunistic infection prophylaxis and staging disease progression.",
    "explanationBn": "এইচআইভি পজিটিভ রোগীর শরীরের রোগ প্রতিরোধ ক্ষমতার সার্বিক অবস্থা ও রোগের তীব্রতা পর্যবেক্ষণে সিডি৪ টি-সেল কাউন্ট (CD4+ T cell count) পরীক্ষা করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-micro-23",
    "dayId": 7,
    "topic": "Bacterial Growth Physiology - Optimal pH",
    "difficulty": "MEDIUM",
    "question": "The pH range that supports optimal growth for most bacteria is:",
    "options": [
      "2.0–3.5",
      "5.0–6.0",
      "7.2–7.6",
      "9.5–11.0"
    ],
    "correctIndex": 2,
    "explanationEn": "Most human pathogenic bacteria are neutrophiles, requiring an optimal near-neutral physiological pH between 7.2 and 7.6 to maintain enzymatic and metabolic activity.",
    "explanationBn": "অধিকাংশ রোগ সৃষ্টিকারী ব্যাকটেরিয়ার বংশবৃদ্ধির জন্য সবচেয়ে অনুকূল ও আদর্শ পিএইচ মাত্রা হলো ৭.২ থেকে ৭.৬ (7.2–7.6)।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-1",
    "dayId": 14,
    "topic": "Drug Legislation - NDPS Act 1985",
    "difficulty": "MEDIUM",
    "question": "What is a key provision of the Narcotic Drugs and Psychotropic Substances (NDPS) Act, 1985, regarding medical use?",
    "options": [
      "Narcotics can be purchased without a prescription over the counter",
      "Medical use is allowed only under strict regulation",
      "All medical use of opioids is completely banned",
      "Only dentists are authorized to prescribe narcotics"
    ],
    "correctIndex": 1,
    "explanationEn": "Under India's NDPS Act 1985, essential narcotic drugs (morphine, fentanyl, etc.) are strictly regulated for medical and scientific purposes under licensed, documented custody.",
    "explanationBn": "ভারতে NDPS আইন (1985) অনুযায়ী নারকোটিক ওষুধ শুধুমাত্র চিকিৎসার প্রয়োজনে কঠোর নিয়ম ও নথিপত্র মেনে ব্যবহারের অনুমতি দেওয়া হয়েছে।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-2",
    "dayId": 14,
    "topic": "Dosage Forms & Routes - Topical Formulations",
    "difficulty": "EASY",
    "question": "In a clinical scenario, a patient with a skin infection requires a drug that acts directly at the site of infection. Which drug form should be selected?",
    "options": [
      "Sublingual tablet",
      "Intramuscular depot injection",
      "Topical cream",
      "Intravenous bolus"
    ],
    "correctIndex": 2,
    "explanationEn": "Topical creams or ointments provide direct localized therapeutic drug concentrations at cutaneous infection sites while avoiding unnecessary systemic absorption and side effects.",
    "explanationBn": "ত্বকের নির্দিষ্ট স্থানে সংক্রমণের চিকিৎসার জন্য ওষুধ সরাসরি আক্রান্ত স্থানে কাজ করাতে মলম বা ট্রপিক্যাল ক্রিম (Topical cream) ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-3",
    "dayId": 14,
    "topic": "Chemotherapy Occupational Safety",
    "difficulty": "MEDIUM",
    "question": "Which route of exposure presents the highest risk for nurses handling chemotherapy drugs?",
    "options": [
      "Inhalation of aerosols and dermal absorption",
      "Accidental oral ingestion with food",
      "Intravenous needle-stick injury only",
      "Conjunctival contact alone"
    ],
    "correctIndex": 0,
    "explanationEn": "Nurses compounding and administering antineoplastics face highest occupational hazard via airborne aerosol inhalation and direct skin contact/dermal permeation.",
    "explanationBn": "ক্যানসারের কেমোথেরাপি ওষুধ তৈরির সময় নার্সদের জন্য সবচেয়ে বড় ঝুঁকি হলো বাতাসে ছড়িয়ে থাকা অ্যারোসল নিঃশ্বাসের সাথে নেওয়া এবং ত্বকে শোষণ হওয়া।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-4",
    "dayId": 14,
    "topic": "Otic Formulations - Otitis Externa",
    "difficulty": "MEDIUM",
    "question": "Which of the following ear drops is used for the treatment of swimmer's ear?",
    "options": [
      "Gentian violet solution",
      "Acetic acid",
      "Hydrogen peroxide 30%",
      "Absolute alcohol"
    ],
    "correctIndex": 1,
    "explanationEn": "Dilute 2% acetic acid otic drops restore an acidic pH to the external auditory canal, inhibiting the growth of Pseudomonas and fungi responsible for acute otitis externa (swimmer's ear).",
    "explanationBn": "সুইমার্স ইয়ার (কানের বহিরাংশের সংক্রমণ)-এর চিকিৎসায় কানের অম্লীয় পরিবেশ ফিরিয়ে আনতে অ্যাসিটিক অ্যাসিড (Acetic acid) ইয়ার ড্রপ ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-5",
    "dayId": 14,
    "topic": "Gastrointestinal Pharmacology - Antacids",
    "difficulty": "EASY",
    "question": "Drugs that relieve indigestion and heartburn by neutralizing stomach acid are known as:",
    "options": [
      "Antacids",
      "Emetics",
      "Prokinetics",
      "Laxatives"
    ],
    "correctIndex": 0,
    "explanationEn": "Antacids (e.g., aluminum hydroxide, magnesium hydroxide, calcium carbonate) are weak alkaline bases that chemically buffer and neutralize hydrochloric acid in the stomach.",
    "explanationBn": "যেসব ওষুধ পাকস্থলীর অতিরিক্ত অ্যাসিড প্রশমিত করে বদহজম ও বুকজ্বালা দূর করে তাদের অ্যান্টাসিড (Antacids) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-6",
    "dayId": 14,
    "topic": "Intravenous Anesthetics - Etomidate",
    "difficulty": "HARD",
    "question": "In patients with which of the following disease conditions is the drug Etomidate ideally used for general anesthesia?",
    "options": [
      "Severe chronic adrenal insufficiency",
      "Cardiovascular problems",
      "Advanced liver cirrhosis",
      "Uncontrolled grand mal epilepsy"
    ],
    "correctIndex": 1,
    "explanationEn": "Etomidate is the induction agent of choice in hemodynamically unstable and cardiac patients because it produces minimal myocardial depression and preserves systemic vascular resistance.",
    "explanationBn": "হৃদরোগে আক্রান্ত রোগীদের অ্যানাস্থেসিয়া দেওয়ার ক্ষেত্রে ইটমিডেট (Etomidate) ড্রাগটি সবচেয়ে নিরাপদ কারণ এটি রক্তচাপ ও হার্টের কার্যক্ষমতা ব্যাহত করে না।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-7",
    "dayId": 14,
    "topic": "Pharmaceutical Formulations - Syrups",
    "difficulty": "EASY",
    "question": "A concentrated solution of sugar containing the drug to mask the bitter taste of the drug is called:",
    "options": [
      "Tincture",
      "Elixir",
      "Syrup",
      "Suspension"
    ],
    "correctIndex": 2,
    "explanationEn": "A syrup is a concentrated aqueous solution of sugar (e.g., 66.7% w/w sucrose in Simple Syrup IP) formulated with flavoring agents to mask bitter drugs for pediatric and adult oral use.",
    "explanationBn": "ওষুধের তিতকুটে স্বাদ ঢাকতে চিনির ঘন দ্রবণ ব্যবহার করে তৈরি তরল ওষুধকে সিরাপ (Syrup) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-8",
    "dayId": 14,
    "topic": "Antiarrhythmic Drugs - Amiodarone",
    "difficulty": "HARD",
    "question": "What is the mechanism of action of Amiodarone?",
    "options": [
      "Class I fast sodium channel blocker",
      "Class II beta-adrenergic blocker",
      "Class III antiarrhythmic drug",
      "Class IV calcium channel blocker"
    ],
    "correctIndex": 2,
    "explanationEn": "Amiodarone is predominantly classified as a Vaughan-Williams Class III antiarrhythmic that prolongs action potential duration and refractory period primarily by blocking potassium channels.",
    "explanationBn": "অ্যামিওডারন (Amiodarone) মূলত একটি ক্লাস ৩ (Class III) অ্যান্টিঅ্যারিদমিক ওষুধ যা কার্ডিয়াক পটাশিয়াম চ্যানেল বন্ধ করে কাজ করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-9",
    "dayId": 14,
    "topic": "Renal Pharmacology - Erythropoietin",
    "difficulty": "EASY",
    "question": "Which drug is used for the treatment of anemia associated with renal failure?",
    "options": [
      "Folic acid alone",
      "Erythropoietin",
      "Vitamin B12 intramuscular",
      "Heparin"
    ],
    "correctIndex": 1,
    "explanationEn": "Recombinant human erythropoietin (epoetin alfa/beta) replaces the deficient endogenous glycoprotein hormone normally synthesized by peritubular capillary endothelial cells in healthy kidneys.",
    "explanationBn": "কিডনি ফেইলিওরের রোগীদের রক্তস্বল্পতা দূর করতে রক্তকণিকা তৈরিকারী এরিথ্রোপয়েটিন (Erythropoietin) হরমোন ইনজেকশন দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-10",
    "dayId": 14,
    "topic": "Pharmaceutical Formulations - Dosage Forms",
    "difficulty": "EASY",
    "question": "Which of the following is NOT a solid form for administration of drugs by the oral route?",
    "options": [
      "Tablet",
      "Capsule",
      "Elixir",
      "Powder"
    ],
    "correctIndex": 2,
    "explanationEn": "An elixir is a clear, sweetened, hydroalcoholic liquid oral dosage form, whereas tablets, capsules, and oral powders are solid dosage forms.",
    "explanationBn": "ট্যাবলেট ও ক্যাপসুল কঠিন হলেও এলিক্সির (Elixir) হলো একটি মিষ্টি অ্যালকোহলযুক্ত তরল ওষুধ, এটি কোনো কঠিন রূপ নয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-11",
    "dayId": 14,
    "topic": "Adverse Drug Interactions - Beta Blockers in Anaphylaxis",
    "difficulty": "HARD",
    "question": "Which of the following medications can worsen anaphylactic shock by blocking the effects of epinephrine?",
    "options": [
      "Proton pump inhibitors",
      "Beta-blockers",
      "ACE inhibitors",
      "Loop diuretics"
    ],
    "correctIndex": 1,
    "explanationEn": "Beta-adrenergic blockers antagonize the positive inotropic, chronotropic, and bronchodilating effects of epinephrine, resulting in severe refractory anaphylactic shock and unopposed alpha-vasoconstriction.",
    "explanationBn": "বিটা-ব্লকার ওষুধ গ্রহণকারী রোগীদের ক্ষেত্রে এপিনেফ্রিনের কার্যকারিতা আটকে গিয়ে অ্যানাফিল্যাক্টিক শক মারাত্মক রূপ নিতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-12",
    "dayId": 14,
    "topic": "Chemotherapeutic Antimetabolites - 5-FU",
    "difficulty": "HARD",
    "question": "Which chemotherapeutic agent is used to treat colorectal cancer and works by inhibiting thymidylate synthase?",
    "options": [
      "Cisplatin",
      "5-Fluorouracil (5-FU)",
      "Vincristine",
      "Doxorubicin"
    ],
    "correctIndex": 1,
    "explanationEn": "5-Fluorouracil (5-FU) is a pyrimidine analog antimetabolite that irreversibly inhibits thymidylate synthase, blocking thymidine synthesis and DNA replication in colorectal carcinoma.",
    "explanationBn": "কোলন ক্যানসারের চিকিৎসায় ব্যবহৃত ৫-ফ্লুরোইউরাসিল (5-FU) ওষুধটি থাইমিডিলেট সিন্থেজ এনজাইমকে বাধা দিয়ে ক্যানসার কোষের বৃদ্ধি থামায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-13",
    "dayId": 14,
    "topic": "Diuretic Adverse Effects - Hypokalemia",
    "difficulty": "MEDIUM",
    "question": "Which symptom should the nurse assess when a patient receives loop diuretics?",
    "options": [
      "Hyperactive reflexes and tetany",
      "Weak, irregular pulse, and poor muscle tone",
      "Severe constipation with hypercalcemia",
      "Hypertension with bounding pulse"
    ],
    "correctIndex": 1,
    "explanationEn": "Loop diuretics (e.g., furosemide) cause massive renal potassium wasting; hypokalemia manifests with cardiac dysrhythmias (irregular, weak pulse), generalized muscle weakness, and fatigue.",
    "explanationBn": "লুপ ডাইইউরেটিকস দিলে শরীর থেকে পটাশিয়াম কমে যায় (Hypokalemia), যার ফলে দুর্বল অনিয়মিত নাড়ি এবং মাংসপেশির দুর্বলতা দেখা দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-14",
    "dayId": 14,
    "topic": "Pharmacokinetics - Triamterene Duration",
    "difficulty": "HARD",
    "question": "The effect of a single dose of triamterene lasts for how many hours?",
    "options": [
      "2–4 hours",
      "6–8 hours",
      "12–16 hours",
      "36–48 hours"
    ],
    "correctIndex": 2,
    "explanationEn": "Triamterene is an epithelial sodium channel (ENaC) blocker potassium-sparing diuretic whose natriuretic and antikaliuretic pharmacodynamic effect persists for 12 to 16 hours.",
    "explanationBn": "পটাশিয়াম-স্পেয়ারিং মূত্রবর্ধক ওষুধ ট্রায়ামটেরিন (Triamterene)-এর একটি ডোজের কার্যকারিতা প্রায় ১২ থেকে ১৬ ঘণ্টা (12–16 hours) স্থায়ী থাকে।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-15",
    "dayId": 14,
    "topic": "Hematopoietic Growth Factors - Neutropenia",
    "difficulty": "MEDIUM",
    "question": "As a prophylactic measure, ____ is used to prevent chemotherapy-induced neutropenia when highly myelosuppressive chemotherapy drugs are used.",
    "options": [
      "Platelet rich plasma",
      "WBC growth factors",
      "Whole blood transfusion",
      "High-dose multivitamins"
    ],
    "correctIndex": 1,
    "explanationEn": "Recombinant Granulocyte Colony-Stimulating Factor (G-CSF / Filgrastim, Pegfilgrastim) accelerates neutrophil recovery and prevents life-threatening febrile neutropenia after myelosuppressive chemotherapy.",
    "explanationBn": "কেমোথেরাপির পর শ্বেতকণিকা মারাত্মক কমে যাওয়া রোধ করতে প্রোফাইল্যাক্সিস হিসেবে WBC গ্রোথ ফ্যাক্টর বা G-CSF ইনজেকশন দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-16",
    "dayId": 14,
    "topic": "Cell Cycle Specific Chemotherapy - Taxanes",
    "difficulty": "HARD",
    "question": "Which of the following is a cell cycle-specific drug that targets the M phase?",
    "options": [
      "Methotrexate (S phase)",
      "Paclitaxel",
      "Cyclophosphamide",
      "Bleomycin (G2 phase)"
    ],
    "correctIndex": 1,
    "explanationEn": "Paclitaxel (taxane) binds to beta-tubulin subunits, hyper-stabilizing mitotic spindle microtubules and preventing cell division during the Mitotic (M) phase of the cell cycle.",
    "explanationBn": "প্যাক্লিট্যাক্সেল (Paclitaxel) হলো এমন একটি অ্যান্টিক্যানসার ওষুধ যা কোষ বিভাজনের এম-ফেজ বা মাইটোটিক দশাকে (M phase) সরাসরি টার্গেট করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-17",
    "dayId": 14,
    "topic": "Adjuvant Analgesics - Neuropathic Pain",
    "difficulty": "MEDIUM",
    "question": "An example of adjuvant analgesic therapy for pain management is:",
    "options": [
      "Morphine sulfate",
      "GABA Receptor Agonist",
      "Acetaminophen",
      "Ibuprofen"
    ],
    "correctIndex": 1,
    "explanationEn": "GABA receptor agonists and analogues (such as Gabapentin, Pregabalin, Baclofen) are adjuvant analgesics specifically indicated for neuropathic and chronic centrally mediated pain.",
    "explanationBn": "স্নায়ুর জটিল ব্যথায় মূল ব্যথানাশকের সহযোগী (Adjuvant analgesic) হিসেবে GABA রিসেপ্টর অ্যাগোনিস্ট (যেমন গ্যাবাপেন্টিন) ওষুধ ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-18",
    "dayId": 13,
    "topic": "Inflammatory Bowel Disease Pharmacotherapy",
    "difficulty": "HARD",
    "question": "Which of the following tissue inflammations is treated by administering the drug Balsalazide?",
    "options": [
      "Gastric mucosa ulceration",
      "Bowel mucosa",
      "Renal glomerular cortex",
      "Pulmonary pleural lining"
    ],
    "correctIndex": 1,
    "explanationEn": "Balsalazide is an anti-inflammatory prodrug cleaved in the colon into mesalamine (5-ASA), directly treating chronic mucosal inflammation in ulcerative colitis.",
    "explanationBn": "বালসালাজাইড (Balsalazide) ওষুধটি অন্ত্রের মিউকোসার দীর্ঘমেয়াদী প্রদাহ বা আলসারেটিভ কোলাইটিস নিরাময়ে দেওয়া হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-19",
    "dayId": 14,
    "topic": "Chemotherapy Safe Administration Routes",
    "difficulty": "MEDIUM",
    "question": "Which route is used to administer a chemotherapeutic agent to minimize the associated physical discomforts and risks of infection and infiltration by the intravenous method?",
    "options": [
      "Peripheral vein in the dorsum of the foot",
      "Central venous route",
      "Intradermal route",
      "Subcutaneous fatty tissue of abdomen"
    ],
    "correctIndex": 1,
    "explanationEn": "Central venous access devices (PICC lines, implanted chemo ports) deliver vesicant antineoplastics into high-flow central veins (superior vena cava), minimizing extravasation injury and phlebitis.",
    "explanationBn": "কেমোথেরাপির ওষুধ হাত বা পায়ের ছোট শিরা ফুটো হয়ে টিস্যু ক্ষতিগ্রস্ত হওয়া রোধ করতে সেন্ট্রাল ভেনাস রুট (যেমন কেমোপোর্ট বা PICC line) ব্যবহার করা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-pharma-20",
    "dayId": 14,
    "topic": "Potassium-Sparing Diuretic Safety",
    "difficulty": "EASY",
    "question": "Which of the following electrolytes should be monitored while administering Triamterene drug?",
    "options": [
      "Calcium level",
      "Potassium level",
      "Phosphorus level",
      "Iron level"
    ],
    "correctIndex": 1,
    "explanationEn": "Triamterene is a potassium-sparing diuretic that blocks sodium reabsorption and reduces potassium excretion in the distal nephron, putting patients at risk of hyperkalemia.",
    "explanationBn": "ট্রায়ামটেরিন একটি পটাশিয়াম-স্পেয়ারিং ওষুধ হওয়ায় রোগীর রক্তে পটাশিয়ামের মাত্রা (Potassium level) নিবিড়ভাবে পর্যবেক্ষণ করতে হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-1",
    "dayId": 21,
    "topic": "Suicide Risk Assessment & Misconceptions",
    "difficulty": "MEDIUM",
    "question": "What is a common misconception regarding suicide risk in patients who start feeling better after depression?",
    "options": [
      "They develop bipolar mania immediately",
      "They are at reduced risk and do not require monitoring",
      "They never attempt suicide in hospital settings",
      "Their cognitive abilities decrease permanently"
    ],
    "correctIndex": 1,
    "explanationEn": "A dangerous clinical misconception is that improving depression eliminates suicide risk; paradoxically, as energy levels recover, patients gain the physical motivation to carry out planned suicidal intent.",
    "explanationBn": "রোগী ডিপ্রেশন থেকে কিছুটা ভালো বোধ করলে আত্মহত্যার ঝুঁকি কমে গেছে মনে করে নজরদারি বন্ধ করে দেওয়া একটি মারাত্মক ভুল ধারণা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-2",
    "dayId": 21,
    "topic": "Psychology - Personality Development",
    "difficulty": "MEDIUM",
    "question": "In personality development, how does 'will' typically interact with 'character'?",
    "options": [
      "Will completely dismantles moral character",
      "Will enables one to act in alignment with their character",
      "Character and will function in total independence",
      "Will creates random impulsive motor tics"
    ],
    "correctIndex": 1,
    "explanationEn": "In psychological theory, 'character' provides the enduring moral framework, while 'will' provides volitional effort and agency, allowing an individual to act congruently with their moral convictions.",
    "explanationBn": "ব্যক্তিত্ব বিকাশে একজন মানুষের সংকল্প বা ইচ্ছাশক্তি (Will) তাকে তার নিজস্ব চরিত্র ও নীতি অনুযায়ী কাজ করতে চালিত করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-3",
    "dayId": 21,
    "topic": "Theoretical Psychology - Dynamics of Behaviour",
    "difficulty": "EASY",
    "question": "Which of the following best defines the 'dynamics of behaviour' in psychology?",
    "options": [
      "The mechanical calculation of nerve conduction velocity",
      "Underlying forces influencing human actions",
      "The physical weight of human brain matter",
      "The chemical formula of adrenaline"
    ],
    "correctIndex": 1,
    "explanationEn": "Dynamics of behavior examines the conscious and unconscious psychological forces, internal drives, biological needs, and environmental stimuli that motivate human conduct.",
    "explanationBn": "মনোবিজ্ঞানে 'ডায়নামিক্স অব বিহেভিয়ার' বলতে মানুষের চিন্তাভাবনা ও কাজকর্মকে প্রভাবিতকারী অভ্যন্তরীণ মনস্তাত্ত্বিক শক্তিকে বোঝায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-4",
    "dayId": 21,
    "topic": "Forensic Psychiatry Nursing Standards",
    "difficulty": "MEDIUM",
    "question": "In forensic psychiatry, following nursing standards helps to:",
    "options": [
      "Force patients to confess crimes without representation",
      "Reduce risk of legal liability for nurses and institutions",
      "Abolish the need for patient documentation",
      "Exempt all psychiatric patients from legal laws"
    ],
    "correctIndex": 1,
    "explanationEn": "Adhering to statutory psychiatric nursing practice standards, documentation guidelines, and patient rights safeguards patient welfare and shields nurses and hospitals from tort liability.",
    "explanationBn": "ফরেনসিক সাইকিয়াট্রিতে সুনির্দিষ্ট নার্সিং মানদণ্ড অনুসরণ করলে রোগীর অধিকার রক্ষা পায় এবং নার্সদের আইনি জটিলতা বা দায়ের ঝুঁকি কমে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-5",
    "dayId": 21,
    "topic": "Mental Health Assessment Techniques",
    "difficulty": "EASY",
    "question": "Which interview technique best encourages a patient to elaborate on their feelings during a mental health assessment?",
    "options": [
      "Rapid-fire yes/no interrogations",
      "Open-ended questioning",
      "Challenging the veracity of delusions aggressively",
      "Giving unsolicited personal advice"
    ],
    "correctIndex": 1,
    "explanationEn": "Open-ended questions (e.g., 'How have things been feeling for you recently?') give patients narrative freedom to describe subjective affective states without feeling constrained.",
    "explanationBn": "রোগীকে নিজের মনের অনুভূতি ও কষ্ট বিস্তারিতভাবে প্রকাশ করতে সাহায্য করার জন্য ওপেন-এন্ডেড প্রশ্ন (Open-ended questioning) সবচেয়ে উপযোগী।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-6",
    "dayId": 21,
    "topic": "Psychological Assessment - Nonverbal Cues",
    "difficulty": "EASY",
    "question": "When a nurse combines information about a patient's verbal communication and nonverbal cues during psychological assessment, what is the nurse primarily aiming to understand?",
    "options": [
      "The patient's financial credit history",
      "The patient's mental and emotional state",
      "The patient's visual acuity for glasses",
      "The patient's dietary caloric balance"
    ],
    "correctIndex": 1,
    "explanationEn": "Correlating verbal content with nonverbal behavior (affect, posture, eye contact, psychomotor agitation) provides a congruent assessment of underlying emotional and cognitive state.",
    "explanationBn": "রোগীর মুখের কথার সাথে তার অঙ্গভঙ্গি ও আচরণ মিলিয়ে দেখার মূল উদ্দেশ্য হলো তার প্রকৃত মানসিক ও আবেগীয় অবস্থা উপলব্ধি করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-7",
    "dayId": 21,
    "topic": "Anxiety Disorders - Acute Panic Attack",
    "difficulty": "EASY",
    "question": "When caring for a patient experiencing a panic attack, which nursing intervention is most appropriate?",
    "options": [
      "Leaving the patient alone in an empty dark room",
      "Remain calm and stay with the patient",
      "Conducting an in-depth psychoeducational exam",
      "Shouting instructions across the hallway"
    ],
    "correctIndex": 1,
    "explanationEn": "During acute panic with overwhelming autonomic arousal, the nurse's calm, non-judgmental physical presence and brief reassurance reduce catastrophic fear and restore safety.",
    "explanationBn": "প্যানিক অ্যাটাকে আক্রান্ত রোগীর ক্ষেত্রে সবচেয়ে জরুরি হলো নিজে শান্ত থাকা এবং রোগীকে একা ফেলে না রেখে তার পাশে থাকা (Stay with patient)।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-8",
    "dayId": 21,
    "topic": "Psychosocial Nursing - Therapeutic Presence",
    "difficulty": "EASY",
    "question": "Which of the following best describes the nurse's role in addressing a patient's psychological needs during hospitalization?",
    "options": [
      "Disregarding all emotional distress to save time",
      "Providing emotional support and active listening",
      "Administering heavy sedatives for any sadness",
      "Referring every minor worry to police authorities"
    ],
    "correctIndex": 1,
    "explanationEn": "Providing non-judgmental emotional support, active listening, and addressing fears related to illness and hospitalization validate the patient's holistic humanity.",
    "explanationBn": "হাসপাতালে রোগীর মানসিক সুস্থতা বজায় রাখতে নার্সের প্রধান ভূমিকা হলো রোগীকে মানসিক সাহস দেওয়া এবং মনোযোগ সহকারে তার কথা শোনা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-9",
    "dayId": 21,
    "topic": "Cognitive Psychology - Intelligence Definitions",
    "difficulty": "EASY",
    "question": "Which of the following best describes intelligence?",
    "options": [
      "The capacity to memorize dictionary pages without comprehension",
      "The ability to learn and adapt to new situations",
      "Having high physical muscular strength",
      "Speaking loudly in public debates"
    ],
    "correctIndex": 1,
    "explanationEn": "Psychologically, intelligence is broadly defined as the aggregate global capacity of an individual to think rationally, learn from experience, and adapt effectively to environmental challenges.",
    "explanationBn": "মনোবিজ্ঞানে বুদ্ধিমত্তা বা ইন্টেলিজেন্স হলো নতুন অভিজ্ঞতা থেকে শেখার এবং যেকোনো নতুন পরিস্থিতির সাথে খাপ খাইয়ে নেওয়ার ক্ষমতা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-10",
    "dayId": 21,
    "topic": "Stigma in Mental Health",
    "difficulty": "EASY",
    "question": "A nurse believes that people with mental illness are dangerous. How might this misconception affect her professional behavior?",
    "options": [
      "It will make her a more compassionate clinician",
      "It may cause her to avoid or treat patients with prejudice, reducing quality of care",
      "It ensures early diagnostic accuracy for all patients",
      "It improves medication therapeutic indices"
    ],
    "correctIndex": 1,
    "explanationEn": "Stigmatizing biases and unfounded fears lead healthcare providers to avoid psychiatric clients, exhibit subtle discrimination, and deliver substandard, dismissive care.",
    "explanationBn": "মানসিক রোগীরা বিপজ্জনক—নার্সের মনে এমন কুসংস্কার থাকলে তা রোগীকে অবহেলা বা বৈষম্যমূলক আচরণে চালিত করে সেবার মান হ্রাস করতে পারে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-11",
    "dayId": 21,
    "topic": "Cognitive Behavioral Therapy - Restructuring",
    "difficulty": "MEDIUM",
    "question": "Which technique is most commonly used in psychosocial therapy to help clients change negative thought patterns?",
    "options": [
      "Electroconvulsive therapy",
      "Cognitive restructuring",
      "Hypnotherapy with amnesia",
      "Continuous sleep therapy"
    ],
    "correctIndex": 1,
    "explanationEn": "Cognitive restructuring (CBT) helps clients identify automatic negative thoughts (cognitive distortions) and systematically challenge and replace them with rational, adaptive perspectives.",
    "explanationBn": "মন থেকে নেতিবাচক চিন্তার প্যাটার্ন দূর করে ইতিবাচক ও বাস্তবসম্মত চিন্তা তৈরির থেরাপিউটিক কৌশলকে কগনিটিভ রিস্ট্রাকচারিং বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-12",
    "dayId": 21,
    "topic": "Community Mental Health - Peer Support",
    "difficulty": "MEDIUM",
    "question": "A nurse is tasked with creating a peer support network for individuals with chronic mental illness in the community. Which action best promotes empowerment?",
    "options": [
      "Making all decisions authoritatively without member input",
      "Encouraging clients to lead meetings and share experiences",
      "Limiting members from speaking about recovery",
      "Restricting meeting attendance to doctors only"
    ],
    "correctIndex": 1,
    "explanationEn": "Client-led peer meetings foster collective agency, shared lived experience, mutual empathy, and personal empowerment in chronic psychiatric rehabilitation.",
    "explanationBn": "কমিউনিটিতে মানসিক রোগীদের ক্ষমতায়নের সেরা উপায় হলো তাদের নিজেদের মিটিং পরিচালনা করতে এবং নিজেদের অভিজ্ঞতা ভাগাভাগি করতে উৎসাহিত করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-13",
    "dayId": 21,
    "topic": "Cognitive Psychology - Attention & Perception",
    "difficulty": "MEDIUM",
    "question": "Which statement accurately describes the relationship between attention and perception?",
    "options": [
      "Attention and perception are identical terms",
      "Attention acts as a filter for perception of information",
      "Perception always precedes attention",
      "Attention eliminates all sensory input"
    ],
    "correctIndex": 1,
    "explanationEn": "Selective attention functions as a cognitive filter (Broadbent's filter model) that prioritizes relevant environmental sensory stimuli for deeper perceptual processing and awareness.",
    "explanationBn": "আমাদের ইন্দ্রিয় দিয়ে অনুধাবন বা পারসেপশনের ক্ষেত্রে মনোযোগ (Attention) একটি ছাঁকনি বা ফিল্টার হিসেবে কাজ করে অপ্রয়োজনীয় তথ্য বাদ দেয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-14",
    "dayId": 21,
    "topic": "Personality Disorders - Dependent Type",
    "difficulty": "MEDIUM",
    "question": "Which of the following best describes a person with dependent personality disorder?",
    "options": [
      "Has grandiose beliefs of superior genius",
      "Has difficulty making everyday decisions without advice or reassurance from others",
      "Experiences chronic auditory command hallucinations",
      "Shows persistent disregard for the legal rights of others"
    ],
    "correctIndex": 1,
    "explanationEn": "Cluster C Dependent Personality Disorder is characterized by a pervasive, excessive need to be taken care of, leading to submissive clinging behavior and inability to make decisions alone.",
    "explanationBn": "ডিপেন্ডেন্ট পার্সোনালিটি ডিসঅর্ডারে আক্রান্ত ব্যক্তি অন্যের সাহায্য ও সমর্থন ছাড়া দৈনন্দিন সাধারণ সিদ্ধান্তগুলো নিতেও চরম দ্বিধাদ্বন্দ্বে ভোগে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-15",
    "dayId": 21,
    "topic": "Philosophy of Mind - Dualism",
    "difficulty": "HARD",
    "question": "A doctor treats both physical symptoms and emotional stress in a patient, believing that the mind and body affect each other. Which theory does this approach best reflect?",
    "options": [
      "Radical behaviorism",
      "Dualism",
      "Biological reductionism",
      "Solipsism"
    ],
    "correctIndex": 1,
    "explanationEn": "Cartesian interactionist dualism posits that while mind and physical body are distinct entities, they continuously exert bidirectional causal influences on each other.",
    "explanationBn": "মন ও শরীর দুটি ভিন্ন সত্তা কিন্তু তারা একে অপরের ওপর গভীর প্রভাব ফেলে—এই তত্ত্বটি ডুয়ালিজম (Dualism বা দ্বৈতবাদ) তত্ত্বের প্রতিফলন।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-16",
    "dayId": 21,
    "topic": "Learning Theories - Operant Conditioning",
    "difficulty": "EASY",
    "question": "Operant conditioning is defined as:",
    "options": [
      "Involuntary reflex salivation to sound bells",
      "Learning in which behavior is strengthened or weakened by consequences",
      "Unconscious repression of traumatic memories",
      "Genetic transmission of traits across generations"
    ],
    "correctIndex": 1,
    "explanationEn": "B.F. Skinner's Operant Conditioning is an associative learning process where the probability of a voluntary behavior is modified by reinforcement (reward) or punishment.",
    "explanationBn": "অপারেন্ট কন্ডিশনিং হলো এমন এক ধরণের শিখন পদ্ধতি যেখানে কাজের ভালো বা খারাপ পরিণতির (Consequences) ভিত্তিতে আচরণ শক্তিশালী বা দুর্বল হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-17",
    "dayId": 21,
    "topic": "National Mental Health Programme Strategies",
    "difficulty": "MEDIUM",
    "question": "Which of the following is a key strategy of the National Mental Health Programme?",
    "options": [
      "Centralizing all psychiatric care into two large metropolitan asylums",
      "Decentralization of mental health services",
      "Banning outpatient counseling clinics",
      "Confining all mentally ill patients permanently"
    ],
    "correctIndex": 1,
    "explanationEn": "A foundational pillar of India's NMHP/DMHP is decentralizing psychiatric care down to primary health centers and community health centers, integrating it with general healthcare.",
    "explanationBn": "জাতীয় মানসিক স্বাস্থ্য কর্মসূচির অন্যতম প্রধান কৌশল হলো মানসিক স্বাস্থ্য সেবাকে দূরবর্তী অঞ্চলে বিকেন্দ্রীকরণ (Decentralization of services) করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-18",
    "dayId": 21,
    "topic": "Mental Status Examination - Facial Affect",
    "difficulty": "MEDIUM",
    "question": "What expression should be observed on the face while examining the mental health of an uncooperative patient?",
    "options": [
      "Grimacing violently",
      "Placid",
      "Terrified screaming",
      "Contemptuous sneering"
    ],
    "correctIndex": 1,
    "explanationEn": "In psychiatric semiology, a calm, neutral, tranquil, or impassive facial demeanor in an otherwise uncooperative or uncommunicative patient is documented as 'placid'.",
    "explanationBn": "অসহযোগিতাপূর্ণ মানসিক রোগীর মানসিক স্বাস্থ্য পরীক্ষার সময় তার মুখে শান্ত ও নির্বিকার ভাব বা প্ল্যাসিড (Placid) অভিব্যক্তি লক্ষ্য করা যায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-19",
    "dayId": 21,
    "topic": "Mental Healthcare Act 2017 - IPC Section 309",
    "difficulty": "HARD",
    "question": "What is the major amendment done under Penal Code Section 309 in the Mental Healthcare Act, May 29, 2018?",
    "options": [
      "Mandatory imprisonment for all who attempt suicide",
      "Decriminalization of attempted suicide",
      "Doubling fine penalties for depressive patients",
      "Revoking citizenship of self-harm victims"
    ],
    "correctIndex": 1,
    "explanationEn": "Section 115 of the Mental Healthcare Act 2017 (effective May 2018) effectively decriminalized attempted suicide (IPC 309), presuming severe stress and mandating state-sponsored psychiatric care.",
    "explanationBn": "মেন্টাল হেলথকেয়ার অ্যাক্ট (2018) অনুযায়ী আত্মহত্যার চেষ্টাকে অপরাধমুক্ত (Decriminalization of attempted suicide) ঘোষণা করা হয়েছে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-20",
    "dayId": 21,
    "topic": "Behavioral Psychology - Punishment",
    "difficulty": "EASY",
    "question": "Which stimulus, if given to an individual, will decrease the probability that a previous behavior will repeat again?",
    "options": [
      "Positive reinforcement",
      "Punishment",
      "Negative reinforcement",
      "Continuous reward"
    ],
    "correctIndex": 1,
    "explanationEn": "In operant conditioning, punishment (positive or negative) is an aversive consequence that serves specifically to decrease or extinguish the frequency of an undesired behavior.",
    "explanationBn": "অপারেন্ট কন্ডিশনিং অনুযায়ী যে উদ্দীপক কোনো অনাকাঙ্ক্ষিত আচরণের পুনরাবৃত্তি ঘটার সম্ভাবনা কমিয়ে দেয় তাকে শাস্তি বা পানিশমেন্ট (Punishment) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-21",
    "dayId": 21,
    "topic": "Psychiatric Nursing - Crisis Intervention",
    "difficulty": "MEDIUM",
    "question": "During crisis intervention, the psychiatric nurse is responsible for:",
    "options": [
      "Conducting long-term five-year psychoanalysis",
      "Providing immediate support and de-escalation techniques",
      "Prescribing lifelong high-dose antipsychotics",
      "Leaving the client completely alone to problem-solve"
    ],
    "correctIndex": 1,
    "explanationEn": "Crisis intervention focuses on the immediate present: delivering rapid psychological first aid, ensuring acute safety, and using verbal de-escalation to restore pre-crisis equilibrium.",
    "explanationBn": "ক্রাইসিস বা তীব্র মানসিক সংকটের মুহূর্তে সাইকিয়াট্রিক নার্সের মূল দায়িত্ব হলো রোগীকে তাৎক্ষণিক মানসিক সমর্থন ও উত্তেজনা প্রশমিত করা (De-escalation)।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-22",
    "dayId": 21,
    "topic": "Theories of Intelligence - Spearman",
    "difficulty": "MEDIUM",
    "question": "The Two-factor theory of intelligence was published by:",
    "options": [
      "Howard Gardner",
      "Charles Spearman",
      "Alfred Binet",
      "David Wechsler"
    ],
    "correctIndex": 1,
    "explanationEn": "Charles Spearman (1904) proposed the Two-Factor Theory of Intelligence, postulating that intellectual performance is governed by a general factor ('g') and specific factors ('s').",
    "explanationBn": "বুদ্ধিমত্তার দ্বি-উপাদান তত্ত্ব বা টু-ফ্যাক্টর থিওরি (Two-factor theory of intelligence) প্রবর্তন করেন মনোবিজ্ঞানী চার্লস স্পিয়ারম্যান।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-23",
    "dayId": 21,
    "topic": "Mental Hygiene Principles",
    "difficulty": "EASY",
    "question": "Mental hygiene primarily refers to:",
    "options": [
      "Washing hair with antiseptic soap",
      "The practice and study of maintaining and promoting mental health",
      "Memorizing textbook chapters under stress",
      "Isolating oneself from social communities"
    ],
    "correctIndex": 1,
    "explanationEn": "Mental hygiene is the science and public health discipline dedicated to preserving psychological well-being, fostering adaptive coping skills, and preventing mental disorders.",
    "explanationBn": "মেন্টাল হাইজিন বা মানসিক পরিচ্ছন্নতা বলতে মূলত মানসিক সুস্বাস্থ্য বজায় রাখা ও উন্নয়নের চর্চাকে (Maintaining and promoting mental health) বোঝায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-24",
    "dayId": 21,
    "topic": "Psychophysiological Diagnostics - GSR",
    "difficulty": "HARD",
    "question": "Which psychophysiological measure can supplement traditional psychometric assessment of emotion perception?",
    "options": [
      "Serum albumin assay",
      "Galvanic skin response (GSR)",
      "Urine specific gravity",
      "Erythrocyte sedimentation rate (ESR)"
    ],
    "correctIndex": 1,
    "explanationEn": "Galvanic Skin Response (GSR / electrodermal activity) measures skin electrical conductance changes induced by sympathetic eccrine sweat gland activation during emotional arousal.",
    "explanationBn": "মানুষের আবেগ ও উত্তেজনার শারীরবৃত্তীয় পরিমাপের জন্য ত্বকের বৈদ্যুতিক পরিবাহিতা বা গ্যালভানিক স্কিন রেসপন্স (GSR) ব্যবহৃত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-25",
    "dayId": 21,
    "topic": "Psychotherapy - Milieu Therapy",
    "difficulty": "MEDIUM",
    "question": "In which psychotherapy does the nurse set a goal to create a safe, secure, and therapeutic environment to maximize recovery and enhance patient autonomy?",
    "options": [
      "Psychoanalysis",
      "Milieu therapy",
      "Systematic desensitization",
      "Aversion therapy"
    ],
    "correctIndex": 1,
    "explanationEn": "Milieu therapy structures the entire inpatient social and physical environment into a safe, therapeutic community that promotes social learning, interpersonal growth, and autonomy.",
    "explanationBn": "হাসপাতালের পরিবেশকে নিরাপদ ও আরোগ্যদায়ক করে রোগীর মানসিক বিকাশ ঘটানোর চিকিৎসাকে মিলিউ থেরাপি (Milieu therapy) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-26",
    "dayId": 21,
    "topic": "Counseling Psychology - Rogers Core Conditions",
    "difficulty": "MEDIUM",
    "question": "Which element of counselling refers to the genuine, authentic presence of the counselor?",
    "options": [
      "Empathy",
      "Congruence",
      "Unconditional positive regard",
      "Transference"
    ],
    "correctIndex": 1,
    "explanationEn": "In Carl Rogers' person-centered counseling, Congruence (genuineness or realness) means the counselor is open, authentic, and without professional front or facade.",
    "explanationBn": "কাউন্সেলিং প্রক্রিয়ায় কাউন্সেলরের আন্তরিক, অকৃত্রিম ও খোলামেলা উপস্থিতিকে কনগ্রুয়েন্স (Congruence) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-27",
    "dayId": 18,
    "topic": "Pediatric Psychiatry - Play Therapy",
    "difficulty": "EASY",
    "question": "For individuals with mental retardation, during play therapy the nurse should consider:",
    "options": [
      "Enforcing complex competitive rule games",
      "Tailoring play tasks according to intellectual level",
      "Forbidding touching any toys",
      "Administering timed IQ tests during play"
    ],
    "correctIndex": 1,
    "explanationEn": "Developmentally appropriate play therapy requires tailoring tasks, toys, and communication to the child's developmental age and intellectual capability rather than chronological age.",
    "explanationBn": "বুদ্ধিবৃত্তিক প্রতিবন্ধকতাযুক্ত শিশুর ক্ষেত্রে প্লে-থেরাপির সময় খেলাধুলার কাজগুলোকে তার মানসিক ও বুদ্ধির স্তরের উপযোগী (Tailoring play tasks) করে তৈরি করা উচিত।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-28",
    "dayId": 22,
    "topic": "Developmental Psychology - Early Adulthood",
    "difficulty": "MEDIUM",
    "question": "Which psychological development is at its peak during early adulthood (20–40 years)?",
    "options": [
      "Visual sensory decline",
      "Social connectedness",
      "Childhood magical fantasy thinking",
      "Egocentric separation anxiety"
    ],
    "correctIndex": 1,
    "explanationEn": "According to Erikson's Intimacy vs. Isolation stage, early adulthood represents the peak of forging deep interpersonal bonds, vocational networks, and social connectedness.",
    "explanationBn": "প্রাথমিক বয়ঃসন্ধি পেরিয়ে তারুণ্যে বা আর্লি অ্যাডাল্টহুডে (২০–৪০ বছর) সামাজিক সম্পর্ক ও মেলবন্ধন (Social connectedness) সর্বোচ্চ পর্যায়ে পৌঁছায়।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-29",
    "dayId": 21,
    "topic": "National Mental Health Program History",
    "difficulty": "HARD",
    "question": "The National Mental Health Programme was launched in the year ____ with a goal to ensure availability of Mental Health Care Services for all.",
    "options": [
      "1972",
      "1982",
      "1995",
      "2005"
    ],
    "correctIndex": 1,
    "explanationEn": "The Government of India launched the National Mental Health Programme (NMHP) in 1982 to ensure accessible, equitable, and community-based mental healthcare across the nation.",
    "explanationBn": "ভারতে সকলের জন্য মানসিক স্বাস্থ্য সেবা পৌঁছে দেওয়ার উদ্দেশ্যে ১৯৮২ সালে (1982) জাতীয় মানসিক স্বাস্থ্য কর্মসূচি (NMHP) চালু করা হয়েছিল।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-30",
    "dayId": 21,
    "topic": "Psychoanalytic Theory - Freud",
    "difficulty": "MEDIUM",
    "question": "According to Freud, the part of the mind that is most associated with ineffective personality development is:",
    "options": [
      "Conscious",
      "Preconscious",
      "Unconscious",
      "Super-ego exclusively"
    ],
    "correctIndex": 2,
    "explanationEn": "Freudian psychoanalysis posits that repressed traumatic memories, primitive instincts, and unresolved childhood complexes trapped in the unconscious cause neuroses and maladaptive development.",
    "explanationBn": "ফ্রয়েডের মনস্তত্ত্ব অনুযায়ী ব্যক্তিত্বের ত্রুটিপূর্ণ বা অস্বাভাবিক বিকাশের জন্য মনের অবচেতন স্তর বা আনকনশাস (Unconscious) সবচেয়ে বেশি দায়ী।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-31",
    "dayId": 21,
    "topic": "Early Detection of Mental Illness",
    "difficulty": "EASY",
    "question": "Which of the following is a warning sign of mental illness?",
    "options": [
      "Consistent restful 8-hour sleep",
      "Inability to cope with problems and daily activities",
      "Feeling joyful after achieving a goal",
      "Eating a balanced breakfast daily"
    ],
    "correctIndex": 1,
    "explanationEn": "A progressive decline in functional coping capacity, inability to perform basic daily living activities, social withdrawal, and affective distress are major warning signs of mental illness.",
    "explanationBn": "দৈনন্দিন সাধারণ সমস্যা বা কাজগুলো সামলাতে তীব্র ব্যর্থতা ও অক্ষমতা (Inability to cope) মানসিক অসুস্থতার একটি প্রাথমিক সতর্কবার্তা।"
  },
  {
    "section": "NURSING",
    "id": "cen-psych-32",
    "dayId": 21,
    "topic": "District Mental Health Program (DMHP) Team",
    "difficulty": "HARD",
    "question": "The District Mental Health Program team typically includes all of the following, EXCEPT:",
    "options": [
      "A Psychiatrist",
      "A Clinical Psychologist",
      "A Psychiatric Nurse",
      "A Neurosurgeon"
    ],
    "correctIndex": 3,
    "explanationEn": "The standard DMHP multidisciplinary team comprises a Psychiatrist, Clinical Psychologist, Psychiatric Social Worker, and Psychiatric Nurse; a neurosurgeon is a surgical super-specialist not part of DMHP community units.",
    "explanationBn": "জেলা মানসিক স্বাস্থ্য দলের (DMHP) মধ্যে মনোরোগ বিশেষজ্ঞ, সাইকোলজিস্ট ও সাইকিয়াট্রিক নার্স থাকলেও নিউরোসার্জন (A Neurosurgeon) অন্তর্ভুক্ত থাকেন না।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-1",
    "dayId": 22,
    "topic": "Medical Sociology - Biopsychosocial Model",
    "difficulty": "EASY",
    "question": "The study of sociology is important because of all the following reasons EXCEPT:",
    "options": [
      "It helps understand patient social backgrounds",
      "It focuses only on bio-medical model of care",
      "It reveals cultural beliefs influencing health seeking",
      "It examines health disparities across socioeconomic classes"
    ],
    "correctIndex": 1,
    "explanationEn": "Sociology broadens medical perspective beyond the narrow biomedical reductionist model, emphasizing socioeconomic, environmental, and behavioral determinants of health.",
    "explanationBn": "সমাজবিজ্ঞান স্বাস্থ্য ও চিকিৎসার ক্ষেত্রে সামাজিক ও সাংস্কৃতিক প্রভাব বোঝাতে সাহায্য করে; এটি কেবল সংকীর্ণ বায়োমেডিক্যাল মডেলের মধ্যে সীমাবদ্ধ থাকে না।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-2",
    "dayId": 22,
    "topic": "Sociology - Social Justice in Health",
    "difficulty": "MEDIUM",
    "question": "Which action best demonstrates an individual's responsibility to promote social justice in healthcare?",
    "options": [
      "Prioritizing care exclusively for wealthy patients",
      "Advocating for equitable access and treatment for all patient populations",
      "Refusing to treat marginalized minority communities",
      "Charging extra fees for emergency care"
    ],
    "correctIndex": 1,
    "explanationEn": "Promoting social justice in healthcare requires active advocacy for non-discriminatory, equitable access to quality health services regardless of caste, creed, or income.",
    "explanationBn": "স্বাস্থ্যসেবায় সামাজিক ন্যায়বিচার প্রতিষ্ঠার মূল উপায় হলো ধর্ম, বর্ণ বা অর্থ নির্বিশেষে সকল রোগীর জন্য সমতাভিত্তিক সেবার পক্ষে কাজ করা।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-3",
    "dayId": 22,
    "topic": "Social Control Mechanisms - Formal Control",
    "difficulty": "EASY",
    "question": "Formal social control is most closely associated with which of the following?",
    "options": [
      "Family folkways and informal gossip",
      "Laws and official regulations",
      "Spontaneous peer approval",
      "Unwritten neighborhood customs"
    ],
    "correctIndex": 1,
    "explanationEn": "Formal social control is codified, institutionalized, and enforced by authorized state or legal bodies through written laws, statutes, and official regulations.",
    "explanationBn": "ফর্মাল বা প্রথাগত সামাজিক নিয়ন্ত্রণ মূলত রাষ্ট্র কর্তৃক প্রণীত আনুষ্ঠানিক আইন ও বিধিমালার (Laws and official regulations) মাধ্যমে পরিচালিত হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-4",
    "dayId": 22,
    "topic": "Social Institutions - Marriage",
    "difficulty": "EASY",
    "question": "Which of the following best describes the sociological significance of marriage in most societies?",
    "options": [
      "A purely financial business transaction between firms",
      "It acts as a social institution that organizes kinship and inheritance",
      "An informal temporary dating agreement",
      "A mechanism to eliminate all family ties"
    ],
    "correctIndex": 1,
    "explanationEn": "Sociologically, marriage is a fundamental social institution that legitimizes sexual relations, nurtures offspring, and structures kinship networks and property inheritance.",
    "explanationBn": "সমাজবিজ্ঞানের দৃষ্টিতে বিবাহ হলো একটি প্রতিষ্ঠিত সামাজিক প্রতিষ্ঠান যা পারিবারিক সম্পর্ক, আত্মীয়তা এবং উত্তরাধিকার নির্ধারণ করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-5",
    "dayId": 22,
    "topic": "Family Systems - Matrilocal Family",
    "difficulty": "EASY",
    "question": "The family in which the husband lives in the wife's home is:",
    "options": [
      "Patrilocal family",
      "Matrilocal family",
      "Neolocal family",
      "Avunculocal family"
    ],
    "correctIndex": 1,
    "explanationEn": "In a matrilocal (uxorilocal) post-marital residence pattern, the married couple resides with or near the parents of the wife.",
    "explanationBn": "বিয়ের পর স্বামী যদি স্থায়ীভাবে স্ত্রীর পিতৃগৃহে বসবাস করে, তবে সেই পরিবারকে মাতৃবাস বা ম্যাট্রিলোকার পরিবার (Matrilocal family) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-6",
    "dayId": 22,
    "topic": "Rural vs Urban Social Structure",
    "difficulty": "MEDIUM",
    "question": "What is a major difference in the social structure of rural and urban communities?",
    "options": [
      "Rural communities lack any social interactions",
      "Urban communities have more formal institutions",
      "Urban communities are completely illiterate",
      "Rural areas have greater formal bureaucracy than cities"
    ],
    "correctIndex": 1,
    "explanationEn": "Urban communities are characterized by secondary group relationships, complex occupational division of labor, and a preponderance of formal social institutions.",
    "explanationBn": "গ্রামীণ সমাজের তুলনায় শহুরে সমাজে আনুষ্ঠানিক প্রতিষ্ঠান, আইন এবং প্রাতিষ্ঠানিক কাঠামোর সংখ্যা ও ভূমিকা অনেক বেশি (More formal institutions)।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-7",
    "dayId": 22,
    "topic": "Family Sociology - Interdependence",
    "difficulty": "EASY",
    "question": "How can interdependence affect decision-making in a family?",
    "options": [
      "It causes every family member to live in isolated rooms",
      "It encourages joint participation in making choices",
      "It eliminates communication between parents and children",
      "It forces one person to make all decisions without consulting"
    ],
    "correctIndex": 1,
    "explanationEn": "Interdependence creates shared goals and emotional reciprocity, encouraging mutual consultation and democratic joint participation in family decisions.",
    "explanationBn": "পারিবারিক পারস্পরিক নির্ভরতা (Interdependence) যেকোনো গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার ক্ষেত্রে সকল সদস্যের যৌথ মতামত ও অংশগ্রহণকে উৎসাহিত করে।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-8",
    "dayId": 22,
    "topic": "Sociology Fundamentals - Elements of Society",
    "difficulty": "EASY",
    "question": "Mutual interaction of individuals and 'we feeling' are the elements of:",
    "options": [
      "Anatomy",
      "Society",
      "Inorganic chemistry",
      "Physics"
    ],
    "correctIndex": 1,
    "explanationEn": "Sociologically (MacIver & Page), society is a web of social relationships characterized by mutual interaction, interdependence, and a shared consciousness of kind ('we-feeling').",
    "explanationBn": "পারস্পরিক সামাজিক মেলামেশা এবং 'আমরা' অনুভূতির (We feeling) সমষ্টিগত মেলবন্ধন হলো মানব সমাজের (Society) মূল ভিত্তি।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-9",
    "dayId": 22,
    "topic": "Social Groups - Primary Groups",
    "difficulty": "EASY",
    "question": "In which of the following groups is the relationship personal, direct, and intimate?",
    "options": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Out-group"
    ],
    "correctIndex": 0,
    "explanationEn": "Charles Horton Cooley coined 'Primary Groups' (such as the family or close peer group), characterized by intimate face-to-face association and direct emotional cooperation.",
    "explanationBn": "চার্লস কুলির তত্ত্ব মতে যেসব দলে পারস্পরিক সম্পর্ক অত্যন্ত ঘনিষ্ঠ, প্রত্যক্ষ ও অন্তরঙ্গ হয় তাদের প্রাইমারি গ্রুপ বা প্রাথমিক দল (Primary group) বলে।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-10",
    "dayId": 22,
    "topic": "Social Processes - Associative Processes",
    "difficulty": "MEDIUM",
    "question": "The social process of co-operation and accommodation is present in:",
    "options": [
      "Dissociative process",
      "Associative process",
      "Violent conflict process only",
      "Annihilation process"
    ],
    "correctIndex": 1,
    "explanationEn": "Associative social processes are conjunctive interactions that integrate and unite individuals and groups, comprising cooperation, accommodation, and assimilation.",
    "explanationBn": "পারস্পরিক সহযোগিতা এবং মানিয়ে নেওয়ার প্রক্রিয়াগুলো সমাজের সংহতি বৃদ্ধিকারী অ্যাসোসিয়েটিভ প্রক্রিয়ার (Associative process) অন্তর্গত।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-11",
    "dayId": 22,
    "topic": "Indian Polity & Constitutional Rights",
    "difficulty": "EASY",
    "question": "Which of the following is a fundamental right of an Indian citizen?",
    "options": [
      "Right to own limitless gold without taxes",
      "Right to freedom",
      "Right to ignore road traffic signals",
      "Right to practice medical surgery without training"
    ],
    "correctIndex": 1,
    "explanationEn": "The Right to Freedom (Articles 19–22 of the Constitution of India) is one of the six fundamental rights guaranteed to all Indian citizens.",
    "explanationBn": "ভারতীয় সংবিধানের ১৯ থেকে ২২ অনুচ্ছেদে বর্ণিত স্বাধীনতার অধিকার (Right to freedom) হলো একজন ভারতীয় নাগরিকের অন্যতম মৌলিক অধিকার।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-12",
    "dayId": 22,
    "topic": "Sociology of Knowledge - Evolutionary Epistemology",
    "difficulty": "HARD",
    "question": "Which theory of culture applies the concept of biological evolution to the growth of human knowledge?",
    "options": [
      "Psychoanalytic determinism",
      "Evolutionary epistemology",
      "Dialectical materialism",
      "Structural functionalism"
    ],
    "correctIndex": 1,
    "explanationEn": "Evolutionary epistemology applies the natural selection principles of biological evolution (trial, error elimination, adaptation) to understand the growth of human culture, ideas, and knowledge.",
    "explanationBn": "জৈবিক বিবর্তনের প্রাকৃতিক নির্বাচন ধারণাকে মানুষের জ্ঞান ও সংস্কৃতির বিকাশের ক্ষেত্রে প্রয়োগকারী তত্ত্ব হলো ইভোলিউশনারি এপিস্টেমোলজি।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-13",
    "dayId": 22,
    "topic": "Indian Social Stratification - Caste",
    "difficulty": "EASY",
    "question": "____ is an endogamous group associated with traditional occupations.",
    "options": [
      "Trade union",
      "Caste",
      "Political party",
      "Sports club"
    ],
    "correctIndex": 1,
    "explanationEn": "A caste (jati) is a hereditary, endogamous social group in traditional Indian social stratification historically linked with specific hereditary occupations.",
    "explanationBn": "নির্দিষ্ট বংশগত পেশা এবং স্বগোত্রে বিবাহের (Endogamous) সাথে সম্পর্কিত ভারতীয় সামাজিক গোষ্ঠীকে বর্ণ বা কাস্ট (Caste) বলা হয়।"
  },
  {
    "section": "NURSING",
    "id": "cen-soc-14",
    "dayId": 22,
    "topic": "Sociology - Social Stratification",
    "difficulty": "EASY",
    "question": "The system of differentiations which includes a hierarchy of social positions is termed as:",
    "options": [
      "Social mobility",
      "Social stratification",
      "Socialization",
      "Social disorganization"
    ],
    "correctIndex": 1,
    "explanationEn": "Social stratification is the structured institutionalized ranking of individuals and groups into hierarchical strata based on wealth, power, prestige, or birth.",
    "explanationBn": "সমাজে মানুষের মর্যাদা, ক্ষমতা ও পদের ভিত্তিতে স্তরভিত্তিক বিভাজন ব্যবস্থাকে সামাজিক স্তরবিন্যাস বা সোশ্যাল স্ট্র্যাটিফিকেশন বলে।"
  }
];

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
