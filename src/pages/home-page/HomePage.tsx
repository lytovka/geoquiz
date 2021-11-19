import './HomePage.css';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { grey, blue } from '@mui/material/colors';
import { GenericPageLayout } from 'layouts';

const lightBlueButton = createTheme({
  shape: { borderRadius: 28 },
  palette: { primary: { main: '#b3e5fc' }, secondary: blue },
  typography: {
    button: { textTransform: 'none', fontWeight: 'bold', fontSize: '125%' },
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffecb3',
    },
    secondary: {
      main: grey[800],
    },
  },
  typography: {
    button: { textTransform: 'none', fontWeight: 'bold', fontSize: '125%' },
  },
});

export const HomePage = () => {
  document.body.style.backgroundColor = 'blanchedalmond';
  return (
    <GenericPageLayout>
      <ThemeProvider theme={lightBlueButton}>
        <div className="center">
          <h1>Take your geography knowledge to another level.</h1>
          <Button variant="contained">Take a Quiz</Button>&nbsp;&nbsp;
          <Button variant="contained">Read the Wiki</Button>
        </div>
        <img
          src="https://www.countryflags.com/wp-content/uploads/full-package-scaled.jpg"
          alt="countries"
          className="img"
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <div className="bottomCenter">
          <Button color="secondary">View the Leaderboards</Button>
        </div>
      </ThemeProvider>
    </GenericPageLayout>
  );
};
