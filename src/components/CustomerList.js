import React from "react";
import { Link } from "react-router-dom";
import "./CustomerList.css";

const CustomerList = ({ customers, onDelete }) => (
  <div className="container">
    <div className="scroll shadow">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.Id}>
                <td>{customer.Id}</td>
                <td>
                  {customer.FirstName} {customer.LastName}
                </td>
                <td>{customer.Email}</td>
                <td>{customer.Phone}</td>
                <td>{customer.Address}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-1"
                    to={`/edit/${customer.Id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-info mx-1 my-2"
                    to={`/view/${customer.Id}`}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => onDelete(customer.Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No customers available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default CustomerList;
