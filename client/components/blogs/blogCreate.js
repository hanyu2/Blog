import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import Editor from './editor.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';

class BlogCreate extends Component{

  isAuthenticated(){
    return Meteor.user() === undefined ? false : (Meteor.user().emails[0].address === 'hanyu2@asu.edu');
  }

  renderContent(){
    return(
      <div>
        <BlogHeader />
        <Editor />
      </div>
    );
  }
  render(){
    return this.isAuthenticated() ? this.renderContent() : <div>You have no access!</div>
  };
}

export default BlogCreate;
