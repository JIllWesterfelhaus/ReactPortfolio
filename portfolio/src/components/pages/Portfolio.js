import React from "react";
import Project from "./Project";
 
function Portfolio() {
    return (
      <div>
        <h1>My Projects</h1>
      </div>
    );
}
  const Pantry = [
    {
      id: 1,
      name: "Group Project: My Pantry"
    },
     
    {id: 2,
      name: "Screenshot"
    },
    {
      id: 3,
      name: "My Pantry. App for finding recipes based on ingredients the user already has. Group project with Jules Lazar and Mohmed Vaid."
       
    },
    {
      id: 4,
      name: "Link to My Pantry app"
    },
    {
      id: 5,
      name: "Link to GitHub repository" 
    },
  function App() {
    return <Project Pantry={Pantry} />;
  },

  export default Portfolio;