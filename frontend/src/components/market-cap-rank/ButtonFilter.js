import React from 'react';
import { Button } from '@mui/material';
function ButtonFilter() {
  const title = [
    'Currency',
    'Categories',
    'Hashing Algorithms',
    'All Platforms'
  ];

  //create each title inside JSON to map over using onClick
  // ternary operator, if name === value Currency then show currency
  // etc...

  return (
    <div>
      {title.map((data) => {
        return <Button>{data}</Button>;
      })}
    </div>
  );
}

export default ButtonFilter;
