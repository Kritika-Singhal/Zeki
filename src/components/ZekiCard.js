import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ZekiCard.css';

const ZekiCard = ({text}) =>{
    return (
        <Card className="cardContainer">
            <CardContent >
                <Typography className="title" gutterBottom>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ZekiCard;