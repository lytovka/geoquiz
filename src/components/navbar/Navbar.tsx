import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  HOMEPAGE_ROUTE,
  LOGIN_ROUTE,
  QUIZ_SETUP_ROUTE,
  WIKI_ROUTE,
} from 'constants/routes';
import { CustomAppBar, CustomToolbar } from './styled';
import { LoginWrapper } from 'components/login/LoginWrapper';

export const Navbar = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <CustomToolbar sx={{ justifyContent: 'space-between' }}>
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
            <LoginWrapper />
          </Box>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};
