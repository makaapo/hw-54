import React from 'react';
import OneCell from './OneCell';

interface Props {
  items: { hasItem: boolean; clicked: boolean }[];
  onItemClick: (index: number) => void;
}

const GameField: React.FC<Props> = ({ items, onItemClick }) => (
  <div className="Field">
    {items.map((item, index) => (
      <OneCell
        key={index}
        hasItem={item.hasItem}
        clicked={item.clicked}
        onClick={() => onItemClick(index)}
      />
    ))}
  </div>
);

export default GameField;