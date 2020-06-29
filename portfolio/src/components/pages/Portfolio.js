import React from "react";
import data from "../../Project.json"
import Project from "./Project";
 
function Portfolio() {
  const projectList = data.map(project => (
    <Project 
      title={project.title}
      image={project.image}
      description={project.description}
      linkToApp={project.linkToApp}
      linkToRepo={project.linkToRepo}
      />
  ))
    return (
      <div>
        <h1>My Projects</h1>
        {projectList}
      </div>
    );
}
  
  export default Portfolio;