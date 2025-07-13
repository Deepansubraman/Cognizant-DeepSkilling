package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
	public Country getCountry (String code) {
		ApplicationContext context =new ClassPathXmlApplicationContext("country.xml");
		List<Country> countries = (List<Country>) context.getBean("countrylist");
		//return countries.stream().filter(c->c.getCode().equalsIgnoreCase(code)).findFirst().orElse(null);
		
		for(Country i : countries) {
			if(i.getCode().equalsIgnoreCase(code)) {
				return i;
			}
		}
		return null;
		
	}
}
