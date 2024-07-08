import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
   name: "",
   username: "",
   email: "",
   address: {
    street: "",
   },
   phone : "",
   website: "",
   company :""
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "address" || name === "company") {
          setEditData((prevData) => ({
            ...prevData,
            [name]: {
              ...prevData[name],
              street: value,
            },
          }));
        } else {
          setEditData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }  
    }
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post(
            `https://jsonplaceholder.typicode.com/users`,
            editData
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        navigate("/products");
      };
    return (
      <div>
        <form
          onSubmit={handleFormSubmit}
          className ="row g-2 needs-validation"
          noValidate
        >
          {/* ID 
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
              ID
            </label>
            <input
              type="text"
              name="ID"
              className ="form-control"
              id="validationTooltip01"
              value={editData.ID}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>*/}

          {/*Name*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Name
            </label>
            <input
              type="text"
              name="name"
              className ="form-control"
              id="validationTooltip01"
              value={editData.name}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          {/*Username*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Username
            </label>
            <input
              type="text"
              name="username"
              className ="form-control"
              id="validationTooltip01"
              value={editData.username}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          {/*Email*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Email
            </label>
            <input
              type="text"
              name="email"
              className ="form-control"
              id="validationTooltip01"
              value={editData.email}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>
          
          {/*Address*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Address
            </label>
            <input
              type="text"
              name="address"
              className ="form-control"
              id="validationTooltip01"
              value={editData.address.street}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          {/*Phone*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Phone
            </label>
            <input
              type="text"
              name="phone"
              className ="form-control"
              id="validationTooltip01"
              value={editData.phone}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          {/*Website*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Website
            </label>
            <input
              type="text"
              name="website"
              className ="form-control"
              id="validationTooltip01"
              value={editData.website}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          {/*Company Name*/}
          <div className ="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className ="form-label">
            Company Name
            </label>
            <input
              type="text"
              name="company"
              className ="form-control"
              id="validationTooltip01"
              value={editData.company.name}
              onChange={handleChange}
            />
            <div className ="valid-tooltip">Looks good!</div>
          </div>

          <div className ="col-12">
            <button className ="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
};  

export default Create;
