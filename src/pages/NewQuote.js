import React from 'react';
import { Route } from 'react-router';
import Comments from '../components/comments/Comments';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
