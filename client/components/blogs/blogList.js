import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import {BlogTag} from '../../../imports/collections/blog_tags.js';


class BlogList extends Component{

  render(){
    return(
      <div className="community__container with-sidebar">
        <div className="community__posts">
            {this.props.blogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </div>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blogs');
  return {blogs: Blogs.find({}).fetch()};
}, BlogList);
