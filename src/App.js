import { useState } from 'react';
import './App.scss';
import NewButton from './NewButton';
import RandomImages from './RandomImages';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1)
  const decrement = () => counter > 0 ? setCounter(counter - 1) : null;

  return (
    <div className='app'>
      <div className='counter'>
        <h1 className='title'>Counter</h1>
        <h3>{counter}</h3>
        <NewButton 
          name='Increment'
          color='primary'
          func={increment}
        />
        <NewButton 
          name='Decrement'
          color='secondary'
          func={decrement}
        />
      </div>
      <div className='randomImages'>
        <RandomImages 
          api={'https://source.unsplash.com/random'}
        />
      </div>
    </div>
  );
}

export default App;
