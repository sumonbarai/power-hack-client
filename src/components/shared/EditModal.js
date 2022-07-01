import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const EditModal = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const amount = event.target.amount.value;
    const updatedBill = {
      name,
      email,
      phone,
      amount,
    };
    // put post api
    fetch(`http://localhost:5000/update-billing/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully update!");
        }
      });

    event.target.reset();
    handleClose();
  };
  return (
    <>
      <Button
        className="text-capitalize bg-warning"
        variant="primary"
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Billing information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-form" onSubmit={handleEdit}>
            <div>
              <label htmlFor="name">Full Name</label>
              <br />
              <input id="name" type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" type="email" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <br />
              <input id="phone" type="text" name="phone" />
            </div>
            <div>
              <label htmlFor="amount">Paid Amount</label>
              <br />
              <input id="amount" type="text" name="amount" />
            </div>
            <div>
              <button className="btn btn-primary mt-2">Save</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
