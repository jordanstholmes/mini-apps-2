/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import EventList from './components/eventList';

import Search from './components/search';

const apiUrl = process.env.API_URL || 'http://localhost:3000';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get(`${apiUrl}/events?_page=0`)
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { events } = this.state;
    return (
      <Wrapper>
        <Search />
        {events.length === 0 ? '' : <EventList events={events} />}
      </Wrapper>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
