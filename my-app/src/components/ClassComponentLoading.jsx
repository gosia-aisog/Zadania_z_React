import React, { Component } from "react";

class ClassComponentLoading extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    setTimeout(
      () => this.setState((state) => ({ ...state, isLoading: false })),
      2 * 1000
    );
  }

  render() {
    return (
      <h1>{this.state.isLoading ? "Loading" : "Witaj: Lekcja 4 zad 1"}</h1>
    );
  }
}

export default ClassComponentLoading;
