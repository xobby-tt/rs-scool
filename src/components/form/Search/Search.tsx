import { Component } from 'react';
import Input from '../Input/Input';

type SearchProps = {
  placeholder?: string;
};

class Search extends Component<SearchProps> {
  inputRef: HTMLInputElement | null;

  constructor(props: SearchProps) {
    super(props);
    this.inputRef = null;
  }

  onSearch = (text: string) => {
    this.setState({ searchText: text });
  };

  setInputRef = (ref: HTMLInputElement | null) => {
    this.inputRef = ref;

    if (this.inputRef) {
      this.inputRef.value = localStorage.getItem('search') || '';
    }
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.inputRef?.value || '');
  }

  render() {
    return (
      <Input placeholder={this.props.placeholder} icon="search" inputRef={this.setInputRef}></Input>
    );
  }
}

export default Search;
