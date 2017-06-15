import React, {Component} from 'react';
import Editor from './editor.js';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class BlogComment extends Component{
  constructor(props){
    super(props);
    this.state={
      comment:''
    }
  }

  getContent(content){
    this.setState({
      comment:content
    })
  }

  submitComment(){
    if(this.state.comment.length === 0){
      alert("Please enter comment content.");

    }else{
      Meteor.call('blog_comments.insert', this.state.comment, this.props.blog._id);
      document.querySelector(".note-editable.panel-body").innerHTML="";
    }
  }

  componentDidMount(){
    $(".dropdown-toggle").dropdown();

  }


  getEditor(){
    return(
      <div className="editor-margin">
        <ReactSummernote
          value=""
          options={{
            lang: 'eu-EU',
            height: 100,
            dialogsInBody: true,
            toolbar: [
              ['style',['style']],
              ['insert',['picture','link']],
            ]
          }}
          onChange={this.getContent.bind(this)}
        />
       </div>
    )
  }

  render(){
    return(
      <div className="container">
        {this.getEditor()}
        <button type="button" className="btn btn-primary button-right" onClick={this.submitComment.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default BlogComment;
