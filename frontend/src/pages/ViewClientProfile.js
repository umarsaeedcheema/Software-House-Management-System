
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// import ProjectData from "../components/ProjectsData";

const ClientData = () => {
  const [clients, setclients] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/viewClientProfile").then((response) => {
        console.log(response.data)
      setclients(response.data);
    }).catch((err) => {console.log(err)});
  }, []);
  const clientData = clients.map((client) => {
    return (
      <div className="flex flex-col items-center">
        <div className="App mt-12 p-10 bg-sky-100 rounded-2xl" key={client}>
            <h3>Client ID: {client.client_id}</h3>
            <p>Client Name: {client.name}</p>
        </div>
        </div>

    );
  });
  // return <div></div>
  return <div>{clientData}</div>;
};


const viewClientProfile = () => {
    console.log("here")
    // alert("here")
  return (
      <div className="App" >
        <h1>All Clients</h1>
        <ClientData/>
      </div>
  );
};
export default viewClientProfile;