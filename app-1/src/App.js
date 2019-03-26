import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor() {
  super();

  this.state = {
   text: '' 
  };
}
handleChange(value) {

this.setState({ text: value })

}
render() {

return (
<div className="app">
<input onChange={e => this.handleChange(e.target.value)} type='text' />
<p>{this.state.text}</p>



</div>
)
}
}

export default App;
