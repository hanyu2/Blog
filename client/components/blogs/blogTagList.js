import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import BlogTag from './blogTag.js';
import {BlogTags} from '../../../imports/collections/blog_tags.js';

class BlogTagList extends Component{

  constructor(props) {
    super(props);
    this.state={
      tag:""
    }
  }


  handleInputChange(event){
    const target = event.target;
    this.setState({
      [target.name]:target.value
    });
  }

  addTag(event){
    event.preventDefault();

    if(this.state.tag.length === 0){
      alert("Tag can not be empty")
    }else{
       this.props.callbackFromParent(this.state.tag);
     }
  }



  render(){
    return(
      <div>
        <ul className="list-group">
            {this.props.blog_tags.map(blogTag => <BlogTag key={blogTag._id} blogTag={blogTag}/>)}
        </ul>
        <form onSubmit={this.addTag.bind(this)}>
          <div className="form-inline margin-around">
            <input className="form-control" name="tag" type="text" onChange={this.handleInputChange.bind(this)}/>
            <button type="submit" className="btn btn-primary margin-around">Add Tag</button>
          </div>
        </form>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blog_tags')
  return {blog_tags: BlogTags.find({}).fetch() };
}, BlogTagList);
