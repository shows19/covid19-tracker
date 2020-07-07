import React, { useState, useEffect, useContext } from 'react'
import { globalData } from '../api/globalData';
import { Grid } from '@material-ui/core';
import { StatusCard } from './StatusCard';
import { GlobalContext } from '../context/GlobalContext';

export const Cards = () => {
    const {setCountries} = useContext(GlobalContext);

    const initialData = {
        TotalConfirmed: 0,
        TotalRecovered: 0,
        TotalDeaths: 0,
        Date: '',
        Countries: [{Country:'', CountryCode:''}],
        Error: false,
    }
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const getData = async () => {
            setData( await globalData());
        };
        getData();
    },[]);
    
    const onChangeData = () =>{
        setCountries(data.Countries);
        //console.log("Countries: ", data.Countries);
    };

    useEffect(onChangeData,[data]);

    const selectedStats = [
        {
          heading:"Confirmed",
          value: data.TotalConfirmed,
          Date: data.Date
        },
        {
          heading:"Recovered",
          value: data.TotalRecovered,
          Date: data.Date
        },
        {
          heading:"Deaths",
          value: data.TotalDeaths,
          Date: data.Date
        }
      ];    
    
      let i=0;
    return (
        <div>
            <Grid container spacing={2} justify="center">
                {selectedStats.map((item) => (
                    <Grid item xs={12}>
                        <StatusCard key={++i} stats = {item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
