import React from 'react';
import { FlexColumns, WSButton } from 'components/CommonComponents';
import styled from 'styled-components';

const CustomWSButton = styled(WSButton)`
:hover {
background-color: ${({theme}) => theme.baseColor};
}
`

const TopBar = ({updateThemeCB}) => (
  <FlexColumns height="140px" alignItems="center" backgroundThemedColor="primaryColor">
    <CustomWSButton type="secondaryBtn" onClick={updateThemeCB} width="150px"  margin="20px">
      Change Theme
    </CustomWSButton>
  </FlexColumns>
);

export default TopBar;
