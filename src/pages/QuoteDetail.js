import React from 'react';
import { Route, useParams, useRouteMatch, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = () => {
  const DUMMY_QUOTES = [
    { id: 1, author: 'mintu', text: 'Its raining heavily' },
    { id: 2, author: 'dimple', text: 'all in one' },
    { id: 3, author: 'krishnan', text: 'work hard' },
  ];

  const params = useParams();
  const match = useRouteMatch();
  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id == params.quoteId);
  if (!quote) {
    return <NoQuotesFound></NoQuotesFound>;
  }
  return (
    <div>
      <h1>Quote {params.quoteId}</h1>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat"> */}
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
