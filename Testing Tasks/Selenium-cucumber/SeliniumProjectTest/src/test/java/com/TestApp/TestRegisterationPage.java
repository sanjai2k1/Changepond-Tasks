package com.TestApp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class TestRegisterationPage {
	@Test
public void testregisteration() throws InterruptedException {
	
	
	WebDriver driver = new ChromeDriver();
	
	driver.get("https://www.google.com/intl/en-US/gmail/about/");
	Thread.sleep(1000);
	
	
	driver.findElement(By.xpath("//a[normalize-space()='Sign in']")).click();
	driver.findElement(By.id("identifierId")).sendKeys("sanjai2k1j@gmail.com");
	Thread.sleep(3000);
}
}
