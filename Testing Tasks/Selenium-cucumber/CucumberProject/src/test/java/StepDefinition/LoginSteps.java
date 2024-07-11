package StepDefinition;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	private static WebDriver driver =null;

@Given("User is on login page")
public void user_is_on_login_page() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("User is trying to login in");
	driver = new FirefoxDriver();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	driver.get("https://www.saucedemo.com/v1/");
}

@When("User enters valid {string} and {string}")
public void user_enters_valid_and(String username, String password) {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("When");
    driver.findElement(By.id("user-name")).sendKeys(username);
    driver.findElement(By.id("password")).sendKeys(password);
    
    
}

@When("clicks on login button")
public void clicks_on_login_button() {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("And1");
    driver.findElement(By.id("login-button")).click();
}

@Then("user is navigated to the home page")
public void user_is_navigated_to_the_home_page() {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Then");
	Assert.assertTrue(driver.findElements(By.xpath("//div[@class='app_logo']")).size()>0,"user is navigated to home page");
}

@Then("Close the browser")
public void close_the_browser() {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("And2");
    driver.close();
}
}
