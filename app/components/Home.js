import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Начать</button>
        </Link>
      </div>
    )
  }
};

export default Home;
