import React from "react";

function Project(props) {
  return (
    <div className="projects">
    <div className="container">
      
        <img className="card" alt={props.title} src={props.image} />
      
    </div>
      <div className="content">
        <ul style={{ listStyleType: "none"}}>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Link to App:</strong> {props.linkToApp}
          </li>
          <li>
            <strong>Link to GitHub repo:</strong> {props.linkToRepo}
          </li>
        </ul>
     </div>
    </div>
    
  )
}

export default Project;

