import { TIMER_MAX_COUNT } from 'constants/values';
import { ICountryLookup } from 'interfaces';

export enum EQuizActionType {
  POP_ITEM = 'pop',
  TICK_TIME = 'tick_time',
  STOP_TIME = 'stop_time',
  INCREMENT_SCORE = 'increment_score',
  INITIALIZE = 'initialize',
}

interface IQuizGameState {
  activeCard: ICountryLookup | undefined;
  allCards: Array<ICountryLookup>;
  options: Array<string>;
  remainingCards: Array<ICountryLookup>;
  score: number;
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
    case EQuizActionType.STOP_TIME: {
      return { ...currentState, time: 0 };
    }
    case EQuizActionType.INCREMENT_SCORE: {
      const newRemainingCards = [...action.payload.remainingCards];
      const newActiveCard = newRemainingCards.pop();
      return {
        ...currentState,
        activeCard: newActiveCard,
        remainingCards: newRemainingCards,
        score: currentState.score + 1,
      };
    }
    case EQuizActionType.POP_ITEM: {
      console.log('reducer', action);
      const newRemainingCards = [...action.payload.remainingCards];
      const newActiveCard = newRemainingCards.pop();
      return {
        ...currentState,
        activeCard: newActiveCard,
        remainingCards: newRemainingCards,
        allCards: action.payload.allCards,
      };
    }
    default:
      return currentState;
  }
};
