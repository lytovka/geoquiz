import { CardActionArea, CardContent } from '@mui/material';
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
        <CustomizedCardMedia
          image={`http://localhost:5000/flags/svg/${country.data.flag}`}
        />
        <CardContent>
          <CustomizedTypography gutterBottom variant="h5">
            {country.data.name}
          </CustomizedTypography>
        </CardContent>
      </CardActionArea>
    </CustomizedCard>
  );
};
