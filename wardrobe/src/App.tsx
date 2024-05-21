import React from 'react';
import {NavBody, NavSelector} from "./components/navigation";
import {HeroContainer} from "./components/containers";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBody>
        <p>Hello World!</p>
          <NavSelector text={["Hats", "Shirts", "Shoes"]}/>
      </NavBody>
        <div className={'mainContainer'}>
            <HeroContainer text={"Find Your Design"}/>
        </div>
    </div>
  );
}

export default App;
