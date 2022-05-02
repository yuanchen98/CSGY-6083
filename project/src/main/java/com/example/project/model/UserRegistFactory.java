package com.example.project.model;

import com.example.project.entity.User;
import com.example.project.service.LocationService;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.function.Function;
import javax.validation.Valid;

@Component
public class UserRegistFactory {

    @Autowired
    private LocationService locationService;

    @Data
    @Builder
    public static class UserRegist implements Serializable {

        @NotBlank(message = "User name can not be null")
        private String username;

        @NotBlank(message = "Password can not be null")
        private String pwd;

        @NotNull(message = "Location can not be null")
        private Long locationId;}

    public Function<UserRegistFactory.UserRegist, User> rpoToPojo = userRegist -> {
        User user = new User();
        user.setUsername(userRegist.getUsername());
        user.setLocation(locationService.getLocation(userRegist.getLocationId()));
        user.setPwd(userRegist.getPwd());
        return user;
    };
}


