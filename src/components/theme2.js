import { css } from 'styled-components';

// COLORS

 // General
export const primaryColor = `pink`;
export const primaryColorHover = `rgba(255, 192, 203, 0.2)`;
export const secondaryColor = 'white';
export const secondaryColorHover = `rgba(255, 192, 203, 0.2)`;
export const baseColor = 'white';

// Line seperator
export const secondaryLineColor = 'black';
export const primaryLineColor = `pink`;

// Button

export const primaryBtnColor = 'white';
export const secondaryBtnColor = `pink`;

// LABELS

export const h1 = css`
font-size: 40px;
font-weight: bold;
font-family: sans-serif;
`;

export const h2 = css`
font-size: 30px;
font-weight: bold;
font-family: sans-serif;
`;

export const h3 = css`
font-size: 20px;
font-family: sans-serif;
`;

export const h4 = css`
color: ${primaryColor};
font-size: 30px;
font-weight: bold;
font-family: sans-serif;
`;


// BUTTONS

export const primaryBtn = css`
color: ${primaryBtnColor};
background-color: ${primaryColor};
border: 1px solid ${primaryColor};
font-weight: bold;
font-size: 15px;
:hover {
  cursor: pointer;
  background-color: white;
}
:focus {
  outline: 0;
}
`;

export const secondaryBtn = css`
color: ${secondaryBtnColor};
background-color: ${secondaryColor};
border: 1px solid ${primaryColor};
font-weight: bold;
font-size: 15px;
:hover {
  cursor: pointer;
  background-color: ${secondaryColorHover};
}
:focus {
  outline: 0;
}
`;

// SEPERATORS

export const secondaryLine =css`
border: 1px solid ${secondaryLineColor};
`;

export const primaryLine =css`
border: 1px solid ${primaryLineColor};
`;
