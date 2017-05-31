import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {Posts} from '../../../imports/collections/posts.js';

class BlogItem extends Component{
  renderList(){

  }

  render(){
    return (
      <li className="list-group-item">
        Post
      </li>
    );
  };
}

export default BlogItem;
