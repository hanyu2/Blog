import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const BlogItem = ({blog}) =>{
  const { title } = blog;
  return(
    <div className='list-group-item'>
      {title}
    </div>
  );
}


export default BlogItem;
