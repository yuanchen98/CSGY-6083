package com.example.project.repository;

import com.example.project.entity.Answers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answers, Long> {
    List<Answers> queryByQuestionsQuestionId(Long questionId);
}
