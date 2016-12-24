package com.shyammalani.demo.restapi;

import com.shyammalani.demo.restapi.model.User;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
@Scope("cucumber-glue")
public class World {

    private String userEmail;
    private User user;
    private ResponseEntity response;

    private String performerUsername;
    private String performerPassword;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ResponseEntity getResponse() {
        return response;
    }

    public void setResponse(ResponseEntity response) {
        this.response = response;
    }

    public String getPerformerUsername() {
        return performerUsername;
    }

    public String getPerformerPassword() {
        return performerPassword;
    }

    public void setPerformerCredentials(final String username, final String password) {
        this.performerUsername = username;
        this.performerPassword = password;
    }
}
