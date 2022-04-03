import React from 'react';
// import DataGrid from '@mui/material/DataGrid';
import axios from 'axios';

import { Card, CardActions, CardContent } from '@mui/material/'

function TrendingCoins() {

    const [market, setMarket] = useState([]);
    const [tradingVolume, setTradingVolume] = useState([]);
    const [bitcoinMarket, setBitcoinMarket] = useState([]);
    const [coinsNum, setCoinsNum] = useState([]);

    const column = [
        
    ]

  componentDidMount() {
    //   get everything
    axios.get('https://api.coingecko.com/api/v3/search/trending').then((res) => {
        .then()
    });
  }
  return (
      <Card sx={{}}>
          <CardContent>

          </CardContent>
      </Card>

  );
}

export default TrendingCoins;
