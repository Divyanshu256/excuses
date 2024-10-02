import { React } from "react";
import "./App.css";
import Axios from "axios";
import { useState } from "react";
export default function App() {
  //https://excuser-three.vercel.app/v1/excuse
  const[excuse,setExcuse]=useState("")
  const getExcuse=(example)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${example}`).then(
      (res)=>{setExcuse(res.data[0].excuse)}
    )
  }
  
  return (
    <div className="App">
      <h1>Excuses for your non attendance:</h1>
      <button className="button" onClick={()=>getExcuse("family")}>Family</button>
      <button className="button" onClick={()=>getExcuse("office")}>Office</button>
      <button className="button" onClick={()=>getExcuse("college")}>College</button>
      <button className="button" onClick={()=>getExcuse("party")}>Party</button>
      <h3>Excuse:{excuse}</h3>
    </div>
  );
}
