import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./index.css";

// props gives us a one way data flow, parent -> child
// state allows us to update private data from a component

class App extends Component {
  state = {
    characters: [],
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

  handleSubmit = (character) => {
    // using the spread operator to add a new character to the existing characters array
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    // create character data to pass through to Table component as a property/prop
    const { characters } = this.state;

    return (
      <div className="container">
        {/* Using the characters data & removeCharacter function to pass through to Table as a property*/}
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
