import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TagManager from "react-gtm-module";

import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const tagManagerArgs = {
  gtmId: "GTM-NSSL56P"
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
