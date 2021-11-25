import { Grid } from '@mui/material';
import { getAllCountries } from 'api/countries';
import { CountryCard, Loading } from 'components';
import { WIKI_ROUTE } from 'constants/routes';
import { ICountryLookup } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefInFrame } from 'hooks/useRefInFrame';


export const WikiPage = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<Array<ICountryLookup> | null>(
    null
  );

  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 20;

  const loadingRef = useRef(null);
  const isLoadingRefOnScreen = useRefInFrame(loadingRef);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);



  const fetchCountries = useCallback(async () => {
    const list = await getAllCountries();
    setCountries(list);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  //TODO: Change 250 to length of countries to show
  useEffect(() => {
    if (isLoadingRefOnScreen) {
      if ((pageNumber * pageSize) < 250) {
        console.log("load triggered");
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
      else { setIsFullyLoaded(true) }
    }
  }, [isLoadingRefOnScreen]);

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
        {countries.slice(0, pageSize * pageNumber).map((country) => (
          <Grid key={country.country_key} item lg={4} md={4} sm={6} xs={12}>
            <CountryCard
              country={country}
              onClick={() => handleOnCardClick(country)}
            />
          </Grid>
        ))}
      </Grid>
      <div ref={loadingRef}>
        {!isFullyLoaded
          && <Loading />
        }
      </div>
    </GenericPageLayout>
  );
};
