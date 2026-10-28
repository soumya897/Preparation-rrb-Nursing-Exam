package com.remita.tracker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "study_days")
public class StudyDay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "day_number", nullable = false, unique = true)
    private Integer dayNumber;

    @Column(name = "date_str", nullable = false)
    private String dateStr;

    @Column(name = "display_date", nullable = false)
    private String displayDate;

    @Column(name = "week_number", nullable = false)
    private Integer weekNumber;

    @Column(name = "week_title", nullable = false)
    private String weekTitle;

    @Column(nullable = false)
    private String title;

    @Column(name = "nursing_topic", columnDefinition = "TEXT", nullable = false)
    private String nursingTopic;

    @Column(name = "general_topic", columnDefinition = "TEXT", nullable = false)
    private String generalTopic;

    @Column(name = "mcq_target", nullable = false)
    private Integer mcqTarget = 40;

    @Column(name = "is_full_mock", nullable = false)
    private Boolean isFullMock = false;

    @Column(name = "time_limit_mins", nullable = false)
    private Integer timeLimitMins = 25;

    @Column(name = "question_count", nullable = false)
    private Integer questionCount = 20;

    public StudyDay() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Integer getDayNumber() { return dayNumber; }
    public void setDayNumber(Integer dayNumber) { this.dayNumber = dayNumber; }

    public String getDateStr() { return dateStr; }
    public void setDateStr(String dateStr) { this.dateStr = dateStr; }

    public String getDisplayDate() { return displayDate; }
    public void setDisplayDate(String displayDate) { this.displayDate = displayDate; }

    public Integer getWeekNumber() { return weekNumber; }
    public void setWeekNumber(Integer weekNumber) { this.weekNumber = weekNumber; }

    public String getWeekTitle() { return weekTitle; }
    public void setWeekTitle(String weekTitle) { this.weekTitle = weekTitle; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getNursingTopic() { return nursingTopic; }
    public void setNursingTopic(String nursingTopic) { this.nursingTopic = nursingTopic; }

    public String getGeneralTopic() { return generalTopic; }
    public void setGeneralTopic(String generalTopic) { this.generalTopic = generalTopic; }

    public Integer getMcqTarget() { return mcqTarget; }
    public void setMcqTarget(Integer mcqTarget) { this.mcqTarget = mcqTarget; }

    public Boolean getIsFullMock() { return isFullMock; }
    public void setIsFullMock(Boolean fullMock) { isFullMock = fullMock; }

    public Integer getTimeLimitMins() { return timeLimitMins; }
    public void setTimeLimitMins(Integer timeLimitMins) { this.timeLimitMins = timeLimitMins; }

    public Integer getQuestionCount() { return questionCount; }
    public void setQuestionCount(Integer questionCount) { this.questionCount = questionCount; }
}
