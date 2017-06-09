import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogDetail from './blogDetail.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';


class BlogItem extends Component{
  constructor(props){
    super(props);
  }

  getTags(){
    const tags = this.props.blog.tag.slice();
    return(
      tags.map(tag => {
        return <button key={tag} className="btn btn-sm">{tag}</button>
      })
    )
  }

  getBlogItem(){
    const { title } = this.props.blog;
    const tags = this.props.blog.tag.slice();
    const url = `/blog/${this.props.blog._id}`;
    isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    return(
      <div className='list-group-item'>
        <Link to={url}>{title}</Link>
        {isLoggedIn ? <Link className='rightMost' to={url}>edit</Link> : ''}
        {this.getTags()}
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.getBlogItem()}
      </div>
    )
  }
}


export default BlogItem;
