import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import Editor from './editor.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';

class BlogCreate extends Component{

  isAuthenticated(){
    return ClientStorage.get('user') === 'hanyu2@asu.edu';
  }

  renderContent(){
    return(
      <div>
        <div className="webapp-content">
          <div className="community">
            <BlogHeader />
          </div>
        </div>
        <div>
          <Editor />
        </div>
      </div>
    );
  }
  render(){
    return this.isAuthenticated() ? this.renderContent() : <div>You have no access!</div>
  };
}

export default BlogCreate;
