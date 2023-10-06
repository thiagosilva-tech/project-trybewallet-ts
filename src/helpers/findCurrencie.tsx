import { Expenses } from '../types';

function findCurrencie(expense: Expenses) {
  const currencie = expense.exchangeRates
    .find((rate) => rate.code === expense.currency);

  return currencie;
}

export default findCurrencie;
