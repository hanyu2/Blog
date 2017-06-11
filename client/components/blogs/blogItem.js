import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import { ClientStorage } from 'meteor/ostrio:cstorage';
import BlogDetail from './blogDetail.js';
import BlogEdit from './blogEdit.js';
import DeleteWarn from '../notifications/deleteWarn.js';

class BlogItem extends Component{
  constructor(props){
    super(props);
  }

  getTags(){
    const tags = this.props.blog.tag.slice();
    return(
      tags.map(tag => {
        return <button key={tag} className="btn btn-default">{tag}</button>
      })
    )
  }

  getBlogItem(){
    const { title } = this.props.blog;
    const tags = this.props.blog.tag.slice();
    const url = `/blog/${this.props.blog._id}`;
    const editurl = `/edit/${this.props.blog._id}`;
    const time = this.props.blog.createdAt.toString();
    isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    return(
      <div className='jumbotron jumbotron-fluid margin-around'>
        <div className="container">
          <h1 className="display-3"><Link  to={url}>{title}</Link></h1>
            {isLoggedIn ? <Link className='rightMost  btn btn-info' to={editurl}>edit</Link> : ''}
            {isLoggedIn ? <DeleteWarn blog={this.props.blog}/>: ''}
          <p className="lead">
            {this.getTags()}
          </p>
          created on : {time}
        </div>
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
