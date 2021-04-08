import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", age: "", Nation: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { firstname, lastname, age, Nation } = this.state;
    e.preventDefault();

    if (this.props.type === "special") {
      alert(`Hello, ${firstname} ${lastname} \nYour nationality is ${Nation} `);
    } else {
      alert(`Hello, ${firstname} ${lastname} \nYour age is ${age} `);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input
          name="firstname"
          type="text"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <div>
          <label>Last Name:</label>
          <input
            name="lastname"
            type="text"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        {this.props.type === "special" && (
          <>
            <div>
              <label>Pick your nationality: </label>
              <select
                name="Nation"
                value={this.state.Nation}
                onChange={this.handleChange}
              >
                <option value="Thai">Thai</option>
                <option value="Austrian">Austrian</option>
                <option value="Canadian">Canadian</option>
              </select>
            </div>

            <div>
              <label>Disability: </label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
          </>
        )}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
  // <React.StrictMode>
  //   <InfoForm />
  // </React.StrictMode>,
  // document.getElementById("root")
  <InfoForm type="normal" />,
  document.getElementById("root")
);
