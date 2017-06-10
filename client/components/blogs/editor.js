import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import {withRouter} from 'react-router';
import BlogTagList from './blogTagList.js';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-es-EU'; // you can import any other locale

var bold = {
	fontWeight:'bold'
};

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
       title: '',
       content: '',
       tags: [],
			 status: 'posted'
     }
  }

  getContent(content){
    this.setState({
      content: content
    });
  }
  getTitle(title){
    this.setState({
      title: title.target.value,
    });
  }

  postBlog(event){
    event.preventDefault();
		if(this.state.title.length === 0){
			alert("Title is empty!");
		}else if(this.state.content.length === 0){
			alert("content is empty");
		}else{
	    Meteor.call('blogs.insert', this.state.title, this.state.content, this.state.tags, this.state.status);
			this.props.history.push('/blog');
		}
  }
  getEditor(){
    return(
      <div className="editor-margin">
        <div className="form-group">
          <label style={bold}>Title:</label>
          <input type="text" className="form-control " id="usr" onChange={this.getTitle.bind(this)}/>
        </div>
        <ReactSummernote
          value=""
          options={{
            lang: 'eu-EU',
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ['save',['save']],
              ['style',['style']],
              ['font',['bold','italic','underline','clear']],
              ['fontname',['fontname']],
              ['color',['color']],
              ['para',['ul','ol','paragraph']],
              ['height',['height']],
              ['table',['table']],
              ['insert',['picture','video','media','link','hr']],
              ['view',['fullscreen','codeview']],
              ['help',['help']]
            ]
          }}
          onChange={this.getContent.bind(this)}
        />
       </div>
    )
  }

  onChildChanged(newTag) {
    this.setState({
        tags: newTag
    }, function() {

    })
  }

	drop(){
		this.props.history.push('/blog');
	}

	saveBlog(){
		this.setState({
			status:'saved'
		}, function(){
			Meteor.call('blogs.insert', this.state.title, this.state.content, this.state.tags, this.state.status);
			this.props.history.push('/blog');
			console.log("saved");
		});
	}

  render() {
    return (
      <div>
      {this.getEditor()}
      <BlogTagList callbackFromParent={this.onChildChanged.bind(this)}/>
        <div>
          <button type="button" className="btn btn-success margin-around" onClick={this.postBlog.bind(this)}>Post</button>
          <button type="button" className="btn btn-info margin-around" onClick={this.saveBlog.bind(this)}>Save</button>
          <button type="button" className="btn btn-danger margin-around" onClick={this.drop.bind(this)}>Drop</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Editor);
