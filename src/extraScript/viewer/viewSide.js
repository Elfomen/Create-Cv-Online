import React from 'react';
import './viewer.css';
import LeftColumn from './leftCol';
import RightColumn from './rightcol';

export default function ViewSide(){
    return(
        <div className="row main-viewer">
            <LeftColumn />
            <RightColumn />
        </div>
    );
}