import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import PageBody from "./Components/PageBody";

function App() {
  return (
    <Fragment>
      <PageHeader />
      <PageBody />
      <PageFooter />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
