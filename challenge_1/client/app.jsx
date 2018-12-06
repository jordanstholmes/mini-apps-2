/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import EventList from './components/eventList';
import Search from './components/search';
import Paginate from './components/paginate';

const apiUrl = process.env.API_URL || 'http://localhost:3000';

const ColumnWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  static fetchEvents(page, perPage) {
    return axios.get(`${apiUrl}/events?_page=${page}&_limit=${perPage}`)
      .catch(err => console.error(err));
  }

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      page: 0,
      pageCount: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { perPage } = this.props;
    App.fetchEvents(page, perPage)
      .then(res => this.setState({
        events: res.data,
        pageCount: Number(res.headers['x-total-count']) / perPage,
      }));
  }

  handlePageClick({ selected }) {
    const { perPage } = this.props;
    App.fetchEvents(selected, perPage)
      .then(res => this.setState({ events: res.data, pageCount: Number(res.headers['x-total-count']) }));
  }

  render() {
    const { events, pageCount } = this.state;
    return (
      <ColumnWrapper>
        <Search />
        {events.length === 0 ? '' : <EventList events={events} />}
        <Paginate pageCount={pageCount} handlePageClick={this.handlePageClick} />
      </ColumnWrapper>
    );
  }
}

App.propTypes = {
  perPage: PropTypes.number.isRequired,
};

ReactDom.render(<App perPage={10} />, document.getElementById('app'));
