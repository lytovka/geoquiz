import { AppBar, styled, Toolbar } from '@mui/material';

export const CustomAppBar = styled(AppBar)((props) => ({
  backgroundColor: props.theme.palette.grey[800],
}));

export const CustomToolbar = styled(Toolbar)((props) => ({
  maxWidth: props.theme.breakpoints.values['lg'],
  width: '100%',
  margin: '0 auto',
}));
