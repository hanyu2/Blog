import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';

class BlogList extends Component{
  render(){
    return(
      <div>
        <ul className="list-group">
            <BlogItem />
        </ul>
      </div>
    );
  };
}

export default BlogList;
