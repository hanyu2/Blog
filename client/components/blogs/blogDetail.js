import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogHeader from './blogHeader.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';
import BlogComment from './blogComment.js';

class BlogDetail extends Component {

  getTags(tag){
    return(
      tag.map(tag => {
        return <button className="btn btn-default" key={tag}>{tag}</button>
      })
    )
  }

  getContent(){
    const blog = Blogs.find({_id : this.props.match.params.id}).fetch()[0];
    const content = blog.content;
    const tags = blog.tag;
    const time = blog.createdAt.toDateString();
    return (
      <div>
        <div>
          <BlogHeader />
        </div>
        <div className="article__feature" style={{"backgroundImage": "url(http://media.idownloadblog.com/wp-content/uploads/2015/11/Rumkale-By-hannanaslan-iPad-Pro-Wallpaper-2732x2732.jpg)"}}>
          <h1 className="article__title article__title--feature">
            {blog.title}
          </h1>
        </div>
        <div className="center">
          Han Yu wrote on {time}
          {this.getTags(tags)}
        </div>
        <article>
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
        <BlogComment blog={blog}/>
      </div>
    );
  }

  render() {
    return this.props.subsready ? this.getContent() : <div></div>;
  };
}

export default createContainer(() =>{
  handle = Meteor.subscribe('blogs');
  return {
    subsready:  handle.ready()
  };
}, BlogDetail);
