import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const API_URL = process.env.API_URL || 'https://api.coindesk.com/v1/bpi/historical/close.json';

class CoinDesk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    fetch(`${API_URL}?start=2016-12-01&end=2017-01-01`)
      .then(result => result.json())
      .then(json => this.setState({ text: JSON.stringify(json) }));
  }

  render() {
    const { text } = this.state;
    return <div>{text}</div>;
  }
}

export default CoinDesk;
