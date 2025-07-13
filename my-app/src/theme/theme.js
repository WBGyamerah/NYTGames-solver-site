// Screenshotted and used the colour picker tool to get the colours
//I searched up which fonts are used on the website and from http://quora.com/Which-typefaces-does-The-New-York-Times-use found that the headings are cheltenham and georgia for the body
//The New York Times uses a custom cheltenham font, so I used a similar looking font Della Respira
import { createTheme } from '@mui/material/styles';

const theme =  createTheme({
  palette: {
    primary: {
      main: '#FFF',
      contrastText: '#333',
    },
    text: {
      secondary: '#959595',
    },
  },
  custom:{
    games: {
      wordle: '#E3E3E1',
      letterBoxed: '#FC716B',
      spellingBee: '#F7DA21',
      strands: '#C0DDD9',
      sudoku: '#FB9B00'
    },
    grays:{
      border: '#DCDCDC',
      hover: '#FAFAFA',
      menuHover: '#4C4C4C',
      spellingBeeHex: '#E7E7E7',
    },
    sudoku: {
      border: '#979797',
      filled: '#DFDFDF',
      sameNumber: '#FEC468',
      impacted: '#F9EAC2',
      warning: '#FF4B56',
    },
    wordle: {
      filled: '#878A8C',
      gray: '#787C7E',
      yellow: '#C9B458',
      green: '#6AAA64',
      keyPad: '#D3D6DA',
    }
  },
  typography: {
    fontFamily: 'Georgia Pro serif', // default

    h1: {
      fontFamily: "'Della Respira', serif",
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.5rem',
    },
    h2: {
      fontFamily: "'Della Respira', serif",
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.75rem',
    },
    sidebar:{
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.75rem',
    },
  },
});

export default theme;