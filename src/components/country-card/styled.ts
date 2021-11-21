import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomizedCard = styled(Card)`
  max-width: 30rem;
  background-color: #f7ebe1;
  border-radius: 28px;
`;

export const CustomizedCardMedia = styled('div')`
  background-size: contain;
  height: 8rem;
  transform: scale(0.1);
`;

export const CustomizedTypography = styled(Typography)`
  color: #6e7272;
  font-weight: bold;
`;
