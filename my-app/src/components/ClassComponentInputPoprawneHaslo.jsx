import React, { Component } from "react";

class ClassComponentInputPoprawneHaslo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputType: "password" };
  }

  passwordVisibility = () => {
    let { inputType } = this.state;
    if (inputType === "password") {
      inputType = "text";
    } else {
      inputType = "password";
    }
    this.setState({ inputType });
  };

  render() {
    return (
      <div>
        <input type={this.state.inputType}></input>
        <button onClick={this.passwordVisibility}>
          PoprawneHaslo lekcja 4 zad 5
        </button>
      </div>
    );
  }
}

export default ClassComponentInputPoprawneHaslo;
