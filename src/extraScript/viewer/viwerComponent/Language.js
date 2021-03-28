import React from 'react';
import './lan.css';
import {FaSquare , FaStar} from 'react-icons/fa';



function SetFaStar({added}){
    return(
        <FaStar style={{color:added ? '#264f6b' : "grey" , fontSize:"10px"}}/>
    );
}

const createArray = (size) => [...Array(size)];

function CreateLanguage({language , language_level}){
    return(
        <>
            <div className="col-4">
                <h1 className="title-language">{language}</h1>
            </div>

            <div className="col-8">
                 {createArray(5).map((v , i) => <SetFaStar key={i} added={language_level > i}/>)}
            </div>

        </>
    );
}

export default function Language({language , language_level , language_number}){
    return(
        <>
        <div className="row" style={{display:language?'flex' : 'none'}}>
            <div className="col-12 col-main">
                <h1 className="topic">Languages</h1><br></br>
                <hr style={{width:"90%" , margin:"auto"}}></hr>
            </div>
        </div>
        <div className="row" style={{display:language?'flex' : 'none'}}>
            {language_number.map((lan , i) => 
            <CreateLanguage key={i} language={language_number[i].name} language_level={language_number[i].level}/>
            )}
        </div>
        </>
    );
}

