package com.example.project.repository;

import com.example.project.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Questions, Long> {

}
