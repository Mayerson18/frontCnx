import React from "react";
import "./home.css";
import useOData from "../../hooks/OData";
import ListOData from "../../components/OData/listOData";

export default function Home() {
  const {odata, changeOData} = useOData();
  return (
  <div className="container-home">
    <ListOData odata={odata}/>
    <div className="container-button row d-flex justify-content-between">
      <button className="btn btn-primary col-12 col-sm-6" onClick={() => changeOData()}>Consultar</button>
      <button className="btn btn-success col-12 col-sm-6" onClick={() => changeOData()}>Refrescar</button>
    </div>
  </div>
  )
}