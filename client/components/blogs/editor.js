import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-es-EU'; // you can import any other locale

var styles = {
	fontWeight:'bold'
};

class Editor extends Component {
  render() {
    return (
      <ReactSummernote
        value="Default value"
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
        onChange={this.onChange}
      />
    );
  }
}

export default Editor;
