import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
function MarketTable() {
  const [marketTable, setMarketTable] = useState([]);
  const coinListURL = 'https://api.coingecko.com/api/v3/coins/list';

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300,
      position: 'sticky'
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 300,
      position: 'sticky'
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      position: 'sticky'
    }
  ];

  useEffect(() => {
    getAllMarketCards();
  }, []);

  const getAllMarketCards = () => {
    axios.get(coinListURL).then((response) => {
      const allCoinList = response.data;
      setMarketTable(allCoinList);
      console.log(setMarketTable);
    });
  };

  console.log(marketTable);

  return (
    <div style={{ height: 1000, width: '100%', padding: '20px' }}>
      <DataGrid
        checkboxSelection
        rows={marketTable}
        columns={columns}
        style={{ border: '1px solid red', background: 'lightgrey' }}
      />
    </div>
  );
}

export default MarketTable;
