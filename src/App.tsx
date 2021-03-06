import { Routes, Route } from 'react-router-dom';
import { CountryPage, HomePage, QuizSetupPage, WikiPage } from 'pages';
import {
  HOMEPAGE_ROUTE,
  QUIZ_SESSION_ROUTE,
  QUIZ_SETUP_ROUTE,
  WIKI_PAGE_ROUTE,
  WIKI_ROUTE,
} from 'constants/routes';
import { QuizSessionPage } from 'pages/quiz-session-page';

const App = () => {
  return (
    <div className="App" data-testid="app-test">
      <Routes>
        <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={WIKI_ROUTE} element={<WikiPage />} />
        <Route path={WIKI_PAGE_ROUTE} element={<CountryPage />} />
        <Route path={QUIZ_SETUP_ROUTE} element={<QuizSetupPage />} />
        <Route path={QUIZ_SESSION_ROUTE} element={<QuizSessionPage />} />
      </Routes>
    </div>
  );
};

export default App;
