package com.remita.tracker.controller;

import com.remita.tracker.entity.Question;
import com.remita.tracker.repository.QuestionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionRepository questionRepository;

    public QuestionController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @GetMapping("/day/{dayId}")
    public List<Question> getQuestionsForDay(@PathVariable Long dayId) {
        List<Question> list = questionRepository.findByDayId(dayId);
        Collections.shuffle(list);
        return list;
    }
}
