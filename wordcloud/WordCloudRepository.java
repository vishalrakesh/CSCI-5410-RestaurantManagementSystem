package com.springdemo.wordcloud;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;

// Reference: https://www.baeldung.com/spring-data-dynamodb

@Repository
public class WordCloudRepository {

	@Autowired
	public DynamoDBMapper tableMapper;

	@Autowired
	public AmazonDynamoDB client;

	ScanRequest scanRequest = new ScanRequest().withTableName("CustomerReviews");

	public void insert(ReviewModel feedback) {

		tableMapper.save(feedback);
	}

	public String retrieve() {
		ScanResult result = client.scan(scanRequest);
		String str = "";
		for (Map<String, AttributeValue> item : result.getItems()) {
			str = str + item.get("review").toString();
		}

		return str;

	}

}
