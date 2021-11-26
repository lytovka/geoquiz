import { ICountry } from './Countries';

export const quizDifficulty = ['', 'Easy', 'Hard'] as const;
export const quizType = ['', 'Flags', 'Locations'] as const;

export type QuizDifficulty = typeof quizDifficulty[number];
export type QuizType = typeof quizType[number];

export interface IQuizConfiguration {
  levelOfDifficulty?: QuizDifficulty;
  region?: ICountry['region'];
  type?: QuizType;
}
