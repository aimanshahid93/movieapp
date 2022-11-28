import React from 'react';

export function HomePage() {
  const styles = {
    maxwidth: '60%',
    maxheight: '400px',
    objectfit: 'contain',
  };
  return (
    <div>
      <h2>WELCOME TO THE DHARMA PRODUCTIONS MOVIE APP</h2>
      <img
        style={styles}
        src='https://dharma-production.com/frontend/img/loadingdharma.gif' alt="Dharma Productions"></img>
    </div>

  );
}
