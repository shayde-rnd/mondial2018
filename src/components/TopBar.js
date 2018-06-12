import React from 'react';
import styled from 'styled-components';
import { ChooseButton } from 'components/Common';

const StyledDiv = styled.div`
background-color: ${({theme}) => theme.primaryColor};
width: 100%;
height: 80px;
`;

const TopBar = ({updateThemeCB}) => (
  <StyledDiv>
    <button onClick={updateThemeCB}>
      Change Theme
    </button>
  </StyledDiv>
);

export default TopBar;
