import { Button, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

export const QuizSessionCard = styled(Card)`
  background-color: #eeedea;
  max-width: 45rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 28px;
`;

export const QuizSessionCardMedia = styled(CardMedia)`
  background-size: contain;
  height: 8rem;
  margin-bottom: 1rem;
`;

export const QuizSessionCardButton = styled(Button)`
  width: 16rem;
`;

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
