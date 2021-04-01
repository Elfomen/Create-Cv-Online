import React from 'react';
import './viewer.css';
import LeftColumn from './leftCol';
import RightColumn from './rightcol';

export default function ViewSide({list , onClick = f=>f}){
    return(
        <div className="row main-viewer" id="content">
            <LeftColumn list={list} onClick={onClick}/>
            <RightColumn list={list} onClick={onClick}/>
        </div>
    );
}