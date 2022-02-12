import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    // console.log(this.props);
    // const { } = this.props;
    return (

      <section>

        <Header />
        <WalletForm />
      </section>);
  }
}

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
// };
export default connect()(Wallet);
