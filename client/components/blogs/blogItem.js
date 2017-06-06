import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogDetail from './blogDetail.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';


const BlogItem = ({blog}) =>{
  const { title } = blog;
  const url = `/blog/${blog._id}`;
  isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';

  return(
    <div className='list-group-item'>
      <Link to={url}>{title}</Link>
      {isLoggedIn ? <Link className='rightMost' to={url}>edit</Link> : ''}
    </div>
  );
}


export default BlogItem;
