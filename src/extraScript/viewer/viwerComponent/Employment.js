import React from 'react';
import './emp.css'

function CreateEmployment({onClick = f => f, index, position , employer , city , employment_start_date , employment_end_date , employment_description}){
    return(
        <div className="create-main" id={`employment${index}`} onClick={(e) => onClick(`employment${index}`)}>
        <div className="row">
            <div className="col-5">
            <h1 style={{ color:"black" , fontWeight:"bolder" , textAlign:"left" , fontSize:"17px"}}>{position}</h1>
            </div>
            <div className="col-6">
            </div>
        </div>
        <div className="row det">
            <div className="col-6">
                <label style={{color:"#264f6b" , fontSize:"13px"}}>{employer} , {city}</label>
            </div>
            <div className="col-6">
                <label style={{color:"#264f6b" , fontSize:"13px"}}>{employment_start_date} , {employment_end_date}</label>
            </div>
            <label style={{fontSize:"15px"}}>{employment_description}</label>
        </div>
        </div>
    );
}

export default function Employment({employment_number , onClick = f=> f}){
    return(
        <>
        <div className="row" style={{display:employment_number[0].position?"flex":"none"}}>
            <h1>Employment</h1>
            <hr></hr>
        </div>
        <div className="row" style={{display:employment_number[0].position?"flex":"none"}}>
            {employment_number.map((emp , i) => <CreateEmployment index={i} {...emp} onClick={onClick}/>)}
        </div><br></br>
        </>

    );
}