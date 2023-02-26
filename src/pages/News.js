import { useState } from 'react';
import NewTodo from '../components/NewTodo';

const News = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }
  function decrease() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      <h1>Newssssss</h1>

      <div className="counter">
        <button onClick={increase}>+</button>
        <h3>{count}</h3>
        <button onClick={decrease}>-</button>
      </div>
      <NewTodo />
    </div>
  );
};
export default News;
