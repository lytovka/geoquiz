import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE, QUIZ_SETUP_ROUTE, WIKI_ROUTE } from 'constants/routes';

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

export const Navbar = () => {
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
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              LOGO
            </Typography>
            <Link to={QUIZ_SETUP_ROUTE}>
              <Button color="primary">Quiz</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to={WIKI_ROUTE}>
              <Button color="primary">Wiki</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to={HOMEPAGE_ROUTE}>
              <Button color="primary">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
