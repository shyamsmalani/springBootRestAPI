package com.shyammalani.demo.restapi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * “Unpublished Work © 2016 Deere & Company. All Worldwide Rights Reserved. THIS MATERIAL IS THE PROPERTY OF DEERE & COMPANY. ALL USE, ALTERATIONS, DISCLOSURE, DISSEMINATION AND/OR REPRODUCTION NOT SPECIFICALLY AUTHORIZED BY DEERE & COMPANY IS PROHIBITED. “
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.PUT, "/users/*").hasAnyRole("AGENT", "MANAGER")
                .antMatchers("/users/*").hasRole("MANAGER")
                .antMatchers("/users").hasRole("MANAGER")
                .and().httpBasic()
                .and()
                .csrf().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("user1")
                .password("test123").roles("AGENT").and()
                .withUser("user2")
                .password("test456").roles("MANAGER");
    }
}
