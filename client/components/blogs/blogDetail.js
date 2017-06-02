import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogHeader from './blogHeader.js';

class BlogDetail extends Component {
  render() {
    const blog = Blogs.find({_id : this.props.match.params.id}).fetch()[0];
    return(
      <div>
      <div>
      <BlogHeader />
      </div>
        {blog.content}
      </div>
    );
  };
}

export default BlogDetail;
