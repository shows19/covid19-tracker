import React from 'react';
import './App.css';
import { CovidChart } from './components/CovidChart';
import { Grid, Container, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { GlobalStatus } from './components/GlobalStatus';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalContext';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },

  }));

function App() {
    const classes = useStyles();

    return (
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                <Header />
                <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <GlobalStatus />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <CovidChart />
                    </Grid>
                    </Grid>
                </Container>
                </main>
            </div>
        
        </ThemeProvider>
    </GlobalProvider>
   )
}

export default App;
