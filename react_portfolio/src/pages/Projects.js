import React from "react";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard"
const projectsObj = [{name: "projectOne"}, {name: "projectTwo"}, {name: "ProjectThree"}]

function Projets() {
    return (<div>
        <ProjectsCard projectsObj={projectsObj} />
    </div>);
};

export default Projets;