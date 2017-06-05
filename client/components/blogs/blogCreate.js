import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import Editor from './editor.js';

class BlogCreate extends Component{
  render(){
    return(
      <div>
        <BlogHeader />
        <Editor />
      </div>
    );
  };
}

export default BlogCreate;
