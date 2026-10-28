package com.remita.tracker.dto;

import java.util.Map;

public class AttemptSubmissionRequest {
    private String userId;
    private String userEmail;
    private String userName;
    private Long dayId;
    private Map<String, Integer> answers; // questionId -> selectedIndex (0..3)
    private Integer timeTakenSeconds;

    public AttemptSubmissionRequest() {}

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public Long getDayId() { return dayId; }
    public void setDayId(Long dayId) { this.dayId = dayId; }

    public Map<String, Integer> getAnswers() { return answers; }
    public void setAnswers(Map<String, Integer> answers) { this.answers = answers; }

    public Integer getTimeTakenSeconds() { return timeTakenSeconds; }
    public void setTimeTakenSeconds(Integer timeTakenSeconds) { this.timeTakenSeconds = timeTakenSeconds; }
}
