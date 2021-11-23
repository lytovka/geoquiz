import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useEffect, useState } from 'react';
import { ICountry } from 'interfaces';
import { getCountryByKey } from 'api/countries';
import { useNavigate, useParams } from 'react-router-dom';
import { GenericPageLayout } from 'layouts';
import { Loading } from 'components';
import { WIKI_ROUTE } from 'constants/routes';

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
      <Box display="flex" justifyContent="center">
        <IconButton
          size="large"
          aria-label="close"
          onClick={() => navigate(WIKI_ROUTE)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <Typography sx={{ flex: 1 }} variant="h1" fontSize="2.8rem">
          {country.name}
        </Typography>
      </Box>
    </GenericPageLayout>
  );
};
