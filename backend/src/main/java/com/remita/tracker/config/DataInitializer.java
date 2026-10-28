package com.remita.tracker.config;

import com.remita.tracker.entity.Question;
import com.remita.tracker.entity.StudyDay;
import com.remita.tracker.repository.QuestionRepository;
import com.remita.tracker.repository.StudyDayRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class DataInitializer implements CommandLineRunner {

    private final StudyDayRepository dayRepository;
    private final QuestionRepository questionRepository;

    public DataInitializer(StudyDayRepository dayRepository, QuestionRepository questionRepository) {
        this.dayRepository = dayRepository;
        this.questionRepository = questionRepository;
    }

    @Override
    public void run(String... args) {
        if (dayRepository.count() > 0) {
            return; // Already initialized
        }

        List<StudyDay> days = new ArrayList<>();

        // WEEK 1
        days.add(createDay(1, "2026-10-24", "24 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Nursing Foundations & Reasoning Basics",
                "Nursing Foundations — principles, nursing process, assessment, diagnosis, planning and evaluation.",
                "Reasoning — analogy and classification.", 40, false, 25, 20));

        days.add(createDay(2, "2026-10-25", "25 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Vital Signs, Physical Assessment & Positioning",
                "Vital signs, physical assessment, bed making, hygiene, positioning and documentation.",
                "Arithmetic — percentages and ratios.", 40, false, 25, 20));

        days.add(createDay(3, "2026-10-26", "26 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Infection Control, Sterilisation & Biomedical Waste",
                "Infection Control — hand hygiene, PPE, sterilisation, disinfection and biomedical waste.",
                "General Science — basic Biology.", 40, false, 25, 20));

        days.add(createDay(4, "2026-10-27", "27 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Anatomy & Physiology: Cardio, Respiratory & Blood",
                "Anatomy & Physiology — cardiovascular, respiratory and blood systems.",
                "Reasoning — series and coding-decoding.", 40, false, 25, 20));

        days.add(createDay(5, "2026-10-28", "28 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Anatomy & Physiology: Renal, Neuro, Endocrine & GI",
                "Anatomy & Physiology — renal, nervous, endocrine and digestive systems.",
                "Arithmetic — averages and simplification.", 40, false, 25, 20));

        days.add(createDay(6, "2026-10-29", "29 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Nutrition, Biochemistry & Deficiency Diseases",
                "Nutrition, Biochemistry, deficiency diseases, diet and therapeutic nutrition.",
                "General Science — Physics basics.", 40, false, 25, 20));

        days.add(createDay(7, "2026-10-30", "30 October 2026", 1, "Week 1: Fundamentals — 24–30 October 2026",
                "Microbiology, Pathology & Specimen Collection",
                "Microbiology, Pathology, immunity, infection and specimen collection.",
                "General Awareness — current affairs and static GK.", 40, false, 25, 20));

        // WEEK 2
        days.add(createDay(8, "2026-10-31", "31 October 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Weekly Consolidation & Mixed Practice",
                "Weekly revision of Foundations, Anatomy, Nutrition, Microbiology and Pathology.",
                "Mixed Reasoning and Arithmetic.", 50, false, 25, 20));

        days.add(createDay(9, "2026-11-01", "1 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Full CBT Mock Test 1 (All Exam Sections)",
                "Full CBT mock: 100 questions in 90 minutes. Cover all exam sections. Analyse incorrect answers after submission.",
                "Full CBT mock: 100 questions in 90 minutes.", 100, true, 90, 100));

        days.add(createDay(10, "2026-11-02", "2 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Med-Surg: Cardiovascular, Shock & Emergency Care",
                "Medical-Surgical Nursing — cardiovascular diseases, hypertension, shock and emergency care.",
                "General Science — Chemistry basics.", 40, false, 25, 20));

        days.add(createDay(11, "2026-11-03", "3 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Med-Surg: Respiratory Diseases & Oxygen Therapy",
                "Medical-Surgical Nursing — respiratory diseases, oxygen therapy and respiratory emergencies.",
                "Arithmetic — profit/loss and simple interest.", 40, false, 25, 20));

        days.add(createDay(12, "2026-11-04", "4 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Med-Surg: Renal, Electrolytes & Acid-Base",
                "Medical-Surgical Nursing — renal disorders, fluids, electrolytes and acid-base balance.",
                "Reasoning — directions and blood relations.", 40, false, 25, 20));

        days.add(createDay(13, "2026-11-05", "5 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Med-Surg: Endocrine, Neurological & GI Conditions",
                "Medical-Surgical Nursing — diabetes, endocrine disorders, neurological and digestive conditions.",
                "General Science — Biology revision.", 40, false, 25, 20));

        days.add(createDay(14, "2026-11-06", "6 November 2026", 2, "Week 2: Clinical Nursing — 31 October–6 November 2026",
                "Pharmacology: Drug Classes, Dosages & Calculations",
                "Pharmacology — drug classes, routes, adverse effects, medication safety and calculations.",
                "Arithmetic — time/work and speed/distance.", 40, false, 25, 20));

        // WEEK 3
        days.add(createDay(15, "2026-11-07", "7 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Midwifery: Antenatal Care & Stages of Labour",
                "Midwifery — antenatal care, stages of labour, maternal assessment and normal delivery.",
                "General Awareness — static GK and current affairs.", 40, false, 25, 20));

        days.add(createDay(16, "2026-11-08", "8 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Full CBT Mock Test 2 (100 Questions in 90 Mins)",
                "Full CBT mock: 100 questions in 90 minutes. Review incorrect answers after submission.",
                "Full CBT mock: 100 questions in 90 minutes.", 100, true, 90, 100));

        days.add(createDay(17, "2026-11-09", "9 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Obstetric Complications, Newborn Care & Family Planning",
                "Obstetric complications, postpartum care, newborn care and family planning.",
                "Reasoning — syllogism and logical questions.", 40, false, 25, 20));

        days.add(createDay(18, "2026-11-10", "10 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Child Health: Growth, Milestones & Immunisation",
                "Child Health Nursing — growth, development, milestones and immunisation.",
                "Arithmetic — mixed practice.", 40, false, 25, 20));

        days.add(createDay(19, "2026-11-11", "11 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Child Health: Common Illnesses, Nutrition & Emergencies",
                "Child Health Nursing — common paediatric illnesses, nutrition and emergency care.",
                "General Science — mixed MCQs.", 40, false, 25, 20));

        days.add(createDay(20, "2026-11-12", "12 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Community Health: Epidemiology & National Programmes",
                "Community Health Nursing — epidemiology, prevention, primary health care and national programmes.",
                "General Awareness — revision.", 40, false, 25, 20));

        days.add(createDay(21, "2026-11-13", "13 November 2026", 3, "Week 3: Maternal, Child & Community — 7–13 November 2026",
                "Mental Health Nursing & Patient Safety",
                "Mental Health Nursing — psychiatric conditions, therapeutic communication and patient safety.",
                "Reasoning — mixed practice.", 40, false, 25, 20));

        // WEEK 4
        days.add(createDay(22, "2026-11-14", "14 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Nursing Management, Research & Behavioral Sciences",
                "Nursing Management, Education, Research, Statistics, Psychology and Sociology.",
                "Arithmetic and General Science mixed set.", 40, false, 25, 20));

        days.add(createDay(23, "2026-11-15", "15 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Full CBT Mock Test 3 (100 Questions in 90 Mins)",
                "Full CBT mock: 100 questions in 90 minutes. Compare errors with previous mocks.",
                "Full CBT mock: 100 questions in 90 minutes.", 100, true, 90, 100));

        days.add(createDay(24, "2026-11-16", "16 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Targeted Revision: Med-Surg & Pharmacology",
                "Revise weak Medical-Surgical Nursing topics and Pharmacology.",
                "Review the weakest non-nursing section.", 50, false, 25, 20));

        days.add(createDay(25, "2026-11-17", "17 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Targeted Revision: Midwifery, Ped & Community",
                "Revise Midwifery, Obstetrics, Child Health and Community Health.",
                "Arithmetic and Reasoning timed practice.", 50, false, 25, 20));

        days.add(createDay(26, "2026-11-18", "18 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Targeted Revision: Foundations, BMW, Anatomy & Micro",
                "Revise Foundations, Infection Control, Anatomy, Microbiology and Nutrition.",
                "General Science and General Awareness timed practice.", 50, false, 25, 20));

        days.add(createDay(27, "2026-11-19", "19 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Full CBT Mock Test 4 (100 Questions in 90 Mins)",
                "Full CBT mock: 100 questions in 90 minutes. Analyse performance and identify final weak areas.",
                "Full CBT mock: 100 questions in 90 minutes.", 100, true, 90, 100));

        days.add(createDay(28, "2026-11-20", "20 November 2026", 4, "Week 4: Revision & CBT Mocks — 14–20 November 2026",
                "Final Targeted Weak-Spot Elimination",
                "Targeted revision of the three weakest nursing topics.",
                "Revise weak non-nursing topics.", 40, false, 25, 20));

        // FINAL REVISION
        days.add(createDay(29, "2026-11-21", "21 November 2026", 5, "Final Revision — 21–22 November 2026",
                "Final Full CBT Mock Test 5 (Grand Rehearsal)",
                "Final Full CBT mock: 100 questions in 90 minutes. Review incorrect answers and final readiness.",
                "Final Full CBT mock: 100 questions in 90 minutes.", 100, true, 90, 100));

        days.add(createDay(30, "2026-11-22", "22 November 2026", 5, "Final Revision — 21–22 November 2026",
                "Calm Light Revision & Exam Readiness",
                "Light revision: short notes, drug safety, infection control, important nursing procedures and previous mistakes.",
                "Formulas and reasoning shortcuts. No heavy new topics. Rest and prepare exam documents.", 25, false, 25, 20));

        dayRepository.saveAll(days);

        // Seed initial questions
        seedInitialQuestions();
    }

    private StudyDay createDay(int num, String dateStr, String displayDate, int weekNum, String weekTitle,
                               String title, String nursing, String general, int target, boolean fullMock,
                               int timeMins, int qCount) {
        StudyDay day = new StudyDay();
        day.setDayNumber(num);
        day.setDateStr(dateStr);
        day.setDisplayDate(displayDate);
        day.setWeekNumber(weekNum);
        day.setWeekTitle(weekTitle);
        day.setTitle(title);
        day.setNursingTopic(nursing);
        day.setGeneralTopic(general);
        day.setMcqTarget(target);
        day.setIsFullMock(fullMock);
        day.setTimeLimitMins(timeMins);
        day.setQuestionCount(qCount);
        return day;
    }

    private void seedInitialQuestions() {
        Question q1 = new Question();
        q1.setId("init-d1-q1");
        q1.setDayId(1L);
        q1.setSection("NURSING");
        q1.setTopic("Nursing Process");
        q1.setDifficulty("EASY");
        q1.setQuestionText("Which of the following is considered 'subjective data' during a patient's nursing assessment?");
        q1.setOptionA("Blood pressure measurement of 140/90 mmHg");
        q1.setOptionB("Patient states, 'I feel severe throbbing pain in my head'");
        q1.setOptionC("Serum potassium level of 3.2 mEq/L");
        q1.setOptionD("Presence of 2+ pitting edema in lower extremities");
        q1.setCorrectIndex(1);
        q1.setExplanationEn("Subjective data consists of the client's verbal descriptions of their feelings and symptoms.");
        q1.setExplanationBn("রোগী নিজে মুখে যা বর্ণনা করেন তা হলো Subjective Data।");

        questionRepository.save(q1);
    }
}
