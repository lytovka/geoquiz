import { Box, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { HOMEPAGE_ROUTE, QUIZ_SETUP_ROUTE, WIKI_ROUTE } from 'constants/routes';
import { CustomAppBar, CustomToolbar } from './styled';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [renderTrigger, setRenderTrigger] = useState(false);

  useEffect(() => {
    setRenderTrigger(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Box>
      <CustomAppBar position="static">
        <CustomToolbar
          sx={{ justifyContent: 'space-between', alignContent: 'center' }}
        >
          <Box display="flex">
            <Link
              fontSize="1.8rem"
              fontWeight="bold"
              color="secondary"
              component={RouterLink}
              to={HOMEPAGE_ROUTE}
              underline="hover"
            >
              GEOQUIZ
            </Link>
          </Box>
          <Box display="flex" columnGap={4}>
            <Link
              fontSize="1.5rem"
              color="secondary"
              component={RouterLink}
              to={QUIZ_SETUP_ROUTE}
              underline="hover"
            >
              Quiz
            </Link>
            <Link
              fontSize="1.5rem"
              color="secondary"
              component={RouterLink}
              to={WIKI_ROUTE}
              underline="hover"
            >
              Wiki
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                if (!isAuthenticated) {
                  loginWithRedirect();
                } else {
                  logout();
                }
              }}
              color="secondary"
            >
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </Button>
          </Box>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};
