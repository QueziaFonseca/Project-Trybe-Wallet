import React from 'react';

class WalletTable extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (

      <section>
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
          <tbody />
        </table>
      </section>);
  }
}

export default WalletTable;
