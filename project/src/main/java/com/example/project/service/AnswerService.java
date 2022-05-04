package com.example.project.service;

import com.example.project.entity.Answers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AnswerService {
    List<Answers> listAnswers(Long questionId);

    Answers saveNewAnswer(Answers answers);
}
