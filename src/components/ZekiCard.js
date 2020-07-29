import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ZekiCard.css';

const ZekiCard = () =>{
    return (
        <Card className="root">
            <CardContent>
                <Typography className="title">
                    Word of the Day
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ZekiCard;