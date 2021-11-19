import './HomePage.css';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { grey, blue } from '@mui/material/colors';

const lightBlueButton = createTheme({shape: {borderRadius: 28,}, palette: {primary: {main: '#b3e5fc',},secondary: blue,},typography: {button: {textTransform: 'none', fontWeight: 'bold', fontSize: '125%' }}});
const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#ffecb3',
      },
      secondary: {
        main: grey[800],
      },
    },
    typography: {button: {textTransform: 'none', fontWeight: 'bold', fontSize: '125%' }}
  });

export const HomePage = () => {
  document.body.style.backgroundColor = 'blanchedalmond';
  return (
    <div>
    <ThemeProvider theme={lightBlueButton}>
    <div className="center">
      <h1>Take your geography knowledge to another level.</h1>
      <Button variant="contained">Take a Quiz</Button>&nbsp;&nbsp;<Button variant="contained">Read the Wiki</Button>
    </div>
    <img src="https://www.countryflags.com/wp-content/uploads/full-package-scaled.jpg" alt="countries" className="img"/>
    </ThemeProvider>
    <ThemeProvider theme={theme}>
    <div className="bottomCenter">
      <Button color="secondary">View the Leaderboards</Button>
    </div>
    </ThemeProvider>
    </div>
  );
};

export const Navbar= () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            LOGO
          </Typography>
          <Button color="primary">Quiz</Button>&nbsp;&nbsp;
          <Button color="primary">Wiki</Button>&nbsp;&nbsp;
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
};
