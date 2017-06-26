import React, { Component } from 'react';
import {withRouter} from 'react-router';
import BlogTagList from './blogTagList.js';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import $ from "jquery";
import "bootstrap/js/dropdown";

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';


var bold = {
	fontWeight:'bold'
};

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
       title: this.props.blog === null || this.props.blog === undefined ? "" : this.props.blog[0].title,
       content: this.props.blog === null || this.props.blog === undefined ? "" : this.props.blog[0].content,
       tags: this.props.blog === null || this.props.blog === undefined ? "" : this.props.blog[0].tags,
			 status: this.props.blog === null || this.props.blog === undefined ? "" : this.props.blog[0].status
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
			if(this.props.blog === undefined || this.props.blog === null){
	    	Meteor.call('blogs.insert', this.state.title, this.state.content, this.state.tags, this.state.status);
			}else{
				Meteor.call('blogs.update', this.props.blog[0]._id, this.state.title, this.state.content);
			}
			this.props.history.push('/blog');
		}
  }

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({
			title: nextProps.blog.title
		})
	}

	componentDidMount(){
		$(".dropdown-toggle").dropdown();
		$("#title").val(this.props.blog === null || this.props.blog === undefined ? "" : this.props.blog[0].title);
	}

  getEditor(){
    return(
      <div className="editor-margin">
        <div className="form-group">
          <label style={bold}>Title:</label>
          <input type="text" className="form-control " id="title" onChange={this.getTitle.bind(this)}/>
        </div>
				<ReactSummernote
          value={this.props.blog === undefined || this.props.blog === null ? "" : this.props.blog[0].content}
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
