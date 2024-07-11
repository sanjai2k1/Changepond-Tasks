package com.TestApp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.Status;
public class ExtentReport {
	private static WebDriver driver =null;

	public static void main(String[] args) throws InterruptedException {
		ExtentHtmlReporter htmlReporter =new ExtentHtmlReporter("extent.html");
		ExtentReports extent =new ExtentReports();
		extent.attachReporter(htmlReporter);
		
		ExtentTest test =extent.createTest("Google search Tesst1","this is Test validate Google search Functionality");
		
		String path =System.getProperty("user.dir")+"\\reports\\index.html";
		System.out.println(path);
		test.log(Status.INFO,"Starting test case");
		driver =new FirefoxDriver();
	
	
	driver.get("http://localhost:3000/landing");
	test.pass("Navigated to React Landing project");
	
	driver.findElement(By.xpath("//a[normalize-space()='Login']")).click();
	
	Thread.sleep(1000);
	test.pass("Navigated to React Login project");
	driver.findElement(By.name("userName")).sendKeys("user1");
	Thread.sleep(1000);
	test.pass("Entered UseName");
	driver.findElement(By.name("userPassword")).sendKeys("User@2k1");
	Thread.sleep(1000);
	test.pass("Entered UsePasword");
	driver.findElement(By.className("login")).click();
	Thread.sleep(1000);
	test.pass("Clicked On Login");
	test.pass("Test Completed");
	extent.flush();
	
	
	
	
	
	
	
	
	}
	
	
	
	
}
