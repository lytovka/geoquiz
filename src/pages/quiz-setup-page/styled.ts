import { Button, Select } from '@mui/material';
import styled from '@mui/styled-engine';

export const QuizSetupForm = styled('form')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  max-width: 60rem;
  margin: 0 auto;
`;

export const QuizSetupSelectControl = styled(Select)`
  min-width: inherit;
`;

export const QuizSetupSubmitButton = styled(Button)`
  width: fit-content;
  margin: 0 auto;
`;
