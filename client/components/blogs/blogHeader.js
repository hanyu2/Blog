import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import { ClientStorage } from 'meteor/ostrio:cstorage';
import {withRouter} from 'react-router';

class BlogHeader extends Component{

  constructor(props) {
    super(props);
  }
  onLogout(event){
    event.preventDefault();
    console.log("loggin out");
    ClientStorage.empty();
    this.props.history.push('/blog');
  }

  render(){
    const isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
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

    let logout = null;
    if (!isLoggedIn) {
      submit = <div></div>
    } else {
      logout= <div><button type="button" className="btn btn-default navbar-btn" onClick={this.onLogout.bind(this)}>Logout</button></div>
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
        {logout}
      </nav>
    )
  };
}
export default withRouter(BlogHeader);
