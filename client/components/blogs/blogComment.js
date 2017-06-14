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

  getContent(){

  }

  componentDidMount(){
    $('.panel-body').height('100px');
  }

  getEditor(){


    return(
      <div className="editor-margin">
        <ReactSummernote
          value={this.props.blog === undefined ? "" : this.props.blog[0].content}
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

  render(){
    return(
      <div className="container">
        {this.getEditor()}
      </div>
    )
  }
}

export default BlogComment;
