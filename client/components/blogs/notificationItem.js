import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import {Link} from 'react-router-dom';

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
    const url = (this.props.blog === undefined ? '/blog/' : '/blog/' + this.props.blog._id);
    if(this.props.blog === undefined){
      return <li>test</li>
    }else{
      return(
        <li><Link to={url} onClick={this.setRead.bind(this)}>{this.props.blog.title}</Link></li>
      )
    }
  }
}

export default createContainer((props) => {
  handle = Meteor.subscribe('singleBlog', props.comment.blogId);
  return {blog : Blogs.findOne({_id : props.comment.blogId}), ready : handle.ready()}
}, NotificationItem);
