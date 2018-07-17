import styled, { css } from 'styled-components';

const cssAttributes = css`
height: ${({ height }) => height};
min-height: ${({ minHeight }) => minHeight};
max-height: ${({ maxHeight }) => maxHeight};
width: ${({ width }) => width};
min-width: ${({ minWidth }) => minWidth};
max-width: ${({ maxWidth }) => maxWidth};
margin: ${({ margin }) => margin};
margin-top: ${({ marginTop }) => marginTop};
margin-right: ${({ marginRight }) => marginRight};
margin-bottom: ${({ marginBottom }) => marginBottom};
margin-left: ${({ marginLeft }) => marginLeft};
padding: ${({ padding }) => padding};
padding-top: ${({ paddingTop }) => paddingTop};
padding-right: ${({ paddingRight }) => paddingRight};
padding-bottom: ${({ paddingBottom }) => paddingBottom};
padding-left: ${({ paddingLeft }) => paddingLeft};
position: ${({ position }) => position};
top: ${({ top }) => top};
right: ${({ right }) => right};
bottom: ${({ bottom }) => bottom};
left: ${({ left }) => left};
display: ${({ display }) => display};
flex: ${({ flex }) => flex};
flex-grow: ${({ flexGrow }) => flexGrow};
flex-wrap: ${({ flexWrap }) => flexWrap};
flex-direction: ${({ flexDirection }) => flexDirection};
flex-basis: ${({ flexBasis }) => flexBasis};
align-items: ${({ alignItems }) => alignItems};
justify-content: ${({ justifyContent }) => justifyContent};
align-content: ${({ alignContent }) => alignContent};
white-space: ${({ whiteSpace }) => whiteSpace};
border: ${({ border }) => border};
border-top: ${({ borderTop }) => borderTop};
border-right: ${({ borderRight }) => borderRight};
border-bottom: ${({ borderBottom }) => borderBottom};
border-left: ${({ borderLeft }) => borderLeft};
border-radius: ${({ borderRadius }) => borderRadius};
border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
border-top-right-radius: ${({ borderTopRightRadius }) => borderTopRightRadius};
border-bottom-left-radius: ${({ borderBottomLeftRadius }) => borderBottomLeftRadius};
border-bottom-right-radius: ${({ borderBottomRightRadius }) => borderBottomRightRadius};
`;

export const cssDirectThemedAttributes = css`
background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
color: ${({ theme, color }) => theme[color]};
`;

export const Label = styled.label`
${cssAttributes}
${cssDirectThemedAttributes}
`;

export const Span = styled.span`
${cssAttributes}
${cssDirectThemedAttributes}
`;

// export const behaviors = css`
// ${({ theme, type, selected, selectedType }) => selected ? theme[selectedType || type] : theme[type]};
// :hover {
//   ${({ theme, hoverType }) => hoverType ? theme[hoverType] : ''};
// }
// `;
