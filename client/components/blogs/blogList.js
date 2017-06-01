import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Posts} from '../../../imports/collections/posts.js';


class BlogList extends Component{
  render(){
    console.log(this.props.posts);
    return(
      <div>
        <ul className="list-group">
            {this.props.posts.map(post => <BlogItem key={post._id} post={post}/>)}
        </ul>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('posts')
  return {posts: Posts.find({}).fetch() };
}, BlogList);
