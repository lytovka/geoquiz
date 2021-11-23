import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CountryPage, HomePage, WikiPage } from 'pages';
import { HOMEPAGE_ROUTE, WIKI_PAGE_ROUTE, WIKI_ROUTE } from 'constants/routes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={WIKI_ROUTE} element={<WikiPage />} />
        <Route path={WIKI_PAGE_ROUTE} element={<CountryPage />} />
      </Routes>
    </div>
  );
};

export default App;
