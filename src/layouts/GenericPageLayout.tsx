import { Container } from '@mui/material';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

interface IGenericPageLayoutProps {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  fixedBar?: boolean;
  maxWidth?: 'md' | 'lg';
}

export const GenericPageLayout = ({
  children,
  maxWidth = 'lg',
}: IGenericPageLayoutProps) => {
  return (
    <div>
      <Container
        sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </div>
  );
};
