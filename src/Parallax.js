import React, { useState, useEffect } from 'react';
import './Parallax.css'; 

const Parallax = () => { 
  
  return (
    <div className="parallax">
      <div
        className="parallax-layer parallax-background"
      ></div>
      <div
        className="parallax-layer parallax-text"
      >
        <h1 class="foxsing">Volpiano</h1>
      </div>
      <div className="parallax-layer parallax-image"
      ></div>
    </div>
  );
};

export default Parallax;
