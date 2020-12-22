import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import "./index.css";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Orion",
        job: "software Developer",
      },
      {
        name: "Tyanna",
        job: "Artist",
      },
      {
        name: "Aisha",
        job: "Manager",
      },
    ];

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
