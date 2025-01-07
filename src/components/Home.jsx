import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //Similar to an Anchor Tag

const Home = (props) => {
  return (
    <div>
        <Link to={'/form'} style={{color: 'red'}}>Go To Form</Link>
        <h2>Home</h2>
    </div>
  );
}

export default Home;