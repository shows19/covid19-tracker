import React, { useContext, useState, useEffect } from 'react'
import { Grid, Typography, makeStyles, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { GlobalContext } from '../context/GlobalContext';
import { StatusCardCountry } from './StatusCardCountry';
import { LineChart } from './LineChart';

const useStyles = makeStyles((theme) => ({
    globalHeading: {
        textAlign: "center",
        paddingBottom: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 75,
        width: "100%",
    },
  }));

export const CovidChart = () => {
    const classes = useStyles();
    const {countries} = useContext(GlobalContext);
    const [country, setCountry] = useState('');

    const initialData = {
        TotalConfirmed: 0,
        TotalRecovered: 0,
        TotalDeaths: 0,
        Date: '',
    }
    const [countryData, setCountryData] = useState(initialData);

    const initialStats = [
        {
          heading:"Confirmed",
          value: 0,
          Date: ''
        },
        {
          heading:"Recovered",
          value: 0,
          Date: ''
        },
        {
          heading:"Deaths",
          value: 0,
          Date: ''
        }
      ]; 
    const [selectedStats, setSelectedStats] = useState(initialStats);

    const handleChange = (e) => {
        setCountry(e.target.value);
        //console.log("Country: ", e.target.value);
    };

    useEffect(()=>{
        //console.log("Country data ALL: ",countries);
        const a = countries.filter((item)=>(
            item.Country === country
        ));
        setCountryData(a[0]);
        //console.log("Country data: ",a);
        
    },[country]);

    useEffect(()=>{
        setSelectedStats( [
            {
              heading:"Confirmed",
              value: countryData.TotalConfirmed,
              Date: countryData.Date
            },
            {
              heading:"Recovered",
              value: countryData.TotalRecovered,
              Date: countryData.Date
            },
            {
              heading:"Deaths",
              value: countryData.TotalDeaths,
              Date: countryData.Date
            }
          ]);        
          //console.log("check: ", countryData);
          //console.log("check: ", selectedStats);
          
    },[countryData]);

    let i=0;

    return (
        <div>
            <Typography variant="h6" className={classes.globalHeading} color="primary" >
                Country wise data
            </Typography>
            <Paper>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={3} sm={2}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="country-label">Country</InputLabel>
                            <Select labelId="country-label" id="country" onChange={handleChange}
                             value ={country}>
                                <MenuItem value=''>-- Please select country --</MenuItem>
                                {countries.map((item) => (
                                    <MenuItem value={item.Country} key={item.CountryCode}>{item.Country}</MenuItem> 
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={9} sm={10}>
                        <Grid container spacing={1} justify="center">
                            {selectedStats.map((item) => (
                                <Grid item xs={4}>
                                    <StatusCardCountry key={++i} stats = {item}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                        <LineChart country={country} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
