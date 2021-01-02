import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"
import ProjectsCard from "../ProjectsCard/ProjectsCard";

function ProjectsComponent(props) {
    console.log(props.name.name);
    const projectName = props.name.name
        return (<Card>
            <Card.Header>{projectName}</Card.Header>
        </Card>)

}

export default ProjectsComponent;