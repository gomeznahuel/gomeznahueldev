import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Context
import { MyContextProvider } from "./context/MyContext";

ReactDOM.render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
