import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCustomerById,
  updateCustomer,
  createCustomer,
} from "../Services/customerService";

const CustomerForm = ({ isEditing }) => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
  });
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing && id) {
      const fetchCustomer = async () => {
        try {
          const data = await getCustomerById(id);
          setCustomer(data);
        } catch (error) {
          setError("Failed to fetch customer details");
        } finally {
          setLoading(false);
        }
      };

      fetchCustomer();
    }
  }, [isEditing, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateCustomer(id, customer);
      } else {
        await createCustomer(customer);
      }
      navigate("/"); // Redirect to customer list
    } catch (error) {
      setError("Failed to save customer");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container shadow mw-700 mt-5">
      <h1 className="title text-info">
        {isEditing ? "Edit Customer" : "Create Customer"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="FirstName"
            className="form-control mb-3"
            value={customer.FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="LastName"
            className="form-control mb-3"
            value={customer.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            className="form-control mb-3"
            value={customer.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="Phone"
            className="form-control mb-3"
            value={customer.Phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            className="form-control mb-3"
            value={customer.Address}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-secondary mt-3 ml-2 me-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <button type="submit" className="btn btn-primary mt-3 ">
          {isEditing ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
