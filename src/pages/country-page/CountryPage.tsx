import { AppBar, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ICountryPageProps } from './types';
import { useEffect, useState } from 'react';
import { ICountry } from 'interfaces';
import { getCountryByKey } from 'api/countries';

export const CountryPage = ({
  country,
  open,
  onClose,
  ...rest
}: ICountryPageProps) => {
  const [res, setCountry] = useState<ICountry | null>(null);
  console.log(res);
  useEffect(() => {
    if (country?.country_key) {
      const fetchCountry = async (key: string) => {
        const r = await getCountryByKey(key);
        setCountry(r);
      };

      fetchCountry(country.country_key);
    }
  }, [country]);

  return (
    <Dialog fullScreen open={open} onClose={onClose} {...rest}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {/* {country.name} */}
          </Typography>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};
