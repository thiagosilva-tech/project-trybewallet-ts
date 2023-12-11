import { fireEvent, screen } from '@testing-library/react';

import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa a pagina home', () => {
  test('A página deve renderizar um titulo, um botão e dois inputs.', () => {
    renderWithRouterAndRedux(<App />);

    const title = screen.getByRole('heading', { name: /trybe wallet/i });
    const button = screen.getByRole('button');
    const inputEmail = screen.getByRole('textbox');
    const inputSenha = screen.getByTestId('password-input');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
  });
  test('O botão so deve ficar ativo quando os dois inputs estiverem corretos.', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByRole('textbox') as HTMLInputElement;
    const inputSenha = screen.getByTestId('password-input') as HTMLInputElement;

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456' } });

    expect(inputEmail.value).toBe('teste@teste.com');
    expect(inputSenha.value).toBe('123456');

    const button = screen.getByRole('button');

    expect(button).not.toHaveAttribute('disabled');
  });
  test('O botão fica desativado caso o email não seja um email ou a senha seja menor que 6.', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByRole('textbox') as HTMLInputElement;
    const inputSenha = screen.getByTestId('password-input') as HTMLInputElement;
    const button = screen.getByRole('button');

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputSenha, { target: { value: '12345' } });
    expect(button).toHaveAttribute('disabled');

    fireEvent.change(inputEmail, { target: { value: 'testeteste.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456' } });
    expect(button).toHaveAttribute('disabled');
  });
  test('Testa se tudo estiver certo apos clicar no botão ele salva no store e navega para pagina /carteira', () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByRole('textbox') as HTMLInputElement;
    const inputSenha = screen.getByTestId('password-input') as HTMLInputElement;
    const button = screen.getByRole('button');

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputSenha, { target: { value: '123456' } });
    fireEvent.click(button);

    // const storeData = store.getState();
    // expect(storeData.);
    // expect(history)
  });
});
