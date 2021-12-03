import { Grid, TextField, Typography } from '@mui/material';
import { getAllCountries } from 'api/countries';
import { CountryCard, Loading } from 'components';
import { WIKI_ROUTE } from 'constants/routes';
import { ICountryLookup } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefInFrame } from 'hooks/useRefInFrame';
import { useDebounce } from 'hooks/useDebounce';
import { WIKI_PAGE_SIZE } from 'constants/values';

export const WikiPage = () => {
  const navigate = useNavigate();

  // refs
  const loadingRef = useRef(null);

  // local states
  const [countries, setCountries] = useState<Array<ICountryLookup> | null>(
    null
  );
  const [searchEntry, setSearchEntry] = useState<string | undefined>('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  // custom hooks
  const isLoadingRefOnScreen = useRefInFrame(loadingRef);
  const debouncedSearchTerm = useDebounce(searchEntry ?? '', 500);

  const FILTERED_COUNTRIES = countries?.filter((country) =>
    country.data.name
      .toLocaleLowerCase()
      .includes(debouncedSearchTerm.toLocaleLowerCase())
  );

  // debounced wiki search
  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchEntry(debouncedSearchTerm);
    }
  }, [setSearchEntry]);

  const fetchCountries = useCallback(async () => {
    const list = await getAllCountries();
    setCountries(list);
  }, []);

  // wiki countries fetching
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  // infinite scrolling
  useEffect(() => {
    if (!FILTERED_COUNTRIES || FILTERED_COUNTRIES.length === 0) return;
    if (isLoadingRefOnScreen) {
      if (pageNumber * WIKI_PAGE_SIZE < FILTERED_COUNTRIES.length) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      } else {
        setIsFullyLoaded(true);
      }
    }
  }, [isLoadingRefOnScreen]);

  useEffect(() => {
    setPageNumber(1);
  }, [debouncedSearchTerm]);

  const handleOnCardClick = (country: ICountryLookup) => {
    navigate(`${WIKI_ROUTE}/${country.country_key}`);
  };

  if (!countries || countries.length === 0) {
    return (
      <GenericPageLayout>
        <TextField
          fullWidth
          color="info"
          label="Type country name..."
          onChange={(e) => setSearchEntry(e.target.value)}
          type="search"
          variant="filled"
          sx={{ marginBottom: '2rem' }}
        />
        <Loading />
      </GenericPageLayout>
    );
  }

  if (!FILTERED_COUNTRIES || FILTERED_COUNTRIES.length === 0) {
    return (
      <GenericPageLayout>
        <TextField
          fullWidth
          color="info"
          label="Type country name..."
          onChange={(e) => setSearchEntry(e.target.value)}
          type="search"
          variant="filled"
          sx={{ marginBottom: '2rem' }}
        />
        <Typography variant="body1" fontSize="2rem">
          Couldn&apos;t find results, please try another query &#128542;
        </Typography>
      </GenericPageLayout>
    );
  }

  return (
    <GenericPageLayout>
      <TextField
        fullWidth
        color="info"
        label="Type country name..."
        onChange={(e) => setSearchEntry(e.target.value)}
        type="search"
        variant="filled"
        sx={{ marginBottom: '2rem' }}
      />
      <Grid alignItems="stretch" container spacing={3}>
        {FILTERED_COUNTRIES.slice(0, WIKI_PAGE_SIZE * pageNumber).map(
          (country) => (
            <Grid key={country.country_key} item lg={4} md={4} sm={6} xs={12}>
              <CountryCard
                country={country}
                onClick={() => handleOnCardClick(country)}
              />
            </Grid>
          )
        )}
      </Grid>
      <div ref={loadingRef}>{!isFullyLoaded && <Loading />}</div>
    </GenericPageLayout>
  );
};
