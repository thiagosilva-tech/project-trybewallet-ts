import { useState } from 'react';

import './WalletForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, State } from '../types';
import { fetchCurrenciesThunk } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'dinheiro',
  tag: 'alimentacao',
  exchangeRates: {},
};

function WalletForm() {
  const [walletForm, setWalletForm] = useState(INITIAL_STATE);
  const walletData = useSelector((state: State) => state.wallet);
  const dispatch: Dispatch = useDispatch();

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setWalletForm({
      ...walletForm,
      [targetName]: value,
      id: walletData.expenses.length === 0 ? 0 : walletData.expenses.length,
    });
  };

  return (
    <form
      className="form-wallet"
      onSubmit={ (e) => {
        e.preventDefault();
        dispatch(fetchCurrenciesThunk(walletForm));
        setWalletForm(INITIAL_STATE);
      } }
    >
      <label htmlFor="value">
        Valor:
        <input
          className="input-form"
          id="value"
          name="value"
          value={ walletForm.value }
          type="number"
          onChange={ handleChange }
          data-testid="value-input"
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          className="input-form"
          id="description"
          name="description"
          value={ walletForm.description }
          type="text"
          onChange={ handleChange }
          data-testid="description-input"
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select
          className="input-form"
          id="currency"
          name="currency"
          value={ walletForm.currency }
          onChange={ handleChange }
          data-testid="currency-input"
        >
          {walletData.currencies
            .map((code) => (<option key={ code } value={ code }>{code}</option>))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento:
        <select
          className="input-form"
          id="method"
          name="method"
          value={ walletForm.method }
          onChange={ handleChange }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Categoria:
        <select
          className="input-form"
          id="tag"
          name="tag"
          value={ walletForm.tag }
          onChange={ handleChange }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button
        type="submit"
        className="btn"
      >
        Adicionar Despesa
      </button>
    </form>
  );
}

export default WalletForm;
