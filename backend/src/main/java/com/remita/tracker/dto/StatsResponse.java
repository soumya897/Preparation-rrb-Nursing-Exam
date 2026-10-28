package com.remita.tracker.dto;

public class StatsResponse {
    private Integer totalDays;
    private Integer completedDays;
    private Integer progressPercentage;
    private Integer currentStreak;
    private Integer averageScore;
    private Integer highestScore;
    private Integer totalAttempts;

    public StatsResponse() {}

    public Integer getTotalDays() { return totalDays; }
    public void setTotalDays(Integer totalDays) { this.totalDays = totalDays; }

    public Integer getCompletedDays() { return completedDays; }
    public void setCompletedDays(Integer completedDays) { this.completedDays = completedDays; }

    public Integer getProgressPercentage() { return progressPercentage; }
    public void setProgressPercentage(Integer progressPercentage) { this.progressPercentage = progressPercentage; }

    public Integer getCurrentStreak() { return currentStreak; }
    public void setCurrentStreak(Integer currentStreak) { this.currentStreak = currentStreak; }

    public Integer getAverageScore() { return averageScore; }
    public void setAverageScore(Integer averageScore) { this.averageScore = averageScore; }

    public Integer getHighestScore() { return highestScore; }
    public void setHighestScore(Integer highestScore) { this.highestScore = highestScore; }

    public Integer getTotalAttempts() { return totalAttempts; }
    public void setTotalAttempts(Integer totalAttempts) { this.totalAttempts = totalAttempts; }
}
