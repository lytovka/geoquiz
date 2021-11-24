import { CardMedia, Grid, Typography } from '@mui/material';
import styled from '@mui/styled-engine';
import { Box } from '@mui/system';

export const CountryPageHeading = styled(Typography)`
  text-decoration: underline;
  font-size: 2.8rem;
`;

export const CountryPageMainSupplimentaryInfoContainer = styled(Grid)`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  max-width: 60rem;
  margin: 2rem auto 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CountryPageMainStats = styled('div')``;

export const CountryPageStatsTypography = styled(Typography)`
  font-size: 1.8rem;
  text-align: left;
`;

export const CountryPageStatsSpan = styled('span')`
  font-weight: bold;
`;

export const CustomizedCardMedia = styled(CardMedia)`
  background-size: contain;
  min-height: 15rem;
  margin: 1rem 1rem 0 1rem;
`;

export const CountryPageMainContentContainer = styled(Box)`
  margin-top: 2rem;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);

  @media screen and (min-width: 500px) {
    padding: 0 1.6rem;
  }
`;
