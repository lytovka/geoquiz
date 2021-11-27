import { Breakpoints } from '@mui/material';
import { customTheme } from 'theme/theme';

export const MEDIA_QUERIES: Record<keyof Breakpoints['values'], string> = {
  xs: `@media screen and (min-width: ${customTheme.breakpoints.values.xs})`,
  sm: `@media screen and (min-width: ${customTheme.breakpoints.values.sm})`,
  md: `@media screen and (min-width: ${customTheme.breakpoints.values.md})`,
  lg: `@media screen and (min-width: ${customTheme.breakpoints.values.lg})`,
  xl: `@media screen and (min-width: ${customTheme.breakpoints.values.xl})`,
};
