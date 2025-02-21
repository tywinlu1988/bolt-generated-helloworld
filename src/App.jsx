import React from 'react';
import './App.css';
import { Tilt } from 'react-tilt';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <Tilt className="Tilt" options={{ max: 45, perspective: 1000 }} style={{ height: 200, width: 500 }}>
        <div className="Tilt-inner">
          <h1>
            <Typewriter
              options={{
                strings: ['Hello, World!'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'Typewriter__wrapper',
              }}
            />
          </h1>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
