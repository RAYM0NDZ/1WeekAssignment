import React, { useRef } from "react";

const Form = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const trackData = (event) => {
    if (
      nameRef.current.value.trim().length === 0 ||
      emailRef.current.value.trim().length === 0 ||
      addressRef.current.value.trim().length === 0
    ) {
      window.alert("PleaseFillValidInput!");
      return;
    }
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };
    props.getData(data);
    nameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
  };
  return (
    <div className="col-3">
      <form onSubmit={trackData}>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            ref={nameRef}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
          />
        </div>{" "}
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            ref={addressRef}
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
