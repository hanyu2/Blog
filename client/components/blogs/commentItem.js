import React, {Component} from 'react';

class CommentItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const comment = this.props.comment;
    return(
      <div className="container jumbotron jumbotron-fluid">
        <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
      </div>
    )
  }
}

export default CommentItem;
