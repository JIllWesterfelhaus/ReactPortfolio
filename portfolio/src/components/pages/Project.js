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
            <strong>{props.title}</strong>
          </li>
          <li>
            {props.description}
          </li>
          <li>
            <a href={props.linkToApp}>Link to App</a>
          </li>
          <li>
            <a href={props.linkToRepo}>Link to Git Hub Repo</a>
          </li>
        </ul>
     </div>
    </div>
    
  )
}

export default Project;

