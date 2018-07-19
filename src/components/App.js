import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {FlexRows} from 'components/CommonComponents';
import TopBar from 'components/TopBar';
import HouseStage from 'components/HouseStage'
import './App.css'
import * as theme1 from 'components/theme1'
import * as theme2 from 'components/theme2'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      themes: [theme1, theme2],
      selectedThemeIdx: 0
    }
  }

  render() {

    const themeCnt = this.state.themes.length;

    return (
      <ThemeProvider theme={ this.state.themes[this.state.selectedThemeIdx] }>
        <FlexRows>
          <TopBar updateThemeCB={() => { this.setState({selectedThemeIdx: (this.state.selectedThemeIdx + 1)%themeCnt})}}/>
          <HouseStage/>
        </FlexRows>
      </ThemeProvider>
    )
  }
}

export default App;

