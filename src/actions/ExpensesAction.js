// Coloque aqui suas actions

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getCurrency(data) {
  return {
    type: GET_CURRENCY,
    payload: data,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function requestCurrency() {
  return {
    type: REQUEST_CURRENCY,
  };
}

export function fetchCurrencyAction(state) {
  return async (dispatch) => {
    dispatch(requestCurrency());

    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      state.exchangeRates = data;
      return dispatch(getCurrency(state));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
