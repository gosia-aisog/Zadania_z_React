import React, { Component } from "react";

class ClassComponentUkrytyParagraf extends Component {
  constructor(props) {
    super(props);

    this.state = { showParagraph: false };
  }
  visibilityChangeParagraph = () => {
    let { showParagraph } = this.state;
    showParagraph = !showParagraph;
    this.setState({ showParagraph });
  };

  render() {
    let visible;
    if (this.state.showParagraph) {
      visible = <p> A kuku! Lekcja 4 zad 2 </p>;
    }

    return (
      <>
        <p> {visible} </p>
        <button onClick={this.visibilityChangeParagraph}>Odkryj/Zakryj </button>
      </>
    );
  }
}

export default ClassComponentUkrytyParagraf;
