import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { getEmailAction } from '../actions/userAction';

class Login extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateLogin = this.validateLogin.bind(this);

    this.state = {
      redirect: false,
      email: '',
      password: '',
      isDisable: true,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { getEmail } = this.props;
    const { email } = this.state;

    this.setState({ redirect: true });
    console.log(this.state);
    getEmail(email);
  }

  validateLogin() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGHT = 6;
    // fonte do REGEX: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ sugerido por Julia Andrade
    const REGEX = /\S+@\S+\.\S+/;

    const validPasswordLenght = password.length >= MIN_PASSWORD_LENGHT;
    const validEmail = REGEX.test(email);

    if (validPasswordLenght && validEmail) {
      return false;
      // this.setState({ isDisabled: false });
    }
    return true;
  }

  render() {
    const { redirect, email, password } = this.state;

    if (redirect) return <Redirect to="/carteira" />;
    return (
      <section>
        <form>

          <label htmlFor="email-input">
            E-mail
            <input
              data-testid="email-input"
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="password-input">
            Password
            <input
              data-testid="password-input"
              id="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>

          <button
            type="button"
            name="isDisabled"
            disabled={ this.validateLogin() }
            onClick={ this.handleClick }
          >
            Entrar
          </button>

        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(getEmailAction(email)),
}
);

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
