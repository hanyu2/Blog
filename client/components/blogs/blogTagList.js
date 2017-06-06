import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import BlogTag from './blogTag.js';
import {BlogTags} from '../../../imports/collections/blog_tags.js';
import NewTag from './newTag.js';

class BlogTagList extends Component{
  render(){
    return(
      <div>
        <ul className="list-group">
            {this.props.blog_tags.map(blogTag => <BlogTag key={blogTag._id} blogTag={blogTag}/>)}
        </ul>
        <NewTag />
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blog_tags')
  return {blog_tags: BlogTags.find({}).fetch() };
}, BlogTagList);
