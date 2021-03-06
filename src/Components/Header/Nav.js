import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Recipes">Recipes</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

