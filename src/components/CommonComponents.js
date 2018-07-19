import styled from 'styled-components';
import { cssNonThemedAttributes, cssThemedAttributes, Div, Button } from 'components/StyledElements';

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

export const WSButton = styled(Button)`
min-width: ${({width}) => width || '120px' };
height: ${({height}) => height || '40px' };
`;

export const Line = styled(Div)`
`;
