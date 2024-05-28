import React from 'react';

interface Props {
  onReset: () => void;
}

const ResetButton: React.FC<Props> = ({onReset}) => (
  <button onClick={onReset}>Reset</button>
);

export default ResetButton;