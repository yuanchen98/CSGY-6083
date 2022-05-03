package com.example.project.controller;

import com.example.project.entity.Answers;
import com.example.project.entity.Questions;
import com.example.project.entity.response.ResponseEntity;
import com.example.project.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answer")
@CrossOrigin("http://localhost:3000")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/list/{questionId}")
    ResponseEntity<List<Answers>> listAnswer(@PathVariable Long questionId){
        List<Answers> answerslist = answerService.listAnswers(questionId);
        return new ResponseEntity<>(HttpStatus.OK.value(), "find related answers successfully", answerslist);
    }

}
