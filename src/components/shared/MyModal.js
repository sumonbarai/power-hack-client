import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./MyModal.css";

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBilling = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const amount = event.target.amount.value;
    const insertedBill = {
      name,
      email,
      phone,
      amount,
    };
    // data post api
    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertedBill),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      });
    event.target.reset();
    handleClose();
  };
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
          <form className="modal-form" onSubmit={handleBilling}>
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

export default MyModal;
