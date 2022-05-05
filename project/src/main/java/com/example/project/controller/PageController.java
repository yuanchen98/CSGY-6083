package com.example.project.controller;

import com.example.project.entity.User;
import com.example.project.entity.response.ResponseEntity;
import com.example.project.model.UserRegistFactory;
import com.example.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import static com.example.project.entity.constant.SystemConstant.USER_ID;

@Controller
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class PageController {

    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private UserRegistFactory userRegistFactory;

    @PostMapping(value = "/login")
    @ResponseBody
    public ResponseEntity<User> login(@RequestBody @Valid User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), bindingResult.getFieldError().getDefaultMessage());
        }
        User userLogin = userService.login(user.getUserId(), user.getPwd());
        if(userLogin!=null){
            httpSession.setAttribute(USER_ID, userLogin.getUserId());
            return new ResponseEntity<>(HttpStatus.OK.value(), "login success", userLogin);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR.value(),"No such user or the account sign-in was incorrect");

    }

    @PostMapping(value = "/regist")
    @ResponseBody
    public ResponseEntity<User> regist(@RequestBody @Valid UserRegistFactory.UserRegist userRegist, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), bindingResult.getFieldError().getDefaultMessage());
        }
        User user = userRegistFactory.rpoToPojo.apply(userRegist);
        user = userService.regist(user);
        httpSession.setAttribute(USER_ID, user.getUserId());
        return new ResponseEntity<>(HttpStatus.OK.value(), "Regist success", user);
    }

    @GetMapping(value = "/signOut")
    public ResponseEntity<Void> signOut(){
        httpSession.removeAttribute(USER_ID);
        return new ResponseEntity<>(HttpStatus.OK.value(),"Sign out success");
    }

    @GetMapping(value = "/userProfile/")
    @ResponseBody
    public ResponseEntity<User> userProfile(){
        User user = userService.findById((Long)httpSession.getAttribute(USER_ID));
        return new ResponseEntity<>(HttpStatus.OK.value(), "Find user profile success", user);
    }

}
