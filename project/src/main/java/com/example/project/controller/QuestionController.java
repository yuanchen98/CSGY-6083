package com.example.project.controller;

import com.example.project.entity.Questions;
import com.example.project.entity.response.ResponseEntity;
import com.example.project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/question")
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/listAll")
    @ResponseBody
    ResponseEntity<List<Questions>> listAll(){
        List<Questions> questionsList = questionService.listAll();
        return new ResponseEntity<>(HttpStatus.OK.value(), "Find all questions success", questionsList);

    }

    @GetMapping("/list/{questionId}")
    ResponseEntity<Questions> listQuestion(@PathVariable Long questionId){
        Questions questions = questionService.listOneQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.OK.value(), "Find question success", questions);
    }



}
