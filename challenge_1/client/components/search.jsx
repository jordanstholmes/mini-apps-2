import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;
const defaultText = 'enter keyword(s)';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const { text } = this.state;
    return (
      <div>
        <button type="button">Search</button>
        <input name="text" value={text} onChange={this.handleChange} onClick={this.handleClick} />
      </div>
    );
  }
}
