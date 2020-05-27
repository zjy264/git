package com.example.demo.Controller;

import com.example.demo.service.Service;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    private Service service;

    @RequestMapping("/main")
    public String role(){
        return "main";
    }
    @RequestMapping(value = "/login2",method = RequestMethod.POST)
    public String Login(HttpServletRequest  request, HttpServletResponse response, HttpSession session, ModelMap map){
        String username=request.getParameter("username");
        String password=request.getParameter("password");
        System.out.println("Controller信息：" +username);
        System.out.println("Controller密码：" + password);
        String result2=service.login1(username,password);
        if(result2.equals("该用户不存在")){
            System.out.println("该用户不存在" );
            map.addAttribute("name","该用户不存在");
            return "redirect:/main";
        }else if(result2.equals("密码错误")){
            map.addAttribute("name","密码错误");
            System.out.println("密码错误" );
            return "redirect:/main";
        }else{
            map.addAttribute("name","登陆成功");
            System.out.println("登陆成功" );
            return "redirect:/main";
        }
    }
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public String Register(HttpServletRequest  request, HttpServletResponse response){
        String username=request.getParameter("username");
        String password=request.getParameter("password");
        System.out.println("Controller信息：" +username);
        System.out.println("Controller密码：" + password);
        String result3=service.register(username,password);
        if (result3.equals("用户名已存在")){
            return "redirect:/main";
        }else {
            return "redirect:/main";
        }
    }
}
