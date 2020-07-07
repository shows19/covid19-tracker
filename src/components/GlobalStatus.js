import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Cards } from './Cards'

const useStyles = makeStyles((theme) => ({
    globalHeading: {
        textAlign: "center",
        paddingBottom: theme.spacing(3),
    },
  }));

export const GlobalStatus = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Typography variant="h6" className={classes.globalHeading} color="primary" >
                    Global Status
                </Typography>
            </div>
            <Cards />
        </div>
    )
}
