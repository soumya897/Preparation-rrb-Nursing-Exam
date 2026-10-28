package com.remita.tracker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    private String id;

    @Column(name = "day_id", nullable = false)
    private Long dayId;

    @Column(nullable = false)
    private String section;

    @Column(nullable = false)
    private String topic;

    @Column(nullable = false)
    private String difficulty;

    @Column(name = "question_text", columnDefinition = "TEXT", nullable = false)
    private String questionText;

    @Column(name = "option_a", columnDefinition = "TEXT", nullable = false)
    private String optionA;

    @Column(name = "option_b", columnDefinition = "TEXT", nullable = false)
    private String optionB;

    @Column(name = "option_c", columnDefinition = "TEXT", nullable = false)
    private String optionC;

    @Column(name = "option_d", columnDefinition = "TEXT", nullable = false)
    private String optionD;

    @Column(name = "correct_index", nullable = false)
    private Integer correctIndex; // 0, 1, 2, 3

    @Column(name = "explanation_en", columnDefinition = "TEXT", nullable = false)
    private String explanationEn;

    @Column(name = "explanation_bn", columnDefinition = "TEXT")
    private String explanationBn;

    public Question() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public Long getDayId() { return dayId; }
    public void setDayId(Long dayId) { this.dayId = dayId; }

    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }

    public String getTopic() { return topic; }
    public void setTopic(String topic) { this.topic = topic; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getQuestionText() { return questionText; }
    public void setQuestionText(String questionText) { this.questionText = questionText; }

    public String getOptionA() { return optionA; }
    public void setOptionA(String optionA) { this.optionA = optionA; }

    public String getOptionB() { return optionB; }
    public void setOptionB(String optionB) { this.optionB = optionB; }

    public String getOptionC() { return optionC; }
    public void setOptionC(String optionC) { this.optionC = optionC; }

    public String getOptionD() { return optionD; }
    public void setOptionD(String optionD) { this.optionD = optionD; }

    public Integer getCorrectIndex() { return correctIndex; }
    public void setCorrectIndex(Integer correctIndex) { this.correctIndex = correctIndex; }

    public String getExplanationEn() { return explanationEn; }
    public void setExplanationEn(String explanationEn) { this.explanationEn = explanationEn; }

    public String getExplanationBn() { return explanationBn; }
    public void setExplanationBn(String explanationBn) { this.explanationBn = explanationBn; }
}
