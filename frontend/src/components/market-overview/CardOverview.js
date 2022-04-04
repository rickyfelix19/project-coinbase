import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material/';

function CardOverview(props) {
  const displayCardOverview = (props) => {
    const { marketCard } = props;

    const cardTitle = [
      'Market Capitalization',
      '24h Trading Volume',
      'Bitcoin Market Cap Dominance',
      'Number of Coins'
    ];

    if (marketCard.length > 0) {
      return marketCard.map((card, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              margin: '0px 20px',
              justifyContent: 'space-between'
            }}
          >
            {cardTitle.map((data) => {
              return (
                <Card
                  style={{
                    background: '#DDE2FF',
                    width: 'auto',
                    borderRadius: '10px',
                    marginLeft: '10px'
                  }}
                >
                  <CardHeader title={data} />
                  <CardContent>description</CardContent>
                </Card>
              );
            })}
          </div>
        );
      });
    } else {
      return (
        <p style={{ marginLeft: '30px' }}>
          if this message shows, it means axios has gone horribly wrong
        </p>
      );
    }
  };
  return <>{displayCardOverview(props)}</>;
}

export default CardOverview;
