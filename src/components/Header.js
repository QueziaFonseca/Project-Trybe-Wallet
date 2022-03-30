import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    // console.log(this.props);
    const { email, totalExpenses } = this.props;
    // const { total } = this.state;
    return (

      <section>

        <header>

          <h1>Trybe Wallet</h1>

          <h4 data-testid="email-field">
            {' '}
            { email }
          </h4>
          <h4 data-testid="total-field">
            { /* Ajuda do instrutor Samuel */}
            { totalExpenses || 0 }
          </h4>
          <h4 data-testid="header-currency-field">BRL</h4>

        </header>

      </section>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
