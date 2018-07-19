import React, { Component } from 'react';
import { Header, Line } from 'components/Common'
import FirstRoundHouse from 'components/FirstRoundHouse';
import { getHouseStage } from '../dataProvider'
import {FlexRows, FlexColumns} from 'components/CommonComponents';

class HouseStage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <FlexRows margin="20px" direction="column" alignItems="center">
      <Header color="black" margin="20px" type="h1">
        First Stage
      </Header>
      <Line color='rgb(151,151,151)'/>
      <FlexColumns flexWrap="wrap" justifyContent="center">
      {
        getHouseStage().houses.map((house) => (<FirstRoundHouse key={house.name} house={house}/>))
      }
      </FlexColumns>
    </FlexRows>
    )
  }
}

export default HouseStage;
