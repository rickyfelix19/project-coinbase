import React from 'react';
import axios from 'axios';
import { Box, Card, CardActions, CardContent } from '@mui/material/'

function Overview(props){
    const [market, setMarket] = useState([]);
    const [tradingVolume, setTradingVolume] = useState([]);
    const [bitcoinMarket, setBitcoinMarket] = useState([]);
    const [coinsNum, setCoinsNum] = useState([]);

  componentDidMount() {
    //   get everything
    axios.get('https://api.coingecko.com/api/v3/global').then((res) => {
      //   const persons = res.data;
      //   this.setState({ persons });
    });
  }

  render() {
    return (
        <div>
        <h2>Market Overview</h2>
      <ul>
        {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
            ))}
      </ul>
            </div>
    );
  }
}

export default Overview;

/*
    number
    logo
    name
    shorthand
    price_change_24h
    1h percentage
    24h percentage
    7d percentage
    24h Volume
    Mkt Cap
    Last 7 Days
*/