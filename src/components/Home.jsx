import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table className ="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">CompanyName</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index)=>
          <tr key={index}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.address.street}</td>
          <td>{item.phone}</td>
          <td>{item.website}</td>
          <td>{item.company.name}</td>

        </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;



