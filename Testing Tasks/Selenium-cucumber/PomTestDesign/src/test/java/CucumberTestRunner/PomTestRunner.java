package CucumberTestRunner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;


@CucumberOptions(tags="",features= {"src/test/resources/features"},glue={"StepDefinition"},plugin= {"pretty",
		"html:target/HtmlReport.html"})

public class PomTestRunner extends AbstractTestNGCucumberTests{

}
