import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#c1dbdb',
    },
    secondary: {
      main: '#fab131',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
        },
      },
    },
  },
});
