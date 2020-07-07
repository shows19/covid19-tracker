import React from 'react'
import { makeStyles } from '@material-ui/core'
import { InnerCard } from './InnerCard';

const useStyles = makeStyles({
    root: {
      minWidth: 150,
      maxWidth: 250,
      textAlign: "center",
      margin: "auto",
    },
    dataValue: {
        fontSize: '1.5rem',
        '@media (min-width:830px)': {
            fontSize: '2.2rem',
        },
    },    
    dateVal: {
        fontSize: '1rem',
        '@media (min-width:830px)': {
            fontSize: '1.25rem',
        },
    },    
    title: {

    },
});

export const StatusCard = ({stats}) => {
    const classes = useStyles();

    return(
        <InnerCard stats={stats} classes={classes}/>
    );

}
