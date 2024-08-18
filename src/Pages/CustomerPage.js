import React, { useState, useEffect } from "react";
import { getCustomers, deleteCustomer } from "../Services/customerService";
import CustomerList from "../components/CustomerList";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        setError("Failed to fetch customers");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmDelete) {
      try {
        await deleteCustomer(id);
        setCustomers(customers.filter((customer) => customer.Id !== id));
      } catch (error) {
        setError("Failed to delete customer");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="container d-flex justify-content-between title">
        <h1 className="text-info">Customers</h1>
        <button className="btn btn-primary" onClick={() => navigate("/create")}>
          Create Customer
        </button>
      </div>
      <CustomerList customers={customers} onDelete={handleDelete} />
    </div>
  );
};

export default CustomerPage;
