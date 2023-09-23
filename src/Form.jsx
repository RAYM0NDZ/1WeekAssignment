import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const trackName = (event) => {
    setName(event.target.value);
  };
  const trackEmail = (event) => {
    setEmail(event.target.value);
  };
  const trackAddress = (event) => {
    setAddress(event.target.value);
  };
  const trackData = (event) => {
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      address.trim().length === 0
    ) {
      window.alert("PleaseFillValidInput!");
      return;
    }
    event.preventDefault();
    const data = { name, email, address };
    props.getData(data);
    setName("");
    setEmail("");
    setAddress("");
  };
  return (
    <div className="col-3">
      <form onSubmit={trackData}>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={trackName}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={trackEmail}
          />
        </div>{" "}
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={trackAddress}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
