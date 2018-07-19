import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { filter } from 'lodash/fp';
import Team from 'components/Team';
import ChooseTeam from 'components/ChooseTeam';
import {FlexRows, FlexColumns, Line} from 'components/CommonComponents';
import {Label} from 'components/StyledElements';

export const HouseContainer = styled(FlexRows)`
border: 1px solid lightgray;
box-shadow: 3px 3px 3px 3px ${({theme}) => theme.primaryColorHover};
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
      choosen = filter((_name) => _name !== name, this.state.choosen)
    } else {
      choosen = [...this.state.choosen, name];
    }
    
    this.setState({
      choosen
    })
  }

  render() {
    return (
      <HouseContainer alignItems="center" margin="20px" padding="20px">
        <Label type="h2" margin="10px">{this.props.house.name}</Label>
        <Line type="primaryLine" width="80%"/>
        <ChooseTeam senteces={["Choose first", "Choose second", "choosen"]} sentenceIdx={this.state.choosen.length}/>
        <FlexColumns>
          {
            this.props.house.teams.map((team) => <Team disabled={this.state.choosen.length >= 2} 
                                                       team={team} handleChoosenUpdate={ this.handleChoosenUpdate }
                                                       key={team.name}/>)
          }
        </FlexColumns>
      </HouseContainer>
    )
  }
}

FirstRoundHouse.propTypes = {
  house: PropTypes.object.isRequired
};

export default FirstRoundHouse;
