import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import Editor from './editor.js';
import BlogTitle from './blogTitle.js';

class BlogCreate extends Component{
  render(){
    return(
      <div>
        <BlogHeader />
        <BlogTitle />
        <Editor />
      </div>
    );
  };
}

export default BlogCreate;
