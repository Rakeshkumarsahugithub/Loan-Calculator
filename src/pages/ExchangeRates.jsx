import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useContext } from 'react';
import { LoanContext } from '../contexts/LoanContext';

export default function ExchangeRates() {
  const { currency } = useContext(LoanContext);
  const {
    rates,
    loading,
    error,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = useExchangeRates('20bf16e0552a9d26244ddb8c'); 
  
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates (Base: {currency})
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rate) => (
                <TableRow key={rate.currency}>
                  <TableCell>{rate.currency}</TableCell>
                  <TableCell align="right">{rate.rate.toFixed(4)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rates.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}