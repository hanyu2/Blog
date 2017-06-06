import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogDetail from './blogDetail.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';


const BlogTag = ({blogTag}) =>{
  return(
    <button type="button" className="btn btn-secondary btn-sm margin-around">
      {blogTag.name.toString()}
    </button>
  );
}

export default BlogTag;
