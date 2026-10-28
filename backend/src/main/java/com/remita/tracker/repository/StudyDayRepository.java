package com.remita.tracker.repository;

import com.remita.tracker.entity.StudyDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudyDayRepository extends JpaRepository<StudyDay, Long> {
    List<StudyDay> findAllByOrderByDayNumberAsc();
    Optional<StudyDay> findByDayNumber(Integer dayNumber);
}
