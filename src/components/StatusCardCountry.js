import React from 'react'
import { makeStyles } from '@material-ui/core'
import { InnerCard } from './InnerCard';

const useStyles = makeStyles({
    root: {
      minWidth: 70,
      maxWidth: 170,
      textAlign: "center",
      margin: "auto",
    },
    dataValue: {
        fontSize: '0.9rem',
        '@media (min-width:830px)': {
            fontSize: '1.7rem',
        },
    },    
    dateVal: {
        fontSize: '0.6rem',
        '@media (min-width:830px)': {
            fontSize: '0.85rem',
        },
    },    
    title: {
        fontSize: '0.7rem',
        '@media (min-width:830px)': {
            fontSize: '1rem',
        },
    },
});

export const StatusCardCountry = ({stats}) => {
    const classes = useStyles();
    //console.log("Country stats: ",stats);
    
    return(
        <InnerCard stats={stats} classes={classes}/>
    );

}
