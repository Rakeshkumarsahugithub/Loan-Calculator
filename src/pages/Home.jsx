import { Container } from '@mui/material';
import LoanForm from './LoanForm';
import AmortizationTable from './AmortizationTable';


export default function Home() {
  return (
    <Container maxWidth="md">
      <LoanForm />
      <AmortizationTable />
    
    </Container>
  );
}