import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, WikiPage, TestPage } from 'pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<WikiPage />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
