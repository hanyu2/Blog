import React, {Component} from 'react';
import { BlogComments } from '../../../imports/collections/blog_comments.js';
import { createContainer } from 'meteor/react-meteor-data';
import CommentItem from './commentItem.js';

class CommentList extends Component{
  renderComments(){
    if(!this.props.ready){
      return <div></div>
    }else{
      return(
        this.props.comments.map(comment => {
          return(
            <CommentItem key={comment._id} comment={comment}/>
          )
        })
      )
    }
  }

  render(){
    return(
      <div>
        <ul className="list-group margin-around container">
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

export default createContainer((props) =>{
  handle = Meteor.subscribe('blog_comment', props.blog._id);
  return{comments: BlogComments.find({}).fetch(), ready : handle.ready()};
}, CommentList);
