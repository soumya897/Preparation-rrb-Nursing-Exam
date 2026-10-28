-- ==============================================================
-- Preparation For Nursing Exam (RRB CEN 05/2026)
-- Supabase PostgreSQL Database Schema (Multi-User Google Auth)
-- ==============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Study Days Table (30-day timeline)
CREATE TABLE IF NOT EXISTS study_days (
    id SERIAL PRIMARY KEY,
    day_number INT NOT NULL UNIQUE,
    date_str VARCHAR(20) NOT NULL,
    display_date VARCHAR(50) NOT NULL,
    week_number INT NOT NULL,
    week_title VARCHAR(150) NOT NULL,
    title VARCHAR(200) NOT NULL,
    nursing_topic TEXT NOT NULL,
    general_topic TEXT NOT NULL,
    mcq_target INT NOT NULL DEFAULT 40,
    is_full_mock BOOLEAN NOT NULL DEFAULT FALSE,
    time_limit_mins INT NOT NULL DEFAULT 25,
    question_count INT NOT NULL DEFAULT 20,
    revision_notes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Questions Bank Table
CREATE TABLE IF NOT EXISTS questions (
    id VARCHAR(50) PRIMARY KEY,
    day_id INT REFERENCES study_days(id) ON DELETE CASCADE,
    section VARCHAR(50) NOT NULL, -- 'NURSING', 'REASONING', 'ARITHMETIC', 'GENERAL_SCIENCE', 'GENERAL_AWARENESS'
    topic VARCHAR(100) NOT NULL,
    difficulty VARCHAR(20) NOT NULL DEFAULT 'MEDIUM', -- 'EASY', 'MEDIUM', 'HARD'
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of 4 strings: ["Option A", "Option B", "Option C", "Option D"]
    correct_index INT NOT NULL CHECK (correct_index >= 0 AND correct_index <= 3),
    explanation_en TEXT NOT NULL,
    explanation_bn TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. User Profiles Table (Google Account Info)
CREATE TABLE IF NOT EXISTS user_profiles (
    id VARCHAR(100) PRIMARY KEY, -- Supabase auth.users ID or Google sub ID
    email VARCHAR(150) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    avatar_url TEXT,
    last_login TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Mock Attempts Table (Per User Account)
CREATE TABLE IF NOT EXISTS mock_attempts (
    id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    user_email VARCHAR(150) NOT NULL,
    day_id INT NOT NULL REFERENCES study_days(id) ON DELETE CASCADE,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    percentage NUMERIC(5,2) NOT NULL,
    passed BOOLEAN NOT NULL, -- True only if percentage >= 90.00
    time_taken_seconds INT NOT NULL,
    answers_json JSONB DEFAULT '{}'::jsonb,
    attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. User Progress Table (Isolated Progress Per User & Study Day)
CREATE TABLE IF NOT EXISTS user_progress (
    user_id VARCHAR(100) NOT NULL,
    user_email VARCHAR(150) NOT NULL,
    user_name VARCHAR(150),
    day_id INT NOT NULL REFERENCES study_days(id) ON DELETE CASCADE,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    best_score NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    attempts_count INT NOT NULL DEFAULT 0,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, day_id)
);

-- Indices for rapid querying per user and day
CREATE INDEX IF NOT EXISTS idx_questions_day_id ON questions(day_id);
CREATE INDEX IF NOT EXISTS idx_mock_attempts_user_day ON mock_attempts(user_id, day_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE study_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE mock_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Study days & questions: readable by all authenticated / public users
CREATE POLICY "Allow public read on study_days" ON study_days FOR SELECT USING (true);
CREATE POLICY "Allow public update on study_days" ON study_days FOR UPDATE USING (true);
CREATE POLICY "Allow public read on questions" ON questions FOR SELECT USING (true);

-- User Profiles: users can read & write their own profile
CREATE POLICY "Allow user all on user_profiles" ON user_profiles FOR ALL USING (true);

-- Mock Attempts: users can view and insert their own attempts
CREATE POLICY "Allow user all on mock_attempts" ON mock_attempts FOR ALL USING (true);

-- User Progress: users can view and update their own day checklist progress
CREATE POLICY "Allow user all on user_progress" ON user_progress FOR ALL USING (true);
