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
        return <div className="in-line normal margin-left" key={tag} >{tag}</div>
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
      <div className='community-post center'>
        <div className="community-post__content center">
          <h3><Link className="community-post__title center" to={url}>{title}</Link></h3>
        </div>
        <div className="lead">
          <i className="fa fa-eye normal margin-right" aria-hidden="true"></i>
          <div className="in-line normal margin-right">
            {this.props.blog.views}
          </div>
          <i className="fa fa-commenting-o normal margin-right" aria-hidden="true"></i>
          <div className="in-line normal margin-right">
            {this.props.blog.comments}
          </div>
          <i className="fa fa-tags normal" aria-hidden="true"></i>
          {this.getTags()}
        </div>
        <div>
          {time}
        </div>
        <div className="rightMost">
          <div className="in-line">
            {isLoggedIn ? <Link className='btn btn-info' to={editurl}>edit</Link> : ''}
          </div>
          {isLoggedIn ? <DeleteWarn blog={this.props.blog}/>: ''}
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
