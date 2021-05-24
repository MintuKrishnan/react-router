import React from 'react';
import { Route, useParams } from 'react-router';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const QuoteDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Quote Detail {params.quoteId}</h1>
      {/* <Route path="/quotes/:quoteId/comments"> */}
      {/* <HighlightedQuote>    { id: 2, author: 'dimple', text: 'all in one' }</HighlightedQuote> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
