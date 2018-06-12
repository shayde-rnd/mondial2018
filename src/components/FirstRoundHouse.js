import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Team from 'components/Team';
import ChooseTeam from 'components/ChooseTeam';
import { Flex, Header, Line } from 'components/Common';

export const HouseContainer = styled(Flex)`
border: 1px solid lightgray;
`

class FirstRoundHouse extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HouseContainer direction="column" alignItems="center" margin="20px" padding="20px">
        <Header type="h2" margin="10px">{this.props.house.name}</Header>
        <Line color="#00a9d5"/>
        <ChooseTeam senteces={["Choose first", "Choose second"]}/>
        <Flex>
          {
            this.props.house.teams.map((team) => <Team team={team}/>)
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
