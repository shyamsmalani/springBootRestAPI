package com.shyammalani.demo.restapi;

import cucumber.api.java.en.Given;
import cucumber.runtime.CucumberException;
import org.springframework.beans.factory.annotation.Autowired;

@CucumberStepsDefinition
public class SecuritySteps {

    @Autowired
    private World world;

    @Given("^I am a (AGENT|MANAGER)$")
    public void I_am_a__(final String role) {
        switch (role) {
            case "AGENT":
                world.setPerformerCredentials("user1", "test123");
                break;
            case "MANAGER":
                world.setPerformerCredentials("user2", "test456");
                break;
            default:
                throw new CucumberException("Unsupported role");
        }
    }
}
