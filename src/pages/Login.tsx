import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitLogin } from '../redux/actions';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setLogin({ ...login, [targetName]: value });
  };

  return (
    <div className="container">
      <form
        className="form-login"
        onSubmit={ (e) => {
          e.preventDefault();
          dispatch(submitLogin(login.email));
          navigate('/carteira');
        } }
      >
        <h1 className="h1-login">Trybe Wallet</h1>
        <input
          className="input-email"
          type="email"
          name="email"
          placeholder="teste@teste.com"
          value={ login.email }
          id="email-input"
          onChange={ handleChange }
          data-testid="email-input"
        />
        <input
          className="input-password"
          type="password"
          name="password"
          placeholder="senha"
          value={ login.password }
          id="password-input"
          onChange={ handleChange }
          data-testid="password-input"
        />
        <button
          className="btn"
          type="submit"
          disabled={ !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.email) && login.password.length >= 6) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
