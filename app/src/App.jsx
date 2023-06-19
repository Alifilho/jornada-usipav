import { useEffect, useState } from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
import Router from "./Routes";
import io from "socket.io-client";

const API_URL = "http://127.0.0.1:5000";
const SOCKET_URL = "http://localhost:1024";

function App() {
  const [message, setMessage] = useState("API not Working!");
  const [temperature] = useState(32);
  const [socket, setSocket] = useState(null);

  const handleHealthCheck = async () => {
    const data = await (await fetch(API_URL, { method: "GET" })).json();

    setTimeout(() => {
      setMessage(data.message);
    }, 3000);
  };

  useEffect(() => {
    handleHealthCheck();
  }, []);

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    const socket = io(SOCKET_URL);
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to socket server");
      socket.emit("message", "Ok computer");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App mh-100 mw-100">
      <div className="w-100 p-2 justify-content-between d-flex bg-dark">
        <div className="d-flex">
          <Link
            to="/"
            className="button rounded-1 d-flex justify-content-center align-items-center bg-info p-3 fw-bold text-white mx-1"
          >
            <BsHouse />
          </Link>
          <Link
            to="/por-silo"
            className="button text-decoration-none fw-bold rounded-1 d-flex justify-content-center align-items-center bg-info p-3 text-white mx-1"
          >
            Visualização por silo
          </Link>
          <Link
            to="/relatorios"
            className="button text-decoration-none fw-bold rounded-1 d-flex justify-content-center align-items-center bg-info p-3 text-white mx-1"
          >
            Relatórios
          </Link>
        </div>
        <div className="text-white fs-2 align-items-center">{temperature}ºC</div>
      </div>
      <Router />
    </div>
  );
}

export default App;
