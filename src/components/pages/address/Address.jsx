import React,{useState,useEffect}from 'react'
import axios from 'axios'
import { useScript } from '../../Customhooks/Script'
import Sidebar from '../../common/Sidebar'
import { client } from '../../clientaxios/Clientaxios'
import ApexCharts from 'apexcharts';

export default function Address() {

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
  });
  const [addresses, setAddresses] = useState([]);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await client.delete(`/api/addresses/${id}`);
      fetchAddresses();
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleEdit = (address) => {
    setFormData({
      email: address.email,
      phone: address.phone,
      address: address.address,
    });
    setEditFormData({
      ...formData, // include the current values
      id: address._id, // Remember the ID for editing
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editFormData) {
        // If editing, update only the fields that are changed
        const updatedFormData = {
          email: formData.email || editFormData.email,
          phone: formData.phone || editFormData.phone,
          address: formData.address || editFormData.address,
          id: editFormData.id,
        };

        const response = await client.put(`/api/addresses/${updatedFormData.id}`, updatedFormData);
        console.log('Address updated:', response.data);
      } else {
        // If not editing, send a request to create a new address
        const response = await client.post('/api/addresses', formData);
        console.log('Address created:', response.data);
      }

      setFormData({ email: '', phone: '', address: '' });
      setEditFormData(null);
      fetchAddresses();
    } catch (error) {
      console.error('Error submitting address:', error);
    }
  };

  const fetchAddresses = async () => {
    try {
      const response = await client.get('/api/addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  useScript('assets/libs/jquery/dist/jquery.min.js');
  useScript('assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js');
  useScript('assets/js/sidebarmenu.js');
  useScript('assets/js/app.min.js');
  useScript('assets/libs/simplebar/dist/simplebar.js');
  useScript('assets/js/dashboard.js');

  useScript('assets/libs/apexcharts/dist/apexcharts.min.js')

  return (
    <div>
 <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
<Sidebar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    
    {/*  Header End */}
    <div className="container-fluid">
    <div className="container">

<h2 className="mt-4">Admin Panel - Add Address</h2>
<form onSubmit={handleSubmit} className="mb-4">
  <div className="row">
    <div className="col-md-4">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          rows={3}
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Add Address</button>
</form>

<div className="mt-4">
  <h4>Display Addresses</h4>
  <ul>
    {addresses.map((address) => (
      <li key={address._id}>
        <strong>Email:</strong> {address.email}, <strong>Phone:</strong> {address.phone}, <strong>Address:</strong> {address.address}
        <button className="btn btn-primary" onClick={() => handleEdit(address)}>Edit</button>
        <button className="btn btn-danger" onClick={() => handleDelete(address._id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
</div>
</div>
  </div>
</div>

    </div>
  )
}

