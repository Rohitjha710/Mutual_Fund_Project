import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { fetchAllFunds } from "./actions/mfActions";
import { connect } from "react-redux";

import Homepage from "./components/Homepage";
import FundDetails from "./components/fundDetails";
function App(props) {
  useEffect(() => {
    props.fetchAllFunds();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/:fundCode" component={FundDetails} />
      </Router>
    </ThemeProvider>
  );
}
export default connect(null, { fetchAllFunds })(App);
