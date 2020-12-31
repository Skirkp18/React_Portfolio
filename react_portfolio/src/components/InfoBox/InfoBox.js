/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./style.css"

function InfoBox() {
    return (<Card id={"infoCard"}>
    <Card.Header id={"headerText"}>About Me</Card.Header>
    <Card.Body>
    <Row>
      <Col md>
        <img src= {process.env.PUBLIC_URL + "/img/profilePhoto.jpeg"} alt={"Profile Photo"} id={"profilePhoto"}></img>
        <p className={"infoText"}>My name is Sean Kirkpatrick. I currently work for Apple and am training to be a full stack web developer. I graduated from Marist College with a B.S. in Business Administration with an Emphasis in Marketing in 2015. Since then, I have worked as both a consumer electronic sales associate as well as a supervisor. I have over five plus years of expirence using and troubleshooting mobile devices such as cell phones and computers. I am proficent with many different operating systems such as Android, iOS, MacOS, and Windows, since I use them daily.</p>
        <br></br>
        <p className={"infoText"}>During my free time I enjoy watching movies and traveling to new places. I am also an avid snowboarder and take many trips to different mountains in the winter. My girlfriend and I love to cook different kinds of foods and we post a lot of the photos to our Instagram page @CookinCouples. I also enjoy keeping up with the latest tech as well as the companies that make them and the current market conditions.</p>
      </Col>
    </Row>
    </Card.Body>
  </Card>);
}

export default InfoBox;