import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class DeleteWarn extends Component{
  constructor(props) {
    super(props);

    this.state={
      showModal: false
    }
  }

  open() {
    this.setState({ showModal: true });
    console.log("open");
  }

  close(){
    this.setState({ showModal: false });
    console.log("close");
  }

  removeBlog(){
    Meteor.call('blogs.delete', this.props.blog);
  }

  render(){
    return(
      <div>
        <button className="btn btn-danger rightMost" onClick={this.open.bind(this)}>delete</button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <h4>Are you sure to delete this blog?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.removeBlog.bind(this)}>Delete</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default DeleteWarn;
