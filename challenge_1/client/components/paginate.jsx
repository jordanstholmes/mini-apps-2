import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
  }

  a {
    cursor: pointer;
    padding: 10px;
    border: 1px solid gray;
    margin: 0 5px;
  }

  a:hover {
    border: 1px solid red;
  }
`;

const Paginate = ({ handlePageClick, pageCount }) => (
  <Wrapper>
    {
      pageCount ? (
        <ReactPaginate
          activeClassName="active"
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
        />
      )
        : ''
    }
  </Wrapper>
);

Paginate.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
