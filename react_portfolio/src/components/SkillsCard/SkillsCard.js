import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./style.css"

function SkillsCard() {
    return(<Card style={{ width: "100%", height: "600px", backgroundColor: "#f1faee", border: "0px" }}>
    <Card.Header className={"listTitle"}>Skills:</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item style={{ backgroundColor: "#f1faee" }}>Leadership</ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: "#f1faee" }}>Customer Service</ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: "#f1faee" }}>HTML/CSS/JavaScript</ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: "#f1faee" }}>React</ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: "#f1faee" }}>Jquery</ListGroup.Item>
    </ListGroup>
  </Card>);
};

export default SkillsCard;