import React from 'react';
import '../../styles/Button.css';

const Button = ({ children, onClick, primary }) => {
  return (
    <button className={"btn" + (primary ? " btn-primary" : "")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
