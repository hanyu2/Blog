import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import { ClientStorage } from 'meteor/ostrio:cstorage';
import {withRouter} from 'react-router';
import { BlogComments } from '../../../imports/collections/blog_comments.js';
import { createContainer } from 'meteor/react-meteor-data';
import NotificationItem from './notificationItem.js';

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

  renderUnreadComments(){
    if(this.props.unreadComments.length > 0){
      return this.props.unreadComments.map(comment => <NotificationItem key={comment._id} comment={comment}/>)
    }
  }

  getNotifications(){
    const isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    if (!isLoggedIn) {
      return <div></div>
    }else{
      return <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notifications<span className="badge badge-inverse">{this.props.unreadComments.length}</span><span className="caret"></span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {this.renderUnreadComments()}
        </ul>
      </li>;
    }
  }

  componentDidMount(){
    $('.navbar-default').css('margin-bottom','0px');
    $('.dropdown-toggle').dropdown();
  }

  render(){
    const isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    let submit = null;
    if (!isLoggedIn) {
      submit = <div></div>
    } else {
      submit=
        <li>
          <Link to="/create">Create</Link>
        </li>;
    }

    let saved = null;
    if (!isLoggedIn) {
      saved = <div></div>
    } else {
      saved=
        <li>
          <Link to="/saved">Saved</Link>
        </li>;
    }

    let logout = null;
    if (!isLoggedIn) {
      submit = <div></div>
    } else {
      logout= <button type="button" className="btn btn-default navbar-btn" onClick={this.onLogout.bind(this)}>Logout</button>
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
          {submit}
          {saved}
          {logout}
          {this.getNotifications()}
        </ul>
      </nav>
    )
  };
}

const commentContainer = createContainer((props) => {
  handle = Meteor.subscribe("comment_unread");
  return{unreadComments : BlogComments.find({read: false}).fetch(), ready:handle.ready()}
}, BlogHeader)

export default withRouter(commentContainer);
