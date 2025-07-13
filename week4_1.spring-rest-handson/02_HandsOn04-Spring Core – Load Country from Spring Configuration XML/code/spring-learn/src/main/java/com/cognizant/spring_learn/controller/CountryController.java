package com.cognizant.spring_learn.controller;
import com.cognizant.spring_learn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import com.cognizant.spring_learn.service.CountryService;
@RestController
public class CountryController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
	@Autowired
	private CountryService countryservice;
	@GetMapping("/country/{code}")
	public Country getCountry(@PathVariable String code) {
		LOGGER.info("START - getCountry()");
		Country country = countryservice.getCountry(code);
		LOGGER.info("END - getCountry()");
		return country;
		
	}
}
