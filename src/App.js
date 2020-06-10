import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import Homepage from "./components/Homepage";
function App() {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <CSSReset />
      <Homepage />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
