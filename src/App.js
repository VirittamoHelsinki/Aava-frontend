import React from 'react';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from './Routes'
import {Button} from './components/Button'

export default
  function App() {
    return (
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <Routes 
          // tarvittavat propsit tähän
        />
      </ThemeProvider>   
    );
  } 

