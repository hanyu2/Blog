import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import BlogItem from './blogItem.js';
import { createContainer } from 'meteor/react-meteor-data';
import {Blogs} from '../../../imports/collections/blogs.js';
import BlogAllTags from './blogAllTags.js';
import {connect} from 'react-redux';

class BlogList extends Component{
  renderBlogs(){
    if(this.props.tag === null){
      return(
        <div className="community__posts">
            {this.props.blogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </div>
      )
    }else{
      const selectedTag = this.props.tag;
      const taggedBlogs = this.props.blogs.filter(function(blog){
        if(selectedTag === 'all'){
          return this.props.blogs;
        }
        return blog.tag.includes(selectedTag);
      }.bind(this));
      return(
        <div className="center community__posts">
            {taggedBlogs.map(blog => <BlogItem key={blog._id} blog={blog}/>)}
        </div>
      )
    }
  }

  render(){
    return(
      <div className="center">
        <BlogAllTags />
        <div>
          {this.renderBlogs()}
        </div>
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
  if(props.saved !== undefined){
    return {blogs: Blogs.find({status : "saved"}, {sort:{createdAt : -1}}).fetch() };
  }else{
    return {blogs: Blogs.find({status : "posted"}, {sort:{createdAt : -1}}).fetch() };
  }
}, BlogList);

export default connect(mapStateToProps)(ListContainer);
