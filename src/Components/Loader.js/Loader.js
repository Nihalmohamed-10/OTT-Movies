import React from 'react';
import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='loadingDiv'>
      <Bars color='#00BFFF' height={80} width={80} />
    </div>
  );
}

export default Loader;
