import { CardActionArea, CardContent } from '@mui/material';
import {
  CustomizedCard,
  CustomizedCardMedia,
  CustomizedTypography,
} from './styled';
import { ICountryCardProps } from './types';

import { Link } from 'react-router-dom';
import { RUSSIA_ROUTE } from 'constants/routes';


/**
 * Country preview card (Wiki page).
 * @param {string} countryName - name of the country
 * @returns {JSX.Element}
 */
export const CountryCard = ({ countryName, ...rest }: ICountryCardProps) => {
  return (
    <Link to={RUSSIA_ROUTE}>
      <CustomizedCard {...rest}>
        <CardActionArea>
          <CustomizedCardMedia src={'/rus.svg'} image="/rus.svg" />
          <CardContent>
            <CustomizedTypography gutterBottom variant="h5">
              {countryName}
            </CustomizedTypography>
          </CardContent>
        </CardActionArea>
      </CustomizedCard>
    </Link>
  );
};
