import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Link as MaterialLink } from '@mui/material';
import { GenericPageLayout } from 'layouts';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
  LEADER_BOARD_ROUTE,
  QUIZ_SETUP_ROUTE,
  WIKI_ROUTE,
} from 'constants/routes';
import {
  HomePageContainer,
  HomePageImage,
  HomePageHeading,
  HomePageBottomContainer,
} from './styled';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <GenericPageLayout>
      <HomePageContainer
        container
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={6}>
          <HomePageHeading variant="h1" fontSize="2.8rem">
            Take your geography knowledge to another level.
          </HomePageHeading>
          <Box display="flex" gap={3} justifyContent="center">
            <Button
              onClick={() => {
                navigate(QUIZ_SETUP_ROUTE);
              }}
              endIcon={<KeyboardArrowRight />}
              variant="contained"
              color="secondary"
            >
              Take a Quiz
            </Button>
            <Button
              onClick={() => {
                navigate(WIKI_ROUTE);
              }}
              variant="contained"
              color="primary"
            >
              Read the Wiki
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <HomePageImage
            src="https://www.countryflags.com/wp-content/uploads/full-package-scaled.jpg"
            alt="countries"
          />
        </Grid>
      </HomePageContainer>
      <HomePageBottomContainer>
        <MaterialLink
          fontSize="1.8rem"
          color="common.black"
          component={Link}
          to={LEADER_BOARD_ROUTE}
        >
          View the Leader boards
        </MaterialLink>
      </HomePageBottomContainer>
    </GenericPageLayout>
  );
};
