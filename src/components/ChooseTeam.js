import React from 'react';
import PropTypes from 'prop-types'
import { Header } from 'components/Common'

const ChooseTeam = ({senteces, sentenceIdx = 0}) => (
  <Header color="#00a9d5" type="h2" margin="10px">
    {
      senteces[sentenceIdx]
    }
  </Header>
);

ChooseTeam.propTypes = {
  senteces: PropTypes.arrayOf(PropTypes.string),
  sentenceIdx: PropTypes.number
};

export default ChooseTeam;
