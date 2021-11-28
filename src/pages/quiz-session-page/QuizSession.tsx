import shuffle from 'lodash.shuffle';
import { getCountriesByDataCategory, getCountryByKey } from 'api/countries';
import { QUIZ_SETUP_ROUTE } from 'constants/routes';
import { QuizConfigContext } from 'contexts/QuizConfiguration';
import { ICountry } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { EQuizActionType, initialState, reducer } from './quizReducer';

interface IActiveCard {
  country: ICountry;
  options: Array<string>;
}

export const QuizSessionPage = () => {
  const { getQuizConfiguration } = useContext(QuizConfigContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentCard, setCurrentCard] = useState<IActiveCard>();
  const currentConfig = getQuizConfiguration();

  const fetchCountriesBySubregion = async (subregion: string) => {
    const result = await getCountriesByDataCategory('subregion', subregion);
    return result;
  };

  const fetchFullCountryInformation = async (key: string) => {
    const result = await getCountryByKey(key);
    return result;
  };

  // fetch all countries at the beginning of a quiz session
  useEffect(() => {
    if (currentConfig && currentConfig.region) {
      fetchCountriesBySubregion(currentConfig.region)
        .then((cards) => {
          const shuffledArray = shuffle(cards);
          dispatch({
            type: EQuizActionType.POP_ITEM,
            payload: {
              ...state,
              allCards: shuffledArray,
              remainingCards: shuffledArray,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log('state', state);

  // stopwatch implementation
  useEffect(() => {
    // TODO: change 50 to 0. Currently keeping the value higher for testing
    if (state.time <= 50) {
      dispatch({ type: EQuizActionType.STOP_TIME, payload: state });
      return;
    } else {
      const interval = setInterval(
        () => dispatch({ type: EQuizActionType.TICK_TIME, payload: state }),
        1000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [state.time]);

  // fetch full country information and set random options
  useEffect(() => {
    if (state.activeCard) {
      fetchFullCountryInformation(state.activeCard.country_key)
        .then((fullCountryInfo) => {
          // return all countries, except the one that is currently active
          const allExceptActive = state.allCards.filter(
            (country) => country.data.name !== fullCountryInfo.name
          );
          // 1. return a list of names of remaining countries
          // 2. truncate the array to 3 elements (since MCQs have 4 options in total; 3 random + 1 correct option)
          const remainingOptions = allExceptActive
            .map((e) => e.data.name)
            .slice(0, 3);
          // shuffle MCQ options
          const options = shuffle([fullCountryInfo.name, ...remainingOptions]);
          setCurrentCard({ country: fullCountryInfo, options });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [state.activeCard]);

  if (!currentConfig) {
    return <Navigate to={QUIZ_SETUP_ROUTE} />;
  }

  return (
    <GenericPageLayout>
      <div>{state.time}</div>
      <div>{currentCard?.country.name}</div>
    </GenericPageLayout>
  );
};
