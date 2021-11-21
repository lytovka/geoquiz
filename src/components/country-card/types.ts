import { CardProps } from '@mui/material';
import { ICountryLookup } from 'interfaces';

export interface ICountryCardProps extends CardProps {
  country: ICountryLookup;
}
