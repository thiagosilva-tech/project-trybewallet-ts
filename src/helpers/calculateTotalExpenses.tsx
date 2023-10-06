import { Expenses } from '../types';
import findCurrencie from './findCurrencie';

function calculateTotalExpenses(expenses: Expenses[]) {
  let total = 0;
  for (let index = 0; index < expenses.length; index += 1) {
    const currencie = findCurrencie(expenses[index]);

    const { value } = expenses[index];
    const numValue = Number(value);
    const numCurrencie = Number(currencie?.ask);
    const numValueWithCurrencie = numValue * numCurrencie;

    total += numValueWithCurrencie;
  }
  return total.toFixed(2);
}
export default calculateTotalExpenses;
