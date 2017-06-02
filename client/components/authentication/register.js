import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

class Register extends Component {

  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleSubmit (event){
    event.preventDefault();
    console.log(this.email.value);
    console.log(typeof(this.password.value));
    const res = Accounts.createUser(this.email.value, this.password.value);
    console.log(res);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className="form-control" type="email" ref={(email) => this.email = email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" ref={(password) => this.password = password}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default Register;
