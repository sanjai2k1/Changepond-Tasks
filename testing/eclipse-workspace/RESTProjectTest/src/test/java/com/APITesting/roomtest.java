package com.APITesting;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.hamcrest.Matchers.equalTo;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

public class roomtest {
//	@Test
	public void GETRooms() {
		 baseURI = "http://localhost:8888";
		 given().get("/rooms").then().statusCode(200).body("[0].id", equalTo("6a82")).log().all();
//		 given().get("/users?page=2").then().statusCode(200).body("data[1].email",equalTo("lindsay.ferguson@reqres.in"));
	}
	
//	@Test
	public void POSTRequest() {
		Map<String,Object> map = new HashMap<String,Object>();
		JSONObject request = new JSONObject(map);
		request.put("name", "user5");
		request.put("contact", "trainee");
		request.put("username", "user5");
		request.put("password", "User@2k1");
		request.put("email", "user5");
		  JSONArray bookedrooms = new JSONArray();
	        request.put("bookedrooms", bookedrooms);
		System.out.println(request.toJSONString());
		baseURI = "http://localhost:8888/";	
		given().header("content-type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.body(request.toJSONString()).post("/users").then().statusCode(201).log().all();
	}
	
	
@Test
	public void PutRequest() {

		JSONObject request = new JSONObject();

		 baseURI = "http://localhost:8888";
		 request.put("name", "samrutha");
			request.put("contact", "9876543210");
			request.put("username", "samik");
			request.put("password", "Samru@2k1");
			request.put("email", "sam@gmail.com");
			  JSONArray bookedrooms = new JSONArray();
		        request.put("bookedrooms", bookedrooms);

		given().header("Content-Type", "application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
.body(request.toJSONString()).put("/users/9360").then().statusCode(200).log().all();

	}
//@Test
	public void PatchRequest() {
	 baseURI = "http://localhost:8888";
	
		 
		 
		 
		JSONObject request = new JSONObject();
		request.put("name", "user5");
		request.put("contact", "9876543210");
		request.put("username", "samik");
		request.put("password", "Samru@2k1");
		request.put("email", "sam@gmail.com");
		  JSONArray bookedrooms = new JSONArray();
	        request.put("bookedrooms", bookedrooms);
		

		given().header("Content-Type", "application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
				.body(request.toJSONString()).patch("/users/9360").then().statusCode(200).log().all();

	}

	//@Test
	public void DELETERequest() {

		 baseURI = "http://localhost:8888";

		when().delete("/users/cdff").then().statusCode(200).log().all();

	}
}
