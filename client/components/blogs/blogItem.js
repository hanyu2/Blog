import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const BlogItem = ({post}) =>{
  const { title } = post;
  return(
    <div className='list-group-item'>
      title:{title};
    </div>
  );
}


export default BlogItem;
