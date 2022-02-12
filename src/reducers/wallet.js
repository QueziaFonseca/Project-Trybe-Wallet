import { FAILED_REQUEST, GET_COINS, REQUEST_COINS } from '../actions/walletAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  loading: false,
  error: '',
  coins: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return {
      ...state,
      loading: true,
    };

  case GET_COINS:
    return {
      ...state,
      coins: action.payload,
      loading: false,
      error: '',
    };

  case FAILED_REQUEST:
    return {
      ...state,
      loading: false,
      error: 'DEU RUIM NA API',
    };

  default:
    return state;
  }
};

export default wallet;

// currencies: action.payload.currencies,
// expenses: action.payload.expenses,
