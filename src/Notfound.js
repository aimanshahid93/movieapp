import React from 'react';

export function Notfound() {
  const styles = {
    maxwidth: '60%',
    maxheight: '400px',
    objectfit: 'contain',
  };
  return (
    <div>
      <img
        style={styles}
        src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt="404 ERROR"></img>
    </div>
  );
}
