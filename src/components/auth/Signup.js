import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { registerUser } from "../../actions/AuthActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    
  }


  handleFormSubmit(data) {
     this.props.registerUser(data, this.onSubmitComplete.bind(this));
  }
 
  onSubmitComplete() {
    console.log('register succeed');
    this.props.history.push("/signin");
  }
  

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.auth.isLoading);
    
      return (
          <div className="col-md-6 col-md-offset-3">
              <h2>Реєстрація</h2>
              <form name="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
                          placeholder="Пароль"
                          className="form-control" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="confirmPassword">Підтвердіть пароль</label>
                      <Field
                          name="confirmPassword"
                          component="input"
                          type="password"
                          placeholder="Підтвердіть пароль"
                          className="form-control" />
                  </div>
                  <div className="form-group">
                      <span style={{ color: 'red' }}>
                          {this.props.auth.register_error}
                      </span>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" type="submit" disabled={this.props.auth.isLoading ? 'disabled' : ''}>
                          Зареєструватися
                      </button>
                  </div>
              </form>
          </div>
    )
  }
}

Signup = reduxForm({
  form: 'signup' // a unique identifier for this form
})(Signup);

function mapStateToProp(state) {
  return {
    auth: state.auth
  };
}

Signup = connect(mapStateToProp, { registerUser })(withRouter(Signup));


export default Signup;