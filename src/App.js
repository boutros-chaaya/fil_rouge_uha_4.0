import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Teams from "./components/Teams";

function App() {
  const [data, setData] = useState([
    {
      "id": 1,
      "name": "Charlotte Hornets",
      "location": "Charlotte, North Carolina",
      "division": "Southeast",
      "creation": "1988",
      "colors": ["vert", "violet foncé", "gris", "blanc"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg"
    },
    {
      "id": 2,
      "name": "Boston Celtics",
      "location": "Boston, Massachusetts",
      "division": "Atlantic",
      "creation": "1946",
      "colors": ["vert", "or", "noir", "brun", "blanc"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
    },
    {
      "id": 3,
      "name": "Chicago Bulls",
      "location": "Chicago, Illinois",
      "division": "Central",
      "creation": "1966",
      "colors": ["rouge", "noir"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/239px-Chicago_Bulls_logo.svg.png"
    },
    {
      "id": 4,
      "name": "Miami Heat",
      "location": "Miami, Florida",
      "division": "Southeast",
      "creation": "1988",
      "colors": ["rouge", "noir", "jaune"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/200px-Miami_Heat_logo.svg.png"
    },
    {
      "id": 5,
      "name": "New Orleans Pelicans",
      "location": "New Orleans, Louisiana",
      "division": "Southeast",
      "creation": "2002",
      "colors": ["bleu marine", "or", "rouge"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/246px-New_Orleans_Pelicans_logo.svg.png"
    },
    {
      "id": 6,
      "name": "Dallas Mavericks",
      "location": "Dallas, Texas",
      "division": "Southwest",
      "creation": "1980",
      "colors": ["bleu roi", "bleu marine", "argent", "noir"],
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/248px-Dallas_Mavericks_logo.svg.png"
    }
  ])

  return (
    <div className="App">
      <Header />
      <Teams data={data}/>
    </div>
  );
}

export default App;
