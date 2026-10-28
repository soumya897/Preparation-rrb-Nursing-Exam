package com.remita.tracker.controller;

import com.remita.tracker.entity.StudyDay;
import com.remita.tracker.repository.StudyDayRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/days")
public class TimelineController {

    private final StudyDayRepository studyDayRepository;

    public TimelineController(StudyDayRepository studyDayRepository) {
        this.studyDayRepository = studyDayRepository;
    }

    @GetMapping
    public List<StudyDay> getAllDays() {
        return studyDayRepository.findAllByOrderByDayNumberAsc();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudyDay> getDayById(@PathVariable Long id) {
        return studyDayRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudyDay> updateDay(@PathVariable Long id, @RequestBody StudyDay updated) {
        return studyDayRepository.findById(id).map(existing -> {
            existing.setDateStr(updated.getDateStr());
            existing.setDisplayDate(updated.getDisplayDate());
            existing.setTitle(updated.getTitle());
            existing.setNursingTopic(updated.getNursingTopic());
            existing.setGeneralTopic(updated.getGeneralTopic());
            existing.setMcqTarget(updated.getMcqTarget());
            existing.setTimeLimitMins(updated.getTimeLimitMins());
            return ResponseEntity.ok(studyDayRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/shift")
    public ResponseEntity<List<StudyDay>> bulkShiftDates(@RequestBody Map<String, String> payload) {
        String startDateStr = payload.get("startDate");
        if (startDateStr == null) {
            return ResponseEntity.badRequest().build();
        }

        LocalDate start = LocalDate.parse(startDateStr);
        DateTimeFormatter displayFormatter = DateTimeFormatter.ofPattern("d MMMM yyyy");

        List<StudyDay> days = studyDayRepository.findAllByOrderByDayNumberAsc();
        for (int i = 0; i < days.size(); i++) {
            StudyDay day = days.get(i);
            LocalDate dayDate = start.plusDays(i);
            day.setDateStr(dayDate.toString());
            day.setDisplayDate(dayDate.format(displayFormatter));
        }

        List<StudyDay> saved = studyDayRepository.saveAll(days);
        return ResponseEntity.ok(saved);
    }
}
