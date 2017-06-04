import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogHeader from './blogHeader.js';

class BlogDetail extends Component {

  getContent(){
    const blog = Blogs.find({_id : this.props.match.params.id}).fetch()[0];
    return (
      <div>
        <div>
          <BlogHeader />
        </div>
        <div className="article__feature" style={{"backgroundImage": "url(http://blog.capsulecat.com/wp-content/uploads/sites/2/2016/01/cropped-hero-space-stand-compressed-1.jpeg)"}}>
          <h1 className="article__title article__title--feature">
            {blog.title}
          </h1>
        </div>
        <section className="section">
          {blog.content}
        </section>
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
