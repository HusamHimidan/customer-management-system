import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import CustomerView from './components/CustomerView';  // Import the CustomerView component
import CustomerPage from './Pages/CustomerPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<CustomerPage />} />
        <Route path="/create" element={<CustomerForm isEditing={false} />} /> {/* Create Customer */}
        <Route path="/edit/:id" element={<CustomerForm isEditing={true} />} /> {/* Edit Customer */}
        <Route path="/view/:id" element={<CustomerView />} />  
        </Routes>
    </Router>
  );
}

export default App;

