import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomerById } from '../Services/customerService';

const CustomerView = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(id);
        setCustomer(data);
      } catch (error) {
        setError('Failed to fetch customer details');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
    // Alternatively, navigate('/'); // Navigate to the customer list page directly
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!customer) return <p>No customer found</p>;

  return (
    <div className="container mw-700 shadow">
      <h1 className="title text-info">Customer Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{customer.FirstName} {customer.LastName}</h5>
          <p className="card-text"><strong>Email:</strong> {customer.Email}</p>
          <p className="card-text"><strong>Phone:</strong> {customer.Phone}</p>
          <p className="card-text"><strong>Address:</strong> {customer.Address}</p>
          <button className="btn btn-secondary mt-3" onClick={handleBack}>Back</button> {/* Back button */}
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
