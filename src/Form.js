import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // it is no longer necessary to inlucde a constructor on React class components
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;

  // this is our event handler for the form name input
  handleChange = (event) => {
    // this is object destructuring syntax
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitform = () => {
    // calls the handleSubmit function
    this.props.handleSubmit(this.state);
    // calls the setState build-in method that changes the state of the component
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    // onChange -- when the input changes it calls this.handleChange which updates the state
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        ></input>
        <input type="button" value="Submit" onClick={this.submitform} />
      </form>
    );
  }
}

export default Form;
