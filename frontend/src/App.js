import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Overview from './components/market-overview/MarketOverview';
import TrendingCoins from './components/trending-coins/TrendingCoins';
import MarketOverview from './components/market-cap-rank/MarketCapRank';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div style={{ padding: '10px 70px 0px 300px' }}>
        <Overview />
        <TrendingCoins />
        <MarketOverview />
      </div>
    </div>
  );
}
