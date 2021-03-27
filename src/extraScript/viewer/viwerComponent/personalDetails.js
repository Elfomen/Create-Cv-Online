import React , {useState} from 'react';
import './perso.css';
import {FaUser , FaLinkedin , FaYoutube} from 'react-icons/fa';


export default function PersonalDetails({email, text , color}){
    
    return(
        <>
        <br></br><br></br><br></br><div className="row">
            <p>Personal Details</p>
            <hr style={{width:"90%" , margin:"0 auto"}}></hr>
            <div className="col-1"><FaUser/></div>
            <div className="col-10"><label>Yannick Fomena Wouati</label></div>
        </div>
        
        </>
    );
}