import { GET_WALLET_DATA } from '../actions/walletAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = initialState, action) => {
  switch (type) {
  case GET_WALLET_DATA:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,

    };

  default:
    return state;
  }
};

export default wallet;
