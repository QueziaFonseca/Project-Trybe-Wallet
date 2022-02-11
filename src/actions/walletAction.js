// Coloque aqui suas actions
export const GET_WALLET_DATA = 'GET_WALLET_DATA';

export function getWallet(payload) {
  return {
    type: GET_WALLET_DATA,
    payload,
  };
}
