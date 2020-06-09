import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Homepage from "./components/Homepage";
function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
