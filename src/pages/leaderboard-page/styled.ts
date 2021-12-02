import { Button, Select, Box, Grid, Typography } from '@mui/material';
import styled from '@mui/styled-engine';

export const LeaderboardPageContainer = styled(Grid)`
  padding-top: 3.6rem;

  @media screen and (min-width: 768px) {
    padding-top: 2rem;
  }
`;
export const LeaderboardPageHeading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const LeaderboardPageImage = styled('img')`
  max-width: 30rem;
  border-radius: 28px;
`;

export const LeaderboardPageBottomContainer = styled(Box)`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

export const LeaderboardSetupForm = styled('form')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  max-width: 60rem;
  margin: 0 auto;
`;

export const LeaderboardSetupSelectControl = styled(Select)`
  min-width: inherit;
`;

export const LeaderboardSetupSubmitButton = styled(Button)`
  width: fit-content;
  margin: 0 auto;
`;