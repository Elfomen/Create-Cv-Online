import React from 'react';
import './education.css';


function CreateEducation({index,education , school , city , educational_start_date ,educational_end_date, educational_description , onClick=f=>f}){
    return(
        <div className="create-main-education" id={`education${index}`} onClick={(e) => onClick(`education${index}`)}>
            
           
            <div className="row" style={{display:education?'flex':'none' , textAlign:"left"}}>
                <h1 className="education_name" style={{fontWeight:"bold" , textAlign:"left" , fontSize:"17px"}}>{education}</h1>
                <div className="col-6">
                    <label className="educational_dates" style={{padding:0 , margin:0, fontSize:"13px"}}>{school} , {city}</label>
                </div>
                <div className="col-6">
                    <label style={{fontSize:"13px"}} className="educational_dates">{educational_start_date} , {educational_end_date}</label>
                </div>
                <p>{educational_description}</p>
            </div>
            
        </div>
    );
}



export default function Education({educational_number , onClick=f=>f}){
    return(
        <div>
            <div className="row" style={{display:educational_number[0].education?'flex':'none'}}>
                <h1>Education</h1>
                <hr></hr>
            </div>
            {educational_number.map((ed , i) => <CreateEducation onClick={onClick} index={i} key={i} {...ed}/>)}  
        </div>
    );
}