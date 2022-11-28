import { useState } from "react";
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';





export function Counter() {
  const [Like, setLike] = useState(0);
  const [DisLike, setDisLike] = useState(0);
  const style = { background: Like > 10 ? "green" : "orange" };
  

  return (
    <div className='Counter-button-container'>
      {Like >= 10 ? <p>An ImDB recommended movie❤️</p> : null}
      <div className="Counter-button">
        <IconButton color="primary" aria-label="Like">
        <Badge badgeContent={Like} onClick={() => setLike(Like + 1)} color="primary">
        👍
        </Badge>
        </IconButton>
        <IconButton color="primary" aria-label="disLike">
        <Badge badgeContent={DisLike} onClick={() => setDisLike(DisLike + 1)} color="error">
        👎
        </Badge>
        </IconButton>
      </div>
      <progress className='Counter-progress' max="100" value={Like / (Like + DisLike) * 100}></progress>
    </div>
  );
}
