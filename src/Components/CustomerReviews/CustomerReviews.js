import React, { useEffect } from "react";
// import Meta from "../../components/Meta";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Card from "react-bootstrap/Card";

const pageTitle = "Food Reviews"


function CustomerReviews() {


  useEffect(async () => {

    const wordlCloudURL = 'https://wordcloud-jg6nylgbna-et.a.run.app/reviews/getWordCloudData';
    axios.get(wordlCloudURL).then((repos) => {
      const wordCloudData = repos.data;
      var options = {
        method: 'POST',
        url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': 'c0e22fb0cfmsh299324230ccf431p152b06jsn289fa0278ef3',
          'x-rapidapi-host': 'textvis-word-cloud-v1.p.rapidapi.com'
        },
        data: {
          text: wordCloudData,
          scale: 1,
          width: 1500,
          height: 1500,
          colors: ['#375E97', '#FB6542', '#FFBB00', '#3F681C'],
          font: 'Tahoma',
          use_stopwords: true,
          language: 'en',
          uppercase: false
        }
      };

      let responseWD = axios.request(options).then(function (response) {
        var textWD = response.data;
        var img = document.getElementById("wordCloud");
        img.src = textWD;
        img.height = 800;
        img.width = 800;

      });


    })


  }, []);


  const submitReview = event => {
    var submitFeedback = {
      method: 'POST',
      url: 'https://wordcloud-jg6nylgbna-et.a.run.app/reviews/submitreviews',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        review: event.target.review.value,
        foodItemName: event.target.foodItemName.value,
        restaurantName: event.target.restaurantName.value
      }
    };

    axios.request(submitFeedback).then(function (responseComprehend) {
      var review = responseComprehend.data;

    });

  }

  return (
    <div>
      <Container>

        <Row>
          <Col md={6}>

            <Card className="mb-3">
              <Card.Header>
                <p className="message-header">Word cloud</p>
              </Card.Header>
              <Card.Body>
                <div>
                  {useEffect.responseWD}
                </div>
                <img id="wordCloud" />
              </Card.Body>
            </Card>

          </Col>
          <Col md={6}>

            <Row className="justify-content-md-center">
              <Col xs lg="12">
                <Card className="mb-3">
                  <Card.Header>Enter feedback</Card.Header>
                  <Card.Body>
                    <Form onSubmit={(e) => submitReview(e)}>
                      <Form.Group controlId="title">
                        <Form.Label>Resturant name</Form.Label>
                        <Form.Control as="select" name="restaurantName" required>
                          <option value="Priti's Kitchen">Priti's Kitchen</option>
                          <option value="Burger King">Burger King</option>
                          <option value="Pizza Place">Pizza Place</option>
                          <option value="Country Kitchen">Country Kitchen</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="title">
                        <Form.Label>Food Item Name</Form.Label>
                        <Form.Control
                          type="input"
                          name="foodItemName"
                          placeholder="Enter the food item name"
                          required
                          minLength="5"
                        />
                      </Form.Group>
                      <Form.Group controlId="textFeedback">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          minLength="5"
                          name="review"
                          placeholder="Enter your review"
                          required
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        style={{ float: "right" }}
                        variant="primary"
                      >
                        Add
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>


          </Col>
        </Row>

      </Container>


    </div>

  );

}

export default CustomerReviews;