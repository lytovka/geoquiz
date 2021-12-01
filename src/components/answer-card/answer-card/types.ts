import {CardProps} from '@mui/material';
//DEPRICATED
export interface IAnswerCardProps extends CardProps {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correct: number;
    score: number;
}