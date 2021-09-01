import React, { Component } from 'react'
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap'

class Modal1 extends Component {
  handleClose() {
    this.props.cerrar()
  }
  render() {
    return (
      <div>
        <Modal isOpen={true} toggleM={true} className={this.props.className}>
          {/* <ModalHeader className="bg-fondo-btn2 ">{this.props.title}</ModalHeader> */}
          <ModalBody>{this.props.body}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.handleClose()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Modal1
