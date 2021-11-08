import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    webiste: ""
  });
  const [phones, setPhones] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    loadPhones();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4000/users/load-user/${id}`);
    setUser(res.data);
  };
  const loadPhones = async () => {
    const result = await axios.get(`http://localhost:4000/phones/load-phones/${id}`);
    setPhones(result.data.reverse());
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item"> 
     
          <div classNameName="container">
            <div classNameName="py-4">
              <p>Phone Numbers: </p>
              <table className="table border shadow">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Prefix</th>
                    <th scope="col">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {phones.map((phone, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{phone.prefix}</td>
                      <td>{phone.phoneNr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
        </li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
