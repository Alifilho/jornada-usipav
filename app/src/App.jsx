import { useEffect, useState } from "react"
import Home from "./pages/Home";

const API_URL = "http://127.0.0.1:5000"

function App() {
  const [message, setMessage] = useState("API not Working!")

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
    <div className="App h-full w-full">
      <Home />
    </div>
  )
}

export default App
