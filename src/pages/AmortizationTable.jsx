import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { LoanContext } from '../contexts/LoanContext';
import { useContext } from 'react';
import CurrencyConverter from './CurrencyConverter';

export default function AmortizationTable() {
  const { emi, schedule, currency } = useContext(LoanContext);
  
  if (!emi || schedule.length === 0) return null;
  
  return (
    <>
<CurrencyConverter/>
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Amortization Schedule ({currency})
      </Typography>
      
      <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Principal</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Interest</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.principal.toFixed(2)} {currency}</TableCell>
                  <TableCell>{row.interest.toFixed(2)} {currency}</TableCell>
                  <TableCell>{row.balance.toFixed(2)} {currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Paper>
    </>
  );
}




// import { 
//     Table, 
//     TableBody, 
//     TableCell, 
//     TableContainer, 
//     TableHead, 
//     TableRow, 
//     Paper, 
//     Typography,
//     Box,
//     Button,
//     Divider
//   } from '@mui/material';
//   import { LoanContext } from '../contexts/LoanContext';
//   import { useContext } from 'react';
  
//   export default function AmortizationTable() {
//     const { emi, schedule, currency } = useContext(LoanContext);
    
//     if (!emi || schedule.length === 0) return null;
    
//     return (
//       <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           mb: 2
//         }}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             Monthly EMI: {currency} {emi.toFixed(2)}
//           </Typography>
          
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Typography variant="body1" sx={{ mr: 2 }}>
//               Currency: {currency}
//             </Typography>
//             <Button 
//               variant="outlined" 
//               color="secondary"
//               sx={{ fontWeight: 'bold' }}
//             >
//               RESET TABLE
//             </Button>
//           </Box>
//         </Box>
        
//         <Divider sx={{ my: 2 }} />
        
//         <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Amortization Schedule ({currency})
//         </Typography>
        
        // <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: 'auto' }}>
        //   <Table stickyHeader>
        //     <TableHead>
        //       <TableRow>
        //         <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
        //         <TableCell sx={{ fontWeight: 'bold' }}>Principal</TableCell>
        //         <TableCell sx={{ fontWeight: 'bold' }}>Interest</TableCell>
        //         <TableCell sx={{ fontWeight: 'bold' }}>Remaining Balance</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {schedule.map((row) => (
        //         <TableRow key={row.month}>
        //           <TableCell>{row.month}</TableCell>
        //           <TableCell>{row.principal.toFixed(2)} {currency}</TableCell>
        //           <TableCell>{row.interest.toFixed(2)} {currency}</TableCell>
        //           <TableCell>{row.balance.toFixed(2)} {currency}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
//       </Paper>
//     );
//   }