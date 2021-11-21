import { ModalProps } from '@mui/material';
import { ICountryLookup } from 'interfaces';

export interface ICountryPageProps
  extends Omit<ModalProps, 'children' | 'onClose'> {
  onClose: () => void;
  country?: ICountryLookup;
}
