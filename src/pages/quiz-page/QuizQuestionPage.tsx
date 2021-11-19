import { AnswerCard } from "components/answer-card";
import {Grid} from '@mui/material';
  
export const QuizQuestionPage = () => {
    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center">
            <AnswerCard question="What is the Capital of Belarus?" answer1="Minsk" answer2="Paris" answer3="Ottawa" answer4="Cyprus" correct="ynnn"/>
        </Grid>
    )
}