import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
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
    Meteor.call('blogs.insert', this.state.title, this.state.content);
  }

  render() {
    return (
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
              ['insert',['media','link','hr']],
              ['view',['fullscreen','codeview']],
              ['help',['help']]
            ]
          }}
          onChange={this.getContent.bind(this)}
        />

        <button type="button" className="btn btn-success" onClick={this.postBlog.bind(this)}>Post</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-info">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-danger">Drop</button>
      </div>
    );
  }
}

export default Editor;
