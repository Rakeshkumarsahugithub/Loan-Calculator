import { useCallback } from 'react';

export function useEMICalculation() {
  const calculateEMI = useCallback((principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
  }, []);

  const generateSchedule = useCallback((principal, annualRate, years, emi) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    let balance = principal;
    const schedule = [];
    
    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;
      
      schedule.push({
        month: i,
        principal: principalPayment,
        interest: interest,
        balance: balance > 0 ? balance : 0
      });
    }
    
    return schedule;
  }, []);

  return { calculateEMI, generateSchedule };
}