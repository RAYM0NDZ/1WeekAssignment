import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import List from "./List";
const Main = () => {
  const [list, setList] = useState([]);
  const getData = (listInfo) => {
    setList([...list, listInfo]);
  };
  return (
    <div className="container">
      <div className="col-12 d-flex justify-content-between">
        <Form getData={getData} />
        <List infos={list} />
      </div>
    </div>
  );
};

export default Main;
