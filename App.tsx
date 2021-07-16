import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import GlobalStyle from './src/global/styles/themes';
import  SignIn  from './src/screens/SignIn';

export default function App(){
  return (
    <ThemeProvider theme={GlobalStyle}>
     <SignIn />
    </ThemeProvider>

  );
}