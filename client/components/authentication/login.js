import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const prop = this.props;
    const res = Meteor.loginWithPassword(this.state.email, this.state.password, function(error) {
      if (error) {
        alert(error);
      } else {
        prop.history.push('/blog');
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className="form-control" type="email" name="email" onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" name="password" onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
