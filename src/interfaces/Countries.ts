export type LatLng = [string, string];

export type Translations = Record<string, string>;

export type CountryFlag = Record<ICountry['name'], string>;

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface IRegionalBlock {
  blocks: Array<IBlock>;
  subregion: string;
}

export interface IBlock {
  acronym: string;
  name: string;
  otherNames?: Array<string>;
}

export interface ICountry {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  border: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  currencies: Array<ICurrency>;
  demonym: string;
  flag: string;
  languages: Array<ILanguage>;
  latlng: LatLng;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocks?: Array<IRegionalBlock>;
  timezones: Array<string>;
  translations: Translations;
  cioc: string;
  description: string;
  wikiLink: string;
}
