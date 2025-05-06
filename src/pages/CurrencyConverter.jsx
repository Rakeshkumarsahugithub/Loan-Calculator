// import { 
//     Grid, 
//     Typography, 
//     Paper, 
//     MenuItem, 
//     Select, 
//     Button,
//     Box 
//   } from '@mui/material';
//   import { useContext, useState, useEffect } from 'react';
//   import { LoanContext } from '../contexts/LoanContext';
//   import axios from 'axios';
  
//   const popularCurrencies = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];
  
//   export default function CurrencyConverter() {
//     const { emi, currency, setCurrency, convertedEmi, setConvertedEmi } = useContext(LoanContext);
//     const [rates, setRates] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       if (emi > 0) {
//         fetchExchangeRates();
//       }
//     }, []);
  
//     useEffect(() => {
//       if (emi > 0 && rates[currency]) {
//         const convertedValue = emi * rates[currency];
//         setConvertedEmi(convertedValue);
//       }
//     }, [currency, emi, rates, setConvertedEmi]);
  
//     const fetchExchangeRates = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get(
//           `https://v6.exchangerate-api.com/v6/20bf16e0552a9d26244ddb8c/latest/USD`
//         );
//         setRates(response.data.conversion_rates);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch exchange rates');
//         setLoading(false);
//         console.error('Exchange rate API error:', err);
//       }
//     };
  
//     const handleCurrencyChange = (e) => {
//       setCurrency(e.target.value);
//     };
  
//     const handleReset = () => {
//       setCurrency('USD');
//     };
  
//     if (!emi || emi <= 0) return null;
  
//     return (
//       <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Currency Conversion
//         </Typography>
  
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="body1">
//               Convert EMI from USD to:
//             </Typography>
//             <Select
//               value={currency}
//               onChange={handleCurrencyChange}
//               fullWidth
//               disabled={loading || error}
//               sx={{ mt: 1 }}
//             >
//               {popularCurrencies.map((curr) => (
//                 <MenuItem key={curr} value={curr}>
//                   {curr}
//                 </MenuItem>
//               ))}
//             </Select>
//           </Grid>
  
//           <Grid item xs={12} sm={6}>
//             <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//               {loading ? (
//                 <Typography>Loading rates...</Typography>
//               ) : error ? (
//                 <Typography color="error">{error}</Typography>
//               ) : (
//                 <Typography variant="body1">
//                   Converted EMI: {(convertedEmi || emi).toFixed(2)} {currency}
//                 </Typography>
//               )}
//             </Box>
//           </Grid>
//         </Grid>
  
//         <Box sx={{ mt: 2, textAlign: 'right' }}>
//           <Button 
//             variant="outlined" 
//             onClick={handleReset}
//             disabled={loading}
//           >
//             RESET TABLE
//           </Button>
//         </Box>
//       </Paper>
//     );
//   }

import { 
    Box, 
    Typography, 
    Select, 
    MenuItem, 
    Button,
    Paper
  } from '@mui/material';
  import { useContext, useEffect, useState } from 'react';
  import { LoanContext } from '../contexts/LoanContext';
  import axios from 'axios';
  
  const popularCurrencies = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];
  
  export default function CurrencyConverter() {
    const { emi, currency, setCurrency, convertedEmi, setConvertedEmi, resetLoanData } = useContext(LoanContext);
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (emi > 0) {
        fetchExchangeRates();
      }
    }, [emi]);
  
    useEffect(() => {
      if (emi > 0 && rates[currency]) {
        const convertedValue = emi * rates[currency];
        setConvertedEmi(convertedValue);
      }
    }, [currency, emi, rates, setConvertedEmi]);
  
    const fetchExchangeRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/20bf16e0552a9d26244ddb8c/latest/USD`
        );
        setRates(response.data.conversion_rates);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        setLoading(false);
        console.error('Exchange rate API error:', err);
      }
    };
  
    const handleCurrencyChange = (e) => {
      setCurrency(e.target.value);
    };
  
    const handleReset = () => {
      // Call resetLoanData to reset all states including the schedule
      resetLoanData();
    };
  
    if (!emi || emi <= 0) return null;
  
    return (
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}>
          {/* Monthly EMI Display */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Monthly EMI: {currency} {(convertedEmi || emi).toFixed(2)}
          </Typography>
  
          {/* Currency Dropdown and Reset Button Container */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 2
          }}>
            {/* Currency Dropdown */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ mr: 1 }}>Currency:</Typography>
              <Select
                value={currency}
                onChange={handleCurrencyChange}
                size="small"
                disabled={loading || error}
                sx={{ minWidth: 100 }}
              >
                {popularCurrencies.map((curr) => (
                  <MenuItem key={curr} value={curr}>{curr}</MenuItem>
                ))}
              </Select>
            </Box>
  
            {/* Reset Table Button */}
            <Button 
              variant="outlined" 
              onClick={handleReset}
              disabled={loading}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold'
              }}
            >
              RESET TABLE
            </Button>
          </Box>
        </Box>
  
        {/* Loading/Error States */}
        {loading && (
          <Typography sx={{ mt: 1 }}>Loading rates...</Typography>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>
        )}
      </Paper>
    );
  }
  
  