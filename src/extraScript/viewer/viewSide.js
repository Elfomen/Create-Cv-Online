import React from 'react';
import './viewer.css';
import LeftColumn from './leftCol';
import RightColumn from './rightcol';
import Nav from './viwerComponent/Nav';

export default function ViewSide({list}){
    return(
        <>
       
        <div className="row main-viewer">
            <LeftColumn list={list} />
            <RightColumn list={list}/>
        </div>
        </>
    );
}