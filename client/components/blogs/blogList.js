import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogAllTags from './blogAllTags.js';
import {connect} from 'react-redux';

class BlogList extends Component{
  renderTags(){
    if(this.props.tag === null){
      return(
        <ul className="list-group margin-around">
            {this.props.blogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </ul>
      )
    }else{
      const selectedTag = this.props.tag;
      const taggedBlogs = this.props.blogs.filter(function(blog){
        return blog.tag.includes(selectedTag);
      });
      return(
        <ul className="list-group margin-around">
            {taggedBlogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </ul>
      )
    }
  }

  render(){
    return(
      <div>
        <div>
          <BlogAllTags />
        </div>
        {this.renderTags()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
      tag: state.tag
  };
}

const ListContainer = createContainer((props) => {
  Meteor.subscribe('blogs')
  return {blogs: Blogs.find({status : "posted"}).fetch() };
}, BlogList);

export default connect(mapStateToProps)(ListContainer);
