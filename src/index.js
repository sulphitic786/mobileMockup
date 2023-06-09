import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Provider from "./context/Context";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <BrowserRouter>
      <Provider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
