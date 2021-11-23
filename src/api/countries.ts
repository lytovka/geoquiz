import { get } from './http';
import { ICountry, ICountryLookup, ICountryPageResponse } from 'interfaces';

export const getAllCountries = async () => {
  const endpoint = new URL('countries', process.env.REACT_APP_GEOQUIZ_BASE_URL);

  const response = get<Array<ICountryLookup>>(endpoint.toString());

  return response;
};

export const getCountryByKey = async (key: string): Promise<ICountry> => {
  const endpoint = new URL(
    `read/${key}`,
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );

  const response = await get<ICountryPageResponse>(endpoint.toString());

  return response.data;
};
