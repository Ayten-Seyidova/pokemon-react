import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import { Pokemon } from "./Components/Pokemon";

class App extends Component {
  render() {
    return (
      <Pokemon />
    );
  }
}

export default App;
