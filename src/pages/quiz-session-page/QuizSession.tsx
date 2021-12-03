import shuffle from 'lodash.shuffle';
import { getCountriesByDataCategory, getCountryByKey } from 'api/countries';
import { postUserScore } from 'api/scores';
import { HOMEPAGE_ROUTE, QUIZ_SETUP_ROUTE } from 'constants/routes';
import { QuizConfigContext } from 'contexts/QuizConfiguration';
import { ICountry, IUserScore } from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { Fragment, useContext, useEffect, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { EQuizActionType, initialState, reducer } from './quizReducer';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { GEOQUIZ_SVG_PATH } from 'constants/endpoints';
import {
  QuizSessionCard,
  QuizSessionCardMedia,
  QuizSessionCardButton,
  modalStyle,
} from './styled';
import { useAuth0 } from '@auth0/auth0-react';
interface IActiveCard {
  country: ICountry;
  options: Array<string>;
}


export const QuizSessionPage = () => {
  const { isAuthenticated, user } = useAuth0();
  const { getQuizConfiguration } = useContext(QuizConfigContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentCard, setCurrentCard] = useState<IActiveCard>();
  const currentConfig = getQuizConfiguration();

  const [sendData, setSendData] = useState(false);

  const fetchCountriesBySubregion = async (subregion: string) => {
    const result = await getCountriesByDataCategory('subregion', subregion);
    return result;
  };

  const fetchFullCountryInformation = async (key: string) => {
    const result = await getCountryByKey(key);
    return result;
  };


  const verifyAnswer = (selectedOption: string) => {
    if (selectedOption === currentCard?.country.name) {
      dispatch({ type: EQuizActionType.CORRECT_ANSWER, payload: state });
    } else {
      dispatch({ type: EQuizActionType.INCORRECT_ANSWER, payload: state });
    }
  };

  //post data to the server when the state is triggered
  useEffect(() => {
    //prevent trigerring on mount
    if (sendData) {
      console.log('Sending data to the server');
      //Score out of a thousand. Punish Incorrect answers more heavily than little time remaining
      if (user && user.email && currentConfig) {
        const userScore: IUserScore = {
          username: user.email,
          quizConfig: currentConfig,
          quizScore: state.finalScore
        };
        const res = postUserScore(userScore);
        console.log('data sent', res);
      }
    }
  }, [sendData]);

  // fetch all countries at the beginning of a quiz session (start quiz)
  useEffect(() => {
    if (currentConfig && currentConfig.region) {
      fetchCountriesBySubregion(currentConfig.region)
        .then((cards) => {
          const shuffledArray = shuffle(cards);
          dispatch({
            type: EQuizActionType.START_QUIZ,
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

  // out of cards implementation (stop the quiz)
  useEffect(() => {
    if (state.index !== 1 && state.index > state.allCards.length) {
      dispatch({ type: EQuizActionType.STOP_QUIZ, payload: state });
      return;
    }
  }, [state.index]);

  // stopwatch implementation
  useEffect(() => {
    if (state.time <= 0 || state.isFinished) {
      dispatch({ type: EQuizActionType.STOP_QUIZ, payload: state });
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
  }, [state.time, state.isFinished]);

  if (!currentConfig) {
    return <Navigate to={QUIZ_SETUP_ROUTE} />;
  }

  if (state.isFinished) {
    return (
      <GenericPageLayout>
        <Modal
          open={state.isFinished}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle} justifyContent="center">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Quiz is finished!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              Your Score is: {state.finalScore.toFixed(2)}
            </Typography>
            <Box display="flex" gap={3} justifyContent="center">
              <Button variant="contained" href={HOMEPAGE_ROUTE} color="secondary">
                HOMEPAGE
              </Button>
              {
                !sendData && isAuthenticated && <Button onClick={() => { setSendData(true); }} variant="contained" color="primary">Record Quiz</Button>
              }
            </Box>
          </Box>
        </Modal>
      </GenericPageLayout>
    );
  }

  return (
    <GenericPageLayout>
      {currentCard ? (
        <Fragment>
          <Grid container columnSpacing={4} justifyContent="right">
            <Grid item>
              <QuizSessionCard>
                <QuizSessionCardMedia
                  image={GEOQUIZ_SVG_PATH(currentCard?.country.flag)}
                />
                <Grid container rowSpacing={2}>
                  <Grid item md={6}>
                    <QuizSessionCardButton
                      variant="contained"
                      color="secondary"
                      onClick={() => verifyAnswer(currentCard?.options[0])}
                    >
                      {currentCard?.options[0]}
                    </QuizSessionCardButton>
                  </Grid>
                  <Grid item md={6}>
                    <QuizSessionCardButton
                      variant="contained"
                      color="secondary"
                      onClick={() => verifyAnswer(currentCard?.options[1])}
                    >
                      {currentCard?.options[1]}
                    </QuizSessionCardButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <QuizSessionCardButton
                      variant="contained"
                      color="secondary"
                      onClick={() => verifyAnswer(currentCard?.options[2])}
                    >
                      {currentCard?.options[2]}
                    </QuizSessionCardButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <QuizSessionCardButton
                      variant="contained"
                      color="secondary"
                      onClick={() => verifyAnswer(currentCard?.options[3])}
                    >
                      {currentCard?.options[3]}
                    </QuizSessionCardButton>
                  </Grid>
                </Grid>
              </QuizSessionCard>
            </Grid>
            <Grid item justifySelf="flex-end">
              <Typography
                fontSize="1.6rem"
                textAlign="left"
                fontWeight="bold"
                fontStyle="italic"
              >
                Cards: {state.index} out of {state.allCards.length}
              </Typography>
              <Typography
                fontSize="1.6rem"
                textAlign="left"
                fontWeight="bold"
                fontStyle="italic"
              >
                Time: {state.time}
              </Typography>
              <Typography
                fontSize="1.6rem"
                textAlign="left"
                fontWeight="bold"
                fontStyle="italic"
              >
                Score: {state.score}
              </Typography>
              <div>{currentCard?.country.name}</div>
            </Grid>
          </Grid>
        </Fragment>
      ) : null}
    </GenericPageLayout>
  );
};
