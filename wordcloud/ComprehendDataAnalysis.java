package com.springdemo.wordcloud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.amazonaws.services.comprehend.AmazonComprehend;
import com.amazonaws.services.comprehend.model.DetectKeyPhrasesRequest;
import com.amazonaws.services.comprehend.model.DetectKeyPhrasesResult;
import com.amazonaws.services.comprehend.model.KeyPhrase;

@Component
public class ComprehendDataAnalysis {

	@Autowired
	public AmazonComprehend comprehendClient;

	public String sendData(String text) {

		DetectKeyPhrasesRequest detectKeyPhrasesRequest = new DetectKeyPhrasesRequest().withText(text)
				.withLanguageCode("en");
		DetectKeyPhrasesResult detectKeyPhrasesResult = comprehendClient.detectKeyPhrases(detectKeyPhrasesRequest);

		String wordCloudData = "";

		for (KeyPhrase keyPhraseData : detectKeyPhrasesResult.getKeyPhrases()) {
			System.out.println(keyPhraseData);
			wordCloudData = wordCloudData + keyPhraseData.getText() + " ";
		}

		System.out.println(wordCloudData);

		return wordCloudData;

	}

}
