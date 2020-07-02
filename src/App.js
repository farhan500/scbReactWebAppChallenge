import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/movieDetail/MovieDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/MovieDetails/:value" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
