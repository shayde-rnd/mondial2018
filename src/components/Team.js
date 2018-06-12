import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Flex, Header, Image, ChooseButton } from 'components/Common';

class Team extends Component {

  constructor(props) {
    super(props);
    this.state={
      choosen: false
    }
  }

  handleChoose = (event) => {
    const choosen = !this.state.choosen
    this.setState({
      choosen
    })
    this.props.handleChoosenUpdate(this.props.team.name, choosen);
  }

  render() {
    return (
      <Flex direction="column" margin="20px" alignItems="center" opacity={this.props.disabled && !this.state.choosen ? 0.3 : 1}>
        <Image src={this.props.team.img}/>
        <Header type="h3" margin="20px">
          {this.props.team.name}
        </Header>
        <ChooseButton disabled={!this.state.choosen && this.props.disabled} onClick={this.handleChoose} choosen={this.state.choosen}>
          Choose
        </ChooseButton>
      </Flex>
  )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
  handleChoosenUpdate: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
export default Team;
