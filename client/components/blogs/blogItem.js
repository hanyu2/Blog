import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogDetail from './blogDetail.js';

const BlogItem = ({blog}) =>{
  const { title } = blog;
  const url = `/blog/${blog._id}`;
  return(
    <div className='list-group-item'>
      <Link to={url}>{title}</Link>
    </div>
  );
}


export default BlogItem;
