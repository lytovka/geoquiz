import {
  CardActionArea,
  Collapse,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Grid
} from "@mui/material";
import React, { Fragment } from "react";
import {IAnswerCardProps} from './types';
//DEPRICATED
export const MediaAnswerCard = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correct,
  score
}: IAnswerCardProps): [JSX.Element, number] => {
  const answers = [false, false, false, false];
  answers[correct-1] = true;
  function response(x: boolean, y:number): number {
    if (x) {return y++}
    else return y
  }
  //Alternate version of @AnswerCardProps, can use images instead if given proper name of file in question field
  const ques = question.concat(".svg");
  return [
    <Fragment>
      <Card sx={{ maxWidth: 235, bgcolor: "lightgray", padding: 1, fontFamily:"helvetica", fontWeight:"bold", textAlign:"center" , fontSize:"20px"}}>
        <CardMedia component="img" src={ques} />
        <Grid container spacing={0} gap={1}>
          <Grid container spacing={0} gap={2} sx={{ margin: 2 }}>
            <Card sx={{ maxWidth: 345, bgcolor:"orange", fontFamily:"helvetica" }}>
              <CardActionArea
              onClick={() => response(answers[0], score)}>
                <CardContent>
                  <Typography sx={{ fontFamily:"helvetica"}}>{answer1}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea
              onClick={() => response(answers[1], score)}>
                <CardContent>
                  <Typography>{answer2}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid container spacing={0} gap={2} sx={{ ml: 2, mb: 2, mr: 2 }}>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea
              onClick={() => response(answers[2], score)}>
                <CardContent>
                  <Typography>{answer3}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea
              onClick={() => response(answers[3], score)}>
                <CardContent>
                  <Typography>{answer4}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  , score]
};