import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoBox from "../InfoBox/InfoBox"
import EducationCard from "../EducationCard/EducationCard"
import SkillsCard from "../SkillsCard/SkillsCard"
import ExpirenceAndAchievementCard from "../ExpirenceAndAchievementsCard/ExpirenceAndAchievementsCard"

function DetailsCard() {
    return (<Container>
        <Row>
            <Col md>
                <InfoBox />
            </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
            <Col md={4}>
                <EducationCard />
            </Col>
            <Col md={4}>
                <SkillsCard />
            </Col>
            <Col md={4}>
                <ExpirenceAndAchievementCard />
            </Col>
        </Row>
    </Container>);
};

export default DetailsCard;