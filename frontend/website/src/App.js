import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom/";
import AppRoute from "./routes/appRoute";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoute></AppRoute>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
