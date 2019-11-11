import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { forgotPassword } from "../../actions/AuthActions";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
  }

  async handleFormSubmit(data) {
    this.props.forgotPassword(data.email, ()=> {
      alert('Forgot password sent successfully. You will receive an notification for reset your password.')
  });
 }

 onBackToLoginClicked = () => {
  this.props.history.push("/signin");
 }

  render() {
    const { handleSubmit } = this.props
      return (
          <div className="col-md-6 col-md-offset-3">
              <h2>Забули пароль?</h2>
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
                      <span style={{ color: 'red' }}>
                          {this.props.auth.login_error}
                      </span>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" type="submit">
                          Відправити
                      </button>
                      <button className="btn btn-primary" type="button" onClick={this.onBackToLoginClicked}>
                          Увійти
                      </button>
                  </div>
              </form>
          </div>
    )
  }
}

ForgetPassword = reduxForm({
  form: 'ForgetPassword' // a unique identifier for this form
})(ForgetPassword);

function mapStateToProp(state) {
  return {
    auth: state.auth
  };
}

ForgetPassword = connect(mapStateToProp, { forgotPassword })(withRouter(ForgetPassword));


export default ForgetPassword;