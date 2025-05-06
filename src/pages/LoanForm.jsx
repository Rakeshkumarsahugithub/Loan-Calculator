// import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
// import { LoanContext } from '../contexts/LoanContext';
// import { useContext } from 'react';
// import { useEMICalculation } from '../hooks/useEMICalculation';

// export default function LoanForm() {
//   const { 
//     loanAmount, setLoanAmount,
//     interestRate, setInterestRate,
//     loanTerm, setLoanTerm,
//     setEmi, setSchedule
//   } = useContext(LoanContext);
  
//   const { calculateEMI, generateSchedule } = useEMICalculation();
  
//   const handleCalculate = () => {
//     const emi = calculateEMI(loanAmount, interestRate, loanTerm);
//     const schedule = generateSchedule(loanAmount, interestRate, loanTerm, emi);
//     setEmi(emi);
//     setSchedule(schedule);
//   };
  
// //   const handleReset = () => {
// //     setLoanAmount(100000);
// //     setInterestRate(8.5);
// //     setLoanTerm(5);
// //     setEmi(0);
// //     setSchedule([]);
// //   };
  
//   return (
//     <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//       <Typography variant="h6" gutterBottom>Loan Calculator Dashboard</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Loan Amount"
//             type="number"
//             fullWidth
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Interest Rate (%)"
//             type="number"
//             fullWidth
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Term (Years)"
//             type="number"
//             fullWidth
//             value={loanTerm}
//             onChange={(e) => setLoanTerm(Number(e.target.value))}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             fullWidth
//             onClick={handleCalculate}
//           >
//             Calculate
//           </Button>
//         </Grid>
//         {/* <Grid item xs={6}>
//           <Button 
//             variant="outlined" 
//             color="secondary" 
//             fullWidth
//             onClick={handleReset}
//           >
//             Reset
//           </Button>
//         </Grid> */}
//       </Grid>
//     </Paper>
//   );
// }

import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { LoanContext } from '../contexts/LoanContext';
import { useContext } from 'react';
import { useEMICalculation } from '../hooks/useEMICalculation';

export default function LoanForm() {
  const { 
    loanAmount, setLoanAmount,
    interestRate, setInterestRate,
    loanTerm, setLoanTerm,
    setEmi, setSchedule
  } = useContext(LoanContext);
  
  const { calculateEMI, generateSchedule } = useEMICalculation();
  
  const handleCalculate = () => {
    const emi = calculateEMI(loanAmount, interestRate, loanTerm);
    const schedule = generateSchedule(loanAmount, interestRate, loanTerm, emi);
    setEmi(emi);
    setSchedule(schedule);
  };
  
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Loan Calculator Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Loan Amount"
            type="number"
            fullWidth
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            fullWidth
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Term (Years)"
            type="number"
            fullWidth
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={handleCalculate}
            sx={{ py: 1.5, fontWeight: 'bold' }}
          >
            CALCULATE
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}