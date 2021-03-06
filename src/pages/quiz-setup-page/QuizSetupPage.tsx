import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { getDistinctSubregions } from 'api/countries';
import { QUIZ_SESSION_ROUTE } from 'constants/routes';
import { QuizConfigContext } from 'contexts/QuizConfiguration';
import {
  ICountry,
  IQuizConfiguration,
  quizDifficulty,
  quizType,
} from 'interfaces';
import { GenericPageLayout } from 'layouts';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  QuizSetupForm,
  QuizSetupSelectControl,
  QuizSetupSubmitButton,
} from './styled';

export const QuizSetupPage = () => {
  const navigate = useNavigate();
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
    navigate(QUIZ_SESSION_ROUTE);
  };

  return (
    <GenericPageLayout>
      <Typography gutterBottom variant="h1" fontSize="2.8rem">
        Quiz setup
      </Typography>
      <QuizSetupForm onSubmit={handleFormSubmit}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-region-selection">Region</InputLabel>
          <QuizSetupSelectControl
            id="quiz-region-selection"
            value={quizConfiguration?.region}
            label="Region"
            onChange={(e) => handleSelectValue(e, 'region')}
            MenuProps={{
              style: {
                maxHeight: 48 * 4.5,
                maxWidth: 120,
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {regionOptions.map((regionOption) => (
              <MenuItem key={regionOption} value={regionOption}>
                {regionOption}
              </MenuItem>
            ))}
          </QuizSetupSelectControl>
          <FormHelperText>
            This is the world subregion you chose to take quiz for
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-type-selection">Type</InputLabel>
          <QuizSetupSelectControl
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
            {quizType.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </QuizSetupSelectControl>
          <FormHelperText>Type of the quiz</FormHelperText>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="quiz-difficulty-selection">Difficulty</InputLabel>
          <QuizSetupSelectControl
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
            {quizDifficulty.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </QuizSetupSelectControl>
          <FormHelperText>Easy - MCQs, Hard - input field</FormHelperText>
        </FormControl>
        <QuizSetupSubmitButton
          type="submit"
          disabled={isButtonDisabled}
          variant="contained"
          color="secondary"
        >
          Take A Quiz
        </QuizSetupSubmitButton>
      </QuizSetupForm>
    </GenericPageLayout>
  );
};
