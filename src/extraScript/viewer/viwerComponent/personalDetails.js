import React , {useState} from 'react';
import './perso.css';
import { FaSitemap,FaUser , FaLinkedin , FaGithub , FaEnvelope , FaPhone , FaHome, FaCalendar , FaCar} from 'react-icons/fa';


export default function PersonalDetails({lin , git , port_folio ,email_adress, phone_number , adress , birth_date ,drivers_licence,zip_code,city,  first_name , last_name}){
    
    return(
        <>
        <br></br><br></br><br></br>
        <div className="row" style={{display:first_name?"flex":"none"}}>
            <div className="col-12">
            <p>Personal Details</p>
            <hr style={{width:"90%" , margin:"0 auto"}}></hr>
            </div>
        </div>
        <div className="row" style={{display:first_name?"flex":"none"}}>
            <div className="col-1"><FaUser style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{first_name} - {last_name}</label></div>
        </div>
         <div className="row" style={{display:email_adress?"flex":"none"}}>
            <div className="col-1"><FaEnvelope style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{email_adress}</label></div>
        </div>
        <div className="row" style={{display:phone_number?"flex":"none"}}>
            <div className="col-1"><FaPhone style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{phone_number}</label></div>
        </div> <div className="row"></div>
         <div className="row" style={{display:adress?"flex":"none"}}>
            <div className="col-1"><FaHome style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{adress} - {city} , {zip_code}</label></div>
        </div> <div className="row" style={{display:birth_date?"flex":"none"}}>
            <div className="col-1"><FaCalendar style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{birth_date}</label></div>
        </div> <div className="row" style={{display:drivers_licence?"flex":"none"}}>
            <div className="col-1"><FaCar style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{drivers_licence}</label></div>
        </div> <div className="row" style={{display:lin?"flex":"none"}}>
            <div className="col-1"><FaLinkedin style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{lin}</label></div>
        </div> <div className="row" style={{display:git?"flex":"none"}}>
            <div className="col-1"><FaGithub style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{git}</label></div>
        </div>
        <div className="row" style={{display:port_folio?"flex":"none"}}>
            <div className="col-1"><FaSitemap style={{color:"#264f6b"}}/></div>
            <div className="col-10"><label style={{fontSize:"13px"}}>{port_folio}</label></div><br></br><br></br>
        </div>
        
        
        </>
    );
}