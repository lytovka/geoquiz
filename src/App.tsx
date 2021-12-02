import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CountryPage, HomePage, QuizSetupPage, WikiPage} from 'pages';
import { LeaderboardPage } from 'pages/leaderboard-page';
import {
  HOMEPAGE_ROUTE,
  QUIZ_SETUP_ROUTE,
  WIKI_PAGE_ROUTE,
  WIKI_ROUTE,
  LEADER_BOARD_ROUTE
} from 'constants/routes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={WIKI_ROUTE} element={<WikiPage />} />
        <Route path={WIKI_PAGE_ROUTE} element={<CountryPage />} />
        <Route path={QUIZ_SETUP_ROUTE} element={<QuizSetupPage />} />
        <Route path={LEADER_BOARD_ROUTE} element={<LeaderboardPage />} />
      </Routes>
    </div>
  );
};

export default App;
