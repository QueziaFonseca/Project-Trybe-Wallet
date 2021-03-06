import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoinsAction } from '../actions/walletAction';
import { fetchCurrencyAction } from '../actions/ExpensesAction';
import '../css/WalletForm.css';
// 4) botão despesas
// 1) salvar as informações da despesa no estado globa[WalletForm]
// atualizar a soma das despesas no [header]

// função handle click:
/* DESPESA
    - id da despesa --> index do map
    - cotação do cambio (exchangeRates) --> API , chave "ask"?
    -Apos adicionar despesa limpeo valor do campo valor da despesa

  SOMA TOTAL DESPESA   !!! fazer no HEADER !!!!
  - atualizar depois adicionar uma despesa
  - usar chave ask pra fazer a soma
  -

*/

class WalletForm extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);
    this.handleClik = this.handleClik.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
      coins: [], // cotação do cambio
    };
  }

  async componentDidMount() {
    const { fetchCoinsApi } = this.props;
    await fetchCoinsApi();
  }

  // Referência: Mentoria de Revisão Redux, ministrada pelo Instrutor Ander Souza Santana
  componentDidUpdate() {
    this.updateLocalState();
  }

  onInputChange({ target }) { // 2.2)
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClik() {
    console.log('entroooou');
    const { fetchCurrencyApi } = this.props;
    const { currency, description, exchangeRates, method, tag, value } = this.state;
    fetchCurrencyApi({ currency, description, exchangeRates, method, tag, value });
    this.setState({
      value: '',
    });
  }

  updateLocalState() {
    const { coinsOptions } = this.props;
    const coinsOptionsArray = Object.keys(coinsOptions);
    const { coins } = this.state;
    if (coinsOptionsArray && coins.length === 0) {
      this.setState({
        coins: coinsOptionsArray,
      });
    }
  }

  render() {
    const { value, currency, method, tag, description, coins } = this.state;
    // console.log(this.state);

    return (

      <section>

        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              className="input"
              data-testid="value-input"
              id="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição da despesa
            <input
              className="input"
              data-testid="description-input"
              id="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="currency-input">
            moeda
            <select
              className="input"
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.onInputChange }
            >
              { coins.filter((coin) => coin !== 'USDT')
                .map((coin) => (
                  <option
                    key={ coin }
                    data-testid={ coin }
                  >
                    { coin }
                  </option>))}
            </select>
          </label>

          <label htmlFor="method-input">
            Método de Pagamento
            <select
              className="input"
              data-testid="method-input"
              id="method-input"
              name="method"
              value={ method }
              onChange={ this.onInputChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria
            <select
              className="input"
              data-testid="tag-input"
              id="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.onInputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            className=" form-button"
            data-testid="lexpense-button"
            type="button"
            onClick={ this.handleClik }
          >
            Adicionar despesa
          </button>

        </form>
      </section>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsApi: () => dispatch(fetchCoinsAction()),
  fetchCurrencyApi: (state) => dispatch(fetchCurrencyAction(state)),
});

const mapStateToProps = ({ wallet }) => ({
  coinsOptions: wallet.coins,
});

WalletForm.propTypes = {
  fetchCoinsApi: PropTypes.func.isRequired,
  coinsOptions: PropTypes.func.isRequired,
  fetchCurrencyApi: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
