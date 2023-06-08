import { useEffect, useState } from "react"
import { BsHouse } from"react-icons/bs"
import {
  Link,
} from "react-router-dom";
import Router from "./Routes";

const API_URL = `"http://127.0.0.1:5000"`

function App() {
  const [message, setMessage] = useState("API not Working!")
  const [temperature] = useState(32)

  const handleHealthCheck = async () => {
    const data = await (await fetch(API_URL, {method: "GET"})).json();

    setTimeout(() => {
      setMessage(data.message);
    }, 3000);
  }

  useEffect(() => {
    handleHealthCheck();
  }, [])

  useEffect(() => {
    console.log(message);
  }, [message])

  return (
    <div className="App mh-100 mw-100">
      <div className="w-100 p-2 justify-content-between d-flex bg-dark">
        <div className="d-flex">
          <Link to="/" className="button rounded-1 d-flex justify-content-center align-items-center bg-info p-3 text-white mx-1"><BsHouse /></Link>
          <Link to="/relatorios" className="button text-decoration-none fw-bold rounded-1 d-flex justify-content-center align-items-center bg-info p-3 text-white mx-1">Relatórios</Link>
        </div>
        <div className="text-white fs-2 align-items-center">{temperature}ºC</div>
      </div>
      <Router />
    </div>
  )
}

export default App
