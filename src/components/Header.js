import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';
import trybeWalletTitle from '../images/trybeWalletTitle.png';

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

          <img
            src={ trybeWalletTitle }
            alt="wallet"
          />
          <div className="header-text">

            <h4 data-testid="email-field">
              {' '}
              { email }
            </h4>
            <h4 data-testid="total-field">
              { /* Ajuda do instrutor Samuel */}
              { totalExpenses.toFixed(2) || 0 }
            </h4>
            <h4 data-testid="header-currency-field">BRL</h4>
          </div>

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
