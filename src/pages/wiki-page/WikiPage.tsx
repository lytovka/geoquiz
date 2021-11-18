import { Grid } from '@mui/material';
import { CountryCard } from 'components';
import { GenericPageLayout } from 'layouts';

export const WikiPage = () => {
  return (
    <GenericPageLayout>
      {/* Dummy data (to be replaced with response from BE) */}
      <Grid alignItems="stretch" container direction="row" spacing={6}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <CountryCard countryName="Russia" />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <CountryCard countryName="Russia" />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <CountryCard countryName="Russia" />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <CountryCard countryName="Russia" />
        </Grid>
      </Grid>
    </GenericPageLayout>
  );
};
