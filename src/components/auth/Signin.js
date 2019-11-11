import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from "../../actions/AuthActions";

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  async handleFormSubmit(data) {
    await this.props.loginUser(data, this.onSigninComplete.bind(this));
 }

 onSigninComplete() {
   console.log('sign-in succeed');
   this.props.history.push("/");
 }

 onForgetPasswordClicked = () => {
  this.props.history.push("/forgetPassword");
 }


  render() {
    const { handleSubmit } = this.props
      return (
          <div className="col-md-6 col-md-offset-3">
              <h2>Увійти</h2>
              <form className="form-signin" name="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <div className="form-group">
                      <label htmlFor="email">Логін (e-mail)</label>
                      <Field
                          name="email"
                          component="input"
                          type="email"
                          placeholder="Email"
                          className="form-control" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Пароль</label>
                      <Field
                          name="password"
                          component="input"
                          type="password"
                          placeholder="Password"
                          className="form-control" />
                  </div>
                  <div className="form-group">
                      <span style={{ color: 'red' }}>
                          {this.props.auth.login_error}
                      </span>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" type="submit">
                          Увійти
                      </button>
                      <button className="btn btn-primary" type="button" onClick={this.onForgetPasswordClicked}>
                          Забули пароль?
                      </button>
                  </div>
              </form>
          </div>
    )
  }
}

Signin = reduxForm({
  form: 'Signin' // a unique identifier for this form
})(Signin);

function mapStateToProp(state) {
  return {
    auth: state.auth
  };
}

Signin = connect(mapStateToProp, { loginUser })(withRouter(Signin));


export default Signin;