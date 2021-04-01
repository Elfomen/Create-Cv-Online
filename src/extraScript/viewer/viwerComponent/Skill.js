import React from 'react';
import {FaStar} from 'react-icons/fa';
import './skill.css';


function SetFaStar({added}){
    return(
        <FaStar style={{color:added ? '#264f6b' : "grey" , fontSize:"10px"}}/>
    );
}

const createArray = (size) => [...Array(size)];

function CreateSkill({index , onClick=f=>f ,skill , skill_level}){
    return(
        <div className="row skill-container" onClick={e => onClick(`skill${index}`)}>
            <div className="col-4">
                <h1 style={{marginTop:"2px" , fontSize:"14px" , textAlign:"left"}} className="title-skill">{skill}</h1>
            </div>

            <div className="col-6">
                 {createArray(5).map((v , i) => <SetFaStar key={i} added={skill_level > i}/>)}
            </div>

        </div>
    );
}

export default function Skill({skill_number , onClick=f=>f}){
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
            <CreateSkill key={i} index={i} {...lan} onClick={onClick}/>
            )}
        </div>
        </>
    );
}
