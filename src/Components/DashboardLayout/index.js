/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./dashboardlayout.scss";
import AllAccounts from "../../Pages/AllAccounts";
import { Switch, Route, NavLink } from "react-router-dom";
import Invoicing from "../../Pages/Invoicing";
const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header"></header>
      <aside className="dashboard__side-nav">
        <div className="logo">
          <img src="./logo2.svg" alt="Prospa logo" />
          <h3>Prospa</h3>
        </div>
        <nav className="side-nav">
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className="side-nav-item"
          >
            <img src="./accounts.svg" alt="Accounts" />
            <span>Accounts</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/invoicing"
            className="side-nav-item"
          >
            <img src="./invoice.svg" alt="Accounts" />
            <span>Invoicing</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/account-management"
            className="side-nav-item"
          >
            <img src="./account-management.svg" alt="Accounts" />
            <span>Account Management</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/profile"
            className="side-nav-item"
          >
            <img src="./profile.svg" alt="Accounts" />
            <span>My profile</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/security"
            className="side-nav-item"
          >
            <img src="./security.svg" alt="Accounts" />
            <span>Security</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/support"
            className="side-nav-item"
          >
            <img src="./profile.svg" alt="Accounts" />
            <span>Support</span>
          </NavLink>
        </nav>
      </aside>
      <main className="dashboard__main">
        <Switch>
          <Route path="/" exact>
            <AllAccounts />
          </Route>
          <Route path="/invoicing">
            <Invoicing />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default DashboardLayout;
