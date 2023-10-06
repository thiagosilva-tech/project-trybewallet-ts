import { Expenses } from '../types';
import findCurrencie from './findCurrencie';

function calculateExpense(expense: Expenses) {
  const currencie = findCurrencie(expense);
  const { value } = expense;
  const numValue = Number(value);
  const numCurrencie = Number(currencie?.ask);
  const numValueWithCurrencie = numValue * numCurrencie;
  return numValueWithCurrencie.toFixed(2);
}

export default calculateExpense;
