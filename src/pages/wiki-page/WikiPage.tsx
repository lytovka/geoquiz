import { CountryCard } from 'components';
import React from 'react';

export const WikiPage = () => {
  return (
    <React.Fragment>
      <CountryCard countryName="Russia" />
      <h1>Welcome to Wiki Page!</h1>
    </React.Fragment>
  );
};
