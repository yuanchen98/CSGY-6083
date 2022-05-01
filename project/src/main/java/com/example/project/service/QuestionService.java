package com.example.project.service;

import com.example.project.entity.Questions;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {


    List<Questions> listAll();

    Questions listOneQuestion(Long questionId);
}
