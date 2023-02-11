import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Teams from "./components/Teams";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/teams")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Teams data={data} />
    </div>
  );
}

export default App;
