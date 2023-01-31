import React from "react";
import "./App.css";
import { robots } from "./services/robots";
import "tachyons";
import CardList from "./components/card-list";
import SearchBox from "./components/searchbox.component";

class App extends React.Component {
  constructor() {
    // super calls the constructor of component
    super();

    // state is something that can change
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  // here this value is according to where it was
  // created which is the app by arrow functions
  onSearchChange = (event) => {
    // update state
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const filterrobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <React.Fragment>
        <h1>Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterrobots} />
      </React.Fragment>
    );
  }
}

export default App;
