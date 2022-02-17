package com.springdemo.wordcloud;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/reviews")
public class WordCloudController {

	@Autowired
	private WordCloudRepository wcRepository;

	@Autowired
	private ComprehendDataAnalysis comprehendData;

	@PostMapping("/submitreviews")
	public String insertIntoDB(@RequestBody HashMap<String, String> feedback) {

		ReviewModel fb = new ReviewModel();
		fb.setFoodItemName(feedback.get("foodItemName"));
		fb.setReview(feedback.get("review"));
		fb.setRestaurantName(feedback.get("restaurantName"));

		wcRepository.insert(fb);
		return "Successfully Submitted";
	}

	@GetMapping("/getWordCloudData")
	public String retrieveFromDB() {
		String savedReviews = wcRepository.retrieve();
		String wordCloudData = comprehendData.sendData(savedReviews);
		return wordCloudData;
	}

}
