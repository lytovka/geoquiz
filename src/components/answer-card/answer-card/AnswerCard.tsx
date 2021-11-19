import {
  CardActionArea,
  Collapse,
  Typography,
  CardContent,
  Card,
  Grid
} from "@mui/material";
import React, { Fragment } from "react";
import { IAnswerCardProps } from './types'

export const AnswerCard = ({ question, answer1, answer2, answer3, answer4, correct }: IAnswerCardProps): JSX.Element => {
  //old code from testing expading, could be useful for detection system
  //const [answerID, setAnswerID] = React.useState(-1);
  //const answers = [{ _id: "1" }, { _id: "2" }, { _id: "3" }, { _id: "4" }];
  //need to implement a detection system for correct answers, currently just says 'y' or 'n'
  return (
    <Fragment>
      <Card sx={{ maxWidth: 235, bgcolor: "lightgray", padding: 1, fontFamily:"helvetica", fontWeight:"bold", textAlign:"center" , fontSize:"20px"}}>
        {question}
        <Grid container spacing={0} gap={1}>
          <Grid container spacing={0} gap={2} sx={{ margin: 2 }}>
            <Card sx={{ maxWidth: 345, bgcolor:"orange" }}>
              <CardActionArea>
                <CardContent>
                  <Typography>{answer1}</Typography>
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