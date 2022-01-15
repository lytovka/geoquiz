import { CardActionArea, CardContent } from '@mui/material';
import { GEOQUIZ_SVG_PATH } from 'constants/endpoints';
import {
  CustomizedCard,
  CustomizedCardMedia,
  CustomizedTypography,
} from './styled';
import { ICountryCardProps } from './types';

/**
 * Country preview card (Wiki page).
 * @param {ICountryLookup} country - name of the country
 * @returns {JSX.Element}
 */
export const CountryCard = ({ country, ...rest }: ICountryCardProps) => {
  return (
    <CustomizedCard {...rest}>
      <CardActionArea>
        <CustomizedCardMedia image={GEOQUIZ_SVG_PATH(country.data.flag)} />
        <CardContent>
          <CustomizedTypography gutterBottom variant="h5" textAlign="center">
            {country.data.name}
          </CustomizedTypography>
        </CardContent>
      </CardActionArea>
    </CustomizedCard>
  );
};
