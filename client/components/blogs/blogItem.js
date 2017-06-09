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
        return <button key={tag} className="btn btn-outline-info toRight">{tag}</button>
      })
    )
  }

  getBlogItem(){
    const { title } = this.props.blog;
    const tags = this.props.blog.tag.slice();
    const url = `/blog/${this.props.blog._id}`;
    isLoggedIn = ClientStorage.get('user') === 'hanyu2@asu.edu';
    return(
      <div className="community-post__content">
        <div className="community-post__body">
          <Link to={url} className="community-post__title">{title}</Link>

            {/* {isLoggedIn ? <Link className='rightMost' to={url}>edit</Link> : ''}*/}
            <div className="community-post__footer">
              <div className="article__star btn-heart">
                <i className="fa fa-heart"></i>
              </div>
              <a className="community-post__comment-count">
                <img src="https://web-cdn.codementor.io/assets/images//Community/icon-comment.png" />
              </a>
            </div>
        </div>

      </div>
    )
  }

  render(){
    return(
      <div className='community-post'>
          {this.getBlogItem()}
      </div>
    )
  }
}


export default BlogItem;
