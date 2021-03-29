import React from 'react';
import PersonalDetails from './viwerComponent/personalDetails';
import Language from './viwerComponent/Language';
import Hobbies from './viwerComponent/Hobby';
import './vLeft.css';
import SetImage from './image';

export default function LeftColumn({list}){
    return(
        <aside className="left" style={{width:"30%"}}>
           <aside className="row1">
               <h1 style={{color:"white"}}>{`${list[0].first_name?list[0].first_name : 'Curriculum Vitae'}`}</h1>
               <SetImage />
              
           </aside>
           
           <aside className="row2">
                 <PersonalDetails {...list[0]}/>
                 <Language {...list[5]}/>
                 <Hobbies {...list[6]}/>
           </aside>
           <aside className="row3"></aside>
        </aside>
    );
}