import { QUIZ_CONFIG_STORAGE_KEY } from 'constants/storageKeys';
import { IQuizConfiguration } from 'interfaces';
import { getItemFromLocalStorage, setItemInLocalStorage } from './storage';

export const getQuizConfigService = () => {
  const res = getItemFromLocalStorage(QUIZ_CONFIG_STORAGE_KEY);
  if (!res) return null;

  return JSON.parse(res) as IQuizConfiguration;
};

export const setQuizConfigService = (config: IQuizConfiguration) => {
  const value = JSON.stringify(config);
  setItemInLocalStorage(QUIZ_CONFIG_STORAGE_KEY, value);
};
