import React from 'react';
import PropTypes from 'prop-types'
import {Label} from 'components/StyledElements';

const ChooseTeam = ({senteces, sentenceIdx = 0}) => (
  <Label type="l4" margin="10px">
    {
      senteces[sentenceIdx]
    }
  </Label>
);

ChooseTeam.propTypes = {
  senteces: PropTypes.arrayOf(PropTypes.string),
  sentenceIdx: PropTypes.number
};

export default ChooseTeam;
