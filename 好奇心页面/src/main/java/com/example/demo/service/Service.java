package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.daomin.User;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    private UserDao userDao;

    public String login1(String username,String password){
        User name=userDao.findByUsername(username);
        User mima=userDao.findByUsername(username);
        if(name==null){
            return "该用户不存在";
        } else if (!mima.getPassword().equals(password)) {
            return "密码错误";
        } else {
            //若密码也相同则登陆成功
            //让传入用户的属性和数据库保持一致
            //user.setId(dbUser.getId());
            return "登陆成功";
        }
    }
    public String register(String username,String password){
        User user=new User();
        String result=userDao.findByUsername(username).getUsername();
        if(result==null){
            return "用户名已存在";
        }else{
            user.setUsername(username);
            user.setPassword(password);
            userDao.save(user);
            return "注册成功";
        }
    }
}
