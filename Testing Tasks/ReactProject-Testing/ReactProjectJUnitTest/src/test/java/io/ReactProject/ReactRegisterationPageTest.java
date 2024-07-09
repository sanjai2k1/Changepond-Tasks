package io.ReactProject;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.Scanner;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

import io.reactProject.ReactRegisterationPage;



public class ReactRegisterationPageTest {
	ReactRegisterationPage r = new ReactRegisterationPage();
	Scanner in = new Scanner(System.in);
	@Test
	void PasswordTest() {
		String expected = "Sanjai@2k1";
		System.out.println("enter password");
		String actual = in.nextLine();	
		if(actual.trim()=="") {
			fail("password cannot be empty..");
		}
		assertTrue(r.Password(actual),"Password is incorrect format");
		assertEquals(expected, actual,"password is not same");
		
		
	}
	@Test
	void UserNameTest() {
		String expected = "sanjai";
		System.out.println("enter user name");
		String actual = in.nextLine();	
		if(actual.trim()=="") {
			fail("username  cannot be empty..");
		}
		assertTrue(r.UserName(actual),"user name length must be between 3 and 20");
		assertEquals(expected, actual,"user name is not same");
		
		
	}
	@Test
	void EmailTest() {
		String expected = "sanjai2k1j@gmail.com";
		System.out.println("enter email");
		String actual = in.nextLine();	
		if(actual.trim()=="") {
			fail("email cannot be empty..");
		}
		assertTrue(r.Email(actual),"Not Valid email");
		assertEquals(expected, actual,"email is not same");

		
	}
	
	@Test
	void ContactTest() {
		String expected = "9176071379";
		System.out.println("enter contact");
		String actual = in.nextLine();	
		if(actual.trim()=="") {
			fail("contact cannot be empty..");
		}
		assertTrue(r.Contact(actual),"contact length must be length 10");
		assertEquals(expected, actual,"contact is not same");

		
		
	}
	
	
	
	@Test
	void NameTest() {
		String expected = "sanjai";
		System.out.println("enter name");
		String actual = in.nextLine();	
		if(actual.trim()=="") {
			fail("Name cannot be empty..");
		}
		assertTrue(r.Name(actual),"Name length must be between 3 and 20");
		assertEquals(expected, actual,"Name is not same");
		
		
	}
	
	ReactRegisterationPage t;
	TestInfo testInfo;
	TestReporter testReporter;
	@Test
	@Tag("NameTest")
	@Tag("ContactTest")
	@Tag("EmailTest")
	@Tag("UserNameTest")
	@Tag("PasswordTest")
	void init(TestInfo testInfo,TestReporter testReporter) {
		t = new ReactRegisterationPage();
		this.testInfo = testInfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("tested all "+testInfo.getTags());
	}

	
	
}
