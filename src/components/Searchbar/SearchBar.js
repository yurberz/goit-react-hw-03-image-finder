import React, { Component } from "react";
import Header from "./SearchBarStyled";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = (evt) => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { query } = this.state;

    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

export default SearchBar;
