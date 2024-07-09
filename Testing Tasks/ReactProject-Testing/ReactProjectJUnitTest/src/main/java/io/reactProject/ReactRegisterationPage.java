package io.reactProject;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ReactRegisterationPage {

	
	
	public  boolean Name(String input) {
		Pattern pattern = Pattern.compile("^[a-zA-Z]{3,20}$");
		Matcher matcher = pattern.matcher(input);

		return matcher.matches();
		}

		public  boolean Contact(String input) {
			Pattern pattern = Pattern.compile("^[0-9]{10}$");
			Matcher matcher = pattern.matcher(input);
		return  matcher.matches();
		}

		public  boolean Email(String input) {
			Pattern pattern = Pattern.compile("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$");
			Matcher matcher = pattern.matcher(input);
		return matcher.matches();
		}

		public  boolean UserName(String input) {
			Pattern pattern = Pattern.compile("^[a-zA-Z]{3,20}$");
			Matcher matcher = pattern.matcher(input);

			return matcher.matches();
		}

		public  boolean Password(String input) {
			Pattern pattern = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
			Matcher matcher = pattern.matcher(input);
		return matcher.matches();
		}
	
	
	
}
