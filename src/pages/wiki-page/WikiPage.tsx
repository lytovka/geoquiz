import { Grid } from '@mui/material';
import { getAllCountries } from 'api/countries';
import { CountryCard, Loading } from 'components';
import { WIKI_ROUTE } from 'constants/routes';
import { ICountryLookup } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const WikiPage = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<Array<ICountryLookup> | null>(
    null
  );

  const fetchCountries = useCallback(async () => {
    const list = await getAllCountries();
    setCountries(list);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (!countries || !countries.length) {
    return (
      <GenericPageLayout>
        <Loading />
      </GenericPageLayout>
    );
  }

  const handleOnCardClick = (country: ICountryLookup) => {
    navigate(`${WIKI_ROUTE}/${country.country_key}`);
  };

  return (
    <GenericPageLayout>
      <Grid alignItems="stretch" container direction="row" spacing={6}>
        {countries.map((country) => (
          <Grid key={country.country_key} item lg={4} md={4} sm={6} xs={12}>
            <CountryCard
              country={country}
              onClick={() => handleOnCardClick(country)}
            />
          </Grid>
        ))}
      </Grid>
    </GenericPageLayout>
  );
};
