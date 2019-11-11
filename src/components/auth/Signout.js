import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { userLogout } from "../../actions/AuthActions";

class Signout extends Component {
  
  constructor(props) {
    super(props);
    
  }
  onSignoutClicked = () => {
    this.props.userLogout();
  }
  

  render()
  {
    return (
      <div>
        <p>Ви вже залишаєте нас?</p>
        <button className="btn btn-primary" onClick={this.onSignoutClicked}>Так, мушу бігти</button>
      </div>
    );
  }
}


Signout = connect(null, { userLogout })(withRouter(Signout));


export default Signout;

