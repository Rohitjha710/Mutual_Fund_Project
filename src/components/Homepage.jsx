import React, { Component } from "react";
import Funds from "./FundsHomepage";
import FilterSort from "./filter-sorts";
class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <FilterSort />
        <Funds />{" "}
      </React.Fragment>
    );
  }
}

export default Homepage;
