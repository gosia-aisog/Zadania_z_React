import React, { Component } from "react";

export default class ClassCounterBoom extends Component {
  constructor(props) {
    super(props);
    this.state = { counting: 5 };

    let { counting } = this.state;
    setTimeout(() => {
      while (counting > 0) counting = counting - 1;

      this.setState({ counting });
    }, 5000);
  }

  render() {
    if (this.state.counting > 0) {
      return (
        <div>
          <h1>{this.state.counting}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Boom!Lekcja 4 zadanie 6</h1>
        </div>
      );
    }
  }
}
