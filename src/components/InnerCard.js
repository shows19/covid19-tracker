import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'

export const InnerCard = ({stats, classes}) => {

    const titleColor = () => {
        //console.log("Heading:",stats.heading);

        switch (stats.heading) {
            case "Confirmed":
                return "blue";
        
            case "Recovered":
                return "green";

            case "Deaths":
                return "red";

            default:
                return "black";
        }
    };

    const backgroundColor = () => {
        //console.log("Heading:",stats.heading);

        switch (stats.heading) {
            case "Confirmed":
                return "#8cbfff";
        
            case "Recovered":
                return "#8dfd8d";

            case "Deaths":
                return "#ffb8b8";

            default:
                return "#ffffff";
        }
    };

    const dateOptions = {   
        day: 'numeric',
        month: 'short', 
        year: 'numeric'
    };

    return (
            <Card raised className={classes.root}>
                <CardContent style={{backgroundColor :backgroundColor(), padding:"10px"}}>
                    {/* <Title>{stats.heading}</Title> */}
                    <Typography variant="h6" className={classes.title}>{stats.heading}</Typography>
                    <Typography component="p" variant="h4" className={classes.dataValue} 
                    style={{color:titleColor()}}>
                        <CountUp start={0} end={(stats.value !== undefined)?stats.value:0} duration={2.5} separator="," />
                    </Typography>
                    {(stats.Date !== '' && stats.Date !== undefined) && <Typography color="textSecondary" variant="h6" className={classes.dateVal}>
                        {new Date(stats.Date).toLocaleDateString('en-GB', dateOptions)}</Typography>}
                </CardContent>
            </Card>
    )

}
