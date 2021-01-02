import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css"

function ResumeBtn() {
    return(<Card>
        <Card.Header>Click Here For My Resume!</Card.Header>
        <Button variant="success">Resume</Button>
    </Card>);
};

export default ResumeBtn;