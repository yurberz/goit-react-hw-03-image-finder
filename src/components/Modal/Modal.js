import React, { Component } from "react";
import Div from "./ModalStyled";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onToggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <Div onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </Div>
    );
  }
}

export default Modal;
