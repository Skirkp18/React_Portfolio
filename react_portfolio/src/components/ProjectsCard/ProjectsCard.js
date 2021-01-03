import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"
import ProjectComponent from "../ProjectComponent/ProjectComponent";

function ProjectsCard(props) {
    const projectsObject = props.projectsObj;
    console.log(projectsObject);
    const Projects = projectsObject.map((project) => 
    <ProjectComponent project={project}/>
    );

    console.log(Projects)

    return(<Card id={"projectsCard"}>
        <Row>
            <Card.Header id={"projectsCardHeader"}><h1>My Best Projects:</h1></Card.Header>
        </Row>
        <br />
        <Row>
        {Projects}
        </Row>
    </Card>);

};

export default ProjectsCard;