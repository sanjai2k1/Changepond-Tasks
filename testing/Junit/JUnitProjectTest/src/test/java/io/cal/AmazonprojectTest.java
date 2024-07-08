package io.cal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import org.junit.jupiter.api.Test;

public class AmazonprojectTest {

	
	@Test
	void testAmazonTagLine() {
		String expected = "Spend less. Smile more";
		String actual = "Most Reliable Shopping App";
		
		assertEquals(expected, actual);
		assertSame(expected, actual,"Expected result should match with  actual");
	}
	
	@Test
	void testAmazonLogo() {
		String expected = "amazon";
		String actual = "amazon";
		assertEquals(expected,actual);
		assertSame(expected,actual,"Expected result should match with  actual");
	}
}
