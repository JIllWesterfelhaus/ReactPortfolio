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
            <a href={props.linkToApp}>Link to App</a>
          </li>
          <li>
            <a href={props.linkToRepo}>Link to Repo</a>
          </li>
        </ul>
     </div>
    </div>
    
  )
}

export default Project;

