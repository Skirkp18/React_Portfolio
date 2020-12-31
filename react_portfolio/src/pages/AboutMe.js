import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoBox from "../components/InfoBox/InfoBox"




function AboutMe() {
    return (<Container>
        <Row>
            <Col md={8}>
            <Container>
                <Row>
                    <Col md>
                        <InfoBox />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h1>Education</h1>
                    </Col>
                    <Col md={4}>
                        <h1>Skills</h1>
                    </Col>
                    <Col md={4}>
                        <h1>Contact Info!</h1>
                    </Col>
                </Row>
            </Container>
            </Col>
            <Col md={4}>
            <Container>
                <Row>
                    <Col md>
                        <h1>Table 1</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <h1>Table 2</h1>
                    </Col>
                </Row>
            </Container>
            </Col>
        </Row>
    </Container>
    );
};

export default AboutMe;