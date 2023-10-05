import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Expenses, State } from '../types';
import './Header.css';

function calculateTotalExpenses(expenses: Expenses[]) {
  let total = 0;
  for (let index = 0; index < expenses.length; index += 1) {
    const currencie = expenses[index].exchangeRates
      .find((rate) => rate.code === expenses[index].currency)?.ask;
    const { value } = expenses[index];
    const numValue = Number(value);
    const numCurrencie = Number(currencie);
    const numValueWithCurrencie = numValue * numCurrencie;
    total += numValueWithCurrencie;
  }
  return total;
}

function Header() {
  const loginData = useSelector((state: State) => state.user);
  const expenses = useSelector((state: State) => state.wallet.expenses);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotalExpenses = calculateTotalExpenses(expenses);
    setTotal(newTotalExpenses);
  }, [expenses]);

  return (
    <>
      <header className="header">
        <h1 className="h1-header">Trybe Wallet</h1>
        <div>
          <p data-testid="email-field">{`Email: ${loginData.email}`}</p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field">{total.toFixed(2)}</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
