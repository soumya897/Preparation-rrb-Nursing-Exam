package com.remita.tracker.repository;

import com.remita.tracker.entity.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserProgressRepository extends JpaRepository<UserProgress, String> {
    List<UserProgress> findByUserIdOrderByDayIdAsc(String userId);
    Optional<UserProgress> findByUserIdAndDayId(String userId, Long dayId);
}
