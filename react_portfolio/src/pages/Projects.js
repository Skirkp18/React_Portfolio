import React from "react";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard"
const projectsObj = [{
    name: "Weather Dashboard",
    github: "https://github.com/Skirkp18/Weather_Dashboard",
    liveapp: "https://skirkp18.github.io/Weather_Dashboard/",
    imageNumber: 1
}, 
{
    name: "QChef",
    github: "https://github.com/nicschworer/JASN_Project_01",
    liveapp: "https://nicschworer.github.io/JASN_Project_01/",
    imageNumber: 2
}, 
{
    name: "Employee Database Manager",
    github: "https://github.com/Skirkp18/Employee_Database_Manager",
    liveapp: "Must Run Locally",
    imageNumber: 3
},
{
    name: "React Portfolio",
    github: "https://github.com/Skirkp18/React_Portfolio",
    liveapp: "Must Run Locally",
    imageNumber: 4
},
{
    name: "Track Expense App",
    github: "https://github.com/Skirkp18/TrackExpense-App",
    liveapp: "https://trackexpenseapp.herokuapp.com/",
    imageNumber: 5
},
{
    name: "Employee Database React App",
    github: "https://github.com/Skirkp18/employee_database_react_app",
    liveapp: "https://skirkp18.github.io/employee_database_react_app/",
    imageNumber: 6
}];

function Projets() {
    return (<div>
        <ProjectsCard projectsObj={projectsObj} />
    </div>);
};

export default Projets;