import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {BlogTags} from '../../../imports/collections/blog_tags.js';
import {selectTag} from '../../actions/tagActions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class BlogAllTags extends Component{
  constructor(props){
    super(props);
  }

  clickTag(event){
    event.preventDefault();
    this.props.selectTag(event.target.name);
  }

  getAllTags(){
    return(
      this.props.blog_tags.map(tag => {
        return <button className="btn btn-default btn-sm" onClick={this.clickTag.bind(this)} key={tag._id} name={tag.name}>{tag.name}</button>
      })
    )
  }

  render(){
    return (
      <div className="center tagList">
        <button className="btn btn-default btn-sm" onClick={this.clickTag.bind(this)} name="all">All</button>
         {this.props.ready ? this.getAllTags() : ' '}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      tag: state.tag
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectTag: selectTag}, dispatch);
}

const TagContainer = createContainer((props) => {
  handle = Meteor.subscribe('blog_tags')
  return {blog_tags: BlogTags.find({}).fetch(), ready:handle.ready()};
}, BlogAllTags);

export default connect(mapStateToProps, matchDispatchToProps)(TagContainer);
