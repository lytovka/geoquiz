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

export const MediaAnswerCard = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correct
}: IAnswerCardProps): JSX.Element => {
  //const [answerID, setAnswerID] = React.useState(-1);
  //const answers = [{ _id: "1" }, { _id: "2" }, { _id: "3" }, { _id: "4" }];
  //Alternate version of @AnswerCardProps, can use images instead if given proper name of file in question field
  const ques = question.concat(".svg");
  return (
    <Fragment>
      <Card sx={{ maxWidth: 235, bgcolor: "lightgray", padding: 1, fontFamily:"helvetica", fontWeight:"bold", textAlign:"center" , fontSize:"20px"}}>
        <CardMedia component="img" src={ques} />
        <Grid container spacing={0} gap={1}>
          <Grid container spacing={0} gap={2} sx={{ margin: 2 }}>
            <Card sx={{ maxWidth: 345, bgcolor:"orange", fontFamily:"helvetica" }}>
              <CardActionArea>
                <CardContent>
                  <Typography sx={{ fontFamily:"helvetica"}}>{answer1}</Typography>
                  <Collapse>
                    <CardContent>{correct}</CardContent>
                  </Collapse>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea>
                <CardContent>
                  <Typography>{answer2}</Typography>
                  <Collapse>
                    <CardContent>{correct}</CardContent>
                  </Collapse>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid container spacing={0} gap={2} sx={{ ml: 2, mb: 2, mr: 2 }}>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea>
                <CardContent>
                  <Typography>{answer3}</Typography>
                  <Collapse>
                    <CardContent>{correct}</CardContent>
                  </Collapse>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea>
                <CardContent>
                  <Typography>{answer4}</Typography>
                  <Collapse>
                    <CardContent>{correct}</CardContent>
                  </Collapse>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
};
