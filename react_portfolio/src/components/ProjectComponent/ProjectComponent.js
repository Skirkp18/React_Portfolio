import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css"

function ProjectsComponent(props) {
    const projectName = props.project.name;
    const gitHubUrl = props.project.github;
    let liveAppUrl = props.project.liveapp;
    if (liveAppUrl === "Must Run Locally") {
        liveAppUrl = "";
    }
    const imageNumber = props.project.imageNumber;
    const imagePath = "/img/appScreenshot" + imageNumber + ".jpeg";
        return (<Col md={4} style={{marginTop: "20px"}}>
        <Card>
            <Card.Header className={"projectTitle"}><h2 className={"projectTitleTxt"}>{projectName}</h2></Card.Header>
            <img src={process.env.PUBLIC_URL + imagePath} alt="Project Screenshot" className={"projectImg"} />
            <Card.Body className={"bodyTxt"}><a href={gitHubUrl}><h5>GitHub Repo</h5></a></Card.Body>
            <Card.Body  className={"bodyTxt"}><a href={liveAppUrl}><h5>Live App Link (if availible)</h5></a></Card.Body>
        </Card>
        </Col>);

}

export default ProjectsComponent;