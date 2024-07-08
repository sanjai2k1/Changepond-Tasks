package com.APITesting;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;
import io.restassured.http.ContentType;
import io.restassured.matcher.ResponseAwareMatcher;
import io.restassured.response.Response;
import static org.hamcrest.Matchers.hasItems;
import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
public class TestGETandPOSTRequest {

	@Test
	public void testGet1() {
		baseURI = "https://reqres.in/api";
		given().get("/unknown").then().statusCode(200).body("data[0].id", equalTo(1)).log().all();
		
		given().get("/unknown").then().statusCode(200).body("data[1].name", equalTo("fuchsia rose")).body("data[1].id", equalTo(2)).log().all();
				
	}
	
	@Test
	public void testGet2() {
		baseURI = "https://reqres.in/api";
		given().get("/users?page=2").then().statusCode(200).body("data.first_name", hasItems("Lindsay","Tobias"));
		
		
		
	}
	
	@Test
	public void POSTRequest() {
		Map<String,Object> map = new HashMap<String,Object>();
		JSONObject request = new JSONObject(map);
		request.put("name", "Monica");
		request.put("job", "trainee");
		System.out.println(request.toJSONString());
		baseURI = "https://reqres.in/api";	
		given().header("content-type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
		.body(request.toJSONString()).post("/users").then().statusCode(201).log().all();
	}
	
	
	
	
}
