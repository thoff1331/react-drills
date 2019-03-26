import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor() {
super();
this.state = {
  filterString: '',
  vacationSpots: ['Greece', 'Italy', 'New Zealand', 'Iceland', 'Turkey']

};
}

handleChange(filter) {
  this.setState({ filterString: filter });
}


  render() {
    let vacationDisplay = this.state.vacationSpots.filter((ele, index) => {
      return ele.includes(this.state.filterString);

    })
    .map((ele, index) => {
      return <h2 key={index}>{ele}</h2>;
    });
return (
      <div className="App">
      <input onChange={ e => this.handleChange(e.target.value )} type="text" />
      {vacationDisplay}

   
      </div>
    );
  }
}

export default App;
