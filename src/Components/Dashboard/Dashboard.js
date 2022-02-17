
import { getUserInfo } from '../../utils/AuthUtils';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
    const restaurantMap = [
        {
          _id: 1,
          restaurantname: "Priti's Kitchen",
          title: "Best Indian Cuisine",
          message: "Enjoy the Indian comfort homely food",
        }
      ];

    const user = getUserInfo()
    return (
        <div>
      {/* <Menu></Menu> */}
      <Container>
        <Row className="justify-content-md-center">
          {restaurantMap.map((restaurant) => (
            <Col xs lg="9" md="1">
              <Card className="mb-3" key={restaurant._id} id={restaurant._id}>
              <Card.Body>
                  <Card.Title className="lead">Hello Foodies ! Welcome to Halifax Foodie, your one stop solution for all your cravings !</Card.Title>
                  {/* <Card.Text>{restaurant.message}</Card.Text>
                  <Button variant="primary">Food Menu</Button> */}
                </Card.Body>
                <Card.Img
                 style={{ width: '100%', height: 600 }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                />
                
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
        <Col xs lg="9" md="1"></Col>
        </Row>
        <Row>
        <Col xs lg="9" md="1"></Col>
        </Row>
      </Container>
    </div>
    )
}

export default Dashboard
