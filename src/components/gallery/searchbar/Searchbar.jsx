import { Component } from 'react';
import { Searchbar, Button, Input, Form } from './Searchbar.style';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  SubmitForm = e => {
    const { searchValue } = this.state;
    e.preventDefault();

    if (searchValue) {
      this.props.onSubmit(searchValue);
      this.setState({ searchValue: '' });
    } else if (!searchValue) {
      toast.warn('🦖 Поле пустое!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };
  ChangeInputValue = e => {
    this.setState({ searchValue: e.currentTarget.value });
  };

  render() {
    return (
      <Searchbar>
        <Form onSubmit={this.SubmitForm}>
          <Button type="submit">
            <span></span>
          </Button>

          <Input
            value={this.state.searchValue}
            onChange={this.ChangeInputValue}
            type="text"
            autocomplete="off"
            placeholder="Search images"
          />
        </Form>
      </Searchbar>
    );
  }
}
