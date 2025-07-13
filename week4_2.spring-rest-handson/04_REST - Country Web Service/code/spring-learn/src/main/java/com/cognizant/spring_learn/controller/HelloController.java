package com.cognizant.spring_learn.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloController {
	private static Logger LOGGER = LoggerFactory.getLogger(HelloController.class);
	
	@GetMapping("/hello")
	public String sayHello() {
		LOGGER.info("START - sayHello()");
		String str = "Hello World!!";
		LOGGER.info("END - sayHello()");
		return str;
	}
}
