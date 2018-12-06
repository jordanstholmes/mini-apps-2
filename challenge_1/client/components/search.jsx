import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;
const defaultText = 'enter keyword(s)';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
    };
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
    if (text === defaultText) {
      this.setState({ text: '' });
    }
  }

  searchClick() {
    const { text } = this.state;
    const { handleSearchClick } = this.props;
    handleSearchClick(text);
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <button type="button" onClick={this.searchClick}>Search</button>
        <input name="text" value={text} onChange={this.handleChange} onClick={this.handleClick} />
      </div>
    );
  }
}

Search.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default Search;
