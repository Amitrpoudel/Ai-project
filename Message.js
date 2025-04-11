import React from 'react';
import './Message.css';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <span>{text}</span>
    </div>
  );
};

export default Message;