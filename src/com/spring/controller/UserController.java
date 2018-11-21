package com.spring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.model.User;

 
@Controller("userController")
@RequestMapping("/userController")
public class UserController {

	  @RequestMapping("login")
	    public String login(String user,int age)throws Exception{
	        System.out.println("login");
	        System.out.println(user+"\t"+age);
	        return "main";
	    }
	  
	   @RequestMapping("obj")
	    public String obj(User user,HttpServletRequest req)throws Exception{
	        System.out.println("obj");
	        System.out.println(user);
	        req.setAttribute("msg", "request");
	        return "main";
	    }
}