package com.example.project.controller;

import com.example.project.entity.Answers;
import com.example.project.entity.Questions;
import com.example.project.entity.User;
import com.example.project.entity.response.ResponseEntity;
import com.example.project.model.QuestionDisplayFactory;
import com.example.project.model.QuestionPostFactory;
import com.example.project.model.UserRegistFactory;
import com.example.project.service.QuestionService;
import com.example.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.example.project.entity.constant.SystemConstant.USER_ID;

@RestController
@RequestMapping("/api/question")
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuestionDisplayFactory questionDisplayFactory;

    @Autowired
    private QuestionPostFactory questionPostFactory;

    @Autowired
    private UserService userService;

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

    @GetMapping("/listRelated/{text}")
    ResponseEntity<List<QuestionDisplayFactory.QuestionDisplay>> listRelatedQuestion(@PathVariable String text){
        List<Questions> questions = questionService.listRelatedQuestion(text);
        List<QuestionDisplayFactory.QuestionDisplay> questionDisplayList = questions.stream().map(questionDisplayFactory.PojoToDTO).collect(Collectors.toList());
        for(int i=0; i<questionDisplayList.size(); i++){
            questionDisplayList.get(i).setId(i);
        }
        return new ResponseEntity<>(HttpStatus.OK.value(), "Find related questions success", questionDisplayList);
    }

    @PostMapping(value = "/post")
    @ResponseBody
    public ResponseEntity<Questions> regist(@RequestBody @Valid QuestionPostFactory.QuestionPost questionPost, BindingResult bindingResult){
        Questions questions = questionPostFactory.rpoToPojo.apply(questionPost);
        Long userId = (Long) httpSession.getAttribute(USER_ID);
        questions.setUser(userService.findById(userId));
        questionService.saveNewQuestion(questions);
        return new ResponseEntity<>(HttpStatus.OK.value(), "Save new question", questions);
    }

    @GetMapping("/listCategory/{ctgyId}")
    ResponseEntity<List<Questions>> listCategoryQuestion(@PathVariable Long ctgyId){
        List<Questions> questionsList = questionService.listCatgoryQuestions(ctgyId);
        return new ResponseEntity<>(HttpStatus.OK.value(), questionsList);
    }

    @GetMapping("/listSubCategory/{ctgyId}")
    ResponseEntity<List<Questions>> listSubCategoryQuestion(@PathVariable Long ctgyId){
        List<Questions> questionsList = questionService.listSubCatgoryQuestions(ctgyId);
        return new ResponseEntity<>(HttpStatus.OK.value(), questionsList);
    }

}
