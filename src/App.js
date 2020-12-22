import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import "./index.css";

// props gives us a one way data flow, parent -> child
// state allows us to update private data from a component

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Orion",
        job: "Software Developer",
      },
      {
        name: "Tyanna",
        job: "Artist",
      },
      {
        name: "Aisha",
        job: "Manager",
      },
    ],
  };

  // this function removes a character from the state.characters array
  removeCharacter = (index) => {
    const { characters } = this.state;
    //this.setState is how you modify/update an array using a built in method for modifying state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    // create character data to pass through to Table component as a property/prop
    const characters = [];

    return (
      <div className="container">
        {/* Using the characters data to pass through to Table as a property*/}
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
