import React, { useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const AddPhone = () => {
  let history = useHistory();
  const { id } = useParams();
  const [phone, setPhone] = useState({
    user: id,
    prefix: "",
    phoneNr: "",
    country: ""
  });

  const { user, prefix,phoneNr,country} = phone;
  const onInputChange = e => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };
 


 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/phones/create-phone", phone);
  
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add phone</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User id"
              name="user"
              value={user}
              disabled="true"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Prefix"
              name="prefix"
              value={prefix}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phoneNr"
              value={phoneNr}
              onChange={e => onInputChange(e)}
            />
            </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your country"
              name="country"
              value={country}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add phone</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhone;
