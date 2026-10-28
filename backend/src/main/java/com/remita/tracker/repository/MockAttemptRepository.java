package com.remita.tracker.repository;

import com.remita.tracker.entity.MockAttempt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MockAttemptRepository extends JpaRepository<MockAttempt, String> {
    List<MockAttempt> findByUserIdAndDayIdOrderByAttemptedAtDesc(String userId, Long dayId);
    List<MockAttempt> findByUserIdOrderByAttemptedAtDesc(String userId);
    List<MockAttempt> findByDayIdOrderByAttemptedAtDesc(Long dayId);
    List<MockAttempt> findAllByOrderByAttemptedAtDesc();
}
