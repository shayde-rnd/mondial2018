import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TopBar from 'components/TopBar';
import HouseStage from 'components/HouseStage'
import './App.css'
import * as theme1 from 'components/theme1'
import * as theme2 from 'components/theme2'

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: stretch;
height: 100%;
width: 100%;
`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      theme: 1
    }
  }

  render() {
    const theme = this.state.theme === 1 ? theme1 : theme2

    return (
      <ThemeProvider theme={ theme }>
        <Layout>
          <TopBar updateThemeCB={() => { this.setState({theme: this.state.theme === 1 ? 2 : 1})}}/>
          <HouseStage/>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App;

