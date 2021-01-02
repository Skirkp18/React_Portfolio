import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css"

function ResumeBtn() {
    return(<Card style={{backgroundColor: "#f1faee"}}>
        <Card.Header className={"listTitle"} style={{textAlign: "center"}}>Click Here For My Resume!</Card.Header>
        <Button href="https://drive.google.com/file/d/1p1myO5OfoN0CGvy7reQBM4dzcWoBR6kB/view" style={{height: "50px"}} variant="success"><h4>My Resume</h4></Button>
    </Card>);
};

export default ResumeBtn;