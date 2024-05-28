import React, {useState} from 'react';
import './App.css';
import TriesCounter from './components/TriesCounter';
import ResetButton from './components/ResetButton';
import GameField from './components/GameField';

interface Props {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = (): Props[] => {
  const cells: Props[] = [];
  for (let i = 0; i < 36; i++) {
    cells.push({
      hasItem: false,
      clicked: false
    });
  }

  const randomCell = Math.floor(Math.random() * cells.length);
  cells[randomCell].hasItem = true;

  return cells;
};

const App: React.FC = () => {
  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const OnReset = () => {
    setItems(createItems());
    setTries(0);
    setGameOver(false);
  };

  const OnItemClick = (index: number) => {
    if (gameOver || items[index].clicked) return;

    const copyItems = items.map((item, i) =>
      i === index ? {...item, clicked: true} : item
    );

    setItems(copyItems);
    setTries(tries + 1);

    if (copyItems[index].hasItem) {
      setGameOver(true);
    }
  };

  return (
    <div className="App">
      <GameField items={items} onItemClick={OnItemClick} />
      {gameOver && <div className="GameOver">Item found! Tries: {tries}</div>}
      <TriesCounter tries={tries} />
      <ResetButton onReset={OnReset} />
    </div>
  );
};

export default App;