import React from 'react';
import {FaStar , FaSquare} from 'react-icons/fa';


function SetFaStar({added}){
    return(
        <FaStar style={{color:added ? '#264f6b' : "grey" , fontSize:"10px"}}/>
    );
}

const createArray = (size) => [...Array(size)];

function CreateLanguage({hobby , hobby_level}){
    return(
        <>
            <div className="col-4">
                <h1 className="title-language">{hobby}</h1>
            </div>

            <div className="col-8">
                 {createArray(5).map((v , i) => <SetFaStar key={i} added={hobby_level > i}/>)}
            </div>

        </>
    );
}



export default function Hobbies({hobby , hobby_number}){
    return(
         <>
        <div className="row" style={{display:hobby?'flex' : 'none'}}>
            <div className="col-12 col-main">
                <h1 className="topic">Hobbies</h1><br></br>
                <hr style={{width:"90%" , margin:"auto"}}></hr>
            </div>
        </div>
        <div className="row" style={{display:hobby?'flex' : 'none'}}>
            {hobby_number.map((lan , i) => 
            <CreateLanguage key={i} hobby={lan.name} hobby_level ={lan.level}/>
            )}
        </div>
        </>
    );
}