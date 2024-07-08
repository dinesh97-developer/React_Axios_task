import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };  
  return (
    <div>
      <table className ="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>


<tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>

      <button
        onClick={() => {
          navigate("/Create");
        }}
        type="button"
        className ="btn btn-outline-primary btn-lg "
      >
        + Create
      </button>
    </div>
  );
};

export default Products;
