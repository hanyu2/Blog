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
      <div className="comment container">
        <div className="article-comments__thread__header ">
          <i className="fa fa-commenting-o" aria-hidden="true"></i>
          <span className="margin-left">{this.props.comments.length}&nbsp;Replies</span>
        </div>
        <hr/>
        <ul className="list-group margin-around container">
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

export default createContainer((props) =>{
  handle = Meteor.subscribe('blog_comment', props.blog._id);
  return{comments: BlogComments.find({blogId : props.blog._id}).fetch(), ready : handle.ready()};
}, CommentList);
