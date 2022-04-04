import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Overview from './components/overview/Overview';
import TrendingCoins from './components/trending-coins/TrendingCoins';

import { flexbox } from '@mui/system';
export default function App() {
  return (
    <div sx={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div style={{ padding: '0px 70px 0px 300px' }}>
        <Overview />
        <TrendingCoins />
      </div>
    </div>
  );
}
