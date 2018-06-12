import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Line, Flex } from 'components/Common'
import FirstRoundHouse from 'components/FirstRoundHouse';
import { getHouseStage } from '../dataProvider'

class HouseStage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Flex margin="20px" direction="column" alignItems="center">
      <Header color="black" margin="20px" type="h1">
        First Stage
      </Header>
      <Line color='rgb(151,151,151)'/>
      <Flex flexWarp="wrap" justifyContent="center">
      {
        getHouseStage().houses.map((house) => (<FirstRoundHouse house={house}/>))
      }
      </Flex>
    </Flex>
    )
  }
}

export default HouseStage;
