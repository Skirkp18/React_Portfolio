import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./style.css"

function EducationCard() {
    return (<Card style={{ width: "100%", height: "600px" }}>
    <Card.Header className={"listTitle"}>Education:</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Marist College</ListGroup.Item>
      <ListGroup.Item>Columbia School of Engineering</ListGroup.Item>
    </ListGroup>
    <Card.Header className={"listTitle"}>Degrees And Certifications:</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>B.S. In Business Administration With A Marketing Emphasis</ListGroup.Item>
      <ListGroup.Item>Full Stack Web Develoupment Certification</ListGroup.Item>
    </ListGroup>
  </Card>);
};

export default EducationCard;