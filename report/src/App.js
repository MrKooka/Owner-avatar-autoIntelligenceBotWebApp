import './App.css';
import React, {useEffect} from 'react';
import {useTelegram} from './hooks/useTelegram'

function App() {
  const {onToggleButton} = useTelegram();
  
  useEffect(()=>{

  },[])

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
