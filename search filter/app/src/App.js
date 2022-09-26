import React, { useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
        <div className="inputContainer">
          <input
            placeholder="Konsey üyelerinin ismini giriniz"
            type="text"
            className="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dataContainer">
          {Data.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <div className="data" key={val.id}>
                <img src={val.image} />
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
