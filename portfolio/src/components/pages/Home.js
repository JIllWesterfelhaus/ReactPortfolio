import React from "react";
import Headshot from "../../public/images/JW headshot.png";
 
function Home() {
    return (
      <div>
        <h1>Hi!</h1>
        <p>
        <img style={{width: "35%"}} src={Headshot} alt="Jill Westerfelhaus" />
        
        <h5 class="text-center">I am a student at Northwestern University's Coding Bootcamp.</h5>  
    <h5 class="text-center">I'm learning Full Stack Web Development.</h5>
    <h5 class="text-center">Please take a look around and see what I'm learning!</h5>
        </p>
      </div>
    );
  }
  
  export default Home;