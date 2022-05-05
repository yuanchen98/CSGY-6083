package com.example.project.web.config;

import com.example.project.web.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
@CrossOrigin(origins = "http://localhost:3000")
public class WebConfigurer implements WebMvcConfigurer {

    @Resource
    private LoginInterceptor loginInterceptor;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    }


    @Override

    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/", "/index","/api/user/login","/Regist","/api/user/regist", "/api/location/**");

    }
}