import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom/";
import Routes from "./routes/routes";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
