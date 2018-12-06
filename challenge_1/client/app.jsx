/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import EventList from './components/eventList';
import Search from './components/search';
import Paginate from './components/paginate';

const API_URL = process.env.API_URL || 'http://localhost:3000';
const DEFAULT_SEARCH_TEXT = 'enter keyword(s)';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 0,
      lastSearched: '',
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  fetchEvents(page, keyword) {
    const { perPage } = this.props;
    const query = `${API_URL}/events?q=${keyword}&_page=${page}&_limit=${perPage}`;
    return axios.get(query)
      .then((res) => {
        const totalEvents = Number(res.headers['x-total-count']);
        const pageCount = Math.ceil(totalEvents / perPage);
        this.setState({
          events: res.data,
          pageCount,
        });
      })
      .catch(err => console.error(err));
  }

  handleSearchClick(keyword) {
    if (keyword === DEFAULT_SEARCH_TEXT) return;
    this.fetchEvents(0, keyword);
    this.setState({ lastSearched: keyword });
  }

  handlePageClick({ selected }) {
    const { lastSearched } = this.state;
    console.log('Search term:', lastSearched);
    console.log('Page requested', selected);
    // Note: below, +1 is because ReactPaginate is 0-indexed, but json-server is 1-indexed
    this.fetchEvents(selected + 1, lastSearched);
  }

  render() {
    const { events, pageCount } = this.state;
    return (
      <Wrapper>
        <Title>Historical Events Finder</Title>
        <Search handleSearchClick={this.handleSearchClick} defaultText={DEFAULT_SEARCH_TEXT} />
        <Paginate pageCount={pageCount} handlePageClick={this.handlePageClick} />
        <EventList events={events} />
      </Wrapper>
    );
  }
}

App.propTypes = {
  perPage: PropTypes.number.isRequired,
};

ReactDom.render(<App perPage={10} />, document.getElementById('app'));
