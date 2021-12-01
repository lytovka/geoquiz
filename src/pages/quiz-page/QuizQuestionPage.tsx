import { AnswerCard } from "components/answer-card";
import {Grid} from '@mui/material';
 
//DEPRICATED
const score = 0;
//not sure how to write this properly
const q1 = <AnswerCard question="What is the Capital of Belarus?" answer1="Minsk" answer2="Paris" answer3="Ottawa" answer4="Cyprus" score={score} correct={1}/>
export const QuizQuestionPage = () => {
    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center">
            {q1}
        </Grid>
    )
}