import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Label, Image } from 'components/StyledElements';
import {FlexRows, WSButton} from 'components/CommonComponents';

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
      <FlexRows margin="20px" alignItems="center" opacity={this.props.disabled && !this.state.choosen ? 0.3 : 1}>
        <Image src={this.props.team.img}/>
        <Label type="l3" margin="20px">
          {this.props.team.name}
        </Label>
        <WSButton type={this.state.choosen ? "primaryBtn" : "secondaryBtn"} disabled={!this.state.choosen && this.props.disabled} onClick={this.handleChoose} choosen={this.state.choosen}>
          Choose
        </WSButton>
      </FlexRows>
  )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
  handleChoosenUpdate: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
export default Team;
