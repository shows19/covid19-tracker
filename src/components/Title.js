import React from 'react'
import { Typography } from '@material-ui/core'

export const Title = ({ children, color }) => {
    //console.log("Color: ", color);

    return (
        <>
            <Typography component="h2" variant="h6" style={{color:color}} gutterBottom>
                {children}
            </Typography>
        </>
    )
}
