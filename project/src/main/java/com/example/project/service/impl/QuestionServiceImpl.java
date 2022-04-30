package com.example.project.service.impl;

import com.example.project.entity.Questions;
import com.example.project.repository.QuestionRepository;
import com.example.project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Questions> listAll() {
        return questionRepository.findAll();
    }
}
