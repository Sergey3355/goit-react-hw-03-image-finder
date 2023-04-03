import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    inputData: '',
  };
  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { inputData } = this.state;
    this.props.onSubmit(inputData);
    this.setState({ inputData: '' });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ inputData: '' });
  };

  render() {
    const { inputData } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}></button>

          <input
            className={css.SearchForm_input}
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
