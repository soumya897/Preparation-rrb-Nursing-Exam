package com.remita.tracker.controller;

import com.remita.tracker.dto.StatsResponse;
import com.remita.tracker.entity.MockAttempt;
import com.remita.tracker.entity.UserProgress;
import com.remita.tracker.repository.MockAttemptRepository;
import com.remita.tracker.repository.StudyDayRepository;
import com.remita.tracker.repository.UserProgressRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    private final UserProgressRepository progressRepository;
    private final MockAttemptRepository attemptRepository;
    private final StudyDayRepository dayRepository;

    public ProgressController(UserProgressRepository progressRepository,
                              MockAttemptRepository attemptRepository,
                              StudyDayRepository dayRepository) {
        this.progressRepository = progressRepository;
        this.attemptRepository = attemptRepository;
        this.dayRepository = dayRepository;
    }

    @GetMapping
    public Map<Long, UserProgress> getAllProgress(@RequestParam(required = false) String userId) {
        List<UserProgress> list = (userId != null && !userId.isBlank())
                ? progressRepository.findByUserIdOrderByDayIdAsc(userId)
                : progressRepository.findAll();

        return list.stream()
                .collect(Collectors.toMap(UserProgress::getDayId, p -> p, (p1, p2) -> p1));
    }

    @GetMapping("/stats")
    public StatsResponse getStats(@RequestParam(required = false) String userId) {
        int totalDays = (int) dayRepository.count();
        List<UserProgress> userProgressList = (userId != null && !userId.isBlank())
                ? progressRepository.findByUserIdOrderByDayIdAsc(userId)
                : progressRepository.findAll();

        int completedDays = (int) userProgressList.stream().filter(UserProgress::getCompleted).count();
        int progressPercentage = totalDays > 0 ? (int) Math.round(((double) completedDays / totalDays) * 100) : 0;

        List<MockAttempt> attempts = (userId != null && !userId.isBlank())
                ? attemptRepository.findByUserIdOrderByAttemptedAtDesc(userId)
                : attemptRepository.findAll();

        int totalAttempts = attempts.size();

        int avgScore = totalAttempts > 0 
                ? (int) Math.round(attempts.stream().mapToDouble(MockAttempt::getPercentage).average().orElse(0.0))
                : 0;

        int highestScore = totalAttempts > 0
                ? (int) Math.round(attempts.stream().mapToDouble(MockAttempt::getPercentage).max().orElse(0.0))
                : 0;

        // Calculate consecutive streak starting from day 1 for this user
        int streak = 0;
        Map<Long, UserProgress> progMap = userProgressList.stream()
                .collect(Collectors.toMap(UserProgress::getDayId, p -> p, (p1, p2) -> p1));

        for (long i = 1; i <= totalDays; i++) {
            UserProgress p = progMap.get(i);
            if (p != null && Boolean.TRUE.equals(p.getCompleted())) {
                streak++;
            } else {
                break;
            }
        }

        StatsResponse stats = new StatsResponse();
        stats.setTotalDays(totalDays);
        stats.setCompletedDays(completedDays);
        stats.setProgressPercentage(progressPercentage);
        stats.setCurrentStreak(streak);
        stats.setAverageScore(avgScore);
        stats.setHighestScore(highestScore);
        stats.setTotalAttempts(totalAttempts);

        return stats;
    }

    @PostMapping("/reset")
    public ResponseEntity<Void> resetAllProgress(@RequestParam(required = false) String userId) {
        if (userId != null && !userId.isBlank()) {
            List<UserProgress> userProgress = progressRepository.findByUserIdOrderByDayIdAsc(userId);
            progressRepository.deleteAll(userProgress);
            List<MockAttempt> attempts = attemptRepository.findByUserIdOrderByAttemptedAtDesc(userId);
            attemptRepository.deleteAll(attempts);
        } else {
            progressRepository.deleteAll();
            attemptRepository.deleteAll();
        }
        return ResponseEntity.ok().build();
    }
}
