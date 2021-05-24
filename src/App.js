import { Switch, Route, Redirect } from 'react-router';
import NewQuote from './pages/NewQuote';
import AllQuote from './pages/AllQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
