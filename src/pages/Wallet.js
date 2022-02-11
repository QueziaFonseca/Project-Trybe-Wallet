import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    console.log(this.props);
    const { email } = this.props;
    return (

      <section>
        TrybeWallet
        <header />
        <h3 data-testid="email-field">
          {' '}
          { email }
        </h3>
        <h3 data-testid="total-field">Despesa: 0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </section>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
