import React from 'react';
import './Navbar.css';

//setting up the page to change colors based on the correct/incorrect answers
const Navbar = props => (
    <div> 
        <ul className = "nav nav-pills nav-justified">
            <li><a href="/"> Remember The Dog </a> </li>
                <li className = {props.message.indexOf('incorrectly') !== -1 ? "desc-incorrect" : props.message.indexOf('correctly') !== -1 ? "desc correct" : "desc-normal"} >

                {props.message}
            </li>

            <li> Score: <span style={{color: "orange"}}>
                        {props.currentScore}</span> | Top Score: {props.topScore}
            </li>
        </ul>
    </div>


);

export default Navbar