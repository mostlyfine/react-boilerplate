import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>click {count} times</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>click</button>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
