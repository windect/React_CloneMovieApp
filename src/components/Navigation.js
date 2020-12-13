import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";


function Navigation(){
    return (
    <div ClassName="nav">
        <Link to="/">home</Link>
        <Link to="/about">Abount</Link>
    </div>
    );
}

export default Navigation;