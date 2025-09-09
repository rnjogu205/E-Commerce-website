import React from 'react';
import Model from '../Model/Model.jsx';
import Trending from '../Trending/Trending.jsx';
import Newsletter from '../NewsLetter/NewsLetter.jsx';

const Shop = () => {
  return (
    <div>
      <Model/>
      <Trending category="women"/>
      <Trending category="men"/>
      <Newsletter/>

    </div>
  );
};

export default Shop;