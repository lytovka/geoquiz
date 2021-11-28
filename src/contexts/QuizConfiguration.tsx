/* eslint-disable @typescript-eslint/no-empty-function */
import { getQuizConfig, setQuizConfig } from 'api/quiz';
import { IQuizConfiguration } from 'interfaces';
import { createContext, useCallback, useEffect, useState } from 'react';

interface IQuizConfigContext {
  quizConfig: IQuizConfiguration | null;
  getQuizConfiguration: () => IQuizConfiguration | null;
  setQuizConfiguration: (value: IQuizConfiguration) => void;
}

interface IQuizConfigContextProps {
  children: React.ReactNode;
}

export const QuizConfigContext = createContext<IQuizConfigContext>({
  quizConfig: null,
  getQuizConfiguration: () => null,
  setQuizConfiguration: () => {},
});

export const QuizConfigProvider = ({ children }: IQuizConfigContextProps) => {
  const [quizConfig, _setQuizConfig] = useState<IQuizConfiguration | null>(
    null
  );

  const getQuizConfiguration = useCallback(() => {
    const currentConfig = getQuizConfig();
    return currentConfig;
  }, []);

  useEffect(() => {
    const res = getQuizConfiguration();
    _setQuizConfig(res);
  }, [getQuizConfiguration]);

  const setQuizConfiguration = async (body: IQuizConfiguration) => {
    setQuizConfig(body);
  };

  return (
    <QuizConfigContext.Provider
      value={{ quizConfig, setQuizConfiguration, getQuizConfiguration }}
    >
      {children}
    </QuizConfigContext.Provider>
  );
};
