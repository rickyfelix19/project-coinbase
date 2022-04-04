import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@mui/material/';

import HelpIcon from '@mui/icons-material/Help';
import MarketTable from './MarketTable';

function MarketCapRank() {
  // API URL
  const globalURL = 'https://api.coingecko.com/api/v3/global/';

  //x
  const [marketCard, setMarketCard] = useState('');

  // for hover help
  const [showHelp, setShowHelp] = useState([false]);

  const handleClickOpen = () => {
    setShowHelp(true);
  };

  const handleClose = () => {
    setShowHelp(false);
  };

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
        <h2>Cryptocurrency Prices (by Market Cap Rank)</h2>
        <div>
          <Button
            sx={{ background: 'transparent', color: '#000' }}
            onClick={handleClickOpen}
          >
            <HelpIcon />
          </Button>
        </div>
        <Dialog
          open={showHelp}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Frequently Asked Questions'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <b>What is cryptocurrency market cap?</b>
              <br />
              <br />
              Market cap is one of the most popular metrics in the industry that
              is used to gauge the value of an asset. The market cap of a
              cryptocurrency is calculated based on the coin's total circulating
              supply multiplied by the current price. For detailed examples on
              how the market capitalization of a coin is calculated, please view
              our methodology page.
              <br />
              <br />
              <b>Is it possible to check crypto prices on mobile?</b>
              <br />
              <br />
              Yes, you can check crypto prices on mobile by using the CoinGecko
              app on iOS and Android.
              <br />
              <br />
              <b>What are candlesticks in crypto charts?</b>
              <br />
              <br />
              Candlestick charts give an overview to traders on the price
              movement based on previous trends. The body of the candlestick
              shows where the price of a coin opened and closed for the
              particular period of time which the candlestick represents. If the
              candle is green in a crypto chart, it represents positive changes
              in price while red candle represents negative changes in price.
              The shadow indicates the high price and low price for the period.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose} autoFocus>
              learn how to use market cap
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <MarketTable />
    </div>
  );
}

export default MarketCapRank;

/*
  Number
  Coin ( includes Name and shorthand)
  Price
  1h
  24h
  7d
  24h Volume
  Mkt Cap
  Last 7 Days
*/

/*
  Currency:   'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
  Categories: 'https://api.coingecko.com/api/v3/simple/coins/categories'
  Hashing Algorithms: '???'
  All Platforms: 'https://api.coingecko.com/api/v3/simple/asset_platforms'
*/
