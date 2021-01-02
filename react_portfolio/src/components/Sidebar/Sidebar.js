import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LinksCard from "../LinksCard/LinksCard";
import ResumeBtn from "../ResumeBtn/ResumeBtn";
import "./style.css"



function Sidebar() {
    return(<Card id={"sidebar"}>
        <Row>
            <Col md>
                <LinksCard />
            </Col>
        </Row>
        <Row>
            <Col md>
                <ResumeBtn />
            </Col>
        </Row>
    </Card>);
};

export default Sidebar;