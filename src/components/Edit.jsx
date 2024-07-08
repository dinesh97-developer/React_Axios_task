import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ setId }) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    website: "",
    companyName: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData = res.data;
      setEditData({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        address: userData.address.street,
        phone: userData.phone,
        website: userData.website,
        companyName: userData.company.name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...editData,
        address: { street: editData.address },
        company: { name: editData.companyName }
      };
      console.log(updatedData);
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedData);
      navigate("/products");
    } catch (err) {
      console.log(err);
      console.log("API error");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="row g-3 needs-validation" noValidate>
        {/* Name */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="validationTooltip01"
            value={editData.name}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* Username */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip02" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="validationTooltip02"
            value={editData.username}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* Email */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="validationTooltip03"
            value={editData.email}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* Address */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="validationTooltip04"
            value={editData.address}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* Phone */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip05" className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="validationTooltip05"
            value={editData.phone}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* Website */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip06" className="form-label">Website</label>
          <input
            type="text"
            name="website"
            className="form-control"
            id="validationTooltip06"
            value={editData.website}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        {/* CompanyName */}
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip07" className="form-label">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="form-control"
            id="validationTooltip07"
            value={editData.companyName}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
