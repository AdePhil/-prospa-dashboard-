import React from "react";
import DashboardLayout from "./Components/DashboardLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <DashboardLayout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
