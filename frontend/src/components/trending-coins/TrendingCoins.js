import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardCoins from './CardCoins';

function TrendingCoins(props) {
  // API URL
  const trendingURL = 'https://api.coingecko.com/api/v3/search/trending/';

  const [trendingCard, setTrendingCard] = useState('');

  useEffect(() => {
    getAllTrendingCards();
  }, []);

  const getAllTrendingCards = () => {
    axios
      .get(trendingURL)
      .then((response) => {
        // setTrendingCard(response.data.coins);
        // console.log(response.data.coins);
        const allData = response.data.coins;
        setTrendingCard(allData);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };
  // if (!trendingCard) return null;
  // console.log(trendingCard); // arrays of 7, just map through this

  return (
    <div
      style={{
        background: '#DFE0EB',
        paddingBottom: '15px',
        marginTop: '15px',
        borderRadius: '8px'
      }}
    >
      <div style={{ display: 'flex', marginLeft: '20px' }}>
        <h2>Trending Coins </h2>
      </div>
      <CardCoins trendingCard={trendingCard} />
    </div>
  );
}

export default TrendingCoins;
