import React, { useEffect } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Homepage from "./components/Homepage";
import { fetchAllFunds } from "./actions/mfActions";
import { connect } from "react-redux";
function App(props) {
  useEffect(() => {
    props.fetchAllFunds();
  }, []);
  return (
      <ThemeProvider>
        <CSSReset />
        <Homepage />
      </ThemeProvider>

  );
}
export default connect(null, { fetchAllFunds })(App);
