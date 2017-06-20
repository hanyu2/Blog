import React, {Component} from 'react';
import Editor from './editor.js';
import {Modal, Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import {ClientStorage} from 'meteor/ostrio:cstorage';
import ReactSummernote from 'react-summernote';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import FontAwesome from '../notifications/fontawsome.js'
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

var width = {
  width: '100px'
};

class BlogComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      user: '',
      showModal: false
    }
  }

  componentWillMount(){
    ClientStorage.set('user', '');
  }

  getContent(content) {
    this.setState({comment: content})
  }

  submitComment() {
    if (this.state.comment.length === 0) {
      alert("Please enter comment content.");
    } else {

      Meteor.call('blog_comments.insert', this.state.comment, this.props.blog._id, ClientStorage.get('user'), ClientStorage.get('userEmail'));
      document.querySelector(".note-editable.panel-body").innerHTML = "";
      this.setState({comment: ''})
    }
  }

  close() {
    console.log("close");
    this.setState({showModal: false});
  }

  componentDidMount() {
    $(".dropdown-toggle").dropdown();
    $(".note-editing-area").click(function() {
      if (ClientStorage.get('user').length === 0) {
        this.setState({showModal: true});
      }
    }.bind(this));
  }

  hideSubmitButton() {
    if (ClientStorage.get('user').length === 0) {
      return '';
    } else {
      return (
        <button type="button" name="submit" className="btn btn-primary button-right" onClick={this.submitComment.bind(this)}>Submit</button>
      )
    }
  }

  getEditor() {
    return (
      <div className="editor-margin">
        <ReactSummernote value="" options={{
          lang: 'eu-EU',
          height: 100,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']
            ],
            [
              'insert',
              ['picture', 'link']
            ]
          ]
        }} onChange={this.getContent.bind(this)}/>
      </div>
    )
  }

  logout() {
    ClientStorage.set('user', '');
    this.setState({
      user:''
    })
  }

  logoutButton() {
    if (ClientStorage.get('user').length === 0) {
      return '';
    } else {
      return <button type="button" className="btn btn-primary button-right" onClick={this.logout.bind(this)}>Logout</button>
    }
  }

  responseSuccess(response){
    ClientStorage.set('user', response.profileObj.name);
    ClientStorage.set('userEmail', response.profileObj.email);
    console.log(response);
    this.close();
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+150);
  }

  responseFailure(response){
    console.log(response);
  }

  responseFacebook(response){
    console.log(response.name);
    if(response.name !== undefined){
      ClientStorage.set('user', response.name);
      ClientStorage.set('userEmail', response.email);
      this.close();
      var y = $(window).scrollTop();  //your current y position on the page
      $(window).scrollTop(y+150);
    }else{
      alert('Facebook login failed');
    }
  }

  render() {
    return (
      <div className="container">
        {this.getEditor()}
        {this.logoutButton()}
        {this.hideSubmitButton()}
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <h4>Please login</h4>
          </Modal.Body>
          <Modal.Footer>
            <div className="center">
              <div>
                <GoogleLogin
                  clientId="117054743738-33a56jir2b7hdip5p49ohoapkncldbp9.apps.googleusercontent.com"
                  onSuccess={this.responseSuccess.bind(this)}
                  onFailure={this.responseFailure.bind(this)}
                  >
                  <FontAwesome name="Google" />
                </GoogleLogin>
              </div>
              <div>
                <FacebookLogin
                  appId="1733191136979708"
                  textButton=""
                  autoLoad={true}
                  fields="name,email,picture"
                  icon="fa-facebook"
                  cssClass="fb-login-button"
                  callback={this.responseFacebook.bind(this)} />
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default withRouter(BlogComment);
