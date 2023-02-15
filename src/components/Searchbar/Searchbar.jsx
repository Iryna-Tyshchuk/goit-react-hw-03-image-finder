import { Component } from 'react';
import { StyledForm, StyledSearchBar, StyledSpan } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleSearchChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ value: '' });
  };

  render() {
    return (
      <StyledSearchBar>
        <StyledForm onSubmit={this.handleSubmit}>
          <button type="submit">
            <StyledSpan>Search</StyledSpan>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.value}
            onChange={this.handleSearchChange}
          />
        </StyledForm>
      </StyledSearchBar>
    );
  }
}