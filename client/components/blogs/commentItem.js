import React, {Component} from 'react';

class CommentItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const comment = this.props.comment;
    return(
      <div className="container jumbotron jumbotron-fluid">
        {comment.userName}
        <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
        {comment.date.toString()}
      </div>
    )
  }
}

export default CommentItem;
