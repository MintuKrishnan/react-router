import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuote = () => {
  const DUMMY_QUOTES = [
    { id: 1, author: 'mintu', text: 'Lorem sjdlfkjlksdjflkjsdf' },
    { id: 2, author: 'dimple', text: 'all in one' },
    { id: 3, author: 'krishnan', text: 'work hard' },
  ];

  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuote;
