package com.example.project.service;

import com.example.project.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User login(Long id, String pwd);

}
