import { Grid } from '@mui/material';
import { getAllCountries } from 'api/countries';
import { CountryCard } from 'components';
import { ICountryLookup } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { CountryPage } from 'pages/country-page';
import { useEffect, useState } from 'react';

export const WikiPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<ICountryLookup>();
  const [countries, setCountries] = useState<Array<ICountryLookup> | null>(
    null
  );

  useEffect(() => {
    const fetchCountryList = async () => {
      const r = await getAllCountries();
      setCountries(r);
    };

    fetchCountryList();
    console.log(countries);
  }, [country]);

  if (!countries || !countries.length) {
    return <div>loading...</div>;
  }

  return (
    <GenericPageLayout>
      <Grid alignItems="stretch" container direction="row" spacing={6}>
        {countries.map((country) => (
          <Grid key={country.country_key} item lg={4} md={4} sm={6} xs={12}>
            <CountryCard country={country} onClick={() => setOpen(true)} />
          </Grid>
        ))}
      </Grid>
      <CountryPage
        country={country}
        open={open}
        onClose={() => setOpen(false)}
      />
    </GenericPageLayout>
  );
};
