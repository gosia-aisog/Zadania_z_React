import React, { Component } from "react";

class ClassCounterZwiekszanieLimituLicznika extends Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0, disabled: false };
  }
  incrementThicks = () => {
    let { ticks } = this.state;
    if (ticks < 10) {
      ticks = ticks + 1;
      this.setState({ ticks });
    } else if (ticks >= 10) {
      // visible = !visible;
      this.setState({ ticks: 11, disabled: true });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementThicks} disabled={this.state.disabled}>
          Lekcja 4 Zad 4 : {this.state.ticks}
        </button>
      </div>
    );
  }
}

export default ClassCounterZwiekszanieLimituLicznika;
