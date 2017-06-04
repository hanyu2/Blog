import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

class BlogHeader extends Component{

  render(){
    const isLoggedIn = Session.get('email') === 'hanyu2@asu.edu';
    let submit = null;
    if (!isLoggedIn) {
      submit = <div></div>
    } else {
      submit= <ul className="nav navbar-nav">
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>;
    }

    return(
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        {submit}

      </nav>
    )
  };
}

export default BlogHeader;
