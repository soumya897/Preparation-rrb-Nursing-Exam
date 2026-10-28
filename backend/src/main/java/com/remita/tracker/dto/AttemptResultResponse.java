package com.remita.tracker.dto;

public class AttemptResultResponse {
    private String attemptId;
    private Long dayId;
    private Integer score;
    private Integer totalQuestions;
    private Double percentage;
    private Boolean passed;
    private String message;
    private Boolean completed;
    private Double bestScore;

    public AttemptResultResponse() {}

    public String getAttemptId() { return attemptId; }
    public void setAttemptId(String attemptId) { this.attemptId = attemptId; }

    public Long getDayId() { return dayId; }
    public void setDayId(Long dayId) { this.dayId = dayId; }

    public Integer getScore() { return score; }
    public void setScore(Integer score) { this.score = score; }

    public Integer getTotalQuestions() { return totalQuestions; }
    public void setTotalQuestions(Integer totalQuestions) { this.totalQuestions = totalQuestions; }

    public Double getPercentage() { return percentage; }
    public void setPercentage(Double percentage) { this.percentage = percentage; }

    public Boolean getPassed() { return passed; }
    public void setPassed(Boolean passed) { this.passed = passed; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }

    public Double getBestScore() { return bestScore; }
    public void setBestScore(Double bestScore) { this.bestScore = bestScore; }
}
