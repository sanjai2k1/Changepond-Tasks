package com.TestApp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchReactProject {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/landing");
		Thread.sleep(1000);
		
		
		driver.findElement(By.xpath("//a[normalize-space()='Login']")).click();
	
		Thread.sleep(1000);
		
		
		
		
		
		
		
		
		
		
		
		driver.findElement(By.name("userName")).sendKeys("user1");
		Thread.sleep(1000);
		driver.findElement(By.name("userPassword")).sendKeys("User@2k1");
		Thread.sleep(1000);
		driver.findElement(By.className("login")).click();
		Thread.sleep(1000);

		
	}

}
