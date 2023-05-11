import React from 'react';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul>
        <li>
          <span>Good: </span>
          <span>{good}</span>
        </li>
        <li>
          <span>Netural: </span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li>
          <span>Positive: </span>
          <span>{positive} %</span>
        </li>
      </ul>
    </div>
  );
};
