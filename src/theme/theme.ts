import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
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
