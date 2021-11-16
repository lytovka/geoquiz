import { CardActionArea, CardContent, Typography } from '@mui/material';
import { CustomizedCard } from './styled';
import { ICountryCardProps } from './types';

export const CountryCard = ({ countryName, ...rest }: ICountryCardProps) => {
  return (
    <CustomizedCard {...rest}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {countryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CustomizedCard>
  );
};
