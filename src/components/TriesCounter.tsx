import React from 'react';

interface Props {
  tries: number;
}

const TriesCounter: React.FC<Props> = ({tries}) => (
  <div className="Tries">Tries: {tries}</div>
);

export default TriesCounter;