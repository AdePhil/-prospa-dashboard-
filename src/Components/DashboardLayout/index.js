/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./dashboardlayout.scss";
import AllAccounts from "../../Pages/AllAccounts";
import { Switch, Route, NavLink } from "react-router-dom";
import Invoicing from "../../Pages/Invoicing";
import Sidebar from "../Sidebar";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMore from "@material-ui/icons/ExpandMore";

const initialSideBarItems = [
  {
    id: 1,
    name: "accounts",
    label: "Accounts",
    link: "/",
    open: false,
    items: [
      { id: 2, name: "current", label: "Current", link: "/accounts/current" },
      { id: 3, name: "savings", label: "Savings", link: "/accounts/savings" },
      { id: 4, name: "tax", label: "Tax", link: "/accounts/tax" }
    ]
  },
  {
    id: 5,
    name: "invoice",
    label: "Invoicing",
    link: "/invoicing",
    open: false
  },
  {
    id: 6,
    name: "account-management",
    label: "Account Management",
    link: "/account-management",
    open: false,
    items: [
      {
        id: 2,
        name: "settings",
        label: "Settings",
        link: "/account-management/settings"
      }
    ]
  },
  {
    id: 7,
    name: "profile",
    label: "My Profile",
    link: "/profile",
    open: false
  },
  {
    id: 8,
    name: "security",
    label: "Security",
    link: "/security",
    open: false
  },
  { id: 9, name: "support", label: "Support", link: "/support", open: false }
];

const DashboardLayout = () => {
  const [sideBarItems, setSideBarItems] = useState(initialSideBarItems);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__header-message">
          <img src="./envelop.svg" alt="Message" />
        </div>
        <div className="dashboard__header-user">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            fontFamily={"Gilroy"}
          >
            <img src="./user.svg" alt="User" />
            <span>Victor Shiwani</span>
            <ExpandMore />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} fontFamily={"Gilroy"}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </header>
      <Sidebar items={sideBarItems} setSideBarItems={setSideBarItems} />
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
