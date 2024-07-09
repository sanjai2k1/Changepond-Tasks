package io.cal;

public class AmazonCreateAnAcoountpage {
	public String YourName(String Firstnm,String lastnm) {
		
		return (Firstnm+" "+lastnm);
	}
	
	public String MobNoAndEmail(String mobno,String email) {
		
		return ("Mobile" + mobno +"E-mail "+email);
	}
	
	public boolean checkpassword(String pass) {
		return pass.length()==6;
	}
	
	public boolean clickContinue(String name,String email,String password) {
		
		return true;
	}
	
	
	
}
