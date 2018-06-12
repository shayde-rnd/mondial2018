import styled from 'styled-components';

export const Header = styled.span`
${({ theme, type }) => theme[type]};
margin: ${({margin}) => margin};
color: ${({color, theme}) => color || theme.primaryColor};
`;

export const Line = styled.div`
width: 80%;
border: 1px solid ${({color, theme}) => color || theme.primaryColor};
`;

export const Flex = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
margin: ${({margin}) => margin};
padding: ${({padding}) => padding};
justify-content: ${({justifyContent}) => justifyContent};
align-items: ${({alignItems}) => alignItems};
flex-wrap: ${({flexWarp}) => flexWarp};
opacity: ${({opacity}) => opacity || 1};
`;

export const Image = styled.img``;

export const ChooseButton = styled.button`
border: 1px solid ${({theme}) => theme.primaryColor};
color: ${({choosen, theme}) => !choosen ? theme.primaryColor : 'white'};
font-weight: bold;
font-size: 15px;
background-color: ${({choosen, theme}) => choosen ? theme.primaryColor : 'white'};
width: 120px;
height: 40px;
margin-top: 10px;
:hover {
  cursor: pointer;
  background-color: ${({ theme, disabled, choosen }) => !choosen && !disabled && theme.primaryColorHover};
}
:focus {
  outline: 0;
}
`
