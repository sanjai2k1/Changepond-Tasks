package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import PageObjects.Loginpage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class POmStepDefinition {
	Loginpage login;
	static WebDriver driver;
@Given("User is on login page")
public void user_is_on_login_page() {
    // Write code here that turns the phrase above into concrete actions
	driver=new FirefoxDriver();
	//	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	    driver.get("https://www.saucedemo.com/v1/index.html");
}

@When("User enters valid {string} and {string}")
public void user_enters_valid_and(String username, String password) {
    // Write code here that turns the phrase above into concrete actions
	  login = new Loginpage(driver);
	  login.enterUsername(username);
	  login.enterPassword(password);
}

@When("clicks on login button")
public void clicks_on_login_button() {
    // Write code here that turns the phrase above into concrete actions
	login.hitLoginButton();
	
}

@Then("user is navigated to the home page")
public void user_is_navigated_to_the_home_page() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	Thread.sleep(1000);
	login.isAppLogoDisplayed();}

@Then("Close the browser")
public void close_the_browser() {
    // Write code here that turns the phrase above into concrete actions
	driver.close();}

}
