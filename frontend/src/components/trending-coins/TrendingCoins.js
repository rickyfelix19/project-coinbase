import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardHeader, CardContent, Button } from '@mui/material/';
import HelpIcon from '@mui/icons-material/Help';

function TrendingCoins(props) {
  // API URL
  const trendingURL = 'https://api.coingecko.com/api/v3/search/trending/';

  return (
    <div
      style={{
        background: '#DFE0EB',
        paddingBottom: '15px',
        marginTop: '15px',
        borderRadius: '8px'
      }}
    >
      <div style={{ display: 'inline-flex', marginLeft: '20px' }}>
        <h2>Trending Coins </h2>
      </div>

      {/* trending Cards */}
      <div
        style={{
          display: 'flex',
          margin: '0px 20px',
          justifyContent: 'space-between'
        }}
      >
        {/* {cardTitle.map((data) => { */}
        {/* return ( */}
        <div>
          <Card
            style={{
              background: '#DDE2FF',
              width: 'auto',
              borderRadius: '10px'
              //marginLeft: '17px' // flex justify content
            }}
          >
            <CardHeader title="title" />
            <CardContent>show cards</CardContent>
          </Card>
        </div>
        {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
}

export default TrendingCoins;
