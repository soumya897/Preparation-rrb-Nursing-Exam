# 🩺 Preparation For Nursing Exam
### RRB Nursing Superintendent Recruitment 2026 (CEN 05/2026) Preparation Tracker

A responsive web application with Google Authentication and a mandatory **90% mock-test verification gate** designed to ensure Remita thoroughly revises every day's assigned nursing and general topics before earning her checklist tick.

---

## 🌟 Key Features

1. **Initial Screen: Google Sign-In Gate**
   - When the web application starts, it displays a dedicated **Google Login screen**.
   - Authenticates via Google OAuth (Supabase Auth / Google Identity Services) or instant 1-click candidate profile.
   - **Personalized Account Experience**: Displays the signed-in user's name, avatar, and email badge in the header and dashboard banner (*"Let's prepare! "*).
   - **Account-Scoped Progress**: Completed days, checklist ticks, test attempts, and scores are **saved specifically to that particular Google account**. Different accounts maintain separate, isolated progress.
   - Provides a clean **Sign Out** button in the header.

2. **Exact 30-Day Day-by-Day Timeline & Checklist (24 Oct – 22 Nov 2026)**
   - **Week 1: Fundamentals** (Days 1–7)
   - **Week 2: Clinical Nursing** (Days 8–14; Day 9 is Full Mock Test 1)
   - **Week 3: Maternal, Child & Community Nursing** (Days 15–21; Day 16 is Full Mock Test 2)
   - **Week 4: Revision & CBT Mocks** (Days 22–28; Day 23 & 27 are Full Mock Tests 3 & 4)
   - **Final Revision** (Days 29–30; Day 29 is Grand Rehearsal Full Mock Test 5)

3. **Core Rule: "No Passing, No Tick! 😂" (Strict 90% Gate)**
   - Checkboxes **cannot** be ticked manually. Clicking an incomplete day's checkbox launches its mock test.
   - **Score >= 90%**: Marks the day complete with victory fanfare, celebratory confetti, and verified badge.
   - **Score < 90%**: Checkbox remains **unchecked** and displays the exact required alert:
     > *"😡 First properly revision, Don't try to just complete the checklist without studying. Go back, revise the topics properly, and then take the mock test again!"*
     along with funny rotating Bengali & English alerts.
   - Direct buttons for **"Revise Topics"** and **"Retry Mock Test"**.
   - Unlimited retakes allowed, but the **90% standard is never lowered**.

4. **Progress Retention Guarantee**
   - Retaking a previously completed day for extra practice will **never revoke** earned progress even if the retake score falls below 90%.

5. **Exam-Style CBT Interface**
   - **Regular study days**: 20 topic-specific questions with a 25-minute timer.
   - **Full mock days**: 100 questions simulating the official CEN 05/2026 blueprint with a 90-minute live timer.
   - Question Palette (1..N) with status colors: Answered (Green), Unanswered (Gray), Marked for Review (Purple), Marked & Answered (Blue).
   - Confirmation dialog before leaving or submitting.

6. **Bilingual Explanations (English & Bengali)**
   - Medical terms kept in standard English.
   - High-yield clinical concepts explained in simple Bengali memory hooks (*স্মরণ রাখবে*).

7. **Customizable Schedule & Reset**
   - Dates can be adjusted individually or bulk-shifted from Day 1 if RRB publishes a revised schedule.
   - Two-step confirmation modal before resetting progress.

---

## 🚀 Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS v4, Lucide Icons, Canvas-Confetti, Web Audio API. Hosted on **Vercel** (Free Tier).
- **Backend**: Java 21, Spring Boot 3.3.5, Spring Data JPA, PostgreSQL Driver, H2 fallback. Hosted on **Render** (Free Tier).
- **Database**: **Supabase** PostgreSQL (Free Tier) with Google OAuth integration.

---

## 🛠️ Local Development

### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173). You will immediately be greeted by the **Google Login screen**.

### 2. Backend (Optional for local testing)
```bash
cd backend
mvn clean spring-boot:run
```
Runs at [http://localhost:8080](http://localhost:8080).

---
