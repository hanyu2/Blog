import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Han Yu</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a>Sign up</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};
export default Header;
