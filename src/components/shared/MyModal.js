import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./MyModal.css";

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="text-capitalize"
        variant="primary"
        onClick={handleShow}
      >
        add new bill
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-form">
            <div>
              <label htmlFor="name">Full Name</label>
              <br />
              <input id="name" type="text" />
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <br />
              <input id="name" type="text" />
            </div>
            <div>
              <label htmlFor="name">Phone</label>
              <br />
              <input id="name" type="text" />
            </div>
            <div>
              <label htmlFor="name">Paid Amount</label>
              <br />
              <input id="name" type="text" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
