import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { defaultText } = this.props;
    this.state = { text: defaultText };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({ text });
  }

  handleClick() {
    const { text } = this.state;
    const { defaultText } = this.props;
    if (text === defaultText) {
      this.setState({ text: '' });
    }
  }

  searchClick(event) {
    event.preventDefault();
    const { text } = this.state;
    const { handleSearchClick } = this.props;
    handleSearchClick(text);
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.searchClick}>
        <button type="submit">Search</button>
        <input name="text" value={text} onChange={this.handleChange} onClick={this.handleClick} />
      </form>
    );
  }
}

Search.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
  defaultText: PropTypes.string.isRequired,
};

export default Search;
