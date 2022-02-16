import { GET_CURRENCY } from '../actions/ExpensesAction';
import { FAILED_REQUEST, GET_COINS, REQUEST_COINS } from '../actions/walletAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  total: 0,
  currencies: [],
  expenses: [],
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
  case GET_CURRENCY: // Ajuda do monitor Rod (chave id) /Instrutor Giovanni (chave total)
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
      total: state.total + action.payload.value * action
        .payload.exchangeRates[action.payload.currency].ask,
    };

  default:
    return state;
  }
};

// currencies: action.payload.currencies,
// expenses: action.payload.expenses,

export default wallet;
