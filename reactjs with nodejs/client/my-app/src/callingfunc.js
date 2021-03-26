import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function callingfunc(){
    return(
        <ul className='front'>
        <li><button><Link to='/insertform'>Input datas</Link></button></li>
        <li><button><a href='http://localhost:3001/get'>User datas</a></button></li>
        </ul>
    );
}

export default callingfunc;