import { cssNonThemedAttributes, cssThemedAttributes, Div } from 'StyledElements';

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
