import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{props.title} click {count} times</h1>
      <button type="button" onClick={handleCount}>click</button>
    </>
  );
};

ReactDOM.render(<App title="CountUp" />, document.querySelector('#app'));
