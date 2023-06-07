import React from "react";
import Header from './Header'
import Categories from './Categories'
import Products from './Products'

function App() {
  return (
    <div className="App">
        <div>
          <Header/>
          <Categories/>
          <Products/>
        </div>
    </div>
  );
}

export default App;
