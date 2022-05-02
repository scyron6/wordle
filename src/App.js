import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWord } from './components/gameSlice.js';
import Game from './components/Game.js';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWord());
  });

  return (
    <div className='body flex-center flex-column'>
      {/* <h1 className='title'>Wordle</h1> */}
      <Game />
    </div>
  );
}

export default App;
