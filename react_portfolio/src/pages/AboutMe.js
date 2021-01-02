import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsCard from "../components/DetailsCard/DetailsCard"




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