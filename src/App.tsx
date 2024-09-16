import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Tourism from './pages/Tourism.tsx';
import HistoryOfCity from './pages/HistoryOfCity.tsx';
import CultureAndTraditions from './pages/CultureAndTraditions.tsx';
import './App.css';
import Layout from './components/Layout.tsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history-of-city' element={<HistoryOfCity />} />
          <Route path='/tourism' element={<Tourism />} />
          <Route
            path='/culture-and-traditions'
            element={<CultureAndTraditions />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
