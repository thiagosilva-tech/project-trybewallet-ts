import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { State } from '../types';
import './Header.css';

function Header() {
  const loginData = useSelector((state: State) => state.user);
  // const walletData = useSelector((state: State) => state.wallet);
  return (
    <>
      <header className="header">
        <h1 className="h1-header">Trybe Wallet</h1>
        <div>
          <p data-testid="email-field">{`Email: ${loginData.email}`}</p>
          <p data-testid="total-field">
            { `Despesa Total: R$ ${0}` }
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
