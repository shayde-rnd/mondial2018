import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Flex, Header, Image, ChooseButton } from 'components/Common';

class Team extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Flex direction="column" margin="20px" alignItems="center">
        <Image src={this.props.team.img}/>
        <Header type="h3" margin="20px">
          {this.props.team.name}
        </Header>
        <ChooseButton>Choose</ChooseButton>
      </Flex>
  )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired
};
export default Team;
