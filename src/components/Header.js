import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        flexGrow: 1,
        textAlign: "center",
        fontSize: '0.8rem', // for widths less than 470px
        '@media (min-width:470px)': {
            fontSize: '0.8rem',
        },
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        '@media (min-width:800px)': {
            fontSize: '1.5rem',
        },
    },
      appBar: {
    
      },
      apiRef: {
        textAlign: "right",
        fontSize: '0.6rem',
        '@media (min-width:600px)': {
            fontSize: '0.8rem',
        },
    },
  }));
  
export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
          <Toolbar>
                 <Typography variant="h6" className={classes.heading}>
                    Covid-19 App Tracker - By Shoaib S. Lucky
                </Typography>
                <Typography variant="subtitle2" className={classes.apiRef}>
                    <span className="apiRef">API reference (https://api.covid19api.com/)</span>
                </Typography>
          </Toolbar>
        </AppBar>
    )
}
