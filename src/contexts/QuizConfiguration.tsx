/* eslint-disable @typescript-eslint/no-empty-function */
import { getQuizConfigService, setQuizConfigService } from 'api/quiz';
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
  const [quizConfig, setQuizConfig] = useState<IQuizConfiguration | null>(null);

  const getQuizConfiguration = useCallback(() => {
    const currentConfig = getQuizConfigService();
    return currentConfig;
  }, []);

  useEffect(() => {
    const res = getQuizConfiguration();
    setQuizConfig(res);
  }, [getQuizConfiguration]);

  const setQuizConfiguration = (body: IQuizConfiguration) => {
    setQuizConfigService(body);
  };

  return (
    <QuizConfigContext.Provider
      value={{ quizConfig, setQuizConfiguration, getQuizConfiguration }}
    >
      {children}
    </QuizConfigContext.Provider>
  );
};
