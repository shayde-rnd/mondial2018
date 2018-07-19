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

export const Image = styled.img``;

export const ChooseButton = styled.button`
border: 1px solid ${({theme}) => theme.primaryColor};
color: ${({choosen, theme}) => !choosen ? theme.primaryColor : 'white'};
font-weight: bold;
font-size: 15px;
background-color: ${({choosen, theme}) => choosen ? theme.primaryColor : 'white'};
width: ${({width}) => width || '120px' };
height: ${({height}) => height || '40px' };
margin-top: 10px;
margin: ${({margin}) => margin};
:hover {
  cursor: pointer;
  background-color: ${({ theme, disabled, choosen, hoveredBG }) => !choosen && !disabled && (hoveredBG || theme.primaryColorHover)};
}
:focus {
  outline: 0;
}
`
