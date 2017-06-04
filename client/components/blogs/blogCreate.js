import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';

class Blog extends Component{
  render(){
    return(
      <div>
        <BlogHeader />
        create a blog here
      </div>
    );
  };
}

export default Blog;
