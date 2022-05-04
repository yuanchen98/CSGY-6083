package com.example.project.service.impl;

import com.example.project.entity.Answers;
import com.example.project.repository.AnswerRepository;
import com.example.project.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public List<Answers> listAnswers(Long questionId) {
        return answerRepository.queryByQuestionsQuestionId(questionId);
    }

    @Override
    public Answers saveNewAnswer(Answers answers) {
        return answerRepository.save(answers);
    }
}
