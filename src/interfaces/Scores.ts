import { IQuizConfiguration } from './QuizSetup';

export interface IUserScore {
    username: string;
    quizConfig: IQuizConfiguration;
    quizScore: number;
}

export interface IUserScoreNoConfig {
    username: string;
    quizScore: number;
}