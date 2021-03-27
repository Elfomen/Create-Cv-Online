import React , {useState} from 'react';
import './perso.css';
import { FaSitemap,FaUser , FaLinkedin , FaGithub , FaEnvelope , FaPhone , FaHome, FaCalendar , FaCar} from 'react-icons/fa';


export default function PersonalDetails({lin , git , port_folio ,email_adress, phone_number , adress , birth_date ,drivers_licence,zip_code,city,  first_name}){
    
    return(
        <>
        <br></br><br></br><br></br>
        <div className="row" style={{visibility:first_name?"visible":"collapse"}}>
            <div className="col-12">
            <p>Personal Details</p>
            <hr style={{width:"90%" , margin:"0 auto"}}></hr>
            </div>
        </div>
        <div className="row" style={{visibility:first_name?"visible":"collapse"}}>
            <div className="col-1"><FaUser/></div>
            <div className="col-10"><label>{first_name}</label></div>
        </div>
         <div className="row" style={{visibility:email_adress?"visible":"collapse"}}>
            <div className="col-1"><FaEnvelope/></div>
            <div className="col-10"><label>{email_adress}</label></div>
        </div>
        <div className="row">
            <div className="col-1" style={{visibility:phone_number?"visible":"collapse"}}><FaPhone/></div>
            <div className="col-10"><label>{phone_number}</label></div>
        </div> <div className="row"></div>
         <div className="row">
            <div className="col-1" style={{visibility:adress?"visible":"collapse"}}><FaHome/></div>
            <div className="col-10"><label>{adress} - {city} , {zip_code}</label></div>
        </div> <div className="row">
            <div className="col-1" style={{visibility:birth_date?"visible":"collapse"}}><FaCalendar/></div>
            <div className="col-10"><label>{birth_date}</label></div>
        </div> <div className="row">
            <div className="col-1" style={{visibility:drivers_licence?"visible":"collapse"}}><FaCar/></div>
            <div className="col-10"><label>{drivers_licence}</label></div>
        </div> <div className="row">
            <div className="col-1" style={{visibility:lin?"visible":"collapse"}}><FaLinkedin/></div>
            <div className="col-10"><label>{lin}</label></div>
        </div> <div className="row">
            <div className="col-1" style={{visibility:git?"visible":"collapse"}}><FaGithub/></div>
            <div className="col-10"><label>{git}</label></div>
        </div>
        <div className="row">
            <div className="col-1" style={{visibility:port_folio?"visible":"collapse"}}><FaSitemap/></div>
            <div className="col-10"><label>{port_folio}</label></div>
        </div>
        
        
        </>
    );
}