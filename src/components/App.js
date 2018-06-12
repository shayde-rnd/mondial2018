import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TopBar from 'components/TopBar';
import HouseStage from 'components/HouseStage'
import './App.css'
import * as theme from 'components/theme'

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: stretch;
height: 100%;
width: 100%;
`;

const App = () => (
  <ThemeProvider theme={ theme }>
    <Layout>
      <TopBar/>
      <HouseStage/>
    </Layout>
  </ThemeProvider>
);

export default App;
