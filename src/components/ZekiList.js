import React from "react";
import './ZekiList.css';
import ZekiCard from './ZekiCard';
import ActionButton from './ActionButton';

const ZekiList = ({title,cards}) => {
    return (
        <div className="container">
            <h4>{title}</h4>
            {cards.map(card => (
                <ZekiCard key={card.id} text={card.text} />
            ))}
            <ActionButton/>
        </div>
        
    )
}

export default ZekiList;