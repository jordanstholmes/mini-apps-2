import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

const Paginate = ({ handlePageClick, pageCount }) => (
  <Wrapper>
    {
      pageCount ? (
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
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
