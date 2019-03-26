import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
 super();

this.state = {
  favoriteAthletes: ['1 Kobe', '2 Calvin Johnson', '3 Barry Sanders', '4 Tiger Woods', '5 John Daly', '6 Dontrelle Willis']
};
  }

  render() {
    let displayFavoriteAthletes = this.state.favoriteAthletes.map((ele, index) =>  {
      return <h1 key={index}>{ele}</h1>;
    

      });
     return  <div className="App"><h1 class='head'>Favorite Athletes</h1>
     {displayFavoriteAthletes}</div>
       

    
  }
}

export default App;
