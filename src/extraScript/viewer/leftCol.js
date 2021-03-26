import React from 'react';
import './vLeft.css';
import SetImage from './image';

export default function LeftColumn(){
    return(
        <aside className="col-4 left">
           <aside className="row1">
               <h1>Curriculum Vitae</h1>
               <SetImage />
           </aside>
           <aside className="row2"></aside>
           <aside className="row3"></aside>
        </aside>
    );
}