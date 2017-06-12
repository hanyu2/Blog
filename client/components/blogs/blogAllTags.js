import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {BlogTags} from '../../../imports/collections/blog_tags.js';

class BlogAllTags extends Component{
  constructor(props){
    super(props);
    this.state={
      tags:[]
    }
  }

  getAllTags(){
    return(
      this.state.tags.map(tag => {
        return <button className="btn btn-default" key={tag._id}>{tag.name}</button>
      })
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tags : nextProps.blog_tags
    })
  }

  render(){
      return (
        <div className="center margin-around">
           {this.props.ready ? this.getAllTags() : ' '}
        </div>
      )
  }
}

export default createContainer((props) => {
  handle = Meteor.subscribe('blog_tags')
  return {ready: handle.ready(), blog_tags: BlogTags.find({}).fetch()};
}, BlogAllTags);
