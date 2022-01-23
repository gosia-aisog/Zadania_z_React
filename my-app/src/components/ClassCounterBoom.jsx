import React, { Component } from "react";

export default class ClassCounterBoom extends Component {
  constructor(props) {
    super(props);
    this.state = { counting: 5 };

    let counting = this.state;
    function countingDown() {
      if (counting > 1) {
        while (counting > 1) {
          setTimeout(
            () =>
              this.setState((state) => ({ ...state, counting: counting - 1 })),
            1000
          );
          counting = counting - 1;
        }
      } else {
        counting = "Boom!lekcja 4 zad 6";
        this.setState({ counting });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.counting}</h1>
      </div>
    );
  }
}
