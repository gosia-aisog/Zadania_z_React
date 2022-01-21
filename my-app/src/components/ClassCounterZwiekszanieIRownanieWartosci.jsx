import React, { Component } from "react";

class ClassCounterZwiekszanieIRownanieWartosci extends Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0 };
  }
  incrementThicks = () => {
    let { ticks } = this.state;
    ticks = ticks + 1;
    this.setState({ ticks });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementThicks}>
          Lekcja 4 Zad 3 : {this.state.ticks}
        </button>
      </div>
    );
  }
}

export default ClassCounterZwiekszanieIRownanieWartosci;
