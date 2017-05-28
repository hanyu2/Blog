import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Body extends Component{
  render(){
    return(
      <div className="jumbotron">
        <h1 className="display-3">Hello, Guests!</h1>
        <p className="lead">My blog is under construction, I promise it will come up soon!</p>
      </div>
    );
  }
};
export default Body;
