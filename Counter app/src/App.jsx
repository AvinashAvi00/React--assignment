
import React from 'react';
import './App.css'


function App() {
  const[counter,setcounter]=React.useState(0);
    return (
        <div id='parent'>
          <h1>Counter</h1>
            <h1>{counter}</h1>
            <div>
                <button onClick={()=>{setcounter(counter+1)}}>Increment</button>
                <button onClick={()=>{setcounter(counter-1)}}>Decrement</button>
            </div>
        </div>
  );
}

export default App;
