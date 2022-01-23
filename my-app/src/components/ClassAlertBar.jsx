import React, { Component } from "react";

export default class ClassAlertBar extends Component {
  constructor(props) {
    super(props);

    this.state = { isDisplayed: true };
  }

  disappearParagraph = () => {
    let { isDisplayed } = this.state;
    isDisplayed = !isDisplayed;
    this.setState({ isDisplayed });
  };
  render() {
    return (
      <div>
        {this.state.isDisplayed ? (
          <p>
            Lekcja 4 Zadanie 7{" "}
            <button onClick={this.disappearParagraph}> X </button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
