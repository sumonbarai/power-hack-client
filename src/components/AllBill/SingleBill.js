import React from "react";
import EditModal from "../shared/EditModal";

const SingleBill = ({ data }) => {
  const { _id, billingId, name, email, phone, amount } = data;

  // delete billing list
  const handleDelete = () => {
    const url = `https://serene-ocean-18643.herokuapp.com/delete-billing/${_id}`;
    const confirmation = window.confirm("are you sure delete billing list?");
    if (confirmation) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <>
      <tr align="center">
        <th>{billingId}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{amount}</td>
        <td>
          <EditModal data={data}></EditModal>{" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleBill;
