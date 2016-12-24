package com.shyammalani.demo.restapi;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/cucumber-html-report" },
        features = "src/test/resources/com/shyammalani/demo/restapi",
        glue = { "com.shyammalani.demo.restapi" },
        strict = true,
        dryRun = true)
public class IntegrationTests {

}
