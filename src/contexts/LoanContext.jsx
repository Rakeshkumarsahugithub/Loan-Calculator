// import { createContext, useState } from 'react';

// export const LoanContext = createContext();

// export function LoanProvider({ children }) {
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [loanTerm, setLoanTerm] = useState(5);
//   const [emi, setEmi] = useState(0);
//   const [schedule, setSchedule] = useState([]);
//   const [currency, setCurrency] = useState('USD');
//   const [convertedEmi, setConvertedEmi] = useState(0);
  
//   return (
//     <LoanContext.Provider value={{
//       loanAmount, setLoanAmount,
//       interestRate, setInterestRate,
//       loanTerm, setLoanTerm,
//       emi, setEmi,
//       schedule, setSchedule,
//       currency, setCurrency,
//       convertedEmi, setConvertedEmi
//     }}>
//       {children}
//     </LoanContext.Provider>
//   );
// }


// src/contexts/LoanContext.jsx
import { createContext, useState } from 'react';

export const LoanContext = createContext();

export function LoanProvider({ children }) {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [convertedEmi, setConvertedEmi] = useState(0);
  
  // Function to reset loan data and schedule
  const resetLoanData = () => {
    setLoanAmount(100000);  // Reset to initial loan amount
    setInterestRate(8.5);  // Reset to initial interest rate
    setLoanTerm(5);  // Reset to initial loan term
    setEmi(0);  // Reset EMI
    setSchedule([]);  // Clear schedule
    setCurrency('USD');  // Reset currency to USD
    setConvertedEmi(0);  // Reset converted EMI
  };

  return (
    <LoanContext.Provider value={{
      loanAmount, setLoanAmount,
      interestRate, setInterestRate,
      loanTerm, setLoanTerm,
      emi, setEmi,
      schedule, setSchedule,
      currency, setCurrency,
      convertedEmi, setConvertedEmi,
      resetLoanData // Expose reset function
    }}>
      {children}
    </LoanContext.Provider>
  );
}
