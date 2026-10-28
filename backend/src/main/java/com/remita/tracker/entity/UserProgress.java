package com.remita.tracker.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_progress", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"user_id", "day_id"})
})
public class UserProgress {

    @Id
    private String id; // Composite key: userId + "_" + dayId

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "day_id", nullable = false)
    private Long dayId;

    @Column(nullable = false)
    private Boolean completed = false;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

    @Column(name = "best_score", nullable = false)
    private Double bestScore = 0.0;

    @Column(name = "attempts_count", nullable = false)
    private Integer attemptsCount = 0;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated = LocalDateTime.now();

    public UserProgress() {}

    public UserProgress(String userId, Long dayId) {
        this.userId = userId;
        this.dayId = dayId;
        this.id = userId + "_" + dayId;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) {
        this.userId = userId;
        if (dayId != null) this.id = userId + "_" + dayId;
    }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public Long getDayId() { return dayId; }
    public void setDayId(Long dayId) {
        this.dayId = dayId;
        if (userId != null) this.id = userId + "_" + dayId;
    }

    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }

    public LocalDateTime getCompletedAt() { return completedAt; }
    public void setCompletedAt(LocalDateTime completedAt) { this.completedAt = completedAt; }

    public Double getBestScore() { return bestScore; }
    public void setBestScore(Double bestScore) { this.bestScore = bestScore; }

    public Integer getAttemptsCount() { return attemptsCount; }
    public void setAttemptsCount(Integer attemptsCount) { this.attemptsCount = attemptsCount; }

    public LocalDateTime getLastUpdated() { return lastUpdated; }
    public void setLastUpdated(LocalDateTime lastUpdated) { this.lastUpdated = lastUpdated; }
}
