import React from 'react';
import './profile.css';

export default function Profile({profile_describtion}){
    return(
    <>
        <div className="row" style={{display:profile_describtion?'flex' : 'none'}}>
            <h1 id="topic" style={{color:"#264f6b" , float:"left" , marginTop:"20px"}}>Profile</h1>
            <hr></hr>
        </div>
        <div className="row description">
            <p>{profile_describtion}</p>
        </div>
    </>
    );
}