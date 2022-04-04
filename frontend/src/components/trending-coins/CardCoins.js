import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material/';

function CardCoins(props) {
  const displayCardCoin = (props) => {
    const { trendingCard } = props;

    if (trendingCard.length > 0) {
      return trendingCard.map((card, index) => {
        // console.log(card);
        return (
          // trending Cards
          <div
            key={card.item.id}
            style={{
              display: 'inline-flex',
              margin: '20px 20px',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <div>
              <Card
                style={{
                  background: '#DDE2FF',
                  width: 'auto',
                  borderRadius: '10px',
                  marginLeft: '10px'
                }}
              >
                <CardHeader title={card.item.name + '\n' + card.item.symbol} />
                <CardContent>${card.item.price_btc}</CardContent>
              </Card>
            </div>
          </div>
        );
      });
    } else {
      return <p>something is wrong</p>;
    }
  };
  return <>{displayCardCoin(props)}</>;
}

export default CardCoins;
