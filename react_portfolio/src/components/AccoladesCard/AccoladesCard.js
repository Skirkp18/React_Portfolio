import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationCard from "../EducationCard/EducationCard"
import SkillsCard from "../SkillsCard/SkillsCard"
import ExpirenceAndAchievementCard from "../ExpirenceAndAchievementsCard/ExpirenceAndAchievementsCard"
import "./style.css"

function AccoladesCard() {
    return( <Card id={"detailsCard"}>
    <Row>
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
</Card>);
};

export default AccoladesCard;