import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';

class Blog extends Component{
  render(){
    return(
      <div className="webapp-content">
        <div className="community">
          <BlogHeader />
          <BlogList />
        </div>
      </div>
    );
  };
}

export default Blog;
