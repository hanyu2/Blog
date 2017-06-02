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
        <section className='section'>
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
    subsready:  handle.ready(),
  };
}, BlogDetail);
