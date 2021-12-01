import { get, post } from './http';
import { ICountry, ICountryLookup, ICountryPageResponse, IUserScore } from 'interfaces';

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

export const getCountriesByDataCategory = async (
  dataCategory: string,
  dataValue: string
): Promise<Array<ICountryLookup>> => {
  const endpoint = new URL(
    `countries_by_category/${dataCategory}/${dataValue}`,
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );
  const response = await get<Array<ICountryLookup>>(endpoint.toString());
  return response;
};

export const getDistinctRegions = async (): Promise<
  Array<ICountry['region']>
> => {
  const endpoint = new URL(
    'distinct_data_categories/region',
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );

  const response = await get<Array<string>>(endpoint.toString());
  return response;
};

export const getDistinctSubregions = async (): Promise<Array<string>> => {
  const endpoint = new URL(
    'distinct_data_categories/subregion',
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );

  const response = await get<Array<string>>(endpoint.toString());
  return response;
};


export const postUserScore = async (userData: IUserScore): Promise<number> => {
  const endpoint = new URL(
    '/write/user_score/',
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );
  const config: RequestInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const responseCode = await post<IUserScore, number>(endpoint.toString(), userData, config);
  return responseCode;
};