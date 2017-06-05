import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import Editor from './editor.js';
import BlogTitle from './blogTitle.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';
import Save from './blogSave.js';

class BlogCreate extends Component{

  isAuthenticated(){
    return ClientStorage.get('user') === 'hanyu2@asu.edu';
  }

  renderContent(){
    return(
      <div>
        <BlogHeader />
        <BlogTitle />
        <Editor />
        <Save />
      </div>
    );
  }
  render(){
    return this.isAuthenticated() ? this.renderContent() : <div>You have no access!</div>
  };
}

export default BlogCreate;
