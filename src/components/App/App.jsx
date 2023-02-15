import React, { Component } from 'react';
// import axios from 'axios';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { requestImages } from '../../services/api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledApp } from './App.styled';
import { Button } from 'components/Button/Button';
export class App extends Component {
  state = {
    images: [],
    totalImages: 0,
    isLoading: false,
    error: null,
    page: 1,
    query: '',
    modalData: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page, error } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
    if (prevState.error !== error && error) {
      toast.error(error);
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });

      const { images, totalImages } = await requestImages(query, page);

      if (!images.length) {
        this.setState({ error: 'Sorry. There are no images ... 😭' });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        error: '',
        totalImages,
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getQuery = ({ value }) => {
    if (!value.trim() || value === this.state.query) {
      this.setState({ error: 'Please, change your request' });
      return;
    }
    this.setState({
      query: value,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error, totalImages } = this.state;

    return (
      <StyledApp>
        <SearchBar onSubmit={this.getQuery} />
        {images.length !== 0 && <ImageGallery images={images} />}
        {!isLoading && images.length === 0 && !error && (
          <p textAlign="center">Sorry. There are no images ... 😭</p>
        )}

        {error && <p textAlign="center">{error}</p>}

        {!isLoading && totalImages !== images.length && (
          <Button type="button" onClick={this.loadMore}>
            Load more
          </Button>
        )}

        {isLoading && <p textAlign="center">Loading</p>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          theme="colored"
        />
      </StyledApp>
    );
  }
}
