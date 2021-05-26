import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';

const NotFound = () => {
  return (
    <Card>
      <div className="centered">
        <h1>Page Not found !</h1>
      </div>
      <div className="centered">
        <Link to="/quotes" className="btn ">
          Go to Home
        </Link>
      </div>
    </Card>
  );
};

export default NotFound;
