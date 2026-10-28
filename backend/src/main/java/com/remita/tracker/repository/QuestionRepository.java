package com.remita.tracker.repository;

import com.remita.tracker.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, String> {
    List<Question> findByDayId(Long dayId);
    List<Question> findBySection(String section);
}
