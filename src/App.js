import React  from 'react';
import imgprimary from './img/149331902_258445488988259_9048814731489784611_n.jpg'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Bibliography from './component/Bibliography/Bibliography'
import Galery from './component/Galery/Galery';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={imgprimary} 
          className="App-logo" 
          alt="logo" 
        />
          <Navbar />
        <Bibliography/>
        <Galery/>
        <img 
          src={imgprimary} 
          className="App-logo" 
          alt="logo" 
        />
      </header>
    </div>
  );
}

export default App;
