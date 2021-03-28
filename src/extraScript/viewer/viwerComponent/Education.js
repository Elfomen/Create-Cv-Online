import React from 'react';
import './education.css';


function CreateEducation({education , school , city , educational_start_date ,educational_end_date, educational_description}){
    return(
        <div>
            
            <div className="row">
                <h1 className="education_name" style={{fontWeight:"bold"}}>{education}</h1>
                <div className="col-6">
                    <label className="educational_dates" style={{padding:0 , margin:0}}>{school} , {city}</label>
                </div>
                <div className="col-6">
                    <label className="educational_dates">{educational_start_date} , {educational_end_date}</label>
                </div>
                <p>{educational_description}</p>
            </div>
            
        </div>
    );
}



export default function Education({educational_number}){
    return(
        <div>
            <div className="row">
                <h1>Education</h1>
                <hr></hr>
            </div>
            {educational_number.map((ed , i) => <CreateEducation key={i} {...ed}/>)}  
        </div>
    );
}