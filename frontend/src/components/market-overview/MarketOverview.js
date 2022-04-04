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

import CardOverview from './CardOverview';

function Overview() {
  // API URL
  const globalURL = 'https://api.coingecko.com/api/v3/global/';

  // for cards
  const [marketCard, setMarketCard] = useState([]);

  // for hover help
  const [showHelp, setShowHelp] = useState([false]);

  const handleClickOpen = () => {
    setShowHelp(true);
  };

  const handleClose = () => {
    setShowHelp(false);
  };

  useEffect(() => {
    getAllMarketCards();
  }, []);

  const getAllMarketCards = () => {
    axios.get(globalURL).then((response) => {
      const allMarket = response.data;
      setMarketCard(allMarket);
      console.log(setMarketCard); //function dispatchSetState

      // market capitalization -> globalURL.total_market_cap
      // 24hr trading volume -> globalURL.trading_volume
      // bitcoin market cap -> globalURL.total_market_cap.btc
      // of coins -> globalURL.active_cryptocurrencies
    });
  };

  return (
    <div
      style={{
        background: '#DFE0EB',
        paddingBottom: '15px',
        borderRadius: '8px'
      }}
    >
      <div style={{ display: 'inline-flex', marginLeft: '20px' }}>
        <h2>Market Overview</h2>
        <div>
          <Button
            onClick={handleClickOpen}
            sx={{ background: 'transparent', color: '#000' }}
          >
            <HelpIcon />
          </Button>
        </div>

        {/* hover for states: intention create a message box and cover the messages */}
        <Dialog
          open={showHelp}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Today`s Quick Overview'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The global cryptocurrency market cap today is $2.26 Trillion, a
              1.2% change in the last 24 hours.
              <br /> <br />
              Total cryptocurrency trading volume in the last day is at $101
              Billion. Bitcoin dominance is at <b>38.8%</b> and Ethereum
              dominance is at
              <b> 18.6%</b>. CoinGecko is now tracking 13,523 cryptocurrencies.
              Popular trends of the industry right now are{' '}
              <u>DeFi and Play to Earn.</u>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
      <CardOverview marketCard={marketCard} />
    </div>
  );
}

export default Overview;
