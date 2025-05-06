import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoanProvider } from './contexts/LoanContext';
import Header from './pages/Header';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';

import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <LoanProvider>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            
            <Route path="/error" element={<ErrorPage />} />
           
          </Routes>
        </LoanProvider>
      </ThemeProvider>
    </Router>
  );
}
