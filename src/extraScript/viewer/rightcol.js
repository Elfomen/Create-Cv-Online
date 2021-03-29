import React from 'react';
import './vRight.css';
import Employment from './viwerComponent/Employment';
import Skill from './viwerComponent/Skill';
import Profile from './viwerComponent/Profile';
import Education from './viwerComponent/Education';


export default function RightColumn({list}){
    return(
        <aside className="right" style={{width:"70%"}}>
            <Profile {...list[1]}/>
            <Education {...list[2]}/>
            <Employment {...list[3]}/>
            <Skill {...list[4]}/>
        </aside>
    );
}