import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchCoinsAction } from '../actions/walletAction';

class WalletForm extends React.Component {
  constructor() {
    super();

    // this.getCoinsArray = this.getCoinsArray.bind(this);
    this.state = {

    };
  }

  componentDidMount() {
    const { fetchCoinsApi } = this.props;
    fetchCoinsApi();
  }

  render() {
    // console.log(this.props);
    const { coinsOptions } = this.props;

    return (

      <section>

        <Header />
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              id="value-input"
              type="text"
              name="valueInput"
              // value={ valueInput }
              // onChange={ this.handleClik }
            />
          </label>

          <label htmlFor="description-input">
            Descrição da despesa
            <input
              data-testid="description-input"
              id="description-input"
              type="text"
              name="descriptionInput"
              // value={ descriptionInput }
              // onChange={ this.handleClik }
            />
          </label>

          <label htmlFor="currency-input">
            moeda
            <select
              data-testid="currency-input"
              id="currency-input"
              name="currencyInput"
              // value={ currencyInput }
              // onChange={ this.handleClik}
            >
              { Object.keys(coinsOptions)
                .filter((coin) => coin !== 'USDT')
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
              data-testid="method-input"
              id="method-input"
              name="methodInput"
              // value={ methodInput }
              // onChange={ this.handleClik }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria
            <select
              data-testid="tag-input"
              id="tag-input"
              name="tagInput"
              // value={ tagInput }
              // onChange={ this.handleClik }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            data-testid="lexpense-button"
            type="button"
            // disabled={ userName.length < minImputLength } // 2.3)
            // onClick={ this.handleClik }
          >
            Adicionar despesa
          </button>

        </form>
      </section>);
  }
}

// adicionar moedas: requisição de API

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsApi: () => dispatch(fetchCoinsAction()),
});

const mapStateToProps = ({ wallet }) => ({
  coinsOptions: wallet.coins,
});

WalletForm.propTypes = {
  fetchCoinsApi: PropTypes.func.isRequired,
  coinsOptions: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
