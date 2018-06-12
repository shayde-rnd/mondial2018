import styled from 'styled-components';

export const Header = styled.span`
${({ theme, type }) => theme[type]};
margin: ${({margin}) => margin};
color: ${({color}) => color};
`;

export const Line = styled.div`
width: 80%;
border: 1px solid ${({color}) => color || 'rgb(151,151,151)'};
`;

export const Flex = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
margin: ${({margin}) => margin};
padding: ${({padding}) => padding};
justify-content: ${({justifyContent}) => justifyContent};
align-items: ${({alignItems}) => alignItems};
flex-wrap: ${({flexWarp}) => flexWarp};
`;

export const Image = styled.img``;

export const ChooseButton = styled.button`
border: 1px solid #00a9d5;
color: #00a9d5;
font-weight: bold;
background-color: white;
width: 100px;
height: 30px;
margin-top: 10px;
:hover {
  cursor: pointer;
}
`
