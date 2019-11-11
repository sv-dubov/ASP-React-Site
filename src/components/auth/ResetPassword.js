import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { resetPassword } from "../../actions/AuthActions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    state = {
      email:'******',
      code:'',
      password: '',
      confirm: ''
    }
  }

  componentDidMount() {
    let email = this.props.match.params.email;
    let code = this.props.match.params.code;

    this.setState({
      email, code
    })
  }

  handleFormSubmit(data) {
     this.props.registerUser(data, this.onSubmitComplete.bind(this));
  }
 
  onSubmitComplete() {
    console.log('register succeed');
    this.props.history.push("/signin");
  }

  renderHidden = ({input}) => {
    return (
          <input
              type="hidden"
              {...input}       
          />
    );
}
  

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.auth.isLoading);
    
    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Скидування пароля</h2>
            <form name="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                        className="form-control" />
                    <Field
                        name="code"
                        component="input"
                        type="hidden" />
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
                    <label htmlFor="confirmPassword">Підтвердіть пароль</label>
                    <Field
                        name="confirmPassword"
                        component="input"
                        type="password"
                        placeholder="Confirm Password"
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

ResetPassword = reduxForm({
  form: 'resetPassword', // a unique identifier for this form,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(ResetPassword);

function mapStateToProp(state) {
  return {
    initialValues: state,
  };
}

ResetPassword = connect(mapStateToProp, { resetPassword })(withRouter(ResetPassword));


export default ResetPassword;