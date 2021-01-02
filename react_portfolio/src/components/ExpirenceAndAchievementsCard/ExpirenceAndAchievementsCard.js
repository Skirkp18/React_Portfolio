import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./style.css"

function ExpirenceAndAchievementCard() {
    return (<Card style={{ width: "100%", height: "600px" }}>
    <Card.Header className={"listTitle"}>Expirence:</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Specalist - Apple Inc. (Current)</ListGroup.Item>
      <ListGroup.Item>Mobile Supervisor - Best Buy (Oct 2017 - Aug 2019)</ListGroup.Item>
      <ListGroup.Item>Verzion Mobile Specalist - Best Buy (Feb 2017 - Oct 2017)</ListGroup.Item>
      <ListGroup.Item>Apple Master - Best Buy (Oct 2015 - Feb 2017)</ListGroup.Item>
    </ListGroup>
  </Card>);
};

export default ExpirenceAndAchievementCard;