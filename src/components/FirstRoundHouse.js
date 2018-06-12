import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { flow, filter } from 'lodash/fp';
import Team from 'components/Team';
import ChooseTeam from 'components/ChooseTeam';
import { Flex, Header, Line } from 'components/Common';

export const HouseContainer = styled(Flex)`
border: 1px solid lightgray;
`

class FirstRoundHouse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choosen: []
    }
  }

  handleChoosenUpdate = (name, isChoosen) => {
    let choosen = null;
    if(!isChoosen){
      choosen = filter((_name) => _name === name, this.state.choosen)
    } else {
      choosen = [...this.state.choosen, name];
    }
    
    this.setState({
      choosen
    })
  }

  render() {
    return (
      <HouseContainer direction="column" alignItems="center" margin="20px" padding="20px">
        <Header type="h2" margin="10px">{this.props.house.name}</Header>
        <Line color="#00a9d5"/>
        <ChooseTeam senteces={["Choose first", "Choose second", "choosen"]} sentenceIdx={this.state.choosen.length}/>
        <Flex>
          {
            this.props.house.teams.map((team) => <Team disabled={this.state.choosen.length >= 2} team={team} handleChoosenUpdate={ this.handleChoosenUpdate }/>)
          }
        </Flex>
      </HouseContainer>
    )
  }
}

FirstRoundHouse.propTypes = {
  house: PropTypes.object.isRequired,
  selectionCB: PropTypes.func.isRequired
};

export default FirstRoundHouse;
