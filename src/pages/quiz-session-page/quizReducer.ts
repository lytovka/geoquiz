import { TIMER_MAX_COUNT } from 'constants/values';
import { ICountryLookup } from 'interfaces';

export enum EQuizActionType {
  START_QUIZ = 'start_quiz',
  TICK_TIME = 'tick_time',
  STOP_QUIZ = 'stop_quiz',
  CORRECT_ANSWER = 'correct_answer',
  INCORRECT_ANSWER = 'incorrect_answer',
}

interface IQuizGameState {
  activeCard: ICountryLookup | undefined;
  allCards: Array<ICountryLookup>;
  options: Array<string>;
  remainingCards: Array<ICountryLookup>;
  score: number;
  finalScore: number;
  index: number;
  isFinished: boolean;
  time: number;
}

interface IQuizGameAction {
  type: EQuizActionType;
  payload: IQuizGameState;
}

export const initialState: IQuizGameState = {
  activeCard: undefined,
  allCards: [],
  options: [],
  remainingCards: [],
  score: 0,
  finalScore: 0,
  isFinished: false,
  index: 1,
  time: TIMER_MAX_COUNT,
};

export const reducer = (
  currentState: IQuizGameState,
  action: IQuizGameAction
): IQuizGameState => {
  switch (action.type) {
    case EQuizActionType.TICK_TIME: {
      return { ...currentState, time: currentState.time - 1 };
    }

    case EQuizActionType.STOP_QUIZ: {
      const newFinalScore = (1000 * Math.pow(currentState.score / currentState.allCards.length, 3) * (currentState.time / TIMER_MAX_COUNT));
      return { ...currentState, finalScore: newFinalScore, isFinished: true };
    }
    case EQuizActionType.CORRECT_ANSWER: {
      const newRemainingCards = [...action.payload.remainingCards];
      const newActiveCard = newRemainingCards.pop();
      return {
        ...currentState,
        activeCard: newActiveCard,
        remainingCards: newRemainingCards,
        score: currentState.score + 1,
        index: currentState.index + 1,
      };
    }
    case EQuizActionType.INCORRECT_ANSWER: {
      const newRemainingCards = [...action.payload.remainingCards];
      const newActiveCard = newRemainingCards.pop();
      return {
        ...currentState,
        activeCard: newActiveCard,
        remainingCards: newRemainingCards,
        index: currentState.index + 1,
      };
    }
    case EQuizActionType.START_QUIZ: {
      const newRemainingCards = [...action.payload.remainingCards];
      const newActiveCard = newRemainingCards.pop();
      return {
        ...currentState,
        activeCard: newActiveCard,
        remainingCards: newRemainingCards,
        allCards: action.payload.allCards,
        index: 1,
      };
    }
    default:
      return currentState;
  }
};
