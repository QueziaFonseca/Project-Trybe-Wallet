// Coloque aqui suas actions

export const REQUEST_COINS = 'REQUEST_COINS';
export const GET_COINS = 'GET_COINS';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getCoins(data) {
  return {
    type: GET_COINS,
    payload: data,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function requestCoins() {
  return {
    type: REQUEST_COINS,
  };
}

export function fetchCoinsAction() {
  return async (dispatch) => {
    dispatch(requestCoins());

    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(getCoins(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
