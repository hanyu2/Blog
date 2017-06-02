import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

class BlogHeader extends Component{
  render(){
    return(
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/blog" >Blog</Link>
          </li>
        </ul>
      </nav>
    )
  };
}

export default BlogHeader;
