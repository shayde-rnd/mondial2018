import styled from 'styled-components';
import { cssNonThemedAttributes, cssThemedAttributes, Div } from 'components/StyledElements';

export const FlexColumns = styled(Div)`
${cssNonThemedAttributes}
${cssThemedAttributes}
display: flex;
flex-direction: row;
`;

export const FlexRows = styled(Div)`
${cssNonThemedAttributes}
${cssThemedAttributes}
display: flex;
flex-direction: column;
`;
