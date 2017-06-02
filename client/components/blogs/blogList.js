import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';

class BlogList extends Component{
  render(){
    console.log(this.props.blogs);
    return(
      <div>
        <ul className="list-group">
            {this.props.blogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </ul>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blogs')
  return {blogs: Blogs.find({}).fetch() };
}, BlogList);
