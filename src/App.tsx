import React from 'react';
import Header from './component/Header';
import ContainerComp from './component/ContainerComp';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContainerComp />
    </ThemeProvider>
  );
}

export default App;
