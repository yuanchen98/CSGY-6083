package com.example.project.controller;

import com.example.project.entity.Questions;
import com.example.project.entity.response.ResponseEntity;
import com.example.project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;

@Controller
@RequestMapping("/api/question")
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("listAll")
    @ResponseBody
    ResponseEntity<List<Questions>> listAll(){
        List<Questions> questionsList = questionService.listAll();
        return new ResponseEntity<>(HttpStatus.OK.value(), "Find all questions success", questionsList);

    }



}
