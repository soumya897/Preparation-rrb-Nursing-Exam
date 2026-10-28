package com.remita.tracker.controller;

import com.remita.tracker.dto.AttemptResultResponse;
import com.remita.tracker.dto.AttemptSubmissionRequest;
import com.remita.tracker.entity.MockAttempt;
import com.remita.tracker.repository.MockAttemptRepository;
import com.remita.tracker.service.MockEvaluationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attempts")
public class MockAttemptController {

    private final MockEvaluationService evaluationService;
    private final MockAttemptRepository attemptRepository;

    public MockAttemptController(MockEvaluationService evaluationService,
                                 MockAttemptRepository attemptRepository) {
        this.evaluationService = evaluationService;
        this.attemptRepository = attemptRepository;
    }

    @PostMapping
    public ResponseEntity<AttemptResultResponse> submitAttempt(@RequestBody AttemptSubmissionRequest request) {
        if (request.getDayId() == null) {
            return ResponseEntity.badRequest().build();
        }
        AttemptResultResponse result = evaluationService.evaluateAndRecordAttempt(request);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/day/{dayId}")
    public List<MockAttempt> getAttemptsByDay(@PathVariable Long dayId) {
        return attemptRepository.findByDayIdOrderByAttemptedAtDesc(dayId);
    }

    @GetMapping
    public List<MockAttempt> getAllAttempts() {
        return attemptRepository.findAllByOrderByAttemptedAtDesc();
    }
}
