import React, {Component} from 'react';
import {Blogs} from '../../../imports/collections/blogs.js';
import {Link} from 'react-router-dom';

class NotificationItem extends Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state={
      blog:''
    }
  }

  setRead(){
    Meteor.call('blog_comment.setRead', this.props.comment._id);
  }

  render(){
    const blog = Blogs.findOne({_id: this.props.comment.blogId});
    console.log(blog);
    const url = '/blog/' + blog._id;
    return(
        <li><Link to={url} onClick={this.setRead.bind(this)}>{blog.title}</Link></li>
    )
  }
}

export default NotificationItem;
