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

// Impose default values
export const WSButton = styled(Button)`
min-width: ${({width}) => width || '120px' };
min-height: ${({height}) => height || '40px' };
`;

export const Line = styled(Div)`
`;
