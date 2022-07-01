import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import "./MyModal.css";

const MyModal = ({ setReload, reload }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBilling = (event) => {
    event.preventDefault();
    let billingId = Math.round(Math.random() * 10000);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const amount = event.target.amount.value;
    const insertedBill = {
      name,
      email,
      phone,
      amount,
      billingId,
    };
    // data post api
    fetch("https://serene-ocean-18643.herokuapp.com/add-billing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertedBill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReload(!reload);
          toast.success("Successfully added!");
        }
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
