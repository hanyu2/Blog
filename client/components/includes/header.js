import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Han Yu</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};
export default Header;
