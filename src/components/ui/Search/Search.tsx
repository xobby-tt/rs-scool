import { Component } from 'react';
import Input from '../../form/Input';

type SearchProps = {
  placeholder?: string;
};

type SearchState = {
  searchText?: string;
};

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchText: localStorage.getItem('search') || undefined };
  }

  onSearch = (text: string) => {
    this.setState({ searchText: text });
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.searchText || '');
  }

  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        icon="search"
        value={this.state.searchText}
        onChange={this.onSearch}
      ></Input>
    );
  }
}

export default Search;
