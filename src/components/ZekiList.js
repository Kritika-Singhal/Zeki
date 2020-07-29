import React from "react";
import './ZekiList.css';
import ZekiCard from './ZekiCard';

const List = ({title,cards}) => {
    return (
        <div className="container">
            <h4>{title}</h4>
            {cards.map(card => (
                <ZekiCard text={card.text} />
            ))}
        </div>
        
    )
}

export default List;