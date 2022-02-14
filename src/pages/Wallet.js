import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

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
        <WalletTable />
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
