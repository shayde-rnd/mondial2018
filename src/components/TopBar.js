import React from 'react';
import styled from 'styled-components';
import { ChooseButton } from 'components/Common';
import { FlexColumns } from 'components/CommonComponents';

const StyledFlex = styled(FlexColumns)`
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
