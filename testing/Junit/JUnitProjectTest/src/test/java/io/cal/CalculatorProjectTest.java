package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CalculatorProjectTest {
	
//	@Test
	void add() {
		CalculatorProject c = new CalculatorProject();
		int expected =2;
		int got = c.add(1, 1);
		
		
		assertEquals(expected, got,"not got");
		
		
		
	}
	
	
//	@Test
	void sub() {
		CalculatorProject c = new CalculatorProject();
		int expected =2;
		int got = c.sub(1, 1);
		
		
		assertEquals(expected, got,"not got");
		
		
		
	}
	
//	@Test
	void mul() {
		CalculatorProject c = new CalculatorProject();
		int expected =2;
		int got = c.mul(1, 1);
		
		
		assertEquals(expected, got,"not got");
		
		
		
	}
	void divtest() {
		CalculatorProject c = new CalculatorProject();
		assertThrows(NullPointerException.class,()->c.div(5,0),"null exception");
	}
	
	@Test
	void positiveTest() {
		CalculatorProject c = new CalculatorProject();
	
	assertEquals(true,c.postive(1),"not a postive number");
	
	}
	

}
