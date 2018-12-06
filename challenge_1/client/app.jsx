/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import EventList from './components/eventList';

import Search from './components/search';

const apiUrl = process.env.API_URL || 'http://localhost:3000';

const ColumnWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowWrapper = styled.div`
  display: flex;
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

        <RowWrapper>
          {
            pageCount && (
              <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
              />
            )
          }
        </RowWrapper>
      </ColumnWrapper>
    );
  }
}

App.propTypes = {
  perPage: PropTypes.number.isRequired,
};

ReactDom.render(<App perPage={10} />, document.getElementById('app'));
