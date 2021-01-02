import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

function SkillsCard() {
    return(<Card style={{ width: "100%", height: "600px" }}>
    <Card.Header className={"listTitle"}>Skills:</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Leadership</ListGroup.Item>
      <ListGroup.Item>Customer Service</ListGroup.Item>
      <ListGroup.Item>HTML/CSS/JavaScript</ListGroup.Item>
      <ListGroup.Item>React</ListGroup.Item>
      <ListGroup.Item>Jquery</ListGroup.Item>
    </ListGroup>
  </Card>);
};

export default SkillsCard;