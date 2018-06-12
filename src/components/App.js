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
      themes: [theme1, theme2],
      selectedTheme: 0
    }
  }

  render() {

    return (
      <ThemeProvider theme={ this.state.themes[this.state.selectedTheme] }>
        <Layout>
          <TopBar updateThemeCB={() => { this.setState({selectedTheme: (this.state.selectedTheme + 1)%this.state.themes.length})}}/>
          <HouseStage/>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App;

