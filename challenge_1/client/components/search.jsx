import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'enter keyword(s)',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <Wrapper>
        <button type="button">Search</button>
        <input name="text" value={text} />
      </Wrapper>
    );
  }
}
