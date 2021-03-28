import React from 'react';
import Accordeon from './accordeon';
import data from '../data/promptData.json';

export default function PromtMainSide({onChange = f => f , ocp=g=>g , oca=a=>a}){

    return(
        data.map((dat , i) => (
            <Accordeon key={i} {...dat} onChange={onChange}  ocp={ocp}  oca={oca}/>
        ))
        
    );
}