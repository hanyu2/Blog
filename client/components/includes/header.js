import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Han Yu</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};
export default Header;
