import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"
import ProjectComponent from "../ProjectComponent/ProjectComponent";

function ProjectsCard(props) {
    const projectsObject = props.projectsObj;
    console.log(projectsObject);
    const Projects = projectsObject.map((name) => 
    <ProjectComponent name={name} />
    );

    console.log(Projects)

    return(<Card id={"projectsCard"}>
        {Projects}
    </Card>);

};

export default ProjectsCard;