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
        return <button key={tag} className="btn btn-default">{tag}</button>
      })
    )
  }

  getBlogItem(){
    const { title } = this.props.blog;
    const tags = this.props.blog.tag.slice();
    const url = `/blog/${this.props.blog._id}`;
    const time = this.props.blog.createdAt.toString();
    isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    return(
      <div className='jumbotron jumbotron-fluid'>
        <div className="container">
          <h1 className="display-3"><Link  to={url}>{title}</Link></h1>
          {isLoggedIn ? <Link className='rightMost' to={url}>edit</Link> : ''}
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
