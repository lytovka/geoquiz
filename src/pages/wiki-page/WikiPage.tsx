import { Grid, TextField } from '@mui/material';
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

  // debounced wiki search
  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchEntry(debouncedSearchTerm);
      const newList = countries?.filter((country) =>
        country.data.name.includes(debouncedSearchTerm)
      );
      console.log(newList);
      setCountries((prev) => newList || prev);
    }
  }, [debouncedSearchTerm, setSearchEntry]);

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
    if (!countries) return;
    if (isLoadingRefOnScreen) {
      if (pageNumber * WIKI_PAGE_SIZE < countries.length) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      } else {
        setIsFullyLoaded(true);
      }
    }
  }, [isLoadingRefOnScreen]);

  const handleOnCardClick = (country: ICountryLookup) => {
    navigate(`${WIKI_ROUTE}/${country.country_key}`);
  };

  if (!countries || !countries.length) {
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
      <Grid alignItems="stretch" container direction="row" spacing={6}>
        {countries.slice(0, WIKI_PAGE_SIZE * pageNumber).map((country) => (
          <Grid key={country.country_key} item lg={4} md={4} sm={6} xs={12}>
            <CountryCard
              country={country}
              onClick={() => handleOnCardClick(country)}
            />
          </Grid>
        ))}
      </Grid>
      <div ref={loadingRef}>{!isFullyLoaded && <Loading />}</div>
    </GenericPageLayout>
  );
};
