import React from 'react';
import PersonalDetails from './viwerComponent/personalDetails';
import './vLeft.css';
import SetImage from './image';

export default function LeftColumn({list}){
    return(
        <aside className="col-4 left">
           <aside className="row1">
               <h1>{`${list[0].first_name?list[0].first_name : 'Curriculum Vitae'}`}</h1>
               <SetImage />
              
           </aside>
           
           <aside className="row2">
                 <PersonalDetails {...list[0]}/>
           </aside>
           <aside className="row3"></aside>
        </aside>
    );
}