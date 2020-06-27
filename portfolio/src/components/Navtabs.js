import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navtabs() {
    
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                    Home
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    About Me
        </Link>
            
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
        </Link>
           </li>
       </ul>
    );
}
export default Navtabs;
