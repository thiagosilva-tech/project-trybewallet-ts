import { Expenses } from '../types';

function findCurrencie(expense: Expenses) {
  return expense.exchangeRates[expense.currency];
}

export default findCurrencie;
