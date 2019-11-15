import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

//Polyfills for IE
require('es6-promise').polyfill();
require('./Polyfills/index').startsWith();
require('./Polyfills/index').assign();
require('./Polyfills/index').from();

import App from './components/App';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Post from './components/Post';
import Signout from './components/auth/Signout';
import ResetPassword from './components/auth/ResetPassword';
import ForgetPassword from './components/auth/ForgetPassword';
import Feature from './components/Feature';
import RequiredAuth from './components/RequiredAuth';
import reducers from './reducers/index';
import Startup from './Startup';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}> 
    <Router>
            <Startup>
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                                    
                            <ul>
                                <li>
                                    <Link to="/">Домашня сторінка</Link>
                                </li>
                                <li>
                                    <Link to="/Post">Новини</Link>
                                </li>
                                <li>
                                    <Link to="/Signin">Увійти</Link>
                                </li>
                                <li>
                                    <Link to="/Signup">Зареєструватися</Link>
                                </li>
                                <li>
                                    <Link to="/Feature">Додати статтю</Link>
                                </li>
                                <li>
                                    <Link to="/Signout">Вийти</Link>
                                </li>
                            </ul>

                            <hr />

                            <Route path="/Signin" component={Signin} />
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Post" component={Post} />
                            <Route path="/ForgetPassword" component={ForgetPassword} />
                            <Route path="/resetPassword/email/:email/code/:code*" component={ResetPassword} />
                            <Route path="/Feature" component={RequiredAuth(Feature)} />
                            <Route path="/Signout" component={RequiredAuth(Signout)} />
                            <Route exact path="/" component={App} />

                        </div>
                    </div>
                </div>
            </Startup>        
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}