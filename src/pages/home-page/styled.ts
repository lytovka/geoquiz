import { Box, Grid, Typography } from '@mui/material';
import styled from '@mui/styled-engine';

export const HomePageContainer = styled(Grid)`
  padding-top: 3.6rem;

  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

export const HomePageHeading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const HomePageImage = styled('img')`
  max-width: 30rem;
  border-radius: 28px;
`;

export const HomePageBottomContainer = styled(Box)`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;
