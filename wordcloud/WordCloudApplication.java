package com.springdemo.wordcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class WordCloudApplication {

	public static void main(String[] args) {
		SpringApplication.run(WordCloudApplication.class, args);
	}

}
