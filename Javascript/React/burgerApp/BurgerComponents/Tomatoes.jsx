import React from 'react';
import Classes from './styles/Tomatoes.module.css';

const Tomatoes = () => {
  return (
    <div className={Classes.group}>
      <div className={Classes.Tomatoes}></div>
      <div className={Classes.Tomatoes}></div>
    </div>
  )
    
}

export default Tomatoes;