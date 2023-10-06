import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { State } from '../types';
import './Header.css';
import calculateTotalExpenses from '../helpers/calculateTotalExpenses';

function Header() {
  const loginData = useSelector((state: State) => state.user);
  const { expenses } = useSelector((state: State) => state.wallet);
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
