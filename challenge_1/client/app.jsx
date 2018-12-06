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

const ColumnWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      // page: 0,
      pageCount: 0,
      lastSearched: '',
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  fetchEvents(page, keyword) {
    const { perPage } = this.props;
    // const query = `${API_URL}/events?q=${keyword}&_page=${page}&_limit=${perPage}`;
    const query = `${API_URL}/events?q=${keyword}&_page=${page}&_limit=${perPage}`;
    console.log('The query was:', query);
    return axios.get(query)
      .then((res) => {
        const totalEvents = Number(res.headers['x-total-count']);
        const pageCount = Math.ceil(totalEvents / perPage);
        console.log('Got this data:', res.data);
        this.setState({
          events: res.data,
          pageCount,
        });
      })
      .catch(err => console.error(err));
  }

  handleSearchClick(keyword) {
    this.fetchEvents(0, keyword);
    this.setState({ lastSearched: keyword });
  }

  handlePageClick({ selected }) {
    const { lastSearched } = this.state;
    console.log('Search term:', lastSearched);
    console.log('Page requested', selected);
    // Note below: ReactPaginate is 0-indexed, but json-server starts at 1
    this.fetchEvents(selected + 1, lastSearched);
    // .then(res => this.setState({ events: res.data, pageCount: Number(res.headers['x-total-count']) }));
  }

  render() {
    const { events, pageCount } = this.state;
    return (
      <ColumnWrapper>
        <Search handleSearchClick={this.handleSearchClick} />
        <Paginate pageCount={pageCount} handlePageClick={this.handlePageClick} />
        {events.length === 0 ? '' : <EventList events={events} />}
      </ColumnWrapper>
    );
  }
}

App.propTypes = {
  perPage: PropTypes.number.isRequired,
};

ReactDom.render(<App perPage={10} />, document.getElementById('app'));
