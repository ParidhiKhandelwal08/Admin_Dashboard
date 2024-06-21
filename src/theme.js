import { createTheme } from '@mui/material/styles';

// Define a custom theme.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for primary elements
    },
    secondary: {
      main: '#f50057', // Pink color for secondary elements
    },
    background: {
      default: '#f5f7fa', // Light gray background color
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#424242', // Dark gray color for headings
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#424242',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#424242',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#424242',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#424242',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#424242',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#616161', // Medium gray color for subtitles
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#616161',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#424242',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#424242',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for elements
  },
});

export default theme;
