import React from "react";
import "./App.css";

import "tachyons";
import CardList from "../components/card-list";
import SearchBox from "../components/searchbox.component";
import Scroll from "../components/scroll.component";

class App extends React.Component {
  constructor() {
    // super calls the constructor of component
    super();

    // state is something that can change
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // the component is mounted and its rendered
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
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
    const { robots, searchField } = this.state;
    const filterrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <React.Fragment>
        <h1>Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterrobots} />
        </Scroll>
      </React.Fragment>
    );
  }
}

export default App;
