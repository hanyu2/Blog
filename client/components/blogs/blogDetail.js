import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogHeader from './blogHeader.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';

class BlogDetail extends Component {

  getContent(){
    const blog = Blogs.find({_id : this.props.match.params.id}).fetch()[0];
    const content = blog.content;
    console.log(content);
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
        <section className="section">
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
