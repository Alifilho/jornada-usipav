import { useEffect, useState } from "react"

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

  return (
    <div className="App">Hello World, {message}</div>
  )
}

export default App
