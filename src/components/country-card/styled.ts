import { Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomizedCard = styled(Card)`
  max-width: 30rem;
  background-color: #f7ebe1;
  border-radius: 28px;
`;

export const CustomizedCardMedia = styled(CardMedia)`
  background-size: contain;
  height: 8rem;
  margin: 1rem 1rem 0 1rem;
`;

export const CustomizedTypography = styled(Typography)`
  color: #6e7272;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
