import React from 'react';
import {FaStar} from 'react-icons/fa';


function SetFaStar({added}){
    return(
        <FaStar style={{color:added ? '#264f6b' : "grey" , fontSize:"10px"}}/>
    );
}

const createArray = (size) => [...Array(size)];

function CreateSkill({skill , skill_level}){
    return(
        <>
            <div className="col-4">
                <h1 style={{marginTop:"4px" , fontSize:"23px"}} className="title-skill">{skill}</h1>
            </div>

            <div className="col-6">
                 {createArray(5).map((v , i) => <SetFaStar key={i} added={skill_level > i}/>)}
            </div>

        </>
    );
}

export default function Skill({skill_number}){
    return(
        <>
        <div className="row" style={{display:skill_number[0].skill?'flex' : 'none'}}>
            <div className="col-12 col-main">
                <h1 className="topic">Skills</h1><br></br>
                <hr style={{width:"90%" , margin:"auto"}}></hr>
            </div>
        </div>
        <div className="row" style={{display:skill_number[0].skill?'flex' : 'none'}}>
            {skill_number.map((lan , i) => 
            <CreateSkill key={i} {...lan}/>
            )}
        </div>
        </>
    );
}
