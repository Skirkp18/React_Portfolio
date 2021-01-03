import React from "react";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard"
const projectsObj = [{
    name: "Weather Dashboard",
    github: "https://github.com/Skirkp18/Weather_Dashboard",
    liveapp: "https://skirkp18.github.io/Weather_Dashboard/",
    imageNumber: 1
}, 
{
    name: "Read Me Generator",
    github: "https://github.com/Skirkp18/Read_Me_Generator",
    liveapp: "Must Run Locally",
    imageNumber: 2
}, 
{
    name: "Employee Database Manager",
    github: "https://github.com/Skirkp18/Employee_Database_Manager",
    liveapp: "Must Run Locally",
    imageNumber: 3
}];

function Projets() {
    return (<div>
        <ProjectsCard projectsObj={projectsObj} />
    </div>);
};

export default Projets;