import React from "react";
import MyModal from "../shared/MyModal";

import "./AllBill.css";

const Allbill = () => {
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
                  <MyModal></MyModal>
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
                  <tr>
                    <th scope="col">Billing ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Paid Amount</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
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
