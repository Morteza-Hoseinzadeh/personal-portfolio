import React from 'react';
import './snowEffect.css';

export default function SnowEffect() {
  const snowflakes = Array.from({ length: 100 });

  return (
    <div className='snow-container'>
      {snowflakes.map((_, index) => (
        <div key={index} className='snow'></div>
      ))}
    </div>
  );
}
