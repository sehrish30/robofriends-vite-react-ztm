import React, { Component } from "react";

class ErrorBoundary extends Component {
  // give props to allow access to this.props
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  // like try catch block in javascript
  componentDidCatch(error, info) {
    this.state = {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops something went wrong</h1>
        </>
      );
      // anything between ErrorBoundary Component
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
