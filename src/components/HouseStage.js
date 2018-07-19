import React, { Component } from 'react';
import FirstRoundHouse from 'components/FirstRoundHouse';
import { getHouseStage } from '../dataProvider'
import {FlexRows, FlexColumns, Line} from 'components/CommonComponents';
import {Label} from 'components/StyledElements';

class HouseStage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <FlexRows margin="20px" alignItems="center">
      <Label margin="20px" type="l1">
        First Stage
      </Label>
      <Line type="secondaryLine" width="80%"/>
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
