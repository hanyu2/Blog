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
        <div className="article__feature" style={{"background-image": "url(http://blog.capsulecat.com/wp-content/uploads/sites/2/2017/02/james-sutton-187816-comp.jpg)"}}>
          <h1 className="article__title article__title--feature">
            {blog.title}
          </h1>
        </div>
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
