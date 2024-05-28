import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const OneCell: React.FC<Props> = ({hasItem, clicked, onClick}) => (
  <div className={`Cell ${clicked ? 'clicked' : ''}`} onClick={onClick}>
    {clicked && hasItem ? 'O' : ''}
  </div>
);

export default OneCell;