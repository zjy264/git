package com.example.demo.Controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class MyPasswordEncoder implements PasswordEncoder {
    @Override
    public String encode(CharSequence charSequence) {

        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();

        return encoder.encode(charSequence.toString());
    }

    @Override
    public boolean matches(CharSequence charSequence, String s) {
        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
        return s.equals(encoder.encode(charSequence));
    }

}
