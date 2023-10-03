import { WalletData } from '../../types';

// Coloque aqui suas actions
export const SUBMIT_LOGIN_DATA = 'SUBMIT_LOGIN_DATA';

export function submitLogin(emailData: string) {
  return {
    type: SUBMIT_LOGIN_DATA,
    payload: emailData,
  };
}

export const SUBMIT_WALLET_DATA = 'SUBMIT_WALLET_DATA';

export function submitWallet(walletData: WalletData) {
  return {
    type: SUBMIT_LOGIN_DATA,
    payload: walletData,
  };
}
