import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage';
import BuyingPage from './pages/BuyingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buying/1" element={<BuyingPage />} />
    </Routes>
  </Router>
);

export default App;