import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    setCount(count + Number(e.target.value));
  };

  return (
    <>
      <h1>{props.title} click {count} times</h1>
      <button type="button" onClick={handleCount} value="1">click</button>
    </>
  );
};

ReactDOM.render(<App title="CountUp" />, document.querySelector('#app'));
