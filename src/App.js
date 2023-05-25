import { useState } from 'react';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }
  const Decrement = () => {
    setCount(count - 1);
  }
  const Reset = () => {
    setCount(count - count);
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <div className='buttons-container'>
        <button type='button' onClick={Decrement}>-</button>
        <button type='button' onClick={Reset}>Reset</button>
        <button type='button' onClick={Increment}>+</button>
      </div>
    </>
  )
}
export default App