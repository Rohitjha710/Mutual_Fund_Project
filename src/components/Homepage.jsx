import React, { Component } from "react";
import Funds from "./FundsHomepage";
import FilterSort from "./filter-sorts";
import {Heading,Box} from "@chakra-ui/core";
class Homepage extends Component {
  render() {
    return (
      <React.Fragment><Box minH="70px" borderBottom="1px solid hsl(0,0%,92%)">
<Heading fontSize="2rem" pt="10px" textAlign="center" fontFamily="Helvetica" color="#1f7ae0">Mutual Funds Project</Heading>
</Box> <FilterSort/>
        <Funds />{" "}
      </React.Fragment>
    );
  }
}

export default Homepage;
