package com.springdemo.wordcloud;

import java.io.Serializable;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@SuppressWarnings("serial")
@DynamoDBTable(tableName = "CustomerReviews")
public class ReviewModel implements Serializable {

	private String reviewId;
	private String review;
	private String foodItemName;
	private String restaurantName;

	public void setReviewId(String fid) {
		this.reviewId = fid;
	}

	@DynamoDBHashKey(attributeName = "reviewId")
	@DynamoDBAutoGeneratedKey
	public String getReviewId() {
		return reviewId;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@DynamoDBAttribute
	public String getFoodItemName() {
		return foodItemName;
	}

	public void setRestaurantName(String ResturantName) {
		this.restaurantName = ResturantName;
	}

	@DynamoDBAttribute
	public String getRestaurantName() {
		return restaurantName;
	}

	public void setFoodItemName(String FoodItemName) {
		this.foodItemName = FoodItemName;
	}

	@DynamoDBAttribute
	public String getReview() {
		return review;
	}
}
