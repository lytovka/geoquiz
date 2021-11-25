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

export const getCountriesByDataCategory = async (dataCategory: string, dataValue: string): Promise<Array<ICountryLookup>> => {
  const endpoint = new URL(
    `countries_by_category/${dataCategory}/${dataValue}`,
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );
  const response = await get<Array<ICountryLookup>>(endpoint.toString());
  return response;
}

export const getDistinctDataCategoryValues = async (dataCategory: string): Promise<Array<string>> => {
  const endpoint = new URL(
    `distinct_data_categories/${dataCategory}`,
    process.env.REACT_APP_GEOQUIZ_BASE_URL
  );

  const response = await get<Array<string>>(endpoint.toString());

  return response;
};