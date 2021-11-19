import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, WikiPage } from 'pages';
import { HOMEPAGE_ROUTE, WIKI_ROUTE } from 'constants/routes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={WIKI_ROUTE} element={<WikiPage />} />
      </Routes>
    </div>
  );
};

export default App;
