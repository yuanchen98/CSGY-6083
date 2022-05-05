package com.example.project.web.interceptor;

import com.example.project.entity.exception.SystemGlobalException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.example.project.entity.constant.SystemConstant.USER_ID;

@Component
@CrossOrigin(origins = "http://localhost:3000")
public class LoginInterceptor implements HandlerInterceptor {

    @Override

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // don't intercept the static resource
        if (handler instanceof ResourceHttpRequestHandler) {
            return true;
        }

        final Object obj = request.getSession().getAttribute(USER_ID);
        if (obj == null) {
            // response.sendRedirect("/");
            throw new SystemGlobalException("please login");
            // return false;
        } else {
            return true;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }
}
