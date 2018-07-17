import {cssAttributes, cssAttributes} from 'StyledElements';

export const FlexColumns = styled.span`
${cssAttributes}
${cssDirectThemedAttributes}
display: flex;
flex-direction: row;
`;

export const FlexRows = styled.span`
${cssAttributes}
${cssDirectThemedAttributes}
display: flex;
flex-direction: column;
`;