import React from 'react';
import styled from 'styled-components';
import { ChooseButton, Flex } from 'components/Common';

const StyledFlex = styled(Flex)`
background-color: ${({theme}) => theme.primaryColor};
`;

const TopBar = ({updateThemeCB}) => (
  <StyledFlex height="140px" alignItems="center">
    <ChooseButton onClick={updateThemeCB} width="150px" margin="20px" hoveredBG="white">
      Change Theme
    </ChooseButton>
  </StyledFlex>
);

export default TopBar;
