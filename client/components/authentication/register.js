import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
     const target = event.target;
     const name = target.name;

     this.setState({
       [name]: target.value,
     });
   }

 handleSubmit (event){
   event.preventDefault();
   const res = Accounts.createUser({
     email: this.state.email,
     password: this.state.password,
   }, function(error){
     if(error){
       alert(error);
     }else{
       alert("success!");
     }
   });
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <div className="form-group">
         <label htmlFor="email">Email:</label>
         <input className="form-control" type="email" name="email" onChange={this.handleInputChange} />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password:</label>
         <input className="form-control" type="password" name="password" onChange={this.handleInputChange} />
       </div>
       <div className="form-group">
         <button type="submit" className="btn btn-primary">Submit</button>
       </div>
     </form>
   );
 }
}

export default Register;
