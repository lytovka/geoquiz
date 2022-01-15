import { Box, Grid, Typography } from '@mui/material';
import styled from '@mui/styled-engine';

export const HomePageContainer = styled(Grid)`
  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

export const HomePageHeading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const HomePageImage = styled('img')`
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 28px;
`;

export const HomePageBottomContainer = styled(Box)`
  padding-top: 1.2rem;
  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;
