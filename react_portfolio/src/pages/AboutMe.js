import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsCard from "../components/DetailsCard/DetailsCard"
import Sidebar from "../components/Sidebar/Sidebar"




function AboutMe() {
    return (<Container>
        <Row>
            <Col md={8}>
            <DetailsCard />
            </Col>
            <Col md={4}>
            <Container>
            <Row>
            <Col md>
            <Sidebar />
            </Col>
            </Row>
            </Container>
            </Col>
        </Row>
    </Container>
    );
};

export default AboutMe;