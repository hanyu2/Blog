import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {Posts} from '../../../imports/collections/posts.js';

class BlogItem extends Component{
  componentWillMount(){
    Meteor.subscribe('posts');
  }

  render(){
      console.log(this.props.posts);
      return(
        <div className="list-group-item">
          test
        </div>
      );

  };
}


export default createContainer(() => {
  return { posts: Posts.find({}).fetch()};
}, BlogItem);
