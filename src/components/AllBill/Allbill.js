import React, { useEffect, useState } from "react";
import MyModal from "../shared/MyModal";

import "./AllBill.css";
import SingleBill from "./SingleBill";

const Allbill = () => {
  const [bill, setBill] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = "https://serene-ocean-18643.herokuapp.com/billing-list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBill(data));
  }, [bill, reload]);
  return (
    <div className="billing-area">
      <div className="container">
        <div className="billing-menu">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-between align-content-center">
                <div>
                  <span className="pe-5">Billing</span>
                  <input
                    className="rounded px-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <div>
                  <MyModal reload="reload" setReload={setReload}></MyModal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr align="center">
                    <th scope="col">Billing ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Paid Amount</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bill.map((data) => (
                    <SingleBill key={data._id} data={data}></SingleBill>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allbill;
