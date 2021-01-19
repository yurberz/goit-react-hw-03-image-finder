import React, { Component } from "react";
import SearchBar from "./Searchbar/SearchBar";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { fetchImagesWithQuery } from "../services/imagesApi";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    largeImageURL: "",
    error: null,
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    const prevPage = prevState.page;
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevPage !== page) {
      this.toNextPageScroll();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) =>
        this.setState({ error: "Something went wrong. Try again." })
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  onOpenModal = (evt) => {
    this.setState({ largeImageURL: evt.target.dataset.source });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toNextPageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.fetchImages} />
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal
            onToggleModal={this.toggleModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default App;
