import { GenericPageLayout } from 'layouts';
import {
    LeaderboardPageContainer,
    LeaderboardPageHeading,

  } from './styled';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { getDistinctSubregions } from 'api/countries';
import { QuizConfigContext } from 'contexts/QuizConfiguration';
import {
  ICountry,
  IQuizConfiguration,
  quizDifficulty,
  quizType,
} from 'interfaces';
import { FormEvent, useContext, useEffect, useState } from 'react';
import {
  LeaderboardSetupForm,
  LeaderboardSetupSelectControl,
  LeaderboardSetupSubmitButton,
} from './styled';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#c1dbdb',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(name: string, score: number) {
  return { name, score};
}

const data = [
  createData('Sanveer', 452),
  createData('Ivan', 421),
  createData('Vlad', 378),
  createData('Madeed', 359),
  createData('Aaryaman', 356),
];

export const LeaderboardPage = () => {
    const { setQuizConfiguration } = useContext(QuizConfigContext);
    const [regionOptions, setRegionOptions] = useState<Array<ICountry['region']>>(
      []
    );
    const [quizConfiguration, _setQuizConfiguration] =
      useState<IQuizConfiguration>({
        region: '',
        type: '',
        levelOfDifficulty: '',
      });
  
    const isButtonDisabled =
      !quizConfiguration.levelOfDifficulty ||
      !quizConfiguration.region ||
      !quizConfiguration.type;
  
    useEffect(() => {
      const fetchOptions = async () => {
        const res = await getDistinctSubregions();
        setRegionOptions(res);
      };
      fetchOptions();
    }, []);
  
    const handleSelectValue = (
      event: SelectChangeEvent<unknown>,
      key: keyof IQuizConfiguration
    ) => {
      const value = event.target.value as string;
      console.log(event, value);
      const newQuizConfiguration: IQuizConfiguration = {
        ...quizConfiguration,
        [key]: value,
      };
      _setQuizConfiguration(newQuizConfiguration);
    };
  
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setQuizConfiguration(quizConfiguration);
      // console.log(event);
    };
    let rank = 1;
return(
<GenericPageLayout>
    <LeaderboardPageContainer>
    <LeaderboardPageHeading variant="h1" fontSize="2.8rem">
        Leaderboards
      </LeaderboardPageHeading>
      <LeaderboardSetupForm onSubmit={handleFormSubmit}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-type-selection">Quiz Type</InputLabel>
          <LeaderboardSetupSelectControl
            id="quiz-type-selection"
            value={quizConfiguration?.region}
            label="Quiz Type"
            onChange={(e) => handleSelectValue(e, 'region')}
            MenuProps={{
              style: {
                maxHeight: 48 * 4.5,
                maxWidth: 120,
              },
            }}
          >
            {quizType.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </LeaderboardSetupSelectControl>
          <FormHelperText>
            This is the type of quiz you want to view leaderboards for.
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-type-selection">Quiz Difficulty</InputLabel>
          <LeaderboardSetupSelectControl
            id="quiz-type-selection"
            value={quizConfiguration?.type}
            label="Type"
            onChange={(e) => handleSelectValue(e, 'type')}
            MenuProps={{
              style: {
                maxHeight: 48 * 4.5,
                maxWidth: 120,
              },
            }}
          >
            {quizDifficulty.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </LeaderboardSetupSelectControl>
          <FormHelperText>The difficulty of the quiz</FormHelperText>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-difficulty-selection">Quiz Region</InputLabel>
          <LeaderboardSetupSelectControl
            id="quiz-difficulty-selection"
            value={quizConfiguration?.levelOfDifficulty}
            label="Type"
            onChange={(e) => handleSelectValue(e, 'levelOfDifficulty')}
            MenuProps={{
              style: {
                maxHeight: 48 * 4.5,
                maxWidth: 120,
              },
            }}
          >
            {regionOptions.map((regionOption) => (
              <MenuItem key={regionOption} value={regionOption}>
                {regionOption}
              </MenuItem>
            ))}
          </LeaderboardSetupSelectControl>
          <FormHelperText>The quiz region you wish to view leaderboards for.</FormHelperText>
        </FormControl>
        <LeaderboardSetupSubmitButton
          type="submit"
          disabled={isButtonDisabled}
          variant="contained"
          color="secondary"
        >
          View Leaderboards
        </LeaderboardSetupSubmitButton>
      </LeaderboardSetupForm>
    
      <TableContainer sx={{p: 5, maxWidth: 1100}}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{rank++}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </LeaderboardPageContainer>
</GenericPageLayout>
 );
};

