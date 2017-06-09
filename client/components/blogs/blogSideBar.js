import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BlogTags} from '../../../imports/collections/blog_tags.js';
import { createContainer } from 'meteor/react-meteor-data';


class BlogSideBar extends Component{
  constructor(props){
    super(props);
  }

  getAllTags(){
    return(
      this.props.blog_tags.map(tag =>{
        return(
          <a key={tag._id} className="categories__item btn--outline">{tag.name}</a>
        )
      })
    )
  }

  render(){
    return(
      <div className="webapp-content">
        <div className="community">
          <div className="community__sidebar">
            <div className="community__sidebar__module">
              <div className="module-title">
                Tags
              </div>
              <div className="module-body categories">
                {this.getAllTags()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blog_tags')
  return {blog_tags: BlogTags.find({}).fetch()};
}, BlogSideBar);
