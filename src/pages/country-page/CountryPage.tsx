import { Box, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useEffect, useState } from 'react';
import { ICountry } from 'interfaces';
import { getCountryByKey } from 'api/countries';
import { useNavigate, useParams } from 'react-router-dom';
import { GenericPageLayout } from 'layouts';
import { Loading } from 'components';
import { WIKI_ROUTE } from 'constants/routes';
import {
  CountryPageHeading,
  CountryPageMainContentContainer,
  CountryPageMainStats,
  CountryPageMainSupplementaryInfoContainer,
  CountryPageStatsSpan,
  CountryPageStatsTypography,
  CustomizedCardMedia,
} from './styled';
import { GEOQUIZ_SVG_PATH } from 'constants/endpoints';

export const CountryPage = () => {
  const navigate = useNavigate();
  const { page } = useParams<'page'>();
  const [country, setCountry] = useState<ICountry | null>(null);
  console.log('modal', country);

  const fetchCountryPage = useCallback(async (key: string) => {
    const res = await getCountryByKey(key);
    setCountry(res);
  }, []);

  useEffect(() => {
    if (!page) return;
    fetchCountryPage(page);
  }, [page, fetchCountryPage]);

  if (!country) {
    return (
      <GenericPageLayout>
        <Loading />
      </GenericPageLayout>
    );
  }

  return (
    <GenericPageLayout>
      <Box display="flex" justifyContent="flex-start">
        <IconButton
          size="large"
          aria-label="close"
          onClick={() => navigate(WIKI_ROUTE)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <CountryPageHeading variant="h1" textAlign={'center'}>
        {country.name}
      </CountryPageHeading>
      <CountryPageMainSupplementaryInfoContainer>
        <CountryPageMainStats>
          <CountryPageStatsTypography variant="body1">
            <CountryPageStatsSpan>Region</CountryPageStatsSpan>:{' '}
            {country.region}
          </CountryPageStatsTypography>
          <CountryPageStatsTypography variant="body1">
            <CountryPageStatsSpan>Capital</CountryPageStatsSpan>:{' '}
            {country.capital}
          </CountryPageStatsTypography>
          <CountryPageStatsTypography variant="body1">
            <CountryPageStatsSpan>Population</CountryPageStatsSpan>:{' '}
            {country.population}
          </CountryPageStatsTypography>
          <CountryPageStatsTypography variant="body1">
            <CountryPageStatsSpan>Languages</CountryPageStatsSpan>:{' '}
            {country.languages.map((language) => language.name).join(', ')}
          </CountryPageStatsTypography>
          <CountryPageStatsTypography variant="body1">
            <CountryPageStatsSpan>Currencies</CountryPageStatsSpan>:{' '}
            {country.currencies.map((currency) => currency.name).join(', ')}
          </CountryPageStatsTypography>
        </CountryPageMainStats>
        <CustomizedCardMedia image={GEOQUIZ_SVG_PATH(country.flag)} />
      </CountryPageMainSupplementaryInfoContainer>
      <CountryPageMainContentContainer>
        <Typography variant="body1" fontSize="1.8rem" textAlign={'center'}>
          {country.description}
        </Typography>
      </CountryPageMainContentContainer>
      <Box textAlign={'center'}>
        <Button
          size="large"
          variant="contained"
          target="__blank"
          rel="noopener"
          href={country.wikiLink}
          color="secondary"
          sx={{ marginTop: '2rem' }}
        >
          READ WIKI ARTICLE
        </Button>
      </Box>
    </GenericPageLayout>
  );
};
