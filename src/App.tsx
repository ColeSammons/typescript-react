import React from 'react';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
        <Counter>
          {
            (count, setCount) => (
              <div>
                {count}
              <button onClick={() => setCount(0)}></button>
              </div>
            )
          }
        </Counter>
    </div>
  );
}

export default App;
