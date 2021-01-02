import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LinksCard from "../LinksCard/LinksCard";
import ResumeBtn from "../ResumeBtn/ResumeBtn";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./style.css"



function Sidebar() {
    return(<Card id={"sidebar"}>
        <Row>
            <Col md>
                <LinksCard />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col md>
                <ResumeBtn />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col md>
                <SocialLinks />
            </Col>
        </Row>
    </Card>);
};

export default Sidebar;