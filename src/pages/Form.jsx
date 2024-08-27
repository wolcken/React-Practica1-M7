import React from 'react'
import Login from '../containers/Login'
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Logout from '../containers/Logout';

const Form = () => {

  const form = useSelector(state => state.form);

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Access</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {form.formData.email === '' ?
            <Login />
            :
            <Logout />
          }

        </Modal.Body>

      </Modal.Dialog>
    </div>
  )
}

export default Form