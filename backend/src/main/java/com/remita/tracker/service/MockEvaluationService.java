package com.remita.tracker.service;

import com.remita.tracker.dto.AttemptResultResponse;
import com.remita.tracker.dto.AttemptSubmissionRequest;
import com.remita.tracker.entity.MockAttempt;
import com.remita.tracker.entity.Question;
import com.remita.tracker.entity.UserProgress;
import com.remita.tracker.repository.MockAttemptRepository;
import com.remita.tracker.repository.QuestionRepository;
import com.remita.tracker.repository.UserProgressRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class MockEvaluationService {

    private final QuestionRepository questionRepository;
    private final MockAttemptRepository mockAttemptRepository;
    private final UserProgressRepository userProgressRepository;

    @Value("${app.passing-score-percentage:90.0}")
    private Double passingScorePercentage;

    public static final String EXACT_FAILURE_MESSAGE = 
        "😡 First properly revise the topics! Don't try to just complete the checklist without studying. Go back, revise properly, and then take the mock test again!";

    public static final String SUCCESS_MESSAGE = 
        "🎉 Excellent! You earned your tick! 💙 Revision verified. Day completed successfully!";

    public MockEvaluationService(QuestionRepository questionRepository,
                                 MockAttemptRepository mockAttemptRepository,
                                 UserProgressRepository userProgressRepository) {
        this.questionRepository = questionRepository;
        this.mockAttemptRepository = mockAttemptRepository;
        this.userProgressRepository = userProgressRepository;
    }

    @Transactional
    public AttemptResultResponse evaluateAndRecordAttempt(AttemptSubmissionRequest request) {
        Long dayId = request.getDayId();
        String userId = request.getUserId() != null ? request.getUserId() : "default-user";
        String userEmail = request.getUserEmail() != null ? request.getUserEmail() : "";
        String userName = request.getUserName() != null ? request.getUserName() : "Nursing Candidate";
        Map<String, Integer> answers = request.getAnswers() != null ? request.getAnswers() : Collections.emptyMap();

        List<Question> questions = questionRepository.findByDayId(dayId);
        int totalQuestions = questions.isEmpty() ? Math.max(1, answers.size()) : questions.size();
        int score = 0;

        for (Question q : questions) {
            Integer userChoice = answers.get(q.getId());
            if (userChoice != null && userChoice.equals(q.getCorrectIndex())) {
                score++;
            }
        }

        double percentage = Math.round(((double) score / totalQuestions) * 100.0);
        boolean isPassed = percentage >= passingScorePercentage;

        // Save Attempt with User Attribution
        MockAttempt attempt = new MockAttempt();
        attempt.setId("attempt-" + System.currentTimeMillis() + "-" + UUID.randomUUID().toString().substring(0, 5));
        attempt.setUserId(userId);
        attempt.setUserEmail(userEmail);
        attempt.setDayId(dayId);
        attempt.setScore(score);
        attempt.setTotalQuestions(totalQuestions);
        attempt.setPercentage(percentage);
        attempt.setPassed(isPassed);
        attempt.setTimeTakenSeconds(request.getTimeTakenSeconds() != null ? request.getTimeTakenSeconds() : 0);
        attempt.setAttemptedAt(LocalDateTime.now());
        mockAttemptRepository.save(attempt);

        // Update User Progress with User Isolation
        UserProgress progress = userProgressRepository.findByUserIdAndDayId(userId, dayId)
                .orElse(new UserProgress(userId, dayId));

        progress.setUserEmail(userEmail);
        progress.setUserName(userName);
        progress.setAttemptsCount(progress.getAttemptsCount() + 1);
        progress.setBestScore(Math.max(progress.getBestScore(), percentage));
        progress.setLastUpdated(LocalDateTime.now());

        // CRITICAL PASSING GATE RULE:
        // 1. If passed (>=90%), mark completed
        // 2. If failed, do NOT mark completed, but if ALREADY completed earlier, keep completed true!
        if (isPassed) {
            progress.setCompleted(true);
            if (progress.getCompletedAt() == null) {
                progress.setCompletedAt(LocalDateTime.now());
            }
        }

        userProgressRepository.save(progress);

        // Build Response
        AttemptResultResponse response = new AttemptResultResponse();
        response.setAttemptId(attempt.getId());
        response.setDayId(dayId);
        response.setScore(score);
        response.setTotalQuestions(totalQuestions);
        response.setPercentage(percentage);
        response.setPassed(isPassed);
        response.setCompleted(progress.getCompleted());
        response.setBestScore(progress.getBestScore());
        response.setMessage(isPassed ? SUCCESS_MESSAGE : EXACT_FAILURE_MESSAGE);

        return response;
    }
}
