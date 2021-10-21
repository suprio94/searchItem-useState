import "./styles.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState([
    "Kolkata",
    "Bengaluru",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Pune"
  ]);

  return (
    <div className="App">
      <h1>City Details</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search City.."
      ></input>
      <ul>
        {city
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((city, key) => (
            <li key={key}>{city}</li>
          ))}
      </ul>
    </div>
  );
}
