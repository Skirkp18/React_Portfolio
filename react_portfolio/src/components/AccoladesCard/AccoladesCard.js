import React from "react";
import Card from "react-bootstrap/Card";
import EducationCard from "../EducationCard/EducationCard"
import SkillsCard from "../SkillsCard/SkillsCard"
import ExpirenceAndAchievementCard from "../ExpirenceAndAchievementsCard/ExpirenceAndAchievementsCard"
import "./style.css"

function AccoladesCard() {
    return( <Card>
    <EducationCard />
    <SkillsCard />
    <ExpirenceAndAchievementCard />
</Card>);
};

export default AccoladesCard;