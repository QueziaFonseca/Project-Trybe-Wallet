import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/WalletTable.css';

class WalletTable extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { expenses } = this.props;
    return (

      <section className="table-head">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="table-rows">
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(expense.value * expense.exchangeRates[expense.currency]
                    .ask).toFixed(2)}

                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>

            ))}

          </tbody>
        </table>
      </section>);
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps)(WalletTable);
