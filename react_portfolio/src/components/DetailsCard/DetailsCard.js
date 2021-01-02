import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoBox from "../InfoBox/InfoBox"
import AccoladesCard from "../AccoladesCard/AccoladesCard"

function DetailsCard() {
    return (<Container>
        <Row>
            <Col md>
                <InfoBox />
            </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
            <Col md>
                <AccoladesCard />
            </Col>
        </Row>
    </Container>);
};

export default DetailsCard;