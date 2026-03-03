import React from 'react';
import '../../styles/Card.css';

// icon: react element
// changeColor: either 'positive' or 'negative'
const Card = ({ icon, title, value, change, changeColor }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
      </div>
      {change && <div className={`card-change ${changeColor}`}>{change}</div>}
    </div>
  );
};

export default Card;
