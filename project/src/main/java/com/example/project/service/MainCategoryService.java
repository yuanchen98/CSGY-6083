package com.example.project.service;

import com.example.project.entity.MainCategory;
import org.jboss.jandex.Main;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MainCategoryService {

    List<MainCategory> listAllMainCategory();
}
