import React, {Component} from 'react';
import BlogList from './blogList.js';
import BlogHeader from './blogHeader.js';

class SavedBlogs extends Component{
  render(){
    return(
      <div>
        <BlogHeader />
        <BlogList saved="saved"/>
      </div>
    );
  }
}

export default SavedBlogs;
