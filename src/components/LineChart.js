import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { covidApi } from '../api/covidApi';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    '@keyframes blinker': {
        from: {opacity: 1},
        to: {opacity: 0}
    },
    loadingText: {
        textAlign: "center",
        color: "green",
        display: "block",
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',    },
    errorText: {
        textAlign: "center",
        color: "red",
        display: "block",
    },
  }));

export const LineChart = ( {country} ) => {
    const classes = useStyles();

    const childUrl = `country\\${country}`;

    const initialData = [{
        Confirmed: 0,
        Deaths: 0,
        Recovered: 0,
        Date: '2020-01-22T00:00:00Z'
    }];
    const [dailyData, setDailyData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchDailyData = async() => {
            if (country !== ''){
                setLoading(true);
                const response = await covidApi({ childUrl });
                //console.log("Reponse: ", response);
                if (response !== '')
                    setDailyData(response);
                else
                    setError(true);

                setLoading(false);
            }
        };

        fetchDailyData();
    },[country]);

    const dateOptions = {   
        day: 'numeric',
        month: 'short', 
        year: 'numeric'
    };

    const dailyStats = {
        labels: dailyData.map((item) => (new Date(item.Date).toLocaleDateString('en-GB', dateOptions))),
        //['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: dailyData.map((item) => (item.Confirmed)),
            label: 'Confirmed Cases',
            fill: false,
            borderColor: 'blue',
            borderDash: [],
            pointRadius: 1,
            pointBackgroundColor: '#fff',
          },
          {
            data: dailyData.map((item) => (item.Recovered)),
            label: 'Recovered',
            fill: false,
            borderColor: 'green',
            borderDash: [],
            pointRadius: 1,
            pointBackgroundColor: '#fff',
           
          },
          {
            data: dailyData.map((item) => (item.Deaths)),
            label: 'Deaths',
            fill: false,
            borderColor: 'red',
            borderDash: [],
            pointRadius: 1,
            pointBackgroundColor: '#fff',
          }
        ]
      }

    const chartTitle = 'Daily Covid-19 Stats for ' + country;
    //['Daily Covid-19 Stats for ', country].join('');
    
    return (
        <div style={{height: '370px'}}>
            <div>
                {loading && <h4><span className={classes.loadingText}>Fetching data from API...</span></h4>}
            </div>
            <div>
                {error && <h4><span className={classes.errorText}>Error fetching data from API, please try again later</span></h4>}
            </div>
            {!loading && !error && <Line
                data={dailyStats}
                options={{
                    title:{
                    display:true,
                    text: chartTitle,
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'bottom'
                    },
                    maintainAspectRatio:false,
                }}
            />}
        </div>
    )
}
