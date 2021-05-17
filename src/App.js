import React from 'react';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from './Routes'

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

export default App;
