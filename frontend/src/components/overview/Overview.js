import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardHeader, CardContent, Button } from '@mui/material/';
import HelpIcon from '@mui/icons-material/Help';

function Overview(props) {
  // API URL
  const globalURL = 'https://api.coingecko.com/api/v3/global/';

  // for cards
  const [market, setMarket] = useState([]);
  const [tradingVolume, setTradingVolume] = useState([]);
  const [bitcoinMarket, setBitcoinMarket] = useState([]);
  const [coinsNum, setCoinsNum] = useState([]);

  // for hover help
  const [showHelp, setShowHelp] = useState([false]);

  // const getAllOverviewData = () => {
  //   axios
  //     .get(`${globalURL}`) // fetch data from API
  //     .then((res) => {
  //       // active crypto
  //       const allActiveCrypto = res.data.active_cryptocurrencies;
  //       setCoinsNum(allActiveCrypto); // set data into state

  //       // sumMarketCap
  //       // "total_market_cap"

  //       // sumVolume
  //       // "total_volume"

  //       // TotalMarketCap
  //       // "btc/sumMarketCap x 100%",
  //     })
  //     // error response
  //     .catch((err) => console.error(`Error: ${err}`));
  // };

  // if (!market) return null;

  const cardTitle = [
    'Market Capitalization',
    '24h Trading Volume',
    'Bitcoin Market Cap Dominance',
    'Number of Coins'
  ];

  return (
    <div
      style={{
        background: '#DFE0EB',
        paddingBottom: '15px',
        borderRadius: '8px'
      }}
    >
      <div style={{ display: 'inline-flex', marginLeft: '20px' }}>
        <h2>Market Overview </h2>
        <Button
          sx={{ background: 'transparent', color: '#000' }}
          onMouseEnter={() => setShowHelp(true)}
          onMouseLeave={() => setShowHelp(false)}
        >
          <HelpIcon />
        </Button>
      </div>

      {/* hover for states: intention create a message box and cover the messages */}
      <div>
        {showHelp && (
          <div
            style={{
              background: 'white',
              marginLeft: '20px',
              padding: '10px 10px 10px 20px',
              width: '50%'
            }}
          >
            The global cryptocurrency market cap today is
            <b> $2.26 Trillion</b>, a <b>1.2% change</b> in the last 24 hours.
            Total cryptocurrency trading volume in the last day is at
            <b>$101 Billion</b>. Bitcoin dominance is at <b>38.8% </b>
            and Ethereum dominance is at <b>18.6%</b>. CoinGecko is now tracking
            <b> 13,523</b> cryptocurrencies. Popular trends of the industry
            right now are <u>DeFi</u> and <u>Play to Earn.</u>
          </div>
        )}
      </div>

      {/* create Card */}
      <div
        style={{
          display: 'flex',
          margin: '0px 20px',
          justifyContent: 'space-between'
        }}
      >
        {cardTitle.map((data) => {
          return (
            <div>
              <Card
                style={{
                  background: '#DDE2FF',
                  width: 'auto',
                  borderRadius: '10px'
                  //marginLeft: '17px' // flex justify content
                }}
              >
                <CardHeader title={data} />
                <CardContent>returns from the API key</CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
