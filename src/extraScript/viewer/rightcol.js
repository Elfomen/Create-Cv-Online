import React from 'react';
import './vRight.css';
import Employment from './viwerComponent/Employment';
import Skill from './viwerComponent/Skill';
import Profile from './viwerComponent/Profile';
import Education from './viwerComponent/Education';


export default function RightColumn({list , onClick = f=> f}){
    return(
        <aside className="right" style={{width:"70%"}}>
            <Profile {...list[1]}/>
            <Education onClick={onClick} {...list[2]}/>
            <Employment {...list[3]} onClick={onClick}/>
            <Skill {...list[4]} onClick={onClick}/>
        </aside>
    );
}