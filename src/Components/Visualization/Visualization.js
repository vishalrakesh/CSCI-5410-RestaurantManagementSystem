import React, { useEffect } from 'react'
// import { getUserInfo } from '../../utils/AuthUtils'
import ApexCharts from "apexcharts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Visualization = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <iframe
              width="1600" height="700"
              src="https://datastudio.google.com/embed/reporting/7d662818-eea1-4a57-b2c4-f8093862fd7e/page/WjlWC"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Visualization