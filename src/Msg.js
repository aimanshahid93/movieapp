import React from 'react';
import { Counter } from './App';

function Msg({ name, profile }) {
  return (
    <div>
      <img className="profile" src={profile} alt={name} />
      <Counter />
      <h3>🥰{name}🥰</h3>
    </div>
  );
}
