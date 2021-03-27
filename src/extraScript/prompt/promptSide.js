import React from 'react';
import Accordeon from './accordeon';
import data from '../data/promptData.json';

export default function PromtMainSide({onChange = f => f}){
    
    console.log(data);
    return(
        data.map((dat , i) => (
            <Accordeon key={i} {...dat} onChange={onChange}/>
        ))
        
    );
}