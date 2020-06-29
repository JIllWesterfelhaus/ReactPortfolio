import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
  return (
    <ul className="project-group">
      {props.project.map(item => (
        <li className="project-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Project;
