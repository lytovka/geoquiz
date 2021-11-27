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
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          borderRadius: '100px',
        },
        root: {
          borderRadius: '100px',
        },
      },
    },
  },
});
