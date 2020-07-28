import React from "react";
import './List.css';
import ZekiCard from './ZekiCard';

const List = ({title}) => {
    return (
        <div className="container">
            <h4>{title}</h4>
            <ZekiCard/>
        </div>
        
    )
}

export default List;