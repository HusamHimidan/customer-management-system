import axios from 'axios';

// Replace with your actual API URL
const API_URL = 'https://localhost:44344/api/customers';

// Fetch all customers
export const getCustomers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// Fetch a customer by ID
export const getCustomerById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error);
    throw error;
  }
};

// Create a new customer
export const createCustomer = async (customer) => {
  try {
    const response = await axios.post(API_URL, customer);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Update an existing customer
export const updateCustomer = async (id, customer) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, customer);
    return response.data;
  } catch (error) {
    console.error(`Error updating customer with ID ${id}:`, error);
    throw error;
  }
};

// Delete a customer
export const deleteCustomer = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting customer with ID ${id}:`, error);
    throw error;
  }
};
