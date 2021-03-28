import React from 'react';
import './vRight.css';

import Profile from './viwerComponent/Profile';
import Education from './viwerComponent/Education';


export default function RightColumn({list}){
    return(
        <aside className="col-8 right">
            <Profile {...list[1]}/>
            <Education {...list[2]}/>
        </aside>
    );
}