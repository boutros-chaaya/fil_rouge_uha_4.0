import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Players from "./components/Players";


function App() {
  const teamsUrl = "http://localhost:8000/teams"
  

  const [teamsData, setteamsData] = useState([]);
  

  useEffect(() => {
    fetch(teamsUrl)
      .then((response) => response.json())
      .then((teamsData) => setteamsData(teamsData));
      
  }, []);

  return (
    <div className="App">
      <Header />
      <Teams data={teamsData} setData={setteamsData}/>
      
    </div>
  );
}

export default App;
