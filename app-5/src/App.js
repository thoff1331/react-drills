import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RivPZrJsWUEAhcZ1Q-1PQj9aCdwVJl7gZkB9DZNq_UQopxrFfg'} />
      </div>
    );
  }
}

export default App;