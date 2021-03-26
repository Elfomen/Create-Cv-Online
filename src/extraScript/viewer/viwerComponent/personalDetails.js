import React from 'react';
import './perso.css';


export default function PersonalDetails({email, text , color}){
    return(
        <div className="row">
            <p>Personal info from the yann</p>
            <hr style={{width:"70%" , margin:"0 auto"}}></hr><br></br>
            <div className="col-4"><p>Name : </p></div>
            <div className="col-4"><p>Yannick</p></div>
        </div>
    );
}