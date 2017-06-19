import React, {Component} from 'react';
import {Blogs} from '../../../imports/collections/blogs.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class NotificationItem extends Component{
  constructor(props){
    super(props)
    this.state={
      blog:''
    }
  }

  setRead(){
    Meteor.call('blog_comment.setRead', this.props.comment._id);
  }

  render(){
    const blogs = Blogs.find({_id: this.props.comment.blogId}).fetch();
    const url = '/blog/' + blogs[0]._id;
    return(
        <li><Link to={url} onClick={this.setRead.bind(this)}>{blogs[0].title}</Link></li>
    )
  }
}

export default withRouter(NotificationItem);
