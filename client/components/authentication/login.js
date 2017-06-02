import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Login extends Component {

  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.email.value);
    Meteor.loginWithPassword(this.email.value, this.password.value);
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

export default Login;
